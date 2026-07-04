import { Link } from 'react-router-dom'

type SidebarItem = {
  label: string
  icon: string
  active?: boolean
  to?: string
  href?: string
}

type ChapterThreeSidebarProps = {
  items: SidebarItem[]
}

export function ChapterThreeSidebar({ items }: ChapterThreeSidebarProps) {
  return (
    <aside className="fixed top-0 left-0 z-[60] hidden h-full w-64 flex-col rounded-r-xl bg-surface-container shadow-md backdrop-blur-md md:flex">
      <div className="flex flex-col items-center border-b border-surface-variant/30 p-8 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-primary-container/20">
          <span className="material-symbols-outlined text-3xl text-primary">
            history_edu
          </span>
        </div>
        <h2 className="font-display-hero text-headline-md text-primary">
          The Chapters
        </h2>
        <p className="mt-2 font-script-accent text-script-accent italic text-on-surface-variant">
          A Romantic Journey
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.label}>
              {item.to ? (
                <Link
                  to={item.to}
                  className={
                    item.active
                      ? 'flex items-center gap-4 rounded-lg bg-primary-container/20 px-4 py-3 font-bold text-primary transition-colors hover:bg-surface-variant/50'
                      : 'flex items-center gap-4 rounded-lg px-4 py-3 text-on-surface-variant transition-colors hover:bg-surface-variant/50'
                  }
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span className="font-body-md text-body-md">{item.label}</span>
                </Link>
              ) : (
                <a
                  href={item.href ?? '#'}
                  className={
                    item.active
                      ? 'flex items-center gap-4 rounded-lg bg-primary-container/20 px-4 py-3 font-bold text-primary transition-colors hover:bg-surface-variant/50'
                      : 'flex items-center gap-4 rounded-lg px-4 py-3 text-on-surface-variant transition-colors hover:bg-surface-variant/50'
                  }
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span className="font-body-md text-body-md">{item.label}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
