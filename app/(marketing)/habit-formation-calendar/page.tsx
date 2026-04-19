import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { TrendingUp, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Habit Formation Calendar — how to build new habits using your calendar instead of willpower',
  description:
    'Willpower-based habit formation fails because it treats every habit execution as a decision. Calendar-based habit formation removes the decision: the habit is on the calendar at a specific time, linked to a specific context, and tracked with honest completion data. This guide covers the habit stacking structure, the right calendar slot for new versus established habits, the six-week formation protocol, and how to recover from missed days without abandoning the habit.',
  alternates: { canonical: '/habit-formation-calendar' },
  openGraph: {
    title: 'Habit Formation Calendar',
    description: 'Build new habits using your calendar instead of willpower.',
    url: '/habit-formation-calendar',
    type: 'website',
  },
}

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: 'A habit on the calendar is a scheduled appointment — not a resolution',
    desc: 'The difference between a resolution ("I will exercise more") and a calendar habit ("Exercise — Monday, Wednesday, Friday, 7:00 AM, 45 minutes, gym") is specificity and irreversibility of commitment. A resolution is a preference. A calendar block is an appointment you either honor or cancel. Habits placed on the calendar with a specific time, duration, and location have the same psychological weight as any other appointment. Habits that exist only as intentions never acquire that weight. The first step in habit formation is scheduling the habit, not starting the habit.',
  },
  {
    icon: Clock,
    title: 'Stack new habits after existing anchors — not in open time',
    desc: 'New habits placed in open time ("sometime after work") fail because open time is competed for by everything else. New habits placed immediately after existing anchors — established habits that happen reliably — benefit from the anchor\'s automaticity. Examples: "after morning coffee → 10 minutes of reading," "after daily standup → 5-minute walk," "after brushing teeth → 2-minute journal." The anchor provides the cue without requiring a decision. The calendar block reinforces it by making the post-anchor time unavailable for competing activities.',
  },
  {
    icon: BarChart3,
    title: 'Track completion honestly — the calendar data tells you the truth',
    desc: 'Habit tracking in a separate app removes the accountability from the scheduling context. Calendar-based tracking shows completion against plan: did the habit run at its scheduled time? A 70% completion rate over six weeks is excellent for a new habit — it means the habit ran on schedule 7 out of 10 attempts. The calendar data reveals patterns: which days miss, which contexts fail. A habit that fails every Monday probably has a Monday context problem. A habit that fails after 4 PM has an energy problem. The data drives the adjustment, not the intention.',
  },
  {
    icon: Users,
    title: 'The six-week formation protocol: identical until automatic',
    desc: 'Habit formation research (Phillippa Lally, UCL 2009) found median habit automaticity at 66 days, with range from 18 to 254 days depending on complexity. A practical formation protocol: six weeks of identical scheduling — same time, same context, no variation. After six weeks: assess automaticity (does it feel like a decision or a default?). If default: maintain and optionally upgrade duration or frequency. If still a decision: extend six weeks with no changes. Varying the habit before automaticity (moving times, skipping some days intentionally) resets the formation process.',
  },
]

