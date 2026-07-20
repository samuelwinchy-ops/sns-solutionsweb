import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Terms governing the use of the SNS Software Solutions GmbH website.',
  alternates: {
    canonical: '/legal/terms',
    languages: {
      en: '/legal/terms',
      de: '/de/legal/terms',
      'x-default': '/legal/terms',
    },
  },
}

const UPDATED = 'July 3, 2026'

export default function TermsPage() {
  return (
    <article>
      <header className="mb-10 border-b border-sns-text/[0.08] pb-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
          Legal
        </p>
        <h1 className="text-3xl font-bold tracking-[-0.02em] text-sns-text md:text-4xl">
          Terms of Use
        </h1>
        <p className="mt-3 font-mono text-sm text-sns-muted">
          The terms governing your use of this website.
        </p>
        <p className="mt-1 font-mono text-xs text-sns-faint">
          Last updated: {UPDATED}
        </p>
      </header>

      <div className="legal-prose">
        <h2>1. Scope</h2>
        <p>
          These Terms of Use govern your access to and use of the website
          operated by <strong>SNS Software Solutions GmbH</strong> (“SNS”,
          “we”,
          “us”). By accessing or using this website, you agree to these terms.
          If you do not agree, please do not use the website.
        </p>
        <p>
          These terms cover the use of the website itself. Any provision of
          software development or other services by SNS is governed by a
          separate written agreement concluded with the respective client. Use
          of SNS’s social media scheduling application (“the App”) by an
          authorized client is governed by the separate service agreement and
          Data Processing Agreement (AVV) between SNS and that client, not by
          these Terms of Use.
        </p>

        <h2>2. Use of the website</h2>
        <p>
          This website is provided for general information about SNS and its
          services. You agree to use it only for lawful purposes and not to:
        </p>
        <ul>
          <li>
            interfere with or disrupt the website, its servers, or connected
            networks;
          </li>
          <li>
            attempt to gain unauthorised access to any part of the website or
            related systems;
          </li>
          <li>
            use automated means to scrape, harvest, or overload the website in a
            way that impairs its operation;
          </li>
          <li>misuse the website to transmit malware or unlawful content.</li>
        </ul>

        <h2>3. Intellectual property</h2>
        <p>
          All content on this website — including text, graphics, logos, the SNS
          name and mark, design, and code — is the property of SNS Software
          Solutions GmbH or its licensors and is protected by copyright and
          other intellectual property laws. You may not reproduce, distribute,
          modify, or create derivative works from any part of this website
          without our prior written consent.
        </p>

        <h2>4. The App</h2>
        <p>
          Where SNS provides the social media scheduling application to a client,
          that client is solely responsible for the content it authorizes the
          App to publish, and for ensuring it has the rights and permissions
          necessary to publish that content and to operate the connected social
          media accounts. SNS acts on the client’s instructions and is not
          responsible for content decisions made by the client’s authorized
          users. Use of the App is additionally governed by each connected
          platform’s own developer terms and policies (Meta, LinkedIn,
          Google/YouTube, TikTok), and the client is responsible for complying
          with those terms.
        </p>

        <h2>5. No warranty</h2>
        <p>
          This website is provided “as is” and “as available”. While we take
          care to keep the information accurate and up to date, we make no
          warranties or representations, express or implied, as to its
          accuracy, completeness, reliability, or availability. We may modify,
          suspend, or discontinue the website (in whole or in part) at any time
          without notice.
        </p>

        <h2>6. Limitation of liability</h2>
        <p>
          To the extent permitted by applicable law, SNS shall not be liable for
          any indirect, incidental, or consequential damages arising from your
          use of, or inability to use, this website. Liability for slight
          negligence is excluded. This does not limit any liability that cannot
          be excluded or limited under mandatory Austrian law, including
          liability for personal injury or for intent and gross negligence.
        </p>

        <h2>7. External links</h2>
        <p>
          This website may contain links to third-party websites. We have no
          control over, and accept no responsibility for, the content,
          policies, or practices of any third-party sites. Accessing linked
          sites is at your own risk.
        </p>

        <h2>8. Changes to these terms</h2>
        <p>
          We may revise these Terms of Use from time to time. The version
          published on this page at the time of your visit applies. Continued
          use of the website after changes constitutes acceptance of the revised
          terms.
        </p>

        <h2>9. Governing law & jurisdiction</h2>
        <p>
          These Terms of Use are governed by the laws of the Republic of
          Austria, excluding its conflict-of-law rules and the UN Convention on
          Contracts for the International Sale of Goods (CISG). To the extent
          permitted by law, the competent courts of Vienna, Austria, shall have
          exclusive jurisdiction. Mandatory consumer protection provisions of
          the country in which a consumer is resident remain unaffected.
        </p>

        <h2>10. Contact</h2>
        <p>
          SNS Software Solutions GmbH — Vienna, Austria
          <br />
          Email:{' '}
          <a href="mailto:office@sns-austria.com">
            office@sns-austria.com
          </a>
        </p>
        <p>
          For full company details, see our{' '}
          <a href="/legal/imprint">Imprint</a>.
        </p>
      </div>
    </article>
  )
}
