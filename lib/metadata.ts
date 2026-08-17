import type { Metadata, Viewport } from 'next'
import type { Locale } from '@/i18n/config'
import { SITE, SITE_COPY, SITE_URL } from '@/lib/site'

/**
 * The root metadata for each language's root layout.
 *
 * There are two root layouts (app/(en) and app/(de)) so that the German pages
 * can serve `<html lang="de-AT">`; this is the metadata they share, minus the
 * language-dependent parts.
 *
 * Getting the Open Graph block right at the root matters more than it looks.
 * Next replaces a parent's `openGraph` object *wholesale* when a child declares
 * one — it does not merge into it. Every German page used to declare
 * `openGraph: { locale: 'de_AT' }` just to correct the locale, and that one
 * line silently deleted og:image, og:site_name, og:type and og:url from the
 * whole German site: every German URL shared on LinkedIn, WhatsApp or Slack
 * previewed as a blank card. With a complete German block here, those pages
 * declare no `openGraph` of their own and inherit all of it, which is exactly
 * how the English pages already worked.
 */
export function rootMetadata(locale: Locale): Metadata {
  const copy = SITE_COPY[locale]
  const home = locale === 'de' ? '/de' : '/'

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: copy.title,
      template: '%s | SNS Solutions',
    },
    description: copy.description,
    applicationName: SITE.name,
    authors: [{ name: SITE.legalName }],
    creator: SITE.legalName,
    keywords: [...copy.keywords],
    alternates: { canonical: home },
    manifest: '/site.webmanifest',
    icons: {
      // Every icon (SVG + raster favicon.ico / PNGs) is transparent *outside*
      // the disc, so the mark shows without a tile in the tab and in Google
      // Search results. The disc itself is opaque — the monogram is knocked out
      // of it in cream, so it reads the same on a light tab, a dark tab, and the
      // dark share card. All of them come from scripts/make_icons.py.
      // ?v=5 busts aggressive favicon caching after the SNS mark changed.
      icon: [
        { url: '/icon.svg?v=5', type: 'image/svg+xml' },
        { url: '/favicon.ico?v=5', sizes: 'any' },
        { url: '/favicon-16x16.png?v=5', type: 'image/png', sizes: '16x16' },
        { url: '/favicon-32x32.png?v=5', type: 'image/png', sizes: '32x32' },
        { url: '/android-chrome-192x192.png?v=5', type: 'image/png', sizes: '192x192' },
        { url: '/android-chrome-512x512.png?v=5', type: 'image/png', sizes: '512x512' },
      ],
      apple: [{ url: '/apple-touch-icon.png?v=5', sizes: '180x180' }],
    },
    openGraph: {
      type: 'website',
      locale: copy.ogLocale,
      url: `${SITE_URL}${home === '/' ? '' : home}`,
      siteName: SITE.name,
      title: copy.title,
      description: copy.description,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: copy.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
      images: ['/og.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
    },
  }
}

/** Browser chrome for the SNS theme. Immvela's pages override this per-page. */
export const ROOT_VIEWPORT: Viewport = {
  themeColor: '#eef0f7',
  colorScheme: 'light',
}
