/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // The Immvela page is now /immvela. Keep every old URL that ever pointed
    // here working for existing links, the social campaign and SEO.
    return [
      // Previous route for this page — the social campaign still points here.
      { source: '/roadmap', destination: '/immvela', permanent: true },
      { source: '/de/roadmap', destination: '/de/immvela', permanent: true },
      // "Build log" read as developer jargon to an HVAC/real-estate audience.
      { source: '/build-log', destination: '/immvela', permanent: true },
      { source: '/de/build-log', destination: '/de/immvela', permanent: true },
      // Real estate folded into Immvela. Keep old links working.
      { source: '/solutions/real-estate', destination: '/immvela', permanent: true },
      { source: '/de/solutions/real-estate', destination: '/de/immvela', permanent: true },
      // QFUtool is for salespeople in general now, not HVAC installers; its two
      // posts were rewritten and renamed. Old links keep working.
      {
        source: '/blog/hvac-data-fragmentation',
        destination: '/blog/why-quotes-go-unanswered',
        permanent: true,
      },
      {
        source: '/blog/qfutool-ai-follow-up-hvac-quotes',
        destination: '/blog/qfutool-automated-quote-follow-up',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
