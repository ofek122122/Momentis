import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Pulmonary Hypertension Specialists | CME & MOC Tracker",
  description: "Track dual ABIM pulmonary/critical care MOC, CHEST fellowship CE, PHPA accreditation CE, right heart catheterization credentialing, and PHAR registry deadlines in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "Dual ABIM MOC, CHEST Fellowship & PHPA Accreditation CE",
    body: "Pulmonary hypertension specialists hold primary certification through ABIM — most carry dual continuous MOC portfolios (Pulmonary Disease + Critical Care Medicine): two simultaneous ABIM MOC cycles, each requiring 20 CME/year minimum or 100 CME per 5-year cycle. CHEST (American College of Chest Physicians) fellowship — FCCP maintenance: 50 CE per 3-year cycle, CHEST Annual Meeting CE. ATS International Conference CE: annual — right heart catheterization workshop CE, echocardiography in PH workshop CE. PVRI (Pulmonary Vascular Research Institute) fellowship CE: 2-year cycle. PHPA (Pulmonary Hypertension Professional Association) center accreditation renewal CE: every 3 years — quality metrics reporting (1-year incident PAH survival ≥85%, multidisciplinary team meeting documentation ≥90% of patients), IV prostacyclin initiation CE (within 30 days of high-risk diagnosis), PHAR registry data completeness CE (≥80% completeness required for accreditation maintenance). ACCP Critical Care Medicine board recertification CE: 10-year exam — 150 CME including critical care-specific CE. Momenties tracks dual ABIM MOC portfolios, CHEST fellowship, and PHPA accreditation renewal independently on separate timers.",
  },
  {
    icon: Clock,
    title: "Right Heart Catheterization, Vasoreactivity & PAH Registry CE",
    body: "Right heart catheterization (RHC) credentialing CE: CHEST/ATS consensus CE — balloon flotation catheter technique CE, thermodilution CO CE, Fick CO CE, wedge pressure validation CE. Vasoreactivity testing CE: inhaled NO 80 ppm for 5 minutes or epoprostenol — positive response definition: mPAP decrease ≥10 mmHg to ≤40 mmHg with increased or stable CO CE. 6th World Symposium on PH CE (mPAP >20 mmHg threshold replacing 25 mmHg — risk stratification CE). REVEAL 2.0 risk calculator CE (annual recalculation at each visit — low/intermediate/high risk, treatment goal CE). PHAR (Pulmonary Hypertension Association Registry) U.S. submission CE: annual data entry — incident vs prevalent cases CE, treatment escalation documentation CE, CAMPHOR QoL CE. COMPERA 2.0 European registry CE: quarterly data submission. Prostacyclin prescription and monitoring CE: epoprostenol pump CE, treprostinil subcutaneous site pain management CE, selexipag dose titration protocol CE (200 mcg BID to 1600 mcg BID). Momenties tracks RHC credentialing renewal and registry submission windows separately.",
  },
  {
    icon: BarChart3,
    title: "Combination Therapy CE, Group 2-5 PH & CTEPH BPA CE",
    body: "Group 1 PAH combination therapy CE: AMBITION trial CE (ambrisentan + tadalafil initial combination — 50% risk reduction clinical failure vs monotherapy CE), TRITON trial CE (initial triple combination — macitentan + tadalafil + selexipag CE, PVR -67% vs -54% dual CE), STELLAR sotatercept CE (sotatercept on background dual therapy — 6MWD +40.8m CE, NT-proBNP -33.9% CE — first-in-class activin signaling inhibitor CE). Group 2 PH CE (left heart disease — HFpEF/HFrEF): avoid PAH drugs — negative MELODY-1 and SERAPHIN HFpEF data CE; Cpc-PH vs Ipc-PH hemodynamic differentiation CE (DPG ≥7 mmHg CE). Group 3 PH CE: COPD-PH — avoid sildenafil (DELPHI-1 worsening V/Q CE). CTEPH CE: RACE trial 2024 (BPA vs riociguat — BPA PVR reduction -54% vs -30% CE), BPA staged procedural CE (reperfusion injury prevention CE, 1-2 vessels per session CE). Group 5 CE: sickle cell PH (TRV ≥2.5 m/s — RHC mandatory before PAH therapy CE). Lung transplant evaluation CE: ISHLT 2021 listing criteria CE.",
  },
  {
    icon: Users,
    title: "State License, Echo in PH, SSc Screening & Rare PAH CE",
    body: "State medical license CE (2-year, 25-50 CME) independent from ABIM MOC. Echocardiography in PH CE: ASE/EACVI 2023 guideline CE — TR jet velocity CE, TAPSE/sPAP ratio CE (RV-PA uncoupling marker), RV strain CE by 2D speckle tracking, pericardial effusion as poor prognosis marker CE, exercise echo CE for latent Group 2 unmasking. SSc-PAH screening CE: DETECT algorithm CE (annual echo in all SSc patients CE — anti-centromere antibody, DLCO, FVC/DLCO CE), SLE-PAH CE (antiphospholipid antibody screen CE before PAH diagnosis), MCTD-PAH CE. Rare PAH CE: PVOD/PCH CE — BMPR2 mutation testing CE, genetic counseling CE for first-degree relatives. Congenital heart disease-associated PAH CE: Eisenmenger physiology CE, atrial septal defect closure CE timing. Exercise RHC CE: supine rest PCWP normal but exercise PCWP ≥25 mmHg — latent Group 2 unmasking CE. Nurse coordinator CE: epoprostenol/treprostinil annual training certification CE, pump troubleshooting CE. Momenties tracks PHPA accreditation renewal, echo CE, and SSc screening program windows.",
  },
]

