import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import BlogPostCard, { BlogArrowIcon, BlogPostMeta } from '@/components/BlogPostCard'
import { blogIndexGraph } from '@/lib/schema'
import { sortedPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'SNS Solutions on AI infrastructure for real estate and service businesses: Immvela, data fragmentation, QFUtool, and where AI outbound is headed.',
  alternates: { canonical: '/blog' },
}

export default function BlogIndexPage() {
  const posts = sortedPosts()
  const featured = posts.find((p) => p.featured) ?? posts[0]
  const rest = posts.filter((p) => p.slug !== featured.slug)

  return (
    <>
      <JsonLd data={blogIndexGraph('en')} />
      <Nav />
      <main id="blog" className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
              <span className="h-px w-8 bg-sns-indigo/50" />
              Blog
            </p>
            <h1 className="text-[2.4rem] font-bold leading-[1.05] tracking-[-0.02em] text-sns-text md:text-5xl">
              Straight answers on AI infrastructure, real estate and HVAC automation.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-sns-muted">
              What we’ve learned building Immvela and QFUtool, written the way we’d explain it on a call: the actual problem first, and what a fix looks like — not the pitch.
            </p>
          </div>

          <Link
            href={`/blog/${featured.slug}`}
            className={`lift lift-${featured.accent} lift-hover group relative mb-14 block p-7 md:p-10`}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
              <div>
                <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-sns-indigo/30 bg-sns-indigo/[0.1] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-sns-accent">
                  Start here · {featured.eyebrow}
                </span>
                <h2 className="text-2xl font-bold leading-tight tracking-[-0.02em] text-sns-text md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-sns-muted">
                  {featured.description}
                </p>
                <div className="mt-5">
                  <BlogPostMeta post={featured} />
                </div>
              </div>
              <span className="flex shrink-0 items-center gap-1.5 font-mono text-sm font-semibold text-sns-accent">
                Read the piece
                <BlogArrowIcon />
              </span>
            </div>
          </Link>

          <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-sns-faint">
            More from the blog
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
