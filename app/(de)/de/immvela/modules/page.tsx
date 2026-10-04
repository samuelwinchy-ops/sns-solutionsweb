import type { Metadata, Viewport } from 'next'
import ImmvelaFrame from '@/components/immvela/ImmvelaFrame'
import ModulesSections from '@/components/immvela/rest/ModulesSections'
import { IMMVELA_URL, SITE_URL } from '@/lib/site'
import '@/app/immvela-rest.css'

// Served at immvela.com/de/modules (middleware.ts maps it onto this route), so the canonical and
// alternates are absolute to that origin.
const title = 'Immvela · was es heute kann und was als Nächstes kommt'
const description =
  'Was Immvela heute in der geschlossenen Beta kann: Unterlagen lesen, eine Checkliste je Inserat führen, Exposé, Broschüre und Beiträge entwerfen, Fotos einrichten und nach Ihrer Freigabe veröffentlichen. Und was als Nächstes kommt.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  applicationName: 'Immvela',
  manifest: '/immvela.webmanifest',
  alternates: {
    canonical: `${IMMVELA_URL}/de/modules`,
    languages: {
      en: `${IMMVELA_URL}/modules`,
      de: `${IMMVELA_URL}/de/modules`,
      'x-default': `${IMMVELA_URL}/modules`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    siteName: 'Immvela',
    title,
    description,
    url: `${IMMVELA_URL}/de/modules`,
    images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: 'Immvela' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [`${SITE_URL}/og.png`] },
}

export const viewport: Viewport = {
  themeColor: '#f2f1e8',
  colorScheme: 'light',
}

export default function Page() {
  return (
    <ImmvelaFrame locale="de">
      <div className="imv-band imv-page">
        <ModulesSections locale="de" />
      </div>
    </ImmvelaFrame>
  )
}
