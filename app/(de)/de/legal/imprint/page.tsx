import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description:
    'Offenlegung (Impressum) der SNS Software Solutions GmbH gemäß §5 ECG und §25 MedienG.',
  alternates: {
    canonical: '/de/legal/imprint',
    languages: {
      en: '/legal/imprint',
      de: '/de/legal/imprint',
      'x-default': '/legal/imprint',
    },
  },
}

const UPDATED = '30. Juli 2026'

export default function ImprintPageDe() {
  return (
    <article>
      <header className="mb-10 border-b border-sns-text/[0.08] pb-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
          Rechtliches
        </p>
        <h1 className="text-3xl font-bold tracking-[-0.02em] text-sns-text md:text-4xl">
          Impressum
        </h1>
        <p className="mt-3 font-mono text-sm text-sns-muted">
          Informationen gemäß §5 E-Commerce-Gesetz (ECG) und Offenlegung gemäß
          §25 Mediengesetz (MedienG).
        </p>
        <p className="mt-1 font-mono text-xs text-sns-faint">
          Zuletzt aktualisiert: {UPDATED}
        </p>
      </header>

      <div className="legal-prose">
        <h2>Medieninhaber & Betreiber</h2>
        <p>
          <strong>SNS Software Solutions GmbH</strong>
          <br />
          Schrötlgasse 8a
          <br />
          1220 Wien, Österreich
        </p>

        <h2>Erfasste Websites</h2>
        <p>
          Dieses Impressum gilt für <strong>sns-austria.com</strong> und für{' '}
          <strong>immvela.com</strong> (einschließlich der Anwendung unter
          app.immvela.com). <strong>Immvela</strong> ist ein Produkt und eine
          Marke der SNS Software Solutions GmbH und keine eigene Rechtsperson;
          Betreiber beider Websites ist das oben genannte Unternehmen.
        </p>

        <h2>Vertreten durch die Geschäftsführer</h2>
        <p>Samuel Winch, Samson Adefris Belachew</p>

        <h2>Kontakt</h2>
        <p>
          E-Mail:{' '}
          <a href="mailto:office@sns-austria.com">office@sns-austria.com</a>
          <br />
          Telefon: <a href="tel:+436701922538">+43 670 1922538</a>
        </p>

        <h2>Firmenbuch</h2>
        <p>
          Firmenbuchnummer: FN 683051
          <br />
          Firmenbuchgericht: Handelsgericht Wien
          <br />
          Umsatzsteuer-Identifikationsnummer (UID): wird zugewiesen
        </p>

        <h2>Gewerbebehörde & anwendbare Vorschriften</h2>
        <p>
          Unternehmensgegenstand: Softwareentwicklung und IT-Dienstleistungen.
          <br />
          Kammerzugehörigkeit: Wirtschaftskammer Österreich, Wirtschaftskammer
          Wien.
          <br />
          Gewerberecht: Gewerbeordnung 1994, abrufbar unter{' '}
          <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer">
            ris.bka.gv.at
          </a>
          .
        </p>

        <h2>Aufsichtsbehörde</h2>
        <p>Magistrat der Stadt Wien</p>

        <h2>Online-Streitbeilegung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{' '}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
            ec.europa.eu/consumers/odr
          </a>
          . Wir sind weder verpflichtet noch bereit, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
          erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
          Inhalte übernehmen wir jedoch keine Gewähr. Als Diensteanbieter sind
          wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
          verantwortlich, jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Unsere Website kann Links zu externen Websites Dritter enthalten, auf
          deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte
          können wir daher keine Haftung übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
          verantwortlich.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch den Betreiber erstellten Inhalte und Werke auf diesen Seiten
          unterliegen dem Urheberrecht. Die Vervielfältigung, Bearbeitung,
          Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
          Urheberrechts bedürfen der vorherigen schriftlichen Zustimmung der SNS
          Software Solutions GmbH.
        </p>
      </div>
    </article>
  )
}
