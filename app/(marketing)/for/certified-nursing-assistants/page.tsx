import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Certified Nursing Assistants — CNA registry renewal, CE tracking, and nursing assistant credential management',
  description:
    'Certified nursing assistants manage state CNA registry renewal (typically 12–24 CE hours per 1–2 years), CPR and BLS certifications, dementia care specialization training, and professional development simultaneously. Momenties tracks CE by state requirement, surfaces renewal deadlines 90 days early, and manages the full CNA credential calendar.',
  alternates: { canonical: '/for/certified-nursing-assistants' },
  openGraph: {
    title: 'Momenties for Certified Nursing Assistants',
    description: 'CNA registry renewal, CE tracking, and nursing assistant credential management.',
    url: '/for/certified-nursing-assistants',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for state CNA registry renewal',
    desc: 'State CNA registry renewal CE requirements vary by state: most require 12–24 CE hours per 1–2 year cycle with state-approved CE in patient care topics. Some states require specific CE in areas such as infection control, dementia care, abuse prevention, or resident rights. Tag every CE activity by state-required topic area. State-required categories tracked alongside total CE hours.',
  },
  {
    icon: Clock,
    title: 'CNA multi-credential renewal calendar',
    desc: '"State CNA registry renewal — [state board], 1–2 year cycle." "CPR/BLS — American Heart Association, 2-year." "Dementia care certification — varies." "Infection control training — annual (many facilities)." "Safe patient handling — facility-required, annual." "Mandatory reporter training — state required." All CNA credentials with 90-day advance alerts. Employment and registry active status maintained.',
  },
  {
    icon: BarChart3,
    title: 'Mandatory topic CE analytics',
    desc: 'Many states require specific CE topic hours as a subset of total CE — not just an aggregate total. A CNA who completes 24 CE hours with no dementia care CE may fail renewal in a state that mandates 4 hours of dementia care training. Tag each CE by mandatory topic category. Analytics confirms all mandatory topic minimums satisfied before total CE completion is reached.',
  },
  {
    icon: Users,
    title: 'Facility and state association involvement',
    desc: '"Facility in-service training — monthly." "State CNA association continuing education." "Dementia care specialist program — multi-session." "NNAAP refresher course — as needed." "Nurse aide abuse prevention workshop." All CNA professional development on calendar. Facility in-service sessions logged for CE credit where state-approved. No CE opportunity missed at facility events.',
  },
]

const CNA_WORKFLOW = [
  { time: 'Annual planning', action: 'State CNA registry renewal date, CPR/BLS recertification window (2-year), facility-required annual training dates, mandatory topic CE requirements, and any specialty certification renewals all loaded in January. CE pace calculated per state cycle length and total hour requirement.' },
  { time: 'CE completion', action: '"State-approved CNA CE — dementia care communication strategies, 2 CE hours, dementia care category." Tagged by state-required topic. Registry CE counter updates. Mandatory dementia care subcategory updates separately. Facility in-service CE logged when state-approved. Running topic distribution visible.' },
  { time: 'CPR/BLS', action: '"CPR/BLS recertification — American Heart Association, 2-year, october." Placed on calendar at time of certification completion — not when expiration approaches. Some facilities require annual CPR refreshers beyond AHA biennial renewal. Facility requirement and AHA certification tracked separately with different cadences.' },
  { time: 'Facility training', action: '"Annual facility in-service calendar — infection control, fall prevention, patient rights, safe handling." Recurring facility training events placed at start of each year. CE credit confirmed for state-approved topics. Facility HR training record separate from state registry CE — both tracked without conflation.' },
  { time: 'Renewal audit', action: 'Analytics: State CNA CE hours on pace? Mandatory topic minimums satisfied (dementia care, infection control, abuse prevention, resident rights)? CPR/BLS current? Facility required training current? Complete CNA credential audit 90 days before registry renewal. Documentation ready for state board submission.' },
]

export default function ForCertifiedNursingAssistantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Certified Nursing Assistants"
        title={
          <>
            CNA registry active. CPR current.
            <br />
            <em className="not-italic text-gold">Mandatory CE never missed.</em>
          </>
        }
        lede="Certified nursing assistants manage state CNA registry renewal with mandatory topic CE requirements, CPR and BLS certifications on 2-year cycles, annual facility-required training, dementia care specialization, and professional development simultaneously. Momenties tracks CE by mandatory category, surfaces renewal deadlines 90 days early, and manages the full CNA credential calendar in one view."
        crumbs={[{ label: 'For Certified Nursing Assistants' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How CNAs use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for CNA registry and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">CNA credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every state registry cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {CNA_WORKFLOW.map((step, i) => (
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
                &ldquo;My state requires 24 CE hours for registry renewal, but it also requires specific hours in dementia care, abuse prevention, and infection control. I had 22 CE hours completed with two months left and thought I was fine — until I realized I had zero dementia care CE hours and my state requires 4. I had to find and complete a dementia care course in a hurry. Momenties tracks my mandatory categories separately so that can&apos;t happen again.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">L</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Latoya F., CNA</div>
                  <div className="text-xs text-muted-foreground">Certified nursing assistant, long-term care facility</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All CNA credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'State CNA registry CE with topic minimums',
                'CPR/BLS certification — 2-year renewal',
                'Dementia care CE — mandatory category',
                'Infection control training — annual requirement',
                'Abuse prevention training — state required',
                'Resident rights and dignity CE',
                'Safe patient handling — facility required',
                'Facility in-service CE documentation',
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
        title="CNA registry active. CPR current."
        subtitle="CE tracking by mandatory category, state registry renewal calendar, and CNA professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
