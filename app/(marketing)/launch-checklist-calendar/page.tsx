import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Launch Checklist Calendar — how to structure a product or feature launch so nothing falls through',
  description:
    'A launch without a calendar checklist becomes a scramble in the final 48 hours. This guide covers the 6-week launch calendar structure, how to separate internal readiness milestones from external announcement timing, why the launch date should be set before the final sprint begins, and how to run the post-launch monitoring window as a structured calendar period rather than an anxious informal watch.',
  alternates: { canonical: '/launch-checklist-calendar' },
  openGraph: {
    title: 'Launch Checklist Calendar',
    description: 'Structure a product or feature launch so nothing falls through.',
    url: '/launch-checklist-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'Set the launch date before the final sprint begins — not when the build is almost done',
    desc: 'A launch date set after the build is substantially complete is a date chosen under deadline pressure. A launch date set before the final sprint begins is a forcing function that shapes the sprint scope. "We launch in 6 weeks" changes what gets built in those 6 weeks more than any backlog prioritization session. The launch date goes on the calendar before the final sprint starts, shared with all stakeholders. Moving the launch date is a decision that requires explicit approval — it is not a default response to missed internal milestones.',
  },
  {
    icon: Clock,
    title: 'Separate internal readiness milestones from external announcement timing',
    desc: 'Internal readiness (feature freeze, QA complete, documentation done, support trained) and external announcement timing (press outreach, social posts, email sends) have different dependencies and different audiences. Internal milestones drive the build and QA calendar. External milestones drive the marketing and communications calendar. Conflating them produces situations where marketing is ready but the product is not, or where the product is ready but no one knows it launched. Run two parallel tracks with a sync checkpoint 1 week before launch.',
  },
  {
    icon: BarChart3,
    title: 'The launch is not the finish line — the post-launch monitoring window is part of the launch',
    desc: 'A launch without a structured post-launch period produces reactive monitoring: you check metrics when you are anxious and ignore them when you are busy. The post-launch monitoring window (days 1-14 after launch) is a calendar period with specific monitoring events: 24-hour error rate and key metric review, 7-day cohort analysis, 14-day retrospective. The monitoring events are on the calendar before launch day. The team knows when they are looking at what. The launch is not done until the 14-day retrospective runs.',
  },
  {
    icon: Users,
    title: 'Feature freeze is a calendar event — not a feeling that the build is done enough',
    desc: 'Feature freeze means no new features are merged after the freeze date, even if they are ready. Feature freeze placed on the calendar 2 weeks before launch creates a 2-week QA and polish window. Feature freeze the day before launch creates a 1-day window. The freeze date is the most important internal readiness milestone because it determines the length of the QA window. "Almost done" features that miss the freeze ship in the next launch or do not ship. The freeze date is communicated to all contributors before the sprint begins.',
  },
]

