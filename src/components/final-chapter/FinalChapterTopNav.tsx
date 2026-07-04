import { Link } from 'react-router-dom'

export function FinalChapterTopNav() {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-transparent px-page-margin-mobile py-6 transition-all duration-300 md:px-page-margin-desktop">
      <Link
        to="/"
        className="font-script-accent text-script-accent text-primary italic transition-opacity hover:opacity-80"
      >
        Starlit Chronicles
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        <Link
          to="/"
          className="font-medium text-on-surface-variant transition-colors duration-300 hover:text-primary"
        >
          Prologue
        </Link>
        <Link
          to="/capitulo-3"
          className="font-medium text-on-surface-variant transition-colors duration-300 hover:text-primary"
        >
          Memories
        </Link>
        <a
          href="#"
          className="font-medium text-on-surface-variant transition-colors duration-300 hover:text-primary"
        >
          The Sky
        </a>
        <Link
          to="/capitulo-final"
          className="border-b-2 border-primary pb-1 font-bold text-primary transition-transform"
        >
          The Envelope
        </Link>
      </nav>

      <button
        type="button"
        className="text-primary transition-opacity hover:opacity-80 md:hidden"
        aria-label="Abrir navegação"
      >
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 0" }}
        >
          menu_book
        </span>
      </button>
    </header>
  )
}
