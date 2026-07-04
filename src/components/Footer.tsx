type FooterLink = {
  label: string
  href: string
}

type FooterProps = {
  title: string
  caption: string
  links: FooterLink[]
}

export function Footer({ title, caption, links }: FooterProps) {
  return (
    <footer className="relative z-40 mt-section-gap flex w-full flex-col items-center gap-element-gap bg-transparent px-page-margin-mobile pb-10 font-label-caps text-label-caps text-on-surface-variant md:px-page-margin-desktop">
      <div className="mb-4 font-script-accent text-script-accent text-primary">
        {title}
      </div>

      <div className="mb-4 flex flex-wrap justify-center gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-outline opacity-70 transition-opacity duration-500 hover:text-primary hover:opacity-100"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="text-xs opacity-50">{caption}</div>
    </footer>
  )
}
