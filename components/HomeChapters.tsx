import Image from 'next/image'
import Link from 'next/link'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, immvelaHref, localePath } from '@/i18n/config'
import { sortedPosts } from '@/lib/blog'
import { CTA_PRIMARY } from '@/lib/cta'

const QFUTOOL_URL = 'https://www.qfutool.com'

/**
 * The homepage below the slideshow: one chapter per product, each in its own
 * brand, then the newsroom, the consulting offer and a closing ask.
 *
 * The chapters annotate the product with numbered markers on the screen and a
 * matching legend, rather than leader lines: markers sit at fractions of the
 * capture, so they stay on their card at any width, and the legend reflows on
 * a phone. Every Immvela module is shown, in development or not.
 */
export default function HomeChapters({ locale = defaultLocale }: { locale?: Locale }) {
  const dict = getDict(locale)
  const c = dict.chapters

  // Just outside the top-left corner of each card on the Manual capture, as
  // fractions of its width and height (Dossier, Quill, Vignette, Immerse,
  // Verlag — the order of the callouts). The German Quill card wraps to an
  // extra line, so it sits higher.
  const de = locale === 'de'
  const marks = [
    { x: 0.064, y: 0.258 },
    { x: 0.434, y: de ? 0.204 : 0.224 },
    { x: 0.434, y: 0.625 },
    { x: de ? 0.277 : 0.286, y: 0.648 },
    { x: 0.066, y: 0.625 },
  ]
  const posts = sortedPosts().slice(0, 3)

  return (
    <>
      {/* ── Immvela chapter ─────────────────────────────────────────── */}
      <section className="bg-[#f2f1e8] px-5 py-24 font-inter text-[#16352a] md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold text-[#2b7554]">{c.immvela.eyebrow}</p>

          <h2 className="mt-3 max-w-3xl text-balance font-bricolage text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.035em] text-[#14473a] md:text-[3.25rem]">
            {c.immvela.heading}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#5c6b61]">{c.immvela.sub}</p>

          {/* Two displays: the same property in Manual (the Wheel) and in
                Auto (the conversation). Real captures, 2880×1800 = a 1440×900
                app at 2×, so the whole UI fits the 16:10 screen edge to edge. */}
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            <Display
              src={`/products/immvela/immvela-manual-${locale}.png`}
              alt={dict.products.immvela.webAlt}
              label={c.immvela.manualLabel}
              note={c.immvela.manualNote}
              marks={marks}
            />
            <Display
              src={`/products/immvela/immvela-auto-${locale}.png`}
              alt={c.immvela.autoNote}
              label={c.immvela.autoLabel}
              note={c.immvela.autoNote}
            />
          </div>

          <ol className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {c.immvela.callouts.map((co, n) => (
              <li
                key={co.k}
                className={`border-t border-[#16352a]/20 pt-4 ${co.soon ? 'opacity-45' : ''}`}
              >
                <p className="flex items-center gap-2 font-bricolage text-xl font-semibold tracking-[-0.02em]">
                  <span className="font-mono text-sm text-[#2b7554]">{n + 1}</span>
                  {co.k}
                  {co.soon && <span className="sr-only">— {c.immvela.soon}</span>}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-[#5c6b61]">{co.t}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href={immvelaHref(locale, '#early-access')}
              className="inline-flex min-h-12 items-center rounded-full bg-[#2b7554] px-6 font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-[#24473a] active:scale-[0.98]"
            >
              {c.immvela.cta}
            </a>
            <a
              href={immvelaHref(locale)}
              className="inline-flex min-h-11 items-center gap-1 font-semibold text-[#2b7554] hover:underline"
            >
              {c.immvela.film} ›
            </a>
          </div>
        </div>
      </section>

      {/* ── QFUtool chapter ─────────────────────────────────────────── */}
      <section className="bg-[#23384a] px-5 py-24 text-[#f3f6f8] md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-2 text-sm font-semibold text-[#d6e1e7]">
            <Image src="/products/qfutool-icon.svg" alt="" width={20} height={20} />
            {c.qfutool.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl text-balance font-archivo text-[2.5rem] font-extrabold leading-[1.02] tracking-[-0.03em] md:text-[4rem]">
            {c.qfutool.heading}
          </h2>

          <div className="mt-14 grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="relative overflow-hidden rounded-[18px] bg-white text-[#1f3340] shadow-[0_60px_100px_-40px_rgba(0,0,0,0.6)] lg:col-span-7">
              <div className="relative border-b border-[#e3e8ec] px-7 py-5 text-sm leading-[1.9] text-[#5b6770]">
                <div>
                  <strong className="text-[#1f3340]">{dict.cinema.email.from}</strong>&nbsp; Lisa
                  Berger &lt;lisa@your-company.at&gt;
                </div>
                <div>
                  <strong className="text-[#1f3340]">{dict.cinema.email.sent}</strong>&nbsp;{' '}
                  {dict.cinema.email.sentValue}
                </div>
                <Marker n={1} className="absolute right-6 top-5" />
              </div>
              <div className="relative p-7 pr-16 text-lg leading-relaxed">
                <p>{dict.cinema.email.greeting}</p>
                <p className="mt-3">{dict.cinema.email.body}</p>
                <Marker n={2} className="absolute right-6 top-16" />
                <p className="mt-3">{dict.cinema.email.sign}</p>
                <div className="mt-6 flex items-center justify-between gap-4 rounded-xl bg-[#eef2f5] px-4 py-3 text-[15px]">
                  <span>
                    {dict.cinema.email.reply}
                    <span className="mt-1 block text-xs font-semibold text-[#a63821]">
                      {dict.cinema.email.replyNote}
                    </span>
                  </span>
                  <Marker n={3} />
                </div>
                <div className="relative mt-6 flex items-center justify-between border-t border-[#eef1f3] pt-4 text-[13px] text-[#5b6770]">
                  <span>{dict.cinema.email.foot}</span>
                  <Marker n={4} />
                </div>
              </div>
            </div>
            <ol className="flex flex-col gap-6 lg:col-span-5 lg:pt-4">
              {c.qfutool.callouts.map((co, n) => (
                <li key={n} className="flex gap-4 border-t border-white/15 pt-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c4432a] font-mono text-sm text-white">
                    {n + 1}
                  </span>
                  <p className="text-[17px] leading-relaxed text-[#d6e1e7]">{co.t}</p>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-24 text-sm font-semibold text-[#d6e1e7]">{c.qfutool.rulesLabel}</p>
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-white/15 pt-8 sm:grid-cols-2 lg:grid-cols-5">
            {c.qfutool.rules.map((r) => (
              <div key={r.k} className="flex flex-col-reverse gap-2">
                <dd className="text-[15px] leading-relaxed text-[#c3d2da]">{r.t}</dd>
                <dt className="font-archivo text-2xl font-extrabold tracking-[-0.02em]">{r.k}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-16 flex flex-col gap-6 border-t border-white/15 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="font-archivo text-2xl font-bold">{c.qfutool.price}</p>
            <a
              href={`${QFUTOOL_URL}/login`}
              target="_blank"
              rel="noopener"
              className="inline-flex min-h-12 items-center self-start rounded-full bg-[#c4432a] px-6 font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-[#a63821] active:scale-[0.98]"
            >
              {c.qfutool.cta}
            </a>
          </div>
        </div>
      </section>

      {/* ── Newsroom (the blog is English-only for now) ──────────────── */}
      {locale === 'en' && (
        <section className="px-5 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-end justify-between gap-6 border-b border-sns-text pb-5">
              <div>
                <p className="eyebrow mb-2">{c.news.eyebrow}</p>
                <h2 className="section-title text-sns-text">{c.news.heading}</h2>
              </div>
              <Link href="/blog" className="shrink-0 font-semibold text-sns-action hover:underline">
                {c.news.all} ›
              </Link>
            </div>
            <ul>
              {posts.map((post) => (
                <li key={post.slug} className="border-b border-sns-border">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group grid grid-cols-1 gap-2 py-7 md:grid-cols-[140px_minmax(0,1fr)_120px] md:items-baseline md:gap-8"
                  >
                    <span className="font-mono text-sm text-sns-faint">{post.date}</span>
                    <span className="font-display text-2xl leading-snug text-sns-text transition-colors duration-200 group-hover:text-sns-action md:text-[1.75rem]">
                      {post.title}
                    </span>
                    <span
                      className={`text-sm font-semibold md:text-right ${post.product === 'immvela' ? 'text-[#2b7554]' : 'text-[#3c6378]'}`}
                    >
                      {post.product === 'immvela' ? 'Immvela' : 'QFUtool'}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Consulting, with the four steps ─────────────────────────── */}
      <section className="bg-white px-5 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-3">{dict.consult.eyebrow}</p>
              <h2 className="section-title text-sns-text">{dict.consult.heading}</h2>
            </div>
            <p className="text-lg leading-relaxed text-sns-muted lg:col-span-5 lg:pt-8">
              {dict.consult.sub}
            </p>
          </div>
          <p className="mt-16 text-sm font-semibold text-sns-muted">{c.steps}</p>
          <ol className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-4">
            {dict.customBuilds.steps.map((s) => (
              <li key={s.k} className="border-t-2 border-sns-text pt-5">
                <p className="flex items-baseline gap-3 font-semibold text-sns-text">
                  <span className="font-mono text-sns-faint">{s.k}</span>
                  {s.name}
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-sns-muted">{s.main}</p>
              </li>
            ))}
          </ol>
          <Link href={localePath(locale, '/contact')} className={`${CTA_PRIMARY} mt-12`}>
            {dict.consult.cta}
          </Link>
        </div>
      </section>

      {/* ── Closing ask ─────────────────────────────────────────────── */}
      <section className="px-5 py-28 text-center md:px-12 md:py-40">
        <h2 className="mx-auto max-w-4xl text-balance font-display text-[2.75rem] font-normal leading-[1.02] tracking-[-0.03em] text-sns-text md:text-[5rem]">
          {c.closing.heading} <em className="text-sns-muted">{c.closing.headingB}</em>
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={immvelaHref(locale)}
            className="inline-flex min-h-14 min-w-[12rem] items-center justify-center gap-3 rounded-full bg-white/60 px-6 font-bricolage text-[19px] font-bold tracking-[-0.03em] text-[#14473a] ring-1 ring-[#0e1726]/15 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:ring-[#0e1726]/30"
          >
            <Image src="/products/immvela/helix.svg" alt="" width={28} height={28} />
            <span>
              Immvela<span className="text-[#2e9e6a]">.</span>
            </span>
          </a>
          <a
            href={locale === 'de' ? `${QFUTOOL_URL}/de` : QFUTOOL_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-14 min-w-[12rem] items-center justify-center gap-3 rounded-full bg-white/60 px-6 font-archivo text-[19px] font-bold tracking-[-0.02em] text-[#23384a] ring-1 ring-[#0e1726]/15 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:ring-[#0e1726]/30"
          >
            <Image src="/products/qfutool-icon.svg" alt="" width={28} height={28} />
            QFUtool
          </a>
        </div>
        <Link
          href={localePath(locale, '/contact')}
          className="mt-8 inline-flex min-h-11 items-center font-semibold text-sns-action hover:underline"
        >
          {c.closing.consult} ›
        </Link>
      </section>
    </>
  )
}

function Marker({ n, className = '' }: { n: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c4432a] font-mono text-sm text-white shadow-[0_0_0_4px_#ffffff] ${className}`}
    >
      {n}
    </span>
  )
}

/** A desktop display: thin black bezel, the screen, a short neck and foot. */
function Display({
  src,
  alt,
  label,
  note,
  marks = [],
}: {
  src: string
  alt: string
  label: string
  note: string
  marks?: { x: number; y: number }[]
}) {
  return (
    <figure>
      <div className="rounded-[18px] bg-[#0d0d0f] p-2 shadow-[0_50px_90px_-50px_rgba(16,24,20,0.6)] md:p-2.5">
        <div className="relative overflow-hidden rounded-[10px]">
          <Image
            src={src}
            alt={alt}
            width={2880}
            height={1800}
            unoptimized
            className="block h-auto w-full"
          />
          {marks.map((m, n) => (
            <span
              key={n}
              aria-hidden="true"
              className="absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#16352a] font-mono text-xs font-medium text-[#f2f1e8] shadow-[0_0_0_3px_rgba(242,241,232,0.9)] md:h-8 md:w-8 md:text-sm"
              style={{ left: `${m.x * 100}%`, top: `${m.y * 100}%` }}
            >
              {n + 1}
            </span>
          ))}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="mx-auto h-8 w-[14%] bg-gradient-to-b from-[#b9bbbf] to-[#d7d8db]"
      />
      <div aria-hidden="true" className="mx-auto h-2 w-[30%] rounded-t-md bg-[#c9cbcf]" />
      <figcaption className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-bricolage text-2xl font-semibold tracking-[-0.02em]">{label}</span>
        <span className="text-[15px] text-[#5c6b61]">{note}</span>
      </figcaption>
    </figure>
  )
}
