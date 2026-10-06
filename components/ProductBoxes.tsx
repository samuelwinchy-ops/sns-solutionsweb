import Image from 'next/image'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, immvelaHref } from '@/i18n/config'

const QFUTOOL_URL = 'https://www.qfutool.com'

/**
 * The two products side by side, each in its own colours: Immvela in forest with its sign-in screen,
 * QFUtool in slate with an example follow-up. The ids are what the home billboard's caption links to.
 */
export default function ProductBoxes({ locale = defaultLocale }: { locale?: Locale }) {
  const dict = getDict(locale)
  const p = dict.products
  const pp = dict.productsPage
  const mail = dict.cinema.email
  return (
    <div className="hm-split">
      <section className="hm-half imv" id="immvela" aria-label="Immvela">
        <div>
          <p className="hm-aud2">{p.immvela.audience}</p>
          <p className="hm-mark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/products/immvela/helix-dark.svg" alt="" />
            Immvela<i>.</i>
          </p>
          <p className="hm-tagline">{pp.immvelaTagline}</p>
          <div className="hm-ctas">
            <a className="hm-btn hm-btn-cream" href={immvelaHref(locale, '#early-access')}>
              {p.immvela.cta}
            </a>
            <a className="hm-more" href={immvelaHref(locale)}>
              {p.learnMore} ›
            </a>
          </div>
        </div>
        <div className="hm-phone">
          <Image
            src={`/products/immvela/immvela-phone-login-light-${locale}.jpg`}
            alt={p.immvela.phoneAlt}
            width={1206}
            height={2460}
            sizes="210px"
          />
        </div>
      </section>

      <section className="hm-half qfu" id="qfutool" aria-label="QFUtool">
        <div>
          <p className="hm-aud2">{p.qfutool.audience}</p>
          <p className="hm-mark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/products/qfutool-icon.svg" alt="" />
            <span>
              QFU<span className="hm-tool">tool</span>
            </span>
          </p>
          <p className="hm-tagline">{p.qfutool.tagline}</p>
          <div className="hm-ctas">
            <a
              className="hm-btn hm-btn-qfu"
              href={locale === 'de' ? `${QFUTOOL_URL}/de/pricing` : `${QFUTOOL_URL}/pricing`}
              target="_blank"
              rel="noopener"
            >
              {p.qfutool.cta}
            </a>
            <a
              className="hm-more"
              href={locale === 'de' ? `${QFUTOOL_URL}/de` : QFUTOOL_URL}
              target="_blank"
              rel="noopener"
            >
              {p.learnMore} ›
            </a>
          </div>
          <p className="hm-price">{pp.qfutoolPrice}</p>
        </div>
        <div className="hm-mailwrap" aria-hidden="true">
          <div className="hm-mail">
            <div className="hm-mail-hd">
              <b>{mail.sent}</b>&nbsp; {mail.sentValue} ·{' '}
              <span className="hm-due">{mail.followUp}</span>
            </div>
            <div className="hm-mail-bd">
              <p>{mail.greeting}</p>
              <p>{mail.body}</p>
            </div>
            <div className="hm-reply">
              {mail.reply}
              <small>{mail.replyNote}</small>
            </div>
          </div>
          <p className="hm-mailcap">{pp.exampleEmail}</p>
        </div>
      </section>
    </div>
  )
}
