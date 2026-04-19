import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Speaking Calendar — How to build a speaking schedule that compounds audience and authority',
  description:
    'A speaking calendar places speaker applications 6 months before target events, reserves post-talk follow-up windows for relationship conversion, distributes talk preparation across weeks rather than compressing it to the final 48 hours, and places quarterly speaking goal reviews — so the speaker builds a compounding audience and authority over time rather than reacting to individual invitations.',
  alternates: { canonical: '/speaking-calendar' },
  openGraph: {
    title: 'Speaking Calendar — Momenties',
    description: 'Build a speaking schedule that compounds audience and authority.',
    url: '/speaking-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Speaker applications placed 6 months before target events — not when the deadline arrives',
    desc: '"Speaker application: [event name], [application deadline - 6 weeks]. Target event: [date]." Speaker applications placed on the calendar 6 months before the target event — with the application deadline as a hard calendar commitment, not a reminder. Conference speaker selection cycles run 3-6 months before the event. Speakers who apply 2 weeks before the deadline compete against proposals submitted months earlier by speakers with established relationships with the program committee. A 6-month pipeline of target events ensures that at any given moment there are active applications under review, accepted talks in preparation, and delivered talks producing audience follow-up.',
  },
  {
    icon: Clock,
    title: 'Talk preparation distributed across 4 weeks, not compressed into the final 48 hours',
    desc: '"Talk preparation schedule: week 1 — outline, week 2 — slides draft, week 3 — full rehearsal, week 4 — final polish and logistics." Talk preparation distributed across 4 weeks with specific milestones. Talk preparation compressed to the final 48 hours produces a talk that was not rehearsed, slides that were not refined, and a speaker who arrives at the venue having rehearsed once. A speaker who rehearsed 4 times over 4 weeks arrives having identified and corrected the parts that do not land, having tightened the slides that are too busy, and having solved the transition between sections that breaks the narrative flow. 4 weeks of distributed preparation is not perfectionism — it is the minimum to produce a talk that sounds prepared.',
  },
  {
    icon: BarChart3,
    title: 'Post-talk follow-up window reserved within 48 hours of every speaking engagement',
    desc: '"Post-talk follow-up: [talk date + 1 day, 90 minutes blocked]." Post-talk follow-up window placed on the calendar before the talk date. 48-hour follow-up window for audience connection requests, business card emails, and LinkedIn connections received during or after the talk. Speaking engagement ROI is determined by what happens in the 48 hours after the talk — not by what happens during the talk. A speaker who delivers a strong talk and follows up within 48 hours converts audience attention into professional relationships. A speaker who delivers the same strong talk and responds to connections 2 weeks later finds that audience attention has moved on. The follow-up window is scheduled before the talk because after the talk the speaker is recovering, traveling, and catching up on deferred work.',
  },
  {
    icon: Shield,
    title: 'Quarterly speaking goal review to evaluate audience growth and authority trajectory',
    desc: '"Quarterly speaking review: [Q end + 1 week]. Review: talks delivered, audience reach, connections made, referrals generated, next quarter pipeline." Quarterly review evaluates whether the speaking schedule is producing compounding audience development or isolated events. A speaker who delivers 8 talks per year to the same 50-person audience is not building cumulative reach. A speaker who delivers 4 talks per year to new audiences of 200 each is building a compounding audience. Quarterly review asks: which venues produced the best audience quality? which talk topics generated the most post-talk connections? which conference types are worth applying to again? Speaking without quarterly reflection produces activity without trajectory.',
  },
]

