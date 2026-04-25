import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users2, BookOpen, CheckCircle, Award, Stethoscope } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Membranous Nephropathy Nurse Practitioners — Compliance Calendar | Momenties",
  description: "Automate NNP and ANCC renewal, anti-PLA2R antibody monitoring CE, rituximab B-cell depletion protocols, KDIGO guideline CE, proteinuria remission tracking, and nephrology NP credentialing for membranous nephropathy practice.",
}

const pillars = [
  {
    icon: Shield,
    title: "Nephrology NP Credentials & ANCC Certification",
    description: "AGNP-C (Adult-Gerontology Primary Care NP) or AGACNP-BC (Adult-Gerontology Acute Care NP) 5-year renewal — 1,000 clinical hours plus 150 CE credits for nephrology and glomerulonephritis co-management; CNN-NP (Certified Nephrology Nurse — Nurse Practitioner) biennial renewal through NNCC (Nephrology Nursing Certification Commission) requiring 30 nephrology-specific CE credits; annual ASN (American Society of Nephrology) Kidney Week glomerular disease session CE; annual NKF (National Kidney Foundation) Spring Clinical Meeting proteinuric kidney disease CE; biennial KDIGO guideline update CE for membranous nephropathy, IgA nephropathy, and glomerulonephritis management; and biennial collaborative practice agreement renewal with nephrologist for rituximab (Rituxan), tacrolimus, cyclosporine, mycophenolate mofetil, and cyclophosphamide prescribing in glomerular disease.",
  },
  {
    icon: Clock,
    title: "Anti-PLA2R Antibody & Rituximab Protocol Compliance",
    description: "Anti-phospholipase A2 receptor (PLA2R) IgG4 antibody quantitative ELISA at diagnosis, Month 3, Month 6, and every 6 months for treatment monitoring — document immunological remission trajectory (≥75% reduction at Month 6 predicts clinical remission with 85% specificity); THSD7A antibody reflexive testing for PLA2R-negative primary MN; rituximab 1,000 mg IV × 2 doses (Days 1 and 15, GEMRITUX/MENTOR protocol) pre-infusion checklist: CBC with differential, IgG/IgM/IgA immunoglobulin panel, HBsAg and HBcAb hepatitis B serology, CMV/EBV status, JC virus antibody index for PML stratification; CD19+ B-cell count at Month 3 and Month 6 post-rituximab (target depletion <5 cells/μL); quarterly IgG monitoring for hypogammaglobulinemia (IVIG replacement if IgG <400 mg/dL); rituximab re-dosing trigger documentation (CD19 >10 cells/μL reconstitution or rising anti-PLA2R titer); and annual REMS program and biologic prescribing privilege renewal.",
  },
  {
    icon: BarChart3,
    title: "Proteinuria Remission Tracking & KDIGO Compliance",
    description: "Monthly urine protein-to-creatinine ratio (UPCR) during active treatment; 24-hour urine protein collection at baseline, 6 months, 12 months, and annually — complete remission <0.3 g/day, partial remission <3.5 g/day with ≥50% reduction from baseline per KDIGO 2021 MN guidelines; eGFR by CKD-EPI 2021 at every visit with CKD staging (G1–G5) documentation; serum albumin monthly during nephrotic phase (target ≥3.5 g/dL normalization); BP at every visit with KDIGO 2021 target ≤125/75 mmHg for proteinuria >1 g/day — ACE inhibitor/ARB dose titration documentation; quarterly lipid panel with LDL-C target <70 mg/dL for persistent nephrotic syndrome cardiovascular risk; VTE risk assessment (TOC score) at every visit with anticoagulation compliance monitoring (INR 2–3 if warfarin, anti-Xa levels if LMWH); and annual KDOQI/KDIGO guideline adherence audit for NP practice quality review.",
  },
  {
    icon: Users2,
    title: "CNI Monitoring, Malignancy Surveillance & Patient Education",
    description: "Tacrolimus trough level monthly during dose titration (target 4–8 ng/mL), quarterly during maintenance — nephrotoxicity panel: creatinine, BUN, magnesium, uric acid, and eGFR trend; cyclosporine trough biweekly during induction (target 125–175 ng/mL), monthly maintenance; cyclophosphamide Ponticelli protocol — monthly CBC with differential (ANC nadir threshold <1,500/μL), monthly urinalysis for microscopic hematuria (hemorrhagic cystitis surveillance), cumulative dose tracking (lifetime cap 30 g); annual malignancy surveillance for secondary MN: age-appropriate CT chest/abdomen/pelvis, colonoscopy, PSA/mammography per USPSTF guidelines — 5–10% of MN is secondary to occult malignancy; annual thyroid function testing (T4/TSH) for thyroid-binding globulin losses in nephrotic syndrome; vaccination scheduling: pneumococcal PCV15/PPSV23, annual influenza, COVID-19 bivalent booster per ACIP immunosuppressed patient protocols; and annual patient-reported outcome measures (PROMIS fatigue, edema, quality-of-life).",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Initial Certification Audit & Patient Onboarding",
    description: "Audit CNN-NP and ANCC certification expiration dates and CE credit gaps. Complete diagnostic workup co-management: renal biopsy review (IgG4 subclass, PLA2R antigen staining), anti-PLA2R/THSD7A antibody orders, complement C3/C4, ANA, anti-dsDNA, hepatitis B/C serology, malignancy screen coordination. Establish baseline UPCR, 24-hour urine protein, eGFR, serum albumin, lipid panel. Document KDIGO 2021 risk stratification (low/moderate/high/very high) and initiate RAAS blockade. VTE risk scoring and anticoagulation initiation if albumin <2.5 g/dL. Schedule rituximab infusion and complete pre-infusion checklist (HBsAg, HBcAb, CBC, IgG panel).",
  },
  {
    month: "Month 3–4",
    title: "Post-Rituximab B-Cell Depletion & Response Check",
    description: "CD19+ B-cell count to confirm rituximab depletion (<5 cells/μL target). Anti-PLA2R antibody titer — document ≥50% reduction as early immunological response. Monthly UPCR trending and serum albumin. IgG immunoglobulin panel for hypogammaglobulinemia surveillance. Tacrolimus or cyclosporine trough adjustment if CNI-based therapy co-prescribed. INR monitoring if anticoagulated. ASN Kidney Week CE registration (December meeting) and NKF Spring Clinical Meeting CE planning. CNN-NP CE credit documentation: add glomerulonephritis and rituximab pharmacology CE to renewal tracker.",
  },
  {
    month: "Month 5–6",
    title: "6-Month Remission Assessment & Protocol Reassessment",
    description: "Comprehensive remission evaluation: 24-hour urine protein (complete remission <0.3 g/day, partial remission <3.5 g/day with ≥50% reduction), eGFR, serum albumin ≥3.5 g/dL. Anti-PLA2R titer — document immunological remission (≥75% reduction). CD19+ B-cell count for rituximab re-dosing decision. Modify therapy if insufficient response per KDIGO algorithm. CNI nephrotoxicity panel. Quarterly lipid panel and BP optimization. Document 6-month response milestone in nephrology registry. NKF Spring Clinical Meeting attendance CE submission. Review KDIGO 2021 MN guideline update CE allocation for CNN-NP renewal cycle.",
  },
  {
    month: "Month 7–8",
    title: "Sustained Remission Monitoring & Complication Management",
    description: "Monthly UPCR and serum albumin for proteinuria trajectory. Quarterly CBC, metabolic panel, lipid panel, and BP assessment. Tacrolimus or cyclosporine trough levels and nephrotoxicity panels. Thyroid function testing (T4/TSH) for ongoing nephrotic syndrome. VTE reassessment — anticoagulation continuation criteria review (albumin <2.5 g/dL and UPCR >8 g/g). Vitamin D 25-OH level, iron stores, and transferrin for nutritional deficiency management. Patient-reported edema and quality-of-life (PROMIS) scoring. Document diuretic response and dietary compliance. CNN-NP glomerular disease CE: complete NKF or NNCC online modules.",
  },
  {
    month: "Month 9–10",
    title: "Rituximab Re-dosing Evaluation & Annual Malignancy Screening",
    description: "CD19+ B-cell reconstitution check — re-dosing trigger if CD19 >10 cells/μL with rising anti-PLA2R titer. Schedule rituximab 1,000 mg re-dose per MENTOR trial protocol if criteria met. IgG level — initiate IVIG for IgG <400 mg/dL. Cyclophosphamide cumulative dose audit (lifetime cap 30 g). Annual malignancy surveillance coordination: CT chest/abdomen/pelvis, age-appropriate cancer screening for patients ≥60 years (colonoscopy, PSA, mammography). Pneumococcal PCV15 booster for immunosuppressed patients. Annual influenza and COVID-19 bivalent booster vaccination documentation. ANCC pharmacology CE completion for CNI and rituximab protocols.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review, Registry Submission & CE Completion",
    description: "Annual comprehensive assessment: 24-hour urine protein, eGFR (CKD-EPI 2021), serum albumin, anti-PLA2R/THSD7A titers, CBC, IgG panel, lipid panel, thyroid function, and cardiovascular risk review. KDIGO 2021 remission classification documentation (complete/partial/non-response at 12 months). Nephrology quality registry data submission. CNN-NP CE credit reconciliation — submit NNCC renewal application if biennial cycle closes. ANCC/AGACNP-BC CE submission and clinical hours documentation. ASN Kidney Week CE submission. Plan Year 2 surveillance: anti-PLA2R every 6 months, annual 24-hour urine, CD19 monitoring, and malignancy screening schedule.",
  },
]

