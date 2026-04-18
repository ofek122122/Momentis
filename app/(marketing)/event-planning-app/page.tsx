import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, Users, Clock, Zap, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Event Planning App — Template-driven scheduling for multi-event coordination',
  description:
    'Plan events with templates that create all 20 planning meetings at once. Track vendor calls, stakeholder reviews, and rehearsals across a single calendar. AI input means every event takes 5 seconds.',
  alternates: { canonical: '/event-planning-app' },
  openGraph: {
    title: 'Event Planning App — Momenties',
    description: 'Template-driven event scheduling. All 20 planning meetings in 30 seconds.',
    url: '/event-planning-app',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Calendar,
    title: 'Event templates for every format',
    desc: 'Corporate conference: kickoff call, venue walkthrough, AV check, speaker briefings, rehearsal, day-of. Create the template once. Apply to every new event. All meetings generated instantly.',
  },
  {
    icon: Zap,
    title: 'Natural language for vendor scheduling',
    desc: '"Florist consultation tuesday 2pm 45 minutes." "Catering tasting thursday morning." Every vendor call added the moment it\'s confirmed. No form, no switching apps.',
  },
  {
    icon: Users,
    title: 'Multi-stakeholder coordination',
    desc: 'Team overlay shows availability across planners, clients, and vendors simultaneously. Find the shared window for a review call across 8 people in seconds.',
  },
  {
    icon: Clock,
    title: 'Count-down milestone tracking',
    desc: '"Venue deposit deadline march 3." "Catering confirmation needed feb 15." Voice-add hard deadlines as they appear in contracts. All visible in the same calendar.',
  },
]

const EVENT_TIMELINE = [
  { label: 'T-90 days', action: 'Apply event template. 20 planning meetings created instantly. Deadlines tagged and visible.' },
  { label: 'T-60 days', action: 'Vendor calls confirmed. Voice-add as they\'re scheduled. "Florist walkthrough tuesday 10am, 90 mins."' },
  { label: 'T-30 days', action: 'Stakeholder review — team availability overlay finds the shared 2-hour window across 6 people.' },
  { label: 'T-7 days', action: 'Final run-of-show added. Rehearsal scheduled. Analytics shows 40 planning hours logged this event.' },
  { label: 'T-1 day', action: 'Daily Brief: all tomorrow\'s coordination calls, vendor arrivals, and setup windows — in one view.' },
]

export default function EventPlanningAppPage() {
  return (
    <>
      <PageHero
        eyebrow="Event Planning"
        title={
          <>
            Every planning meeting
            <br />
            <em className="not-italic text-gold">scheduled in 30 seconds.</em>
          </>
        }
        lede="Event planners create the same 20 meetings for every event — kickoffs, walkthroughs, rehearsals, vendor calls. Momenties templates let you generate the entire schedule at once. AI input handles every new vendor in 5 seconds."
        crumbs={[{ label: 'Event Planning' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/calendar-templates"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Calendar templates
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Team plan from $9/person/month</p>
      </PageHero>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Features</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Built for multi-event coordination.</h2>
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

      {/* Event timeline */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Example timeline</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A 90-day event plan with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {EVENT_TIMELINE.map((step, i) => (
              <Reveal key={step.label} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-20 shrink-0 pt-0.5 uppercase tracking-wide">{step.label}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Template callout */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border/50 p-6">
              <h3 className="text-sm font-medium text-foreground mb-3">What a corporate event template includes</h3>
              <div className="grid sm:grid-cols-2 gap-2">
                {[
                  'Kickoff call (T-90)',
                  'Venue site visit (T-75)',
                  'Catering tasting (T-60)',
                  'Speaker briefing (T-45)',
                  'Stakeholder preview (T-30)',
                  'AV technical check (T-14)',
                  'Full run-through (T-7)',
                  'Final vendor confirmation (T-5)',
                  'Setup day (T-1)',
                  'Event day (T-0)',
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-foreground/80">
                    <CheckCircle2 className="h-3 w-3 text-gold shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3">Apply template to any event start date. All meetings created instantly, anchored to that date.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Build the event schedule before the kickoff call ends."
        subtitle="Templates, AI vendor scheduling, and multi-person availability overlay. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See templates', href: '/calendar-templates' }}
      />
    </>
  )
}
