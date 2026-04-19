import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Freelance Client Calendar — How to structure client communication and project delivery as a freelancer',
  description:
    'A freelance client calendar places project milestones with internal buffers before client deadlines, schedules check-in touchpoints at project midpoints rather than only at delivery, places quarterly invoice follow-up for outstanding receivables, and blocks proposal and business development time before the current project ends — so the freelancer maintains project quality without feast-or-famine scheduling.',
  alternates: { canonical: '/freelance-client-calendar' },
  openGraph: {
    title: 'Freelance Client Calendar — Momenties',
    description: 'Structure client communication and project delivery as a freelancer.',
    url: '/freelance-client-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Project milestones placed with internal buffer before every client deadline',
    desc: '"Internal deadline: [client deadline - 2 days]. Client deadline: [date]." Internal milestone placed 2 days before every client deadline. 2-day buffer absorbs file corruption, revision loop extensions, technology failures, and personal emergencies without client deadline impact. Freelancers who work to client deadlines rather than internal deadlines have no recovery time when something goes wrong — and something goes wrong on approximately 20% of deliverable cycles. Internal deadlines placed as the working deadline, client deadlines placed as calendar reminders for the delivery date, never the working date.',
  },
  {
    icon: Clock,
    title: 'Midproject check-in placed at project midpoint, not only at delivery',
    desc: '"Midproject check-in: [project start + 50% of timeline]. Check-in agenda: scope alignment, any emerging changes, revised delivery confidence." Midproject check-in placed at the midpoint of every project longer than 2 weeks. Midpoint check-ins surface scope drift and client priority changes while there is still time to adjust — not at delivery when changes require rework. Clients who receive only start and end communication from freelancers produce more revision requests at delivery because expectations diverge silently across the project timeline. A 15-minute midpoint check-in reduces end-of-project revision requests by surfacing misalignment when it is still cheap to address.',
  },
  {
    icon: BarChart3,
    title: 'Business development time blocked before the current project ends',
    desc: '"Next project BD window: [current project end - 3 weeks]. Proposal target: [1-2 per week during BD window]." Business development window placed 3 weeks before the current project ends. 3-week lead time gives time to send proposals, receive decisions, and start the next engagement before the gap — most client decision timelines are 1-2 weeks from proposal to decision. Freelancers who start business development after the current project ends produce a gap between projects. A 3-week BD window before project end converts the feast-or-famine pattern into a continuous pipeline by starting the next sales cycle before the current work is complete.',
  },
  {
    icon: Shield,
    title: 'Invoice follow-up placed 7 days after net payment terms, not 30 days after',
    desc: '"Invoice follow-up: [invoice date + net terms + 7 days]. Payment outstanding — one follow-up sent." Invoice follow-up placed 7 days after the payment due date. Freelancers who wait 30+ days to follow up on outstanding invoices signal that payment timing is flexible. 7-day follow-up maintains payment discipline without straining the client relationship. Single follow-up sent as a professional, non-apologetic payment reminder — "Invoice [number] from [date] is 7 days past the [net terms] payment date. Please confirm payment status." Accounts receivable tracked in the calendar, not in a separate system that is reviewed quarterly.',
  },
]

