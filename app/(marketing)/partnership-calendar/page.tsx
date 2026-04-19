import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partnership Calendar — How to build and maintain business partnerships so they produce revenue instead of stalling',
  description:
    'A partnership calendar places the joint business review before the renewal window, maintains a 30-day activation sequence from signed partnership agreement to first revenue activity, places co-marketing milestones before the campaign launch, and schedules quarterly partnership health checks as standing events rather than reactive calls. Most partnerships stall not because the opportunity was wrong but because the activation was never calendared.',
  alternates: { canonical: '/partnership-calendar' },
  openGraph: {
    title: 'Partnership Calendar — Momenties',
    description: 'Build partnerships so they produce revenue instead of stalling.',
    url: '/partnership-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Partnership activation sequence placed within 30 days of agreement signing',
    desc: '"Day 1: partner kickoff meeting. Day 7: joint go-to-market brief. Day 14: co-marketing assets draft review. Day 21: first co-promotion event scheduled. Day 30: first pipeline review." Activation sequence placed immediately at agreement signing — not scheduled when momentum builds. Partnerships signed without a 30-day activation sequence lose momentum as both organizations return to their own priorities. 30-day sequence converts signing excitement into a structured launch before the initial energy dissipates.',
  },
  {
    icon: Clock,
    title: 'Quarterly partnership health check placed as a standing recurring event',
    desc: '"Quarterly partnership review — standing, first Tuesday of each quarter." Quarterly health check placed as a standing recurring event at signing — not scheduled reactively when performance drops. Standing quarterly cadence ensures partnership performance is reviewed before issues require reactive intervention. Partnerships reviewed quarterly hold their activation energy longer than ones reviewed only when something needs to be fixed. Reactive partnership calls happen because the proactive quarterly check was never placed.',
  },
  {
    icon: BarChart3,
    title: 'Joint business review placed 6 weeks before the annual renewal window',
    desc: '"Annual partnership renewal — placed 6 weeks before contract anniversary." Joint business review placed 6 weeks before renewal — not at the renewal date. 6-week lead gives both partners time to review performance data, negotiate any changes, and process the renewal. Renewal conversations started at the contract anniversary are either a rubber stamp or a negotiation under time pressure. Renewal conversations started 6 weeks before have time to address performance gaps and adjust terms before the contract lapses.',
  },
  {
    icon: Shield,
    title: 'Co-marketing milestones placed before the campaign launch, not during production',
    desc: '"Co-marketing campaign: brief signed T-8 weeks, assets approved T-3 weeks, launch T-0." Co-marketing milestones placed at the campaign agreement date — not during production. Brief signed 8 weeks before launch gives both partner marketing teams time to produce assets. Asset approval at T-3 weeks gives time for revision. Launch without a pre-placed milestone calendar is a shared calendar that produces misaligned assets at different stages of readiness on launch day.',
  },
]

const PARTNER_STEPS = [
  {
    step: 'Place the 30-day activation sequence the day the agreement is signed',
    detail: '"Day 0: signed. Day 1: kickoff meeting scheduled. Day 7: joint GTM brief due. Day 14: first co-promotion idea list. Day 21: first event or campaign scheduled. Day 30: first pipeline review call." Activation sequence placed on day 0. Partnership activation is a managed transition from agreement to activity — not a natural emergence from enthusiasm. Kickoff meeting placed within 24 hours of signing while the signing energy is at peak. GTM brief due on day 7 means both teams have a shared direction before the week 2 co-marketing work begins.',
  },
  {
    step: 'Place quarterly health checks as standing events for the partnership term',
    detail: '"Q1 partner review: [date]. Q2 partner review: [date]. Q3 partner review: [date]. Q4 partner review: [date]." All 4 quarterly health checks placed at agreement signing for the full partnership year. Quarterly health check agenda: referral pipeline review, joint pipeline review, co-marketing performance, and what each partner needs from the other in the next quarter. Standing placement means the review happens regardless of quarterly priorities. Reactive partnership calls happen when standing checks were never placed.',
  },
  {
    step: 'Place the annual joint business review 6 weeks before the contract anniversary',
    detail: '"Annual JBR: [anniversary - 6 weeks]. Renewal decision: [anniversary - 2 weeks]." Annual JBR placed 6 weeks before the contract anniversary. JBR agenda: full year performance vs. year 1 goals, attribution analysis (what revenue can be traced to the partnership?), what would need to change for year 2 to be worth more to both partners? Renewal decision placed at 2 weeks before anniversary — enough time to execute the renewal paperwork or make an exit decision without lapsing.',
  },
  {
    step: 'Place co-marketing campaign milestones at the campaign brief meeting',
    detail: '"Co-marketing campaign [name]: brief signed [date], creative brief [brief + 2 weeks], assets approved [brief + 5 weeks], launch [brief + 8 weeks]." Campaign milestones placed at the brief meeting, not during production. Creative brief due 2 weeks after brief signing gives marketing team an agreed scope. Asset approval 5 weeks after signing allows production and one revision cycle. Launch 8 weeks after signing means the full campaign is scoped before any asset is produced. Co-marketing campaigns planned at launch produce assets at different readiness levels on the same day.',
  },
  {
    step: 'Place partner champion relationship maintenance between formal reviews',
    detail: '"Partner champion check-in: monthly, 20 minutes." Monthly informal check-in with the partner champion placed as a standing calendar event separate from the quarterly review. Partner champion is the internal advocate who keeps the partnership prioritized within their organization. 20-minute monthly call: what is the partner champion hearing internally about the partnership? What is the champion celebrating? What friction point needs to be addressed before the quarterly review? Champion relationships maintained between reviews prevent the quarterly review from being the first time issues surface.',
  },
  {
    step: 'Place the post-campaign analysis before the next campaign brief',
    detail: '"Post-campaign analysis: [campaign end + 2 weeks]. Next campaign brief: [analysis + 2 weeks]." Post-campaign analysis placed 2 weeks after campaign end. Analysis: what was the reach, engagement, and pipeline attribution from this campaign? What would each partner do differently? Analysis placed before the next campaign brief — next campaign designed from current campaign learnings. Campaigns designed without the previous campaign&apos;s post-mortem start from the same assumptions as the campaign that just ended.',
  },
]

