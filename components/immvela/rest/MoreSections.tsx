'use client'

import type { Locale } from '@/i18n/config'
import { immvelaT } from '@/i18n/immvela'
import { useImmvelaPath } from '@/lib/immvela-nav'
import { Check, Section } from './parts'

/** The placeholder URL until SNS has a booking page. */
export const CALENDAR_HREF = '#calendar-link-placeholder'

function Todo({ children }: { children: string }) {
  return <span className="rx-todo">{children}</span>
}

/* ------------------------------------------------------------------ */
/* What the beta involves                                              */
/* ------------------------------------------------------------------ */
export function BetaSections({ locale }: { locale: Locale }) {
  const t = immvelaT(locale)
  const path = useImmvelaPath(locale)
  return (
    <Section
      first
      text={
        <>
          <h1 className="rx-h1">{t('What the closed beta involves')}</h1>
          <p className="rx-lede">{t('Five answers before you apply.')}</p>
          <div className="rx-actions">
            <a className="rx-cta" href={`${path()}#apply`}>
              {t('Apply for the closed beta')}
            </a>
            <a className="rx-second" href={CALENDAR_HREF} title="[Calendar link]">
              {t('Or book a 20-minute call')}
            </a>
          </div>
          <p className="rx-small" style={{ margin: '12px 0 0' }}>
            <Todo>[Calendar link]</Todo>
          </p>
        </>
      }
      vis={
        <dl className="rx-qa">
          <div>
            <dt>{t('Who sets up your first listing')}</dt>
            <dd>{t('We do, with you. We reply within a week and set up your first listing with you.')}</dd>
          </div>
          <div>
            <dt>{t('What you commit to')}</dt>
            <dd>
              <Todo>{t('[What a beta office commits to]')}</Todo>
            </dd>
          </div>
          <div>
            <dt>{t('How long it runs')}</dt>
            <dd>
              <Todo>{t('[Length of the beta]')}</Todo>
            </dd>
          </div>
          <div>
            <dt>{t('What it costs')}</dt>
            <dd>
              <Todo>{t('[Cost during the beta]')}</Todo>
            </dd>
          </div>
          <div>
            <dt>{t('Your data at the end')}</dt>
            <dd>
              {t('We delete your account on request. Documents are kept as evidence and are not deleted on the photo schedule.')}{' '}
              <Todo>{t('[What happens to your data when the beta ends]')}</Todo>{' '}
              <a className="rx-link" href={path('/trust')}>
                {t('Where your data goes')}
              </a>
            </dd>
          </div>
        </dl>
      }
    />
  )
}

/* ------------------------------------------------------------------ */
/* Apply, after sending: the one secondary action                      */
/* ------------------------------------------------------------------ */
export function ApplySentMock({ locale }: { locale: Locale }) {
  const t = immvelaT(locale)
  const path = useImmvelaPath(locale)
  return (
    <section className="ap-sec" style={{ padding: '96px 24px' }}>
      <div className="ap-grid">
        <div className="ap-head">
          <h2 className="rx-h1" style={{ maxWidth: '720px' }}>
            {t('Apply for the closed beta')}
          </h2>
        </div>
        <div className="ap-form" role="status">
          <span className="rx-sent" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6.5 12.5l3.8 3.8L17.5 8.6" />
            </svg>
          </span>
          <p style={{ margin: 0, fontSize: '19px', lineHeight: 1.4, fontWeight: 600, color: '#14473a' }}>
            {t('Thank you. Your application is in.')}
          </p>
          <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.55, color: '#3f574f' }}>
            {t('We reply within a week and set up your first listing with you.')}
          </p>
          <div style={{ borderTop: '1px solid rgba(10,43,34,.12)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '14px', color: '#4e635b' }}>{t('Want to talk sooner?')}</span>
            <a className="rx-second rx-second-btn" href={CALENDAR_HREF} title="[Calendar link]">
              {t('Book a 20-minute call')}
            </a>
            <span className="rx-todo" style={{ fontSize: '13px' }}>[Calendar link]</span>
          </div>
        </div>
        <div className="ap-answers">
          <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.55, color: '#3f574f' }}>
            {t('While you wait:')}{' '}
            <a className="rx-link" href={path('/beta')}>
              {t('What the closed beta involves')}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* What's new                                                          */
