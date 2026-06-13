import Image from 'next/image'

const links = [
  { href: '#what-we-do', label: '// what we do', live: false },
  { href: '#build-log', label: '// build log', live: true },
  { href: '#team', label: '// team', live: false },
]

export default function Nav() {
  return (
    <nav
      className="fixed top-0 z-50 flex h-14 w-full items-center justify-between border-b border-sns-border/50 bg-sns-bg/80 px-6 backdrop-blur-sm md:px-12"
      style={{
        boxShadow:
          '0 1px 0 0 rgba(59, 130, 246, 0.15), 0 4px 16px rgba(59, 130, 246, 0.04)',
      }}
    >
      <a
        href="#"
        aria-label="SNS Solutions — home"
        className="flex items-center gap-2.5"
      >
        <Image
          src="/sns-icon.png"
          alt="SNS Solutions"
          width={1254}
          height={1254}
          priority
          className="h-8 w-8 mix-blend-screen md:h-9 md:w-9"
        />
        <span className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-sns-text">
          SNS
          <span className="ml-1.5 font-normal text-sns-muted">Solutions</span>
        </span>
      </a>
      <div className="flex items-center gap-4 md:gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-sns-muted transition-colors hover:text-sns-accent hover:underline hover:underline-offset-4 md:text-xs"
          >
            {link.live && (
              <span
                aria-hidden="true"
                className="animate-blink text-[8px] leading-none text-sns-green"
              >
                ●
              </span>
            )}
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
