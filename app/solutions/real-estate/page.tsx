import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Solutions from '@/components/Solutions'

export const metadata: Metadata = {
  title: 'Real estate — AI agents for sales, lettings & brokerage',
  description:
    'Modular AI agents for real-estate agencies — listing marketing, inbound handling, viewings and pre-close paperwork. Built for the DACH market, in German and English.',
  alternates: {
    canonical: '/solutions/real-estate',
    languages: {
      en: '/solutions/real-estate',
      de: '/de/solutions/real-estate',
      'x-default': '/solutions/real-estate',
    },
  },
}

export default function SolutionsRealEstatePage() {
  return (
    <>
      <Nav />
      <main id="solutions" className="relative px-5 pb-20 pt-32 md:px-10 md:pb-24 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <Solutions industry="realEstate" />
        </div>
      </main>
      <Footer showCta={false} />
    </>
  )
}
