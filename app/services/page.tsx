import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Services from '@/components/Services'

export const metadata: Metadata = {
  title: 'Services',
  description:
    "What SNS Solutions does, in plain terms: custom software, AI automation, and AI & IT consulting. The problems we solve, and what you get.",
  alternates: {
    canonical: '/services',
    languages: { en: '/services', de: '/de/services', 'x-default': '/services' },
  },
}

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main id="services" className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <Services />
        </div>
      </main>
      <Footer showCta={false} />
    </>
  )
}
