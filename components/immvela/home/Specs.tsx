import type { HomeVals } from './vals'
import type { T } from '@/i18n/immvela'

export default function Specs({ t, v }: { t: T; v: HomeVals }) {
  return (
    <section className="sp-sec" style={{ padding: '96px 24px' }}>
      <div className="sp-wrap">
        <h2
          className="sp-h2"
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
          {t('Everything Immvela does')}
        </h2>
        <dl className="sp-grid">
          <div className="sp-cell">
            <dt className="sp-name">
              <span>{t('Documents')}</span>
              <span className="sp-live">{t('Live')}</span>
            </dt>
            <dd className="sp-line">
              {t(
                'Reads the Energieausweis and the Grundbuchauszug, flags contradictions and expiring certificates. Nothing is used until you confirm it.'
              )}
            </dd>
          </div>
          <div className="sp-cell">
            <dt className="sp-name">
              <span>{t('Exposé, brochure and posts')}</span>
              <span className="sp-live">{t('Live')}</span>
            </dt>
            <dd className="sp-line">
              {t(
                'Drafted from your confirmed values, in the German of the listing’s country, with your office brand.'
              )}
            </dd>
          </div>
          <div className="sp-cell">
            <dt className="sp-name">
              <span>{t('Staging')}</span>
              <span className="sp-live">{t('Live')}</span>
            </dt>
            <dd className="sp-line">
              {t(
                'Furnishes photos of empty rooms. Every staged photo is labelled as virtually staged.'
              )}
            </dd>
          </div>
          <div className="sp-cell">
            <dt className="sp-name">
              <span>{t('Publishing')}</span>
              <span className="sp-live">{t('Live')}</span>
            </dt>
            <dd className="sp-line">
              {t(
                'Instagram, Facebook, LinkedIn, TikTok and YouTube from one place, always after your approval.'
              )}
            </dd>
          </div>
          <div className="sp-cell">
            <dt className="sp-name">
              <span>{t('CRM import')}</span>
              <span className="sp-live">{t('Live')}</span>
            </dt>
            <dd className="sp-line">
              {t(
                'Bring listings in with an OpenImmo export from onOffice, Justimmo, Propstack or FLOWFACT.'
              )}
            </dd>
          </div>
          <div className="sp-cell">
            <dt className="sp-name">
              <span>{t('Your office')}</span>
              <span className="sp-live">{t('Live')}</span>
            </dt>
            <dd className="sp-line">
              {t(
                'Listings, documents and confirmed values belong to the office. Every agent has their own login.'
              )}
            </dd>
          </div>
          <div className="sp-cell">
            <dt className="sp-name">
              <span>{t('Language')}</span>
              <span className="sp-live">{t('Live')}</span>
            </dt>
            <dd className="sp-line">
              {t('German first, English available. Written for Austria, Germany and Switzerland.')}
            </dd>
          </div>
          <div className="sp-cell">
            <dt className="sp-name">
              <span>{t('Enquiries')}</span>
              <span className="sp-next">{t('Next')}</span>
            </dt>
            <dd className="sp-line">
              {t('Answers and qualifies enquiries. Never books viewings or quotes prices.')}
            </dd>
          </div>
          <div className="sp-cell">
            <dt className="sp-name">
              <span>{t('Data and privacy')}</span>
            </dt>
            <dd className="sp-line">
              <a className="sp-link" href={v.path('/trust')}>
                {t('How we handle documents and data')}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
