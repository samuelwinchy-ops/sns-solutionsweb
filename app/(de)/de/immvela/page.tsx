import type { Metadata, Viewport } from 'next'
import { IMMVELA_ICONS, immvelaImages } from '@/lib/share'
import ImmvelaFrame from '@/components/immvela/ImmvelaFrame'
import ImmvelaHome from '@/components/immvela/ImmvelaHome'
import { IMMVELA_URL, SITE_URL } from '@/lib/site'
import JsonLd from '@/components/JsonLd'
import { immvelaJsonLd } from '@/lib/immvela-schema'

export const metadata: Metadata = {
  // See app/immvela/page.tsx — the brand's own page shouldn't lead with another
  // brand's name in the title.
  title: { absolute: 'Immvela · Ihr persönlicher Immobilien-Assistent' },
  description:
    'Geben Sie Immvela den Energieausweis, den Grundriss und die Fotos. Immvela entwirft das Exposé und die Posts, verfolgt jede Zahl bis zum Dokument zurück und fragt Sie, bevor etwas hinausgeht. Deutsch zuerst, in einer geschlossenen Beta, entwickelt in Wien von SNS Solutions.',
  keywords: [
    'Immvela',
    'Immobiliensoftware',
    'KI für Immobilien',
    'Makler Software',
    'Immobilienverwaltung',
    'Immobilien CRM',
    'Österreich',
    'Wien',
  ],
  applicationName: 'Immvela',
  authors: [{ name: 'SNS Software Solutions GmbH', url: SITE_URL }],
  // See app/immvela/page.tsx — the root layout's manifest is SNS-branded.
  manifest: '/immvela.webmanifest',
  icons: IMMVELA_ICONS,
  // Served from immvela.com — absolute canonical + language alternates.
  alternates: {
    canonical: `${IMMVELA_URL}/de`,
    languages: {
      en: IMMVELA_URL,
      de: `${IMMVELA_URL}/de`,
      'x-default': IMMVELA_URL,
    },
  },
  openGraph: {
    // Restated, not inherited — see app/immvela/page.tsx.
    type: 'website',
    locale: 'de_AT',
    siteName: 'Immvela',
    title: 'Immvela · Ihr persönlicher Immobilien-Assistent',
    description:
      'Unterlagen rein, ein geprüftes Inserat raus. Jede Zahl im Exposé bis zum Dokument zurückverfolgt. Jetzt für die geschlossene Beta bewerben.',
    url: `${IMMVELA_URL}/de`,
    // See app/immvela/page.tsx — no Immvela-specific image yet, reusing SNS's.
    images: immvelaImages('de').og,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immvela · Ihr persönlicher Immobilien-Assistent',
    description:
      'Unterlagen rein, ein geprüftes Inserat raus. Jede Zahl im Exposé bis zum Dokument zurückverfolgt. Jetzt für die geschlossene Beta bewerben.',
    images: immvelaImages('de').twitter,
  },
}

export const viewport: Viewport = {
  themeColor: '#f2f1e8',
  colorScheme: 'light',
}

export default function ImmvelaPageDe() {
  return (
    <ImmvelaFrame locale="de" heroMark>
      <JsonLd data={immvelaJsonLd('de')} />
      <ImmvelaHome locale="de" />
    </ImmvelaFrame>
  )
}
