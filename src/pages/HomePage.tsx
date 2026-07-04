import { BackgroundShader } from '../components/BackgroundShader'
import { Fireflies } from '../components/Fireflies'
import { HeroEnvelope } from '../components/HeroEnvelope'

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-body-md text-body-md text-on-background selection:bg-primary-container selection:text-on-primary-container">
      <BackgroundShader />
      <div className="paper-texture fixed inset-0 z-50" />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-page-margin-mobile pt-[150px] pb-section-gap md:px-page-margin-desktop">
        <Fireflies count={20} />
        <HeroEnvelope actionLabel="LER CAPÍTULO II" actionTo="/capitulo-2" />
      </main>

    
    </div>
  )
}
