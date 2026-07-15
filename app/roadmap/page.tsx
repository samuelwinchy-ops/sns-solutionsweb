import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Waitlist from '@/components/Waitlist'

export const metadata: Metadata = {
  title: 'Roadmap — what we’re building',
  description:
    'An agentic OS for real-estate agents — from lead to listing to close. See what’s shipping, what’s in progress, and join the early-access list.',
  alternates: {
    canonical: '/roadmap',
    languages: { en: '/roadmap', de: '/de/roadmap', 'x-default': '/roadmap' },
  },
}

export default function RoadmapPage() {
  return (
    <>
      <Nav />
      <main id="roadmap" className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <Waitlist />
        </div>
      </main>
      <Footer showCta={false} />
    </>
  )
}
