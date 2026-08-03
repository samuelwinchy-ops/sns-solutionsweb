import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import HomeFocus from '@/components/HomeFocus'
import HowWeWork from '@/components/HowWeWork'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import KeyboardNav from '@/components/KeyboardNav'
import BuildAnnouncement from '@/components/BuildAnnouncement'
import SnsWebSiteSchema from '@/components/SnsWebSiteSchema'

export const metadata: Metadata = {
  title: {
    absolute: 'SNS Solutions | Individuelle Software, KI-Automatisierung & Beratung in Wien',
  },
  description:
    'SNS Solutions ist ein KI-Software-Studio in Wien. Wir entwickeln individuelle Software, KI-Automatisierung und KI- & IT-Beratung für Unternehmen. Leistungsstark im Kern, einfach an der Oberfläche.',
  alternates: {
    canonical: '/de',
    languages: { en: '/', de: '/de', 'x-default': '/' },
  },
  openGraph: { locale: 'de_AT' },
}

export default function HomeDe() {
  return (
    <div lang="de">
      <SnsWebSiteSchema locale="de" />
      <Nav locale="de" />
      <ScrollProgress />
      <KeyboardNav />
      <main>
        <Hero locale="de" />
        <HomeFocus locale="de" />
        <HowWeWork locale="de" />
      </main>
      <Footer locale="de" />
      <BuildAnnouncement locale="de" />
    </div>
  )
}
