import type { Metadata, Viewport } from 'next'
import { ImmvelaTrustPage } from '@/components/immvela/ImmvelaSubpage'
import { IMMVELA_URL, SITE_URL } from '@/lib/site'

// Served at immvela.com/de/trust (middleware.ts maps it onto this route), so the canonical and
// alternates are absolute to that origin. See app/(en)/immvela/page.tsx for why each field is restated.
export const metadata: Metadata = {
  title: { absolute: 'Immvela · wie wir mit Ihren Unterlagen und Daten umgehen' },
  description:
    'Was mit einem Dokument passiert, nachdem Sie es zu Immvela hinzugefügt haben, wer es sehen kann und welche Antworten noch nicht geklärt sind.',
  applicationName: 'Immvela',
  manifest: '/immvela.webmanifest',
  alternates: {
    canonical: `${IMMVELA_URL}/de/trust`,
    languages: {
      en: `${IMMVELA_URL}/trust`,
      de: `${IMMVELA_URL}/de/trust`,
      'x-default': `${IMMVELA_URL}/trust`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    siteName: 'Immvela',
    title: 'Immvela · wie wir mit Ihren Unterlagen und Daten umgehen',
    description:
      'Was mit einem Dokument passiert, nachdem Sie es zu Immvela hinzugefügt haben, wer es sehen kann und welche Antworten noch nicht geklärt sind.',
    url: `${IMMVELA_URL}/de/trust`,
    images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: 'Immvela' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immvela · wie wir mit Ihren Unterlagen und Daten umgehen',
    description:
      'Was mit einem Dokument passiert, nachdem Sie es zu Immvela hinzugefügt haben, wer es sehen kann und welche Antworten noch nicht geklärt sind.',
    images: [`${SITE_URL}/og.png`],
  },
}

export const viewport: Viewport = {
  themeColor: '#f2f1e8',
  colorScheme: 'light',
}

export default function Page() {
  return <ImmvelaTrustPage locale="de" />
}
