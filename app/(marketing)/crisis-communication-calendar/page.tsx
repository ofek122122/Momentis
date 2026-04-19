import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Crisis Communication Calendar — how to structure the first 72 hours of a crisis response so the story does not run ahead of the facts',
  description:
    'A crisis response without a calendar structure produces a reactive sequence where the organization is always one news cycle behind. This guide covers the 15-minute first-response protocol, the 4-hour holding statement, the 24-hour narrative structure, the 72-hour full response calendar, and how to run the post-crisis audit so the next crisis response is faster and better-coordinated than the last.',
  alternates: { canonical: '/crisis-communication-calendar' },
  openGraph: {
    title: 'Crisis Communication Calendar',
    description: 'Structure the first 72 hours of a crisis response so the story does not run ahead of the facts.',
    url: '/crisis-communication-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'The first 15 minutes determine the story — not the first 15 days',
    desc: 'A crisis response that begins with a 4-hour internal review before any external communication produces a story shaped entirely by outside voices. The first 15 minutes are not for drafting a comprehensive statement — they are for activating the crisis team, acknowledging the situation exists, and preventing the void that external narratives fill when organizations go silent. The 15-minute response is not a statement about facts — it is a statement about process: "We are aware. We are investigating. We will update." The 4-hour holding statement addresses facts. The 24-hour full statement addresses context. But the 15-minute activation cannot be delayed.',
  },
  {
    icon: Clock,
    title: 'Separate the facts you know from the story you want to tell',
    desc: 'Crisis responses that lead with narrative before facts are established produce credibility problems when the facts contradict the narrative. The crisis communication sequence has two tracks running in parallel: a facts track (what do we know, what are we still investigating, when will we know more) and a narrative track (what is our position, what values are we demonstrating through this response, what is the long-term story). The narrative track cannot run faster than the facts track. A statement that expresses regret before the investigation is complete is a facts track problem — it implies a conclusion before evidence. Let the facts lead. Let the narrative follow.',
  },
  {
    icon: BarChart3,
    title: 'Update cadence prevents the story from being written by silence',
    desc: 'Organizations that go silent after the first statement produce a news cycle filled by sources with less information and more incentive to speculate. The update cadence — a scheduled communication at 4 hours, 24 hours, and 72 hours after the initial activation — is placed on the crisis communication calendar before the first statement is drafted. Each update has a specific purpose: 4-hour update closes the holding statement period and provides initial facts, 24-hour update provides the narrative and response plan, 72-hour update provides the full picture and resolution path. The updates are scheduled even when there is no new information — "We are still investigating, here is what we have confirmed so far" is a substantive update.',
  },
  {
    icon: Users,
    title: 'The post-crisis audit is part of the crisis response — not an afterthought',
    desc: 'A crisis response without a post-crisis audit produces an organization that repeats the same response failures in the next crisis. The post-crisis audit (scheduled 1 week after resolution) has three questions: What did the timeline look like — where were the bottlenecks and delays? What was the first external narrative, and how long before we had a competing narrative in place? What changes to the crisis communication playbook result from this incident? The audit produces the playbook update that makes the next crisis response faster. The post-crisis audit is a calendar event placed on the calendar during the crisis response, not after it resolves.',
  },
]

