import Image from 'next/image'
import { PHOTOS } from '@/lib/immvela-photos'
import type { T } from '@/i18n/immvela'
import HelixCanvas from '../HelixCanvas'

export default function Listen({ t }: { t: T }) {
  return (
    <section className="ml-sec" style={{ padding: '64px 24px' }}>
      <div className="ml-grid">
        <div className="ml-text">
          <h2
            className="ml-h2"
            style={{
              margin: '0',
              color: '#14473a',
              fontFamily: 'var(--font-bricolage),var(--font-geist-sans),system-ui,sans-serif',
              fontOpticalSizing: 'auto',
              fontVariationSettings: "'opsz' 72",
              fontWeight: '650',
              letterSpacing: '-0.035em',
              lineHeight: '1.02',
              fontSize: '52px',
              textWrap: 'balance',
            }}
          >
            {t('Say “get it ready”')}
          </h2>
          <p
            style={{
              margin: '20px 0 0',
              fontSize: '19px',
              lineHeight: '1.55',
              color: '#3f574f',
              textWrap: 'pretty',
            }}
          >
            {t('Immvela makes the plan, does the work and shows you each result in the thread.')}
          </p>
        </div>
        <div
          className="ml-vis"
          role="img"
          aria-label={t(
            "A phone with a thin graphite edge, slightly turned, stands on a forest green stage. It shows Immvela in Auto mode for Gentzgasse 14. The agent wrote: Get it ready. Immvela answers with a plan of three checked steps: read the documents, check every value, draft the posts. A card lifts out of the phone: posts ready for Instagram and LinkedIn, waiting for approval, with a Publish button. A glass chip reading Immvela, posts ready sits over the stage's left edge."
          )}
        >
          <div className="ml-stage" aria-hidden="true">
            <div className="ml-glow" />
            <div className="ml-contact" />
          </div>
          <div
            className="ml-chip ml-glass"
            aria-hidden="true"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px 20px 8px 8px',
              borderRadius: '999px',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              className="ml-chip-mark"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#ffffff',
                boxShadow: '0 0 0 1px rgba(10,43,34,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 'none',
              }}
            >
              <HelixCanvas style={{ width: '33px', height: '33px' }} />
            </span>
            <span
              className="ml-chip-label"
              style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '600', color: '#0a2b22' }}
            >
              {t('Immvela, posts ready')}
            </span>
          </div>
          <div className="ml-pos" aria-hidden="true">
            <div className="ml-persp">
              <div className="ml-tilt">
                <span className="ml-nub ml-nub-l" style={{ top: '116px', height: '26px' }} />
                <span className="ml-nub ml-nub-l" style={{ top: '164px', height: '50px' }} />
                <span className="ml-nub ml-nub-l" style={{ top: '224px', height: '50px' }} />
                <span className="ml-nub ml-nub-r" style={{ top: '184px', height: '84px' }} />
                <div className="ml-device">
                  <div className="ml-screen">
                    <span className="ml-island" />
                    <div
                      style={{
                        height: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 28px 0 32px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#0a2b22',
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        {'9:41'}
                      </span>
                      <span
                        style={{
                          display: 'block',
                          width: '22px',
                          height: '11px',
                          borderRadius: '3px',
                          boxShadow: 'inset 0 0 0 1.2px rgba(10,43,34,0.5)',
                          padding: '2px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <span
                          style={{
                            display: 'block',
                            width: '70%',
                            height: '100%',
                            borderRadius: '1.5px',
                            background: '#0a2b22',
                          }}
                        />
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '8px 16px 14px',
                        borderBottom: '1px solid rgba(10,43,34,0.07)',
                      }}
                    >
                      <Image
                        src={PHOTOS.coverMain.src}
                        alt=""
                        style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '9px',
                          objectFit: 'cover',
                          display: 'block',
                          flex: 'none',
                        }}
                        width={PHOTOS.coverMain.width}
                        height={PHOTOS.coverMain.height}
                        sizes="300px"
                      />
                      <div
                        style={{
                          flex: '1',
                          minWidth: '0',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1px',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '15px',
                            lineHeight: '1.25',
                            fontWeight: '600',
                            color: '#0a2b22',
                          }}
                        >
                          {t('Gentzgasse 14')}
                        </span>
                        <span style={{ fontSize: '12px', lineHeight: '1.3', color: '#4f5c57' }}>
                          {t('1180 Wien')}
                        </span>
                      </div>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          fontSize: '12px',
                          lineHeight: '1',
                          fontWeight: '600',
                          padding: '6px 10px',
                          borderRadius: '999px',
                          background: '#e9f2ed',
                          color: '#0a2b22',
                        }}
                      >
                        <span
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: '#1f7a5a',
                          }}
                        />
                        {t('Auto')}
                      </span>
                    </div>
                    <div
                      style={{
                        padding: '22px 16px 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                      }}
                    >
                      <div
                        style={{
                          alignSelf: 'flex-end',
                          maxWidth: '78%',
                          padding: '9px 14px',
                          borderRadius: '18px 18px 5px 18px',
                          background: '#1f7a5a',
                          color: '#ffffff',
                          fontSize: '15px',
                          lineHeight: '1.4',
                        }}
                      >
                        {t('Get it ready')}
                      </div>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span
                          style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '50%',
                            background: '#ffffff',
                            boxShadow: '0 0 0 1px rgba(10,43,34,0.10)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 'none',
                          }}
                        >
                          <HelixCanvas style={{ width: '23px', height: '23px' }} />
                        </span>
                        <div
                          style={{
                            flex: '1',
                            minWidth: '0',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            paddingTop: '4px',
                          }}
                        >
                          <span style={{ fontSize: '15px', lineHeight: '1.4', color: '#0a2b22' }}>
                            {t('Here is the plan.')}
                          </span>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                              <span
                                style={{
                                  width: '18px',
                                  height: '18px',
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
                                  style={{ width: '11px', height: '11px' }}
                                  fill="none"
                                  stroke="#ffffff"
                                  strokeWidth="3.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M6.5 12.5l3.8 3.8L17.5 8.6" />
                                </svg>
                              </span>
                              <span
                                style={{ fontSize: '14px', lineHeight: '1.4', color: '#33413b' }}
                              >
                                {t('Read the documents')}
                              </span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                              <span
                                style={{
                                  width: '18px',
                                  height: '18px',
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
                                  style={{ width: '11px', height: '11px' }}
                                  fill="none"
                                  stroke="#ffffff"
                                  strokeWidth="3.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M6.5 12.5l3.8 3.8L17.5 8.6" />
                                </svg>
                              </span>
                              <span
                                style={{ fontSize: '14px', lineHeight: '1.4', color: '#33413b' }}
                              >
                                {t('Check every value')}
                              </span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                              <span
                                style={{
                                  width: '18px',
                                  height: '18px',
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
                                  style={{ width: '11px', height: '11px' }}
                                  fill="none"
                                  stroke="#ffffff"
                                  strokeWidth="3.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M6.5 12.5l3.8 3.8L17.5 8.6" />
                                </svg>
                              </span>
                              <span
                                style={{ fontSize: '14px', lineHeight: '1.4', color: '#33413b' }}
                              >
                                {t('Draft the posts')}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          marginLeft: '38px',
                          height: '210px',
                          borderRadius: '16px',
                          background: 'rgba(10,43,34,0.04)',
                          boxShadow: 'inset 0 0 0 1px rgba(10,43,34,0.05)',
                        }}
                      />
                    </div>
                    <div
                      className="ml-bar ml-glass"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 6px 6px 16px',
                        borderRadius: '999px',
                      }}
                    >
                      <span
                        style={{
                          flex: '1',
                          minWidth: '0',
                          fontSize: '14px',
                          lineHeight: '1.3',
                          color: '#5f6a65',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {t('Message Immvela')}
                      </span>
                      <span
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: '#e7e4db',
                          color: '#5f6a65',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flex: 'none',
                        }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          style={{ width: '16px', height: '16px' }}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 19V5" />
                          <path d="M6 11l6-6 6 6" />
                        </svg>
                      </span>
                    </div>
                    <span className="ml-home" />
                  </div>
                </div>
                <div className="ml-rim" />
                <div className="ml-out">
                  <div
                    style={{
                      padding: '13px 14px 14px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '15px',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                        textWrap: 'balance',
                      }}
                    >
                      {t('Posts ready for Instagram and LinkedIn.')}
                    </span>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      {(
                        [
                          [
                            PHOTOS.interior2.src,
                            PHOTOS.interior2.width,
                            PHOTOS.interior2.height,
                            'Instagram',
                            'linear-gradient(45deg,#f9a52b,#e1306c,#833ab4)',
                          ],
                          [
                            PHOTOS.coverMain.src,
                            PHOTOS.coverMain.width,
                            PHOTOS.coverMain.height,
                            'LinkedIn',
                            '#0a66c2',
                          ],
                        ] as [string, number, number, string, string][]
                      ).map(([src, w, h, name, bg]) => (
                        <div
                          key={name}
                          style={{
                            borderRadius: '10px',
                            overflow: 'hidden',
                            boxShadow: '0 0 0 1px rgba(10,43,34,0.10)',
                            background: '#ffffff',
                          }}
                        >
                          <Image
                            src={src}
                            alt=""
                            width={w}
                            height={h}
                            sizes="140px"
                            style={{
                              width: '100%',
                              height: '70px',
                              objectFit: 'cover',
                              display: 'block',
                            }}
                          />
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '6px 8px',
                            }}
                          >
                            <span
                              style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '3px',
                                background: bg,
                                flex: 'none',
                              }}
                            />
                            <span style={{ fontSize: '12px', lineHeight: '1.2', color: '#4f5c57' }}>
                              {name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px',
                      }}
                    >
                      <span style={{ fontSize: '13px', lineHeight: '1.3', color: '#4f5c57' }}>
                        {t('Waiting for your approval')}
                      </span>
                      <span
                        style={{
                          fontSize: '14px',
                          lineHeight: '1',
                          fontWeight: '600',
                          padding: '9px 18px',
                          borderRadius: '999px',
                          background: '#1f7a5a',
                          color: '#ffffff',
                        }}
                      >
                        {t('Publish?')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
