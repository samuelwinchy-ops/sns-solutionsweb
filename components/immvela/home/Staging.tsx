import Image from 'next/image'
import HelixCanvas from '../HelixCanvas'
import type { HomeVals } from './vals'
import type { T } from '@/i18n/immvela'

export default function Staging({ t, v }: { t: T; v: HomeVals }) {
  return (
    <section className="sw-sec" style={{ padding: '96px 24px' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        <h2
          className="sw-h2"
          style={{
            margin: '0',
            color: '#14473a',
            fontFamily: 'var(--font-bricolage),var(--font-geist-sans),system-ui,sans-serif',
            fontOpticalSizing: 'auto',
            fontVariationSettings: "'opsz' 72",
            fontWeight: '650',
            letterSpacing: '-0.035em',
            lineHeight: '1.02',
            maxWidth: '720px',
            textAlign: 'left',
            fontSize: '52px',
            textWrap: 'balance',
          }}
        >
          {t('Furnished before the first viewing')}
        </h2>
        <p
          style={{
            margin: '20px 0 0',
            maxWidth: '560px',
            textAlign: 'left',
            fontSize: '19px',
            lineHeight: '1.55',
            color: '#3f574f',
            textWrap: 'pretty',
          }}
        >
          {t(
            'Upload a photo of an empty room. Immvela furnishes it and marks the result as virtually staged.'
          )}
        </p>
      </div>
      <div className={v.swStageClass} style={{ margin: '48px auto 0', maxWidth: '1160px' }}>
        <div style={{ position: 'relative' }}>
          <div
            className="sw-photo"
            role="img"
            aria-label={t(
              'A living room at Gentzgasse 14 in Vienna, split down the middle: empty on the right, furnished by Immvela on the left and marked virtually staged. The Immvela helix sits on the seam as a handle.'
            )}
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '2/1',
              borderRadius: '20px',
              overflow: 'hidden',
              background: '#e6e1d4',
              boxShadow: '0 0 0 1px rgba(10,43,34,0.08),0 24px 60px rgba(10,43,34,0.10)',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '0',
                background: 'linear-gradient(180deg,#e9e5da 0%,#efebe1 30%,#e8e3d6 72%)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  top: '0',
                  height: '9%',
                  background: 'linear-gradient(180deg,rgba(10,43,34,0.06),rgba(10,43,34,0))',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  top: '7%',
                  height: '1.2%',
                  background: '#f6f4ee',
                  boxShadow: '0 1px 0 rgba(10,43,34,0.05)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '21%',
                  top: '16%',
                  width: '14%',
                  height: '52%',
                  boxSizing: 'border-box',
                  border: 'max(5px,0.6vw) solid #f8f7f2',
                  background: 'linear-gradient(180deg,#fcfbf7,#f3f1ea)',
                  boxShadow: '0 0 0 1px rgba(10,43,34,0.07),inset 0 0 0 1px rgba(10,43,34,0.05)',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '0',
                    bottom: '0',
                    width: '3px',
                    marginLeft: '-1.5px',
                    background: '#f8f7f2',
                    boxShadow: '0 0 0 .5px rgba(10,43,34,0.06)',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    top: '34%',
                    height: '3px',
                    background: '#f8f7f2',
                    boxShadow: '0 0 0 .5px rgba(10,43,34,0.06)',
                  }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '62%',
                  top: '16%',
                  width: '14%',
                  height: '52%',
                  boxSizing: 'border-box',
                  border: 'max(5px,0.6vw) solid #f8f7f2',
                  background: 'linear-gradient(180deg,#fcfbf7,#f3f1ea)',
                  boxShadow: '0 0 0 1px rgba(10,43,34,0.07),inset 0 0 0 1px rgba(10,43,34,0.05)',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '0',
                    bottom: '0',
                    width: '3px',
                    marginLeft: '-1.5px',
                    background: '#f8f7f2',
                    boxShadow: '0 0 0 .5px rgba(10,43,34,0.06)',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    top: '34%',
                    height: '3px',
                    background: '#f8f7f2',
                    boxShadow: '0 0 0 .5px rgba(10,43,34,0.06)',
                  }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  bottom: '26%',
                  height: '1.6%',
                  background: '#f7f5ef',
                  boxShadow: '0 1px 0 rgba(10,43,34,0.07)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '0',
                  right: '0',
                  bottom: '0',
                  height: '26%',
                  background:
                    'repeating-linear-gradient(90deg,rgba(110,80,40,0.07) 0 1px,rgba(0,0,0,0) 1px 7.5%),linear-gradient(180deg,#d6c4a2,#c8b28b)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '8%',
                  bottom: '0',
                  width: '30%',
                  height: '26%',
                  background: 'rgba(255,251,240,0.42)',
                  clipPath: 'polygon(38% 0,82% 0,64% 100%,0 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: '49%',
                  bottom: '0',
                  width: '30%',
                  height: '26%',
                  background: 'rgba(255,251,240,0.42)',
                  clipPath: 'polygon(38% 0,82% 0,64% 100%,0 100%)',
                }}
              />
              <span
                className="sw-chip-row"
                style={{
                  position: 'absolute',
                  right: '16px',
                  bottom: '16px',
                  fontSize: '13px',
                  lineHeight: '1.3',
                  fontWeight: '600',
                  padding: '7px 12px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.9)',
                  color: '#0a2b22',
                  boxShadow: '0 0 0 1px rgba(10,43,34,0.08)',
                }}
              >
                {t('Empty room')}
              </span>
            </div>
            <div
              className="sw-staged"
              aria-hidden="true"
              style={{ position: 'absolute', inset: '0', clipPath: v.clip }}
            >
              <Image
                className="sw-settle"
                src="/immvela/redesign/sample-living.jpg"
                alt=""
                style={{
                  position: 'absolute',
                  inset: '0',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                width={1600}
                height={1142}
                sizes="(max-width: 1208px) 100vw, 1160px"
              />
              <span
                className="sw-chip sw-chip-row"
                style={{
                  position: 'absolute',
                  left: '16px',
                  bottom: '16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  lineHeight: '1.3',
                  fontWeight: '600',
                  padding: '6px 12px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.92)',
                  color: '#0a2b22',
                  boxShadow: '0 0 0 1px rgba(10,43,34,0.08),0 4px 14px rgba(10,43,34,0.12)',
                }}
              >
                {t('Virtually staged')}
              </span>
            </div>
            <div
              className="sw-mover"
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '0',
                bottom: '0',
                left: v.moverLeft,
                width: '0',
                zIndex: '2',
                pointerEvents: 'none',
              }}
            >
              <div
                className="sw-line"
                style={{
                  position: 'absolute',
                  top: '0',
                  bottom: '0',
                  left: '-1px',
                  width: '2px',
                  background: '#ffffff',
                  boxShadow: '0 0 0 .5px rgba(10,43,34,0.14)',
                }}
              />
            </div>
          </div>
          <input
            className="sw-range"
            id="sw-compare"
            type="range"
            min="0"
            max="100"
            step="0.5"
            value={v.pos}
            aria-label={t('Compare the empty room with the staged room')}
            aria-valuetext={v.valueText}
            onChange={v.scrub}
          />
          <div
            className="sw-seam"
            aria-hidden="true"
            style={{ position: 'absolute', inset: '0', pointerEvents: 'none', zIndex: '4' }}
          >
            <div
              className="sw-mover"
              style={{ position: 'absolute', top: '0', bottom: '0', left: v.moverLeft, width: '0' }}
            >
              <div
                className="sw-lens"
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '50%',
                  width: 'var(--lens)',
                  height: 'var(--lens)',
                }}
              >
                <svg
                  className="sw-grip"
                  viewBox="0 0 14 14"
                  style={{ left: '-22px' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 2.5L4.5 7L9 11.5" />
                </svg>
                <svg
                  className="sw-grip"
                  viewBox="0 0 14 14"
                  style={{ right: '-22px' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 2.5L9.5 7L5 11.5" />
                </svg>
                <div className="sw-breath" style={{ width: '100%', height: '100%' }}>
                  <div
                    className="sw-face"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      background: '#ffffff',
                      boxShadow: '0 0 0 1px rgba(10,43,34,0.08),0 12px 32px rgba(10,43,34,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <HelixCanvas className="sw-helix" style={{ width: '86%', height: '86%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="sw-bar"
          style={{
            marginTop: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          <span style={{ fontSize: '14px', lineHeight: '1.4', color: '#4e635b' }}>
            {t('Wohnzimmer, Gentzgasse 14, 1180 Wien')}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div className="sw-segs" role="group" aria-label={t('Show the room')}>
              <button
                type="button"
                className={v.emptyClass}
                aria-pressed={v.emptyPressed}
                onClick={v.showEmpty}
              >
                {t('Empty room')}
              </button>
              <button
                type="button"
                className={v.stagedClass}
                aria-pressed={v.stagedPressed}
                onClick={v.showStaged}
              >
                {t('Staged')}
              </button>
            </div>
            <span style={{ fontSize: '14px', color: '#4e635b' }}>{t('or drag the handle')}</span>
          </div>
        </div>
        <p
          style={{
            margin: '12px 0 0',
            fontSize: '14px',
            lineHeight: '1.4',
            color: '#4e635b',
            textWrap: 'pretty',
          }}
        >
          {t('Every staged photo is labelled as virtually staged.')}
        </p>
      </div>
    </section>
  )
}
