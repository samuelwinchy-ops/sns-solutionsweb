/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // "Build log" read as developer jargon to an HVAC/real-estate audience.
    // The page is now /roadmap; keep the old URLs working for existing links.
    return [
      { source: '/build-log', destination: '/roadmap', permanent: true },
      { source: '/de/build-log', destination: '/de/roadmap', permanent: true },
      // Real estate folded into Immvela (on /roadmap). Keep old links working.
      { source: '/solutions/real-estate', destination: '/roadmap', permanent: true },
      { source: '/de/solutions/real-estate', destination: '/de/roadmap', permanent: true },
    ]
  },
}

export default nextConfig
