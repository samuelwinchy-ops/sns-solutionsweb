import Link from 'next/link'
import type { BlogPost } from '@/lib/blog'

export const blogDateFmt = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export function BlogArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-300 ease-sns-out group-hover:translate-x-1"
    >
      <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function BlogPostMeta({ post }: { post: BlogPost }) {
  return (
    <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[11px] uppercase tracking-[0.15em] text-sns-faint">
      <time dateTime={post.date}>{blogDateFmt.format(new Date(post.date))}</time>
      <span aria-hidden="true">·</span>
      <span>{post.readTime}</span>
    </p>
  )
}

/** The card used for every post listing — the index grid and each post's "related" rail. */
export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`lift lift-${post.accent} lift-hover group flex flex-col p-6 md:p-7`}
    >
      <span className="mb-3 inline-flex w-fit items-center rounded-full border border-sns-text/10 bg-white/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-sns-accent">
        {post.eyebrow}
      </span>
      <h3 className="text-lg font-bold leading-snug tracking-[-0.01em] text-sns-text">{post.title}</h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-sns-muted">{post.description}</p>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-sns-text/[0.08] pt-4">
        <BlogPostMeta post={post} />
        <span className="flex items-center gap-1.5 font-mono text-xs font-semibold text-sns-accent">
          Read
          <BlogArrowIcon />
        </span>
      </div>
    </Link>
  )
}
