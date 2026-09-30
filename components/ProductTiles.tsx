'use client'

import Image from 'next/image'
import { track } from '@vercel/analytics'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, immvelaHref } from '@/i18n/config'

const QFUTOOL_URL = 'https://www.qfutool.com'

/**
 * The products, one full-width tile each — the way a parent company shows the
 * things it makes (apple.com's product tiles): the audience, the product's
 * name set large, its one-line promise, "Learn more" plus the product's own
 * next step, and the product itself underneath.
 *
 * Each tile wears its PRODUCT's brand, not SNS's. Immvela is beige, forest ink
 * and emerald with Barlow Semi Condensed titles (its design system); QFUtool
 * is slate and orange with Archivo, read off qfutool.com's own stylesheet.
 * SNS's cobalt appears on neither — it is the parent's colour, and the tiles
 * are where the visitor meets the children.
 *
 * Contrast was worked from the WCAG relative-luminance formula on the hex
 * values below (a bound, not a browser measurement):
 *   - QFUtool's own orange #e65d3f carries white at ~4.1:1, under AA for a
 *     15px label, so the button here is the darker #c4432a (~5.0:1).
 *   - QFUtool's muted #c3d2da on its slate #3c6378 is ~4.2:1; body copy here
 *     uses #d6e1e7 (~4.9:1) instead.
 */
