import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'

type RevealSectionProps = {
  children: ReactNode
  className?: string
}

export function RevealSection({
  children,
  className = '',
}: RevealSectionProps) {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = sectionRef.current

    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
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
    <section
      ref={sectionRef}
      className={`final-story-reveal ${visible ? 'visible' : ''} ${className}`}
    >
      {children}
    </section>
  )
}
