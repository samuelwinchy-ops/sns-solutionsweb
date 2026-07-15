import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SolutionsIndex from '@/components/SolutionsIndex'

export const metadata: Metadata = {
  title: { absolute: 'Lösungen — KI-Rezeption für Handwerk & Immobilien | SNS Solutions' },
  description:
    'Eine KI-Rezeption, die jeden eingehenden Lead beantwortet, qualifiziert und weiterleitet — rund um die Uhr, auf Deutsch und Englisch. Gebaut für HLK/SHK und Immobilien im DACH-Raum.',
  alternates: {
    canonical: '/de/solutions',
    languages: { en: '/solutions', de: '/de/solutions', 'x-default': '/solutions' },
  },
  openGraph: { locale: 'de_AT' },
}

export default function SolutionsPageDe() {
  return (
    <div lang="de">
      <Nav locale="de" />
      <main id="solutions" className="relative px-5 pb-20 pt-32 md:px-10 md:pb-24 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <SolutionsIndex locale="de" />
        </div>
      </main>
      <Footer locale="de" showCta={false} />
    </div>
  )
}
