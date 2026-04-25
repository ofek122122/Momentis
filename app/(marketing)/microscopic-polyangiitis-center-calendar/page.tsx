import type { Metadata } from "next"
import {
  Stethoscope,
  Shield,
  Search,
  Heart,
  Calendar,
  ClipboardList,
  Target,
  Bell,
  CheckCircle,
  TrendingUp,
} from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title:
    "Microscopic Polyangiitis Center — Remission, Maintenance & Renal Surveillance Calendar | Momenties",
  description:
    "Systematic scheduling for MPA centers — rituximab and cyclophosphamide induction, maintenance immunosuppression, MPO-ANCA trending, renal function surveillance, pulmonary hemorrhage management, and cardiovascular risk monitoring.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Remission Induction Scheduling",
    description:
      "Coordinate rituximab 375 mg/m² IV weekly × 4 (RAVE/RITUXVAS) or 1 g IV × 2 doses 14 days apart as first-line induction for MPO-ANCA-associated MPA, with cyclophosphamide IV pulse 15 mg/kg every 2–3 weeks (CYCLOPS) reserved for severe organ-threatening disease, alveolar hemorrhage, or rituximab contraindication; concurrent prednisone 1 mg/kg/day with PEXIVAS-aligned reduced-dose taper, methylprednisolone 500–1000 mg IV pulses × 3 for rapidly progressive glomerulonephritis or diffuse alveolar hemorrhage; plasma exchange (TPE) 7 sessions over 14 days for pulmonary-renal syndrome with severe hypoxemia or creatinine ≥5.7 mg/dL per MEPEX/PEXIVAS subgroup signal; pre-induction hepatitis B/C, HIV, TB IGRA, JC virus, and immunoglobulin testing; vaccinate (PCV20 or PCV15→PPSV23, influenza, recombinant zoster) ≥2 weeks before rituximab; avacopan 30 mg PO BID per ADVOCATE for steroid-sparing induction.",
  },
  {
    icon: Search,
    title: "MPO-ANCA & Renal Surveillance",
    description:
      "Schedule MPO-ANCA titer trending every 3–6 months with rising-titer escalation pathways (MPO-ANCA rise less specific for relapse than PR3 in GPA but still informs vigilance); creatinine, eGFR, urine protein/creatinine ratio, urinalysis with microscopy for dysmorphic RBCs and red-cell casts every 1–3 months in active disease and every 3 months in stable maintenance; renal biopsy at diagnosis for pauci-immune necrotizing crescentic glomerulonephritis classification (Berden focal/crescentic/mixed/sclerotic categories) and on clinical change; nephrology co-management with CKD staging, anemia of CKD, secondary hyperparathyroidism, and dialysis or transplant pathways for ESRD; CD19/CD20 B-cell quantification before each rituximab maintenance dose to confirm continued depletion and time redosing.",
  },
  {
    icon: Heart,
    title: "Pulmonary & Cardiovascular Monitoring",
    description:
      "Annual chest CT to detect pulmonary fibrosis (a defining late complication of MPA, particularly in MPO-ANCA-positive disease), ground-glass alveolar hemorrhage, capillaritis, and bronchiectasis; PFTs with DLCO at baseline and annually with 6-minute walk test in fibrotic disease; same-week evaluation pathway for hemoptysis, dropping hemoglobin, dyspnea, or hypoxemia with bronchoscopy and BAL for suspected DAH; cardiovascular risk surveillance with quarterly blood pressure, annual lipid panel, HbA1c, and ASCVD risk reassessment given the elevated cardiovascular mortality in ANCA-associated vasculitis; venous thromboembolism awareness during active disease; statin and antiplatelet decision-making coordinated with primary care.",
  },
  {
    icon: Shield,
    title: "Maintenance Therapy Management",
    description:
      "Sequence rituximab maintenance 500 mg IV every 6 months × 4–5 years per MAINRITSAN-1/2/3, or azathioprine 2 mg/kg/day with TPMT testing, mycophenolate mofetil 2 g/day, or methotrexate 20–25 mg weekly with folate; bone protection with bisphosphonate plus calcium 1200 mg/day and vitamin D 800–2000 IU/day, baseline DEXA and reassessment every 1–2 years on chronic steroids; TMP-SMX Pneumocystis jirovecii prophylaxis daily or 3×/week throughout induction and maintenance; serum immunoglobulin (IgG, IgA, IgM) every 6 months for hypogammaglobulinemia surveillance with IVIG replacement thresholds; BVAS (Birmingham Vasculitis Activity Score) at every visit and VDIPLUS damage index annually to distinguish active disease from accrued damage; structured 24-hour relapse hotline.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnosis Confirmation & Pre-Induction Workup",
    description:
      "Confirm MPA with MPO-ANCA (or PR3-ANCA) by ELISA, renal biopsy for pauci-immune necrotizing crescentic glomerulonephritis with Berden classification, baseline BVAS and VDIPLUS scoring, complete CBC, comprehensive metabolic panel, ESR/CRP, urinalysis with microscopy, urine protein/creatinine ratio, chest CT, and PFTs with DLCO. Pre-induction screening — hepatitis B/C, HIV, TB IGRA, JC virus, immunoglobulin levels, TPMT for azathioprine candidates, and pregnancy testing. Administer pre-induction vaccinations (PCV20 or PCV15→PPSV23, influenza, recombinant zoster) ≥2 weeks before rituximab. Initiate TMP-SMX PCP prophylaxis. Establish nephrology and pulmonology co-management.",
  },
  {
    month: "Month 3–4",
    title: "Remission Induction & Steroid Taper",
    description:
      "Initiate rituximab 375 mg/m² IV weekly × 4 or 1 g IV × 2 doses 14 days apart as preferred first-line; for severe disease consider cyclophosphamide IV pulse 15 mg/kg every 2–3 weeks (CYCLOPS) with mesna and bladder protection. Concurrent prednisone 1 mg/kg/day with PEXIVAS reduced-dose taper, methylprednisolone 500–1000 mg IV × 3 for RPGN or DAH, and plasma exchange (TPE) 7 sessions over 14 days for pulmonary-renal syndrome with severe hypoxemia or creatinine ≥5.7 mg/dL. Add avacopan 30 mg PO BID per ADVOCATE for steroid-sparing induction. Weekly CBC, CMP, urinalysis during induction with infusion-day reaction monitoring.",
  },
  {
    month: "Month 5–6",
    title: "Remission Assessment & Maintenance Initiation",
    description:
      "Reassess BVAS, MPO-ANCA, ESR/CRP, urinalysis, creatinine, eGFR, and chest CT at month 6 to confirm complete remission (BVAS = 0) versus partial response. Transition to maintenance — rituximab 500 mg IV (MAINRITSAN schedule: months 0, 6, 12, 18 from induction completion), azathioprine 2 mg/kg/day, MMF 2 g/day, or methotrexate 20–25 mg weekly with folate. Continue prednisone taper toward ≤7.5 mg/day by month 6 and ≤5 mg/day by month 12. Initiate or continue bone protection — bisphosphonate, calcium 1200 mg/day, vitamin D 800–2000 IU/day, baseline DEXA. Reaffirm TMP-SMX PCP prophylaxis.",
  },
  {
    month: "Month 7–8",
    title: "Damage Reassessment & Pulmonary Surveillance",
    description:
      "Update VDIPLUS to capture accrued damage — CKD stage progression, pulmonary fibrosis (a hallmark MPA complication particularly in MPO-ANCA disease), peripheral neuropathy, cutaneous vasculitis sequelae, hearing loss, and cardiovascular events. Repeat chest CT and PFTs with DLCO if symptomatic; coordinate pulmonology referral for fibrotic ILD with antifibrotic consideration in select cases. Reassess immunoglobulin levels and consider IVIG replacement (IgG <400 mg/dL with recurrent infection). Audit vaccination currency — annual influenza, COVID-19 boosters, RSV where indicated. Refer to physical therapy for deconditioning and cardiac rehab if applicable.",
  },
  {
    month: "Month 9–10",
    title: "ANCA Surveillance & Relapse Pathway Activation",
    description:
      "Quarterly to semiannual MPO-ANCA and CD19 B-cell counts to guide rituximab redosing and tighten clinical surveillance on rising titers. Same-week evaluation pathway for new hemoptysis, dyspnea, dropping hemoglobin, rising creatinine, fresh urinary sediment with red-cell casts, peripheral neuropathy, or cutaneous purpura. Activate rescue protocol — rituximab re-induction (375 mg/m² × 4 or 1 g × 2), methylprednisolone pulses, avacopan add-on, plasma exchange where appropriate, bronchoscopy with BAL, and repeat renal biopsy when indicated. Reinforce 24-hour patient hotline and ED handoff documentation.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review, Registry & Cardiovascular Risk Reset",
    description:
      "Complete annual review — BVAS, VDIPLUS, MPO-ANCA trajectory, CKD stage, pulmonary fibrosis assessment, vaccination currency, fertility and reproductive counseling for cyclophosphamide-exposed patients, malignancy screening (skin, bladder for prior cyclophosphamide, age-appropriate cancer screens), DEXA every 1–2 years on chronic steroids, and cardiovascular risk reassessment (lipids, blood pressure, HbA1c, ASCVD score) given elevated cardiovascular mortality in AAV. Submit data to vasculitis registries (VCRC, DCVAS). Plan year-2 maintenance schedule, define rituximab redosing cadence (every 4–6 months × 4–5 years per MAINRITSAN-3), and reaffirm patient education on relapse symptoms.",
  },
]

