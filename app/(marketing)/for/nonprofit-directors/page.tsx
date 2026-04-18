import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, Shield, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Nonprofit Directors — Board meetings, grant deadlines, and program calendars',
  description:
    'Nonprofit executive directors manage board meetings, grant application deadlines, program delivery schedules, donor events, and compliance reporting simultaneously. Momenties tracks every organizational deadline, shows time per program area, and surfaces grant deadlines 90 days early.',
  alternates: { canonical: '/for/nonprofit-directors' },
  openGraph: {
    title: 'Momenties for Nonprofit Directors',
    description: 'Board meetings, grant deadlines, and program calendar management for nonprofit directors.',
    url: '/for/nonprofit-directors',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Calendar,
    title: 'Grant deadline calendar',
    desc: 'Tag every grant application by funder, program area, and deadline. "Federal grant — LOI due march 15, full application due may 30." "Foundation grant — renewal, july 1." Surfaces 90 days before due date. No grant deadline missed from calendar blindness.',
  },
  {
    icon: Shield,
    title: 'Board and compliance deadlines',
    desc: '"Board meeting — third tuesday monthly." "Annual 990 filing — november 15." "State charity registration renewal — february 28." "Audit completion — june 30." Governance and compliance calendar managed in one place. Board never surprised by a missed filing.',
  },
  {
    icon: BarChart3,
    title: 'Time per program area analytics',
    desc: 'Tag every meeting, site visit, and planning session by program area. Analytics shows hours per program across the week. Which program is consuming the most executive time? Data for staff allocation, board reporting, and organizational prioritization.',
  },
  {
    icon: Users,
    title: 'Donor and community event planning',
    desc: '"Annual gala — november 8." "Major donor stewardship calls — first week monthly." "Community advisory board — quarterly." "Volunteer appreciation event — april." All donor and community touchpoints on the organizational calendar well in advance.',
  },
]

const NONPROFIT_WORKFLOW = [
  { time: 'Annual planning', action: 'All board meeting dates, committee meetings, grant deadlines, compliance filings, and donor events placed on calendar at the year\'s start. Nothing is discovered mid-year. Staff and board can plan travel and coverage well in advance.' },
  { time: 'Grant cycle', action: '"Community foundation grant — LOI due march 15." Calendar entry added with 90-day alert. Drafting timeline blocked backwards from deadline. Program staff meeting scheduled 6 weeks out to assemble outcome data.' },
  { time: 'Board prep', action: '"Board meeting — tuesday march 19, 6pm." Pre-meeting prep blocks added: materials due one week before, executive committee call two days before. Post-meeting action item follow-up block added for wednesday morning.' },
  { time: 'Program delivery', action: '"Youth program — spring session kickoff, thursday 4pm." Site visit for federal grant compliance tagged and logged. Hours per program tracked automatically for program reporting and time-allocation decisions.' },
  { time: 'Year-end close', action: 'Analytics: time per program area for the year. Grant deadlines met vs. missed. Board meeting attendance. 990 completion timeline confirmed. Year-end donor appeal scheduled. Annual report timeline blocked.' },
]

export default function ForNonprofitDirectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Nonprofit Directors"
        title={
          <>
            Grant deadlines met.
            <br />
            <em className="not-italic text-gold">Board never surprised.</em>
          </>
        }
        lede="Nonprofit executive directors manage board governance, grant application deadlines, program delivery schedules, donor relationships, and compliance reporting simultaneously. Momenties tracks every organizational deadline, shows time per program area, and surfaces grant deadlines 90 days early — so nothing important falls through the cracks."
        crumbs={[{ label: 'For Nonprofit Directors' }]}
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
            Time analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No client data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How nonprofit directors use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for nonprofit leadership.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Organizational calendar rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From annual planning to year-end close.</h2>
          </Reveal>
          <div className="space-y-3">
            {NONPROFIT_WORKFLOW.map((step, i) => (
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
                &ldquo;We manage 14 active grants with different funders, deadlines, and reporting schedules. Before Momenties, I kept grant deadlines in a spreadsheet that nobody else could see. Now the entire grant calendar is in one place with 90-day alerts on every deadline. We haven&apos;t missed a single grant submission since — and we&apos;ve won four new grants this year.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">T</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Tamara H., Executive Director</div>
                  <div className="text-xs text-muted-foreground">Youth services nonprofit, 12-person staff</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Deadlines tracked</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every nonprofit deadline on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Grant LOIs and full application deadlines',
                'Grant reporting and outcome report due dates',
                'Board meeting schedule — full year',
                'IRS Form 990 and extension deadlines',
                'State charity registration renewals',
                'Annual audit timeline and completion',
                'Donor event and gala planning milestones',
                'Program compliance reporting deadlines',
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
        title="Grant deadlines met. Board governance current. Mission delivered."
        subtitle="Grant deadline tracking, board calendar management, and program time analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Time analytics', href: '/features/analytics' }}
      />
    </>
  )
}
