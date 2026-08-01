// English dictionary. `typeof en` defines the Dictionary type that `de` must
// satisfy. Rich sentences with inline emphasis are modelled as segment arrays
// so both languages can highlight the right words in their own word order.

export type Segment = { t: string; strong?: boolean }
export type ConsentSegment = { t: string; link?: boolean }

export const en = {
  nav: {
    home: 'home',
    services: 'custom builds',
    solutions: 'products',
    hvac: 'hvac / shk',
    realEstate: 'immvela',
    team: 'team',
    contact: 'contact',
  },
  // (No `langToggle` entry: the switch is two flags with visually-hidden
  // language names, so its labels live in LanguageToggle.tsx and are never
  // translated — "English"/"Deutsch" are endonyms in both locales.)
  hero: {
    h1a: 'Agentic software,',
    h1b: 'auditable by design.',
    subtitle: [
      { t: 'A Vienna studio building AI agents for two industries. In ' },
      { t: 'real estate', strong: true },
      { t: ', through our own platform ' },
      { t: 'Immvela', strong: true },
      { t: '. In ' },
      { t: 'HVAC', strong: true },
      { t: ', we consult on digital transformation and implement the AI behind it, with value you can actually check.' },
    ] as Segment[],
    ctaStart: 'Book a free consultation',
    ctaSolutions: 'view products',
  },
  homeFocus: {
    eyebrow: 'Who we build for',
    heading: 'Purpose-built for HVAC and real estate.',
    sub: 'We know two industries inside out: how they talk, how they work, what the day actually looks like. So our products fit the way you already do the job.',
    cta: 'Explore the products',
  },
  // Replaced the old "what we do" card trio. That section described the studio
  // in the abstract, which is the least interesting thing on a page that can
  // instead show the method — and the method is the differentiator, because
  // measuring before and after is the part almost nobody does.
  howWeWork: {
    eyebrow: 'how we work',
    heading: 'AI you can put a number on.',
    sub: 'Most AI projects end the same way: it ships, everyone agrees it feels faster, and nobody can say what it was actually worth. We run it the other way round. The measurement comes first, so at the end there is a number to check instead of a feeling to argue about.',
    steps: [
      {
        k: '01',
        name: 'Audit',
        main: 'We find where the hours actually go.',
        sub: 'Time inside your process, not a questionnaire. You get a written map of the work worth automating, and the work that isn’t.',
      },
      {
        k: '02',
        name: 'Baseline',
        main: 'We measure it before we touch it.',
        sub: 'Handling time, error rate, cost per job. Without a number from before, “it feels faster” is the only result you can ever get.',
      },
      {
        k: '03',
        name: 'Pilot',
        main: 'One workflow, live, in weeks.',
        sub: 'The smallest build that proves the case, running against real work, not a demo on sample data.',
      },
      {
        k: '04',
        name: 'Prove & hand over',
        main: 'The same measurement, run again.',
        sub: 'Before and after, side by side. You own the system, the documentation, and the decision about what comes next.',
      },
    ],
    note: 'And if the audit says the honest answer is “don’t automate this”, that’s the answer you get.',
    cta: 'See all custom builds',
  },
  announce: {
    tag: 'Now in early access',
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
    status: 'all systems operational',
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
    services: ['HVAC / SHK', 'Immvela · Real Estate', 'Custom Software', 'AI & Automation', 'AI & IT Consulting', 'Something else'],
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
  solutionsPage: {
    eyebrow: 'Products',
    heading: 'Pick the agent you need, or take the whole stack.',
    intro:
      'Modular agents for two industries we know deeply. Automate the part of your workflow you want handled now, or join the waitlist for the full suite. Built for the DACH market, in German and English.',
    bundleNote: 'Buy what you need now, or join the waitlist for the full suite.',
    whatLabel: 'What it does',
    outcomeLabel: 'Outcome',
    status: { live: 'Live', beta: 'Beta', waitlist: 'Waitlist', roadmap: 'Roadmap' },
    cta: { live: 'Talk to us', beta: 'Get early access', waitlist: 'Join the waitlist', roadmap: 'Join the waitlist' },
    demoCta: 'See how it works',
    appCta: 'Open in Immvela',
    indexCta: 'View products',
    industries: [
      {
        key: 'hvac',
        label: 'HVAC / SHK',
        descriptor: 'Heating · plumbing · installation',
        blurb: 'For heating, plumbing and installation teams, covering everything from the first inquiry through booking to the compliance paperwork after the job.',
        categories: [
          {
            key: 'inbound',
            name: 'Inbound Handling',
            status: 'live',
            demo: true,
            what: 'Answers every call and message instantly, across voice, web form, WhatsApp or chat. It qualifies each one against your criteria and routes the good leads to your team. German (Sie-form) and English.',
            outcome: 'Faster first response, and no lead falls through the cracks outside business hours.',
          },
          {
            key: 'scheduling',
            name: 'Scheduling & Booking',
            status: 'roadmap',
            demo: false,
            what: 'Human-confirmed viewing and callback scheduling once a lead is qualified.',
            outcome: 'Less back-and-forth to get a qualified lead on the calendar.',
          },
          {
            key: 'docs',
            name: 'Documentation & Compliance',
            status: 'roadmap',
            demo: false,
            what: 'Post-install compliance documentation: BEG payout evidence, F-Gas logs, JAZ proofs.',
            outcome: 'Removes the admin burden that slows down payouts and audits.',
          },
        ],
      },
      {
        // Adding a product here? Add it to waitlistPage.tiers as well — the
        // /immvela page lists these from its own hand-maintained copy.
        key: 'realEstate',
        label: 'Immvela',
        descriptor: 'Real estate · sales & lettings',
        blurb: 'Our own platform, sold module by module. Each one stands alone, and all of them write back to the same record of your properties, leads and deals.',
        // Names and statuses track the Immvela repo's STATUS.md — see the
        // waitlistPage.modules note. 'live' means signed-in and usable today;
        // 'waitlist' is in active development; 'roadmap' is specced and queued.
        // Bullseye (CMA/pricing) is out of scope by decision and is not listed.
        categories: [
          {
            key: 'listingKit',
            name: 'Listing Kit (Quill)',
            status: 'live',
            demo: false,
            what: 'Three generators off one listing: social captions, the brochure, and the full Exposé, the detailed prospectus DACH buyers expect. Objektdaten labels and section names stay German because they name real documents.',
            outcome: 'The listing write-up stops being an evening job, and every channel gets copy in the same voice.',
          },
          {
            key: 'publishing',
            name: 'Publishing (Verlag)',
            status: 'live',
            demo: false,
            what: 'Media library, composer and schedule board across every channel, with a compliance gate that holds a post back until the required disclosures are on it. Included free with any paid module.',
            outcome: 'One place to schedule from, and nothing goes out missing a disclosure.',
          },
          {
            key: 'reception',
            name: 'Reception (Iris)',
            status: 'waitlist',
            demo: true,
            what: 'Qualifies each inquiry on budget, intent and financing, then routes it to the right agent. It never books and never quotes.',
            outcome: 'Faster response to inquiries, and better-qualified viewings when a human takes over.',
          },
          {
            key: 'knowledge',
            name: 'Knowledge (Winston)',
            status: 'waitlist',
            demo: false,
            what: 'A DACH real-estate copilot answering from a maintained domain corpus plus your own brokerage layer, citing which source each answer came from.',
            outcome: 'A new agent gets the office’s answer, not their best guess.',
          },
          {
            key: 'staging',
            name: 'Staging (Vignette)',
            status: 'roadmap',
            demo: false,
            what: 'A photo of an empty or dated room comes back photorealistically furnished. Furniture, styling and lighting are added digitally; the room structure is untouched. Every image is disclosed as AI-staged, in line with EU AI Act transparency norms.',
            outcome: 'Listing-ready rooms without a staging budget, and the disclosure is handled for you.',
          },
          {
            key: 'walkthrough',
            name: 'Walkthrough (Immerse)',
            status: 'roadmap',
            demo: false,
            what: 'Walk the property once with a phone. The sweep is reconstructed in 3D and rendered out as a walkthrough video for the listing and for social. No camera crew and no 3D scanning rig.',
            outcome: 'A walkthrough on every listing, not just the ones worth hiring a videographer for.',
          },
          {
            key: 'docs',
            name: 'Documents (Dossier)',
            status: 'roadmap',
            demo: false,
            what: 'Reads the listing paperwork, Energieausweis and friends, and pulls out the values that have to be disclosed, and shows you each one to confirm. It checks and extracts; it does not review contracts.',
            outcome: 'The disclosure gaps surface while you can still fix them, not at the Notartermin.',
          },
        ],
      },
    ],
    fullStack: {
      tag: 'End-to-end',
      heading: 'Get the full stack',
      sub: 'Bundle every category above into one suite as it ships, from lead to listing to close, instead of buying one piece at a time.',
      cta: 'Join the waitlist',
    },
    guardrail: {
      label: 'By design',
      text: "We don't let AI make promises to your customers. It gathers and qualifies. Pricing, appointments and commitments are always confirmed by a person.",
    },
    demo: {
      label: 'Watch it work',
      heading: 'A real inquiry, after hours.',
      replay: 'Replay',
      agentLabel: 'AI Receptionist',
      leadLabel: 'Lead',
      hvac: {
        sub: 'A heat-pump retrofit lead arrives at 23:14. No one is at the office. Here is what happens.',
        channel: 'Inbound · website form · 23:14',
        qualified: 'Lead qualified → routed to dispatch · human follow-up scheduled',
        script: [
          { from: 'lead', text: "Hi there, we're renovating an old house just outside Graz, and we're thinking about putting in a heat pump. Is that something you'd handle?" },
          { from: 'agent', text: "Good evening! Yes, heat-pump retrofits are exactly our thing. Let me get you to the right person. Do you mind if I ask a couple of quick questions first?" },
          { from: 'agent', text: "Great. So, roughly how big is the space you'd be heating, and do you happen to know when the house was built?" },
          { from: 'lead', text: "It's about 180 square metres. Built in 1968, and we're still on oil heating at the moment." },
          { from: 'agent', text: "Got it. Switching from oil to a heat pump in a house from that era is very doable, and there's a good chance you'd qualify for a subsidy, too. Quick one: is it your own home, or is it rented out?" },
          { from: 'lead', text: "No, it's ours, we live there." },
          { from: 'agent', text: "Perfect, that's a really strong fit. I'll pass your details straight to our project team, and they'll give you a call first thing tomorrow. Just so you know, nothing's booked or priced until you've spoken with them yourself." },
        ],
      },
      realEstate: {
        sub: 'A buyer messages about a listing at 21:40, long after the office closed. Here is what happens.',
        channel: 'Inbound · Instagram DM · 21:40',
        qualified: 'Lead qualified → routed to listing agent · viewing follow-up scheduled',
        script: [
          { from: 'lead', text: "Hi! I saw that three-room apartment in the seventh district on your Instagram, and I wanted to ask, is it still available, and could we come see it this weekend?" },
          { from: 'agent', text: "Good evening, and thanks for reaching out! Yes, the one in the seventh is still on the market. I'd be happy to set up a viewing. Could I just ask you a couple of quick things first?" },
          { from: 'agent', text: "Are you looking for somewhere to live yourself, or more as an investment? And do you have a rough budget in mind?" },
          { from: 'lead', text: "To live in, ourselves. Up to around 450,000 euros, though we'd need financing." },
          { from: 'agent', text: "That works nicely, it's well within range for this one. And is your financing already pre-approved, or is that still something you'd need to sort out?" },
          { from: 'lead', text: "Not yet, we'd still need to arrange it." },
          { from: 'agent', text: "No problem at all. I'll mark you down as a qualified buyer and send your details over to the agent for this listing. They'll reach out tomorrow to set up the viewing, and they can point you toward a financing partner as well. And just so you know, nothing's confirmed until you've spoken with them yourself." },
        ],
      },
    },
    proofLabel: 'Early results',
    proof: [
      { stat: '4 sec', label: 'First reply, day or night' },
      { stat: '24/7', label: 'Coverage, incl. weekends' },
      { stat: 'DE · EN', label: 'German (Sie) & English' },
    ],
    faqLabel: 'Questions people ask',
    faq: [
      { q: 'Does it book appointments or quote prices?', a: "No, by design. It gathers and qualifies the lead, then a human confirms anything binding. We won't let AI make promises to your customers." },
      { q: 'What does it cost?', a: 'Simple monthly pricing based on your channels and volume, with no per-lead fees. Tell us your setup and we’ll scope a quote.' },
      { q: 'How long does setup take?', a: 'Most deployments go live within 2–3 weeks, including tuning the qualifying logic to your business.' },
      { q: 'Which languages and channels?', a: 'German (Sie-form) and English today, across web form, WhatsApp and chat. Leads land in your inbox, CRM or dispatch, wherever you already work.' },
    ],
    ctaHeading: 'Not sure which piece you need?',
    ctaSub: 'Tell us how your team works today, and we’ll point you to the agent that fits, or scope a custom build.',
    ctaButton: 'Book a walkthrough',
    stickyCta: 'See how it works',
  },
  demoPage: {
    eyebrow: 'Live demo',
    heading: 'See the inbound agent handle a real inquiry.',
    intro:
      'No signup needed. Watch the agent take an after-hours lead end to end, qualify it, and hand it to a human. Switch the channel and the industry to compare.',
    channelLabel: 'Channel',
    channels: { voice: 'Voice call', chat: 'Chat message' },
    industryLabel: 'Industry',
    voice: {
      callHeader: 'Incoming call',
      connecting: 'connecting…',
      speaking: 'speaking',
      listening: 'listening',
      agentLabel: 'AI voice agent',
      callerLabel: 'Caller',
      listen: 'Play with sound',
      mute: 'Mute',
      note: 'Illustrative transcript of a live phone call the voice agent handles on its own.',
    },
    backCta: 'Back to products',
    ctaHeading: 'Want this answering your calls?',
    ctaSub: 'Tell us how leads reach you today and we’ll show you exactly where it fits.',
    ctaButton: 'Book a walkthrough',
  },
  waitlistPage: {
    // Immvela is SNS's end-to-end real-estate product. This page is its
    // waitlist landing — a "daylight" version of the SNS site (see the
    // .immvela-theme light system in globals.css). Copy mirrors the launch ad.
    brand: 'Immvela',
    byline: 'by SNS Solutions',
    backToSns: 'Back to SNS',
    earlyAccess: 'Now in early access',
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
  // HVAC/SHK has its own early-access list — an HVAC prospect must never land
  // on the real-estate waitlist above. Mirrors the HVAC categories in
  // solutionsPage.industries; the tiers reflect actual build state.
  hvacWaitlistPage: {
    eyebrow: 'roadmap · in development',
    heading: 'The HVAC / SHK agentic suite. Building in the open.',
    intro:
      'An AI receptionist and back-office for heating, plumbing and installation teams, covering everything from the first inquiry through booking to the compliance paperwork. Inbound handling ships today; the rest is on the roadmap below. Join the early-access list and help shape what we build next.',
    tiersLabel: 'Build status by category',
    tiers: [
      {
        label: 'Live',
        status: 'shipping',
        items: [
          'Inbound Handling: answers, qualifies and routes every inbound lead 24/7, in German (Sie) and English',
        ],
      },
      {
        label: 'In progress',
        status: 'in progress',
        items: [
          'Scheduling & Booking: human-confirmed viewing and callback scheduling once a lead is qualified',
        ],
      },
      {
        label: 'Queued',
        status: 'queued',
        items: [
          'Documentation & Compliance: post-install paperwork: BEG payout evidence, F-Gas logs, JAZ proofs',
        ],
      },
    ],
    form: {
      heading: 'Join the early-access list',
      sub: 'No pricing, no ship date yet, just first access and a say in what we prioritize.',
      name: 'Name',
      namePlaceholder: 'Jane Doe',
      email: 'Email',
      emailPlaceholder: 'jane@company.com',
      size: 'Team size',
      sizePlaceholder: 'Select…',
      sizes: ['Solo / owner-operator', 'Small team', 'Larger operation'],
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
        size: 'Please choose a team size.',
        consent: 'Please agree before joining.',
        send: 'Something went wrong. Please try again, or email us directly at',
      },
    },
  },
}

export type Dictionary = typeof en
