import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import CustomBuilds from '@/components/CustomBuilds'
import JsonLd from '@/components/JsonLd'
import { servicesGraph } from '@/lib/schema'
import { snsPage } from '@/lib/share'

export const metadata: Metadata = snsPage({
  locale: 'de',
  title: 'Leistungen',
  description:
    'Was SNS Solutions macht, klar erklärt: individuelle Software, KI-Automatisierung und KI- & IT-Beratung. Die Probleme, die wir lösen, und was Sie bekommen.',
  path: '/de/services',
  languages: { en: '/services', de: '/de/services', 'x-default': '/services' },
})

export default function ServicesPageDe() {
  return (
    <>
      <JsonLd data={servicesGraph('de')} />
      <Nav locale="de" />
      <main id="services" className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <Services locale="de" />
        </div>
        <CustomBuilds locale="de" />
      </main>
      <Footer showCta={false} locale="de" />
    </>
  )
}
