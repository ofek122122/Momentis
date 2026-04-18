import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, Users, Clock, Zap, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Event Coordinators — Venue scheduling, vendor timelines, and run-of-show tracking',
  description:
    'Event coordinators manage hundreds of moving parts — venues, vendors, speakers, setup crews, and stakeholders. Momenties templates every event type, tracks vendor meetings by event, and keeps the run-of-show on calendar.',
  alternates: { canonical: '/for/event-coordinators' },
  openGraph: {
    title: 'Momenties for Event Coordinators',
    description: 'Event timelines. Vendor scheduling. Run-of-show on calendar.',
    url: '/for/event-coordinators',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Calendar,
    title: 'Event milestone templates',
    desc: 'Conference template: venue booking, speaker outreach, sponsor confirmed, AV walkthrough, rehearsal, day-of setup, event, debrief. Apply to any event. Every milestone on calendar in 30 seconds.',
  },
  {
    icon: Users,
    title: 'Multi-vendor coordination',
    desc: '"Caterer walkthrough tuesday 10am." "AV setup thursday 2pm 3 hours." "Speaker briefing monday 4pm 45 mins." Every vendor meeting tracked by event, not scattered across a calendar.',
  },
  {
    icon: Clock,
    title: 'Run-of-show on the day',
    desc: 'Build the day-of timeline on calendar: registration 8am, doors 9am, keynote 9:30am, break 11am, lunch noon. Real calendar blocking. Every staff member sees the schedule.',
  },
  {
    icon: Zap,
    title: 'Multi-event analytics',
    desc: 'Running 3 events simultaneously? Tag all meetings by event. Analytics shows hours per event, vendor density by week, and whether pre-event setup weeks are overloaded.',
  },
]

const EVENT_TIMELINE = [
  { time: 'T-90 days', action: 'Apply event template. Venue confirmed, speaker outreach, sponsor deadline all on calendar. No milestone can slip unnoticed.' },
  { time: 'T-60 days', action: '"Catering proposal call thursday 11am, 45 mins, Oak Street Catering." Voice-added after venue confirmation. Vendor meeting on calendar immediately.' },
  { time: 'T-30 days', action: 'Analytics: how many vendor meetings this week? Is pre-event workload manageable across multiple events? Adjust now, not at T-7.' },
  { time: 'T-7 days', action: 'Final walkthrough, AV test, staff briefing all templated. Run-of-show draft on calendar. Rehearsal blocked. Day-of timeline built.' },
  { time: 'Day of', action: 'Every team member\'s calendar shows the run-of-show. Setup, registration, sessions, breaks, teardown — all visible. No one asks "what time is the keynote?"' },
]

export default function ForEventCoordinatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Event Coordinators"
        title={
          <>
            Every milestone tracked.
            <br />
            <em className="not-italic text-gold">Every vendor scheduled.</em>
          </>
        }
        lede="Event coordinators manage hundreds of moving parts across venues, vendors, speakers, and staff — often for multiple events simultaneously. Momenties templates every event type, tracks vendor time by event, and puts the run-of-show where it belongs: on the calendar."
        crumbs={[{ label: 'For Event Coordinators' }]}
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
            Event templates
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Team plan from $9/person/month</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How event coordinators use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for event management.</h2>
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

      {/* Event timeline */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Event lifecycle</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">T-90 to day-of with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {EVENT_TIMELINE.map((step, i) => (
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
                &ldquo;I coordinate 8-12 events a year. Before Momenties I had everything in spreadsheets and my calendar was a mess. Now every vendor meeting is tagged to the event, and I can see at a glance if April is going to be insane.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">M</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Maya S.</div>
                  <div className="text-xs text-muted-foreground">Corporate event coordinator, 10 events/year</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Every event. Every milestone. On calendar."
        subtitle="Event templates, vendor scheduling, team coordination, and run-of-show tracking. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See templates', href: '/calendar-templates' }}
      />
    </>
  )
}
