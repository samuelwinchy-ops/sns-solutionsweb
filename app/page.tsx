import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import WhatWeDo from '@/components/WhatWeDo'
import Terminal from '@/components/Terminal'
import Team from '@/components/Team'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import KeyboardNav from '@/components/KeyboardNav'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: { en: '/', de: '/de', 'x-default': '/' },
  },
}

export default function Home() {
  return (
    <>
      <Nav />
      <ScrollProgress />
      <KeyboardNav />
      <main>
        <Hero />
        <WhatWeDo />
        <Terminal />
        <Team />
      </main>
      <Footer />
    </>
  )
}
