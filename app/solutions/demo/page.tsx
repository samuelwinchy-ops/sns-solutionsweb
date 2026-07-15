import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SolutionsDemo from '@/components/SolutionsDemo'

export const metadata: Metadata = {
  title: 'Live demo — voice & chat inbound agent',
  description:
    'Watch the inbound agent handle a real after-hours lead by voice call or chat — qualify it and hand it to a human. No signup.',
  alternates: {
    canonical: '/solutions/demo',
    languages: { en: '/solutions/demo', de: '/de/solutions/demo', 'x-default': '/solutions/demo' },
  },
}

export default function SolutionsDemoPage() {
  return (
    <>
      <Nav />
      <main className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <SolutionsDemo />
        </div>
      </main>
      <Footer showCta={false} />
    </>
  )
}
