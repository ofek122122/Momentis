import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Cystic Fibrosis Specialists | CME & MOC Tracker",
  description: "Track ABIM pulmonary/CF subspecialty MOC, CFF Care Center annual CE, CFTR modulator update CE, pulmonary function credentialing CE, and CFFPR registry deadlines in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABIM Pulmonary MOC, CFF Care Center Accreditation & NACFC CE",
    body: "Cystic fibrosis specialists hold primary certification through ABIM (Pulmonary Disease or Pediatric Pulmonology — subspecialty continuous MOC: 20 CME/year minimum or 100 CME/5-year cycle). CFF (Cystic Fibrosis Foundation) Care Center accreditation: annual renewal — CF Care Center Standards compliance CE, multidisciplinary team composition CE (physician, nurse, respiratory therapist, social worker, dietitian — annual documentation), CFF patient registry data submission CE (quarterly). NACFC (North American Cystic Fibrosis Conference) CE: annual — CFTR modulator update CE, CFFPR outcomes CE, emerging therapy CE. ATS/ERS pediatric pulmonary fellowship CE for pediatric CF specialists. ABIM Pediatrics + Pediatric Pulmonology for pediatric CF specialists — dual MOC cycles. ECFS (European Cystic Fibrosis Society) fellowship CE: 2-year cycle for academic CF specialists. CFRI (CF Research Institute) investigator CE for those in clinical trials. Momenties tracks ABIM MOC, CFF accreditation annual CE, and NACFC conference CE independently on separate timers.",
  },
  {
    icon: Clock,
    title: "CFTR Modulator CE, Elexacaftor/Tezacaftor/Ivacaftor & Residual Disease CE",
    body: "CFTR modulator CE: elexacaftor/tezacaftor/ivacaftor (ETI — Trikafta) CE — FDA-approved for F508del homozygous and heterozygous mutations (≥2 copies, including minimal function mutations), ppFEV1 improvement +14.3% from baseline, sweat chloride reduction -41.8 mmol/L, exacerbation rate reduction 63% CE. ETI in early disease CE: PROMISE trial CE (ETI in ages 6-11 — 14.8% ppFEV1 improvement, lung clearance index CE), ETI in <6-year cohort CE (Phase 3 ELFIN trial 2024 — 12-24 month toddler data CE). CFTR mutation classification CE: Class I-VI mutation CE (gating mutations — ivacaftor CE; minimal function — ETI CE; class I nonsense — ataluren CE in EU), newborn screening expanded panel CE (160+ mutations). Residual disease CE: CF lung disease despite ETI CE — microbiome CE (Pseudomonas persistence on ETI CE, Staphylococcus aureus sputum clearance CE), CF-related diabetes CE (CFRD prevalence 40-50% adults — annual OGTT CE, insulin preferred CE), CF liver disease CE (hepatic steatosis on ETI CE, fibroscan annual CE for portal hypertension screening). Momenties tracks modulator CE by mutation class and CFRD annual screening.",
  },
  {
    icon: BarChart3,
    title: "Pulmonary Exacerbation CE, Airway Clearance & Transplant Timing CE",
    body: "Pulmonary exacerbation (PEx) management CE: CFF 2023 PEx treatment guidelines CE (IV antibiotic selection CE — anti-pseudomonal CE: tobramycin/ceftazidime vs tobramycin/meropenem CE — based on sputum culture sensitivity), IV vs oral treatment decision CE (mild PEx criteria CE), PEx definition CE (Fuchs criteria — 12 symptom criteria, 4+ required CE), inhaled tobramycin CE (28 days on/28 days off CE), azithromycin chronic suppressive CE (3×/week CE — anti-inflammatory not antibiotic use CE). Airway clearance CE: high-frequency chest wall oscillation CE (Vest therapy CE — current devices), oscillating PEP CE (Aerobika vs Acapella CE), autogenic drainage CE, active cycle of breathing CE. HRCT CE: lung clearance index (LCI) CE (structural lung disease detection before ppFEV1 decline CE — LCI ≥7.5 abnormal in pediatric CF CE), CT chest scoring CE (Bhalla score CE, Brody score CE). Lung transplant timing CE: ISHLT 2021 CF listing criteria CE (ppFEV1 <50% with rapid decline, 6MWD <400m, frequent PEx requiring IV antibiotics ≥3/year CE, Burkholderia cenocepacia contraindication CE). Momenties tracks PEx antibiotic rotation CE and transplant evaluation windows.",
  },
  {
    icon: Users,
    title: "CFFPR Registry, CF-Related Comorbidity Screening & Reproductive CE",
    body: "CFFPR (CF Foundation Patient Registry) CE: quarterly data submission — forced vital capacity CE, BMI CE, microbiology CE, modulator status CE, complication documentation CE. CFF center outcomes reporting CE: annual survival data CE, ppFEV1 median CE, pulmonary exacerbation rate CE, nutrition status CE (BMI percentile <50th for pediatrics, BMI <18.5 kg/m² adults — malnutrition CE). CF-related diabetes (CFRD) CE: ISPAD/CFF joint guidelines 2023 CE (annual OGTT CE in CF ≥10 years, insulin therapy CE — metformin ineffective in CF CE, CFRD impact on lung function CE). CF bone disease CE: annual DXA scan CE (≥18 years with ppFEV1 <50% or BMI <18 kg/m² or corticosteroid use CE), vitamin D target CE (25-OHD 30-60 ng/mL CE). Fertility/reproductive CE: male infertility CE (congenital bilateral absence of vas deferens — 98% of CF males CE, TESE/TESA CE, carrier testing partner CE), pregnancy in CF on ETI CE (ETI safety data 2024 — fetal outcomes registry CE). Newborn screening CE: state panel expansion CE, false-negative rate CE. Momenties tracks CFFPR submission windows, CFRD annual OGTT, and DXA scan schedule.",
  },
]

