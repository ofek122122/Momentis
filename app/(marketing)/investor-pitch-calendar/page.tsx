import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Investor Pitch Calendar — how to structure a fundraising process so you control the timeline instead of reacting to investor availability',
  description:
    'A fundraising process without a calendar structure becomes a 6-month drift where the founder is always waiting for the next meeting. This guide covers how to compress a seed or Series A timeline to 6-8 weeks by controlling first meeting timing, how to run parallel investor tracks so you are never dependent on one conversation, how to use the term sheet deadline to create urgency without burning relationships, and how to structure the post-close operating cadence so momentum from the raise carries into execution.',
  alternates: { canonical: '/investor-pitch-calendar' },
  openGraph: {
    title: 'Investor Pitch Calendar',
    description: 'Structure a fundraising process so you control the timeline instead of reacting to investor availability.',
    url: '/investor-pitch-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'Start all first meetings in the same 2-week window — not as investors respond',
    desc: 'A fundraising process that starts meetings as investors respond to outreach produces a 6-month process where the most interested investor closes before the last investor has finished diligence. Compressing first meetings into a 2-week window creates parallel processes that reach decision points simultaneously — which is the condition required for a competitive dynamic and a real deadline. The outreach goes out in a single batch. First meetings are scheduled in weeks 3-4 (allowing 2 weeks for responses). Second meetings and diligence are weeks 5-8. The target close date is set before the outreach goes out, and all investor communication references it.',
  },
  {
    icon: Clock,
    title: 'Parallel tracks: minimum 8 investors active simultaneously at every stage',
    desc: 'A fundraising process that goes deep on one investor before starting conversations with others is a process where one investor controls the timeline and the terms. Parallel tracks — maintaining at minimum 8 active investor conversations at every stage of the process — ensure that no single investor relationship is load-bearing. When an investor goes dark or passes, a parallel track replaces them without restarting the process. The 8-investor minimum at every stage is a calendar discipline: if the active count falls below 8 at first meeting stage, the next batch of outreach goes out the same week, not the week after the next meeting.',
  },
  {
    icon: BarChart3,
    title: 'The term sheet deadline creates urgency without burning the relationship',
    desc: 'A term sheet without a deadline produces a process where the investor controls the signing timeline. The term sheet deadline — "we are aiming to close in X days and need a signed term sheet by [date] to proceed" — is communicated at the second meeting, before a term sheet is issued. The deadline is real: it is tied to the company\'s close date, not to competitive pressure that may not exist. A founder who sets a deadline they are not willing to enforce trains investors that deadlines are negotiating theater. The deadline is set when the close date is set — both go on the calendar at the start of the process.',
  },
  {
    icon: Users,
    title: 'The post-close operating calendar converts fundraising momentum into execution',
    desc: 'A fundraising process that ends at wire receipt produces a team that goes from high-intensity external focus to operational uncertainty without a structured transition. The post-close operating calendar is set in the week after close: new investor update cadence (monthly for seed, quarterly for Series A), first board meeting date and format, 90-day operating plan with specific milestones, and the next fundraising process start date (for companies planning sequential rounds). The transition from fundraising mode to execution mode is a calendar event, not a natural decompression. The 90-day plan is agreed with lead investors before the wire closes.',
  },
]

