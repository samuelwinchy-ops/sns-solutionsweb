import { IMMVELA_URL } from '@/lib/site'

/**
 * The blog's content, as data rather than JSX.
 *
 * Same reasoning as the i18n dictionaries: keeping the copy here rather than
 * hand-written into each page means the index, the post page, the JSON-LD
 * (lib/schema.ts) and /llms-full.txt all render the same words and can't drift
 * from one another. It isn't in i18n/dictionaries because those exist to keep
 * an English and a German copy in sync (`typeof en` is the type `de` must
 * satisfy) — this is English-only for now, so forcing it through that contract
 * would mean either stubbing out a German half nobody asked for, or padding
 * the Dictionary type with an optional section every other page has to ignore.
 *
 * English only, deliberately: see app/(en)/blog/page.tsx.
 */

export type BlogAccent = 'indigo' | 'blue' | 'cyan' | 'violet'

export type BlogSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  ordered?: boolean
}

export type BlogFaq = { q: string; a: string }

export type BlogCta = {
  heading: string
  sub: string
  label: string
  href: string
  external?: boolean
}

export type BlogPost = {
  slug: string
  title: string
  /** The category chip and the JSON-LD `articleSection`. */
  eyebrow: string
  /** Meta description, card excerpt, and JSON-LD `description`. Keep it under ~160 chars. */
  description: string
  /** ISO date. Also what /blog sorts by. */
  date: string
  readTime: string
  accent: BlogAccent
  /** Pulled out onto the index's top card and linked from every related post. */
  featured?: boolean
  intro: string[]
  sections: BlogSection[]
  takeaways: string[]
  faq: BlogFaq[]
  cta: BlogCta
  /** Slugs, not objects — resolved through getPost() so a typo 404s in dev, not in prod copy. */
  related: string[]
}

