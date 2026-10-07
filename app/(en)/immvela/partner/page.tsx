import type { Metadata, Viewport } from 'next'
import JsonLd from '@/components/JsonLd'
import { immvelaPageJsonLd } from '@/lib/immvela-schema'
import { IMMVELA_ICONS, immvelaImages } from '@/lib/share'
import { ImmvelaPartnerPage } from '@/components/immvela/ImmvelaSubpage'
import { IMMVELA_URL } from '@/lib/site'

// Served at immvela.com/partner (middleware.ts maps it onto this route), so the canonical and
// alternates are absolute to that origin. See app/(en)/immvela/page.tsx for why each field is restated.
export const metadata: Metadata = {
  title: { absolute: 'Immvela · help us build Immvela' },
  description:
    'We are building Immvela with estate agents. Give us 30 minutes and tell us what slows your listings down.',
  applicationName: 'Immvela',
  manifest: '/immvela.webmanifest',
  icons: IMMVELA_ICONS,
  alternates: {
    canonical: `${IMMVELA_URL}/partner`,
    languages: {
      en: `${IMMVELA_URL}/partner`,
      de: `${IMMVELA_URL}/de/partner`,
      'x-default': `${IMMVELA_URL}/partner`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Immvela',
    title: 'Immvela · help us build Immvela',
    description:
      'We are building Immvela with estate agents. Give us 30 minutes and tell us what slows your listings down.',
    url: `${IMMVELA_URL}/partner`,
    images: immvelaImages('en').og,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immvela · help us build Immvela',
    description:
      'We are building Immvela with estate agents. Give us 30 minutes and tell us what slows your listings down.',
    images: immvelaImages('en').twitter,
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
          'en',
          '/partner',
          (metadata.title as { absolute: string }).absolute,
          String(metadata.description)
        )}
      />
      <ImmvelaPartnerPage locale="en" />
    </>
  )
}
