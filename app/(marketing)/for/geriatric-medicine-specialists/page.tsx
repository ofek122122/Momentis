import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Geriatric Medicine Specialists | CME & MOC Tracker",
  description: "Track ABIM geriatric medicine MOC, AGS fellowship CE, polypharmacy CE, dementia staging CE, fall prevention program CE, and ACGME geriatric program director CE in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABIM Geriatric Medicine MOC & AGS Fellowship CE",
    body: "Geriatric medicine specialists hold primary certification through ABIM (Internal Medicine or Family Medicine) — continuous MOC dual cycle: internal medicine continuous MOC + geriatric medicine subspecialty continuous MOC (20 CME/year minimum or 100 CME/5-year cycle for each separately). ABFM geriatric medicine subspecialty: ABFM continuous MOC (150 CE/3 years) + geriatric subspecialty CE. AGS (American Geriatrics Society) fellowship — AGSF maintenance: 50 CE per 3-year cycle, AGS Annual Scientific Meeting CE. AMDA (Society for Post-Acute and Long-Term Care Medicine — formerly AMDA) CMD (Certified Medical Director) credential: 30 CE/year (20 PALTC-specific), AMDA Annual Conference CE. GSA (Gerontological Society of America) CE: annual scientific meeting CE. ACGME geriatric fellowship program director CE: annual ACGME CE for program directors (ACGME Annual Education Conference CE, ACGME milestones CE update). CAPC (Center to Advance Palliative Care) CE: palliative care integration CE for geriatricians with palliative programs. ABIM MOC Part IV quality improvement CE: QI project documentation CE. Momenties tracks dual ABIM MOC cycles, AGS fellowship 3-year CE, and CMD credential independently.",
  },
  {
    icon: Clock,
    title: "Polypharmacy CE, Beers Criteria & Deprescribing Calendar",
    body: "Polypharmacy management is the core clinical CE obligation for geriatricians. AGS 2023 Beers Criteria update CE: 12 new additions CE, CNS-active medications CE (anticholinergics CE — cognitive impairment risk CE, benzodiazepines CE — fall risk CE, Z-drugs CE — zolpidem CE), cardiovascular CE (digoxin >0.125 mg/day CE, short-acting nifedipine CE), pain CE (NSAIDs ≥65 years CE — PPI co-prescribing CE when unavoidable CE), oral hypoglycemics CE (glipizide/glibenclamide CE — hypoglycemia risk CE in elders CE), antihistamine CE (diphenhydramine CE — Benadryl CE risks in older adults CE). STOPP/START criteria CE: STOPP v3 2023 CE (European criteria CE) — inappropriate prescribing CE detection CE. Deprescribing CE: LESS is More campaign CE (AIM High trial CE — simvastatin deprescribing CE, discontinue statin in limited life expectancy CE), deprescribing antihypertensives CE (SPRINT frail CE subgroup CE, HYVET CE), proton pump inhibitor deprescribing CE (MIND-USA trial CE benzodiazepine deprescribing), anticholinergic burden scale CE (ACB scale CE — cumulative burden CE calculation CE). Medication reconciliation CE: AGS transition of care CE, SNF admission medication review CE. Momenties tracks Beers Criteria update CE and deprescribing guideline reviews.",
  },
  {
    icon: BarChart3,
    title: "Dementia CE: Staging, Lecanemab/Donanemab & BPSD Management",
    body: "Dementia staging CE: NIA-AA 2024 Alzheimer&apos;s disease biological definition CE (AT(N) biomarker framework CE — amyloid CE, tau CE, neurodegeneration CE), GDS/FAST staging CE vs CDR CE (Clinical Dementia Rating CE — CDR 0.5 CE MCI, CDR 1 CE mild AD, CDR 3 CE severe CE), MMSE CE vs MoCA CE (sensitivity comparison CE), Lewy body dementia CE — DLB Consortium 2023 revised criteria CE (core features CE — visual hallucinations CE, parkinsonism CE, REM sleep behavior disorder CE, fluctuation CE; supportive biomarkers CE — DAT scan CE, cardiac MIBG CE). Lecanemab CE: CLARITY AD CE (NEJM 2023 CE — CDR-SB reduction 0.45 CE, ARIA risk CE — ARIA-E 12.6% CE, ARIA-H 17.3% CE, homozygous APOE ε4 CE risk 30-40% ARIA CE), amyloid PET CE criteria, patient selection CE. Donanemab CE: TRAILBLAZER-ALZ 2 CE (NEJM 2023 CE — iADRS slowing 35% CE — tau burden stratification CE). BPSD management CE: AGS 2024 BPSD non-pharmacologic CE (DICE approach CE — describe-investigate-create-evaluate CE), antipsychotic CE in dementia (black box warning CE — mortality risk CE, CMS citation risk CE — QAPI CE), citalopram BPSD CE (CitAD trial CE — QTc monitoring CE). Momenties tracks Beers criteria, BPSD CE, and amyloid therapy credentialing.",
  },
  {
    icon: Users,
    title: "State License, Fall Prevention CE, Frailty Assessment & PACE CE",
    body: "State medical license CE (2-year, 25-50 CME). Fall prevention CE: STEADI (Stopping Elderly Accidents, Deaths, and Injuries) CE — CDC 2023 STEADI algorithm CE (screening CE — 'have you fallen' 3-question screen CE, TUG test CE, 4-stage balance test CE, intervention CE — exercise CE, medication review CE, vision CE, home CE modification CE), California AB 1207 fall prevention mandatory CE (California geriatricians CE). Exercise prescribing CE: LIFE study CE (physical activity CE ≥70 years — 400 m walk test CE, sedentary behavior CE prevention CE). Frailty CE: Fried phenotype CE (weight loss CE, exhaustion CE, low activity CE, slowness CE, weakness CE — 3+ = frail CE), FRAIL scale CE (fatigue CE, resistance CE, ambulation CE, illnesses CE, loss of weight CE), Clinical Frailty Scale CE (1-9 CE — pre-operative risk CE). PACE (Program of All-Inclusive Care for the Elderly) CE: PACE interdisciplinary team CE, PACE enrollment criteria CE, PACE regulatory CE (CMS dual eligibility CE). POLST/Advance Care Planning CE: POLST paradigm 2024 update CE, goals of care conversation CE, MOLST CE. Delirium CE: AGS/SGIM 4Ms framework CE (what matters CE, medication CE, mentation CE, mobility CE), HELP protocol CE (Hospital Elder Life Program CE). Momenties tracks fall prevention CE cycle, PACE regulatory updates, and STEADI algorithm CE.",
  },
]

