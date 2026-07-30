import type { Dictionary } from './en'

// German (Austrian) translation. Formal "Sie". The brand slogan
// "Simplicity is the solution" is intentionally left in English elsewhere.

export const de: Dictionary = {
  nav: {
    home: 'start',
    services: 'maßarbeit',
    solutions: 'produkte',
    hvac: 'hlk / shk',
    realEstate: 'immvela',
    team: 'team',
    contact: 'kontakt',
  },
  hero: {
    h1a: 'Agentische Software,',
    h1b: 'nachweisbar wirksam.',
    subtitle: [
      { t: 'Ein Wiener Studio, das KI-Agenten für zwei Branchen baut. In der ' },
      { t: 'Immobilienbranche', strong: true },
      { t: ' mit unserer eigenen Plattform ' },
      { t: 'Immvela', strong: true },
      { t: '. In der ' },
      { t: 'HLK-Branche', strong: true },
      { t: ' beraten wir zur Digitalisierung und setzen die KI dahinter um, mit einem Nutzen, den Sie nachrechnen können.' },
    ],
    ctaStart: 'Kostenlose Beratung buchen',
    ctaSolutions: 'Produkte ansehen',
  },
  homeFocus: {
    eyebrow: 'Für wen wir bauen',
    heading: 'Maßgeschneidert für HLK und Immobilien.',
    sub: 'Wir kennen zwei Branchen in- und auswendig: ihre Sprache, ihre Abläufe, ihren Arbeitsalltag. So passen unsere Produkte zu der Art, wie Sie ohnehin arbeiten.',
    cta: 'Produkte entdecken',
  },
  howWeWork: {
    eyebrow: 'wie wir arbeiten',
    heading: 'KI, die Sie nachrechnen können.',
    sub: 'Die meisten KI-Projekte enden gleich: Es geht live, alle finden es fühlt sich schneller an, und niemand kann sagen, was es tatsächlich gebracht hat. Wir drehen das um. Gemessen wird zuerst. Am Ende steht eine Zahl, die man prüfen kann, statt eines Gefühls, über das man streitet.',
    steps: [
      {
        k: '01',
        name: 'Analyse',
        main: 'Wir finden, wohin die Stunden wirklich gehen.',
        sub: 'Zeit in Ihren Abläufen, kein Fragebogen. Sie bekommen eine schriftliche Übersicht: welche Arbeit sich zu automatisieren lohnt, und welche nicht.',
      },
      {
        k: '02',
        name: 'Ausgangswert',
        main: 'Wir messen, bevor wir etwas anfassen.',
        sub: 'Bearbeitungszeit, Fehlerquote, Kosten pro Auftrag. Ohne Zahl von vorher ist „fühlt sich schneller an“ das einzige Ergebnis, das je herauskommen kann.',
      },
      {
        k: '03',
        name: 'Pilot',
        main: 'Ein Ablauf, live, in Wochen.',
        sub: 'Der kleinste Aufbau, der den Fall beweist, im echten Betrieb und nicht als Demo mit Beispieldaten.',
      },
      {
        k: '04',
        name: 'Nachweis & Übergabe',
        main: 'Dieselbe Messung, noch einmal.',
        sub: 'Vorher und nachher nebeneinander. Das System, die Dokumentation und die Entscheidung über den nächsten Schritt gehören Ihnen.',
      },
    ],
    note: 'Und wenn die Analyse ergibt, dass die ehrliche Antwort „nicht automatisieren“ lautet, dann ist das die Antwort, die Sie bekommen.',
    cta: 'Alle Maßarbeiten ansehen',
  },
  announce: {
    tag: 'Jetzt im Early Access',
    heading: 'Das ist Immvela.',
    body: 'Unsere eigene Plattform für Immobilienteams: das Betriebssystem hinter Ihren Objekten, Leads und Abschlüssen. Zwei Module live, der Rest entsteht offen.',
    cta: 'Auf die Warteliste',
    dismiss: 'Schließen',
  },
  buildLog: {
    eyebrow: 'build-log · aktuelle projekte',
    heading: 'Was gerade läuft.',
    note: 'Aktive Projekte unterliegen einer Geheimhaltung. Beschreibungen sind bewusst geschwärzt.',
    live: 'Live-Systeme',
    operational: 'in Betrieb',
  },
  footer: {
    eyebrow: '> kontakt aufnehmen',
    heading: 'Etwas Komplexes zu vereinfachen?',
    sub: 'Sagen Sie uns, was Sie ausbremst. Wir sagen Ihnen, wie wir es automatisieren würden.',
    ctaStart: 'Kostenlose Beratung buchen',
    or: 'oder',
    team: 'Team',
    legal: { imprint: 'Impressum', privacy: 'Datenschutz', terms: 'AGB' },
    status: 'alle Systeme betriebsbereit',
  },
  servicesPage: {
    eyebrow: 'Maßarbeit & KI-Beratung',
    heading: 'Finden wir heraus, wo KI wirklich passt.',
    intro:
      'Die meisten Teams brauchen nicht mehr Software. Sie brauchen Klarheit darüber, welcher Teil ihrer Arbeit sich zu automatisieren lohnt und welcher nicht. Deshalb beginnen wir mit einem Gespräch, geben Ihnen eine klare Antwort und bauen erst dann etwas, wenn es sich wirklich lohnt.',
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
    closingSub: 'Schildern Sie uns das Problem in einem kostenlosen 30-Minuten-Gespräch. Wir sagen Ihnen, wie wir es angehen würden, oder ehrlich, wenn Sie uns nicht brauchen.',
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
        tagline: 'Individuelle Automatisierung und Agenten, gebaut rund um Ihre eigenen Systeme.',
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
      'Samson verantwortet Produktstrategie und Vertrieb bei SNS. Er stammt aus Österreich und hat einen Abschluss in Psychologie; er gestaltet, wie die Fähigkeiten von SNS auf reale Marktbedürfnisse treffen, mit einem Blick für die menschliche Seite dessen, was Technologie löst.',
    ],
  },
  contactPage: {
    eyebrow: 'Kontakt aufnehmen',
    heading: 'Was können wir Ihnen abnehmen?',
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
    services: ['HLK / SHK', 'Immvela · Immobilien', 'Individuelle Software', 'KI & Automatisierung', 'KI- & IT-Beratung', 'Etwas anderes'],
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
    heading: 'Wählen Sie den Agenten, den Sie brauchen, oder gleich die ganze Suite.',
    intro:
      'Modulare Agenten für zwei Branchen, die wir genau kennen. Automatisieren Sie den Teil Ihres Ablaufs, den Sie jetzt abgeben möchten, oder tragen Sie sich für die komplette Suite ein. Gebaut für den DACH-Markt, auf Deutsch und Englisch.',
    bundleNote: 'Kaufen Sie, was Sie jetzt brauchen, oder tragen Sie sich für die komplette Suite ein.',
    whatLabel: 'Was es leistet',
    outcomeLabel: 'Ergebnis',
    status: { live: 'Live', beta: 'Beta', waitlist: 'Warteliste', roadmap: 'Roadmap' },
    cta: { live: 'Kontakt aufnehmen', beta: 'Early Access anfragen', waitlist: 'Auf die Warteliste', roadmap: 'Auf die Warteliste' },
    demoCta: 'So funktioniert es',
    appCta: 'In Immvela öffnen',
    indexCta: 'Produkte ansehen',
    industries: [
      {
        key: 'hvac',
        label: 'HLK / SHK',
        descriptor: 'Heizung · Sanitär · Installation',
        blurb: 'Für Heizungs-, Sanitär- und Installationsbetriebe: von der ersten Anfrage über die Terminbuchung bis zu den Nachweisen nach dem Auftrag.',
        categories: [
          {
            key: 'inbound',
            name: 'Anfragen-Handling',
            status: 'live',
            demo: true,
            what: 'Nimmt jeden Anruf und jede Nachricht sofort entgegen, über Sprache, Webformular, WhatsApp oder Chat. Sie qualifiziert anhand Ihrer Kriterien und leitet die guten Leads an Ihr Team. Deutsch (Sie-Form) und Englisch.',
            outcome: 'Schnellere erste Antwort, und kein Lead geht außerhalb der Geschäftszeiten verloren.',
          },
          {
            key: 'scheduling',
            name: 'Termine & Buchung',
            status: 'roadmap',
            demo: false,
            what: 'Menschlich bestätigte Termin- und Rückrufplanung, sobald ein Lead qualifiziert ist.',
            outcome: 'Weniger Hin und Her, um einen qualifizierten Lead in den Kalender zu bekommen.',
          },
          {
            key: 'docs',
            name: 'Dokumentation & Compliance',
            status: 'roadmap',
            demo: false,
            what: 'Nachweise nach der Installation: BEG-Auszahlungsnachweise, F-Gas-Protokolle, JAZ-Nachweise.',
            outcome: 'Nimmt den Verwaltungsaufwand, der Auszahlungen und Audits verzögert.',
          },
        ],
      },
      {
        key: 'realEstate',
        label: 'Immvela',
        descriptor: 'Immobilien · Verkauf & Vermietung',
        blurb: 'Unsere eigene Plattform, Modul für Modul verkauft. Jedes steht für sich, und alle schreiben auf denselben Datenbestand Ihrer Objekte, Leads und Abschlüsse zurück.',
        // Namen und Status folgen STATUS.md im Immvela-Repo — siehe den Hinweis
        // bei waitlistPage.modules. 'live' = heute angemeldet nutzbar;
        // 'waitlist' = in aktiver Entwicklung; 'roadmap' = spezifiziert und in
        // der Warteschlange. Bullseye (Bewertung/CMA) ist bewusst nicht dabei.
        categories: [
          {
            key: 'listingKit',
            name: 'Listing Kit (Quill)',
            status: 'live',
            demo: false,
            what: 'Drei Generatoren aus einem Objekt: Social-Captions, die Broschüre und das vollständige Exposé. Objektdaten-Bezeichnungen und Abschnittsnamen bleiben deutsch, weil sie echte Dokumente benennen.',
            outcome: 'Der Inseratstext ist keine Abendarbeit mehr, und jeder Kanal bekommt Texte im selben Ton.',
          },
          {
            key: 'publishing',
            name: 'Veröffentlichung (Verlag)',
            status: 'live',
            demo: false,
            what: 'Medienbibliothek, Composer und Terminplan über alle Kanäle, mit einer Compliance-Prüfung, die einen Beitrag zurückhält, bis die nötigen Pflichtangaben darauf sind. Bei jedem bezahlten Modul kostenlos dabei.',
            outcome: 'Ein Ort zum Einplanen, und nichts geht ohne Pflichtangabe raus.',
          },
          {
            key: 'reception',
            name: 'Empfang (Iris)',
            status: 'waitlist',
            demo: true,
            what: 'Qualifiziert jede Anfrage nach Budget, Absicht und Finanzierung und leitet sie an den richtigen Makler weiter. Bucht nie, bepreist nie.',
            outcome: 'Schnellere Antwort auf Anfragen und besser qualifizierte Besichtigungen, wenn ein Mensch übernimmt.',
          },
          {
            key: 'knowledge',
            name: 'Wissen (Winston)',
            status: 'waitlist',
            demo: false,
            what: 'Ein DACH-Immobilien-Copilot, der aus einem gepflegten Fachkorpus plus der Ebene Ihres eigenen Büros antwortet und dazu angibt, aus welcher Quelle jede Antwort stammt.',
            outcome: 'Ein neuer Makler bekommt die Antwort des Büros, nicht seine beste Vermutung.',
          },
          {
            key: 'staging',
            name: 'Staging (Vignette)',
            status: 'roadmap',
            demo: false,
            what: 'Das Foto eines leeren oder veralteten Raums kommt fotorealistisch möbliert zurück. Möbel, Styling und Beleuchtung werden digital ergänzt, die Raumstruktur bleibt unverändert. Jedes Bild wird als KI-gestagt gekennzeichnet, im Einklang mit den Transparenzvorgaben des EU AI Act.',
            outcome: 'Verkaufsfertige Räume ohne Staging-Budget, inklusive Kennzeichnung.',
          },
          {
            key: 'walkthrough',
            name: 'Rundgang (Immerse)',
            status: 'roadmap',
            demo: false,
            what: 'Einmal mit dem Handy durch das Objekt gehen. Der Rundgang wird in 3D rekonstruiert und als Rundgangsvideo für Inserat und Social ausgegeben, ohne Kamerateam und ohne 3D-Scanner.',
            outcome: 'Ein Rundgang bei jedem Objekt, nicht nur bei denen, für die sich ein Videograf lohnt.',
          },
          {
            key: 'docs',
            name: 'Dokumente (Dossier)',
            status: 'roadmap',
            demo: false,
            what: 'Liest die Unterlagen zum Inserat, Energieausweis und Ähnliches, zieht die angabepflichtigen Werte heraus und legt Ihnen jeden einzelnen zur Bestätigung vor. Es prüft und liest aus; es prüft keine Verträge.',
            outcome: 'Lücken bei den Pflichtangaben tauchen auf, solange sie sich noch beheben lassen, und nicht erst beim Notartermin.',
          },
        ],
      },
    ],
    fullStack: {
      tag: 'End-to-End',
      heading: 'Die komplette Suite',
      sub: 'Bündeln Sie jede Kategorie oben in einer Suite, sobald sie erscheint, vom Lead über das Inserat bis zum Abschluss, statt Stück für Stück zu kaufen.',
      cta: 'Auf die Warteliste',
    },
    guardrail: {
      label: 'Bewusst so gebaut',
      text: 'Wir lassen die KI Ihren Kunden keine Versprechen machen. Sie erfasst und qualifiziert. Preise, Termine und Zusagen bestätigt immer ein Mensch.',
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
          { from: 'lead', text: 'Guten Abend! Wir sanieren gerade ein älteres Haus in der Nähe von Graz und spielen mit dem Gedanken an eine Wärmepumpe. Machen Sie so etwas?' },
          { from: 'agent', text: 'Guten Abend! Ja, Wärmepumpen-Sanierungen sind genau unser Spezialgebiet. Damit ich Sie gleich an die richtige Person weiterleite: darf ich Ihnen kurz ein paar Fragen stellen?' },
          { from: 'agent', text: 'Wunderbar. Wie groß ist denn ungefähr die beheizte Fläche, und wissen Sie zufällig, aus welchem Jahr das Haus stammt?' },
          { from: 'lead', text: 'So um die 180 Quadratmeter. Baujahr 1968, und aktuell heizen wir noch mit Öl.' },
          { from: 'agent', text: 'Alles klar. Der Umstieg von Öl auf eine Wärmepumpe ist bei einem Haus aus der Zeit gut machbar, und sehr wahrscheinlich gibt es dafür auch eine Förderung. Eine kurze Frage noch: Bewohnen Sie das Haus selbst, oder ist es vermietet?' },
          { from: 'lead', text: 'Nein, das ist unseres, wir wohnen selbst dort.' },
          { from: 'agent', text: 'Perfekt, das passt wirklich gut. Ich leite Ihre Angaben direkt an unser Projektteam weiter, und die melden sich gleich morgen früh bei Ihnen. Und nur damit Sie es wissen: Es wird nichts gebucht oder angeboten, bevor Sie persönlich mit dem Team gesprochen haben.' },
        ],
      },
      realEstate: {
        sub: 'Ein Käufer schreibt um 21:40 zu einem Inserat, lange nach Büroschluss. Das passiert dann.',
        channel: 'Eingang · Instagram-DM · 21:40',
        qualified: 'Lead qualifiziert → an zuständigen Makler geleitet · Besichtigung eingeplant',
        script: [
          { from: 'lead', text: 'Guten Abend! Ich habe die Drei-Zimmer-Wohnung im siebten Bezirk auf Ihrem Instagram gesehen und wollte fragen: ist die noch zu haben, und könnten wir sie uns dieses Wochenende anschauen?' },
          { from: 'agent', text: 'Guten Abend, und danke für Ihre Nachricht! Ja, die im siebten ist tatsächlich noch verfügbar. Eine Besichtigung lässt sich gerne einrichten. Darf ich Ihnen vorher ganz kurz ein paar Fragen stellen?' },
          { from: 'agent', text: 'Suchen Sie eher etwas zum Selberwohnen, oder als Anlage? Und haben Sie ungefähr einen Budgetrahmen im Kopf?' },
          { from: 'lead', text: 'Zum Selberwohnen. Bis etwa 450.000 Euro, wobei wir eine Finanzierung bräuchten.' },
          { from: 'agent', text: 'Das passt gut, das liegt für diese Wohnung im Rahmen. Und ist Ihre Finanzierung schon vorab genehmigt, oder müssten Sie das noch organisieren?' },
          { from: 'lead', text: 'Noch nicht, das müssten wir erst klären.' },
          { from: 'agent', text: 'Kein Problem. Ich vermerke Sie als qualifizierten Interessenten und leite Ihre Angaben an den zuständigen Makler weiter. Er meldet sich morgen für die Besichtigung und kann Ihnen auch einen Finanzierungspartner empfehlen. Und nur damit Sie es wissen: Fix ist nichts, bevor Sie direkt mit ihm gesprochen haben.' },
        ],
      },
    },
    proofLabel: 'Erste Ergebnisse',
    proof: [
      { stat: '4 Sek.', label: 'Erste Antwort, Tag und Nacht' },
      { stat: '24/7', label: 'Erreichbarkeit, auch am Wochenende' },
      { stat: 'DE · EN', label: 'Deutsch (Sie) & Englisch' },
    ],
    faqLabel: 'Häufige Fragen',
    faq: [
      { q: 'Bucht sie Termine oder nennt sie Preise?', a: 'Nein, bewusst nicht. Sie erfasst und qualifiziert den Lead, dann bestätigt ein Mensch alles Verbindliche. Wir lassen die KI Ihren Kunden keine Versprechen machen.' },
      { q: 'Was kostet das?', a: 'Einfache monatliche Preise nach Kanälen und Volumen, ohne Gebühr pro Lead. Sagen Sie uns Ihr Setup, und wir erstellen ein Angebot.' },
      { q: 'Wie lange dauert die Einrichtung?', a: 'Die meisten Einführungen gehen innerhalb von 2–3 Wochen live, inklusive Feinabstimmung der Qualifizierungslogik auf Ihr Unternehmen.' },
      { q: 'Welche Sprachen und Kanäle?', a: 'Heute Deutsch (Sie-Form) und Englisch, über Webformular, WhatsApp und Chat. Leads landen in Ihrem Postfach, CRM oder in der Disposition, dort, wo Sie ohnehin arbeiten.' },
    ],
    ctaHeading: 'Nicht sicher, welcher Baustein passt?',
    ctaSub: 'Sagen Sie uns, wie Ihr Team heute arbeitet, und wir zeigen Ihnen den passenden Agenten, oder erstellen eine individuelle Lösung.',
    ctaButton: 'Walkthrough buchen',
    stickyCta: 'So funktioniert es',
  },
  demoPage: {
    eyebrow: 'Live-Demo',
    heading: 'Sehen Sie, wie der Agent eine echte Anfrage bearbeitet.',
    intro:
      'Keine Anmeldung nötig. Sehen Sie zu, wie der Agent einen Lead nach Feierabend von Anfang bis Ende annimmt, qualifiziert und an einen Menschen übergibt. Wechseln Sie Kanal und Branche zum Vergleich.',
    channelLabel: 'Kanal',
    channels: { voice: 'Telefonanruf', chat: 'Chat-Nachricht' },
    industryLabel: 'Branche',
    voice: {
      callHeader: 'Eingehender Anruf',
      connecting: 'wird verbunden…',
      speaking: 'spricht',
      listening: 'hört zu',
      agentLabel: 'KI-Sprach-Agent',
      callerLabel: 'Anrufer',
      listen: 'Mit Ton abspielen',
      mute: 'Stumm',
      note: 'Beispielhaftes Transkript eines Live-Telefonats, das der Sprach-Agent eigenständig führt.',
    },
    backCta: 'Zurück zu den Produkten',
    ctaHeading: 'Soll das Ihre Anrufe entgegennehmen?',
    ctaSub: 'Sagen Sie uns, wie Leads heute bei Ihnen ankommen, und wir zeigen Ihnen genau, wo es ansetzt.',
    ctaButton: 'Walkthrough buchen',
  },
  waitlistPage: {
    // Immvela ist das durchgängige Immobilien-Produkt von SNS. Diese Seite ist
    // ihre Warteliste — die „Tag"-Version der SNS-Seite (siehe .immvela-theme
    // in globals.css). Die Texte spiegeln die Launch-Anzeige.
    brand: 'Immvela',
    byline: 'von SNS Solutions',
    backToSns: 'Zurück zu SNS',
    earlyAccess: 'Jetzt im Early Access',
    builtInOpen: 'Offen entwickelt',
    tagline: 'Das agentische Betriebssystem für Immobilien.',
    // Die Positionierung ist das Schwungrad, keine Feature-Liste: Immvela ist
    // das führende System für das Geschäft eines Maklers, und der Wert, der
    // sich aufbaut, ist der geprüfte Datenbestand, den die Module hinterlassen.
    heroSub:
      'Keine sieben KI-Werkzeuge mit einem gemeinsamen Login. Jedes Modul liest aus demselben geprüften Datenbestand Ihrer Objekte, Ihrer Leads und Ihrer Abschlüsse und schreibt dorthin zurück. Bestätigen Sie eine Angabe einmal, und alles Nachgelagerte arbeitet damit. Überarbeiten Sie einen Entwurf, und es lernt, wie Sie schreiben. Immvela ist im zwölften Monat mehr wert als am ersten Tag, und genau darum geht es.',
    primaryCta: 'Auf die Warteliste',
    secondaryCta: 'Module ansehen',
    showcase: {
      pause: 'Modul-Vorschau pausieren',
      play: 'Modul-Vorschau fortsetzen',
      liveCount: '{n} von {total} Modulen live · offen entwickelt',
    },
    // ── Module: Namen und Stand aus STATUS.md im Immvela-Repo, der maßgeblichen
    // Quelle für den BUILD-Stand. Kein Modul hier aus Marketing-Enthusiasmus
    // hochstufen. Bullseye (Bewertung/CMA) fehlt bewusst — bewusst außerhalb
    // des Umfangs, es aufzulisten wäre ein Versprechen ohne Entwicklung.
    modulesLabel: 'Modul für Modul',
    modulesHeadingA: 'Kein fertiges Produkt, das so tut als ob.',
    modulesHeadingB: 'Eine Plattform, die entsteht.',
    statusActive: 'Live',
    statusProgress: 'In Entwicklung',
    modules: [
      { code: 'Quill', name: 'Listing Kit', desc: 'Captions, Broschüre und das vollständige Exposé, in Sekunden aus dem Objekt heraus. Zahlen stammen ausschließlich aus Angaben, die Sie bestätigt haben, und es lernt Ihren Ton aus jeder Überarbeitung.', status: 'active' },
      { code: 'Verlag', name: 'Veröffentlichung', desc: 'Einmal planen, auf jedem Kanal posten. Nichts geht raus, ohne die Compliance-Prüfung zu passieren, und was jeder Beitrag bringt, fließt zurück in den Datenbestand.', status: 'active' },
      { code: 'Iris', name: 'Empfang', desc: 'Jede Anfrage nach Budget, Absicht und Finanzierung qualifiziert und an den richtigen Makler weitergeleitet. Bucht nie, bepreist nie.', status: 'progress' },
      { code: 'Winston', name: 'Wissen', desc: 'Ein DACH-Immobilien-Copilot, der aus den Quellen Ihres Büros und einem gepflegten Fachkorpus antwortet und dazu nennt, aus welcher Quelle jede Antwort stammt.', status: 'progress' },
      { code: 'Vignette', name: 'Staging', desc: 'Leere Räume aus einem einzigen Foto möbliert. Es ergänzt nur und verdeckt nie einen Mangel, und die Kennzeichnung ist fest ins Bild gerendert.', status: 'progress' },
      { code: 'Immerse', name: 'Rundgang', desc: 'Einmal mit dem Handy durch das Objekt gehen. Zurück kommt ein fertiges Rundgangsvideo für das Inserat und für Social.', status: 'progress' },
      { code: 'Dossier', name: 'Dokumente', desc: 'Liest die Unterlagen, zieht die angabepflichtigen Werte heraus und legt Ihnen jeden einzelnen zur Bestätigung vor, bevor er zählt.', status: 'progress' },
    ],
    liveNote:
      'Listing Kit und Veröffentlichung sind heute in Immvela live, und Veröffentlichung ist bei jedem bezahlten Modul kostenlos dabei. Melden Sie sich für den Early Access an, und wir richten Ihnen einen Zugang ein.',
    signinCta: 'Zugang anfordern',
    demoCta: 'Empfang in Aktion',
    closingA: 'Wir bauen die Plattform, die das ändert,',
    closingB: 'Stück für Stück.',
    eyebrow: 'Early Access',
    heading: 'Seien Sie als Erste bei Immvela dabei.',
    intro:
      'Noch kein Preis, kein Termin, nur früher Zugang und echte Mitsprache bei dem, was wir als Nächstes bauen. Erzählen Sie uns kurz von Ihrem Team, und wir melden uns.',
    // ── Diese Zahlen beschreiben die PLATTFORM, nicht einen Empfang. Die alten
    // Werte („4 Sek. erste Antwort", „24/7") waren die von Iris, und Iris hat
    // noch keinen Code — sie waren also zugleich am Thema vorbei und unbelegt.
    proofLabel: 'Wo es steht',
    proof: [
      { stat: '2 von 7', label: 'Module heute live' },
      { stat: 'Deutsch', label: 'Voreingestellt, keine Übersetzung' },
      { stat: 'EU', label: 'In der EU gehostet; Sie bleiben Verantwortlicher' },
    ],
    guardrail: {
      label: 'Bewusst so gebaut',
      text: 'Immvela gibt nur Fakten wieder, auf die es verweisen kann. Es behauptet nie einen rechtlichen, finanziellen oder sachlichen Schluss, den niemand geprüft hat, und jeder abgeleitete Wert wird Ihnen zur Bestätigung vorgelegt, bevor er zählt. Preise, Termine und Verbindliches bestätigt immer ein Mensch.',
    },
    faqLabel: 'Häufige Fragen',
    faq: [
      { q: 'Ist es schon live?', a: 'Zwei Module sind heute live, Listing Kit und Veröffentlichung, und Sie können sich anmelden und damit arbeiten. Die anderen fünf sind in aktiver Entwicklung, und Warteliste-Mitglieder erhalten jedes davon zuerst.' },
      { q: 'Was heißt „es wird besser“ konkret?', a: 'Jedes Modul schreibt strukturierte Daten in denselben Datenbestand zurück, statt eine eigene Kopie zu führen. Ein Wert, den Dossier ausliest und Sie bestätigen, ist derselbe Wert, aus dem Quill Anzeigen schreibt und zu dem Winston Fragen beantwortet. Ihre Überarbeitungen an einem Entwurf bringen Quill Ihren Ton bei. Nichts davon ist eine Einstellung, die Sie konfigurieren; es ergibt sich daraus, dass Sie es benutzen.' },
      { q: 'Was kostet es?', a: 'Der Preis steht noch nicht fest. Module werden einzeln verkauft, nicht als eine große Suite, und Veröffentlichung ist bei jedem bezahlten Modul kostenlos dabei. Warteliste-Mitglieder gestalten den Rest mit und erhalten Early-Access-Konditionen, sobald Immvela öffnet.' },
      { q: 'Welche Sprache, und wo liegen meine Daten?', a: 'Deutsch zuerst. Es ist die voreingestellte Oberflächensprache, und Exposé-Abschnitte, Objektdaten-Bezeichnungen und Compliance-Markierungen bleiben deutsch, weil sie echte Dokumente benennen. Englisch ist pro Benutzer wählbar. Die Daten liegen in der EU, und jedes Büro bleibt eigener Verantwortlicher, sodass Franchise-Standorte einander nie sehen.' },
    ],
    tiersLabel: 'Build-Status nach Modul',
    tiers: [
      {
        label: 'Live',
        status: 'live',
        items: [
          'Listing Kit (Quill): Captions, Broschüren und vollständige Exposés, erzeugt aus dem Objekt',
          'Veröffentlichung (Verlag): Medienbibliothek, Compliance-Prüfung, Composer und Terminplan über alle Kanäle',
        ],
      },
      {
        label: 'In Entwicklung',
        status: 'in Arbeit',
        items: [
          'Empfang (Iris): qualifiziert und leitet jede Anfrage weiter; bucht nie, bepreist nie',
          'Wissen (Winston): DACH-Immobilien-Copilot, der aus Ihren eigenen Quellen antwortet, mit Zitaten',
        ],
      },
      {
        label: 'In der Warteschlange',
        status: 'geplant',
        items: [
          'Staging (Vignette): fotorealistisch gestagte Räume aus einem einzigen Foto, als KI-gestagt gekennzeichnet',
          'Rundgang (Immerse): ein Rundgangsvideo, gerendert aus einem Handy-Rundgang durch das Objekt',
          'Dokumente (Dossier): Prüfung der Inseratsangaben, jeder ausgelesene Wert von Ihnen bestätigt',
        ],
      },
    ],
    form: {
      heading: 'Auf die Early-Access-Liste',
      sub: 'Noch kein Preis, kein Termin, nur früher Zugang und Mitsprache bei den Prioritäten.',
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
      successBody: 'Danke, wir melden uns, sobald Early-Access-Plätze frei werden.',
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
  hvacWaitlistPage: {
    eyebrow: 'roadmap · in entwicklung',
    heading: 'Die agentische HLK-/SHK-Suite. Öffentlich gebaut.',
    intro:
      'Eine KI-Rezeption und ein Back-Office für Heizungs-, Sanitär- und Installationsbetriebe: von der ersten Anfrage über die Terminbuchung bis zur Compliance-Dokumentation. Das Anfragen-Handling ist schon heute verfügbar; der Rest steht in der Roadmap unten. Tragen Sie sich für den Early Access ein und gestalten Sie mit, was wir als Nächstes bauen.',
    tiersLabel: 'Build-Status nach Kategorie',
    tiers: [
      {
        label: 'Live',
        status: 'live',
        items: [
          'Anfragen-Handling: beantwortet, qualifiziert und leitet jeden eingehenden Lead rund um die Uhr weiter, auf Deutsch (Sie) und Englisch',
        ],
      },
      {
        label: 'In Arbeit',
        status: 'in Arbeit',
        items: [
          'Termine & Buchung: menschlich bestätigte Termin- und Rückrufplanung, sobald ein Lead qualifiziert ist',
        ],
      },
      {
        label: 'In der Warteschlange',
        status: 'geplant',
        items: [
          'Dokumentation & Compliance: Nachweise nach der Installation: BEG-Auszahlungsnachweise, F-Gas-Protokolle, JAZ-Nachweise',
        ],
      },
    ],
    form: {
      heading: 'Auf die Early-Access-Liste',
      sub: 'Noch kein Preis, kein Termin, nur früher Zugang und Mitsprache bei den Prioritäten.',
      name: 'Name',
      namePlaceholder: 'Max Mustermann',
      email: 'E-Mail',
      emailPlaceholder: 'max@firma.com',
      size: 'Teamgröße',
      sizePlaceholder: 'Auswählen…',
      sizes: ['Einzelbetrieb', 'Kleines Team', 'Größerer Betrieb'],
      consent: [
        { t: 'Ich bin einverstanden, dass meine Angaben verwendet werden, um mich zum Early Access zu kontaktieren, wie in der ' },
        { t: 'Datenschutzerklärung', link: true },
        { t: ' beschrieben.' },
      ],
      submit: 'Auf die Warteliste',
      sending: 'Wird eingetragen…',
      successTitle: 'Sie sind auf der Liste.',
      successBody: 'Danke, wir melden uns, sobald Early-Access-Plätze frei werden.',
      sendAnother: '← Weitere hinzufügen',
      errors: {
        name: 'Bitte geben Sie Ihren Namen ein.',
        email: 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
        emailInvalid: 'Diese E-Mail-Adresse sieht nicht richtig aus.',
        size: 'Bitte wählen Sie eine Teamgröße.',
        consent: 'Bitte stimmen Sie vor dem Eintragen zu.',
        send: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an',
      },
    },
  },
}
