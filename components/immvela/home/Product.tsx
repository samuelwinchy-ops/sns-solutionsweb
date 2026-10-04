import Image from 'next/image'
import type { CSSProperties, ReactNode } from 'react'
import HelixCanvas from '../HelixCanvas'
import type { HomeVals } from './vals'
import type { T } from '@/i18n/immvela'

/*
 * "It does the work": documents go into the helix and four different drafts fan out around the
 * centre axis, the Exposé, a brochure page, an Instagram post and a virtually staged photo.
 * Plays once in view (vals.ts). Base styles are the final frame; every animation fills backwards,
 * so a paused stage shows the opening frame. The contradiction is told only in the trace section.
 *
 * Desktop stage: 1160 x 560 design px, 1em = one design px. Phone stage: 350 x 660.
 */

const H2: CSSProperties = {
  margin: '0',
  color: '#14473a',
  fontFamily: 'var(--font-bricolage),var(--font-geist-sans),system-ui,sans-serif',
  fontOpticalSizing: 'auto',
  fontVariationSettings: "'opsz' 72",
  fontWeight: '650',
  fontSize: '52px',
  lineHeight: '1.02',
  letterSpacing: '-0.035em',
  textWrap: 'balance',
}

const px = (n: number) => `${n}em`
type Box = { left: number; top: number; width: number; z?: number }

function At({
  box,
  className,
  vars,
  children,
}: {
  box: Box
  className?: string
  vars?: Record<string, string>
  children: ReactNode
}) {
  return (
    <div
      className={className}
      style={
        {
          position: 'absolute',
          left: px(box.left),
          top: px(box.top),
          width: px(box.width),
          zIndex: box.z ?? 1,
          ...vars,
        } as CSSProperties
      }
    >
      {children}
    </div>
  )
}

/** An output fans out of the helix: it starts a short way towards the helix centre and settles at `r`. */
function Arrive({
  box,
  from,
  r,
  d,
  children,
}: {
  box: Box
  from: [number, number]
  r: number
  d: number
  children: ReactNode
}) {
  const cx = box.left + box.width / 2
  const fx = (from[0] - cx) * 0.45
  const fy = (from[1] - (box.top + 120)) * 0.45
  return (
    <At
      box={box}
      className="pv-a pv-arrive"
      vars={{
        '--fx': px(Math.round(fx)),
        '--fy': px(Math.round(fy)),
        '--r': `${r}deg`,
        '--r0': `${r * 2}deg`,
        '--d': `${d}s`,
        transform: `rotate(${r}deg)`,
      }}
    >
      {children}
    </At>
  )
}

function Dot({ c }: { c: string }) {
  return (
    <span
      style={{ width: '8em', height: '8em', borderRadius: '50%', background: c, flex: 'none' }}
    />
  )
}

function Chip({
  cls,
  vars,
  color,
  children,
}: {
  cls: string
  vars: Record<string, string>
  color: string
  children: ReactNode
}) {
  return (
    <div
      className={`gl-glass pv-a ${cls}`}
      style={
        {
          gridArea: '1/1',
          display: 'flex',
          alignItems: 'center',
          gap: '7em',
          padding: '6em 12em',
          borderRadius: '999em',
          whiteSpace: 'nowrap',
          ...vars,
        } as CSSProperties
      }
    >
      <Dot c={color} />
      <span style={{ fontSize: '13.5em', lineHeight: '1.3', fontWeight: '600' }}>{children}</span>
    </div>
  )
}

