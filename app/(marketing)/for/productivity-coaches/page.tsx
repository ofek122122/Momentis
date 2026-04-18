import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, Shield, BarChart3, Clock, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Productivity Coaches — Client session management, credential renewals, and time analytics',
  description:
    'Productivity coaches manage client session schedules, ICF or other professional certification requirements, speaking and training engagements, and content creation calendars. Momenties tracks CE credits, surfaces renewal deadlines, and shows time per client and service type.',
  alternates: { canonical: '/for/productivity-coaches' },
  openGraph: {
    title: 'Momenties for Productivity Coaches',
    description: 'Client management, professional certification, and time analytics for productivity coaches.',
    url: '/for/productivity-coaches',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Users,
    title: 'Client session calendar',
    desc: 'Every client session scheduled, recurring, and tagged by client and service type. "1:1 coaching — Thompson, tuesday 10am, weekly." "Group program — cohort 3, thursday 12pm." "VIP intensive — Chen, friday 9am-1pm." Client hours tracked automatically. No double-booking.',
  },
  {
    icon: Shield,
    title: 'Continuing education and certification',
    desc: '"ICF membership renewal — june 30." "CCE credits — 40 hours per 3-year cycle." "ICF mentor coaching — 10 hours required." "Certification renewal — annual, october." CE credits tagged and tracked. Renewal requirements surfaced 90 days before deadlines.',
  },
  {
    icon: BarChart3,
    title: 'Time per revenue stream analytics',
    desc: 'Tag sessions, content creation, speaking, and course delivery by revenue type. Analytics shows hours per stream each week. Which services generate the most revenue per hour invested? Data to scale what works and stop doing what doesn\'t.',
  },
  {
    icon: Clock,
    title: 'Content and program launch calendar',
    desc: '"Course launch — september 15." "Podcast episode — tuesday publish, monday record." "Newsletter — thursday morning." "Speaking engagement — SHRM conference, june 18." All content and launch commitments visible from the quarter\'s start.',
  },
]

const COACH_WORKFLOW = [
  { time: 'Annual planning', action: 'All ICF or certification renewal dates, CCE credit requirements, speaking commitments, course launches, and group program cohort dates placed on calendar at the year\'s start. Revenue streams planned before the calendar fills with reactive commitments.' },
  { time: 'Client sessions', action: '"1:1 coaching — Williams, monday 2pm, weekly." Recurring session added. Client tagged. Hours per client tracked automatically through the year. At renewal, time investment vs. revenue is visible — data for pricing and capacity decisions.' },
  { time: 'CE credits', action: '"ICF approved training — productivity systems, wednesday 7pm, 6 hours, CCE." Tagged and added. CE credit counter updates. 3-year cycle requirement tracked. No scramble to find 40 hours of CCE in the final quarter.' },
  { time: 'Group program', action: '"Group coaching cohort 4 — thursdays 12pm, 8 weeks, starting october 3." All 8 sessions added. Pre-program onboarding call added. Post-program check-in call added. Full program timeline visible before enrollment opens.' },
  { time: 'Review cycle', action: 'Analytics: hours per client, hours per revenue stream, CE credit progress, capacity utilization. Which clients are renewing? Which programs are growing? ICF cycle on track? Quarterly decisions made with data, not intuition.' },
]

export default function ForProductivityCoachesPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Productivity Coaches"
        title={
          <>
            Clients served well.
            <br />
            <em className="not-italic text-gold">Practice growing.</em>
          </>
        }
        lede="Productivity coaches manage client session schedules, professional certification requirements, speaking and training engagements, and content creation calendars simultaneously. Momenties tracks CE credits toward renewal, surfaces certification deadlines early, and shows time per client and service type — so you can run the practice you teach others to build."
        crumbs={[{ label: 'For Productivity Coaches' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/analytics"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Practice analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No client data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How productivity coaches use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for coaching practice management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Practice calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Annual planning to quarterly review with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {COACH_WORKFLOW.map((step, i) => (
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
                &ldquo;There&apos;s a certain irony in a productivity coach who doesn&apos;t manage their own calendar well. I was that person. Clients paid me to help them get organized, and I was scrambling to remember my own CE credit requirements. Momenties fixed the embarrassing gap between what I teach and how I was actually operating.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Jamie K., ACC</div>
                  <div className="text-xs text-muted-foreground">Productivity coach, solo practice</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What Momenties tracks</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Complete coaching practice management.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Client sessions — hours per client per month',
                'CE credits — tracked toward certification cycle',
                'ICF or certification renewal deadlines',
                'Group program full timeline',
                'Speaking and training engagements',
                'Content creation — podcast, newsletter, courses',
                'Revenue stream time analytics',
                'Capacity utilization per week',
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
        title="Practice managed. Clients served. Certification current."
        subtitle="Client session tracking, CE credit management, and practice analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Practice analytics', href: '/features/analytics' }}
      />
    </>
  )
}
