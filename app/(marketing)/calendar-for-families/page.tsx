import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, Calendar, Zap, Bell, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Family Calendar App — Shared schedules, school events, and family coordination',
  description:
    'A family calendar that everyone actually uses. Momenties lets any family member add events in seconds with natural language or voice, syncs with Google Calendar, and keeps everyone aware of the week ahead.',
  alternates: { canonical: '/calendar-for-families' },
  openGraph: {
    title: 'Family Calendar App — Momenties',
    description: 'Every family member\'s schedule in one shared view.',
    url: '/calendar-for-families',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Zap,
    title: 'Any family member can add events',
    desc: '"Soccer practice tuesday thursday 4:30pm for Emma." "Dad work conference next weekend." Any parent, any device, under 5 seconds. Everyone sees it immediately.',
  },
  {
    icon: Users,
    title: 'All schedules in one view',
    desc: 'Color-coded by family member. School pickups, sports, work travel, medical appointments — all visible at once. No more "did you know about that?"',
  },
  {
    icon: Calendar,
    title: 'Photo school schedules',
    desc: 'Photograph the term calendar from school. AI extracts all dates — parent-teacher conferences, holidays, sports days — and adds them to the family calendar. 30 items in 30 seconds.',
  },
  {
    icon: Bell,
    title: 'Daily Brief for the family',
    desc: 'Morning: today\'s pickups, appointments, and activities. Who\'s going where and when. The whole family day in one view before anyone leaves the house.',
  },
]

const FAMILY_WEEK = [
  { who: 'Monday', action: 'Emma soccer 4:30pm, Dad work late, Mom gym 7pm. All visible. No scheduling conflicts. Pickup handled.' },
  { who: 'Tuesday', action: 'Dentist for both kids 3pm. Added from the clinic\'s text: "photo-to-calendar" reads the appointment card.' },
  { who: 'Wednesday', action: 'Dad voice-adds: "School play rehearsal wednesday thursday friday 4-5pm." Three events, one input, everyone notified.' },
  { who: 'Weekend', action: 'Grandparents visiting Saturday. Family dinner Sunday. Both added. Shared view shows the busy weekend before it arrives.' },
  { who: 'School term', action: 'Photo of school term calendar → 25 dates extracted and added. Holidays, PTA meetings, sports days — all visible.' },
]

export default function CalendarForFamiliesPage() {
  return (
    <>
      <PageHero
        eyebrow="Family Calendar"
        title={
          <>
            Every schedule.
            <br />
            <em className="not-italic text-gold">One family view.</em>
          </>
        }
        lede="Family scheduling falls apart when the barrier to adding events is too high. Momenties makes any family member the calendar keeper — natural language, voice, or photos. Under 5 seconds per event, visible to everyone immediately."
        crumbs={[{ label: 'Family Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/teams"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Shared calendar setup
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free plan · Shared view on Team plan · Google Calendar sync included</p>
      </PageHero>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How families use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features that actually get used.</h2>
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

      {/* Family week */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Real week</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A family week with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {FAMILY_WEEK.map((step, i) => (
              <Reveal key={step.who} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-20 shrink-0 pt-0.5 uppercase tracking-wide">{step.who}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why family calendars fail */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Why most family calendars stop working after two weeks.</h2>
          </Reveal>
          <div className="space-y-4 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                Every family tries a shared calendar. Most abandon it within a month. The reason is always the same: adding events is slow enough that people stop doing it. One person stops updating it, then it's out of date, then nobody trusts it, then it's abandoned.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Momenties solves this at the input layer. Natural language and voice mean adding an event takes 3 seconds — faster than sending a text. When the barrier is that low, everyone adds things consistently. The calendar stays accurate. Everyone trusts it. Everyone uses it.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <div className="space-y-2">
                {[
                  'Any family member can add events from any device',
                  'Voice input works while cooking, driving, or putting kids to bed',
                  'Photo input handles school calendars, activity schedules, and invitations',
                  'Daily Brief keeps everyone aware of the day before it starts',
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA
        title="The family calendar that everyone actually uses."
        subtitle="3-second input, shared view, morning brief. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Shared calendar setup', href: '/teams' }}
      />
    </>
  )
}
