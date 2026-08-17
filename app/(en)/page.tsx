import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import HomeFocus from '@/components/HomeFocus'
import CustomBuilds from '@/components/CustomBuilds'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import KeyboardNav from '@/components/KeyboardNav'
import BuildAnnouncement from '@/components/BuildAnnouncement'
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
      <ScrollProgress />
      <KeyboardNav />
      <main>
        <Hero />
        <HomeFocus />
        <CustomBuilds />
      </main>
      <Footer showCta={false} />
      <BuildAnnouncement />
    </>
  )
}
