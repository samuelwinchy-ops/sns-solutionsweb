import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Solutions from '@/components/Solutions'

export const metadata: Metadata = {
  title: 'Solutions — AI Receptionist for trades & real estate',
  description:
    'An AI receptionist that answers, qualifies and routes every inbound lead — 24/7, in German and English. Built for HVAC/SHK and real estate in the DACH market.',
  alternates: {
    canonical: '/solutions',
    languages: { en: '/solutions', de: '/de/solutions', 'x-default': '/solutions' },
  },
}

export default function SolutionsPage() {
  return (
    <>
      <Nav />
      <main id="solutions" className="relative px-5 pb-28 pt-32 md:px-10 md:pb-24 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <Solutions />
        </div>
      </main>
      <Footer showCta={false} />
    </>
  )
}
