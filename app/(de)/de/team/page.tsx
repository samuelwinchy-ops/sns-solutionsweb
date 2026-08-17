import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Founders from '@/components/Founders'
import JsonLd from '@/components/JsonLd'
import { teamGraph } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Lernen Sie die Gründer von SNS Solutions kennen — Samuel Winch (CTO), Nicholas Pellechi (CEO) und Samson Belachew (CSO), das Team hinter individueller Software und KI-Automatisierung in Wien.',
  alternates: {
    canonical: '/de/team',
    languages: { en: '/team', de: '/de/team', 'x-default': '/team' },
  },
}

export default function TeamPageDe() {
  return (
    <>
      <JsonLd data={teamGraph('de')} />
      <Nav locale="de" />
      <main id="team" className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <Founders locale="de" />
        </div>
      </main>
      <Footer showCta={false} locale="de" />
    </>
  )
}
