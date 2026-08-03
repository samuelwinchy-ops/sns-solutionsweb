import type { Metadata, Viewport } from 'next'
import ImmvelaField from '@/components/ImmvelaField'
import ImmvelaHeader from '@/components/ImmvelaHeader'
import ImmvelaFooter from '@/components/ImmvelaFooter'
import ImmvelaDemo from '@/components/ImmvelaDemo'
import { IMMVELA_URL } from '@/lib/site'

// See app/immvela/demo/page.tsx — canonical is the public /de/demo path on
// immvela.com, not this internal route.
export const metadata: Metadata = {
  title: { absolute: 'Immvela · jedes Modul, in Betrieb' },
  description:
    'Sehen Sie jedem Immvela-Modul an einem echten Objekt bei der Arbeit zu: Listing Kit, Veröffentlichung, Empfang, Wissen, Staging, Rundgang und Dokumente. Ohne Anmeldung.',
  applicationName: 'Immvela',
  // See app/immvela/page.tsx — the root layout's manifest is SNS-branded.
  manifest: '/immvela.webmanifest',
  alternates: {
    canonical: `${IMMVELA_URL}/de/demo`,
    languages: {
      en: `${IMMVELA_URL}/demo`,
      de: `${IMMVELA_URL}/de/demo`,
      'x-default': `${IMMVELA_URL}/demo`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    siteName: 'Immvela',
    title: 'Immvela · jedes Modul, in Betrieb',
    description: 'Wählen Sie ein Modul und sehen Sie ihm an einem echten Objekt bei der Arbeit zu. Ohne Anmeldung.',
    url: `${IMMVELA_URL}/de/demo`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Immvela · jedes Modul, in Betrieb',
    description: 'Wählen Sie ein Modul und sehen Sie ihm an einem echten Objekt bei der Arbeit zu. Ohne Anmeldung.',
  },
}

export const viewport: Viewport = {
  themeColor: '#f2f1e8',
  colorScheme: 'light',
}

export default function ImmvelaDemoPageDe() {
  return (
    <div lang="de" className="immvela-theme relative min-h-dvh">
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[#f2f1e8]" />
        <ImmvelaField />
      </div>

      <div className="relative z-10">
        <ImmvelaHeader locale="de" subpage />
        <main className="px-5 pb-10 pt-24 md:px-10 md:pt-28">
          <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
            <ImmvelaDemo locale="de" />
          </div>
        </main>
        <ImmvelaFooter locale="de" />
      </div>
    </div>
  )
}
