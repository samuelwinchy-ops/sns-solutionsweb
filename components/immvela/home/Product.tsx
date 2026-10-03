import Image from 'next/image'
import type { CSSProperties } from 'react'
import HelixCanvas from '../HelixCanvas'
import type { HomeVals } from './vals'
import type { T } from '@/i18n/immvela'

export default function Product({ t, v }: { t: T; v: HomeVals }) {
  return (
    <section className="pv-sec" style={{ padding: '72px 24px 104px', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
        <div style={{ maxWidth: '640px' }}>
          <h2
            className="pv-h2"
            style={{
              margin: '0',
              color: '#14473a',
              fontFamily: 'var(--font-bricolage),var(--font-geist-sans),system-ui,sans-serif',
              fontOpticalSizing: 'auto',
              fontVariationSettings: "'opsz' 72",
              fontWeight: '650',
              fontSize: '52px',
              lineHeight: '1.02',
              letterSpacing: '-0.035em',
              textWrap: 'balance',
            }}
          >
            {t('Documents in, a checked listing out')}
          </h2>
          <p
            style={{
              margin: '16px 0 0',
              fontSize: '18px',
              lineHeight: '1.55',
              color: '#3f574f',
              textWrap: 'pretty',
            }}
          >
            {t(
              'Give it the Energieausweis, the floor plan and the photos. Immvela drafts the Exposé and the posts, and when two documents disagree, it asks you before anything goes out.'
            )}
          </p>
        </div>
        <div data-pv-stage="" ref={v.pvSetStage} style={{ marginTop: '40px' }}>
          <div className={v.pvStageClass} key={v.pvRun}>
            <div
              className="pv-sd"
              role="img"
              aria-label={t(
                'Five documents, an Energieausweis, a floor plan and three photos, go into the Immvela helix. An Exposé for Gentzgasse 14 in 1180 Wien comes out, with an Instagram post and a virtually staged photo behind it. The Wohnfläche reads 78 m² in the Energieausweis and 76 m² in the floor plan, so Immvela asks which is right. The agent picks 76 m², the value is confirmed from the floor plan, and the post is ready to publish.'
              )}
              style={{ containerType: 'inline-size', width: '100%' }}
            >
              <div
                style={{ position: 'relative', fontSize: 'calc(100cqw / 1160)', height: '560em' }}
              >
                <div
                  className="pv-a pv-doc"
                  style={
                    {
                      position: 'absolute',
                      left: '0',
                      top: '196em',
                      width: '150em',
                      zIndex: '5',
                      '--dx': '505em',
                      '--dy': '35em',
                      '--d': '.15s',
                    } as CSSProperties
                  }
                >
                  <div
                    className="gl-sheen"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8em',
                      padding: '8em 10em',
                      borderRadius: '10em',
                    }}
                  >
                    <span
                      style={{
                        width: '24em',
                        height: '30em',
                        flex: 'none',
                        borderRadius: '3em',
                        background: '#ffffff',
                        boxShadow: 'inset 0 0 0 1px rgba(10,43,34,.16)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        gap: '2em',
                        padding: '0 4em 5em',
                        boxSizing: 'border-box',
                      }}
                    >
                      <span
                        style={{
                          display: 'block',
                          height: '3em',
                          width: '40%',
                          background: '#1f7a5a',
                          borderRadius: '1em',
                        }}
                      />
                      <span
                        style={{
                          display: 'block',
                          height: '3em',
                          width: '65%',
                          background: '#7fb069',
                          borderRadius: '1em',
                        }}
                      />
                      <span
                        style={{
                          display: 'block',
                          height: '3em',
                          width: '90%',
                          background: '#f4b860',
                          borderRadius: '1em',
                        }}
                      />
                    </span>
                    <div style={{ display: 'flex', flexDirection: 'column', minWidth: '0' }}>
                      <span
                        style={{
                          fontSize: '12.5em',
                          lineHeight: '1.3',
                          fontWeight: '600',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {t('Energieausweis')}
                      </span>
                      <span style={{ fontSize: '11em', lineHeight: '1.3', color: '#4f5c57' }}>
                        {t('PDF')}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="pv-a pv-doc"
                  style={
                    {
                      position: 'absolute',
                      left: '162em',
                      top: '196em',
                      width: '128em',
                      zIndex: '5',
                      '--dx': '354em',
                      '--dy': '35em',
                      '--d': '.35s',
                    } as CSSProperties
                  }
                >
                  <div
                    className="gl-sheen"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8em',
                      padding: '8em 10em',
                      borderRadius: '10em',
                    }}
                  >
                    <svg
                      viewBox="0 0 24 30"
                      style={{ width: '24em', height: '30em', flex: 'none', display: 'block' }}
                      fill="#ffffff"
                      stroke="#0a2b22"
                      strokeOpacity=".55"
                      strokeWidth="1.2"
                    >
                      <rect x=".6" y=".6" width="22.8" height="28.8" rx="3" />
                      <path d="M5 7h14v16H5zM12 7v8M5 15h9" fill="none" />
                    </svg>
                    <div style={{ display: 'flex', flexDirection: 'column', minWidth: '0' }}>
                      <span
                        style={{
                          fontSize: '12.5em',
                          lineHeight: '1.3',
                          fontWeight: '600',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {t('Grundriss')}
                      </span>
                      <span style={{ fontSize: '11em', lineHeight: '1.3', color: '#4f5c57' }}>
                        {t('PDF')}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="pv-a pv-doc"
                  style={
                    {
                      position: 'absolute',
                      left: '22em',
                      top: '268em',
                      width: '64em',
                      zIndex: '5',
                      '--dx': '526em',
                      '--dy': '-38em',
                      '--d': '.55s',
                    } as CSSProperties
                  }
                >
                  <div
                    className="hl-d1"
                    style={{ background: '#ffffff', padding: '3em', borderRadius: '5em' }}
                  >
                    <Image
                      src="/immvela/redesign/sample-living.jpg"
                      alt=""
                      style={{
                        display: 'block',
                        width: '58em',
                        height: '42em',
                        objectFit: 'cover',
                        borderRadius: '3em',
                      }}
                      width={1600}
                      height={1142}
                      sizes="(max-width: 760px) 100vw, 480px"
                    />
                  </div>
                </div>
                <div
                  className="pv-a pv-doc"
                  style={
                    {
                      position: 'absolute',
                      left: '108em',
                      top: '268em',
                      width: '64em',
                      zIndex: '5',
                      '--dx': '440em',
                      '--dy': '-38em',
                      '--d': '.7s',
                    } as CSSProperties
                  }
                >
                  <div
                    className="hl-d1"
                    style={{ background: '#ffffff', padding: '3em', borderRadius: '5em' }}
                  >
                    <Image
                      src="/immvela/redesign/sample-lounge.jpg"
                      alt=""
                      style={{
                        display: 'block',
                        width: '58em',
                        height: '42em',
                        objectFit: 'cover',
                        borderRadius: '3em',
                      }}
                      width={960}
                      height={637}
                      sizes="(max-width: 760px) 100vw, 480px"
                    />
                  </div>
                </div>
                <div
                  className="pv-a pv-doc"
                  style={
                    {
                      position: 'absolute',
                      left: '194em',
                      top: '268em',
                      width: '64em',
                      zIndex: '5',
                      '--dx': '354em',
                      '--dy': '-38em',
                      '--d': '.85s',
                    } as CSSProperties
                  }
                >
                  <div
                    className="hl-d1"
                    style={{ background: '#ffffff', padding: '3em', borderRadius: '5em' }}
                  >
                    <Image
                      src="/immvela/redesign/sample-study.jpg"
                      alt=""
                      style={{
                        display: 'block',
                        width: '58em',
                        height: '42em',
                        objectFit: 'cover',
                        borderRadius: '3em',
                      }}
                      width={1600}
                      height={1068}
                      sizes="(max-width: 760px) 100vw, 480px"
                    />
                  </div>
                </div>
                <div
                  className="pv-a pv-dock"
                  style={{
                    position: 'absolute',
                    left: '267em',
                    top: '-35em',
                    width: '170em',
                    height: '170em',
                    zIndex: '4',
                  }}
                >
                  <div
                    className="gl-glass"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      boxSizing: 'border-box',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow:
                        'inset 0 1px 0 #fff,0 2px 4px rgba(10,43,34,0.06),0 18px 34px -16px rgba(10,43,34,0.30)',
                    }}
                  >
                    <div className="pv-a pv-ack" style={{ width: '136em', height: '136em' }}>
                      <HelixCanvas rate={v.pvHelixRate} style={{ width: '100%', height: '100%' }} />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '460em',
                    top: '356em',
                    width: '240em',
                    display: 'grid',
                    justifyItems: 'center',
                    zIndex: '4',
                  }}
                >
                  <div
                    className="gl-glass pv-a pv-win"
                    style={
                      {
                        gridArea: '1/1',
                        '--d': '.3s',
                        '--len': '2.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '7em',
                        padding: '6em 12em',
                        borderRadius: '999em',
                        whiteSpace: 'nowrap',
                      } as CSSProperties
                    }
                  >
                    <span
                      style={{
                        width: '8em',
                        height: '8em',
                        borderRadius: '50%',
                        background: '#1f7a5a',
                        flex: 'none',
                      }}
                    />
                    <span style={{ fontSize: '13.5em', lineHeight: '1.3', fontWeight: '600' }}>
                      {t('Reading 5 documents')}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '20em',
                    top: '33em',
                    width: '260em',
                    display: 'grid',
                    justifyItems: 'end',
                    zIndex: '4',
                  }}
                >
                  <div
                    className="gl-glass pv-a pv-win"
                    style={
                      {
                        gridArea: '1/1',
                        '--d': '2.5s',
                        '--len': '1.1s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '7em',
                        padding: '6em 12em',
                        borderRadius: '999em',
                        whiteSpace: 'nowrap',
                      } as CSSProperties
                    }
                  >
                    <span
                      style={{
                        width: '8em',
                        height: '8em',
                        borderRadius: '50%',
                        background: '#1f7a5a',
                        flex: 'none',
                      }}
                    />
                    <span style={{ fontSize: '13.5em', lineHeight: '1.3', fontWeight: '600' }}>
                      {t('Drafting the Exposé')}
                    </span>
                  </div>
                  <div
                    className="gl-glass pv-a pv-win"
                    style={
                      {
                        gridArea: '1/1',
                        '--d': '3.6s',
                        '--len': '3s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '7em',
                        padding: '6em 12em',
                        borderRadius: '999em',
                        whiteSpace: 'nowrap',
                      } as CSSProperties
                    }
                  >
                    <span
                      style={{
                        width: '8em',
                        height: '8em',
                        borderRadius: '50%',
                        background: '#f4b860',
                        flex: 'none',
                      }}
                    />
                    <span style={{ fontSize: '13.5em', lineHeight: '1.3', fontWeight: '600' }}>
                      {t('1 question for you')}
                    </span>
                  </div>
                  <div
                    className="gl-glass pv-a pv-in"
                    style={
                      {
                        gridArea: '1/1',
                        '--d': '6.6s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '7em',
                        padding: '6em 12em',
                        borderRadius: '999em',
                        whiteSpace: 'nowrap',
                      } as CSSProperties
                    }
                  >
                    <span
                      style={{
                        width: '8em',
                        height: '8em',
                        borderRadius: '50%',
                        background: '#1f7a5a',
                        flex: 'none',
                      }}
                    />
                    <span style={{ fontSize: '13.5em', lineHeight: '1.3', fontWeight: '600' }}>
                      {t('Ready to advertise')}
                    </span>
                  </div>
                </div>
                <div
                  className="pv-a pv-arrive"
                  style={
                    {
                      position: 'absolute',
                      left: '140em',
                      top: '250em',
                      width: '220em',
                      zIndex: '1',
                      '--r': '-6deg',
                      '--r0': '-11deg',
                      '--fx': '-40em',
                      '--fy': '30em',
                      '--d': '2.6s',
                      transform: 'rotate(-6deg)',
                    } as CSSProperties
                  }
                >
                  <div
                    className="hl-d1"
                    style={{
                      position: 'relative',
                      background: '#ffffff',
                      padding: '6em',
                      borderRadius: '4em',
                    }}
                  >
                    <Image
                      src="/immvela/redesign/sample-living.jpg"
                      alt=""
                      style={{
                        display: 'block',
                        width: '208em',
                        height: '156em',
                        objectFit: 'cover',
                        borderRadius: '2em',
                      }}
                      width={1600}
                      height={1142}
                      sizes="(max-width: 760px) 100vw, 480px"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        left: '14em',
                        bottom: '14em',
                        padding: '4em 8em',
                        borderRadius: '999em',
                        background: 'rgba(255,255,255,0.92)',
                      }}
                    >
                      <span
                        style={{
                          display: 'block',
                          fontSize: '11.5em',
                          lineHeight: '1.3',
                          fontWeight: '600',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {t('Virtually staged')}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="pv-a pv-arrive"
                  style={
                    {
                      position: 'absolute',
                      left: '730em',
                      top: '80em',
                      width: '300em',
                      zIndex: '2',
                      '--r': '4deg',
                      '--r0': '9deg',
                      '--fx': '50em',
                      '--fy': '30em',
                      '--d': '2.8s',
                      transform: 'rotate(4deg)',
                    } as CSSProperties
                  }
                >
                  <div
                    className="gl-sheen hl-d2"
                    style={{ borderRadius: '14em', overflow: 'hidden' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '8em',
                        padding: '10em 14em',
                      }}
                    >
                      <span
                        style={{
                          width: '20em',
                          height: '20em',
                          borderRadius: '6em',
                          background: 'linear-gradient(45deg,#f9a52b,#e1306c,#833ab4)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flex: 'none',
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          style={{ width: '12em', height: '12em' }}
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="2.2"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="5" />
                          <circle cx="12" cy="12" r="4" />
                        </svg>
                      </span>
                      <span style={{ fontSize: '12.5em', lineHeight: '1.4', color: '#4f5c57' }}>
                        {t('Instagram')}
                      </span>
                    </div>
                    <Image
                      src="/immvela/redesign/sample-lounge.jpg"
                      alt=""
                      style={{
                        width: '100%',
                        height: '200em',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                      width={960}
                      height={637}
                      sizes="(max-width: 760px) 100vw, 480px"
                    />
                    <div style={{ padding: '12em 14em 0 96em' }}>
                      <span
                        style={{
                          display: 'block',
                          fontSize: '13em',
                          lineHeight: '1.45',
                          color: '#0a2b22',
                        }}
                      >
                        {t('Altbau in Währing, Balkon zum Innenhof. HWB 48, fGEE 0,92.')}
                      </span>
                    </div>
                    <div
                      style={{ display: 'grid', justifyItems: 'end', padding: '12em 14em 14em' }}
                    >
                      <span
                        className="pv-a pv-win"
                        style={
                          {
                            gridArea: '1/1',
                            '--d': '3.2s',
                            '--len': '3.5s',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '.5em',
                            whiteSpace: 'nowrap',
                            fontSize: '12.5em',
                            lineHeight: '1.3',
                            fontWeight: '600',
                            padding: '.45em .85em',
                            borderRadius: '999em',
                            background: '#f1efe8',
                            color: '#0a2b22',
                          } as CSSProperties
                        }
                      >
                        <span
                          style={{
                            width: '.5em',
                            height: '.5em',
                            borderRadius: '50%',
                            background: '#f4b860',
                            flex: 'none',
                          }}
                        />
                        {t('Held until you confirm')}
                      </span>
                      <span
                        className="pv-a pv-in"
                        style={
                          {
                            gridArea: '1/1',
                            '--d': '6.7s',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '.5em',
                            whiteSpace: 'nowrap',
                            fontSize: '12.5em',
                            lineHeight: '1.3',
                            fontWeight: '600',
                            padding: '.45em .85em',
                            borderRadius: '999em',
                            background: '#f1efe8',
                            color: '#0a2b22',
                          } as CSSProperties
                        }
                      >
                        <span
                          style={{
                            width: '.5em',
                            height: '.5em',
                            borderRadius: '50%',
                            background: '#1f7a5a',
                            flex: 'none',
                          }}
                        />
                        {t('Ready. Publish?')}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="pv-a pv-arrive"
                  style={
                    {
                      position: 'absolute',
                      left: '350em',
                      top: '30em',
                      width: '460em',
                      zIndex: '3',
                      '--r': '-2deg',
                      '--r0': '-5deg',
                      '--fx': '-70em',
                      '--fy': '40em',
                      '--d': '2.3s',
                      transform: 'rotate(-2deg)',
                    } as CSSProperties
                  }
                >
                  <div
                    className="hl-d3"
                    style={{
                      background: '#fbfaf5',
                      color: '#1c2a25',
                      borderRadius: '8em',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src="/immvela/redesign/sample-cover.jpg"
                      alt=""
                      style={{
                        width: '100%',
                        height: '166em',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                      width={1300}
                      height={1107}
                      sizes="(max-width: 760px) 100vw, 480px"
                    />
                    <div style={{ padding: '16em 18em 18em' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4em' }}>
                        <span style={{ fontSize: '13em', lineHeight: '1.5', color: '#5b6862' }}>
                          {t('Exposé, Gentzgasse 14, 1180 Wien')}
                        </span>
                        <span
                          style={{
                            fontSize: '22em',
                            lineHeight: '1.15',
                            fontWeight: '600',
                            letterSpacing: '-0.02em',
                            textWrap: 'balance',
                          }}
                        >
                          {t('Helle 3-Zimmer-Wohnung mit Balkon in Währing')}
                        </span>
                      </div>
                      <div
                        style={{
                          marginTop: '12em',
                          display: 'grid',
                          gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
                          borderRadius: '5em',
                          overflow: 'hidden',
                          background: '#1f3a31',
                          color: '#eef3ef',
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        <div
                          className="pv-a pv-flash"
                          style={{
                            position: 'relative',
                            padding: '8em 8em 9em',
                            background: '#1f7a5a',
                            color: '#ffffff',
                            boxShadow: 'inset 0 0 0 1em rgba(166,232,204,0.45)',
                          }}
                        >
                          <div style={{ whiteSpace: 'nowrap', lineHeight: '1.2' }}>
                            <span style={{ fontSize: '10.5em', opacity: '.9' }}>
                              {t('Wohnfläche')}
                            </span>
                          </div>
                          <div style={{ marginTop: '2em', whiteSpace: 'nowrap' }}>
                            <span
                              className="pv-kf"
                              style={{ fontSize: '16em', lineHeight: '1.3', fontWeight: '600' }}
                            >
                              {'76 m²'}
                            </span>
                          </div>
                          <div
                            className="pv-a pv-amber"
                            style={{
                              position: 'absolute',
                              inset: '0',
                              padding: '8em 8em 9em',
                              color: '#0a2b22',
                            }}
                          >
                            <div style={{ whiteSpace: 'nowrap', lineHeight: '1.2' }}>
                              <span style={{ fontSize: '10.5em' }}>{t('Wohnfläche')}</span>
                            </div>
                            <div style={{ marginTop: '2em', whiteSpace: 'nowrap' }}>
                              <span
                                className="pv-kf"
                                style={{ fontSize: '15em', lineHeight: '1.3', fontWeight: '600' }}
                              >
                                {t('2 values')}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            padding: '8em 8em 9em',
                            borderLeft: '1px solid rgba(255,255,255,0.14)',
                          }}
                        >
                          <div style={{ whiteSpace: 'nowrap', lineHeight: '1.2' }}>
                            <span style={{ fontSize: '10.5em', opacity: '.85' }}>
                              {t('Zimmer')}
                            </span>
                          </div>
                          <div style={{ marginTop: '2em', whiteSpace: 'nowrap' }}>
                            <span
                              className="pv-kf"
                              style={{ fontSize: '16em', lineHeight: '1.3', fontWeight: '600' }}
                            >
                              {'3'}
                            </span>
                          </div>
                        </div>
                        <div
                          style={{
                            padding: '8em 8em 9em',
                            borderLeft: '1px solid rgba(255,255,255,0.14)',
                          }}
                        >
                          <div style={{ whiteSpace: 'nowrap', lineHeight: '1.2' }}>
                            <span style={{ fontSize: '10.5em', opacity: '.85' }}>
                              {t('Baujahr')}
                            </span>
                          </div>
                          <div style={{ marginTop: '2em', whiteSpace: 'nowrap' }}>
                            <span
                              className="pv-kf"
                              style={{ fontSize: '16em', lineHeight: '1.3', fontWeight: '600' }}
                            >
                              {'1908'}
                            </span>
                          </div>
                        </div>
                        <div
                          style={{
                            padding: '8em 8em 9em',
                            borderLeft: '1px solid rgba(255,255,255,0.14)',
                          }}
                        >
                          <div style={{ whiteSpace: 'nowrap', lineHeight: '1.2' }}>
                            <span style={{ fontSize: '10.5em', opacity: '.85' }}>{t('HWB')}</span>
                          </div>
                          <div style={{ marginTop: '2em', whiteSpace: 'nowrap' }}>
                            <span
                              className="pv-kf"
                              style={{ fontSize: '16em', lineHeight: '1.3', fontWeight: '600' }}
                            >
                              {'48'}
                            </span>
                          </div>
                        </div>
                        <div
                          style={{
                            padding: '8em 8em 9em',
                            borderLeft: '1px solid rgba(255,255,255,0.14)',
                          }}
                        >
                          <div style={{ whiteSpace: 'nowrap', lineHeight: '1.2' }}>
                            <span style={{ fontSize: '10.5em', opacity: '.85' }}>{t('fGEE')}</span>
                          </div>
                          <div style={{ marginTop: '2em', whiteSpace: 'nowrap' }}>
                            <span
                              className="pv-kf"
                              style={{ fontSize: '16em', lineHeight: '1.3', fontWeight: '600' }}
                            >
                              {'0,92'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="pv-a pv-grow">
                        <div style={{ minHeight: '0', overflow: 'hidden' }}>
                          <div style={{ paddingTop: '10em' }}>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10em',
                                padding: '10em 12em',
                                borderRadius: '6em',
                                background: '#ecf4ef',
                              }}
                            >
                              <span
                                style={{
                                  width: '24em',
                                  height: '24em',
                                  borderRadius: '50%',
                                  background: '#1f7a5a',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flex: 'none',
                                }}
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  style={{ width: '14em', height: '14em' }}
                                  fill="none"
                                  stroke="#ffffff"
                                  strokeWidth="2.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M5 12l5 5L19 7" />
                                </svg>
                              </span>
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '2em',
                                  minWidth: '0',
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: '14em',
                                    lineHeight: '1.3',
                                    fontWeight: '600',
                                    color: '#0a2b22',
                                  }}
                                >
                                  {t('Wohnfläche set to 76 m²')}
                                </span>
                                <span
                                  style={{
                                    fontSize: '12.5em',
                                    lineHeight: '1.35',
                                    color: '#4f5c57',
                                  }}
                                >
                                  {t('From the floor plan. Confirmed by you.')}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          marginTop: '14em',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '4em',
                        }}
                      >
                        <span style={{ fontSize: '12.5em', lineHeight: '1.3', fontWeight: '600' }}>
                          {t('Objektbeschreibung')}
                        </span>
                        <span style={{ fontSize: '13em', lineHeight: '1.5', color: '#4f5c57' }}>
                          {t(
                            'Altbauwohnung im zweiten Stock, ruhig zum Innenhof gelegen, mit Flügeltüren und Fischgrätparkett.'
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="pv-a pv-q"
                  style={{
                    position: 'absolute',
                    left: '294em',
                    top: '364em',
                    width: '330em',
                    zIndex: '6',
                  }}
                >
                  <div
                    className="hl-d3"
                    style={{
                      position: 'relative',
                      background: '#ffffff',
                      borderRadius: '14em',
                      padding: '14em',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: '110em',
                        top: '-6em',
                        width: '12em',
                        height: '12em',
                        background: '#ffffff',
                        transform: 'rotate(45deg)',
                        borderRadius: '2em',
                      }}
                    />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7em' }}>
                      <span
                        style={{
                          width: '8em',
                          height: '8em',
                          borderRadius: '50%',
                          background: '#f4b860',
                          flex: 'none',
                        }}
                      />
                      <span style={{ fontSize: '12em', lineHeight: '1.5', color: '#4f5c57' }}>
                        {t('Before this goes out')}
                      </span>
                    </div>
                    <div style={{ marginTop: '6em' }}>
                      <span
                        style={{
                          display: 'block',
                          fontSize: '14em',
                          lineHeight: '1.45',
                          fontWeight: '500',
                          color: '#0a2b22',
                        }}
                      >
                        {t(
                          'Wohnfläche: 78 m² in the Energieausweis, 76 m² in the floor plan. Which is right?'
                        )}
                      </span>
                    </div>
                    <div
                      style={{
                        marginTop: '12em',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '8em',
                      }}
                    >
                      <span
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1em',
                          padding: '8em 12em',
                          borderRadius: '10em',
                          border: '1px solid rgba(10,43,34,.16)',
                          background: '#ffffff',
                          color: '#0a2b22',
                        }}
                      >
                        <span style={{ fontSize: '14em', lineHeight: '1.3', fontWeight: '600' }}>
                          {'78 m²'}
                        </span>
                        <span style={{ fontSize: '11.5em', lineHeight: '1.3', opacity: '.75' }}>
                          {t('Energieausweis')}
                        </span>
                      </span>
                      <span
                        className="pv-a pv-press"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1em',
                          padding: '8em 12em',
                          borderRadius: '10em',
                          border: '1px solid rgba(10,43,34,.16)',
                          background: '#ffffff',
                          color: '#0a2b22',
                        }}
                      >
                        <span style={{ fontSize: '14em', lineHeight: '1.3', fontWeight: '600' }}>
                          {'76 m²'}
                        </span>
                        <span style={{ fontSize: '11.5em', lineHeight: '1.3', opacity: '.8' }}>
                          {t('Floor plan')}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="pv-a pv-cursor"
                  style={{
                    position: 'absolute',
                    left: '532em',
                    top: '477em',
                    width: '22em',
                    height: '22em',
                    zIndex: '7',
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'block',
                      overflow: 'visible',
                      filter: 'drop-shadow(0 2px 3px rgba(10,43,34,.3))',
                    }}
                  >
                    <path
                      d="M4 3l7 17 2.4-7.1L20.5 10.5z"
                      fill="#0a2b22"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="pv-sm"
              role="img"
              aria-label={t(
                'Five documents go into the Immvela helix. An Exposé comes out. The Wohnfläche reads 78 m² in the Energieausweis and 76 m² in the floor plan, so Immvela asks which is right. The agent picks 76 m², it is confirmed from the floor plan, and the Instagram post is ready to publish.'
              )}
              style={{ containerType: 'inline-size', width: '100%' }}
            >
              <div
                style={{ position: 'relative', fontSize: 'calc(100cqw / 350)', height: '716em' }}
              >
                <div
                  className="pv-a pv-doc"
                  style={
                    {
                      position: 'absolute',
                      left: '0',
                      top: '0',
                      width: '118em',
                      zIndex: '5',
                      '--dx': '116em',
                      '--dy': '67em',
                      '--d': '.15s',
                    } as CSSProperties
                  }
                >
                  <div className="gl-sheen" style={{ padding: '9em 10em', borderRadius: '9em' }}>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '11.5em',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {t('Energieausweis')}
                    </span>
                  </div>
                </div>
                <div
                  className="pv-a pv-doc"
                  style={
                    {
                      position: 'absolute',
                      left: '124em',
                      top: '0',
                      width: '92em',
                      zIndex: '5',
                      '--dx': '5em',
                      '--dy': '67em',
                      '--d': '.35s',
                    } as CSSProperties
                  }
                >
                  <div className="gl-sheen" style={{ padding: '9em 10em', borderRadius: '9em' }}>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '11.5em',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {t('Grundriss')}
                    </span>
                  </div>
                </div>
                <div
                  className="pv-a pv-doc"
                  style={
                    {
                      position: 'absolute',
                      left: '222em',
                      top: '4em',
                      width: '40em',
                      zIndex: '5',
                      '--dx': '-67em',
                      '--dy': '67em',
                      '--d': '.55s',
                    } as CSSProperties
                  }
                >
                  <Image
                    className="hl-d1"
                    src="/immvela/redesign/sample-living.jpg"
                    alt=""
                    style={{
                      display: 'block',
                      width: '40em',
                      height: '30em',
                      objectFit: 'cover',
                      borderRadius: '4em',
                    }}
                    width={1600}
                    height={1142}
                    sizes="(max-width: 760px) 100vw, 480px"
                  />
                </div>
                <div
                  className="pv-a pv-doc"
                  style={
                    {
                      position: 'absolute',
                      left: '264em',
                      top: '4em',
                      width: '40em',
                      zIndex: '5',
                      '--dx': '-109em',
                      '--dy': '67em',
                      '--d': '.7s',
                    } as CSSProperties
                  }
                >
                  <Image
                    className="hl-d1"
                    src="/immvela/redesign/sample-lounge.jpg"
                    alt=""
                    style={{
                      display: 'block',
                      width: '40em',
                      height: '30em',
                      objectFit: 'cover',
                      borderRadius: '4em',
                    }}
                    width={960}
                    height={637}
                    sizes="(max-width: 760px) 100vw, 480px"
                  />
                </div>
                <div
                  className="pv-a pv-doc"
                  style={
                    {
                      position: 'absolute',
                      left: '306em',
                      top: '4em',
                      width: '40em',
                      zIndex: '5',
                      '--dx': '-151em',
                      '--dy': '67em',
                      '--d': '.85s',
                    } as CSSProperties
                  }
                >
                  <Image
                    className="hl-d1"
                    src="/immvela/redesign/sample-study.jpg"
                    alt=""
                    style={{
                      display: 'block',
                      width: '40em',
                      height: '30em',
                      objectFit: 'cover',
                      borderRadius: '4em',
                    }}
                    width={1600}
                    height={1068}
                    sizes="(max-width: 760px) 100vw, 480px"
                  />
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '145em',
                    top: '56em',
                    width: '60em',
                    height: '60em',
                    zIndex: '4',
                  }}
                >
                  <div
                    className="gl-glass"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      boxSizing: 'border-box',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div className="pv-a pv-ack" style={{ width: '48em', height: '48em' }}>
                      <HelixCanvas rate={v.pvHelixRate} style={{ width: '100%', height: '100%' }} />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    top: '126em',
                    display: 'grid',
                    justifyItems: 'center',
                    zIndex: '4',
                  }}
                >
                  <div
                    className="pv-a pv-win"
                    style={
                      {
                        gridArea: '1/1',
                        '--d': '.3s',
                        '--len': '2.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '7em',
                        whiteSpace: 'nowrap',
                      } as CSSProperties
                    }
                  >
                    <span
                      style={{
                        width: '8em',
                        height: '8em',
                        borderRadius: '50%',
                        background: '#1f7a5a',
                        flex: 'none',
                      }}
                    />
                    <span style={{ fontSize: '13em', lineHeight: '1.3', fontWeight: '600' }}>
                      {t('Reading 5 documents')}
                    </span>
                  </div>
                  <div
                    className="pv-a pv-win"
                    style={
                      {
                        gridArea: '1/1',
                        '--d': '2.5s',
                        '--len': '1.1s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '7em',
                        whiteSpace: 'nowrap',
                      } as CSSProperties
                    }
                  >
                    <span
                      style={{
                        width: '8em',
                        height: '8em',
                        borderRadius: '50%',
                        background: '#1f7a5a',
                        flex: 'none',
                      }}
                    />
                    <span style={{ fontSize: '13em', lineHeight: '1.3', fontWeight: '600' }}>
                      {t('Drafting the Exposé')}
                    </span>
                  </div>
                  <div
                    className="pv-a pv-win"
                    style={
                      {
                        gridArea: '1/1',
                        '--d': '3.6s',
                        '--len': '3s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '7em',
                        whiteSpace: 'nowrap',
                      } as CSSProperties
                    }
                  >
                    <span
                      style={{
                        width: '8em',
                        height: '8em',
                        borderRadius: '50%',
                        background: '#f4b860',
                        flex: 'none',
                      }}
                    />
                    <span style={{ fontSize: '13em', lineHeight: '1.3', fontWeight: '600' }}>
                      {t('1 question for you')}
                    </span>
                  </div>
                  <div
                    className="pv-a pv-in"
                    style={
                      {
                        gridArea: '1/1',
                        '--d': '6.6s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '7em',
                        whiteSpace: 'nowrap',
                      } as CSSProperties
                    }
                  >
                    <span
                      style={{
                        width: '8em',
                        height: '8em',
                        borderRadius: '50%',
                        background: '#1f7a5a',
                        flex: 'none',
                      }}
                    />
                    <span style={{ fontSize: '13em', lineHeight: '1.3', fontWeight: '600' }}>
                      {t('Ready to advertise')}
                    </span>
                  </div>
                </div>
                <div
                  className="pv-a pv-arrive"
                  style={
                    {
                      position: 'absolute',
                      left: '0',
                      top: '168em',
                      width: '350em',
                      zIndex: '3',
                      '--r': '0deg',
                      '--r0': '0deg',
                      '--fx': '0em',
                      '--fy': '24em',
                      '--d': '2.3s',
                    } as CSSProperties
                  }
                >
                  <div
                    className="hl-d3"
                    style={{
                      background: '#fbfaf5',
                      color: '#1c2a25',
                      borderRadius: '8em',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src="/immvela/redesign/sample-cover.jpg"
                      alt=""
                      style={{
                        width: '100%',
                        height: '130em',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                      width={1300}
                      height={1107}
                      sizes="(max-width: 760px) 100vw, 480px"
                    />
                    <div style={{ padding: '14em' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4em' }}>
                        <span style={{ fontSize: '12em', lineHeight: '1.5', color: '#5b6862' }}>
                          {t('Exposé, Gentzgasse 14, 1180 Wien')}
                        </span>
                        <span
                          style={{
                            fontSize: '19em',
                            lineHeight: '1.2',
                            fontWeight: '600',
                            letterSpacing: '-0.02em',
                            textWrap: 'balance',
                          }}
                        >
                          {t('Helle 3-Zimmer-Wohnung mit Balkon in Währing')}
                        </span>
                      </div>
                      <div
                        style={{
                          marginTop: '12em',
                          display: 'grid',
                          gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
                          borderRadius: '5em',
                          overflow: 'hidden',
                          background: '#1f3a31',
                          color: '#eef3ef',
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        <div
                          className="pv-a pv-flash"
                          style={{
                            position: 'relative',
                            padding: '7em 5em 8em',
                            background: '#1f7a5a',
                            color: '#ffffff',
                            boxShadow: 'inset 0 0 0 1em rgba(166,232,204,0.45)',
                          }}
                        >
                          <div style={{ whiteSpace: 'nowrap', lineHeight: '1.2' }}>
                            <span style={{ fontSize: '9em', opacity: '.9' }}>
                              {t('Wohnfläche')}
                            </span>
                          </div>
                          <div style={{ marginTop: '2em', whiteSpace: 'nowrap' }}>
                            <span
                              className="pv-kf"
                              style={{ fontSize: '13.5em', lineHeight: '1.3', fontWeight: '600' }}
                            >
                              {'76 m²'}
                            </span>
                          </div>
                          <div
                            className="pv-a pv-amber"
                            style={{
                              position: 'absolute',
                              inset: '0',
                              padding: '7em 5em 8em',
                              color: '#0a2b22',
                            }}
                          >
                            <div style={{ whiteSpace: 'nowrap', lineHeight: '1.2' }}>
                              <span style={{ fontSize: '9em' }}>{t('Wohnfläche')}</span>
                            </div>
                            <div style={{ marginTop: '2em', whiteSpace: 'nowrap' }}>
                              <span
                                className="pv-kf"
                                style={{ fontSize: '12.5em', lineHeight: '1.3', fontWeight: '600' }}
                              >
                                {t('2 values')}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            padding: '7em 5em 8em',
                            borderLeft: '1px solid rgba(255,255,255,0.14)',
                          }}
                        >
                          <div style={{ whiteSpace: 'nowrap', lineHeight: '1.2' }}>
                            <span style={{ fontSize: '9em', opacity: '.85' }}>{t('Zimmer')}</span>
                          </div>
                          <div style={{ marginTop: '2em', whiteSpace: 'nowrap' }}>
                            <span
                              className="pv-kf"
                              style={{ fontSize: '13.5em', lineHeight: '1.3', fontWeight: '600' }}
                            >
                              {'3'}
                            </span>
                          </div>
                        </div>
                        <div
                          style={{
                            padding: '7em 5em 8em',
                            borderLeft: '1px solid rgba(255,255,255,0.14)',
                          }}
                        >
                          <div style={{ whiteSpace: 'nowrap', lineHeight: '1.2' }}>
                            <span style={{ fontSize: '9em', opacity: '.85' }}>{t('Baujahr')}</span>
                          </div>
                          <div style={{ marginTop: '2em', whiteSpace: 'nowrap' }}>
                            <span
                              className="pv-kf"
                              style={{ fontSize: '13.5em', lineHeight: '1.3', fontWeight: '600' }}
                            >
                              {'1908'}
                            </span>
                          </div>
                        </div>
                        <div
                          style={{
                            padding: '7em 5em 8em',
                            borderLeft: '1px solid rgba(255,255,255,0.14)',
                          }}
                        >
                          <div style={{ whiteSpace: 'nowrap', lineHeight: '1.2' }}>
                            <span style={{ fontSize: '9em', opacity: '.85' }}>{t('HWB')}</span>
                          </div>
                          <div style={{ marginTop: '2em', whiteSpace: 'nowrap' }}>
                            <span
                              className="pv-kf"
                              style={{ fontSize: '13.5em', lineHeight: '1.3', fontWeight: '600' }}
                            >
                              {'48'}
                            </span>
                          </div>
                        </div>
                        <div
                          style={{
                            padding: '7em 5em 8em',
                            borderLeft: '1px solid rgba(255,255,255,0.14)',
                          }}
                        >
                          <div style={{ whiteSpace: 'nowrap', lineHeight: '1.2' }}>
                            <span style={{ fontSize: '9em', opacity: '.85' }}>{t('fGEE')}</span>
                          </div>
                          <div style={{ marginTop: '2em', whiteSpace: 'nowrap' }}>
                            <span
                              className="pv-kf"
                              style={{ fontSize: '13.5em', lineHeight: '1.3', fontWeight: '600' }}
                            >
                              {'0,92'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="pv-a pv-grow">
                        <div style={{ minHeight: '0', overflow: 'hidden' }}>
                          <div style={{ paddingTop: '10em' }}>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10em',
                                padding: '10em 11em',
                                borderRadius: '6em',
                                background: '#ecf4ef',
                              }}
                            >
                              <span
                                style={{
                                  width: '22em',
                                  height: '22em',
                                  borderRadius: '50%',
                                  background: '#1f7a5a',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flex: 'none',
                                }}
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  style={{ width: '13em', height: '13em' }}
                                  fill="none"
                                  stroke="#ffffff"
                                  strokeWidth="2.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M5 12l5 5L19 7" />
                                </svg>
                              </span>
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '2em',
                                  minWidth: '0',
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: '13.5em',
                                    lineHeight: '1.3',
                                    fontWeight: '600',
                                    color: '#0a2b22',
                                  }}
                                >
                                  {t('Wohnfläche set to 76 m²')}
                                </span>
                                <span
                                  style={{ fontSize: '12em', lineHeight: '1.35', color: '#4f5c57' }}
                                >
                                  {t('From the floor plan. Confirmed by you.')}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="pv-a pv-q"
                  style={{
                    position: 'absolute',
                    left: '12em',
                    top: '448em',
                    width: '326em',
                    zIndex: '6',
                  }}
                >
                  <div
                    className="hl-d3"
                    style={{
                      position: 'relative',
                      background: '#ffffff',
                      borderRadius: '14em',
                      padding: '14em',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: '30em',
                        top: '-6em',
                        width: '12em',
                        height: '12em',
                        background: '#ffffff',
                        transform: 'rotate(45deg)',
                        borderRadius: '2em',
                      }}
                    />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '7em' }}>
                      <span
                        style={{
                          width: '8em',
                          height: '8em',
                          borderRadius: '50%',
                          background: '#f4b860',
                          flex: 'none',
                        }}
                      />
                      <span style={{ fontSize: '12em', lineHeight: '1.5', color: '#4f5c57' }}>
                        {t('Before this goes out')}
                      </span>
                    </div>
                    <div style={{ marginTop: '6em' }}>
                      <span
                        style={{
                          display: 'block',
                          fontSize: '13.5em',
                          lineHeight: '1.45',
                          fontWeight: '500',
                          color: '#0a2b22',
                        }}
                      >
                        {t(
                          'Wohnfläche: 78 m² in the Energieausweis, 76 m² in the floor plan. Which is right?'
                        )}
                      </span>
                    </div>
                    <div
                      style={{
                        marginTop: '12em',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '8em',
                      }}
                    >
                      <span
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1em',
                          padding: '8em 12em',
                          borderRadius: '10em',
                          border: '1px solid rgba(10,43,34,.16)',
                          background: '#ffffff',
                          color: '#0a2b22',
                        }}
                      >
                        <span style={{ fontSize: '14em', lineHeight: '1.3', fontWeight: '600' }}>
                          {'78 m²'}
                        </span>
                        <span style={{ fontSize: '11.5em', lineHeight: '1.3', opacity: '.75' }}>
                          {t('Energieausweis')}
                        </span>
                      </span>
                      <span
                        className="pv-a pv-press"
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1em',
                          padding: '8em 12em',
                          borderRadius: '10em',
                          border: '1px solid rgba(10,43,34,.16)',
                          background: '#ffffff',
                          color: '#0a2b22',
                        }}
                      >
                        <span style={{ fontSize: '14em', lineHeight: '1.3', fontWeight: '600' }}>
                          {'76 m²'}
                        </span>
                        <span style={{ fontSize: '11.5em', lineHeight: '1.3', opacity: '.8' }}>
                          {t('Floor plan')}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="pv-a pv-arrive"
                  style={
                    {
                      position: 'absolute',
                      left: '0',
                      top: '524em',
                      width: '166em',
                      zIndex: '1',
                      '--r': '0deg',
                      '--r0': '0deg',
                      '--fx': '0em',
                      '--fy': '20em',
                      '--d': '2.6s',
                    } as CSSProperties
                  }
                >
                  <div
                    className="hl-d1"
                    style={{
                      position: 'relative',
                      background: '#ffffff',
                      padding: '5em',
                      borderRadius: '4em',
                    }}
                  >
                    <Image
                      src="/immvela/redesign/sample-living.jpg"
                      alt=""
                      style={{
                        display: 'block',
                        width: '156em',
                        height: '118em',
                        objectFit: 'cover',
                        borderRadius: '2em',
                      }}
                      width={1600}
                      height={1142}
                      sizes="(max-width: 760px) 100vw, 480px"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        left: '12em',
                        bottom: '12em',
                        padding: '4em 8em',
                        borderRadius: '999em',
                        background: 'rgba(255,255,255,0.92)',
                      }}
                    >
                      <span
                        style={{
                          display: 'block',
                          fontSize: '11em',
                          lineHeight: '1.3',
                          fontWeight: '600',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {t('Virtually staged')}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="pv-a pv-arrive"
                  style={
                    {
                      position: 'absolute',
                      left: '184em',
                      top: '524em',
                      width: '166em',
                      zIndex: '2',
                      '--r': '0deg',
                      '--r0': '0deg',
                      '--fx': '0em',
                      '--fy': '20em',
                      '--d': '2.8s',
                    } as CSSProperties
                  }
                >
                  <div
                    className="gl-sheen hl-d2"
                    style={{ borderRadius: '12em', overflow: 'hidden' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6em',
                        padding: '8em 10em',
                      }}
                    >
                      <span
                        style={{
                          width: '16em',
                          height: '16em',
                          borderRadius: '5em',
                          background: 'linear-gradient(45deg,#f9a52b,#e1306c,#833ab4)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flex: 'none',
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          style={{ width: '10em', height: '10em' }}
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="2.2"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="5" />
                          <circle cx="12" cy="12" r="4" />
                        </svg>
                      </span>
                      <span style={{ fontSize: '11.5em', lineHeight: '1.4', color: '#4f5c57' }}>
                        {t('Instagram')}
                      </span>
                    </div>
                    <Image
                      src="/immvela/redesign/sample-lounge.jpg"
                      alt=""
                      style={{
                        width: '100%',
                        height: '112em',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                      width={960}
                      height={637}
                      sizes="(max-width: 760px) 100vw, 480px"
                    />
                    <div
                      style={{ display: 'grid', justifyItems: 'start', padding: '9em 8em 10em' }}
                    >
                      <span
                        className="pv-a pv-win"
                        style={
                          {
                            gridArea: '1/1',
                            '--d': '3.2s',
                            '--len': '3.5s',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '.5em',
                            whiteSpace: 'nowrap',
                            fontSize: '11em',
                            lineHeight: '1.3',
                            fontWeight: '600',
                            padding: '.45em .8em',
                            borderRadius: '999em',
                            background: '#f1efe8',
                            color: '#0a2b22',
                          } as CSSProperties
                        }
                      >
                        <span
                          style={{
                            width: '.5em',
                            height: '.5em',
                            borderRadius: '50%',
                            background: '#f4b860',
                            flex: 'none',
                          }}
                        />
                        {t('Held until you confirm')}
                      </span>
                      <span
                        className="pv-a pv-in"
                        style={
                          {
                            gridArea: '1/1',
                            '--d': '6.7s',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '.5em',
                            whiteSpace: 'nowrap',
                            fontSize: '11em',
                            lineHeight: '1.3',
                            fontWeight: '600',
                            padding: '.45em .8em',
                            borderRadius: '999em',
                            background: '#f1efe8',
                            color: '#0a2b22',
                          } as CSSProperties
                        }
                      >
                        <span
                          style={{
                            width: '.5em',
                            height: '.5em',
                            borderRadius: '50%',
                            background: '#1f7a5a',
                            flex: 'none',
                          }}
                        />
                        {t('Ready. Publish?')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
          <button type="button" className="pv-replay" onClick={v.pvReplay}>
            <svg
              viewBox="0 0 24 24"
              style={{ width: '16px', height: '16px' }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 12a9 9 0 1 0 3-6.7" />
              <path d="M3 4v5h5" />
            </svg>
            {t('Watch it again')}
          </button>
        </div>
      </div>
    </section>
  )
}
