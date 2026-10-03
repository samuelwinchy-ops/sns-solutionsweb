import type { Metadata, Viewport } from 'next'
import ImmvelaFrame from '@/components/immvela/ImmvelaFrame'
import ImmvelaHome from '@/components/immvela/ImmvelaHome'
import { IMMVELA_URL, SITE_URL } from '@/lib/site'
import JsonLd from '@/components/JsonLd'
import { immvelaJsonLd } from '@/lib/immvela-schema'

export const metadata: Metadata = {
  // Absolute: the root layout's "%s | SNS Solutions" template put a competitor
  // for its own brand name in the title of every Immvela page. Searching
  // "immvela" is meant to find Immvela — the title is the strongest signal of
  // what a page is about, and this one led with someone else's name.
  title: { absolute: 'Immvela · your personal real estate assistant' },
  description:
    'Give Immvela the Energieausweis, the floor plan and the photos. It drafts the Exposé and the posts, traces every number to its document and asks you before anything goes out. German first, in a closed beta, built in Vienna by SNS Solutions.',
  // The root layout's are SNS's ("AI software studio", "Vienna", …) and named
  // Immvela nowhere. Same for applicationName/authors below.
  keywords: [
    'Immvela',
    'real estate software',
    'Immobiliensoftware',
    'AI for real estate',
    'property management platform',
    'real estate CRM',
    'Makler Software',
    'Austria',
  ],
  applicationName: 'Immvela',
  authors: [{ name: 'SNS Software Solutions GmbH', url: SITE_URL }],
  // The root layout's /site.webmanifest names the app "SNS Solutions" and sets
  // the dark #06080F theme — installing immvela.com from Android gave you an
  // SNS-branded, dark-chromed app for a cream-coloured site. Relative, so it
  // resolves on whichever host is serving the page. The icons inside it are
  // still SNS's mark; swap them when an Immvela one exists (same gap as og.png
  // below).
  manifest: '/immvela.webmanifest',
  // Immvela is served from its own domain, so its canonical and language
  // alternates are absolute to that origin — not the SNS domain.
  alternates: {
    canonical: IMMVELA_URL,
    languages: {
      en: IMMVELA_URL,
      de: `${IMMVELA_URL}/de`,
      'x-default': IMMVELA_URL,
    },
  },
  openGraph: {
    // Next replaces the parent `openGraph` object wholesale rather than merging
    // into it, so type/locale/siteName have to be restated here — without them
    // the page shipped no og:type and no og:site_name at all.
    type: 'website',
    locale: 'en_US',
    siteName: 'Immvela',
    title: 'Immvela · your personal real estate assistant',
    description:
      'Documents in, a checked listing out. Every number in your Exposé traced to its document. Apply for the closed beta.',
    url: IMMVELA_URL,
    // No Immvela-specific image yet — reusing the SNS og.png (dark) beats no
    // image at all in link previews, but it doesn't match Immvela's light
    // brand. Swap for a dedicated Immvela image when one exists.
    images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: 'Immvela' }],
  },
  // Root layout's twitter metadata is SNS-branded; without an override here
  // Immvela pages inherited it wholesale, so shares on X showed "SNS
  // Solutions" title/description while og:title correctly said "Immvela".
  twitter: {
    card: 'summary_large_image',
    title: 'Immvela · your personal real estate assistant',
    description:
      'Documents in, a checked listing out. Every number in your Exposé traced to its document. Apply for the closed beta.',
    images: [`${SITE_URL}/og.png`],
  },
}

// This route is Immvela's light "daylight" theme — override the site-wide dark
// browser chrome and colour-scheme so native form controls render light.
export const viewport: Viewport = {
  themeColor: '#f2f1e8',
  colorScheme: 'light',
}

export default function ImmvelaPage() {
  return (
    <ImmvelaFrame locale="en" heroMark>
      <JsonLd data={immvelaJsonLd('en')} />
      <ImmvelaHome locale="en" />
    </ImmvelaFrame>
  )
}
