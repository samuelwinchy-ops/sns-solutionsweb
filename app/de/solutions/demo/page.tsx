import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SolutionsDemo from '@/components/SolutionsDemo'

export const metadata: Metadata = {
  title: { absolute: 'Live-Demo — Sprach- & Chat-Agent | SNS Solutions' },
  description:
    'Sehen Sie, wie der Agent einen echten Lead nach Feierabend per Telefonanruf oder Chat annimmt, qualifiziert und an einen Menschen übergibt. Ohne Anmeldung.',
  alternates: {
    canonical: '/de/solutions/demo',
    languages: { en: '/solutions/demo', de: '/de/solutions/demo', 'x-default': '/solutions/demo' },
  },
  openGraph: { locale: 'de_AT' },
}

export default function SolutionsDemoPageDe() {
  return (
    <div lang="de">
      <Nav locale="de" />
      <main className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <SolutionsDemo locale="de" />
        </div>
      </main>
      <Footer locale="de" showCta={false} />
    </div>
  )
}