function Docs({
  t,
  at,
}: {
  t: T
  at: { tiles: [Box, string, string][]; photos: [Box, string, string, string][] }
}) {
  const tile = (label: string, icon: ReactNode) => (
    <div
      className="gl-sheen"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8em',
        padding: '8em 10em',
        borderRadius: '10em',
      }}
    >
      {icon}
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: '0' }}>
        <span
          style={{ fontSize: '12.5em', lineHeight: '1.3', fontWeight: '600', whiteSpace: 'nowrap' }}
        >
          {label}
        </span>
        <span style={{ fontSize: '11em', lineHeight: '1.3', color: '#4f5c57' }}>PDF</span>
      </div>
    </div>
  )
  const eaIcon = (
    <span
      style={{
        width: '24em',
        height: '30em',
        flex: 'none',
        borderRadius: '3em',
        background: '#ffffff',
        boxShadow: 'inset 0 0 0 1px rgba(10,43,34,.16)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        gap: '2em',
        padding: '0 4em 5em',
        boxSizing: 'border-box',
      }}
    >
      <span
        style={{
          display: 'block',
          height: '3em',
          width: '40%',
          background: '#1f7a5a',
          borderRadius: '1em',
        }}
      />
      <span
        style={{
          display: 'block',
          height: '3em',
          width: '65%',
          background: '#7fb069',
          borderRadius: '1em',
        }}
      />
      <span
        style={{
          display: 'block',
          height: '3em',
          width: '90%',
          background: '#f4b860',
          borderRadius: '1em',
        }}
      />
    </span>
  )
  const planIcon = (
    <svg
      viewBox="0 0 24 30"
      style={{ width: '24em', height: '30em', flex: 'none', display: 'block' }}
      fill="#ffffff"
      stroke="#0a2b22"
      strokeOpacity=".55"
      strokeWidth="1.2"
    >
      <rect x=".6" y=".6" width="22.8" height="28.8" rx="3" />
      <path d="M5 7h14v16H5zM12 7v8M5 15h9" fill="none" />
    </svg>
  )
  return (
    <>
      {at.tiles.map(([box, dx, dy], i) => (
        <At
          key={i}
          box={{ ...box, z: 5 }}
          className="pv-a pv-doc"
          vars={{ '--dx': dx, '--dy': dy, '--d': i === 0 ? '.15s' : '.35s' }}
        >
          {i === 0 ? tile(t('Energieausweis'), eaIcon) : tile(t('Grundriss'), planIcon)}
        </At>
      ))}
      {at.photos.map(([box, dx, dy, src], i) => (
        <At
          key={src}
          box={{ ...box, z: 5 }}
          className="pv-a pv-doc"
          vars={{ '--dx': dx, '--dy': dy, '--d': `${0.55 + i * 0.15}s` }}
        >
          <div
            className="hl-d1"
            style={{ background: '#ffffff', padding: '3em', borderRadius: '5em' }}
          >
            <Image
              src={src}
              alt=""
              width={1600}
              height={1068}
              sizes="80px"
              style={{
                display: 'block',
                width: '58em',
                height: '42em',
                objectFit: 'cover',
                borderRadius: '3em',
              }}
            />
          </div>
        </At>
      ))}
    </>
  )
}

const KF: [string, string][] = [
  ['Wohnfläche', '76 m²'],
  ['Zimmer', '3'],
  ['Baujahr', '1908'],
  ['HWB', '48'],
  ['fGEE', '0,92'],
]

