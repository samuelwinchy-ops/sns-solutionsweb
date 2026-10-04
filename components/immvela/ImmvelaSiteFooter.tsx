'use client'

import { track } from '@vercel/analytics'
import { type Locale, localePath } from '@/i18n/config'
import { immvelaT } from '@/i18n/immvela'
import { useImmvelaPath } from '@/lib/immvela-nav'

/** The quiet footer from the design. Modules replaces the old module walkthrough at /demo. */
export default function ImmvelaSiteFooter({ locale }: { locale: Locale }) {
  const t = immvelaT(locale)
  const path = useImmvelaPath(locale)
  const links = [
    { href: path('/modules'), label: t('Modules'), onClick: () => track('immvela_see_modules') },
    { href: path('/why'), label: t('Why Immvela') },
    { href: path('/trust'), label: t('How we handle data') },
    { href: path('/partner'), label: t('Help us build Immvela') },
    { href: path('/new'), label: t('What’s new') },
    { href: path('/eavg'), label: t('The EAVG, quoted') },
    { href: localePath(locale, '/legal/imprint'), label: t('Imprint') },
    { href: localePath(locale, '/legal/privacy'), label: t('Privacy') },
    { href: localePath(locale, '/legal/terms'), label: t('Terms') },
  ]
  return (
    <footer
      className="site-foot"
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '32px 24px 48px',
        boxSizing: 'border-box',
        borderTop: '1px solid rgba(10,43,34,0.08)',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '16px',
        flexWrap: 'wrap',
        fontSize: '14px',
        color: '#4e635b',
      }}
    >
      <span>{t('Immvela is made by SNS Software Solutions GmbH, Vienna.')}</span>
      <nav aria-label={t('Footer')} style={{ display: 'flex', gap: '8px 16px', flexWrap: 'wrap' }}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={l.onClick}>
            {l.label}
          </a>
        ))}
      </nav>
    </footer>
  )
}