const kpis = [
  {
    metric: "≥65%",
    target: "12-Month Partial or Complete Remission Rate",
    description: "MENTOR trial benchmark for rituximab-treated primary MN. NPs track monthly UPCR and 6-month/12-month 24-hour urine protein to document partial remission (UPCR <3.5 g/g, ≥50% reduction) and complete remission (<0.3 g/day).",
  },
  {
    metric: "100%",
    target: "Pre-Rituximab HBV Screening Compliance",
    description: "Every rituximab course requires HBsAg and HBcAb screening. Reactive results mandate entecavir prophylaxis before infusion. NPs own pre-infusion checklist completion and documentation in the EMR.",
  },
  {
    metric: "30 CE",
    target: "CNN-NP Biennial Nephrology CE Credits",
    description: "Nephrology Nursing Certification Commission requires 30 nephrology-specific CE credits per 2-year CNN-NP renewal cycle. Membranous nephropathy and glomerulonephritis CE must be tracked separately from general nursing CE.",
  },
  {
    metric: "≤5 cells/μL",
    target: "Post-Rituximab CD19+ B-Cell Depletion",
    description: "Target B-cell depletion confirms rituximab dosing adequacy. NPs document CD19+ counts at Month 3 and Month 6 and trigger re-dosing protocols when CD19 exceeds 10 cells/μL with concurrent anti-PLA2R titer rise.",
  },
  {
    metric: "<125/75",
    target: "BP Target (mmHg) for Active Proteinuria",
    description: "KDIGO 2021 mandates BP ≤125/75 mmHg for patients with UPCR >1 g/g. NPs document ACE inhibitor/ARB titration at every visit and track home BP log compliance for proteinuria-slowing benefit.",
  },
  {
    metric: "Annual",
    target: "Malignancy Surveillance for Secondary MN",
    description: "5–10% of membranous nephropathy is secondary to occult malignancy. NPs coordinate annual age-appropriate cancer screening for all patients ≥60 years — CT, colonoscopy, PSA, and mammography as indicated.",
  },
]

