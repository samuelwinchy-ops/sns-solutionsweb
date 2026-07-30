import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Founders from '@/components/Founders'

export const metadata: Metadata = {
  title: 'Team',
  description:
    'Meet the founders of SNS Solutions: Samuel Winch (CTO), Nicholas Pellechi (CEO) and Samson Belachew (CSO), the team building custom software and AI automation in Vienna.',
  alternates: {
    canonical: '/team',
    languages: { en: '/team', de: '/de/team', 'x-default': '/team' },
  },
}

export default function TeamPage() {
  return (
    <>
      <Nav />
      <main id="team" className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <Founders />
        </div>
      </main>
      <Footer showCta={false} />
    </>
  )
}
