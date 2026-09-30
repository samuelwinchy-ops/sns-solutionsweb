import { getDict } from '@/i18n'
import { type Locale, defaultLocale } from '@/i18n/config'

// Founder names/roles are language-independent; the bios are localized in the
// dictionaries (i18n/dictionaries) under `teamPage.bios`, ordered to match this
// list. Keep this order and the bios array in sync.
//
// The monogram is a placeholder, NOT a real photo. When
// headshots are available, replace each monogram at the [PLACEHOLDER] marked
// below — do not substitute stock or generated images for the real founders.
const founders = [
  { initials: 'SW', name: 'Samuel Winch', role: 'Co-founder & CTO' },
  { initials: 'NP', name: 'Nicholas Pellechi', role: 'Co-founder & CEO' },
  { initials: 'SB', name: 'Samson Belachew', role: 'Co-founder & CSO' },
]

export default function Founders({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).teamPage

  return (
    <>
      <div className="mb-14 max-w-2xl">
        <p className="eyebrow mb-4">{t.eyebrow}</p>
        <h1 className="page-title text-sns-text">{t.heading}</h1>
        <p className="mt-6 text-lg leading-relaxed text-sns-muted">{t.intro}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {founders.map((founder, i) => (
          <article key={founder.name} className="sns-card flex min-w-0 flex-col p-6 md:p-7">
            {/* [PLACEHOLDER: photo of founder] — replace this monogram with a
                real founder headshot when available. Do not use stock or
                generated images. */}
            <div
              aria-hidden="true"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-sns-surface-2 text-lg font-semibold text-sns-text"
            >
              {founder.initials}
            </div>

            <h2 className="mt-5 text-xl font-semibold text-sns-text">{founder.name}</h2>
            <p className="mt-1 text-sm font-medium text-sns-muted">{founder.role}</p>
            <p className="mt-4 leading-relaxed text-sns-muted">{t.bios[i]}</p>
          </article>
        ))}
      </div>
    </>
  )
}
