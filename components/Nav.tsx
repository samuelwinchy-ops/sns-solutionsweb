import Image from 'next/image'

const links = [
  { href: '#what-we-do', label: '// what we do' },
  { href: '#build-log', label: '// build log' },
  { href: '#team', label: '// team' },
]

export default function Nav() {
  return (
    <nav className="fixed top-0 z-50 flex h-14 w-full items-center justify-between border-b border-sns-border bg-sns-bg/80 px-6 backdrop-blur-sm md:px-12">
      <a href="#" aria-label="SNS Solutions — home">
        <Image
          src="/logo-dark.svg"
          alt="SNS Solutions"
          width={148}
          height={36}
          priority
          className="h-8 w-auto md:h-9"
        />
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
