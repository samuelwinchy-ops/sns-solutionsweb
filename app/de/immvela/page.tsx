import type { Metadata, Viewport } from 'next'
import ImmvelaField from '@/components/ImmvelaField'
import ImmvelaHeader from '@/components/ImmvelaHeader'
import ImmvelaFooter from '@/components/ImmvelaFooter'
import ImmvelaLanding from '@/components/ImmvelaLanding'

export const metadata: Metadata = {
  title: { absolute: 'Immvela — das agentenbasierte Betriebssystem für Immobilien | SNS Solutions' },
  description:
    'Immvela ist der durchgängige KI-Agent für Immobilienteams — vom Lead über das Inserat bis zum Abschluss. Offen entwickelt von SNS Solutions. Tragen Sie sich für den Early Access ein.',
  alternates: {
    canonical: '/de/immvela',
    languages: { en: '/immvela', de: '/de/immvela', 'x-default': '/immvela' },
  },
  openGraph: {
    locale: 'de_AT',
    title: 'Immvela — das agentenbasierte Betriebssystem für Immobilien',
    description:
      'Der durchgängige KI-Agent für Immobilienteams. Offen entwickelt von SNS Solutions. Auf die Warteliste.',
  },
}

export const viewport: Viewport = {
  themeColor: '#f2f1e8',
  colorScheme: 'light',
}

export default function ImmvelaPageDe() {
  return (
    <div lang="de" className="immvela-theme relative min-h-dvh">
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
