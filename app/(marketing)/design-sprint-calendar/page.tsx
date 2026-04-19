import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Design Sprint Calendar — how to structure a 5-day design sprint that produces a testable prototype instead of a week of meetings',
  description:
    'A design sprint without a calendar structure produces five days of workshops that do not converge on a testable answer. This guide covers how to set the sprint challenge before Monday begins, the right structure for each day so the sprint does not stall at ideation, how to select the right users for Friday testing to get actionable signal, and how to run the post-sprint decision meeting so sprint output converts to product roadmap changes.',
  alternates: { canonical: '/design-sprint-calendar' },
  openGraph: {
    title: 'Design Sprint Calendar',
    description: 'Structure a 5-day design sprint that produces a testable prototype.',
    url: '/design-sprint-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'Define the sprint question before Monday — not on Monday morning',
    desc: 'A sprint question defined on Monday morning produces a Monday spent on alignment that should have happened before the sprint began. The sprint question — specifically: what is the most important question this sprint will answer, what is the long-term goal the sprint is serving, and what specific user behavior the prototype will test — is set before the sprint starts. "Does our onboarding convert" is a research question. "Will users complete account setup if we move the \'connect calendar\' step to after the first event is created" is a sprint question. The sprint question is set in a pre-sprint call, not on sprint day one.',
  },
  {
    icon: Clock,
    title: 'Monday and Tuesday are divergent; Wednesday through Friday are convergent',
    desc: 'Sprints that try to converge too early produce prototypes that reflect the loudest voice in the room rather than the best idea. Sprints that stay divergent too long never produce a testable prototype. Monday maps the problem and lightning demos. Tuesday sketches solutions independently — no group brainstorming. Wednesday selects one solution for prototyping. Thursday builds the prototype. Friday tests with five users. The discipline is the schedule: each day has a specific outcome that cannot be deferred to the next day. A sprint that ends Thursday without a testable prototype has failed, regardless of the quality of the Tuesday sketches.',
  },
  {
    icon: BarChart3,
    title: 'Five users is enough — and the right five users matter more than the number',
    desc: 'Jakob Nielsen\'s 1993 research established that five users uncovers 85% of usability problems in a design. The sprint Friday test with five users is designed to surface qualitative signal on whether the sprint hypothesis holds, not to produce statistically significant results. The five users matter: they must match the specific user archetype the sprint question is targeting. If the sprint question is about enterprise user onboarding, testing with five freemium consumers produces five days of feedback on the wrong problem. User recruitment is a calendar event placed before the sprint begins — not a Thursday afternoon scramble.',
  },
  {
    icon: Users,
    title: 'The post-sprint decision meeting decides what goes on the roadmap',
    desc: 'A sprint without a post-sprint decision meeting produces prototype test data that the team discusses informally for two weeks and never converts into a roadmap change. The post-sprint decision meeting (Monday of the following week — 90 minutes) has one output: what changes on the product roadmap as a result of what the sprint learned. Three options: (1) validated — build this, add to roadmap with specific sprint, (2) promising but not validated — run another sprint or a longer user research cycle with a deadline, (3) invalidated — close the hypothesis, document why, and remove from future consideration. The decision is made in the room and documented before the meeting ends.',
  },
]

