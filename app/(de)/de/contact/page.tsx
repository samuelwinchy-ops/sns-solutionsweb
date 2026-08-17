import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactContent from '@/components/ContactContent'
import JsonLd from '@/components/JsonLd'
import { contactGraph } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Starten Sie ein Projekt mit SNS Solutions — individuelle Software, KI-Automatisierung und KI- & IT-Beratung. Sagen Sie uns, was Sie bauen, und wir sagen Ihnen, wie wir es angehen würden.',
  alternates: {
    canonical: '/de/contact',
    languages: { en: '/contact', de: '/de/contact', 'x-default': '/contact' },
  },
}

export default function ContactPageDe() {
  return (
    <>
      <JsonLd data={contactGraph('de')} />
      <Nav locale="de" />
      <main className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <ContactContent locale="de" />
        </div>
      </main>
      <Footer showCta={false} locale="de" />
    </>
  )
}
