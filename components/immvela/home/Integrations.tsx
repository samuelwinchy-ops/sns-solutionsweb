import type { CSSProperties, ReactNode } from 'react'
import HelixCanvas from '../HelixCanvas'
import type { T } from '@/i18n/immvela'

/*
 * "It fits how you work", set as a field of app tiles around the live helix: the CRMs on the left
 * (text names, never their logos, no partnership implied), the five social channels on the right in
 * their own colours, the planned portals and plain tiles fading out towards the edges. Sharp means it
 * works today (TRUTH.md); faded means planned. A still: only the helix turns.
 *
 * Desktop field: 11 x 4 cells of 92 design px on a 1160 x 368 stage, 1em = one design px.
 */

const H2: CSSProperties = {
  margin: '0',
  color: '#14473a',
  fontFamily: 'var(--font-bricolage),var(--font-geist-sans),system-ui,sans-serif',
  fontOpticalSizing: 'auto',
  fontVariationSettings: "'opsz' 72",
  fontWeight: '650',
  letterSpacing: '-0.035em',
  lineHeight: '1.02',
  maxWidth: '720px',
  fontSize: '52px',
  textWrap: 'balance',
}

type Channel = 'Instagram' | 'Facebook' | 'LinkedIn' | 'TikTok' | 'YouTube'
const BRAND: Record<Channel, string> = {
  Instagram: 'linear-gradient(45deg,#f9a52b 10%,#e1306c 50%,#833ab4 90%)',
  Facebook: '#1877f2',
  LinkedIn: '#0a66c2',
  TikTok: '#111111',
  YouTube: '#ff0000',
}
const GLYPH: Record<Channel, ReactNode> = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17" cy="7" r=".9" fill="#ffffff" stroke="none" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="#ffffff">
      <path d="M13.4 20v-6.6h2.3l.4-2.7h-2.7V9c0-.8.3-1.3 1.4-1.3h1.4V5.3c-.3 0-1.1-.1-2.1-.1-2 0-3.4 1.2-3.4 3.5v2h-2.3v2.7h2.3V20z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="#ffffff">
      <path d="M7.2 9.4H4.8V19h2.4zM6 5a1.4 1.4 0 1 0 0 2.8A1.4 1.4 0 0 0 6 5m4 4.4V19h2.4v-4.8c0-1.3.3-2.5 1.9-2.5s1.6 1.5 1.6 2.6V19h2.4v-5.3c0-2.6-.6-4.5-3.6-4.5-1.4 0-2.4.8-2.8 1.5V9.4z" />
    </svg>
  ),
  TikTok: (
    <svg viewBox="0 0 24 24" fill="#ffffff">
      <path d="M16.6 5.5a3.9 3.9 0 0 0 2.4.9v2.5a6.3 6.3 0 0 1-2.4-.6v5.4a4.7 4.7 0 1 1-4.7-4.7h.4v2.6h-.4a2.1 2.1 0 1 0 2.1 2.1V4h2.6z" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" fill="#ffffff">
      <path d="M10 8.6v6.8l5.6-3.4z" />
    </svg>
  ),
}

type Cell = { gx: number; gy: number } & (
  | { kind: 'crm'; name: string }
  | { kind: 'social'; name: Channel }
  | { kind: 'planned'; name: string }
  | { kind: 'empty' }
)

const LIVE: Cell[] = [
  { gx: -2, gy: -0.5, kind: 'crm', name: 'onOffice' },
  { gx: -2, gy: 0.5, kind: 'crm', name: 'Justimmo' },
  { gx: -3, gy: -0.5, kind: 'crm', name: 'Propstack' },
  { gx: -3, gy: 0.5, kind: 'crm', name: 'FLOWFACT' },
  { gx: 2, gy: -0.5, kind: 'social', name: 'Instagram' },
  { gx: 2, gy: 0.5, kind: 'social', name: 'Facebook' },
  { gx: 3, gy: -0.5, kind: 'social', name: 'LinkedIn' },
  { gx: 3, gy: 0.5, kind: 'social', name: 'TikTok' },
  { gx: 2, gy: 1.5, kind: 'social', name: 'YouTube' },
  { gx: 4, gy: -0.5, kind: 'planned', name: 'willhaben' },
  { gx: 4, gy: 0.5, kind: 'planned', name: 'ImmoScout24' },
  { gx: -4, gy: -0.5, kind: 'planned', name: 'immowelt' },
]

const CELL = 92
const TILE = 76
const CX = 580
const ROWS = [-1.5, -0.5, 0.5, 1.5]

function field(): Cell[] {
  const taken = new Set(LIVE.map((c) => `${c.gx},${c.gy}`))
  const out = [...LIVE]
  for (let gx = -5; gx <= 5; gx++)
    for (const gy of ROWS) {
      const helix = Math.abs(gx) <= 1 && Math.abs(gy) < 1
      if (!helix && !taken.has(`${gx},${gy}`)) out.push({ gx, gy, kind: 'empty' })
    }
  return out
}

