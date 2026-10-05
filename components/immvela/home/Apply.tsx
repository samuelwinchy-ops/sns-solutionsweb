import { ApplyForm } from '../forms'
import type { HomeVals } from './vals'
import type { T } from '@/i18n/immvela'

export default function Apply({ t, v }: { t: T; v: HomeVals }) {
  return (
    <section id="apply" className="ap-sec" style={{ padding: '96px 24px' }}>
      <div className="ap-grid">
        <div className="ap-head">
          <h2
            className="ap-h2"
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
            {t('Apply for the closed beta')}
          </h2>
        </div>
        <ApplyForm locale={v.locale} privacyHref={v.privacyHref}>
          <p
            style={{
              margin: '0',
              fontSize: '14px',
              lineHeight: '1.45',
              color: '#4e635b',
              textWrap: 'pretty',
            }}
          >
            {t('We reply within a week and set up your first listing with you.')}
          </p>
          <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.45', color: '#4e635b' }}>
            {t('Not ready to apply?')}{' '}
            <a className="ap-plink" href={v.path('/partner')}>
              {t('Help us build it')}
            </a>
            {'.'}
          </p>
        </ApplyForm>
        <dl className="ap-answers">
          <div className="ap-q">
            <dt
              style={{ fontSize: '16px', lineHeight: '1.4', fontWeight: '600', color: '#14473a' }}
            >
              {t('Is it in German?')}
            </dt>
            <dd
              style={{
                margin: '0',
                fontSize: '16px',
                lineHeight: '1.55',
                color: '#3f574f',
                textWrap: 'pretty',
              }}
            >
              {t(
                'Yes. German first, English available. The Exposé is always written in the German of the listing’s country.'
              )}
            </dd>
          </div>
          <div className="ap-q">
            <dt
              style={{ fontSize: '16px', lineHeight: '1.4', fontWeight: '600', color: '#14473a' }}
            >
              {t('Does it work with my CRM?')}
            </dt>
            <dd
              style={{
                margin: '0',
                fontSize: '16px',
                lineHeight: '1.55',
                color: '#3f574f',
                textWrap: 'pretty',
              }}
            >
              {t(
                'Bring listings in with an OpenImmo export from onOffice, Justimmo, Propstack or FLOWFACT.'
              )}
            </dd>
          </div>
          <div className="ap-q">
            <dt
              style={{ fontSize: '16px', lineHeight: '1.4', fontWeight: '600', color: '#14473a' }}
            >
              {t('Where is my data?')}
            </dt>
            <dd style={{ margin: '0', fontSize: '16px', lineHeight: '1.55' }}>
              {t('Your database and files are stored in Frankfurt. Documents and text are processed by AI providers in the USA.')}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
