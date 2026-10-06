import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath } from '@/i18n/config'

/** The consulting offer on the home page: one frosted panel, the four steps, one action. */
export default function ConsultPanel({ locale = defaultLocale }: { locale?: Locale }) {
  const dict = getDict(locale)
  const c = dict.consult
  return (
    <section className="hm-consult hm-glass" aria-labelledby="hm-consult-h">
      <p className="hm-eyebrow">{c.eyebrow}</p>
      <h2 className="hm-h2" id="hm-consult-h">
        {c.heading}
      </h2>
      <p className="hm-consult-sub">{c.sub}</p>
      <ol className="hm-steps">
        {dict.customBuilds.steps.map((s) => (
          <li key={s.k}>
            <b>
              <span>{s.k}</span>
              {s.name}
            </b>
            <p>{s.main}</p>
          </li>
        ))}
      </ol>
      <a className="hm-consult-cta" href={localePath(locale, '/contact')}>
        {c.cta}
      </a>
    </section>
  )
}
