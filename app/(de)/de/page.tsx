import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SnsWebSiteSchema from '@/components/SnsWebSiteSchema'
import LogoHero from '@/components/home/LogoHero'
import LightGround from '@/components/home/LightGround'
import Integrations from '@/components/home/Integrations'
import LatestNews from '@/components/home/LatestNews'
import ConsultPanel from '@/components/home/ConsultPanel'
import { immvelaFonts } from '@/components/immvela/fonts'
import '@/app/home.css'

// Title, description and the Open Graph/Twitter cards are the German defaults
// from the (de) root layout (see lib/site.ts → SITE_COPY.de), so this page only
// has to declare where it sits in the language pair.

export const metadata: Metadata = {
  alternates: {
    canonical: '/de',
    languages: { en: '/', de: '/de', 'x-default': '/' },
  },
}

export default function HomeDe() {
  return (
    <>
      <SnsWebSiteSchema />
      <Nav locale="de" tone="dark" />
      <main className={`hm ${immvelaFonts}`}>
        <LogoHero locale="de" />
        <LightGround lift>
          <Integrations locale="de" />
          <LatestNews locale="de" />
          <ConsultPanel locale="de" />
          <div className="hm-after" />
          <Footer locale="de" showCta={false} />
        </LightGround>
      </main>
    </>
  )
}
