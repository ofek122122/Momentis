import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Calendar, BarChart3, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendar Anxiety — Why your calendar creates stress and how to fix it',
  description:
    'Calendar anxiety comes from a calendar that lies: missing context, surprise deadlines, overcommitment, and no visibility into what\'s coming. Here\'s how to build a calendar that reduces stress instead of creating it — with complete visibility and no surprises.',
  alternates: { canonical: '/calendar-anxiety' },
  openGraph: {
    title: 'Calendar Anxiety — Momenties',
    description: 'Fix the calendar patterns that create stress and replace them with a calendar that reduces it.',
    url: '/calendar-anxiety',
    type: 'website',
  },
}

const ANXIETY_SOURCES = [
  {
    source: 'Surprise deadlines',
    what: 'A deadline you knew about but forgot to put on the calendar. Discovered the week before — or the day before. Stress that didn\'t have to exist.',
    fix: 'Every deadline on the calendar the moment you know about it. 90-day advance alerts. No deadline is a surprise when it\'s been on the calendar for 3 months.',
  },
  {
    source: 'Overcommitted days',
    what: 'A day with 8 hours of meetings and 6 hours of work due. Mathematically impossible. Discovered at 9am when the day starts.',
    fix: 'Calendar visibility before committing. If the calendar shows a full day, that\'s information — decline the meeting or move the deadline. Overcommitment is preventable.',
  },
  {
    source: 'No buffer or recovery time',
    what: 'Meetings back-to-back with no transition time. Context-switching between different types of work with no mental reset. Exhaustion that accumulates daily.',
    fix: 'Buffer blocks between meetings. Recovery blocks after intensive work. The calendar holds recovery infrastructure, not just commitments.',
  },
  {
    source: 'Uncertain upcoming obligations',
    what: '"I think something is due next week but I\'m not sure." Vague dread about the week ahead. Checking the calendar repeatedly to see if something was missed.',
    fix: 'Complete calendar. If everything is on the calendar, a quick look resolves the uncertainty. Nothing to worry about is verifiable as nothing to worry about.',
  },
]

const FEATURES = [
  {
    icon: Shield,
    title: '90-day advance visibility on all deadlines',
    desc: 'Calendar anxiety about deadlines comes from discovering them too late. Every renewal, filing, and delivery deadline on the calendar with 90-day alerts. The Daily Brief surfaces what\'s coming 90, 30, and 7 days out. Nothing is a surprise.',
  },
  {
    icon: Calendar,
    title: 'Complete calendar reduces uncertainty anxiety',
    desc: 'Incomplete calendars create anxiety: "What am I missing? What\'s coming up that I\'m not tracking?" A complete calendar — every known commitment on it — resolves this uncertainty. You can see the full picture. No fog, no dread.',
  },
  {
    icon: Clock,
    title: 'Buffer blocks built into the schedule',
    desc: 'Back-to-back meetings are a calendar design failure. 10-minute buffer blocks between meetings, 30-minute recovery blocks after intensive calls, transition time between context switches — all on the calendar. Recovery is scheduled, not hoped for.',
  },
  {
    icon: BarChart3,
    title: 'Analytics reveal the overcommitment pattern',
    desc: 'Calendar anxiety often traces to chronic overcommitment — more hours of commitments than available time. Analytics shows meeting load vs. deep work capacity, total committed hours vs. work hours. Overcommitment made visible can be addressed.',
  },
]

const CALENDAR_PRINCIPLES = [
  { principle: 'Put it on the calendar the moment you know', detail: 'Anxiety often comes from tracking commitments in your head rather than the calendar. The rule: every commitment — deadline, meeting, renewal, event — on the calendar immediately when known. The head is freed; the calendar holds it.' },
  { principle: 'Block buffer between every meeting', detail: 'The transition cost between meetings is real. 10 minutes between a client call and a team meeting lets you close the loop on one before entering the other. Buffer blocks aren\'t idle time — they\'re cognitive transition infrastructure.' },
  { principle: 'Decline before overcommitting', detail: 'Calendar anxiety escalates when commitments accumulate. Before saying yes to a meeting or deadline, check the calendar. A visual check shows whether accepting will create an overloaded day. Declining early is better than failing late.' },
  { principle: 'Review the week ahead on Friday', detail: 'Sunday night anxiety about the week ahead comes from uncertainty. A 15-minute calendar review on Friday eliminates it. See what\'s coming. Confirm you\'re prepared. The week doesn\'t start in your head on Sunday — it was already reviewed on Friday.' },
  { principle: 'Measure the gap between committed and available', detail: 'The root of many overcommitment patterns is believing you have more capacity than you do. Analytics shows committed hours vs. available work hours. When the gap is visible, it\'s manageable. Hidden, it compounds into exhaustion.' },
]

export default function CalendarAnxietyPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar Anxiety"
        title={
          <>
            No more surprises.
            <br />
            <em className="not-italic text-gold">No more dread.</em>
          </>
        }
        lede="Calendar anxiety isn't about being busy — it's about not being able to see clearly. Surprise deadlines, back-to-back meetings with no buffer, commitments tracked in your head instead of the calendar, no visibility into what's coming. Here's how to build a calendar that reduces stress instead of creating it."
        crumbs={[{ label: 'Calendar Anxiety' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/weekly-review"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Weekly review guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Root causes</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four sources of calendar anxiety — and the fix for each.</h2>
          </Reveal>
          <div className="space-y-3">
            {ANXIETY_SOURCES.map((item, i) => (
              <Reveal key={item.source} delay={i * 50}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <h3 className="text-sm font-medium text-foreground mb-3">{item.source}</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <p className="text-[10px] font-mono text-amber-400/70 uppercase tracking-wide mb-1.5">Problem</p>
                      <p className="text-xs text-muted-foreground">{item.what}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-emerald-400/70 uppercase tracking-wide mb-1.5">Fix</p>
                      <p className="text-xs text-foreground/80">{item.fix}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How Momenties helps</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features that reduce calendar stress.</h2>
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

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Five principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How to build a calendar that reduces anxiety.</h2>
          </Reveal>
          <div className="space-y-3">
            {CALENDAR_PRINCIPLES.map((item, i) => (
              <Reveal key={item.principle} delay={i * 40}>
                <div className="rounded-xl border border-border/50 p-5">
                  <p className="text-sm font-medium text-foreground mb-2">{item.principle}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Anxiety reduction analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties measures to reduce calendar stress.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Deadlines on calendar vs. discovered late',
                'Buffer time per week — trend',
                'Back-to-back meeting frequency',
                'Committed hours vs. available work hours',
                'Overloaded days per week',
                'Weekly review completion rate',
                'Advance notice on upcoming obligations',
                'Recovery time built into schedule',
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
        title="No surprises. No dread. Calendar that works with you."
        subtitle="Advance deadline visibility, overcommitment analytics, and complete calendar management. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Weekly review guide', href: '/weekly-review' }}
      />
    </>
  )
}
