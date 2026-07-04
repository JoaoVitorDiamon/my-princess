import { useState } from 'react'

type MemoryCardProps = {
  title: string
  imageAlt: string
  imageUrl: string
  revealText: string
  revealIcon: string
  stringHeightRem: number
  className?: string
  alternateAnimation?: boolean
  iconCluster?: boolean
}

export function MemoryCard({
  title,
  imageAlt,
  imageUrl,
  revealText,
  revealIcon,
  stringHeightRem,
  className,
  alternateAnimation = false,
  iconCluster = false,
}: MemoryCardProps) {
  const [revealed, setRevealed] = useState(false)
  const stringStyle = {
    height: `${stringHeightRem}rem`,
    top: `-${stringHeightRem}rem`,
  }
  const pinStyle = {
    top: `-${stringHeightRem}rem`,
  }

  return (
    <div
      className={`chapter-polaroid group relative w-64 cursor-pointer md:w-72 ${
        alternateAnimation ? 'chapter-polaroid-alt' : ''
      } ${className ?? ''}`}
      onClick={() => setRevealed((value) => !value)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          setRevealed((value) => !value)
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={revealed}
      aria-label={`Revelar lembrança: ${title}`}
    >
      <div
        className="absolute left-1/2 z-0 w-px -translate-x-1/2 bg-on-surface-variant/30"
        style={stringStyle}
      />
      <div
        className="absolute left-1/2 z-10 h-2 w-2 -translate-x-1/2 rounded-full bg-secondary-container shadow-sm"
        style={pinStyle}
      />

      <div className="relative z-10 overflow-hidden rounded border border-surface-variant/20 bg-secondary p-4 pb-12 shadow-[0_10px_30px_-10px_rgba(26,11,46,0.5)] transition-transform duration-500 group-hover:scale-105">
        <div className="relative mb-4 aspect-square overflow-hidden rounded-sm bg-surface-dim">
          <img
            className="h-full w-full object-cover opacity-90 mix-blend-luminosity transition-opacity duration-500 group-hover:opacity-100 group-hover:mix-blend-normal"
            src={imageUrl}
            alt={imageAlt}
          />
        </div>

        <p className="text-center font-script-accent text-script-accent italic text-on-secondary opacity-80">
          {title}
        </p>

        <div
          className={`chapter-vellum-texture absolute inset-0 flex flex-col items-center justify-center bg-secondary p-6 text-center transition-opacity duration-700 ${
            revealed ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="mb-4 font-script-accent text-script-accent leading-relaxed text-on-secondary">
            {revealText}
          </p>

          {iconCluster ? (
            <div className="flex gap-2 text-tertiary-container">
              <span className="material-symbols-outlined text-sm">
                {revealIcon}
              </span>
              <span className="material-symbols-outlined text-sm">
                {revealIcon}
              </span>
            </div>
          ) : (
            <div className="text-tertiary-container">
              <span className="material-symbols-outlined">{revealIcon}</span>
            </div>
          )}
        </div>

        <div className="pointer-events-none absolute inset-0 rounded shadow-[inset_0_0_20px_rgba(255,219,60,0)] transition-shadow duration-500 group-hover:shadow-[inset_0_0_20px_rgba(255,219,60,0.15)]" />
      </div>
    </div>
  )
}
