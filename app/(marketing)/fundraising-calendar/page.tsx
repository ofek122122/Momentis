import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fundraising Calendar — How to structure nonprofit fundraising so campaigns compound instead of colliding',
  description:
    'A fundraising calendar places the annual fund appeal 6 weeks before year-end, maintains a major donor stewardship cadence between asks, places grant deadlines 4 weeks before the funder date, and schedules board development meetings as standing events — so fundraising produces revenue instead of reactive campaigns.',
  alternates: { canonical: '/fundraising-calendar' },
  openGraph: {
    title: 'Fundraising Calendar — Momenties',
    description: 'Structure nonprofit fundraising so campaigns compound instead of colliding.',
    url: '/fundraising-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Annual fund appeal placed 6 weeks before year-end, not at December 15',
    desc: '"Annual fund appeal open: November 15. Year-end giving deadline: December 31." Annual fund appeal placed to open 6 weeks before year-end. 6-week window gives time for initial outreach, mid-campaign touch, and year-end urgency messaging as three separate moments. Appeals opened December 15 with 16 days to year-end produce one urgency message. Appeals opened November 15 with 6 weeks produce a donor journey — initial appeal, impact story, and year-end deadline reminder — that converts at significantly higher rates than a single December email.',
  },
  {
    icon: Clock,
    title: 'Major donor stewardship placed between solicitation asks, not only before them',
    desc: '"Major donor stewardship — [name]: [ask date + 30 days, + 90 days, + 180 days]." Stewardship placements made immediately after each gift — not only before the next ask. Major donors who receive stewardship between asks give more often and at higher amounts than donors who hear from the organization only when asked. 30-day stewardship: thank-you call with program update. 90-day stewardship: impact report or site visit. 180-day stewardship: mission-connected conversation before the next cycle opens.',
  },
  {
    icon: BarChart3,
    title: 'Grant deadlines placed 4 weeks before the funder date with internal milestones',
    desc: '"Grant narrative draft: [funder deadline - 4 weeks]. Budget review: [narrative - 1 week]. Final submission: [funder deadline - 1 week]." Grant submission placed 4 weeks before the funder deadline with internal milestone dates. Narrative draft at minus-4 weeks leaves time for program review and executive director sign-off. Budget review at minus-1 week from narrative catches alignment errors before submission. Submission at minus-1 week from funder deadline leaves a buffer for portal technical failures and late attachments.',
  },
  {
    icon: Shield,
    title: 'Board giving participation tracked as a standing calendar obligation, not a year-end ask',
    desc: '"Board giving review: standing, first board meeting of Q4." Board giving participation placed as a standing Q4 board meeting agenda item — not a December email to board members. Board giving at 100% is a funder requirement for many institutional funders. Board members who receive a year-end email requesting a gift have a giving decision compressed into 2 weeks. Board members who see giving participation as a standing Q4 agenda item make the decision in October rather than December.',
  },
]

const FUND_STEPS = [
  {
    step: 'Place the full fundraising calendar at the start of the fiscal year',
    detail: '"FY fundraising calendar: annual fund launch [date], spring appeal [date], year-end appeal open [date], Giving Tuesday [date], major events [dates], grant deadlines [dates]." Full calendar placed at fiscal year start. Annual fund launch, spring appeal, Giving Tuesday, year-end appeal, and all major grant deadlines placed before any campaign begins. Campaigns discovered during the fiscal year are added to an existing calendar — not built from scratch under deadline pressure. The calendar shows which campaigns overlap, which months are quiet, and where donor fatigue risk concentrates.',
  },
  {
    step: 'Place grant deadlines backward from the funder date with internal milestones',
    detail: '"Grant [funder name]: narrative draft [funder - 4 weeks], budget review [narrative - 1 week], ED review [budget - 3 days], submission [funder - 1 week]." All grant deadlines placed at fiscal year start with 4 internal milestones each. Narrative draft at minus-4 weeks is the date that writing must begin — not the date it must end. Budget review placed 1 week after narrative draft forces the program and finance teams to review alignment before submission week. ED review placed 3 days before submission gives the executive director time to review without a same-day turnaround. Submission at minus-1 week builds in a technical buffer.',
  },
  {
    step: 'Place major donor stewardship as standing recurring calendar events',
    detail: '"[Donor name] stewardship: quarterly, [specific date each quarter]." Major donor stewardship placed as a recurring event for each donor in the major gift portfolio at the start of the fiscal year. Quarterly stewardship for 10 major donors is 40 calendar events — placed at once in January so each donor receives stewardship at a known cadence. Ad hoc stewardship happens when it is remembered. Standing stewardship happens at the cadence that was planned. Major donors who receive 4 stewardship touchpoints and 1 solicitation per year give at higher rates than donors who receive 1 stewardship and 1 solicitation.',
  },
  {
    step: 'Place the board giving review as a standing Q4 board meeting agenda item',
    detail: '"Board giving participation review: Q4 board meeting, October." Board giving participation reviewed at the first Q4 board meeting. Review agenda: current giving participation rate (number and percentage of board members who have given this fiscal year), board members who have not yet given this cycle, giving goal for year-end, and board chair commitment to close the gap before December 31. Review in October gives 3 months to close the participation gap before year-end. December is too late to move a board member who has not yet engaged.',
  },
  {
    step: 'Place the annual fund campaign with a 3-message cadence and specific send dates',
    detail: '"Annual fund: launch [November 15], impact story [December 1], year-end urgency [December 26]." Three-message annual fund cadence placed with specific dates. Launch message: year in review and case for giving. Impact story message: one donor whose gift made a specific outcome possible. Year-end urgency message: tax deadline, giving goal remaining, and specific ask. Three messages placed at specific dates means each message is written to a calendar event, not to a feeling of urgency. Campaigns built around feelings of urgency produce messages that feel urgent without being specific.',
  },
  {
    step: 'Place the post-campaign analysis before the next campaign planning window',
    detail: '"Post-campaign analysis: [campaign end + 2 weeks]. Next campaign planning: [analysis + 2 weeks]." Post-campaign analysis placed 2 weeks after each campaign closes. Analysis: total raised vs. goal, new donors acquired, lapsed donors reactivated, average gift size, and email performance (open rate, click rate, conversion rate). Analysis placed before next campaign planning — each campaign planned from the data of the previous campaign. Organizations that plan campaigns without reviewing the previous campaign&apos;s data plan from assumptions rather than evidence.',
  },
]

