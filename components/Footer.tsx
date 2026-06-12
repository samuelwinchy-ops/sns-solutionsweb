export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 border-t border-sns-border px-6 py-8 md:flex-row md:items-center md:justify-between md:px-12">
      <p className="font-mono text-xs text-sns-muted">
        SNS Solutions GmbH (in formation) — Vienna, Austria — 2026
      </p>
      <a
        href="mailto:hello@snssolutions.io"
        className="font-mono text-xs text-sns-blue transition-colors hover:text-sns-accent"
      >
        hello@snssolutions.io
      </a>
    </footer>
  )
}
