import { Link } from 'react-router-dom'
import { DecorativeImage } from '../components/chapter-four/DecorativeImage'
import { DetailCard } from '../components/chapter-four/DetailCard'

const detailCards = [
  {
    index: '01',
    icon: 'favorite',
    quote:
      '"O jeito como você sorri independente de como voce esta se sentindo."',
    layoutClassName: 'md:col-span-5 md:col-start-2',
    floatVariant: 'detail-float-1' as const,
    minHeightClassName: 'min-h-[250px]',
  },
  {
    index: '02',
    icon: 'local_florist',
    quote:
      '"A mania de tocar no seu cabelo sempre quando conversamos."',
    layoutClassName: 'mt-12 md:col-span-4 md:col-start-8 md:mt-24',
    floatVariant: 'detail-float-2' as const,
    minHeightClassName: 'min-h-[200px]',
  },
  {
    index: '03',
    icon: 'wb_twilight',
    quote:
      '"O seu jeito de leve de ser, e a sua forma de me fazer sorrir."',
    layoutClassName: 'mt-8 md:col-span-6 md:col-start-4 md:-mt-12',
    floatVariant: 'detail-float-3' as const,
    minHeightClassName: 'min-h-[280px]',
    paddingClassName: 'p-10',
    textClassName: 'md:text-[28px]',
  },
  {
    index: '04',
    icon: 'music_note',
    quote:
      '"Os seus olhos apaixantes"',
    layoutClassName: 'mt-12 md:col-span-4 md:col-start-1 md:mt-8',
    floatVariant: 'detail-float-2' as const,
    minHeightClassName: 'min-h-[220px]',
  },
]

const decorativeImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCTC7RG5DSMEj7TtfHWohJUJaaKsz-9fsaYL5zJ9O5zt52zIgRNK9N6ZvkbRFGVSNSKrCOm6hu3By1TGZkoqn2zZ6hsbPsC_tTWKhHgR-0O-cNRoFkJUVLAfQG3Eu1vIBqynfWvZxHyDDLWM9MIFLOf6IuQ8WVIZAFXo8zfJ4oTH9TqzojzrwCk-9Wr2ZrMeUzoGkGBMK7bM0gNxcqIFnJ2ENNbeWD3tgOXPLShnzXwM77SkFIaIGn51NMXzCjll2rsU9L6zjvexAw'

export function ChapterFourPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <div className="detail-page-bg fixed inset-0 -z-10" />


      <main className="relative min-h-screen px-page-margin-mobile pt-32 pb-section-gap md:ml-64 md:px-page-margin-desktop">
        <div
          className="pointer-events-none absolute inset-0 opacity-20 mix-blend-screen"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, #e4b5ff 0%, transparent 40%), radial-gradient(circle at 80% 70%, #ffdb3c 0%, transparent 40%)',
          }}
        />

        <header className="relative z-10 mb-24 text-center">
          <h1 className="mb-4 font-display-hero text-display-hero-mobile text-primary md:text-display-hero">
            Capítulo IV
          </h1>
          <div className="mb-6 flex items-center justify-center space-x-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-secondary-fixed" />
            <span className="material-symbols-outlined text-sm text-secondary-fixed">
              stars
            </span>
            <span className="material-symbols-outlined text-sm text-secondary-fixed">
              stars
            </span>
            <span className="material-symbols-outlined text-sm text-secondary-fixed">
              stars
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary-fixed" />
          </div>
          <h2 className="text-headline-md font-display-hero text-on-surface opacity-90 md:text-headline-lg">
            Os Motivos
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-script-accent text-script-accent italic text-on-surface-variant">
            Por qual eu te amo.
          </p>
        </header>

        <section className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-element-gap md:grid-cols-12">
          {detailCards.map((card) => (
            <DetailCard key={card.index} {...card} />
          ))}

          <DecorativeImage
            className="mt-8 md:col-span-3 md:col-start-9 md:mt-0"
            imageUrl={decorativeImage}
            alt="Pintura em aquarela abstrata com lavanda, creme e dourado suave, evocando um céu crepuscular etéreo."
          />
        </section>

        <div className="relative z-10 mt-16 flex justify-center">
          <Link
            to="/capitulo-5"
            className="gilded-glow flex items-center gap-2 rounded-full bg-primary-fixed px-6 py-3 font-label-caps text-label-caps tracking-widest text-on-primary-fixed-variant transition-colors duration-300 hover:bg-primary-container hover:text-on-primary-container"
          >
            <span>Ler Capítulo V</span>
            <span className="material-symbols-outlined">east</span>
          </Link>
        </div>
      </main>

    </div>
  )
}