const SPEAKING_STEPS = [
  {
    step: 'Build the annual speaking target list before the year begins — not when invitations arrive',
    detail: '"Annual speaking target list: [conference 1 — target, application deadline, audience size, authority value]. [Conference 2 — target, application deadline, audience size, authority value]." Annual target list built in Q4 for the following year. Target list criteria: audience alignment (decision-makers in the speaker&apos;s domain), audience size (minimum audience that produces a positive ROI on preparation time), and authority value (whether being on the program increases professional credibility in the speaker&apos;s domain). Reactive speaking — accepting all inbound invitations — fills the calendar but not necessarily with the right audiences. Proactive target list building ensures the speaking calendar is directed at the venues that compound authority rather than simply generate activity.',
  },
  {
    step: 'Place application deadlines for every target event 6 weeks before the actual deadline',
    detail: '"Application calendar event: [event name], [application deadline - 6 weeks]. Application due: [actual deadline]." Application deadline placed 6 weeks before the actual application deadline. 6-week lead time gives time to research the event program, identify the specific audience and committee preferences, customize the abstract for the event&apos;s theme, and review prior year talk titles to understand what the committee has selected before. Speaker abstracts submitted in the final 2 weeks of an application window are competing against abstracts that were submitted with more context about the event and more time for revision. The application is the product that determines speaker selection — it deserves more than 3 days of writing time.',
  },
  {
    step: 'Create a talk version system — one core idea, multiple length and audience configurations',
    detail: '"Talk library: [core idea] — 15-minute conference version, 45-minute keynote version, 5-minute lightning version." Talk version system built for every core speaking topic. A single well-developed talk idea should be deliverable in 5, 15, and 45 minutes with different depth and example configurations. A speaker with 3 core ideas and 3 versions each has 9 talk configurations that can be matched to event requirements without creating new content. Talk version system reduces preparation time for accepted invitations because the core talk infrastructure — narrative arc, key examples, main evidence — already exists and is adapted rather than rebuilt. New content creation is reserved for genuinely new ideas, not for length adjustments.',
  },
  {
    step: 'Place rehearsal milestones in the calendar, not just the delivery date',
    detail: '"Talk rehearsal schedule: [week 3 — full rehearsal 1, 90 minutes]. [week 4 — full rehearsal 2, polish notes]. [week 4 day 6 — logistics confirmed]." Rehearsal milestones placed as calendar events, not as intentions. First full rehearsal placed 2 weeks before the talk — giving time for slide revisions, section timing adjustments, and a second rehearsal incorporating the changes. Logistics confirmed 1 week before — travel, hotel, AV requirements, room setup, slide format compatibility. Speakers who discover logistics problems 2 days before the talk cannot resolve them without significant disruption. Logistics confirmed 1 week before the talk means problems discovered with time to solve them.',
  },
  {
    step: 'Build the audience follow-up sequence into the talk itself — not as an afterthought',
    detail: '"Talk CTA: [specific, low-friction next step — newsletter, resource download, LinkedIn connection]." Follow-up sequence integrated into the talk before delivery — not added after positive audience response. A talk that ends with "find me on LinkedIn" produces fewer connections than a talk that ends with "I&apos;ve written a 3-page summary of everything we covered today — text [keyword] to [number] to get it." The follow-up mechanism determines the conversion rate from audience attention to relationship. Low-friction, specific CTAs outperform general "connect with me" requests because they give the audience a specific, immediate action rather than a vague future intention. CTA designed as part of talk preparation, not improvised at the podium.',
  },
  {
    step: 'Track the speaking pipeline as a funnel — applications, acceptances, delivery, follow-up',
    detail: '"Speaking funnel: [applications sent] → [acceptances] → [talks delivered] → [connections made] → [referrals generated]." Speaking tracked as a funnel with conversion rates at each stage. Applications-to-acceptance rate reveals whether the proposal quality or target selection needs adjustment. Acceptance-to-delivery shows whether scheduled talks are being completed or cancelled. Delivery-to-connection shows whether the talk content and CTA are converting audience attention. Connection-to-referral shows whether speaking is producing professional development value. Speakers who track only talks delivered miss the stages where value is created or lost. A speaker with 80% acceptance rate who converts 2% of audience members per talk has a different optimization problem than a speaker with 30% acceptance rate who converts 15% of audience members.',
  },
]

