import { useMemo } from 'react'
import type { CSSProperties } from 'react'

type LanternStyle = CSSProperties & {
  '--final-lantern-scale': number
}
type ParticleStyle = CSSProperties

export function FinalAtmosphere() {
  const lanterns = useMemo(
    () =>
      Array.from({ length: 40 }, () => {
        const clusterCenter = Math.random() > 0.7
        const left = clusterCenter ? 40 + Math.random() * 20 : Math.random() * 100
        const duration = 15 + Math.random() * 20
        const swayDuration = 3 + Math.random() * 4
        const delay = Math.random() * 10
        const swayDelay = Math.random() * 2
        const scale = 0.5 + Math.random() * 0.8

        return {
          left: `${left}vw`,
          animationDuration: `${duration}s, ${swayDuration}s`,
          animationDelay: `-${delay}s, -${swayDelay}s`,
          '--final-lantern-scale': scale,
          zIndex: clusterCenter ? -1 : 0,
        } satisfies LanternStyle
      }),
    [],
  )

  const particles = useMemo(
    () =>
      Array.from({ length: 60 }, () => {
        const left = Math.random() * 100
        const top = 50 + Math.random() * 50
        const duration = 5 + Math.random() * 15
        const delay = Math.random() * 5

        return {
          left: `${left}vw`,
          top: `${top}vh`,
          animationDuration: `${duration}s`,
          animationDelay: `-${delay}s`,
        } satisfies ParticleStyle
      }),
    [],
  )

  return (
    <>
      <div className="final-night-sky" />
      <div className="final-texture-overlay" />

      <div className="pointer-events-none fixed inset-0 z-0">
        {lanterns.map((style, index) => (
          <span key={`lantern-${index}`} className="final-lantern" style={style} />
        ))}
      </div>

      <div className="pointer-events-none fixed inset-0 z-0">
        {particles.map((style, index) => (
          <span key={`particle-${index}`} className="final-particle" style={style} />
        ))}
      </div>
    </>
  )
}
