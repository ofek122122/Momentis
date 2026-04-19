import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Neuro-Oncologists — ABPN or ABIM MOC CME renewal, neuro-oncology credential management',
  description:
    'Neuro-oncologists manage ABPN neurology or ABIM internal medicine and medical oncology MOC continuous CME with neuro-oncology content, state medical license biennial CME, DEA 3-year renewal, SNOA membership, RANO working group protocol participation, annual tumor board obligations, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full neuro-oncologist credential calendar.',
  alternates: { canonical: '/for/neuro-oncologists' },
  openGraph: {
    title: 'Momenties for Neuro-Oncologists',
    description: 'ABPN MOC CME renewal, neuro-oncology credential management.',
    url: '/for/neuro-oncologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPN or ABIM MOC on independently structured cycles',
    desc: 'Neuro-oncologists trained in neurology hold ABPN certification with neuro-oncology subspecialty under UCNS (United Council for Neurologic Subspecialties). Neuro-oncologists trained in internal medicine hold ABIM certification with medical oncology subspecialty. ABPN and ABIM have different MOC structures and CME requirements — tracked on independent cycles. UCNS neuro-oncology certification adds a separate 5-year renewal cycle with its own CE requirement. State medical license biennial CME runs independently. DEA registration 3-year cycle for chemotherapy and controlled medications.',
  },
  {
    icon: Clock,
    title: 'Neuro-oncologist multi-credential renewal calendar',
    desc: '"ABPN or ABIM primary board MOC — continuous CME." "UCNS neuro-oncology subspecialty certification — 5-year renewal." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual tumor board documentation." "SNOA membership — annual." "ASCO membership — annual." All neuro-oncologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'UCNS neuro-oncology CE requirements and tumor board documentation analytics',
    desc: 'UCNS neuro-oncology subspecialty certification renewal requires CE content specific to neuro-oncology — brain tumor pathology, CNS lymphoma, leptomeningeal disease, treatment-related neurotoxicity — general neurology or oncology CE does not satisfy UCNS subspecialty requirements. Annual tumor board participation required for institutional credentialing and ACGME fellowship compliance documentation — separate from personal CME. RANO working group protocol updates (RANO criteria revisions, pseudoprogression assessment) tracked as annual practice update CE separate from tumor board obligations.',
  },
  {
    icon: Users,
    title: 'SNO, ASCO, and neuro-oncology professional involvement',
    desc: '"SNO Annual Conference — november." "ASCO Annual Meeting — june." "AACR Annual Meeting — april." "EANO Annual Meeting (Europe)." "Glioblastoma treatment protocol updates." "IDH-mutant glioma management CE." "CNS lymphoma and leptomeningeal disease CE." "Immunotherapy neurotoxicity recognition and management CE." All neuro-oncology professional development on calendar. SNO and ASCO conference CME tagged by ABPN/ABIM MOC and UCNS subspecialty applicability.',
  },
]

const NO_WORKFLOW = [
  { time: 'Annual planning', action: 'ABPN or ABIM MOC CME pace, UCNS neuro-oncology 5-year CE pace, state medical license biennial CME, DEA 3-year renewal, SNO Annual Conference, ASCO Annual Meeting, and SNOA and ASCO memberships all loaded in January. ABPN/ABIM MOC counter, UCNS CE counter, and state licensure CME tracked independently with neuro-oncology content requirement monitored within UCNS counter.' },
  { time: 'CME completion', action: '"SNO-approved — IDH-mutant lower grade glioma: 2021 WHO classification updates, watch-and-wait versus early treatment decision framework, and temozolomide plus radiation sequencing, 2 CME, AMA PRA Category 1, ABPN MOC applicable, UCNS neuro-oncology applicable." ABPN MOC counter updates. UCNS CE counter updates. State licensure CME updates. Neuro-oncology-specific content confirmed — general neurology CME logged separately without UCNS credit.' },
  { time: 'RANO updates', action: '"RANO working group protocol updates — pseudoprogression assessment criteria, immunotherapy response evaluation in GBM (iRANO), and advanced MRI biomarker integration, 1 CE, Q1." Annual RANO criteria update placed as a practice requirement for neuro-oncologists interpreting tumor response. RANO criteria change with new treatment modalities — immunotherapy, tumor treating fields, targeted therapies. Annual update CE placed at Q1 to align with updated RANO publication cycle.' },
  { time: 'Tumor board', action: '"Annual tumor board participation documentation — GBM multidisciplinary conference, CNS lymphoma tumor board, and pediatric brain tumor conference, Q4." Tumor board participation documentation placed as an institutional credentialing requirement for neuro-oncologists at cancer centers. Tumor board participation required for ACGME fellowship accreditation and NCI-designated cancer center credentialing. Annual documentation placed at Q4 before performance review and credentialing cycles.' },
  { time: 'Renewal audit', action: 'Analytics: ABPN or ABIM MOC CME on pace? UCNS neuro-oncology CE current? State medical license CME complete? DEA valid? Tumor board participation documented? SNOA membership active? Complete neuro-oncologist credential audit 90 days before earliest renewal. ABPN/ABIM, UCNS, state board, and institutional documentation maintained separately.' },
]

export default function ForNeuroOncologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Neuro-Oncologists"
        title={
          <>
            ABPN MOC and UCNS certification maintained.
            <br />
            <em className="not-italic text-gold">Neuro-oncology CE tracked. Tumor board documented.</em>
          </>
        }
        lede="Neuro-oncologists manage ABPN neurology or ABIM medical oncology MOC continuous CME with neuro-oncology subspecialty content requirements, UCNS neuro-oncology subspecialty certification on an independent 5-year cycle, state medical license biennial CME, DEA 3-year registration, annual RANO working group protocol updates as a practice requirement, annual tumor board participation for institutional credentialing, and professional development at SNO and ASCO simultaneously. Momenties tracks CME by neuro-oncologist credential, surfaces renewal deadlines 90 days early, and manages the full neuro-oncologist credential calendar in one view."
        crumbs={[{ label: 'For Neuro-Oncologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How neuro-oncologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for neuro-oncologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Neuro-oncologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every ABPN MOC cycle, UCNS renewal window, and annual tumor board obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {NO_WORKFLOW.map((step, i) => (
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
                &ldquo;I have ABPN neurology board certification, UCNS neuro-oncology subspecialty certification, and my state medical license. ABPN and UCNS are both 5-year cycles but they renew at different times. The UCNS requires CE that specifically covers neuro-oncology content — I can&apos;t log general neurology CME and have it count. My institution requires annual tumor board participation documentation for my credentialing file. I participate in RANO working group activities which means I follow protocol criteria updates every year even though it&apos;s not a formal CE requirement. DEA is every 3 years. Momenties is the first system I&apos;ve used where I could see all of these as separate items with separate deadlines rather than one undifferentiated CME pile.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">H</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Helena W., MD, PhD</div>
                  <div className="text-xs text-muted-foreground">Neuro-oncologist, academic brain tumor program and clinical trials unit</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All neuro-oncologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPN or ABIM primary board MOC CME — continuous, neurology or oncology content',
                'UCNS neuro-oncology subspecialty certification — 5-year CE renewal',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual RANO working group protocol update — practice CE requirement',
                'Annual tumor board participation documentation — institutional credentialing',
                'SNOA membership renewal — annual',
                'SNO and ASCO conference CME planning by ABPN/ABIM and UCNS applicability',
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
        title="ABPN MOC and UCNS certification maintained."
        subtitle="CME tracking with neuro-oncology domain requirements, tumor board calendar, RANO update scheduling, and professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
