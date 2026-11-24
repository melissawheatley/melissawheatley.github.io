import { experience, profile } from '../data/content'
import { ArrowUpRight } from './ArrowUpRight'

export function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-lg font-bold tracking-[0.15em] text-tertiary uppercase">
          Experience
        </h2>
      </div>

      <ol className="group/list">
        {experience.map((job) => (
          <li key={job.id} className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-tertiary/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

              <header
                className="z-10 mb-2 mt-1 text-sm font-semibold tracking-wide text-slate-500 group-hover:text-slate-400 uppercase sm:col-span-2"
                aria-label={job.range.replace('—', 'to')}
              >
                {job.range}
              </header>

              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  {job.href ? (
                    <a
                      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-quaternary focus-visible:text-quaternary"
                      href={job.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${job.title} at ${job.company} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {job.title} ·{' '}
                        <span className="inline-flex items-center">
                          {job.company}
                          <ArrowUpRight
                            className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                            aria-hidden="true"
                          />
                        </span>
                      </span>
                    </a>
                  ) : (
                    <span>
                      {job.title} · {job.company}
                    </span>
                  )}
                </h3>

                <p className="mt-2 text-sm leading-normal text-slate-400 group-hover:text-slate-200">
                  {job.description}
                </p>

                <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                  {job.technologies.map((tech) => (
                    <li key={tech} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-tertiary/30 px-3 py-1 text-sm font-medium leading-5 text-slate-800">
                        {tech}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-12">
        <a
          className="group inline-flex items-center font-medium leading-tight text-slate-200"
          href={profile.resumeHref}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Full Résumé (opens in a new tab)"
        >
          <span>
            <span className="border-b border-transparent pb-px transition group-hover:border-quaternary motion-reduce:transition-none">
              View Full Résumé
            </span>
            <ArrowUpRight
              className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </span>
        </a>
      </div>
    </section>
  )
}
