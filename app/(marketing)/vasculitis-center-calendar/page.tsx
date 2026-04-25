import type { Metadata } from "next"
import {
  Stethoscope,
  Shield,
  Search,
  Bell,
  Calendar,
  ClipboardList,
  Target,
  CheckCircle,
  TrendingUp,
  Heart,
} from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Vasculitis Center Calendar Management — ANCA, Rituximab & BVAS Surveillance | Momenties",
  description:
    "AI-powered scheduling for vasculitis centers coordinating ANCA serology (PR3/MPO), rituximab induction and MAINRITSAN maintenance cycles, cyclophosphamide pulse scheduling with MESNA prophylaxis, BVAS disease activity scoring, and organ-damage surveillance for GPA, MPA, and EGPA.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "ANCA Serology (PR3/MPO) & BVAS Disease Activity Scoring",
    description:
      "Quarterly PR3-ANCA and MPO-ANCA ELISA surveillance with rising-titer escalation pathways — PR3-ANCA elevation in GPA and MPO-ANCA in MPA/EGPA drive early intervention decisions; BVAS (Birmingham Vasculitis Activity Score) and BVAS/WG documentation at every clinical encounter to distinguish active vasculitis from steroid side effects or infection; CD19/CD20 B-cell quantification before each rituximab maintenance dose to confirm ongoing depletion; serum immunoglobulin (IgG, IgA, IgM) monitoring every 6 months for rituximab-related hypogammaglobulinemia with IVIG replacement for IgG <400 mg/dL plus recurrent infection; annual VDI (Vasculitis Damage Index) scoring across renal, ENT, pulmonary, cardiac, and neurologic domains to distinguish accrued irreversible damage from active disease flare.",
  },
  {
    icon: Search,
    title: "Rituximab 375 mg/m² Induction ×4 + MAINRITSAN Q6m Maintenance",
    description:
      "Rituximab 375 mg/m² IV weekly × 4 doses (RAVE/RITUXVAS protocol) or 1 g IV × 2 doses 14 days apart for new-onset and relapsing ANCA-associated vasculitis (GPA, MPA); MAINRITSAN-1/2/3 maintenance schedule — rituximab 500 mg IV at months 0 and 6 post-induction, then every 6 months × 4–5 years for sustained remission; pre-infusion hepatitis B surface antigen, anti-HBc, and HIV screening; pneumococcal (PCV20 or PCV15→PPSV23), meningococcal, influenza, and recombinant zoster vaccination calendars ≥2 weeks before induction; reaction monitoring with pre-medication protocols, infusion-rate titration, and 2-hour post-infusion observation; TMP-SMX Pneumocystis jirovecii prophylaxis daily or 3×/week throughout induction and all maintenance cycles.",
  },
  {
    icon: Shield,
    title: "Cyclophosphamide IV Pulse or Oral Dosing with MESNA Prophylaxis",
    description:
      "Cyclophosphamide IV pulse 15 mg/kg every 2–3 weeks (CYCLOPS protocol) with MESNA 20% IV at 0 h, 4 h, and 8 h post-infusion for urothelial protection; oral cyclophosphamide 2 mg/kg/day for severe organ-threatening disease with monthly CBC and urinalysis for hemorrhagic cystitis surveillance; cumulative cyclophosphamide dose tracking (12–18 g lifetime cap) with transition to azathioprine, methotrexate, or rituximab maintenance at remission; hydration protocol (≥2 L/day oral fluid or IV pre-hydration) and morning-void scheduling for oral cyclophosphamide; high-dose corticosteroid co-induction — prednisolone 1 mg/kg/day with PEXIVAS-aligned rapid taper, methylprednisolone 500–1000 mg IV pulses for RPGN or alveolar hemorrhage; avacopan 30 mg PO BID (ADVOCATE) for accelerated steroid withdrawal in severe relapse.",
  },
  {
    icon: Bell,
    title: "Organ Surveillance — Renal/Pulmonary/ENT/Cardiac per VDIPLUS",
    description:
      "Renal surveillance: creatinine, eGFR, urinalysis with microscopy for dysmorphic RBCs and red-cell casts every 1–3 months in active disease and every 3 months in stable maintenance; urine protein/creatinine ratio quarterly; nephrology coordination for RPGN and renal biopsy scheduling; pulmonary surveillance: chest CT annually or with new symptoms for cavitating nodules, ground-glass opacities (alveolar hemorrhage), and pulmonary infiltrates; PFTs with DLCO biannually; bronchoscopy with BAL for hemoptysis workup; ENT: quarterly nasal examination, laryngoscopy for subglottic stenosis grading (EGPA/GPA), Lund-Mackay sinus scoring, audiology; cardiac: echocardiography and ECG for EGPA eosinophilic myocarditis, pericarditis, and coronary arteritis; VDIPLUS-aligned damage accrual documentation at each annual review across 11 organ domains.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnosis Confirmation & Pre-Induction Workup",
    description:
      "Confirm AAV diagnosis with PR3-ANCA or MPO-ANCA ELISA and tissue biopsy where feasible (renal, ENT, lung) for pauci-immune necrotizing glomerulonephritis or necrotizing granulomatous vasculitis. Baseline BVAS/WG and VDI scoring, complete CBC, CMP, ESR/CRP, urinalysis with microscopy, urine protein/creatinine ratio, chest CT, sinus CT (GPA/EGPA), and PFTs with DLCO. Classify disease subtype — GPA (PR3-ANCA + granulomatous), MPA (MPO-ANCA + non-granulomatous), EGPA (eosinophilic asthma + MPO-ANCA ± ANCA-negative). Pre-induction screening: hepatitis B/C, HIV, TB (IGRA), JC virus, immunoglobulins. Administer pre-induction vaccinations ≥2 weeks before rituximab. Initiate TMP-SMX PCP prophylaxis. Document baseline ENT laryngoscopy, ophthalmology, audiology, and cardiac echo for EGPA.",
  },
  {
    month: "Month 3–4",
    title: "Remission Induction & High-Dose Steroid Taper",
    description:
      "Initiate rituximab 375 mg/m² IV weekly × 4 (or 1 g IV × 2 doses 14 days apart) for GPA/MPA; alternative cyclophosphamide IV pulse 15 mg/kg (CYCLOPS) with MESNA for severe organ-threatening disease, DAH, or RPGN. Concurrent prednisolone 1 mg/kg/day with PEXIVAS-aligned rapid taper; methylprednisolone 500–1,000 mg IV × 3 days for RPGN or alveolar hemorrhage; avacopan 30 mg BID as steroid-sparing add-on per ADVOCATE. EGPA-specific: cyclophosphamide IV or oral for cardiac, CNS, or GI-threatening disease alongside high-dose corticosteroids. Weekly CBC and CMP during induction; infusion-reaction monitoring with pre-medication and 2-hour observation. Plasma exchange consideration for advanced renal failure (creatinine >5.7 mg/dL) or severe DAH.",
  },
  {
    month: "Month 5–6",
    title: "Remission Assessment & Maintenance Initiation",
    description:
      "Reassess BVAS/WG, ANCA titers, ESR/CRP, urinalysis, creatinine, and chest/sinus CT at 6 months to confirm complete remission (BVAS = 0) vs. partial response. Transition to MAINRITSAN maintenance — rituximab 500 mg IV at months 0 and 6 from induction completion, then Q6m × 4–5 years; alternative azathioprine 2 mg/kg/day with TPMT testing, methotrexate 20–25 mg weekly, or MMF 2 g/day. Prednisone taper toward ≤7.5 mg/day by month 6 and ≤5 mg/day by month 12. EGPA: mepolizumab 300 mg SC Q4wk as corticosteroid-sparing maintenance for eosinophilic manifestations (MIRRA trial) — monthly eosinophil count tracking. Re-baseline renal, ENT, pulmonary, and cardiac evaluations. Reaffirm PCP prophylaxis and bone-protection (calcium, vitamin D, bisphosphonate per FRAX).",
  },
  {
    month: "Month 7–8",
    title: "Damage Accrual Assessment & Subspecialty Coordination",
    description:
      "Update VDI to capture accrued damage — CKD stage, subglottic stenosis grade, saddle-nose deformity, hearing loss, pulmonary fibrosis, EGPA cardiomyopathy, peripheral neuropathy, or mononeuritis multiplex. Coordinate nephrology for CKD trajectory and dialysis/transplant planning, ENT laryngology for tracheal dilation or stenting in subglottic stenosis, pulmonology for fibrotic pulmonary disease and 6-minute walk testing, cardiology for EGPA myocarditis and valvular disease, and neurology for peripheral neuropathy management. Immunoglobulin reassessment — IVIG replacement threshold: IgG <400 mg/dL with recurrent infection. Annual cardiovascular risk assessment (lipids, blood pressure, HbA1c) — rituximab and cyclophosphamide independently elevate cardiovascular risk. Audit vaccination currency: annual influenza, COVID-19 boosters.",
  },
  {
    month: "Month 9–10",
    title: "ANCA Surveillance & Relapse Pathway Activation",
    description:
      "Quarterly PR3-ANCA (GPA) or MPO-ANCA (MPA/EGPA) with CD19 B-cell quantification driving rituximab redosing decisions — rising PR3-ANCA with clinical symptoms triggers rescue induction (rituximab 375 mg/m² × 4 or 1 g × 2); isolated ANCA rise without symptoms intensifies clinical surveillance interval to monthly. Same-week evaluation protocol for: new hemoptysis, hearing change, ENT symptoms, hematuria, rising creatinine, fresh urinary sediment, worsening dyspnea, eosinophilia (EGPA), or new peripheral neuropathy. Activate rescue pathway: methylprednisolone IV pulses, rituximab re-induction, avacopan add-on, bronchoscopy with BAL, and renal biopsy where indicated. 24-hour patient hotline and ED-handoff documentation for AAV flare triage.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review, Registry Submission & Year-2 Planning",
    description:
      "Complete annual review: BVAS/WG and VDI across all organ domains, ANCA titer trajectory, cumulative cyclophosphamide dose and lifetime exposure calculation, immunoglobulin levels, vaccination currency, fertility and reproductive counseling for cyclophosphamide-exposed patients, malignancy surveillance (bladder cancer risk with cumulative cyclophosphamide >12–18 g — annual urine cytology; skin cancer screening), bone density DEXA, and cardiovascular risk reassessment. Submit data to vasculitis registries (VCRC, DCVAS, BVAS-WG national audit). Define year-2 maintenance schedule: rituximab Q6m continuation per MAINRITSAN-3, ANCA-guided redosing windows, and prednisone-free target documentation. Reaffirm patient education on relapse recognition, hotline access, and steroid action plan.",
  },
]