const PARTNER_FAILURES = [
  { failure: 'Partnership activation not calendared — left to when both partners "have capacity"', consequence: 'Partnerships that activate "when both organizations have capacity" activate when neither is busy, which means they activate slowly or not at all. The signing moment is the highest-energy point of the partnership. An activation sequence that begins within 24 hours of signing harnesses that energy. An activation sequence that begins when capacity opens begins 3-6 weeks after signing when both teams have returned to their own priorities and the partnership is now one of many items on a backlog. Most partnership failures are activation failures.' },
  { failure: 'Quarterly health checks scheduled reactively rather than as standing events', consequence: 'Reactive partnership calls happen when something has gone wrong. Standing quarterly health checks happen before something goes wrong. The difference is not just timing — it is the type of conversation. Reactive calls address symptoms. Standing checks address trends. A quarterly check that shows referral pipeline declining 2 quarters in a row produces a directional intervention. A reactive call when the partnership is generating nothing produces a triage intervention. Standing placement converts partnership management from reactive to proactive.' },
  { failure: 'Annual renewal conversation started at the contract anniversary rather than 6 weeks before', consequence: 'Renewal conversations started at the contract anniversary are under time pressure from the first moment. Performance gaps identified at the anniversary require either accepting current performance for year 2 or negotiating changes under lapsing contract pressure. Performance gaps identified 6 weeks before the anniversary can be addressed — a year 2 structure that fixes the attribution problem, a new co-marketing commitment to address the pipeline shortfall, or a mutual exit decision made with enough time for a clean transition rather than a surprise lapse.' },
  { failure: 'Co-marketing milestones placed during production rather than at the campaign brief', consequence: 'Co-marketing campaigns where milestones are discovered during production produce assets at different readiness levels on launch day. Marketing team A finishes the landing page; marketing team B is still revising the email sequence. The campaign launches with partial assets. The partial launch produces partial performance data that is attributed to the campaign concept rather than the incomplete execution. Co-marketing milestone placement before production begins converts the campaign from a coordination effort into a project with a plan.' },
]

export default function PartnershipCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnership Calendar"
        title={
          <>
            Activated in 30 days. Reviewed every quarter.
            <br />
            <em className="not-italic text-gold">Renewal conversation started 6 weeks early.</em>
          </>
        }
        lede="Most partnerships stall not because the opportunity was wrong but because the activation was never calendared. A partnership calendar places the 30-day activation sequence the day the agreement is signed, maintains quarterly health checks as standing events for the full partnership term, places the joint business review 6 weeks before the renewal window, and schedules co-marketing milestones before production begins — so partnerships produce revenue instead of stalling."
        crumbs={[{ label: 'Partnership Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/founders"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Momenties for founders
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures partnerships so they activate, compound, and renew on a managed timeline.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a partnership calendar where activation is managed and renewal is never a surprise.</h2>
          </Reveal>
          <div className="space-y-3">
            {PARTNER_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four partnership patterns that produce signed agreements and stalled pipelines.</h2>
          </Reveal>
          <div className="space-y-3">
            {PARTNER_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Partnership analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for partnership management discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Time from signing to first activation event (days)',
                'Quarterly health check completion rate vs. standing schedule',
                'Joint business review completion 6+ weeks before anniversary',
                'Co-marketing milestone completion rate vs. campaign timeline',
                'Renewal decision lead time (weeks before anniversary)',
                'Monthly partner champion check-in completion rate',
                'Post-campaign analysis completion before next campaign brief',
                'Partnership pipeline attribution vs. target at each quarterly review',
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
        title="Activated in 30 days. Reviewed every quarter."
        subtitle="30-day activation sequence, standing quarterly health checks, 6-week renewal window, and co-marketing milestone calendar. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for founders', href: '/for/founders' }}
      />
    </>
  )
}
