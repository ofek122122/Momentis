import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Travel Planning Calendar — How to schedule travel so preparation happens before departure, not at the airport',
  description:
    'A travel planning calendar places visa and documentation deadlines 8 weeks before departure, sequences pre-departure tasks at T-30, T-14, T-7, and T-1 days, and builds a post-trip re-entry sequence that captures follow-ups before they expire. Most travel preparation failures happen because tasks are scheduled by arrival date rather than by deadline.',
  alternates: { canonical: '/travel-planning-calendar' },
  openGraph: {
    title: 'Travel Planning Calendar — Momenties',
    description: 'Schedule travel so preparation happens before departure, not at the airport.',
    url: '/travel-planning-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Visa and documentation deadlines placed 8 weeks before departure',
    desc: '"Visa application — T-8 weeks from departure." Visa and documentation deadlines placed 8 weeks before departure — not the week before. Visa processing times range from 2 to 10 weeks depending on destination and season. Visa applied for at T-2 weeks risks missing departure for processing delays. Passport renewal placed at T-12 weeks — 6-week processing time plus buffer. Each documentation deadline placed at its own required lead time, not at the travel date.',
  },
  {
    icon: Clock,
    title: 'Pre-departure task sequence placed at T-30, T-14, T-7, and T-1 days',
    desc: '"T-30 days: travel insurance purchased, vaccinations confirmed." "T-14 days: accommodations and transportation confirmed." "T-7 days: itinerary finalized, offline maps downloaded." "T-1 day: documents checked, notifications set, bag packed." Pre-departure sequence placed at specific T-minus milestones — not as a single day-of checklist. Each milestone placed at the latest time it can be completed without affecting the trip.',
  },
  {
    icon: BarChart3,
    title: 'Post-trip re-entry sequence placed before departure, not after return',
    desc: '"Return +24 hours: expense reports submitted." "Return +48 hours: follow-up emails from trip sent." "Return +72 hours: photos organized, notes captured." Post-trip sequence placed before departure — not scheduled when you land. Commitments made during a trip (follow-up calls, introduction requests, partnership conversations) have a 48-72 hour window before they lose momentum. Post-trip calendar placed before you leave ensures the window is used.',
  },
  {
    icon: Shield,
    title: 'Travel document expiry tracked with renewal lead times, not expiry dates',
    desc: '"Passport expiry — 10 years." "Many countries require 6 months validity at entry." "Renewal lead time: 8-12 weeks." Passport and visa tracking placed at renewal lead time, not at expiry date. A passport that expires in 4 months may not be valid for an entry requirement of 6 months validity. Travel document calendar places alert at actionable renewal time — not when the document expires.',
  },
]

const TRAVEL_STEPS = [
  {
    step: 'Place passport and travel document renewal windows before booking',
    detail: '"Passport renewal window — 8-12 weeks before expiry." Passport renewal placed at 12 weeks before expiry — not at expiry. Many countries require 6 months passport validity beyond departure date. Passport renewed at 3 months before expiry may not satisfy a 6-month entry requirement for a trip planned for 2 months out. Travel document validity checked at booking — not at departure.',
  },
  {
    step: 'Place visa and documentation deadlines at the required application lead time',
    detail: '"Visa application — T-8 weeks from departure date." Visa deadline placed based on processing time for the specific destination — not based on "apply in advance." Schengen visa: 3-4 weeks processing. India e-visa: 4-7 days. China tourist visa: 4-7 weeks. Each destination\'s documentation placed at its specific lead time, not at a generic T-4 weeks that ignores destination-specific requirements.',
  },
  {
    step: 'Build the pre-departure milestone sequence at T-30, T-14, T-7, and T-1',
    detail: '"T-30: travel insurance, vaccination appointments." "T-14: accommodation and transport confirmed, itinerary draft complete." "T-7: offline maps, currency, travel notifications to bank." "T-2: packing list completed." "T-1: documents printed, bag packed, transportation to airport confirmed." Milestone sequence placed when trip is booked — not planned the week before departure. Each milestone contains specific tasks, not just date reminders.',
  },
  {
    step: 'Place the post-trip follow-up sequence before departure',
    detail: '"Return +24 hours: expense report submitted." "Return +48 hours: follow-up emails sent from trip meetings." "Return +72 hours: introduction requests fulfilled from trip." "Return +7 days: trip retrospective and notes organized." Post-trip sequence placed before departure as a connected calendar chain. Commitments made during travel have the highest response rate in the 48-hour window after return. Post-trip sequence placed in advance ensures the window is not lost to re-entry overwhelm.',
  },
  {
    step: 'Place health and vaccination requirements at their specific lead times',
    detail: '"Yellow fever vaccination — T-10 days minimum before entry (effectiveness window)." "Malaria prophylaxis — T-7 days before departure (initiation window)." "TDAP booster — T-4 weeks if due." Health requirement lead times placed at their specific medical windows — not at T-2 weeks generically. Yellow fever must be administered at T-10 days for immunity to develop. Malaria prophylaxis started at T-3 days may not provide full protection at day 1 in a malaria-endemic region.',
  },
  {
    step: 'Build the annual travel document audit in January',
    detail: '"Annual passport and travel document audit — January, 30 minutes." Annual audit placed in January: passport expiry vs. planned travel, trusted traveler programs (TSA PreCheck, Global Entry, NEXUS) renewal status, travel vaccinations due, and frequent flyer status requirements. Annual audit identifies document issues with maximum lead time — not at trip booking when lead time may already be insufficient.',
  },
]

