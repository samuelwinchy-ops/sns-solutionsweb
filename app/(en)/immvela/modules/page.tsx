import type { Metadata, Viewport } from 'next'
import { IMMVELA_ICONS, immvelaImages } from '@/lib/share'
import ImmvelaFrame from '@/components/immvela/ImmvelaFrame'
import ModulesSections from '@/components/immvela/rest/ModulesSections'
import { IMMVELA_URL } from '@/lib/site'
import '@/app/immvela-rest.css'

// Served at immvela.com/modules (middleware.ts maps it onto this route), so the canonical and
// alternates are absolute to that origin.
const title = 'Immvela · what it does today, and what comes next'
const description =
  'What Immvela does today in the closed beta: reads documents, keeps a checklist per listing, drafts the Exposé, brochure and posts, stages photos and publishes after your approval. And what comes next.'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  applicationName: 'Immvela',
  manifest: '/immvela.webmanifest',
  icons: IMMVELA_ICONS,
  alternates: {
    canonical: `${IMMVELA_URL}/modules`,
    languages: {
      en: `${IMMVELA_URL}/modules`,
      de: `${IMMVELA_URL}/de/modules`,
      'x-default': `${IMMVELA_URL}/modules`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Immvela',
    title,
    description,
    url: `${IMMVELA_URL}/modules`,
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
      <div className="imv-band imv-page">
        <ModulesSections locale="en" />
      </div>
    </ImmvelaFrame>
  )
}
