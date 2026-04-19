import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accountability Partner Calendar — How to structure accountability check-ins that produce follow-through',
  description:
    'An accountability partner calendar places check-ins at the action commitment level — not the aspiration level, schedules check-ins at intervals short enough that drift is surfaced before it compounds, uses a fixed update format so check-ins stay focused rather than becoming social calls, and places quarterly relationship reviews to adjust the accountability structure as goals evolve.',
  alternates: { canonical: '/accountability-partner-calendar' },
  openGraph: {
    title: 'Accountability Partner Calendar — Momenties',
    description: 'Structure accountability check-ins that produce follow-through.',
    url: '/accountability-partner-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Check-in commitments placed at the action level, not the goal level',
    desc: '"This week I will: [specific action, day, duration]. Check-in: [day + 3 days]." Check-in commitments placed at the specific action level — not the aspiration level. "I will work on my book" is not a check-in commitment. "I will write for 45 minutes on Tuesday and Thursday before 8 AM" is a check-in commitment. Action-level commitments are verifiable — the person either wrote on Tuesday or did not. Goal-level commitments are interpretable — the person decides in retrospect whether their week qualified as "working on the book." Verifiable commitments produce honest check-ins; interpretable commitments produce reported compliance that does not reflect actual progress.',
  },
  {
    icon: Clock,
    title: 'Check-in interval short enough to surface drift before it compounds',
    desc: '"Check-in: [every 7 days for active goals, every 14 days for maintenance goals]." Check-in interval matched to the momentum risk of the goal. Weekly check-ins for active goals in the first 90 days — the window when habits form and behavioral drift is most likely to compound. Biweekly check-ins for maintenance goals where the habit is established and the check-in serves as a continuity signal. Monthly check-ins produce too much drift — a person who misses their commitment in week 1 has 3 more weeks before the accountability signal arrives, by which time the miss has often generalized. 7-day check-in intervals catch a single missed week before it becomes a pattern.',
  },
  {
    icon: BarChart3,
    title: 'Fixed update format for every check-in — what I committed, what I did, what changed',
    desc: '"Check-in format: [committed action], [actual completion %], [blocker if < 80%], [this week commitment]." Fixed update format used for every check-in. A 3-field update — committed, actual, next commitment — takes 90 seconds to write and 60 seconds to read. Open-ended accountability check-ins expand into social calls or coaching conversations rather than accountability conversations. The format difference is visible in what gets said versus what gets changed: open-ended check-ins produce conversation, fixed-format check-ins produce accountability. A check-in format that includes the next week commitment ensures that the accountability cycle extends forward, not just backward.',
  },
  {
    icon: Shield,
    title: 'Quarterly accountability relationship review to adjust the structure as goals evolve',
    desc: '"Quarterly review: [Q end + 1 week]. Review: goal alignment, check-in format, interval, mutual value." Quarterly relationship review placed to evaluate whether the accountability structure is still matched to the current goals. Accountability relationships that are not reviewed drift toward one of two failure modes: social calls where accountability is implicit but never measured, or increasingly obligatory check-ins where both parties have outgrown the original commitment structure. Quarterly review asks: are the goals still the right goals? is the check-in format producing useful information? is the interval appropriate? is the relationship mutually valuable? Accountability relationships that are annually reviewed survive longer and produce more follow-through than those that run indefinitely without structure evaluation.',
  },
]

