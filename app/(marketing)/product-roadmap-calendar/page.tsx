import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Product Roadmap Calendar — How to place roadmap milestones before discovery, not after',
  description:
    'A product roadmap calendar places discovery and validation phases before the build commitment, maintains a quarterly roadmap review as a standing event, places customer feedback sessions before major feature decisions, and schedules the post-launch retrospective before the next cycle begins — so the roadmap reflects validated priorities, not accumulated requests.',
  alternates: { canonical: '/product-roadmap-calendar' },
  openGraph: {
    title: 'Product Roadmap Calendar — Momenties',
    description: 'Place roadmap milestones before discovery, not after.',
    url: '/product-roadmap-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Discovery phase placed before the build commitment, not concurrent with it',
    desc: '"Discovery: [feature name], [start date] — [start date + 3 weeks]. Build commitment: [discovery end + 1 week]." Discovery placed as a discrete phase with an end date before the build decision is made. Discovery includes: customer interviews confirming the problem exists and matters, competitive analysis identifying how alternatives solve the same problem, and a defined success metric before a line of code is written. Build commitments made without discovery are hypotheses, not decisions. Discovery placed on the roadmap calendar converts the build decision from intuition into evidence.',
  },
  {
    icon: Clock,
    title: 'Quarterly roadmap review placed as a standing event before planning begins',
    desc: '"Quarterly roadmap review: [Q start - 2 weeks], standing." Roadmap review placed 2 weeks before each quarter begins. Review: which items on the roadmap have been validated since the last review, which have been invalidated, which have been superseded by higher-priority discoveries, and which are still waiting for discovery. Roadmap reviews placed before the quarter planning session allow the plan to reflect the current evidence state rather than the prior quarter\'s commitments. Quarterly reviews without build data produce accumulated requests; reviews with data produce prioritized decisions.',
  },
  {
    icon: BarChart3,
    title: 'Customer feedback sessions placed before major feature decisions, not after launch',
    desc: '"Customer feedback session: [feature decision - 3 weeks]." Customer feedback placed 3 weeks before the feature decision meeting. Feedback session format: 5-7 customer interviews on the specific problem the feature addresses, one or two prototype or wireframe sessions if the concept is far enough along, and synthesis of findings before the decision meeting. Feedback sessions placed before the decision meeting allow findings to inform the decision; feedback sessions placed after launch inform the next iteration but cannot change the shipped feature. 3-week window accommodates interview scheduling and synthesis without blocking the decision.',
  },
  {
    icon: Shield,
    title: 'Post-launch retrospective placed before the next feature cycle begins',
    desc: '"Post-launch retrospective: [launch + 4 weeks]. Next feature cycle start: [retro + 1 week]." Post-launch retrospective placed 4 weeks after feature launch. 4 weeks gives enough time for meaningful usage data to accumulate. Retrospective: did the feature solve the problem it was designed to solve (measured by the success metric defined in discovery), what did customers do that was not expected, and what would be built differently with the current knowledge. Retrospective findings placed in the discovery brief for the next related feature — each cycle building on the prior cycle\'s evidence.',
  },
]

const ROADMAP_STEPS = [
  {
    step: 'Place discovery phases on the roadmap calendar before any build milestones',
    detail: '"Discovery: [feature name] — [dates]. Build gate: [discovery end]." All discovery phases placed on the roadmap calendar before any build milestone is scheduled for the same feature. Build gate placed at discovery end — the build cannot begin before discovery closes. Discovery calendar includes: customer interview scheduling (3-7 interviews minimum), competitive analysis sprint (1 week), and synthesis and decision brief (3 days). Discovery placed on the roadmap converts it from a feature list into a validated priority queue. Features without discovery dates are hypotheses, not roadmap items.',
  },
  {
    step: 'Place the quarterly roadmap review as a recurring event before each planning cycle',
    detail: '"Quarterly roadmap review: [Q start - 2 weeks], recurring." Quarterly roadmap review placed 2 weeks before each quarter\'s planning cycle. Review agenda: current roadmap items sorted by evidence state (validated, pending discovery, hypothetical), items that were deprioritized in the prior quarter and the reason, and new items that have entered the backlog with their discovery status. Review produces a ranked list of validated items and a list of items requiring discovery before they can be ranked. Planning cycle begins with validated items only — unvalidated items placed in the discovery queue.',
  },
  {
    step: 'Place stakeholder alignment meetings before the roadmap is finalized, not after',
    detail: '"Stakeholder alignment: [roadmap finalization - 1 week]." Stakeholder alignment meeting placed one week before the roadmap is finalized. Alignment meeting: present the evidence for the top-priority items, confirm the prioritization logic with each stakeholder group, surface conflicts between stakeholder priorities and resolve them before the roadmap is communicated. Stakeholder alignment after the roadmap is finalized produces exceptions and escalations that override the prioritization. Alignment before finalization produces consensus that holds when individual stakeholders raise competing requests.',
  },
  {
    step: 'Place customer feedback sessions as standing quarterly events, not as ad hoc research',
    detail: '"Customer feedback sessions: [standing, Q start + 3 weeks]." Standing quarterly customer feedback sessions placed 3 weeks into each quarter. Quarterly customer feedback is distinct from feature-specific discovery — it captures signals about problems the product team has not yet identified. Quarterly sessions: 5-7 customers across different use patterns, open-ended problem discussion (not feature-led), and synthesis of top 3 unmet needs. Quarterly customer sessions that happen regardless of feature cycle provide the raw material for proactive discovery rather than reactive backlog management.',
  },
  {
    step: 'Place the feature decision meeting with defined criteria rather than as a calendar placeholder',
    detail: '"Feature decision meeting: [discovery end + 1 week]. Decision criteria: [evidence threshold defined before discovery]." Feature decision meeting placed with defined decision criteria embedded in the calendar event. Criteria defined before discovery begins — not after: what evidence would confirm the feature is worth building, what evidence would suggest the problem is not significant enough, and what the minimum viable version looks like. Decision meetings without pre-defined criteria become discussions about whether the discovery was sufficient — decision meetings with pre-defined criteria become confirmation or disconfirmation of a testable hypothesis.',
  },
  {
    step: 'Place the post-launch retrospective and next-cycle discovery link before the launch date',
    detail: '"Post-launch retrospective: [launch + 4 weeks]. Discovery link: [retro + 1 week]." Post-launch retrospective placed before the launch date — placed prospectively, not reactively. Retrospective includes: success metric measurement (defined in discovery), unexpected usage patterns, and unresolved problems identified by customers during the first 4 weeks. Discovery link placed 1 week after the retrospective: which unresolved problems from the retrospective should be the subject of the next discovery cycle. Teams that link retrospectives to discovery produce roadmaps that build on themselves; teams that treat launches as endpoints produce roadmaps that repeat.',
  },
]

