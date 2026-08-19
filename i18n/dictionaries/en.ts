// English dictionary. `typeof en` defines the Dictionary type that `de` must
// satisfy. Rich sentences with inline emphasis are modelled as segment arrays
// so both languages can highlight the right words in their own word order.

export type Segment = { t: string; strong?: boolean }
export type ConsentSegment = { t: string; link?: boolean }

export const en = {
  nav: {
    home: 'home',
    services: 'custom builds',
    realEstate: 'immvela',
    team: 'team',
    contact: 'contact',
  },
  // (No `langToggle` entry: the switch is two flags with visually-hidden
  // language names, so its labels live in LanguageToggle.tsx and are never
  // translated — "English"/"Deutsch" are endonyms in both locales.)
  hero: {
    // "Agentic software, auditable by design" was a leftover from the studio
    // positioning: "agentic" is AI-industry vocabulary a brokerage owner does
    // not use — and in real estate "agent" already means a person — while
    // "auditable by design" answered an objection before the reader had formed
    // any desire. Neither said who it was for or what it did.
    //
    // This is the same selectivity /services already sells ("where AI and
    // better systems would genuinely pay off, and where they wouldn't"), and it
    // is a real differentiator while everyone else sells AI on everything. The
    // headline carries the position; the subtitle below carries the specifics.
    h1a: 'Implementing AI',
    h1b: 'where it makes a difference.',
    // The hero is Immvela and nothing else. Custom builds used to be tacked on
    // here as "for everyone else", which read as a consolation prize to exactly
    // the prospect it was meant to attract — they now get their own section at
    // the foot of the page (`customBuilds`), where the pitch is an invitation
    // rather than an afterthought.
    subtitle: [
      { t: 'A Vienna studio building ' },
      { t: 'Immvela', strong: true },
      { t: ', the agentic operating system for ' },
      { t: 'real estate', strong: true },
      { t: '. One verified record of your properties, leads and deals, with a module for each part of the job.' },
    ] as Segment[],
    ctaStart: 'Book a free consultation',
    ctaSolutions: 'see immvela',
  },
  // One industry now, so this section carries the real-estate card's own copy
  // rather than reading it out of the retired solutionsPage.industries list.
  homeFocus: {
    eyebrow: 'Who we build for',
    heading: 'Purpose-built for real estate.',
    sub: 'We know real estate inside out: how it talks, how it works, what the day actually looks like. So Immvela fits the way you already do the job.',
    cta: 'See how Immvela works',
    card: {
      label: 'Immvela',
      descriptor: 'Real estate · sales & lettings',
      blurb:
        'Our own platform, sold module by module. Each one stands alone, and all of them write back to the same record of your properties, leads and deals.',
    },
  },
  // The closing section of the homepage, and the one job the hero no longer
  // does: catching the visitor Immvela doesn't fit. It was a generic "how we
  // work" method rail; the method is still the differentiator (measuring before
  // and after is the part almost nobody does), so the four stages survive
  // intact — what changed is the framing around them, from "here is our
  // process" to "tell us what Immvela doesn't cover and we'll work it out with
  // you." The last step is the invitation, not a description.
  customBuilds: {
    eyebrow: 'custom builds',
    heading: 'Immvela not the shape of your problem?',
    sub: 'Immvela covers the work most real-estate teams share. If yours runs on something it doesn’t reach — an in-house system it has to talk to, a process nobody else has, a piece of the job we haven’t built yet — that’s a custom build, and it’s half of what we do. We work it through with you first, and you get a straight answer on whether it’s worth building at all.',
    steps: [
      {
        k: '01',
        name: 'Talk it through',
        main: 'You describe it. We ask the harder questions.',
        sub: 'Thirty minutes, online, no cost and no obligation. Bring the workflow that’s costing you time and we’ll tell you what it would actually take.',
      },
      {
        k: '02',
        name: 'Baseline',
        main: 'We measure it before we touch it.',
        sub: 'Handling time, error rate, cost per listing or per deal. Without a number from before, “it feels faster” is the only result you can ever get.',
      },
      {
        k: '03',
        name: 'Pilot',
        main: 'One workflow, live, in weeks.',
        sub: 'The smallest build that proves the case, running against your real listings and real leads, not a demo on sample data.',
      },
      {
        k: '04',
        name: 'Prove & hand over',
        main: 'The same measurement, run again.',
        sub: 'Before and after, side by side. You own the system, the documentation, and the decision about what comes next.',
      },
    ],
    note: 'And if the honest answer is “you don’t need this built”, that’s the answer you get.',
    cta: 'Tell us what you need',
  },
  announce: {
    tag: 'Built in the open',
    heading: 'Meet Immvela.',
    body: 'Our own platform for real-estate teams: the operating system behind your listings, leads and deals. Two modules live, the rest shipping in the open.',
    cta: 'Join the waitlist',
    dismiss: 'Dismiss',
  },
  buildLog: {
    eyebrow: 'build log · current operations',
    heading: "What's running right now.",
    note: 'Active projects are under NDA. Descriptions are intentionally redacted.',
    live: 'Live systems',
    operational: 'operational',
  },
  // NOTE: the homepage team section is gone — /team already carries the
  // founders (components/Founders.tsx) and repeating three cards above the
  // footer was pure duplication. `teamPage` below is the surviving copy.
  footer: {
    eyebrow: '> get in touch',
    heading: 'Have something complex to simplify?',
    sub: "Tell us what's slowing you down. We'll tell you how we'd automate it.",
    ctaStart: 'Book a free consultation',
    or: 'or',
    team: 'Team',
    legal: { imprint: 'Imprint', privacy: 'Privacy', terms: 'Terms' },
  },
  servicesPage: {
    eyebrow: 'Custom builds & AI consulting',
    heading: 'Let’s work out where AI actually fits.',
    intro:
      'Most teams don’t need more software. They need to know which part of their work is worth automating, and which isn’t. So we start with a conversation, give you a straight answer, and build something only if it’s worth building.',
    consult: {
      tag: 'Free consultation',
      heading: 'Book a free online meeting.',
      sub: 'Thirty minutes, online, no cost and no obligation. Tell us how your team works today and we’ll tell you where AI and better systems would genuinely pay off, and where they wouldn’t.',
      points: [
        '30 minutes online, on Google Meet, Teams or Zoom',
        'A concrete recommendation you can act on, in plain language',
        'No obligation to build anything with us',
      ],
      cta: 'Book an online meeting',
      aside: 'Prefer email? Write to us and we’ll reply with times.',
    },
    problemLabel: 'The problem',
    whatWeDoLabel: 'What we do',
    outcomesLabel: 'What you get',
    closingHeading: 'Not sure which one you need?',
    closingSub: 'Tell us the problem on a free 30-minute call. We’ll tell you how we’d approach it, or tell you honestly if you don’t need us.',
    closingCta: 'Book an online meeting',
    items: [
      {
        name: 'Custom Software',
        tagline: 'Software built around your business, not the other way round.',
        problem:
          'Off-the-shelf tools rarely match how your business actually works. Your team ends up bending their process around the software, or stitching together apps that were never meant to talk to each other.',
        whatWeDo:
          'We design and build software around your exact workflow: web apps, internal tools, dashboards, and customer-facing products. Serious engineering underneath, and an interface the people using it every day find genuinely simple.',
        outcomes: [
          'A tool built for your process, not a generic one you adapt to',
          'Software your team actually wants to use',
          'A system that grows with you instead of holding you back',
        ],
        example:
          'For example: real-time publishing engines and internal operations tools built around a client’s existing way of working.',
        cta: 'Start a custom build',
      },
      {
        name: 'AI & Automation',
        tagline: 'Custom automation and agents, built around your own systems.',
        problem:
          'Your team loses hours every week to repetitive work: copying data between systems, processing documents by hand, chasing updates. It is slow, easy to get wrong, and it does not scale as you grow.',
        whatWeDo:
          'We build automations and AI agents that do that work in the background: document processing, data syncing between your tools, and pipelines that run reliably without anyone watching them.',
        outcomes: [
          'The repetitive work runs on its own, around the clock',
          'Fewer errors, because the process is consistent',
          'Your team gets their time back for work that needs a human',
        ],
        example:
          'For example: an autonomous document ingestion pipeline with OCR and validation, and an event-driven sync between a CRM, an ERP, and analytics.',
        cta: 'Automate a workflow',
      },
      {
        name: 'AI & IT Consulting',
        tagline: 'Straight answers on where AI actually pays off.',
        problem:
          'AI is moving fast and the options are overwhelming. It is easy to spend money on tools that do not fit, or to put it off because you are not sure where to start.',
        whatWeDo:
          'We help you work out where AI and better systems will actually pay off for your business, then plan the architecture, and build it if you want us to. Straight answers, not hype.',
        outcomes: [
          'A clear, practical plan you can act on',
          'Honest advice from people who build, not just advise',
          'A partner who stays involved as far as you need',
        ],
        example:
          'For example: going from a first “where do we even start” conversation to a working, deployed system.',
        cta: 'Get advice',
      },
    ],
  },
  teamPage: {
    eyebrow: 'The team',
    heading: 'The people behind SNS.',
    intro:
      'Three founders, one standard: if it’s complicated to use, it’s not finished. Here’s who we are.',
    // Bios are ordered to match the founders list in components/Founders.tsx
    // (Samuel Winch, Nicholas Pellechi, Samson Belachew).
    bios: [
      'Samuel leads SNS’s technical architecture and full-stack delivery. Originally from England and a self-taught engineer with a background in business, he focuses on turning complex requirements into clean, reliable systems. ',
      'Nicholas leads SNS’s client relationships, delivery, and operations. From Switzerland and holding a degree in economics, he focuses on understanding what clients actually need before a line of code is written. ',
      'Samson leads product strategy and sales at SNS. From Austria and holding a degree in psychology, he shapes how SNS’s capabilities meet real market needs, with an eye for the human side of what technology solves. ',
    ],
  },
  contactPage: {
    eyebrow: 'Get in touch',
    heading: 'What can we take off your plate?',
    intro:
      "Custom software, AI agents, or AI & IT consulting: tell us what's slowing you down and we'll tell you how we'd approach it. We read every message.",
    details: {
      email: 'Email',
      basedIn: 'Based in',
      basedInValue: 'Vienna, Austria',
      response: 'Response',
      responseValue: 'Usually within 1–2 business days',
    },
  },
  contactForm: {
    services: ['Immvela · Real Estate', 'Custom Software', 'AI & Automation', 'AI & IT Consulting', 'Something else'],
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    optional: '(optional)',
    service: 'Type of service',
    servicePlaceholder: 'Select a service…',
    message: 'Message',
    messagePlaceholder: "What are you trying to build or automate? What's slowing you down?",
    namePlaceholder: 'Jane Doe',
    emailPlaceholder: 'jane@company.com',
    consent: [
      { t: 'I agree that my details may be used to respond to my inquiry, as described in the ' },
      { t: 'Privacy Policy', link: true },
      { t: '.' },
    ] as ConsentSegment[],
    submit: 'Send inquiry',
    sending: 'Sending…',
    preferEmail: 'Prefer email? Reach us at',
    successTitle: 'Message sent.',
    successBody:
      "Thanks for reaching out. We'll get back to you shortly at the email you provided.",
    sendAnother: '← Send another',
    errors: {
      name: 'Please enter your name.',
      email: 'Please enter your email.',
      emailInvalid: 'That email doesn’t look right.',
      service: 'Please choose a service.',
      message: 'Tell us a little more, 10 characters or so.',
      consent: 'Please agree before sending.',
      send: 'Something went wrong sending your message. Please try again, or email us directly at',
    },
  },
  waitlistPage: {
    // Immvela is SNS's end-to-end real-estate product. This page is its
    // waitlist landing — a "daylight" version of the SNS site (see the
    // .immvela-theme light system in globals.css). Copy mirrors the launch ad.
    brand: 'Immvela',
    // ── The explainer film (components/ImmvelaFilm.tsx) ─────────────────
    // The running time is stated outright rather than hidden: 2:16 is a real
    // ask on a landing page, and naming it beside what the viewer gets for it
    // is what earns the press. `covers` is the same argument in three beats,
    // for anyone deciding whether it is worth the time. Durations differ per
    // language because the two cuts do — keep each one honest.
    // ── The explainer film (components/ImmvelaFilm.tsx) ─────────────────
    // The running time is the block's signature, set large rather than hidden
    // in a caption: 2:16 is the one real objection to a film on a landing
    // page, and naming it at full size beside what it buys turns the cost into
    // the offer. `durationLong` is the spoken form, because a screen reader
    // says "2:16" as "two sixteen".
    //
    // `narration` states which language the voiceover is in — a real question
    // for a bilingual DACH audience, and the reason the two cuts exist at all.
    film: {
      eyebrow: 'The film',
      heading: 'The whole product, explained out loud.',
      sub: 'One narrated run through Immvela: what the single verified record actually is, why it beats seven tools sharing a login, and what each module does with it. No signup, no form.',
      play: 'Play with sound',
      duration: '2:16',
      durationLong: '2 minutes 16 seconds',
      narration: 'Narrated in English',
      posterAlt: 'Immvela — seven modules, one system',
    },
    byline: 'by SNS Solutions',
    backToSns: 'Back to SNS',
    builtInOpen: 'Built in the open',
    tagline: 'The agentic operating system for real estate.',
    // The positioning is the flywheel, not a feature list: Immvela is the
    // system of record for an agent's business, and the compounding asset is
    // the verified graph of properties, listings, leads and outcomes that the
    // modules leave behind. Anything written here should survive the question
    // "would this still be true if a competitor copied every feature?"
    heroSub:
      'Not seven AI tools sharing a login. Every module reads from and writes back to one verified record of your properties, your leads and your deals. Confirm a fact once and everything downstream uses it. Edit a draft and it learns how you write. Immvela is worth more in month twelve than on day one, and that is the whole point.',
    primaryCta: 'Join the waitlist',
    secondaryCta: 'See the modules',
    // Chrome for the rotating Immvela panel in the SNS homepage hero
    // (components/ImmvelaShowcase.tsx). {n}/{total} are filled from the
    // modules array below, so the count can't drift from the badges.
    showcase: {
      pause: 'Pause the module spotlight',
      play: 'Resume the module spotlight',
      liveCount: '{n} of {total} modules live · built in the open',
    },
    // ── Modules: named and staged from the Immvela repo's STATUS.md, which is
    // its source of truth for BUILD state. Do not promote a module here from
    // marketing enthusiasm — `code` is the product name, `name` the function.
    // 'active' means a customer can sign in and use it today; everything else
    // is 'progress'. Bullseye (CMA/pricing) is deliberately absent: it is out
    // of scope by decision, so listing it would promise a module nobody is
    // building.
    modulesLabel: 'Module by module',
    modulesHeadingA: 'Not a finished product pretending to be one.',
    modulesHeadingB: 'A platform taking shape.',
    statusActive: 'Live',
    statusProgress: 'In development',
    // `demo` is the module walkthrough page's bullet list (components/
    // ImmvelaDemo.tsx). It lives on the module record rather than in a second
    // array so a module can't end up described two different ways in two
    // places. Three lines each: what it does, the constraint it works under,
    // and what it leaves behind in the record. Nothing here may claim a
    // capability the `desc` above doesn't already stand behind.
    modules: [
      { code: 'Quill', name: 'Listing Kit', desc: 'Captions, brochure and the full Exposé, drafted from the listing in seconds. Numbers come only from facts you have confirmed, and it learns your voice from every edit you make.', status: 'active', demo: [
        'Exposé, brochure and channel captions, all drafted from one listing record',
        'Figures come only from fields you have confirmed — it does not fill gaps',
        'Every edit you make to a draft teaches it how you write',
      ] },
      { code: 'Verlag', name: 'Publishing', desc: 'Schedule once and post to every channel. Nothing leaves without clearing the compliance gate, and what each post earns comes back into the record.', status: 'active', demo: [
        'One composer and one schedule board across every channel you post to',
        'The compliance gate holds anything that fails a disclosure check',
        'What each post earns writes back to the listing it came from',
      ] },
      { code: 'Iris', name: 'Reception', desc: 'Every inquiry qualified on budget, intent and financing, then routed to the right agent. It never books and it never quotes.', status: 'progress', demo: [
        'Answers inquiries the moment they arrive, including out of hours',
        'Qualifies on property, budget, timing and financing before routing',
        'Never books and never quotes — a person confirms anything binding',
      ] },
      { code: 'Winston', name: 'Knowledge', desc: 'A DACH real-estate copilot answering from your brokerage’s own sources plus a maintained domain corpus, and it names which source each answer came from.', status: 'progress', demo: [
        'Answers from your brokerage’s own documents and a maintained DACH corpus',
        'Names the source behind every answer, so you can check it',
        'Says it doesn’t know rather than reaching for something plausible',
      ] },
      { code: 'Vignette', name: 'Staging', desc: 'Empty rooms furnished from a single photo. It only ever adds, never covers a defect, and the staged label is baked into the pixels.', status: 'progress', demo: [
        'Furnishes an empty room from a single photo of it',
        'Only ever adds — it will not paint over a defect or change the fabric',
        'The staged label is rendered into the pixels, not left to a caption',
      ] },
      { code: 'Immerse', name: 'Walkthrough', desc: 'Walk the property once with a phone. It comes back as a finished walkthrough video for the listing and for social.', status: 'progress', demo: [
        'One walk through the property with a phone is the whole shoot',
        'Comes back cut for the listing and cut for social in the same pass',
        'No rig, no crew, no second visit to the property',
      ] },
      { code: 'Dossier', name: 'Documents', desc: 'Reads the paperwork, pulls out the values you are legally required to disclose, and shows you each one to confirm before it counts.', status: 'progress', demo: [
        'Reads the paperwork and pulls out the values you have to disclose',
        'Shows you every extracted value to confirm before it counts',
        'What you confirm becomes the value Quill writes from and Winston answers from',
      ] },
    ],
    // ── Module walkthrough page (/immvela/demo) ─────────────────────────
    // The per-module copy is on the module records above; this is the page
    // chrome around them.
    demo: {
      eyebrow: 'Module walkthrough',
      heading: 'Every module, running.',
      intro:
        'No signup needed. Pick a module and watch it work on a real listing. Two are live in Immvela today; the rest are footage from the builds in progress, and the labels say which is which.',
      backCta: 'Back to Immvela',
      pickerLabel: 'Pick a module',
      panelLabel: 'What you are looking at',
      clipNote:
        'Recorded from the Immvela interface. German is the default language, so that is what the screens show.',
      noClip: 'Footage for this module is not ready yet.',
      prev: 'Previous module',
      next: 'Next module',
      ctaHeading: 'Want a sign-in to the live modules?',
      ctaSub:
        'Listing Kit and Publishing are usable today. Join early access and we will set you up.',
      ctaButton: 'Join the waitlist',
    },
    liveNote:
      'Listing Kit and Publishing are live in Immvela today, and Publishing comes free with any paid module. Join early access and we will set you up with a sign-in.',
    signinCta: 'Get your sign-in',
    demoCta: 'See every module running',
    closingA: 'We’re building the platform that changes that,',
    closingB: 'piece by piece.',
    eyebrow: 'Early access',
    heading: 'Be first on Immvela.',
    intro:
      'No pricing, no ship date yet, just first access and a real say in what we build next. Tell us a little about your team and we’ll be in touch.',
    // ── These describe the PLATFORM, not a receptionist. The old set ("4 sec
    // first reply", "24/7 coverage") were Iris's numbers, and Iris has no code
    // yet — they were both off-message for an OS and unearned. Anything added
    // here has to be true of Immvela as a whole.
    proofLabel: 'Where it stands',
    proof: [
      { stat: '2 of 7', label: 'Modules live today' },
      { stat: 'German', label: 'Default language, not a translation' },
      { stat: 'EU', label: 'EU-hosted; you stay the data controller' },
    ],
    guardrail: {
      label: 'By design',
      text: 'Immvela reflects facts it can point to. It never asserts a legal, financial or factual conclusion nobody has verified, and anything a derived value touches gets shown to you for confirmation before it counts. Pricing, appointments and commitments are always confirmed by a person.',
    },
    faqLabel: 'Questions people ask',
    faq: [
      { q: 'Is it live yet?', a: 'Two modules are live today, Listing Kit and Publishing, and you can sign in and use them. The other five are in active development, and waitlist members get each one first.' },
      { q: 'What does “it gets better” actually mean?', a: 'Every module writes structured data back to the same record instead of keeping its own copy. A value Dossier extracts and you confirm is the value Quill writes ads from, and the one Winston answers questions from. Edits you make to a draft teach Quill how you write. None of that is a setting you configure; it is a consequence of using it.' },
      { q: 'What does it cost?', a: 'Pricing isn’t set yet. Modules are sold one at a time rather than as one big suite, and Publishing comes free with any paid module. Waitlist members help shape the rest and get early-access terms when Immvela opens up.' },
      { q: 'Which language, and where is my data?', a: 'German first. It is the default interface language, and Exposé sections, Objektdaten labels and compliance markers stay German because they name real documents. English is selectable per user. Data is hosted in the EU, and each brokerage stays its own data controller, so franchise offices never see each other’s.' },
    ],
    tiersLabel: 'Build status by module',
    // The order here is the actual build order from the Immvela repo's roadmap,
    // and the tiers are its STATUS.md build state — not the `modules` array's
    // two-state badge. Keep the two in step: a module that moves to 'active'
    // above must move to 'Live' here in the same edit.
    tiers: [
      {
        label: 'Live',
        status: 'shipping',
        items: [
          'Listing Kit (Quill): captions, brochures and full Exposé documents, generated from the listing',
          'Publishing (Verlag): media library, compliance gate, composer and schedule board across every channel',
        ],
      },
      {
        label: 'In development',
        status: 'in progress',
        items: [
          'Reception (Iris): qualifies and routes every inquiry; never books, never quotes',
          'Knowledge (Winston): DACH real-estate copilot answering from your own sources, with citations',
        ],
      },
      {
        label: 'Queued',
        status: 'queued',
        items: [
          'Staging (Vignette): photorealistic staged rooms from a single photo, disclosed as AI-staged',
          'Walkthrough (Immerse): a walkthrough video rendered from a phone sweep of the property',
          'Documents (Dossier): listing disclosure checks, with every extracted value confirmed by you',
        ],
      },
    ],
    form: {
      heading: 'Join the early-access list',
      sub: 'No pricing, no ship date yet, just first access and a say in what we prioritize.',
      name: 'Name',
      namePlaceholder: 'Jane Doe',
      email: 'Email',
      emailPlaceholder: 'jane@brokerage.com',
      size: 'Brokerage size',
      sizePlaceholder: 'Select…',
      sizes: ['Solo agent', 'Team', 'Franchise'],
      consent: [
        { t: 'I agree that my details may be used to contact me about early access, as described in the ' },
        { t: 'Privacy Policy', link: true },
        { t: '.' },
      ] as ConsentSegment[],
      submit: 'Join the waitlist',
      sending: 'Joining…',
      successTitle: "You're on the list.",
      successBody: "Thanks, we'll be in touch as early-access spots open up.",
      sendAnother: '← Add another',
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter your email.',
        emailInvalid: 'That email doesn’t look right.',
        size: 'Please choose a brokerage size.',
        consent: 'Please agree before joining.',
        send: 'Something went wrong. Please try again, or email us directly at',
      },
    },
  },
}

export type Dictionary = typeof en