export default function ProductTiles({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).products
  const qfuHome = locale === 'de' ? `${QFUTOOL_URL}/de` : QFUTOOL_URL

  return (
    <section id="products" className="scroll-mt-20 px-5 pb-16 md:px-10 md:pb-24">
      <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
        {/* No shared headline over the tiles: a line like "two products for
            X" would group two separate businesses under one pitch. Each tile
            stands on its own, as a parent company's product pages do. */}
        <h2 className="sr-only">{t.heading}</h2>
        <div className="flex flex-col gap-4">
          {/* ── Immvela ─────────────────────────────────────────────── */}
          <article className="overflow-hidden rounded-sns-lg bg-[#f2f1e8] px-6 pt-12 text-center md:px-12 md:pt-16">
            <p className="text-sm font-semibold text-[#2b7554]">{t.immvela.audience}</p>
            <h3 className="mt-3 font-inter text-5xl font-extrabold tracking-[-0.035em] text-[#16352a] md:text-7xl">
              Immvela<span className="text-[#2e9e6a]">.</span>
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-balance font-title text-2xl font-semibold leading-tight text-[#16352a] md:text-[2rem]">
              {t.immvela.tagline}
            </p>
            <p className="mx-auto mt-4 max-w-xl font-inter leading-relaxed text-[#5c6b61]">
              {t.immvela.desc}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-inter">
              <a
                href={immvelaHref(locale, '#early-access')}
                onClick={() => track('home_tile_immvela_waitlist')}
                className="inline-flex min-h-11 items-center rounded-sns bg-[#2b7554] px-5 text-[15px] font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-[#24473a] active:scale-[0.98]"
              >
                {t.immvela.cta}
              </a>
              <a
                href={immvelaHref(locale)}
                onClick={() => track('home_tile_immvela_learn')}
                className="group inline-flex min-h-11 items-center gap-1 text-[15px] font-semibold text-[#2b7554] underline-offset-4 hover:underline"
              >
                {t.learnMore}
                <Chevron />
              </a>
            </div>
            <p className="mt-3 font-inter text-sm text-[#5e6d62]">{t.immvela.status}</p>

            <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-t-sns-lg border border-b-0 border-[rgba(22,53,42,0.12)]">
              <Image
                src={`/immvela/film-${locale}.jpg`}
                alt={t.immvela.imageAlt}
                width={1600}
                height={900}
                sizes="(min-width: 1024px) 896px, 100vw"
                className="block h-auto w-full"
              />
            </div>
          </article>

          {/* ── QFUtool ─────────────────────────────────────────────── */}
          <article className="overflow-hidden rounded-sns-lg bg-[#3c6378] px-6 py-12 text-center md:px-12 md:py-16">
            <p className="text-sm font-semibold text-[#d6e1e7]">{t.qfutool.audience}</p>
            <h3 className="mt-3 flex items-center justify-center gap-3 font-archivo text-5xl font-bold tracking-[-0.03em] text-[#f3f6f8] md:text-7xl">
              <Image
                src="/products/qfutool-icon.png"
                alt=""
                width={48}
                height={48}
                className="h-10 w-10 md:h-12 md:w-12"
              />
              QFUtool
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-balance font-archivo text-2xl font-bold leading-tight text-[#f3f6f8] md:text-[2rem]">
              {t.qfutool.tagline}
            </p>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-[#d6e1e7]">{t.qfutool.desc}</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <a
                href={`${QFUTOOL_URL}/login`}
                target="_blank"
                rel="noopener"
                onClick={() => track('home_tile_qfutool_trial')}
                className="inline-flex min-h-11 items-center rounded-sns bg-[#c4432a] px-5 text-[15px] font-semibold text-white transition-[background-color,transform] duration-200 ease-out hover:bg-[#a63821] active:scale-[0.98]"
              >
                {t.qfutool.cta}
              </a>
              <a
                href={qfuHome}
                target="_blank"
                rel="noopener"
                onClick={() => track('home_tile_qfutool_learn')}
                className="group inline-flex min-h-11 items-center gap-1 text-[15px] font-semibold text-[#f3f6f8] underline-offset-4 hover:underline"
              >
                {t.learnMore}
                <Chevron />
              </a>
            </div>
            <p className="mt-3 text-sm text-[#d6e1e7]">{t.qfutool.status}</p>

            <FollowUpList t={t.qfutool} />
          </article>
        </div>
      </div>
    </section>
  )
}

const Chevron = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
    className="transition-transform duration-200 ease-out group-hover:translate-x-1"
  >
    <path
      d="m5.5 3 4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

type Qfu = ReturnType<typeof getDict>['products']['qfutool']

const TONE: Record<string, string> = {
  reply: 'bg-[#fdeee9] text-[#a63821]',
  queued: 'bg-[#eef2f5] text-[#3c6378]',
  sent: 'bg-[#eef2f5] text-[#2f4f61]',
  stopped: 'bg-[#f1f2f3] text-[#5b6770]',
}

/**
 * What QFUtool's follow-up list looks like: the quotes, and where each one is
 * in its sequence. Drawn in HTML rather than a screenshot so it stays sharp and
 * translates; the rows are sample data and the "Example" label says so on
 * screen, so nobody reads them as customers.
 */
function FollowUpList({ t }: { t: Qfu }) {
  return (
    <figure className="mx-auto mt-12 max-w-3xl text-left" aria-label={t.exampleLabel}>
      <div className="overflow-hidden rounded-sns-lg border border-white/15 bg-white shadow-[0_24px_48px_-24px_rgba(10,25,35,0.5)]">
        <div className="flex items-center justify-between border-b border-[#e3e8ec] px-4 py-3 md:px-6">
          <span className="text-sm font-semibold text-[#1f3340]">QFUtool</span>
          <span className="rounded-full border border-[#e3e8ec] px-2 py-1 text-xs font-medium text-[#5b6770]">
            {t.example}
          </span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs font-medium text-[#5b6770]">
              <th scope="col" className="px-4 py-3 font-medium md:px-6">
                {t.cols[0]}
              </th>
              <th scope="col" className="hidden px-4 py-3 font-medium sm:table-cell">
                {t.cols[1]}
              </th>
              <th scope="col" className="px-4 py-3 font-medium md:px-6">
                {t.cols[2]}
              </th>
            </tr>
          </thead>
          <tbody>
            {t.rows.map((r) => (
              <tr key={r.who} className="border-t border-[#eef1f3]">
                <td className="px-4 py-3 font-medium text-[#1f3340] md:px-6">{r.who}</td>
                <td className="hidden px-4 py-3 font-mono text-[#3d4f5a] sm:table-cell">
                  {r.amount}
                </td>
                <td className="px-4 py-3 md:px-6">
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${TONE[r.tone]}`}
                  >
                    {r.state}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  )
}
