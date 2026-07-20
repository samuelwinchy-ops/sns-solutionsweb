import { getDict } from '@/i18n'
import type { Locale } from '@/i18n/config'
import ContactForm from './ContactForm'

const EMAIL = 'office@sns-austria.com'

export default function ContactContent({ locale }: { locale: Locale }) {
  const t = getDict(locale).contactPage
  const details = [
    { label: t.details.email, value: EMAIL, href: `mailto:${EMAIL}` },
    { label: t.details.basedIn, value: t.details.basedInValue },
    { label: t.details.response, value: t.details.responseValue },
  ]

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
      <div>
        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
          <span className="h-px w-8 bg-sns-indigo/50" />
          {t.eyebrow}
        </p>
        <h1 className="text-[2.4rem] font-bold leading-[1.05] tracking-[-0.02em] text-sns-text md:text-5xl">
          {t.heading}
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-sns-muted">{t.intro}</p>

        <dl className="mt-10 flex flex-col">
          {details.map((d) => (
            <div key={d.label} className="border-t border-sns-text/[0.08] py-4">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-sns-faint">
                {d.label}
              </dt>
              <dd className="mt-1 text-sns-text">
                {d.href ? (
                  <a href={d.href} className="transition-colors duration-300 hover:text-sns-accent">
                    {d.value}
                  </a>
                ) : (
                  d.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <ContactForm locale={locale} />
    </div>
  )
}