const FREELANCE_STEPS = [
  {
    step: 'Place the project timeline in the calendar before starting work, not when a deadline approaches',
    detail: '"Project: [client name / project name]. Internal milestone: [date]. Client delivery: [date + 2 days]. Midpoint check-in: [date]. Invoice: [delivery + 3 days]." Full project timeline entered in the calendar at contract signature — before the first hour of work begins. Timeline includes: internal milestone, client delivery date, midpoint check-in, invoice date, and follow-up date. Freelancers who enter deadlines as they approach treat each deadline as a separate event — freelancers who enter the full project timeline at the start treat the project as a managed sequence. The difference is most visible when two projects overlap: a calendar with both full timelines shows the overlap before it becomes a problem; individual deadline tracking discovers the overlap at the midpoint of each project.',
  },
  {
    step: 'Set the internal deadline as the working deadline — never work to the client deadline',
    detail: '"Working deadline: [client deadline - 2 days]. Client deadline: reminder only." Internal deadline treated as the working deadline — the client deadline is a reminder, not the target. This distinction requires commitment: when the internal deadline arrives and the work is complete, the freelancer does not extend the internal deadline to add more polish, and does not move the internal deadline forward in the calendar when the project runs longer than planned. An internal deadline that is repeatedly extended 1-2 days becomes the client deadline. The only exception is a client-requested change in scope that extends the client deadline — which triggers a new internal deadline 2 days before the revised client deadline.' },
  {
    step: 'Place business development as a recurring calendar block, not as an as-needed activity',
    detail: '"Weekly BD block: [day, time, 90 minutes, recurring]." Business development placed as a recurring weekly calendar block — not triggered by the end of a project. A weekly BD block ensures that pipeline activity occurs even when projects are running and the urgency to find new work is low. The BD block contents rotate by pipeline stage: prospect identification in week 1, outreach drafts in week 2, proposal writing in week 3, follow-up calls in week 4. Freelancers who conduct BD only when the pipeline is empty develop BD skills only during periods of financial stress — a compounding disadvantage relative to freelancers who build BD skills continuously.',
  },
  {
    step: 'Send the project debrief email 1 week after delivery — before moving to the next project',
    detail: '"Post-project debrief: [delivery + 7 days]. Agenda: lessons learned, client satisfaction, referral request." Project debrief email placed 7 days after delivery. Debrief content: brief lessons-learned note on what worked well and what to do differently, client satisfaction check-in, and a natural-language referral request ("If you know someone who needs similar work, I&apos;d appreciate the introduction"). The debrief email is the highest-leverage client communication after delivery because it: demonstrates professionalism, captures process improvements before they are forgotten, surfaces dissatisfaction before it becomes an online review, and generates referrals when the client experience is freshest.',
  },
  {
    step: 'Place the quarterly client relationship audit in the calendar',
    detail: '"Quarterly client audit: [Q start + 2 weeks, recurring]. Review: active clients, lapsed clients, referral sources, outstanding proposals." Quarterly client relationship audit placed as a recurring calendar event. Audit contents: active clients and their next project conversations, clients not engaged in 90+ days (re-engagement outreach), referral sources (thank-you note if they referred work in the quarter), and outstanding proposals (follow-up or close). Freelancers who review the full client relationship portfolio quarterly discover lapsed relationships before they become permanently cold, identify referral sources worth cultivating, and close outstanding proposals that clients forgot rather than declined.',
  },
  {
    step: 'Place rate increase conversations 30 days before renewal, not at the moment of renewal',
    detail: '"Rate increase conversation: [contract renewal - 30 days]." Rate increase conversation placed 30 days before contract renewal — not at the renewal moment. A rate increase request at renewal with 48-hour decision time forces clients to decide under time pressure, which produces either a rushed yes or a rushed no. A rate increase conversation 30 days before renewal gives the client time to budget, compare, and decide without urgency. Freelancers who raise rates at the last moment train clients that rate increases are abrupt rather than planned. Freelancers who raise rates 30 days before renewal treat rate adjustment as a normal part of client management, which it is.',
  },
]