const ACCOUNTABILITY_STEPS = [
  {
    step: 'Define the specific commitment at the start of every accountability cycle',
    detail: '"Cycle commitment: [goal domain], [specific action], [frequency], [measure of success]." Specific commitment defined at the start of each accountability cycle — not carried implicitly from the prior cycle. Commitment definition asks: what is the specific action (not the goal)? what is the frequency and duration? what does success look like at the end of the cycle? Accountability partnerships that carry implicit commitments forward from prior cycles lose precision — both parties have slightly different mental models of what was committed, and check-ins measure commitment to a mental model rather than to a specific stated action. New cycle, new explicit commitment.',
  },
  {
    step: 'Place check-ins on the calendar at cycle start — do not schedule check-ins reactively',
    detail: '"Check-ins scheduled: [cycle start date + 7 days, recurring weekly/biweekly for cycle duration]." All check-ins for the accountability cycle placed on the calendar at cycle start. Accountability check-ins that are scheduled reactively — "let&apos;s find a time this week" — are skipped when either party is busy, which is exactly when accountability is most needed. A person who missed their commitment on Monday is most likely to want to avoid a check-in on Friday. Pre-scheduled check-ins remove the scheduling friction that creates avoidance opportunities. The check-in happens because it is on both calendars, not because both parties are sufficiently motivated to schedule it.',
  },
  {
    step: 'Send the written update before the check-in call — do not use the call to share the update',
    detail: '"Written update due: [check-in time - 2 hours]. Check-in call: review and next commitment only." Written update sent 2 hours before each check-in call. The call is used to discuss the update and set the next commitment — not to read the update aloud. Accountability calls in which the committed person shares their update verbally during the call are less honest than accountability calls in which the update was written before the call. Written updates are harder to soften in real-time social interaction — a person writing "completed 2 of 4 planned sessions" cannot observe their partner&apos;s face and adjust the number upward. Writing the update in advance locks in the honest number.',
  },
  {
    step: 'Distinguish between a miss and a skip — and track both',
    detail: '"Outcome: [completed], [miss — [reason]], [skip — [reason]]." Distinction maintained between a miss (committed and did not complete) and a skip (did not attempt). A miss requires a cause analysis — what specifically prevented completion? A skip requires a commitment renewal — why was the action not attempted? Partners who treat misses and skips as equivalent produce accountability conversations that conflate inability with avoidance. Misses are usually addressable — they surface specific blockers (time constraints, energy, environment) that can be solved. Skips are usually motivational — they surface goal misalignment that requires commitment re-evaluation.',
  },
  {
    step: 'Place a mid-cycle commitment adjustment conversation if pace is 50% or less at the midpoint',
    detail: '"Mid-cycle check: [cycle midpoint]. If pace < 50%: adjustment conversation." Mid-cycle adjustment conversation triggered if completion rate is below 50% at the cycle midpoint. Accountability partnerships that continue without pace adjustment when a person is significantly behind on their commitment produce the worst of both outcomes: the committed person feels ongoing accountability pressure without changing behavior, and the partner continues investing check-in time without outcome. A mid-cycle adjustment conversation asks: is the commitment the right size? is the goal still the right goal? should the cycle be paused or reset? Adjustment at the midpoint preserves the relationship by matching the accountability structure to reality rather than to the original aspiration.',
  },
  {
    step: 'Track accountability streaks — completed cycles, not just individual check-ins',
    detail: '"Accountability streak: [consecutive cycles with ≥ 80% completion]. Current streak: [N cycles]." Accountability streaks tracked at the cycle level — consecutive cycles with 80% or better completion rate, not individual check-ins. Cycle-level streaks capture the sustained behavioral pattern that individual check-ins cannot — a person can miss 2 check-ins in a cycle and still complete 80% of their commitment. Tracking streaks converts accountability from a duty into a signal: a 3-cycle streak means the commitment is achievable and the relationship is working. A broken streak means something has changed — goal, capacity, relationship dynamic — that requires examination at the next quarterly review.',
  },
]

