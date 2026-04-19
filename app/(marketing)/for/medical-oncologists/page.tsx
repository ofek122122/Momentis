import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Medical Oncologists — ABIM MOC CME renewal, medical oncology credential management',
  description:
    'Medical oncologists manage ABIM internal medicine primary MOC and ABIM hematology/oncology subspecialty MOC on independent cycles, annual CAR-T and cellular therapy CE as new indications expand, annual chemotherapy safety CE for institutional pharmacy credentialing, ACLS 2-year renewal, state medical license biennial CME, DEA 3-year renewal, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full credential calendar.',
  alternates: { canonical: '/for/medical-oncologists' },
  openGraph: {
    title: 'Momenties for Medical Oncologists',
    description: 'ABIM MOC CME renewal, medical oncology credential management.',
    url: '/for/medical-oncologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABIM IM MOC and hematology/oncology subspecialty independently',
    desc: 'Medical oncologists hold ABIM internal medicine primary certification under continuous MOC and ABIM hematology/oncology subspecialty certification on a second MOC cycle — two ABIM credentials with different content requirements. ABIM hematology/oncology subspecialty requires oncology-specific content including solid tumor management (breast, lung, colorectal, GI, GU cancers), hematologic malignancies (lymphoma, leukemia, myeloma), targeted therapy and immunotherapy, CAR-T cell therapy, and supportive care. Each ABIM certification tracks CE independently with different content requirements.',
  },
  {
    icon: Clock,
    title: 'Medical oncologist multi-credential renewal calendar',
    desc: '"ABIM internal medicine MOC — continuous CME." "ABIM hematology/oncology subspecialty MOC — oncology content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "ACLS — 2-year renewal." "Annual CAR-T and cellular therapy CE — new indications and REMS updates." "Annual chemotherapy safety CE — institutional oncology pharmacy credentialing." "Annual REMS CE — specific products with REMS programs (thalidomide, lenalidomide, pomalidomide, isotretinoin)." "ASCO membership — annual." "AACR membership — annual." All medical oncologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual CAR-T therapy CE and multi-product REMS prescribing analytics',
    desc: 'Medical oncologists managing CAR-T cell therapy must maintain CE on rapidly expanding indications — axicabtagene ciloleucel (Yescarta), tisagenlecleucel (Kymriah), lisocabtagene maraleucel (Breyanzi), ciltacabtagene autoleucel (Carvykti), and idecabtagene vicleucel (Abecma) each have different approved indications, CRS and neurotoxicity grading, and REMS requirements. Annual CAR-T CE ensures current knowledge of patient selection, bridging therapy, apheresis timing, and CRS/ICANS management before enrollment of each new patient. Annual REMS CE: IMiDs (lenalidomide, pomalidomide, thalidomide) and other REMS-required products require annual prescriber enrollment re-attestation — placed as annual institutional credentialing requirements.',
  },
  {
    icon: Users,
    title: 'ASCO, AACR, and medical oncology professional involvement',
    desc: '"ASCO Annual Meeting — june." "AACR Annual Meeting — april." "ASH Annual Meeting — december." "ESMO Annual Congress — september." "CAR-T CE — ZUMA-7 trial (Yescarta in 2nd line DLBCL), TRANSFORM (Breyanzi in 2nd line DLBCL), KarMMa-3 (Abecma in 5th line myeloma to 2nd line), and bispecific antibody approvals (teclistamab, elranatamab) as competitive alternatives to CAR-T." "Immunotherapy CE — KEYNOTE, CheckMate, and PACIFIC trial updates in solid tumors, combo PD-1/CTLA-4 across tumor types, LAG-3 inhibitor relatlimab combination." "Lung CE — LAURA trial osimertinib in stage III NSCLC, ADAURA 5-year data, KRAS G12C inhibitor (sotorasib, adagrasib) combination strategies." All medical oncology professional development on calendar.',
  },
]

