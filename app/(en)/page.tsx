import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ProductTiles from '@/components/ProductTiles'
import ConsultBand from '@/components/ConsultBand'
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
        <Hero />
        <ProductTiles />
        <ConsultBand />
      </main>
      <Footer showCta={false} />
    </>
  )
}
