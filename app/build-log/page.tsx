import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Waitlist from '@/components/Waitlist'

export const metadata: Metadata = {
  title: 'Build log — Real-estate agentic suite (early access)',
  description:
    'An agentic OS for real-estate agents — from lead to listing to close. See the roadmap and join the early-access waitlist.',
  alternates: {
    canonical: '/build-log',
    languages: { en: '/build-log', de: '/de/build-log', 'x-default': '/build-log' },
  },
}

export default function BuildLogPage() {
  return (
    <>
      <Nav />
      <main id="build-log" className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <Waitlist />
        </div>
      </main>
      <Footer showCta={false} />
    </>
  )
}
