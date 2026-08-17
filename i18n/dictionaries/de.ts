import type { Dictionary } from './en'

// German (Austrian) translation. Formal "Sie". The brand slogan
// "Simplicity is the solution" is intentionally left in English elsewhere.

export const de: Dictionary = {
  nav: {
    home: 'start',
    services: 'maßarbeit',
    realEstate: 'immvela',
    team: 'team',
    contact: 'kontakt',
  },
  hero: {
    h1a: 'Agentische Software,',
    h1b: 'nachweisbar wirksam.',
    // Siehe en.ts — der Hero gehört Immvela allein; Maßarbeit hat jetzt ihren
    // eigenen Abschnitt am Seitenende (`customBuilds`).
    subtitle: [
      { t: 'Ein Wiener Studio, das ' },
      { t: 'Immvela', strong: true },
      { t: ' baut, das agentische Betriebssystem für die ' },
      { t: 'Immobilienbranche', strong: true },
      { t: '. Ein geprüfter Datenbestand Ihrer Objekte, Leads und Abschlüsse, mit einem Modul für jeden Teil der Arbeit.' },
    ],
    ctaStart: 'Kostenlose Beratung buchen',
    ctaSolutions: 'Immvela ansehen',
  },
  // Siehe en.ts — eine Branche, also trägt dieser Abschnitt die Karten-Texte
  // jetzt selbst statt sie aus der entfernten solutionsPage zu lesen.
  homeFocus: {
    eyebrow: 'Für wen wir bauen',
    heading: 'Maßgeschneidert für die Immobilienbranche.',
    sub: 'Wir kennen die Immobilienbranche in- und auswendig: ihre Sprache, ihre Abläufe, ihren Arbeitsalltag. So passt Immvela zu der Art, wie Sie ohnehin arbeiten.',
    cta: 'So funktioniert Immvela',
    card: {
      label: 'Immvela',
      descriptor: 'Immobilien · Verkauf & Vermietung',
      blurb:
        'Unsere eigene Plattform, Modul für Modul erhältlich. Jedes steht für sich, und alle schreiben auf denselben Datenbestand Ihrer Objekte, Leads und Abschlüsse zurück.',
    },
  },
  // Siehe en.ts — der Abschnitt fängt jetzt genau die Besucher auf, für die
  // Immvela nicht passt. Die vier Stufen bleiben, der Rahmen darum ist neu.
  customBuilds: {
    eyebrow: 'maßarbeit',
    heading: 'Immvela passt nicht auf Ihr Problem?',
    sub: 'Immvela deckt die Arbeit ab, die die meisten Immobilienteams teilen. Wenn Ihres auf etwas läuft, das Immvela nicht erreicht — ein eigenes System, mit dem es sprechen muss, ein Ablauf, den sonst niemand hat, ein Teil der Arbeit, den wir noch nicht gebaut haben — dann ist das Maßarbeit, und die ist die andere Hälfte unserer Arbeit. Wir gehen es zuerst gemeinsam durch, und Sie bekommen eine klare Antwort, ob es sich überhaupt lohnt.',
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
    services: ['Immvela · Immobilien', 'Individuelle Software', 'KI & Automatisierung', 'KI- & IT-Beratung', 'Etwas anderes'],
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
    // `demo` ist die Stichpunktliste der Modul-Seite (components/ImmvelaDemo.tsx).
    // Sie steht am Modul-Datensatz und nicht in einer zweiten Liste, damit ein
    // Modul nicht an zwei Stellen unterschiedlich beschrieben wird. Drei Zeilen
    // je Modul: was es tut, unter welcher Einschränkung, und was es im
    // Datenbestand hinterlässt.
    modules: [
      { code: 'Quill', name: 'Listing Kit', desc: 'Captions, Broschüre und das vollständige Exposé, in Sekunden aus dem Objekt heraus. Zahlen stammen ausschließlich aus Angaben, die Sie bestätigt haben, und es lernt Ihren Ton aus jeder Überarbeitung.', status: 'active', demo: [
        'Exposé, Broschüre und Captions für jeden Kanal, alles aus einem Objekt-Datensatz',
        'Zahlen stammen nur aus Angaben, die Sie bestätigt haben — Lücken bleiben Lücken',
        'Jede Überarbeitung an einem Entwurf bringt ihm bei, wie Sie schreiben',
      ] },
      { code: 'Verlag', name: 'Veröffentlichung', desc: 'Einmal planen, auf jedem Kanal posten. Nichts geht raus, ohne die Compliance-Prüfung zu passieren, und was jeder Beitrag bringt, fließt zurück in den Datenbestand.', status: 'active', demo: [
        'Ein Composer und ein Terminplan über alle Kanäle, auf denen Sie posten',
        'Die Compliance-Prüfung hält alles zurück, was eine Angabepflicht verletzt',
        'Was jeder Beitrag bringt, fließt zurück zum Objekt, aus dem er stammt',
      ] },
      { code: 'Iris', name: 'Empfang', desc: 'Jede Anfrage nach Budget, Absicht und Finanzierung qualifiziert und an den richtigen Makler weitergeleitet. Bucht nie, bepreist nie.', status: 'progress', demo: [
        'Antwortet, sobald eine Anfrage eingeht — auch nach Feierabend',
        'Qualifiziert nach Objekt, Budget, Zeitrahmen und Finanzierung, dann leitet es weiter',
        'Bucht nie und bepreist nie — Verbindliches bestätigt ein Mensch',
      ] },
      { code: 'Winston', name: 'Wissen', desc: 'Ein DACH-Immobilien-Copilot, der aus den Quellen Ihres Büros und einem gepflegten Fachkorpus antwortet und dazu nennt, aus welcher Quelle jede Antwort stammt.', status: 'progress', demo: [
        'Antwortet aus den Unterlagen Ihres Büros und einem gepflegten DACH-Fachkorpus',
        'Nennt zu jeder Antwort die Quelle, damit Sie sie nachprüfen können',
        'Sagt lieber, dass es etwas nicht weiß, als zu einer plausiblen Antwort zu greifen',
      ] },
      { code: 'Vignette', name: 'Staging', desc: 'Leere Räume aus einem einzigen Foto möbliert. Es ergänzt nur und verdeckt nie einen Mangel, und die Kennzeichnung ist fest ins Bild gerendert.', status: 'progress', demo: [
        'Möbliert einen leeren Raum aus einem einzigen Foto davon',
        'Ergänzt ausschließlich — es übermalt keinen Mangel und ändert nichts an der Bausubstanz',
        'Der Hinweis „virtuell möbliert“ ist ins Bild gerendert, nicht bloß eine Bildunterschrift',
      ] },
      { code: 'Immerse', name: 'Rundgang', desc: 'Einmal mit dem Handy durch das Objekt gehen. Zurück kommt ein fertiges Rundgangsvideo für das Inserat und für Social.', status: 'progress', demo: [
        'Ein einziger Gang durch das Objekt mit dem Handy ist der ganze Dreh',
        'Zurück kommt es im selben Durchlauf für das Inserat und für Social geschnitten',
        'Kein Equipment, kein Team, kein zweiter Termin am Objekt',
      ] },
      { code: 'Dossier', name: 'Dokumente', desc: 'Liest die Unterlagen, zieht die angabepflichtigen Werte heraus und legt Ihnen jeden einzelnen zur Bestätigung vor, bevor er zählt.', status: 'progress', demo: [
        'Liest die Unterlagen und zieht die angabepflichtigen Werte heraus',
        'Legt Ihnen jeden ausgelesenen Wert zur Bestätigung vor, bevor er zählt',
        'Was Sie bestätigen, ist der Wert, aus dem Quill schreibt und Winston antwortet',
      ] },
    ],
    // ── Modul-Seite (/immvela/demo) ─────────────────────────────────────
    demo: {
      eyebrow: 'Modul für Modul',
      heading: 'Jedes Modul, in Betrieb.',
      intro:
        'Keine Anmeldung nötig. Wählen Sie ein Modul und sehen Sie ihm an einem echten Objekt bei der Arbeit zu. Zwei sind heute in Immvela live, der Rest sind Aufnahmen aus der laufenden Entwicklung — die Kennzeichnung sagt, was was ist.',
      backCta: 'Zurück zu Immvela',
      pickerLabel: 'Modul wählen',
      panelLabel: 'Was Sie hier sehen',
      clipNote:
        'Aufgenommen in der Immvela-Oberfläche. Deutsch ist die voreingestellte Sprache, deshalb zeigen die Screens Deutsch.',
      noClip: 'Für dieses Modul gibt es noch keine Aufnahme.',
      prev: 'Vorheriges Modul',
      next: 'Nächstes Modul',
      ctaHeading: 'Zugang zu den Live-Modulen?',
      ctaSub:
        'Listing Kit und Veröffentlichung sind heute nutzbar. Melden Sie sich für den Early Access an, und wir richten Ihnen einen Zugang ein.',
      ctaButton: 'Auf die Warteliste',
    },
    liveNote:
      'Listing Kit und Veröffentlichung sind heute in Immvela live, und Veröffentlichung ist bei jedem bezahlten Modul kostenlos dabei. Melden Sie sich für den Early Access an, und wir richten Ihnen einen Zugang ein.',
    signinCta: 'Zugang anfordern',
    demoCta: 'Jedes Modul in Aktion',
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
}
