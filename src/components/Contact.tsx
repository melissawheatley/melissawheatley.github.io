import { profile } from '../data/content'
import { SocialIcon } from './SocialIcon'

export function Contact(){
  return(
    <section id="contact" className="flex-col">
      <ul className="ml-1 mt-8 mb-12 flex items-center gap-5" aria-label="Social media">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                className="block text-slate-400 transition hover:text-slate-200"
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={
                  social.href.startsWith('mailto:')
                  ? undefined
                  : 'noreferrer noopener'
                }
                aria-label={`${social.label}${
                  social.href.startsWith('mailto:') ? '' : ' (opens in a new tab)'
                }`}
                >
                <span className="sr-only">{social.label}</span>
                <SocialIcon name={social.icon} alt={social.alt} className="h-6 w-6" />
              </a>
            </li>
          ))}
        </ul>
      <a href={profile.resumeHref} className="border-1 border-tertiary/50 bg-quaternary text-slate-200 hover:text-primary rounded-sm px-4 py-2 uppercase hover:bg-tertiary/80">View resume</a>
    </section>
  )
}
