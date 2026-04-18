import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Medical Assistants — CMA/RMA renewal, CEU tracking, and MA credential management',
  description:
    'Medical assistants manage CEU requirements for CMA (AAMA) or RMA (AMT) credential renewal, CPR recertification, phlebotomy certification maintenance, EKG certification renewal, and professional development simultaneously. Momenties tracks CEUs by credential, surfaces renewal deadlines 90 days early, and manages the full MA credential calendar.',
  alternates: { canonical: '/for/medical-assistants' },
  openGraph: {
    title: 'Momenties for Medical Assistants',
    description: 'CMA/RMA renewal, CEU tracking, and medical assistant credential management.',
    url: '/for/medical-assistants',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CEU tracking for CMA and RMA renewal',
    desc: 'AAMA CMA renewal requires 60 CEUs per 5-year cycle with specific category requirements including clinical, administrative, and general content. AMT RMA renewal requires 30 CEUs per 3-year cycle. Tag every CEU by applicable credential and category. CMA and RMA requirements tracked independently — dual-credential MAs manage both without confusion.',
  },
  {
    icon: Clock,
    title: 'MA multi-credential renewal calendar',
    desc: '"CMA — AAMA, 5-year renewal, june." "RMA — AMT, 3-year renewal, march." "CPR/BLS — 2-year, april." "Phlebotomy certification — NPA or ASCP, renewal." "EKG technician cert — renewal." "HIPAA training — annual." All MA credentials with 90-day advance alerts. No certification lapse between clinical rotations.',
  },
  {
    icon: BarChart3,
    title: 'Category analytics for AAMA CEU requirements',
    desc: 'AAMA CMA renewal requires CEUs distributed across clinical, administrative, and general categories — not just a total hour count. Tag every CEU by AAMA category. Analytics shows whether clinical, administrative, and general requirements are each on track. No category gap discovered at renewal audit.',
  },
  {
    icon: Users,
    title: 'Professional development and AAMA involvement',
    desc: '"AAMA annual conference — fall." "State MA chapter meeting — spring." "Specialty certification study group — monthly." "Medical terminology online course — self-paced CEU." Professional development commitments on calendar from year start. Consistent development maintains both CMA/RMA credentials and career advancement.',
  },
]

const MA_WORKFLOW = [
  { time: 'Annual planning', action: 'CMA or RMA credential renewal date, CPR/BLS recertification, phlebotomy cert expiration, EKG cert renewal, and total CEU hours needed all loaded in January. 90-day alerts on every credential. CEU completion pace calculated — hours per month to satisfy the CMA 5-year or RMA 3-year requirement.' },
  { time: 'CEU completion', action: '"AAMA-approved online module — medical law and ethics, tuesday 7pm, 2 hours, general CEU." Tagged by credential and AAMA category. CMA category counter updates. RMA counter updates if applicable to RMA renewal. No category tracked incorrectly against the wrong renewal cycle.' },
  { time: 'CPR recertification', action: '"CPR/BLS recertification — healthcare provider, saturday 9am, 4 hours." Healthcare provider BLS required at most clinical facilities. 2-year certification logged. Employer confirmation of current CPR — required for continued clinical placement — maintained without gap.' },
  { time: 'Specialty certs', action: '"Phlebotomy certification renewal — NPA, biennial, october." "EKG technician recertification — annual, may." Each specialty certification tracked independently. Some employers require phlebotomy or EKG certification in addition to CMA/RMA — all maintained on the same calendar.' },
  { time: 'Renewal audit', action: 'Analytics: CEU progress by AAMA category. Clinical CEU hours complete? Administrative and general categories on track? RMA total hours sufficient? CPR valid? Phlebotomy and EKG certs current? Complete MA credential audit before any renewal window opens.' },
]

export default function ForMedicalAssistantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Medical Assistants"
        title={
          <>
            Credentials current.
            <br />
            <em className="not-italic text-gold">CEUs never scrambled.</em>
          </>
        }
        lede="Medical assistants manage CEU requirements for CMA or RMA credential renewal with category minimums, CPR recertification, phlebotomy and EKG certification maintenance, and professional development simultaneously. Momenties tracks CEUs by credential and AAMA category, surfaces renewal deadlines 90 days early, and manages the full MA credential calendar in one view."
        crumbs={[{ label: 'For Medical Assistants' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How medical assistants use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for MA credential and CEU management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">MA credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CEU and credentials managed through every renewal cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {MA_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold CMA and RMA credentials along with phlebotomy certification — three different renewal cycles with different CEU requirements. I was letting the RMA renewal slip because I was focused on CMA, then scrambling at the last minute. Momenties put all three on the same calendar with separate alerts. Now I see all three credential deadlines at once and I&apos;ve never missed a renewal.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Jasmine T., CMA (AAMA), RMA</div>
                  <div className="text-xs text-muted-foreground">Medical assistant, multi-specialty group practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All MA credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CEU by AAMA category — CMA 5-year renewal',
                'AMT CEU tracking — RMA 3-year renewal',
                'CPR/BLS — healthcare provider, 2-year',
                'Phlebotomy certification renewal',
                'EKG technician certification renewal',
                'HIPAA training — annual refresher',
                'Medication administration certification',
                'AAMA conference and chapter events',
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
        title="Credentials current. CEUs never scrambled."
        subtitle="CEU tracking by AAMA category, multi-credential renewal calendar, and MA professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CEU analytics', href: '/features/analytics' }}
      />
    </>
  )
}
