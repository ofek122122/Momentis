import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import {
  CheckCircle2, Zap, Globe, Palette, BarChart3, Users, BookOpen,
  Keyboard, ArrowRight, Star,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties Pro — The full calendar',
  description:
    'Momenties Pro unlocks Apple Calendar sync, unlimited AI parsing, smart scheduling, themes, focus mode, and shared calendars. $12/month.',
  alternates: { canonical: '/pro' },
  openGraph: {
    title: 'Momenties Pro',
    description: 'The full calendar. $12/month.',
    url: '/pro',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Momenties Pro — $12/month',
    description: 'Unlimited AI parsing, Apple Calendar, smart scheduling, and more.',
  },
}

const PRO_FEATURES = [
  {
    icon: Zap,
    title: 'Unlimited AI parsing',
    desc: 'Free tier: 3 AI parses/day. Pro: unlimited. Never hit a wall mid-day.',
  },
  {
    icon: Globe,
    title: 'Apple Calendar sync',
    desc: '2-way sync with iCloud Calendar via CalDAV. All devices, all events, always in sync.',
  },
  {
    icon: BarChart3,
    title: 'Calendar analytics',
    desc: 'See how you actually spend your time. Meeting-to-focus ratio, busiest days, patterns.',
  },
  {
    icon: Palette,
    title: 'Premium themes',
    desc: 'Clean White, Warm Sunset, Deep Ocean, Forest, and more. Change the look completely.',
  },
  {
    icon: Users,
    title: 'Shared calendars',
    desc: 'Share any calendar with teammates. Overlay views, availability at a glance.',
  },
  {
    icon: BookOpen,
    title: 'Smart scheduling',
    desc: 'Add an event without a time — Momenties finds the best free slot for you.',
  },
  {
    icon: Keyboard,
    title: 'Custom templates',
    desc: 'Save recurring event patterns as templates. One click to populate a week.',
  },
  {
    icon: Zap,
    title: 'Focus mode',
    desc: 'Block distracting notifications during your scheduled focus time. Auto-DND.',
  },
]

const TESTIMONIALS = [
  {
    quote: 'The Apple Calendar sync alone was worth the upgrade. My life is finally in one place.',
    name: 'Sam K.', role: 'Designer, freelance', avatar: 'S',
  },
  {
    quote: 'Unlimited parsing means I just... say things and they end up in my calendar. It\'s like having an assistant.',
    name: 'Priya R.', role: 'Founder, Seedr.ai', avatar: 'P',
  },
  {
    quote: 'The analytics tab showed me I was in 4 hours of unproductive meetings per week. I cut two immediately.',
    name: 'Tom W.', role: 'Engineering Manager', avatar: 'T',
  },
]

export default function ProPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties Pro · $12/month"
        title={
          <>
            The calendar,
            <br />
            <em className="not-italic text-gold">without limits.</em>
          </>
        }
        lede="Unlimited AI parsing, Apple Calendar sync, smart time suggestions, calendar analytics, premium themes, shared calendars, and focus mode. Everything the free tier isn't."
        crumbs={[{ label: 'Pro' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start 14-day free trial <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            See all plans
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">No credit card required · Cancel any time · 30-day refund</p>
      </PageHero>

      {/* Feature grid */}
      <section className="py-24 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What Pro unlocks</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Eight features. One upgrade.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRO_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 40}>
                <div className="rounded-xl border border-border lux-card p-5 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-1.5">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Free vs Pro */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Free vs Pro at a glance.
            </h2>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-[#0f0f14] border-b border-border text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
                <div className="px-5 py-3">Feature</div>
                <div className="px-4 py-3 text-center">Free</div>
                <div className="px-4 py-3 text-center text-gold">Pro</div>
              </div>
              {[
                ['Natural language add', true, true],
                ['Voice add', true, true],
                ['Photo-to-calendar', true, true],
                ['Google Calendar sync', true, true],
                ['AI parsing per day', '3 events', 'Unlimited'],
                ['Apple Calendar sync', false, true],
                ['Calendar connections', '1', 'Unlimited'],
                ['Smart scheduling', false, true],
                ['Calendar analytics', false, true],
                ['Premium themes', false, true],
                ['Shared calendars', false, true],
                ['Templates', false, true],
                ['Focus mode', false, true],
                ['Priority support', false, true],
              ].map(([feat, free, pro], i) => (
                <div key={String(feat)} className={`grid grid-cols-3 border-b border-border last:border-b-0 ${i % 2 === 0 ? '' : 'bg-white/[0.015]'}`}>
                  <div className="px-5 py-3 text-sm text-foreground/85">{feat}</div>
                  <div className="px-4 py-3 flex items-center justify-center">
                    {free === true ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    ) : free === false ? (
                      <span className="w-4 h-px bg-muted-foreground/30 block" />
                    ) : (
                      <span className="font-mono text-xs text-muted-foreground">{String(free)}</span>
                    )}
                  </div>
                  <div className="px-4 py-3 flex items-center justify-center">
                    {pro === true ? (
                      <CheckCircle2 className="h-4 w-4 text-gold" />
                    ) : (
                      <span className="font-mono text-xs text-gold">{String(pro)}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">From Pro users</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Why people upgrade.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {[0, 1, 2, 3, 4].map((s) => <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />)}
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed flex-1 mb-5">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-xs font-bold text-gold">{t.avatar}</div>
                    <div>
                      <div className="text-xs font-medium text-foreground">{t.name}</div>
                      <div className="text-[10px] text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border border-gold/25 bg-gold/5 p-8 text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-4">Momenties Pro</div>
              <div className="font-display text-5xl font-bold text-foreground mb-1">$12</div>
              <div className="text-sm text-muted-foreground mb-6">per month · annual plan ($144/yr) · or $15/mo month-to-month</div>
              <div className="space-y-2 mb-8 text-sm text-foreground/85">
                {['14-day free trial', 'No credit card to start', '30-day refund if you change your mind'].map((item) => (
                  <div key={item} className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 h-11 px-8 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press"
              >
                Start free trial <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="For teams, there's more."
        subtitle="Shared calendars, availability finder, and team scheduling on the Team plan."
        primary={{ label: 'See Team plan', href: '/teams' }}
        secondary={{ label: 'Full pricing', href: '/pricing' }}
      />
    </>
  )
}
