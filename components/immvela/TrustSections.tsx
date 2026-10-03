import type { T } from '@/i18n/immvela'

export default function TrustSections({ t }: { t: T }) {
  return (
    <>
      <section className="tp-sec" style={{ padding: '96px 24px 88px' }}>
        <div className="tp-wrap">
          <h1
            className="tp-h1"
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
            {t('How Immvela handles your documents and data')}
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
              'What happens to a document after you add it, who can see it, and what we have not settled yet.'
            )}
          </p>
        </div>
      </section>
      <section className="tp-sec">
        <div className="tp-wrap">
          <ul className="tp-sheet" aria-label={t('How your data is handled')}>
            <li className="tp-row">
              <h2
                style={{
                  margin: '0',
                  fontFamily: 'var(--font-bricolage),var(--font-geist-sans),system-ui,sans-serif',
                  fontOpticalSizing: 'auto',
                  fontWeight: '650',
                  letterSpacing: '-0.025em',
                  fontSize: '24px',
                  lineHeight: '1.25',
                }}
              >
                {t('Who owns the data')}
              </h2>
              <div className="tp-body">
                <p className="tp-p">
                  {t(
                    'Listings, values and documents belong to the office, not to the individual agent. Each person has their own login. Offices are kept separate in the database, so one office cannot read another office’s data.'
                  )}
                </p>
              </div>
            </li>
            <li className="tp-row">
              <h2
                style={{
                  margin: '0',
                  fontFamily: 'var(--font-bricolage),var(--font-geist-sans),system-ui,sans-serif',
                  fontOpticalSizing: 'auto',
                  fontWeight: '650',
                  letterSpacing: '-0.025em',
                  fontSize: '24px',
                  lineHeight: '1.25',
                }}
              >
                {t('What the AI providers see')}
              </h2>
              <div className="tp-body">
                <p className="tp-p">
                  {t(
                    'Documents and text are processed by AI providers based in the USA. Staging photos are processed by a separate AI image provider.'
                  )}
                </p>
                <p className="tp-p">
                  {t('We are working towards EU-only processing. It is not in place today.')}
                </p>
              </div>
            </li>
            <li className="tp-row">
              <h2
                style={{
                  margin: '0',
                  fontFamily: 'var(--font-bricolage),var(--font-geist-sans),system-ui,sans-serif',
                  fontOpticalSizing: 'auto',
                  fontWeight: '650',
                  letterSpacing: '-0.025em',
                  fontSize: '24px',
                  lineHeight: '1.25',
                }}
              >
                {t('What you confirm')}
              </h2>
              <div className="tp-body">
                <p className="tp-p">
                  {t(
                    'Nothing read from a document is used until a person confirms it. Every value keeps the document it came from and the name of the person who confirmed it.'
                  )}
                </p>
              </div>
            </li>
            <li className="tp-row">
              <h2
                style={{
                  margin: '0',
                  fontFamily: 'var(--font-bricolage),var(--font-geist-sans),system-ui,sans-serif',
                  fontOpticalSizing: 'auto',
                  fontWeight: '650',
                  letterSpacing: '-0.025em',
                  fontSize: '24px',
                  lineHeight: '1.25',
                }}
              >
                {t('Publishing')}
              </h2>
              <div className="tp-body">
                <p className="tp-p">
                  {t(
                    'Immvela always asks before anything is published. An ad missing required energy values is held, for every agent in the office.'
                  )}
                </p>
                <span className="tp-held">
                  <i aria-hidden="true" />
                  {t('Held: energy values missing')}
                </span>
              </div>
            </li>
            <li className="tp-row">
              <h2
                style={{
                  margin: '0',
                  fontFamily: 'var(--font-bricolage),var(--font-geist-sans),system-ui,sans-serif',
                  fontOpticalSizing: 'auto',
                  fontWeight: '650',
                  letterSpacing: '-0.025em',
                  fontSize: '24px',
                  lineHeight: '1.25',
                }}
              >
                {t('Deleting')}
              </h2>
              <div className="tp-body">
                <p className="tp-p">
                  {t(
                    'We delete your account on request. Documents are kept as evidence and are not deleted on the photo schedule.'
                  )}
                </p>
                <p className="tp-p">
                  {t('Immvela does not state legal retention periods. Ask your counsel.')}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="tp-sec">
        <div className="tp-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2
              className="tp-h2"
              style={{
                margin: '0',
                fontFamily: 'var(--font-bricolage),var(--font-geist-sans),system-ui,sans-serif',
                fontOpticalSizing: 'auto',
                fontVariationSettings: "'opsz' 72",
                fontWeight: '650',
                letterSpacing: '-0.035em',
                lineHeight: '1.02',
                fontSize: '40px',
              }}
            >
              {t('To be confirmed')}
            </h2>
            <p
              style={{
                margin: '0',
                maxWidth: '560px',
                fontSize: '16px',
                lineHeight: '1.6',
                color: '#3f574f',
                textWrap: 'pretty',
              }}
            >
              {t('These answers are not settled yet. They will appear here once they are.')}
            </p>
          </div>
          <ul className="tp-todo" aria-label={t('Answers to be confirmed')}>
            <li className="tp-box">
              <span style={{ fontSize: '16px', lineHeight: '1.4', fontWeight: '600' }}>
                {t('[Hosting region]')}
              </span>
              <span style={{ fontSize: '14px', lineHeight: '1.45', color: '#3f574f' }}>
                {t('Where the database and files are stored.')}
              </span>
            </li>
            <li className="tp-box">
              <span style={{ fontSize: '16px', lineHeight: '1.4', fontWeight: '600' }}>
                {t('[List of service providers]')}
              </span>
              <span style={{ fontSize: '14px', lineHeight: '1.45', color: '#3f574f' }}>
                {t('Every company that processes data for Immvela.')}
              </span>
            </li>
            <li className="tp-box">
              <span style={{ fontSize: '16px', lineHeight: '1.4', fontWeight: '600' }}>
                {t('[Data processing agreement (AVV)]')}
              </span>
              <span style={{ fontSize: '14px', lineHeight: '1.45', color: '#3f574f' }}>
                {t('Whether and how your office can sign one.')}
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="tp-sec">
        <div className="tp-wrap" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h2
            className="tp-h2"
            style={{
              margin: '0',
              fontFamily: 'var(--font-bricolage),var(--font-geist-sans),system-ui,sans-serif',
              fontOpticalSizing: 'auto',
              fontVariationSettings: "'opsz' 72",
              fontWeight: '650',
              letterSpacing: '-0.035em',
              lineHeight: '1.02',
              fontSize: '40px',
            }}
          >
            {t('Questions about your data')}
          </h2>
          <p
            style={{
              margin: '0',
              maxWidth: '560px',
              fontSize: '19px',
              lineHeight: '1.55',
              color: '#3f574f',
              textWrap: 'pretty',
            }}
          >
            {t('Write to')}{' '}
            <a className="tp-mail" href="mailto:office@sns-austria.com">
              {t('office@sns-austria.com')}
            </a>
            {t('. Immvela is made by SNS Software Solutions GmbH, Vienna.')}
          </p>
        </div>
      </section>
    </>
  )
}
