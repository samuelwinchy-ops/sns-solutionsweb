import Image from 'next/image'

const links = [
  { href: '#what-we-do', label: '// what we do' },
  { href: '#build-log', label: '// build log' },
  { href: '#team', label: '// team' },
]

export default function Nav() {
  return (
    <nav className="fixed top-0 z-50 flex h-14 w-full items-center justify-between border-b border-sns-border bg-sns-bg/80 px-6 backdrop-blur-sm md:px-12">
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
            className="font-mono text-[10px] uppercase tracking-widest text-sns-muted transition-colors hover:text-sns-accent hover:underline hover:underline-offset-4 md:text-xs"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
