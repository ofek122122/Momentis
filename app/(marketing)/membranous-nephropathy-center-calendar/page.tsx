import type { Metadata } from "next"
import { Stethoscope, ClipboardList, BarChart3, Shield, Calendar, Database, Users2, FileText } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Membranous Nephropathy Center Scheduling & Compliance Calendar | Momenties",
  description: "Automate membranous nephropathy center scheduling: PLA2R antibody monitoring, rituximab infusion cycles, proteinuria remission tracking, KDIGO guideline compliance, and nephrology registry deadlines.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "PLA2R Antibody Monitoring & Remission Tracking",
    description: "Anti-phospholipase A2 receptor (PLA2R) antibody titer surveillance at baseline, Month 3, Month 6, and every 6 months thereafter — quantitative ELISA (anti-PLA2R IgG4) with target complete remission defined as proteinuria <0.3 g/day and partial remission <3.5 g/day with ≥50% reduction from baseline; THSD7A antibody testing at diagnosis for PLA2R-negative primary membranous nephropathy; annual anti-PLA2R titer trending to guide rituximab re-dosing decisions; urine protein-to-creatinine ratio (UPCR) monthly during active treatment and quarterly during surveillance; eGFR trending at every visit with CKD-EPI 2021 equation to monitor disease progression; and 24-hour urine protein collection at baseline, 6 months, 12 months, and annually to document sustained remission per KDIGO 2021 MN guidelines.",
  },
  {
    icon: ClipboardList,
    title: "Rituximab Induction & B-Cell Depletion Protocols",
    description: "Rituximab 1,000 mg IV × 2 doses 14 days apart (GEMRITUX/MENTOR protocol) or 375 mg/m² × 4 weekly doses for primary membranous nephropathy — pre-infusion checklist: CBC with differential, immunoglobulin panel (IgG, IgM, IgA), hepatitis B core antibody screening (HBcAb), and PML risk stratification; CD19+ B-cell count at Month 3 and Month 6 post-rituximab to confirm B-cell depletion (target <5 cells/μL); anti-PLA2R titer at Month 6 to assess immunological remission (≥75% reduction predicts clinical remission); re-dosing trigger: CD19 reconstitution >10 cells/μL or rising anti-PLA2R titer despite partial remission; quarterly IgG monitoring for rituximab-induced hypogammaglobulinemia (IgG <400 mg/dL threshold for IVIG replacement consideration); and annual REMS compliance documentation for biologic prescribing privileges.",
  },
  {
    icon: BarChart3,
    title: "Calcineurin Inhibitor & Alkylating Agent Protocol Compliance",
    description: "Tacrolimus (Protopic) extended-release 0.05–0.1 mg/kg/day targeting trough 4–8 ng/mL for PLA2R-negative or rituximab-refractory membranous nephropathy — monthly trough levels during dose titration, quarterly thereafter; cyclosporine 3.5 mg/kg/day with biweekly trough monitoring (target 125–175 ng/mL) during induction and monthly maintenance; quarterly creatinine, BUN, magnesium, and uric acid monitoring for CNI nephrotoxicity; cyclophosphamide-based Ponticelli regimen (alternating months of methylprednisolone 1 g IV × 3 days + prednisone and oral cyclophosphamide 2.5 mg/kg/day for 6 months) — monthly CBC with differential for myelosuppression (ANC nadir threshold <1,500/μL dose-hold), monthly urinalysis for hemorrhagic cystitis; quarterly LFTs for CNI hepatotoxicity; and annual renal biopsy consideration for disease progression or treatment failure at 12–18 months.",
  },
  {
    icon: Shield,
    title: "Nephrotic Syndrome Complications & Supportive Care Calendar",
    description: "VTE prophylaxis protocol compliance for nephrotic syndrome (albumin <2.5 g/dL + UPCR >8 g/g): anticoagulation decision scoring (TOC score), enoxaparin or warfarin INR monitoring (target 2–3) with monthly PT/INR; quarterly lipid panel with LDL-C target <70 mg/dL for cardiovascular risk reduction in persistent nephrotic syndrome; monthly BP monitoring with target <125/75 mmHg per KDIGO — ACE inhibitor/ARB dose titration; dietary sodium restriction compliance (<2 g/day) and furosemide diuretic response tracking; quarterly serum albumin, total protein, transferrin, and vitamin D 25-OH levels for nutritional deficiency surveillance; annual thyroid function testing (hypothyroidism from thyroid-binding globulin urinary loss); pneumococcal, influenza, and COVID-19 vaccination scheduling per immunosuppression protocols; and quarterly patient-reported edema and quality-of-life scoring.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnosis, Baseline Studies & Treatment Initiation",
    description: "Complete diagnostic workup: renal biopsy with IgG4 subclass staining, anti-PLA2R and anti-THSD7A antibody titers, complement C3/C4, ANA, anti-dsDNA, hepatitis B/C and HIV serology, malignancy screen (CT chest/abdomen/pelvis for secondary MN), PLA2R antigen staining on biopsy. Baseline 24-hour urine protein, eGFR, serum albumin, lipid panel, CBC, and metabolic panel. Initiate RAAS blockade and supportive care. Risk-stratify per KDIGO 2021 (low/moderate/high/very high risk based on proteinuria trajectory and eGFR). Document immunosuppression candidacy and begin rituximab scheduling or Ponticelli protocol planning.",
  },
  {
    month: "Month 3–4",
    title: "Rituximab Response Assessment & B-Cell Monitoring",
    description: "Post-rituximab CD19+ B-cell count to confirm depletion (<5 cells/μL target). Anti-PLA2R antibody titer reassessment — document immunological remission trajectory (≥50% reduction by Month 3 predicts clinical remission). Monthly UPCR trending. Repeat serum albumin, CBC, and IgG immunoglobulin panel for rituximab-induced hypogammaglobulinemia surveillance. Tacrolimus or cyclosporine trough adjustment if CNI-based therapy initiated. Evaluate for VTE risk (serum albumin <2.5 g/dL triggers anticoagulation reassessment). Document ANC nadir if Ponticelli cyclophosphamide arm initiated. Schedule Month 6 comprehensive response evaluation.",
  },
  {
    month: "Month 5–6",
    title: "6-Month Remission Assessment & Protocol Reassessment",
    description: "Comprehensive 6-month response evaluation: 24-hour urine protein (complete remission <0.3 g/day, partial remission <3.5 g/day with ≥50% reduction), eGFR stability, anti-PLA2R titer (immunological remission ≥75% reduction), and serum albumin normalization (target ≥3.5 g/dL). CD19+ B-cell count for rituximab re-dosing decision. Modify therapy if insufficient response: transition to alternative immunosuppressive regimen or add second agent per KDIGO algorithm. CNI trough adjustment and nephrotoxicity panel (creatinine, magnesium, uric acid). INR if anticoagulated. Lipid panel reassessment. Document treatment response milestone in nephrology registry.",
  },
  {
    month: "Month 7–8",
    title: "Sustained Remission Monitoring & Complication Surveillance",
    description: "Monthly UPCR trending for proteinuria trajectory. Quarterly serum albumin, CBC, metabolic panel, and lipid panel. BP target assessment (≤125/75 mmHg) and ACE inhibitor/ARB dose optimization. Cyclosporine or tacrolimus trough levels with CNI nephrotoxicity panel. Quarterly thyroid function testing for ongoing nephrotic syndrome patients. VTE reassessment — anticoagulation continuation criteria (albumin <2.5 g/dL and UPCR >8 g/g). Nutritional supplementation review: vitamin D 25-OH level, iron stores, transferrin. Document edema response to diuretic therapy. Anti-PLA2R titer surveillance for partial responders.",
  },
  {
    month: "Month 9–10",
    title: "Rituximab Re-dosing Evaluation & B-Cell Reconstitution",
    description: "CD19+ B-cell reconstitution assessment — re-dosing trigger if CD19 >10 cells/μL or anti-PLA2R titer rises without clinical remission. Schedule rituximab 1,000 mg single re-dose if protocol criteria met (MENTOR trial re-dosing algorithm). IgG immunoglobulin panel — initiate IVIG if IgG <400 mg/dL for hypogammaglobulinemia management. Cyclophosphamide cumulative dose audit (lifetime cap 30 g to minimize bladder cancer and gonadal toxicity risk). Quarterly CBC and metabolic panel. Pneumococcal booster vaccination scheduling for patients on sustained immunosuppression. Annual malignancy surveillance planning (occult malignancy causes 5–10% of MN cases — annual CT screening for high-risk patients).",
  },
  {
    month: "Month 11–12",
    title: "Annual Comprehensive Review & Registry Reporting",
    description: "Complete annual assessment: 24-hour urine protein, eGFR by CKD-EPI 2021, serum albumin, anti-PLA2R and anti-THSD7A antibody titers, CBC, immunoglobulin panel, lipid panel, thyroid function, and renal biopsy consideration for non-responders. Document sustained remission status (complete vs. partial vs. non-response at 12 months per KDIGO 2021 criteria). Nephrology quality registry data submission. KDOQI/KDIGO guideline adherence audit. Annual cardiovascular risk factor review (BP, LDL-C, glucose). Cyclophosphamide cumulative dose and gonadal toxicity counseling documentation. Plan Year 2 monitoring schedule: anti-PLA2R every 6 months, annual 24-hour urine, and CD19 surveillance.",
  },
]

