import { About } from './components/About'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
// import { Projects } from './components/Projects'
import { Sidebar } from './components/Sidebar'
import { navLinks } from './data/content'
import { useActiveSection } from './hooks/useActiveSection'

const sectionIds = navLinks.map((link) => link.id)

export default function App() {
  const activeId = useActiveSection(sectionIds)

  return (
    <div className="relative">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        aria-hidden="true"
      />

      <a
        href="#content"
        className="absolute left-0 top-0 z-50 -translate-x-[150%] rounded bg-teal-300 px-4 py-3 text-sm font-medium text-secondary transition focus:translate-x-0"
      >
        Skip to Content
      </a>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar activeId={activeId} />

          <main id="content" className="pt-18 lg:w-[52%] lg:py-24">
            <About />
            <Experience />
            {/* <Projects /> */}
            <Footer />
          </main>
        </div>
      </div>
    </div>
  )
}
