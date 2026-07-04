import { Link } from 'react-router-dom'
import { ChapterTwoFooter } from '../components/chapter-two/ChapterTwoFooter'
import { ChapterTwoNav } from '../components/chapter-two/ChapterTwoNav'
import { StoryPanel } from '../components/chapter-two/StoryPanel'

const navItems = [
  { label: 'Prologue', href: '#' },
  { label: 'Our Story', href: '#', active: true },
  { label: 'Memories', href: '#' },
  { label: 'The Sky', href: '#' },
]

const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Our Promise', href: '#' },
]

const villageImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB2PfBqOtqUr4t1XgQgELWWbx2qH27y80Y2DINqvuYHMXcy7hhy_xdpNiDSjQwnTTKf9926ecMlpTzHI6oQjSLDzBmbro-hdr-Mw6nhKprYj_NejVqD0AAgO-R-hI_ow4uk2HoukWJC-JL14uuAe8AQJAJflziuqpox8Caq0Ivtc_4dChQO6OK2VmgsL2sKTN5iRWgk4NTKJna_kq-O_ghsA3CCjlEuG_RV_l3Y1yIGAiV-HXCvAvEX1st2dw9Xo_eCbINzVQmT-YA'

const forestImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB6rfAGmrNQeCfdunIYhZuifuQKDbRCbfrpX4DCf_ILSgJQoMwup_9ufX5z4peotmaX3MWIjbpwzoAI-cB2wq0pXbrfd-yH8bxpvQHHPr_6DOgkO7fwI9oYT5eQXNG-bzWBzhwcbc5jvlkjAY77X48ehAfiCrOmKNlmzilOVhc5mimiCOlYogYUi-9apo2VsQ9kAeHN2_oe4Z0b4BUW9gZY7AjkGiFdMdfWXGT9iosklrLjyY7Np5hbVPwv2O9Gejjt4WUo-fi-fck'

export function ChapterTwoPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background font-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <div className="texture-overlay fixed inset-0 z-50" />
      <div
        className="pointer-events-none fixed inset-0 opacity-20"
        style={{
          background:
            'radial-gradient(circle at 50% -20%, rgba(112, 66, 142, 0.65) 0%, transparent 60%)',
        }}
      />


      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-grow flex-col items-stretch justify-center gap-element-gap px-page-margin-mobile pt-[100px] pb-section-gap md:flex-row md:px-page-margin-desktop">
        <StoryPanel
          chapterLabel="Capítulo II"
          title="Como começou Nossa História"
          showDivider
          ornamentPosition="top-left"
          containerClassName="bg-surface-container-low/90 backdrop-blur-sm"
          body={[
            'Tudo começou em uma tarde de um domingo, onde tudo parecia normal, ate aquele fatidico jogo do dia 17 de agosto de 2025, Santos 0 x 6 Vasco onde curiosamente uma senhorinha me colocou no Close Friends do Instagram. Ali eu achei estranho, mas nada de mais. Mas logo depois, tudo mudou, respondi a sua provocação e então começamos a conversar. Mal sabia que ali tudo mudaria para sempre.',
          ]}
          image={{
            url: villageImage,
            alt: 'Ilustração em aquarela de uma vila medieval ao entardecer com lanternas douradas e céu violeta.',
            heightClassName: 'h-64',
          }}
        />

        <StoryPanel
          quote='"E de repente, tudo pareceu mais colorido ao seu lado..."'
          ornamentPosition="bottom-right"
          containerClassName="mt-12 bg-surface-container-lowest/80 backdrop-blur-md md:mt-0 md:translate-y-12"
          body={[
            'Conversa vem e vai, a quando menos esperava ja estava completamente apaixonado por cada detalhe em você. O seu jeito de ser, o seu humor, o seu jeito de me fazer sorrir. A cada dia que passava, cada vez mais eu me sentia mais próximo de você, mas ainda não tinha certeza se você sentia o mesmo. Mas logo depois, quando saimos a primeira vez. Mal sabia que ali tudo mudaria para sempre.',
          ]}
          image={{
            url: forestImage,
            alt: 'Pintura em aquarela de uma floresta mágica noturna com vagalumes e trilha iluminada.',
            heightClassName: 'h-80',
          }}
          footerAction={
            <Link
              to="/capitulo-3"
              className="gilded-glow flex items-center space-x-2 rounded-full bg-primary-fixed px-6 py-3 font-label-caps text-label-caps tracking-widest text-on-primary-fixed-variant transition-colors duration-300 hover:bg-primary-container hover:text-on-primary-container"
            >
              <span>Avançar</span>
              <span className="material-symbols-outlined">east</span>
            </Link>
          }
        />
      </main>


    </div>
  )
}
