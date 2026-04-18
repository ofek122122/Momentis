import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { signOut } from '@/lib/auth'
import { CalendarDays, Settings, LogOut, BarChart3, Crown } from 'lucide-react'
import { getUserTier } from '@/lib/pro'
import { ProBadge } from '@/components/ui/pro-badge'
import { NavLink, MobileNavLink } from '@/components/ui/nav-link'

const NAV = [
  { href: '/calendar', icon: CalendarDays, label: 'Calendar' },
  { href: '/analytics', icon: BarChart3, label: 'Analytics' },
  { href: '/settings', icon: Settings, label: 'Settings' },
]

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  if (!session) redirect('/login')

  const tier = await getUserTier(session.user.id)

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <aside className="hidden md:flex w-52 border-r border-border flex-col py-5 shrink-0 bg-[#0f0f14]" role="navigation" aria-label="Main navigation">
        {/* Brand */}
        <div className="px-4 mb-8">
          <Link href="/calendar" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Momenties" className="h-6 w-6 shrink-0" />
            <span className="font-display text-base font-bold text-foreground tracking-tight">
              Momenties
            </span>
            {tier === 'pro' && <ProBadge />}
          </Link>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 space-y-0.5">
          {NAV.map(({ href, icon: Icon, label }) => (
            <NavLink key={href} href={href}>
              <Icon className="h-4 w-4 shrink-0" />
              <span className="inline font-medium">{label}</span>
            </NavLink>
          ))}

          {tier === 'free' && (
            <Link
              href="/pricing"
              className="flex items-center gap-3 px-2 py-2 rounded-lg text-sm text-gold/70 hover:text-gold hover:bg-gold/5 transition-all group mt-4"
            >
              <Crown className="h-4 w-4 shrink-0" />
              <span className="inline font-medium">Upgrade to Pro</span>
            </Link>
          )}
        </nav>

        {/* User footer */}
        <div className="px-2 pt-4 border-t border-border mt-2">
          {session.user.image && (
            <div className="flex items-center gap-2.5 px-2 py-2 mb-1">
              <img
                src={session.user.image}
                className="w-7 h-7 rounded-full ring-1 ring-gold/20 shrink-0"
                alt={session.user.name ?? ''}
              />
              <div className="min-w-0">
                <p className="text-xs font-medium text-foreground/80 truncate">
                  {session.user.name}
                </p>
              </div>
            </div>
          )}
          <form
            action={async () => {
              'use server'
              await signOut({ redirectTo: '/' })
            }}
          >
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-2 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-all"
            >
              <LogOut className="h-4 w-4 shrink-0" />
              <span className="inline">Sign out</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-[#0f0f14] safe-area-bottom">
        <nav className="flex items-center justify-around py-2">
          {NAV.map(({ href, icon: Icon, label }) => (
            <MobileNavLink key={href} href={href}>
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-mono">{label}</span>
            </MobileNavLink>
          ))}
        </nav>
      </div>

      {/* Main */}
      <main id="main-content" className="flex-1 flex flex-col overflow-hidden pb-14 md:pb-0" role="main" aria-label="Calendar content">
        {children}
      </main>
    </div>
  )
}
