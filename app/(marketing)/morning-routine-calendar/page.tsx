import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, Zap, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Morning Routine Calendar — Build the morning that builds the day',
  description:
    'A morning routine on the calendar is a morning routine that happens. Here\'s how to design a morning structure that sets the day\'s direction — and how to protect it from the reactive demands that typically claim the first hours of every workday.',
  alternates: { canonical: '/morning-routine-calendar' },
  openGraph: {
    title: 'Morning Routine Calendar — Momenties',
    description: 'Design and protect a morning routine that starts every day with intention.',
    url: '/morning-routine-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Clock,
    title: 'Morning block protected before anything else',
    desc: 'The morning routine must be on the calendar before the work calendar is shared. "Morning routine — 6:30-8am." Protected from meetings. No one can book over it. The day starts with intention because the calendar defends it.',
  },
  {
    icon: Zap,
    title: 'Daily Brief at the routine\'s start',
    desc: 'The Daily Brief at 6am shows the day ahead: what\'s on the calendar, what deadlines are approaching, what decisions need to be made. The morning routine begins with full visibility. No checking three different apps to figure out what the day holds.',
  },
  {
    icon: Shield,
    title: 'First work block follows the routine',
    desc: 'The hour after the morning routine is the first deep work block — highest energy, lowest distraction, before email opens. "Deep work — 8-10am" placed immediately after the routine. The routine transitions directly into the best work window of the day.',
  },
  {
    icon: BarChart3,
    title: 'Morning routine consistency analytics',
    desc: 'Tag morning routine activities. Analytics shows completion rate week over week. Which mornings did the routine hold? Which days got blown up by reactive commitments? The data identifies which patterns disrupt the morning — and how to protect against them.',
  },
]

const ROUTINE_COMPONENTS = [
  {
    component: 'Preview and orient',
    duration: '10 minutes',
    what: 'Review the day\'s calendar. Note the day\'s 1-2 most important priorities. Any prep needed before the first meeting or commitment? What decisions will today require?',
  },
  {
    component: 'Physical movement',
    duration: '20-40 minutes',
    what: 'Walk, run, gym, stretching — whatever form. Movement raises alertness and mood reliably. The only rule: it must happen before deep work, not be skipped when the day looks busy.',
  },
  {
    component: 'Focused preparation',
    duration: '20-30 minutes',
    what: 'Breakfast without screens, journaling, reading non-work material, or meditation. A transition period between sleep-mode and work-mode. Cognitive preparation before the first complex task.',
  },
  {
    component: 'Priority task warm-up',
    duration: '10 minutes',
    what: 'Review the day\'s single most important deliverable before the deep work block starts. What\'s the goal? What\'s the first action? The warm-up eliminates the start-up cost from the deep work block itself.',
  },
]

const ROUTINE_TYPES = [
  { type: 'Early riser (5:30–7am)', structure: 'Physical movement → focused preparation → Daily Brief → deep work block starts at 7am. Requires consistent sleep schedule. Ideal for parents before household activity begins.' },
  { type: 'Standard (7–9am)', structure: 'Daily Brief → physical movement → breakfast → deep work block starts at 9am. Most common structure for 9-5 workers. Protects 2 hours before conventional work hours begin.' },
  { type: 'Flexible (8–10am)', structure: 'Physical movement → focused preparation → Daily Brief → deep work block starts at 10am. Works for remote workers and flexible schedules. No commute to account for.' },
  { type: 'Minimal (30 minutes)', structure: 'Daily Brief → 10-minute physical activity → priority review. For mornings when full routine isn\'t possible. A compressed version that captures the core: orientation and intention before reactive work begins.' },
]

export default function MorningRoutineCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Morning Routine Calendar"
        title={
          <>
            Morning by design.
            <br />
            <em className="not-italic text-gold">Day by intention.</em>
          </>
        }
        lede="The morning routine that lives in your head happens when convenient. The morning routine on the calendar happens every day. Here's how to design a morning structure that sets the day's direction, protect it from reactive demands, and transition directly into the most productive work window of the day."
        crumbs={[{ label: 'Morning Routine Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/daily-planner-app"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Daily planner guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties supports a protected morning routine.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Core components</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">What an effective morning routine contains.</h2>
          </Reveal>
          <div className="space-y-3">
            {ROUTINE_COMPONENTS.map((comp, i) => (
              <Reveal key={comp.component} delay={i * 50}>
                <div className="flex items-start gap-4 rounded-xl border border-border lux-card p-5">
                  <div className="shrink-0 pt-0.5">
                    <p className="text-sm font-medium text-foreground">{comp.component}</p>
                    <span className="font-mono text-[10px] text-gold/60 uppercase tracking-wide">{comp.duration}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{comp.what}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">By schedule type</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Morning routine structures for different schedules.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {ROUTINE_TYPES.map((type, i) => (
              <Reveal key={type.type} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-5 h-full">
                  <h3 className="text-xs font-mono text-gold/70 uppercase tracking-wide mb-2">{type.type}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{type.structure}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Morning analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for morning routine consistency.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Morning routine completion rate — weekly',
                'Days routine held vs. disrupted',
                'First meeting time — trend toward or away from morning',
                'Deep work hours started before 10am',
                'Morning routine duration consistency',
                'Days email opened before routine complete',
                'Week start momentum vs. week end comparison',
                'Routine completion vs. daily output quality',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Morning protected. Day started right. Work at its best."
        subtitle="Morning routine scheduling, daily brief visibility, and consistency analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Daily planner guide', href: '/daily-planner-app' }}
      />
    </>
  )
}
