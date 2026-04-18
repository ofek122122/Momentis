import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Zap, BarChart3, Shield, Clock, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Athletes — Training schedule, competition calendar, and recovery tracking',
  description:
    'Athletes need a calendar that protects training blocks, tracks competition schedules, and shows the balance between training load and recovery. Momenties makes every session instant to log and analyzes your time commitment.',
  alternates: { canonical: '/for/athletes' },
  openGraph: {
    title: 'Momenties for Athletes',
    description: 'Training blocks protected. Competition calendar managed.',
    url: '/for/athletes',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'Protected training blocks',
    desc: '"Morning run 6am every weekday, 60 mins." Recurring, protected, enforced. Focus mode pauses distractions during training. Your schedule knows not to interrupt a workout.',
  },
  {
    icon: Zap,
    title: 'Race and competition calendar',
    desc: '"Half marathon downtown may 18." "Tournament finals june 7-8." Competition dates added the moment they appear in the calendar. All in one view with training context around them.',
  },
  {
    icon: BarChart3,
    title: 'Training load analytics',
    desc: 'Tag all training sessions. Analytics shows weekly training hours, rolling 4-week trend, and training-to-rest ratio. See if you\'re building toward a peak or drifting toward overtraining.',
  },
  {
    icon: Clock,
    title: 'Recovery and rest day blocking',
    desc: 'Recovery days are part of the program. Block them. Tag them. Protect them like any other session. Analytics confirms the rest days are actually happening.',
  },
]

const TRAINING_WEEK = [
  { day: 'Monday', action: 'AM run 6:30am 5mi. PM strength 12pm 45mins. Both pre-blocked, recurring. Focus mode active during sessions.' },
  { day: 'Tuesday', action: 'Recovery. Blocked. Protected. Tag: "recovery." Analytics confirms rest days are in the schedule.' },
  { day: 'Wednesday', action: 'Speed work 6am. Coach check-in 4pm voice-added: "Coach check-in wednesday 4pm." Done.' },
  { day: 'Friday', action: 'Tempo run 6am. Pre-competition review 7pm. "Race prep review friday 7pm 30 mins." On calendar.' },
  { day: 'Sunday', action: 'Long run 7am 90 mins. Analytics: 8 training hours this week, 1 rest day. On track for peak week in 3 weeks.' },
]

const TRAINING_STATS = [
  { value: '23%', label: 'More consistent training adherence when sessions are pre-scheduled on a calendar' },
  { value: '4×', label: 'Training blocks that are calendar-protected are kept vs. informal commitments' },
  { value: '40%', label: 'Athletes who track training hours report better periodization decisions' },
]

export default function ForAthletesPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Athletes"
        title={
          <>
            Training protected.
            <br />
            <em className="not-italic text-gold">Competition ready.</em>
          </>
        }
        lede="Athletes who protect their training blocks in a calendar adhere to them more. Momenties makes every session recurring and protected by default, tracks training load over time, and keeps competition schedules in context."
        crumbs={[{ label: 'For Athletes' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/focus-mode"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Focus mode
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Recurring sessions included on free plan</p>
      </PageHero>

      {/* Stats */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {TRAINING_STATS.map((s, i) => (
              <Reveal key={s.value} delay={i * 60}>
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-gold mb-2">{s.value}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Features</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Built for training discipline.</h2>
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

      {/* Training week */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Sample week</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A training week with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {TRAINING_WEEK.map((step, i) => (
              <Reveal key={step.day} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-20 shrink-0 pt-0.5 uppercase tracking-wide">{step.day}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I tag every session and look at the weekly hours before my long run on Sundays. I can see if I\'m building load too fast or recovering too little. My coach was impressed I had that data without a separate tool.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">T</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Tyler W.</div>
                  <div className="text-xs text-muted-foreground">Amateur triathlete, 3× Ironman finisher</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Train consistently. Recover intentionally. Race confident."
        subtitle="Protected sessions, training load analytics, and competition calendar. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
