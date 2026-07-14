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
    buildLog: 'build log',
    team: 'team',
    contact: 'contact',
  },
  langToggle: { label: 'Deutsch', aria: 'Auf Deutsch wechseln' },
  hero: {
    h1a: 'Powerful underneath.',
    h1b: 'Simple on top.',
    subtitle: [
      { t: 'An AI software studio in Vienna. We build ' },
      { t: 'custom software', strong: true },
      { t: ' and ' },
      { t: 'AI agents', strong: true },
      {
        t: ' that automate the work — from the systems running quietly in the background to the tools your team uses every day. We also advise on the ',
      },
      { t: 'AI & IT', strong: true },
      { t: ' behind them.' },
    ] as Segment[],
    closer: 'We do the hard part. You get the win.',
    ctaStart: 'Start a build',
    ctaSolutions: 'view products',
    panelHeader: '~/sns — services',
    panelStatus: 'available',
    services: [
      { name: 'Custom Software', desc: 'Web, mobile & internal tools, built to fit.' },
      { name: 'AI Agents', desc: 'Agents & pipelines that remove the busywork.' },
      { name: 'AI & IT Consulting', desc: 'Strategy, architecture & hands-on delivery.' },
    ],
  },
  homeFocus: {
    eyebrow: 'Who we build for',
    heading: 'Purpose-built for HVAC and real estate.',
    sub: 'We go deep in two industries — the language, the workflows, the after-hours reality of each — so our products fit the way you already work.',
    cta: 'Explore the products',
  },
  whatWeDo: {
    eyebrow: 'what we do',
    heading: 'Three things, done without compromise.',
    items: [
      {
        main: "We automate the work that's slowing your business down.",
        sub: 'Complex integrations, AI pipelines, and data workflows, built to run quietly in the background.',
      },
      {
        main: 'We build software products people actually understand how to use.',
        sub: 'Technical depth where it matters. Simplicity everywhere else.',
      },
      {
        main: "We're engineers who also build our own products.",
        sub: 'We use what we build. That keeps us honest.',
      },
    ],
    seeAll: 'See all custom builds',
  },
  buildLog: {
    eyebrow: 'build log — current operations',
    heading: "What's running right now.",
    note: 'Active projects are under NDA. Descriptions are intentionally redacted.',
    live: 'Live systems',
    operational: 'operational',
  },
  team: {
    eyebrow: 'the team',
    heading: 'Three founders. One standard.',
    note: "If it's complicated to use, it's not finished.",
    building: 'building',
    cta: 'Meet the team',
  },
  footer: {
    eyebrow: '> get in touch',
    heading: 'Have something complex to simplify?',
    sub: "Tell us what's slowing you down. We'll tell you how we'd automate it.",
    ctaStart: 'Start a build',
    or: 'or',
    team: 'Team',
    legal: { imprint: 'Imprint', privacy: 'Privacy', terms: 'Terms' },
    status: 'all systems operational',
  },
  servicesPage: {
    eyebrow: 'Custom builds',
    heading: 'What we do, in plain terms.',
    intro:
      'Three services, one job: take something complex and make it simple to run. Here is what each one means, and what you get.',
    problemLabel: 'The problem',
    whatWeDoLabel: 'What we do',
    outcomesLabel: 'What you get',
    closingHeading: 'Not sure which one you need?',
    closingSub: 'Tell us the problem. We will tell you how we would approach it.',
    closingCta: 'Start a conversation',
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
        name: 'AI Agents',
        tagline: 'Let the repetitive work run itself.',
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
      'Samson leads product strategy and sales at SNS. From Austria and holding a degree in psychology, he shapes how SNS’s capabilities meet real market needs — with an eye for the human side of what technology solves. ',
    ],
  },
  contactPage: {
    eyebrow: 'Get in touch',
    heading: "Tell us what you're building.",
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
    services: ['Custom Software', 'AI Agents', 'AI & IT Consulting', 'Something else'],
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
    heading: 'AI that answers, qualifies, and never drops a lead.',
    intro:
      'Productized agents you can put in front of real customers — starting with an AI receptionist for trades and real estate. Built for the DACH market, in German and English.',
    product: {
      tag: 'Live product',
      name: 'AI Receptionist',
      positioning: 'Never miss a lead again — even at 11pm.',
      lead:
        'An AI receptionist that answers every inbound inquiry instantly, qualifies it against your criteria, and hands the good ones to your team — around the clock, in German and English.',
    },
    audienceLabel: 'Pick your industry — the receptionist adapts',
    audiences: {
      hvac: {
        key: 'hvac',
        label: 'HVAC / SHK',
        descriptor: 'Heating · plumbing · installation',
        blurb:
          'For heating, plumbing and installation businesses drowning in after-hours inquiries.',
        qualifiers: [
          'Captures job type, property age, and current system',
          'Flags subsidy-eligible (Förderung) heat-pump retrofits',
          'Routes urgent breakdowns straight to dispatch',
        ],
      },
      realEstate: {
        key: 'realEstate',
        label: 'Real estate',
        descriptor: 'Sales · lettings · brokerage',
        blurb:
          'For agencies who lose buyers and sellers to whoever replies first.',
        qualifiers: [
          'Captures budget, location, and buy-vs-sell intent',
          'Separates serious buyers from casual browsers',
          'Routes qualified leads to the right agent instantly',
        ],
      },
    },
    featuresLabel: 'What it does',
    features: [
      'Instant response to inbound inquiries — web form, WhatsApp, or chat',
      'Qualifies every lead against your criteria before it reaches your team',
      'Routes qualified leads straight to sales or dispatch',
      'Never books or quotes on its own — a human always confirms',
      'Speaks German (Sie-form) and English, with DACH-appropriate tone',
    ],
    outcomesLabel: 'What you get',
    outcomes: [
      'Faster first response — and higher conversion on inbound leads',
      'No lead lost outside business hours or over the weekend',
      'Your team spends time on qualified leads, not tyre-kickers',
    ],
    guardrail: {
      label: 'By design',
      text: "We don't let AI make promises to your customers. It gathers and qualifies — pricing, appointments and commitments are always confirmed by a person.",
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
          { from: 'lead', text: "Hi, we're renovating an old house near Graz and thinking about a heat pump (Wärmepumpe). Is that something you do?" },
          { from: 'agent', text: 'Good evening — yes, heat-pump retrofits are exactly what we handle. To point you to the right person, may I ask a couple of quick questions?' },
          { from: 'agent', text: "Roughly what's the heated area, and do you know the year the building was constructed?" },
          { from: 'lead', text: 'About 180 m², built in 1968. Oil heating right now.' },
          { from: 'agent', text: 'Thanks — an oil-to-heat-pump switch on a 1968 build is very doable, and there may be Förderung (subsidy) available. Is the property owner-occupied?' },
          { from: 'lead', text: 'Yes, we live there.' },
          { from: 'agent', text: "Perfect. I've qualified this as a strong fit and passed your details to our project team — they'll follow up tomorrow morning. Nothing is booked or quoted until you speak with them directly." },
        ],
      },
      realEstate: {
        sub: 'A buyer messages about a listing at 21:40, long after the office closed. Here is what happens.',
        channel: 'Inbound · Instagram DM · 21:40',
        qualified: 'Lead qualified → routed to listing agent · viewing follow-up scheduled',
        script: [
          { from: 'lead', text: 'Hi! I saw the 3-room apartment in the 1070 district on your Instagram. Is it still available, and could we view it this weekend?' },
          { from: 'agent', text: 'Good evening — thanks for reaching out! The apartment in the 7th district is still available. I can arrange a viewing; may I ask a couple of quick questions first?' },
          { from: 'agent', text: 'Are you looking to buy for yourself or as an investment, and do you have a budget range in mind?' },
          { from: 'lead', text: "To live in ourselves. Up to about €450,000, and we'd need financing." },
          { from: 'agent', text: "Perfect — that's within range for this listing. Is your financing already pre-approved, or would that still need arranging?" },
          { from: 'lead', text: "Not yet, we'd need to sort it out." },
          { from: 'agent', text: "Understood. I've flagged you as a qualified buyer and passed your details to the listing agent — they'll reach out tomorrow to set up the viewing and point you to a financing partner. Nothing is confirmed until you speak with them directly." },
        ],
      },
    },
    proofLabel: 'Early results',
    proof: [
      { stat: '< 30s', label: 'First response, day or night' },
      { stat: '24/7', label: 'Coverage, incl. weekends' },
      { stat: '2 langs', label: 'German (Sie) & English' },
    ],
    faqLabel: 'Questions people ask',
    faq: [
      { q: 'Does it book appointments or quote prices?', a: "No — by design. It gathers and qualifies the lead, then a human confirms anything binding. We won't let AI make promises to your customers." },
      { q: 'What does it cost?', a: 'Simple monthly pricing based on your channels and volume — no per-lead fees. Tell us your setup and we’ll scope a quote.' },
      { q: 'How long does setup take?', a: 'Most deployments go live within 2–3 weeks, including tuning the qualifying logic to your business.' },
      { q: 'Which languages and channels?', a: 'German (Sie-form) and English today, across web form, WhatsApp and chat. Leads land in your inbox, CRM or dispatch — wherever you already work.' },
    ],
    ctaHeading: 'Want to see it on your own inquiries?',
    ctaSub: 'Tell us how leads reach you today and we’ll show you exactly where the receptionist fits.',
    ctaButton: 'Book a walkthrough',
    stickyCta: 'See it in action',
    waitlistTeaser: {
      tag: 'In development',
      heading: 'Building next: an agentic suite for real estate.',
      sub: 'From lead to listing to close — an agentic OS for agents. Join the early-access list.',
      cta: 'Join the waitlist',
    },
  },
  waitlistPage: {
    eyebrow: 'build log — in development',
    heading: 'The real-estate agentic suite. Building in the open.',
    intro:
      'An agentic OS for real-estate agents — from lead to listing to close. Some of it ships today; the rest is on the roadmap below. Join the early-access list and help shape what we build next.',
    tiersLabel: 'Roadmap',
    tiers: [
      {
        label: 'Available now',
        status: 'operational',
        items: [
          'Listing kit & marketing assistant — auto-generated descriptions, captions, brochures and email campaigns',
          'Multi-platform social scheduling & distribution',
        ],
      },
      {
        label: 'Coming next',
        status: 'in progress',
        items: ['AI staging', 'Micro-campaign generator', 'Viewing scheduler', 'Conversational lead AI'],
      },
      {
        label: 'Later — network tier',
        status: 'planned',
        items: [
          'CMA co-pilot',
          'Document completeness checking (pre-Notartermin)',
          'Onboarding & coaching tools',
          'Shared knowledge repository',
        ],
      },
    ],
    form: {
      heading: 'Join the early-access list',
      sub: 'No pricing, no ship date yet — just first access and a say in what we prioritize.',
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
      successBody: "Thanks — we'll be in touch as early-access spots open up.",
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