const kpis = [
  {
    metric: "BVAS = 0",
    target: "Complete Remission at Month 6",
    description:
      "Birmingham Vasculitis Activity Score of zero with prednisone ≤7.5 mg/day at 6 months, confirming durable ANCA-AAV induction response per RAVE and RITUXVAS benchmarks.",
  },
  {
    metric: "Q3 Months",
    target: "ANCA (PR3/MPO) & B-Cell Surveillance",
    description:
      "Quarterly PR3-ANCA and MPO-ANCA titers with rising-titer escalation pathways, paired with CD19 B-cell quantification before each rituximab maintenance dose.",
  },
  {
    metric: "100%",
    target: "MESNA Prophylaxis Coverage",
    description:
      "Urothelial protection with MESNA administered at 0 h, 4 h, and 8 h for every cyclophosphamide IV pulse, with monthly urinalysis for hemorrhagic cystitis detection.",
  },
  {
    metric: "≤5 mg/day",
    target: "Prednisone Dose at Month 12",
    description:
      "PEXIVAS-aligned steroid taper with avacopan adjunct achieving prednisone ≤5 mg/day by month 12 to minimize cumulative steroid toxicity across all AAV subtypes.",
  },
  {
    metric: "Annual",
    target: "VDIPLUS Damage Index Documentation",
    description:
      "Annual VDIPLUS scoring across renal, ENT, pulmonary, cardiac, neurologic, and cutaneous domains with subspecialty-coordinated damage management pathways.",
  },
  {
    metric: "<24 Hours",
    target: "Relapse Triage Response Time",
    description:
      "Same-week clinical evaluation and same-day hotline triage for new ENT, pulmonary, renal, cardiac, or neurologic symptoms suggesting GPA, MPA, or EGPA relapse.",
  },
]

