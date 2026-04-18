import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, BarChart3, Clock, Zap, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Coaches — Client session scheduling, capacity tracking, and revenue analytics',
  description:
    'Coaches manage dozens of recurring client sessions, intake calls, and check-ins. Momenties makes session booking instant, tracks billable hours per client, and shows your capacity before burnout arrives.',
  alternates: { canonical: '/for/coaches' },
  openGraph: {
    title: 'Momenties for Coaches',
    description: 'Client session scheduling at speed. Revenue analytics built in.',
    url: '/for/coaches',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Zap,
    title: 'Instant client session scheduling',
    desc: '"Coaching session Sarah Thursday 4pm 60 minutes." Done. Tagged to the client. No form, no calendar app switching, no friction between intake call and scheduled session.',
  },
  {
    icon: Users,
    title: 'Client roster templates',
    desc: 'Create a recurring client schedule template — biweekly sessions, monthly check-ins, quarterly reviews. Apply to any new client at onboarding. All sessions created in 30 seconds.',
  },
  {
    icon: BarChart3,
    title: 'Capacity and revenue visibility',
    desc: 'Analytics shows hours per client per month. See at a glance how close you are to capacity. Understand which engagements are most time-intensive before accepting new clients.',
  },
  {
    icon: Clock,
    title: 'Between-session prep time',
    desc: '"Prep for Sarah session thursday 3:30pm 20 mins." Voice-add prep blocks as fast as you think of them. Protected, tagged, visible.',
  },
]

const COACHING_WORKFLOW = [
  { time: 'New client', action: 'Apply onboarding template. Initial discovery call, biweekly sessions, monthly check-in. All scheduled in 30 seconds.' },
  { time: 'Between sessions', action: 'Voice-add action item review, prep blocks, and follow-up notes as you think of them. Zero friction.' },
  { time: 'Week view', action: 'See all client sessions at a glance. Prep time, the session, follow-up window. Complete picture without scrolling.' },
  { time: 'Capacity check', action: 'Analytics shows total client hours this month vs. last. See if you\'re drifting toward over-commitment.' },
  { time: 'Billing review', action: 'Monthly hours per client tag. Export for invoicing. No separate time tracker needed.' },
]

export default function ForCoachesPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Coaches"
        title={
          <>
            Client sessions scheduled.
            <br />
            <em className="not-italic text-gold">Capacity protected.</em>
          </>
        }
        lede="Coaches run on client relationships and their own energy. Momenties makes scheduling each session instant, surfaces capacity before burnout arrives, and tracks client hours without a separate billing tool."
        crumbs={[{ label: 'For Coaches' }]}
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
            Client analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Pro from $12/month · No separate time tracker needed</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How coaches use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features that matter.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {USE_CASES.map((uc, i) => (
              <Reveal key={uc.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <uc.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{uc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching workflow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A coaching practice with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {COACHING_WORKFLOW.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-24 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
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
                &ldquo;I used to spend Sunday evenings scheduling the week. Now I voice-add sessions as clients book them. By the time I sit down to plan, everything is already there.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">M</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Marcus T.</div>
                  <div className="text-xs text-muted-foreground">Executive coach, 24-client practice</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capacity insight */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Know your capacity before it's too late.</h2>
          </Reveal>
          <div className="space-y-4 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                Most coaches discover they're over-committed when they're already exhausted. The calendar shows 22 sessions this month and the realization hits: that's not sustainable.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Analytics in Momenties shows you the trend before you hit the wall. Sessions per week by client. Hours per month trend over three months. The inflection point — where you accepted too many clients — becomes visible and correctable before it becomes a crisis.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-1" />
                <p>Tag each session with a client code. Analytics groups by tag. Monthly hours per client becomes a one-click view.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="Run your practice. Let the calendar handle itself."
        subtitle="Instant session scheduling, client analytics, capacity protection. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