const TRAVEL_FAILURES = [
  { failure: 'Visa application scheduled at T-2 weeks rather than T-8 weeks', consequence: 'Visa applications submitted at T-2 weeks risk missing departure for processing delays that are outside the traveler\'s control. A Schengen visa submitted at T-14 days with 4-week typical processing creates a mathematical miss. The same visa submitted at T-8 weeks has a 6-week buffer. Visa deadline placed at T-8 weeks is not caution — it\'s the lead time that matches processing realities.' },
  { failure: 'Post-trip follow-ups scheduled after return when re-entry is already overwhelming', consequence: 'Follow-up commitments made during travel — introductions, partnership conversations, meeting requests — have a 48-72 hour response window where the other party remembers the conversation and is still warm. Follow-ups scheduled reactively after return compete with re-entry email volume. Post-trip calendar placed before departure ensures the follow-up block exists before re-entry overwhelm consumes it.' },
  { failure: 'Passport renewal tracked by expiry date rather than entry requirement', consequence: 'A passport that expires in 5 months satisfies the 5-month validity requirement for some destinations but fails the 6-month requirement for others. Tracking passport expiry by the expiry date misses destination-specific entry requirements. Passport calendar placed at 12 weeks before expiry — or at 7-8 months before expiry for travelers with near-term international plans — captures the entry requirement window that raw expiry dates miss.' },
  { failure: 'Pre-departure sequence planned the week before departure', consequence: 'Pre-departure planning done the week before departure compresses 4-week and 2-week tasks into 7 days. Travel insurance purchased at T-2 days may not cover pre-existing conditions or trip interruption for events that occurred before the policy start. Accommodations confirmed at T-5 days may be unavailable. Pre-departure sequence placed at trip booking — not planned reactively — gives each task its required lead time.' },
]

export default function TravelPlanningCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Travel Planning Calendar"
        title={
          <>
            Visas applied. Documents ready.
            <br />
            <em className="not-italic text-gold">Departure day is smooth, not a scramble.</em>
          </>
        }
        lede="Most travel preparation failures happen because tasks are scheduled by arrival date rather than by deadline — visa applications that need 8 weeks get started at 2, post-trip follow-ups that need 48 hours get scheduled at 2 weeks. A travel planning calendar places visa deadlines at their required application lead time, builds a pre-departure milestone sequence at T-30, T-14, T-7, and T-1, and places the post-trip follow-up sequence before departure — so every trip is prepared, not recovered from."
        crumbs={[{ label: 'Travel Planning Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/executives"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Momenties for executives
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties prevents travel preparation failures.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a travel planning calendar where preparation matches deadline requirements, not convenience.</h2>
          </Reveal>
          <div className="space-y-3">
            {TRAVEL_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four travel calendar patterns that produce departure day problems.</h2>
          </Reveal>
          <div className="space-y-3">
            {TRAVEL_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Travel analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for travel planning discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Passport and travel document expiry with entry requirement buffers',
                'Visa application submitted at required lead time',
                'Pre-departure milestone sequence completion rate',
                'Travel insurance purchased before T-7 days',
                'Post-trip follow-up sequence completion rate',
                'Health and vaccination requirement lead time adherence',
                'Annual travel document audit completion',
                'Global Entry and trusted traveler renewal windows',
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
        title="Visas applied. Documents ready."
        subtitle="Visa lead time calendar, T-minus pre-departure sequence, travel document tracking, and post-trip follow-up cadence. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for executives', href: '/for/executives' }}
      />
    </>
  )
}
