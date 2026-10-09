import type { Locale } from './config'

/**
 * Copy for the immvela.com redesign (components/immvela/).
 *
 * The English text is the key, because the sections were carried over from the design with
 * their English copy in place: `t('Apply for the closed beta')` renders that string on the
 * English routes and its German entry below on the German ones. A string with no entry
 * renders as written, which is deliberate for the domain terms and the sample listing
 * (Energieausweis, Wohnfläche, Gentzgasse 14 …) that stay German in both languages.
 *
 * German copy: Sie-form, no dashes as punctuation, Austrian business tone. Run
 * `node design/immvela-redesign/tools/check-i18n.mjs` after adding English copy; it lists
 * every t() string that has no German entry and is not on the keep-as-is list there.
 */
const DE: Record<string, string> = {
  // nav, footer, shared
  'by SNS Solutions': 'von SNS Solutions',
  'Immvela home': 'Immvela Startseite',
  Main: 'Hauptnavigation',
  'Sign in': 'Anmelden',
  'No cookies. We count page views anonymously.': 'Keine Cookies. Wir zählen Seitenaufrufe anonym.',
  Close: 'Schließen',
  'Your data': 'Ihre Daten',
  'Menu': 'Menü',
  'Close menu': 'Menü schließen',
  'The Immvela helix': 'Die Immvela Helix',
  'Immvela is made by SNS Software Solutions GmbH, Vienna.':
    'Immvela wird von der SNS Software Solutions GmbH in Wien entwickelt.',
  'How we handle data': 'Umgang mit Daten',
  'Help us build Immvela': 'Gestalten Sie Immvela mit',
  'Module walkthrough': 'Module ansehen',
  Imprint: 'Impressum',
  Privacy: 'Datenschutz',
  Terms: 'AGB',
  Footer: 'Fußzeile',

  // hero
  'Your personal real estate assistant': 'Ihr persönlicher Immobilien-Assistent',
  'Apply for the closed beta': 'Für die geschlossene Beta bewerben',
  'Live today in a closed beta, built in Vienna by SNS Solutions.':
    'Schon heute im Einsatz, in einer geschlossenen Beta. Entwickelt in Wien von SNS Solutions.',

  // product
  'Documents in, a checked listing out': 'Unterlagen rein, ein geprüftes Inserat raus',
  'Reading 5 documents': '5 Unterlagen werden gelesen',
  'Virtually staged': 'Virtuell eingerichtet',
  'Ready. Publish?': 'Fertig. Veröffentlichen?',
  '2 values': '2 Werte',
  'Before this goes out': 'Bevor das hinausgeht',
  'Wohnfläche: 78 m² in the Energieausweis, 76 m² in the floor plan. Which is right?':
    'Wohnfläche: 78\u00a0m² im Energieausweis, 76\u00a0m² im Grundriss. Welcher Wert stimmt?',
  'Floor plan': 'Grundriss',
  'Watch it again': 'Noch einmal ansehen',

  // trace
  'Every number in your Exposé, traced to its document':
    'Jede Zahl im Exposé, belegt durch ihr Dokument',
  'Key facts. Choose a value to see the line it was read from.':
    'Eckdaten. Wählen Sie einen Wert, um die Zeile zu sehen, aus der er gelesen wurde.',
  'Tap any value in the strip to trace it.':
    'Tippen Sie auf einen Wert in der Leiste, um ihn zurückzuverfolgen.',
  ', read from the ': ', gelesen aus dem Dokument ',
  ', page 1: ': ', Seite 1: ',

  // office
  'Example office': 'Beispielbüro',
  'Agent, listing': 'Makler, Inserat',
  Documents: 'Unterlagen',
  'Values confirmed': 'Werte bestätigt',
  Ready: 'Bereit',
  Held: 'Angehalten',
  'Next:': 'Geplant:',

  // listen
  'Say “get it ready”': 'Sagen Sie „Fertig machen“',
  'Immvela makes the plan, does the work and shows you each result in the thread.':
    'Immvela erstellt den Plan, erledigt die Arbeit und zeigt Ihnen jedes Ergebnis im Verlauf.',
  'Get it ready': 'Fertig machen',
  'Here is the plan.': 'Hier ist der Plan.',
  'Read the documents': 'Unterlagen lesen',
  'Check every value': 'Jeden Wert prüfen',
  'Message Immvela': 'Nachricht an Immvela',
  Open: 'Öffnen',

  // staging

  // specs
  'Everything Immvela does': 'Was Immvela kann',
  'Reads the Energieausweis and the Grundbuchauszug, flags contradictions and expiring certificates. Nothing is used until you confirm it.':
    'Liest den Energieausweis und den Grundbuchauszug, markiert Widersprüche und ablaufende Ausweise. Nichts wird verwendet, bevor Sie es bestätigen.',
  'Exposé, brochure and posts': 'Exposé, Broschüre und Posts',
  'Drafted from your confirmed values, in the German of the listing’s country, with your office brand.':
    'Aus Ihren bestätigten Werten entworfen, im Deutsch des Landes, in dem das Objekt liegt, und im Auftritt Ihres Büros.',
  'Furnishes photos of empty rooms. Every staged photo is labelled as virtually staged.':
    'Richtet Fotos leerer Räume ein. Jedes eingerichtete Foto ist als virtuell eingerichtet gekennzeichnet.',
  'Your office': 'Ihr Büro',
  'Listings, documents and confirmed values belong to the office. Every agent has their own login.':
    'Inserate, Unterlagen und bestätigte Werte gehören dem Büro. Jede Person im Team hat einen eigenen Zugang.',
  Language: 'Sprache',
  'German first, English available. Written for Austria, Germany and Switzerland.':
    'Deutsch zuerst, Englisch verfügbar. Geschrieben für Österreich, Deutschland und die Schweiz.',
  Enquiries: 'Anfragen',
  Next: 'Geplant',
  'Answers and qualifies enquiries. Never books viewings or quotes prices.':
    'Beantwortet und qualifiziert Anfragen. Vereinbart keine Besichtigungen und nennt keine Preise.',
  'Data and privacy': 'Daten und Datenschutz',
  'How we handle documents and data': 'Wie wir mit Unterlagen und Daten umgehen',

  // people
  'Built in Vienna by SNS Solutions': 'In Wien entwickelt von SNS Solutions',
  'Today a listing lives in a folder, a phone and five tools. We built Immvela so every property has one record you can trust.':
    'Heute liegt ein Inserat in einem Ordner, einem Handy und fünf Programmen. Wir haben Immvela gebaut, damit jedes Objekt einen Datenbestand hat, dem Sie vertrauen können.',
  'Meet the team': 'Das Team kennenlernen',

  // apply
  Email: 'E-Mail',
  'Office size': 'Bürogröße',
  'Solo agent': 'Einzelmakler',
  'I agree that SNS Software Solutions GmbH may contact me about this application.':
    'Ich bin einverstanden, dass die SNS Software Solutions GmbH mich zu dieser Bewerbung kontaktiert.',
  'Privacy policy': 'Datenschutzerklärung',
  Apply: 'Bewerben',
  'We reply within a week and set up your first listing with you.':
    'Wir antworten innerhalb einer Woche und richten Ihr erstes Inserat gemeinsam mit Ihnen ein.',
  'Not ready to apply?': 'Noch nicht bereit für eine Bewerbung?',
  'Help us build it': 'Gestalten Sie Immvela mit',
  'Is it in German?': 'Gibt es Immvela auf Deutsch?',
  'Yes. German first, English available. The Exposé is always written in the German of the listing’s country.':
    'Ja. Deutsch zuerst, Englisch verfügbar. Das Exposé wird immer im Deutsch des Landes geschrieben, in dem das Objekt liegt.',
  'Does it work with my CRM?': 'Funktioniert es mit meinem CRM?',
  'Where is my data?': 'Wo liegen meine Daten?',
  'Your database and files are stored in Frankfurt. Documents and text are processed by AI providers in the USA.':
    'Ihre Datenbank und Ihre Dateien liegen in Frankfurt. Unterlagen und Texte werden von KI-Anbietern in den USA verarbeitet.',

  // form states (both forms)
  'Please enter your name.': 'Bitte geben Sie Ihren Namen ein.',
  'Please enter your email.': 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
  'Please enter a valid email address.': 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
  'Please choose your office size.': 'Bitte wählen Sie die Größe Ihres Büros.',
  'Please enter your office.': 'Bitte geben Sie Ihr Büro an.',
  'Please agree before sending.': 'Bitte stimmen Sie zu, bevor Sie absenden.',
  'Sending…': 'Wird gesendet…',
  'Something went wrong. Please try again, or write to us at':
    'Etwas ist schiefgelaufen. Bitte versuchen Sie es noch einmal oder schreiben Sie uns an',
  'Thank you. Your application is in.': 'Danke. Ihre Bewerbung ist eingegangen.',
  'Thank you. We will be in touch.': 'Danke. Wir melden uns bei Ihnen.',
  'Send another': 'Weitere senden',
  'Pause animation': 'Animation anhalten',

  // trust page
  'How Immvela handles your documents and data':
    'Wie Immvela mit Ihren Unterlagen und Daten umgeht',
  'What happens to a document after you add it, who can see it, and what we have not settled yet.':
    'Was mit einem Dokument passiert, nachdem Sie es hinzugefügt haben, wer es sehen kann und was wir noch nicht geklärt haben.',
  'Who owns the data': 'Wem die Daten gehören',
  'Listings, values and documents belong to the office, not to the individual agent. Each person has their own login. Offices are kept separate in the database, so one office cannot read another office’s data.':
    'Inserate, Werte und Unterlagen gehören dem Büro, nicht der einzelnen Person. Jede Person hat einen eigenen Zugang. Die Büros sind in der Datenbank voneinander getrennt, sodass ein Büro die Daten eines anderen nicht lesen kann.',
  'What the AI providers see': 'Was die KI-Anbieter sehen',
  'Documents and text are processed by AI providers based in the USA. Staging photos are processed by a separate AI image provider.':
    'Unterlagen und Texte werden von KI-Anbietern mit Sitz in den USA verarbeitet. Fotos für das Staging verarbeitet ein eigener KI-Bildanbieter.',
  'We are working towards EU-only processing. It is not in place today.':
    'Wir arbeiten auf eine Verarbeitung ausschließlich in der EU hin. Heute ist das noch nicht der Fall.',
  'What you confirm': 'Was Sie bestätigen',
  'Nothing read from a document is used until a person confirms it. Every value keeps the document it came from and the name of the person who confirmed it.':
    'Nichts, was aus einem Dokument gelesen wird, wird verwendet, bevor eine Person es bestätigt. Jeder Wert behält das Dokument, aus dem er stammt, und den Namen der Person, die ihn bestätigt hat.',
  'Immvela always asks before anything is published. An ad missing required energy values is held, for every agent in the office.':
    'Immvela fragt immer, bevor etwas veröffentlicht wird. Ein Inserat, dem erforderliche Energiekennwerte fehlen, wird angehalten, für alle im Büro.',
  'Held: energy values missing': 'Angehalten: Energiekennwerte fehlen',
  Deleting: 'Löschen',
  'We delete your account on request. Documents are kept as evidence and are not deleted on the photo schedule.':
    'Wir löschen Ihr Konto auf Anfrage. Unterlagen werden als Nachweis aufbewahrt und nicht nach dem Zeitplan für Fotos gelöscht.',
  'Immvela does not state legal retention periods. Ask your counsel.':
    'Immvela nennt keine gesetzlichen Aufbewahrungsfristen. Fragen Sie dazu Ihre Rechtsberatung.',
  'How your data is handled': 'Wie Ihre Daten behandelt werden',
  'Where your data goes': 'Wohin Ihre Daten gehen',
  'What is stored where, and which companies process it for Immvela.':
    'Was wo gespeichert wird und welche Unternehmen die Daten für Immvela verarbeiten.',
  'Stored in Frankfurt': 'Gespeichert in Frankfurt',
  'The database and the files you upload are stored with Supabase in Frankfurt, Germany.':
    'Die Datenbank und die hochgeladenen Dateien liegen bei Supabase in Frankfurt.',
  'Service providers': 'Dienstleister',
  'Supabase (database and files), Vercel (hosting), Trigger.dev (background jobs), Anthropic (documents and text) and fal.ai (staging photos).':
    'Supabase (Datenbank und Dateien), Vercel (Hosting), Trigger.dev (Hintergrundaufgaben), Anthropic (Unterlagen und Texte) und fal.ai (Fotos für das Staging).',
  'Data processing agreement (AVV)': 'Auftragsverarbeitungsvertrag (AVV)',
  'We do not offer a standard AVV yet. Write to us before your office uploads documents that name people.':
    'Einen standardisierten AVV bieten wir noch nicht an. Schreiben Sie uns, bevor Ihr Büro Unterlagen hochlädt, in denen Personen genannt werden.',
  'Questions about your data': 'Fragen zu Ihren Daten',
  'Write to': 'Schreiben Sie an',
  '. Immvela is made by SNS Software Solutions GmbH, Vienna.':
    '. Immvela wird von der SNS Software Solutions GmbH in Wien entwickelt.',

  'What we believe': 'Woran wir glauben',
  'An agent’s best hours belong to people, not paperwork.':
    'Die besten Stunden eines Maklers gehören den Menschen, nicht dem Papierkram.',
  'We want the documents, the checking and the drafting to take care of themselves, so you can spend your time on the part only you can do: the viewing, the buyer, and the owner who trusts you with their home.':
    'Wir wollen, dass sich Unterlagen, Prüfung und Entwürfe von selbst erledigen, damit Sie Ihre Zeit dem widmen können, was nur Sie können: der Besichtigung, den Käufern und den Eigentümern, die Ihnen ihr Zuhause anvertrauen.',
  // partner page
  'We are building Immvela with estate agents. Give us 30 minutes and tell us what slows your listings down.':
    'Wir entwickeln Immvela gemeinsam mit Maklerinnen und Maklern. Schenken Sie uns 30 Minuten und erzählen Sie uns, was Ihre Inserate aufhält.',
  'What happens': 'So läuft es ab',
  'You pick a time.': 'Sie wählen einen Termin.',
  'We talk for 30 minutes, on a video call or at your office in Vienna.':
    'Wir sprechen 30 Minuten, per Videocall oder bei Ihnen im Büro in Wien.',
  'We show you what we are building and you tell us what is missing.':
    'Wir zeigen Ihnen, woran wir arbeiten, und Sie sagen uns, was fehlt.',
  'What partner offices get': 'Was Partnerbüros bekommen',
  'Early access to the closed beta.': 'Frühen Zugang zur geschlossenen Beta.',
  'A say in what we build next.': 'Mitsprache bei dem, was wir als Nächstes bauen.',
  'Your first listing set up with you.': 'Ihr erstes Inserat, gemeinsam mit Ihnen eingerichtet.',
  Office: 'Büro',
  Phone: 'Telefon',
  'What slows your listings down?': 'Was hält Ihre Inserate auf?',
  'I agree that SNS Software Solutions GmbH may contact me about this conversation.':
    'Ich bin einverstanden, dass die SNS Software Solutions GmbH mich zu diesem Gespräch kontaktiert.',
  'Book a conversation': 'Gespräch vereinbaren',
  'We reply within a week to find a time.':
    'Wir melden uns innerhalb einer Woche, um einen Termin zu finden.',
  // pass 3: product fan-out, trace question, office positioning, phone posts, integrations
  'Give it the Energieausweis, the floor plan and the photos. Immvela drafts the Exposé, the brochure and the posts, and stages the empty rooms.':
    'Geben Sie Immvela den Energieausweis, den Grundriss und die Fotos. Immvela entwirft das Exposé, die Broschüre und die Posts und richtet leere Räume virtuell ein.',
  'Five documents, an Energieausweis, a floor plan and three photos, go into the Immvela helix. Four drafts for Gentzgasse 14 in 1180 Wien come out around it: an Exposé, a brochure page, an Instagram post that waits for your approval, and a photo marked as virtually staged.':
    'Fünf Unterlagen, ein Energieausweis, ein Grundriss und drei Fotos, gehen in die Immvela Helix. Rundherum entstehen vier Entwürfe für die Gentzgasse 14 in 1180 Wien: ein Exposé, eine Broschürenseite, ein Instagram-Post, der auf Ihre Freigabe wartet, und ein als virtuell eingerichtet gekennzeichnetes Foto.',
  'Five documents go into the Immvela helix. Four drafts come out: an Exposé, a brochure page, an Instagram post that waits for your approval, and a photo marked as virtually staged.':
    'Fünf Unterlagen gehen in die Immvela Helix. Heraus kommen vier Entwürfe: ein Exposé, eine Broschürenseite, ein Instagram-Post, der auf Ihre Freigabe wartet, und ein als virtuell eingerichtet gekennzeichnetes Foto.',
  Brochure: 'Broschüre',
  'Drafting the Exposé, brochure and posts': 'Exposé, Broschüre und Posts entstehen',
  'Drafts ready for your review': 'Entwürfe bereit zur Prüfung',
  'When two documents disagree, Immvela asks you. Every value keeps the page and the exact line it was read from, and who confirmed it.':
    'Wenn sich zwei Unterlagen widersprechen, fragt Immvela Sie. Jeder Wert behält die Seite und die genaue Zeile, aus der er gelesen wurde, und wer ihn bestätigt hat.',
  ', page 1. Confirmed by you.': ', Seite 1. Von Ihnen bestätigt.',
  '. Confirmed by you.': '. Von Ihnen bestätigt.',
  'Choose the value that is right to confirm it.':
    'Wählen Sie den richtigen Wert, um ihn zu bestätigen.',
  'Your agents already use AI. Give them one that follows your standard.':
    'Ihre Makler nutzen KI bereits. Geben Sie ihnen eine, die Ihrem Standard folgt.',
  "Whether your office provides it or not, agents are trying AI for their listings. With Immvela it works from confirmed documents, every listing is checked the same way, and the work stays in your office's record, not in personal chat accounts.":
    'Ob Ihr Büro sie bereitstellt oder nicht: Makler probieren KI für ihre Inserate aus. Mit Immvela arbeitet sie mit bestätigten Unterlagen, jedes Inserat wird gleich geprüft, und die Arbeit bleibt im Datenbestand Ihres Büros statt in privaten Chat-Konten.',
  'Example office with 12 listings, each checked the same way: documents on file, values confirmed, ready to advertise. 11 are ready. One, Praterstraße 31, is held because its Energieausweis values are not confirmed.':
    'Beispielbüro mit 12 Inseraten, alle gleich geprüft: Unterlagen vorhanden, Werte bestätigt, bereit zum Inserieren. 11 sind bereit. Eines, Praterstraße 31, ist angehalten, weil die Werte aus dem Energieausweis nicht bestätigt sind.',
  '12 listings': '12 Inserate',
  '7 more listings, all ready': '7 weitere Inserate, alle bereit',
  'The whole office': 'Das ganze Büro',
  '11 of 12': '11 von 12',
  'ready to advertise': 'bereit zum Inserieren',
  'Every agent works from confirmed documents': 'Alle arbeiten mit bestätigten Unterlagen',
  'One checklist for every listing': 'Eine Checkliste für jedes Inserat',
  'Each ad asks before it goes out': 'Jedes Inserat fragt, bevor es hinausgeht',
  'an overview for the owner of what every agent confirmed and published, and your office’s own rules for required documents, templates and approval.':
    'eine Übersicht für die Inhaberin oder den Inhaber, was jede Person bestätigt und veröffentlicht hat, und eigene Regeln Ihres Büros für Pflichtunterlagen, Vorlagen und Freigabe.',
  'Immvela, posts ready': 'Immvela, Posts fertig',
  'Draft the posts': 'Posts entwerfen',
  'Posts ready for Instagram and LinkedIn.': 'Posts für Instagram und LinkedIn sind fertig.',
  'Waiting for your approval': 'Wartet auf Ihre Freigabe',
  'Publish?': 'Veröffentlichen?',
  "A phone with a thin graphite edge, slightly turned, stands on a forest green stage. It shows Immvela in Auto mode for Gentzgasse 14. The agent wrote: Get it ready. Immvela answers with a plan of three checked steps: read the documents, check every value, draft the posts. A card lifts out of the phone: posts ready for Instagram and LinkedIn, waiting for approval, with a Publish button. A glass chip reading Immvela, posts ready sits over the stage's left edge.":
    'Ein Handy mit schmalem Graphitrahmen, leicht gedreht, steht auf einer waldgrünen Bühne. Es zeigt Immvela im Modus Auto für die Gentzgasse 14. Der Makler hat geschrieben: Fertig machen. Immvela antwortet mit einem Plan aus drei erledigten Schritten: Unterlagen lesen, jeden Wert prüfen, Posts entwerfen. Aus dem Handy ragt eine Karte: Posts für Instagram und LinkedIn sind fertig und warten auf Freigabe, mit einem Knopf zum Veröffentlichen. Ein gläserner Hinweis mit dem Text Immvela, Posts fertig liegt über dem linken Rand der Bühne.',
  'Works with the tools you already use': 'Funktioniert mit Ihren bestehenden Programmen',
  'Bring your listings in from your CRM, then send them out to your channels, with one approval.':
    'Holen Sie Ihre Inserate aus Ihrem CRM und spielen Sie sie mit einer einzigen Freigabe auf Ihre Kanäle aus.',
  'Listings come in from onOffice, Justimmo, Propstack or FLOWFACT by OpenImmo export, pass through Immvela, and go out to Instagram, Facebook, LinkedIn, TikTok and YouTube after your approval. Portal publishing to willhaben, ImmoScout24 and immowelt is planned.':
    'Inserate kommen per OpenImmo-Export aus onOffice, Justimmo, Propstack oder FLOWFACT, laufen durch Immvela und gehen nach Ihrer Freigabe an Instagram, Facebook, LinkedIn, TikTok und YouTube. Die Veröffentlichung auf willhaben, ImmoScout24 und immowelt ist geplant.',
  'In, from your CRM': 'Rein, aus Ihrem CRM',
  'via OpenImmo export': 'per OpenImmo-Export',
  'Out, to your channels': 'Raus, auf Ihre Kanäle',
  'always after your approval': 'immer erst nach Ihrer Freigabe',
  Planned: 'Geplant',
  Integrations: 'Integrationen',
  'Listings in from your CRM by OpenImmo export, posts out to five social channels after your approval.':
    'Inserate per OpenImmo-Export aus Ihrem CRM, Posts nach Ihrer Freigabe auf fünf soziale Kanäle.',
  'Document checklist': 'Unterlagen-Checkliste',
  'Every listing gets a checklist of the documents it needs, from SNS’s standard lists for flats and houses.':
    'Jedes Inserat bekommt eine Checkliste der nötigen Unterlagen, nach den Standardlisten von SNS für Wohnungen und Häuser.',
  Publishing: 'Veröffentlichen',
  'Bring listings in with an OpenImmo export from onOffice, Justimmo, Propstack or FLOWFACT.':
    'Übernehmen Sie Inserate per OpenImmo-Export aus onOffice, Justimmo, Propstack oder FLOWFACT.',
  // the staging section is off the page for now; its copy stays ready
  'Furnished before the first viewing': 'Eingerichtet vor der ersten Besichtigung',
  'Upload a photo of an empty room. Immvela furnishes it and marks the result as virtually staged.':
    'Laden Sie ein Foto eines leeren Raums hoch. Immvela richtet ihn ein und kennzeichnet das Ergebnis als virtuell eingerichtet.',
  'A living room at Gentzgasse 14 in Vienna, split down the middle: empty on the right, furnished by Immvela on the left and marked virtually staged. The Immvela helix sits on the seam as a handle.':
    'Ein Wohnzimmer in der Gentzgasse 14 in Wien, in der Mitte geteilt: rechts leer, links von Immvela eingerichtet und als virtuell eingerichtet gekennzeichnet. Die Immvela Helix sitzt als Regler auf der Trennlinie.',
  'Empty room': 'Leerer Raum',
  'Compare the empty room with the staged room': 'Leeren und eingerichteten Raum vergleichen',
  'Show the room': 'Raum zeigen',
  Staged: 'Eingerichtet',
  'or drag the handle': 'oder den Regler ziehen',
  'Every staged photo is labelled as virtually staged.':
    'Jedes eingerichtete Foto ist als virtuell eingerichtet gekennzeichnet.',
  ' percent staged': ' Prozent eingerichtet',
  // pass 4: slower trace, tile field, shorter details
  'When two documents disagree, Immvela flags it before anything goes out. Every value keeps the page and the exact line it was read from, and who confirmed it.':
    'Wenn sich zwei Unterlagen widersprechen, markiert Immvela das, bevor etwas hinausgeht. Jeder Wert behält die Seite und die genaue Zeile, aus der er gelesen wurde, und wer ihn bestätigt hat.',
  'In, via OpenImmo export': 'Rein, per OpenImmo-Export',
  'Out, always after your approval': 'Raus, immer erst nach Ihrer Freigabe',
  'Sharp: works today. Faded: planned.': 'Scharf: funktioniert heute. Verblasst: geplant.',
  'Good to know': 'Gut zu wissen',

  // modules and why pages (mockup, 2026-10-04)
  'What’s new': 'Neuigkeiten',
  'The EAVG, quoted': 'Das EAVG im Wortlaut',
  'What the beta involves': 'Was die Beta umfasst',
  Modules: 'Module',
  'Why Immvela': 'Warum Immvela',
  'What Immvela does today, and what comes next': 'Was Immvela heute kann und was als Nächstes kommt',
  'Every part works from the same confirmed values of a property. Live means it works today in the closed beta. Next means we are building it.':
    'Jeder Teil arbeitet mit denselben bestätigten Werten eines Objekts. Live heißt: funktioniert heute in der geschlossenen Beta. Geplant heißt: daran bauen wir.',
  'in the closed beta': 'in der geschlossenen Beta',
  'what we are building': 'woran wir bauen',
  Staging: 'Staging',
  'CRM import': 'CRM-Import',
  'Office rules': 'Büroregeln',
  'Owner overview': 'Übersicht für die Inhaberin oder den Inhaber',
  'Portal publishing': 'Veröffentlichung auf Portalen',
  'Walkthrough video': 'Rundgangsvideo',
  'It reads the documents. You confirm what counts.': 'Immvela liest die Unterlagen. Sie bestätigen, was zählt.',
  'Immvela reads the Energieausweis and the Grundbuchauszug and keeps your other documents on file. What it reads is a draft until a person confirms it.':
    'Immvela liest den Energieausweis und den Grundbuchauszug und legt Ihre übrigen Unterlagen ab. Was Immvela liest, bleibt ein Entwurf, bis eine Person es bestätigt.',
  'Values read from the Energieausweis for Praterstraße 31. One is confirmed, two wait for confirmation, and the Wohnfläche differs from the floor plan, so Immvela asks which is right.':
    'Aus dem Energieausweis der Praterstraße 31 gelesene Werte. Einer ist bestätigt, zwei warten auf Bestätigung, und die Wohnfläche weicht vom Grundriss ab, deshalb fragt Immvela, welcher Wert stimmt.',
  'Energieausweis, read from page 1': 'Energieausweis, gelesen von Seite 1',
  'Confirmed by you': 'Von Ihnen bestätigt',
  'Read, not confirmed': 'Gelesen, nicht bestätigt',
  'The floor plan says 76,0 m². Which is right?': 'Im Grundriss stehen 76,0 m². Welcher Wert stimmt?',
  'Valid until': 'Gültig bis',
  'Every listing shows which documents are still missing': 'Jedes Inserat zeigt, welche Unterlagen noch fehlen',
  'Each listing gets a checklist from SNS’s standard lists for a flat or a house in Austria and a flat in Germany. A certificate that is about to expire is flagged.':
    'Jedes Inserat bekommt eine Checkliste nach den Standardlisten von SNS für Wohnungen und Häuser in Österreich und Wohnungen in Deutschland. Ein Ausweis, der bald abläuft, wird markiert.',
  'Document checklist for Gentzgasse 14, a flat in Austria. Four of seven documents are on file; the Energieausweis expires in six weeks; three are not on file yet.':
    'Unterlagen-Checkliste für die Gentzgasse 14, eine Wohnung in Österreich. Vier von sieben Unterlagen liegen vor, der Energieausweis läuft in sechs Wochen ab, drei fehlen noch.',
  'Flat, Austria': 'Wohnung, Österreich',
  'On file': 'Liegt vor',
  'Expires in 6 weeks': 'Läuft in 6 Wochen ab',
  'Not on file yet': 'Fehlt noch',
  'SNS standard list: flat, Austria. 4 of 7 on file.': 'SNS-Standardliste: Wohnung, Österreich. 4 von 7 liegen vor.',
  'The Exposé, the brochure and the posts, drafted from what you confirmed': 'Exposé, Broschüre und Posts, entworfen aus dem, was Sie bestätigt haben',
  'Written in the German of the listing’s country, Austria, Germany or Switzerland, and set in your office’s brand. Each one is a draft for you to check.':
    'Geschrieben im Deutsch des Landes, in dem das Objekt liegt, Österreich, Deutschland oder Schweiz, und im Auftritt Ihres Büros gesetzt. Jeder Text ist ein Entwurf, den Sie prüfen.',
  'Three drafts for Gentzgasse 14: an Exposé, a brochure page in the office brand, and an Instagram post.':
    'Drei Entwürfe für die Gentzgasse 14: ein Exposé, eine Broschürenseite im Auftritt des Büros und ein Instagram-Post.',
  '[Your logo]': '[Ihr Logo]',
  'Instagram post': 'Instagram-Post',
  'Empty rooms, furnished. Every photo labelled.': 'Leere Räume, eingerichtet. Jedes Foto gekennzeichnet.',
  'Upload a photo of an empty room. Immvela furnishes it and marks every result as virtually staged.':
    'Laden Sie ein Foto eines leeren Raums hoch. Immvela richtet ihn ein und kennzeichnet jedes Ergebnis als virtuell eingerichtet.',
  'A living room furnished by Immvela, marked as virtually staged.': 'Ein von Immvela eingerichtetes Wohnzimmer, als virtuell eingerichtet gekennzeichnet.',
  'Five channels from one place, and nothing goes out without your yes': 'Fünf Kanäle an einem Ort, und nichts geht ohne Ihr Ja hinaus',
  'Instagram, Facebook, LinkedIn, TikTok and YouTube. Publishing always asks for your approval, and an ad missing required energy values is held, for every agent in the office.':
    'Instagram, Facebook, LinkedIn, TikTok und YouTube. Vor jeder Veröffentlichung fragt Immvela nach Ihrer Freigabe, und ein Inserat, dem erforderliche Energiekennwerte fehlen, wird angehalten, für alle im Büro.',
  'Three posts waiting for approval. Two can be approved. The post for Praterstraße 31 is held because its energy values are missing.':
    'Drei Posts warten auf Freigabe. Zwei können freigegeben werden. Der Post für die Praterstraße 31 ist angehalten, weil die Energiekennwerte fehlen.',
  '3 posts': '3 Posts',
  'Approve and publish': 'Freigeben und veröffentlichen',
  'Bring your listings in from your CRM': 'Holen Sie Ihre Inserate aus Ihrem CRM',
  'Export your listings as OpenImmo from onOffice, Justimmo, Propstack or FLOWFACT, and Immvela brings them in.':
    'Exportieren Sie Ihre Inserate als OpenImmo aus onOffice, Justimmo, Propstack oder FLOWFACT, und Immvela übernimmt sie.',
  'An OpenImmo export brought five listings into Immvela.': 'Ein OpenImmo-Export hat fünf Inserate in Immvela übernommen.',
  'OpenImmo export': 'OpenImmo-Export',
  'Brought in': 'Übernommen',
  '5 listings brought in': '5 Inserate übernommen',
  'What we are building next': 'Woran wir als Nächstes bauen',
  'None of this is in Immvela yet. We show it so you know where it is going.':
    'Nichts davon ist schon in Immvela. Wir zeigen es, damit Sie wissen, wohin es geht.',
  'Your office sets the required documents, the templates, and manager approval before publishing.':
    'Ihr Büro legt Pflichtunterlagen, Vorlagen und die Freigabe durch die Leitung vor dem Veröffentlichen fest.',
  'What every agent confirmed and published, in one view for the owner.':
    'Was jede Person bestätigt und veröffentlicht hat, in einer Ansicht für die Inhaberin oder den Inhaber.',
  'Listings out to willhaben and ImmoScout24.': 'Inserate auf willhaben und ImmoScout24.',
  'A walkthrough video from one sweep with a phone.': 'Ein Rundgangsvideo aus einem Durchgang mit dem Handy.',
  'See it with one of your own listings': 'Sehen Sie es an einem Ihrer eigenen Inserate',
  'One record you can trust, for every property': 'Ein Datenbestand, dem Sie vertrauen können, für jedes Objekt',
  'Five scattered pieces of one listing, an Energieausweis scan, a floor plan from an email, photos on a phone, a spreadsheet and a CRM entry, come together in one record for Praterstraße 31 with confirmed values.':
    'Fünf verstreute Teile eines Inserats, ein gescannter Energieausweis, ein Grundriss aus einer E-Mail, Fotos auf einem Handy, eine Tabelle und ein CRM-Eintrag, kommen in einem Datenbestand für die Praterstraße 31 mit bestätigten Werten zusammen.',
  'from the owner, by email': 'vom Eigentümer, per E-Mail',
  Photos: 'Fotos',
  'on a phone': 'auf dem Handy',
  'Price and rooms': 'Preis und Zimmer',
  'in a spreadsheet': 'in einer Tabelle',
  Listing: 'Inserat',
  'in the CRM': 'im CRM',
  'One record': 'Ein Datenbestand',
  'An Exposé is only as right as the documents behind it': 'Ein Exposé ist nur so richtig wie die Unterlagen dahinter',
  'The Energieausweis says 78 m². The floor plan says 76 m². When two documents disagree, Immvela flags it and asks you, before anything goes out.':
    'Im Energieausweis stehen 78 m², im Grundriss 76 m². Wenn sich zwei Unterlagen widersprechen, markiert Immvela das und fragt Sie, bevor etwas hinausgeht.',
  'Two documents for Praterstraße 31 disagree: the Energieausweis gives a Wohnfläche of 78,0 m², the floor plan 76,0 m².':
    'Zwei Unterlagen der Praterstraße 31 widersprechen sich: Der Energieausweis nennt eine Wohnfläche von 78,0 m², der Grundriss 76,0 m².',
  'page 1': 'Seite 1',
  'Every number traced to its document': 'Jede Zahl, belegt durch ihr Dokument',
  'Each value keeps the document, the page and the line it was read from, and the name of the person who confirmed it.':
    'Jeder Wert behält das Dokument, die Seite und die Zeile, aus der er gelesen wurde, und den Namen der Person, die ihn bestätigt hat.',
  'The Wohnfläche of Praterstraße 31, 76 m², read from the floor plan, page 1, checked against the Energieausweis, and confirmed by A. Berger.':
    'Die Wohnfläche der Praterstraße 31, 76 m², gelesen aus dem Grundriss, Seite 1, mit dem Energieausweis abgeglichen und von A. Berger bestätigt.',
  'Read from': 'Gelesen aus',
  'Grundriss, page 1: “Wohnfläche gesamt 76,0 m²”': 'Grundriss, Seite 1: „Wohnfläche gesamt 76,0 m²“',
  'Checked against': 'Abgeglichen mit',
  'Energieausweis, page 1: 78,0 m². The difference was flagged.': 'Energieausweis, Seite 1: 78,0 m². Der Unterschied wurde markiert.',
  'Confirmed by': 'Bestätigt von',
  'A. Berger, who chose 76 m²': 'A. Berger, die 76 m² gewählt hat',
  'Immvela reads. A person decides.': 'Immvela liest. Ein Mensch entscheidet.',
  'Immvela shows what is on file, what was read and what is still unconfirmed. Nothing it reads is used until someone in your office confirms it.':
    'Immvela zeigt, was vorliegt, was gelesen wurde und was noch nicht bestätigt ist. Nichts Gelesenes wird verwendet, bevor jemand in Ihrem Büro es bestätigt.',
  'The words Immvela uses about a value': 'Die Wörter, die Immvela für einen Wert verwendet',
  'The document is there.': 'Das Dokument ist da.',
  Read: 'Gelesen',
  'A draft. Not used yet.': 'Ein Entwurf. Noch nicht verwendet.',
  Confirmed: 'Bestätigt',
  'A person said yes. Now it is used.': 'Eine Person hat Ja gesagt. Jetzt wird er verwendet.',
  'Legally safe': 'Rechtssicher',
  'Immvela never says this.': 'Das sagt Immvela nie.',
  'The record belongs to your office': 'Der Datenbestand gehört Ihrem Büro',
  'Listings, documents and confirmed values belong to the office, not to one agent. Everyone has their own login, and every value shows who confirmed it.':
    'Inserate, Unterlagen und bestätigte Werte gehören dem Büro, nicht einer einzelnen Person. Alle haben einen eigenen Zugang, und jeder Wert zeigt, wer ihn bestätigt hat.',
  'Example office: three listings, each value confirmed by a named agent. Three agents, each with their own login.':
    'Beispielbüro: drei Inserate, jeder Wert von einer namentlich genannten Person bestätigt. Drei Personen, jede mit eigenem Zugang.',
  'Listings, documents, confirmed values': 'Inserate, Unterlagen, bestätigte Werte',
  'own login': 'eigener Zugang',
  'Immvela is made by SNS Software Solutions GmbH in Vienna. German first, written for Austria, Germany and Switzerland.':
    'Immvela wird von der SNS Software Solutions GmbH in Wien entwickelt. Deutsch zuerst, geschrieben für Österreich, Deutschland und die Schweiz.',
}

export type T = (english: string) => string

export function immvelaT(locale: Locale): T {
  if (locale !== 'de') return (s) => s
  // Keys are written with plain spaces; the copy keeps its no-break spaces (76&nbsp;m²).
  return (s) => DE[s.replace(/\u00a0/g, ' ')] ?? s
}

/** For the i18n check only. */
export const IMMVELA_DE = DE
