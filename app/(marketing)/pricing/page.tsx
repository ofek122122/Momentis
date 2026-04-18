import Link from 'next/link'
import { auth } from '@/lib/auth'
import { getUserTier } from '@/lib/pro'
import { Check, Crown, Sparkles, BarChart3, Palette, Users, Zap, Calendar, Focus, Layout, ChevronDown } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
}

const FAQ = [
  { q: 'Can I try Pro features before upgrading?', a: 'The free tier includes all core features including voice and image input. Pro unlocks unlimited AI parses, analytics, custom themes, and more.' },
  { q: 'Can I cancel anytime?', a: 'Yes — cancel your Pro subscription at any time. You\'ll keep Pro access until the end of your billing period.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards through Stripe. Your payment information is never stored on our servers.' },
  { q: 'Is my calendar data secure?', a: 'Absolutely. We only access your Google Calendar to display and create events. We never sell, share, or monetize your data.' },
]

const FEATURES = {
  free: [
    { icon: Calendar, text: '3 AI parses per day' },
    { icon: Layout, text: 'Month, week & day views' },
    { icon: Zap, text: '1 calendar connection' },
    { icon: Check, text: 'Drag-and-drop scheduling' },
    { icon: Check, text: 'Voice & image input' },
  ],
  pro: [
    { icon: Sparkles, text: 'Unlimited AI parses' },
    { icon: Layout, text: 'All calendar views' },
    { icon: Calendar, text: 'Unlimited calendar connections' },
    { icon: Zap, text: 'Smart time suggestions' },
    { icon: BarChart3, text: 'Calendar analytics & insights' },
    { icon: Palette, text: 'Custom themes & colors' },
    { icon: Users, text: 'Shared calendars & collaboration' },
    { icon: Crown, text: 'Event templates' },
    { icon: Focus, text: 'Focus mode & Pomodoro timer' },
    { icon: Sparkles, text: 'AI daily briefing' },
    { icon: Check, text: 'Priority support' },
  ],
}

export default async function PricingPage() {
  const session = await auth()
  const tier = session?.user ? await getUserTier(session.user.id) : 'free'
  const isPro = tier === 'pro'

  return (
    <div className="dot-grid">
      {/* Hero */}
      <div className="text-center py-16 px-6">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold/80 mb-4">Pricing</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
          Simple pricing.<br />
          <em className="not-italic text-gold">Powerful calendar.</em>
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Start free. Upgrade when you want the full AI-powered experience.
        </p>
      </div>

      {/* Pricing cards */}
      <div className="max-w-4xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-6">
        {/* Free tier */}
        <div className="rounded-2xl border border-border bg-card p-8 space-y-6 flex flex-col">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">Free</h2>
            <p className="text-muted-foreground text-sm mt-1">Perfect for getting started</p>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-5xl font-bold text-foreground">$0</span>
            <span className="text-muted-foreground text-sm">/month</span>
          </div>
          <div className="space-y-3">
            {FEATURES.free.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <f.icon className="h-4 w-4 text-muted-foreground shrink-0" />
                <span className="text-sm text-foreground/80">{f.text}</span>
              </div>
            ))}
          </div>
          <div className="flex-1" />
          {!session ? (
            <Link
              href="/login"
              className="block w-full text-center py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-white/5 transition-all press"
            >
              Get started free
            </Link>
          ) : !isPro ? (
            <div className="py-3 text-center text-sm text-muted-foreground font-mono border border-border/50 rounded-xl">
              Current plan
            </div>
          ) : null}
        </div>

        {/* Pro tier */}
        <div className="rounded-2xl border-2 border-gold/40 bg-card p-8 space-y-6 relative overflow-hidden flex flex-col shadow-lg shadow-gold/5">
          <div className="absolute top-0 right-0 px-4 py-1.5 bg-gold text-[#0c0c0f] text-xs font-bold rounded-bl-xl">
            POPULAR
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display text-2xl font-bold text-foreground">Pro</h2>
              <Crown className="h-5 w-5 text-gold" />
            </div>
            <p className="text-muted-foreground text-sm mt-1">For power users who live by their calendar</p>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-5xl font-bold text-gold">$4.99</span>
            <span className="text-muted-foreground text-sm">/month</span>
          </div>
          <div className="space-y-3">
            {FEATURES.pro.map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <f.icon className="h-4 w-4 text-gold shrink-0" />
                <span className="text-sm text-foreground/80">{f.text}</span>
              </div>
            ))}
          </div>
          <div className="flex-1" />
          {isPro ? (
            <div className="py-3 text-center text-sm text-gold font-mono flex items-center justify-center gap-2 border border-gold/30 rounded-xl">
              <Crown className="h-4 w-4" /> You are on Pro
            </div>
          ) : (
            <ProUpgradeButton />
          )}
        </div>
      </div>

      {/* Testimonial */}
      <div className="max-w-2xl mx-auto px-6 pb-16 text-center">
        <blockquote className="space-y-4">
          <p className="font-display text-xl md:text-2xl font-semibold text-foreground/90 leading-snug">
            &ldquo;I just say what I need and it&apos;s on my calendar. No more fighting with date pickers.&rdquo;
          </p>
          <footer className="text-sm text-muted-foreground">
            — A happy Momenties user
          </footer>
        </blockquote>
      </div>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" aria-label="FAQ">
        <div className="text-center mb-10">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-gold/60 mb-3">FAQ</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Common questions
          </h2>
        </div>
        <div className="space-y-3">
          {FAQ.map((item, i) => (
            <details
              key={i}
              className="group rounded-xl border border-border bg-card/50 overflow-hidden"
            >
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-medium text-foreground hover:text-gold transition-colors list-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown className="h-4 w-4 text-muted-foreground group-open:rotate-180 transition-transform shrink-0 ml-4" />
              </summary>
              <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  )
}

function ProUpgradeButton() {
  return (
    <form
      action={async () => {
        'use server'
        // Mock upgrade — in production this would go through Stripe
        const { auth: getAuth } = await import('@/lib/auth')
        const { upgradeToPro } = await import('@/lib/pro')
        const session = await getAuth()
        if (session?.user) {
          await upgradeToPro(session.user.id)
        }
      }}
    >
      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-gold text-[#0c0c0f] text-sm font-bold hover:bg-gold/90 transition-all press shadow-md shadow-gold/10"
      >
        Upgrade to Pro
      </button>
    </form>
  )
}
