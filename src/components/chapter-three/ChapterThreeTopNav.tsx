import { Link } from 'react-router-dom'

type TopNavItem = {
  label: string
  active?: boolean
  to?: string
  href?: string
}

type ChapterThreeTopNavProps = {
  title: string
  items: TopNavItem[]
}

export function ChapterThreeTopNav({
  title,
  items,
}: ChapterThreeTopNavProps) {
  return (
    <nav
      id="topNav"
      className="fixed z-50 hidden w-full items-center justify-between bg-transparent px-page-margin-desktop py-6 transition-all duration-500 ease-in-out md:flex"
    >
      <Link
        to="/"
        className="font-script-accent text-script-accent text-primary italic transition-opacity duration-300 hover:opacity-80"
      >
        {title}
      </Link>

      <ul className="flex items-center gap-element-gap">
        {items.map((item) => (
          <li key={item.label}>
            {item.to ? (
              <Link
                to={item.to}
                className={
                  item.active
                    ? 'border-b-2 border-primary pb-1 font-bold text-primary transition-colors duration-300 hover:text-primary'
                    : 'font-medium text-on-surface-variant transition-colors duration-300 hover:text-primary'
                }
              >
                {item.label}
              </Link>
            ) : (
              <a
                href={item.href ?? '#'}
                className={
                  item.active
                    ? 'border-b-2 border-primary pb-1 font-bold text-primary transition-colors duration-300 hover:text-primary'
                    : 'font-medium text-on-surface-variant transition-colors duration-300 hover:text-primary'
                }
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
        <li>
          <button
            type="button"
            className="ml-4 text-primary transition-colors duration-300 hover:text-primary"
            aria-label="Abrir índice"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              menu_book
            </span>
          </button>
        </li>
      </ul>
    </nav>
  )
}