const CALENDAR_RHYTHM = [
  { time: 'Week -6', action: 'Set the launch date before this week begins. Share with all stakeholders. Place feature freeze at week -2. Place QA complete at day -3 of launch. Place documentation complete at day -5. Place support training at week -1. Place external announcement assets due at week -1. Place pre-launch team sync at day -1. All of these are calendar events placed now, not when the work is close to done. The calendar structure is the plan — it is not created after the plan is complete.' },
  { time: 'Week -4', action: 'Internal readiness track: confirm scope against feature freeze date. Any features that cannot reach code-complete by feature freeze are moved to the next launch. No exceptions for "almost done" features — scope is fixed now. External readiness track: launch announcement copy drafted, landing page updated, email sequence drafted. Review with stakeholders. Any external asset requiring external partner involvement (press, distribution partners) has its own calendar event with the external deadline.' },
  { time: 'Week -2', action: 'Feature freeze. No new features merged after this date. QA begins on the frozen feature set. Any bugs found in QA: severity 1 (launch-blocking) are fixed immediately; severity 2 (significant degradation) are fixed before launch day; severity 3 (minor issues) are logged for post-launch and do not block launch. QA complete milestone placed at day -3. If QA complete is not achieved by day -3, the launch date moves — it does not compress the QA window.' },
  { time: 'Week -1', action: 'Support training on new features. Documentation review. External announcement assets finalized. Pre-launch team sync: confirm all internal readiness milestones hit, confirm external assets are ready, confirm rollback plan is documented and tested. Rollback plan: what is the procedure if a critical bug is found in the first hour after launch? The rollback plan is documented before launch day, not discussed for the first time after the incident.' },
  { time: 'Launch day', action: 'Internal launch at start of business (for monitoring window). External announcement at the planned time (afternoon for B2B, morning for B2C — audience-specific timing). Error monitoring active. Key metric dashboard refreshing. Support team on standby. First 24-hour review event already on the calendar. Do not make launch day decisions that should have been made in week -1.' },
  { time: 'Days 1–7', action: '24-hour review: error rate versus pre-launch baseline, key conversion metric versus pre-launch baseline, support ticket volume versus pre-launch baseline. 7-day cohort: activation rate for new users acquired in first 7 days, feature adoption rate in first-week cohort, support ticket theme analysis. Both of these are scheduled calendar events with assigned owners. The 7-day cohort event is scheduled before launch day.' },
  { time: 'Day 14', action: '14-day post-launch retrospective: what went well in the build, QA, and launch process? What would you do differently? What is the 14-day activation and retention data? What features are shipping in the next launch based on what you learned in the post-launch monitoring window? The retrospective produces two outputs: a written document for the team and a calendar event for the next launch with lessons applied.' },
]

export default function LaunchChecklistCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Launch Checklist Calendar"
        title={
          <>
            Launch date set before the sprint. Feature freeze 2 weeks out.
            <br />
            <em className="not-italic text-gold">Post-launch monitoring window on the calendar before launch day.</em>
          </>
        }
        lede="A launch without a calendar checklist becomes a final-48-hours scramble. The launch calendar is set 6 weeks before launch: launch date placed before the sprint begins, feature freeze at week -2 creating a 2-week QA window, external assets due at week -1, and post-launch monitoring events — 24-hour, 7-day, and 14-day retrospective — placed on the calendar before launch day. The launch is not done until the 14-day retrospective runs. Momenties structures the full launch calendar."
        crumbs={[{ label: 'Launch Checklist Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/product-launch-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Product launch
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card required</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Launch calendar principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four design principles for a launch calendar that produces clean launches instead of chaotic final sprints.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Launch checklist calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">The complete 6-week launch calendar from sprint start through 14-day post-launch retrospective.</h2>
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
                &ldquo;We had done eight launches with the same pattern: everything felt okay until week -1, then the last week became a scramble, then launch day had too many things happening simultaneously, then we checked metrics for two anxious days and moved on without a real retrospective. When we built the launch calendar six weeks out and placed the feature freeze, the QA window, and the post-launch monitoring events before the sprint started, the last week stopped being a scramble. Feature freeze forced the scope conversation two weeks early instead of the night before launch. The 14-day retrospective produced the process improvements that made the ninth launch faster than any of the previous eight. The launch date placed before the sprint was the most important change.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">C</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Chris O.</div>
                  <div className="text-xs text-muted-foreground">VP Product, B2B SaaS company, 9 launches over 3 years</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the launch checklist calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every milestone in a structured 6-week launch calendar, placed before the sprint begins.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Launch date — set before the final sprint begins, shared with all stakeholders',
                'Feature freeze — week -2, creating a 2-week QA and polish window',
                'QA complete milestone — day -3, required for launch date to hold',
                'External assets due — week -1 for copy, landing page, email, press outreach',
                'Pre-launch team sync — day -1, rollback plan confirmed and documented',
                '24-hour post-launch review — error rate, conversion, support volume',
                '7-day cohort analysis — activation rate, feature adoption, support themes',
                '14-day retrospective — process improvements applied to next launch calendar',
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
        title="Clean launches from structured calendars."
        subtitle="6-week launch checklist calendar: launch date before the sprint, feature freeze 2 weeks out, QA window, external asset deadlines, and post-launch monitoring events placed before launch day. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Product launch calendar', href: '/product-launch-calendar' }}
      />
    </>
  )
}