const kpis = [
  {
    metric: "≥65%",
    target: "Partial or Complete Remission at 12 Months",
    description: "Rituximab-treated primary MN achieves ≥65% partial or complete remission at 12 months per MENTOR trial. Complete remission (<0.3 g/day proteinuria) is the gold-standard outcome target.",
  },
  {
    metric: "≥75%",
    target: "Anti-PLA2R Titer Reduction at Month 6",
    description: "Immunological remission (≥75% anti-PLA2R reduction by Month 6) predicts clinical remission with 85% specificity and guides rituximab re-dosing decisions.",
  },
  {
    metric: "100%",
    target: "HBV Screening Before Rituximab",
    description: "Hepatitis B surface antigen and core antibody screening before every rituximab course — HBsAg+ or HBcAb+ patients require antiviral prophylaxis (entecavir) to prevent reactivation.",
  },
  {
    metric: "<125/75",
    target: "BP Target (mmHg) in Active Nephrotic Syndrome",
    description: "KDIGO 2021 mandates BP ≤125/75 mmHg for all membranous nephropathy patients with proteinuria >1 g/day to slow CKD progression and reduce cardiovascular risk.",
  },
  {
    metric: "≤5 cells/μL",
    target: "CD19+ B-Cell Depletion Post-Rituximab",
    description: "Target complete B-cell depletion (CD19+ ≤5 cells/μL) confirms adequate rituximab dosing. Incomplete depletion correlates with treatment failure and guides re-dosing intervals.",
  },
  {
    metric: "Annual",
    target: "Malignancy Surveillance Compliance",
    description: "5–10% of membranous nephropathy is secondary to occult malignancy. Annual age-appropriate cancer screening (CT, colonoscopy, PSA/mammography) is mandatory for all newly diagnosed patients ≥60 years.",
  },
]

const testimonial = {
  quote: "Managing a membranous nephropathy center means tracking rituximab B-cell depletion at Month 3 and Month 6, anti-PLA2R titers every 6 months, monthly UPCR trending, quarterly CNI trough levels, VTE anticoagulation INR monitoring, annual malignancy surveillance, and KDIGO remission classification — all across a panel of patients at different treatment stages. Momenties built us a single calendar that automated every interval. Our 12-month partial remission rate climbed to 68% and our registry submissions are always on time.",
  name: "Dr. Sarah Okonkwo",
  title: "Nephrology Program Director, Academic Membranous Nephropathy Center",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Membranous Nephropathy · Momenties"
        title="Every PLA2R Titer. Every Rituximab Cycle. One Calendar."
        subtitle="Membranous nephropathy centers manage one of nephrology's most protocol-intensive disease cohorts — anti-PLA2R antibody surveillance, rituximab B-cell depletion monitoring, proteinuria remission tracking, CNI trough levels, VTE anticoagulation, malignancy screening, and KDIGO registry compliance. Momenties automates every deadline so your center achieves top-tier remission rates and zero missed surveillance intervals."
      />

      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)" }}>
            Built for the Full Membranous Nephropathy Center Compliance Lifecycle
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
