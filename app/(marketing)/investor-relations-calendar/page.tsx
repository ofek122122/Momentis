import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Investor Relations Calendar — How to run a proactive investor cadence so capital conversations happen on your timeline',
  description:
    'An investor relations calendar places quarterly update emails before the quarter ends, schedules portfolio company check-ins before founder re-engagement windows close, builds the annual LP meeting into the fundraising planning cycle, and places warm reconnect outreach before the next raise begins. Most founders arrive at fundraising with cold investor relationships because the IR calendar was never built.',
  alternates: { canonical: '/investor-relations-calendar' },
  openGraph: {
    title: 'Investor Relations Calendar — Momenties',
    description: 'Run a proactive investor cadence so capital conversations happen on your timeline.',
    url: '/investor-relations-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Quarterly investor updates sent before the quarter ends, not after',
    desc: '"Q3 investor update — September 25." Quarterly investor updates placed at the last week of each quarter — not early in the following quarter. Updates sent at the end of Q3 arrive while the period is still current. Updates sent in mid-October arrive when investors are reading Q3 reports from 15 other portfolio companies. End-of-quarter update placement is not a timing preference — it is a signal that you manage proactively. Late updates signal reactive management regardless of the content.',
  },
  {
    icon: Clock,
    title: 'Investor reconnect outreach placed 6 months before anticipated raise',
    desc: '"Investor warm-up outreach — 6 months before raise open." Investor reconnect outreach placed 6 months before the anticipated raise window. Cold investor relationships opened at T-30 days before a raise close on worse terms than warm relationships opened at T-6 months. 6-month warm-up: 2-3 progress updates, one milestone shared proactively, one informal meeting before the formal process begins. Investors who have been watching progress for 6 months invest faster and with less diligence overhead than investors meeting the company for the first time.',
  },
  {
    icon: BarChart3,
    title: 'Portfolio company milestone sharing placed before the board meeting',
    desc: '"Major milestone — shared with investors 48 hours before board." Major milestones — new contracts, product launches, leadership hires — shared with investors before the board meeting, not at it. Investors who learn milestones at board meetings experience the company as reactive. Investors who receive milestone updates between board meetings experience the company as proactive. Same milestone, different relationship. Proactive milestone sharing placed as a calendar event before the board meeting, not as an agenda item at it.',
  },
  {
    icon: Shield,
    title: 'Annual LP or investor meeting placed in the planning calendar with 3-month prep window',
    desc: '"Annual LP meeting — Q3 planning begins Q1." Annual investor meeting placed in the January planning calendar with a 3-month prep window. Investor meetings prepared in 3 weeks produce a different experience than ones prepared in 3 months. 3-month prep: financial narrative built from the year, portfolio/company highlights curated, slide deck drafted and refined, key questions anticipated and answered. Annual meeting placed in January planning means the prep window exists before the annual review period begins.',
  },
]

const IR_STEPS = [
  {
    step: 'Place quarterly investor updates as standing calendar events in January',
    detail: '"Q1 update: March 25. Q2 update: June 24. Q3 update: September 24. Q4 update: December 17." All 4 quarterly update deadlines placed in January. Standing placement gives 12 weeks between updates — not discovered as approaching but visible as fixed anchors. End-of-quarter placement keeps updates current. Q4 update placed slightly earlier to avoid holiday windows. Update drafted 3-5 days before send date — not started the day it is due.',
  },
  {
    step: 'Build the investor update format and maintain it across quarters',
    detail: '"Update format: metrics snapshot, milestone achieved, milestone missed + why, next quarter focus, specific ask." Consistent update format maintained across quarters. Investors who receive consistent format updates extract information faster and remember more. Quarterly format: revenue/ARR snapshot, one milestone achieved since last update, one miss with explanation, one focus for next quarter, one specific ask. Specific ask converts the update from a communication to a collaboration request. Updates without a specific ask produce replies of "great update!" — updates with a specific ask produce replies with answers.',
  },
  {
    step: 'Place milestone outreach to investors within 48 hours of major events',
    detail: '"Product launch milestone — investor outreach within 48 hours." Major milestones shared with investors within 48 hours: significant customer wins, product launches, key hires, revenue milestones, partnerships. Milestone outreach placed as a post-event action in the calendar. Investors who learn milestones from quarterly updates (2-3 months after the event) have a different perception of company velocity than ones who receive a brief milestone note within 48 hours. Same milestone, 10x different impact based on timing.',
  },
  {
    step: 'Place investor warm-up outreach 6 months before anticipated raise',
    detail: '"T-6 months before raise: reconnect outreach to target list." Investor warm-up placed 6 months before the anticipated raise window. Warm-up sequence: month 1 reconnect with company update, month 2 share a notable milestone, month 3 request an informal call, months 4-5 continue update cadence, month 6 raise opens with investors who have context. Investors entering a raise process with 6 months of context require less pitch time and close faster than cold investors entering the same process.',
  },
  {
    step: 'Place the annual LP/investor meeting with a 3-month prep milestone',
    detail: '"Annual investor meeting: Q3. Prep start: Q1 week 1." Annual investor meeting placed in Q3 with a Q1 prep start. 3-month prep sequence: January — identify key narratives and metrics for the year, February — draft slide structure, March — full deck draft with financial narrative, May — final prep and rehearsal. Annual meeting with 3-month prep produces a document-quality narrative. Annual meeting with 3-week prep produces a status update.',
  },
  {
    step: 'Place board meeting prep to include proactive investor communication plan',
    detail: '"Board meeting prep: T-5 days. Investor milestone update: T-2 days before board." Board meeting prep includes a review of what to share proactively with investors before the board meeting. Any significant development discussed at the board meeting that investors should know — shared with investors 48 hours before the board meeting, not at it. Board meeting prep placed as a T-5 day milestone with investor communication review as a T-2 day sub-milestone.',
  },
]

