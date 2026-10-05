// English dictionary. `typeof en` defines the Dictionary type that `de` must
// satisfy. Rich sentences with inline emphasis are modelled as segment arrays
// so both languages can highlight the right words in their own word order.

export type Segment = { t: string; strong?: boolean }
export type ConsentSegment = { t: string; link?: boolean }

export const en = {
  nav: {
    home: 'Home',
    products: 'Products',
    services: 'Consulting',
    realEstate: 'Immvela',
    qfutool: 'QFUtool',
    team: 'Team',
    contact: 'Contact',
  },
  // (No `langToggle` entry: the switch is two flags with visually-hidden
  // language names, so its labels live in LanguageToggle.tsx and are never
  // translated — "English"/"Deutsch" are endonyms in both locales.)
  hero: {
    // SNS is the parent company: the homepage says in two lines what we do,
    // then hands the visitor to a product. The headline is the outcome in the
    // customer's words; it does not mention software, AI or agents.
    h1a: 'What took hours yesterday',
    h1b: 'now handles itself.',
    ctaProducts: 'See our products',
  },
  // The example follow-up email in QFUtool's box (components/ProductBoxes.tsx).
  cinema: {
    email: {
      sent: 'Sent',
      sentValue: 'Thursday 10:00',
      followUp: 'Follow-up 2',
      greeting: 'Hello Mr Huber,',
      body: 'just checking in on the €1,250 quote we sent on Monday. Happy to call if anything is unclear.',
      reply: 'Sounds good. Can we talk on Friday?',
      replyNote: 'Reply received · follow-ups stopped',
    },
  },
  // The two product boxes (components/ProductBoxes.tsx). Each product is shown in
  // its own brand. Claims here must match each product's own site.
  products: {
    learnMore: 'Learn more',
    immvela: {
      audience: 'For estate agents',
      cta: 'Apply for the closed beta',
      phoneAlt: "Immvela's sign-in screen on a phone",
    },
    qfutool: {
      audience: 'For salespeople',
      tagline: 'You sent the quote. Now somebody has to chase it.',
      desc: 'Upload the spreadsheet of quotes that went out. QFUtool follows up with each customer in your name, during business hours, and hands you the ones who reply.',
      status: 'Free for 14 days · no CRM to set up',
      cta: 'Start free trial',
    },
  },
  // The home page below the nav (components/home/*): the logo billboard, the
  // integrations row, the news grid and the consulting panel.
  home: {
    slidesLabel: 'Our products',
    immvelaAudience: 'For real estate agents',
    qfutoolAudience: 'For salespeople',
    pause: 'Pause the product slideshow',
    play: 'Play the product slideshow',
    marqueePause: 'Pause the logos',
    marqueePlay: 'Play the logos',
    googleSignIn: 'Google sign-in',
    microsoftSignIn: 'Microsoft sign-in',
    integrations: 'Integrations',
    soon: 'Soon',
    comingSoon: 'coming soon',
    latestEyebrow: 'Latest',
    latestHeading: 'News and updates',
    updateTitle: 'immvela.com is live, and applications for the closed beta are open.',
    updateAlt: "Immvela's sign-in screen on a laptop and a phone",
    articlesInEnglish: '',
  },
  // The /products page: the two products side by side.
  productsPage: {
    title: 'Our products',
    description:
      'Immvela, the personal real estate AI assistant, and QFUtool, automated quote follow-up. Two products by SNS Solutions in Vienna.',
    heading: 'Our products',
    line: 'Two tools, each built for one job.',
    immvelaTagline: 'Your personal real estate AI assistant.',
    qfutoolPrice: '14 days free, then from €19 a month.',
    exampleEmail: 'Example email',
  },
  // The consultation offer: secondary to the products.
  consult: {
    eyebrow: 'Consulting',
    heading: 'Need software built for your business?',
    sub: 'Book a free 30-minute call. We look at how your team works, tell you straight whether custom software is worth building, and build it if it is.',
    cta: 'Book a free consultation',
    link: 'How custom builds work',
  },
  // The closing section of the homepage, and the one job the hero no longer
  // does: catching the visitor Immvela doesn't fit. It was a generic "how we
  // work" method rail; the method is still the differentiator (measuring before
  // and after is the part almost nobody does), so the four stages survive
  // intact — what changed is the framing around them, from "here is our
  // process" to "tell us what Immvela doesn't cover and we'll work it out with
  // you." The last step is the invitation, not a description.
  customBuilds: {
    // Lives on /services now, as the "how it works" section; the homepage
    // carries the offer itself in `consult`.
    eyebrow: 'How a custom build works',
    heading: 'From the first call to the handover.',
    sub: 'Four steps, and the second one is the one most people skip: we measure the work before we touch it, so at the end you can see what changed.',
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
  // NOTE: the homepage team section is gone — /team already carries the
  // founders (components/Founders.tsx) and repeating three cards above the
  // footer was pure duplication. `teamPage` below is the surviving copy.
  footer: {
    eyebrow: 'Get in touch',
    heading: 'Is something taking your team too long?',
    sub: "Tell us what it is. We'll tell you whether it can be automated, and what that would take.",
    ctaStart: 'Book a free consultation',
    or: 'or',
    team: 'Team',
    legal: { imprint: 'Imprint', privacy: 'Privacy', terms: 'Terms' },
    // Column heads for the sitemap footer.
    cols: { products: 'Products', company: 'Company', legal: 'Legal' },
    contact: 'Contact',
    blog: 'Blog',
  },
  servicesPage: {
    eyebrow: 'Custom builds & AI consulting',
    heading: 'Custom software for the work that eats your week.',
    intro:
      'Not every task is worth automating. We start with a conversation about how your team works, tell you which parts are worth it and which aren’t, and only build when it pays off.',
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
    closingSub:
      'Tell us the problem on a free 30-minute call. We’ll tell you how we’d approach it, or tell you honestly if you don’t need us.',
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
        tagline: 'Repetitive work, done in the background by your own systems.',
        problem:
          'Your team loses hours every week to repetitive work: copying data between systems, processing documents by hand, chasing updates. It is slow, easy to get wrong, and it does not scale as you grow.',
        whatWeDo:
          'We build automations that take that work over: reading incoming documents, keeping data in sync between your tools, and scheduled jobs that run without anyone watching them.',
        outcomes: [
          'The repetitive work runs on its own, around the clock',
          'Fewer errors, because the process is consistent',
          'Your team gets their time back for work that needs a human',
        ],
        example:
          'For example: scanned documents read, checked and filed automatically, and a CRM, an ERP and reporting that stay in sync on their own.',
        cta: 'Automate a workflow',
      },
      {
        name: 'AI & IT Consulting',
        tagline: 'Straight answers on where AI pays off.',
        problem:
          'It is hard to tell which AI tools are worth paying for. Buy the wrong one and it sits unused; wait too long and the work stays manual.',
        whatWeDo:
          'We look at how your team works, tell you which parts are worth automating and which are not, and write down a plan. If you want us to, we build it too.',
        outcomes: [
          'A written plan you can act on',
          'Advice from people who build this, not only advise on it',
          'Help for as long as you need it, and no longer',
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
    intro: 'Three founders, one standard: if it’s complicated to use, it’s not finished.',
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
      "Tell us what's taking your team too long and we'll tell you how we'd approach it. We read every message and reply ourselves.",
    details: {
      email: 'Email',
      basedIn: 'Based in',
      basedInValue: 'Vienna, Austria',
      response: 'Response',
      responseValue: 'Usually within 1–2 business days',
    },
  },
  contactForm: {
    services: [
      'Immvela · Real Estate',
      'QFUtool',
      'Custom Software',
      'AI & Automation',
      'AI & IT Consulting',
      'Something else',
    ],
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
      sub: 'A narrated walk through Immvela: what it does with a property’s facts, and what each module is for. No signup, no form.',
      play: 'Play with sound',
      duration: '2:16',
      durationLong: '2 minutes 16 seconds',
      narration: 'Narrated in English',
      posterAlt: 'Opening frame of the Immvela film',
    },
    byline: 'by SNS Solutions',
    backToSns: 'Back to SNS',
    builtInOpen: 'Built in the open',
    tagline: 'The listing, the Exposé and the posts, from one set of facts.',
    // The positioning is the flywheel, not a feature list: Immvela is the
    // system of record for an agent's business, and the compounding asset is
    // the verified graph of properties, listings, leads and outcomes that the
    // modules leave behind. Anything written here should survive the question
    // "would this still be true if a competitor copied every feature?"
    heroSub:
      'Enter a property once and confirm its facts. Immvela drafts the captions, the brochure and the Exposé from them and posts to your channels. Every module works from the same property records, so a fact you confirm once is used everywhere, and the edits you make teach it how you write.',
    primaryCta: 'Join the waitlist',
    secondaryCta: 'See the modules',
    // ── Modules: named and staged from the Immvela repo's STATUS.md, which is
    // its source of truth for BUILD state. Do not promote a module here from
    // marketing enthusiasm — `code` is the product name, `name` the function.
    // 'active' means a customer can sign in and use it today; everything else
    // is 'progress'. Bullseye (CMA/pricing) is deliberately absent: it is out
    // of scope by decision, so listing it would promise a module nobody is
    // building.
    modulesLabel: 'Module by module',
    modulesHeadingA: 'Seven modules.',
    modulesHeadingB: 'Two you can use today.',
    statusActive: 'Live',
    statusProgress: 'In development',
    modules: [
      {
        code: 'Quill',
        name: 'Listing Kit',
        desc: 'Captions, brochure and the full Exposé, drafted from the listing in seconds. Numbers come only from facts you have confirmed, and it learns your voice from every edit you make.',
        status: 'active',
      },
      {
        code: 'Verlag',
        name: 'Publishing',
        desc: 'Schedule once and post to every channel. Nothing leaves without clearing the compliance gate, and what each post earns comes back into the record.',
        status: 'active',
      },
      {
        code: 'Iris',
        name: 'Reception',
        desc: 'Every inquiry qualified on budget, intent and financing, then routed to the right agent. It never books and it never quotes.',
        status: 'progress',
      },
      {
        code: 'Winston',
        name: 'Knowledge',
        desc: 'A DACH real-estate copilot answering from your brokerage’s own sources plus a maintained domain corpus, and it names which source each answer came from.',
        status: 'progress',
      },
      {
        code: 'Vignette',
        name: 'Staging',
        desc: 'Empty rooms furnished from a single photo. It only ever adds, never covers a defect, and the staged label is baked into the pixels.',
        status: 'progress',
      },
      {
        code: 'Immerse',
        name: 'Walkthrough',
        desc: 'Walk the property once with a phone. It comes back as a finished walkthrough video for the listing and for social.',
        status: 'progress',
      },
      {
        code: 'Dossier',
        name: 'Documents',
        desc: 'Reads the paperwork, pulls out the values you are legally required to disclose, and shows you each one to confirm before it counts.',
        status: 'progress',
      },
    ],

    liveNote:
      'Listing Kit and Publishing are live in Immvela today, and Publishing comes free with any paid module. Join early access and we will set you up with a sign-in.',
    signinCta: 'Get your sign-in',
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
    ],
    guardrail: {
      label: 'By design',
      text: 'Immvela reflects facts it can point to. It never asserts a legal, financial or factual conclusion nobody has verified, and anything a derived value touches gets shown to you for confirmation before it counts. Pricing, appointments and commitments are always confirmed by a person.',
    },
    faqLabel: 'Questions people ask',
    faq: [
      {
        q: 'Is it live yet?',
        a: 'Two modules are live today, Listing Kit and Publishing, and you can sign in and use them. The other five are in active development, and waitlist members get each one first.',
      },
      {
        q: 'What does “it gets better” actually mean?',
        a: 'Every module writes structured data back to the same record instead of keeping its own copy. A value Dossier extracts and you confirm is the value Quill writes ads from, and the one Winston answers questions from. Edits you make to a draft teach Quill how you write. None of that is a setting you configure; it is a consequence of using it.',
      },
      {
        q: 'What does it cost?',
        a: 'Pricing isn’t set yet. Modules are sold one at a time rather than as one big suite, and Publishing comes free with any paid module. Waitlist members help shape the rest and get early-access terms when Immvela opens up.',
      },
      {
        q: 'Which language, and where is my data?',
        a: 'German first. It is the default interface language, and Exposé sections, Objektdaten labels and compliance markers stay German because they name real documents. English is selectable per user. Data is hosted in the EU, and each brokerage stays its own data controller, so franchise offices never see each other’s.',
      },
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
          'Knowledge (Winston): DACH real-estate assistant answering from your own sources, with citations',
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
        {
          t: 'I agree that my details may be used to contact me about early access, as described in the ',
        },
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
