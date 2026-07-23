import type { Metadata, Viewport } from 'next'
import ImmvelaField from '@/components/ImmvelaField'
import ImmvelaHeader from '@/components/ImmvelaHeader'
import ImmvelaFooter from '@/components/ImmvelaFooter'
import ImmvelaLanding from '@/components/ImmvelaLanding'
import { IMMVELA_URL, SITE_URL } from '@/lib/site'
import { immvelaJsonLd } from '@/lib/immvela-schema'

export const metadata: Metadata = {
  title: 'Immvela — the AI operating system for real estate',
  description:
    'Immvela is the end-to-end AI agent for real-estate teams — from lead to listing to close. Built in the open by SNS Solutions. Join the early-access waitlist.',
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
    title: 'Immvela — the AI operating system for real estate',
    description:
      'The end-to-end AI agent for real-estate teams. Built in the open by SNS Solutions. Join the waitlist.',
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
    title: 'Immvela — the AI operating system for real estate',
    description:
      'The end-to-end AI agent for real-estate teams. Built in the open by SNS Solutions. Join the waitlist.',
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
    <div className="immvela-theme relative min-h-dvh">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(immvelaJsonLd('en')) }}
      />
      {/* Immvela's green-on-cream particle field, covering the dark base. */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[#f2f1e8]" />
        <ImmvelaField />
      </div>

      <div className="relative z-10">
        <ImmvelaHeader />
        <main className="px-5 pb-10 pt-24 md:px-10 md:pt-28">
          <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
            <ImmvelaLanding />
          </div>
        </main>
        <ImmvelaFooter />
      </div>
    </div>
  )
}
