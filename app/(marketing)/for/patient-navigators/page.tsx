import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Patient Navigators — CPNP/ONN-CG CE renewal, oncology navigation credential management',
  description:
    'Patient navigators manage AONN CPNP or ONN-CG certification renewal CE, ACCC patient navigation certification, institutional competency requirements, cultural competency and health literacy CE, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full patient navigator credential calendar.',
  alternates: { canonical: '/for/patient-navigators' },
  openGraph: {
    title: 'Momenties for Patient Navigators',
    description: 'CPNP/ONN-CG CE renewal, oncology navigation credential management.',
    url: '/for/patient-navigators',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CPNP, ONN-CG, and navigation certifications',
    desc: 'AONN Certified Patient Navigator Professional (CPNP) and Oncology Nurse Navigator-Certified Generalist (ONN-CG) require CE per renewal cycle in navigation-specific content domains. ACCC Patient Navigation Certification has independent renewal requirements. CE must be in applicable patient navigation and oncology content areas. Mandatory categories — health literacy, cultural competency, ethics — tracked separately from total CE.',
  },
  {
    icon: Clock,
    title: 'Patient navigator multi-credential renewal calendar',
    desc: '"CPNP — AONN, renewal cycle CE." "ONN-CG — AONN, renewal cycle (if RN navigator)." "ACCC navigation certification — periodic." "Cultural competency CE — institutional, annual." "Health literacy CE — state or employer required." "AONN membership — annual." "Institutional navigation competency — annual." All patient navigator credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Mandatory category and institutional competency analytics',
    desc: 'Patient navigators face institutional requirements for annual competency documentation in navigation domains: barrier identification, resource referral, insurance navigation, and community health worker competencies. Cultural competency and health literacy CE tracked as separate mandatory categories — inadequate hours in these categories means institutional competency renewal fails even with adequate total CE.',
  },
  {
    icon: Users,
    title: 'AONN, ACCC, and patient navigation professional involvement',
    desc: '"AONN Annual Navigation and Survivorship Conference — fall." "ACCC National Oncology Conference — spring." "ONS Annual Congress — april (for RN navigators)." "Community health worker annual training." "Cancer survivorship and care coordination education." All patient navigation professional development on calendar. Conference CE tagged by CPNP and ONN-CG applicability in advance.',
  },
]

const NAV_WORKFLOW = [
  { time: 'Annual planning', action: 'CPNP renewal CE cycle, ONN-CG cycle (if RN navigator), ACCC certification cycle, annual cultural competency CE, annual health literacy CE, institutional competency assessment date, AONN Annual Conference, and AONN membership all loaded in January. Mandatory category CE paces tracked independently from total CE.' },
  { time: 'CE completion', action: '"AONN-approved — financial toxicity navigation: insurance authorization and appeals, 2 CE, CPNP applicable." Tagged by applicable certification. CPNP counter updates. If ONN-CG also applies, ONN-CG counter updates. Cultural competency category updates if content meets the category definition. Each tracked independently.' },
  { time: 'Cultural competency CE', action: '"Cultural competency and health equity in oncology navigation — 3 CE, mandatory category." Cultural competency CE tracked as a mandatory annual category, separate from total CE count. Institutions and accreditation bodies increasingly require documented cultural competency CE hours beyond what general navigation CE provides. Category confirmed independently.' },
  { time: 'Institutional competency', action: '"Annual navigation competency assessment — Q1, barrier identification and resource referral domains." Annual navigation competency assessment placed as a recurring Q1 event. Joint Commission and CoC standards require navigation program competency documentation. Institutional assessment logged separately from certification CE — different documentation, different purpose.' },
  { time: 'Renewal audit', action: 'Analytics: CPNP CE current? ONN-CG CE adequate? Cultural competency category satisfied? Health literacy CE done? Annual institutional competency documented? ACCC certification current? AONN membership active? Complete patient navigator credential audit 90 days before earliest certification renewal. AONN and institutional documentation maintained separately.' },
]

export default function ForPatientNavigatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Patient Navigators"
        title={
          <>
            CPNP and ONN-CG certifications maintained.
            <br />
            <em className="not-italic text-gold">Cultural competency CE never short.</em>
          </>
        }
        lede="Patient navigators manage AONN CPNP and ONN-CG certification CE renewal on independent cycles, mandatory cultural competency and health literacy CE category requirements beyond total CE, annual institutional navigation competency assessments, and professional development simultaneously. Momenties tracks CE by patient navigation credential, surfaces renewal deadlines 90 days early, and manages the full patient navigator credential calendar in one view."
        crumbs={[{ label: 'For Patient Navigators' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How patient navigators use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for patient navigation credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Patient navigation credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every certification renewal cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {NAV_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold CPNP certification and ONN-CG because I&apos;m an RN navigator — two separate AONN credentials with the same organization but different CE requirements. My cancer center also requires annual cultural competency CE that doesn&apos;t automatically qualify for either certification. I was tracking all three with a single total CE number and discovering at renewal that my cultural competency hours were short. Momenties tracks each category separately. I can see instantly whether my CPNP, ONN-CG, and cultural competency counters are all on pace independently.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">Y</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Yvonne D., RN, CPNP, ONN-CG</div>
                  <div className="text-xs text-muted-foreground">Oncology nurse navigator, academic comprehensive cancer center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All patient navigation credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'AONN CPNP certification CE — renewal cycle',
                'AONN ONN-CG certification CE — renewal cycle (RN)',
                'ACCC navigation certification — periodic',
                'Cultural competency CE — mandatory category',
                'Health literacy CE — mandatory category',
                'Annual institutional navigation competency',
                'AONN membership renewal — annual',
                'AONN and ACCC conference CE planning',
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
        title="CPNP and ONN-CG certifications maintained."
        subtitle="CE tracking by certification, cultural competency and mandatory category counters, and patient navigation professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
