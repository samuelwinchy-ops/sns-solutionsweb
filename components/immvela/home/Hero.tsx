import type { CSSProperties } from 'react'
import HelixCanvas from '../HelixCanvas'
import type { HomeVals } from './vals'
import type { T } from '@/i18n/immvela'

export default function Hero({ t, v }: { t: T; v: HomeVals }) {
  return (
    <section
      className="hv-hero"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8px 24px 48px',
        boxSizing: 'border-box',
        textAlign: 'center',
      }}
    >
      <div
        className="dr-stage"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
      >
        <div
          className="dr-helix"
          data-hero-mark=""
          ref={v.setMark}
          role="img"
          aria-label={t('The Immvela helix')}
          style={{ aspectRatio: '1', maxWidth: '100%' }}
        >
          <div className="dr-ack" style={{ width: '100%', height: '100%' }}>
            <HelixCanvas
              intro={{ delay: 0.15, duration: 2.4 }}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
        <h1
          className="dr-word"
          aria-label={t('Immvela.')}
          style={{
            color: '#14473a',
            margin: 'clamp(14px,2.2vw,28px) 0 0',
            fontFamily: 'var(--font-inter),system-ui,sans-serif',
            fontWeight: '700',
            lineHeight: '1',
            letterSpacing: '-0.035em',
            display: 'flex',
            alignItems: 'baseline',
            whiteSpace: 'nowrap',
          }}
        >
          <span className="dr-mask" aria-hidden="true">
            <span className="dr-l" style={{ '--i': '0' } as CSSProperties}>
              {'I'}
            </span>
            <span className="dr-l" style={{ '--i': '1' } as CSSProperties}>
              {'m'}
            </span>
            <span className="dr-l" style={{ '--i': '2' } as CSSProperties}>
              {'m'}
            </span>
            <span className="dr-l" style={{ '--i': '3' } as CSSProperties}>
              {'v'}
            </span>
            <span className="dr-l" style={{ '--i': '4' } as CSSProperties}>
              {'e'}
            </span>
            <span className="dr-l" style={{ '--i': '5' } as CSSProperties}>
              {'l'}
            </span>
            <span className="dr-l" style={{ '--i': '6' } as CSSProperties}>
              {'a'}
            </span>
          </span>
          <span className="dr-dot" aria-hidden="true" style={{ color: '#1f7a5a' }}>
            {'.'}
          </span>
        </h1>
        <p
          className="dr-line"
          style={{
            margin: 'clamp(12px,1.6vw,20px) 0 0',
            maxWidth: '32ch',
            fontSize: 'clamp(19px,1.7vw,24px)',
            fontWeight: '400',
            letterSpacing: '-0.01em',
            lineHeight: '1.4',
            color: '#3f574f',
            textWrap: 'balance',
          }}
        >
          {t('Your personal real estate assistant')}
        </p>
        <div
          className="dr-cta"
          style={{ marginTop: '28px', display: 'flex', justifyContent: 'center' }}
        >
          <a
            className="hv-cta"
            href="#apply"
            onClick={v.onHeroCta}
            style={{
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              padding: '14px 24px',
              borderRadius: '999px',
              background: '#1f7a5a',
              color: '#ffffff',
            }}
          >
            {t('Apply for the closed beta')}
          </a>
        </div>
        <p
          className="dr-proof"
          style={{
            margin: '14px 0 0',
            fontSize: '14px',
            lineHeight: '1.4',
            color: '#4e635b',
            textWrap: 'balance',
          }}
        >
          {t('Live today in a closed beta, built in Vienna by SNS Solutions.')}
        </p>
      </div>
    </section>
  )
}
