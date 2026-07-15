import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Solutions from '@/components/Solutions'

export const metadata: Metadata = {
  title: { absolute: 'HLK / SHK — KI-Rezeption für Heizung, Sanitär & Installation | SNS Solutions' },
  description:
    'Eine KI-Rezeption für HLK/SHK-Teams — beantwortet, qualifiziert und leitet jeden eingehenden Lead weiter, rund um die Uhr, auf Deutsch und Englisch. Gebaut für den DACH-Raum.',
  alternates: {
    canonical: '/de/solutions/hvac',
    languages: { en: '/solutions/hvac', de: '/de/solutions/hvac', 'x-default': '/solutions/hvac' },
  },
  openGraph: { locale: 'de_AT' },
}

export default function SolutionsHvacPageDe() {
  return (
    <div lang="de">
      <Nav locale="de" />
      <main id="solutions" className="relative px-5 pb-20 pt-32 md:px-10 md:pb-24 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <Solutions locale="de" industry="hvac" />
        </div>
      </main>
      <Footer locale="de" showCta={false} />
    </div>
  )
}
