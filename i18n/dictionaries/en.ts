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
    realEstate: 'real estate',
    roadmap: 'roadmap',
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
    ctaStart: 'Book a free consultation',
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
    sub: 'We go deep in two industries — the language, the workflows, the day-to-day reality of each — so our products fit the way you already work.',
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
  announce: {
    tag: 'In development',
    heading: 'We’re building something.',
    body: 'An agentic OS for real-estate agents — from lead to listing to close.',
    cta: 'See the roadmap',
    dismiss: 'Dismiss',
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
      'Most teams don’t need more software — they need to know which part of their work is worth automating, and which isn’t. We start with a conversation, give you a straight answer, and build it only if it’s worth building.',
    consult: {
      tag: 'Free consultation',
      heading: 'Book a free online meeting.',
      sub: 'Thirty minutes, online, no cost and no obligation. Tell us how your team works today and we’ll tell you where AI and better systems would genuinely pay off — and where they wouldn’t.',
      points: [
        '30 minutes, online — Google Meet, Teams or Zoom',
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
    closingSub: 'Tell us the problem on a free 30-minute call. We’ll tell you how we’d approach it — or tell you honestly if you don’t need us.',
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
      'Samson leads product strategy and sales at SNS. From Austria and holding a degree in psychology, he shapes how SNS’s capabilities meet real market needs — with an eye for the human side of what technology solves. ',
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
    services: ['Custom Software', 'AI & Automation', 'AI & IT Consulting', 'Something else'],
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
    heading: 'Pick the agent you need — or the whole stack.',
    intro:
      'Modular agents for two industries we know deeply. Automate the part of your workflow you want handled now — or join the waitlist for the full end-to-end suite. Built for the DACH market, in German and English.',
    bundleNote: 'Buy what you need now — or join the waitlist for the full end-to-end suite.',
    whatLabel: 'What it does',
    outcomeLabel: 'Outcome',
    status: { live: 'Live', beta: 'Beta', waitlist: 'Waitlist', roadmap: 'Roadmap' },
    cta: { live: 'Talk to us', beta: 'Get early access', waitlist: 'Join the waitlist', roadmap: 'Join the waitlist' },
    demoCta: 'See how it works',
    appCta: 'Try Repost',
    indexCta: 'View products',
    industries: [
      {
        key: 'hvac',
        label: 'HVAC / SHK',
        descriptor: 'Heating · plumbing · installation',
        blurb: 'For heating, plumbing and installation teams — from the first inquiry through booking to the compliance paperwork after the job.',
        categories: [
          {
            key: 'inbound',
            name: 'Inbound Handling',
            status: 'live',
            demo: true,
            what: 'Answers every call and message instantly — voice, web form, WhatsApp or chat — qualifies against your criteria, and routes the good ones to your team. German (Sie-form) and English.',
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
            what: 'Post-install compliance documentation — BEG payout evidence, F-Gas logs, JAZ proofs.',
            outcome: 'Removes the admin burden that slows down payouts and audits.',
          },
        ],
      },
      {
        // Adding a product here? Add it to waitlistPage.tiers as well — the
        // /roadmap page lists these from its own hand-maintained copy.
        key: 'realEstate',
        label: 'Real estate',
        descriptor: 'Sales · lettings · brokerage',
        blurb: 'For agencies that want the whole pipeline covered — listing marketing, inquiries, viewings and the paperwork before close.',
        categories: [
          {
            key: 'marketing',
            name: 'Marketing & Content',
            status: 'beta',
            demo: false,
            what: 'Multi-platform scheduling and distribution — queue listing content once and publish it across every channel on a schedule.',
            outcome: 'Consistent content across every channel without the manual busywork.',
          },
          {
            key: 'inbound',
            name: 'Inbound Handling',
            status: 'waitlist',
            demo: true,
            what: 'The same inbound agent as HVAC, tuned for real-estate qualifying logic — budget, intent, and financing.',
            outcome: 'Faster response to inquiries and better-qualified viewings.',
          },
          {
            key: 'scheduling',
            name: 'Scheduling & Booking',
            status: 'waitlist',
            demo: false,
            what: 'Human-confirmed viewing scheduling once a buyer is qualified.',
            outcome: 'Fewer no-shows and less manual coordination.',
          },
          {
            key: 'docs',
            name: 'Documentation & Compliance',
            status: 'waitlist',
            demo: false,
            what: 'Pre-close document completeness checks — Grundbuchauszug, Energieausweis, Teilungserklärung.',
            outcome: 'Fewer surprises at the Notartermin.',
          },
          {
            key: 'data',
            name: 'Data & Insights',
            status: 'roadmap',
            demo: false,
            what: 'Comparables and a CMA co-pilot for pricing.',
            outcome: 'Faster, more defensible pricing conversations.',
          },
          {
            key: 'staging',
            name: 'AI Staging & Room Design',
            status: 'roadmap',
            demo: false,
            what: 'Upload a photo of an empty or outdated room and get a photorealistic staged version back — furniture, styling and lighting added digitally, the room structure left untouched. Style presets match the buyer you are targeting. Every image is disclosed as AI-staged, in line with EU AI Act transparency norms.',
            outcome: 'Listing-ready rooms without a physical staging budget — and the disclosure handled for you.',
          },
          {
            key: 'walkthrough',
            name: '2D-3D Walkthrough Generator',
            status: 'roadmap',
            demo: false,
            what: 'Full navigable 3D property tours generated from your listing photos — buyers walk through any room, with no physical 3D scan and no camera crew. The longer-term step beyond AI Staging.',
            outcome: 'Buyers tour the property before they book, so the viewings you do run are the serious ones.',
          },
        ],
      },
    ],
    fullStack: {
      tag: 'End-to-end',
      heading: 'Get the full stack',
      sub: 'Bundle every category above into one agentic suite as it ships — from lead to listing to close, rather than buying one piece at a time.',
      cta: 'Join the waitlist',
    },
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
          { from: 'lead', text: "Hi there — we're renovating an old house just outside Graz, and we're thinking about putting in a heat pump. Is that something you'd handle?" },
          { from: 'agent', text: "Good evening! Yes, heat-pump retrofits are exactly our thing. Let me get you to the right person — do you mind if I ask a couple of quick questions first?" },
          { from: 'agent', text: "Great. So, roughly how big is the space you'd be heating — and do you happen to know when the house was built?" },
          { from: 'lead', text: "It's about 180 square metres. Built in 1968, and we're still on oil heating at the moment." },
          { from: 'agent', text: "Got it. Switching from oil to a heat pump in a house from that era is very doable — and there's a good chance you'd qualify for a subsidy, too. Quick one: is it your own home, or is it rented out?" },
          { from: 'lead', text: "No, it's ours — we live there." },
          { from: 'agent', text: "Perfect, that's a really strong fit. I'll pass your details straight to our project team, and they'll give you a call first thing tomorrow. Just so you know, nothing's booked or priced until you've spoken with them yourself." },
        ],
      },
      realEstate: {
        sub: 'A buyer messages about a listing at 21:40, long after the office closed. Here is what happens.',
        channel: 'Inbound · Instagram DM · 21:40',
        qualified: 'Lead qualified → routed to listing agent · viewing follow-up scheduled',
        script: [
          { from: 'lead', text: "Hi! I saw that three-room apartment in the seventh district on your Instagram, and I wanted to ask — is it still available, and could we come see it this weekend?" },
          { from: 'agent', text: "Good evening, and thanks for reaching out! Yes, the one in the seventh is still on the market. I'd be happy to set up a viewing — could I just ask you a couple of quick things first?" },
          { from: 'agent', text: "Are you looking for somewhere to live yourself, or more as an investment? And do you have a rough budget in mind?" },
          { from: 'lead', text: "To live in, ourselves. Up to around 450,000 euros — though we'd need financing." },
          { from: 'agent', text: "That works nicely — it's well within range for this one. And is your financing already pre-approved, or is that still something you'd need to sort out?" },
          { from: 'lead', text: "Not yet, we'd still need to arrange it." },
          { from: 'agent', text: "No problem at all. I'll mark you down as a qualified buyer and send your details over to the agent for this listing — they'll reach out tomorrow to set up the viewing, and they can point you toward a financing partner as well. And just so you know, nothing's confirmed until you've spoken with them yourself." },
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
    ctaHeading: 'Not sure which piece you need?',
    ctaSub: 'Tell us how your team works today, and we’ll point you to the agent that fits — or scope a custom build.',
    ctaButton: 'Book a walkthrough',
    stickyCta: 'See how it works',
  },
  demoPage: {
    eyebrow: 'Live demo',
    heading: 'See the inbound agent handle a real inquiry.',
    intro:
      'No signup — watch the agent take an after-hours lead end to end, qualify it, and hand it to a human. Switch the channel and the industry to compare.',
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
    eyebrow: 'roadmap — in development',
    heading: 'The real-estate agentic suite. Building in the open.',
    intro:
      'An agentic OS for real-estate agents — from lead to listing to close. Some of it ships today; the rest is on the roadmap below. Join the early-access list and help shape what we build next.',
    tiersLabel: 'Build status — by category',
    // Mirrors the real-estate categories in solutionsPage.industries. It can't
    // be derived from them: the tier reflects actual build state, and two
    // products with the same 'waitlist' status sit in different tiers. Add a
    // real-estate product there and it must be added here too, or /roadmap
    // silently stops listing the full suite.
    tiers: [
      {
        label: 'Shipping',
        status: 'shipping',
        items: [
          'Marketing & Content — multi-platform scheduling & distribution for listing content',
        ],
      },
      {
        label: 'In progress',
        status: 'in progress',
        items: [
          'Inbound Handling — real-estate-tuned qualifying agent (budget, intent, financing)',
          'Scheduling & Booking — human-confirmed viewing scheduling',
        ],
      },
      {
        label: 'Queued',
        status: 'queued',
        items: [
          'Documentation & Compliance — pre-close completeness checks (Grundbuchauszug, Energieausweis, Teilungserklärung)',
          'Data & Insights — comparables and a CMA co-pilot',
          'AI Staging & Room Design — photorealistic staged rooms from a single photo, disclosed as AI-staged',
          '2D-3D Walkthrough Generator — navigable 3D tours generated from listing photos, no scan required',
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