const FREELANCE_FAILURES = [
  { failure: 'Working to client deadlines — no buffer for problems, revision requests land as emergencies', consequence: 'Freelancers who work to client deadlines rather than internal deadlines have no recovery window when problems occur. A file delivery problem on the client deadline day creates a client experience of a missed deadline. Client perception of deadline reliability is binary — they do not distinguish between "late because of a technical problem" and "late." The 2-day internal buffer converts 80% of potential deadline misses into on-time deliveries. Freelancers who have maintained a perfect deadline record for 3+ years typically attribute it to discipline, but the structure underlying the discipline is almost always an internal buffer that clients never see.' },
  { failure: 'No midproject check-ins — scope drift discovered at delivery, revision requests expand', consequence: 'Freelance projects without midpoint check-ins produce systematic scope drift that becomes visible at delivery. The client who approved a wireframe at project start has seen a competitor redesign, heard a colleague&apos;s feedback, or simply developed a clearer idea of what they want in the weeks since kickoff. Without a midpoint check-in, this evolution accumulates silently. At delivery, the accumulated drift appears as revision requests — often framed as "small changes" that represent a significant portion of the original project scope. Midpoint check-ins are a pre-emptive revision management tool, not a status call.' },
  { failure: 'Feast-or-famine scheduling — BD started after project ends, gap unavoidable', consequence: 'Freelancers who begin business development after a project ends create a structural gap between projects. The gap has a minimum length equal to the BD cycle time — typically 2-4 weeks from first contact to contract. A freelancer who starts BD the day a project ends will not start the next project for 2-4 weeks regardless of how actively they pursue it. This gap is financially and psychologically compounding: financial because no revenue occurs in the gap, psychological because BD conducted from a position of urgency produces less confident outreach than BD conducted from a position of current work. The 3-week advance BD window prevents the gap by overlapping pipeline activity with active project work.' },
  { failure: 'Invoice follow-up at 30+ days — payment norms set by delay, receivables age', consequence: 'Freelancers who follow up on outstanding invoices after 30 days implicitly establish that payment within 30 days of the due date is acceptable. Clients who receive a follow-up 30 days after the payment due date experience the follow-up as a reminder rather than a consequence. The same clients will pay 30 days late on the next invoice, then 45 days on the invoice after that — because the pattern of late follow-up has signaled that payment timing is flexible. 7-day follow-up establishes payment timing as a professional expectation, not a casual preference. Accounts receivable that ages past 30 days becomes progressively harder to collect and creates cash flow instability that affects business development and project quality.' },
]

export default function FreelanceClientCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Freelance Client Calendar"
        title={
          <>
            Internal deadlines before client deadlines. Midpoint check-ins.
            <br />
            <em className="not-italic text-gold">BD started before the project ends. Invoices followed up in 7 days.</em>
          </>
        }
        lede="Freelance scheduling failures produce missed deadlines, scope drift, feast-or-famine gaps, and aging receivables. A freelance client calendar places internal milestones 2 days before every client deadline, schedules a check-in at each project midpoint to surface scope drift while it is still cheap to address, blocks business development time 3 weeks before the current project ends, and places invoice follow-up 7 days after payment due dates — so the freelancer maintains project quality and consistent revenue without reactive scheduling."
        crumbs={[{ label: 'Freelance Client Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/freelancers"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Freelancers guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures the freelance client calendar so delivery quality and revenue consistency hold together.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a freelance client calendar that protects delivery quality, prevents feast-or-famine gaps, and maintains payment discipline.</h2>
          </Reveal>
          <div className="space-y-3">
            {FREELANCE_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four freelance calendar patterns that produce missed deadlines, scope drift, and revenue gaps.</h2>
          </Reveal>
          <div className="space-y-3">
            {FREELANCE_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Freelance calendar analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for freelance client calendar discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Internal-to-client deadline buffer (days, target ≥2)',
                'On-time delivery rate (% of projects delivered by internal milestone)',
                'Midpoint check-in completion rate (% of eligible projects)',
                'Pipeline start lead time before project end (weeks, target ≥3)',
                'Revenue gap between projects (days without active project)',
                'Invoice follow-up lag (days after due date, target ≤7)',
                'Average accounts receivable age (days from invoice to payment)',
                'Post-project debrief send rate (% of projects with 7-day debrief)',
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
        title="Internal deadlines. Midpoint check-ins. BD before the project ends."
        subtitle="Freelance project timeline management, business development scheduling, invoice follow-up tracking, and quarterly client relationship audits. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Freelancers guide', href: '/for/freelancers' }}
      />
    </>
  )
}
