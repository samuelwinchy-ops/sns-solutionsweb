import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Services from '@/components/Services'

export const metadata: Metadata = {
  title: 'Leistungen',
  description:
    'Was SNS Solutions macht, klar erklärt: individuelle Software, KI-Automatisierung und KI- & IT-Beratung — die Probleme, die wir lösen, und was Sie bekommen.',
  alternates: {
    canonical: '/de/services',
    languages: { en: '/services', de: '/de/services', 'x-default': '/services' },
  },
  openGraph: { locale: 'de_AT' },
}

export default function ServicesPageDe() {
  return (
    <div lang="de">
      <Nav locale="de" />
      <main id="services" className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <Services locale="de" />
        </div>
      </main>
      <Footer showCta={false} locale="de" />
    </div>
  )
}