const CALENDAR_RHYTHM = [
  { time: 'Week before', action: 'Pre-sprint preparation: sprint question finalized and distributed. Long-term goal, sprint question, and sprint map (high-level user journey) sent to all participants before Friday of the week before. User recruitment completed — five users confirmed for Friday slots. Friday test schedule placed on the calendar now: five 1-hour slots, 9am to 3pm. Decider identified (the person whose opinion breaks ties on Wednesday). Materials prepared: printed How Might We sheets, sticky notes, voting dots. Sprint facilitator has reviewed the sprint map and identified the most important moment on the map to prototype.' },
  { time: 'Monday', action: 'Map the problem: start with a long-term goal statement. Map the user journey from awareness through key outcome — keep the map to one whiteboard, no more. Expert interviews: 15-minute interviews with internal experts (customer success, engineering, sales) who know the problem. Capture How Might We notes throughout. End-of-day vote on the most important moment on the map — this is the target for Tuesday sketching. Note: Monday ends with a specific target, not a list of possibilities. A Monday that ends with multiple equally valid targets has not completed Monday.' },
  { time: 'Tuesday', action: 'Lightning demos (1 hour): each participant presents 3-minute competitive inspiration — products that have solved similar problems. Note big ideas, not full demos. Individual sketching (remainder of day): four-step sketch process — notes, ideas, crazy 8s (8 sketches in 8 minutes), solution sketch. All sketching is individual and silent. No group brainstorming. Each participant produces one detailed solution sketch by end of day. Solution sketches are kept anonymous until Wednesday voting. The anonymity prevents the loudest-voice problem that kills most brainstorming sessions.' },
  { time: 'Wednesday', action: 'Decide on one solution: art museum review of all solution sketches posted on walls (silent, no explanation from authors). Vote with dots. Heat map shows where attention is concentrating. Straw poll: each participant votes for the solution they think best answers the sprint question. Decider makes the final call — one solution, not a compromise blend. Afternoon: storyboard the selected solution into a 10-15-panel sequence that shows exactly what the prototype will contain. The storyboard is the prototype brief — designers and builders work from it on Thursday. Wednesday ends with one agreed storyboard, not a set of options.' },
  { time: 'Thursday', action: 'Build the prototype: one person is the maker (builds the actual prototype in Figma, slides, or a working demo), one person is the writer (all copy and microcopy exactly as it will appear in the test), one is the asset collector (photos, icons, real data for the prototype), one is the stitcher (assembles components from maker and asset collector into testable flow). The prototype must be realistic enough that a user does not know it is fake. Thursday ends with a complete prototype that can be used in a real user session without explanation or assistance.' },
  { time: 'Friday', action: 'Five user sessions: each session is 60 minutes. Facilitator introduces the context and task without revealing what the sprint was testing. Observer takes notes on a pattern-finding grid (5 columns for 5 users, rows for each task or question). Do not debrief between sessions — note patterns only. After five sessions: group debrief on patterns. What did you see? Which hypotheses were supported? Which were contradicted? Pattern summary produced the same day. Post-sprint decision meeting placed on next Monday calendar before leaving the sprint venue.' },
  { time: 'Monday+1', action: 'Post-sprint decision meeting: 90 minutes. Sprint question: what did the Friday test tell us? For each hypothesis tested: validated, promising, or invalidated. Roadmap outcome: what changes because of this sprint? New roadmap item (with sprint and target date), new research cycle (with owner and deadline), or closed hypothesis (documented reason). Decision is made in the room and documented. The sprint output document (sprint question, storyboard, test results, roadmap decision) is distributed to all stakeholders before end of day Monday+1.' },
]

export default function DesignSprintCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Design Sprint Calendar"
        title={
          <>
            Sprint question set before Monday. One solution decided Wednesday.
            <br />
            <em className="not-italic text-gold">Five users tested Friday. Roadmap decision made Monday plus one.</em>
          </>
        }
        lede="A design sprint without a calendar structure produces five days of workshops that never converge on a testable answer. The sprint calendar starts before Monday: question defined, five users recruited, Friday slots blocked. Monday maps and targets. Tuesday sketches independently. Wednesday decides on one solution. Thursday builds the prototype. Friday tests with five users and produces the pattern summary. Monday of the following week converts sprint output to a roadmap decision. The sprint is not done until the post-sprint decision meeting runs. Momenties structures the full design sprint calendar."
        crumbs={[{ label: 'Design Sprint Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/product-roadmap-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Product roadmap
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card required</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Design sprint principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four design principles for a sprint calendar that produces a testable prototype instead of a week of productive-feeling meetings.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Design sprint calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From pre-sprint question setting through the post-sprint roadmap decision that converts 5 days of work into a shipped feature.</h2>
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
                &ldquo;We had run four design sprints that all felt productive — good energy in the room, interesting sketches, lively voting — and produced almost nothing on the roadmap. The diagnosis: we were not defining the sprint question before Monday, we were spending Monday defining it, and by Wednesday we were still not aligned on what we were testing. The user recruitment was a Thursday problem, not a Tuesday calendar event. When we restructured with the pre-sprint question definition, the five-user recruitment placed on the calendar before the sprint week, and the post-sprint decision meeting scheduled before the sprint ended — the fifth sprint produced a validated prototype in five days and a new onboarding flow in production six weeks later. The three things that made the difference: defined question, recruited users, and a real decision meeting. Everything else was ceremony.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">L</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Lena P.</div>
                  <div className="text-xs text-muted-foreground">Head of Product Design, consumer app, 12-person product team</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the design sprint calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every milestone in a complete design sprint calendar from pre-sprint through post-sprint decision.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Pre-sprint — question defined and distributed before Monday',
                'Pre-sprint — five users recruited and Friday slots confirmed',
                'Monday — map and target, day ends with one specific moment to prototype',
                'Tuesday — individual solution sketches, no group brainstorming',
                'Wednesday — one solution decided, storyboard completed',
                'Thursday — prototype built, realistic enough for real user sessions',
                'Friday — five 1-hour user sessions, pattern summary produced same day',
                'Monday+1 — post-sprint decision: validated, promising, or invalidated',
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
        title="Design sprints that produce roadmap decisions — not just good prototypes."
        subtitle="Sprint question before Monday, five users recruited before the sprint, daily convergence discipline, and post-sprint decision meeting that converts test results to shipped features. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Product roadmap calendar', href: '/product-roadmap-calendar' }}
      />
    </>
  )
}
