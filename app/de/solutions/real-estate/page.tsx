import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Solutions from '@/components/Solutions'

export const metadata: Metadata = {
  title: { absolute: 'Immobilien — KI-Agenten für Verkauf, Vermietung & Makler | SNS Solutions' },
  description:
    'Modulare KI-Agenten für Immobilienbüros — Listing-Marketing, Inbound-Handling, Besichtigungen und Unterlagen vor dem Abschluss. Gebaut für den DACH-Raum, auf Deutsch und Englisch.',
  alternates: {
    canonical: '/de/solutions/real-estate',
    languages: {
      en: '/solutions/real-estate',
      de: '/de/solutions/real-estate',
      'x-default': '/solutions/real-estate',
    },
  },
  openGraph: { locale: 'de_AT' },
}

export default function SolutionsRealEstatePageDe() {
  return (
    <div lang="de">
      <Nav locale="de" />
      <main id="solutions" className="relative px-5 pb-20 pt-32 md:px-10 md:pb-24 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <Solutions locale="de" industry="realEstate" />
        </div>
      </main>
      <Footer locale="de" showCta={false} />
    </div>
  )
}
