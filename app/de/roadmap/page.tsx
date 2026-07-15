import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Waitlist from '@/components/Waitlist'

export const metadata: Metadata = {
  title: { absolute: 'Roadmap — was wir bauen | SNS Solutions' },
  description:
    'Ein agentisches OS für Immobilienmakler — vom Lead über das Inserat bis zum Abschluss. Sehen Sie die Roadmap und tragen Sie sich für den Early Access ein.',
  alternates: {
    canonical: '/de/roadmap',
    languages: { en: '/roadmap', de: '/de/roadmap', 'x-default': '/roadmap' },
  },
  openGraph: { locale: 'de_AT' },
}

export default function RoadmapPageDe() {
  return (
    <div lang="de">
      <Nav locale="de" />
      <main id="roadmap" className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <Waitlist locale="de" />
        </div>
      </main>
      <Footer locale="de" showCta={false} />
    </div>
  )
}