const testimonial = {
  quote:
    "Running a vasculitis center means coordinating rituximab on a strict MAINRITSAN 6-month window, quarterly PR3-ANCA and MPO-ANCA titers, MESNA-protected cyclophosphamide pulses, BVAS documentation at every visit, organ surveillance across nephrology, ENT, pulmonology, and cardiology, and a 24-hour relapse hotline — all while tapering steroids on a PEXIVAS schedule. Momenties consolidated every infusion date, ANCA interval, VDI review, and subspecialty surveillance appointment into one coordinated vasculitis program calendar. We went from reactive flare management to a structured, measurable BVAS-zero remission program.",
  name: "Dr. D. Jayne",
  title: "Vasculitis Research Program",
}

export default function VasculitisCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Vasculitis Treatment Center"
        title="Vasculitis Center Calendar Management"
        subtitle="AI-powered scheduling for vasculitis centers coordinating ANCA serology (PR3/MPO), rituximab induction and maintenance cycles, cyclophosphamide pulse scheduling, BVAS disease activity scoring, and organ-damage surveillance for GPA, MPA, and EGPA."
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
            Built for the Full ANCA-Associated Vasculitis Care Pathway
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
            Four operational pillars — ANCA-guided disease monitoring, rituximab induction and MAINRITSAN maintenance, cyclophosphamide dosing with MESNA protection, and multi-organ damage surveillance — sequenced into one program calendar.
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
              The Year-One Vasculitis Program — Sequenced Across 12 Months
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
              Diagnostic workup, induction therapy, remission assessment, damage accrual, ANCA-guided surveillance, and annual registry submission — every milestone with a defined window.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((item) => {
                const phaseIcons = [Calendar, Heart, Target, ClipboardList, Bell, CheckCircle]
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
              The 6 KPIs That Define a Vasculitis Center Program
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
              Outcome targets that translate AAV remission science into measurable, auditable vasculitis program performance.
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
