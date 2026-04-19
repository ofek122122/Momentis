import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Content Calendar — how to structure content production so publishing happens on a consistent schedule instead of in bursts followed by silence',
  description:
    'A content strategy without a calendar becomes a publishing schedule driven by availability rather than by audience timing, topic coverage, or distribution channel requirements. This guide covers how to build a content calendar that separates ideation from production from distribution, how to set a sustainable publishing cadence that the team can maintain without heroics, how to batch content production so individual pieces are not produced the day before publishing, and how to structure the quarterly content audit so the calendar updates based on what works rather than what is easiest to produce.',
  alternates: { canonical: '/content-calendar' },
  openGraph: {
    title: 'Content Calendar',
    description: 'Structure content production so publishing happens on a consistent schedule instead of in bursts followed by silence.',
    url: '/content-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'Separate the ideation meeting from the production schedule — ideas generated once per month, not the day before publishing',
    desc: 'A content calendar where ideas are generated the week content is due produces reactive content: topics chosen by what is easiest to write rather than by audience need, competitive gap, or distribution channel timing. The content calendar separates the monthly ideation session (four-week topic pipeline built in a 60-minute session on the first Monday of the month) from the weekly production schedule (specific content pieces assigned to specific team members with specific publish dates). The ideation session uses three inputs: performance data from the prior month (what drove traffic, engagement, and conversions), keyword and topic gaps in the existing content library, and distribution channel requirements for the upcoming month.',
  },
  {
    icon: Clock,
    title: 'Sustainable cadence: set the publish frequency at 70% of maximum production capacity, not at 100%',
    desc: 'A content calendar built at 100% of team production capacity produces a schedule that works for two weeks and then collapses under the weight of competing priorities. The sustainable cadence is set at 70% of measured production capacity — if the team can produce 10 pieces per month at maximum effort, the calendar targets 7. The 30% buffer absorbs unexpected priorities, allows for quality improvement on individual pieces, and creates inventory for distribution channels that require flexible scheduling. A consistent 7-piece-per-month cadence produces more total content in 12 months than a 10-piece target that results in 3-week silences after every sprint.',
  },
  {
    icon: BarChart3,
    title: 'Batch production: 80% of monthly content produced in the first two weeks, leaving weeks 3-4 for distribution and optimization',
    desc: 'A content calendar where production and publishing run in parallel produces a team that is always producing and never analyzing. Batching — producing 80% of the monthly content library in weeks 1-2 of the month — creates weeks 3-4 for distribution optimization, performance analysis, content repurposing (turning a long-form piece into social media clips, email sequences, or short-form derivatives), and the ideation session for the following month. Batching requires that content briefs are complete before production begins — a brief written the day production starts is not a brief, it is a delayed production decision that compresses the timeline.',
  },
  {
    icon: Users,
    title: 'Quarterly content audit: performance data drives the calendar update, not personal preference',
    desc: 'A content calendar that runs 12 months on the same topic distribution without a performance-based update is a calendar driven by habit rather than by what is working. The quarterly content audit — 90 minutes on the first Monday of each quarter — answers four questions: which topics drove the most conversions (not views), which distribution channels drove the most qualified traffic, which content formats had the highest completion rate, and which topics were planned but underperformed expectations. The audit output is a one-page calendar update for the next quarter: topic distribution shifts, channel emphasis changes, format mix adjustments. The calendar updates based on evidence — not on what the team prefers to produce.',
  },
]

