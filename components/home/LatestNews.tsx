import Image from 'next/image'
import type { CSSProperties, ReactNode } from 'react'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, immvelaHref } from '@/i18n/config'
import { sortedPosts, type BlogProduct } from '@/lib/blog'

/*
 * News and updates, set like a magazine page: the newest item as the lead, the blog posts beside it.
 * Updates show a real product moment; articles get a typographic cover, the article's idea set large on
 * its own ground, so no two look alike. No stock or generated images. Articles are English only.
 */

const UPDATE = {
  date: '2026-10-04',
  image: '/news/immvela-com-hero-2026-10-06.jpg',
  width: 1120,
  height: 816,
}

const BRICO = 'var(--font-bricolage), var(--font-geist-sans), sans-serif'
const ARCHIVO = 'var(--font-archivo), var(--font-jakarta), sans-serif'
const SERIF = 'var(--font-newsreader), Georgia, serif'

type Cover = {
  ground: string
  ink: string
  font: string
  size: string
  weight?: number
  italic?: boolean
  lines: ReactNode[]
}
const COVERS: Record<string, Cover> = {
  'ai-infrastructure-for-real-estate-agencies': {
    ground: '#e3efe8',
    ink: '#14473a',
    font: BRICO,
    size: '11.5cqw',
    weight: 700,
    lines: ['AI', 'infrastructure'],
  },
  'ai-outbound-for-service-businesses': {
    ground: '#23384a',
    ink: '#f3f6f8',
    font: ARCHIVO,
    size: '15cqw',
    weight: 700,
    lines: [
      'Follow-up',
      <span key="o" style={{ color: '#ec7458' }}>
        → Outbound
      </span>,
    ],
  },
  'qfutool-automated-quote-follow-up': {
    ground: '#fbe3dc',
    ink: '#23384a',
    font: ARCHIVO,
    size: '16cqw',
    weight: 700,
    lines: [
      'The quotes',
      <span key="n" style={{ color: '#a63821' }}>
        nobody
      </span>,
      'chases',
    ],
  },
  'why-quotes-go-unanswered': {
    ground: '#e6ecf1',
    ink: '#23384a',
    font: SERIF,
    size: '18cqw',
    lines: ['After the', 'quote goes', 'out'],
  },
  'immvela-one-record-real-estate-operating-system': {
    ground: '#14473a',
    ink: '#f2f1e8',
    font: BRICO,
    size: '19cqw',
    weight: 700,
    lines: [
      'One',
      <span key="v" style={{ color: '#57c08e' }}>
        verified
      </span>,
      'record',
    ],
  },
  'real-estate-data-fragmentation': {
    ground: '#f2f1e8',
    ink: '#14473a',
    font: SERIF,
    size: '20cqw',
    italic: true,
    lines: ['The real', 'data', 'problem'],
  },
}
const FALLBACK: Cover = { ground: '#e6ecf1', ink: '#0b1f44', font: SERIF, size: '14cqw', lines: [] }

const TAG: Record<BlogProduct, { label: string; cls: string }> = {
  immvela: { label: 'Immvela', cls: 'hm-tag-imv' },
  qfutool: { label: 'QFUtool', cls: 'hm-tag-qfu' },
}

function TypeCover({ slug, title }: { slug: string; title: string }) {
  const c = COVERS[slug] ?? { ...FALLBACK, lines: [title] }
  const style: CSSProperties = {
    background: c.ground,
    color: c.ink,
    fontFamily: c.font,
    fontWeight: c.weight ?? 400,
    fontStyle: c.italic ? 'italic' : 'normal',
    fontSize: c.size,
  }
  return (
    <span className="hm-type" style={style} aria-hidden="true">
      <span>
        {c.lines.map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </span>
    </span>
  )
}

export default function LatestNews({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).home
  const fmt = new Intl.DateTimeFormat(locale === 'de' ? 'de-AT' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
  const date = (iso: string) => fmt.format(new Date(`${iso}T12:00:00Z`))

  return (
    <section className="hm-news" aria-labelledby="hm-news-h">
      <div className="hm-news-head">
        <p className="hm-eyebrow">{t.latestEyebrow}</p>
        <h2 className="hm-h2" id="hm-news-h">
          {t.latestHeading}
        </h2>
        {t.articlesInEnglish && <p className="hm-news-note">{t.articlesInEnglish}</p>}
      </div>
      <ul className="hm-grid">
        <li>
          <a className="hm-card" href={immvelaHref(locale)}>
            <span className="hm-cov">
              <Image
                src={UPDATE.image}
                alt={t.updateAlt}
                width={UPDATE.width}
                height={UPDATE.height}
                sizes="(max-width: 960px) 100vw, 46vw"
              />
            </span>
            <span className="hm-cb">
              <span className={`hm-tag ${TAG.immvela.cls}`}>{TAG.immvela.label}</span>
              <span className="hm-ct">{t.updateTitle}</span>
              <span className="hm-cd">
                <time dateTime={UPDATE.date}>{date(UPDATE.date)}</time>
              </span>
            </span>
          </a>
        </li>
        {sortedPosts().map((post) => (
          <li key={post.slug}>
            <a className="hm-card" href={`/blog/${post.slug}`} hrefLang="en">
              <span className="hm-cov" style={{ containerType: 'inline-size' }}>
                <TypeCover slug={post.slug} title={post.title} />
              </span>
              <span className="hm-cb">
                <span className={`hm-tag ${TAG[post.product].cls}`}>{TAG[post.product].label}</span>
                <span className="hm-ct" lang="en">
                  {post.title}
                </span>
                <span className="hm-cd">
                  <time dateTime={post.date}>{date(post.date)}</time>
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
