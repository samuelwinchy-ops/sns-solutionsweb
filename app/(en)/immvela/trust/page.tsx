import type { Metadata, Viewport } from 'next'
import { IMMVELA_ICONS, immvelaImages } from '@/lib/share'
import { ImmvelaTrustPage } from '@/components/immvela/ImmvelaSubpage'
import { IMMVELA_URL } from '@/lib/site'

// Served at immvela.com/trust (middleware.ts maps it onto this route), so the canonical and
// alternates are absolute to that origin. See app/(en)/immvela/page.tsx for why each field is restated.
export const metadata: Metadata = {
  title: { absolute: 'Immvela · how we handle your documents and data' },
  description:
    'What happens to a document after you add it to Immvela, who can see it, and where it is stored.',
  applicationName: 'Immvela',
  manifest: '/immvela.webmanifest',
  icons: IMMVELA_ICONS,
  alternates: {
    canonical: `${IMMVELA_URL}/trust`,
    languages: {
      en: `${IMMVELA_URL}/trust`,
      de: `${IMMVELA_URL}/de/trust`,
      'x-default': `${IMMVELA_URL}/trust`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Immvela',
    title: 'Immvela · how we handle your documents and data',
    description:
      'What happens to a document after you add it to Immvela, who can see it, and where it is stored.',
    url: `${IMMVELA_URL}/trust`,
    images: immvelaImages('en').og,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immvela · how we handle your documents and data',
    description:
      'What happens to a document after you add it to Immvela, who can see it, and where it is stored.',
    images: immvelaImages('en').twitter,
  },
}

export const viewport: Viewport = {
  themeColor: '#f2f1e8',
  colorScheme: 'light',
}

export default function Page() {
  return <ImmvelaTrustPage locale="en" />
}
