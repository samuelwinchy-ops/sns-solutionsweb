import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SolutionsIndex from '@/components/SolutionsIndex'

export const metadata: Metadata = {
  title: 'Products · AI agents for trades & real estate',
  description:
    'AI agents for HVAC/SHK and real estate in the DACH market: inbound handling that qualifies and routes every lead around the clock, and Immvela, our platform for real-estate teams.',
  alternates: {
    canonical: '/solutions',
    languages: { en: '/solutions', de: '/de/solutions', 'x-default': '/solutions' },
  },
}

export default function SolutionsPage() {
  return (
    <>
      <Nav />
      <main id="solutions" className="relative px-5 pb-20 pt-32 md:px-10 md:pb-24 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <SolutionsIndex />
        </div>
      </main>
      <Footer showCta={false} />
    </>
  )
}
