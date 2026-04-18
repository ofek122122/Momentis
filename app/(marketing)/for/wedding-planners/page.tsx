import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, Users, Clock, BarChart3, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Wedding Planners — Vendor meetings, client timelines, and wedding day run-of-show',
  description:
    'Wedding planners coordinate hundreds of details across vendors, venues, couples, and families. Momenties templates every wedding timeline, schedules vendor meetings instantly, and puts the wedding day run-of-show on calendar.',
  alternates: { canonical: '/for/wedding-planners' },
  openGraph: {
    title: 'Momenties for Wedding Planners',
    description: 'Wedding timelines, vendor scheduling, and run-of-show calendar management.',
    url: '/for/wedding-planners',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Calendar,
    title: 'Wedding timeline templates',
    desc: 'Template: engagement meeting, venue tour, vendor selection, cake tasting, rehearsal dinner planning, final walkthrough, rehearsal, wedding day. Apply to any couple. All milestones on calendar in 30 seconds.',
  },
  {
    icon: Users,
    title: 'Multi-vendor scheduling without chaos',
    desc: '"Florist consultation tuesday 2pm." "Photographer walkthrough thursday 10am." "Caterer tasting saturday 11am." Every vendor meeting tagged to the wedding. All on calendar before the email is sent.',
  },
  {
    icon: Clock,
    title: 'Wedding day run-of-show',
    desc: 'Build the wedding day on the calendar: hair/makeup 8am, first look 11am, ceremony 2pm, cocktail hour 4pm, reception dinner 6pm, dancing 8pm, last dance 11pm. Real schedule, visible to the whole team.',
  },
  {
    icon: BarChart3,
    title: 'Multi-wedding analytics',
    desc: 'Managing 4 weddings this spring? Tag all meetings by couple. Analytics shows hours per wedding per week. See which events are running over budget before the post-mortem.',
  },
]

const WEDDING_TIMELINE = [
  { time: '12 months out', action: 'Apply wedding template. Engagement meeting, venue tours, and vendor selection milestones all on calendar. Couple sees the full timeline immediately.' },
  { time: '9 months out', action: '"Photographer gallery review tuesday 3pm, Sarah and James." Voice-added after the vendor inquiry email. On calendar before the next couple\'s meeting.' },
  { time: '6 months out', action: 'Cake tasting, florist design meeting, DJ consultation — all templated and scheduled in one session. One week of coordination handled in 30 minutes.' },
  { time: '1 month out', action: 'Final walkthrough with venue. Rehearsal dinner planning. All team members\' calendars updated. Final vendor confirmations added as events.' },
  { time: 'Wedding week', action: 'Rehearsal day and wedding day both on calendar with full run-of-show. Every time block visible to all team members. No one asks "what\'s happening at 4pm?"' },
]

export default function ForWeddingPlannersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Wedding Planners"
        title={
          <>
            Every vendor scheduled.
            <br />
            <em className="not-italic text-gold">Every day perfect.</em>
          </>
        }
        lede="Wedding planners coordinate hundreds of vendors, meetings, tastings, and details across multiple couples simultaneously. Momenties templates every wedding timeline, schedules vendor meetings instantly, and puts the run-of-show where it belongs: on the calendar every team member can see."
        crumbs={[{ label: 'For Wedding Planners' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/calendar-templates"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Wedding templates
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Team plan from $9/person/month</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How wedding planners use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for wedding management.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {USE_CASES.map((uc, i) => (
              <Reveal key={uc.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <uc.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{uc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Wedding timeline</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">12 months to wedding day with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {WEDDING_TIMELINE.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-28 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
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
                &ldquo;I was managing 6 weddings last June — all within 3 weekends. Momenties kept every vendor meeting, rehearsal, and day-of schedule on separate calendars I could view together. Nothing got confused between couples. It was the smoothest June I\'ve ever had.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">I</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Isabella F.</div>
                  <div className="text-xs text-muted-foreground">Wedding planner, 30+ weddings per year</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Every wedding on calendar. Every vendor scheduled."
        subtitle="Wedding timeline templates, vendor scheduling, and run-of-show management. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Wedding templates', href: '/calendar-templates' }}
      />
    </>
  )
}
