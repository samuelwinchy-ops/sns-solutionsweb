import type { Metadata, Viewport } from 'next'
import { IMMVELA_ICONS, immvelaImages } from '@/lib/share'
import ImmvelaFrame from '@/components/immvela/ImmvelaFrame'
import WhySections from '@/components/immvela/rest/WhySections'
import { IMMVELA_URL } from '@/lib/site'
import '@/app/immvela-rest.css'

// Served at immvela.com/de/why (middleware.ts maps it onto this route), so the canonical and
// alternates are absolute to that origin.
const title = 'Immvela · ein verlässlicher Datensatz für jedes Objekt'
const description =
  'Warum wir Immvela bauen: jeder Wert eines Inserats bis zu seinem Dokument nachvollziehbar, von einer Person bestätigt und im Datensatz Ihres Büros.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  applicationName: 'Immvela',
  manifest: '/immvela.webmanifest',
  icons: IMMVELA_ICONS,
  alternates: {
    canonical: `${IMMVELA_URL}/de/why`,
    languages: {
      en: `${IMMVELA_URL}/why`,
      de: `${IMMVELA_URL}/de/why`,
      'x-default': `${IMMVELA_URL}/why`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    siteName: 'Immvela',
    title,
    description,
    url: `${IMMVELA_URL}/de/why`,
    images: immvelaImages('de').og,
  },
  twitter: { card: 'summary_large_image', title, description, images: immvelaImages('de').twitter },
}

export const viewport: Viewport = {
  themeColor: '#f2f1e8',
  colorScheme: 'light',
}

export default function Page() {
  return (
    <ImmvelaFrame locale="de">
      <div className="imv-band imv-page">
        <WhySections locale="de" />
      </div>
    </ImmvelaFrame>
  )
}
