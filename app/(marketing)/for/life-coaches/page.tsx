import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, BarChart3, Clock, Shield, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Life Coaches — Client session scheduling, ICF CE credits, and coaching practice analytics',
  description:
    'Life coaches manage client session schedules, ICF credential renewal requirements, CE credits by competency area, group program delivery, and business development simultaneously. Momenties tracks ICF CE, surfaces credential deadlines, and shows time per client.',
  alternates: { canonical: '/for/life-coaches' },
  openGraph: {
    title: 'Momenties for Life Coaches',
    description: 'Client sessions, ICF CE tracking, and coaching practice analytics for life coaches.',
    url: '/for/life-coaches',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Users,
    title: 'Client session scheduling',
    desc: 'Individual coaching sessions, group programs, discovery calls, and check-ins — all templated. "Coaching session — Sarah M., tuesday 10am 60 mins." Recurring sessions templated across the engagement. No rescheduling from memory.',
  },
  {
    icon: Shield,
    title: 'ICF CE by competency area',
    desc: 'Tag CE by ICF core competency area: setting the foundation, co-creating the relationship, communicating effectively, facilitating learning and results, mentor coaching. Analytics shows hours per domain against ICF renewal requirements.',
  },
  {
    icon: Clock,
    title: 'ICF credential renewal deadlines',
    desc: '"ICF ACC renewal — june 30." "ICF PCC renewal — september." "Mentor coaching requirement — annual." "Ethics training — renewal required." All credential deadlines on calendar. Visible 90 days before expiration.',
  },
  {
    icon: BarChart3,
    title: 'Coaching practice analytics',
    desc: 'Tag client sessions, group programs, discovery calls, and business development separately. Analytics shows time per client, session delivery vs. business development ratio, and client retention trends. The coaching practice as a business.',
  },
]

const COACH_WORKFLOW = [
  { time: 'Annual planning', action: 'ICF renewal deadlines on calendar. CE hours needed calculated. Mentor coaching appointments blocked. Group program launch dates added. Business development time protected.' },
  { time: 'Client onboarding', action: '"Discovery call — new client, tuesday 3pm 45 mins." Package overview block added. Session template applied for the engagement. Milestone check-ins templated through the program.' },
  { time: 'CE events', action: '"ICF webinar — powerful questions, wednesday 12pm 1.5 hours, communicating effectively." Tagged and added. CE counter updates. Mentor coaching hours tracked separately.' },
  { time: 'Group programs', action: '"Group coaching — leadership cohort, thursdays 4-5:30pm." 8-week template applied. Pre-session prep block templated. Follow-up send added after each session.' },
  { time: 'Renewal prep', action: 'Daily Brief surfaces ICF renewal 90 days out. CE audit: hours needed, hours completed, mentor coaching current? Documentation consolidated. Renewal submitted on time, every time.' },
]

export default function ForLifeCoachesPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Life Coaches"
        title={
          <>
            Clients served.
            <br />
            <em className="not-italic text-gold">Credential maintained.</em>
          </>
        }
        lede="Life coaches manage individual client sessions, group programs, ICF CE requirements across competency areas, and business development simultaneously. Momenties templates coaching engagements, tracks ICF CE by competency domain, and shows where coaching practice time actually goes."
        crumbs={[{ label: 'For Life Coaches' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How life coaches use Momenties</p>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Coaching practice rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Client delivery and ICF credentialing through the year.</h2>
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
                &ldquo;Running a full coaching practice while maintaining PCC credentialing is a lot of moving parts. Analytics showed me I was spending only 8% of my working hours on business development — then wondering why my pipeline was empty. I restructured my week: 20% development time, blocked and protected. My practice grew 40% over the next year.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">T</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Theresa M., PCC</div>
                  <div className="text-xs text-muted-foreground">Executive and life coach, 12+ years</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">ICF credentials supported</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">ICF credential tracking in Momenties.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ICF ACC — 40 CCEUs per 3-year renewal',
                'ICF PCC — 40 CCEUs per 3-year renewal',
                'ICF MCC — 40 CCEUs per 3-year renewal',
                'ICF ACSTH/ACTP program hours',
                'Mentor coaching hours tracked separately',
                'ICF ethics training requirement',
                'CE by ICF competency area',
                'BCC and other coaching credentials',
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
        title="Clients served. ICF credential maintained. Practice growing."
        subtitle="Session scheduling, ICF CE tracking, and coaching practice analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Practice analytics', href: '/features/analytics' }}
      />
    </>
  )
}
