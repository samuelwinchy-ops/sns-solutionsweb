import type { Metadata, Viewport } from 'next'
import ImmvelaField from '@/components/ImmvelaField'
import ImmvelaHeader from '@/components/ImmvelaHeader'
import ImmvelaFooter from '@/components/ImmvelaFooter'
import ImmvelaLanding from '@/components/ImmvelaLanding'
import { IMMVELA_URL, SITE_URL } from '@/lib/site'
import { immvelaJsonLd } from '@/lib/immvela-schema'

export const metadata: Metadata = {
  // See app/immvela/page.tsx — the brand's own page shouldn't lead with another
  // brand's name in the title.
  title: { absolute: 'Immvela · das agentische Betriebssystem für Immobilien' },
  description:
    'Eine Plattform für Immobilienteams, in der jedes Modul auf denselben geprüften Datenbestand Ihrer Objekte, Leads und Abschlüsse zurückschreibt, sodass sie mit der Zeit besser wird. Deutsch zuerst, in der EU gehostet. Offen entwickelt von SNS Solutions.',
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
    title: 'Immvela · das agentische Betriebssystem für Immobilien',
    description:
      'Ein Datenbestand für Ihre Objekte, Leads und Abschlüsse, mit einem Modul für jeden Teil der Arbeit. Offen entwickelt von SNS Solutions. Auf die Warteliste.',
    url: `${IMMVELA_URL}/de`,
    // See app/immvela/page.tsx — no Immvela-specific image yet, reusing SNS's.
    images: [{ url: `${SITE_URL}/og.png`, width: 1200, height: 630, alt: 'Immvela' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immvela · das agentische Betriebssystem für Immobilien',
    description:
      'Ein Datenbestand für Ihre Objekte, Leads und Abschlüsse, mit einem Modul für jeden Teil der Arbeit. Offen entwickelt von SNS Solutions. Auf die Warteliste.',
    images: [`${SITE_URL}/og.png`],
  },
}

export const viewport: Viewport = {
  themeColor: '#f2f1e8',
  colorScheme: 'light',
}

export default function ImmvelaPageDe() {
  return (
    <div lang="de" className="immvela-theme relative min-h-dvh">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(immvelaJsonLd('de')) }}
      />
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[#f2f1e8]" />
        <ImmvelaField />
      </div>

      <div className="relative z-10">
        <ImmvelaHeader locale="de" />
        <main className="px-5 pb-10 pt-24 md:px-10 md:pt-28">
          <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
            <ImmvelaLanding locale="de" />
          </div>
        </main>
        <ImmvelaFooter locale="de" />
      </div>
    </div>
  )
}