const studies = [
  {
    title: "PROMISE ETI in Ages 6-11 — NEJM 2024 Extension Data",
    detail: "PROMISE trial extension (NEJM 2024): elexacaftor/tezacaftor/ivacaftor in ages 6-11 at 96 weeks. ppFEV1 improvement from baseline: +14.8% at week 96 (sustained). Lung clearance index: -1.96 from baseline (normalized in 73%). Sweat chloride -46.2 mmol/L. CE: pediatric dosing CE (weight-based granule formulation CE for <30 kg, film-coated tablets CE for ≥30 kg), LCI as primary endpoint in pediatric trials CE (more sensitive than ppFEV1 for early lung disease detection CE), structural lung disease stabilization CE (HRCT Brody score CE — progression halt vs natural history), hepatotoxicity monitoring CE (transaminase every 3 months for first year, annually thereafter), cataracts monitoring CE (slit-lamp exam CE before initiation in children).",
  },
  {
    title: "ELFIN ETI in Ages 1-5 — Phase 3 Interim CE (NEJM Evid 2024)",
    detail: "ELFIN trial interim data (NEJM Evidence 2024): ETI in CF toddlers ages 1-5 with F508del/minimal function. Sweat chloride reduction: -49.8 mmol/L at 24 weeks. Lung clearance index: -1.72 from baseline. No serious adverse events beyond expected ETI profile. CE: ETI in pre-symptomatic CF CE (intervention before ppFEV1 decline CE), sweat chloride as surrogate endpoint CE (age-appropriate threshold CE — <30 mmol/L normal in <6 months CE), granule formulation CE (dissolve in soft food CE — compliance in toddlers CE), developmental milestone monitoring CE (growth velocity CE, neurodevelopment CE), parent/caregiver CE counseling CE (medication burden, adherence strategies CE).",
  },
  {
    title: "CFF Pulmonary Exacerbation Treatment Guidelines 2023 Update CE",
    detail: "CFF 2023 PEx guidelines update: IV anti-pseudomonal antibiotic selection based on culture sensitivity — first choice tobramycin + beta-lactam (ceftazidime or meropenem based on MIC). Duration: 14 days standard (extend to 21 days if inadequate response). Oral step-down CE for mild PEx (outpatient criteria — ppFEV1 >40%, no fever, adequate nutrition, can tolerate oral antibiotics). CE: PEx definition CE (Fuchs criteria 4/12 symptoms: increased cough, dyspnea, sputum, fatigue, anorexia, weight loss, sinus pain, hemoptysis, temperature >38°C, ppFEV1 decrease ≥10%, hypoxemia, chest radiograph change), sputum culture timing CE (culture before antibiotics CE), inhaled tobramycin rotation CE (28-on/28-off schedule CE — resistance prevention CE), aminoglycoside monitoring CE (peak/trough CE vs extended-interval CE in CF pharmacokinetics).",
  },
  {
    title: "CFRD ISPAD/CFF Joint Guidelines 2023 — Insulin First CE",
    detail: "ISPAD/CFF joint CFRD guidelines 2023: insulin remains first-line — CFRD pathophysiology CE (insulin deficiency + resistance CE — different from type 1 or type 2 CE, fibrosing pancreatopathy CE), annual OGTT screening CE (OGTT ≥10 years, HbA1c unreliable CE due to increased red cell turnover in CF CE), glucose management CE during PEx CE (IV insulin CE for exacerbations — steroids exacerbating hyperglycemia CE), ETI and CFRD CE (some patients show OGTT normalization on ETI — ongoing reassessment CE), CFRD nutrition CE (high calorie/fat diet unchanged CE — no carbohydrate restriction CE), CFRD and pregnancy CE (target glucose CE, insulin dosing in pregnancy CE).",
  },
  {
    title: "Burkholderia cenocepacia Transplant Outcomes — J Heart Lung Transplant 2024",
    detail: "Multi-center analysis (J Heart Lung Transplant 2024): Burkholderia cenocepacia post-lung transplant outcomes — 1-year survival 52% vs 82% non-Bcc (p<0.001), 5-year survival 25% vs 65%. B. gladioli: improved outcomes vs B. cenocepacia (1-year survival 74%) — reassessment of absolute contraindication. CE: Bcc species typing CE (recA PCR CE — cenocepacia vs gladioli vs multivorans CE), pre-transplant CF microbiology CE (MRSA decolonization CE, nontuberculous mycobacteria CE — Mycobacterium abscessus pre-transplant treatment CE), post-transplant immunosuppression CE (tacrolimus target CE in CF — calcineurin inhibitor CE), azithromycin post-transplant CE (CLAD prevention CE — macrolide immunomodulation CE).",
  },
  {
    title: "CF Bone Disease DXA and Vitamin D — CFF 2024 Practice Update",
    detail: "CFF 2024 bone disease practice update: DXA z-score <-2.0 in 25% of adults with CF — annual DXA indicated for ppFEV1 <50%, BMI <18 kg/m², chronic corticosteroid use, delayed puberty, or prior fracture. Vitamin D target: 25-OHD 30-60 ng/mL (not standard 20 ng/mL threshold CE). CE: fat-soluble vitamin CE (vitamins A, D, E, K — CF-specific formulations CE — AquADEKs CE), ETI and bone CE (ETI improves BMI and BMD in 12-month observational studies CE), bisphosphonate CE in CF (oral bisphosphonate vs IV zoledronate CE — GI tolerance CE), CF-related arthropathy CE (episodic arthropathy 1.5-8.5% CE — different from CFTR-related arthritis CE).",
  },
]

export default function CysticFibrosisSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Cystic Fibrosis Specialists"
        title="One Calendar for ABIM MOC, CFF Accreditation, and CFFPR Registry Deadlines"
        subtitle="From ETI modulator CE updates to CFRD annual OGTT reminders — Momenties tracks every obligation so your MOC cycle, CF Care Center accreditation, and patient registry submissions stay current."
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
              High-Yield CE for Cystic Fibrosis MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each modulator trial update and guideline revision before your ABIM MOC cycle or CFF accreditation renewal.
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
              &ldquo;My ABIM MOC, CFF Care Center annual accreditation, quarterly CFFPR data submissions, NACFC, and CFRD screening deadlines for my patients all run on completely different calendars. ETI changed everything in CF so fast — new CE every few months. Momenties finally puts all of it on one screen so I can track my own CE and my center&apos;s obligations at the same time.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Priya N., MD, FCCP
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Adult Cystic Fibrosis Program, Academic Medical Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss a CFFPR submission, CFF accreditation CE, or ABIM MOC window again"
        subtitle="Momenties keeps every CME credit, modulator CE update, quarterly registry submission, and care center accreditation deadline in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
