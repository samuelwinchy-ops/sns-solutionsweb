import type { CSSProperties, ReactNode } from 'react'
import HelixCanvas from '../HelixCanvas'
import type { T } from '@/i18n/immvela'

/*
 * "It fits how you work": listings come in from the CRM, go out to the channels, with the helix in
 * between. Only what TRUTH.md lists as live is drawn connected: OpenImmo import from the four CRMs
 * (text wordmarks, never their logos, no partnership implied) and the five social channels. The
 * portals are planned and sit below, lighter and unconnected. A still: only the helix turns.
 *
 * Desktop stage: 1160 x 380 design px, 1em = one design px. Phones get a stacked flow.
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

const CRMS = ['onOffice', 'Justimmo', 'Propstack', 'FLOWFACT']
const PLANNED = ['willhaben', 'ImmoScout24', 'immowelt']

function Glyph({ name }: { name: string }) {
  const box = (bg: string, child: ReactNode) => (
    <span className="in-glyph" style={{ background: bg }} aria-hidden="true">
      {child}
    </span>
  )
  switch (name) {
    case 'Instagram':
      return box(
        'linear-gradient(45deg,#f9a52b,#e1306c,#833ab4)',
        <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2">
          <rect x="4" y="4" width="16" height="16" rx="5" />
          <circle cx="12" cy="12" r="3.6" />
        </svg>
      )
    case 'Facebook':
      return box(
        '#1877f2',
        <svg viewBox="0 0 24 24" fill="#ffffff">
          <path d="M13.4 20v-6.6h2.3l.4-2.7h-2.7V9c0-.8.3-1.3 1.4-1.3h1.4V5.3c-.3 0-1.1-.1-2.1-.1-2 0-3.4 1.2-3.4 3.5v2h-2.3v2.7h2.3V20z" />
        </svg>
      )
    case 'LinkedIn':
      return box(
        '#0a66c2',
        <svg viewBox="0 0 24 24" fill="#ffffff">
          <path d="M7.2 9.4H4.8V19h2.4zM6 5a1.4 1.4 0 1 0 0 2.8A1.4 1.4 0 0 0 6 5m4 4.4V19h2.4v-4.8c0-1.3.3-2.5 1.9-2.5s1.6 1.5 1.6 2.6V19h2.4v-5.3c0-2.6-.6-4.5-3.6-4.5-1.4 0-2.4.8-2.8 1.5V9.4z" />
        </svg>
      )
    case 'TikTok':
      return box(
        '#111111',
        <svg viewBox="0 0 24 24" fill="#ffffff">
          <path d="M16.6 5.5a3.9 3.9 0 0 0 2.4.9v2.5a6.3 6.3 0 0 1-2.4-.6v5.4a4.7 4.7 0 1 1-4.7-4.7h.4v2.6h-.4a2.1 2.1 0 1 0 2.1 2.1V4h2.6z" />
        </svg>
      )
    default:
      return box(
        '#ff0000',
        <svg viewBox="0 0 24 24" fill="#ffffff">
          <path d="M10 8.6v6.8l5.6-3.4z" />
        </svg>
      )
  }
}

const CHANNELS = ['Instagram', 'Facebook', 'LinkedIn', 'TikTok', 'YouTube']

// desktop geometry (design px)
const IN_X = [60, 300]
const OUT_X = [860, 1100]
const C = { x: 580, y: 190, r: 74 }
const inY = (i: number) => 98 + i * 64
const outY = (i: number) => 74 + i * 58

export default function Integrations({ t }: { t: T }) {
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
          className="in-sheet"
          role="img"
          aria-label={t(
            'Listings come in from onOffice, Justimmo, Propstack or FLOWFACT by OpenImmo export, pass through Immvela, and go out to Instagram, Facebook, LinkedIn, TikTok and YouTube after your approval. Portal publishing to willhaben, ImmoScout24 and immowelt is planned.'
          )}
        >
          {/* DESKTOP: a flow on the centre axis */}
          <div
            className="in-sd"
            aria-hidden="true"
            style={{ containerType: 'inline-size', width: '100%' }}
          >
            <div style={{ position: 'relative', fontSize: 'calc(100cqw / 1160)', height: '380em' }}>
              <svg
                viewBox="0 0 1160 380"
                style={{
                  position: 'absolute',
                  inset: '0',
                  width: '100%',
                  height: '100%',
                  overflow: 'visible',
                }}
                fill="none"
              >
                {CRMS.map((_, i) => (
                  <g key={i}>
                    <path
                      className="in-wire"
                      d={`M${IN_X[1]} ${inY(i)}C${IN_X[1] + 120} ${inY(i)} ${C.x - C.r - 110} ${C.y} ${C.x - C.r - 6} ${C.y}`}
                    />
                    <circle className="in-node" cx={IN_X[1]} cy={inY(i)} r="3" />
                  </g>
                ))}
                {CHANNELS.map((_, i) => (
                  <g key={i}>
                    <path
                      className="in-wire"
                      d={`M${C.x + C.r + 6} ${C.y}C${C.x + C.r + 110} ${C.y} ${OUT_X[0] - 120} ${outY(i)} ${OUT_X[0]} ${outY(i)}`}
                    />
                    <circle className="in-node" cx={OUT_X[0]} cy={outY(i)} r="3" />
                  </g>
                ))}
              </svg>

              <span className="in-label" style={{ left: `${IN_X[0]}em`, top: '30em' }}>
                <span>{t('In, from your CRM')}</span>
              </span>
              {CRMS.map((name, i) => (
                <span
                  key={name}
                  className="in-tile in-crm"
                  style={{
                    left: `${IN_X[0]}em`,
                    top: `${inY(i) - 24}em`,
                    width: `${IN_X[1] - IN_X[0]}em`,
                  }}
                >
                  <span style={{ fontSize: '17em' }}>{name}</span>
                </span>
              ))}
              <span className="in-cap" style={{ left: `${IN_X[0]}em`, top: `${inY(3) + 40}em` }}>
                <span>{t('via OpenImmo export')}</span>
              </span>

              <span
                style={{
                  position: 'absolute',
                  left: `${C.x - C.r}em`,
                  top: `${C.y - C.r}em`,
                  width: `${C.r * 2}em`,
                  height: `${C.r * 2}em`,
                }}
              >
                <span
                  className="gl-glass"
                  style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                  }}
                >
                  <HelixCanvas style={{ width: '112em', height: '112em' }} />
                </span>
              </span>

              <span className="in-label" style={{ left: `${OUT_X[0]}em`, top: '30em' }}>
                <span>{t('Out, to your channels')}</span>
              </span>
              {CHANNELS.map((name, i) => (
                <span
                  key={name}
                  className="in-tile in-out"
                  style={{
                    left: `${OUT_X[0]}em`,
                    top: `${outY(i) - 21}em`,
                    width: `${OUT_X[1] - OUT_X[0]}em`,
                  }}
                >
                  <Glyph name={name} />
                  <span style={{ fontSize: '15em' }}>{name}</span>
                </span>
              ))}
              <span className="in-cap" style={{ left: `${OUT_X[0]}em`, top: `${outY(4) + 34}em` }}>
                <span>{t('always after your approval')}</span>
              </span>
            </div>
          </div>

          {/* PHONE: in, the helix, out, top to bottom */}
          <div className="in-sm" aria-hidden="true">
            <span className="in-plabel">{t('In, from your CRM')}</span>
            <div className="in-pgrid">
              {CRMS.map((name) => (
                <span key={name} className="in-ptile in-crm">
                  {name}
                </span>
              ))}
            </div>
            <span className="in-pcap">{t('via OpenImmo export')}</span>
            <span className="in-pline" />
            <span className="gl-glass in-phelix">
              <HelixCanvas style={{ width: '58px', height: '58px' }} />
            </span>
            <span className="in-pline" />
            <span className="in-plabel">{t('Out, to your channels')}</span>
            <div className="in-pgrid">
              {CHANNELS.map((name) => (
                <span key={name} className="in-ptile in-out">
                  <Glyph name={name} />
                  {name}
                </span>
              ))}
            </div>
            <span className="in-pcap">{t('always after your approval')}</span>
          </div>
        </div>

        <div className="in-planned">
          <span className="sp-next">{t('Planned')}</span>
          {PLANNED.map((name) => (
            <span key={name} className="in-soon">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
