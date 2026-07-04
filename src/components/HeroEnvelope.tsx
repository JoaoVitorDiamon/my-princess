import { useState } from 'react'
import { Link } from 'react-router-dom'

function Ornament() {
  return (
    <div className="text-secondary-fixed/50">
      <span className="material-symbols-outlined text-sm">spa</span>
    </div>
  )
}

function StarDivider() {
  return (
    <div className="mb-6 flex items-center gap-2">
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-secondary/50" />
      <span
        className="material-symbols-outlined text-xs text-secondary"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        star
      </span>
      <span
        className="material-symbols-outlined text-sm text-secondary"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        star
      </span>
      <span
        className="material-symbols-outlined text-xs text-secondary"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        star
      </span>
      <div className="h-px w-12 bg-gradient-to-l from-transparent to-secondary/50" />
    </div>
  )
}

type HeroEnvelopeProps = {
  actionLabel: string
  actionTo: string
}

export function HeroEnvelope({ actionLabel, actionTo }: HeroEnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative mt-section-gap flex min-h-[614px] w-full max-w-2xl flex-col items-center justify-center">
      <div
        className={`envelope-container group relative z-30 h-48 w-72 cursor-pointer sm:h-64 sm:w-96 ${
          isOpen ? 'is-open' : 'animate-float'
        }`}
        onClick={() => setIsOpen((open) => !open)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            setIsOpen((open) => !open)
          }
        }}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Fechar carta mágica' : 'Abrir carta mágica'}
      >
        <div className="absolute inset-0 overflow-hidden rounded-lg border border-outline-variant/30 bg-surface-container-high shadow-[20px_0px_50px_rgba(26,11,46,0.3)] transition-transform duration-500 group-hover:scale-105">
          <div className="envelope-paper absolute inset-0 opacity-20" />

          <div
            className="envelope-flap absolute top-0 left-0 z-20 h-1/2 w-full border-b border-outline-variant/40 bg-surface-variant"
            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10" />
          </div>

          <div className="seal absolute top-[40%] left-1/2 z-30 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-secondary-fixed bg-primary-container shadow-[0_0_15px_rgba(255,225,109,0.4)] transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(255,225,109,0.7)]">
            <span
              className="material-symbols-outlined text-[32px] text-secondary-fixed"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
          </div>

          <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-full w-full bg-gradient-to-t from-surface-container to-transparent" />
        </div>

        <article className="envelope-letter vellum shadow-soft-ink absolute top-0 right-4 left-4 flex h-64 flex-col items-center justify-center rounded-md border border-secondary-fixed/20 p-8 text-center sm:h-80">
          <div className="absolute top-2 left-2">
            <Ornament />
          </div>
          <div className="absolute top-2 right-2">
            <Ornament />
          </div>
          <div className="absolute bottom-2 left-2">
            <Ornament />
          </div>
          <div className="absolute right-2 bottom-2">
            <Ornament />
          </div>

          <p className="mb-6 font-script-accent text-script-accent leading-relaxed text-on-primary-fixed-variant italic">
            "Bem-vinda a uma história que está apenas começando."
          </p>

          <StarDivider />

          <Link
            to={actionTo}
            onClick={(event) => event.stopPropagation()}
            className="rounded-full border border-secondary/30 bg-primary-container px-6 py-2 font-label-caps text-label-caps tracking-widest text-on-primary-container transition-all duration-500 ease-in-out hover:bg-inverse-primary hover:text-surface hover:shadow-[inset_0_0_10px_rgba(255,225,109,0.3)]"
          >
            {actionLabel}
          </Link>
        </article>
      </div>

      <div className="absolute bottom-[-100px] flex animate-pulse flex-col items-center gap-2 opacity-60">
        <span className="font-label-caps text-xs tracking-widest text-on-surface-variant">
          DESVENDE O MISTÉRIO
        </span>
        <span className="material-symbols-outlined text-on-surface-variant">
          keyboard_arrow_down
        </span>
      </div>
    </section>
  )
}
