import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Conference Planning Calendar — Annual conference attendance that earns CE and advances your career',
  description:
    'Attending conferences without a planning calendar produces expensive, uncoordinated CE that leaves gaps. A conference planning calendar identifies CE credits by category before registration, places travel and preparation windows in advance, and ensures conference attendance contributes to credential renewal goals — not just professional networking.',
  alternates: { canonical: '/conference-planning-calendar' },
  openGraph: {
    title: 'Conference Planning Calendar — Momenties',
    description: 'Plan annual conference attendance to maximize CE credits and career impact.',
    url: '/conference-planning-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Users,
    title: 'CE credit mapping before registration',
    desc: 'Professionals who book conference sessions based on interest rather than CE credit often arrive home with 12 CE hours in one category and zero in the categories needed for renewal. Map available sessions to CE categories before registering. Tag planned sessions by credential category. Conference attendance becomes targeted CE delivery — not an expensive 3-day opportunity to attend sessions indiscriminately.',
  },
  {
    icon: Clock,
    title: 'Travel and preparation windows placed in advance',
    desc: '"Conference — [city], [date range]." "Pre-conference travel — day before, flights and hotel." "Conference prep — week before: review agenda, book sessions, pack CE documentation." "Post-conference debrief — day after return, 2 hours." Travel and preparation placed as calendar blocks when registration is confirmed. No preparation scramble two days before departure.',
  },
  {
    icon: BarChart3,
    title: 'Annual conference CE contribution analytics',
    desc: 'Professionals who attend the same conferences annually rarely analyze how much of their total annual CE each conference delivers. Analytics shows: percentage of annual CE requirement satisfied by each conference, CE category distribution from conference versus online learning, and whether conference attendance is covering gaps or reinforcing categories already satisfied. Conference ROI becomes visible.',
  },
  {
    icon: Shield,
    title: 'Multi-year conference calendar planned proactively',
    desc: '"Annual flagship conference — same week every year, block in January." "Regional conference — biennial, alternating spring." "International conference — 3-year, when it falls on this continent." Multi-year conference planning prevents "I forgot to register before it sold out." Major conferences placed on the calendar 12–18 months in advance. Early registration rates captured.',
  },
]

const CONFERENCE_STEPS = [
  {
    step: 'Load the annual conference calendar in January',
    detail: 'Every conference you attend annually: placed in January for the current year. Date, city, estimated duration, credential CE value, and registration deadline. Early registration windows placed as separate calendar alerts 6–8 weeks before each conference. Registration deadlines not missed because they are never discovered late.',
  },
  {
    step: 'Map sessions to CE categories before registering',
    detail: 'Review the conference agenda as soon as it is released. Tag sessions by CE category or credential domain. Identify which sessions satisfy your current CE gaps. Build the conference session plan around CE needs first, professional interest second. Where CE needs are fully covered, optimize for networking and learning.',
  },
  {
    step: 'Place pre-conference preparation blocks',
    detail: '"Conference prep — [conference name], week before: agenda finalized, sessions booked, accommodation confirmed, CE documentation ready." Placed immediately when conference is registered. Preparation is not done the morning of departure — it is a distinct calendar block.',
  },
  {
    step: 'Track CE at the session level during attendance',
    detail: '"[Session name] — [conference day], [hours], [CE category]." Log each session on the day it is attended. CE documentation is accurate and complete on the last day of the conference — not reconstructed from memory 3 weeks later when submitting renewal applications.',
  },
  {
    step: 'Place post-conference debrief and CE entry',
    detail: '"Post-conference debrief — [conference name], day after return, 90 minutes." Review CE log for completeness. Enter CE into credential tracking counters. Identify follow-up actions from sessions. Write 3 bullets on what changed. The debrief converts attendance into credentialed professional development.',
  },
  {
    step: 'Evaluate and set conference calendar for next year',
    detail: '"Annual conference planning review — december, 45 minutes." What did this year\'s conferences contribute? Which produced the highest CE value? Which produced the most professional development value? Which are worth attending again next year? Next year\'s conference calendar updated in December based on this year\'s data.',
  },
]

const CONFERENCE_FAILURES = [
  { failure: 'Conference registered, no preparation block placed', consequence: 'Preparation happens the night before. Session plan improvised on arrival. CE documentation incomplete. Some attended sessions not logged. CE value realized is 60% of CE value available.' },
  { failure: 'Sessions chosen by interest, not CE need', consequence: 'Conference CE is concentrated in areas already satisfied. Gaps remain unfilled. CE that was available in conference sessions must be sourced from paid online courses later.' },
  { failure: 'CE logged from memory after returning', consequence: 'Session titles confused, CE hours underestimated. Documentation incomplete for renewal submission. Some CE that was earned is not claimed because reconstruction is imperfect.' },
  { failure: 'Annual conferences not pre-blocked for next year', consequence: 'Registration opens while calendar is full. Early registration window missed. Conference is attended with last-minute booking at premium travel cost — or missed entirely.' },
]

export default function ConferencePlanningCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Conference Planning Calendar"
        title={
          <>
            Conferences planned. CE captured.
            <br />
            <em className="not-italic text-gold">Registration never missed.</em>
          </>
        }
        lede="Attending conferences without a planning calendar produces expensive CE that doesn't match renewal needs. A conference planning calendar maps sessions to CE categories before registration, places travel and preparation windows when registration is confirmed, and logs CE at the session level during attendance — so every conference produces maximum credential value."
        crumbs={[{ label: 'Conference Planning Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/annual-planning-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Annual planning calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties maximizes conference CE value.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Six steps</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to plan conference attendance for maximum CE value.</h2>
          </Reveal>
          <div className="space-y-3">
            {CONFERENCE_STEPS.map((item, i) => (
              <Reveal key={item.step} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-6 shrink-0 pt-0.5 text-center">{i + 1}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">{item.step}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Common failures</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four conference planning patterns that waste CE opportunity.</h2>
          </Reveal>
          <div className="space-y-3">
            {CONFERENCE_FAILURES.map((item, i) => (
              <Reveal key={item.failure} delay={i * 40}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <h3 className="text-sm font-medium text-foreground mb-1">{item.failure}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.consequence}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Conference analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for conference CE effectiveness.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CE earned per conference — by category',
                'Percentage of annual CE from conference vs. online',
                'CE category gap coverage by conference',
                'Pre-conference preparation completion rate',
                'Post-conference debrief completion rate',
                'Session-level CE documentation completeness',
                'Early registration capture rate',
                'Conference CE ROI vs. registration cost',
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
        title="Conferences planned. CE captured."
        subtitle="Conference CE tracking by category, session-level documentation, and annual conference planning calendar. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Annual planning calendar', href: '/annual-planning-calendar' }}
      />
    </>
  )
}