const FUND_FAILURES = [
  { failure: 'Year-end appeal opened December 15 — one message, 16 days, no donor journey', consequence: 'Year-end appeals opened December 15 produce a single urgency message competing with every other organization sending a December 15 appeal. Donors who receive one urgency message make a binary decision: give or don\'t give. Donors who receive a launch message, an impact story, and a year-end urgency message over 6 weeks make a different decision: this organization has shown me what my gift accomplishes, the deadline is approaching, and I feel connected enough to act. The 6-week window is not about more messages — it is about building the context that converts an appeal into a gift.' },
  { failure: 'Major donor stewardship happens only before the next ask — donors are managed transactionally', consequence: 'Major donors who receive stewardship only before a solicitation eventually notice the pattern. The thank-you call in October that is followed by a solicitation in November signals to a sophisticated donor that the relationship is transactional. Major donors managed with stewardship placed between asks — program update in February, site visit in May, impact report in August, solicitation in November — experience a relationship that is mission-connected rather than ask-connected. The stewardship between asks is not preparation for the solicitation. It is the evidence that the organization values the relationship independent of the gift.' },
  { failure: 'Grant narratives started the week before the funder deadline', consequence: 'Grant narratives started the week before the funder deadline are written under conditions that produce reactive content rather than compelling cases. The program team provides impact data under deadline pressure. The budget is assembled by finance in two days. The executive director reviews on the morning of submission. The result is a grant narrative that meets the funder\'s requirements without making a compelling case for the organization\'s work. Grant narratives started 4 weeks before the deadline allow the writer to interview program staff, review actual outcome data, and have the executive director\'s strategic framing integrated into the case rather than appended to it.' },
  { failure: 'Board giving reviewed at December — too late to close the gap before year-end', consequence: 'Board giving participation reviewed in December produces a December conversation about why 40% of board members have not yet given this year and a scramble to close the gap in 3 weeks. Board giving reviewed in October produces a 3-month window to engage non-participating board members with personal outreach from the board chair, a mission-connected conversation rather than a compliance reminder, and a standing expectation that participation is a Q4 agenda item rather than a year-end emergency. 100% board giving participation is not achieved through December emails — it is achieved through a Q4 review process that begins in October.' },
]

export default function FundraisingCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Fundraising Calendar"
        title={
          <>
            Annual fund open 6 weeks before year-end.
            <br />
            <em className="not-italic text-gold">Grant milestones placed. Major donors stewarded between asks.</em>
          </>
        }
        lede="Most fundraising underperforms not because the cause is wrong but because the campaigns were never calendared — year-end appeals open in December with no donor journey, grant narratives start the week before the funder deadline, and major donor stewardship only happens before a solicitation. A fundraising calendar places the annual fund 6 weeks before year-end, puts grant internal milestones 4 weeks before funder dates, schedules major donor stewardship as standing events between asks, and reviews board giving in October — so fundraising produces revenue instead of reactive campaigns."
        crumbs={[{ label: 'Fundraising Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/nonprofit-directors"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Momenties for nonprofit directors
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures nonprofit fundraising so campaigns compound and stewardship is never forgotten.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a fundraising calendar where every grant has milestones and every major donor has a stewardship cadence.</h2>
          </Reveal>
          <div className="space-y-3">
            {FUND_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four fundraising patterns that produce reactive campaigns and missed revenue.</h2>
          </Reveal>
          <div className="space-y-3">
            {FUND_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Fundraising analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for fundraising discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Annual fund launch date vs. year-end deadline (weeks of runway)',
                'Grant narrative draft completion vs. funder deadline (days ahead)',
                'Grant milestone completion rate (narrative, budget, ED review, submission)',
                'Major donor stewardship completion rate vs. standing cadence',
                'Days between last stewardship and next solicitation per donor',
                'Board giving participation rate at Q4 review vs. year-end target',
                'Post-campaign analysis completion before next campaign planning',
                'Campaign revenue vs. goal at close (by campaign type)',
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
        title="Annual fund open 6 weeks before year-end."
        subtitle="Grant milestone calendar, major donor stewardship cadence, board giving review, and year-end campaign discipline. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for nonprofit directors', href: '/for/nonprofit-directors' }}
      />
    </>
  )
}
