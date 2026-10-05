import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SnsWebSiteSchema from '@/components/SnsWebSiteSchema'
import LogoHero from '@/components/home/LogoHero'
import LightGround from '@/components/home/LightGround'
import Integrations from '@/components/home/Integrations'
import LatestNews from '@/components/home/LatestNews'
import ConsultPanel from '@/components/home/ConsultPanel'
import '@/app/home.css'

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
      <Nav tone="dark" />
      <main className="hm">
        <LogoHero />
        <LightGround lift>
          <Integrations />
          <LatestNews />
          <ConsultPanel />
          <div className="hm-after" />
          <Footer showCta={false} />
        </LightGround>
      </main>
    </>
  )
}
