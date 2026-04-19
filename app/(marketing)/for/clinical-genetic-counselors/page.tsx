import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Clinical Genetic Counselors — ABGC CE renewal, genetic counselor credential management',
  description:
    'Clinical genetic counselors manage ABGC board certification 50 CE/5yr with genetic counseling-specific content, state genetic counselor licensure CE on independent cycles (where licensed), annual cancer genetics and variant classification update CE, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full genetic counselor credential calendar.',
  alternates: { canonical: '/for/clinical-genetic-counselors' },
  openGraph: {
    title: 'Momenties for Clinical Genetic Counselors',
    description: 'ABGC CE renewal, genetic counselor credential management.',
    url: '/for/clinical-genetic-counselors',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for ABGC board certification and state licensure independently',
    desc: 'Clinical genetic counselors certified by ABGC must complete 50 CE hours every 5 years with genetic counseling-specific content — clinical genetics, counseling theory and practice, research, and professional development. In states with genetic counselor licensure (over 20 states now require it), state CE requirements run on an independent cycle — often biennial — with approved provider requirements that may differ from ABGC-approved CE. The same CE event may satisfy ABGC requirements but not the specific state board-approved provider requirement. Genetic counselors practicing in multiple states may maintain two or more state licenses simultaneously.',
  },
  {
    icon: Clock,
    title: 'Genetic counselor multi-credential renewal calendar',
    desc: '"ABGC certification — 50 CE/5yr, genetic counseling content." "State genetic counselor license — biennial CE, state-approved providers (licensed states)." "Annual hereditary cancer syndrome update CE." "Annual variant classification update CE." "NSGC membership — annual." "ABGC affiliate CE reporting — annual (if approaching renewal cycle)." All genetic counselor credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Variant of uncertain significance classification updates and hereditary cancer CE analytics',
    desc: 'Genetic counselors interpreting genomic sequencing results must maintain currency with variant classification guidelines — ClinGen-curated gene-disease relationships and ACMG/AMP variant interpretation criteria are updated continuously. Annual CE covering variant classification updates is a practice requirement for counselors interpreting next-generation sequencing panels. Hereditary cancer genetics — BRCA1/2, Lynch syndrome, PALB2, ATM, CHEK2 — evolves with each major ASCO and NSGC guideline update. Counselors in oncology genetics programs place annual hereditary cancer update CE to maintain current surveillance and management recommendation knowledge.',
  },
  {
    icon: Users,
    title: 'NSGC, ACMG, and genetic counseling professional involvement',
    desc: '"NSGC Annual Education Conference — october." "ACMG Annual Clinical Genetics Meeting — march." "ASCO Annual Meeting (for oncology genetics track)." "ASHG Annual Meeting." "Hereditary breast and ovarian cancer syndrome genetics CE." "Lynch syndrome surveillance and surgical risk reduction CE." "Pediatric rare disease variant interpretation CE." "Prenatal cfDNA screening and invasive diagnostic CE." All genetic counseling professional development on calendar. NSGC conference CE tagged by ABGC and state licensure applicability.',
  },
]

