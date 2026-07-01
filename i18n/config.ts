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
