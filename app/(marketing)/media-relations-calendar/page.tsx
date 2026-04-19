import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Media Relations Calendar — How to build journalist relationships before you need coverage',
  description:
    'A media relations calendar places journalist outreach before the news cycle, maintains a reporter relationship cadence between pitches, places embargo timing before the announcement date, and schedules editorial calendar research as a standing quarterly activity — so media relations produces coverage instead of unanswered pitches.',
  alternates: { canonical: '/media-relations-calendar' },
  openGraph: {
    title: 'Media Relations Calendar — Momenties',
    description: 'Build journalist relationships before you need coverage.',
    url: '/media-relations-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: TrendingUp,
    title: 'Journalist relationship outreach placed before the pitch, not with it',
    desc: '"Reporter relationship outreach: [pitch date - 30 days]." First outreach to a journalist placed 30 days before the pitch. Relationship outreach before the pitch: share a relevant data point or story from outside your organization that maps to the reporter\'s beat, engage with a recent article, or offer a source for a story they\'re working on. Journalists who receive a pitch from someone they\'ve interacted with before open it. Journalists who receive a cold pitch from an unknown sender have a 3% open rate. 30-day relationship window converts a cold pitch into a warm pitch.',
  },
  {
    icon: Clock,
    title: 'Editorial calendar research placed as a standing quarterly activity',
    desc: '"Editorial calendar research: standing, first week of each quarter." Editorial calendar research placed as a standing quarterly activity rather than an ad hoc pre-pitch research task. Quarterly research: which outlets publish themed issues or special reports in the next 90 days, which reporters have been assigned to relevant beats, and which industry events are producing editorial coverage windows. Editorial calendars define when publications are looking for specific content — pitches submitted to a themed issue window have 3x the placement rate of pitches submitted outside a themed window.',
  },
  {
    icon: BarChart3,
    title: 'Embargo timing placed before the announcement with lead time for reporter preparation',
    desc: '"Embargo offer: [announcement - 5 business days]. Embargo lift: [announcement date, time zone specified]." Embargo offer placed 5 business days before the announcement date. 5-business-day window gives reporters time to conduct additional interviews, research background, and write the full story before the embargo lifts. Embargos offered the day before the announcement give reporters 18 hours to write a story on a topic they may not have background on — and produce shorter, thinner coverage. 5-business-day embargos produce deeper coverage because they give reporters preparation time.',
  },
  {
    icon: Shield,
    title: 'Pitch follow-up placed 72 hours after the initial pitch, not immediately after',
    desc: '"Pitch follow-up: [pitch date + 72 hours]." Follow-up placed exactly 72 hours after the initial pitch. 72-hour follow-up is after the journalist has had time to review the pitch but before it has expired from their working memory. Same-day follow-up signals impatience. 2-week follow-up arrives when the journalist has forgotten the pitch and is now in a different news cycle. 72-hour follow-up lands in the window where the journalist remembers receiving the pitch and can make a quick decision without rebuilding context.',
  },
]

const MEDIA_STEPS = [
  {
    step: 'Build the beat journalist list before the first pitch',
    detail: '"Journalist list: [beat] — [reporter name, outlet, recent articles, contact]." Beat journalist list built before any pitch is sent. List structure: reporter name, outlet, 3 recent articles on the beat, preferred contact method, and any prior relationship context. A beat journalist list of 15-20 reporters means that each announcement has 15-20 pre-researched pitch targets rather than a last-minute search for "who covers fintech" under deadline pressure. List maintained as a living document — reporters change beats and outlets every 12-18 months, so the list is reviewed quarterly.',
  },
  {
    step: 'Place journalist relationship touchpoints as standing monthly calendar events',
    detail: '"Journalist relationship touchpoint: [reporter name], monthly." One non-pitch touchpoint per month for each reporter on the active relationship list. Touchpoint options: share a relevant third-party study or dataset, engage substantively with a recent article, offer the reporter access to an expert source for a story they\'re working on, or share a proprietary data point the reporter can use without attribution. Journalists who receive value between pitches open the next pitch. Journalists who only hear from PR contacts when there is a pitch to place develop a Pavlovian response — the contact arrives, a pitch follows.',
  },
  {
    step: 'Research editorial calendars at the start of each quarter',
    detail: '"Editorial calendar research: [Q start, first week]." Quarterly editorial calendar research produces a 90-day list of themed issue windows, special reports, and conference coverage periods for each target outlet. Themed issues have 3-6 month lead times for print publications and 4-8 week lead times for digital publications. Research in Q1 identifies Q2 themed issue windows and the pitch deadlines for each. Pitches submitted to a themed issue window require a pitch that explicitly addresses the theme — pitch calendar structured around editorial windows rather than around announcement schedules.',
  },
  {
    step: 'Place the announcement pitch calendar 30 days before each planned announcement',
    detail: '"Pitch calendar: [announcement - 30 days]." Pitch calendar placed 30 days before each planned announcement. 30-day pitch calendar: identify the 3-5 most relevant reporters for this announcement, confirm relationship status (warm or cold), review each reporter\'s recent work for current beat focus, and draft the pitch angle specifically for each reporter\'s frame rather than sending a generic pitch. Reporters who receive a pitch clearly written for their specific beat angle respond at 5x the rate of reporters who receive a generic press release.',
  },
  {
    step: 'Place the embargo offer with a clear lift time and time zone specified',
    detail: '"Embargo: [announcement - 5 days], lift [date, time, EST/PST specified]." Embargo offer sent 5 business days before the announcement with an explicit lift time including time zone. Embargos without a specified time zone produce coverage that lifts at different times across outlets — some reporters interpret "9 AM" as their local time, others as ET. Embargo offer includes: the story, the embargo lift date and time with time zone, the exclusive interview offer or supporting materials available under embargo. Reporters who accept an embargo and are given adequate preparation time produce deeper coverage than reporters who receive a same-day press release.',
  },
  {
    step: 'Place the post-coverage analysis before the next pitch cycle',
    detail: '"Post-coverage analysis: [announcement + 2 weeks]. Next pitch cycle planning: [analysis + 1 week]." Coverage analysis placed 2 weeks after announcement. Analysis: which outlets placed coverage, which reporters responded to the pitch, what angle produced the strongest coverage, and which reporter relationships were activated by this cycle. Analysis placed before the next pitch cycle planning — each pitch cycle designed from the previous cycle\'s data. Coverage analysis that identifies the pitch angle with the highest reporter response rate produces the next pitch iteration from evidence rather than assumption.',
  },
]

