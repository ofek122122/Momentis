import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Recreational Therapists — CTRS renewal, CE tracking, and recreation therapy credential management',
  description:
    'Recreational therapists manage NCTRC CTRS renewal with 50 CE hours per 5 years, state therapeutic recreation license renewals, CPR and first aid certification, and professional development simultaneously. Momenties tracks CE by NCTRC domain, surfaces renewal deadlines 90 days early, and manages the full recreation therapy credential calendar.',
  alternates: { canonical: '/for/recreational-therapists' },
  openGraph: {
    title: 'Momenties for Recreational Therapists',
    description: 'CTRS renewal, CE tracking, and recreation therapy credential management.',
    url: '/for/recreational-therapists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CTRS renewal',
    desc: 'NCTRC CTRS renewal requires 50 CE hours per 5-year cycle with NCTRC-approved CE. CE must address one or more of the NCTRC practice areas: assessment, planning, implementation, evaluation, documentation, administration, and advancement of the profession. Tag every CE activity by NCTRC domain. Practice area coverage tracked alongside total CE hours. 5-year pace: 10 CE per year.',
  },
  {
    icon: Clock,
    title: 'Recreational therapist multi-credential renewal calendar',
    desc: '"CTRS — NCTRC, 5-year renewal, april." "State TR license or registration — varies by state." "CPR/AED — 2-year." "First aid — 3-year." "Aquatic therapy specialty — renewal, if certified." "NCTRC membership — annual." "Ethics CE — NCTRC category requirement." All recreation therapy credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'CE domain coverage analytics',
    desc: 'NCTRC requires that CTRS renewal CE address relevant practice areas within the NCTRC job analysis. Recreational therapists who track only total CE hours risk renewal rejection when CE is concentrated in one practice area without addressing others. Analytics shows CE distribution across NCTRC domains mid-cycle — so balance is maintained with time to course-correct.',
  },
  {
    icon: Users,
    title: 'ATRA, NTRS, and specialty association involvement',
    desc: '"ATRA Annual Conference — september." "State therapeutic recreation association conference — spring." "Aquatic therapy symposium — annual." "Adaptive sports training — annual." "NCTRC CE webinar series." All recreation therapy professional development on calendar. ATRA conference CE tagged by NCTRC domain in advance for practice area coverage planning.',
  },
]

const RT_WORKFLOW = [
  { time: 'Annual planning', action: 'CTRS 5-year renewal date, state license renewal deadline, CPR/AED recertification (2-year), first aid renewal (3-year), ATRA Annual Conference, and NCTRC membership renewal all loaded in January. CE pace: 10 NCTRC CE hours per year satisfies the 5-year requirement.' },
  { time: 'CE completion', action: '"NCTRC-approved workshop — evidence-based interventions for geriatric populations, 6 CE hours, assessment and planning domains." Tagged by NCTRC practice area. CTRS 5-year counter updates. Domain coverage distribution updates. Ethics CE tracked separately when CE qualifies for NCTRC ethics requirement.' },
  { time: 'Emergency certifications', action: '"CPR/AED recertification — 2-year, october." "First aid renewal — 3-year, october." Emergency certifications tracked on separate 2-year and 3-year cycles independent of the 5-year CTRS cycle. Recertification placed on calendar when current certification is completed — not when it nears expiration. Facility credentialing requirements confirmed current.' },
  { time: 'State license', action: '"State TR registration renewal — biennial, june." State TR license or registration CE requirements may differ from NCTRC requirements. Some states accept NCTRC CE; others have specific state-approved CE requirements. Both tracked without conflation. State and NCTRC credentials monitored independently.' },
  { time: 'Renewal audit', action: 'Analytics: CTRS CE hours on pace? NCTRC domain coverage balanced? Ethics CE satisfied? State license CE complete? CPR/AED current? First aid current? NCTRC membership active? Complete recreation therapy credential audit 90 days before CTRS renewal window. Practice area documentation prepared for NCTRC renewal submission.' },
]

export default function ForRecreationalTherapistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Recreational Therapists"
        title={
          <>
            CTRS maintained. Emergency certs current.
            <br />
            <em className="not-italic text-gold">CE never scrambled.</em>
          </>
        }
        lede="Recreational therapists manage CTRS renewal with 50 CE hours over 5 years across NCTRC practice domains, state therapeutic recreation license renewals, CPR and first aid certifications on independent cycles, and professional development simultaneously. Momenties tracks CE by NCTRC domain, surfaces renewal deadlines 90 days early, and manages the full recreation therapy credential calendar in one view."
        crumbs={[{ label: 'For Recreational Therapists' }]}
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
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How recreational therapists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for CTRS credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Recreation therapy credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through the 5-year CTRS cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {RT_WORKFLOW.map((step, i) => (
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
                &ldquo;The 5-year CTRS cycle is long enough that it can sneak up on you. I went into year four with 22 CE hours — on pace numerically — but my domain coverage was unbalanced. I had almost nothing in documentation and administration domains. Momenties shows me domain distribution alongside total hours so I can see the balance problem mid-cycle, not the month before renewal when it&apos;s too late to fix gracefully.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">T</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Tamara B., CTRS</div>
                  <div className="text-xs text-muted-foreground">Recreational therapist, acute rehabilitation hospital</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All recreation therapy credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'NCTRC CE by practice domain — CTRS 5-year renewal',
                'State TR license or registration — biennial',
                'CPR/AED certification — 2-year renewal',
                'First aid certification — 3-year renewal',
                'Aquatic therapy specialty certification renewal',
                'NCTRC ethics CE — required category',
                'NCTRC membership renewal — annual',
                'ATRA conference and specialty symposium CE',
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
        title="CTRS maintained. Emergency certs current."
        subtitle="CE tracking by NCTRC domain, multi-cycle credential calendar, and recreation therapy professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
