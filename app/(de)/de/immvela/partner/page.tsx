import type { Metadata, Viewport } from 'next'
import { ImmvelaPartnerPage } from '@/components/immvela/ImmvelaSubpage'
import { IMMVELA_URL, SITE_URL } from '@/lib/site'

// Served at immvela.com/de/partner (middleware.ts maps it onto this route), so the canonical and
// alternates are absolute to that origin. See app/(en)/immvela/page.tsx for why each field is restated.
export const metadata: Metadata = {
  title: { absolute: 'Immvela · gestalten Sie Immvela mit' },
  description:
    'Wir entwickeln Immvela gemeinsam mit Maklerinnen und Maklern. Schenken Sie uns 30 Minuten und erzählen Sie uns, was Ihre Inserate aufhält.',
  applicationName: 'Immvela',
  manifest: '/immvela.webmanifest',
  alternates: {
    canonical: `${IMMVELA_URL}/de/partner`,
    languages: {
      en: `${IMMVELA_URL}/partner`,
      de: `${IMMVELA_URL}/de/partner`,
      'x-default': `${IMMVELA_URL}/partner`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    siteName: 'Immvela',
    title: 'Immvela · gestalten Sie Immvela mit',
    description:
      'Wir entwickeln Immvela gemeinsam mit Maklerinnen und Maklern. Schenken Sie uns 30 Minuten und erzählen Sie uns, was Ihre Inserate aufhält.',
    url: `${IMMVELA_URL}/de/partner`,
    images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: 'Immvela' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immvela · gestalten Sie Immvela mit',
    description:
      'Wir entwickeln Immvela gemeinsam mit Maklerinnen und Maklern. Schenken Sie uns 30 Minuten und erzählen Sie uns, was Ihre Inserate aufhält.',
    images: [`${SITE_URL}/og.png`],
  },
}

export const viewport: Viewport = {
  themeColor: '#f2f1e8',
  colorScheme: 'light',
}

export default function Page() {
  return <ImmvelaPartnerPage locale="de" />
}
