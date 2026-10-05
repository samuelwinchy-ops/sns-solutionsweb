import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CinemaHero from '@/components/CinemaHero'
import HomeChapters from '@/components/HomeChapters'
import Footer from '@/components/Footer'
import SnsWebSiteSchema from '@/components/SnsWebSiteSchema'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: { en: '/', de: '/de', 'x-default': '/' },
  },
}

export default function Home() {
  return (
    <>
      <SnsWebSiteSchema />
      <Nav />
      <main>
        <CinemaHero />
        <HomeChapters />
      </main>
      <Footer showCta={false} />
    </>
  )
}
