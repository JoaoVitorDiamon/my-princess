import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, MouseEvent } from 'react'

type Particle = {
  id: number
  x: number
  y: number
  size: number
  duration: number
}

type DetailCardProps = {
  index: string
  icon: string
  quote: string
  layoutClassName: string
  floatVariant: 'detail-float-1' | 'detail-float-2' | 'detail-float-3'
  minHeightClassName: string
  paddingClassName?: string
  textClassName?: string
}

export function DetailCard({
  index,
  icon,
  quote,
  layoutClassName,
  floatVariant,
  minHeightClassName,
  paddingClassName = 'p-8',
  textClassName = '',
}: DetailCardProps) {
  const [particles, setParticles] = useState<Particle[]>([])
  const particleIdRef = useRef(0)
  const lastMoveRef = useRef(0)
  const isMountedRef = useRef(true)

  useEffect(() => {
    return () => {
      isMountedRef.current = false
    }
  }, [])

  const createParticles = (
    event: MouseEvent<HTMLDivElement>,
    amount: number,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const newParticles = Array.from({ length: amount }, () => {
      const id = particleIdRef.current++

      return {
        id,
        x: x + (Math.random() - 0.5) * 40,
        y: y + (Math.random() - 0.5) * 40,
        size: Math.random() * 4 + 2,
        duration: Math.random() + 0.5,
      }
    })

    setParticles((current) => [...current, ...newParticles])

    newParticles.forEach((particle) => {
      window.setTimeout(() => {
        if (!isMountedRef.current) {
          return
        }

        setParticles((current) =>
          current.filter((entry) => entry.id !== particle.id),
        )
      }, particle.duration * 1000)
    })
  }

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const now = Date.now()

    if (now - lastMoveRef.current < 100) {
      return
    }

    lastMoveRef.current = now
    createParticles(event, 1)
  }

  return (
    <div
      className={`${layoutClassName} ${floatVariant} card-hover-effect vellum-bg group relative flex cursor-pointer flex-col justify-center rounded-xl ${paddingClassName} ${minHeightClassName}`}
      onMouseEnter={(event) => createParticles(event, 5)}
      onMouseMove={handleMouseMove}
    >
      <div className="font-label-caps absolute top-4 left-4 text-label-caps text-primary opacity-50">
        {index}
      </div>
      <div className="absolute right-4 bottom-4 text-secondary-fixed opacity-40">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <p
        className={`relative z-10 text-center font-script-accent text-script-accent leading-relaxed italic text-on-secondary-fixed-variant ${textClassName}`}
      >
        {quote}
      </p>

      {particles.map((particle) => {
        const style = {
          left: `${particle.x}px`,
          top: `${particle.y}px`,
          width: `${particle.size}px`,
          height: `${particle.size}px`,
          animation: `sparkle ${particle.duration}s ease-in-out forwards`,
        } satisfies CSSProperties

        return <span key={particle.id} className="detail-particle" style={style} />
      })}
    </div>
  )
}