const GC_WORKFLOW = [
  { time: 'Annual planning', action: 'ABGC 50 CE/5yr pace (annual target: 10 CE, genetic counseling content), state genetic counselor license biennial CE (licensed states), annual hereditary cancer update CE, annual variant classification update CE, NSGC Annual Education Conference, ACMG Annual Meeting, and NSGC membership all loaded in January. ABGC CE counter and state licensure CE counter tracked independently. For counselors in multiple licensed states, each state CE requirement tracked separately.' },
  { time: 'CE completion', action: '"NSGC-approved — Lynch syndrome surveillance optimization: risk stratification by mismatch repair gene variant (MLH1, MSH2, MSH6, PMS2), colonoscopy interval evidence update, and gynecologic cancer surveillance in female mutation carriers, 2 CE, ABGC applicable — hereditary cancer genetics domain." ABGC counter updates. State licensure CE updates (if state-approved provider). Hereditary cancer content confirmed at logging.' },
  { time: 'Variant update CE', action: '"Annual variant classification CE — ACMG/AMP variant interpretation criteria update: BRCA1 variant interpretation using functional assay data, ClinGen gene curation for high-penetrance cancer risk genes, and VUS reclassification protocols when new evidence warrants downgrade, 2 CE, Q1." Annual variant classification CE placed as Q1 practice requirement. ClinGen updates gene-disease classifications quarterly — annual CE at Q1 captures the prior year\'s major reclassifications before counseling season accelerates in spring.' },
  { time: 'Cancer genetics CE', action: '"Annual hereditary cancer update CE — PALB2 and ATM moderate-penetrance breast cancer risk management: updated NCCN surveillance criteria, chemoprevention eligibility, and cascade testing protocols for second-degree relatives, 2 CE, Q2." Annual hereditary cancer CE placed for oncology genetics counselors. NCCN guidelines update annually — CE placed mid-year to capture spring NCCN update cycle. Moderate-penetrance gene management (PALB2, ATM, CHEK2) has changed rapidly as risk estimates accumulate from large cohort studies.' },
  { time: 'Renewal audit', action: 'Analytics: ABGC 50 CE on pace (10/yr target)? Genetic counseling content requirements satisfied? State genetic counselor license CE current (all licensed states)? Annual variant classification CE documented? Annual hereditary cancer CE documented? NSGC membership active? Complete genetic counselor credential audit 90 days before ABGC 5-year renewal. ABGC and all state licensure CE documentation maintained separately.' },
]

export default function ForClinicalGeneticCounselorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Clinical Genetic Counselors"
        title={
          <>
            ABGC CE and state licensure maintained.
            <br />
            <em className="not-italic text-gold">Variant classification updates tracked. Cancer genetics CE current.</em>
          </>
        }
        lede="Clinical genetic counselors manage ABGC board certification 50 CE every 5 years with genetic counseling-specific content, state genetic counselor licensure CE on independent biennial cycles in over 20 licensed states, annual variant classification update CE as ClinGen curation and ACMG criteria evolve, annual hereditary cancer syndrome CE as NCCN guidelines update, and professional development at NSGC and ACMG simultaneously. Momenties tracks CE by genetic counselor credential, surfaces renewal deadlines 90 days early, and manages the full credential calendar in one view."
        crumbs={[{ label: 'For Clinical Genetic Counselors' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How clinical genetic counselors use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for clinical genetic counselor credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Genetic counselor credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every ABGC renewal cycle, state licensure renewal, and annual variant classification and cancer genetics CE.</h2>
          </Reveal>
          <div className="space-y-3">
            {GC_WORKFLOW.map((step, i) => (
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
                &ldquo;ABGC requires 50 CE over 5 years and the CE has to be genetics-specific. My state also has licensure now with its own biennial CE requirement and different approved providers. The state CE and the ABGC CE don&apos;t automatically overlap — I have to verify whether a given conference CE is approved for both. The variant classification space is moving fast enough that I consider annual update CE mandatory even when it&apos;s not required — a VUS that was classified under 2019 criteria might be classifiable as pathogenic under 2023 criteria. I counsel hereditary cancer patients and NCCN updates surveillance recommendations annually. That&apos;s at least four CE categories I need to track: ABGC general, state license, variant classification, and hereditary cancer. Momenties was the first tool that let me tag CE to multiple categories at once.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">K</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Katherine B., MS, CGC</div>
                  <div className="text-xs text-muted-foreground">Certified genetic counselor, hereditary cancer genetics and clinical genomics program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All clinical genetic counselor credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABGC board certification CE — 50 hours/5yr, genetic counseling content domains',
                'State genetic counselor license CE — biennial, state-approved providers (where licensed)',
                'Annual variant classification CE — ClinGen/ACMG criteria updates',
                'Annual hereditary cancer CE — NCCN guideline updates for surveillance',
                'Prenatal and pediatric genetics CE (by specialty area)',
                'Telemedicine genetic counseling CE (if telegenetics practice)',
                'NSGC membership renewal — annual',
                'NSGC and ACMG conference CE planning by ABGC and state licensure applicability',
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
        title="ABGC CE and state genetic counselor licensure maintained."
        subtitle="CE tracking for genetic counseling certification and state licensure, annual variant classification updates, hereditary cancer CE, and professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
