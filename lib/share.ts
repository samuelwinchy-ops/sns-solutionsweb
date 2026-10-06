import type { Metadata } from 'next'
import type { Locale } from '@/i18n/config'
import { IMMVELA_URL, SITE, SITE_COPY, SITE_URL } from '@/lib/site'

/*
 * Share cards and icons. Every page states its own Open Graph and Twitter block, because Next replaces a
 * parent's `openGraph` wholesale instead of merging, and a page that only sets `title` would otherwise
 * share with the home page's title. The cards are 1200 x 630 PNGs in public/og/, one per language.
 */

const V = '?v=2'
const ICON_V = '?v=3'

export type SnsCard = 'sns' | 'products'

export const snsCard = (card: SnsCard, locale: Locale) => `/og/${card}-${locale}.png${V}`
export const immvelaCard = (locale: Locale) => `${IMMVELA_URL}/og/immvela-${locale}.png${V}`

const SNS_CARD_ALT: Record<SnsCard, Record<Locale, string>> = {
  sns: {
    en: 'SNS Solutions: What took hours yesterday now handles itself.',
    de: 'SNS Solutions: Was gestern Stunden gedauert hat, erledigt sich heute von selbst.',
  },
  products: {
    en: 'SNS Solutions, our products: Immvela and QFUtool',
    de: 'SNS Solutions, unsere Produkte: Immvela und QFUtool',
  },
}

export const IMMVELA_CARD_ALT: Record<Locale, string> = {
  en: 'Immvela. Your personal real estate assistant',
  de: 'Immvela. Ihr persönlicher Immobilien-Assistent',
}

export function snsImages(card: SnsCard, locale: Locale) {
  const url = snsCard(card, locale)
  return {
    og: [{ url, width: 1200, height: 630, alt: SNS_CARD_ALT[card][locale] }],
    twitter: [{ url, alt: SNS_CARD_ALT[card][locale] }],
  }
}

export function immvelaImages(locale: Locale) {
  const url = immvelaCard(locale)
  return {
    og: [{ url, width: 1200, height: 630, alt: IMMVELA_CARD_ALT[locale] }],
    twitter: [{ url, alt: IMMVELA_CARD_ALT[locale] }],
  }
}

/** Metadata for an SNS page: its own title and description in the tab, the share card and the X card. */
export function snsPage({
  locale,
  title,
  description,
  path,
  languages,
  card = 'sns',
}: {
  locale: Locale
  title: string
  description: string
  path: string
  languages?: Record<string, string>
  card?: SnsCard
}): Metadata {
  const shared = `${title} | ${SITE.name}`
  const img = snsImages(card, locale)
  return {
    title,
    description,
    alternates: { canonical: path, ...(languages ? { languages } : {}) },
    openGraph: {
      type: 'website',
      locale: SITE_COPY[locale].ogLocale,
      siteName: SITE.name,
      url: `${SITE_URL}${path}`,
      title: shared,
      description,
      images: img.og,
    },
    twitter: { card: 'summary_large_image', title: shared, description, images: img.twitter },
  }
}

/**
 * Immvela's own icons for every immvela.com page, so a tab, a bookmark or a home-screen icon shows the
 * helix rather than the SNS mark. Files: public/immvela/icons/ (made from lib/helix-contour.ts's curves).
 */
export const IMMVELA_ICONS: Metadata['icons'] = {
  icon: [
    { url: `/immvela/icons/icon.svg${ICON_V}`, type: 'image/svg+xml' },
    { url: `/immvela/icons/favicon.ico${ICON_V}`, sizes: 'any' },
    { url: `/immvela/icons/favicon-16x16.png${ICON_V}`, type: 'image/png', sizes: '16x16' },
    { url: `/immvela/icons/favicon-32x32.png${ICON_V}`, type: 'image/png', sizes: '32x32' },
  ],
  apple: [{ url: `/immvela/icons/apple-touch-icon.png${ICON_V}`, sizes: '180x180' }],
}
