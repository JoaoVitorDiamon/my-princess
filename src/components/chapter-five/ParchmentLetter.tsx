import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { RevealParagraph } from './RevealParagraph'

const paragraphs = [
  'Meu amor,',
  'Escrevo estas palavras totalmente encantado com a sua pessoa. A sua presença me faz sentir que sou o unico homem no mundo. O Frio na barriga quando eu te vejo, o nervosismo quando voce me diz que te ama, o calor que sente quando voce me diz que quer ficar comigo. E eu sou o mais feliz do mundo.',
  'Você é a minha luz, a minha estrela, a minha lua. Eu sou completamente encantado com a sua pessoa, e eu sou completamente apaixonado por você.',
  'Você é a poesia mais linda que eu já li. A Obra de arte mais linda que ja toquei. E a Canção mais linda que ja ouvi.',
  'Você me encanta a cada dia mais pela sua persistencia, sua força, sua coragem, sua vontade de ser a melhor pessoa que você pode ser.',
  'Se eu falasse que apenas te amava é mentira, eu nao so te amo, eu te vivo para sempre.',
  'Você vai ser a melhor esposa que alguem pode ter, a melhor PM que a Policia Militar de SP pode ter. A Melhor mae que nossos filhos vão ter. A Melhor amiga que eu ja tive. A Melhor pessoa que eu ja conheci.',
  'Entao eu posso te dizer que tudo aquilo que você e representa é impossivel ser explicado por palavras. E eu sou o mais feliz do mundo por ter você em minha vida.',
  'Eu te vivo minha vida. E eu te amo para sempre.',
  'Eu te amo para sempre.',
  'Eu te amo para sempre.',
]

type ParchmentLetterProps = {
  ctaLabel: string
  ctaTo: string
}

export function ParchmentLetter({ ctaLabel, ctaTo }: ParchmentLetterProps) {
  const [transform, setTransform] = useState('perspective(1000px) rotateX(2deg)')
  const letterRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!letterRef.current) {
        return
      }

      const xAxis = (window.innerWidth / 2 - event.pageX) / 50
      const yAxis = (window.innerHeight / 2 - event.pageY) / 50

      const limitedX = Math.max(-5, Math.min(5, xAxis))
      const limitedY = Math.max(-5, Math.min(5, yAxis))

      setTransform(
        `perspective(1000px) rotateY(${limitedX}deg) rotateX(${limitedY}deg)`,
      )
    }

    const handleMouseLeave = () => {
      setTransform('perspective(1000px) rotateX(2deg)')
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <article
      ref={letterRef}
      className="parchment relative mx-auto w-full max-w-3xl overflow-hidden rounded-xl p-8 backdrop-blur-[2px] md:p-16"
      style={{ transform }}
    >
      <div className="absolute top-4 left-4 h-8 w-8 border-t border-l border-secondary-container opacity-50" />
      <div className="absolute top-4 right-4 h-8 w-8 border-t border-r border-secondary-container opacity-50" />
      <div className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-secondary-container opacity-50" />
      <div className="absolute right-4 bottom-4 h-8 w-8 border-b border-r border-secondary-container opacity-50" />

      <header className="mb-12 text-center">
        <h1 className="mb-4 font-display-hero text-headline-md text-on-tertiary-fixed-variant md:text-headline-lg">
          Capítulo V
        </h1>
        <p className="font-label-caps text-label-caps tracking-widest text-on-secondary-fixed-variant opacity-70">
          Uma Carta
        </p>
      </header>

      <div className="ink-text space-y-6 font-script-accent text-script-accent leading-[2]">
        {paragraphs.map((paragraph, index) => (
          <RevealParagraph key={paragraph} delayMs={index * 200}>
            {paragraph}
          </RevealParagraph>
        ))}

        <RevealParagraph delayMs={paragraphs.length * 200} className="mt-12 text-right">
          <>
            Sempre teu,
            <br />
            <span className="ml-4 font-bold italic">Joao Vitor Diamon.</span>
          </>
        </RevealParagraph>
      </div>

      <div className="relative z-20 mt-16 flex justify-center">
        <Link
          to={ctaTo}
          className="group flex items-center gap-3 rounded-full border border-secondary-container bg-surface-container-highest px-8 py-3 font-label-caps text-label-caps tracking-widest text-on-surface transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[inset_0_0_15px_rgba(255,219,60,0.3)]"
        >
          <span className="material-symbols-outlined text-secondary-container transition-transform group-hover:scale-110">
            favorite
          </span>
          {ctaLabel}
        </Link>
      </div>
    </article>
  )
}