/** How far a plain tile has faded: none next to the helix, most at the outer edge and the corners. */
const fade = (gx: number, gy: number) =>
  Math.min(
    1,
    Math.max(
      (Math.abs(gx) - 1.5) / 3.5,
      (Math.abs(gy) - 0.5) * 0.35 + Math.max(0, Math.abs(gx) - 2) * 0.12
    )
  )

function Tile({ c, px }: { c: Cell; px: (n: number) => string }) {
  const f = fade(c.gx, c.gy)
  const style: CSSProperties =
    c.kind === 'empty'
      ? {
          opacity: 0.8 - 0.62 * f,
          filter: f > 0.15 ? `blur(${(f * 2.6).toFixed(1)}px)` : undefined,
        }
      : c.kind === 'planned'
        ? { opacity: 0.46, filter: 'blur(0.6px)' }
        : {}
  return (
    <span
      className={`ig-tile ig-${c.kind}`}
      style={{
        left: px(c.gx * CELL - TILE / 2),
        top: px((c.gy + 2) * CELL - TILE / 2),
        ...(c.kind === 'social' ? { background: BRAND[c.name] } : {}),
        ...style,
      }}
    >
      {c.kind === 'social' && <span className="ig-glyph">{GLYPH[c.name]}</span>}
      {(c.kind === 'crm' || c.kind === 'planned') && <span className="ig-name">{c.name}</span>}
    </span>
  )
}

export default function Integrations({ t }: { t: T }) {
  const cells = field()
  return (
    <section className="in-sec" style={{ padding: '96px 24px' }}>
      <div className="in-wrap">
        <h2 className="in-h2" style={H2}>
          {t('Works with the tools you already use')}
        </h2>
        <p
          style={{
            margin: '20px 0 0',
            maxWidth: '560px',
            fontSize: '19px',
            lineHeight: '1.55',
            color: '#3f574f',
            textWrap: 'pretty',
          }}
        >
          {t(
            'Bring your listings in from your CRM, then send them out to your channels, with one approval.'
          )}
        </p>

        <div
          className="ig-wrap"
          role="img"
          aria-label={t(
            'Listings come in from onOffice, Justimmo, Propstack or FLOWFACT by OpenImmo export, pass through Immvela, and go out to Instagram, Facebook, LinkedIn, TikTok and YouTube after your approval. Portal publishing to willhaben, ImmoScout24 and immowelt is planned.'
          )}
        >
          {/* DESKTOP */}
          <div
            className="ig-sd"
            aria-hidden="true"
            style={{ containerType: 'inline-size', width: '100%' }}
          >
            <div
              className="ig-field"
              style={{
                position: 'relative',
                fontSize: 'calc(100cqw / 1160)',
                height: `${CELL * 4}em`,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: `${CX}em`,
                  top: '0',
                  width: '0',
                  height: '100%',
                }}
              >
                {cells.map((c) => (
                  <Tile key={`${c.gx},${c.gy}`} c={c} px={(n) => `${n}em`} />
                ))}
                <span
                  className="gl-glass ig-helix"
                  style={{
                    left: '-88em',
                    top: `${2 * CELL - 88}em`,
                    width: '176em',
                    height: '176em',
                  }}
                >
                  <HelixCanvas style={{ width: '134em', height: '134em' }} />
                </span>
              </div>
            </div>
            <div className="ig-caps">
              <span style={{ left: `${((CX - 2.5 * CELL) / 1160) * 100}%` }}>
                {t('In, via OpenImmo export')}
              </span>
              <span style={{ left: `${((CX + 2.5 * CELL) / 1160) * 100}%` }}>
                {t('Out, always after your approval')}
              </span>
            </div>
          </div>

          {/* PHONE: in, the helix, out, planned */}
          <div className="ig-sm" aria-hidden="true">
            <div className="ig-row">
              {LIVE.filter((c) => c.kind === 'crm').map((c) => (
                <span key={c.gx + ',' + c.gy} className="ig-ptile ig-crm">
                  <span className="ig-name">{(c as { name: string }).name}</span>
                </span>
              ))}
            </div>
            <span className="ig-pcap">{t('In, via OpenImmo export')}</span>
            <span className="gl-glass ig-phelix">
              <HelixCanvas style={{ width: '62px', height: '62px' }} />
            </span>
            <div className="ig-row">
              {(Object.keys(BRAND) as Channel[]).map((name) => (
                <span key={name} className="ig-ptile ig-social" style={{ background: BRAND[name] }}>
                  <span className="ig-glyph">{GLYPH[name]}</span>
                </span>
              ))}
            </div>
            <span className="ig-pcap">{t('Out, always after your approval')}</span>
            <div className="ig-row ig-soft">
              {['willhaben', 'ImmoScout24', 'immowelt'].map((name) => (
                <span key={name} className="ig-ptile ig-planned">
                  <span className="ig-name">{name}</span>
                </span>
              ))}
            </div>
          </div>

          <p className="ig-legend">{t('Sharp: works today. Faded: planned.')}</p>
        </div>
      </div>
    </section>
  )
}
