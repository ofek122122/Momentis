import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BarChart3, Users, Clock, Shield, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Engineering Managers — Reclaim your calendar',
  description:
    'Engineering managers spend 60–70% of their time in meetings. Momenties gives you the data to audit your schedule, protect focus time, and run fewer but better meetings.',
  alternates: { canonical: '/for/engineering-managers' },
  openGraph: {
    title: 'Momenties for Engineering Managers',
    description: 'Audit your calendar. Protect focus time. Run better 1:1s.',
    url: '/for/engineering-managers',
    type: 'website',
  },
}

const PROBLEMS = [
  {
    problem: 'You spend 60–70% of time in meetings',
    solution: 'Calendar analytics shows your real meeting-to-focus ratio. Most EMs who look are surprised. Most reduce meetings the same week.',
  },
  {
    problem: 'Focus blocks get trampled by ad-hoc requests',
    solution: 'Focus mode enforces your blocks. Momenties auto-enables DND and flags attendees who try to book over protected time.',
  },
  {
    problem: 'Tracking 1:1s across 6–10 reports is administrative overhead',
    solution: 'Recurring 1:1 templates let you scaffold the whole week in two minutes. Notes, cadence, and participants preloaded.',
  },
  {
    problem: 'You lose 15 minutes per day to event creation friction',
    solution: 'Type "1:1 with Tom every tuesday 3pm 30 min" once. Done. Never set up that event again.',
  },
]

const WORKFLOW = [
  { time: 'Monday AM', action: 'Read the Daily Brief: load for the week, back-to-back warnings, one suggestion.' },
  { time: 'Before standup', action: 'Check team availability overlay. See who\'s double-booked or in back-to-backs.' },
  { time: 'During sprint planning', action: 'Voice-add blockers and action items directly into the calendar. 5 seconds each.' },
  { time: 'Friday PM', action: 'Review analytics. Did focus blocks actually hold? What\'s the week\'s meeting load?' },
  { time: 'Monthly', action: 'Open the trends view. Is your schedule getting heavier? Where is the load coming from?' },
]

const TESTIMONIAL = {
  quote: 'The analytics tab showed me I was in 4.5 hours of unproductive syncs per week. I cut two immediately and that\'s 9 hours a month back. My reports said I seem less frazzled.',
  name: 'Tom Watkins',
  role: 'Engineering Manager, Series B fintech',
  avatar: 'T',
}

export default function ForEngineeringManagersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Engineering Managers"
        title={
          <>
            Your calendar is
            <br />
            <em className="not-italic text-gold">your actual job.</em>
          </>
        }
        lede="Engineering managers spend more time managing their calendar than their code. Momenties gives you the AI input, the analytics, and the focus-time protection to spend that time deliberately."
        crumbs={[{ label: 'For EMs' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free trial <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/analytics"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            See calendar analytics
          </Link>
        </div>
      </PageHero>

      {/* Problems and solutions */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">The problem</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              What Momenties fixes for EMs.
            </h2>
          </Reveal>
          <div className="space-y-4">
            {PROBLEMS.map((item, i) => (
              <Reveal key={item.problem} delay={i * 50}>
                <div className="rounded-xl border border-border/50 lux-card p-5">
                  <p className="text-sm font-medium text-foreground/60 mb-3">Problem: {item.problem}</p>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/90 leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Typical workflow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              A typical EM week with Momenties.
            </h2>
          </Reveal>
          <div className="space-y-3">
            {WORKFLOW.map((step, i) => (
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

      {/* Key features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Features</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              What EMs use most.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: BarChart3, title: 'Calendar analytics', href: '/features/analytics', desc: 'Meeting load, focus ratio, time by person. The data to audit your schedule honestly.' },
              { icon: Users, title: 'Shared team calendars', href: '/pro', desc: 'See availability across your whole team. No more "send me your calendar" Slack messages.' },
              { icon: Clock, title: 'Focus mode', href: '/pro', desc: 'Protect deep-work windows. Auto-DND and attendee warnings when someone tries to book over them.' },
              { icon: Shield, title: '1:1 templates', href: '/pro', desc: 'Scaffold recurring 1:1s with pre-filled agendas. One click to populate the whole week.' },
            ].map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 60}>
                <Link href={f.href} className="block rounded-xl border border-border lux-card p-5 h-full group">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-1.5 group-hover:text-gold transition-colors">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </Link>
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
              <div className="flex items-center gap-1 mb-5">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">&ldquo;{TESTIMONIAL.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">{TESTIMONIAL.avatar}</div>
                <div>
                  <div className="text-sm font-medium text-foreground">{TESTIMONIAL.name}</div>
                  <div className="text-xs text-muted-foreground">{TESTIMONIAL.role}</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Your next 1:1 is already overdue. Let\'s fix that."
        subtitle="Pro trial. 14 days. Analytics, focus mode, and 1:1 templates included from day one."
        primary={{ label: 'Start free trial', href: '/login' }}
        secondary={{ label: 'See all Pro features', href: '/pro' }}
      />
    </>
  )
}
