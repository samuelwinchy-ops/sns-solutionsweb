import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description:
    'Wie SNS Software Solutions GmbH i.G. personenbezogene Daten gemäß der EU-Datenschutz-Grundverordnung (DSGVO) verarbeitet.',
  alternates: {
    canonical: '/de/legal/privacy',
    languages: {
      en: '/legal/privacy',
      de: '/de/legal/privacy',
      'x-default': '/legal/privacy',
    },
  },
  openGraph: { locale: 'de_AT' },
}

const UPDATED = '30. Juni 2026'

export default function PrivacyPageDe() {
  return (
    <article>
      <header className="mb-10 border-b border-white/[0.07] pb-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
          Rechtliches
        </p>
        <h1 className="text-3xl font-bold tracking-[-0.02em] text-sns-text md:text-4xl">
          Datenschutzerklärung
        </h1>
        <p className="mt-3 font-mono text-sm text-sns-muted">
          Wie wir Ihre personenbezogenen Daten gemäß der EU-Datenschutz-
          Grundverordnung (DSGVO) verarbeiten.
        </p>
        <p className="mt-1 font-mono text-xs text-sns-faint">
          Zuletzt aktualisiert: {UPDATED}
        </p>
      </header>

      <div className="legal-prose">
        <h2>1. Verantwortlicher</h2>
        <p>Verantwortlicher für die Datenverarbeitung auf dieser Website ist:</p>
        <p>
          <strong>SNS Software Solutions GmbH i.G. (in Gründung)</strong>
          <br />
          Schrötlgasse 8a, 1220 Wien, Österreich
          <br />
          E-Mail:{' '}
          <a href="mailto:office@sns-austria.com">office@sns-austria.com</a>
        </p>

        <h2>2. Überblick</h2>
        <p>
          Wir nehmen den Schutz Ihrer personenbezogenen Daten ernst und
          verarbeiten diese nur im Einklang mit den gesetzlichen
          Datenschutzvorschriften (DSGVO, österreichisches Datenschutzgesetz /
          DSG) und dieser Datenschutzerklärung. Diese Website ist eine
          Informationsseite; wir erheben so wenige personenbezogene Daten wie
          möglich.
        </p>

        <h2>3. Hosting</h2>
        <p>
          Diese Website wird von <strong>Vercel Inc.</strong>, 340 S Lemon Ave
          #4133, Walnut, CA 91789, USA, gehostet. Beim Besuch der Website
          verarbeitet Vercel automatisch technische Verbindungsdaten (siehe
          „Server-Logfiles“ unten), um die Website sicher und zuverlässig
          bereitzustellen. Dies beruht auf unserem berechtigten Interesse an
          einer stabilen und sicheren Online-Präsenz (Art. 6 Abs. 1 lit. f
          DSGVO). Wir haben mit Vercel einen Auftragsverarbeitungsvertrag (AVV)
          geschlossen, und Übermittlungen in die USA sind durch die
          EU-Standardvertragsklauseln abgesichert.
        </p>

        <h2>4. Server-Logfiles</h2>
        <p>
          Unser Hosting-Anbieter erhebt und speichert automatisch Informationen
          in Server-Logfiles, die Ihr Browser an uns übermittelt. Diese können
          umfassen:
        </p>
        <ul>
          <li>Anonymisierte / gekürzte IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Browsertyp und -version</li>
          <li>Betriebssystem</li>
          <li>Referrer-URL</li>
        </ul>
        <p>
          Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und
          dienen ausschließlich der Gewährleistung des Betriebs, der Sicherheit
          und der Fehlerbehebung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
          DSGVO.
        </p>

        <h2>5. Analyse</h2>
        <p>
          Wir verwenden <strong>Vercel Analytics</strong>, einen
          datenschutzfreundlichen, cookielosen Analysedienst von Vercel Inc. Er
          misst aggregierte, anonyme Nutzungsstatistiken (wie Seitenaufrufe)
          ohne Cookies und ohne einzelne Besucher zu verfolgen oder zu
          identifizieren. Es werden keine seitenübergreifenden Profile erstellt.
          Rechtsgrundlage ist unser berechtigtes Interesse am Verständnis und
          der Verbesserung der Nutzung unserer Website (Art. 6 Abs. 1 lit. f
          DSGVO).
        </p>

        <h2>6. Cookies</h2>
        <p>
          Diese Website setzt keine Tracking- oder Werbe-Cookies. Es wird nur die
          technisch notwendige Speicherung verwendet, die zur Darstellung der
          Seite erforderlich ist. Da wir keine nicht-essenziellen Cookies
          verwenden, ist kein Cookie-Consent-Banner erforderlich.
        </p>

        <h2>7. Kontakt (E-Mail & Kontaktformular)</h2>
        <p>
          Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen angegebenen
          Daten (Ihre E-Mail-Adresse und der Inhalt Ihrer Nachricht)
          ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet.
        </p>
        <p>
          Unsere Website bietet außerdem ein Kontaktformular. Wenn Sie es
          absenden, verarbeiten wir die von Ihnen eingegebenen Angaben, nämlich
          Ihren Namen, Ihre E-Mail-Adresse, optional Ihre Telefonnummer, die von
          Ihnen gewählte Art der Leistung und Ihre Nachricht, um Ihre Anfrage zu
          beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Maßnahmen
          vor Vertragsabschluss) oder Art. 6 Abs. 1 lit. f DSGVO (unser
          berechtigtes Interesse an der Beantwortung von Anfragen).
        </p>
        <p>
          Kontaktformular-Übermittlungen werden in unserem Auftrag von{' '}
          <strong>EmailJS</strong> (
          <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer">
            emailjs.com
          </a>
          ) als Auftragsverarbeiter an unser Postfach zugestellt. Soweit damit
          eine Datenübermittlung außerhalb der EU/des EWR verbunden ist, wird sie
          durch geeignete Maßnahmen wie die EU-Standardvertragsklauseln
          abgesichert.
        </p>
        <p>
          Diese Daten werden gelöscht, sobald sie nicht mehr benötigt werden und
          keine gesetzlichen Aufbewahrungspflichten der Löschung entgegenstehen.
        </p>

        <h2>8. Speicherdauer</h2>
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie es für die oben
          genannten Zwecke erforderlich ist oder gesetzliche
          Aufbewahrungsfristen (z. B. nach Steuer- und Handelsrecht) es
          verlangen. Danach werden die Daten gelöscht.
        </p>

        <h2>9. Ihre Rechte</h2>
        <p>Nach der DSGVO haben Sie das Recht auf:</p>
        <ul>
          <li>Auskunft über Ihre personenbezogenen Daten (Art. 15)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16)</li>
          <li>Löschung (Art. 17)</li>
          <li>Einschränkung der Verarbeitung (Art. 18)</li>
          <li>Datenübertragbarkeit (Art. 20)</li>
          <li>
            Widerspruch gegen die Verarbeitung auf Grundlage berechtigter
            Interessen (Art. 21)
          </li>
        </ul>
        <p>
          Zur Ausübung dieser Rechte kontaktieren Sie uns unter{' '}
          <a href="mailto:office@sns-austria.com">office@sns-austria.com</a>.
        </p>

        <h2>10. Beschwerderecht</h2>
        <p>
          Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren. In
          Österreich ist dies die Datenschutzbehörde, Barichgasse 40–42, 1030
          Wien,{' '}
          <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">
            dsb.gv.at
          </a>
          .
        </p>

        <h2>11. Änderungen dieser Erklärung</h2>
        <p>
          Wir können diese Datenschutzerklärung aktualisieren, um Änderungen
          unserer Praktiken abzubilden oder aus rechtlichen Gründen. Die jeweils
          aktuelle Fassung ist stets auf dieser Seite verfügbar.
        </p>
      </div>
    </article>
  )
}
