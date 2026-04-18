import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Home, Clock, BarChart3, Zap, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Real Estate Agents — Showing scheduling, client pipeline, and deal analytics',
  description:
    'Real estate agents schedule dozens of showings, inspections, closings, and client follow-ups. Momenties makes every appointment instant, tracks pipeline time by client, and surfaces double-booking risks before they happen.',
  alternates: { canonical: '/for/real-estate-agents' },
  openGraph: {
    title: 'Momenties for Real Estate Agents',
    description: 'Showing scheduling at speed. Pipeline time tracked.',
    url: '/for/real-estate-agents',
    type: 'website',
  },
}

const PAIN_POINTS = [
  {
    icon: Home,
    problem: 'Scheduling 8 showings across 3 properties in one afternoon',
    fix: 'Natural language input stacks showings fast: "Showing 123 Oak St saturday 10am, 45 mins." Repeat for each property. All created, tagged, and visible in under 2 minutes.',
  },
  {
    icon: Clock,
    problem: 'Double-booking showings with inspections and closings',
    fix: 'Calendar view shows all appointments in one place. Conflicts are visible before they happen. Never walk a client into a showing you\'re not available for.',
  },
  {
    icon: BarChart3,
    problem: 'No visibility into how much time each client is actually taking',
    fix: 'Tag every appointment by client. Analytics shows hours per client over the past month. See which buyers are consuming 60% of your time — inform your prioritization.',
  },
  {
    icon: Zap,
    problem: 'Listing appointments, inspections, and closing dates scattered across texts and notes',
    fix: 'Voice-add every date as it\'s confirmed: "Inspection 456 Pine Ave thursday 9am." On calendar, tagged, linked to the transaction. Nothing lost in a thread.',
  },
]

const AGENT_WORKFLOW = [
  { time: 'Monday', action: '6 showings across 3 properties. All added via voice during Sunday prep. Driving routes and timing visible at a glance.' },
  { time: 'Listing accepted', action: '"Inspection date thursday 9am, appraisal tuesday 2pm, closing estimated april 15." Three events, one voice session.' },
  { time: 'Client call', action: 'New buyer wants to see 4 properties. Availability overlay shows free windows. Showings scheduled before the call ends.' },
  { time: 'Week review', action: 'Analytics: 22 showings, 4 inspections, 1 closing this week. 40% of time to one buyer. Recalibrate next week.' },
  { time: 'Pipeline close', action: 'Closing day blocked, commute time added, celebration dinner scheduled. All in the same calendar.' },
]

export default function ForRealEstateAgentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Real Estate"
        title={
          <>
            Every showing scheduled.
            <br />
            <em className="not-italic text-gold">No double-booking.</em>
          </>
        }
        lede="Real estate agents run on appointments — showings, inspections, closings, and client calls. Momenties makes every appointment instant to schedule, impossible to double-book, and easy to analyze by client or transaction."
        crumbs={[{ label: 'For Real Estate Agents' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · Mobile-first · Works while you drive</p>
      </PageHero>

      {/* Pain points */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What we solve</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four real estate calendar problems.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {PAIN_POINTS.map((item, i) => (
              <Reveal key={item.problem} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <item.icon className="h-4 w-4 text-gold" />
                  </div>
                  <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-2">Problem</p>
                  <p className="text-sm text-muted-foreground mb-3">{item.problem}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/90 leading-relaxed">{item.fix}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Agent workflow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A real estate week with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {AGENT_WORKFLOW.map((step, i) => (
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

      {/* Voice scheduling callout */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I add showings by voice while I'm driving between properties. By the time I arrive at the next showing, the appointment is already on my calendar. I used to do this at red lights with my thumbs.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">James K.</div>
                  <div className="text-xs text-muted-foreground">Residential real estate agent, 12 years</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Schedule faster. Close more. Miss nothing."
        subtitle="Voice input, client analytics, and conflict detection. Built for agents who move fast."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See voice input', href: '/features/voice' }}
      />
    </>
  )
}
