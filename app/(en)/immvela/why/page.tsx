import type { Metadata, Viewport } from 'next'
import JsonLd from '@/components/JsonLd'
import { immvelaPageJsonLd } from '@/lib/immvela-schema'
import { IMMVELA_ICONS, immvelaImages } from '@/lib/share'
import ImmvelaFrame from '@/components/immvela/ImmvelaFrame'
import WhySections from '@/components/immvela/rest/WhySections'
import { IMMVELA_URL } from '@/lib/site'
import '@/app/immvela-rest.css'

// Served at immvela.com/why (middleware.ts maps it onto this route), so the canonical and
// alternates are absolute to that origin.
const title = 'Immvela · one record you can trust, for every property'
const description =
  'Why we built Immvela: every number in a listing traced to its document, confirmed by a person, and kept in your office’s record.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  applicationName: 'Immvela',
  manifest: '/immvela.webmanifest',
  icons: IMMVELA_ICONS,
  alternates: {
    canonical: `${IMMVELA_URL}/why`,
    languages: {
      en: `${IMMVELA_URL}/why`,
      de: `${IMMVELA_URL}/de/why`,
      'x-default': `${IMMVELA_URL}/why`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Immvela',
    title,
    description,
    url: `${IMMVELA_URL}/why`,
    images: immvelaImages('en').og,
  },
  twitter: { card: 'summary_large_image', title, description, images: immvelaImages('en').twitter },
}

export const viewport: Viewport = {
  themeColor: '#f2f1e8',
  colorScheme: 'light',
}

export default function Page() {
  return (
    <ImmvelaFrame locale="en">
      <JsonLd data={immvelaPageJsonLd('en', '/why', title, description)} />
      <div className="imv-band imv-page">
        <WhySections locale="en" />
      </div>
    </ImmvelaFrame>
  )
}
