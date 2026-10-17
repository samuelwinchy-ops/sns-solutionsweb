import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LightGround from '@/components/home/LightGround'
import ProductBoxes from '@/components/ProductBoxes'
import { getDict } from '@/i18n'
import { immvelaFonts } from '@/components/immvela/fonts'
import '@/app/home.css'
import { snsPage } from '@/lib/share'
import JsonLd from '@/components/JsonLd'
import { productsGraph } from '@/lib/schema'

const t = getDict('en').productsPage

export const metadata: Metadata = snsPage({
  locale: 'en',
  title: t.title,
  description: t.description,
  path: '/products',
  languages: { en: '/products', de: '/de/products', 'x-default': '/products' },
  card: 'products',
})

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={productsGraph('en')} />
      <Nav />
      <main className={`hm ${immvelaFonts}`}>
        <LightGround>
          <div className="hm-products">
            <header className="hm-products-head hm-glass">
              <h1>{t.heading}</h1>
              <p>{t.line}</p>
            </header>
            <ProductBoxes />
          </div>
          <Footer showCta={false} />
        </LightGround>
      </main>
    </>
  )
}
