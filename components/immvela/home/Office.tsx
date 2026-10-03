import type { T } from '@/i18n/immvela'

export default function Office({ t }: { t: T }) {
  return (
    <section className="of-sec" style={{ padding: '96px 24px' }}>
      <div className="of-grid">
        <div className="of-text">
          <h2
            className="of-h2"
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
            {t('One standard for every listing in your office')}
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
              'Every agent works from confirmed documents. No ad goes out with missing energy values, and you can see who confirmed what, from which document.'
            )}
          </p>
        </div>
        <div className="of-vis">
          <div
            className="of-app"
            role="img"
            aria-label={t(
              'Example office: five listings in Vienna, one per agent. Four have documents, confirmed values and are ready. The listing at Praterstraße 31 is held. Its side panel reads: Held, Energieausweis values not confirmed. Agent M. Huber. Last change today 10:42.'
            )}
          >
            <div className="of-list" aria-hidden="true">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '12px',
                  marginBottom: '16px',
                }}
              >
                <span
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.3',
                    fontWeight: '600',
                    color: '#0a2b22',
                  }}
                >
                  {t('Example office')}
                </span>
                <span style={{ fontSize: '14px', lineHeight: '1.3', color: '#4f5c57' }}>
                  {t('5 listings')}
                </span>
              </div>
              <div className="of-cols">
                <span>{t('Agent, listing')}</span>
                <span>{t('Documents')}</span>
                <span>{t('Values confirmed')}</span>
                <span>{t('Ready')}</span>
              </div>
              <ul className="of-rows">
                <li className="of-row">
                  <span className="of-who">
                    <span
                      style={{
                        fontSize: '14px',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                      }}
                    >
                      {t('A. Berger')}
                    </span>
                    <span className="of-addr">{t('Kettenbrückengasse 7')}</span>
                  </span>
                  <span className="of-c">
                    <span className="of-ok" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        style={{ width: '12px', height: '12px' }}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6.5 12.5l3.8 3.8L17.5 8.6" />
                      </svg>
                    </span>
                  </span>
                  <span className="of-c">
                    <span className="of-ok" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        style={{ width: '12px', height: '12px' }}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6.5 12.5l3.8 3.8L17.5 8.6" />
                      </svg>
                    </span>
                  </span>
                  <span className="of-c">
                    <span className="of-ok" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        style={{ width: '12px', height: '12px' }}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6.5 12.5l3.8 3.8L17.5 8.6" />
                      </svg>
                    </span>
                  </span>
                </li>
                <li className="of-row">
                  <span className="of-who">
                    <span
                      style={{
                        fontSize: '14px',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                      }}
                    >
                      {t('K. Wagner')}
                    </span>
                    <span className="of-addr">{t('Gentzgasse 14')}</span>
                  </span>
                  <span className="of-c">
                    <span className="of-ok" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        style={{ width: '12px', height: '12px' }}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6.5 12.5l3.8 3.8L17.5 8.6" />
                      </svg>
                    </span>
                  </span>
                  <span className="of-c">
                    <span className="of-ok" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        style={{ width: '12px', height: '12px' }}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6.5 12.5l3.8 3.8L17.5 8.6" />
                      </svg>
                    </span>
                  </span>
                  <span className="of-c">
                    <span className="of-ok" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        style={{ width: '12px', height: '12px' }}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6.5 12.5l3.8 3.8L17.5 8.6" />
                      </svg>
                    </span>
                  </span>
                </li>
                <li className="of-row of-row-held">
                  <span className="of-who">
                    <span
                      style={{
                        fontSize: '14px',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                      }}
                    >
                      {t('M. Huber')}
                    </span>
                    <span className="of-addr">{t('Praterstraße 31')}</span>
                  </span>
                  <span className="of-c">
                    <span className="of-ok" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        style={{ width: '12px', height: '12px' }}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6.5 12.5l3.8 3.8L17.5 8.6" />
                      </svg>
                    </span>
                  </span>
                  <span className="of-c">
                    <span className="of-held" aria-hidden="true" />
                  </span>
                  <span className="of-c">
                    <span className="of-tag">{t('Held')}</span>
                  </span>
                </li>
                <li className="of-row">
                  <span className="of-who">
                    <span
                      style={{
                        fontSize: '14px',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                      }}
                    >
                      {t('L. Gruber')}
                    </span>
                    <span className="of-addr">{t('Josefstädter Straße 52')}</span>
                  </span>
                  <span className="of-c">
                    <span className="of-ok" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        style={{ width: '12px', height: '12px' }}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6.5 12.5l3.8 3.8L17.5 8.6" />
                      </svg>
                    </span>
                  </span>
                  <span className="of-c">
                    <span className="of-ok" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        style={{ width: '12px', height: '12px' }}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6.5 12.5l3.8 3.8L17.5 8.6" />
                      </svg>
                    </span>
                  </span>
                  <span className="of-c">
                    <span className="of-ok" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        style={{ width: '12px', height: '12px' }}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6.5 12.5l3.8 3.8L17.5 8.6" />
                      </svg>
                    </span>
                  </span>
                </li>
                <li className="of-row">
                  <span className="of-who">
                    <span
                      style={{
                        fontSize: '14px',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                      }}
                    >
                      {t('S. Pichler')}
                    </span>
                    <span className="of-addr">{t('Hietzinger Hauptstraße 18')}</span>
                  </span>
                  <span className="of-c">
                    <span className="of-ok" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        style={{ width: '12px', height: '12px' }}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6.5 12.5l3.8 3.8L17.5 8.6" />
                      </svg>
                    </span>
                  </span>
                  <span className="of-c">
                    <span className="of-ok" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        style={{ width: '12px', height: '12px' }}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6.5 12.5l3.8 3.8L17.5 8.6" />
                      </svg>
                    </span>
                  </span>
                  <span className="of-c">
                    <span className="of-ok" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        style={{ width: '12px', height: '12px' }}
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6.5 12.5l3.8 3.8L17.5 8.6" />
                      </svg>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="of-side" aria-hidden="true">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span
                  style={{
                    fontSize: '16px',
                    lineHeight: '1.3',
                    fontWeight: '600',
                    color: '#0a2b22',
                  }}
                >
                  {t('Praterstraße 31')}
                </span>
                <span style={{ fontSize: '14px', lineHeight: '1.35', color: '#4f5c57' }}>
                  {t('1020 Wien')}
                </span>
              </div>
              <div
                style={{
                  padding: '12px 14px',
                  borderRadius: '12px',
                  background: '#fbeacb',
                  color: '#6b4a12',
                  fontSize: '14px',
                  lineHeight: '1.4',
                  fontWeight: '600',
                  textWrap: 'pretty',
                }}
              >
                {t('Held: Energieausweis values not confirmed.')}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontSize: '14px',
                  lineHeight: '1.4',
                  color: '#33413b',
                }}
              >
                <span>{t('Agent: M. Huber')}</span>
                <span style={{ fontVariantNumeric: 'tabular-nums' }}>
                  {t('Last change: today 10:42')}
                </span>
              </div>
            </div>
          </div>
          <p
            style={{
              margin: '20px 0 0',
              fontSize: '14px',
              lineHeight: '1.45',
              color: '#4e635b',
              textWrap: 'pretty',
            }}
          >
            <span style={{ fontWeight: '600', color: '#3f574f' }}>{t('Next:')}</span>{' '}
            {t(
              'set your office’s own rules, required documents, templates and approval before publishing.'
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
