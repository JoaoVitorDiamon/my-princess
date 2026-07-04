import { Link } from 'react-router-dom'

type NavItem = {
  label: string
  href: string
  active?: boolean
}

type ChapterTwoNavProps = {
  title: string
  items: NavItem[]
}

export function ChapterTwoNav({ title, items }: ChapterTwoNavProps) {
  return (
    <nav className="fixed top-0 z-50 hidden w-full items-center justify-between bg-transparent px-page-margin-desktop py-6 md:flex">
      <Link
        to="/"
        className="font-script-accent text-script-accent text-primary italic transition-opacity duration-300 hover:opacity-80"
      >
        {title}
      </Link>

      <ul className="flex space-x-element-gap">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={
                item.active
                  ? 'border-b-2 border-primary pb-1 font-bold text-primary transition-colors duration-300 hover:text-primary'
                  : 'font-medium text-on-surface-variant transition-colors duration-300 hover:text-primary'
              }
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center space-x-4">
        <span className="material-symbols-outlined cursor-pointer text-primary transition-colors duration-300 hover:text-primary">
          menu_book
        </span>
      </div>
    </nav>
  )
}
