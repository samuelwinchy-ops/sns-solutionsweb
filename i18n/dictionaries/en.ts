// English dictionary. `typeof en` defines the Dictionary type that `de` must
// satisfy. Rich sentences with inline emphasis are modelled as segment arrays
// so both languages can highlight the right words in their own word order.

export type Segment = { t: string; strong?: boolean }
export type ConsentSegment = { t: string; link?: boolean }

export const en = {
  nav: {
    home: 'home',
    services: 'services',
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
      { t: 'AI automation', strong: true },
      {
        t: ', from the systems running quietly in the background to the tools your team uses every day. We also advise on the ',
      },
      { t: 'AI & IT', strong: true },
      { t: ' behind them.' },
    ] as Segment[],
    closer: 'We do the hard part. You get the win.',
    ctaStart: 'Start a build',
    ctaBuildLog: 'view build log',
    panelHeader: '~/sns — services',
    panelStatus: 'available',
    services: [
      { name: 'Custom Software', desc: 'Web, mobile & internal tools, built to fit.' },
      { name: 'AI Automation', desc: 'Pipelines & agents that remove the busywork.' },
      { name: 'AI & IT Consulting', desc: 'Strategy, architecture & hands-on delivery.' },
    ],
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
    seeAll: 'See all services in detail',
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
    eyebrow: 'Services',
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
        name: 'AI Automation',
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
      "Custom software, AI automation, or AI & IT consulting: tell us what's slowing you down and we'll tell you how we'd approach it. We read every message.",
    details: {
      email: 'Email',
      basedIn: 'Based in',
      basedInValue: 'Vienna, Austria',
      response: 'Response',
      responseValue: 'Usually within 1–2 business days',
    },
  },
  contactForm: {
    services: ['Custom Software', 'AI Automation', 'AI & IT Consulting', 'Something else'],
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
}

export type Dictionary = typeof en