const ROADMAP_FAILURES = [
  { failure: 'Build commitment made before discovery — feature built for the assumed problem, not the actual one', consequence: 'Build commitments made before discovery are commitments to solve an assumed problem. The assumption may be directionally correct — the problem exists — but the specific manifestation of the problem that customers experience may be different from what the product team imagined. Features built without discovery address the imagined version of the problem. Features built after discovery address the version customers described in their own words, with their own workflows, and with their own success criteria. Discovery does not guarantee success; it converts "we think this is a problem" into "customers confirmed this is a problem in this specific way."' },
  { failure: 'Customer feedback sessions scheduled only after a feature is in build — findings cannot change the decision', consequence: 'Customer feedback sessions scheduled after the build has begun produce findings that can influence the next iteration but cannot change the current one. The engineering resources are committed, the spec is written, and the design is in development. Feedback that suggests the feature addresses a lower-priority problem than the one customers care most about arrives after the decisions that would have changed it. Customer feedback placed before the build decision has a 100% chance of influencing the feature; customer feedback placed after launch has a 50% chance of influencing the next release and a 0% chance of changing the one that shipped.' },
  { failure: 'No post-launch retrospective — launch treated as endpoint rather than as evidence', consequence: 'Features launched without a post-launch retrospective are treated as completed work rather than as evidence about the problem space. The team moves to the next feature without capturing what the launch revealed: which customer segments adopted the feature, which workflows it broke into, which aspects of the problem remained unsolved after the feature shipped. Post-launch retrospectives convert launches from endpoints into datasets. Teams that run post-launch retrospectives build roadmaps that iterate on evidence; teams that skip retrospectives build roadmaps from new requests, repeating the same discovery gaps on successive features.' },
  { failure: 'Roadmap not reviewed quarterly — items built based on prior quarter\'s priorities despite changed evidence', consequence: 'Roadmaps not reviewed quarterly accumulate items committed based on evidence that is 6-12 months old. Customer priorities shift, competitive alternatives emerge, and the problem severity changes — but the roadmap reflects the priorities that were set when the evidence was fresh. Quarterly roadmap reviews with current evidence allow the team to deprioritize items that have been superseded by better evidence and to elevate items that have been validated by new discovery. Roadmaps reviewed annually or ad hoc reflect the organization\'s history of decisions, not the current priority stack.' },
]

export default function ProductRoadmapCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Roadmap Calendar"
        title={
          <>
            Discovery phase before the build commitment.
            <br />
            <em className="not-italic text-gold">Quarterly review. Customer sessions before feature decisions.</em>
          </>
        }
        lede="Product roadmaps filled with unvalidated requests are not roadmaps — they are backlogs with dates. A product roadmap calendar places discovery phases before every build commitment, schedules customer feedback sessions 3 weeks before major feature decisions, runs a quarterly roadmap review before planning begins, and links each post-launch retrospective to the next discovery cycle — so the roadmap reflects validated priorities and each feature builds on the evidence from the last."
        crumbs={[{ label: 'Product Roadmap Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/product-managers"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Momenties for product managers
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures the product roadmap so build decisions are made from evidence, not accumulated requests.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a product roadmap calendar where each feature is validated before it is built and each launch informs the next cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {ROADMAP_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four product roadmap patterns that produce shipped features that do not solve the actual problem.</h2>
          </Reveal>
          <div className="space-y-3">
            {ROADMAP_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Product roadmap analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for product roadmap discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Features with completed discovery before build commitment (% of roadmap)',
                'Discovery cycle completion rate (discovery started vs. completed before gate)',
                'Customer feedback sessions per quarter (conducted vs. planned)',
                'Feature decision criteria defined before discovery began (% of features)',
                'Post-launch retrospective completion rate (within 4 weeks of launch)',
                'Success metric achievement at 4-week retrospective (% of features)',
                'Roadmap items deprioritized at quarterly review vs. total items reviewed',
                'Discovery-to-build cycle time (days from discovery start to build commitment)',
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
        title="Discovery before the build. Retrospective after the launch."
        subtitle="Discovery phase calendar, quarterly roadmap review, customer feedback sessions, and post-launch retrospective linked to the next cycle. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for product managers', href: '/for/product-managers' }}
      />
    </>
  )
}