const kpis = [
  {
    metric: "BVAS = 0",
    target: "Complete Remission at Month 6",
    description:
      "Birmingham Vasculitis Activity Score of zero with prednisone ≤7.5 mg/day at 6 months, confirming durable induction response per RAVE/RITUXVAS benchmarks.",
  },
  {
    metric: "Q3 Months",
    target: "BVAS Scoring & MPO-ANCA Trend",
    description:
      "Quarterly BVAS documentation with MPO-ANCA titer trending and CD19 B-cell quantification before each rituximab maintenance dose.",
  },
  {
    metric: "100%",
    target: "TMP-SMX PCP Prophylaxis Coverage",
    description:
      "Pneumocystis jirovecii prophylaxis maintained throughout induction and the entire maintenance period on rituximab, cyclophosphamide, or steroid-equivalent immunosuppression.",
  },
  {
    metric: "100%",
    target: "Bone Protection Bundle",
    description:
      "Bisphosphonate plus calcium 1200 mg/day and vitamin D 800–2000 IU/day for every patient on chronic steroids, with DEXA at baseline and every 1–2 years.",
  },
  {
    metric: "Annual",
    target: "VDIPLUS Damage Index Documentation",
    description:
      "Annual VDIPLUS scoring across renal, pulmonary, neurologic, cutaneous, and cardiovascular domains with subspecialty coordination for accrued damage.",
  },
  {
    metric: "<24 Hours",
    target: "Relapse Triage Response Time",
    description:
      "Same-week clinical evaluation and same-day hotline triage for new pulmonary, renal, neurologic, or cutaneous symptoms suggesting MPA relapse.",
  },
]

