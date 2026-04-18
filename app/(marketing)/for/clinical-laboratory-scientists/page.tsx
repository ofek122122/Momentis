import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Clinical Laboratory Scientists — MLS/CLS/MT renewal, CE tracking, and laboratory credential management',
  description:
    'Clinical laboratory scientists manage ASCP MLS(ASCP) renewal with 36 CE hours per 3 years, AMT MT(AMT) renewal with 30 CE per 3 years, state CLS license CE, specialty certifications (SBB, SH, C, MB), and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full laboratory credential calendar.',
  alternates: { canonical: '/for/clinical-laboratory-scientists' },
  openGraph: {
    title: 'Momenties for Clinical Laboratory Scientists',
    description: 'MLS/CLS/MT renewal, CE tracking, and laboratory credential management.',
    url: '/for/clinical-laboratory-scientists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for MLS(ASCP) and MT(AMT) renewal',
    desc: 'ASCP MLS(ASCP) renewal requires 36 CE hours per 3 years with ASCP-approved CE. AMT MT(AMT) renewal requires 30 CE per 3 years with AMT-approved CE. ASCP specialty certifications (SBB, SH, SC, CG) each add independent renewal requirements. Tag every CE by credential organization. ASCP and AMT counters tracked independently — CE approved by one may not qualify for the other.',
  },
  {
    icon: Clock,
    title: 'Laboratory scientist multi-credential renewal calendar',
    desc: '"MLS(ASCP) — ASCP, 3-year renewal, july." "MT(AMT) — AMT, 3-year renewal." "SBB blood banking specialty — 3-year." "State CLS license — biennial, if state-licensed." "Annual CAP/CLIA proficiency testing — institutional." "ASCP membership — annual." All lab credentials with 90-day advance alerts. Laboratory employment never interrupted by expired certification.',
  },
  {
    icon: BarChart3,
    title: 'Specialty certification CE analytics',
    desc: 'Clinical laboratory scientists who hold ASCP base certification plus specialty certifications (SBB, SH, SC) face multiple independent CE renewal cycles. SBB blood banking specialty CE may not satisfy MLS(ASCP) base CE requirements and vice versa. Analytics shows each credential\'s CE progress independently. Specialty CE tagged to applicable credentials at completion. No hour miscounted.',
  },
  {
    icon: Users,
    title: 'ASCP, AMT, and ASCLS professional involvement',
    desc: '"ASCP Annual Meeting — october." "ASCLS Annual Scientific Assembly — june." "State laboratory association conference — fall." "Specialty blood banking symposium." "ASCP online CE modules." All laboratory professional development on calendar. ASCP Annual Meeting CE planned by credential type in advance for maximum renewal coverage across base and specialty certifications.',
  },
]

const CLS_WORKFLOW = [
  { time: 'Annual planning', action: 'MLS(ASCP) 3-year renewal date, AMT 3-year renewal, specialty cert renewal dates (SBB, SH), state CLS license renewal, ASCP Annual Meeting, and ASCP membership renewal all loaded in January. CE pace: 12 ASCP CE per year satisfies the 3-year base certification cycle.' },
  { time: 'CE completion', action: '"ASCP-approved webinar — molecular diagnostics in infectious disease, 2 CE hours, MLS(ASCP)." Tagged by credential organization. MLS(ASCP) 3-year counter updates. If AMT also approves the CE, MT(AMT) counter updates. SBB counter updates if CE qualifies for blood banking specialty. Each credential tracked independently.' },
  { time: 'Specialty certs', action: '"SBB blood banking specialty renewal — 3-year, may." "SH hematology specialty — 3-year." Each ASCP specialty certification tracked independently with its own CE counter. Blood banking CE may qualify for both MLS(ASCP) base and SBB specialty renewal. Each certification\'s requirement tracked separately — no conflation.' },
  { time: 'State license', action: '"State CLS license renewal — biennial, january." State CE requirements may differ from ASCP requirements. Some states accept ASCP CE; others require state-approved providers or specific topic coverage. State and ASCP CE tracked without conflation. State expiry monitored independently from ASCP certification expiry.' },
  { time: 'Renewal audit', action: 'Analytics: MLS(ASCP) CE hours on pace? MT(AMT) CE current? SBB specialty CE satisfied? State CLS license CE complete? ASCP and AMT memberships active? Complete laboratory scientist credential audit 90 days before earliest renewal. Documentation prepared for ASCP and AMT renewal submissions.' },
]

export default function ForClinicalLaboratoryScientistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Clinical Laboratory Scientists"
        title={
          <>
            MLS and MT credentials maintained.
            <br />
            <em className="not-italic text-gold">Specialty certs never lapsed.</em>
          </>
        }
        lede="Clinical laboratory scientists manage ASCP MLS renewal with 36 CE per 3 years, AMT MT renewal with independent requirements, ASCP specialty certifications in blood banking, hematology, and chemistry, state CLS license CE, and professional development simultaneously. Momenties tracks CE by credential organization, surfaces renewal deadlines 90 days early, and manages the full laboratory credential calendar in one view."
        crumbs={[{ label: 'For Clinical Laboratory Scientists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How clinical laboratory scientists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for MLS/CLS credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Laboratory credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every 3-year certification cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {CLS_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold MLS(ASCP), SBB specialty, and a state CLS license — three separate CE requirements. The SBB specialty renewal requires blood bank-specific CE that doesn&apos;t count toward my base MLS(ASCP). My state license CE requirements are different again. I was running all three in the same spreadsheet column. When I started using Momenties and tagged each CE correctly, I discovered I was behind on my SBB specialty CE by 8 hours with 6 months left in the cycle.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">F</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Felicia O., MLS(ASCP), SBB(ASCP)</div>
                  <div className="text-xs text-muted-foreground">Clinical laboratory scientist, blood bank, academic medical center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All laboratory credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ASCP CE hours — MLS(ASCP) 3-year renewal',
                'AMT CE hours — MT(AMT) 3-year renewal',
                'SBB blood banking specialty — 3-year renewal',
                'SH/SC/CG specialty certification renewals',
                'State CLS license CE — biennial',
                'ASCP and AMT membership renewals',
                'ASCP Annual Meeting CE by credential type',
                'ASCLS and specialty symposium CE planning',
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
        title="MLS and MT credentials maintained."
        subtitle="CE tracking by credential organization, specialty certification calendar, and laboratory professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
