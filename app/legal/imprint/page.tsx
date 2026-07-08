import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Imprint',
  description:
    'Legal disclosure (Impressum) for SNS Software Solutions GmbH pursuant to §5 ECG and §25 MedienG.',
  alternates: {
    canonical: '/legal/imprint',
    languages: {
      en: '/legal/imprint',
      de: '/de/legal/imprint',
      'x-default': '/legal/imprint',
    },
  },
}

const UPDATED = 'July 8, 2026'

export default function ImprintPage() {
  return (
    <article>
      <header className="mb-10 border-b border-white/[0.07] pb-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
          Legal
        </p>
        <h1 className="text-3xl font-bold tracking-[-0.02em] text-sns-text md:text-4xl">
          Imprint
        </h1>
        <p className="mt-3 font-mono text-sm text-sns-muted">
          Information pursuant to §5 E-Commerce Act (ECG) and disclosure
          pursuant to §25 Media Act (MedienG).
        </p>
        <p className="mt-1 font-mono text-xs text-sns-faint">
          Last updated: {UPDATED}
        </p>
      </header>

      <div className="legal-prose">
        <h2>Media owner & operator</h2>
        <p>
          <strong>SNS Software Solutions GmbH</strong>
          <br />
          Schrötlgasse 8a
          <br />
          1220 Vienna, Austria
        </p>

        <h2>Represented by the managing directors</h2>
        <p>
          Samuel Winch, Samson Adefris Belachew
        </p>

        <h2>Contact</h2>
        <p>
          Email:{' '}
          <a href="mailto:office@sns-austria.com">
            office@sns-austria.com
          </a>
          <br />
          Phone: <a href="tel:+436701922538">+43 670 1922538</a>
        </p>

        <h2>Company register</h2>
        <p>
          Commercial register number (Firmenbuchnummer): FN 683051
          <br />
          Register court (Firmenbuchgericht): Handelsgericht Wien
          <br />
          VAT identification number (UID): pending — company in formation
        </p>

        <h2>Trade authority & applicable regulations</h2>
        <p>
          Object of the company: software development and IT services.
          <br />
          Chamber membership: Austrian Federal Economic Chamber
          (Wirtschaftskammer Österreich), Wirtschaftskammer Wien.
          <br />
          Trade regulations: Gewerbeordnung 1994, available at{' '}
          <a
            href="https://www.ris.bka.gv.at"
            target="_blank"
            rel="noopener noreferrer"
          >
            ris.bka.gv.at
          </a>
          .
        </p>

        <h2>Supervisory authority</h2>
        <p>
          Magistrat der Stadt Wien
        </p>

        <h2>Online dispute resolution</h2>
        <p>
          The European Commission provides a platform for online dispute
          resolution (ODR):{' '}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
          >
            ec.europa.eu/consumers/odr
          </a>
          . We are neither obliged nor willing to participate in dispute
          resolution proceedings before a consumer arbitration board.
        </p>

        <h2>Liability for content</h2>
        <p>
          The contents of this website were created with the greatest possible
          care. However, we assume no liability for the accuracy, completeness,
          or timeliness of the content. As a service provider, we are
          responsible for our own content on these pages in accordance with
          general law, but we are not obliged to monitor transmitted or stored
          third-party information.
        </p>

        <h2>Liability for links</h2>
        <p>
          Our website may contain links to external third-party websites over
          whose content we have no influence. We therefore cannot accept any
          liability for this third-party content. The respective provider or
          operator of the linked pages is always responsible for their content.
        </p>

        <h2>Copyright</h2>
        <p>
          The content and works created by the operator on these pages are
          subject to copyright law. Reproduction, processing, distribution, and
          any form of commercialisation of such material beyond the scope of
          copyright law require the prior written consent of SNS Software
          Solutions GmbH.
        </p>
      </div>
    </article>
  )
}
