import { Link } from 'react-router-dom'
import image1 from '../assets/1.jpeg'
import image2 from '../assets/2.jpeg'
import image3 from '../assets/3.jpeg'
import image4 from '../assets/4.jpeg'
import { ChapterThreeFireflies } from '../components/chapter-three/ChapterThreeFireflies'
import { MemoryCard } from '../components/chapter-three/MemoryCard'

const memories = [
  {
    title: 'A Primeiro Conversa',
    imageAlt:
      'Fotografia em estilo polaroid de uma carta de amor manuscrita sobre uma mesa de madeira com chá e lavanda.',
    imageUrl: image1,
    revealText: '"Guardo este momento pois foi um dos mais importantes da minha vida."',
    revealIcon: 'local_florist',
    stringHeightRem: 4,
  },
  {
    title: 'A Primeira Saida',
    imageAlt:
      'Fotografia polaroid de duas mãos segurando uma pequena lanterna de vidro dourada ao entardecer.',
    imageUrl: image2,
    revealText: 'Ao sair pela primeira vez, ali tive a certeza que era o amor da minha vida.',
    revealIcon: 'auto_awesome',
    stringHeightRem: 6,
    className: 'mt-12 md:mt-24',
    alternateAnimation: true,
    iconCluster: true,
  },
  {
    title: 'Onde tudo mudou',
    imageAlt:
      'Fotografia polaroid de flores silvestres prensadas entre as páginas de um velho diário de couro.',
    imageUrl: image3,
    revealText: 'O tempo parou neste momento. Voce estava divina, e eu estava completamente apaixonado por você.',
    revealIcon: 'filter_vintage',
    stringHeightRem: 3,
  },
  {
    title: 'O Primeiro Eu Te Amo',
    imageAlt:
      'Fotografia polaroid de um lago silencioso refletindo um céu estrelado em tons de violeta e azul profundo.',
    imageUrl: image4,
    revealText: 'Ali voce disse que me amava. e eu fiquei completamente encantado.',
    revealIcon: 'water',
    stringHeightRem: 5,
    className: 'mt-8 md:mt-16',
    alternateAnimation: true,
  },
]

export function ChapterThreePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-body-md text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <div className="fixed inset-0 z-[-2] bg-gradient-to-br from-[#2a1b3d] via-[#1a0b2e] to-[#151408]" />
      <div className="chapter-vellum-texture fixed inset-0 z-[-1] opacity-30" />
      <ChapterThreeFireflies count={30} />

      <main className="relative z-10 flex min-h-screen flex-col items-center px-page-margin-mobile pt-24 pb-32 md:ml-64 md:px-page-margin-desktop md:pt-32">
        <header className="mx-auto mb-16 max-w-2xl text-center md:mb-24">
          <h1 className="mb-6 font-display-hero text-display-hero-mobile text-primary drop-shadow-[0_0_15px_rgba(228,181,255,0.2)] md:text-display-hero">
            Capítulo III
          </h1>
          <p className="text-xl font-script-accent text-script-accent italic tracking-wide text-on-surface md:text-2xl">
            Pequenas Lembranças
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <span className="material-symbols-outlined text-sm text-secondary-fixed opacity-50">
              star
            </span>
            <span className="material-symbols-outlined text-sm text-secondary-fixed opacity-80">
              star
            </span>
            <span className="material-symbols-outlined text-sm text-secondary-fixed opacity-50">
              star
            </span>
          </div>
        </header>

        <div className="mx-auto flex w-full max-w-6xl flex-wrap justify-center gap-8 pt-8 pb-32 md:gap-16">
          {memories.map((memory) => (
            <MemoryCard key={memory.title} {...memory} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="animate-pulse text-center font-script-accent text-sm text-on-surface-variant/50 md:text-base">
            Clique nas lembranças para revelar
          </div>

          <Link
            to="/capitulo-4"
            className="gilded-glow flex items-center gap-2 rounded-full bg-primary-fixed px-6 py-3 font-label-caps text-label-caps tracking-widest text-on-primary-fixed-variant transition-colors duration-300 hover:bg-primary-container hover:text-on-primary-container"
          >
            <span>Ir para Capítulo IV</span>
            <span className="material-symbols-outlined">east</span>
          </Link>
        </div>
      </main>

    </div>
  )
}