const ACCOUNTABILITY_FAILURES = [
  { failure: 'Goal-level commitments — interpretable rather than verifiable, honest check-ins impossible', consequence: 'Accountability partnerships structured around goal-level commitments produce systematic overreporting of compliance. A person who committed to "working on my project" and worked for 20 minutes once in the week will report "yes" to "did you work on your project" — technically true, operationally meaningless. The accountability partner has no basis for challenge because the commitment was not specific enough to verify. Interpretable commitments produce social compliance signals rather than behavioral accountability — both parties feel the accountability relationship is functioning because check-ins are occurring, but the check-ins are not producing behavioral change.' },
  { failure: 'Monthly check-ins — drift compounds before it is surfaced, patterns established before accountability signal arrives', consequence: 'Monthly accountability check-ins allow 3-4 weeks of behavioral drift to accumulate before the accountability signal arrives. A person who abandons their commitment in week 1 has 3 weeks before the check-in — enough time to develop a rationalization, reduce goal salience, and establish a new behavioral pattern that excludes the commitment. Monthly check-ins are too slow to surface drift at the moment when it is most correctable — the first missed week. The interval between a commitment miss and an accountability signal should be shorter than the typical rationalization development window (5-10 days). Weekly check-ins surface drift in the correction window; monthly check-ins surface drift after the pattern is established.' },
  { failure: 'Social call drift — accountability conversations become support conversations without behavioral change', consequence: 'Accountability partnerships without a fixed check-in format drift toward social support conversations — both parties discuss challenges, provide encouragement, and maintain connection without specifically measuring commitment follow-through. The transition is gradual: early check-ins are accountability-focused, then a difficult week produces a supportive conversation, then supportive conversations become the norm and accountability is implicit rather than explicit. The partnership produces relational value but not behavioral accountability. A person with a supportive accountability partner who does not measure follow-through will maintain a pleasant relationship and may not change their behavior. A fixed check-in format prevents this drift by ensuring that the committed action is measured every session.' },
  { failure: 'No quarterly review — accountability structure calcifies around initial goals, mutual value declines', consequence: 'Accountability partnerships without quarterly reviews calcify around the initial commitment structure. Goals evolve, capacity changes, and the original commitment may become misaligned with current priorities — but without a review mechanism, both parties continue the original check-in cadence by obligation rather than alignment. Partners whose goals have diverged continue scheduling check-ins because ending the relationship feels like abandonment. Partners whose commitment structure has become too easy or too hard continue unchanged because there is no natural evaluation moment. Quarterly reviews provide the structural permission to adjust — to increase commitment, decrease frequency, shift goal domain, or formally close an accountability cycle that has served its purpose.' },
]

export default function AccountabilityPartnerCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Accountability Partner Calendar"
        title={
          <>
            Commitments at the action level. Check-ins before drift compounds.
            <br />
            <em className="not-italic text-gold">Written update before the call. Quarterly structure review.</em>
          </>
        }
        lede="Accountability partnership failures are mostly structure failures. An accountability partner calendar places commitments at the specific action level (not the aspiration level), schedules check-ins at 7-day intervals so drift is surfaced before it compounds, uses a fixed 3-field update format to prevent social call drift, requires written updates 2 hours before each check-in so honesty is preserved, and places a quarterly relationship review to adjust the structure as goals evolve — so the accountability partnership produces follow-through rather than pleasant conversation."
        crumbs={[{ label: 'Accountability Partner Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/goal-setting-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Goal setting calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures the accountability partner calendar so check-ins produce behavioral change.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build an accountability partner calendar that produces follow-through, surfaces drift early, and maintains honest measurement.</h2>
          </Reveal>
          <div className="space-y-3">
            {ACCOUNTABILITY_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four accountability partnership patterns that produce conversation rather than follow-through.</h2>
          </Reveal>
          <div className="space-y-3">
            {ACCOUNTABILITY_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Accountability calendar analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for accountability partner calendar discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Commitment completion rate (% of weekly committed actions completed)',
                'Check-in attendance rate (% of scheduled check-ins held)',
                'Written update send rate (% sent 2+ hours before check-in)',
                'Consecutive cycle streak (cycles with ≥80% completion)',
                'Miss versus skip ratio (inability vs. avoidance)',
                'Mid-cycle adjustment triggers (pace <50% at midpoint)',
                'Quarterly review completion rate',
                'Commitment specificity score (action-level vs. goal-level)',
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
        title="Action-level commitments. Weekly check-ins. Written updates before the call."
        subtitle="Accountability partnership structure, commitment tracking, drift detection, and quarterly relationship reviews. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Goal setting calendar', href: '/goal-setting-calendar' }}
      />
    </>
  )
}
