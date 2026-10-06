import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LightGround from '@/components/home/LightGround'
import ProductBoxes from '@/components/ProductBoxes'
import { getDict } from '@/i18n'
import { immvelaFonts } from '@/components/immvela/fonts'
import '@/app/home.css'
import { snsPage } from '@/lib/share'

const t = getDict('de').productsPage

export const metadata: Metadata = snsPage({
  locale: 'de',
  title: t.title,
  description: t.description,
  path: '/de/products',
  languages: { en: '/products', de: '/de/products', 'x-default': '/products' },
  card: 'products',
})

export default function ProductsPageDe() {
  return (
    <>
      <Nav locale="de" />
      <main className={`hm ${immvelaFonts}`}>
        <LightGround>
          <div className="hm-products">
            <header className="hm-products-head hm-glass">
              <h1>{t.heading}</h1>
              <p>{t.line}</p>
            </header>
            <ProductBoxes locale="de" />
          </div>
          <Footer locale="de" showCta={false} />
        </LightGround>
      </main>
    </>
  )
}
