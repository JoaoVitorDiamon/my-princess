import { useMemo } from 'react'
import type { CSSProperties } from 'react'

type ChapterThreeFirefliesProps = {
  count: number
}

type ChapterThreeFireflyStyle = CSSProperties & {
  '--chapter-firefly-top': string
  '--chapter-firefly-left': string
  '--chapter-firefly-delay': string
  '--chapter-firefly-duration': string
}

export function ChapterThreeFireflies({
  count,
}: ChapterThreeFirefliesProps) {
  const fireflies = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        id: `${index}-${Math.round(Math.random() * 1000)}`,
        style: {
          '--chapter-firefly-top': `${Math.random() * 100}vh`,
          '--chapter-firefly-left': `${Math.random() * 100}vw`,
          '--chapter-firefly-delay': `${Math.random() * 5}s`,
          '--chapter-firefly-duration': `${3 + Math.random() * 4}s`,
        } as ChapterThreeFireflyStyle,
      })),
    [count],
  )

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {fireflies.map((firefly) => (
        <span
          key={firefly.id}
          className="chapter-three-firefly"
          style={firefly.style}
        />
      ))}
    </div>
  )
}
