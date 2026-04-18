'use client'

import { Crown } from 'lucide-react'
import Link from 'next/link'

interface ProBadgeProps {
  size?: 'sm' | 'md'
}

export function ProBadge({ size = 'sm' }: ProBadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-gold/20 to-amber-500/20 border border-gold/30 font-mono tracking-wider uppercase ${
      size === 'sm' ? 'px-2 py-0.5 text-[9px]' : 'px-3 py-1 text-xs'
    }`}>
      <Crown className={size === 'sm' ? 'h-2.5 w-2.5 text-gold' : 'h-3.5 w-3.5 text-gold'} />
      <span className="text-gold font-bold">PRO</span>
    </span>
  )
}

export function UpgradePrompt({ feature }: { feature: string }) {
  return (
    <div className="relative rounded-xl border border-gold/20 overflow-hidden">
      {/* Blurred fake preview */}
      <div className="p-6 blur-sm pointer-events-none select-none opacity-40">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="rounded-xl border border-border bg-card p-3 h-20" />
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-border bg-card p-4 h-32" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-xs">
        <div className="text-center space-y-3 p-6">
          <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto">
            <Crown className="h-6 w-6 text-gold" />
          </div>
          <p className="text-sm text-foreground font-medium">
            {feature} is a Pro feature
          </p>
          <p className="text-xs text-muted-foreground max-w-xs">
            Upgrade to Momenties Pro for full analytics, custom themes, and more.
          </p>
          <Link
            href="/pricing"
            className="inline-block mt-1 px-5 py-2 rounded-full bg-gold text-[#0c0c0f] text-xs font-bold hover:bg-gold/90 transition-all press shadow-md shadow-gold/10"
          >
            Upgrade to Pro — $4.99/mo
          </Link>
        </div>
      </div>
    </div>
  )
}