/* ------------------------------------------------------------------ */
export function NewsSections({ locale }: { locale: Locale }) {
  const t = immvelaT(locale)
  const path = useImmvelaPath(locale)
  return (
    <section className="rx-sec rx-first">
      <div className="rx-wrap">
        <h1 className="rx-h1">{t('What’s new')}</h1>
        <p className="rx-lede">{t('What changed in Immvela, newest first.')}</p>
        <ol className="rx-log">
          <li className="rx-log-next">
            <span className="rx-log-date">
              <span className="rx-next">{t('Next')}</span>
            </span>
            <div>
              <b>
                <Todo>{t('[What we are building next, one line]')}</Todo>
              </b>
              <p>
                {t('No dates for what is next.')}{' '}
                <a className="rx-link" href={`${path('/modules')}#next`}>
                  {t('Everything we are building next')}
                </a>
              </p>
            </div>
          </li>
          {[1, 2].map((n) => (
            <li key={n}>
              <span className="rx-log-date">
                <Todo>[Date]</Todo>
              </span>
              <div>
                <b>
                  <Todo>{t('[What changed, in one line]')}</Todo>
                </b>
                <p>
                  <Todo>{t('[One sentence on what it means for an agent]')}</Todo>
                </p>
                <span className="rx-live" style={{ alignSelf: 'flex-start' }}>
                  {t('Live')}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* EAVG 2012 explainer: quotes the primary text, never advises         */
/* ------------------------------------------------------------------ */
const RIS_URL = 'https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=20007799'

type Para = { n: string; de: string; en: string }
const PARAS: { id: string; num: string; titleDe: string; titleEn: string; paras: Para[]; immvela: string[]; todo?: string }[] = [
  {
    id: 'p4',
    num: '§ 4',
    titleDe: 'Vorlage- und Aushändigungspflicht',
    titleEn: 'Duty to show and hand over',
    paras: [
      {
        n: 'Abs. 1',
        de: 'Beim Verkauf eines Gebäudes hat der Verkäufer dem Käufer, bei der In-Bestand-Gabe eines Gebäudes der Bestandgeber dem Bestandnehmer rechtzeitig vor Abgabe der Vertragserklärung des Käufers oder Bestandnehmers einen zu diesem Zeitpunkt höchstens zehn Jahre alten Energieausweis vorzulegen und ihm diesen binnen 14 Tagen nach Vertragsabschluss auszuhändigen. Auf Verlangen des Käufers oder Bestandnehmers ist der Energieausweis auf Papier, etwa als Ausdruck, vorzulegen und auszuhändigen.',
        en: 'When a building is sold, the seller must show the buyer, and when a building is let, the landlord must show the tenant, an Energieausweis no more than ten years old at that time, in good time before the buyer or tenant makes their contractual declaration, and hand it over within 14 days of the contract being concluded. If the buyer or tenant asks, the Energieausweis must be shown and handed over on paper, for example as a printout.',
      },
    ],
    immvela: [
      'Immvela keeps the Energieausweis on file with the property, in the listing’s document checklist.',
      'It flags an Energieausweis that is about to expire.',
    ],
    todo: '[Whether Immvela records that a buyer was shown or handed the Energieausweis: confirm against the product]',
  },
  {
    id: 'p7',
    num: '§ 7',
    titleDe: 'Rechtsfolge unterlassener Vorlage oder Aushändigung',
    titleEn: 'Consequence of not showing or not handing over',
    paras: [
      {
        n: 'Abs. 1',
        de: 'Wird dem Käufer oder Bestandnehmer entgegen § 4 nicht bis spätestens zur Abgabe seiner Vertragserklärung ein Energieausweis vorgelegt, so gilt zumindest eine dem Alter und der Art des Gebäudes entsprechende Gesamtenergieeffizienz als vereinbart.',
        en: 'If, contrary to § 4, the buyer or tenant is not shown an Energieausweis by the time they make their contractual declaration at the latest, at least an overall energy performance that matches the age and type of the building counts as agreed.',
      },
      {
        n: 'Abs. 2',
        de: 'Wird dem Käufer oder Bestandnehmer entgegen § 4 nach Vertragsabschluss trotz Aufforderung kein Energieausweis ausgehändigt, so kann er entweder sein Recht auf Ausweisaushändigung gerichtlich geltend machen oder selbst einen Energieausweis einholen und die ihm daraus entstandenen angemessenen Kosten binnen dreier Jahre nach Vertragsabschluss vom Verkäufer oder Bestandgeber ersetzt begehren.',
        en: 'If, contrary to § 4, no Energieausweis is handed over to the buyer or tenant after the contract is concluded despite a request, they can either enforce their right to the handover in court, or obtain an Energieausweis themselves and claim the reasonable costs from the seller or landlord within three years of the contract being concluded.',
      },
    ],
    immvela: ['Immvela does not check anything in this paragraph.'],
  },
  {
    id: 'p9',
    num: '§ 9',
    titleDe: 'Strafbestimmungen',
    titleEn: 'Penalties',
    paras: [
      {
        n: 'Abs. 1',
        de: 'Ein Verkäufer, Bestandgeber oder Immobilienmakler, der es entgegen § 3 unterlässt, in der Verkaufs- oder In-Bestand-Gabe-Anzeige den Heizwärmebedarf und den Endenergiebedarf des Gebäudes oder des Nutzungsobjekts einschließlich der Gesamtenergieeffizienzklasse anzugeben, begeht, sofern die Tat nicht nach anderen Verwaltungsstrafbestimmungen mit strengerer Strafe bedroht ist, eine Verwaltungsübertretung und ist mit einer Geldstrafe bis zu 1 450 Euro zu bestrafen. Der Verstoß eines Immobilienmaklers gegen § 3 ist entschuldigt, wenn er seinen Auftraggeber über die Informationspflicht nach dieser Bestimmung aufgeklärt und ihn zur Bekanntgabe der beiden Werte beziehungsweise zur Einholung eines Energieausweises aufgefordert hat, der Auftraggeber dieser Aufforderung jedoch nicht nachgekommen ist.',
        en: 'A seller, landlord or estate agent who, contrary to § 3, does not state the Heizwärmebedarf and the Endenergiebedarf of the building or unit, including the Gesamtenergieeffizienzklasse, in the sale or letting advertisement commits an administrative offence, unless the act carries a stricter penalty under other administrative penal provisions, and is to be fined up to 1,450 euros. An estate agent’s breach of § 3 is excused if they told their client about the duty to provide this information and asked them to provide the two values or to obtain an Energieausweis, and the client did not do so.',
      },
      {
        n: 'Abs. 2',
        de: 'Ein Verkäufer oder Bestandgeber, der es entgegen § 4 unterlässt, 1. dem Käufer oder Bestandnehmer rechtzeitig einen höchstens zehn Jahre alten Energieausweis vorzulegen oder 2. dem Käufer oder Bestandnehmer nach Vertragsabschluss einen Energieausweis auszuhändigen, begeht, sofern die Tat nicht nach anderen Verwaltungsstrafbestimmungen mit strengerer Strafe bedroht ist, eine Verwaltungsübertretung und ist mit einer Geldstrafe bis zu 1 450 Euro zu bestrafen.',
        en: 'A seller or landlord who, contrary to § 4, does not 1. show the buyer or tenant an Energieausweis no more than ten years old in good time, or 2. hand an Energieausweis to the buyer or tenant after the contract is concluded, commits an administrative offence, unless the act carries a stricter penalty under other administrative penal provisions, and is to be fined up to 1,450 euros.',
      },
    ],
    immvela: [
      'Immvela reads the energy values in the Energieausweis as drafts for you to confirm.',
      'Publishing holds an ad missing required energy values, for every agent in the office.',
      'The listing’s checklist shows when the Energieausweis is not on file yet.',
    ],
    todo: '[Which energy values the publish hold checks today: confirm against the product before this page goes live]',
  },
]

export function EavgSections({ locale }: { locale: Locale }) {
  const t = immvelaT(locale)
  return (
    <>
      <section className="rx-sec rx-first">
        <div className="rx-grid rx-eavg-head">
          <div className="rx-text">
            <h1 className="rx-h1">{t('What the EAVG 2012 says about the Energieausweis')}</h1>
            <p className="rx-lede">
              {t('Three paragraphs of the Austrian Energieausweis-Vorlage-Gesetz, quoted in full, with an unofficial English translation and what Immvela keeps on file for each.')}
            </p>
          </div>
          <div className="rx-vis">
            <p className="rx-notice">{t('This page quotes the law. It is not legal advice.')}</p>
            <p className="rx-small" style={{ margin: '16px 0 0' }}>
              {t('Source:')}{' '}
              <a className="rx-link" href={RIS_URL} lang="de">
                RIS, EAVG 2012, Fassung vom 04.10.2026
              </a>
              {t(', last amended by BGBl. I Nr. 38/2026.')}
            </p>
            <nav className="rx-jump" aria-label={t('Paragraphs')}>
              {PARAS.map((p) => (
                <a key={p.id} href={`#${p.id}`}>
                  {p.num}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>
      {PARAS.map((p) => (
        <section key={p.id} id={p.id} className="rx-sec">
          <div className="rx-law">
            <div className="rx-law-head">
              <span className="rx-law-num">{p.num}</span>
              <span lang="de" className="rx-law-de">
                {p.titleDe}
              </span>
              <span className="rx-law-en">{t(p.titleEn)}</span>
            </div>
            <div className="rx-law-body">
              {p.paras.map((q) => (
                <div key={q.n} className="rx-law-para">
                  <span className="rx-law-abs" lang="de">
                    {q.n}
                  </span>
                  <blockquote lang="de" cite={RIS_URL}>
                    {q.de}
                  </blockquote>
                  <p className="rx-law-tr">
                    <span>{t('Unofficial translation')}</span>
                    {t(q.en)}
                  </p>
                </div>
              ))}
              <div className="rx-law-imv">
                <span>{t('What Immvela keeps on file here')}</span>
                <ul>
                  {p.immvela.map((line) => (
                    <li key={line}>
                      {p.id !== 'p7' && <Check />}
                      {t(line)}
                    </li>
                  ))}
                </ul>
                {p.todo && <span className="rx-todo">{t(p.todo)}</span>}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
