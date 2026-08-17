/**
 * Renders a JSON-LD graph into the page.
 *
 * A server component on purpose: the markup has to be in the HTML the crawler
 * receives, not injected after hydration. Kept as one component so every page's
 * structured data is serialised the same way.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}