const IR_FAILURES = [
  { failure: 'Quarterly updates sent reactively after the quarter closes rather than proactively at end of quarter', consequence: 'Investor updates sent 4-6 weeks after the quarter closes arrive when investors are processing Q1 reports from 15+ other portfolio companies. Updates sent at the end of Q3 arrive while the period is still current and while the investor&apos;s attention is on portfolio activity. End-of-quarter placement is not a minor timing preference — it signals that the company manages proactively. Mid-quarter-following-quarter updates are received as reactive signals regardless of their content.' },
  { failure: 'Investor relationships go cold between raises and are warmed only when capital is needed', consequence: 'Investor relationships that see activity only at raise time are experienced by investors as transactional. Investors who receive quarterly updates, milestone outreach, and occasional check-ins between raises have a fundamentally different relationship with the company than those who hear from the company only when a term sheet is being assembled. Cold-to-raise conversion rates are materially lower than warm-to-raise conversion rates. The 6-month warm-up outreach is not a courtesy — it is the difference between a process that takes 90 days and one that takes 45.' },
  { failure: 'Major milestones shared at the next board meeting rather than proactively', consequence: 'Sharing milestones at board meetings rather than proactively between them communicates that the company\'s relationship with its investors is a quarterly reporting relationship, not an ongoing collaboration. Investors who learn about a major contract at the board meeting 8 weeks after signing have a different experience than investors who receive a brief note within 48 hours of signing. The note does not need to be long — two paragraphs with the context and significance is sufficient. What matters is the timing, not the length.' },
  { failure: 'Annual LP meeting prepared in the month before rather than the quarter before', consequence: 'Annual investor meetings prepared in 3-4 weeks are status updates. Annual investor meetings prepared over 3 months are narratives. The difference is not effort — it is the time required to identify what matters from the year, build a financial narrative that explains performance in context, anticipate the questions that investors will ask, and practice the delivery until it is fluent. One-month prep produces first-draft quality. Three-month prep produces final-quality work because there were multiple drafts.' },
]

export default function InvestorRelationsCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Relations Calendar"
        title={
          <>
            Updates sent before the quarter ends.
            <br />
            <em className="not-italic text-gold">Relationships warm before the raise opens.</em>
          </>
        }
        lede="Most founders arrive at fundraising with cold investor relationships because the investor relations calendar was never built. An investor relations calendar places quarterly update emails at the end of each quarter (not after), shares major milestones with investors within 48 hours, places warm-up outreach 6 months before the anticipated raise, and builds the annual LP meeting prep into the January planning cycle — so capital conversations happen on your timeline, not the market's."
        crumbs={[{ label: 'Investor Relations Calendar' }]}
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures investor relations so relationships stay warm and capital conversations happen proactively.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build an investor relations calendar where relationships are warm before the raise begins.</h2>
          </Reveal>
          <div className="space-y-3">
            {IR_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four investor relations patterns that produce cold raises and reactive relationships.</h2>
          </Reveal>
          <div className="space-y-3">
            {IR_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">IR analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for investor relations discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Quarterly update send date vs. end-of-quarter target',
                'Milestone outreach completion within 48-hour window',
                'Investor warm-up outreach at T-6 months before raise',
                'Annual LP meeting prep start vs. 3-month target',
                'Board meeting pre-communication completion rate',
                'Investor response rate to quarterly updates',
                'Update cadence consistency (quarterly gaps)',
                'Raise open date vs. warm-up outreach start date',
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
        title="Updates sent before the quarter ends."
        subtitle="Quarterly update cadence, proactive milestone sharing, 6-month raise warm-up, and annual LP meeting prep. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for founders', href: '/for/founders' }}
      />
    </>
  )
}
