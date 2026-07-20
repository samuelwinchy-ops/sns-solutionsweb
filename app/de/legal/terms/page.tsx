import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nutzungsbedingungen',
  description:
    'Die Bedingungen für die Nutzung der Website der SNS Software Solutions GmbH',
  alternates: {
    canonical: '/de/legal/terms',
    languages: {
      en: '/legal/terms',
      de: '/de/legal/terms',
      'x-default': '/legal/terms',
    },
  },
  openGraph: { locale: 'de_AT' },
}

const UPDATED = '3. Juli 2026'

export default function TermsPageDe() {
  return (
    <article>
      <header className="mb-10 border-b border-sns-text/[0.08] pb-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
          Rechtliches
        </p>
        <h1 className="text-3xl font-bold tracking-[-0.02em] text-sns-text md:text-4xl">
          Nutzungsbedingungen
        </h1>
        <p className="mt-3 font-mono text-sm text-sns-muted">
          Die Bedingungen für die Nutzung dieser Website.
        </p>
        <p className="mt-1 font-mono text-xs text-sns-faint">
          Zuletzt aktualisiert: {UPDATED}
        </p>
      </header>

      <div className="legal-prose">
        <h2>1. Geltungsbereich</h2>
        <p>
          Diese Nutzungsbedingungen regeln Ihren Zugriff auf und die Nutzung der
          Website, die von <strong>SNS Software Solutions GmbH</strong>{' '}
          („SNS“, „wir“, „uns“) betrieben wird. Durch den Zugriff auf oder die
          Nutzung dieser Website stimmen Sie diesen Bedingungen zu. Wenn Sie
          nicht einverstanden sind, nutzen Sie die Website bitte nicht.
        </p>
        <p>
          Diese Bedingungen betreffen die Nutzung der Website selbst. Die
          Erbringung von Softwareentwicklung oder anderen Leistungen durch SNS
          richtet sich nach einer gesonderten schriftlichen Vereinbarung mit dem
          jeweiligen Kunden. Die Nutzung der Social-Media-Planungsanwendung von
          SNS („die App“) durch einen autorisierten Kunden richtet sich nach der
          gesonderten Dienstleistungsvereinbarung und dem
          Auftragsverarbeitungsvertrag (AVV) zwischen SNS und diesem Kunden,
          nicht nach diesen Nutzungsbedingungen.
        </p>

        <h2>2. Nutzung der Website</h2>
        <p>
          Diese Website dient der allgemeinen Information über SNS und seine
          Leistungen. Sie verpflichten sich, sie nur zu rechtmäßigen Zwecken zu
          nutzen und nicht:
        </p>
        <ul>
          <li>
            die Website, ihre Server oder verbundene Netzwerke zu stören oder zu
            beeinträchtigen;
          </li>
          <li>
            zu versuchen, sich unbefugten Zugang zu Teilen der Website oder
            verbundenen Systemen zu verschaffen;
          </li>
          <li>
            automatisierte Mittel einzusetzen, um die Website zu scrapen,
            auszulesen oder so zu überlasten, dass ihr Betrieb beeinträchtigt
            wird;
          </li>
          <li>
            die Website zu missbrauchen, um Schadsoftware oder rechtswidrige
            Inhalte zu übertragen.
          </li>
        </ul>

        <h2>3. Geistiges Eigentum</h2>
        <p>
          Alle Inhalte dieser Website, einschließlich Texte, Grafiken, Logos,
          des Namens und Zeichens SNS, des Designs und des Codes, sind Eigentum
          der SNS Software Solutions GmbH oder ihrer Lizenzgeber und durch
          Urheberrecht und andere Rechte des geistigen Eigentums geschützt. Sie
          dürfen keinen Teil dieser Website ohne unsere vorherige schriftliche
          Zustimmung vervielfältigen, verbreiten, verändern oder daraus
          abgeleitete Werke erstellen.
        </p>

        <h2>4. Die App</h2>
        <p>
          Soweit SNS einem Kunden die Social-Media-Planungsanwendung
          bereitstellt, ist dieser Kunde allein verantwortlich für die Inhalte,
          deren Veröffentlichung er der App gestattet, sowie dafür, dass er über
          die erforderlichen Rechte und Berechtigungen verfügt, um diese Inhalte
          zu veröffentlichen und die verbundenen Social-Media-Konten zu
          betreiben. SNS handelt nach den Weisungen des Kunden und ist nicht
          verantwortlich für inhaltliche Entscheidungen der autorisierten Nutzer
          des Kunden. Die Nutzung der App unterliegt zusätzlich den jeweiligen
          Entwicklerbedingungen und -richtlinien der verbundenen Plattformen
          (Meta, LinkedIn, Google/YouTube, TikTok), und der Kunde ist für die
          Einhaltung dieser Bedingungen verantwortlich.
        </p>

        <h2>5. Keine Gewährleistung</h2>
        <p>
          Diese Website wird „wie besehen“ und „wie verfügbar“ bereitgestellt.
          Wir bemühen uns, die Informationen richtig und aktuell zu halten,
          geben jedoch keine ausdrücklichen oder stillschweigenden Zusicherungen
          oder Gewährleistungen hinsichtlich ihrer Richtigkeit, Vollständigkeit,
          Zuverlässigkeit oder Verfügbarkeit. Wir können die Website (ganz oder
          teilweise) jederzeit ohne Vorankündigung ändern, aussetzen oder
          einstellen.
        </p>

        <h2>6. Haftungsbeschränkung</h2>
        <p>
          Soweit nach geltendem Recht zulässig, haftet SNS nicht für indirekte,
          zufällige oder Folgeschäden, die aus Ihrer Nutzung oder
          Nichtnutzbarkeit dieser Website entstehen. Die Haftung für leichte
          Fahrlässigkeit ist ausgeschlossen. Dies beschränkt keine Haftung, die
          nach zwingendem österreichischem Recht nicht ausgeschlossen oder
          beschränkt werden kann, einschließlich der Haftung für Personenschäden
          oder für Vorsatz und grobe Fahrlässigkeit.
        </p>

        <h2>7. Externe Links</h2>
        <p>
          Diese Website kann Links zu Websites Dritter enthalten. Wir haben keine
          Kontrolle über die Inhalte, Richtlinien oder Praktiken von Websites
          Dritter und übernehmen dafür keine Verantwortung. Der Zugriff auf
          verlinkte Seiten erfolgt auf eigenes Risiko.
        </p>

        <h2>8. Änderungen dieser Bedingungen</h2>
        <p>
          Wir können diese Nutzungsbedingungen von Zeit zu Zeit überarbeiten. Es
          gilt die zum Zeitpunkt Ihres Besuchs auf dieser Seite veröffentlichte
          Fassung. Die fortgesetzte Nutzung der Website nach Änderungen gilt als
          Zustimmung zu den überarbeiteten Bedingungen.
        </p>

        <h2>9. Anwendbares Recht & Gerichtsstand</h2>
        <p>
          Diese Nutzungsbedingungen unterliegen dem Recht der Republik Österreich
          unter Ausschluss seiner Kollisionsnormen und des UN-Kaufrechts (CISG).
          Soweit gesetzlich zulässig, sind die zuständigen Gerichte in Wien,
          Österreich, ausschließlich zuständig. Zwingende
          Verbraucherschutzbestimmungen des Landes, in dem ein Verbraucher seinen
          Wohnsitz hat, bleiben unberührt.
        </p>

        <h2>10. Kontakt</h2>
        <p>
          SNS Software Solutions GmbH, Wien, Österreich
          <br />
          E-Mail:{' '}
          <a href="mailto:office@sns-austria.com">office@sns-austria.com</a>
        </p>
        <p>
          Vollständige Unternehmensdetails finden Sie in unserem{' '}
          <a href="/de/legal/imprint">Impressum</a>.
        </p>
      </div>
    </article>
  )
}
