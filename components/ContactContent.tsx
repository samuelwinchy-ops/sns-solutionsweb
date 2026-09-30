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
        <p className="eyebrow mb-4">{t.eyebrow}</p>
        <h1 className="page-title text-sns-text">{t.heading}</h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-sns-muted">{t.intro}</p>

        <dl className="mt-10 flex flex-col">
          {details.map((d) => (
            <div key={d.label} className="border-t border-sns-border py-4">
              <dt className="text-sm text-sns-muted">{d.label}</dt>
              <dd className="mt-1 text-sns-text">
                {d.href ? (
                  <a
                    href={d.href}
                    className="underline decoration-sns-border underline-offset-4 transition-colors duration-150 hover:text-sns-accent hover:decoration-sns-accent"
                  >
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
