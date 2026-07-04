type FinalChapterFooterProps = {
  links: Array<{
    label: string
    href: string
  }>
}

export function FinalChapterFooter({ links }: FinalChapterFooterProps) {
  return (
    <footer className="w-full bg-transparent px-page-margin-mobile py-12 text-center">
      <div className="mb-6 font-label-caps text-label-caps tracking-widest text-on-surface-variant">
        <span className="material-symbols-outlined mx-auto mb-2 block text-primary text-opacity-50">
          auto_awesome
        </span>
      </div>
      <nav className="mb-8 flex justify-center gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-script-accent text-script-accent text-on-surface-variant opacity-80 transition-all hover:text-primary"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <p className="font-script-accent text-script-accent text-tertiary">
        © MMXIV Written in the Stars
      </p>
    </footer>
  )
}
