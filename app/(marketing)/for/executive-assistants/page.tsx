import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Zap, Users, Clock, BarChart3, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Executive Assistants — Schedule at speed, manage multiple executives, and never miss a deadline',
  description:
    'Executive assistants schedule dozens of meetings per week, manage multiple executive calendars, coordinate travel, and track deadline-driven tasks. Momenties captures scheduling requests in seconds, manages multi-exec coordination, and keeps deadline visibility always current.',
  alternates: { canonical: '/for/executive-assistants' },
  openGraph: {
    title: 'Momenties for Executive Assistants',
    description: 'Multi-exec scheduling, deadline tracking, and calendar management for executive assistants.',
    url: '/for/executive-assistants',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Zap,
    title: 'Schedule in seconds, not minutes',
    desc: '"Board meeting prep call, tuesday 3pm 45 mins, conference room." "Investor update with Sarah and Tom, thursday 10am." Voice or text — captured in under 10 seconds. The exec\'s next meeting is on the calendar before the current one ends.',
  },
  {
    icon: Users,
    title: 'Multi-executive calendar management',
    desc: 'Manage calendars for 2–4 executives from one view. Tag every event by executive. See conflicts across all calendars simultaneously. Schedule a joint meeting: find the slot that works for all of them in one view.',
  },
  {
    icon: Clock,
    title: 'Deadline and task visibility',
    desc: '"Board deck due — friday 9am." "Quarterly earnings prep — exec team, must be complete by thursday EOD." "Travel booking deadline — SF summit, book by may 1." Every commitment visible on the calendar before it becomes urgent.',
  },
  {
    icon: BarChart3,
    title: 'Time distribution per executive',
    desc: 'Tag time spent per executive. Analytics shows hours per exec per week. If one executive is consuming 80% of your calendar time, that\'s visible before the workload becomes unsustainable.',
  },
]

const EA_WORKFLOW = [
  { time: 'Monday', action: 'Weekly briefing review — pull all upcoming events, deadlines, and travel for the week. Add any missing prep blocks. Flag conflicts. Send weekly view to each executive.' },
  { time: 'Scheduling', action: '"Board prep meeting, thursday 2pm 90 mins, ExecA." Voice-added from the email request. On calendar in 8 seconds. Reply drafted with the confirmation link. Never open the calendar app.' },
  { time: 'Travel coordination', action: '"Flight to NYC, tuesday departing 7am." "Hotel confirmation — NYC, tuesday-wednesday." "Car to JFK, tuesday 5am pickup." Full travel itinerary as calendar events. Nothing lives only in email.' },
  { time: 'Prep blocks', action: 'Every important meeting has a prep block 30 mins before — auto-templated. ExecA\'s investor call has a prep block. Board meeting has a 2-hour prep block the morning of.' },
  { time: 'Friday review', action: 'Analytics: time per executive this week. Any deadlines at risk next week? Prep blocks in place for all major meetings? Friday out the door with no outstanding scheduling.' },
]

export default function ForExecutiveAssistantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Executive Assistants"
        title={
          <>
            Every meeting scheduled.
            <br />
            <em className="not-italic text-gold">Nothing missed.</em>
          </>
        }
        lede="Executive assistants manage dozens of meetings per week across multiple executive calendars, coordinate travel, track deadline-driven commitments, and respond to scheduling requests in real time. Momenties captures every scheduling request in seconds, manages multi-exec views in one calendar, and keeps deadline visibility always current."
        crumbs={[{ label: 'For Executive Assistants' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/voice"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Voice scheduling
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Team plan from $9/person/month</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How executive assistants use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for executive calendar management.</h2>
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

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">EA weekly rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">An executive assistant&apos;s week with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {EA_WORKFLOW.map((step, i) => (
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

      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I support three executives and their combined calendars move constantly. Momenties voice scheduling means I can add meetings in 10 seconds from my phone while walking between offices. What used to take 5 minutes of back-and-forth in the calendar app now takes one sentence.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">M</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Michelle T.</div>
                  <div className="text-xs text-muted-foreground">Senior executive assistant, C-suite support</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What EAs manage in Momenties</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Everything an executive&apos;s calendar demands.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Multi-executive calendar view in one screen',
                'Voice scheduling from anywhere',
                'Travel itineraries as calendar events',
                'Prep blocks templated per meeting type',
                'Deadline tracking per executive',
                'Time distribution analytics per exec',
                'Conflict detection across exec calendars',
                'Google Calendar sync — real-time updates',
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
        title="Every executive on schedule. Every meeting ready."
        subtitle="Multi-exec calendar management, voice scheduling, and deadline tracking. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Voice scheduling', href: '/features/voice' }}
      />
    </>
  )
}
