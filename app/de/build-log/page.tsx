import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Waitlist from '@/components/Waitlist'

export const metadata: Metadata = {
  title: { absolute: 'Build-Log — Agentische Immobilien-Suite (Early Access) | SNS Solutions' },
  description:
    'Ein agentisches OS für Immobilienmakler — vom Lead über das Inserat bis zum Abschluss. Sehen Sie die Roadmap und tragen Sie sich für den Early Access ein.',
  alternates: {
    canonical: '/de/build-log',
    languages: { en: '/build-log', de: '/de/build-log', 'x-default': '/build-log' },
  },
  openGraph: { locale: 'de_AT' },
}

export default function BuildLogPageDe() {
  return (
    <div lang="de">
      <Nav locale="de" />
      <main id="build-log" className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <Waitlist locale="de" />
        </div>
      </main>
      <Footer locale="de" showCta={false} />
    </div>
  )
}