const CALENDAR_RHYTHM = [
  { time: 'Week 1–2', action: 'Process setup: target raise amount and valuation anchor set. Close date determined — 8 weeks from outreach batch. Investor target list built: 20-30 names tiered by fit (A-list — top 8, B-list — next 12, C-list — remaining 10). First meetings target: 15-20 investors in the first wave. Investor materials finalized: deck, data room (financial model, cap table, key metrics dashboard), and reference list. Outreach batch drafted — personalized but templated: one-sentence company description, ask, and calendar link for first meetings in weeks 3-4.' },
  { time: 'Week 3–4', action: 'First meeting window: all first meetings scheduled in this 2-week period. Meeting format: 45-60 minutes. Agenda: founder story and team (10 min), problem and market (10 min), solution and traction (15 min), ask and use of funds (5 min), questions (10 min). No deck during first meeting — deck is the follow-up. After each first meeting: immediate 48-hour follow-up decision. Move to second meeting track (active interest), park for 30 days (uncertain interest), or close the track (no fit). Active track count target after first meetings: 8-12 investors in second meeting stage.' },
  { time: 'Week 5–6', action: 'Second meetings and diligence: investor-led process. Partner meetings for institutional funds. Reference calls — provide reference list proactively before asked. Data room access granted upon request — not proactively. Second meeting follow-up: within 24 hours. Term sheet conversations: at end of second meetings where interest is clear, surface the close date and ask directly: "Are you planning to move toward a term sheet?" Active process update: weekly check on total active investor count. If below 8, B-list outreach goes out the same week.' },
  { time: 'Week 7', action: 'Term sheet negotiation window: term sheets expected this week. Major negotiable terms: valuation cap/price, pro-rata rights, board composition, information rights, and protective provisions. For each term sheet received: 48-hour acknowledgment, 72-hour counter if needed. Communicate term sheet receipt to all active investors without naming the term sheet investor — this is the moment the competitive dynamic materializes. Use of competitive interest: "We have received a term sheet and are evaluating. Given your interest, we wanted to give you the opportunity to submit a term sheet this week if you are moving in that direction." This communication is a calendar event, not a spontaneous call.' },
  { time: 'Week 8', action: 'Close: term sheet signed. Legal documentation begins. Closing call with all investors — lead investor terms. Close date confirmed. For non-lead investors: "We have signed a term sheet with our lead and are filling the round over the next two weeks." Post-close items placed on the calendar before wire closes: investor update template created and first update date set, first board meeting scheduled (within 30 days), 90-day operating plan shared with lead investor for comment, and next fundraising process start date set (for sequential round companies).' },
  { time: 'Post-close', action: '30-day post-close review: investor update sent (month 1 — covers close context, team status, key metrics at close, 90-day milestones). First board meeting held. Operating plan baseline set. For founders who raised seed and are planning Series A: the Series A readiness checklist is built now — specific metrics targets, team milestones, and revenue thresholds required for Series A are documented and placed on the calendar with quarterly review checkpoints. The investor pitch calendar for Series A starts 12 months before the anticipated raise, not 3 months before.' },
  { time: 'Investor updates', action: 'Monthly investor updates (seed-stage): 3-section format: (1) Wins — one to three specific achievements in the month with numbers, (2) Challenges — one to two specific challenges with what the team is doing about them, (3) Asks — zero to two specific asks where an investor could help. Monthly updates take 20 minutes to write when the format is fixed. Investors who receive consistent, honest monthly updates respond faster to warm intros, provide more useful feedback, and invest in follow-on rounds at higher rates than investors who receive infrequent, self-promotional updates.' },
]

export default function InvestorPitchCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Pitch Calendar"
        title={
          <>
            All first meetings in a 2-week window. 8 active tracks minimum.
            <br />
            <em className="not-italic text-gold">Term sheet deadline set before outreach goes out. Close in 8 weeks.</em>
          </>
        }
        lede="A fundraising process without a calendar structure becomes a 6-month drift where the founder is always waiting. The investor pitch calendar compresses seed and Series A timelines to 8 weeks: outreach in a single batch, all first meetings in weeks 3-4, parallel tracks of 8+ active investors at every stage, term sheet window in week 7, and post-close operating calendar set before wire closes. Momenties structures the full investor pitch calendar so the founder controls the timeline."
        crumbs={[{ label: 'Investor Pitch Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/investor-update-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Investor updates
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card required</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Investor pitch calendar principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four design principles for a fundraising calendar that compresses the raise and keeps the founder in control of the timeline.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Investor pitch calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From process setup through the post-close investor update cadence that converts fundraising momentum into execution.</h2>
          </Reveal>
          <div className="space-y-3">
            {CALENDAR_RHYTHM.map((step, i) => (
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
                &ldquo;Our first seed raise took nine months. We started meetings as investors responded to outreach, went deep on one at a time, waited for each process to complete before starting the next, and ended up with a close that happened on the investor&apos;s timeline, not ours. The second raise — pre-Series A bridge — we built the calendar first. All outreach went out in a single batch on a Monday. First meetings were scheduled only in weeks 3 and 4 — nothing earlier, nothing later. We had 14 first meetings in two weeks, 9 second meetings in weeks 5-6, and received two term sheets in week 7. Closed in 8 weeks. The investors who signed the term sheet told us the compressed timeline with a real close date is what made them move. The calendar structure produced the competitive dynamic that the previous raise had never created.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">Z</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Zara H.</div>
                  <div className="text-xs text-muted-foreground">CEO and co-founder, B2B SaaS company, two fundraising rounds in 18 months</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the investor pitch calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every process milestone and accountability event in a structured 8-week fundraising calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Close date and term sheet deadline — set before outreach goes out',
                'Outreach batch — single send, weeks 1-2, all investors simultaneously',
                'First meeting window — all meetings in weeks 3-4, no exceptions',
                '8-investor minimum — B-list outreach triggered when active count drops below 8',
                'Term sheet competitive communication — calendar event in week 7',
                'Post-close operating calendar — set before wire closes',
                'First board meeting — within 30 days of close',
                'Monthly investor updates — 3-section format, consistent cadence',
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
        title="Fundraising timelines controlled by the founder — not the investor."
        subtitle="8-week close calendar: single outreach batch, 2-week first meeting window, 8-investor parallel tracks, term sheet deadline set at process start, post-close operating calendar. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Investor update calendar', href: '/investor-update-calendar' }}
      />
    </>
  )
}
