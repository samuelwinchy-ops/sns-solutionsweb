import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import LightGround from '@/components/home/LightGround'
import ProductBoxes from '@/components/ProductBoxes'
import { getDict } from '@/i18n'
import '@/app/home.css'

const t = getDict('en').productsPage

export const metadata: Metadata = {
  title: t.title,
  description: t.description,
  alternates: {
    canonical: '/products',
    languages: { en: '/products', de: '/de/products', 'x-default': '/products' },
  },
}

export default function ProductsPage() {
  return (
    <>
      <Nav />
      <main className="hm">
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
