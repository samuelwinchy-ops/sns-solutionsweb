import type { HomeVals } from './vals'
import type { T } from '@/i18n/immvela'

export default function People({ t, v }: { t: T; v: HomeVals }) {
  return (
    <section className="pp-sec" style={{ padding: '96px 24px' }}>
      <div
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '32px 72px',
        }}
      >
        <div style={{ flex: '1 1 520px', minWidth: '0' }}>
          <h2
            className="pp-h2"
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
              fontSize: '52px',
              textWrap: 'balance',
            }}
          >
            {t('Built in Vienna by SNS Solutions')}
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
              'Today a listing lives in a folder, a phone and five tools. We built Immvela so every property has one record you can trust.'
            )}
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 28px', fontSize: '16px' }}>
          <a className="pp-link" href={v.teamHref}>
            {t('Meet the team')}
          </a>
        </div>
      </div>
    </section>
  )
}
