import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Waitlist from '@/components/Waitlist'

export const metadata: Metadata = {
  title: { absolute: 'HLK / SHK Roadmap — auf die Early-Access-Liste | SNS Solutions' },
  description:
    'Eine KI-Rezeption und ein Back-Office für HLK/SHK-Teams — das Anfragen-Handling ist schon heute verfügbar; Terminplanung und Compliance stehen auf der Roadmap. Tragen Sie sich für den Early Access ein.',
  alternates: {
    canonical: '/de/solutions/hvac/waitlist',
    languages: {
      en: '/solutions/hvac/waitlist',
      de: '/de/solutions/hvac/waitlist',
      'x-default': '/solutions/hvac/waitlist',
    },
  },
  openGraph: { locale: 'de_AT' },
}

export default function HvacWaitlistPageDe() {
  return (
    <div lang="de">
      <Nav locale="de" />
      <main id="roadmap" className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <Waitlist locale="de" industry="hvac" />
        </div>
      </main>
      <Footer locale="de" showCta={false} />
    </div>
  )
}