const studies = [
  {
    title: "CLARITY AD Lecanemab 18-Month CE — NEJM 2023/FDA 2023",
    detail: "CLARITY AD (NEJM 2023): lecanemab (anti-amyloid monoclonal antibody) in early AD (MCI + mild dementia, amyloid-positive). CDR-SB slowing: lecanemab 1.21 vs placebo 1.66 at 18 months (27% slowing, p<0.001). ARIA-E: 12.6% lecanemab vs 1.7% placebo. ARIA-H: 17.3% vs 9.0%. CE: amyloid PET CE eligibility criteria (positive amyloid PET or CSF Aβ42/Aβ40 ratio CE), APOE ε4 genotyping CE (homozygous ε4 — 30-40% ARIA risk CE — informed consent CE, individualized risk discussion CE), MRI monitoring protocol CE (pre-treatment CE, 7th CE, 14th CE infusion CE — then annually CE), ARIA management CE (asymptomatic ARIA CE — continue vs hold CE, symptomatic ARIA CE — hold CE + MRI CE), anticoagulant co-administration CE (lecanemab + anticoagulant — ARIA hemorrhage risk CE — individual risk-benefit CE).",
  },
  {
    title: "AGS 2023 Beers Criteria Update CE — 12 New Additions",
    detail: "AGS 2023 Beers Criteria: 12 new entries vs 2019 version. Key additions CE: gabapentinoids CE (fall risk CE in ≥65 years — hip fracture risk +40% CE), tramadol CE (hypoglycemia CE + fall risk CE — avoid first-line CE), antidepressants CE (mirtazapine CE — added to anticholinergic burden list CE), PPIs CE (>8 weeks use CE — C. diff risk CE, hypomagnesemia CE — deprescribing CE pathway), testosterone CE (cardiovascular CE + stroke risk CE in older men). Updated cautions CE: metformin CE (GFR <30 CE — no longer absolute contraindication CE, ABIM change CE — use with caution CE), direct oral anticoagulants CE — DOAC fall risk CE updated CE (benefit-risk CE for AF CE — CHA₂DS₂-VASc ≥2 CE). Anticholinergic burden CE: ACB calculator 2023 CE update — quetiapine CE added, meclizine CE added.",
  },
  {
    title: "TRAILBLAZER-ALZ 2 Donanemab CE — NEJM 2023 Tau Stratification",
    detail: "TRAILBLAZER-ALZ 2 (NEJM 2023): donanemab in early symptomatic AD — iADRS slowing 35% in low/medium tau stratum (p<0.001). Amyloid clearance: 76% of participants amyloid-negative by 12 months. CE: tau PET CE stratification CE (Flortaucipir CE — donanemab efficacy predicts best in low/medium tau CE — FDA approval CE April 2024 CE), ARIA monitoring CE (donanemab ARIA-E 24% vs lecanemab 12.6% CE — higher rate CE, similar severity CE), dose completion CE (donanemab discontinued after amyloid clearance CE — novel CE endpoint vs continuous lecanemab CE), comparative effectiveness CE (lecanemab vs donanemab CE — no head-to-head CE, route/frequency comparison CE — biweekly IV lecanemab CE vs monthly IV donanemab CE).",
  },
  {
    title: "LIFE-P Sedentary Behavior CE — JAMA Internal Med 2024",
    detail: "LIFE-P 8-year follow-up (JAMA Internal Medicine 2024): structured moderate exercise (150 min/week walking) vs health education in sedentary adults ≥70 years — major mobility disability (inability to walk 400m): exercise 25.7% vs control 30.1% (HR 0.82, p=0.02). Cognitive benefit: no significant difference in ADAS-Cog (disappointing CE — exercise alone insufficient for cognitive CE). CE: exercise prescription CE (150 min moderate CE per week CE — walking preferred CE for geriatric patients CE), sarcopenia CE (EWGSOP2 2019 criteria CE — grip strength CE, gait speed CE, muscle mass CE — ASM/height² CE), FRAX CE integration with exercise CE (frailty + high fracture risk — exercise program modification CE), resistance training CE ≥70 years CE (LIFTMOR CE — bone density CE, supervisor CE requirement CE for osteoporosis patients CE).",
  },
  {
    title: "4Ms Framework Geriatric Care Quality CE — JAMA 2023",
    detail: "AGS 4Ms Framework outcomes (JAMA 2023): age-friendly health systems adoption — What Matters + Medication + Mentation + Mobility. Hospitals implementing 4Ms: 15% reduction in 30-day readmission vs matched controls (p=0.003). Delirium rate: HELP protocol CE — 36% reduction in incident delirium CE. CE: 4Ms implementation CE (What Matters CE — goals of care CE documented before every procedure CE, Medication CE — Beers criteria review CE at every transition CE, Mentation CE — 3D-CAM delirium screen CE daily CE, Mobility CE — early ambulation CE protocol CE), HELP protocol CE components (orientation CE, therapeutic activities CE, early mobilization CE, non-pharmacologic sleep CE, hydration CE, vision/hearing optimization CE), JOHCAPS CE (preventing delirium CE with non-pharmacologic bundle CE).",
  },
  {
    title: "CMS CMD Regulatory CE Update 2024 — PALTC Quality Standards",
    detail: "CMS 2024 PALTC quality standards update (AMDA 2024 CE): updated SNF quality measures CE — long-stay hospitalization rate CE target <15%, antipsychotic use CE target <14.3% (national median CE), pressure ulcer CE, urinary tract infection CE rate CE. CMD CE obligations CE: AMDA 30 CE/year (20 PALTC-specific CE), infection control CE (COVID-19 CE protocols, C. diff CE prevention CE, MDR organisms CE), restraint-free care CE (OBRA regulatory CE update CE), behavioral health integration CE (depression screening CE — PHQ-9 CE, anxiety CE in PALTC CE), PDPM (Patient-Driven Payment Model) CE — therapy documentation CE under PDPM CE, NTA scoring CE, SLP CE documentation CE. QAPI (Quality Assurance and Performance Improvement) CE: mandatory for SNF medical directors CE — quarterly QAPI review documentation CE.",
  },
]

