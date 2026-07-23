import { IMMVELA_URL, IMMVELA_MIGRATED } from '@/lib/site'

export const locales = ['en', 'de'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

// The brand slogan is intentionally never translated.
export const SLOGAN = 'Simplicity is the solution'

/** Prefix a path for a locale. English (default) stays unprefixed. */
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  if (locale === defaultLocale) return clean
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`
}

/**
 * Destination for links from the SNS site to Immvela. Before the domain
 * migration this is the on-site /immvela path (served from this deployment);
 * once NEXT_PUBLIC_IMMVELA_MIGRATED=1 it points straight at immvela.com so the
 * links skip the SNS→Immvela redirect hop. `hash` e.g. '#early-access'.
 */
export function immvelaHref(locale: Locale = defaultLocale, hash = ''): string {
  if (IMMVELA_MIGRATED) {
    return `${IMMVELA_URL}${locale === 'de' ? '/de' : ''}${hash}`
  }
  return `${localePath(locale, '/immvela')}${hash}`
}