const MEDONCOL_WORKFLOW = [
  { time: 'Annual planning', action: 'ABIM IM MOC CME pace (oncology content weighted), ABIM hematology/oncology subspecialty CE pace, state medical license biennial CME, DEA 3-year renewal, ACLS 2-year cycle, annual CAR-T therapy CE, annual chemotherapy safety CE, annual REMS re-attestation CE, ASCO Annual Meeting, AACR Annual Meeting, ASH Annual Meeting, and ASCO membership all loaded in January. Both ABIM counters tracked independently. REMS products listed with annual re-attestation deadlines.' },
  { time: 'CE completion', action: '"ASCO-approved — bispecific antibodies in relapsed/refractory multiple myeloma: teclistamab (Tecvayli) BCMA-CD3 bispecific versus CAR-T in later lines — MAJESTAEC versus KarMMa-3 comparison, elranatamab (Elrexfio) BCMA-CD3 data in penta-refractory myeloma, talquetamab GPRC5D-CD3 bispecific for BCMA-exposed patients, and cytokine release syndrome and neurotoxicity management in outpatient versus inpatient bispecific administration, 3 CME, AMA PRA Category 1, ABIM MOC applicable, ABIM HO applicable — myeloma domain." Both ABIM counters update.' },
  { time: 'CAR-T CE', action: '"Annual CAR-T therapy CE — 2025 guideline update: ZUMA-7 5-year overall survival data establishing axi-cel as standard of care in 2nd line DLBCL, TRANSFORM 4-year data for liso-cel in 2nd line LBCL, patient selection for CAR-T versus bispecific antibody in relapsed myeloma (cost, fitness, center availability), and CRS/ICANS grading (ASTCT 2.0 consensus criteria) with tocilizumab and dexamethasone management algorithm, 3 CME, ABIM HO applicable, Q2." Annual CAR-T CE placed Q2 aligned with ASCO June data presentations.' },
  { time: 'REMS CE', action: '"Annual REMS re-attestation — lenalidomide (Revlimid) REMS: risk of embryo-fetal toxicity in male and female patients of reproductive potential, mandatory contraception counseling for female patients and partners of male patients, monthly pregnancy test requirement for female patients, mandatory registration in RevAid program — prescriber attestation of counseling compliance, 1 CE, institutional pharmacy credentialing applicable, Q1." Annual REMS re-attestation placed Q1. All REMS products listed with individual annual re-attestation deadlines.' },
  { time: 'Renewal audit', action: 'Analytics: ABIM IM MOC CME on pace? ABIM hematology/oncology subspecialty content satisfied? State medical license CME complete? DEA valid? ACLS current? Annual CAR-T CE documented? Annual chemotherapy safety CE documented? All REMS products re-attested? ASCO membership active? Both ABIM counters reviewed independently. Complete medical oncologist credential audit 90 days before earliest renewal.' },
]

export default function ForMedicalOncologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Medical Oncologists"
        title={
          <>
            ABIM IM MOC and hematology/oncology subspecialty maintained.
            <br />
            <em className="not-italic text-gold">CAR-T indication CE current. Multi-product REMS re-attestation tracked.</em>
          </>
        }
        lede="Medical oncologists manage ABIM internal medicine continuous MOC and ABIM hematology/oncology subspecialty MOC on independent cycles, state medical license biennial CME, DEA 3-year registration, ACLS 2-year renewal, annual CAR-T therapy CE as Yescarta, Kymriah, Breyanzi, and bispecific antibodies expand and compete for second-line indications, annual REMS re-attestation for lenalidomide, pomalidomide, thalidomide, and other REMS products, and professional development at ASCO, AACR, and ASH. Momenties manages the full credential calendar."
        crumbs={[{ label: 'For Medical Oncologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How medical oncologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for medical oncologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Medical oncologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABIM MOC cycles, annual CAR-T CE, multi-product REMS re-attestation, and medical oncology professional development.</h2>
          </Reveal>
          <div className="space-y-3">
            {MEDONCOL_WORKFLOW.map((step, i) => (
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
                &ldquo;ABIM IM and ABIM hematology/oncology on separate counters — I have to log each activity against both when it applies and neither when it doesn&apos;t. The CAR-T landscape changed so fast that I had three separate product CRS management protocols in my head for patients at different stages of treatment. The bispecific antibodies came to market while I was still getting current on the second-generation CAR-T data. REMS re-attestation for lenalidomide, pomalidomide, and thalidomide all have annual deadlines — they&apos;re not on the same date because my patients started at different times. ACLS 2-year. State license biennial. DEA 3-year. The institutional chemotherapy credentialing recertification is annual. I had a spreadsheet and still missed the REMS deadline for one product. Before Momenties I was managing too many deadlines in too many portals.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">E</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Eric D., MD, PhD</div>
                  <div className="text-xs text-muted-foreground">Medical oncologist and CAR-T program co-director, academic cancer center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All medical oncologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABIM internal medicine MOC CME — continuous, oncology content weighted',
                'ABIM hematology/oncology subspecialty MOC — solid tumor, hematologic malignancy, immunotherapy domains',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'ACLS certification — 2-year renewal',
                'Annual CAR-T therapy CE — new indications, CRS/ICANS management updates',
                'Annual REMS re-attestation — lenalidomide, pomalidomide, thalidomide, other REMS products',
                'ASCO, AACR, and ASH conference CME planning by ABIM IM and HO applicability',
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
        title="ABIM IM MOC and hematology/oncology subspecialty maintained."
        subtitle="CME tracking for ABIM dual certification, annual CAR-T indication CE, multi-product REMS re-attestation, chemotherapy credentialing CE, and medical oncology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
