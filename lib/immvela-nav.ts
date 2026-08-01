'use client'

import { usePathname } from 'next/navigation'
import { type Locale, defaultLocale } from '@/i18n/config'

/**
 * The Immvela pages are served under two different path shapes:
 *
 *   • immvela.com          → the domain root (`/`, `/de`, `/demo`, `/de/demo`),
 *     which middleware.ts rewrites onto the `/immvela` routes.
 *   • the SNS deployment, previews and `next dev` → the routes themselves
 *     (`/immvela`, `/de/immvela`, `/immvela/demo`, …).
 *
 * A link hard-coded to either shape costs a redirect on the other, so links
 * *between* Immvela pages resolve against the path actually being served.
 *
 * Cross-site links (Immvela → SNS, SNS → Immvela) are a different problem and
 * are absolute: see SITE_URL and `immvelaHref` in i18n/config.
 *
 * @example
 *   const path = useImmvelaPath(locale)
 *   path()          // the landing
 *   path('/demo')   // the module walkthrough
 */
export function useImmvelaPath(locale: Locale = defaultLocale) {
  const pathname = usePathname() || '/'
  // `/immvela`, `/immvela/demo`, `/de/immvela`, … — but not a path that merely
  // starts with those letters.
  const rooted = !/^\/(de\/)?immvela(\/|$)/.test(pathname)
  const prefix = rooted
    ? locale === defaultLocale
      ? ''
      : `/${locale}`
    : locale === defaultLocale
      ? '/immvela'
      : `/${locale}/immvela`

  return (sub = '') => `${prefix}${sub}` || '/'
}
