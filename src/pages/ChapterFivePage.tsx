import { CursorSparkles } from '../components/chapter-five/CursorSparkles'
import { InkFlourish } from '../components/chapter-five/InkFlourish'
import { ParchmentLetter } from '../components/chapter-five/ParchmentLetter'

export function ChapterFivePage() {
  return (
    <div className="letter-page-bg min-h-screen overflow-x-hidden font-body-md text-on-background antialiased selection:bg-primary selection:text-on-primary">
      <CursorSparkles />


      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-page-margin-mobile pt-[120px] pb-section-gap md:px-page-margin-desktop">
        <div className="mb-8 flex justify-center">
          <InkFlourish />
        </div>

        <ParchmentLetter
          ctaLabel="Seguir para o Capítulo Final"
          ctaTo="/capitulo-final"
        />

        <div className="mt-8 flex justify-center">
          <InkFlourish mirrored />
        </div>
      </main>

    </div>
  )
}
