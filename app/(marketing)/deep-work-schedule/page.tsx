import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, BarChart3, Clock, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Deep Work Schedule — How to build and protect one on your calendar',
  description:
    'A deep work schedule isn\'t about willpower — it\'s about architecture. Block the hours, defend the signal, track the output. Here\'s how to build a deep work schedule that actually holds.',
  alternates: { canonical: '/deep-work-schedule' },
  openGraph: {
    title: 'Deep Work Schedule — Momenties',
    description: 'Build a deep work schedule that holds — calendar blocking, signals, and analytics.',
    url: '/deep-work-schedule',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: Shield,
    title: 'Block first, fill second',
    desc: 'Deep work goes on the calendar before anything else. Monday morning: 9–11am blocked. Tuesday: same. The rest of the calendar fills around deep work — not the other way around. Reactive calendars never have room for depth.',
  },
  {
    icon: Clock,
    title: 'Signal unavailability clearly',
    desc: 'A deep work block that colleagues ignore is just a note to yourself. Use the calendar to signal: this time is not available. "Deep work — do not book" in the event title. Teams respect blocked time when it\'s consistently there.',
  },
  {
    icon: BarChart3,
    title: 'Measure what you complete',
    desc: 'Tag every deep work block. Analytics shows deep work hours per week, completion rate, and trend. Are you getting 10 hours of deep work per week or 3? The number is humbling — and motivating.',
  },
  {
    icon: Zap,
    title: 'Protect with a pre-work ritual',
    desc: 'Add a 10-minute pre-deep-work block. "Focus prep — review today\'s deep work goal." The ritual signals the transition. The task is ready before the session starts. Zero ramp-up time.',
  },
]

const SCHEDULE_TYPES = [
  {
    name: 'Bimodal',
    ideal: 'Writers, researchers, creators',
    structure: '2–3 deep days per week. The remaining days handle shallow work — calls, email, admin. Deep days are protected completely.',
    blocks: ['Monday: deep work 8am–1pm', 'Tuesday: shallow only', 'Wednesday: deep work 8am–1pm', 'Thursday/Friday: meetings and admin'],
  },
  {
    name: 'Rhythmic',
    ideal: 'Knowledge workers, developers, analysts',
    structure: 'Same deep work block every day. 9–11am, Monday through Friday. The consistency builds a habit the brain learns to enter.',
    blocks: ['Daily 9–11am: deep work block', 'No meetings before 11am', '11am–noon: email and shallow tasks', 'Afternoon: meetings and collaboration'],
  },
  {
    name: 'Journalistic',
    ideal: 'Freelancers, entrepreneurs, managers',
    structure: 'Drop into deep work whenever a window appears. Requires training — the ability to shift into depth with no warm-up. Calendar-blocked opportunistically.',
    blocks: ['Voice-capture windows as they appear', '"Deep work 2pm gap, 90 mins"', 'Analytics tracks total weekly depth hours', 'Adjust weekly based on previous week\'s count'],
  },
]

const BUILD_STEPS = [
  { step: '1', action: 'Audit current calendar — count actual deep work hours last week (not planned, completed).' },
  { step: '2', action: 'Choose a schedule type: bimodal (deep days), rhythmic (daily block), or journalistic (opportunistic).' },
  { step: '3', action: 'Block the sessions now. Not "I\'ll start next Monday." Open Momenties and add the next 4 weeks of deep work blocks.' },
  { step: '4', action: 'Add a title that signals intent: "Deep work — [project name]." Colleagues understand. Calendar AI understands.' },
  { step: '5', action: 'Tag every completed block. After 4 weeks, analytics shows actual vs. planned. Adjust the schedule to match reality, then stretch.' },
  { step: '6', action: 'Review weekly. Friday afternoon: how many deep work hours this week? What shipped? What blocked depth? Adjust the following week.' },
]

export default function DeepWorkSchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Deep Work Schedule"
        title={
          <>
            Build depth into
            <br />
            <em className="not-italic text-gold">the calendar itself.</em>
          </>
        }
        lede="A deep work schedule doesn't happen by accident — it requires architecture. The hours have to be blocked, the signal has to be clear, and the output has to be measured. Here's how to build a deep work schedule that actually holds, using the calendar as the enforcement mechanism."
        crumbs={[{ label: 'Deep Work Schedule' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Block time free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/focus-time"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Focus time
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Why most deep work schedules fail — and what holds.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <p.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Three schedule types</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Choose the architecture that fits your work.</h2>
          </Reveal>
          <div className="space-y-4">
            {SCHEDULE_TYPES.map((type, i) => (
              <Reveal key={type.name} delay={i * 60}>
                <div className="rounded-xl border border-border lux-card p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-sm font-semibold text-foreground">{type.name} schedule</h3>
                    <span className="text-[10px] font-mono text-gold/70 uppercase tracking-wide bg-gold/10 px-2 py-1 rounded-full shrink-0">{type.ideal}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{type.structure}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {type.blocks.map((b) => (
                      <div key={b} className="flex items-start gap-2 text-xs text-foreground/70">
                        <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                        {b}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Six-step guide</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Build your deep work schedule today.</h2>
          </Reveal>
          <div className="space-y-3">
            {BUILD_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-lg font-bold text-gold/40 w-8 shrink-0 leading-tight">{step.step}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Build the deep work schedule. Protect it on the calendar."
        subtitle="Calendar blocking, focus time analytics, and daily planning. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Focus time guide', href: '/focus-time' }}
      />
    </>
  )
}