const CALENDAR_RHYTHM = [
  { time: 'Week 1', action: 'Schedule the habit at its permanent time before week 1 begins — not when week 1 starts. Choose the anchor event it follows. Set the duration at the minimum viable version: 5 minutes of reading, 10 minutes of exercise, 2 minutes of journaling. Minimum viable version succeeds more often than an ambitious version. Six weeks of a 10-minute habit produces more automaticity than three successful attempts at a 45-minute habit followed by abandonment. Mark each day as complete or incomplete in the calendar event notes.' },
  { time: 'Week 2–3', action: 'No changes to the schedule. No duration increases. No frequency changes. The goal is identical repetition, not improvement. The impulse to do more in week 2 when motivation is high is the most common cause of week 5 abandonment — motivation returns to baseline and the elevated version of the habit is unsustainable. Track completion. Any day with 0% completion: note the reason in the calendar event ("travel," "sick," "time conflict"). The reason matters for week 6 protocol assessment.' },
  { time: 'Week 4', action: 'Review the missed-day log from weeks 1-3. Identify any pattern: same day of week, same competing event, same energy level. If a pattern exists, adjust the schedule before it causes permanent abandonment. Moving a Tuesday habit to Wednesday because Tuesday has a recurring conflict is not failing at the habit — it is optimizing for automaticity. The goal is 70%+ completion at week 6, not perfection.' },
  { time: 'Week 5–6', action: 'Assess: is the habit running automatically or is each execution still a decision? Signs of automaticity: you do the habit before you consciously decide to, missing the habit produces mild discomfort rather than relief, and the habit runs on schedule even when motivation is low. If automatic: you have formed the habit. If still a decision: extend the six-week identical-schedule protocol for another three weeks before assessing again.' },
  { time: 'After 6 weeks', action: 'If the habit is automatic: optional upgrade. Increase duration by 50% or frequency by one session per week — not both. Give the upgraded version three weeks before assessing again. If the habit is not yet automatic: extend the formation protocol as-is. Do not upgrade a habit that is not yet automatic. Upgrading a non-automatic habit resets the process and typically produces abandonment.' },
  { time: 'Missed days', action: 'The missing-days protocol: never miss twice in a row. One missed day is variance. Two missed days in a row is the beginning of abandonment. After one missed day: the next scheduled occurrence is non-negotiable — do the minimum viable version regardless of motivation level. After two consecutive missed days: return to week 1 minimum viable version for two weeks before resuming normal duration. The "never miss twice" rule is more valuable than any streak-based motivation.' },
  { time: 'Tracking', action: 'Monthly habit audit: for each habit currently in the calendar — is it automatic or still a decision? What is the 30-day completion rate? Any persistent missing patterns? Remove habits that have been in the "still a decision" phase for more than 12 weeks without automaticity — the habit time, context, or duration is wrong. Freeing the calendar slot and redesigning the habit produces better outcomes than continuing to fail at the current version.' },
]

export default function HabitFormationCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Habit Formation Calendar"
        title={
          <>
            Schedule the habit before you start it.
            <br />
            <em className="not-italic text-gold">Six-week identical protocol. Never miss twice. Anchor stacking.</em>
          </>
        }
        lede="Willpower-based habit formation fails because it treats every execution as a decision. Calendar-based habit formation removes the decision: the habit is scheduled at a specific time after a specific anchor, tracked with honest completion data, and held at the minimum viable version for six identical weeks before any upgrade. Automaticity is the goal, not improvement. The calendar provides the structure that willpower cannot. Momenties builds the six-week formation protocol into your calendar."
        crumbs={[{ label: 'Habit Formation Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/habit-tracker-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Habit tracker
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card required</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Habit formation principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four principles for building habits that become automatic instead of requiring continuous willpower.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Habit formation calendar protocol</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">The six-week identical-schedule formation protocol, from scheduling before week 1 through automaticity assessment and optional upgrade.</h2>
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
                &ldquo;I had failed at the same exercise habit four times in two years. I would start with high motivation, do five days in a row, then miss one day, then feel guilty, then miss another, then stop. When I read the Lally research and understood that 66 days was the median to automaticity and I had never gone past 30 days, I realized I had been abandoning habits right before they formed. The change: I scheduled the minimum viable version (15 minutes, not 45), I scheduled it after an anchor that already happened every day (after my morning coffee), and I stopped trying to upgrade duration until it was truly automatic. I hit 70% completion in week 6. By week 10 it felt like a decision not to exercise, not a decision to exercise. That inversion is what automaticity means.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">T</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Thomas G.</div>
                  <div className="text-xs text-muted-foreground">Software engineer, 14-month habit formation experiment</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the habit formation calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every element of the six-week formation protocol on your calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Habit scheduled before week 1 begins — specific time, anchor, minimum viable duration',
                'Six identical weeks with no schedule changes before automaticity assessment',
                'Completion tracking in calendar notes — honest pass/fail, not estimated',
                'Week 4 missed-day pattern review — schedule adjustment if recurring conflict',
                'Week 6 automaticity assessment — decision or default?',
                'Never miss twice rule — next occurrence non-negotiable after one missed day',
                'Optional duration upgrade after confirmed automaticity — 50% increase maximum',
                'Monthly habit audit — remove non-automatic habits after 12 weeks and redesign',
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
        title="Habits formed by calendar structure, not willpower."
        subtitle="Six-week identical-schedule formation protocol, anchor stacking, honest completion tracking, and the never-miss-twice recovery rule. Automaticity is the goal. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Habit tracker calendar', href: '/habit-tracker-calendar' }}
      />
    </>
  )
}
