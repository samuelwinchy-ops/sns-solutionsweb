import Image from 'next/image'
import type { CSSProperties, ReactNode } from 'react'
import type { HomeVals, TraceKey } from './vals'
import type { T } from '@/i18n/immvela'

/*
 * "You can trust it": the one place the contradiction is told. The Exposé opens with the Wohnfläche
 * cell amber and the question; the visitor picks a value (or it plays once in view, choosing the floor
 * plan's 76 m²), the source page slides out with the exact line lifted, and the cell turns green. After
 * that every value in the strip can be traced. A different example listing from the rest of the page.
 *
 * Two stages share one drawing: desktop 1200 x 640 design px, phone 358 x 800 (1em = one design px).
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
const e = (n: number) => `${n}em`
const ink = '#0a2b22'
const muted = '#4f5c57'
const abs = (s: CSSProperties): CSSProperties => ({ position: 'absolute', ...s })

type Layout = {
  W: number
  H: number
  paper: {
    l: number
    t: number
    w: number
    h: number
    photo: number
    addr: [number, number]
    title: [number, number, number]
    obj: number | null
    r: number
  }
  strip: {
    t: number
    l: number
    w: number
    h: number
    pad: string
    lab: number
    val: number
    gap: number
  }
  q: { t: number; l: number; w: number; arrow: number }
  panel: { l: number; t: number; w: number; h: number; x: number; r: number }
  gr: {
    title: [number, number, number]
    addr: [number, number]
    plan: [number, number, number]
    fa: [number, number]
    rows: [number, number, number]
    zi: [number, number, number]
    wf: [number, number, number]
  }
  ea: {
    bars: [number, number, number, number, number, number]
    rows: [number, number, number]
    grey: [number, number, number]
  }
  hl: {
    side: number
    pad: string
    quote: number
    label: number
    rowGr: number
    rowEa: number
    gap: number
  }
  wires: Record<TraceKey, [string, number, number, number, number]>
  dot: number
}

const DESK: Layout = {
  W: 1200,
  H: 640,
  paper: {
    l: 70,
    t: 20,
    w: 500,
    h: 590,
    photo: 250,
    addr: [268, 13],
    title: [292, 26, 1.15],
    obj: 478,
    r: 8,
  },
  strip: { t: 376, l: 22, w: 456, h: 64, pad: '10em 9em 11em', lab: 11, val: 17, gap: 4 },
  q: { t: 452, l: 12, w: 340, arrow: 50 },
  panel: { l: 640, t: 36, w: 470, h: 580, x: 24, r: 6 },
  gr: {
    title: [22, 17, 12.5],
    addr: [48, 12],
    plan: [80, 200, 2],
    fa: [296, 13],
    rows: [320, 24, 12],
    zi: [470, 34, 13.5],
    wf: [504, 34, 13.5],
  },
  ea: { bars: [84, 14, 5, 52, 22, 80], rows: [240, 44, 13.5], grey: [430, 4, 9] },
  hl: { side: 12, pad: '9em 12em 4em', quote: 14.5, label: 12.5, rowGr: 34, rowEa: 44, gap: 5 },
  wires: {
    wf: ['M137.6 460V470Q137.6 478 145.6 478H600C626 478 626 557 652 557', 137.6, 460, 652, 557],
    wf78: ['M137.6 460V470Q137.6 478 145.6 478H600C626 478 626 430 652 430', 137.6, 460, 652, 430],
    zi: ['M228.8 460V470Q228.8 478 236.8 478H600C626 478 626 523 652 523', 228.8, 460, 652, 523],
    bj: ['M320 460V470Q320 478 328 478H600C626 478 626 298 652 298', 320, 460, 652, 298],
    hwb: ['M411.2 460V470Q411.2 478 419.2 478H600C626 478 626 342 652 342', 411.2, 460, 652, 342],
    fg: ['M502.4 460V470Q502.4 478 510.4 478H600C626 478 626 386 652 386', 502.4, 460, 652, 386],
  },
  dot: 3.5,
}

const PHONE: Layout = {
  W: 358,
  H: 800,
  paper: {
    l: 0,
    t: 0,
    w: 358,
    h: 318,
    photo: 160,
    addr: [172, 11.5],
    title: [192, 17, 1.2],
    obj: null,
    r: 6,
  },
  strip: { t: 248, l: 12, w: 334, h: 56, pad: '7em 5em 8em', lab: 8.5, val: 13, gap: 3 },
  q: { t: 314, l: 6, w: 310, arrow: 34 },
  panel: { l: 20, t: 342, w: 338, h: 440, x: 16, r: 5 },
  gr: {
    title: [16, 14, 10.5],
    addr: [37, 10],
    plan: [58, 120, 1.45],
    fa: [188, 11.5],
    rows: [206, 20, 10.5],
    zi: [330, 30, 12],
    wf: [360, 30, 12],
  },
  ea: { bars: [62, 10, 3, 34, 15, 55], rows: [168, 38, 12], grey: [330, 3, 7] },
  hl: { side: 6, pad: '7em 8em 3em', quote: 13, label: 11.5, rowGr: 30, rowEa: 38, gap: 5 },
  wires: {
    wf: ['M45.4 304V318Q45.4 326 37.4 326H16Q8 326 8 334V709Q8 717 16 717H26', 45.4, 304, 26, 717],
    wf78: [
      'M45.4 304V318Q45.4 326 37.4 326H16Q8 326 8 334V635Q8 643 16 643H26',
      45.4,
      304,
      26,
      643,
    ],
    zi: [
      'M112.2 304V318Q112.2 326 104.2 326H16Q8 326 8 334V679Q8 687 16 687H26',
      112.2,
      304,
      26,
      687,
    ],
    bj: ['M179 304V318Q179 326 171 326H16Q8 326 8 334V521Q8 529 16 529H26', 179, 304, 26, 529],
    hwb: [
      'M245.8 304V318Q245.8 326 237.8 326H16Q8 326 8 334V559Q8 567 16 567H26',
      245.8,
      304,
      26,
      567,
    ],
    fg: [
      'M312.6 304V318Q312.6 326 304.6 326H16Q8 326 8 334V597Q8 605 16 605H26',
      312.6,
      304,
      26,
      605,
    ],
  },
  dot: 3,
}

const ROOMS: [string, string][] = [
  ['Wohnzimmer', '24,6 m²'],
  ['Schlafzimmer', '14,2 m²'],
  ['Zimmer', '11,8 m²'],
  ['Küche', '9,1 m²'],
  ['Bad und WC', '5,4 m²'],
  ['Vorraum', '10,9 m²'],
]
const EA_ROWS: [TraceKey, string, string][] = [
  ['bj', 'Baujahr:', '1898'],
  ['hwb', 'Heizwärmebedarf HWB:', '61 kWh/m²a'],
  ['fg', 'Gesamtenergieeffizienz-Faktor fGEE:', '1,02'],
  ['wf78', 'Wohnfläche:', '78 m²'],
]

function Row({
  top,
  h,
  fs,
  label,
  value,
}: {
  top: number
  h: number
  fs: number
  label: string
  value: string
}) {
  return (
    <div
      style={abs({
        left: 'var(--x)',
        right: 'var(--x)',
        top: e(top),
        height: e(h),
        borderTop: '1px solid rgba(10,43,34,0.10)',
        display: 'flex',
        alignItems: 'center',
        gap: '5em',
        whiteSpace: 'nowrap',
      })}
    >
      <span style={{ fontSize: e(fs), lineHeight: '1.3', color: muted }}>{label}</span>
      <span style={{ fontSize: e(fs), lineHeight: '1.3', fontWeight: '600', color: ink }}>
        {value}
      </span>
    </div>
  )
}

function Evidence({
  L,
  v,
  k,
  top,
  row,
  quote,
  label,
}: {
  L: Layout
  v: HomeVals
  k: TraceKey
  top: number
  row: number
  quote: string
  label: string
}) {
  return (
    <div
      className={v.trHl(k)}
      style={abs({ left: e(L.hl.side), right: e(L.hl.side), top: e(top), zIndex: 3 })}
    >
      <div
        style={{
          borderRadius: '8em',
          background: '#ffffff',
          boxShadow:
            '0 0 0 1px rgba(10,43,34,0.10),0 1px 2px rgba(0,0,0,0.05),0 14em 32em rgba(10,43,34,0.16)',
          padding: '5em',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            minHeight: e(row),
            boxSizing: 'border-box',
            padding: L.W > 400 ? '0 12em' : '0 8em',
            borderRadius: '5em',
            background: '#e3efe8',
          }}
        >
          <span
            style={{ fontSize: e(L.hl.quote), lineHeight: '1.35', fontWeight: '600', color: ink }}
          >{`“${quote}”`}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6em', padding: L.hl.pad }}>
          <svg
            viewBox="0 0 16 16"
            style={{ width: '14em', height: '14em', flex: 'none', marginTop: '1em' }}
            aria-hidden="true"
          >
            <circle cx="8" cy="8" r="8" fill="#1f7a5a" />
            <path
              d="M4.6 8.2l2.2 2.2 4.6-4.7"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: e(L.hl.label), lineHeight: '1.35', color: muted }}>{label}</span>
        </div>
      </div>
    </div>
  )
}

function Page({
  L,
  children,
  title,
  sub,
}: {
  L: Layout
  children: ReactNode
  title: string
  sub: string
}) {
  return (
    <div
      style={abs({
        inset: '0',
        borderRadius: e(L.panel.r),
        background: '#ffffff',
        boxShadow:
          '0 0 0 1px rgba(10,43,34,0.10),0 1px 2px rgba(0,0,0,0.05),0 18em 40em rgba(10,43,34,0.10)',
        ['--x' as string]: e(L.panel.x),
      } as CSSProperties)}
    >
      <div
        style={abs({
          left: 'var(--x)',
          right: 'var(--x)',
          top: e(L.gr.title[0]),
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          whiteSpace: 'nowrap',
        })}
      >
        <span
          style={{ fontSize: e(L.gr.title[1]), lineHeight: '1.3', fontWeight: '600', color: ink }}
        >
          {title}
        </span>
        <span style={{ fontSize: e(L.gr.title[2]), lineHeight: '1.3', color: muted }}>Seite 1</span>
      </div>
      <div style={abs({ left: 'var(--x)', top: e(L.gr.addr[0]), whiteSpace: 'nowrap' })}>
        <span style={{ fontSize: e(L.gr.addr[1]), lineHeight: '1.4', color: muted }}>{sub}</span>
      </div>
      {children}
    </div>
  )
}

function Stage({ L, t, v, cls }: { L: Layout; t: T; v: HomeVals; cls: string }) {
  const { paper: P, strip: S, panel: D } = L
  const confirmed = (doc: string) => `${doc}${t(', page 1. Confirmed by you.')}`
  const cells: [TraceKey, string, string][] = [
    ['wf', 'Wohnfläche', v.trWfValue],
    ['zi', 'Zimmer', '3'],
    ['bj', 'Baujahr', '1898'],
    ['hwb', 'HWB', '61'],
    ['fg', 'fGEE', '1,02'],
  ]
  const [bt, bh, bg, bw0, bstep, barrow] = L.ea.bars
  return (
    <div
      className={cls}
      style={{
        containerType: 'inline-size',
        width: '100%',
        ...(L.W < 400 ? { maxWidth: '440px', margin: '0 auto' } : {}),
      }}
    >
      <div style={{ position: 'relative', fontSize: `calc(100cqw / ${L.W})`, height: e(L.H) }}>
        {/* the Exposé */}
        <div
          style={abs({
            left: e(P.l),
            top: e(P.t),
            width: e(P.w),
            height: e(P.h),
            zIndex: 3,
            borderRadius: e(P.r),
            overflow: 'hidden',
            background: '#fbfaf5',
            color: '#1c2a25',
            boxShadow:
              '0 0 0 1px rgba(10,43,34,0.08),0 1px 2px rgba(0,0,0,0.05),0 18em 40em rgba(10,43,34,0.09)',
          })}
        >
          <Image
            src="/immvela/redesign/sample-study.jpg"
            alt=""
            width={1600}
            height={1068}
            sizes="(max-width: 959px) 100vw, 500px"
            style={abs({
              left: '0',
              top: '0',
              width: '100%',
              height: e(P.photo),
              objectFit: 'cover',
              display: 'block',
            })}
          />
          <div style={abs({ left: e(S.l), top: e(P.addr[0]), whiteSpace: 'nowrap' })}>
            <span style={{ fontSize: e(P.addr[1]), lineHeight: '1.5', color: muted }}>
              {t('Exposé, Praterstraße 31, 1020 Wien')}
            </span>
          </div>
          <div style={abs({ left: e(S.l), right: e(S.l), top: e(P.title[0]) })}>
            <span
              style={{
                display: 'block',
                fontSize: e(P.title[1]),
                lineHeight: P.title[2],
                fontWeight: '600',
                letterSpacing: '-0.02em',
              }}
            >
              Ruhige 3-Zimmer-Wohnung nahe dem Prater
            </span>
          </div>
          <div
            role="group"
            aria-label={t('Key facts. Choose a value to see the line it was read from.')}
            style={abs({
              left: e(S.l),
              top: e(S.t),
              width: e(S.w),
              height: e(S.h),
              display: 'grid',
              gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
              borderRadius: '6em',
              overflow: 'hidden',
              background: '#1f3a31',
            })}
          >
            {cells.map(([k, label, value]) => (
              <button
                key={k}
                type="button"
                className={v.trCell(k)}
                aria-pressed={v.trPressed(k)}
                disabled={v.trAsking}
                onClick={v.trPick(k)}
                style={{ padding: S.pad, display: 'flex', flexDirection: 'column', gap: e(S.gap) }}
              >
                <span
                  style={{
                    display: 'block',
                    fontSize: e(S.lab),
                    lineHeight: '1.2',
                    opacity: '.85',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {t(label)}
                </span>
                <span
                  className="rc-kf"
                  style={{
                    display: 'block',
                    fontSize: e(S.val),
                    lineHeight: '1.25',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {k === 'wf' && v.trAsking ? t('2 values') : value}
                </span>
              </button>
            ))}
          </div>
          {P.obj !== null && (
            <div
              style={abs({
                left: e(S.l),
                right: e(S.l),
                top: e(P.obj),
                display: 'flex',
                flexDirection: 'column',
                gap: '7em',
              })}
            >
              <span style={{ fontSize: '14em', lineHeight: '1.3', fontWeight: '600' }}>
                {t('Objektbeschreibung')}
              </span>
              <span style={{ fontSize: '12em', lineHeight: '1.55', color: '#3d4a45' }}>
                Die Wohnung liegt im dritten Obergeschoss eines Gründerzeithauses. Alle Zimmer gehen
                zum ruhigen Hof, der Prater ist in wenigen Gehminuten erreichbar.
              </span>
            </div>
          )}
        </div>

        {/* the question, under the amber cell, until a value is chosen */}
        {v.trAsking && (
          <div style={abs({ left: e(P.l + L.q.l), top: e(L.q.t), width: e(L.q.w), zIndex: 6 })}>
            <div
              className="hl-d3"
              style={{
                position: 'relative',
                background: '#ffffff',
                borderRadius: '14em',
                padding: '14em',
              }}
            >
              <span
                style={abs({
                  left: e(L.q.arrow),
                  top: '-6em',
                  width: '12em',
                  height: '12em',
                  background: '#ffffff',
                  transform: 'rotate(45deg)',
                  borderRadius: '2em',
                })}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '7em' }}>
                <span
                  style={{
                    width: '8em',
                    height: '8em',
                    borderRadius: '50%',
                    background: '#f4b860',
                    flex: 'none',
                  }}
                />
                <span style={{ fontSize: '12em', lineHeight: '1.5', color: muted }}>
                  {t('Before this goes out')}
                </span>
              </div>
              <div style={{ marginTop: '6em' }}>
                <span
                  style={{
                    display: 'block',
                    fontSize: '14em',
                    lineHeight: '1.45',
                    fontWeight: '500',
                    color: ink,
                  }}
                >
                  {t(
                    'Wohnfläche: 78 m² in the Energieausweis, 76 m² in the floor plan. Which is right?'
                  )}
                </span>
              </div>
              <div
                style={{
                  marginTop: '12em',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '8em',
                }}
              >
                {(
                  [
                    ['wf78', '78 m²', 'Energieausweis'],
                    ['wf', '76 m²', t('Floor plan')],
                  ] as [TraceKey, string, string][]
                ).map(([k, val, src]) => (
                  <button key={k} type="button" className="tr-opt" onClick={v.trAnswer(k)}>
                    <span style={{ fontSize: '14em', lineHeight: '1.3', fontWeight: '600' }}>
                      {val}
                    </span>
                    <span style={{ fontSize: '11.5em', lineHeight: '1.3', opacity: '.8' }}>
                      {src}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* the source pages */}
        <div style={abs({ left: e(D.l), top: e(D.t), width: e(D.w), height: e(D.h), zIndex: 2 })}>
          <div className={v.trDoc('Grundriss')} style={abs({ inset: '0' })}>
            <Page L={L} title="Grundriss" sub="Top 12, 3. Obergeschoss, Praterstraße 31">
              <div
                style={abs({
                  left: 'var(--x)',
                  right: 'var(--x)',
                  top: e(L.gr.plan[0]),
                  height: e(L.gr.plan[1]),
                })}
              >
                <svg
                  viewBox="0 0 211 100"
                  style={{ width: '100%', height: '100%', display: 'block', fontFamily: 'inherit' }}
                  fill="none"
                  strokeLinecap="square"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="207" height="96" stroke="#1f3a31" strokeWidth="2.4" />
                  <path
                    d="M80 2V24M80 36V60M140 2V24M140 36V60M2 60H40M52 60H120M132 60H170M182 60H209M110 60V98M160 60V98"
                    stroke="#1f3a31"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M80 24A12 12 0 0 1 92 36M140 24A12 12 0 0 1 152 36M40 60A12 12 0 0 0 52 72M120 60A12 12 0 0 0 132 72M170 60A12 12 0 0 0 182 72"
                    stroke="#7d8a84"
                    strokeWidth="1"
                  />
                  <path
                    d="M18 2H60M96 2H124M158 2H192M209 70V90"
                    stroke="#9fb7ad"
                    strokeWidth="3.5"
                  />
                  <g fill="#4f5c57" stroke="none" fontSize="6.5">
                    <text x="12" y="34">
                      Wohnzimmer
                    </text>
                    <text x="88" y="50">
                      Schlafzimmer
                    </text>
                    <text x="160" y="50">
                      Zimmer
                    </text>
                    <text x="12" y="84">
                      Vorraum
                    </text>
                    <text x="120" y="84">
                      Küche
                    </text>
                    <text x="170" y="84">
                      Bad
                    </text>
                  </g>
                </svg>
              </div>
              <div style={abs({ left: 'var(--x)', top: e(L.gr.fa[0]), whiteSpace: 'nowrap' })}>
                <span
                  style={{
                    fontSize: e(L.gr.fa[1]),
                    lineHeight: '1.3',
                    fontWeight: '600',
                    color: ink,
                  }}
                >
                  Flächenaufstellung
                </span>
              </div>
              {ROOMS.map(([room, area], i) => (
                <div
                  key={room}
                  style={abs({
                    left: 'var(--x)',
                    right: 'var(--x)',
                    top: e(L.gr.rows[0] + i * L.gr.rows[1]),
                    height: e(L.gr.rows[1]),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    whiteSpace: 'nowrap',
                  })}
                >
                  <span style={{ fontSize: e(L.gr.rows[2]), lineHeight: '1.3', color: muted }}>
                    {room}
                  </span>
                  <span
                    style={{
                      fontSize: e(L.gr.rows[2]),
                      lineHeight: '1.3',
                      color: muted,
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {area}
                  </span>
                </div>
              ))}
              <Row top={L.gr.zi[0]} h={L.gr.zi[1]} fs={L.gr.zi[2]} label="Zimmer:" value="3" />
              <Row
                top={L.gr.wf[0]}
                h={L.gr.wf[1]}
                fs={L.gr.wf[2]}
                label="Wohnfläche gesamt:"
                value="76,0 m²"
              />
            </Page>
            <Evidence
              L={L}
              v={v}
              k="zi"
              top={L.gr.zi[0] - 5}
              row={L.hl.rowGr}
              quote="Zimmer: 3"
              label={confirmed('Grundriss')}
            />
            <Evidence
              L={L}
              v={v}
              k="wf"
              top={L.gr.wf[0] - 5}
              row={L.hl.rowGr}
              quote="Wohnfläche gesamt: 76,0 m²"
              label={confirmed('Grundriss')}
            />
          </div>

          <div className={v.trDoc('Energieausweis')} style={abs({ inset: '0' })}>
            <Page L={L} title="Energieausweis" sub="für Wohngebäude, Praterstraße 31, 1020 Wien">
              <div
                aria-hidden="true"
                style={abs({
                  left: 'var(--x)',
                  top: e(bt),
                  display: 'flex',
                  flexDirection: 'column',
                  gap: e(bg),
                })}
              >
                {['#3f8f5f', '#6aa457', '#a5bd4f', '#dcc24f', '#e0a24c', '#d9773f', '#c4523f'].map(
                  (c, i) => (
                    <span
                      key={c}
                      style={{
                        display: 'block',
                        position: 'relative',
                        height: e(bh),
                        width: e(bw0 + i * bstep),
                        background: c,
                      }}
                    >
                      {i === 1 && (
                        <span
                          style={abs({
                            left: e(barrow),
                            top: '0',
                            width: '0',
                            height: '0',
                            borderTop: `${bh / 2}em solid transparent`,
                            borderBottom: `${bh / 2}em solid transparent`,
                            borderRight: `${bh * 0.6}em solid #0a2b22`,
                          })}
                        />
                      )}
                    </span>
                  )
                )}
              </div>
              {EA_ROWS.map(([k, label, value], i) => (
                <Row
                  key={k}
                  top={L.ea.rows[0] + i * L.ea.rows[1]}
                  h={L.ea.rows[1]}
                  fs={L.ea.rows[2]}
                  label={label}
                  value={value}
                />
              ))}
              <div
                aria-hidden="true"
                style={abs({
                  left: 'var(--x)',
                  right: 'var(--x)',
                  top: e(L.ea.grey[0]),
                  borderTop: '1px solid rgba(10,43,34,0.10)',
                  paddingTop: e(L.ea.grey[2] * 2),
                  display: 'flex',
                  flexDirection: 'column',
                  gap: e(L.ea.grey[2]),
                })}
              >
                {[92, 84, 60].map((w) => (
                  <span
                    key={w}
                    style={{
                      display: 'block',
                      height: e(L.ea.grey[1]),
                      width: `${w}%`,
                      borderRadius: '1em',
                      background: '#dcd9cf',
                    }}
                  />
                ))}
              </div>
            </Page>
            {EA_ROWS.map(([k, label, value], i) => (
              <Evidence
                key={k}
                L={L}
                v={v}
                k={k}
                top={L.ea.rows[0] + i * L.ea.rows[1] - 5}
                row={L.hl.rowEa}
                quote={`${label} ${value}`}
                label={confirmed('Energieausweis')}
              />
            ))}
          </div>
        </div>

        <svg
          className="tr-wire"
          viewBox={`0 0 ${L.W} ${L.H}`}
          aria-hidden="true"
          style={abs({
            left: '0',
            top: '0',
            width: e(L.W),
            height: e(L.H),
            zIndex: 5,
            overflow: 'visible',
            pointerEvents: 'none',
          })}
          fill="none"
        >
          {(Object.keys(L.wires) as TraceKey[]).map((k) => {
            const [d, x0, y0, x1, y1] = L.wires[k]
            return (
              <g key={k} className={v.trWire(k)}>
                <path className="tr-kp" pathLength={1} d={d} />
                <circle className="tr-k0" cx={x0} cy={y0} r={L.dot} />
                <circle className="tr-k1" cx={x1} cy={y1} r={L.dot} />
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}

export default function Trace({ t, v }: { t: T; v: HomeVals }) {
  return (
    <section className="tr-sec" style={{ padding: '96px 24px' }}>
      <div className="tr-head">
        <h2 className="tr-h2" style={H2}>
          {t('Every number in your Exposé, traced to its document')}
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
            'When two documents disagree, Immvela asks you. Every value keeps the page and the exact line it was read from, and who confirmed it.'
          )}
        </p>
      </div>
      <div
        ref={v.trSetStage}
        className={v.trStageClass}
        style={{ margin: '48px auto 0', maxWidth: '1160px' }}
      >
        <Stage L={DESK} t={t} v={v} cls="tr-sd" />
        <Stage L={PHONE} t={t} v={v} cls="tr-sm" />
      </div>
      <p className="tr-sr" aria-live="polite">
        {v.live}
      </p>
      <div className="tr-note" style={{ marginTop: '20px' }}>
        <p
          style={{
            margin: '0',
            fontSize: '14px',
            lineHeight: '1.4',
            color: '#4e635b',
            textWrap: 'pretty',
          }}
        >
          {v.trAsking
            ? t('Choose the value that is right to confirm it.')
            : t('Tap any value in the strip to trace it.')}
        </p>
      </div>
    </section>
  )
}
