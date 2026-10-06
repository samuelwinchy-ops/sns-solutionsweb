import type { Dictionary } from './en'

// German (Austrian) translation. Formal "Sie". The brand slogan
// "Simplicity is the solution" is intentionally left in English elsewhere.

export const de: Dictionary = {
  nav: {
    home: 'Start',
    products: 'Produkte',
    services: 'Beratung',
    realEstate: 'Immvela',
    qfutool: 'QFUtool',
    team: 'Team',
    contact: 'Kontakt',
  },
  hero: {
    // Siehe en.ts — die Überschrift ist das Ergebnis für den Kunden, nicht die
    // Technik dahinter.
    h1a: 'Was gestern Stunden gedauert hat,',
    h1b: 'erledigt sich heute von selbst.',
    ctaProducts: 'Unsere Produkte',
  },
  // Siehe en.ts. QFUtool-Texte entsprechen qfutool.com/de.
  cinema: {
    email: {
      sent: 'Gesendet',
      sentValue: 'Donnerstag 10:00',
      followUp: 'Nachfassen 2',
      greeting: 'Guten Tag Herr Huber,',
      body: 'ich wollte kurz zu unserem Angebot über 1.250 € vom Montag nachfragen. Bei Fragen rufe ich Sie gerne an.',
      reply: 'Klingt gut. Können wir am Freitag telefonieren?',
      replyNote: 'Antwort erhalten · Nachfassen gestoppt',
    },
  },
  products: {
    learnMore: 'Mehr erfahren',
    immvela: {
      audience: 'Für Makler',
      cta: 'Für die geschlossene Beta bewerben',
      phoneAlt: 'Der Anmeldebildschirm von Immvela am Handy',
    },
    qfutool: {
      audience: 'Für Verkäufer',
      tagline: 'Das Angebot ist raus. Jetzt muss jemand nachfassen.',
      desc: 'Laden Sie die Tabelle mit den Angeboten hoch, die rausgegangen sind. QFUtool fasst bei jedem Kunden in Ihrem Namen und zu Geschäftszeiten nach und gibt Ihnen die, die antworten.',
      status: '14 Tage kostenlos · kein CRM einzurichten',
      cta: 'Kostenlos testen',
    },
  },
  // Siehe en.ts.
  home: {
    slidesLabel: 'Unsere Produkte',
    immvelaAudience: 'Für Immobilienmakler',
    qfutoolAudience: 'Für den Vertrieb',
    pause: 'Produkt-Diashow anhalten',
    play: 'Produkt-Diashow abspielen',
    marqueePause: 'Logos anhalten',
    marqueePlay: 'Logos abspielen',
    googleSignIn: 'Google-Anmeldung',
    microsoftSignIn: 'Microsoft-Anmeldung',
    integrations: 'Integrationen',
    soon: 'Bald',
    comingSoon: 'demnächst',
    latestEyebrow: 'Aktuell',
    latestHeading: 'Neuigkeiten',
    moreStories: 'Weitere Beiträge',
    prevStories: 'Vorherige Beiträge',
    nextStories: 'Nächste Beiträge',
    updateTitle: 'immvela.com ist online, und die Bewerbung für die geschlossene Beta ist offen.',
    updateAlt: 'Die Anmeldeseite von Immvela auf einem Laptop und einem Smartphone',
    articlesInEnglish: 'Die Artikel sind auf Englisch.',
  },
  productsPage: {
    title: 'Unsere Produkte',
    description:
      'Immvela, der persönliche KI-Assistent für Immobilien, und QFUtool, automatisches Nachfassen von Angeboten. Zwei Produkte von SNS Solutions aus Wien.',
    heading: 'Unsere Produkte',
    line: 'Zwei Werkzeuge, jedes für eine Aufgabe.',
    immvelaTagline: 'Ihr persönlicher KI-Assistent für Immobilien.',
    qfutoolPrice: '14 Tage kostenlos, danach ab 19 € pro Monat.',
    exampleEmail: 'Beispielmail',
  },
  consult: {
    eyebrow: 'Beratung',
    heading: 'Soll KI in Ihrem Unternehmen echte Arbeit übernehmen?',
    sub: 'Buchen Sie ein kostenloses 30-Minuten-Gespräch. Wir sehen uns an, wie Ihr Team arbeitet, sagen Ihnen offen, wo sich KI lohnt, und setzen sie um, wenn ja.',
    cta: 'Kostenlose Beratung buchen',
    link: 'So läuft Maßarbeit ab',
  },
  // Siehe en.ts — der Abschnitt fängt jetzt genau die Besucher auf, für die
  // Immvela nicht passt. Die vier Stufen bleiben, der Rahmen darum ist neu.
  customBuilds: {
    eyebrow: 'So läuft Maßarbeit ab',
    heading: 'Vom ersten Gespräch bis zur Übergabe.',
    sub: 'Vier Schritte, und den zweiten lassen die meisten aus: Wir messen die Arbeit, bevor wir sie anfassen, damit Sie am Ende sehen, was sich geändert hat.',
    steps: [
      {
        k: '01',
        name: 'Gemeinsam durchgehen',
        main: 'Sie schildern es. Wir stellen die härteren Fragen.',
        sub: 'Dreißig Minuten, online, kostenlos und unverbindlich. Bringen Sie den Ablauf mit, der Sie Zeit kostet, und wir sagen Ihnen, was er wirklich brauchen würde.',
      },
      {
        k: '02',
        name: 'Ausgangswert',
        main: 'Wir messen, bevor wir etwas anfassen.',
        sub: 'Bearbeitungszeit, Fehlerquote, Kosten pro Objekt oder pro Abschluss. Ohne Zahl von vorher ist „fühlt sich schneller an“ das einzige Ergebnis, das je herauskommen kann.',
      },
      {
        k: '03',
        name: 'Pilot',
        main: 'Ein Ablauf, live, in Wochen.',
        sub: 'Der kleinste Aufbau, der den Fall beweist, an Ihren echten Objekten und echten Leads statt als Demo mit Beispieldaten.',
      },
      {
        k: '04',
        name: 'Nachweis & Übergabe',
        main: 'Dieselbe Messung, noch einmal.',
        sub: 'Vorher und nachher nebeneinander. Das System, die Dokumentation und die Entscheidung über den nächsten Schritt gehören Ihnen.',
      },
    ],
    note: 'Und wenn die ehrliche Antwort „das brauchen Sie nicht“ lautet, dann ist das die Antwort, die Sie bekommen.',
    cta: 'Sagen Sie uns, was Sie brauchen',
  },
  footer: {
    eyebrow: 'Kontakt',
    heading: 'Dauert in Ihrem Team etwas zu lange?',
    sub: 'Sagen Sie uns, was es ist. Wir sagen Ihnen, ob es sich automatisieren lässt und was das bräuchte.',
    ctaStart: 'Kostenlose Beratung buchen',
    or: 'oder',
    team: 'Team',
    legal: { imprint: 'Impressum', privacy: 'Datenschutz', terms: 'AGB' },
    cols: { products: 'Produkte', company: 'Unternehmen', legal: 'Rechtliches' },
    contact: 'Kontakt',
    blog: 'Blog',
  },
  servicesPage: {
    eyebrow: 'Maßarbeit & KI-Beratung',
    heading: 'Software nach Maß für die Arbeit, die Ihre Woche frisst.',
    intro:
      'Nicht jede Aufgabe lohnt sich zu automatisieren. Wir beginnen mit einem Gespräch darüber, wie Ihr Team arbeitet, sagen Ihnen, welche Teile sich lohnen und welche nicht, und bauen erst, wenn es sich rechnet.',
    consult: {
      tag: 'Kostenlose Beratung',
      heading: 'Buchen Sie ein kostenloses Online-Meeting.',
      sub: 'Dreißig Minuten, online, kostenlos und unverbindlich. Sagen Sie uns, wie Ihr Team heute arbeitet, und wir sagen Ihnen, wo sich KI und bessere Systeme wirklich lohnen, und wo nicht.',
      points: [
        '30 Minuten online, über Google Meet, Teams oder Zoom',
        'Eine konkrete Empfehlung in klarer Sprache, die Sie umsetzen können',
        'Keine Verpflichtung, etwas mit uns zu bauen',
      ],
      cta: 'Online-Meeting buchen',
      aside: 'Lieber per E-Mail? Schreiben Sie uns, wir antworten mit Terminvorschlägen.',
    },
    problemLabel: 'Das Problem',
    whatWeDoLabel: 'Was wir tun',
    outcomesLabel: 'Was Sie bekommen',
    closingHeading: 'Nicht sicher, welche Sie brauchen?',
    closingSub:
      'Schildern Sie uns das Problem in einem kostenlosen 30-Minuten-Gespräch. Wir sagen Ihnen, wie wir es angehen würden, oder ehrlich, wenn Sie uns nicht brauchen.',
    closingCta: 'Online-Meeting buchen',
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
        name: 'KI & Automatisierung',
        tagline: 'Routinearbeit, im Hintergrund von Ihren eigenen Systemen erledigt.',
        problem:
          'Ihr Team verliert jede Woche Stunden an Routinearbeit: Daten zwischen Systemen kopieren, Dokumente von Hand bearbeiten, Updates hinterherlaufen. Das ist langsam, fehleranfällig und skaliert nicht, wenn Sie wachsen.',
        whatWeDo:
          'Wir bauen Automatisierungen, die diese Arbeit übernehmen: eingehende Dokumente auslesen, Daten zwischen Ihren Tools abgleichen und geplante Abläufe, die laufen, ohne dass jemand zusieht.',
        outcomes: [
          'Die Routinearbeit läuft von selbst, rund um die Uhr',
          'Weniger Fehler, weil der Ablauf konsistent ist',
          'Ihr Team gewinnt Zeit für Arbeit, die einen Menschen braucht',
        ],
        example:
          'Zum Beispiel: gescannte Dokumente, die automatisch ausgelesen, geprüft und abgelegt werden, und ein CRM, ein ERP und Auswertungen, die sich von selbst abgleichen.',
        cta: 'Workflow automatisieren',
      },
      {
        name: 'KI- & IT-Beratung',
        tagline: 'Klare Antworten, wo sich KI lohnt.',
        problem:
          'Es ist schwer zu sagen, welche KI-Tools ihr Geld wert sind. Kauft man das falsche, bleibt es ungenutzt; wartet man zu lange, bleibt die Arbeit Handarbeit.',
        whatWeDo:
          'Wir sehen uns an, wie Ihr Team arbeitet, sagen Ihnen, welche Teile sich zu automatisieren lohnen und welche nicht, und schreiben einen Plan. Wenn Sie möchten, bauen wir ihn auch.',
        outcomes: [
          'Ein schriftlicher Plan, den Sie umsetzen können',
          'Beratung von Leuten, die das selbst bauen',
          'Unterstützung, so lange Sie sie brauchen, und nicht länger',
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
    intro: 'Drei Gründer, ein Anspruch: Wenn es kompliziert zu bedienen ist, ist es nicht fertig.',
    // Reihenfolge wie die Gründerliste in components/Founders.tsx
    // (Samuel Winch, Nicholas Pellechi, Samson Belachew).
    bios: [
      'Samuel verantwortet die technische Architektur und die Full-Stack-Umsetzung bei SNS. Ursprünglich aus England und als autodidaktischer Entwickler mit betriebswirtschaftlichem Hintergrund konzentriert er sich darauf, komplexe Anforderungen in saubere, zuverlässige Systeme zu übersetzen.',
      'Nicholas verantwortet die Kundenbeziehungen, die Umsetzung und den Betrieb bei SNS. Er kommt aus der Schweiz und hat einen Abschluss in Volkswirtschaftslehre; sein Fokus liegt darauf, zu verstehen, was Kunden wirklich brauchen, bevor eine Zeile Code geschrieben wird.',
      'Samson verantwortet Produktstrategie und Vertrieb bei SNS. Er stammt aus Österreich und hat einen Abschluss in Psychologie; er gestaltet, wie die Fähigkeiten von SNS auf reale Marktbedürfnisse treffen, mit einem Blick für die menschliche Seite dessen, was Technologie löst.',
    ],
  },
  contactPage: {
    eyebrow: 'Kontakt aufnehmen',
    heading: 'Was können wir Ihnen abnehmen?',
    intro:
      'Sagen Sie uns, was in Ihrem Team zu lange dauert, und wir sagen Ihnen, wie wir es angehen würden. Wir lesen jede Nachricht und antworten selbst.',
    details: {
      email: 'E-Mail',
      basedIn: 'Standort',
      basedInValue: 'Wien, Österreich',
      response: 'Antwort',
      responseValue: 'Meist innerhalb von 1–2 Werktagen',
    },
  },
  contactForm: {
    services: [
      'Immvela · Immobilien',
      'QFUtool',
      'Individuelle Software',
      'KI & Automatisierung',
      'KI- & IT-Beratung',
      'Etwas anderes',
    ],
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
      {
        t: 'Ich bin einverstanden, dass meine Angaben zur Beantwortung meiner Anfrage verwendet werden, wie in der ',
      },
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
