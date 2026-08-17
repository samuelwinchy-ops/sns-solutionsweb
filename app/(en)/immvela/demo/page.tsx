import type { Metadata, Viewport } from 'next'
import ImmvelaField from '@/components/ImmvelaField'
import ImmvelaHeader from '@/components/ImmvelaHeader'
import ImmvelaFooter from '@/components/ImmvelaFooter'
import ImmvelaDemo from '@/components/ImmvelaDemo'
import JsonLd from '@/components/JsonLd'
import { IMMVELA_URL, SITE_URL } from '@/lib/site'
import { immvelaDemoJsonLd } from '@/lib/immvela-schema'

// Immvela is served from its own domain, where middleware.ts maps this route
// onto the public path /demo — so the canonical and alternates are absolute to
// that origin and use the public shape, not /immvela/demo. See app/immvela/page.tsx.
export const metadata: Metadata = {
  title: { absolute: 'Immvela · every module, running' },
  description:
    'Watch each Immvela module work on a real listing: Listing Kit, Publishing, Reception, Knowledge, Staging, Walkthrough and Documents. No signup.',
  applicationName: 'Immvela',
  // The root layout's keywords are SNS's and name neither Immvela nor a single
  // module — same gap the landing page already fixed for itself.
  keywords: [
    'Immvela',
    'Immvela demo',
    'real estate software demo',
    'Listing Kit',
    'Exposé generator',
    'real estate AI modules',
    'Immobiliensoftware Demo',
  ],
  // See app/immvela/page.tsx — the root layout's manifest is SNS-branded.
  manifest: '/immvela.webmanifest',
  alternates: {
    canonical: `${IMMVELA_URL}/demo`,
    languages: {
      en: `${IMMVELA_URL}/demo`,
      de: `${IMMVELA_URL}/de/demo`,
      'x-default': `${IMMVELA_URL}/demo`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Immvela',
    title: 'Immvela · every module, running',
    description: 'Pick a module and watch it work on a real listing. No signup.',
    url: `${IMMVELA_URL}/demo`,
    // Declaring `openGraph` at all replaces the parent's object wholesale, so
    // omitting this didn't inherit the image — it shipped the page with no
    // og:image and previewed as a blank card everywhere it was shared. Still
    // the SNS og.png; see app/(en)/immvela/page.tsx on the missing Immvela one.
    images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: 'Immvela' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immvela · every module, running',
    description: 'Pick a module and watch it work on a real listing. No signup.',
    images: [`${SITE_URL}/og.png`],
  },
}

// Immvela's light "daylight" theme — override the site-wide dark browser chrome.
export const viewport: Viewport = {
  themeColor: '#f2f1e8',
  colorScheme: 'light',
}

export default function ImmvelaDemoPage() {
  return (
    <div className="immvela-theme relative min-h-dvh">
      <JsonLd data={immvelaDemoJsonLd('en')} />
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[#f2f1e8]" />
        <ImmvelaField />
      </div>

      <div className="relative z-10">
        <ImmvelaHeader subpage />
        <main className="px-5 pb-10 pt-24 md:px-10 md:pt-28">
          <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
            <ImmvelaDemo />
          </div>
        </main>
        <ImmvelaFooter />
      </div>
    </div>
  )
}
