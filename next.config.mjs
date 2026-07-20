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
    ]
  },
}

export default nextConfig
