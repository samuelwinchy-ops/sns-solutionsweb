import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Solutions from '@/components/Solutions'

export const metadata: Metadata = {
  title: 'HVAC / SHK — AI Receptionist for heating, plumbing & installation',
  description:
    'An AI receptionist for HVAC/SHK teams — answers, qualifies and routes every inbound lead 24/7, in German and English. Built for the DACH market.',
  alternates: {
    canonical: '/solutions/hvac',
    languages: { en: '/solutions/hvac', de: '/de/solutions/hvac', 'x-default': '/solutions/hvac' },
  },
}

export default function SolutionsHvacPage() {
  return (
    <>
      <Nav />
      <main id="solutions" className="relative px-5 pb-20 pt-32 md:px-10 md:pb-24 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <Solutions industry="hvac" />
        </div>
      </main>
      <Footer showCta={false} />
    </>
  )
}