const contactHref = (service: string) => `/contact?service=${encodeURIComponent(service)}`

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'real-estate-data-fragmentation',
    title: "The Real Data Problem in Real Estate (And Why Buying More Software Doesn't Fix It)",
    eyebrow: 'Real Estate',
    description:
      "A listing lives in five places and agrees with itself in none of them. Here's where real-estate data fragmentation actually comes from, and why another app usually makes it worse.",
    date: '2026-08-25',
    readTime: '8 min read',
    accent: 'blue',
    intro: [
      'By the time a single listing goes live, its facts have usually been typed out five or six times: once into the portal export tool, once into whatever CRM the brokerage has, once into the brochure, once into the social captions, and at least once more into an email thread nobody will ever search again. None of those copies update each other. By Friday, the floor area in the brochure and the floor area in the portal listing can quietly disagree, and nobody notices until a buyer does.',
      "That's real-estate data fragmentation: not a missing tool, but no single place that owns the true version of a fact. Everything downstream is a guess about what the last person typed.",
    ],
    sections: [
      {
        heading: 'Where the fragmentation actually lives',
        paragraphs: [
          'Follow one listing through its life and you can watch the same handful of facts get re-typed at every handoff. The property’s technical details — floor area, year of construction, energy certificate values — go from the PDF a seller hands over, into whatever the agent uses to draft the listing, and into the portal separately. A lead’s contact details go from a capture form, into a CRM if one exists, and into an agent’s own notes app if it doesn’t. Deal terms get negotiated over email or WhatsApp and, more often than anyone would like to admit, exist only there.',
          'None of these are unusual failures. They’re what happens by default when every tool in the stack keeps its own copy of the truth.',
        ],
      },
      {
        heading: "Why 'just get a CRM' doesn't solve it",
        paragraphs: [
          'A CRM looks like the fix, and it solves a real problem — but it’s one more place to type things into, not a place everything else reads from. The portal still has its own export. The document tool still has its own upload. The publishing tool still has its own draft. Adding a CRM to that pile doesn’t remove a step; it adds one, unless every other tool in the stack is built to read from it.',
          'The gap isn’t a missing piece of software. It’s a missing architecture — nothing in the stack is designated as the canonical version, so every tool quietly assumes it is.',
        ],
      },
      {
        heading: 'What it costs, concretely',
        bullets: [
          'Numbers drift: a floor area typed three times ends up as three slightly different numbers by the time a buyer compares the brochure to the portal listing.',
          'Compliance risk: a disclosure value that was correct in the original file can go stale or get mistyped by the time it reaches a published listing.',
          'Senior time on copy-paste: the people best placed to talk to clients spend part of every day re-entering facts those clients already gave someone else.',
          'Performance data that goes nowhere: what a listing’s post actually earned — views, enquiries, what converted — usually never makes it back anywhere it could inform the next one.',
        ],
      },
      {
        heading: 'The fix is architectural, not another app',
        paragraphs: [
          'The actual fix is one verified record per property, lead and deal, with every tool downstream reading from it and writing back to it. Confirm a fact once and it propagates everywhere it’s used, instead of being retyped at each step and drifting a little further from correct each time.',
          'It’s the reasoning behind Immvela, SNS’s own real-estate platform: a listing kit that drafts only from fields the agent has confirmed, a publishing module that won’t clear a post that fails a disclosure check, and a documents module that extracts values from paperwork but always shows them for confirmation before anything downstream treats them as fact.',
        ],
      },
      {
        heading: 'What to check before your next listing',
        bullets: [
          'Is there one place a fact like floor area or energy rating is confirmed, or does every tool ask for it separately?',
          'When that fact changes, does it update everywhere it’s used, or only in whichever tool you edited?',
          'Does anything downstream of publishing — enquiries, engagement, what converted — make it back to the record, or does it stop at the platform that generated it?',
        ],
      },
    ],
    takeaways: [
      'Fragmentation isn’t a missing tool — it’s the absence of one record every tool reads from and writes back to.',
      'A CRM alone doesn’t fix it; it just adds another place data can drift from the truth.',
      'The cost shows up as drifting numbers, compliance risk, senior time lost to re-typing, and performance data that never gets reused.',
    ],
    faq: [
      {
        q: 'What is data fragmentation in real estate?',
        a: 'It’s when the same property, lead or deal facts are stored separately across a portal, a CRM, a document store and a messaging thread, with no single record any of them defer to — so the copies drift apart over time.',
      },
      {
        q: 'Why doesn’t switching CRMs fix data fragmentation?',
        a: 'A CRM is still just one more system with its own copy of the data. Unless the portal, publishing tool, document tool and everything else are built to read from and write back to it, it becomes another place facts can disagree with the rest of the stack, not the place they’re resolved.',
      },
      {
        q: 'What does a single source of truth look like for a brokerage in practice?',
        a: 'One verified record per property, lead and deal that every module or tool reads from and writes back to — so a fact confirmed once (a floor area, a disclosure value, a lead’s status) is correct everywhere it’s used, rather than re-entered and re-drifting at each step.',
      },
    ],
    cta: {
      heading: 'See how one verified record actually works',
      sub: 'Immvela is SNS’s own platform, built module by module around exactly this problem.',
      label: 'See Immvela',
      href: IMMVELA_URL,
      external: true,
    },
    related: [
      'immvela-one-record-real-estate-operating-system',
      'ai-infrastructure-for-real-estate-agencies',
      'hvac-data-fragmentation',
    ],
  },
  {
    slug: 'immvela-one-record-real-estate-operating-system',
    title: 'Immvela: One Verified Record Instead of Seven Logins',
    eyebrow: 'Immvela · Product',
    description:
      "What Immvela actually is, module by module: the architecture behind SNS's real-estate platform, what's live today, and the constraints built into it rather than left to policy.",
    date: '2026-08-27',
    readTime: '8 min read',
    accent: 'cyan',
    intro: [
      'Immvela is SNS’s own platform for real-estate teams in Austria, Germany and Switzerland, sold module by module: each one stands alone, and all of them read from and write back to the same record of a brokerage’s properties, leads and deals. Two modules are live today; the rest are shipping in the open.',
      'The point of writing this out isn’t the feature list — it’s the architecture underneath it, because that’s the part that decides whether the thing gets more useful over time or just accumulates more disconnected AI features.',
    ],
    sections: [
      {
        heading: 'The core idea: modules share one record',
        paragraphs: [
          'Most "AI for real estate" products are a single feature bolted onto whatever tools an agency already has, which means every new feature re-derives its own facts from scratch. Immvela is built the other way round: there’s one verified record per property, lead and deal, and every module reads from it and writes back to it. Confirm a floor area once and every module that touches that listing uses the same number. Edit a draft and the platform learns how you write, rather than forgetting it the moment the browser tab closes.',
          'That’s also why it’s described as an operating system rather than a tool: the record is the substrate every module sits on, and it’s meant to be worth more in month twelve than it is on day one — the opposite of most point-solution AI, which doesn’t compound because nothing routes back into anything else.',
        ],
      },
      {
        heading: 'What’s live today',
        bullets: [
          'Quill (Listing Kit) — drafts captions, the brochure and the full Exposé from the listing record in seconds. Figures come only from fields the agent has confirmed, and every edit teaches it how that agent writes.',
          'Verlag (Publishing) — one composer and one schedule board across every channel. Nothing goes out without clearing a compliance gate, and what each post earns writes back to the listing it came from.',
        ],
      },
      {
        heading: 'What’s shipping next, in the open',
        paragraphs: [
          'Five more modules are in development, and none of them are described past what’s already built and demonstrable:',
        ],
        bullets: [
          'Iris (Reception) — qualifies inbound inquiries on budget, intent and financing, then routes them to the right agent. It never books and never quotes.',
          'Winston (Knowledge) — a DACH real-estate copilot that answers from a brokerage’s own documents plus a maintained domain corpus, and names the source behind every answer.',
          'Vignette (Staging) — furnishes an empty room from a single photo. It only ever adds; it won’t paint over a defect, and the "virtually staged" label is rendered into the pixels, not left to a caption.',
          'Immerse (Walkthrough) — one walk through a property with a phone comes back as a finished walkthrough video, cut for the listing and for social.',
          'Dossier (Documents) — reads the paperwork, pulls out the values a listing is legally required to disclose, and shows each one for confirmation before it counts as fact.',
        ],
      },
      {
        heading: 'Three constraints built into the architecture, not left to policy',
        bullets: [
          'Numbers in generated text come only from data the brokerage has confirmed — the platform doesn’t invent property specifications to fill a gap.',
          'Nothing binding is decided by the platform on its own. Where a module qualifies or routes an inquiry, it prepares information for a person to act on; prices, appointments and contract terms are confirmed by a human.',
          'Anything AI-generated that could mislead if mistaken for real is labeled as such at the source, not just in a caption — a staged photo carries its "virtually staged" mark rendered into the image itself.',
        ],
      },
      {
        heading: "Why 'operating system' and not 'AI tool'",
        paragraphs: [
          'A tool answers one prompt, once, in isolation. An operating system is what every module and every future feature runs on top of. That’s the actual bet Immvela is making — less about any single module being clever on its own, and more about the record underneath it staying accurate and durable as more gets built on it.',
        ],
      },
    ],
    takeaways: [
      'Immvela is one verified record per property, lead and deal — every module reads from it and writes back to it.',
      'Two modules (Quill, Verlag) are live; five more (Iris, Winston, Vignette, Immerse, Dossier) are shipping in the open.',
      'Facts only from confirmed data, no autonomous binding decisions, and AI-generated media labeled at the source — built into the architecture, not left to a policy document.',
    ],
    faq: [
      {
        q: 'What is Immvela?',
        a: 'Immvela is SNS Solutions’ platform for real-estate teams in the DACH market (Austria, Germany, Switzerland), built module by module around one shared, verified record of a brokerage’s properties, leads and deals.',
      },
      {
        q: 'Which Immvela modules are live today?',
        a: 'Quill (Listing Kit) and Verlag (Publishing) are live. Iris, Winston, Vignette, Immerse and Dossier are in development and shipping in the open.',
      },
      {
        q: 'Does Immvela make binding decisions on its own?',
        a: 'No. Where a module qualifies or routes something — like Iris with an inbound inquiry — it prepares information for a person to act on. It doesn’t agree prices, appointments or contract terms; a human confirms anything binding.',
      },
      {
        q: 'Who is Immvela built for?',
        a: 'Real-estate agencies and brokerages in Austria, Germany and Switzerland, sold module by module so a team can adopt the parts it needs.',
      },
    ],
    cta: {
      heading: 'Watch the two-minute walkthrough',
      sub: 'One narrated run through Immvela: the single verified record, and what each module does with it. No signup.',
      label: 'See Immvela',
      href: IMMVELA_URL,
      external: true,
    },
    related: [
      'real-estate-data-fragmentation',
      'ai-infrastructure-for-real-estate-agencies',
      'ai-outbound-for-service-businesses',
    ],
  },
  {
    slug: 'hvac-data-fragmentation',
    title: 'Why HVAC and Heating Installers Lose Deals After the Quote Goes Out',
    eyebrow: 'HVAC & Trades',
    description:
      "For an HVAC or heating & cooling installer, fragmentation doesn't look like seven tools — it looks like a spreadsheet and an inbox. Where the follow-up gap actually comes from.",
    date: '2026-09-01',
    readTime: '7 min read',
    accent: 'violet',
    intro: [
      'For a real-estate brokerage, data fragmentation means facts scattered across too many tools. For a heating, ventilation or air-conditioning installer, it usually means the opposite problem: almost no tooling at all. A quote goes out as a PDF attached to an email. It gets logged, if it gets logged, as a row in a spreadsheet. From that point on, whether it becomes a job depends entirely on whether someone remembers to chase it.',
      'That gap — the silence between "quote sent" and either "job won" or "job lost" — is where a meaningful share of an installer’s revenue quietly disappears.',
    ],
    sections: [
      {
        heading: 'Where the money actually leaks',
        paragraphs: [
          'Quotes get sent and then forgotten, not out of negligence but because nothing in the process prompts a follow-up. The spreadsheet functions as the entire customer record: useful for keeping a list, useless for reminding anyone to act on it. There’s no consistent trigger — no day-three nudge, no day-seven check-in — so whether a lead gets chased comes down to whichever salesperson happens to remember, on a day when they’re usually needed on-site instead.',
        ],
      },
      {
        heading: 'Why this is a data problem, not a discipline problem',
        paragraphs: [
          'It’s tempting to file this under "we just need to be better about following up." The more accurate diagnosis is structural: the quote data — amount, system type, customer, date sent — lives in a format nothing else can act on. A spreadsheet built by whoever happened to set it up, with whatever column names they chose, in German or English depending on the office. Nothing can automatically act on data that isn’t in a consistent shape, no matter how disciplined the team is.',
        ],
      },
      {
        heading: "What a fix looks like without forcing a CRM migration",
        paragraphs: [
          'Most small and mid-size installers won’t adopt a full CRM just to fix follow-up, and telling them to is the same "just get a CRM" advice that doesn’t hold up in real estate either — it adds a system rather than fixing the gap between the systems that already exist. The fix that actually gets adopted works with the mess already there: it reads the spreadsheet the team already keeps, regardless of column naming or language, sends reminders that read as coming from the actual salesperson, and stops automatically the moment the customer replies.',
          'That’s the shape of QFUtool, SNS’s tool for exactly this gap — covered in full in the next post.',
        ],
      },
      {
        heading: 'The compliance side people forget',
        bullets: [
          'A one-click unsubscribe on every email, not buried in a footer nobody reads.',
          'Sending restricted to business hours, so a reminder never lands as a 2 a.m. notification.',
          'A ceiling on quote size, so an installer’s biggest jobs are excluded from templated automation and get a phone call instead.',
        ],
        paragraphs: [
          'These aren’t features specific to any one tool — they’re what any automated outbound system should have before it touches a real customer relationship.',
        ],
      },
    ],
    takeaways: [
      'The HVAC follow-up gap is a data-shape problem: quote data sits in a spreadsheet nothing else can act on.',
      'It isn’t a discipline problem — no consistent trigger exists to prompt a follow-up in the first place.',
      'The fix that gets adopted works with the spreadsheet installers already use, rather than requiring a CRM migration.',
    ],
    faq: [
      {
        q: 'Why do HVAC quotes go unanswered?',
        a: 'Not because customers aren’t interested, but because nothing in most installers’ process triggers a follow-up. The quote is logged in a spreadsheet, if anywhere, and whether it gets chased depends on one person remembering, on a day they’re usually needed on-site.',
      },
      {
        q: 'Do I need a CRM to fix follow-up?',
        a: 'No. A CRM solves a broader problem but adds a system to learn and migrate into. The narrower fix — reading the spreadsheet an installer already keeps and automating reminders from it — closes the follow-up gap without a migration.',
      },
      {
        q: 'Is automated quote follow-up appropriate for every job?',
        a: 'Not the largest ones. A sensible setup excludes quotes above a set value from templated automation, on the basis that a big job earns a phone call rather than an email sequence.',
      },
    ],
    cta: {
      heading: 'See exactly how the follow-up works',
      sub: 'QFUtool is SNS’s tool for HVAC and heating & cooling installers, built around this specific gap.',
      label: 'Read about QFUtool',
      href: '/blog/qfutool-ai-follow-up-hvac-quotes',
    },
    related: [
      'qfutool-ai-follow-up-hvac-quotes',
      'ai-outbound-for-service-businesses',
      'ai-infrastructure-for-real-estate-agencies',
    ],
  },
  {
    slug: 'qfutool-ai-follow-up-hvac-quotes',
    title: 'QFUtool: Automated Follow-Up for HVAC and Heating & Cooling Quotes',
    eyebrow: 'QFUtool · Product',
    description:
      'What QFUtool does, how it works from an existing spreadsheet, the safeguards built in, and what it costs — SNS’s tool for HVAC and heating & cooling installers.',
    date: '2026-09-03',
    readTime: '6 min read',
    accent: 'indigo',
    intro: [
      'QFUtool automates the follow-up after an HVAC or heating & cooling quote goes out. Upload the spreadsheet an installer already sends quotes from, and it sends personalized reminders during business hours, stopping the moment a customer replies. It’s built by SNS Solutions, and it’s the narrow, practical answer to the follow-up gap described in the previous post: not a CRM, not a platform migration — a tool that works with the spreadsheet already sitting on the desktop.',
    ],
    sections: [
      {
        heading: 'How it works, step by step',
        ordered: true,
        bullets: [
          'Upload the quotes spreadsheet as it already exists — QFUtool recognizes the relevant columns regardless of naming convention, in English or German.',
          'It shows what it understood in plain language before sending anything, so nothing goes out on a misread.',
          'Reminders go out personalized with merge fields — first name, quote amount, system type, technician name and quote reference — so each one reads as written for that customer, not a template.',
          'The sequence stops automatically the moment a customer replies, unsubscribes, or the email bounces.',
        ],
      },
      {
        heading: 'Why it sends from your own domain',
        paragraphs: [
          'Emails authenticate from the installer’s own company address and the actual salesperson’s name, not a third-party sender. A follow-up that reads as coming from a mass-mail platform gets ignored, or marked as spam, at precisely the moment it needs to look like a person checking in.',
        ],
      },
      {
        heading: 'The safeguards',
        bullets: [
          'One-click unsubscribe on every email.',
          'Sends only 08:00–18:00, Monday to Friday.',
          'A quote-amount ceiling that excludes an installer’s largest jobs from templated automation, so they get a phone call instead.',
        ],
      },
      {
        heading: 'Pricing',
        bullets: [
          'Trial — free for 14 days, 25 follow-ups per month, 2 seats.',
          'Starter — €49/month, 150 follow-ups, 2 seats.',
          'Pro — €149/month, 750 follow-ups, 10 seats.',
          'Business — custom pricing, unlimited follow-ups and seats.',
        ],
        paragraphs: ['Every plan sends as the actual salesperson — that isn’t a paid upgrade.'],
      },
      {
        heading: 'Who it’s for',
        paragraphs: [
          'HVAC installers and heating & cooling contractors who send quotes regularly and want them followed up on consistently, without adopting a full CRM to get there.',
        ],
      },
    ],
    takeaways: [
      'QFUtool reads the spreadsheet an installer already keeps and turns quote follow-up into an automatic sequence.',
      'Every reminder sends from the real salesperson’s name and domain, and stops the moment a customer engages.',
      'A free 14-day trial covers 25 follow-ups; paid tiers start at €49/month.',
    ],
    faq: [
      {
        q: 'What is QFUtool?',
        a: 'A tool from SNS Solutions that automates follow-up emails for HVAC and heating & cooling quotes, built from a spreadsheet an installer already keeps rather than requiring a new CRM.',
      },
      {
        q: 'Does QFUtool work with my existing spreadsheet?',
        a: 'Yes. It recognizes the relevant columns regardless of naming convention, in English or German, and shows what it understood before sending anything.',
      },
      {
        q: 'How much does QFUtool cost?',
        a: 'A 14-day free trial covers 25 follow-ups across 2 seats. Paid plans start at €49/month (Starter, 150 follow-ups) up to €149/month (Pro, 750 follow-ups, 10 seats), with a custom Business tier for unlimited follow-ups and seats.',
      },
      {
        q: 'What happens when a customer replies?',
        a: 'The follow-up sequence for that quote stops automatically — the same as when a customer unsubscribes or an email bounces.',
      },
    ],
    cta: {
      heading: 'Try it on your own quotes',
      sub: 'Free for 14 days, 25 follow-ups included.',
      label: 'Start free trial',
      href: 'https://www.qfutool.com/',
      external: true,
    },
    related: [
      'hvac-data-fragmentation',
      'ai-outbound-for-service-businesses',
      'ai-infrastructure-for-real-estate-agencies',
    ],
  },
  {
    slug: 'ai-outbound-for-service-businesses',
    title: 'From Follow-Up to Outbound: Where AI-Driven Sales Automation Is Headed',
    eyebrow: 'AI Outbound',
    description:
      'Follow-up and outbound sound similar but fail differently. What separates them, why outbound has a higher bar, and the direction QFUtool is moving toward.',
    date: '2026-09-10',
    readTime: '7 min read',
    accent: 'blue',
    intro: [
      'Most of the "AI for sales" conversation right now is about inbound — a chatbot answering an inquiry that already arrived. The outbound half, proactively reaching people who haven’t asked yet, gets far less automation, and for a specific reason: it needs the same clean, confirmed, structured data as anything else, or it’s just spam with better grammar.',
    ],
    sections: [
      {
        heading: 'Follow-up is the easy end of outbound',
        paragraphs: [
          'QFUtool’s current shape — reminding someone who already requested a quote — is deliberately the narrow, low-risk end of outbound. The recipient already raised their hand, so a reminder is expected, not cold. It’s genuine automation, but it isn’t yet reaching people who haven’t engaged at all, which is a different and harder problem.',
        ],
      },
      {
        heading: 'Why outbound is harder to get right',
        paragraphs: [
          'Cold outreach fails for a different reason than follow-up does. The data-quality bar is higher: a wrong name or a stale fact on a first contact reads as careless, not automated — there’s no existing relationship absorbing the mistake. The compliance bar is higher too: consent rules differ for someone who’s never engaged with a business versus someone chasing their own quote. Any tool that skips that groundwork isn’t automating outreach, it’s automating spam.',
        ],
      },
      {
        heading: 'The direction QFUtool is heading',
        paragraphs: [
          'Outbound is the stated direction QFUtool is moving toward next — not a shipped feature today, but an extension of the same principles the follow-up engine already proves out: send from the real person’s name and domain, respect a hard stop the moment someone disengages, never send outside business hours, and keep a ceiling that routes the biggest opportunities to a human instead of a template. The idea is to extend those safeguards to a new part of the funnel rather than build outbound as a separate, looser product.',
        ],
      },
      {
        heading: 'What this means for real estate specifically',
        paragraphs: [
          'Immvela’s Iris module handles the inbound side for real-estate agencies — qualifying and routing inquiries that already arrived. Nothing in Immvela’s current lineup automates outbound prospecting for agents, and the same underlying thesis applies regardless of vertical: automation only compounds once the data underneath it is trustworthy, whether that data is an HVAC quote spreadsheet or a brokerage’s lead record.',
        ],
      },
      {
        heading: "What to ask before you buy any 'AI outbound' tool",
        bullets: [
          'Does it require clean, confirmed data, or does it improvise around gaps in what it’s given?',
          'Does it stop reliably, in one attempt, the moment someone opts out?',
          'Does it read as coming from a person, or as coming from a platform?',
          'Is there a value ceiling that routes the biggest opportunities to a human instead of a template?',
        ],
      },
    ],
    takeaways: [
      'Follow-up (reminding someone who already engaged) and outbound (reaching someone who hasn’t) fail differently — outbound has a higher data-quality and compliance bar.',
      'QFUtool is a follow-up tool today; outbound is the stated direction it’s moving toward, extending the same safeguards rather than loosening them.',
      'The same thesis holds across verticals: automation only compounds once the data underneath it is trustworthy.',
    ],
    faq: [
      {
        q: 'What’s the difference between AI inbound and AI outbound?',
        a: 'Inbound automation responds to someone who already reached out — an inquiry, a quote request. Outbound automation initiates contact with someone who hasn’t engaged yet, which raises the bar on data accuracy and consent.',
      },
      {
        q: 'Is QFUtool an outbound tool today?',
        a: 'Not yet. Today it automates follow-up on quotes a customer already requested, which is inbound-originated. Outbound — reaching new prospects — is the direction it’s stated to be moving toward.',
      },
      {
        q: 'Does Immvela do outbound for real-estate agents?',
        a: 'Not currently. Immvela’s Iris module handles inbound reception — qualifying and routing inquiries that already arrived — rather than outbound prospecting.',
      },
    ],
    cta: {
      heading: 'Want to know when outbound ships?',
      sub: 'Tell us what your outbound process looks like today and we’ll keep you posted as it comes online.',
      label: 'Get in touch',
      href: contactHref('AI & Automation'),
    },
    related: [
      'qfutool-ai-follow-up-hvac-quotes',
      'hvac-data-fragmentation',
      'ai-infrastructure-for-real-estate-agencies',
    ],
  },
  {
    slug: 'ai-infrastructure-for-real-estate-agencies',
    title: "What 'AI Infrastructure' Actually Means for a Real Estate Agency",
    eyebrow: 'AI Infrastructure',
    description:
      "Most 'AI for real estate' is a chatbot bolted onto the same fragmented tools. Real AI infrastructure is the data layer underneath it — here's what that means in practice.",
    date: '2026-09-15',
    readTime: '9 min read',
    accent: 'indigo',
    featured: true,
    intro: [
      'Agencies keep buying AI tools and the results don’t compound. A caption generator here, a chatbot there, a pricing assistant somewhere else — each one useful in isolation, and the stack as a whole no more coherent a year later than it was on day one. The usual explanation is that the tools aren’t good enough yet. The more accurate one is that AI layered on top of fragmented data just repeats the fragmentation faster.',
      "'AI infrastructure' isn’t a feature or a chatbot. It's the data layer and the workflow layer underneath any AI feature — the part that decides whether that feature gets more useful over time or just adds noise. Here’s what that means concretely.",
    ],
    sections: [
      {
        heading: 'The tool-by-tool trap',
        paragraphs: [
          'A typical brokerage stack already has a CRM, a portal export tool, WhatsApp for anything urgent, a shared drive for documents, a staging tool, and a publishing tool — none of them sharing a record. Every new AI feature gets bolted onto that pile the same way: it reads whatever context it’s handed, generates an output, and forgets everything the moment the session ends. None of them share a record, so none of them get more accurate as the agency uses them — which is exactly why outputs drift and agents stop trusting them within a few months.',
        ],
      },
      {
        heading: 'What infrastructure means, concretely',
        bullets: [
          'One verified record per property, lead and deal that every tool reads from and writes back to, instead of each tool keeping its own copy.',
          'A confirmation layer, so AI never asserts a fact it wasn’t given — it works only from what a human has already confirmed.',
          'An audit trail, so any generated document or action can be traced back to the exact record state that produced it.',
        ],
        paragraphs: [
          'Immvela is built as a working example of this, not a special case: Quill drafts listing copy only from confirmed fields, Verlag won’t publish anything that fails a compliance check, and none of the modules in development — Iris included — are allowed to make a binding decision on their own.',
        ],
      },
      {
        heading: 'Why this compounds instead of decaying',
        paragraphs: [
          'Correct a fact once and every module that touches it uses the corrected version. Each module’s output becomes the next module’s input — a confirmed listing feeds the brochure, the brochure feeds the captions, engagement on the captions feeds back into what the listing record knows worked. That’s the flywheel: worth more in month twelve than on day one.',
          'A stack of disconnected point-AI tools does the opposite. Nothing routes back into anything else, so accuracy doesn’t improve with use — it just gets re-rolled, tool by tool, every single time.',
        ],
      },
      {
        heading: "It's not one vertical's problem",
        paragraphs: [
          'The same root cause shows up outside real estate in a different shape. SNS also builds QFUtool, a tool for HVAC and heating & cooling installers, and the fragmentation there isn’t seven tools — it’s closer to zero. Quotes live in a spreadsheet or an inbox and nothing prompts a follow-up. Different vertical, same underlying thesis: fix the data and workflow layer before adding AI on top of it, or the AI just repeats whatever mess is already there, faster.',
        ],
      },
      {
        heading: 'A short checklist before you buy another AI feature',
        bullets: [
          'Does it read the same record as your other tools, or does it keep its own siloed copy?',
          'Does it ever assert a fact it wasn’t given, or does it stick strictly to what’s been confirmed?',
          'If you removed it tomorrow, is your data locked inside it, or does it live in a system you actually own?',
          'Can you trace a specific output back to the exact record state that produced it?',
        ],
      },
    ],
    takeaways: [
      'AI infrastructure is the data and workflow layer underneath a feature, not the feature itself.',
      'It only pays off when outputs get fed back into one shared, verified record — otherwise each tool starts from zero every time.',
      'The same fragmentation pattern shows up well outside real estate — see how it plays out for HVAC installers.',
    ],
    faq: [
      {
        q: "What does 'AI infrastructure' mean for a real estate agency?",
        a: 'The data and workflow layer that sits underneath any AI feature: one verified record per property, lead and deal, a rule that AI only works from confirmed facts, and a trail from every generated output back to the record state that produced it.',
      },
      {
        q: "Why doesn't adding another AI tool fix data fragmentation?",
        a: 'A bolt-on AI tool usually keeps its own copy of whatever context it’s given and forgets it afterward. Without a shared record to read from and write back to, each new tool just adds another independent, drifting copy of the truth rather than reducing the number that already exist.',
      },
      {
        q: 'How does Immvela apply this in practice?',
        a: 'One verified record per property, lead and deal; every module reads from and writes back to it; generated text uses only confirmed facts; and nothing in the platform makes a binding decision — a human confirms anything that commits the agency.',
      },
    ],
    cta: {
      heading: "Not sure if it's a record problem or a tools problem?",
      sub: 'Thirty minutes, no cost. Tell us how your team’s data actually moves and we’ll tell you where it breaks.',
      label: 'Book a free consultation',
      href: contactHref('AI & IT Consulting'),
    },
    related: [
      'real-estate-data-fragmentation',
      'immvela-one-record-real-estate-operating-system',
      'hvac-data-fragmentation',
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.related.map((slug) => getPost(slug)).filter((p): p is BlogPost => Boolean(p))
}

/** Newest first — same order the index and /llms-full.txt render in. */
export function sortedPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))
}