const CALENDAR_RHYTHM = [
  { time: 'Month start', action: 'Month 1 content ideation session (60 minutes, first Monday of the month): four-week topic pipeline built. Inputs: prior month performance data (top 5 pieces by conversion, top 5 by organic traffic, bottom 5 by both metrics), keyword gap analysis (3-5 high-priority topics not yet covered in the content library), and distribution channel schedule for the upcoming month (email send dates, social media peaks, product launch alignment). Output: 8-10 content topics assigned to team members with format, target keyword, target audience stage (awareness/consideration/decision), and target publish date. Content briefs drafted this week — not the week production begins.' },
  { time: 'Week 1–2', action: 'Content production batch: 80% of the month\'s content produced in these two weeks. Production workflow: brief review (author confirms brief is complete before writing begins — if brief is incomplete, it returns to the ideation queue), first draft, internal review (one reviewer, 24-hour turnaround), revision, and ready-to-publish status. Content in ready-to-publish status is loaded into the distribution queue — not published immediately. Buffer inventory: any piece that reaches ready-to-publish status ahead of its scheduled publish date goes into the buffer library for future weeks where production is below 70% of target cadence.' },
  { time: 'Week 3–4', action: 'Distribution and optimization: content publishing on schedule from the queue built in weeks 1-2. Distribution amplification: email newsletter (content pieces with highest prior engagement get featured placement), social distribution (platform-specific format variants produced for top-priority pieces — LinkedIn article versus short-form post versus image carousel), and repurposing pipeline (long-form content repurposed into 3-5 short-form derivatives: key statistics as standalone social posts, listicles extracted as short-form summaries, quotes extracted for social proof assets). Performance monitoring: 7-day and 30-day performance review on all published pieces — conversion rate, organic traffic, engagement rate by format. Anomalies (significantly above or below average) flagged for quarterly audit.' },
  { time: 'Quarter review', action: 'Quarterly content audit (90 minutes, first Monday of each quarter): four questions answered: (1) which topics drove the most conversions in the past 90 days — identify 3 content clusters to expand; (2) which distribution channels drove the most qualified traffic — identify 1-2 channels to increase investment; (3) which content formats had the highest completion rate — identify format mix shift for next quarter; (4) which topics underperformed expectations — identify 3 topics to sunset or reframe. Audit output: one-page quarterly calendar update with topic distribution shifts, channel emphasis changes, and format mix adjustments. Calendar for next quarter updated before month-start ideation session.' },
  { time: 'Annual reset', action: 'Annual content calendar review (180 minutes, October): full-year performance analysis. Content library audit: identify evergreen pieces driving consistent traffic (candidates for refresh and expansion), identify time-sensitive pieces that require annual updates, and identify topic gaps that emerged over the year. Annual calendar structure for next year: topic distribution by quarter, channel mix by quarter, format distribution by quarter, and publish cadence confirmed at 70% of measured production capacity. Annual reset happens in October so January content briefs are written in November — not January, when the year has already started.' },
  { time: 'Brief template', action: 'Every piece on the calendar requires a complete brief before production begins. Brief components: working title, target audience stage (awareness/consideration/decision), primary keyword and secondary keywords (3-5), unique angle (why this piece is different from the 10 existing pieces on this topic), key points (3-5 specific claims the piece will make), call-to-action, target word count or format length, internal links to existing content library (minimum 3), and external sources required (minimum 2 authoritative sources identified before writing begins). A brief that takes more than 20 minutes to read is a content strategy document, not a production brief.' },
  { time: 'Distribution', action: 'Content distribution calendar is a separate calendar layer built on top of the production calendar. Distribution calendar elements: email newsletter send date and featured piece selection (weekly or biweekly schedule confirmed 4 weeks in advance), social platform posting schedule (frequency by platform confirmed for the quarter — LinkedIn 3x/week, Twitter/X 5x/week, Instagram 2x/week), paid distribution budget by piece (top 20% of organic performers get paid amplification budget), and syndication schedule (partner content swaps, guest posting, and republication placements confirmed 2 weeks before publish date). Distribution calendar is reviewed at the monthly ideation session — not built ad hoc after content is published.' },
]

export default function ContentCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Content Calendar"
        title={
          <>
            Ideation monthly. Production batched in two weeks.
            <br />
            <em className="not-italic text-gold">Cadence at 70% of capacity. Quarterly audit drives the update.</em>
          </>
        }
        lede="A content strategy without a calendar becomes a publishing schedule driven by availability — bursts followed by silence. The content calendar separates ideation (monthly, data-driven) from production (batched in weeks 1-2) from distribution (weeks 3-4, amplified with performance data). Cadence is set at 70% of measured production capacity so the schedule holds without heroics. The quarterly audit updates topic distribution, channel emphasis, and format mix based on conversion data — not on what the team prefers to produce. Momenties structures the full content calendar so publishing happens on schedule."
        crumbs={[{ label: 'Content Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/social-media-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Social media calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card required</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Content calendar principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four design principles for a content calendar where production is batched, cadence is sustainable, and the schedule updates based on what works.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Content calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From the monthly ideation session through the quarterly audit that updates topic distribution based on conversion data.</h2>
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
                &ldquo;We had a content strategy but no content calendar. The result was what you would expect: we published a lot in January when everyone was motivated, almost nothing in February and March when competing priorities hit, a burst in April for a product launch, and then inconsistency for the rest of the year. When we built the calendar — ideation session on the first Monday, production batched in weeks 1-2, distribution in weeks 3-4 — the output did not increase dramatically but the consistency did. The quarterly audit was the most valuable piece: we discovered in Q2 that our case study format drove 4x more conversions than our how-to format, and we shifted the mix for Q3. That single shift doubled our content-attributed pipeline. The calendar did not make us more creative — it made the output consistent enough that we could actually measure what was working.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">M</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Maya R.</div>
                  <div className="text-xs text-muted-foreground">VP Marketing, Series B B2B SaaS company</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the content calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every production milestone and distribution event in a structured monthly content cycle.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Monthly ideation session — four-week topic pipeline, performance data input, keyword gaps',
                'Content briefs — complete before production begins, not the day writing starts',
                'Production batch — 80% of monthly content produced in weeks 1-2',
                '70% capacity cadence — sustainable publish frequency with buffer for quality and inventory',
                'Distribution calendar — email, social, paid amplification, and syndication scheduled 4 weeks out',
                'Quarterly audit — topic distribution, channel emphasis, and format mix updated by conversion data',
                '7-day and 30-day performance review — anomalies flagged before quarterly audit',
                'Annual reset in October — next year calendar structure built before January',
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
        title="Content production batched. Cadence sustainable. Calendar updates from data."
        subtitle="Monthly ideation session, production batch in weeks 1-2, distribution in weeks 3-4, quarterly audit by conversion data. Consistent publishing schedule without the heroics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Social media calendar', href: '/social-media-calendar' }}
      />
    </>
  )
}
