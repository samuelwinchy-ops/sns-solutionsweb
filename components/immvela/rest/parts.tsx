import type { ReactNode } from 'react'
import type { T } from '@/i18n/immvela'

export function Tag({ t, name, next = false }: { t: T; name: string; next?: boolean }) {
  return (
    <div className="rx-tagrow">
      <span className="rx-name">{t(name)}</span>
      <span className={next ? 'rx-next' : 'rx-live'}>{t(next ? 'Next' : 'Live')}</span>
    </div>
  )
}

export function Section({
  id,
  flip = false,
  wide = false,
  first = false,
  text,
  vis,
}: {
  id?: string
  flip?: boolean
  wide?: boolean
  first?: boolean
  text: ReactNode
  vis: ReactNode
}) {
  const cls = ['rx-grid', flip && 'rx-flip', wide && 'rx-wide'].filter(Boolean).join(' ')
  return (
    <section id={id} className={first ? 'rx-sec rx-first' : 'rx-sec'}>
      <div className={cls}>
        <div className="rx-text">{text}</div>
        <div className="rx-vis">{vis}</div>
      </div>
    </section>
  )
}

export function Check({ color = '#1f7a5a' }: { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6.5 12.5l3.8 3.8L17.5 8.6" />
    </svg>
  )
}

export function Arrow() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" />
    </svg>
  )
}

/** One closing band on every subpage: the site's one primary action. */
export function ApplyBand({ t, href }: { t: T; href: string }) {
  return (
    <section className="rx-sec">
      <div className="rx-wrap" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '32px 72px' }}>
        <div style={{ flex: '1 1 520px', minWidth: 0 }}>
          <h2 className="rx-h2" style={{ maxWidth: '640px' }}>
            {t('See it with one of your own listings')}
          </h2>
          <p className="rx-lede">
            {t('We reply within a week and set up your first listing with you.')}
          </p>
        </div>
        <a className="rx-cta" href={href}>
          {t('Apply for the closed beta')}
        </a>
      </div>
    </section>
  )
}

const CH: Record<string, [string, ReactNode]> = {
  ig: [
    'linear-gradient(45deg,#f9a33a,#e1306c 55%,#833ab4)',
    <svg key="ig" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4"><rect x="4" y="4" width="16" height="16" rx="5" /><circle cx="12" cy="12" r="3.6" /></svg>,
  ],
  fb: ['#1877f2', <svg key="fb" viewBox="0 0 24 24" fill="#fff"><path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21z" /></svg>],
  li: ['#0a66c2', <svg key="li" viewBox="0 0 24 24" fill="#fff"><path d="M6.5 9h3v10h-3zM8 4.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4zM11.5 9h2.9v1.4c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V19h-3v-4.8c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V19h-3z" /></svg>],
  tt: ['#111', <svg key="tt" viewBox="0 0 24 24" fill="#fff"><path d="M15.5 3c.3 2.2 1.6 3.6 3.8 3.8v3c-1.4.1-2.6-.3-3.8-1.1v5.9c0 3.7-3.9 6-7 4.2-3.3-1.9-2.6-7.4 1.9-7.8v3.1c-1.9.3-2.4 2.3-1.2 3.2 1.3 1 3.3.2 3.3-1.9V3z" /></svg>],
  yt: ['#ff0000', <svg key="yt" viewBox="0 0 24 24" fill="#fff"><path d="M9.5 8v8l7-4z" /></svg>],
}

export function Channels({ list }: { list: (keyof typeof CH)[] }) {
  return (
    <span className="rx-chs">
      {list.map((k) => (
        <span key={k} className="rx-ch" style={{ background: CH[k][0] }}>
          {CH[k][1]}
        </span>
      ))}
    </span>
  )
}
