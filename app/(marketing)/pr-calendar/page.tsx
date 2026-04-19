import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'PR Calendar — how to structure a public relations program so media outreach, press releases, and spokesperson preparation happen on a predictable schedule rather than reactively',
  description:
    'A PR program without a calendar produces reactive media outreach, no systematic relationship-building with reporters before news breaks, and press releases sent without pre-briefing the journalists most likely to cover them. This guide covers how to build a PR calendar that separates proactive story development from reactive rapid response, how to schedule media relationship touchpoints before news cycles heat up, how to structure the quarterly editorial calendar review so PR story angles align with business milestones, and how to run the post-coverage audit that updates the media list and spokesperson prep protocol.',
  alternates: { canonical: '/pr-calendar' },
  openGraph: {
    title: 'PR Calendar',
    description: 'Structure a PR program so media outreach, press releases, and spokesperson preparation happen on a predictable schedule.',
    url: '/pr-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'Separate proactive story development from reactive rapid response — they require different preparation and different calendar tracks',
    desc: 'A PR calendar that treats all media activity as a single queue produces a program where proactive story pitching stops when a news cycle heats up and reactive response is unprepared when a story breaks unexpectedly. The PR calendar separates two tracks: proactive (story development, journalist briefings, press release schedule — 6-8 weeks lead time), and reactive (rapid response protocol, spokesperson preparation, holding statement library — always available, no lead time). Proactive track: story angle developed from business milestones 6 weeks ahead, journalist pre-briefed 2-3 weeks before release, embargo set if coverage requires coordination. Reactive track: spokesperson approved, holding statements written for 5-10 scenarios per quarter, media monitoring alert system live. The monthly PR review assesses both tracks — proactive coverage rate and reactive response time.',
  },
  {
    icon: Clock,
    title: 'Journalist relationship touchpoints scheduled before news cycles — not as part of a pitch',
    desc: 'A PR calendar where journalists only hear from the company when there is a story to pitch produces a media list full of contacts who associate the brand with asks. Journalist relationship touchpoints are scheduled independently from story pitches: quarterly non-pitch outreach (share relevant industry data, useful background, offer expert commentary without an agenda — 10-15 journalists per quarter), annual beat reporter briefings (1:1 briefing on company direction before the fiscal year begins — not a pitch, a relationship investment), and conference presence CE (industry conferences where target journalists attend — pre-conference meeting request, in-person relationship building). Relationship touchpoints are on the PR calendar as recurring events, not as campaign dependencies. The quarterly media list audit updates contact accuracy, beat coverage, and responsiveness score.',
  },
  {
    icon: BarChart3,
    title: 'Press release schedule tied to business milestones 6 weeks ahead — not driven by when content is ready',
    desc: 'A PR calendar where press release timing is driven by when content is ready rather than when journalists can cover it produces releases sent on Friday afternoons and announcements that miss the beat reporter who covers that topic. The press release schedule is built from the business milestone calendar 6 weeks ahead: product launches, partnership announcements, funding rounds, executive hires, research publication, and data releases. For each milestone: journalist pre-briefing scheduled 2-3 weeks before release date, embargo set if needed, spokesperson prep 1 week before, press release draft reviewed by legal/IR 10 days before. Distribution calendar: Tuesday-Thursday 8-10am ET for maximum coverage day. No Friday releases without a specific strategic reason. The quarterly press release audit reviews coverage rate (percentage of releases that received Tier 1 coverage) and lead time correlation.',
  },
  {
    icon: Users,
    title: 'Spokesperson preparation calendar — quarterly media training, scenario prep updated from news cycles, and post-interview debrief',
    desc: 'A spokesperson who receives media training once during onboarding and no updates until a crisis produces an executive who is current on messaging but not on the current news environment. Spokesperson preparation is on the PR calendar as recurring events: quarterly message house review (30 minutes — core messages tested against current news headlines, outdated angles removed, new proof points added), semi-annual media training (1 hour — live interview practice with current reporters, on-camera CE, bridging technique review), and post-interview debrief (within 24 hours of every media interview — what questions came that were not anticipated, what bridging worked, what did not, message house updated). The quarterly scenario prep session builds holding statements for the 5-10 most likely negative scenarios of the following quarter based on business activity and industry news trends.',
  },
]

