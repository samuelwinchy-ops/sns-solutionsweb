'use client'

import type { Locale } from '@/i18n/config'
import { immvelaT } from '@/i18n/immvela'
import { useImmvelaPath } from '@/lib/immvela-nav'
import { PHOTOS } from '@/lib/immvela-photos'
import { ApplyBand, Arrow, Channels, Check, Section, Tag } from './parts'

/*
 * Modules. One claim and one proof per screen, text and product alternating.
 * Live is what works in the closed beta today; Next is direction, never dated (TRUTH.md).
 */
export default function ModulesSections({ locale }: { locale: Locale }) {
  const t = immvelaT(locale)
  const path = useImmvelaPath(locale)

  const live: [string, string][] = [
    ['Documents', '#documents'],
    ['Document checklist', '#checklist'],
    ['Exposé, brochure and posts', '#drafts'],
    ['Staging', '#staging'],
    ['Publishing', '#publishing'],
    ['CRM import', '#import'],
  ]
  const next = ['Enquiries', 'Office rules', 'Owner overview', 'Portal publishing', 'Walkthrough video']

  return (
    <>
      {/* 0. what this page is, and the map of it */}
      <Section
        first
        wide
        text={
          <>
            <h1 className="rx-h1">{t('What Immvela does today, and what comes next')}</h1>
            <p className="rx-lede">
              {t(
                'Every part works from the same confirmed values of a property. Live means it works today in the closed beta. Next means we are building it.'
              )}
            </p>
          </>
        }
        vis={
          <nav className="rx-index" aria-label={t('Modules')}>
            <div>
              <h2>
                <span className="rx-live">{t('Live')}</span>
                {t('in the closed beta')}
              </h2>
              <ol>
                {live.map(([name, href]) => (
                  <li key={href}>
                    <a href={href}>
                      {t(name)}
                      <Arrow />
                    </a>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2>
                <span className="rx-next">{t('Next')}</span>
                {t('what we are building')}
              </h2>
              <ol>
                {next.map((name) => (
                  <li key={name}>
                    <a href="#next" className="rx-soon">
                      {t(name)}
                      <Arrow />
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
        }
      />

      {/* 1. documents: read, then confirmed */}
      <Section
        id="documents"
        text={
          <>
            <Tag t={t} name="Documents" />
            <h2 className="rx-h2">{t('It reads the documents. You confirm what counts.')}</h2>
            <p className="rx-p">
              {t(
                'Immvela reads the Energieausweis and the Grundbuchauszug and keeps your other documents on file. What it reads is a draft until a person confirms it.'
              )}
            </p>
          </>
        }
        vis={
          <div className="rx-app" role="img" aria-label={t('Values read from the Energieausweis for Praterstraße 31. One is confirmed, two wait for confirmation, and the Wohnfläche differs from the floor plan, so Immvela asks which is right.')}>
            <div className="rx-bar">
              <b>Praterstraße 31</b>
              <span>{t('Energieausweis, read from page 1')}</span>
            </div>
            <div className="rx-read">
              <div className="rx-page" aria-hidden="true">
                <h4>ENERGIEAUSWEIS</h4>
                <div className="rx-ln" style={{ width: '80%' }} />
                <div className="rx-ln" style={{ width: '62%' }} />
                <div className="rx-ln am" style={{ width: '70%' }} />
                <div className="rx-ln" style={{ width: '54%' }} />
                <div className="rx-scale">
                  {['#2e8b57', '#5aa651', '#a6c64b', '#f2d23c', '#f1a33a', '#e5672f', '#d4332a'].map((c) => (
                    <i key={c} style={{ background: c }} />
                  ))}
                </div>
                <div className="rx-ln on" style={{ width: '66%', marginTop: '8px' }} />
                <div className="rx-ln on" style={{ width: '48%' }} />
                <div className="rx-ln" style={{ width: '76%' }} />
                <div className="rx-ln" style={{ width: '58%' }} />
                <div className="rx-ln on" style={{ width: '44%' }} />
                <div className="rx-ln" style={{ width: '70%' }} />
              </div>
              <ul className="rx-rows" aria-hidden="true">
                <li className="rx-row">
                  <span className="rx-k">
                    <b>HWB</b>
                    <i>Heizwärmebedarf, 61 kWh/m²a</i>
                  </span>
                  <span className="rx-state rx-s-ok">
                    <Check />
                    {t('Confirmed by you')}
                  </span>
                </li>
                <li className="rx-row">
                  <span className="rx-k">
                    <b>fGEE</b>
                    <i>1,02</i>
                  </span>
                  <span className="rx-state rx-s-draft">{t('Read, not confirmed')}</span>
                </li>
                <li className="rx-row rx-row-amber">
                  <span className="rx-k">
                    <b>Wohnfläche</b>
                    <i>{t('The floor plan says 76,0 m². Which is right?')}</i>
                  </span>
                  <span className="rx-pick">
                    <span>78,0 m²</span>
                    <span>76,0 m²</span>
                  </span>
                </li>
                <li className="rx-row">
                  <span className="rx-k">
                    <b>{t('Valid until')}</b>
                    <i>14.03.2031</i>
                  </span>
                  <span className="rx-state rx-s-draft">{t('Read, not confirmed')}</span>
                </li>
              </ul>
            </div>
          </div>
        }
      />

      {/* 2. the checklist per listing */}
      <Section
        id="checklist"
        flip
        text={
          <>
            <Tag t={t} name="Document checklist" />
            <h2 className="rx-h2">{t('Every listing shows which documents are still missing')}</h2>
            <p className="rx-p">
              {t(
                'Each listing gets a checklist from SNS’s standard lists for a flat or a house in Austria and a flat in Germany. A certificate that is about to expire is flagged.'
              )}
            </p>
          </>
        }
        vis={
          <div className="rx-app" role="img" aria-label={t('Document checklist for Gentzgasse 14, a flat in Austria. Four of seven documents are on file; the Energieausweis expires in six weeks; three are not on file yet.')}>
            <div className="rx-bar">
              <b>Gentzgasse 14</b>
              <span>{t('Flat, Austria')}</span>
            </div>
            <ul className="rx-rows" aria-hidden="true">
              {(
                [
                  ['Energieausweis', 'amber'],
                  ['Grundbuchauszug', 'ok'],
                  ['Grundriss', 'ok'],
                  ['Nutzwertgutachten', 'ok'],
                  ['Wohnungseigentumsvertrag', 'none'],
                  ['Jahresabrechnung', 'none'],
                  ['Eigentümerprotokoll', 'none'],
                ] as const
              ).map(([doc, s]) => (
                <li key={doc} className={s === 'amber' ? 'rx-row rx-row-amber' : 'rx-row'}>
                  <span className="rx-k">
                    <b>{doc}</b>
                  </span>
                  {s === 'ok' && (
                    <span className="rx-state rx-s-ok">
                      <Check />
                      {t('On file')}
                    </span>
                  )}
                  {s === 'amber' && (
                    <span className="rx-state rx-s-amber">
                      <i className="rx-dot" style={{ background: '#c98a1e' }} />
                      {t('Expires in 6 weeks')}
                    </span>
                  )}
                  {s === 'none' && <span className="rx-state rx-s-none">{t('Not on file yet')}</span>}
                </li>
              ))}
            </ul>
            <p className="rx-foot">{t('SNS standard list: flat, Austria. 4 of 7 on file.')}</p>
          </div>
        }
      />

      {/* 3. the three drafts */}
      <Section
        id="drafts"
        wide
        text={
          <>
            <Tag t={t} name="Exposé, brochure and posts" />
            <h2 className="rx-h2">{t('The Exposé, the brochure and the posts, drafted from what you confirmed')}</h2>
            <p className="rx-p">
              {t(
                'Written in the German of the listing’s country, Austria, Germany or Switzerland, and set in your office’s brand. Each one is a draft for you to check.'
              )}
            </p>
          </>
        }
        vis={
          <div className="rx-desk" role="img" aria-label={t('Three drafts for Gentzgasse 14: an Exposé, a brochure page in the office brand, and an Instagram post.')}>
            <div aria-hidden="true">
              {/* Exposé */}
              <div className="rx-d rx-d-exp">
                <div className="rx-paper" style={{ position: 'relative' }}>
                  <img src={PHOTOS.coverMain.src} alt="" style={{ aspectRatio: '4/3' }} />
                  <div style={{ padding: '14px 16px 16px' }}>
                    <div style={{ fontSize: '11px', color: '#4f5c57' }}>Exposé, Gentzgasse 14, 1180 Wien</div>
                    <div style={{ marginTop: '6px', fontSize: '16px', lineHeight: 1.25, fontWeight: 600, color: '#0a2b22' }}>
                      Helle 3-Zimmer-Wohnung mit Balkon in Währing
                    </div>
                    <div style={{ marginTop: '12px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderRadius: '8px', overflow: 'hidden', background: '#1d3b31', color: '#eef3ef' }}>
                      {[
                        ['Wohnfläche', '76 m²'],
                        ['Zimmer', '3'],
                        ['Baujahr', '1908'],
                        ['HWB', '48'],
                      ].map(([k, v], i) => (
                        <div key={k} style={{ padding: '7px 8px', borderLeft: i ? '1px solid rgba(255,255,255,.14)' : 0 }}>
                          <div style={{ fontSize: '9px', opacity: 0.8 }}>{k}</div>
                          <div style={{ fontSize: '13px', fontWeight: 600 }}>{v}</div>
                        </div>
                      ))}
                    </div>
                    <div className="rx-ln" style={{ width: '92%', marginTop: '14px' }} />
                    <div className="rx-ln" style={{ width: '78%', marginTop: '7px' }} />
                  </div>
                </div>
                <span className="rx-cap">Exposé</span>
              </div>
              {/* brochure */}
              <div className="rx-d rx-d-bro">
                <div className="rx-paper" style={{ position: 'relative' }}>
                  <img src={PHOTOS.exterior!.src} alt="" style={{ aspectRatio: '3/4' }} />
                  <div style={{ padding: '10px 12px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#0a2b22' }}>Währing</span>
                    <span style={{ fontSize: '10px', padding: '4px 6px', borderRadius: '4px', border: '1px dashed rgba(10,43,34,.35)', color: '#4f5c57' }}>
                      {t('[Your logo]')}
                    </span>
                  </div>
                </div>
                <span className="rx-cap">{t('Brochure')}</span>
              </div>
              {/* Instagram */}
              <div className="rx-d rx-d-ig">
                <div className="rx-paper" style={{ position: 'relative' }}>
                  <img src={PHOTOS.interior2.src} alt="" style={{ aspectRatio: '1/1' }} />
                  <div style={{ padding: '10px 11px 12px', fontSize: '11px', lineHeight: 1.4, color: '#0a2b22' }}>
                    Altbau in Währing, Balkon zum Innenhof. HWB 48, fGEE 0,92.
                  </div>
                </div>
                <span className="rx-cap">{t('Instagram post')}</span>
              </div>
            </div>
          </div>
        }
      />

      {/* 4. staging */}
      <Section
        id="staging"
        flip
        wide
        text={
          <>
            <Tag t={t} name="Staging" />
            <h2 className="rx-h2">{t('Empty rooms, furnished. Every photo labelled.')}</h2>
            <p className="rx-p">
              {t(
                'Upload a photo of an empty room. Immvela furnishes it and marks every result as virtually staged.'
              )}
            </p>
          </>
        }
        vis={
          <div className="rx-photo">
            <img src={PHOTOS.stagedRoom.src} alt={t('A living room furnished by Immvela, marked as virtually staged.')} />
            <span className="rx-stamp">{t('Virtually staged')}</span>
          </div>
        }
      />

      {/* 5. publishing */}
      <Section
        id="publishing"
        text={
          <>
            <Tag t={t} name="Publishing" />
            <h2 className="rx-h2">{t('Five channels from one place, and nothing goes out without your yes')}</h2>
            <p className="rx-p">
              {t(
                'Instagram, Facebook, LinkedIn, TikTok and YouTube. Publishing always asks for your approval, and an ad missing required energy values is held, for every agent in the office.'
              )}
            </p>
          </>
        }
        vis={
          <div className="rx-app" role="img" aria-label={t('Three posts waiting for approval. Two can be approved. The post for Praterstraße 31 is held because its energy values are missing.')}>
            <div className="rx-bar">
              <b>{t('Waiting for your approval')}</b>
              <span>{t('3 posts')}</span>
            </div>
            <ul className="rx-rows rx-rows-stack" aria-hidden="true">
              <li className="rx-row">
                <span className="rx-post">
                  <img className="rx-thumb" src={PHOTOS.interior2.src} alt="" />
                  <span className="rx-k">
                    <b>Gentzgasse 14</b>
                    <Channels list={['ig', 'fb']} />
                  </span>
                </span>
                <span className="rx-btn">{t('Approve and publish')}</span>
              </li>
              <li className="rx-row">
                <span className="rx-post">
                  <img className="rx-thumb" src={PHOTOS.coverMain.src} alt="" />
                  <span className="rx-k">
                    <b>Kettenbrückengasse 7</b>
                    <Channels list={['li', 'yt']} />
                  </span>
                </span>
                <span className="rx-btn">{t('Approve and publish')}</span>
              </li>
              <li className="rx-row rx-row-amber">
                <span className="rx-post">
                  <img className="rx-thumb" src={PHOTOS.secondListing.living.src} alt="" />
                  <span className="rx-k">
                    <b>Praterstraße 31</b>
                    <Channels list={['ig', 'tt']} />
                  </span>
                </span>
                <span className="rx-state rx-s-amber">
                  <i className="rx-dot" style={{ background: '#c98a1e' }} />
                  {t('Held: energy values missing')}
                </span>
              </li>
            </ul>
          </div>
        }
      />

      {/* 6. CRM import */}
      <Section
        id="import"
        flip
        text={
          <>
            <Tag t={t} name="CRM import" />
            <h2 className="rx-h2">{t('Bring your listings in from your CRM')}</h2>
            <p className="rx-p">
              {t('Export your listings as OpenImmo from onOffice, Justimmo, Propstack or FLOWFACT, and Immvela brings them in.')}
            </p>
          </>
        }
        vis={
          <div className="rx-app" role="img" aria-label={t('An OpenImmo export brought five listings into Immvela.')}>
            <div className="rx-bar">
              <b>{t('OpenImmo export')}</b>
              <span>openimmo-export.zip</span>
            </div>
            <ul className="rx-rows" aria-hidden="true">
              {['Gentzgasse 14', 'Kettenbrückengasse 7', 'Praterstraße 31', 'Josefstädter Straße 52', 'Hietzinger Hauptstraße 18'].map((a) => (
                <li key={a} className="rx-row">
                  <span className="rx-k">
                    <b>{a}</b>
                  </span>
                  <span className="rx-state rx-s-ok">
                    <Check />
                    {t('Brought in')}
                  </span>
                </li>
              ))}
            </ul>
            <p className="rx-foot">{t('5 listings brought in')}</p>
          </div>
        }
      />

      {/* 7. next: direction, no dates */}
      <Section
        id="next"
        text={
          <>
            <h2 className="rx-h2">{t('What we are building next')}</h2>
            <p className="rx-p">{t('None of this is in Immvela yet. We show it so you know where it is going.')}</p>
          </>
        }
        vis={
          <ul className="rx-nextlist">
            {(
              [
                ['Enquiries', 'Answers and qualifies enquiries. Never books viewings or quotes prices.'],
                ['Office rules', 'Your office sets the required documents, the templates, and manager approval before publishing.'],
                ['Owner overview', 'What every agent confirmed and published, in one view for the owner.'],
                ['Portal publishing', 'Listings out to willhaben and ImmoScout24.'],
                ['Walkthrough video', 'A walkthrough video from one sweep with a phone.'],
              ] as const
            ).map(([name, line]) => (
              <li key={name}>
                <b>
                  {t(name)}
                  <span className="rx-next">{t('Next')}</span>
                </b>
                <span>{t(line)}</span>
              </li>
            ))}
          </ul>
        }
      />

      <ApplyBand t={t} href={`${path()}#apply`} />
    </>
  )
}
