import type { CSSProperties } from 'react'
import type { T } from '@/i18n/immvela'

/*
 * "It scales to a team": the whole office's listings at a glance, every one checked the same way.
 * The positioning is the office owner's: agents already try AI on their own; Immvela gives them one
 * that works from confirmed documents and keeps the work in the office's record. The contrast drawn
 * is ownership and consistency, never privacy (Immvela also uses US AI providers, see TRUTH.md).
 * A composed still: nothing here moves.
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
  maxWidth: '760px',
  fontSize: '52px',
  textWrap: 'balance',
}

const ROWS: [string, string, boolean][] = [
  ['A. Berger', 'Kettenbrückengasse 7', true],
  ['K. Wagner', 'Gentzgasse 14', true],
  ['M. Huber', 'Praterstraße 31', false],
  ['L. Gruber', 'Josefstädter Straße 52', true],
  ['S. Pichler', 'Hietzinger Hauptstraße 18', true],
]

function Ok() {
  return (
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
  )
}

export default function Office({ t }: { t: T }) {
  const ink = '#0a2b22'
  const muted = '#4f5c57'
  return (
    <section className="of-sec" style={{ padding: '96px 24px' }}>
      <div className="of-grid">
        <div className="of-text">
          <h2 className="of-h2" style={H2}>
            {t('Your agents already use AI. Give them one that follows your standard.')}
          </h2>
          <p
            style={{
              margin: '20px 0 0',
              maxWidth: '620px',
              fontSize: '19px',
              lineHeight: '1.55',
              color: '#3f574f',
              textWrap: 'pretty',
            }}
          >
            {t(
              "Whether your office provides it or not, agents are trying AI for their listings. With Immvela it works from confirmed documents, every listing is checked the same way, and the work stays in your office's record, not in personal chat accounts."
            )}
          </p>
        </div>

        <div className="of-vis">
          <div
            className="of-app"
            role="img"
            aria-label={t(
              'Example office with 12 listings, each checked the same way: documents on file, values confirmed, ready to advertise. 11 are ready. One, Praterstraße 31, is held because its Energieausweis values are not confirmed.'
            )}
          >
            <div className="of-list" aria-hidden="true">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: '12px',
                  marginBottom: '14px',
                }}
              >
                <span
                  style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '600', color: ink }}
                >
                  {t('Example office')}
                </span>
                <span style={{ fontSize: '14px', lineHeight: '1.3', color: muted }}>
                  {t('12 listings')}
                </span>
              </div>
              <div className="of-cols">
                <span>{t('Agent, listing')}</span>
                <span>{t('Documents')}</span>
                <span>{t('Values confirmed')}</span>
                <span>{t('Ready')}</span>
              </div>
              <ul className="of-rows">
                {ROWS.map(([agent, addr, ready]) => (
                  <li key={addr} className={ready ? 'of-row' : 'of-row of-row-held'}>
                    <span className="of-who">
                      <span
                        style={{
                          fontSize: '14px',
                          lineHeight: '1.3',
                          fontWeight: '600',
                          color: ink,
                        }}
                      >
                        {agent}
                      </span>
                      <span className="of-addr">{addr}</span>
                    </span>
                    <span className="of-c">
                      <Ok />
                    </span>
                    <span className="of-c">
                      {ready ? <Ok /> : <span className="of-held" aria-hidden="true" />}
                    </span>
                    <span className="of-c">
                      {ready ? <Ok /> : <span className="of-tag">{t('Held')}</span>}
                    </span>
                  </li>
                ))}
              </ul>
              <p
                style={{
                  margin: '0',
                  padding: '12px 0 4px',
                  borderTop: '1px solid rgba(10,43,34,0.06)',
                  fontSize: '13px',
                  lineHeight: '1.4',
                  color: muted,
                }}
              >
                {t('7 more listings, all ready')}
              </p>
            </div>

            <div className="of-side" aria-hidden="true">
              <span style={{ fontSize: '14px', lineHeight: '1.35', color: muted }}>
                {t('The whole office')}
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span className="of-big">{t('11 of 12')}</span>
                <span
                  style={{ fontSize: '15px', lineHeight: '1.35', fontWeight: '600', color: ink }}
                >
                  {t('ready to advertise')}
                </span>
              </div>
              <ul
                style={{
                  margin: '0',
                  padding: '0',
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  fontSize: '14px',
                  lineHeight: '1.4',
                  color: '#33413b',
                }}
              >
                {[
                  t('Every agent works from confirmed documents'),
                  t('One checklist for every listing'),
                  t('Each ad asks before it goes out'),
                ].map((line) => (
                  <li key={line} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        marginTop: '7px',
                        borderRadius: '50%',
                        background: '#1f7a5a',
                        flex: 'none',
                      }}
                    />
                    {line}
                  </li>
                ))}
              </ul>
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
              'an overview for the owner of what every agent confirmed and published, and your office’s own rules for required documents, templates and approval.'
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
