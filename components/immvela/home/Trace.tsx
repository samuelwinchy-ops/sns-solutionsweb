import Image from 'next/image'
import type { HomeVals } from './vals'
import type { T } from '@/i18n/immvela'

export default function Trace({ t, v }: { t: T; v: HomeVals }) {
  return (
    <section className="tr-sec" style={{ padding: '96px 24px' }}>
      <div className="tr-head">
        <h2
          className="tr-h2"
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
            textAlign: 'left',
            fontSize: '52px',
            textWrap: 'balance',
          }}
        >
          {t('Every number in your Exposé, traced to its document')}
        </h2>
        <p
          style={{
            margin: '20px 0 0',
            maxWidth: '560px',
            textAlign: 'left',
            fontSize: '19px',
            lineHeight: '1.55',
            color: '#3f574f',
            textWrap: 'pretty',
          }}
        >
          {t(
            'Immvela keeps the page and the exact line each value was read from, so any number can be checked in one tap.'
          )}
        </p>
      </div>
      <div className={v.trStageClass} style={{ margin: '48px auto 0', maxWidth: '1160px' }}>
        <div className="tr-sd" style={{ containerType: 'inline-size', width: '100%' }}>
          <div style={{ position: 'relative', fontSize: 'calc(100cqw / 1200)', height: '640em' }}>
            <div
              className="tr-paper"
              style={{
                position: 'absolute',
                left: '70em',
                top: '20em',
                width: '500em',
                height: '590em',
                zIndex: '3',
                borderRadius: '8em',
                overflow: 'hidden',
                background: '#fbfaf5',
                color: '#1c2a25',
                boxShadow:
                  '0 0 0 1px rgba(10,43,34,0.08),0 1px 2px rgba(0,0,0,0.05),0 18em 40em rgba(10,43,34,0.09)',
              }}
            >
              <Image
                src="/immvela/redesign/sample-cover.jpg"
                alt=""
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '0',
                  width: '100%',
                  height: '250em',
                  objectFit: 'cover',
                  display: 'block',
                }}
                width={1300}
                height={1107}
                sizes="(max-width: 959px) 100vw, 500px"
              />
              <div
                style={{ position: 'absolute', left: '22em', top: '268em', whiteSpace: 'nowrap' }}
              >
                <span style={{ fontSize: '13em', lineHeight: '1.5', color: '#4f5c57' }}>
                  {t('Exposé, Gentzgasse 14, 1180 Wien')}
                </span>
              </div>
              <div style={{ position: 'absolute', left: '22em', right: '22em', top: '292em' }}>
                <span
                  style={{
                    display: 'block',
                    fontSize: '26em',
                    lineHeight: '1.15',
                    fontWeight: '600',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {t('Helle 3-Zimmer-Wohnung mit Balkon in Währing')}
                </span>
              </div>
              <div
                role="group"
                aria-label={t('Key facts. Choose a value to see the line it was read from.')}
                style={{
                  position: 'absolute',
                  left: '22em',
                  top: '376em',
                  width: '456em',
                  height: '64em',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
                  borderRadius: '6em',
                  overflow: 'hidden',
                  background: '#1f3a31',
                }}
              >
                <button
                  type="button"
                  className={v.cWf}
                  aria-pressed={v.pWf}
                  onClick={v.tWf}
                  style={{
                    padding: '10em 9em 11em',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4em',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontSize: '11em',
                      lineHeight: '1.2',
                      opacity: '.85',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {t('Wohnfläche')}
                  </span>
                  <span
                    className="rc-kf"
                    style={{
                      display: 'block',
                      fontSize: '17em',
                      lineHeight: '1.25',
                      fontWeight: '600',
                      whiteSpace: 'nowrap',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {'76 m²'}
                  </span>
                </button>
                <button
                  type="button"
                  className={v.cZi}
                  aria-pressed={v.pZi}
                  onClick={v.tZi}
                  style={{
                    padding: '10em 9em 11em',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4em',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontSize: '11em',
                      lineHeight: '1.2',
                      opacity: '.85',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {t('Zimmer')}
                  </span>
                  <span
                    className="rc-kf"
                    style={{
                      display: 'block',
                      fontSize: '17em',
                      lineHeight: '1.25',
                      fontWeight: '600',
                      whiteSpace: 'nowrap',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {'3'}
                  </span>
                </button>
                <button
                  type="button"
                  className={v.cBj}
                  aria-pressed={v.pBj}
                  onClick={v.tBj}
                  style={{
                    padding: '10em 9em 11em',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4em',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontSize: '11em',
                      lineHeight: '1.2',
                      opacity: '.85',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {t('Baujahr')}
                  </span>
                  <span
                    className="rc-kf"
                    style={{
                      display: 'block',
                      fontSize: '17em',
                      lineHeight: '1.25',
                      fontWeight: '600',
                      whiteSpace: 'nowrap',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {'1908'}
                  </span>
                </button>
                <button
                  type="button"
                  className={v.cHwb}
                  aria-pressed={v.pHwb}
                  onClick={v.tHwb}
                  style={{
                    padding: '10em 9em 11em',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4em',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontSize: '11em',
                      lineHeight: '1.2',
                      opacity: '.85',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {t('HWB')}
                  </span>
                  <span
                    className="rc-kf"
                    style={{
                      display: 'block',
                      fontSize: '17em',
                      lineHeight: '1.25',
                      fontWeight: '600',
                      whiteSpace: 'nowrap',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {'48'}
                  </span>
                </button>
                <button
                  type="button"
                  className={v.cFg}
                  aria-pressed={v.pFg}
                  onClick={v.tFg}
                  style={{
                    padding: '10em 9em 11em',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4em',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontSize: '11em',
                      lineHeight: '1.2',
                      opacity: '.85',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {t('fGEE')}
                  </span>
                  <span
                    className="rc-kf"
                    style={{
                      display: 'block',
                      fontSize: '17em',
                      lineHeight: '1.25',
                      fontWeight: '600',
                      whiteSpace: 'nowrap',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {'0,92'}
                  </span>
                </button>
              </div>
              <div
                style={{
                  position: 'absolute',
                  left: '22em',
                  right: '22em',
                  top: '478em',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '7em',
                }}
              >
                <span style={{ fontSize: '14em', lineHeight: '1.3', fontWeight: '600' }}>
                  {t('Objektbeschreibung')}
                </span>
                <span style={{ fontSize: '12em', lineHeight: '1.55', color: '#3d4a45' }}>
                  {t(
                    'Die Wohnung liegt im zweiten Obergeschoss eines gepflegten Altbaus. Wohnzimmer und Küche öffnen sich zum ruhigen Innenhof, der Balkon bekommt Nachmittagssonne.'
                  )}
                </span>
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                left: '640em',
                top: '36em',
                width: '470em',
                height: '580em',
                zIndex: '2',
              }}
            >
              <div className={v.dGr} style={{ position: 'absolute', inset: '0' }}>
                <div
                  style={{
                    position: 'absolute',
                    inset: '0',
                    borderRadius: '6em',
                    background: '#ffffff',
                    boxShadow:
                      '0 0 0 1px rgba(10,43,34,0.10),0 1px 2px rgba(0,0,0,0.05),0 18em 40em rgba(10,43,34,0.10)',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: '24em',
                      right: '24em',
                      top: '22em',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '17em',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                      }}
                    >
                      {t('Grundriss')}
                    </span>
                    <span style={{ fontSize: '12.5em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Seite 1')}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '24em',
                      top: '48em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '12.0em', lineHeight: '1.4', color: '#4f5c57' }}>
                      {t('Top 7, 2. Obergeschoss, Gentzgasse 14')}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '24em',
                      right: '24em',
                      top: '80em',
                      height: '200em',
                      fontSize: '2em',
                    }}
                  >
                    <svg
                      viewBox="0 0 211 100"
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        fontFamily: 'inherit',
                      }}
                      fill="none"
                      strokeLinecap="square"
                      aria-hidden="true"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="207"
                        height="96"
                        stroke="#1f3a31"
                        strokeWidth="2.4"
                      />
                      <path
                        d="M80 2V24M80 36V60M140 2V24M140 36V60M2 60H40M52 60H120M132 60H170M182 60H209M110 60V98M160 60V98"
                        stroke="#1f3a31"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M80 24A12 12 0 0 1 92 36M140 24A12 12 0 0 1 152 36M40 60A12 12 0 0 0 52 72M120 60A12 12 0 0 0 132 72M170 60A12 12 0 0 0 182 72"
                        stroke="#7d8a84"
                        strokeWidth="1"
                      />
                      <path
                        d="M18 2H60M96 2H124M158 2H192M209 70V90"
                        stroke="#9fb7ad"
                        strokeWidth="3.5"
                      />
                      <g fill="#4f5c57" stroke="none" fontSize="6.5">
                        <text x="12" y="34">
                          {t('Wohnzimmer')}
                        </text>
                        <text x="88" y="50">
                          {t('Schlafzimmer')}
                        </text>
                        <text x="160" y="50">
                          {t('Zimmer')}
                        </text>
                        <text x="12" y="84">
                          {t('Vorraum')}
                        </text>
                        <text x="120" y="84">
                          {t('Küche')}
                        </text>
                        <text x="170" y="84">
                          {t('Bad')}
                        </text>
                      </g>
                    </svg>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '24em',
                      top: '296em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '13.0em',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                      }}
                    >
                      {t('Flächenaufstellung')}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '24em',
                      right: '24em',
                      top: '320em',
                      height: '24em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '12.0em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Wohnzimmer')}
                    </span>
                    <span
                      style={{
                        fontSize: '12.0em',
                        lineHeight: '1.3',
                        color: '#4f5c57',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {'24,6 m²'}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '24em',
                      right: '24em',
                      top: '344em',
                      height: '24em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '12.0em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Schlafzimmer')}
                    </span>
                    <span
                      style={{
                        fontSize: '12.0em',
                        lineHeight: '1.3',
                        color: '#4f5c57',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {'14,2 m²'}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '24em',
                      right: '24em',
                      top: '368em',
                      height: '24em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '12.0em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Zimmer')}
                    </span>
                    <span
                      style={{
                        fontSize: '12.0em',
                        lineHeight: '1.3',
                        color: '#4f5c57',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {'11,8 m²'}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '24em',
                      right: '24em',
                      top: '392em',
                      height: '24em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '12.0em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Küche')}
                    </span>
                    <span
                      style={{
                        fontSize: '12.0em',
                        lineHeight: '1.3',
                        color: '#4f5c57',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {'9,1 m²'}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '24em',
                      right: '24em',
                      top: '416em',
                      height: '24em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '12.0em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Bad und WC')}
                    </span>
                    <span
                      style={{
                        fontSize: '12.0em',
                        lineHeight: '1.3',
                        color: '#4f5c57',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {'5,4 m²'}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '24em',
                      right: '24em',
                      top: '440em',
                      height: '24em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '12.0em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Vorraum')}
                    </span>
                    <span
                      style={{
                        fontSize: '12.0em',
                        lineHeight: '1.3',
                        color: '#4f5c57',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {'10,9 m²'}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '24em',
                      right: '24em',
                      top: '470em',
                      height: '34em',
                      borderTop: '1px solid rgba(10,43,34,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '13.5em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Zimmer:')}
                    </span>
                    <span
                      style={{
                        fontSize: '13.5em',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                      }}
                    >
                      {'3'}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '24em',
                      right: '24em',
                      top: '504em',
                      height: '34em',
                      borderTop: '1px solid rgba(10,43,34,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '13.5em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Wohnfläche gesamt:')}
                    </span>
                    <span
                      style={{
                        fontSize: '13.5em',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                      }}
                    >
                      {'76,0 m²'}
                    </span>
                  </div>
                </div>
                <div
                  className={v.hZi}
                  style={{
                    position: 'absolute',
                    left: '12em',
                    right: '12em',
                    top: '465em',
                    zIndex: '3',
                  }}
                >
                  <div
                    style={{
                      borderRadius: '8em',
                      background: '#ffffff',
                      boxShadow:
                        '0 0 0 1px rgba(10,43,34,0.10),0 1px 2px rgba(0,0,0,0.05),0 14em 32em rgba(10,43,34,0.16)',
                      padding: '5em',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        minHeight: '34em',
                        boxSizing: 'border-box',
                        padding: '0 12em',
                        borderRadius: '5em',
                        background: '#e3efe8',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '14.5em',
                          lineHeight: '1.35',
                          fontWeight: '600',
                          color: '#0a2b22',
                        }}
                      >
                        {t('“Zimmer: 3”')}
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '6em',
                        padding: '9em 12em 4em',
                      }}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        style={{ width: '14em', height: '14em', flex: 'none', marginTop: '1em' }}
                        aria-hidden="true"
                      >
                        <circle cx="8" cy="8" r="8" fill="#1f7a5a" />
                        <path
                          d="M4.6 8.2l2.2 2.2 4.6-4.7"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span style={{ fontSize: '12.5em', lineHeight: '1.35', color: '#4f5c57' }}>
                        {t('Grundriss, page 1. Confirmed by you on 2 October.')}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={v.hWf}
                  style={{
                    position: 'absolute',
                    left: '12em',
                    right: '12em',
                    top: '499em',
                    zIndex: '3',
                  }}
                >
                  <div
                    style={{
                      borderRadius: '8em',
                      background: '#ffffff',
                      boxShadow:
                        '0 0 0 1px rgba(10,43,34,0.10),0 1px 2px rgba(0,0,0,0.05),0 14em 32em rgba(10,43,34,0.16)',
                      padding: '5em',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        minHeight: '34em',
                        boxSizing: 'border-box',
                        padding: '0 12em',
                        borderRadius: '5em',
                        background: '#e3efe8',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '14.5em',
                          lineHeight: '1.35',
                          fontWeight: '600',
                          color: '#0a2b22',
                        }}
                      >
                        {t('“Wohnfläche gesamt: 76,0 m²”')}
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '6em',
                        padding: '9em 12em 4em',
                      }}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        style={{ width: '14em', height: '14em', flex: 'none', marginTop: '1em' }}
                        aria-hidden="true"
                      >
                        <circle cx="8" cy="8" r="8" fill="#1f7a5a" />
                        <path
                          d="M4.6 8.2l2.2 2.2 4.6-4.7"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span style={{ fontSize: '12.5em', lineHeight: '1.35', color: '#4f5c57' }}>
                        {t('Grundriss, page 1. Confirmed by you on 2 October.')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={v.dEa} style={{ position: 'absolute', inset: '0' }}>
                <div
                  style={{
                    position: 'absolute',
                    inset: '0',
                    borderRadius: '6em',
                    background: '#ffffff',
                    boxShadow:
                      '0 0 0 1px rgba(10,43,34,0.10),0 1px 2px rgba(0,0,0,0.05),0 18em 40em rgba(10,43,34,0.10)',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: '24em',
                      right: '24em',
                      top: '22em',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '17em',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                      }}
                    >
                      {t('Energieausweis')}
                    </span>
                    <span style={{ fontSize: '12.5em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Seite 1')}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '24em',
                      top: '48em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '12.0em', lineHeight: '1.4', color: '#4f5c57' }}>
                      {t('für Wohngebäude, Gentzgasse 14, 1180 Wien')}
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '24em',
                      top: '84em',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '5em',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        position: 'relative',
                        height: '14em',
                        width: '52em',
                        background: '#3f8f5f',
                      }}
                    />
                    <span
                      style={{
                        display: 'block',
                        position: 'relative',
                        height: '14em',
                        width: '74em',
                        background: '#6aa457',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: '80em',
                          top: '0',
                          width: '0',
                          height: '0',
                          borderTop: '7.0em solid transparent',
                          borderBottom: '7.0em solid transparent',
                          borderRight: '8.4em solid #0a2b22',
                        }}
                      />
                    </span>
                    <span
                      style={{
                        display: 'block',
                        position: 'relative',
                        height: '14em',
                        width: '96em',
                        background: '#a5bd4f',
                      }}
                    />
                    <span
                      style={{
                        display: 'block',
                        position: 'relative',
                        height: '14em',
                        width: '118em',
                        background: '#dcc24f',
                      }}
                    />
                    <span
                      style={{
                        display: 'block',
                        position: 'relative',
                        height: '14em',
                        width: '140em',
                        background: '#e0a24c',
                      }}
                    />
                    <span
                      style={{
                        display: 'block',
                        position: 'relative',
                        height: '14em',
                        width: '162em',
                        background: '#d9773f',
                      }}
                    />
                    <span
                      style={{
                        display: 'block',
                        position: 'relative',
                        height: '14em',
                        width: '184em',
                        background: '#c4523f',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '24em',
                      right: '24em',
                      top: '240em',
                      height: '44em',
                      borderTop: '1px solid rgba(10,43,34,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '13.5em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Baujahr:')}
                    </span>
                    <span
                      style={{
                        fontSize: '13.5em',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                      }}
                    >
                      {'1908'}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '24em',
                      right: '24em',
                      top: '284em',
                      height: '44em',
                      borderTop: '1px solid rgba(10,43,34,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '13.5em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Heizwärmebedarf HWB:')}
                    </span>
                    <span
                      style={{
                        fontSize: '13.5em',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                      }}
                    >
                      {t('48 kWh/m²a')}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '24em',
                      right: '24em',
                      top: '328em',
                      height: '44em',
                      borderTop: '1px solid rgba(10,43,34,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '13.5em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Gesamtenergieeffizienz-Faktor fGEE:')}
                    </span>
                    <span
                      style={{
                        fontSize: '13.5em',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                      }}
                    >
                      {'0,92'}
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '24em',
                      right: '24em',
                      top: '400em',
                      borderTop: '1px solid rgba(10,43,34,0.10)',
                      paddingTop: '18em',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '9em',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        height: '4em',
                        width: '92%',
                        borderRadius: '1em',
                        background: '#dcd9cf',
                      }}
                    />
                    <span
                      style={{
                        display: 'block',
                        height: '4em',
                        width: '84%',
                        borderRadius: '1em',
                        background: '#dcd9cf',
                      }}
                    />
                    <span
                      style={{
                        display: 'block',
                        height: '4em',
                        width: '88%',
                        borderRadius: '1em',
                        background: '#dcd9cf',
                      }}
                    />
                    <span
                      style={{
                        display: 'block',
                        height: '4em',
                        width: '60%',
                        borderRadius: '1em',
                        background: '#dcd9cf',
                      }}
                    />
                  </div>
                </div>
                <div
                  className={v.hBj}
                  style={{
                    position: 'absolute',
                    left: '12em',
                    right: '12em',
                    top: '235em',
                    zIndex: '3',
                  }}
                >
                  <div
                    style={{
                      borderRadius: '8em',
                      background: '#ffffff',
                      boxShadow:
                        '0 0 0 1px rgba(10,43,34,0.10),0 1px 2px rgba(0,0,0,0.05),0 14em 32em rgba(10,43,34,0.16)',
                      padding: '5em',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        minHeight: '44em',
                        boxSizing: 'border-box',
                        padding: '0 12em',
                        borderRadius: '5em',
                        background: '#e3efe8',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '14.5em',
                          lineHeight: '1.35',
                          fontWeight: '600',
                          color: '#0a2b22',
                        }}
                      >
                        {t('“Baujahr: 1908”')}
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '6em',
                        padding: '9em 12em 4em',
                      }}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        style={{ width: '14em', height: '14em', flex: 'none', marginTop: '1em' }}
                        aria-hidden="true"
                      >
                        <circle cx="8" cy="8" r="8" fill="#1f7a5a" />
                        <path
                          d="M4.6 8.2l2.2 2.2 4.6-4.7"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span style={{ fontSize: '12.5em', lineHeight: '1.35', color: '#4f5c57' }}>
                        {t('Energieausweis, page 1. Confirmed by you on 2 October.')}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={v.hHwb}
                  style={{
                    position: 'absolute',
                    left: '12em',
                    right: '12em',
                    top: '279em',
                    zIndex: '3',
                  }}
                >
                  <div
                    style={{
                      borderRadius: '8em',
                      background: '#ffffff',
                      boxShadow:
                        '0 0 0 1px rgba(10,43,34,0.10),0 1px 2px rgba(0,0,0,0.05),0 14em 32em rgba(10,43,34,0.16)',
                      padding: '5em',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        minHeight: '44em',
                        boxSizing: 'border-box',
                        padding: '0 12em',
                        borderRadius: '5em',
                        background: '#e3efe8',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '14.5em',
                          lineHeight: '1.35',
                          fontWeight: '600',
                          color: '#0a2b22',
                        }}
                      >
                        {t('“Heizwärmebedarf HWB: 48 kWh/m²a”')}
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '6em',
                        padding: '9em 12em 4em',
                      }}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        style={{ width: '14em', height: '14em', flex: 'none', marginTop: '1em' }}
                        aria-hidden="true"
                      >
                        <circle cx="8" cy="8" r="8" fill="#1f7a5a" />
                        <path
                          d="M4.6 8.2l2.2 2.2 4.6-4.7"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span style={{ fontSize: '12.5em', lineHeight: '1.35', color: '#4f5c57' }}>
                        {t('Energieausweis, page 1. Confirmed by you on 2 October.')}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={v.hFg}
                  style={{
                    position: 'absolute',
                    left: '12em',
                    right: '12em',
                    top: '323em',
                    zIndex: '3',
                  }}
                >
                  <div
                    style={{
                      borderRadius: '8em',
                      background: '#ffffff',
                      boxShadow:
                        '0 0 0 1px rgba(10,43,34,0.10),0 1px 2px rgba(0,0,0,0.05),0 14em 32em rgba(10,43,34,0.16)',
                      padding: '5em',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        minHeight: '44em',
                        boxSizing: 'border-box',
                        padding: '0 12em',
                        borderRadius: '5em',
                        background: '#e3efe8',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '14.5em',
                          lineHeight: '1.35',
                          fontWeight: '600',
                          color: '#0a2b22',
                        }}
                      >
                        {t('“Gesamtenergieeffizienz-Faktor fGEE: 0,92”')}
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '6em',
                        padding: '9em 12em 4em',
                      }}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        style={{ width: '14em', height: '14em', flex: 'none', marginTop: '1em' }}
                        aria-hidden="true"
                      >
                        <circle cx="8" cy="8" r="8" fill="#1f7a5a" />
                        <path
                          d="M4.6 8.2l2.2 2.2 4.6-4.7"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span style={{ fontSize: '12.5em', lineHeight: '1.35', color: '#4f5c57' }}>
                        {t('Energieausweis, page 1. Confirmed by you on 2 October.')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg
              className="tr-wire"
              viewBox="0 0 1200 640"
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                width: '1200em',
                height: '640em',
                zIndex: '5',
                overflow: 'visible',
                pointerEvents: 'none',
              }}
              fill="none"
            >
              <g className={v.kWf}>
                <path
                  className="tr-kp"
                  pathLength="1"
                  d="M137.6 460V470Q137.6 478 145.6 478H600C626 478 626 557.0 652 557.0"
                />
                <circle className="tr-k0" cx="137.6" cy="460" r="3.5" />
                <circle className="tr-k1" cx="652" cy="557.0" r="3.5" />
              </g>
              <g className={v.kZi}>
                <path
                  className="tr-kp"
                  pathLength="1"
                  d="M228.8 460V470Q228.8 478 236.8 478H600C626 478 626 523.0 652 523.0"
                />
                <circle className="tr-k0" cx="228.8" cy="460" r="3.5" />
                <circle className="tr-k1" cx="652" cy="523.0" r="3.5" />
              </g>
              <g className={v.kBj}>
                <path
                  className="tr-kp"
                  pathLength="1"
                  d="M320.0 460V470Q320.0 478 328.0 478H600C626 478 626 298.0 652 298.0"
                />
                <circle className="tr-k0" cx="320.0" cy="460" r="3.5" />
                <circle className="tr-k1" cx="652" cy="298.0" r="3.5" />
              </g>
              <g className={v.kHwb}>
                <path
                  className="tr-kp"
                  pathLength="1"
                  d="M411.2 460V470Q411.2 478 419.2 478H600C626 478 626 342.0 652 342.0"
                />
                <circle className="tr-k0" cx="411.2" cy="460" r="3.5" />
                <circle className="tr-k1" cx="652" cy="342.0" r="3.5" />
              </g>
              <g className={v.kFg}>
                <path
                  className="tr-kp"
                  pathLength="1"
                  d="M502.4 460V470Q502.4 478 510.4 478H600C626 478 626 386.0 652 386.0"
                />
                <circle className="tr-k0" cx="502.4" cy="460" r="3.5" />
                <circle className="tr-k1" cx="652" cy="386.0" r="3.5" />
              </g>
            </svg>
          </div>
        </div>
        <div
          className="tr-sm"
          style={{
            containerType: 'inline-size',
            width: '100%',
            maxWidth: '440px',
            margin: '0 auto',
          }}
        >
          <div style={{ position: 'relative', fontSize: 'calc(100cqw / 358)', height: '800em' }}>
            <div
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                width: '358em',
                height: '318em',
                zIndex: '3',
                borderRadius: '6em',
                overflow: 'hidden',
                background: '#fbfaf5',
                color: '#1c2a25',
                boxShadow:
                  '0 0 0 1px rgba(10,43,34,0.08),0 1px 2px rgba(0,0,0,0.05),0 12em 28em rgba(10,43,34,0.09)',
              }}
            >
              <Image
                src="/immvela/redesign/sample-cover.jpg"
                alt=""
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '0',
                  width: '100%',
                  height: '160em',
                  objectFit: 'cover',
                  display: 'block',
                }}
                width={1300}
                height={1107}
                sizes="(max-width: 959px) 100vw, 500px"
              />
              <div
                style={{ position: 'absolute', left: '12em', top: '172em', whiteSpace: 'nowrap' }}
              >
                <span style={{ fontSize: '11.5em', lineHeight: '1.5', color: '#4f5c57' }}>
                  {t('Exposé, Gentzgasse 14, 1180 Wien')}
                </span>
              </div>
              <div style={{ position: 'absolute', left: '12em', right: '12em', top: '192em' }}>
                <span
                  style={{
                    display: 'block',
                    fontSize: '17em',
                    lineHeight: '1.2',
                    fontWeight: '600',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {t('Helle 3-Zimmer-Wohnung mit Balkon in Währing')}
                </span>
              </div>
              <div
                role="group"
                aria-label={t('Key facts. Choose a value to see the line it was read from.')}
                style={{
                  position: 'absolute',
                  left: '12em',
                  top: '248em',
                  width: '334em',
                  height: '56em',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
                  borderRadius: '5em',
                  overflow: 'hidden',
                  background: '#1f3a31',
                }}
              >
                <button
                  type="button"
                  className={v.cWf}
                  aria-pressed={v.pWf}
                  onClick={v.tWf}
                  style={{
                    padding: '7em 5em 8em',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3em',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontSize: '8.5em',
                      lineHeight: '1.2',
                      opacity: '.85',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {t('Wohnfläche')}
                  </span>
                  <span
                    className="rc-kf"
                    style={{
                      display: 'block',
                      fontSize: '13em',
                      lineHeight: '1.25',
                      fontWeight: '600',
                      whiteSpace: 'nowrap',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {'76 m²'}
                  </span>
                </button>
                <button
                  type="button"
                  className={v.cZi}
                  aria-pressed={v.pZi}
                  onClick={v.tZi}
                  style={{
                    padding: '7em 5em 8em',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3em',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontSize: '8.5em',
                      lineHeight: '1.2',
                      opacity: '.85',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {t('Zimmer')}
                  </span>
                  <span
                    className="rc-kf"
                    style={{
                      display: 'block',
                      fontSize: '13em',
                      lineHeight: '1.25',
                      fontWeight: '600',
                      whiteSpace: 'nowrap',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {'3'}
                  </span>
                </button>
                <button
                  type="button"
                  className={v.cBj}
                  aria-pressed={v.pBj}
                  onClick={v.tBj}
                  style={{
                    padding: '7em 5em 8em',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3em',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontSize: '8.5em',
                      lineHeight: '1.2',
                      opacity: '.85',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {t('Baujahr')}
                  </span>
                  <span
                    className="rc-kf"
                    style={{
                      display: 'block',
                      fontSize: '13em',
                      lineHeight: '1.25',
                      fontWeight: '600',
                      whiteSpace: 'nowrap',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {'1908'}
                  </span>
                </button>
                <button
                  type="button"
                  className={v.cHwb}
                  aria-pressed={v.pHwb}
                  onClick={v.tHwb}
                  style={{
                    padding: '7em 5em 8em',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3em',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontSize: '8.5em',
                      lineHeight: '1.2',
                      opacity: '.85',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {t('HWB')}
                  </span>
                  <span
                    className="rc-kf"
                    style={{
                      display: 'block',
                      fontSize: '13em',
                      lineHeight: '1.25',
                      fontWeight: '600',
                      whiteSpace: 'nowrap',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {'48'}
                  </span>
                </button>
                <button
                  type="button"
                  className={v.cFg}
                  aria-pressed={v.pFg}
                  onClick={v.tFg}
                  style={{
                    padding: '7em 5em 8em',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '3em',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontSize: '8.5em',
                      lineHeight: '1.2',
                      opacity: '.85',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {t('fGEE')}
                  </span>
                  <span
                    className="rc-kf"
                    style={{
                      display: 'block',
                      fontSize: '13em',
                      lineHeight: '1.25',
                      fontWeight: '600',
                      whiteSpace: 'nowrap',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {'0,92'}
                  </span>
                </button>
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                left: '20em',
                top: '342em',
                width: '338em',
                height: '440em',
                zIndex: '2',
              }}
            >
              <div className={v.dGr} style={{ position: 'absolute', inset: '0' }}>
                <div
                  style={{
                    position: 'absolute',
                    inset: '0',
                    borderRadius: '5em',
                    background: '#ffffff',
                    boxShadow:
                      '0 0 0 1px rgba(10,43,34,0.10),0 1px 2px rgba(0,0,0,0.05),0 18em 40em rgba(10,43,34,0.10)',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: '16em',
                      right: '16em',
                      top: '16em',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      whiteSpace: 'nowrap',
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
                      {t('Grundriss')}
                    </span>
                    <span style={{ fontSize: '10.5em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Seite 1')}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '16em',
                      top: '37em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '10.0em', lineHeight: '1.4', color: '#4f5c57' }}>
                      {t('Top 7, 2. Obergeschoss, Gentzgasse 14')}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '16em',
                      right: '16em',
                      top: '58em',
                      height: '120em',
                      fontSize: '1.45em',
                    }}
                  >
                    <svg
                      viewBox="0 0 211 100"
                      style={{
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        fontFamily: 'inherit',
                      }}
                      fill="none"
                      strokeLinecap="square"
                      aria-hidden="true"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="207"
                        height="96"
                        stroke="#1f3a31"
                        strokeWidth="2.4"
                      />
                      <path
                        d="M80 2V24M80 36V60M140 2V24M140 36V60M2 60H40M52 60H120M132 60H170M182 60H209M110 60V98M160 60V98"
                        stroke="#1f3a31"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M80 24A12 12 0 0 1 92 36M140 24A12 12 0 0 1 152 36M40 60A12 12 0 0 0 52 72M120 60A12 12 0 0 0 132 72M170 60A12 12 0 0 0 182 72"
                        stroke="#7d8a84"
                        strokeWidth="1"
                      />
                      <path
                        d="M18 2H60M96 2H124M158 2H192M209 70V90"
                        stroke="#9fb7ad"
                        strokeWidth="3.5"
                      />
                      <g fill="#4f5c57" stroke="none" fontSize="6.5">
                        <text x="12" y="34">
                          {t('Wohnzimmer')}
                        </text>
                        <text x="88" y="50">
                          {t('Schlafzimmer')}
                        </text>
                        <text x="160" y="50">
                          {t('Zimmer')}
                        </text>
                        <text x="12" y="84">
                          {t('Vorraum')}
                        </text>
                        <text x="120" y="84">
                          {t('Küche')}
                        </text>
                        <text x="170" y="84">
                          {t('Bad')}
                        </text>
                      </g>
                    </svg>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '16em',
                      top: '188em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11.5em',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                      }}
                    >
                      {t('Flächenaufstellung')}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '16em',
                      right: '16em',
                      top: '206em',
                      height: '20em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '10.5em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Wohnzimmer')}
                    </span>
                    <span
                      style={{
                        fontSize: '10.5em',
                        lineHeight: '1.3',
                        color: '#4f5c57',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {'24,6 m²'}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '16em',
                      right: '16em',
                      top: '226em',
                      height: '20em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '10.5em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Schlafzimmer')}
                    </span>
                    <span
                      style={{
                        fontSize: '10.5em',
                        lineHeight: '1.3',
                        color: '#4f5c57',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {'14,2 m²'}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '16em',
                      right: '16em',
                      top: '246em',
                      height: '20em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '10.5em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Zimmer')}
                    </span>
                    <span
                      style={{
                        fontSize: '10.5em',
                        lineHeight: '1.3',
                        color: '#4f5c57',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {'11,8 m²'}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '16em',
                      right: '16em',
                      top: '266em',
                      height: '20em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '10.5em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Küche')}
                    </span>
                    <span
                      style={{
                        fontSize: '10.5em',
                        lineHeight: '1.3',
                        color: '#4f5c57',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {'9,1 m²'}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '16em',
                      right: '16em',
                      top: '286em',
                      height: '20em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '10.5em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Bad und WC')}
                    </span>
                    <span
                      style={{
                        fontSize: '10.5em',
                        lineHeight: '1.3',
                        color: '#4f5c57',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {'5,4 m²'}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '16em',
                      right: '16em',
                      top: '306em',
                      height: '20em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '10.5em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Vorraum')}
                    </span>
                    <span
                      style={{
                        fontSize: '10.5em',
                        lineHeight: '1.3',
                        color: '#4f5c57',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {'10,9 m²'}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '16em',
                      right: '16em',
                      top: '330em',
                      height: '30em',
                      borderTop: '1px solid rgba(10,43,34,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '12em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Zimmer:')}
                    </span>
                    <span
                      style={{
                        fontSize: '12em',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                      }}
                    >
                      {'3'}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '16em',
                      right: '16em',
                      top: '360em',
                      height: '30em',
                      borderTop: '1px solid rgba(10,43,34,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '12em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Wohnfläche gesamt:')}
                    </span>
                    <span
                      style={{
                        fontSize: '12em',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                      }}
                    >
                      {'76,0 m²'}
                    </span>
                  </div>
                </div>
                <div
                  className={v.hZi}
                  style={{
                    position: 'absolute',
                    left: '6em',
                    right: '6em',
                    top: '325em',
                    zIndex: '3',
                  }}
                >
                  <div
                    style={{
                      borderRadius: '8em',
                      background: '#ffffff',
                      boxShadow:
                        '0 0 0 1px rgba(10,43,34,0.10),0 1px 2px rgba(0,0,0,0.05),0 14em 32em rgba(10,43,34,0.16)',
                      padding: '5em',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        minHeight: '30em',
                        boxSizing: 'border-box',
                        padding: '0 8em',
                        borderRadius: '5em',
                        background: '#e3efe8',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '13em',
                          lineHeight: '1.35',
                          fontWeight: '600',
                          color: '#0a2b22',
                        }}
                      >
                        {t('“Zimmer: 3”')}
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '6em',
                        padding: '7em 8em 3em',
                      }}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        style={{ width: '13em', height: '13em', flex: 'none', marginTop: '1em' }}
                        aria-hidden="true"
                      >
                        <circle cx="8" cy="8" r="8" fill="#1f7a5a" />
                        <path
                          d="M4.6 8.2l2.2 2.2 4.6-4.7"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span style={{ fontSize: '11.5em', lineHeight: '1.35', color: '#4f5c57' }}>
                        {t('Grundriss, page 1. Confirmed by you on 2 October.')}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={v.hWf}
                  style={{
                    position: 'absolute',
                    left: '6em',
                    right: '6em',
                    top: '355em',
                    zIndex: '3',
                  }}
                >
                  <div
                    style={{
                      borderRadius: '8em',
                      background: '#ffffff',
                      boxShadow:
                        '0 0 0 1px rgba(10,43,34,0.10),0 1px 2px rgba(0,0,0,0.05),0 14em 32em rgba(10,43,34,0.16)',
                      padding: '5em',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        minHeight: '30em',
                        boxSizing: 'border-box',
                        padding: '0 8em',
                        borderRadius: '5em',
                        background: '#e3efe8',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '13em',
                          lineHeight: '1.35',
                          fontWeight: '600',
                          color: '#0a2b22',
                        }}
                      >
                        {t('“Wohnfläche gesamt: 76,0 m²”')}
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '6em',
                        padding: '7em 8em 3em',
                      }}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        style={{ width: '13em', height: '13em', flex: 'none', marginTop: '1em' }}
                        aria-hidden="true"
                      >
                        <circle cx="8" cy="8" r="8" fill="#1f7a5a" />
                        <path
                          d="M4.6 8.2l2.2 2.2 4.6-4.7"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span style={{ fontSize: '11.5em', lineHeight: '1.35', color: '#4f5c57' }}>
                        {t('Grundriss, page 1. Confirmed by you on 2 October.')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={v.dEa} style={{ position: 'absolute', inset: '0' }}>
                <div
                  style={{
                    position: 'absolute',
                    inset: '0',
                    borderRadius: '5em',
                    background: '#ffffff',
                    boxShadow:
                      '0 0 0 1px rgba(10,43,34,0.10),0 1px 2px rgba(0,0,0,0.05),0 18em 40em rgba(10,43,34,0.10)',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: '16em',
                      right: '16em',
                      top: '16em',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      whiteSpace: 'nowrap',
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
                      {t('Energieausweis')}
                    </span>
                    <span style={{ fontSize: '10.5em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Seite 1')}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '16em',
                      top: '37em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '10.0em', lineHeight: '1.4', color: '#4f5c57' }}>
                      {t('für Wohngebäude, Gentzgasse 14, 1180 Wien')}
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '16em',
                      top: '62em',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '3em',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        position: 'relative',
                        height: '10em',
                        width: '34em',
                        background: '#3f8f5f',
                      }}
                    />
                    <span
                      style={{
                        display: 'block',
                        position: 'relative',
                        height: '10em',
                        width: '49em',
                        background: '#6aa457',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: '55em',
                          top: '0',
                          width: '0',
                          height: '0',
                          borderTop: '5.0em solid transparent',
                          borderBottom: '5.0em solid transparent',
                          borderRight: '6.0em solid #0a2b22',
                        }}
                      />
                    </span>
                    <span
                      style={{
                        display: 'block',
                        position: 'relative',
                        height: '10em',
                        width: '64em',
                        background: '#a5bd4f',
                      }}
                    />
                    <span
                      style={{
                        display: 'block',
                        position: 'relative',
                        height: '10em',
                        width: '79em',
                        background: '#dcc24f',
                      }}
                    />
                    <span
                      style={{
                        display: 'block',
                        position: 'relative',
                        height: '10em',
                        width: '94em',
                        background: '#e0a24c',
                      }}
                    />
                    <span
                      style={{
                        display: 'block',
                        position: 'relative',
                        height: '10em',
                        width: '109em',
                        background: '#d9773f',
                      }}
                    />
                    <span
                      style={{
                        display: 'block',
                        position: 'relative',
                        height: '10em',
                        width: '124em',
                        background: '#c4523f',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '16em',
                      right: '16em',
                      top: '168em',
                      height: '38em',
                      borderTop: '1px solid rgba(10,43,34,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '12em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Baujahr:')}
                    </span>
                    <span
                      style={{
                        fontSize: '12em',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                      }}
                    >
                      {'1908'}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '16em',
                      right: '16em',
                      top: '206em',
                      height: '38em',
                      borderTop: '1px solid rgba(10,43,34,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '12em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Heizwärmebedarf HWB:')}
                    </span>
                    <span
                      style={{
                        fontSize: '12em',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                      }}
                    >
                      {t('48 kWh/m²a')}
                    </span>
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      left: '16em',
                      right: '16em',
                      top: '244em',
                      height: '38em',
                      borderTop: '1px solid rgba(10,43,34,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <span style={{ fontSize: '12em', lineHeight: '1.3', color: '#4f5c57' }}>
                      {t('Gesamtenergieeffizienz-Faktor fGEE:')}
                    </span>
                    <span
                      style={{
                        fontSize: '12em',
                        lineHeight: '1.3',
                        fontWeight: '600',
                        color: '#0a2b22',
                      }}
                    >
                      {'0,92'}
                    </span>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '16em',
                      right: '16em',
                      top: '300em',
                      borderTop: '1px solid rgba(10,43,34,0.10)',
                      paddingTop: '12em',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '7em',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        height: '3em',
                        width: '92%',
                        borderRadius: '1em',
                        background: '#dcd9cf',
                      }}
                    />
                    <span
                      style={{
                        display: 'block',
                        height: '3em',
                        width: '84%',
                        borderRadius: '1em',
                        background: '#dcd9cf',
                      }}
                    />
                    <span
                      style={{
                        display: 'block',
                        height: '3em',
                        width: '88%',
                        borderRadius: '1em',
                        background: '#dcd9cf',
                      }}
                    />
                    <span
                      style={{
                        display: 'block',
                        height: '3em',
                        width: '60%',
                        borderRadius: '1em',
                        background: '#dcd9cf',
                      }}
                    />
                  </div>
                </div>
                <div
                  className={v.hBj}
                  style={{
                    position: 'absolute',
                    left: '6em',
                    right: '6em',
                    top: '163em',
                    zIndex: '3',
                  }}
                >
                  <div
                    style={{
                      borderRadius: '8em',
                      background: '#ffffff',
                      boxShadow:
                        '0 0 0 1px rgba(10,43,34,0.10),0 1px 2px rgba(0,0,0,0.05),0 14em 32em rgba(10,43,34,0.16)',
                      padding: '5em',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        minHeight: '38em',
                        boxSizing: 'border-box',
                        padding: '0 8em',
                        borderRadius: '5em',
                        background: '#e3efe8',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '13em',
                          lineHeight: '1.35',
                          fontWeight: '600',
                          color: '#0a2b22',
                        }}
                      >
                        {t('“Baujahr: 1908”')}
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '6em',
                        padding: '7em 8em 3em',
                      }}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        style={{ width: '13em', height: '13em', flex: 'none', marginTop: '1em' }}
                        aria-hidden="true"
                      >
                        <circle cx="8" cy="8" r="8" fill="#1f7a5a" />
                        <path
                          d="M4.6 8.2l2.2 2.2 4.6-4.7"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span style={{ fontSize: '11.5em', lineHeight: '1.35', color: '#4f5c57' }}>
                        {t('Energieausweis, page 1. Confirmed by you on 2 October.')}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={v.hHwb}
                  style={{
                    position: 'absolute',
                    left: '6em',
                    right: '6em',
                    top: '201em',
                    zIndex: '3',
                  }}
                >
                  <div
                    style={{
                      borderRadius: '8em',
                      background: '#ffffff',
                      boxShadow:
                        '0 0 0 1px rgba(10,43,34,0.10),0 1px 2px rgba(0,0,0,0.05),0 14em 32em rgba(10,43,34,0.16)',
                      padding: '5em',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        minHeight: '38em',
                        boxSizing: 'border-box',
                        padding: '0 8em',
                        borderRadius: '5em',
                        background: '#e3efe8',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '13em',
                          lineHeight: '1.35',
                          fontWeight: '600',
                          color: '#0a2b22',
                        }}
                      >
                        {t('“Heizwärmebedarf HWB: 48 kWh/m²a”')}
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '6em',
                        padding: '7em 8em 3em',
                      }}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        style={{ width: '13em', height: '13em', flex: 'none', marginTop: '1em' }}
                        aria-hidden="true"
                      >
                        <circle cx="8" cy="8" r="8" fill="#1f7a5a" />
                        <path
                          d="M4.6 8.2l2.2 2.2 4.6-4.7"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span style={{ fontSize: '11.5em', lineHeight: '1.35', color: '#4f5c57' }}>
                        {t('Energieausweis, page 1. Confirmed by you on 2 October.')}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={v.hFg}
                  style={{
                    position: 'absolute',
                    left: '6em',
                    right: '6em',
                    top: '239em',
                    zIndex: '3',
                  }}
                >
                  <div
                    style={{
                      borderRadius: '8em',
                      background: '#ffffff',
                      boxShadow:
                        '0 0 0 1px rgba(10,43,34,0.10),0 1px 2px rgba(0,0,0,0.05),0 14em 32em rgba(10,43,34,0.16)',
                      padding: '5em',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        minHeight: '38em',
                        boxSizing: 'border-box',
                        padding: '0 8em',
                        borderRadius: '5em',
                        background: '#e3efe8',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '13em',
                          lineHeight: '1.35',
                          fontWeight: '600',
                          color: '#0a2b22',
                        }}
                      >
                        {t('“Gesamtenergieeffizienz-Faktor fGEE: 0,92”')}
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '6em',
                        padding: '7em 8em 3em',
                      }}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        style={{ width: '13em', height: '13em', flex: 'none', marginTop: '1em' }}
                        aria-hidden="true"
                      >
                        <circle cx="8" cy="8" r="8" fill="#1f7a5a" />
                        <path
                          d="M4.6 8.2l2.2 2.2 4.6-4.7"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span style={{ fontSize: '11.5em', lineHeight: '1.35', color: '#4f5c57' }}>
                        {t('Energieausweis, page 1. Confirmed by you on 2 October.')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg
              className="tr-wire"
              viewBox="0 0 358 800"
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                width: '358em',
                height: '800em',
                zIndex: '5',
                overflow: 'visible',
                pointerEvents: 'none',
              }}
              fill="none"
            >
              <g className={v.kWf}>
                <path
                  className="tr-kp"
                  pathLength="1"
                  d="M45.4 304V318Q45.4 326 37.4 326H16Q8 326 8 334V709.0Q8 717.0 16 717.0H26"
                />
                <circle className="tr-k0" cx="45.4" cy="304" r="3" />
                <circle className="tr-k1" cx="26" cy="717.0" r="3" />
              </g>
              <g className={v.kZi}>
                <path
                  className="tr-kp"
                  pathLength="1"
                  d="M112.2 304V318Q112.2 326 104.2 326H16Q8 326 8 334V679.0Q8 687.0 16 687.0H26"
                />
                <circle className="tr-k0" cx="112.2" cy="304" r="3" />
                <circle className="tr-k1" cx="26" cy="687.0" r="3" />
              </g>
              <g className={v.kBj}>
                <path
                  className="tr-kp"
                  pathLength="1"
                  d="M179.0 304V318Q179.0 326 171.0 326H16Q8 326 8 334V521.0Q8 529.0 16 529.0H26"
                />
                <circle className="tr-k0" cx="179.0" cy="304" r="3" />
                <circle className="tr-k1" cx="26" cy="529.0" r="3" />
              </g>
              <g className={v.kHwb}>
                <path
                  className="tr-kp"
                  pathLength="1"
                  d="M245.8 304V318Q245.8 326 237.8 326H16Q8 326 8 334V559.0Q8 567.0 16 567.0H26"
                />
                <circle className="tr-k0" cx="245.8" cy="304" r="3" />
                <circle className="tr-k1" cx="26" cy="567.0" r="3" />
              </g>
              <g className={v.kFg}>
                <path
                  className="tr-kp"
                  pathLength="1"
                  d="M312.6 304V318Q312.6 326 304.6 326H16Q8 326 8 334V597.0Q8 605.0 16 605.0H26"
                />
                <circle className="tr-k0" cx="312.6" cy="304" r="3" />
                <circle className="tr-k1" cx="26" cy="605.0" r="3" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <p className="tr-sr" aria-live="polite">
        {v.live}
      </p>
      <div
        className="tr-note"
        style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}
      >
        <p
          style={{
            margin: '0',
            fontSize: '14px',
            lineHeight: '1.4',
            color: '#4e635b',
            textWrap: 'pretty',
          }}
        >
          {t('Each value keeps the document and the line it was read from, and who confirmed it.')}
        </p>
        <span style={{ fontSize: '14px', lineHeight: '1.4', color: '#4e635b' }}>
          {t('Tap any value in the strip to trace it.')}
        </span>
      </div>
    </section>
  )
}
