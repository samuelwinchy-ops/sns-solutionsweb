import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Waitlist from '@/components/Waitlist'

export const metadata: Metadata = {
  title: 'HVAC / SHK roadmap — join the early-access list',
  description:
    'An AI receptionist and back-office for HVAC/SHK teams — inbound handling ships today; scheduling and post-install compliance are on the roadmap. See what’s shipping and join the early-access list.',
  alternates: {
    canonical: '/solutions/hvac/waitlist',
    languages: {
      en: '/solutions/hvac/waitlist',
      de: '/de/solutions/hvac/waitlist',
      'x-default': '/solutions/hvac/waitlist',
    },
  },
}

export default function HvacWaitlistPage() {
  return (
    <>
      <Nav />
      <main id="roadmap" className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <Waitlist industry="hvac" />
        </div>
      </main>
      <Footer showCta={false} />
    </>
  )
}
