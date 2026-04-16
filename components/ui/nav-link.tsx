'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-2 py-2 rounded-lg text-sm transition-all ${
        isActive
          ? 'text-gold bg-gold/10 border border-gold/15'
          : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.04] border border-transparent'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  )
}

export function MobileNavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`flex flex-col items-center gap-1 px-3 py-1.5 transition-colors min-w-[60px] ${
        isActive ? 'text-gold' : 'text-muted-foreground hover:text-gold'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  )
}
