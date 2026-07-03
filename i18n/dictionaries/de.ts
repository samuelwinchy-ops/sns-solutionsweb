import type { Dictionary } from './en'

// German (Austrian) translation. Formal "Sie". The brand slogan
// "Simplicity is the solution" is intentionally left in English elsewhere.

export const de: Dictionary = {
  nav: {
    home: 'start',
    services: 'leistungen',
    buildLog: 'build-log',
    team: 'team',
    contact: 'kontakt',
  },
  langToggle: { label: 'English', aria: 'Switch to English' },
  hero: {
    h1a: 'Leistungsstark im Kern.',
    h1b: 'Einfach an der Oberfläche.',
    subtitle: [
      { t: 'Ein KI-Software-Studio in Wien. Wir entwickeln ' },
      { t: 'individuelle Software', strong: true },
      { t: ' und ' },
      { t: 'KI-Automatisierung', strong: true },
      {
        t: ', von Systemen, die unbemerkt im Hintergrund laufen, bis zu den Werkzeugen, die Ihr Team täglich nutzt. Wir beraten Sie außerdem zur ',
      },
      { t: 'KI & IT', strong: true },
      { t: ' dahinter.' },
    ],
    closer: 'Wir übernehmen den schwierigen Teil. Sie ernten den Erfolg.',
    ctaStart: 'Projekt starten',
    ctaBuildLog: 'Build-Log ansehen',
    panelHeader: '~/sns — leistungen',
    panelStatus: 'verfügbar',
    services: [
      { name: 'Individuelle Software', desc: 'Web-, Mobile- & interne Tools, passgenau gebaut.' },
      { name: 'KI-Automatisierung', desc: 'Pipelines & Agenten, die Routinearbeit abnehmen.' },
      { name: 'KI- & IT-Beratung', desc: 'Strategie, Architektur & praktische Umsetzung.' },
    ],
  },
  whatWeDo: {
    eyebrow: 'was wir tun',
    heading: 'Drei Dinge, kompromisslos umgesetzt.',
    items: [
      {
        main: 'Wir automatisieren die Arbeit, die Ihr Unternehmen ausbremst.',
        sub: 'Komplexe Integrationen, KI-Pipelines und Datenworkflows, gebaut, um unbemerkt im Hintergrund zu laufen.',
      },
      {
        main: 'Wir bauen Softwareprodukte, die Menschen wirklich bedienen können.',
        sub: 'Technische Tiefe, wo sie zählt. Einfachheit überall sonst.',
      },
      {
        main: 'Wir sind Ingenieure, die auch eigene Produkte bauen.',
        sub: 'Wir nutzen, was wir bauen. Das hält uns ehrlich.',
      },
    ],
    seeAll: 'Alle Leistungen im Detail ansehen',
  },
  buildLog: {
    eyebrow: 'build-log — aktuelle projekte',
    heading: 'Was gerade läuft.',
    note: 'Aktive Projekte unterliegen einer Geheimhaltung. Beschreibungen sind bewusst geschwärzt.',
  },
  team: {
    eyebrow: 'das team',
    heading: 'Drei Gründer. Ein Anspruch.',
    note: 'Wenn es kompliziert zu bedienen ist, ist es nicht fertig.',
    building: 'in Arbeit',
    cta: 'Das Team kennenlernen',
  },
  footer: {
    eyebrow: '> kontakt aufnehmen',
    heading: 'Etwas Komplexes zu vereinfachen?',
    sub: 'Sagen Sie uns, was Sie ausbremst. Wir sagen Ihnen, wie wir es automatisieren würden.',
    ctaStart: 'Projekt starten',
    or: 'oder',
    team: 'Team',
    legal: { imprint: 'Impressum', privacy: 'Datenschutz', terms: 'AGB' },
    status: 'alle Systeme betriebsbereit',
  },
  servicesPage: {
    eyebrow: 'Leistungen',
    heading: 'Was wir tun, klar erklärt.',
    intro:
      'Drei Leistungen, ein Ziel: etwas Komplexes nehmen und einfach im Betrieb machen. Hier steht, was jede bedeutet und was Sie bekommen.',
    problemLabel: 'Das Problem',
    whatWeDoLabel: 'Was wir tun',
    outcomesLabel: 'Was Sie bekommen',
    closingHeading: 'Nicht sicher, welche Sie brauchen?',
    closingSub: 'Sagen Sie uns das Problem. Wir sagen Ihnen, wie wir es angehen würden.',
    closingCta: 'Gespräch starten',
    items: [
      {
        name: 'Individuelle Software',
        tagline: 'Software, die sich Ihrem Unternehmen anpasst, nicht umgekehrt.',
        problem:
          'Standardsoftware passt selten dazu, wie Ihr Unternehmen wirklich arbeitet. Ihr Team biegt seine Abläufe um die Software herum oder flickt Apps zusammen, die nie dafür gedacht waren, miteinander zu sprechen.',
        whatWeDo:
          'Wir konzipieren und bauen Software rund um Ihren konkreten Ablauf: Web-Apps, interne Tools, Dashboards und kundenorientierte Produkte. Solide Technik im Kern und eine Oberfläche, die die tägliche Nutzung wirklich einfach findet.',
        outcomes: [
          'Ein Tool für Ihren Ablauf, kein generisches, an das Sie sich anpassen',
          'Software, die Ihr Team wirklich nutzen möchte',
          'Ein System, das mit Ihnen wächst, statt Sie zu bremsen',
        ],
        example:
          'Zum Beispiel: Echtzeit-Publishing-Engines und interne Betriebstools, gebaut rund um die bestehende Arbeitsweise eines Kunden.',
        cta: 'Individuelle Lösung starten',
      },
      {
        name: 'KI-Automatisierung',
        tagline: 'Lassen Sie die Routinearbeit sich selbst erledigen.',
        problem:
          'Ihr Team verliert jede Woche Stunden an Routinearbeit: Daten zwischen Systemen kopieren, Dokumente von Hand bearbeiten, Updates hinterherlaufen. Das ist langsam, fehleranfällig und skaliert nicht, wenn Sie wachsen.',
        whatWeDo:
          'Wir bauen Automatisierungen und KI-Agenten, die diese Arbeit im Hintergrund erledigen: Dokumentenverarbeitung, Datenabgleich zwischen Ihren Tools und Pipelines, die zuverlässig laufen, ohne dass jemand zusieht.',
        outcomes: [
          'Die Routinearbeit läuft von selbst, rund um die Uhr',
          'Weniger Fehler, weil der Ablauf konsistent ist',
          'Ihr Team gewinnt Zeit für Arbeit, die einen Menschen braucht',
        ],
        example:
          'Zum Beispiel: eine autonome Dokumenten-Ingestion-Pipeline mit OCR und Validierung und ein ereignisgesteuerter Abgleich zwischen CRM, ERP und Analytics.',
        cta: 'Workflow automatisieren',
      },
      {
        name: 'KI- & IT-Beratung',
        tagline: 'Klare Antworten, wo sich KI wirklich lohnt.',
        problem:
          'KI entwickelt sich schnell und die Optionen sind überwältigend. Es ist leicht, Geld für Tools auszugeben, die nicht passen, oder es aufzuschieben, weil man nicht weiß, wo man anfangen soll.',
        whatWeDo:
          'Wir helfen Ihnen herauszufinden, wo sich KI und bessere Systeme für Ihr Unternehmen wirklich lohnen, planen dann die Architektur und bauen sie, wenn Sie möchten. Klare Antworten statt Hype.',
        outcomes: [
          'Ein klarer, umsetzbarer Plan',
          'Ehrliche Beratung von Leuten, die bauen, nicht nur beraten',
          'Ein Partner, der so weit dabeibleibt, wie Sie es brauchen',
        ],
        example:
          'Zum Beispiel: vom ersten Gespräch „wo fangen wir überhaupt an“ bis zu einem laufenden, ausgelieferten System.',
        cta: 'Beratung anfragen',
      },
    ],
  },
  teamPage: {
    eyebrow: 'Das Team',
    heading: 'Die Menschen hinter SNS.',
    intro:
      'Drei Gründer, ein Anspruch: Wenn es kompliziert zu bedienen ist, ist es nicht fertig. Hier sind wir.',
  },
  contactPage: {
    eyebrow: 'Kontakt aufnehmen',
    heading: 'Erzählen Sie uns, was Sie bauen.',
    intro:
      'Individuelle Software, KI-Automatisierung oder KI- & IT-Beratung: Sagen Sie uns, was Sie ausbremst, und wir sagen Ihnen, wie wir es angehen würden. Wir lesen jede Nachricht.',
    details: {
      email: 'E-Mail',
      basedIn: 'Standort',
      basedInValue: 'Wien, Österreich',
      response: 'Antwort',
      responseValue: 'Meist innerhalb von 1–2 Werktagen',
    },
  },
  contactForm: {
    services: ['Individuelle Software', 'KI-Automatisierung', 'KI- & IT-Beratung', 'Etwas anderes'],
    name: 'Name',
    email: 'E-Mail',
    phone: 'Telefon',
    optional: '(optional)',
    service: 'Art der Leistung',
    servicePlaceholder: 'Leistung auswählen…',
    message: 'Nachricht',
    messagePlaceholder: 'Was möchten Sie bauen oder automatisieren? Was bremst Sie?',
    namePlaceholder: 'Max Mustermann',
    emailPlaceholder: 'max@firma.com',
    consent: [
      { t: 'Ich bin einverstanden, dass meine Angaben zur Beantwortung meiner Anfrage verwendet werden, wie in der ' },
      { t: 'Datenschutzerklärung', link: true },
      { t: ' beschrieben.' },
    ],
    submit: 'Anfrage senden',
    sending: 'Wird gesendet…',
    preferEmail: 'Lieber per E-Mail? Erreichen Sie uns unter',
    successTitle: 'Nachricht gesendet.',
    successBody:
      'Danke für Ihre Nachricht. Wir melden uns in Kürze unter der angegebenen E-Mail-Adresse.',
    sendAnother: '← Weitere senden',
    errors: {
      name: 'Bitte geben Sie Ihren Namen ein.',
      email: 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
      emailInvalid: 'Diese E-Mail-Adresse sieht nicht richtig aus.',
      service: 'Bitte wählen Sie eine Leistung.',
      message: 'Bitte etwas ausführlicher, mindestens 10 Zeichen.',
      consent: 'Bitte stimmen Sie vor dem Senden zu.',
      send: 'Beim Senden ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an',
    },
  },
}
