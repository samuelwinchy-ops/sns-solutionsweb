import type { Dictionary } from './en'

// German (Austrian) translation. Formal "Sie". The brand slogan
// "Simplicity is the solution" is intentionally left in English elsewhere.

export const de: Dictionary = {
  nav: {
    home: 'start',
    services: 'maßarbeit',
    solutions: 'produkte',
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
      { t: 'KI-Agenten', strong: true },
      {
        t: ', die die Arbeit automatisieren — von Systemen, die unbemerkt im Hintergrund laufen, bis zu den Werkzeugen, die Ihr Team täglich nutzt. Wir beraten Sie außerdem zur ',
      },
      { t: 'KI & IT', strong: true },
      { t: ' dahinter.' },
    ],
    closer: 'Wir übernehmen den schwierigen Teil. Sie ernten den Erfolg.',
    ctaStart: 'Projekt starten',
    ctaSolutions: 'Produkte ansehen',
    panelHeader: '~/sns — leistungen',
    panelStatus: 'verfügbar',
    services: [
      { name: 'Individuelle Software', desc: 'Web-, Mobile- & interne Tools, passgenau gebaut.' },
      { name: 'KI-Agenten', desc: 'Agenten & Pipelines, die Routinearbeit abnehmen.' },
      { name: 'KI- & IT-Beratung', desc: 'Strategie, Architektur & praktische Umsetzung.' },
    ],
  },
  homeFocus: {
    eyebrow: 'Für wen wir bauen',
    heading: 'Maßgeschneidert für HLK und Immobilien.',
    sub: 'Wir gehen in zwei Branchen in die Tiefe — die Sprache, die Abläufe, die Realität nach Feierabend —, damit unsere Produkte zu Ihrer Arbeitsweise passen.',
    cta: 'Produkte entdecken',
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
    seeAll: 'Alle Maßarbeiten ansehen',
  },
  buildLog: {
    eyebrow: 'build-log — aktuelle projekte',
    heading: 'Was gerade läuft.',
    note: 'Aktive Projekte unterliegen einer Geheimhaltung. Beschreibungen sind bewusst geschwärzt.',
    live: 'Live-Systeme',
    operational: 'in Betrieb',
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
    eyebrow: 'Maßarbeit',
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
        name: 'KI-Agenten',
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
    // Reihenfolge wie die Gründerliste in components/Founders.tsx
    // (Samuel Winch, Nicholas Pellechi, Samson Belachew).
    bios: [
      'Samuel verantwortet die technische Architektur und die Full-Stack-Umsetzung bei SNS. Ursprünglich aus England und als autodidaktischer Entwickler mit betriebswirtschaftlichem Hintergrund konzentriert er sich darauf, komplexe Anforderungen in saubere, zuverlässige Systeme zu übersetzen.',
      'Nicholas verantwortet die Kundenbeziehungen, die Umsetzung und den Betrieb bei SNS. Er kommt aus der Schweiz und hat einen Abschluss in Volkswirtschaftslehre; sein Fokus liegt darauf, zu verstehen, was Kunden wirklich brauchen, bevor eine Zeile Code geschrieben wird.',
      'Samson verantwortet Produktstrategie und Vertrieb bei SNS. Er stammt aus Österreich und hat einen Abschluss in Psychologie; er gestaltet, wie die Fähigkeiten von SNS auf reale Marktbedürfnisse treffen — mit einem Blick für die menschliche Seite dessen, was Technologie löst.',
    ],
  },
  contactPage: {
    eyebrow: 'Kontakt aufnehmen',
    heading: 'Erzählen Sie uns, was Sie bauen.',
    intro:
      'Individuelle Software, KI-Agenten oder KI- & IT-Beratung: Sagen Sie uns, was Sie ausbremst, und wir sagen Ihnen, wie wir es angehen würden. Wir lesen jede Nachricht.',
    details: {
      email: 'E-Mail',
      basedIn: 'Standort',
      basedInValue: 'Wien, Österreich',
      response: 'Antwort',
      responseValue: 'Meist innerhalb von 1–2 Werktagen',
    },
  },
  contactForm: {
    services: ['Individuelle Software', 'KI-Agenten', 'KI- & IT-Beratung', 'Etwas anderes'],
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
  solutionsPage: {
    eyebrow: 'Produkte',
    heading: 'KI, die antwortet, qualifiziert und keinen Lead verliert.',
    intro:
      'Fertige Agenten, die Sie echten Kunden vorsetzen können — beginnend mit einer KI-Rezeption für Handwerk und Immobilien. Gebaut für den DACH-Markt, auf Deutsch und Englisch.',
    product: {
      tag: 'Live-Produkt',
      name: 'KI-Rezeption',
      positioning: 'Nie wieder einen Lead verpassen — auch um 23 Uhr.',
      lead:
        'Eine KI-Rezeption, die jede eingehende Anfrage sofort beantwortet, sie anhand Ihrer Kriterien qualifiziert und die guten an Ihr Team übergibt — rund um die Uhr, auf Deutsch und Englisch.',
    },
    audienceLabel: 'Wählen Sie Ihre Branche — die Rezeption passt sich an',
    audiences: {
      hvac: {
        key: 'hvac',
        label: 'HLK / SHK',
        descriptor: 'Heizung · Sanitär · Installation',
        blurb:
          'Für Heizungs-, Sanitär- und Installationsbetriebe, die in Anfragen außerhalb der Geschäftszeiten untergehen.',
        qualifiers: [
          'Erfasst Auftragsart, Gebäudealter und aktuelles System',
          'Erkennt förderfähige Wärmepumpen-Sanierungen',
          'Leitet dringende Ausfälle direkt an die Disposition',
        ],
      },
      realEstate: {
        key: 'realEstate',
        label: 'Immobilien',
        descriptor: 'Verkauf · Vermietung · Vermittlung',
        blurb:
          'Für Maklerbüros, die Käufer und Verkäufer an den verlieren, der zuerst antwortet.',
        qualifiers: [
          'Erfasst Budget, Lage und Kauf- oder Verkaufsabsicht',
          'Trennt ernsthafte Käufer von bloßen Interessenten',
          'Leitet qualifizierte Leads sofort an den richtigen Makler',
        ],
      },
    },
    featuresLabel: 'Was sie leistet',
    features: [
      'Sofortige Antwort auf eingehende Anfragen — Webformular, WhatsApp oder Chat',
      'Qualifiziert jeden Lead anhand Ihrer Kriterien, bevor er Ihr Team erreicht',
      'Leitet qualifizierte Leads direkt an Vertrieb oder Disposition',
      'Bucht und offeriert nie eigenständig — ein Mensch bestätigt immer',
      'Spricht Deutsch (Sie-Form) und Englisch, im passenden DACH-Ton',
    ],
    outcomesLabel: 'Was Sie bekommen',
    outcomes: [
      'Schnellere erste Antwort — und höhere Conversion bei eingehenden Leads',
      'Kein Lead geht außerhalb der Geschäftszeiten oder am Wochenende verloren',
      'Ihr Team kümmert sich um qualifizierte Leads, nicht um Zeitfresser',
    ],
    guardrail: {
      label: 'Bewusst so gebaut',
      text: 'Wir lassen die KI Ihren Kunden keine Versprechen machen. Sie erfasst und qualifiziert — Preise, Termine und Zusagen bestätigt immer ein Mensch.',
    },
    demo: {
      label: 'So funktioniert es',
      heading: 'Eine echte Anfrage, nach Feierabend.',
      replay: 'Erneut abspielen',
      agentLabel: 'KI-Rezeption',
      leadLabel: 'Lead',
      hvac: {
        sub: 'Ein Lead für eine Wärmepumpen-Sanierung kommt um 23:14 herein. Niemand ist im Büro. Das passiert dann.',
        channel: 'Eingang · Webformular · 23:14',
        qualified: 'Lead qualifiziert → an Disposition geleitet · menschliche Rückmeldung eingeplant',
        script: [
          { from: 'lead', text: 'Hallo, wir sanieren ein altes Haus bei Graz und überlegen eine Wärmepumpe. Machen Sie so etwas?' },
          { from: 'agent', text: 'Guten Abend — ja, Wärmepumpen-Sanierungen sind genau unser Gebiet. Damit ich Sie an die richtige Person weiterleite: Darf ich ein paar kurze Fragen stellen?' },
          { from: 'agent', text: 'Wie groß ist etwa die beheizte Fläche, und wissen Sie das Baujahr des Gebäudes?' },
          { from: 'lead', text: 'Rund 180 m², Baujahr 1968. Aktuell Ölheizung.' },
          { from: 'agent', text: 'Danke — ein Wechsel von Öl auf Wärmepumpe bei Baujahr 1968 ist gut machbar, und es gibt womöglich eine Förderung. Ist die Immobilie selbst bewohnt?' },
          { from: 'lead', text: 'Ja, wir wohnen dort.' },
          { from: 'agent', text: 'Perfekt. Ich habe das als sehr gut passend qualifiziert und Ihre Angaben an unser Projektteam übergeben — es meldet sich morgen früh. Es wird nichts gebucht oder offeriert, bevor Sie direkt mit dem Team gesprochen haben.' },
        ],
      },
      realEstate: {
        sub: 'Ein Käufer schreibt um 21:40 zu einem Inserat — lange nach Büroschluss. Das passiert dann.',
        channel: 'Eingang · Instagram-DM · 21:40',
        qualified: 'Lead qualifiziert → an zuständigen Makler geleitet · Besichtigung eingeplant',
        script: [
          { from: 'lead', text: 'Hallo! Ich habe die 3-Zimmer-Wohnung im 1070er auf Ihrem Instagram gesehen. Ist sie noch verfügbar, und könnten wir sie dieses Wochenende besichtigen?' },
          { from: 'agent', text: 'Guten Abend — danke für Ihre Nachricht! Die Wohnung im 7. Bezirk ist noch verfügbar. Ich kann eine Besichtigung organisieren; darf ich vorab ein paar kurze Fragen stellen?' },
          { from: 'agent', text: 'Suchen Sie zum Eigenbezug oder als Anlage, und haben Sie einen Budgetrahmen im Kopf?' },
          { from: 'lead', text: 'Zum Eigenbezug. Bis etwa 450.000 €, und wir bräuchten eine Finanzierung.' },
          { from: 'agent', text: 'Perfekt — das liegt im Rahmen für dieses Inserat. Ist Ihre Finanzierung bereits vorab genehmigt, oder müsste das noch organisiert werden?' },
          { from: 'lead', text: 'Noch nicht, das müssten wir klären.' },
          { from: 'agent', text: 'Verstanden. Ich habe Sie als qualifizierten Käufer markiert und Ihre Angaben an den zuständigen Makler übergeben — er meldet sich morgen für die Besichtigung und nennt Ihnen einen Finanzierungspartner. Es wird nichts fixiert, bevor Sie direkt mit ihm gesprochen haben.' },
        ],
      },
    },
    proofLabel: 'Erste Ergebnisse',
    proof: [
      { stat: '< 30s', label: 'Erste Antwort, Tag und Nacht' },
      { stat: '24/7', label: 'Erreichbarkeit, auch am Wochenende' },
      { stat: '2 Sprachen', label: 'Deutsch (Sie) & Englisch' },
    ],
    faqLabel: 'Häufige Fragen',
    faq: [
      { q: 'Bucht sie Termine oder nennt sie Preise?', a: 'Nein — bewusst nicht. Sie erfasst und qualifiziert den Lead, dann bestätigt ein Mensch alles Verbindliche. Wir lassen die KI Ihren Kunden keine Versprechen machen.' },
      { q: 'Was kostet das?', a: 'Einfache monatliche Preise nach Kanälen und Volumen — keine Gebühr pro Lead. Sagen Sie uns Ihr Setup, und wir erstellen ein Angebot.' },
      { q: 'Wie lange dauert die Einrichtung?', a: 'Die meisten Einführungen gehen innerhalb von 2–3 Wochen live, inklusive Feinabstimmung der Qualifizierungslogik auf Ihr Unternehmen.' },
      { q: 'Welche Sprachen und Kanäle?', a: 'Heute Deutsch (Sie-Form) und Englisch, über Webformular, WhatsApp und Chat. Leads landen in Ihrem Postfach, CRM oder in der Disposition — dort, wo Sie ohnehin arbeiten.' },
    ],
    ctaHeading: 'Möchten Sie es an Ihren eigenen Anfragen sehen?',
    ctaSub: 'Sagen Sie uns, wie Leads heute bei Ihnen ankommen, und wir zeigen Ihnen genau, wo die Rezeption ansetzt.',
    ctaButton: 'Walkthrough buchen',
    stickyCta: 'In Aktion ansehen',
    waitlistTeaser: {
      tag: 'In Entwicklung',
      heading: 'Als Nächstes: eine agentische Suite für Immobilien.',
      sub: 'Vom Lead über das Inserat bis zum Abschluss — ein agentisches OS für Makler. Tragen Sie sich für den Early Access ein.',
      cta: 'Auf die Warteliste',
    },
  },
  waitlistPage: {
    eyebrow: 'build-log — in entwicklung',
    heading: 'Die agentische Immobilien-Suite. Öffentlich gebaut.',
    intro:
      'Ein agentisches OS für Immobilienmakler — vom Lead über das Inserat bis zum Abschluss. Ein Teil ist schon heute verfügbar; der Rest steht in der Roadmap unten. Tragen Sie sich für den Early Access ein und gestalten Sie mit, was wir als Nächstes bauen.',
    tiersLabel: 'Roadmap',
    tiers: [
      {
        label: 'Jetzt verfügbar',
        status: 'in Betrieb',
        items: [
          'Inserats-Kit & Marketing-Assistent — automatisch erstellte Beschreibungen, Captions, Exposés und E-Mail-Kampagnen',
          'Plattformübergreifende Social-Media-Planung & -Verteilung',
        ],
      },
      {
        label: 'Als Nächstes',
        status: 'in Arbeit',
        items: ['KI-Staging', 'Micro-Kampagnen-Generator', 'Besichtigungs-Planer', 'Konversationelle Lead-KI'],
      },
      {
        label: 'Später — Netzwerk-Tier',
        status: 'geplant',
        items: [
          'CMA-Co-Pilot',
          'Prüfung der Dokumentenvollständigkeit (vor dem Notartermin)',
          'Onboarding- & Coaching-Tools',
          'Gemeinsames Wissens-Repository',
        ],
      },
    ],
    form: {
      heading: 'Auf die Early-Access-Liste',
      sub: 'Noch kein Preis, kein Termin — nur früher Zugang und Mitsprache bei den Prioritäten.',
      name: 'Name',
      namePlaceholder: 'Max Mustermann',
      email: 'E-Mail',
      emailPlaceholder: 'max@maklerbuero.com',
      size: 'Größe des Büros',
      sizePlaceholder: 'Auswählen…',
      sizes: ['Einzelmakler', 'Team', 'Franchise'],
      consent: [
        { t: 'Ich bin einverstanden, dass meine Angaben verwendet werden, um mich zum Early Access zu kontaktieren, wie in der ' },
        { t: 'Datenschutzerklärung', link: true },
        { t: ' beschrieben.' },
      ],
      submit: 'Auf die Warteliste',
      sending: 'Wird eingetragen…',
      successTitle: 'Sie sind auf der Liste.',
      successBody: 'Danke — wir melden uns, sobald Early-Access-Plätze frei werden.',
      sendAnother: '← Weitere hinzufügen',
      errors: {
        name: 'Bitte geben Sie Ihren Namen ein.',
        email: 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
        emailInvalid: 'Diese E-Mail-Adresse sieht nicht richtig aus.',
        size: 'Bitte wählen Sie eine Bürogröße.',
        consent: 'Bitte stimmen Sie vor dem Eintragen zu.',
        send: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an',
      },
    },
  },
}
