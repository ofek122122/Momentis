import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Client Check-In Calendar — how to structure client check-ins so projects stay on track',
  description:
    'Client check-ins without a calendar structure become reactive — you talk when there is a problem instead of before one develops. This guide covers check-in cadence by project phase, what to cover in each check-in type, how to separate status check-ins from strategic alignment calls, and how to end every client engagement with a relationship that is stronger than when it started.',
  alternates: { canonical: '/client-check-in-calendar' },
  openGraph: {
    title: 'Client Check-In Calendar',
    description: 'Structure client check-ins so projects stay on track and relationships strengthen.',
    url: '/client-check-in-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'Cadence varies by phase — not by how much the client asks for',
    desc: 'Check-in frequency should be determined by project phase and complexity, not by client communication style. Onboarding phase: weekly (high uncertainty, high alignment need). Active delivery phase: biweekly (lower uncertainty, regular progress visibility). Maintenance or retainer phase: monthly (stable delivery, relationship maintenance). Reducing check-ins at the right phase signals confidence and professionalism. Increasing them reactively in response to client anxiety signals project instability — address the cause, not the symptom.',
  },
  {
    icon: Clock,
    title: 'Separate status check-ins from strategic alignment calls — they require different prep',
    desc: 'Status check-ins (15–30 minutes, biweekly): what was completed, what is in progress, what is blocked, next deliverables. These are operational. Prep: update the project tracker before the call. Strategic alignment calls (60 minutes, monthly or at phase boundaries): are we solving the right problem, are scope assumptions still valid, are upcoming decisions aligned with long-term goals. These are relational and directional. Conflating them in a single undifferentiated call produces inefficient operational discussion and deferred strategic conversation.',
  },
  {
    icon: BarChart3,
    title: 'Every check-in ends with one written decision — not a summary of what was discussed',
    desc: 'A check-in that ends with "great, talk next week" produces no accountability. A check-in that ends with a written decision — "agreed: we will deprioritize feature X until after launch; [name] will communicate this to the stakeholder by [date]" — produces forward motion. Send a one-paragraph written summary within 2 hours of every check-in. Not a transcript. One decision, one owner, one deadline. If there was no decision, the call may not have been necessary.',
  },
  {
    icon: Users,
    title: 'End-of-project close call is a separate calendar event, not the final status check-in',
    desc: 'The final status check-in should be scheduled when the project is complete. A separate close call — scheduled 2 weeks after project delivery — covers: what went well, what would you do differently, what are the outcomes 2 weeks post-delivery. This call is not operational. It is relational. It creates the conditions for a reference, a case study, and a next engagement. Clients who receive a dedicated close call are significantly more likely to refer than clients whose last interaction was the final invoice.',
  },
]