const CALENDAR_RHYTHM = [
  { time: 'Calendar setup', action: 'PR calendar structure defined for the quarter: proactive story pipeline (story angle, target journalist, pitch date, press release date, embargo date), reactive rapid response protocol (spokesperson approved, holding statement library current for 5-10 scenarios), and journalist relationship touchpoint schedule (10-15 non-pitch outreach per quarter). Media list audit at quarter start: verify contact accuracy (beat coverage change, email verification), remove contacts with no response in 4 consecutive quarters, add new beat reporters identified from publication analysis. Media monitoring alerts live for company name, competitors, key executives, and 5-10 industry keywords.' },
  { time: 'Story development', action: 'Proactive story development calendar: 6 weeks before planned milestone — story angle developed from business milestone, narrative arc drafted (the why this matters, the so what, the proof point), target journalist list (3-5 journalists per story: 1-2 Tier 1, 2-3 trade), and hook assessed (does this story have external news relevance or is it only internally interesting?). 4 weeks before — pitch draft reviewed by communications team and legal if needed. 3 weeks before — journalist pre-briefing scheduled. 2 weeks before — embargo offered to Tier 1 journalist if story warrants exclusive or coordinated coverage. Story angle tested: if no journalist responds to pre-briefing, assess story relevance before investing in full press release.' },
  { time: 'Press release', action: 'Press release calendar: draft finalized 3 weeks before release date. Legal and IR review 10 days before release. Spokesperson review and quote approval 7 days before. Embargo agreement signed (if applicable) 5 days before. Distribution list finalized 3 days before: Tier 1 journalists (personalized email, direct relationship), Tier 2 trade journalists (personalized email, context-specific), wire service (if needed for investor relations requirements), and company newsroom. Distribution time: Tuesday-Thursday 8-10am ET. Post-distribution: journalist follow-up calls within 2 hours for Tier 1 contacts who have not acknowledged receipt. Press release coverage tracked: impressions, outlet tier, syndication, and quote inclusion.' },
  { time: 'Journalist relations', action: 'Journalist relationship calendar: quarterly non-pitch outreach to 10-15 journalists (share relevant industry data, offer background briefing, flag upcoming conference attendance — no ask). Annual beat reporter briefing scheduled in Q1: 1:1 briefing on company direction, product roadmap at a high level (no NDA required), and executive access offer. Conference presence: pre-conference meeting requests sent 3 weeks before major industry conferences where target journalists are attending. Beat change monitoring: quarterly review of journalist movements (masthead updates, LinkedIn signals) — 3 journalist beat changes per quarter on average in major publications. Media list updated within 48 hours of confirmed beat change.' },
  { time: 'Spokesperson prep', action: 'Spokesperson preparation calendar: quarterly message house review (30 minutes, first week of each quarter — core messages reviewed against current news environment, outdated proof points removed, new data added). Semi-annual media training (Q1 and Q3, 1 hour — live interview practice, on-camera review, bridging technique, current hostile question scenarios). Post-interview debrief (within 24 hours of every media interview — 15 minutes: questions not anticipated, bridging effectiveness, message delivery score). Quarterly scenario prep (Q4 for following year, Q2 mid-year update — 5-10 most likely negative scenarios developed into holding statements, spokesperson briefed on anticipated questions). Crisis communication protocol reviewed annually.' },
  { time: 'Monthly review', action: 'Monthly PR performance review (45 minutes, first Monday): coverage volume (total stories, Tier 1 coverage count, share of voice versus 3 competitors), message pull-through (percentage of coverage that included target message), spokesperson performance (quote inclusion rate, message accuracy), and rapid response time (minutes to first response on breaking negative coverage). Proactive coverage rate: percentage of planned press releases that received Tier 1 coverage (benchmark 40-60% for technology companies). Reactive response time: first holding statement issued within 30 minutes for Tier 1 crisis scenarios (benchmark). Monthly output: one media list update, one story angle adjustment, one message house refinement.' },
  { time: 'Quarterly reset', action: 'Quarterly PR calendar reset (90 minutes, first Monday of each quarter): full-quarter performance analysis. Coverage analysis: Tier 1 coverage versus target, share of voice trend, beat reporter response rate by journalist. Story angle audit: which proactive stories generated coverage, which did not — pattern identification (data-led versus product-led versus executive thought leadership — coverage rate by category). Media list health: 10-15 new journalist adds per quarter, removal of non-responsive contacts, beat accuracy verification. Spokesperson effectiveness: message pull-through by spokesperson, hostile question handling score, on-camera review from video coverage. Crisis scenario update: 5-10 most likely negative scenarios updated for following quarter based on business pipeline and industry news trends.' },
]

