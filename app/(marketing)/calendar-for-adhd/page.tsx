import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { ArrowRight, CheckCircle2, Zap, Sun, BellOff } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendar for ADHD — Fast input, calm view, no friction',
  description:
    'ADHD brains need calendar tools with near-zero friction, minimal visual noise, and fast capture. Momenties voice input and simple daily view are designed for the way ADHD minds actually work.',
  alternates: { canonical: '/calendar-for-adhd' },
  openGraph: {
    title: 'Calendar for ADHD',
    description: 'Fast input. Calm view. No friction.',
    url: '/calendar-for-adhd',
    type: 'website',
  },
}

const ADHD_FEATURES = [
  {
    icon: Zap,
    title: 'Zero-friction capture',
    desc: 'The moment you think of something, you can add it. Voice input while walking. Text while in another tab. Photo of a schedule while standing next to it. The barrier to adding is nearly zero.',
  },
  {
    icon: Sun,
    title: 'One-day Daily Brief',
    desc: 'The Daily Brief gives you a calm, minimal view of today: your anchor event, your total load, and one scheduling suggestion. Not 7 days of visual noise. Just today.',
  },
  {
    icon: BellOff,
    title: 'Calm, minimal notifications',
    desc: 'Only the notifications that matter: upcoming event reminders and the daily brief. No streak counters, no gamification, no pressure. The calendar helps you, it doesn\'t nag you.',
  },
]

const WHY_ADHD = [
  {
    challenge: 'Time blindness — losing track of how much time has passed',
    approach: 'The Daily Brief anchors you to the day\'s shape without requiring you to scan the full week. Reminders fire when you need them, not on a fixed schedule.',
  },
  {
    challenge: 'Capture failures — great idea, didn\'t write it down',
    approach: 'Voice input makes capture instant. No app switching. No form. Speak the event while you think of it — 3 seconds, done.',
  },
  {
    challenge: 'Task initiation — knowing what to do but not starting',
    approach: 'Blocked calendar time creates a concrete start cue. "2pm: report writing" is easier to act on than "write report this week."',
  },
  {
    challenge: 'Overwhelm from full-week view',
    approach: 'Daily Brief is the default view: one day, minimal information, one clear priority. The full week view is available but not the starting point.',
  },
]

export default function CalendarForADHDPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar for ADHD"
        title={
          <>
            Fast capture.
            <br />
            <em className="not-italic text-gold">Calm view. No friction.</em>
          </>
        }
        lede="ADHD brains need tools where the barrier to capturing something is nearly zero, where visual noise doesn't overwhelm, and where the calendar works with your brain — not against it."
        crumbs={[{ label: 'Calendar for ADHD' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/daily-brief"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Daily Brief
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card · No spam</p>
      </PageHero>

      {/* ADHD-specific features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Built for the way ADHD brains work</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Three features that matter most.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {ADHD_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
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

      {/* ADHD challenges and how Momenties helps */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">ADHD and calendars</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              Common challenges and how Momenties approaches them.
            </h2>
          </Reveal>
          <div className="space-y-4">
            {WHY_ADHD.map((item, i) => (
              <Reveal key={item.challenge} delay={i * 45}>
                <div className="rounded-xl border border-border/50 lux-card p-5">
                  <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-2">Challenge</p>
                  <p className="text-sm font-medium text-foreground mb-3">{item.challenge}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                    <p className="text-xs text-foreground/85 leading-relaxed">{item.approach}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Essay */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-4">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              Calendars should help you, not require executive function to use.
            </h2>
          </Reveal>
          <div className="space-y-4 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                The irony of most calendar apps for ADHD brains is that they require the most executive function to use. Opening the app, navigating to the right date, filling in fields, selecting recurrence — each step requires sustained attention and working memory. The people who need frictionless capture the most are the ones most penalized by form-based input.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Momenties' approach is different: input should be as close to "thinking out loud" as possible. Voice captures the idea when you have it. Natural language parsing means you don't need to think about syntax. The Daily Brief gives you today's context without needing to navigate a full calendar view.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                We're not making clinical claims about ADHD. We're saying that the design principles that help ADHD brains — low friction, immediate capture, minimal visual noise — make a better calendar for everyone. The ADHD community just benefits most visibly from getting this right.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="Capture it now. Think about it later. That's the whole system."
        subtitle="Voice input, Daily Brief, and zero-friction calendar. Free forever."
        primary={{ label: 'Try Momenties free', href: '/login' }}
        secondary={{ label: 'See Daily Brief', href: '/daily-brief' }}
      />
    </>
  )
}
