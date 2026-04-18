import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Zap, BarChart3, Globe, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Sales — Log every touchpoint in seconds',
  description:
    'Sales reps need to log every customer interaction instantly, keep pipeline meetings organized, and see exactly how their time splits across accounts. Momenties adds voice logging, meeting analytics, and multi-timezone scheduling.',
  alternates: { canonical: '/for/sales' },
  openGraph: {
    title: 'Momenties for Sales',
    description: 'Log every touchpoint in seconds.',
    url: '/for/sales',
    type: 'website',
  },
}

const PAINS = [
  {
    icon: Zap,
    problem: 'Logging prospect calls in CRM and calendar is double-entry',
    fix: 'Add the call to Momenties by voice the moment it happens. Analytics tracks time-per-account automatically. One entry, full visibility.',
  },
  {
    icon: BarChart3,
    problem: 'No visibility into which accounts are getting your time',
    fix: 'Analytics shows hours per account tag per week. See if your biggest deals are getting proportionate time, or if SMB is crowding out enterprise.',
  },
  {
    icon: Globe,
    problem: 'Prospects in different timezones — every scheduling is friction',
    fix: 'Scheduling links (Q3 2026) handle timezone conversion. Prospects book in their local time. You see it in yours. No "what time is 3pm for you?"',
  },
  {
    icon: Users,
    problem: 'Handoff meetings and team calls scatter across the pipeline',
    fix: 'Template your recurring pipeline meetings (daily standup, weekly forecast, monthly QBR) and apply the template each quarter in seconds.',
  },
]

const REP_WEEK = [
  { time: 'Monday 8am', action: 'Daily Brief. Today\'s calls, the week\'s load, which accounts are on-calendar. 45 seconds.' },
  { time: 'After each call', action: 'Voice: "follow-up with Acme re: security review thursday 2pm." Logged before the call summary email lands.' },
  { time: 'Mid-week', action: 'Check analytics: hours on Enterprise deals vs. SMB this week. Is the split matching pipeline priority?' },
  { time: 'Thursday', action: 'Prospect sends availability as a PDF email. Snap it. Meeting slots extracted automatically.' },
  { time: 'Friday', action: 'Template next week\'s calls. "Prospect calls every day 10–11am and 2–3pm." Recurring blocks protect the pipeline cadence.' },
]

export default function ForSalesPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Sales"
        title={
          <>
            Every touchpoint
            <br />
            <em className="not-italic text-gold">logged in seconds.</em>
          </>
        }
        lede="Sales reps who log every interaction accurately outsell those who reconstruct their pipeline notes at end-of-week. Momenties makes real-time logging instant — voice, text, or from your inbox."
        crumbs={[{ label: 'For Sales' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/analytics"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Time analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Pro from $12/month</p>
      </PageHero>

      {/* Pain points */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What we solve</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four sales calendar problems.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {PAINS.map((item, i) => (
              <Reveal key={item.problem} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <item.icon className="h-4 w-4 text-gold" />
                  </div>
                  <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-2">Problem</p>
                  <p className="text-sm text-muted-foreground mb-3">{item.problem}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/90 leading-relaxed">{item.fix}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rep week */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Sales workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A rep week with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {REP_WEEK.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-24 shrink-0 pt-0.5 uppercase tracking-wide">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I voice-add every call note as soon as I hang up. My CRM now gets accurate data because Momenties forces me to log the time anyway. One action, two systems updated.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">B</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Ben M.</div>
                  <div className="text-xs text-muted-foreground">Account Executive, SaaS</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Time spent with prospects is your most valuable data. Capture it."
        subtitle="Voice logging, account analytics, and scheduling links. Try Pro."
        primary={{ label: 'Start free trial', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