const studies = [
  {
    title: "STELLAR Sotatercept Phase 3 PAH — NEJM 2023/2024 Follow-up",
    detail: "STELLAR trial (NEJM 2023): sotatercept (activin receptor fusion protein — ActRIIA ligand trap) vs placebo in PAH on background dual therapy (ERA + PDE5i). 6MWD improvement: +40.8m vs -0.8m placebo (p<0.001). NT-proBNP reduction 33.9% vs +2.3%. Functional class improvement 23% vs 15%. STELLAR extension 2024: morbidity/mortality benefit maintained. CE: sotatercept mechanism CE (TGF-β superfamily — GDF/activin pathway — antiproliferative CE), dosing CE (subcutaneous 0.3 mg/kg or 0.7 mg/kg every 3 weeks), hemoglobin monitoring CE (erythrocytosis — target Hgb <17 g/dL men, <15 g/dL women), telangiectasia/bleeding CE (HHT exclusion criterion), combination partner CE (all patients on ERA + PDE5i background).",
  },
  {
    title: "TRITON Triple Combination — JACC 2024 3-Year Outcomes",
    detail: "TRITON 3-year (JACC 2024): initial triple combination (macitentan 10 mg + tadalafil 40 mg + selexipag titrated) vs initial dual combination in newly diagnosed PAH. Clinical worsening: triple 26% vs dual 38% (HR 0.64, p=0.03). PVR reduction: triple -67% vs dual -54% (p=0.01). CE: patient selection CE (de novo PAH, IPAH/HPAH preferred, CTD-PAH with preserved RV function), selexipag titration protocol CE (week-by-week 200 mcg BID to 1600 mcg BID), prostacyclin receptor agonist vs IP receptor agonist distinction CE, TRITON vs AMBITION backbone comparison CE (macitentan vs ambrisentan CE).",
  },
  {
    title: "6th WSPH Risk Stratification — EHJ 2024 Real-World COMPERA Validation",
    detail: "6th WSPH modified 4-strata risk model validated in 3,200 COMPERA patients (EHJ 2024). 1-year survival: low risk 98.8%, int-low 95.2%, int-high 86.7%, high risk 68.4%. CE: 3-variable simplified risk score CE (WHO FC I-II + 6MWD ≥440m + NT-proBNP <300 ng/L = low risk), RHC-derived risk CE (RAP <8 mmHg, CI ≥2.5 L/min/m², SvO2 ≥65%), imaging risk CE (TAPSE ≥2.0 cm, no pericardial effusion), risk calculator integration CE (REVEAL 2.0 CE U.S. vs ESC/ERS CE Europe — treatment goal: maintain low-risk status at every visit).",
  },
  {
    title: "RACE BPA vs Riociguat for CTEPH — NEJM 2024",
    detail: "RACE trial (NEJM 2024): balloon pulmonary angioplasty vs riociguat monotherapy in inoperable CTEPH. Primary PVR reduction: BPA -54% vs riociguat -30% (p<0.001). 6MWD: BPA +51m vs riociguat +26m (p=0.002). CE: BPA procedural CE (staged approach CE — 1-2 vessels per session, reperfusion injury/intrapulmonary hemorrhage prevention CE), BPA hemodynamic target CE (mPAP <30 mmHg post-procedure), angiographic lesion type CE (webs, rings, complete occlusion — response differences), BPA vs PEA selection CE (distal vs proximal CTEPH), hybrid approach CE (BPA post-PEA residual PH).",
  },
  {
    title: "HFpEF-PH MELODY-1 Negative Trial — Group 2 vs Group 1 Differentiation CE",
    detail: "MELODY-1 and SERAPHIN HFpEF analysis (JACC 2024): macitentan in HFpEF-associated PH — fluid retention worsening, HF hospitalization trend increase. Group 2 PH patients excluded from Group 1 PAH therapy. CE: Cpc-PH hemodynamic criteria CE (mean PCWP ≤15 mmHg at rest, DPG ≥7 mmHg, TPG >12 mmHg — true pulmonary vascular disease CE vs Ipc-PH reactive CE), exercise RHC CE (rest PCWP normal, exercise PCWP ≥25 mmHg — latent Group 2 CE), SGLT2 inhibitors in HFpEF-PH CE (EMPEROR-Preserved RV improvement — preferred CE).",
  },
  {
    title: "PHPA Center Accreditation Standards 2024 Update — Pulm Circ 2024",
    detail: "PHPA 2024: new quality metrics — 1-year incident PAH survival ≥85%, MDT meeting documentation ≥90% of patients, IV prostacyclin initiation within 30 days of high-risk diagnosis. CE: PAH center documentation CE (functional class reassessment every 3-6 months, risk reassessment at every visit), PHAR registry completeness CE (≥80% for accreditation maintenance), IV prostacyclin nurse coordinator training CE (annual renewal), 24-hour PAH on-call coverage documentation CE, patient support resources CE (PAH-certified social worker, pulmonary rehabilitation program).",
  },
]

export default function PulmonaryHypertensionSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Pulmonary Hypertension Specialists"
        title="One Calendar for Dual ABIM MOC, PHPA Accreditation, and PAH Registry Deadlines"
        subtitle="From PHAR quarterly submissions to sotatercept CE — Momenties tracks every obligation so your dual MOC cycles, center accreditation, and RHC credentialing stay current."
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
              High-Yield CE for Pulmonary Hypertension MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and accreditation update before your ABIM MOC deadline or CHEST fellowship cycle.
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
              &ldquo;I carry two simultaneous ABIM MOC portfolios — pulmonary and critical care — plus CHEST fellowship, PHPA accreditation renewal every three years, and quarterly PHAR registry submissions. Then sotatercept launched and every manufacturer added mandatory CE. Momenties is the only system that shows me all five timelines at once.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Chioma E., MD, FCCP, FASE
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Pulmonary Hypertension Program, Academic Medical Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss a PHAR registry deadline, PHPA accreditation renewal, or dual ABIM MOC window again"
        subtitle="Momenties keeps every CME credit, dual MOC portfolio, center accreditation CE, and registry submission in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
