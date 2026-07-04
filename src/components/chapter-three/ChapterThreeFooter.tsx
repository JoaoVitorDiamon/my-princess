type ChapterThreeFooterProps = {
  links: Array<{
    label: string
    href: string
  }>
}

export function ChapterThreeFooter({ links }: ChapterThreeFooterProps) {
  return (
    <footer className="relative z-20 flex w-full flex-col items-center justify-center bg-transparent px-page-margin-mobile py-12 text-center font-script-accent text-script-accent text-tertiary md:ml-64">
      <div className="mb-4 font-label-caps text-label-caps tracking-widest text-primary">
        © MMXIV Written in the Stars
      </div>
      <div className="flex gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-on-surface-variant opacity-80 transition-colors hover:text-primary"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