function Expose({ t, photoH }: { t: T; photoH: number }) {
  return (
    <div
      className="hl-d3"
      style={{ background: '#fbfaf5', color: '#1c2a25', borderRadius: '8em', overflow: 'hidden' }}
    >
      <Image
        src="/immvela/redesign/sample-cover.jpg"
        alt=""
        width={1300}
        height={1107}
        sizes="(max-width: 760px) 90vw, 420px"
        style={{ width: '100%', height: px(photoH), objectFit: 'cover', display: 'block' }}
      />
      <div style={{ padding: '14em 16em 16em' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3em' }}>
          <span style={{ fontSize: '12em', lineHeight: '1.5', color: '#5b6862' }}>
            {t('Exposé, Gentzgasse 14, 1180 Wien')}
          </span>
          <span
            style={{
              fontSize: '20em',
              lineHeight: '1.15',
              fontWeight: '600',
              letterSpacing: '-0.02em',
              textWrap: 'balance',
            }}
          >
            {t('Helle 3-Zimmer-Wohnung mit Balkon in Währing')}
          </span>
        </div>
        <div
          style={{
            marginTop: '10em',
            display: 'grid',
            gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
            borderRadius: '5em',
            overflow: 'hidden',
            background: '#1f3a31',
            color: '#eef3ef',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {KF.map(([k, val], i) => (
            <div
              key={k}
              style={{
                padding: '7em 7em 8em',
                borderLeft: i ? '1px solid rgba(255,255,255,0.14)' : undefined,
              }}
            >
              <div style={{ whiteSpace: 'nowrap', lineHeight: '1.2' }}>
                <span style={{ fontSize: '9.5em', opacity: '.85' }}>{t(k)}</span>
              </div>
              <div style={{ marginTop: '2em', whiteSpace: 'nowrap' }}>
                <span
                  className="pv-kf"
                  style={{ fontSize: '14.5em', lineHeight: '1.3', fontWeight: '600' }}
                >
                  {val}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '12em', display: 'flex', flexDirection: 'column', gap: '3em' }}>
          <span style={{ fontSize: '11.5em', lineHeight: '1.3', fontWeight: '600' }}>
            {t('Objektbeschreibung')}
          </span>
          <span style={{ fontSize: '12em', lineHeight: '1.5', color: '#4f5c57' }}>
            Altbauwohnung im zweiten Stock, ruhig zum Innenhof gelegen, mit Flügeltüren und
            Fischgrätparkett.
          </span>
        </div>
      </div>
    </div>
  )
}

function Pill({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <div
      style={{
        position: 'absolute',
        padding: '4em 8em',
        borderRadius: '999em',
        background: 'rgba(255,255,255,0.94)',
        ...style,
      }}
    >
      <span
        style={{
          display: 'block',
          fontSize: '11em',
          lineHeight: '1.3',
          fontWeight: '600',
          whiteSpace: 'nowrap',
          color: '#0a2b22',
        }}
      >
        {children}
      </span>
    </div>
  )
}

function Brochure({ t, h }: { t: T; h: number }) {
  return (
    <div
      className="hl-d2"
      style={{
        position: 'relative',
        height: px(h),
        background: '#ffffff',
        borderRadius: '4em',
        overflow: 'hidden',
        color: '#1c2a25',
      }}
    >
      <Image
        src="/immvela/redesign/sample-study.jpg"
        alt=""
        width={1600}
        height={1068}
        sizes="240px"
        style={{ width: '100%', height: '46%', objectFit: 'cover', display: 'block' }}
      />
      <div style={{ padding: '11em 12em', display: 'flex', flexDirection: 'column', gap: '6em' }}>
        <span
          style={{
            fontSize: '9.5em',
            lineHeight: '1.3',
            letterSpacing: '.08em',
            textTransform: 'uppercase',
            color: '#1f7a5a',
            fontWeight: '600',
          }}
        >
          Gentzgasse 14
        </span>
        <span
          style={{
            fontSize: '14em',
            lineHeight: '1.2',
            fontWeight: '600',
            letterSpacing: '-0.01em',
          }}
        >
          Wohnen im Altbau, mitten in Währing
        </span>
        <span
          aria-hidden="true"
          style={{ display: 'flex', flexDirection: 'column', gap: '5em', marginTop: '3em' }}
        >
          {[92, 84, 88, 56].map((w) => (
            <span
              key={w}
              style={{
                display: 'block',
                height: '3.5em',
                width: `${w}%`,
                borderRadius: '1em',
                background: '#dcd9cf',
              }}
            />
          ))}
        </span>
      </div>
      <Pill style={{ left: '10em', top: '10em' }}>{t('Brochure')}</Pill>
    </div>
  )
}

function Post({ t, photoH }: { t: T; photoH: number }) {
  return (
    <div className="gl-sheen hl-d2" style={{ borderRadius: '14em', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8em', padding: '10em 14em' }}>
        <span
          style={{
            width: '20em',
            height: '20em',
            borderRadius: '6em',
            background: 'linear-gradient(45deg,#f9a52b,#e1306c,#833ab4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 'none',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            style={{ width: '12em', height: '12em' }}
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.2"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
          </svg>
        </span>
        <span style={{ fontSize: '12.5em', lineHeight: '1.4', color: '#4f5c57' }}>
          {t('Instagram')}
        </span>
      </div>
      <Image
        src="/immvela/redesign/sample-lounge.jpg"
        alt=""
        width={960}
        height={637}
        sizes="260px"
        style={{ width: '100%', height: px(photoH), objectFit: 'cover', display: 'block' }}
      />
      <div style={{ padding: '10em 14em 0' }}>
        <span
          style={{ display: 'block', fontSize: '12.5em', lineHeight: '1.45', color: '#0a2b22' }}
        >
          {t('Altbau in Währing, Balkon zum Innenhof. HWB 48, fGEE 0,92.')}
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10em 14em 12em' }}>
        <span
          className="pv-a pv-in"
          style={
            {
              '--d': '3.7s',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.5em',
              whiteSpace: 'nowrap',
              fontSize: '12em',
              lineHeight: '1.3',
              fontWeight: '600',
              padding: '.45em .85em',
              borderRadius: '999em',
              background: '#f1efe8',
              color: '#0a2b22',
            } as CSSProperties
          }
        >
          <span
            style={{
              width: '.5em',
              height: '.5em',
              borderRadius: '50%',
              background: '#1f7a5a',
              flex: 'none',
            }}
          />
          {t('Ready. Publish?')}
        </span>
      </div>
    </div>
  )
}

function Staged({ t, w, h }: { t: T; w: number; h: number }) {
  return (
    <div
      className="hl-d1"
      style={{ position: 'relative', background: '#ffffff', padding: '6em', borderRadius: '4em' }}
    >
      <Image
        src="/immvela/redesign/sample-living.jpg"
        alt=""
        width={1600}
        height={1142}
        sizes="240px"
        style={{
          display: 'block',
          width: px(w),
          height: px(h),
          objectFit: 'cover',
          borderRadius: '2em',
        }}
      />
      <Pill style={{ left: '14em', bottom: '14em' }}>{t('Virtually staged')}</Pill>
    </div>
  )
}

function Helix({ v, box, dock, inner }: { v: HomeVals; box: Box; dock: boolean; inner: number }) {
  return (
    <At box={{ ...box, z: 6 }} className={dock ? 'pv-a pv-dock' : undefined}>
      <div
        className="gl-glass"
        style={{
          width: px(box.width),
          height: px(box.width),
          borderRadius: '50%',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow:
            'inset 0 1px 0 #fff,0 2px 4px rgba(10,43,34,0.06),0 18px 34px -16px rgba(10,43,34,0.30)',
        }}
      >
        <HelixCanvas rate={v.pvHelixRate} style={{ width: px(inner), height: px(inner) }} />
      </div>
    </At>
  )
}

const PHOTOS = [
  '/immvela/redesign/sample-living.jpg',
  '/immvela/redesign/sample-lounge.jpg',
  '/immvela/redesign/sample-study.jpg',
]

export default function Product({ t, v }: { t: T; v: HomeVals }) {
  // desktop helix centre while working: the stage's centre line
  const C: [number, number] = [580, 255]
  return (
    <section className="pv-sec" style={{ padding: '72px 24px 104px', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        <div style={{ maxWidth: '640px' }}>
          <h2 className="pv-h2" style={H2}>
            {t('Documents in, a checked listing out')}
          </h2>
          <p
            style={{
              margin: '16px 0 0',
              fontSize: '18px',
              lineHeight: '1.55',
              color: '#3f574f',
              textWrap: 'pretty',
            }}
          >
            {t(
              'Give it the Energieausweis, the floor plan and the photos. Immvela drafts the Exposé, the brochure and the posts, and stages the empty rooms.'
            )}
          </p>
        </div>

        <div data-pv-stage="" ref={v.pvSetStage} style={{ marginTop: '40px' }}>
          <div className={v.pvStageClass} key={v.pvRun}>
            {/* DESKTOP */}
            <div
              className="pv-sd"
              role="img"
              aria-label={t(
                'Five documents, an Energieausweis, a floor plan and three photos, go into the Immvela helix. Four drafts for Gentzgasse 14 in 1180 Wien come out around it: an Exposé, a brochure page, an Instagram post that waits for your approval, and a photo marked as virtually staged.'
              )}
              style={{ containerType: 'inline-size', width: '100%' }}
            >
              <div
                style={{ position: 'relative', fontSize: 'calc(100cqw / 1160)', height: '560em' }}
              >
                <Docs
                  t={t}
                  at={{
                    tiles: [
                      [{ left: 0, top: 196, width: 150 }, '505em', '35em'],
                      [{ left: 162, top: 196, width: 128 }, '354em', '35em'],
                    ],
                    photos: [
                      [{ left: 22, top: 268, width: 64 }, '526em', '-38em', PHOTOS[0]],
                      [{ left: 108, top: 268, width: 64 }, '440em', '-38em', PHOTOS[1]],
                      [{ left: 194, top: 268, width: 64 }, '354em', '-38em', PHOTOS[2]],
                    ],
                  }}
                />

                <Helix v={v} box={{ left: 300, top: -35, width: 170 }} dock inner={136} />
                <div
                  style={{
                    position: 'absolute',
                    left: '460em',
                    top: '356em',
                    width: '240em',
                    display: 'grid',
                    justifyItems: 'center',
                    zIndex: 6,
                  }}
                >
                  <Chip cls="pv-win" vars={{ '--d': '.3s', '--len': '2s' }} color="#1f7a5a">
                    {t('Reading 5 documents')}
                  </Chip>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: '33em',
                    width: '345em',
                    display: 'grid',
                    justifyItems: 'end',
                    zIndex: 6,
                  }}
                >
                  <Chip cls="pv-win" vars={{ '--d': '2.4s', '--len': '1.7s' }} color="#1f7a5a">
                    {t('Drafting the Exposé, brochure and posts')}
                  </Chip>
                  <Chip cls="pv-in" vars={{ '--d': '4.1s' }} color="#1f7a5a">
                    {t('Drafts ready for your review')}
                  </Chip>
                </div>

                {/* the four outputs, balanced on the centre axis */}
                <Arrive box={{ left: 180, top: 120, width: 236, z: 2 }} from={C} r={-6} d={2.55}>
                  <Brochure t={t} h={330} />
                </Arrive>
                <Arrive box={{ left: 744, top: 64, width: 246, z: 2 }} from={C} r={5} d={2.8}>
                  <Post t={t} photoH={168} />
                </Arrive>
                <Arrive box={{ left: 380, top: 40, width: 400, z: 3 }} from={C} r={-1.5} d={2.3}>
                  <Expose t={t} photoH={150} />
                </Arrive>
                <Arrive box={{ left: 712, top: 336, width: 232, z: 4 }} from={C} r={3} d={3.05}>
                  <Staged t={t} w={220} h={150} />
                </Arrive>
              </div>
            </div>

            {/* PHONE: the same story stacked; the helix stays above the drafts */}
            <div
              className="pv-sm"
              role="img"
              aria-label={t(
                'Five documents go into the Immvela helix. Four drafts come out: an Exposé, a brochure page, an Instagram post that waits for your approval, and a photo marked as virtually staged.'
              )}
              style={{ containerType: 'inline-size', width: '100%' }}
            >
              <div
                style={{ position: 'relative', fontSize: 'calc(100cqw / 350)', height: '700em' }}
              >
                <Docs
                  t={t}
                  at={{
                    tiles: [
                      [{ left: 0, top: 0, width: 132 }, '109em', '66em'],
                      [{ left: 140, top: 0, width: 118 }, '-24em', '66em'],
                    ],
                    photos: [
                      [{ left: 266, top: -2, width: 40 }, '-111em', '64em', PHOTOS[0]],
                      [{ left: 266, top: 44, width: 40 }, '-111em', '18em', PHOTOS[1]],
                      [{ left: 310, top: 22, width: 40 }, '-155em', '41em', PHOTOS[2]],
                    ],
                  }}
                />
                <Helix v={v} box={{ left: 145, top: 64, width: 60 }} dock={false} inner={48} />
                <div
                  style={{
                    position: 'absolute',
                    left: '0',
                    top: '134em',
                    width: '350em',
                    display: 'grid',
                    justifyItems: 'center',
                    zIndex: 6,
                  }}
                >
                  <Chip cls="pv-win" vars={{ '--d': '.3s', '--len': '2s' }} color="#1f7a5a">
                    {t('Reading 5 documents')}
                  </Chip>
                  <Chip cls="pv-win" vars={{ '--d': '2.4s', '--len': '1.7s' }} color="#1f7a5a">
                    {t('Drafting the Exposé, brochure and posts')}
                  </Chip>
                  <Chip cls="pv-in" vars={{ '--d': '4.1s' }} color="#1f7a5a">
                    {t('Drafts ready for your review')}
                  </Chip>
                </div>
                <Arrive
                  box={{ left: 20, top: 180, width: 310, z: 3 }}
                  from={[175, 94]}
                  r={0}
                  d={2.3}
                >
                  <Expose t={t} photoH={130} />
                </Arrive>
                <Arrive
                  box={{ left: 0, top: 528, width: 112, z: 2 }}
                  from={[175, 94]}
                  r={-4}
                  d={2.55}
                >
                  <Brochure t={t} h={156} />
                </Arrive>
                <Arrive
                  box={{ left: 238, top: 528, width: 112, z: 2 }}
                  from={[175, 94]}
                  r={4}
                  d={2.8}
                >
                  <Staged t={t} w={100} h={140} />
                </Arrive>
                <Arrive
                  box={{ left: 118, top: 520, width: 114, z: 3 }}
                  from={[175, 94]}
                  r={0}
                  d={3.05}
                >
                  <PhonePost t={t} />
                </Arrive>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
          <button type="button" className="pv-replay" onClick={v.pvReplay}>
            <svg
              viewBox="0 0 24 24"
              style={{ width: '16px', height: '16px' }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 12a9 9 0 1 0 3-6.7" />
              <path d="M3 4v5h5" />
            </svg>
            {t('Watch it again')}
          </button>
        </div>
      </div>
    </section>
  )
}

/** On the phone the post is a small tile: the photo and the approval question. */
function PhonePost({ t }: { t: T }) {
  return (
    <div className="gl-sheen hl-d2" style={{ borderRadius: '10em', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5em', padding: '6em 8em' }}>
        <span
          style={{
            width: '14em',
            height: '14em',
            borderRadius: '4em',
            background: 'linear-gradient(45deg,#f9a52b,#e1306c,#833ab4)',
            flex: 'none',
          }}
        />
        <span style={{ fontSize: '10em', lineHeight: '1.3', color: '#4f5c57' }}>
          {t('Instagram')}
        </span>
      </div>
      <Image
        src="/immvela/redesign/sample-lounge.jpg"
        alt=""
        width={960}
        height={637}
        sizes="120px"
        style={{ width: '100%', height: '96em', objectFit: 'cover', display: 'block' }}
      />
      <div style={{ padding: '7em 8em 8em' }}>
        <span
          className="pv-a pv-in"
          style={
            {
              '--d': '3.7s',
              display: 'block',
              fontSize: '10.5em',
              lineHeight: '1.3',
              fontWeight: '600',
              color: '#0a2b22',
            } as CSSProperties
          }
        >
          {t('Ready. Publish?')}
        </span>
      </div>
    </div>
  )
}
