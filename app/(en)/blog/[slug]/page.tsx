import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import BlogPostCard, { BlogPostMeta } from '@/components/BlogPostCard'
import { CTA_PRIMARY } from '@/lib/cta'
import { SITE_URL } from '@/lib/site'
import { blogPostGraph } from '@/lib/schema'
import { BLOG_POSTS, getPost, getRelatedPosts, type BlogSection } from '@/lib/blog'

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug)
  if (!post) return {}

  const url = `/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url: `${SITE_URL}${url}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      images: [{ url: '/og.png', width: 1200, height: 630, alt: post.title }],
    },
  }
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.5 8.5 6.5 11.5 12.5 4.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M3 7h8M7.5 3.5 11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SectionBody({ section }: { section: BlogSection }) {
  const List = section.ordered ? 'ol' : 'ul'
  return (
    <>
      <h2>{section.heading}</h2>
      {section.paragraphs?.map((p) => (
        <p key={p}>{p}</p>
      ))}
      {section.bullets && (
        <List>
          {section.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </List>
      )}
    </>
  )
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(post)

  return (
    <>
      <JsonLd data={blogPostGraph('en', post)} />
      <Nav />
      <main className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <article className="mx-auto w-full max-w-3xl">
          <Link
            href="/blog"
            className="mb-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-sns-muted transition-colors duration-150 hover:text-sns-text"
          >
            ← Blog
          </Link>

          <header>
            <p className="eyebrow mb-3">{post.eyebrow}</p>
            <h1 className="page-title text-sns-text">{post.title}</h1>
            <div className="mt-5">
              <BlogPostMeta post={post} />
            </div>
          </header>

          <div className="article-prose mt-10">
            <p className="lede">{post.intro[0]}</p>
            {post.intro.slice(1).map((p) => (
              <p key={p}>{p}</p>
            ))}

            {post.sections.map((section) => (
              <SectionBody key={section.heading} section={section} />
            ))}
          </div>

          {post.takeaways.length > 0 && (
            <div className="sns-card mt-12 p-6 md:p-8">
              <h2 className="mb-4 text-lg font-bold text-sns-text">In short</h2>
              <ul className="flex flex-col gap-3">
                {post.takeaways.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sns-text">
                    <span className="mt-1 shrink-0 text-sns-muted" aria-hidden="true">
                      <CheckIcon />
                    </span>
                    <span className="leading-snug">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {post.faq.length > 0 && (
            <div className="article-prose mt-12">
              <h2>Frequently asked questions</h2>
              {post.faq.map((f) => (
                <div key={f.q}>
                  <h3 className="text-base font-semibold text-sns-text">{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          )}

          <div className="sns-card mt-12 flex flex-col items-start justify-between gap-6 p-6 md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="section-title text-sns-text">{post.cta.heading}</h2>
              <p className="mt-2 text-sns-muted">{post.cta.sub}</p>
            </div>
            {post.cta.external ? (
              <a
                href={post.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${CTA_PRIMARY} shrink-0`}
              >
                {post.cta.label}
                <ArrowIcon />
              </a>
            ) : (
              <Link href={post.cta.href} className={`${CTA_PRIMARY} shrink-0`}>
                {post.cta.label}
                <ArrowIcon />
              </Link>
            )}
          </div>
        </article>

        {related.length > 0 && (
          <div className="mx-auto mt-16 w-full max-w-6xl 2xl:max-w-7xl">
            <h2 className="section-title mb-8 text-sns-text">Related reading</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((p) => (
                <BlogPostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer showCta={false} />
    </>
  )
}