const MEDIA_FAILURES = [
  { failure: 'Pitches sent cold to reporters with no prior relationship — 3% open rate', consequence: 'Cold pitches to reporters who have never heard of the sender have a 3% open rate because reporters receive 50-300 pitches per week and open pitches from sources they recognize. Building a relationship 30 days before the pitch is not a guarantee of coverage — it is the threshold for a pitch that gets read. The pitch still needs to be relevant to the reporter\'s current beat, timed to the reporter\'s editorial context, and written for the reporter\'s audience rather than the organization\'s preferred angle. But a pitch that gets opened has a chance. A pitch that doesn\'t get opened has no chance regardless of how strong the story is.' },
  { failure: 'Embargo offered 24 hours before announcement — reporters produce thin coverage under time pressure', consequence: 'Embargos offered 24 hours before an announcement give reporters 24 hours to research context they don\'t already have, find and schedule sources, and write a full story. The result is a story that reports what the announcement says rather than contextualizing it within a broader trend, adds no sources beyond the organization\'s spokesperson, and covers the surface of the story without the depth that produces reader engagement. Embargos offered 5 business days before the announcement give reporters time to find three independent sources, research the competitive context, and write a story that the organization cannot write about itself because it would appear self-serving.' },
  { failure: 'Pitch follow-up sent the same day as the pitch — signals impatience', consequence: 'Same-day follow-up signals that the PR contact does not trust the reporter to read the pitch, does not understand the reporter\'s workflow, and is optimizing for the PR contact\'s timeline rather than the reporter\'s. Reporters who receive same-day follow-up to a pitch are less likely to respond to the follow-up (it feels aggressive) and are less likely to engage with future pitches from the same source. 72-hour follow-up signals that the contact respects the reporter\'s workflow, is confident the pitch has merit, and is following up at a natural decision point rather than creating urgency.' },
  { failure: 'Editorial calendar research done only before a pitch — misses themed issue windows with months of lead time', consequence: 'Editorial calendar research done only before a specific pitch produces pitches that are well-matched to the reporter\'s beat but poorly timed to the publication\'s editorial cycle. A pitch submitted to a trade publication during an unthemed issue has standard competition. A pitch submitted to the same publication 8 weeks before their "digital transformation" special issue has a clearly relevant window — and the pitch letter can reference the themed issue explicitly. Quarterly editorial calendar research identifies these windows 60-90 days in advance, giving enough lead time to develop content specifically for the themed issue rather than retrofitting an existing pitch to the theme.' },
]

export default function MediaRelationsCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Media Relations Calendar"
        title={
          <>
            Relationship outreach 30 days before the pitch.
            <br />
            <em className="not-italic text-gold">Embargo 5 business days ahead. Follow-up at 72 hours.</em>
          </>
        }
        lede="Most pitches go unread because they arrive cold. A media relations calendar places journalist relationship outreach 30 days before the pitch, researches editorial calendars quarterly to find themed issue windows, offers embargos 5 business days before the announcement to give reporters preparation time, and places pitch follow-up at 72 hours — so media relations produces coverage instead of unanswered pitches and missed editorial windows."
        crumbs={[{ label: 'Media Relations Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/marketing-managers"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Momenties for marketing managers
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties structures media relations so pitches are read and coverage is placed.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a media relations calendar where journalist relationships are maintained between pitches and coverage windows are never missed.</h2>
          </Reveal>
          <div className="space-y-3">
            {MEDIA_STEPS.map((item, i) => (
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four media relations patterns that produce sent pitches and no coverage.</h2>
          </Reveal>
          <div className="space-y-3">
            {MEDIA_FAILURES.map((item, i) => (
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Media relations analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for media relations discipline.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Pitch open rate by relationship status (warm vs. cold)',
                'Days of relationship outreach before pitch (lead time)',
                'Editorial calendar windows identified per quarter',
                'Pitches submitted to themed issue windows vs. total pitches',
                'Embargo offer lead time (days before announcement)',
                'Follow-up timing from initial pitch (hours to follow-up)',
                'Coverage placed vs. pitches sent (placement rate by outlet type)',
                'Post-coverage analysis completion before next pitch cycle',
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
        title="Relationship outreach 30 days before the pitch."
        subtitle="Journalist relationship cadence, editorial calendar research, embargo timing discipline, and 72-hour follow-up placement. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Momenties for marketing managers', href: '/for/marketing-managers' }}
      />
    </>
  )
}
