import { useMemo } from 'react'
import type { CSSProperties } from 'react'

type FirefliesProps = {
  count: number
}

type FireflyStyle = CSSProperties & {
  '--firefly-left': string
  '--firefly-top': string
  '--firefly-size': string
  '--firefly-delay': string
  '--firefly-duration': string
}

export function Fireflies({ count }: FirefliesProps) {
  const fireflies = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        id: `${index}-${Math.round(Math.random() * 1000)}`,
        style: {
          '--firefly-left': `${Math.random() * 100}%`,
          '--firefly-top': `${Math.random() * 100}%`,
          '--firefly-size': `${Math.random() * 4 + 2}px`,
          '--firefly-delay': `${Math.random() * 5}s`,
          '--firefly-duration': `${Math.random() * 3 + 2}s`,
        } as FireflyStyle,
      })),
    [count],
  )

  return (
    <div className="pointer-events-none absolute inset-0 z-20">
      {fireflies.map((firefly) => (
        <span key={firefly.id} className="firefly" style={firefly.style} />
      ))}
    </div>
  )
}
