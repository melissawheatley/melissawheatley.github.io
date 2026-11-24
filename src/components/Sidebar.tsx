import { navLinks, profile } from '../data/content'
import { Contact } from './Contact'

type SidebarProps = {
  activeId: string
}

export function Sidebar({ activeId }: SidebarProps) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
            <a href="/" className="transition-colors hover:text-tertiary">
              {profile.name}
            </a>
          </h1>
          <h2 className="mt-3 font-display text-lg font-medium tracking-tight text-slate-400 sm:text-xl">
            {profile.role}
          </h2>
          <Contact />
        </div>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navLinks.map((link) => {
              const isActive = activeId === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`group flex items-center py-3 ${
                      isActive ? 'active' : ''
                    }`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <span
                      className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                        isActive
                          ? 'w-16 bg-slate-200'
                          : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200'
                      }`}
                    />
                    <span
                      className={`nav-text text-sm font-bold tracking-[0.15em] uppercase transition-colors ${
                        isActive
                          ? 'text-slate-200'
                          : 'text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'
                      }`}
                    >
                      {link.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
