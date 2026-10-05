'use client'

import { useEffect, useRef } from 'react'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale } from '@/i18n/config'

/*
 * What the two products connect to, as one slow row of marks on identical white tiles.
 * True today: QFUtool sends through Gmail and signs in with Google or Microsoft; Immvela publishes to
 * Instagram, Facebook, LinkedIn, TikTok and YouTube and imports listings via OpenImmo from the four CRMs.
 * Not live yet, so faded and tagged: WhatsApp and the three portals.
 * Sources and licences of the marks: public/integrations/README.md.
 */

type Mark =
  | { name: string; src: string; soon?: boolean }
  | { name: string; ink: string; soon?: boolean } // a typeset name, in the dark colour of the company's own logo

const MARKS: Mark[] = [
  { name: 'Gmail', src: '/integrations/gmail.svg' },
  { name: 'Google', src: '/integrations/google.svg' },
  { name: 'Microsoft', src: '/integrations/microsoft.svg' },
  { name: 'Instagram', src: '/integrations/instagram.svg' },
  { name: 'Facebook', src: '/integrations/facebook.svg' },
  { name: 'LinkedIn', src: '/integrations/linkedin.svg' },
  { name: 'TikTok', src: '/integrations/tiktok.svg' },
  { name: 'YouTube', src: '/integrations/youtube.svg' },
  { name: 'onOffice', ink: '#141414' },
  { name: 'Justimmo', ink: '#0f2c43' },
  { name: 'Propstack', ink: '#1e2022' },
  { name: 'FLOWFACT', ink: '#000000' },
  { name: 'WhatsApp', src: '/integrations/whatsapp.svg', soon: true },
  { name: 'ImmoScout24', ink: '#333333', soon: true },
  { name: 'willhaben', ink: '#003494', soon: true },
  { name: 'immowelt', ink: '#303030', soon: true },
]

const BASE_GAP = 56

export default function Integrations({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).home
  const row = useRef<HTMLDivElement>(null)

  // One copy of the row is always wider than the screen plus its widest mark, so the copy that follows
  // only arrives once the first has left: no mark is ever on screen twice.
  useEffect(() => {
    const el = row.current
    if (!el) return
    const tracks = Array.from(el.querySelectorAll<HTMLElement>('.hm-track'))
    const fit = () => {
      const first = tracks[0]
      if (!first) return
      tracks.forEach((x) => x.style.removeProperty('--mq-gap'))
      const items = first.children.length
      const widest = Math.max(
        ...Array.from(first.children).map((c) => c.getBoundingClientRect().width)
      )
      const base = first.getBoundingClientRect().width - BASE_GAP * items
      const gap = Math.max(BASE_GAP, Math.ceil((window.innerWidth + widest + 40 - base) / items))
      tracks.forEach((x) => {
        x.style.setProperty('--mq-gap', `${gap}px`)
        x.style.setProperty('--mq-dur', `${Math.round((base + gap * items) / 40)}s`)
      })
    }
    fit()
    window.addEventListener('resize', fit)
    document.fonts?.ready.then(fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  const items = (hidden: boolean) =>
    MARKS.map((m) => {
      const label = m.soon ? `${m.name}, ${t.comingSoon}` : m.name
      return (
        <li key={m.name} className={m.soon ? 'hm-lg is-soon' : 'hm-lg'} data-name={m.name}>
          <span
            className="hm-tile"
            role={hidden ? undefined : 'img'}
            aria-label={hidden ? undefined : label}
          >
            {'src' in m ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={m.src} alt="" height={26} />
            ) : (
              <b style={{ color: m.ink }} aria-hidden="true">
                {m.name}
              </b>
            )}
          </span>
          {m.soon && (
            <span className="hm-soon" aria-hidden="true">
              {t.soon}
            </span>
          )}
        </li>
      )
    })

  return (
    <section className="hm-integ hm-glass" aria-labelledby="hm-integ-h">
      <p className="hm-eyebrow" id="hm-integ-h">
        {t.integrations}
      </p>
      <div className="hm-mq" ref={row}>
        <ul className="hm-track">{items(false)}</ul>
        <ul className="hm-track" aria-hidden="true">
          {items(true)}
        </ul>
      </div>
    </section>
  )
}
