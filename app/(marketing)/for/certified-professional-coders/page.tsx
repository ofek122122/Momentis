import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Certified Professional Coders — CPC specialty certification renewal, CEU tracking, and AAPC credential management',
  description:
    'Certified Professional Coders manage AAPC CPC renewal with 36 CEUs per 2 years, specialty certifications (CPCO, CPPM, CPMA, COC, CRC), annual ICD and CPT update training, AAPC chapter requirements, and professional development simultaneously. Momenties tracks CEUs by certification, surfaces renewal deadlines 90 days early, and manages the full AAPC credential calendar.',
  alternates: { canonical: '/for/certified-professional-coders' },
  openGraph: {
    title: 'Momenties for Certified Professional Coders',
    description: 'CPC specialty certification renewal, CEU tracking, and AAPC credential management.',
    url: '/for/certified-professional-coders',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CEU tracking across multiple AAPC certifications',
    desc: 'AAPC CPC renewal requires 36 CEUs per 2-year cycle. Specialty certifications (CPCO compliance, CPPM practice management, CPMA auditing, COC outpatient, CRC risk adjustment) each require additional CEUs on their own renewal cycles. Some CEUs are credential-specific; some qualify for multiple AAPC certifications. Tag every CEU by applicable certification. Each credential tracked independently.',
  },
  {
    icon: Clock,
    title: 'CPC multi-certification renewal calendar',
    desc: '"CPC — AAPC, 2-year renewal, february." "CPCO compliance — 2-year." "CPPM practice management — 2-year." "CPMA auditing specialty — 2-year." "Annual ICD update — october." "Annual CPT update — january." "AAPC membership — annual." "AAPC chapter CEUs — annual requirement." All AAPC credentials with 90-day advance alerts. Coding and compliance practice never interrupted.',
  },
  {
    icon: BarChart3,
    title: 'Annual code update compliance analytics',
    desc: 'ICD-10-CM/PCS codes update October 1. CPT codes update January 1. CPCs who bill without completing annual update training carry compliance and audit risk. Tag ICD and CPT annual update training as mandatory compliance CE at completion. Analytics confirms both annual updates completed before effective dates — every year without exception.',
  },
  {
    icon: Users,
    title: 'AAPC chapter and national conference involvement',
    desc: '"AAPC National Conference — may." "Local AAPC chapter meetings — monthly CEU opportunities." "AAPC specialty credential conference sessions." "AAPC online coding updates webinars." All AAPC professional development on calendar. Chapter meeting CEUs logged when applicable. National conference CE planned by applicable certification in advance.',
  },
]

const CPC_WORKFLOW = [
  { time: 'Annual planning', action: 'All AAPC certification renewal dates (CPC, CPCO, CPPM, CPMA, COC), annual ICD update (October), annual CPT update (January), AAPC National Conference, AAPC membership renewal, and chapter CEU requirement all loaded in January. CEU pace: 18 per year per 2-year cycle.' },
  { time: 'CEU completion', action: '"AAPC-approved webinar — evaluation and management documentation changes 2025, 1 CEU, CPC and CPMA applicable." Tagged by applicable AAPC certification. CPC counter updates. CPMA counter also updates if the CEU qualifies for auditing specialty. Each certification tracked independently. Chapter CEU requirement tracked separately.' },
  { time: 'Code updates', action: '"ICD-10-CM annual update webinar — september, 2 CEUs, compliance documentation." "CPT annual update — december, 2 CEUs." Annual code updates tagged as mandatory compliance CEUs. Both ICD and CPT updates confirmed complete before October 1 and January 1 effective dates respectively. Compliance audit trail maintained.' },
  { time: 'Chapter CEUs', action: '"AAPC chapter meeting — monthly, 1 CEU per meeting." Chapter attendance CEUs tracked as a separate annual requirement. Chapter CEU attendance pattern logged. AAPC membership requires chapter participation for some credential maintenance purposes. Monthly chapter CEUs accumulated toward annual requirement.' },
  { time: 'Renewal audit', action: 'Analytics: CPC CEU total current? CPCO CEU satisfied? CPPM CEU complete? CPMA CEU adequate? ICD annual update done? CPT annual update done? AAPC membership active? Chapter CEU requirement met? Complete CPC credential audit 90 days before earliest AAPC certification renewal. Separate documentation per certification.' },
]

export default function ForCertifiedProfessionalCodersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Certified Professional Coders"
        title={
          <>
            CPC and specialties maintained.
            <br />
            <em className="not-italic text-gold">Annual updates never missed.</em>
          </>
        }
        lede="Certified Professional Coders manage AAPC CPC renewal with 36 CEUs per 2 years, multiple AAPC specialty certifications (CPCO, CPPM, CPMA, COC, CRC) each with independent renewal cycles, mandatory annual ICD and CPT code update training, and professional development simultaneously. Momenties tracks CEUs by AAPC certification, surfaces renewal deadlines 90 days early, and manages the full CPC credential calendar in one view."
        crumbs={[{ label: 'For Certified Professional Coders' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How certified professional coders use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for CPC and AAPC credential management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">CPC credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CEUs and credentials managed through every 2-year AAPC cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {CPC_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold CPC, CPCO, CPPM, and CPMA — four AAPC certifications. Each one has its own 2-year renewal cycle and they don&apos;t all align. A webinar that gives me CEUs for CPC and CPMA might not count for CPCO or CPPM. Before Momenties I was tracking all four with one total and discovering the mismatch at renewal time. Now each certification has its own counter and I can see instantly which needs the most attention.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">T</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Tara H., CPC, CPCO, CPPM, CPMA</div>
                  <div className="text-xs text-muted-foreground">Senior medical coder and compliance specialist</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All AAPC credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'AAPC CEUs by certification — CPC 2-year renewal',
                'CPCO compliance specialty — 2-year renewal',
                'CPPM practice management — 2-year renewal',
                'CPMA auditing specialty — 2-year renewal',
                'COC outpatient coding — 2-year renewal',
                'Annual ICD-10 update training',
                'Annual CPT update training',
                'AAPC chapter CEU requirement — annual',
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
        title="CPC and specialties maintained. Annual updates never missed."
        subtitle="CEU tracking by AAPC certification, code update deadline calendar, and CPC professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CEU analytics', href: '/features/analytics' }}
      />
    </>
  )
}
