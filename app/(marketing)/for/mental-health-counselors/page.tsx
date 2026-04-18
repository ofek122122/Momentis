import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Mental Health Counselors — LPC/LMHC renewal, CE tracking, and counseling credential management',
  description:
    'Mental health counselors manage state LPC or LMHC license CE requirements (typically 20–40 CE hours per 2-year renewal), NCC renewal (100 CE per 5 years), specialized certifications in trauma or substance use, and supervision hours documentation simultaneously. Momenties tracks CE by license and credential, surfaces renewal deadlines 90 days early, and manages the full counseling credential calendar.',
  alternates: { canonical: '/for/mental-health-counselors' },
  openGraph: {
    title: 'Momenties for Mental Health Counselors',
    description: 'LPC/LMHC renewal, CE tracking, and counseling credential management.',
    url: '/for/mental-health-counselors',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for LPC and LMHC renewal',
    desc: 'State LPC and LMHC renewal CE requirements vary: most states require 20–40 CE hours per 2-year cycle with mandatory ethics CE (typically 3–6 hours). Tag every CE activity by applicable license and topic area: ethics, trauma-informed care, substance use, supervision training, cultural competency. Ethics CE hours tracked separately as a mandatory subcategory alongside total hours.',
  },
  {
    icon: Clock,
    title: 'Counselor multi-credential renewal calendar',
    desc: '"LPC — state board, 2-year renewal, june." "NCC — NBCC, 5-year, 100 CE." "CCTP trauma specialty — 2-year." "CADC substance use — 2-year." "Ethics CE — mandatory 3 hours per cycle." "CPR — 2-year." All counseling credentials with 90-day advance alerts. Client practice never interrupted by expired licensure.',
  },
  {
    icon: BarChart3,
    title: 'Ethics CE and mandatory category analytics',
    desc: 'Most state boards require a minimum number of ethics CE hours per renewal cycle regardless of total CE completed. Counselors who track only total hours risk renewal rejection when ethics hours are insufficient. Tag ethics CE separately. Analytics confirms ethics hours satisfied before total CE completion — no last-minute ethics-only scramble at renewal.',
  },
  {
    icon: Users,
    title: 'NBCC, ACA, and specialty association involvement',
    desc: '"ACA Annual Conference — march." "State LPC association conference — fall." "EMDR intensive training — annual." "Trauma-informed supervision group — monthly." "NBCC CE webinar series." All counseling professional development on calendar. ACA conference CE planned in advance for NCC credit and state license applicability.',
  },
]

const MHC_WORKFLOW = [
  { time: 'Annual planning', action: 'State LPC/LMHC renewal date, NCC 5-year cycle status, any specialty certification renewals, and mandatory ethics CE requirement all loaded at start of each calendar year. CE pace: half the biennial requirement per year with ethics hours front-loaded.' },
  { time: 'CE completion', action: '"ACA-approved webinar — motivational interviewing for co-occurring disorders, wednesday 6pm, 3 CE hours, ethics adjacent." Tagged by applicable license and content area. LPC counter updates. NCC CCE counter updates if NBCC-approved. Ethics subcategory tracked separately.' },
  { time: 'Ethics CE', action: '"Ethics in telehealth counseling — 3 CE hours, ethics category, state-approved." Ethics CE tagged with ethics flag at time of completion. Running ethics total visible separately from overall CE count. Renewal audits confirm ethics minimum satisfied with time to fill gaps.' },
  { time: 'Supervision hours', action: '"Individual supervision with approved supervisor — biweekly thursdays 2pm." Supervision hours logged for licensure upgrade path or LPC-Associate documentation. Supervision calendar visible alongside CE commitments. Hours toward clinical supervision credential also tracked if applicable.' },
  { time: 'Renewal audit', action: 'Analytics: State CE hours on pace? Ethics CE minimum satisfied? NCC CCEs current for 5-year cycle? Specialty cert CE complete? Mandatory suicide prevention training done (required by many states)? CPR current? Complete counseling credential audit 90 days before state license renewal window.' },
]

export default function ForMentalHealthCounselorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Mental Health Counselors"
        title={
          <>
            LPC maintained. Ethics CE current.
            <br />
            <em className="not-italic text-gold">Credentials never lapsed.</em>
          </>
        }
        lede="Mental health counselors manage state LPC or LMHC license CE with mandatory ethics hours, NCC renewal with 5-year CCE requirements, trauma and substance use specialty certifications, and supervision documentation simultaneously. Momenties tracks CE by credential and mandatory category, surfaces renewal deadlines 90 days early, and manages the full counseling credential calendar in one view."
        crumbs={[{ label: 'For Mental Health Counselors' }]}
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
            CE analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No client data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How mental health counselors use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for counseling credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Counseling credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every renewal cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {MHC_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold LPC and NCC — two completely different renewal cycles and CE hour requirements. The NCC is a 5-year cycle and easy to neglect when my state license renews every 2 years. What caught me was ethics CE: my state requires 6 ethics hours per cycle and I had only completed 2 going into renewal month. Momenties now shows my ethics total separately so I see the gap before it becomes a crisis.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">D</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Dana L., LPC, NCC</div>
                  <div className="text-xs text-muted-foreground">Mental health counselor, group practice</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Credentials tracked</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All counseling credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'State LPC/LMHC CE with ethics hours — 2-year renewal',
                'NCC CCE hours — NBCC 5-year renewal',
                'Mandatory ethics CE subcategory tracking',
                'CCTP trauma specialty renewal',
                'CADC substance use certification renewal',
                'Suicide prevention training — state required',
                'Clinical supervision hours documentation',
                'ACA and state association conference CE',
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
        title="LPC maintained. Ethics CE current."
        subtitle="CE tracking by category, ethics hours monitored separately, and counseling credential renewal calendar. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