const testimonial = {
  quote:
    "Microscopic polyangiitis is a multi-organ disease that demands rituximab on a strict 6-month maintenance window, MPO-ANCA and B-cell monitoring, urinalysis and creatinine surveillance every 1–3 months, annual chest CT for pulmonary fibrosis, TMP-SMX prophylaxis, and a steroid taper that follows PEXIVAS to the day. Our patients also live with elevated cardiovascular risk and chronic kidney disease that need their own surveillance cadence. Momenties consolidated every infusion, lab interval, vaccination booster, DEXA, and damage-index review into a single coordinated calendar. We moved from reactive flare management to a structured year-round vasculitis program with measurable BVAS-zero remission rates and lower cumulative steroid exposure.",
  name: "Dr. D. Jayne",
  title: "MPA Program Director, European Vasculitis Society",
}

export default function MicroscopicPolyangiitisCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Microscopic Polyangiitis Center Calendar"
        title="Microscopic Polyangiitis Center — Remission, Maintenance & Renal Surveillance Calendar"
        subtitle="Systematic scheduling for MPA centers — rituximab and cyclophosphamide induction, maintenance immunosuppression, MPO-ANCA trending, renal function surveillance, pulmonary hemorrhage management, and cardiovascular risk monitoring."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem,3vw,2.2rem)",
              fontFamily: "Playfair Display, serif",
              marginBottom: 16,
              color: "#f0ece3",
            }}
          >
            Built for the Full Microscopic Polyangiitis Care Pathway
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "rgba(240,236,227,0.65)",
              maxWidth: 760,
              margin: "0 auto 48px",
              fontSize: "0.97rem",
              lineHeight: 1.65,
            }}
          >
            Four operational pillars — induction logistics, MPO-ANCA and renal surveillance, pulmonary and cardiovascular monitoring, and maintenance immunosuppression — sequenced into one program calendar.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 28,
            }}
          >
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <Icon size={28} color="#c5a35c" style={{ marginBottom: 14 }} />
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    marginBottom: 10,
                    color: "#f0ece3",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "rgba(240,236,227,0.65)",
                    lineHeight: 1.65,
                  }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* 12-Month Timeline */}
      <Reveal>
        <section style={{ background: "#0a0a0d", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(1.6rem,3vw,2.2rem)",
                fontFamily: "Playfair Display, serif",
                marginBottom: 16,
                color: "#f0ece3",
              }}
            >
              The Year-One MPA Program — Sequenced Across 12 Months
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
                maxWidth: 760,
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 1.65,
              }}
            >
              Diagnostic workup, induction therapy, remission assessment, damage reassessment, ANCA-guided surveillance, and annual cardiovascular review — every milestone with a defined window.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((item) => {
                const phaseIcons = [Calendar, TrendingUp, Target, ClipboardList, Bell, CheckCircle]
                const PhaseIcon = phaseIcons[timeline.indexOf(item)] ?? Calendar
                return (
                  <div
                    key={item.month}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "140px 1fr",
                      gap: 24,
                      background: "#131318",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: 12,
                      padding: "20px 24px",
                      alignItems: "start",
                    }}
                  >
                    <div>
                      <PhaseIcon size={20} color="#c5a35c" style={{ marginBottom: 8 }} />
                      <div
                        style={{
                          color: "#c5a35c",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.06em",
                          marginBottom: 4,
                        }}
                      >
                        {item.month}
                      </div>
                      <div
                        style={{
                          color: "#f0ece3",
                          fontWeight: 600,
                          fontSize: "0.97rem",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.title}
                      </div>
                    </div>
                    <p
                      style={{
                        color: "rgba(240,236,227,0.65)",
                        fontSize: "0.92rem",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(1.6rem,3vw,2.2rem)",
                fontFamily: "Playfair Display, serif",
                marginBottom: 16,
                color: "#f0ece3",
              }}
            >
              The 6 KPIs That Define an MPA Program
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 48,
                fontSize: "0.97rem",
                maxWidth: 760,
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 1.65,
              }}
            >
              Outcome targets that translate vasculitis remission science into measurable, auditable program performance.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
                gap: 20,
              }}
            >
              {kpis.map((kpi) => (
                <div
                  key={kpi.target}
                  style={{
                    background: "#0a0a0d",
                    border: "1px solid rgba(197,163,92,0.2)",
                    borderRadius: 12,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(1.4rem,2.5vw,1.9rem)",
                      fontWeight: 700,
                      color: "#c5a35c",
                      fontFamily: "Playfair Display, serif",
                      marginBottom: 6,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "#f0ece3",
                      fontWeight: 600,
                      marginBottom: 8,
                    }}
                  >
                    {kpi.target}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(240,236,227,0.65)",
                      lineHeight: 1.55,
                    }}
                  >
                    {kpi.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ background: "#0e0e12", padding: "72px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div
              style={{
                background: "#131318",
                border: "1px solid rgba(197,163,92,0.25)",
                borderRadius: 16,
                padding: "36px 40px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  color: "#c5a35c",
                  marginBottom: 16,
                  lineHeight: 1,
                }}
              >
                &ldquo;
              </div>
              <p
                style={{
                  fontSize: "clamp(1rem,2vw,1.15rem)",
                  color: "#f0ece3",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: 28,
                }}
              >
                {testimonial.quote}
              </p>
              <div style={{ fontWeight: 700, color: "#c5a35c", fontSize: "0.95rem" }}>
                {testimonial.name}
              </div>
              <div
                style={{
                  color: "rgba(240,236,227,0.65)",
                  fontSize: "0.88rem",
                  marginTop: 4,
                }}
              >
                {testimonial.title}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
