type FooterLink = {
  label: string
  href: string
}

type ChapterTwoFooterProps = {
  title: string
  subtitle: string
  links: FooterLink[]
}

export function ChapterTwoFooter({
  title,
  subtitle,
  links,
}: ChapterTwoFooterProps) {
  return (
    <footer className="relative z-20 flex w-full flex-col items-center justify-center bg-transparent px-page-margin-mobile py-12 text-center md:px-page-margin-desktop">
      <div className="mb-4 font-label-caps text-label-caps tracking-widest text-primary">
        {title}
      </div>
      <p className="mb-6 font-script-accent text-script-accent text-tertiary">
        {subtitle}
      </p>
      <div className="flex space-x-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-on-surface-variant opacity-80 transition-colors duration-300 hover:text-primary"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
