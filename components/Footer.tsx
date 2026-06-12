import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-sns-border px-6 py-12 md:px-12">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
        <Image
          src="/logo-dark.png"
          alt="SNS Solutions"
          width={927}
          height={841}
          className="h-16 w-auto opacity-90 mix-blend-screen md:h-20"
        />
        <div className="flex flex-col items-center gap-2 text-center md:items-end md:text-right">
          <p className="font-mono text-xs text-sns-muted">
            SNS Solutions GmbH (in formation) — Vienna, Austria — 2026
          </p>
          <a
            href="mailto:hello@snssolutions.io"
            className="font-mono text-xs text-sns-blue transition-colors hover:text-sns-accent"
          >
            hello@snssolutions.io
          </a>
        </div>
      </div>
    </footer>
  )
}