export default function PrCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="PR Calendar"
        title={
          <>
            Proactive story development 6 weeks out. Rapid response protocol always ready.
            <br />
            <em className="not-italic text-gold">Journalist relationships before pitches. Spokesperson prep quarterly. Monthly coverage audit updates media list.</em>
          </>
        }
        lede="A PR program without a calendar produces reactive media outreach, journalist relationships built only during pitches, and press releases sent when content is ready rather than when reporters can cover them. The PR calendar separates proactive story development (6-week lead time, journalist pre-briefing, embargo coordination) from reactive rapid response (holding statement library, spokesperson approval, 30-minute response protocol). Journalist relationship touchpoints are scheduled independently from pitches. Spokesperson preparation runs quarterly. The monthly coverage audit updates the media list and message house. Momenties structures the full PR calendar."
        crumbs={[{ label: 'PR Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/content-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Content calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card required</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">PR calendar principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four design principles for a PR calendar where proactive story development, journalist relationships, and spokesperson preparation run on a predictable schedule.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">PR calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From calendar setup through the quarterly reset that updates story angles, journalist relationships, and spokesperson preparation protocol.</h2>
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
                &ldquo;We were doing PR in reactive mode almost entirely. We had a media list but no relationship touchpoints scheduled outside of pitches, so every journalist interaction started with an ask. When we moved to a PR calendar with quarterly non-pitch outreach — sharing industry data, offering background briefings, flagging our conference attendance — our pitch response rate went from 11% to 34% over two quarters. The biggest change was the 6-week press release calendar. We had been sending releases when legal finished their review, which was usually Thursday afternoon. Moving the schedule so we had a 10-day legal review window built in meant we could send Tuesday morning — that alone increased our Tier 1 coverage rate by about 18 percentage points. The quarterly message house review was the one I had never done systematically. We discovered that one of our core messages — a proof point about customer retention — was based on data from three years prior. We updated it in September and used the new data in our October analyst briefing. The analyst cited it immediately.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">R</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Riya S.</div>
                  <div className="text-xs text-muted-foreground">Head of Communications, B2B SaaS company, Series B</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the PR calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every proactive story, journalist relationship touchpoint, press release deadline, spokesperson prep session, and coverage audit in a structured quarterly PR program.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Proactive story pipeline — 6-week lead time, journalist pre-briefing, embargo coordination',
                'Reactive rapid response — holding statement library, spokesperson approved, 30-minute response protocol',
                'Journalist relationship touchpoints — quarterly non-pitch outreach, annual beat reporter briefings',
                'Press release schedule — tied to business milestones, 10-day legal review, Tuesday-Thursday distribution',
                'Spokesperson quarterly prep — message house review, media training, post-interview debrief',
                'Monthly coverage review — Tier 1 coverage rate, message pull-through, rapid response time',
                'Media list audit — quarterly beat verification, responsiveness scoring, new contact adds',
                'Quarterly reset — story angle audit, share of voice trend, scenario prep for next quarter',
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
        title="Proactive story development scheduled. Journalist relationships before pitches. Spokesperson prep quarterly."
        subtitle="PR calendar: 6-week story pipeline, journalist relationship touchpoints, press release schedule tied to milestones, monthly coverage audit, and quarterly spokesperson preparation. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Content calendar', href: '/content-calendar' }}
      />
    </>
  )
}
