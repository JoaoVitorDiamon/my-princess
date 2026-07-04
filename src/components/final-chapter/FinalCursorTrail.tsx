import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

type TrailSpark = {
  id: number
  x: number
  y: number
  offsetX: number
  offsetY: number
}

export function FinalCursorTrail() {
  const [sparks, setSparks] = useState<TrailSpark[]>([])
  const lastMouseTimeRef = useRef(0)
  const sparkIdRef = useRef(0)
  const mountedRef = useRef(true)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now()

      if (now - lastMouseTimeRef.current <= 50) {
        return
      }

      lastMouseTimeRef.current = now

      const spark = {
        id: sparkIdRef.current++,
        x: event.clientX,
        y: event.clientY,
        offsetX: (Math.random() - 0.5) * 20,
        offsetY: (Math.random() - 0.5) * 20,
      }

      setSparks((current) => [...current, spark])

      window.setTimeout(() => {
        if (!mountedRef.current) {
          return
        }

        setSparks((current) => current.filter((entry) => entry.id !== spark.id))
      }, 1000)
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      mountedRef.current = false
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      {sparks.map((spark) => {
        const style = {
          left: `${spark.x}px`,
          top: `${spark.y}px`,
          '--final-spark-offset-x': `${spark.offsetX}px`,
          '--final-spark-offset-y': `${spark.offsetY}px`,
        } as CSSProperties

        return <span key={spark.id} className="final-cursor-spark" style={style} />
      })}
    </>
  )
}
