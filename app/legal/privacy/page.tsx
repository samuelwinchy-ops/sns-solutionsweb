import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How SNS Software Solutions GmbH processes personal data in accordance with the EU General Data Protection Regulation (GDPR).',
  alternates: {
    canonical: '/legal/privacy',
    languages: {
      en: '/legal/privacy',
      de: '/de/legal/privacy',
      'x-default': '/legal/privacy',
    },
  },
}

const UPDATED = 'July 3, 2026'

export default function PrivacyPage() {
  return (
    <article>
      <header className="mb-10 border-b border-sns-text/[0.08] pb-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
          Legal
        </p>
        <h1 className="text-3xl font-bold tracking-[-0.02em] text-sns-text md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 font-mono text-sm text-sns-muted">
          How we handle your personal data under the EU General Data Protection
          Regulation (GDPR / DSGVO).
        </p>
        <p className="mt-1 font-mono text-xs text-sns-faint">
          Last updated: {UPDATED}
        </p>
      </header>

      <div className="legal-prose">
        <h2>1. Controller</h2>
        <p>
          The controller responsible for data processing on this website is:
        </p>
        <p>
          <strong>SNS Software Solutions GmbH</strong>
          <br />
          Schrötlgasse 8a, 1220 Vienna, Austria
          <br />
          Email:{' '}
          <a href="mailto:office@sns-austria.com">
            office@sns-austria.com
          </a>
        </p>

        <h2>2. Overview</h2>
        <p>
          We take the protection of your personal data seriously and process it
          only in accordance with statutory data protection regulations (GDPR,
          Austrian Data Protection Act / DSG) and this privacy policy. This
          website is an informational site; we collect as little personal data
          as possible.
        </p>

        <h2>3. Hosting</h2>
        <p>
          This website is hosted by <strong>Vercel Inc.</strong>, 340 S Lemon
          Ave #4133, Walnut, CA 91789, USA. When you visit the site, Vercel
          automatically processes technical connection data (see “Server log
          files” below) to deliver the website securely and reliably. This is
          based on our legitimate interest in a stable and secure online
          presence (Art. 6(1)(f) GDPR). We have concluded a data processing
          agreement (DPA) with Vercel, and transfers to the USA are safeguarded
          by the EU Standard Contractual Clauses.
        </p>

        <h2>4. Social Media Scheduling Tool (“the App”)</h2>
        <p>
          In addition to this website, SNS operates a social media scheduling
          and publishing tool (“the App”) on behalf of specific business
          clients, used to schedule, publish, and manage content across the
          client’s own social media accounts (including Facebook, Instagram,
          LinkedIn, YouTube, and TikTok).
        </p>

        <h3>4.1 Data we process on behalf of clients</h3>
        <p>
          When a client connects their social media accounts to the App, we
          process:
        </p>
        <ul>
          <li>
            Account identifiers and access tokens issued by the relevant
            platform (Facebook, Instagram, LinkedIn, YouTube, TikTok), used
            solely to publish content and retrieve engagement data on the
            client’s behalf.
          </li>
          <li>
            Content created, scheduled, and published by the client’s authorized
            users through the App.
          </li>
          <li>
            Engagement data returned by the connected platforms (e.g. comments,
            reactions, views, follower and post statistics).
          </li>
          <li>
            User account information for individuals with App access (name,
            email, role/permissions).
          </li>
        </ul>

        <h3>4.2 Purpose and legal basis</h3>
        <p>
          This data is processed solely to provide the scheduling, publishing,
          approval-workflow, and reporting functions the client has authorized,
          under a separate written agreement (including a Data Processing
          Agreement / AVV) with the client. SNS acts as processor on the
          client’s behalf; the client remains controller of their own social
          media account data. The legal basis is performance of that agreement
          (Art. 6(1)(b) GDPR) and our legitimate interest in providing the
          contracted service (Art. 6(1)(f) GDPR).
        </p>

        <h3>4.3 Storage and sub-processors</h3>
        <p>App data is stored and processed within the EU:</p>
        <ul>
          <li>Application data and database: Supabase (Frankfurt, Germany)</li>
          <li>Media storage: Cloudflare R2</li>
          <li>
            Application hosting: Vercel (see Section 3 for Vercel’s data
            handling)
          </li>
          <li>Job processing/queuing: Railway</li>
        </ul>
        <p>
          Access tokens are stored encrypted, with access restricted to
          authorized SNS personnel and logged. We do not sell this data or use
          it for advertising, and we do not use it to train AI models.
        </p>

        <h3>4.4 Third-party platforms</h3>
        <p>
          Each connected platform (Meta/Facebook/Instagram, LinkedIn,
          Google/YouTube, TikTok) processes data under its own privacy policy and
          developer terms. Our use of data obtained through these platforms
          complies with each platform’s respective developer policies and terms
          of service.
        </p>

        <h3>4.5 Data retention and deletion</h3>
        <p>
          Client and account data is retained for the duration of the client
          agreement and deleted within 30 days of account disconnection or
          contract termination, except where retention is required by law.
          Clients may request deletion or disconnection at any time by
          contacting{' '}
          <a href="mailto:office@sns-austria.com">office@sns-austria.com</a>.
        </p>

        <h2>5. Server log files</h2>
        <p>
          Our hosting provider automatically collects and stores information in
          server log files that your browser transmits to us. These may
          include:
        </p>
        <ul>
          <li>Anonymised / abbreviated IP address</li>
          <li>Date and time of the request</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Referrer URL</li>
        </ul>
        <p>
          This data is not merged with other data sources and is used solely to
          ensure operation, security, and troubleshooting. The legal basis is
          Art. 6(1)(f) GDPR.
        </p>

        <h2>6. Analytics</h2>
        <p>
          We use <strong>Vercel Analytics</strong>, a privacy-friendly,
          cookieless analytics service provided by Vercel Inc. It measures
          aggregated, anonymous usage statistics (such as page views) without
          using cookies and without tracking or identifying individual
          visitors. No cross-site profiles are created. The legal basis is our
          legitimate interest in understanding and improving the use of our
          website (Art. 6(1)(f) GDPR).
        </p>

        <h2>7. Cookies</h2>
        <p>
          This website does not set tracking or advertising cookies. Only
          technically necessary storage required to display the site may be
          used. Because we do not use non-essential cookies, no cookie consent
          banner is required.
        </p>

        <h2>8. Contact (email &amp; contact form)</h2>
        <p>
          If you contact us by email, the data you provide (your email address
          and the content of your message) is processed solely to handle your
          enquiry.
        </p>
        <p>
          Our website also provides a contact form. When you submit it, we
          process the details you enter, namely your name, email address,
          optional phone number, the type of service you select, and your
          message, in order to respond to your enquiry. The legal basis is Art.
          6(1)(b) GDPR (steps prior to entering a contract) or Art. 6(1)(f) GDPR
          (our legitimate interest in responding to enquiries).
        </p>
        <p>
          Contact form submissions are delivered to our mailbox on our behalf
          by <strong>EmailJS</strong> (
          <a
            href="https://www.emailjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            emailjs.com
          </a>
          ), acting as a processor. Where this involves a transfer of data
          outside the EU/EEA, it is safeguarded by appropriate measures such as
          the EU Standard Contractual Clauses.
        </p>
        <p>
          This data is deleted once it is no longer required and no statutory
          retention obligations prevent deletion.
        </p>

        <h2>9. Data retention</h2>
        <p>
          We store personal data only for as long as necessary for the purposes
          described above or as required by statutory retention periods (e.g.
          under tax and commercial law). After that, the data is deleted.
        </p>

        <h2>10. Your rights</h2>
        <p>Under the GDPR you have the right to:</p>
        <ul>
          <li>access to your personal data (Art. 15)</li>
          <li>rectification of inaccurate data (Art. 16)</li>
          <li>erasure (Art. 17)</li>
          <li>restriction of processing (Art. 18)</li>
          <li>data portability (Art. 20)</li>
          <li>
            object to processing based on legitimate interests (Art. 21)
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{' '}
          <a href="mailto:office@sns-austria.com">
            office@sns-austria.com
          </a>
          .
        </p>

        <h2>11. Right to lodge a complaint</h2>
        <p>
          You have the right to lodge a complaint with a supervisory authority.
          In Austria this is the Austrian Data Protection Authority
          (Datenschutzbehörde), Barichgasse 40–42, 1030 Vienna,{' '}
          <a
            href="https://www.dsb.gv.at"
            target="_blank"
            rel="noopener noreferrer"
          >
            dsb.gv.at
          </a>
          .
        </p>

        <h2>12. Changes to this policy</h2>
        <p>
          We may update this privacy policy to reflect changes to our practices
          or for legal reasons. The current version is always available on this
          page.
        </p>
      </div>
    </article>
  )
}