const testimonial = {
  quote: "As a nephrology NP managing a membranous nephropathy panel, I'm tracking CNN-NP CE credits, monthly UPCR and serum albumin, anti-PLA2R titers every 6 months, CD19 B-cell counts post-rituximab, quarterly CNI troughs, VTE anticoagulation INR monitoring, annual malignancy screening, and KDIGO remission classification — all for patients at different treatment stages. Momenties automated every single interval. My 12-month remission documentation is 100% complete and I haven't missed a certification deadline since.",
  name: "Dr. Michelle Tran",
  title: "Nephrology Nurse Practitioner, Glomerular Disease Center",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Membranous Nephropathy Nurse Practitioners · Momenties"
        title="Every Certification. Every PLA2R Titer. Every Rituximab Cycle."
        subtitle="Membranous nephropathy NPs co-manage one of nephrology's most monitoring-intensive glomerular diseases — CNN-NP and ANCC certification renewals, anti-PLA2R antibody surveillance, rituximab B-cell depletion protocols, monthly UPCR trending, CNI trough monitoring, VTE anticoagulation, malignancy screening, and KDIGO registry compliance. Momenties consolidates every deadline into one calendar so nothing slips between treatment cycles."
      />

      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)" }}>
            Built for the Full Membranous Nephropathy NP Practice
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {pillars.map((p) => (
              <div key={p.title} style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 28 }}>
                <p.icon size={28} color="#c5a35c" style={{ marginBottom: 16 }} />
                <h3 style={{ color: "#f0ece3", fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: 14, lineHeight: 1.6 }}>{p.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)" }}>
            12-Month Implementation Roadmap
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {timeline.map((t) => (
              <div key={t.month} style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: 24 }}>
                <span style={{ color: "#c5a35c", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>{t.month}</span>
                <h3 style={{ color: "#f0ece3", fontSize: 15, fontWeight: 600, margin: "8px 0 6px" }}>{t.title}</h3>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: 13, lineHeight: 1.6 }}>{t.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)" }}>
            Performance Benchmarks
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {kpis.map((k) => (
              <div key={k.target} style={{ background: "#131318", border: "1px solid rgba(197,163,92,0.2)", borderRadius: 12, padding: 24 }}>
                <div style={{ fontSize: 32, fontWeight: 700, color: "#c5a35c", marginBottom: 4 }}>{k.metric}</div>
                <div style={{ color: "#f0ece3", fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{k.target}</div>
                <div style={{ color: "rgba(240,236,227,0.65)", fontSize: 13, lineHeight: 1.5 }}>{k.description}</div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ maxWidth: 800, margin: "0 auto", padding: "80px 24px 0" }}>
          <blockquote style={{ background: "#131318", border: "1px solid rgba(197,163,92,0.25)", borderRadius: 16, padding: "40px 48px", textAlign: "center" }}>
            <p style={{ color: "#f0ece3", fontSize: 18, lineHeight: 1.7, fontStyle: "italic", marginBottom: 24 }}>"{testimonial.quote}"</p>
            <footer>
              <div style={{ color: "#c5a35c", fontWeight: 600, fontSize: 15 }}>{testimonial.name}</div>
              <div style={{ color: "rgba(240,236,227,0.5)", fontSize: 13, marginTop: 4 }}>{testimonial.title}</div>
            </footer>
          </blockquote>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}><CTA /></div>
    </main>
  )
}
