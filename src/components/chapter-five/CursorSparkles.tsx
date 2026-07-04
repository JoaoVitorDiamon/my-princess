import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

type Sparkle = {
  id: number
  x: number
  y: number
  size: number
}

export function CursorSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const lastMoveRef = useRef(0)
  const sparkleIdRef = useRef(0)
  const mountedRef = useRef(true)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now()

      if (now - lastMoveRef.current <= 50) {
        return
      }

      lastMoveRef.current = now

      const sparkle = {
        id: sparkleIdRef.current++,
        x: event.clientX + (Math.random() - 0.5) * 20,
        y: event.clientY + (Math.random() - 0.5) * 20,
        size: Math.random() * 3 + 2,
      }

      setSparkles((current) => [...current, sparkle])

      window.setTimeout(() => {
        if (!mountedRef.current) {
          return
        }

        setSparkles((current) => current.filter((entry) => entry.id !== sparkle.id))
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
      {sparkles.map((sparkle) => {
        const style = {
          left: `${sparkle.x}px`,
          top: `${sparkle.y}px`,
          width: `${sparkle.size}px`,
          height: `${sparkle.size}px`,
        } satisfies CSSProperties

        return <span key={sparkle.id} className="letter-sparkle" style={style} />
      })}
    </>
  )
}
