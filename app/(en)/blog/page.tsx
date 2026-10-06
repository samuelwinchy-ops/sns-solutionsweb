import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import BlogPostCard, { BlogArrowIcon } from '@/components/BlogPostCard'
import { blogIndexGraph } from '@/lib/schema'
import { sortedPosts } from '@/lib/blog'
import { IMMVELA_URL } from '@/lib/site'
import { snsPage } from '@/lib/share'

export const metadata: Metadata = snsPage({
  locale: 'en',
  title: 'Blog',
  description:
    'Notes from SNS Solutions on the problems behind our products: Immvela for estate agents, and QFUtool for salespeople chasing quotes.',
  path: '/blog',
})

// The blog is filed by product, the way a parent company's newsroom is: each
// post belongs to exactly one of them (`product` in lib/blog.ts), and the
// sections never mix — an estate agent and a salesperson chasing quotes are
// different readers, and neither should have to wade through the other's posts.
const SECTIONS = [
  {
    product: 'immvela' as const,
    name: 'Immvela',
    audience: 'For estate agents',
    href: IMMVELA_URL,
    linkLabel: 'Visit Immvela',
  },
  {
    product: 'qfutool' as const,
    name: 'QFUtool',
    audience: 'For salespeople',
    href: 'https://www.qfutool.com/',
    linkLabel: 'Visit QFUtool',
  },
]

export default function BlogIndexPage() {
  const posts = sortedPosts()

  return (
    <>
      <JsonLd data={blogIndexGraph('en')} />
      <Nav />
      <main id="blog" className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <p className="eyebrow mb-4">Blog</p>
            <h1 className="page-title text-sns-text">Notes from SNS.</h1>
            <p className="mt-6 text-lg leading-relaxed text-sns-muted">
              What we’ve learned building our products, written the way we’d explain it on a call:
              the actual problem first, and what a fix looks like — not the pitch.
            </p>
          </div>

          <div className="flex flex-col gap-20">
            {SECTIONS.map((sec) => {
              const list = posts.filter((p) => p.product === sec.product)
              if (!list.length) return null
              return (
                <section key={sec.product} aria-labelledby={`blog-${sec.product}`}>
                  <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-sns-border pb-4">
                    <div>
                      <p className="eyebrow mb-2">{sec.audience}</p>
                      <h2 id={`blog-${sec.product}`} className="section-title text-sns-text">
                        {sec.name}
                      </h2>
                    </div>
                    <a
                      href={sec.href}
                      target="_blank"
                      rel="noopener"
                      className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-sns-action underline-offset-4 hover:underline"
                    >
                      {sec.linkLabel}
                      <BlogArrowIcon />
                    </a>
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {list.map((post) => (
                      <BlogPostCard key={post.slug} post={post} />
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
