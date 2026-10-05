import type { ReactNode } from 'react'
import type { HomeVals } from './vals'
import type { T } from '@/i18n/immvela'

/*
 * Only what the sections above do not already show: language, the document checklist, who owns
 * the data, enquiries (Next) and the way to the data page. "Live" is green, "Next" an outline.
 */
export default function Specs({ t, v }: { t: T; v: HomeVals }) {
  const cells: [string, 'live' | 'next' | null, ReactNode][] = [
    [
      'Language',
      'live',
      t('German first, English available. Written for Austria, Germany and Switzerland.'),
    ],
    [
      'Document checklist',
      'live',
      t(
        'Every listing gets a checklist of the documents it needs, from SNS’s standard lists for flats and houses.'
      ),
    ],
    [
      'Your office',
      'live',
      t(
        'Listings, documents and confirmed values belong to the office. Every agent has their own login.'
      ),
    ],
    [
      'Enquiries',
      'next',
      t('Answers and qualifies enquiries. Never books viewings or quotes prices.'),
    ],
    [
      'Data and privacy',
      null,
      <a key="trust" className="sp-link" href={v.path('/trust')}>
        {t('How we handle documents and data')}
      </a>,
    ],
  ]
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
          {t('Good to know')}
        </h2>
        <dl className="sp-grid">
          {cells.map(([name, status, line]) => (
            <div key={name} className="sp-cell">
              <dt className="sp-name">
                <span>{t(name)}</span>
                {status === 'live' && <span className="sp-live">{t('Live')}</span>}
                {status === 'next' && <span className="sp-next">{t('Next')}</span>}
              </dt>
              <dd className="sp-line">{line}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
