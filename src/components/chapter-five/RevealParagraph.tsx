import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type RevealParagraphProps = {
  children: ReactNode
  delayMs: number
  className?: string
}

export function RevealParagraph({
  children,
  delayMs,
  className = '',
}: RevealParagraphProps) {
  const [revealed, setRevealed] = useState(false)
  const paragraphRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    const element = paragraphRef.current

    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <p
      ref={paragraphRef}
      className={`transition-all duration-1000 ease-out ${className} ${
        revealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </p>
  )
}
