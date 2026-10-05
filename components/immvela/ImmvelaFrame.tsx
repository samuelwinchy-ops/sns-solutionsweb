import type { ReactNode } from 'react'
import type { Locale } from '@/i18n/config'
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
      <ImmvelaNav locale={locale} heroMark={heroMark} />
      <main>{children}</main>
      <ImmvelaSiteFooter locale={locale} />
      <PrivacyNote locale={locale} />
    </div>
  )
}
