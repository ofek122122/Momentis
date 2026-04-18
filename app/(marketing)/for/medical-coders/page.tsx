import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Medical Coders — CPC/CCS renewal, CEU tracking, and coding credential management',
  description:
    'Medical coders manage 36 CEUs per 2-year CPC renewal cycle with AAPC-approved CE requirements, CCS renewal with AHIMA CEUs, specialty coding certifications, ICD and CPT annual code updates training, and professional development simultaneously. Momenties tracks CEUs by credential, surfaces renewal deadlines 90 days early, and manages the full medical coding credential calendar.',
  alternates: { canonical: '/for/medical-coders' },
  openGraph: {
    title: 'Momenties for Medical Coders',
    description: 'CPC/CCS renewal, CEU tracking, and medical coding credential management.',
    url: '/for/medical-coders',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CEU tracking for CPC and CCS renewal',
    desc: 'AAPC CPC renewal requires 36 CEUs per 2-year cycle with AAPC-approved CE. AHIMA CCS renewal requires 20 CE hours per 2-year cycle with AHIMA-approved CE. Specialty coding certifications (CPC-H, COC, CPCO) each add independent renewal requirements. Tag every CEU by applicable credential. CPC and CCS requirements tracked independently — dual-credentialed coders manage both.',
  },
  {
    icon: Clock,
    title: 'Coder multi-credential renewal calendar',
    desc: '"CPC — AAPC, 2-year renewal, october." "CCS — AHIMA, 2-year renewal, march." "COC outpatient specialty — 2-year." "Annual ICD code update training — october." "Annual CPT code update training — january." "AAPC membership renewal — annual." All coding credentials with 90-day advance alerts. No billing compliance gap from expired certification.',
  },
  {
    icon: BarChart3,
    title: 'Annual code update training analytics',
    desc: 'ICD-10-CM/PCS codes update annually on October 1. CPT codes update January 1. Medical coders who bill without completing annual update training carry compliance risk. Tag ICD and CPT annual update training separately as mandatory recurring CE. Analytics confirms both update trainings completed before each effective date.',
  },
  {
    icon: Users,
    title: 'AAPC and AHIMA professional involvement',
    desc: '"AAPC National Conference — may." "AHIMA Annual Convention — october." "Local AAPC chapter meeting — monthly." "Specialty coding webinar series." All medical coding professional development on calendar. AAPC National Conference CEUs planned in advance for CPC renewal credit across applicable specialty certifications.',
  },
]

const CODER_WORKFLOW = [
  { time: 'Annual planning', action: 'CPC renewal date, CCS renewal date, annual ICD update (October), annual CPT update (January), AAPC National Conference, AAPC membership renewal, and any specialty cert renewals all loaded in January. CEU pace calculated: 18 AAPC CEUs per year satisfies the 2-year CPC cycle.' },
  { time: 'CEU completion', action: '"AAPC-approved webinar — evaluation and management coding updates, tuesday 1pm, 1 CEU, CPC." Tagged by credential. CPC counter updates. If AHIMA-approved CE is also applicable, CCS counter updates simultaneously. Specialty certification CE counters updated where applicable.' },
  { time: 'Code updates', action: '"ICD-10-CM/PCS code update training — september, before October 1 effective date." "CPT annual code update — december, before January 1 effective date." Annual code update training documented and tagged as required compliance CE. Billing team informed that coder certifications include current code update completion.' },
  { time: 'Specialty certs', action: '"COC outpatient coding specialty renewal — 2-year, aligned with CPC." "CPCO compliance specialty." Specialty certifications tracked independently. COC-specific outpatient CE tagged separately from general CPC CE. Each certification maintains its own independent renewal status.' },
  { time: 'Renewal audit', action: 'Analytics: CPC CEU total on pace? CCS CE hours current? Annual ICD update complete? Annual CPT update done? Specialty cert CEUs satisfied? AAPC membership current? Complete coding credential audit 90 days before any renewal deadline opens.' },
]

export default function ForMedicalCodersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Medical Coders"
        title={
          <>
            CPC and CCS maintained.
            <br />
            <em className="not-italic text-gold">Annual updates never missed.</em>
          </>
        }
        lede="Medical coders manage 36 CEUs per 2-year CPC renewal with AAPC-approved CE, AHIMA CCS renewal with independent requirements, specialty coding certifications, mandatory annual ICD and CPT code update training, and professional development simultaneously. Momenties tracks CEUs by credential, surfaces renewal deadlines 90 days early, and manages the full medical coding credential calendar in one view."
        crumbs={[{ label: 'For Medical Coders' }]}
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
            CEU analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How medical coders use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for coding credential and CEU management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Coding credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CEU and credentials managed through every 2-year cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {CODER_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold CPC, COC, and CPCO certifications — three separate AAPC renewal cycles that don&apos;t all align. I was using AAPC-approved CEUs that counted toward CPC but not COC, and vice versa, without tracking the distinction. Momenties lets me tag each CEU to the applicable certifications. All three credential counters stay accurate and I can see at any moment whether each cert is on track for its own renewal date.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">M</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Monica R., CPC, COC, CPCO</div>
                  <div className="text-xs text-muted-foreground">Senior medical coder, multi-specialty billing company</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All medical coding credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'AAPC CEUs by certification — CPC 2-year renewal',
                'AHIMA CE hours — CCS 2-year renewal',
                'COC outpatient specialty renewal',
                'CPCO compliance certification renewal',
                'Annual ICD-10 code update training',
                'Annual CPT code update training',
                'AAPC membership renewal — annual',
                'AAPC National Conference and chapter events',
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
        title="CPC and CCS maintained. Annual updates never missed."
        subtitle="CEU tracking by credential, code update deadline calendar, and coding professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CEU analytics', href: '/features/analytics' }}
      />
    </>
  )
}
