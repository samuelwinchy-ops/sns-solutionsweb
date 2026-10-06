'use client'

import { useEffect, useRef, useState } from 'react'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale } from '@/i18n/config'

/*
 * What the two products connect to, as one slow row of marks on identical white tiles.
 * True today: QFUtool sends through Gmail and signs in with Google or Microsoft; Immvela publishes to
 * Instagram, Facebook, LinkedIn, TikTok and YouTube and imports listings via OpenImmo from the four CRMs.
 * Not live yet, so faded and tagged: WhatsApp and the three portals.
 * Sources and licences of the marks: public/integrations/README.md.
 */

type Label = 'googleSignIn' | 'microsoftSignIn'
type Mark =
  | { name: string; src: string; soon?: boolean; label?: Label }
  | { name: string; ink: string; soon?: boolean; label?: Label } // a typeset name, in the dark colour of the company's own logo

const MARKS: Mark[] = [
  { name: 'Gmail', src: '/integrations/gmail.svg' },
  { name: 'Google', src: '/integrations/google.svg', label: 'googleSignIn' },
  { name: 'Microsoft', src: '/integrations/microsoft.svg', label: 'microsoftSignIn' },
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
  const [paused, setPaused] = useState(false)

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
      const name = m.label ? t[m.label] : m.name
      const label = m.soon ? `${name}, ${t.comingSoon}` : name
      return (
        <li key={m.name} className={m.soon ? 'hm-lg is-soon' : 'hm-lg'} data-name={m.name}>
          <span
            className="hm-tile"
            role={hidden ? undefined : 'img'}
            aria-label={hidden ? undefined : label}
            title={m.label ? name : undefined}
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
      <div className="hm-integ-head">
        <p className="hm-eyebrow" id="hm-integ-h">
          {t.integrations}
        </p>
        <button
          type="button"
          className="hm-mq-toggle"
          onClick={() => setPaused((x) => !x)}
          aria-label={paused ? t.marqueePlay : t.marqueePause}
        >
          {paused ? (
            <svg width="10" height="12" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
              <path d="M2 1.2 11 7 2 12.8Z" />
            </svg>
          ) : (
            <svg width="10" height="12" viewBox="0 0 12 14" fill="currentColor" aria-hidden="true">
              <rect x="1" y="1" width="3.4" height="12" rx="1" />
              <rect x="7.6" y="1" width="3.4" height="12" rx="1" />
            </svg>
          )}
        </button>
      </div>
      <div className={paused ? 'hm-mq is-paused' : 'hm-mq'} ref={row}>
        <ul className="hm-track">{items(false)}</ul>
        <ul className="hm-track" aria-hidden="true">
          {items(true)}
        </ul>
      </div>
    </section>
  )
}
