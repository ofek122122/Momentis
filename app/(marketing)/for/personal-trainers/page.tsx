import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, BarChart3, Clock, Zap, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Personal Trainers — Client session scheduling and revenue tracking',
  description:
    'Personal trainers schedule dozens of client sessions per week across locations. Momenties makes every session instant to book, tracks client hours for billing, and shows capacity before burnout arrives.',
  alternates: { canonical: '/for/personal-trainers' },
  openGraph: {
    title: 'Momenties for Personal Trainers',
    description: 'Client session scheduling and revenue tracking.',
    url: '/for/personal-trainers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Zap,
    title: 'Session booking in 5 seconds',
    desc: '"Training session Jake tuesday 7am 60 mins." Done. Tagged to client. No app-switching between booking and scheduling. Voice-add from the gym floor.',
  },
  {
    icon: Users,
    title: 'Client roster without a spreadsheet',
    desc: 'Tag every session by client code. Calendar shows the full week at a glance. Monthly analytics: hours per client, which is billable, who hasn\'t booked this month.',
  },
  {
    icon: BarChart3,
    title: 'Revenue visibility by week',
    desc: 'Total session hours per week × your rate = weekly revenue estimate. See which weeks are full and which have gaps. No separate tracking system required.',
  },
  {
    icon: Clock,
    title: 'Preparation and travel time',
    desc: '"Travel to studio 8:45am 15 mins." "Post-session note Jake 9:05am 5 mins." Every non-client-facing minute logged and accounted for.',
  },
]

const TRAINER_WEEK = [
  { time: '6:00 AM', action: '5 client sessions booked before noon. All recurring, pre-set. Client names in tags, not titles.' },
  { time: 'New client', action: '"Intro session Maria friday 10am 90 mins." Voice-added on the call. Onboarding template applied: first 4 sessions scheduled.' },
  { time: 'Weekly review', action: 'Analytics: 30 client hours, $1,800 billed. 4 slots open next week. Enough to fill without overloading.' },
  { time: 'Cancellation', action: 'Client cancels Tuesday 7am. Slot is immediately visible. Text the waitlist. Fill the gap before 8am.' },
  { time: 'Month end', action: 'Analytics: total hours per client. Export for billing reconciliation. No spreadsheet required.' },
]

export default function ForPersonalTrainersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Personal Trainers"
        title={
          <>
            Every session booked.
            <br />
            <em className="not-italic text-gold">Revenue tracked.</em>
          </>
        }
        lede="Personal trainers run a scheduling-heavy business — dozens of recurring client sessions, last-minute changes, and billing that depends on accurate hour tracking. Momenties makes booking instant and revenue visible without a separate tool."
        crumbs={[{ label: 'For Personal Trainers' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · Voice input works from the gym floor · Mobile-first</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How trainers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features that run the business.</h2>
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

      {/* Trainer week */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Running your training business.</h2>
          </Reveal>
          <div className="space-y-3">
            {TRAINER_WEEK.map((step, i) => (
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
                &ldquo;I book new sessions by voice between client sets. By the time I finish a morning of training, the afternoon is already scheduled. It's changed how I run my days completely.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">A</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Aisha M.</div>
                  <div className="text-xs text-muted-foreground">Certified personal trainer, 22 clients</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Run your training business from your calendar."
        subtitle="Instant booking, client hour tracking, revenue visibility. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
