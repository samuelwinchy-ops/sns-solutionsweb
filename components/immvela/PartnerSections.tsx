import type { Locale } from '@/i18n/config'
import type { T } from '@/i18n/immvela'
import { PartnerForm } from './forms'

export default function PartnerSections({
  t,
  locale,
  privacyHref,
}: {
  t: T
  locale: Locale
  privacyHref: string
}) {
  return (
    <>
      <section className="sh-sec" style={{ padding: '96px 24px 88px' }}>
        <div className="sh-wrap">
          <h1
            className="sh-h1"
            style={{
              margin: '0',
              fontFamily: 'var(--font-bricolage),var(--font-geist-sans),system-ui,sans-serif',
              fontOpticalSizing: 'auto',
              fontVariationSettings: "'opsz' 72",
              fontWeight: '650',
              letterSpacing: '-0.035em',
              lineHeight: '1.02',
              maxWidth: '760px',
              fontSize: '52px',
              textWrap: 'balance',
            }}
          >
            {t('Help us build Immvela')}
          </h1>
          <p
            style={{
              margin: '24px 0 0',
              maxWidth: '560px',
              fontSize: '19px',
              lineHeight: '1.55',
              color: '#3f574f',
              textWrap: 'pretty',
            }}
          >
            {t(
              'We are building Immvela with estate agents. Give us 30 minutes and tell us what slows your listings down.'
            )}
          </p>
        </div>
      </section>
      <section className="sh-sec">
        <div className="sh-wrap sh-grid">
          <div className="sh-info">
            <div className="sh-block">
              <h2 className="sh-h2">{t('What happens')}</h2>
              <ol className="sh-steps">
                <li className="sh-step">
                  <span className="sh-num" aria-hidden="true">
                    {'1'}
                  </span>
                  <p className="sh-steptext">{t('You pick a time.')}</p>
                </li>
                <li className="sh-step">
                  <span className="sh-num" aria-hidden="true">
                    {'2'}
                  </span>
                  <p className="sh-steptext">
                    {t('We talk for 30 minutes, on a video call or at your office in Vienna.')}
                  </p>
                </li>
                <li className="sh-step">
                  <span className="sh-num" aria-hidden="true">
                    {'3'}
                  </span>
                  <p className="sh-steptext">
                    {t('We show you what we are building and you tell us what is missing.')}
                  </p>
                </li>
              </ol>
            </div>
            <div className="sh-block">
              <h2 className="sh-h2">{t('What partner offices get')}</h2>
              <ul className="sh-gets">
                <li className="sh-get">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8.5l3 3 7-7"
                      stroke="#1f7a5a"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{t('Early access to the closed beta.')}</span>
                </li>
                <li className="sh-get">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8.5l3 3 7-7"
                      stroke="#1f7a5a"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{t('A say in what we build next.')}</span>
                </li>
                <li className="sh-get">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M3 8.5l3 3 7-7"
                      stroke="#1f7a5a"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{t('Your first listing set up with you.')}</span>
                </li>
              </ul>
            </div>
          </div>
          <PartnerForm locale={locale} privacyHref={privacyHref} />
        </div>
      </section>
    </>
  )
}
