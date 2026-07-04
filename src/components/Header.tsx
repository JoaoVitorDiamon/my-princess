type HeaderItem = {
  label: string
  href: string
  active?: boolean
}

type HeaderProps = {
  title: string
  items: HeaderItem[]
}

export function Header({ title, items }: HeaderProps) {
  return (
    <header className="fixed top-0 z-40 flex w-full items-center justify-between bg-gradient-to-b from-surface-dim/80 to-transparent px-page-margin-mobile py-8 md:px-page-margin-desktop">
      <div className="font-display-hero text-display-hero-mobile text-primary drop-shadow-[0_2px_4px_rgba(112,66,142,0.5)] md:text-display-hero">
        {title}
      </div>

      <nav className="hidden gap-element-gap md:flex">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={
              item.active
                ? 'border-b-2 border-secondary pb-1 font-script-accent text-script-accent text-secondary'
                : 'font-script-accent text-script-accent text-on-surface-variant transition-colors duration-500 hover:text-secondary'
            }
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
