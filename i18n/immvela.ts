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
  'Give it the Energieausweis, the floor plan and the photos. Immvela drafts the Exposé and the posts, and when two documents disagree, it asks you before anything goes out.':
    'Geben Sie Immvela den Energieausweis, den Grundriss und die Fotos. Immvela entwirft das Exposé und die Posts, und wenn sich zwei Unterlagen widersprechen, fragt es Sie, bevor etwas hinausgeht.',
  'Reading 5 documents': '5 Unterlagen werden gelesen',
  'Drafting the Exposé': 'Exposé wird entworfen',
  '1 question for you': '1 Frage an Sie',
  'Ready to advertise': 'Bereit zum Inserieren',
  'Virtually staged': 'Virtuell eingerichtet',
  'Held until you confirm': 'Angehalten bis zu Ihrer Bestätigung',
  'Ready. Publish?': 'Fertig. Veröffentlichen?',
  '2 values': '2 Werte',
  'Wohnfläche set to 76 m²': 'Wohnfläche auf 76\u00a0m² gesetzt',
  'From the floor plan. Confirmed by you.': 'Aus dem Grundriss. Von Ihnen bestätigt.',
  'Before this goes out': 'Bevor das hinausgeht',
  'Wohnfläche: 78 m² in the Energieausweis, 76 m² in the floor plan. Which is right?':
    'Wohnfläche: 78\u00a0m² im Energieausweis, 76\u00a0m² im Grundriss. Welcher Wert stimmt?',
  'Floor plan': 'Grundriss',
  'Five documents, an Energieausweis, a floor plan and three photos, go into the Immvela helix. An Exposé for Gentzgasse 14 in 1180 Wien comes out, with an Instagram post and a virtually staged photo behind it. The Wohnfläche reads 78 m² in the Energieausweis and 76 m² in the floor plan, so Immvela asks which is right. The agent picks 76 m², the value is confirmed from the floor plan, and the post is ready to publish.':
    'Fünf Unterlagen, ein Energieausweis, ein Grundriss und drei Fotos, gehen in die Immvela Helix. Heraus kommt ein Exposé für die Gentzgasse 14 in 1180 Wien, dahinter ein Instagram-Post und ein virtuell eingerichtetes Foto. Die Wohnfläche lautet im Energieausweis 78 m² und im Grundriss 76 m², also fragt Immvela, welcher Wert stimmt. Der Makler wählt 76 m², der Wert wird aus dem Grundriss bestätigt, und der Post ist bereit zur Veröffentlichung.',
  'Five documents go into the Immvela helix. An Exposé comes out. The Wohnfläche reads 78 m² in the Energieausweis and 76 m² in the floor plan, so Immvela asks which is right. The agent picks 76 m², it is confirmed from the floor plan, and the Instagram post is ready to publish.':
    'Fünf Unterlagen gehen in die Immvela Helix. Heraus kommt ein Exposé. Die Wohnfläche lautet im Energieausweis 78 m² und im Grundriss 76 m², also fragt Immvela, welcher Wert stimmt. Der Makler wählt 76 m², der Wert wird aus dem Grundriss bestätigt, und der Instagram-Post ist bereit zur Veröffentlichung.',
  'Watch it again': 'Noch einmal ansehen',

  // trace
  'Every number in your Exposé, traced to its document':
    'Jede Zahl im Exposé, belegt durch ihr Dokument',
  'Immvela keeps the page and the exact line each value was read from, so any number can be checked in one tap.':
    'Immvela merkt sich die Seite und die genaue Zeile, aus der jeder Wert gelesen wurde. So lässt sich jede Zahl mit einem Tippen prüfen.',
  'Key facts. Choose a value to see the line it was read from.':
    'Eckdaten. Wählen Sie einen Wert, um die Zeile zu sehen, aus der er gelesen wurde.',
  'Grundriss, page 1. Confirmed by you on 2 October.':
    'Grundriss, Seite 1. Von Ihnen bestätigt am 2. Oktober.',
  'Energieausweis, page 1. Confirmed by you on 2 October.':
    'Energieausweis, Seite 1. Von Ihnen bestätigt am 2. Oktober.',
  'Each value keeps the document and the line it was read from, and who confirmed it.':
    'Jeder Wert behält das Dokument und die Zeile, aus der er gelesen wurde, und wer ihn bestätigt hat.',
  'Tap any value in the strip to trace it.':
    'Tippen Sie auf einen Wert in der Leiste, um ihn zurückzuverfolgen.',
  ', read from the ': ', gelesen aus dem Dokument ',
  ', page 1: ': ', Seite 1: ',
  '. Confirmed by you on 2 October.': '. Von Ihnen bestätigt am 2. Oktober.',

  // office
  'One standard for every listing in your office': 'Ein Standard für jedes Inserat in Ihrem Büro',
  'Every agent works from confirmed documents. No ad goes out with missing energy values, and you can see who confirmed what, from which document.':
    'Alle im Büro arbeiten mit bestätigten Unterlagen. Kein Inserat geht mit fehlenden Energiekennwerten hinaus, und Sie sehen, wer was bestätigt hat, aus welchem Dokument.',
  'Example office': 'Beispielbüro',
  '5 listings': '5 Inserate',
  'Agent, listing': 'Makler, Inserat',
  Documents: 'Unterlagen',
  'Values confirmed': 'Werte bestätigt',
  Ready: 'Bereit',
  Held: 'Angehalten',
  'Held: Energieausweis values not confirmed.':
    'Angehalten: Werte aus dem Energieausweis nicht bestätigt.',
  'Agent: M. Huber': 'Makler: M. Huber',
  'Last change: today 10:42': 'Letzte Änderung: heute 10:42',
  'Example office: five listings in Vienna, one per agent. Four have documents, confirmed values and are ready. The listing at Praterstraße 31 is held. Its side panel reads: Held, Energieausweis values not confirmed. Agent M. Huber. Last change today 10:42.':
    'Beispielbüro: fünf Inserate in Wien, eines pro Makler. Vier haben Unterlagen und bestätigte Werte und sind bereit. Das Inserat in der Praterstraße 31 ist angehalten. Die Seitenleiste zeigt: Angehalten, Werte aus dem Energieausweis nicht bestätigt. Makler M. Huber. Letzte Änderung heute 10:42.',
  'Next:': 'Geplant:',
  'set your office’s own rules, required documents, templates and approval before publishing.':
    'eigene Regeln für Ihr Büro, also Pflichtunterlagen, Vorlagen und eine Freigabe vor dem Veröffentlichen.',

  // listen
  'Say “get it ready”': 'Sagen Sie „Fertig machen“',
  'Immvela makes the plan, does the work and shows you each result in the thread.':
    'Immvela erstellt den Plan, erledigt die Arbeit und zeigt Ihnen jedes Ergebnis im Verlauf.',
  'Immvela, Exposé ready': 'Immvela, Exposé fertig',
  'Get it ready': 'Fertig machen',
  'Here is the plan.': 'Hier ist der Plan.',
  'Read the documents': 'Unterlagen lesen',
  'Write the Exposé': 'Exposé schreiben',
  'Check every value': 'Jeden Wert prüfen',
  'Message Immvela': 'Nachricht an Immvela',
  Open: 'Öffnen',
  "A phone with a thin graphite edge, slightly turned, stands on a forest green stage. It shows Immvela in Auto mode for Gentzgasse 14. The agent wrote: Get it ready. Immvela answers with a plan of three checked steps: read the documents, write the Exposé, check every value. The finished Exposé card lifts out of the phone past its right edge. A glass chip reading Immvela, Exposé ready sits over the stage's left edge.":
    'Ein Handy mit schmalem Graphitrahmen, leicht gedreht, steht auf einer waldgrünen Bühne. Es zeigt Immvela im Modus Auto für die Gentzgasse 14. Der Makler hat geschrieben: Fertig machen. Immvela antwortet mit einem Plan aus drei erledigten Schritten: Unterlagen lesen, Exposé schreiben, jeden Wert prüfen. Die fertige Exposé-Karte ragt rechts aus dem Handy heraus. Ein gläserner Hinweis mit dem Text Immvela, Exposé fertig liegt über dem linken Rand der Bühne.',

  // staging
  'Furnished before the first viewing': 'Eingerichtet vor der ersten Besichtigung',
  'Upload a photo of an empty room. Immvela furnishes it and marks the result as virtually staged.':
    'Laden Sie ein Foto eines leeren Raums hoch. Immvela richtet ihn ein und kennzeichnet das Ergebnis als virtuell eingerichtet.',
  'Empty room': 'Leerer Raum',
  'A living room at Gentzgasse 14 in Vienna, split down the middle: empty on the right, furnished by Immvela on the left and marked virtually staged. The Immvela helix sits on the seam as a handle.':
    'Ein Wohnzimmer in der Gentzgasse 14 in Wien, in der Mitte geteilt: rechts leer, links von Immvela eingerichtet und als virtuell eingerichtet gekennzeichnet. Die Immvela Helix sitzt als Regler auf der Trennlinie.',
  'Compare the empty room with the staged room': 'Leeren und eingerichteten Raum vergleichen',
  Staged: 'Eingerichtet',
  'Show the room': 'Raum zeigen',
  'or drag the handle': 'oder den Regler ziehen',
  'Every staged photo is labelled as virtually staged.':
    'Jedes eingerichtete Foto ist als virtuell eingerichtet gekennzeichnet.',
  ' percent staged': ' Prozent eingerichtet',

  // specs
  'Everything Immvela does': 'Was Immvela kann',
  'Reads the Energieausweis and the Grundbuchauszug, flags contradictions and expiring certificates. Nothing is used until you confirm it.':
    'Liest den Energieausweis und den Grundbuchauszug, markiert Widersprüche und ablaufende Ausweise. Nichts wird verwendet, bevor Sie es bestätigen.',
  'Exposé, brochure and posts': 'Exposé, Broschüre und Posts',
  'Drafted from your confirmed values, in the German of the listing’s country, with your office brand.':
    'Aus Ihren bestätigten Werten entworfen, im Deutsch des Landes, in dem das Objekt liegt, und im Auftritt Ihres Büros.',
  'Furnishes photos of empty rooms. Every staged photo is labelled as virtually staged.':
    'Richtet Fotos leerer Räume ein. Jedes eingerichtete Foto ist als virtuell eingerichtet gekennzeichnet.',
  Publishing: 'Veröffentlichen',
  'Instagram, Facebook, LinkedIn, TikTok and YouTube from one place, always after your approval.':
    'Instagram, Facebook, LinkedIn, TikTok und YouTube an einem Ort, immer erst nach Ihrer Freigabe.',
  'CRM import': 'CRM-Import',
  'Bring listings in with an OpenImmo export from onOffice, Justimmo, Propstack or FLOWFACT.':
    'Übernehmen Sie Inserate per OpenImmo-Export aus onOffice, Justimmo, Propstack oder FLOWFACT.',
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
  '[Hosting answer to confirm with SNS]': '[Antwort zum Hosting, mit SNS zu bestätigen]',

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
  'To be confirmed': 'Noch zu bestätigen',
  'These answers are not settled yet. They will appear here once they are.':
    'Diese Antworten sind noch nicht geklärt. Sie erscheinen hier, sobald sie feststehen.',
  '[Hosting region]': '[Hosting-Region]',
  'Where the database and files are stored.': 'Wo die Datenbank und die Dateien gespeichert sind.',
  '[List of service providers]': '[Liste der Dienstleister]',
  'Every company that processes data for Immvela.':
    'Alle Unternehmen, die für Immvela Daten verarbeiten.',
  '[Data processing agreement (AVV)]': '[Auftragsverarbeitungsvertrag (AVV)]',
  'Whether and how your office can sign one.': 'Ob und wie Ihr Büro einen abschließen kann.',
  'Answers to be confirmed': 'Noch zu bestätigende Antworten',
  'Questions about your data': 'Fragen zu Ihren Daten',
  'Write to': 'Schreiben Sie an',
  '. Immvela is made by SNS Software Solutions GmbH, Vienna.':
    '. Immvela wird von der SNS Software Solutions GmbH in Wien entwickelt.',

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
}

export type T = (english: string) => string

export function immvelaT(locale: Locale): T {
  if (locale !== 'de') return (s) => s
  // Keys are written with plain spaces; the copy keeps its no-break spaces (76&nbsp;m²).
  return (s) => DE[s.replace(/\u00a0/g, ' ')] ?? s
}

/** For the i18n check only. */
export const IMMVELA_DE = DE