const SPEAKING_FAILURES = [
  { failure: 'Reactive speaking schedule — only inbound invitations, no proactive pipeline', consequence: 'Speakers who accept only inbound invitations build a speaking schedule that reflects other people&apos;s assessment of their value, not their own strategic direction. Inbound invitations trend toward the same venues, audiences, and topics — they compound the speaker&apos;s existing positioning rather than expanding it. A speaker who wants to move into a new domain will not receive inbound invitations from that domain until they have spoken in it. Proactive applications to target venues build the portfolio that generates inbound invitations in the new domain. Reactive-only speakers plateau at the level of their current reputation; proactive speakers direct their trajectory.' },
  { failure: 'Talk preparation compressed to 48 hours — unrehearsed, slides unrefined, timing wrong', consequence: 'Talk preparation compressed to 48 hours produces the most common visible speaking failure: a talk that was not rehearsed. The unrehearsed speaker discovers mid-talk that the transition between section 2 and section 3 does not work, that slide 12 contains too much text to read in 30 seconds, and that the conclusion arrives 5 minutes over the time limit. None of these problems are visible during preparation — they are only visible during delivery, which is the worst time to discover them. 4 weeks of distributed preparation allows each of these problems to be discovered and corrected before the delivery date. The audience cannot distinguish between a confident speaker and a heavily rehearsed speaker — they both appear the same from the stage.' },
  { failure: 'No post-talk follow-up window — audience connections not converted within the attention window', consequence: 'Speakers who do not follow up within 48 hours of a talk lose the majority of the audience connections that the talk generated. A person who heard a talk, connected on LinkedIn, or exchanged business cards has a 48-72 hour window of active connection intent before the connection becomes passive. A follow-up message within this window is received as continuation of the conversation; a follow-up message 2 weeks later is received as a memory-jarring reminder of a half-forgotten event. The speaking engagement generates attention — the follow-up converts attention into relationship. Speakers who deliver consistently strong talks but do not follow up consistently are generating awareness without compounding professional relationships.' },
  { failure: 'No quarterly review — speaking schedule not evaluated against authority-building goals', consequence: 'Speaking without quarterly review produces activity that may or may not be building toward the speaker&apos;s professional goals. A speaker who delivered 12 talks in a year to audiences of 30-50 people at local professional associations may have generated significant in-person connection value — or may have invested 200 hours of preparation and travel time in audiences too small to compound meaningfully. Without quarterly review, the speaker cannot distinguish between these outcomes. Quarterly review asks whether the speaking schedule is producing the right kind of audience development — decision-makers rather than peers, new domains rather than established ones, venues that generate inbound invitations rather than one-time events.' },
]

export default function SpeakingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Speaking Calendar"
        title={
          <>
            Applications 6 months out. Preparation distributed over 4 weeks.
            <br />
            <em className="not-italic text-gold">Post-talk follow-up within 48 hours. Quarterly authority review.</em>
          </>
        }
        lede="Speaking schedule failures are mostly pipeline and follow-up failures. A speaking calendar places speaker applications 6 months before target events with application deadlines as hard calendar commitments, distributes talk preparation across 4 weeks with rehearsal milestones, reserves a post-talk follow-up window within 48 hours of every engagement for relationship conversion, builds follow-up sequences into the talk itself, and runs quarterly reviews to evaluate whether the speaking schedule is building compounding audience and authority or just generating activity."
        crumbs={[{ label: 'Speaking Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/speaking-preparation-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Speaking prep calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures the speaking calendar so each engagement compounds audience and authority.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a speaking calendar that fills with the right audiences, produces rehearsed talks, and converts audience attention into professional relationships.</h2>
          </Reveal>
          <div className="space-y-3">
            {SPEAKING_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four speaking calendar patterns that produce activity without compounding audience or authority.</h2>
          </Reveal>
          <div className="space-y-3">
            {SPEAKING_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Speaking calendar analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for speaking calendar discipline and authority compounding.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Speaker application pipeline (applications pending, accepted, declined)',
                'Application-to-acceptance rate (% per event type)',
                'Talk preparation completion rate (% of milestone deadlines met)',
                'Post-talk follow-up rate (% of talks with 48-hour follow-up completed)',
                'Audience-to-connection conversion rate (% per engagement)',
                'Connection-to-referral conversion rate (% per quarter)',
                'New audience reach per quarter (unduplicated audience members)',
                'Talk version library completeness (core ideas × version configurations)',
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
        title="Proactive pipeline. Distributed preparation. 48-hour follow-up."
        subtitle="Speaking target list management, application pipeline, rehearsal scheduling, post-talk follow-up windows, and quarterly authority review. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Speaking prep calendar', href: '/speaking-preparation-calendar' }}
      />
    </>
  )
}
