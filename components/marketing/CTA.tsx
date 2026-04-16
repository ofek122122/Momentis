import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CTA({
  title = 'Ready to simplify your schedule?',
  subtitle = 'Join thousands who schedule smarter. Free to start, no credit card required.',
  primary = { label: 'Get started free', href: '/login' },
  secondary,
}: {
  title?: string
  subtitle?: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <section className="relative border-t border-border overflow-hidden cta-glow">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(40% 100% at 50% 100%, rgba(197,163,92,0.15) 0%, rgba(197,163,92,0) 60%)',
        }}
      />
      <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight">
          {title}
        </h2>
        <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-md mx-auto">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={primary.href}
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            {primary.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="inline-flex items-center gap-2 h-11 px-5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {secondary.label} →
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