const CALENDAR_RHYTHM = [
  { time: '0–15 min', action: 'Crisis activation protocol: designated crisis team lead notified. Core crisis team assembled (communications lead, legal, CEO/executive sponsor, subject matter expert). Channel monitoring activated: social, news, direct stakeholder communications. Holding statement drafted — three sentences maximum: (1) We are aware of [situation]. (2) We are taking it seriously and investigating immediately. (3) We will provide an update by [specific time — 4 hours from now]. Holding statement approved and distributed. Internal communication to affected teams sent simultaneously. External holding statement published. Crisis communication log opened — every decision, statement, and communication documented with timestamp.' },
  { time: '4 hours', action: '4-hour update: first substantive statement. What do we know as fact (confirmed only — not probable, not alleged)? What actions have we taken in the first 4 hours? What are we still investigating? What is the timeline for next update? The 4-hour statement does not include apologies for things not yet confirmed, does not speculate on cause, does not assign responsibility without investigation. If the situation involves harm to individuals: acknowledgment and expression of concern precedes factual update — in that order. The 4-hour statement is the moment the organization takes visible ownership of the response.' },
  { time: '24 hours', action: '24-hour update: full narrative statement. Investigation findings (preliminary). Actions taken and actions underway. Organizational position and values statement — what this organization stands for in relation to this incident. If appropriate: apology or accountability statement, only after investigation confirms the facts that warrant it. Stakeholder-specific communications: different stakeholders (customers, employees, media, partners) receive the same facts but in formats appropriate to their relationship and information needs. Employee communication is sent before external — employees learn from the organization, not from media.' },
  { time: '72 hours', action: '72-hour update: resolution path statement. What is the current state of the investigation or response? What specific steps are being taken and by when? What systemic changes (if any) will prevent recurrence? What is the timeline for full resolution? The 72-hour statement marks the transition from active crisis response to managed resolution. After 72 hours, updates shift from the crisis communication cadence to the normal organizational communication cadence. Post-crisis audit scheduled for one week from today — placed on all crisis team calendars before the 72-hour statement is published.' },
  { time: 'Day 7', action: 'Post-crisis audit: 90 minutes, crisis team. Four questions: (1) Timeline reconstruction — from the first signal of the crisis to the 72-hour statement. Where were the delays? What caused them? (2) Narrative audit — what was the first external narrative? How long before the organization had a competing narrative? (3) Stakeholder response — what stakeholder groups felt well-informed? Which did not? (4) Playbook gaps — what situations did the crisis expose that the playbook did not address? The audit produces three to five specific playbook updates with owners and deadlines.' },
  { time: 'Playbook update', action: 'Playbook update: within two weeks of the post-crisis audit. Crisis communication playbook updated with: revised 15-minute activation protocol (if bottlenecks were found), updated holding statement templates for new crisis categories, revised stakeholder communication sequences, updated spokesperson authorization protocol, and new detection/monitoring criteria for emerging situations. The updated playbook is distributed to all crisis team members and to HR for onboarding. The crisis communication calendar template is updated with lessons from the response timing.' },
  { time: 'Annual drill', action: 'Annual crisis communication drill: tabletop exercise. The drill tests the updated playbook against a scenario the team has not prepared for. Specific outcomes: does the 15-minute activation actually happen in 15 minutes? Does the holding statement get approved and distributed in under 30 minutes? Are the right people notified in the right order? The annual drill is a calendar event placed on the crisis team calendar 12 months in advance. Organizations that drill annually respond measurably faster than organizations that rely on memory of the last crisis.' },
]

export default function CrisisCommunicationCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Crisis Communication Calendar"
        title={
          <>
            15-minute activation. 4-hour holding statement. 24-hour narrative.
            <br />
            <em className="not-italic text-gold">72-hour resolution path. Post-crisis audit one week out.</em>
          </>
        }
        lede="A crisis response without a calendar produces an organization that is always one news cycle behind the story. The crisis communication calendar is built before a crisis happens: 15-minute activation protocol, 4-hour holding statement, 24-hour full narrative, and 72-hour resolution path. The post-crisis audit is scheduled during the crisis response, not after it resolves. The annual drill is placed on the calendar 12 months in advance. Momenties structures the full crisis communication calendar so the response runs faster than the story."
        crumbs={[{ label: 'Crisis Communication Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/media-relations-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Media relations
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card required</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Crisis communication principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four principles for a crisis communication structure that runs faster than the story instead of reacting to it.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Crisis communication calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From the 15-minute activation through the post-crisis audit and playbook update that makes the next response faster.</h2>
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
                &ldquo;We had two crises in eighteen months. The first one: we spent 3 hours in internal review before the first external communication. By the time we had a statement, three journalists had filed stories based on a source with partial information and a narrative we spent six weeks correcting. The second crisis: we had the 15-minute activation protocol, the holding statement template, and the 4-hour update scheduled before the first internal call ended. Our statement was out in 22 minutes. We got ahead of the external narrative. The story we told at 24 hours was the story that ran. The post-crisis audit from the first crisis produced the playbook that made the second crisis response different. The annual drill made the second crisis feel like something we had practiced — because we had. The calendar structure is what made the difference between reactive and prepared.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">H</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Helena B.</div>
                  <div className="text-xs text-muted-foreground">Chief Communications Officer, mid-market consumer brand, two major crisis responses in 18 months</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the crisis communication calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every activation milestone and accountability event in a structured crisis communication calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                '15-minute activation — crisis team assembled, holding statement drafted',
                '4-hour update — first substantive statement with confirmed facts only',
                '24-hour update — full narrative, organizational position, stakeholder communications',
                '72-hour update — resolution path, transition from crisis to managed response',
                'Day 7 — post-crisis audit: timeline, narrative, stakeholder response, playbook gaps',
                '2-week deadline — playbook updated with specific changes and owners',
                'Annual drill — tabletop exercise testing updated playbook against new scenario',
                'Crisis log — all decisions, statements, and communications timestamped',
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
        title="Crisis responses that run faster than the story."
        subtitle="15-minute activation protocol, 4-hour holding statement, 24-hour narrative, 72-hour resolution path, post-crisis audit scheduled during the response, and annual drill. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Media relations calendar', href: '/media-relations-calendar' }}
      />
    </>
  )
}
