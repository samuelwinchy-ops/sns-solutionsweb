import type { ReactNode } from 'react'
import type { Locale } from '@/i18n/config'
import { immvelaT } from '@/i18n/immvela'
import { immvelaFonts } from './fonts'
import ImmvelaNav from './ImmvelaNav'
import ImmvelaSiteFooter from './ImmvelaSiteFooter'
import PrivacyNote from './PrivacyNote'
import '@/app/immvela-redesign.css'

/** The page shell every redesigned immvela.com page shares: the lit ground, the nav, the footer. */
export default function ImmvelaFrame({
  locale,
  heroMark = false,
  children,
}: {
  locale: Locale
  heroMark?: boolean
  children: ReactNode
}) {
  return (
    <div className={`imv ${immvelaFonts}`}>
      <div className="gl-ground" aria-hidden="true" />
      <div className="gl-grain" aria-hidden="true" />
      <a className="imv-skip" href="#main">
        {immvelaT(locale)('Skip to content')}
      </a>
      {/* Fixed to the corner, so its place here is only its place in the keyboard order: ahead of the page,
          where it can be closed without tabbing through everything first. */}
      <PrivacyNote locale={locale} />
      <ImmvelaNav locale={locale} heroMark={heroMark} />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <ImmvelaSiteFooter locale={locale} />
    </div>
  )
}