const CALENDAR_RHYTHM = [
  { time: 'Kickoff', action: 'Within 48 hours of project start: schedule all check-in calls for the entire project on the client\'s calendar before work begins. Every status check-in, every alignment call, and the close call placed at kickoff. This communicates project structure, gives the client visibility into the delivery timeline, and prevents the scheduling friction that causes check-ins to slip. Clients who see the full check-in schedule at project start have lower anxiety during delivery — they know when they will hear from you.' },
  { time: 'Onboarding', action: 'Weekly check-in for first 30 days or first project phase (whichever is shorter): 30 minutes, status update format. Prep: brief written update sent 2 hours before the call. Call agenda: (1) what was completed this week, (2) what is in progress, (3) any blockers, (4) decisions needed from the client this week. End with one written decision emailed within 2 hours. High check-in frequency during onboarding establishes communication norms that carry through the entire engagement.' },
  { time: 'Active delivery', action: 'Biweekly status check-in (20 minutes) plus monthly alignment call (45 minutes). Status check-in: operational only — progress, blockers, next deliverables. Alignment call: strategic — scope validation, upcoming decisions, stakeholder concerns not surfaced in status calls. Agenda for alignment call sent 48 hours in advance. These are separate calendar events with different prep requirements and different participant lists (some alignment calls include the client\'s internal stakeholders that status calls do not).' },
  { time: 'Pre-delivery', action: 'Two weeks before major delivery: one additional alignment call scheduled at project kickoff. Purpose: confirm acceptance criteria, surface any last-minute scope questions, align on delivery format and communication plan for the delivery date. This call prevents the most common cause of delayed acceptance — misaligned expectations about what "done" looks like. The pre-delivery alignment call is the most impactful call in a project; it should never be scheduled reactively.' },
  { time: 'Post-delivery', action: 'Final status check-in when the project is complete. Confirm all deliverables accepted. Separate the close call (2 weeks post-delivery) from this check-in. Close call agenda: (1) what went well — specific, not vague, (2) what you would do differently — show that you learn, (3) what are the outcomes 2 weeks in — build the case study, (4) what is next — open the door to the next engagement. Close call scheduled at kickoff; confirmed at final status check-in.' },
  { time: 'Retainer', action: 'Monthly check-in (45 minutes) plus quarterly business review (90 minutes). Monthly check-in: operational status and upcoming priorities. Quarterly business review: value delivered in the quarter, metrics review, strategic priorities for next quarter, relationship health. QBR agenda sent one week in advance. QBR requires the most senior contact on both sides. Retainer relationships that do not have scheduled QBRs are at high churn risk when the engagement reaches an annual renewal — the client does not have the data to justify the continuation.' },
  { time: 'Renewal', action: 'Six weeks before annual or contract renewal: schedule a dedicated renewal alignment call (not a status check-in). Cover: results over the engagement period, value delivered versus scope, proposed adjustments for next period (scope, cadence, or pricing), and confirm next period structure. This call should happen before the client has started evaluating alternatives. Six weeks provides sufficient time for the client to get internal approval before the contract expires.' },
]

export default function ClientCheckInCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Client Check-In Calendar"
        title={
          <>
            Check-ins that prevent problems.
            <br />
            <em className="not-italic text-gold">Cadence by phase. One decision per call. Close call at kickoff.</em>
          </>
        }
        lede="Client check-ins without a calendar structure become reactive — you talk when something goes wrong instead of before it can. The check-in calendar is set at project kickoff: weekly during onboarding, biweekly status calls plus monthly alignment calls during delivery, pre-delivery alignment 2 weeks before major handoffs, and a dedicated close call 2 weeks post-delivery. Retainer clients get monthly check-ins plus quarterly business reviews. Every call ends with one written decision. Momenties structures the full client calendar."
        crumbs={[{ label: 'Client Check-In Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/client-onboarding-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Client onboarding
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card required</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Client check-in principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four design principles for client check-ins that keep projects on track and relationships strong.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Client check-in calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">The complete client check-in schedule from kickoff through renewal, set at project start.</h2>
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
                &ldquo;The close call was the change that mattered most. I used to end projects when the final deliverable was accepted and the invoice was paid. The relationship ended on a transactional note. When I started scheduling a dedicated close call two weeks after delivery — separate from the final status call, focused entirely on outcomes and relationship — my referral rate went up significantly. Clients had time to see the results in practice, I had data for the case study, and I could open the door to the next engagement without it feeling like I was selling at the final invoice moment. The close call is in my kickoff calendar for every project now. It takes 45 minutes and it is the highest-return call in the engagement.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">S</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Sofia R.</div>
                  <div className="text-xs text-muted-foreground">Brand strategy consultant, 8-year independent practice</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the client check-in calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every check-in event type, from kickoff scheduling through renewal alignment.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Kickoff: full check-in schedule placed on client calendar before work begins',
                'Onboarding phase: weekly 30-min status check-ins with written updates',
                'Active delivery: biweekly 20-min status calls plus monthly 45-min alignment calls',
                'Pre-delivery: alignment call 2 weeks before major handoff, scheduled at kickoff',
                'Post-delivery: close call 2 weeks after delivery, scheduled at kickoff',
                'Retainer: monthly check-ins plus quarterly 90-min business reviews',
                'Renewal: dedicated alignment call 6 weeks before contract renewal date',
                'Every call: one written decision emailed within 2 hours of call end',
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
        title="Check-ins that prevent problems, not just respond to them."
        subtitle="Client check-in calendar structured by project phase — onboarding, delivery, pre-handoff, post-delivery close, and renewal. Every call ends with one written decision. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Client onboarding', href: '/client-onboarding-calendar' }}
      />
    </>
  )
}