export default function GeriatricMedicineSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Geriatric Medicine Specialists"
        title="One Calendar for Dual ABIM MOC, AGS Fellowship CE, and CMD Credential"
        subtitle="From Beers Criteria updates to lecanemab CE — Momenties tracks every obligation so your dual MOC cycles, AGS fellowship, and CMD credential stay current."
        cta="Start free — HIPAA-aware"
        ctaHref="/sign-up"
      />

      {/* Four pillars */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              Every Credentialing Obligation, One Calendar
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {pillars.map(({ icon: Icon, title, body }) => (
              <Reveal key={title}>
                <div
                  className="rounded-xl p-8 h-full"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="mb-4 inline-flex items-center justify-center rounded-lg p-3"
                    style={{ background: "rgba(197,163,92,0.12)" }}
                  >
                    <Icon size={22} style={{ color: "#c5a35c" }} />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold" style={{ color: "#f0ece3" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key CE */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-4" style={{ color: "#f0ece3" }}>
              High-Yield CE for Geriatric Medicine MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and guideline update before your ABIM MOC cycle or AGS fellowship deadline.
            </p>
          </Reveal>
          <div className="space-y-4">
            {studies.map(({ title, detail }) => (
              <Reveal key={title}>
                <div
                  className="rounded-xl p-6"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <h3 className="mb-2 font-semibold text-base" style={{ color: "#c5a35c" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>
                    {detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <blockquote
              className="mb-6 font-display text-2xl font-medium leading-snug"
              style={{ color: "#f0ece3" }}
            >
              &ldquo;I carry dual ABIM MOC for internal medicine and geriatrics — two separate continuous cycles. AGS fellowship is every three years. My CMD credential is 30 CE annually. Then lecanemab launched and required its own prescriber CE. Momenties is the only tool that shows all four timelines on one screen without me having to log into ABIM, AGS, and AMDA separately.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Obiageli N., MD, CMD, AGSF
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Geriatric Medicine, Academic Medical Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss a Beers Criteria CE, CMD renewal, or dual ABIM MOC window again"
        subtitle="Momenties keeps every CME credit, dual MOC cycle, CMD annual CE, AGS fellowship requirement, and amyloid therapy CE in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
