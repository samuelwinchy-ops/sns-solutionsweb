import type { Metadata, Viewport } from 'next'
import JsonLd from '@/components/JsonLd'
import { immvelaPageJsonLd } from '@/lib/immvela-schema'
import { IMMVELA_ICONS, immvelaImages } from '@/lib/share'
import { ImmvelaTrustPage } from '@/components/immvela/ImmvelaSubpage'
import { IMMVELA_URL } from '@/lib/site'

// Served at immvela.com/de/trust (middleware.ts maps it onto this route), so the canonical and
// alternates are absolute to that origin. See app/(en)/immvela/page.tsx for why each field is restated.
export const metadata: Metadata = {
  title: { absolute: 'Immvela · wie wir mit Ihren Unterlagen und Daten umgehen' },
  description:
    'Was mit einem Dokument passiert, nachdem Sie es zu Immvela hinzugefügt haben, wer es sehen kann und wo es gespeichert ist.',
  applicationName: 'Immvela',
  manifest: '/immvela.webmanifest',
  icons: IMMVELA_ICONS,
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
      'Was mit einem Dokument passiert, nachdem Sie es zu Immvela hinzugefügt haben, wer es sehen kann und wo es gespeichert ist.',
    url: `${IMMVELA_URL}/de/trust`,
    images: immvelaImages('de').og,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immvela · wie wir mit Ihren Unterlagen und Daten umgehen',
    description:
      'Was mit einem Dokument passiert, nachdem Sie es zu Immvela hinzugefügt haben, wer es sehen kann und wo es gespeichert ist.',
    images: immvelaImages('de').twitter,
  },
}

export const viewport: Viewport = {
  themeColor: '#f2f1e8',
  colorScheme: 'light',
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={immvelaPageJsonLd(
          'de',
          '/trust',
          (metadata.title as { absolute: string }).absolute,
          String(metadata.description)
        )}
      />
      <ImmvelaTrustPage locale="de" />
    </>
  )
}
