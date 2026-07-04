import { FinalAtmosphere } from '../components/final-chapter/FinalAtmosphere'
import { FinalBook } from '../components/final-chapter/FinalBook'
import { FinalCursorTrail } from '../components/final-chapter/FinalCursorTrail'
import { RevealSection } from '../components/final-chapter/RevealSection'

export function FinalChapterPage() {
  return (
    <div className="min-h-[3072px] overflow-x-hidden bg-background font-body-md text-body-md text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container">
      <FinalAtmosphere />
      <FinalCursorTrail />

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center space-y-[409px] px-page-margin-mobile py-32 md:px-page-margin-desktop">
        <RevealSection className="flex min-h-[512px] max-w-3xl flex-col items-center justify-center text-center">
          <div className="relative mb-12">
            <div className="mx-auto h-12 w-8 animate-pulse rounded-md bg-secondary-container shadow-[0_0_40px_10px_rgba(255,219,60,0.8),inset_0_0_15px_#ffe16d]" />
          </div>

          <div className="final-vellum-panel relative rounded-2xl p-8 md:p-16">
            <div className="absolute top-4 left-4 h-4 w-4 border-t border-l border-primary opacity-50" />
            <div className="absolute top-4 right-4 h-4 w-4 border-t border-r border-primary opacity-50" />
            <div className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-primary opacity-50" />
            <div className="absolute right-4 bottom-4 h-4 w-4 border-b border-r border-primary opacity-50" />

            <h1 className="final-glow-text mb-8 font-display-hero text-headline-lg text-primary md:text-display-hero">
              O Encontro
            </h1>
            <p className="font-script-accent text-script-accent text-on-surface-variant md:text-[32px] md:leading-[40px]">
              "Algumas histórias não começam com um grande acontecimento.
              <br />
              <br />
              Elas começam com um simples momento que muda tudo."
            </p>

            <div className="mt-12 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary opacity-50" />
              <span
                className="material-symbols-outlined text-sm text-secondary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                flare
              </span>
              <span
                className="material-symbols-outlined text-secondary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-sm text-secondary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                flare
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary opacity-50" />
            </div>
          </div>
        </RevealSection>

        <RevealSection className="flex min-h-[512px] w-full flex-col items-center justify-center">
          <FinalBook />
          <p className="max-w-xl text-center font-body-lg text-body-lg text-surface-tint opacity-80">
           A Nossa historia não começa totalmente aqui. Mais ela ganha um novo inicio aqui.
           Aguarde minha princesa, o seu pedido de namoro começa aqui.
          </p>
        </RevealSection>

        <RevealSection className="flex min-h-[614px] flex-col items-center justify-center pb-32 text-center">
          <div className="mb-8 flex items-center justify-center gap-2">
            <span
              className="material-symbols-outlined text-xs text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
            <span
              className="material-symbols-outlined text-xs text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              auto_awesome
            </span>
          </div>

          <h3 className="final-glow-text font-script-accent text-[36px] leading-[44px] tracking-wide text-primary italic md:text-[48px] md:leading-[60px]">
            "Você sabe o mes, mais sabe o dia? rs..."
          </h3>
        </RevealSection>
      </main>
    </div>
  )
}
