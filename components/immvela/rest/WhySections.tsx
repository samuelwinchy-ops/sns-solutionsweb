'use client'

import { type Locale, localePath } from '@/i18n/config'
import { immvelaT } from '@/i18n/immvela'
import { useImmvelaPath } from '@/lib/immvela-nav'
import HelixCanvas from '../HelixCanvas'
import { SITE_URL } from '@/lib/site'
import { ApplyBand, Check, Section } from './parts'

/*
 * Why Immvela: the thesis in order. Scattered today, one record; the record is only as right as
 * its documents; every number traced; a person decides; the record is the office's; who builds it.
 * No founder bios and no experience claims: the people live on sns-austria.com/team.
 */
export default function WhySections({ locale }: { locale: Locale }) {
  const t = immvelaT(locale)
  const path = useImmvelaPath(locale)
  const teamHref = `${SITE_URL}${localePath(locale, '/team')}`

  const chips: [string, string, string, number][] = [
    ['Energieausweis', 'scan.pdf', '2%', 4],
    ['Grundriss', t('from the owner, by email'), '18%', 70],
    [t('Photos'), t('on a phone'), '0%', 140],
    [t('Price and rooms'), t('in a spreadsheet'), '14%', 214],
    [t('Listing'), t('in the CRM'), '3%', 286],
  ]

  return (
    <>
      {/* 1. the thesis */}
      <Section
        first
        wide
        text={
          <>
            <h1 className="rx-h1">{t('One record you can trust, for every property')}</h1>
            <p className="rx-lede">
              {t(
                'Today a listing lives in a folder, a phone and five tools. We built Immvela so every property has one record you can trust.'
              )}
            </p>
          </>
        }
        vis={
          <div className="rx-scatter" role="img" aria-label={t('Five scattered pieces of one listing, an Energieausweis scan, a floor plan from an email, photos on a phone, a spreadsheet and a CRM entry, come together in one record for Praterstraße 31 with confirmed values.')}>
            <svg aria-hidden="true" viewBox="0 0 640 400" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              {[24, 90, 160, 234, 306].map((y) => (
                <path key={y} d={`M250 ${y} C 320 ${y}, 320 200, 372 200`} stroke="rgba(10,43,34,.22)" strokeWidth="1.2" strokeDasharray="3 4" fill="none" />
              ))}
            </svg>
            <div aria-hidden="true">
              {chips.map(([a, b, left, top]) => (
                <span key={a} className="rx-chip" style={{ left, top }}>
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" stroke="#4f5c57" strokeWidth="1.3"><path d="M2 1.5h6.5L12 5v9.5H2z" /><path d="M8.5 1.5V5H12" /></svg>
                  <b>{a}</b>
                  {b}
                </span>
              ))}
              <div className="rx-app" style={{ position: 'absolute', right: 0, top: '68px', width: '42%', minWidth: '220px' }}>
                <div className="rx-bar">
                  <b>Praterstraße 31</b>
                  <span>{t('One record')}</span>
                </div>
                <ul className="rx-rows">
                  {[
                    ['Wohnfläche', '76 m²'],
                    ['Zimmer', '3'],
                    ['Baujahr', '1898'],
                    ['HWB', '61'],
                  ].map(([k, v]) => (
                    <li key={k} className="rx-row" style={{ padding: '11px 0' }}>
                      <span className="rx-k">
                        <b>{k}</b>
                      </span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <span className="rx-v" style={{ fontSize: '16px' }}>{v}</span>
                        <Check />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        }
      />

      {/* 2. the problem: documents disagree */}
      <Section
        flip
        text={
          <>
            <h2 className="rx-h2">{t('An Exposé is only as right as the documents behind it')}</h2>
            <p className="rx-p">
              {t(
                'The Energieausweis says 78 m². The floor plan says 76 m². When two documents disagree, Immvela flags it and asks you, before anything goes out.'
              )}
            </p>
          </>
        }
        vis={
          <div className="rx-twodoc" role="img" aria-label={t('Two documents for Praterstraße 31 disagree: the Energieausweis gives a Wohnfläche of 78,0 m², the floor plan 76,0 m².')}>
            <div className="rx-docpage" aria-hidden="true">
              <h4>Energieausweis</h4>
              <small>Praterstraße 31, {t('page 1')}</small>
              <div className="rx-ln" style={{ width: '86%' }} />
              <div className="rx-ln" style={{ width: '64%' }} />
              <div className="rx-quote rx-q-am">
                <span>Wohnfläche</span>
                <span>78,0 m²</span>
              </div>
              <div className="rx-ln" style={{ width: '72%' }} />
              <div className="rx-ln" style={{ width: '58%' }} />
              <div className="rx-ln" style={{ width: '80%' }} />
            </div>
            <div className="rx-docpage" aria-hidden="true">
              <h4>Grundriss</h4>
              <small>Praterstraße 31, {t('page 1')}</small>
              <svg viewBox="0 0 200 92" style={{ width: '100%', height: 'auto' }} fill="none" stroke="#7d8c84" strokeWidth="2">
                <rect x="4" y="4" width="192" height="84" />
                <path d="M70 4v50M70 70v18M130 4v34M130 54v34M70 46h60" />
              </svg>
              <div className="rx-quote rx-q-am">
                <span>Wohnfläche gesamt</span>
                <span>76,0 m²</span>
              </div>
            </div>
          </div>
        }
      />

      {/* 3. the trace */}
      <Section
        text={
          <>
            <h2 className="rx-h2">{t('Every number traced to its document')}</h2>
            <p className="rx-p">
              {t(
                'Each value keeps the document, the page and the line it was read from, and the name of the person who confirmed it.'
              )}
            </p>
          </>
        }
        vis={
          <div role="img" aria-label={t('The Wohnfläche of Praterstraße 31, 76 m², read from the floor plan, page 1, checked against the Energieausweis, and confirmed by A. Berger.')}>
            <div aria-hidden="true" style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '28px' }}>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#3f574f' }}>Wohnfläche</span>
              <span className="rx-v" style={{ fontSize: '56px', color: '#14473a', letterSpacing: '-.04em' }}>76 m²</span>
            </div>
            <ol className="rx-trail" aria-hidden="true">
              <li>
                <span className="rx-node">1</span>
                <div>
                  <b>{t('Read from')}</b>
                  <p>{t('Grundriss, page 1: “Wohnfläche gesamt 76,0 m²”')}</p>
                </div>
              </li>
              <li>
                <span className="rx-node">2</span>
                <div>
                  <b>{t('Checked against')}</b>
                  <p>{t('Energieausweis, page 1: 78,0 m². The difference was flagged.')}</p>
                </div>
              </li>
              <li>
                <span className="rx-node ok">
                  <Check color="#fff" />
                </span>
                <div>
                  <b>{t('Confirmed by')}</b>
                  <p>{t('A. Berger, who chose 76 m²')}</p>
                </div>
              </li>
            </ol>
          </div>
        }
      />

      {/* 4. a person decides; what Immvela will not say */}
      <Section
        flip
        text={
          <>
            <h2 className="rx-h2">{t('Immvela reads. A person decides.')}</h2>
            <p className="rx-p">
              {t(
                'Immvela shows what is on file, what was read and what is still unconfirmed. Nothing it reads is used until someone in your office confirms it.'
              )}
            </p>
          </>
        }
        vis={
          <ul className="rx-never" aria-label={t('The words Immvela uses about a value')}>
            <li>
              <span className="rx-state rx-s-none" style={{ fontSize: '14px' }}>{t('On file')}</span>
              {t('The document is there.')}
            </li>
            <li>
              <span className="rx-state rx-s-draft" style={{ fontSize: '14px' }}>{t('Read')}</span>
              {t('A draft. Not used yet.')}
            </li>
            <li>
              <span className="rx-state rx-s-ok" style={{ fontSize: '14px' }}>
                <Check />
                {t('Confirmed')}
              </span>
              {t('A person said yes. Now it is used.')}
            </li>
            <li>
              <s>{t('Legally safe')}</s>
              <em>{t('Immvela never says this.')}</em>
            </li>
          </ul>
        }
      />

      {/* 5. the office owns the record */}
      <Section
        text={
          <>
            <h2 className="rx-h2">{t('The record belongs to your office')}</h2>
            <p className="rx-p">
              {t(
                'Listings, documents and confirmed values belong to the office, not to one agent. Everyone has their own login, and every value shows who confirmed it.'
              )}
            </p>
          </>
        }
        vis={
          <div className="rx-app" role="img" aria-label={t('Example office: three listings, each value confirmed by a named agent. Three agents, each with their own login.')}>
            <div className="rx-bar">
              <b>{t('Example office')}</b>
              <span>{t('Listings, documents, confirmed values')}</span>
            </div>
            <ul className="rx-rows" aria-hidden="true">
              {[
                ['Gentzgasse 14', 'HWB 48', 'K. Wagner'],
                ['Kettenbrückengasse 7', 'Baujahr 1912', 'A. Berger'],
                ['Praterstraße 31', 'Wohnfläche 76 m²', 'A. Berger'],
              ].map(([a, v, who]) => (
                <li key={a} className="rx-row">
                  <span className="rx-k">
                    <b>{a}</b>
                    <i>{v}</i>
                  </span>
                  <span className="rx-state rx-s-ok">
                    <Check />
                    {t('Confirmed by')} {who}
                  </span>
                </li>
              ))}
            </ul>
            <div className="rx-people" aria-hidden="true">
              {[
                ['AB', 'A. Berger'],
                ['KW', 'K. Wagner'],
                ['MH', 'M. Huber'],
              ].map(([i, n]) => (
                <span key={n} className="rx-person">
                  <span className="rx-av">{i}</span>
                  {n}, {t('own login')}
                </span>
              ))}
            </div>
          </div>
        }
      />

      <section className="rx-sec rx-belief" aria-labelledby="rx-belief-h">
        <div className="rx-wrap">
          <p className="rx-belief-eyebrow">{t('What we believe')}</p>
          <h2 id="rx-belief-h" className="rx-belief-h">
            {t('An agent’s best hours belong to people, not paperwork.')}
          </h2>
          <p className="rx-belief-p">
            {t(
              'We want the documents, the checking and the drafting to take care of themselves, so you can spend your time on the part only you can do: the viewing, the buyer, and the owner who trusts you with their home.'
            )}
          </p>
        </div>
      </section>

      {/* 6. who builds it */}
      <Section
        flip
        text={
          <>
            <h2 className="rx-h2">{t('Built in Vienna by SNS Solutions')}</h2>
            <p className="rx-p">
              {t('Immvela is made by SNS Software Solutions GmbH in Vienna. German first, written for Austria, Germany and Switzerland.')}
            </p>
            <p className="rx-p">
              <a className="rx-link" href={teamHref}>
                {t('Meet the team')}
              </a>
            </p>
          </>
        }
        vis={
          <span className="rx-helix-box" role="img" aria-label={t('The Immvela helix')}>
            <HelixCanvas style={{ width: '100%', height: '100%' }} />
          </span>
        }
      />

      <ApplyBand t={t} href={`${path()}#apply`} />
    </>
  )
}
