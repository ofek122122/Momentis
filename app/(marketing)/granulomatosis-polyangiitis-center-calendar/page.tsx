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
  title:
    "GPA Center — Remission Induction, Maintenance & Vasculitis Surveillance Calendar | Momenties",
  description:
    "Comprehensive scheduling for GPA centers — rituximab and cyclophosphamide remission induction, azathioprine/MMF/rituximab maintenance, ANCA monitoring, ENT/renal/pulmonary surveillance, and relapse detection programs.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Remission Induction Scheduling",
    description:
      "Sequence rituximab 375 mg/m² IV weekly × 4 (RAVE/RITUXVAS) or 1 g IV × 2 doses 14 days apart for new-onset and relapsing GPA, alongside cyclophosphamide IV pulse 15 mg/kg (CYCLOPS) for severe organ-threatening or alveolar hemorrhage disease; coordinate co-induction high-dose prednisone 1 mg/kg/day with PEXIVAS-aligned rapid taper, methylprednisolone 500–1000 mg IV pulses for rapidly progressive glomerulonephritis or alveolar hemorrhage, and plasma exchange selection for advanced renal failure or DAH; pre-induction hepatitis B/C, HIV, TB, JC virus, and immunoglobulin testing; meningococcal, pneumococcal (PCV20 or PCV15→PPSV23), influenza, and recombinant zoster vaccination calendars 2–4 weeks before induction; infusion-day reaction monitoring with pre-medication, slow titration, and 2-hour observation.",
  },
  {
    icon: Search,
    title: "Maintenance Therapy & ANCA Monitoring",
    description:
      "Schedule rituximab maintenance 500 mg IV every 6 months × 4–5 years (MAINRITSAN-1/2/3 protocol), or azathioprine 2 mg/kg/day, methotrexate 20–25 mg weekly, or mycophenolate mofetil 2 g/day with TPMT testing and adherence calendars; quarterly PR3-ANCA and MPO-ANCA titer surveillance with rising-titer escalation pathways (PR3-ANCA rise correlates with relapse risk in GPA); CD19/CD20 B-cell quantification before each rituximab redose to confirm continued depletion; serum immunoglobulin (IgG, IgA, IgM) monitoring every 6 months for hypogammaglobulinemia, with IVIG replacement thresholds for IgG <400 mg/dL plus recurrent infection; TMP-SMX Pneumocystis jirovecii prophylaxis daily or 3×/week throughout induction and maintenance.",
  },
  {
    icon: Shield,
    title: "ENT, Pulmonary & Renal Surveillance",
    description:
      "Quarterly ENT evaluation for nasal crusting, septal perforation, saddle-nose deformity, subglottic stenosis (laryngoscopy with stenosis grading), chronic sinusitis (Lund-Mackay scoring), serous otitis, and conductive hearing loss; annual sinus CT and chest CT to detect granulomatous masses, cavitating nodules, ground-glass alveolar hemorrhage, and tracheobronchial disease; annual or biannual PFTs with DLCO; renal surveillance with creatinine, eGFR, urine protein/creatinine ratio, urinalysis with microscopy for dysmorphic RBCs and red-cell casts every 1–3 months in active disease, every 3 months in stable maintenance; ophthalmology referral for episcleritis, scleritis, orbital pseudotumor, and proptosis; cardiology and dermatology coordination for pericarditis, palpable purpura, and cutaneous vasculitis.",
  },
  {
    icon: Bell,
    title: "Relapse Detection & Rescue Treatment",
    description:
      "BVAS (Birmingham Vasculitis Activity Score) and BVAS/WG documentation at every visit with VDI (Vasculitis Damage Index) annually to distinguish active inflammation from accrued damage; same-week evaluation pathways for new ENT symptoms, hemoptysis, dyspnea, dropping hemoglobin, rising creatinine, or fresh urinary sediment; rescue rituximab re-induction (375 mg/m² × 4 or 1 g × 2) for major relapse, with avacopan 30 mg PO BID add-on (ADVOCATE) to permit accelerated steroid taper in severe relapse; coordination of CT chest, bronchoscopy with BAL, and renal biopsy for new organ involvement; structured patient-reported relapse hotline with 24-hour triage; chronic damage clinics covering hearing aids, septal prostheses, tracheal stenting/dilation, and dialysis or transplant pathways for end-stage renal disease.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnosis Confirmation & Pre-Induction Workup",
    description:
      "Confirm GPA with PR3-ANCA (or MPO-ANCA) by ELISA, tissue biopsy where feasible (renal, ENT, lung) for necrotizing granulomatous vasculitis, baseline BVAS/WG and VDI scoring, complete CBC, comprehensive metabolic panel, ESR/CRP, urinalysis with microscopy, urine protein/creatinine ratio, chest CT, sinus CT, and PFTs with DLCO. Pre-induction screening — hepatitis B/C, HIV, TB (IGRA), JC virus, immunoglobulin levels, TPMT for azathioprine candidates. Administer pre-induction vaccinations (PCV20 or PCV15→PPSV23, influenza, recombinant zoster, meningococcal where indicated) ≥2 weeks before rituximab. Initiate TMP-SMX PCP prophylaxis. Document baseline scleritis exam with ophthalmology and audiometry with ENT.",
  },
  {
    month: "Month 3–4",
    title: "Remission Induction & High-Dose Steroid Taper",
    description:
      "Initiate rituximab 375 mg/m² IV weekly × 4 or 1 g IV × 2 doses 14 days apart; for severe disease, alternative cyclophosphamide IV pulse 15 mg/kg every 2–3 weeks per CYCLOPS protocol with mesna and bladder protection. Concurrent prednisone 1 mg/kg/day with PEXIVAS-aligned rapid taper (or reduced-dose arm), methylprednisolone 500–1000 mg IV pulses × 3 for RPGN or alveolar hemorrhage, and plasma exchange in selected DAH or advanced renal failure. Add avacopan 30 mg PO BID per ADVOCATE for steroid-sparing remission induction. Weekly CBC, CMP, urinalysis during induction with reaction monitoring at every infusion.",
  },
  {
    month: "Month 5–6",
    title: "Remission Assessment & Maintenance Initiation",
    description:
      "Reassess BVAS/WG, PR3-ANCA, ESR/CRP, urinalysis, creatinine, and chest/sinus CT at month 6 to confirm complete remission (BVAS = 0) versus partial response. Transition to maintenance — rituximab 500 mg IV (MAINRITSAN schedule: months 0, 6, 12, 18 from induction completion), azathioprine 2 mg/kg/day, methotrexate 20–25 mg weekly with folate, or MMF 2 g/day. Continue prednisone taper toward ≤7.5 mg/day by month 6 and ≤5 mg/day by month 12. Reaffirm TMP-SMX PCP prophylaxis and bone protection (calcium, vitamin D, bisphosphonate if FRAX-indicated). Re-baseline ENT, ophthalmology, and PFTs.",
  },
  {
    month: "Month 7–8",
    title: "Damage Reassessment & Subspecialty Coordination",
    description:
      "Update VDI to capture accrued damage — saddle-nose deformity, septal perforation, subglottic stenosis, hearing loss, CKD stage, pulmonary fibrosis, tracheobronchial scarring. Coordinate ENT for septoplasty/prostheses, laryngology for tracheal dilation or stenting in subglottic stenosis, nephrology for CKD progression, pulmonology for fibrotic disease and exercise testing, and ophthalmology for chronic scleritis or orbital disease. Reassess immunoglobulin levels and consider IVIG replacement (IgG <400 mg/dL with recurrent infection). Audit vaccination currency — annual influenza, COVID-19 boosters, RSV where indicated. Document return-to-work and disability planning.",
  },
  {
    month: "Month 9–10",
    title: "ANCA Surveillance & Relapse Pathway Activation",
    description:
      "Quarterly PR3-ANCA and CD19 B-cell counts to guide rituximab redosing windows; rising PR3-ANCA in GPA confers elevated relapse risk and triggers tighter clinical surveillance (urinalysis, ENT, CT). Same-week evaluation for new hemoptysis, hearing change, sinus pain, hematuria, rising creatinine, or fresh urinary sediment with red-cell casts. Activate rescue protocol — rituximab re-induction, methylprednisolone pulses, avacopan add-on, bronchoscopy with BAL, and renal biopsy where indicated. Reinforce 24-hour patient hotline and ED handoff documentation for vasculitis flare protocols.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review, Registry & Long-Term Surveillance",
    description:
      "Complete annual review — BVAS/WG, VDI, PR3-ANCA trajectory, organ-specific damage assessment, vaccination currency, fertility and reproductive counseling for cyclophosphamide-exposed patients, malignancy screening (skin, bladder for prior cyclophosphamide, age-appropriate cancer screens), bone density (DEXA every 1–2 years on chronic steroids), and cardiovascular risk reassessment (lipids, blood pressure, HbA1c). Submit data to vasculitis registries (VCRC, DCVAS). Plan year-2 maintenance schedule, define rituximab redosing cadence (every 4–6 months × 4–5 years per MAINRITSAN-3), and reaffirm patient education on relapse symptoms.",
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
    target: "PR3-ANCA & MPO-ANCA Surveillance",
    description:
      "Quarterly ANCA titers with rising-titer escalation pathways, paired with CD19 B-cell quantification before each rituximab maintenance dose.",
  },
  {
    metric: "100%",
    target: "TMP-SMX PCP Prophylaxis Coverage",
    description:
      "Pneumocystis jirovecii prophylaxis maintained throughout induction and the entire maintenance period on rituximab, cyclophosphamide, or steroid-equivalent immunosuppression.",
  },
  {
    metric: "≤5 mg/day",
    target: "Prednisone Dose at Month 12",
    description:
      "PEXIVAS-aligned steroid taper with avacopan adjunct supporting prednisone ≤5 mg/day by month 12 to minimize cumulative steroid toxicity.",
  },
  {
    metric: "Annual",
    target: "VDI Damage Index Documentation",
    description:
      "Annual Vasculitis Damage Index scoring across ENT, pulmonary, renal, ophthalmologic, and neurologic domains with subspecialty coordination for accrued damage.",
  },
  {
    metric: "<24 Hours",
    target: "Relapse Triage Response Time",
    description:
      "Same-week clinical evaluation and same-day hotline triage for new ENT, pulmonary, renal, or ophthalmologic symptoms suggesting GPA relapse.",
  },
]

const testimonial = {
  quote:
    "GPA care lives at the intersection of rheumatology, nephrology, ENT, pulmonology, and ophthalmology. Our patients need rituximab on a strict 6-month maintenance window, quarterly PR3-ANCA and B-cell monitoring, TMP-SMX prophylaxis, scleritis exams, sinus and chest CTs, and a 24-hour relapse hotline — all while we taper steroids on a PEXIVAS schedule. Momenties consolidated every infusion, lab interval, vaccination booster, ENT laryngoscopy, and damage-index review into one coordinated calendar. We moved from chasing relapses to a structured year-round vasculitis program with measurable BVAS-zero remission rates.",
  name: "Dr. P. Merkel",
  title: "GPA Program Director, Vasculitis Center of Excellence",
}

export default function GranulomatosisPolyangiitisCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Granulomatosis with Polyangiitis Center Calendar"
        title="GPA Center — Remission Induction, Maintenance & Vasculitis Surveillance Calendar"
        subtitle="Comprehensive scheduling for GPA centers — rituximab and cyclophosphamide remission induction, azathioprine/MMF/rituximab maintenance, ANCA monitoring, ENT/renal/pulmonary surveillance, and relapse detection programs."
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
            Built for the Full Granulomatosis with Polyangiitis Care Pathway
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
            Four operational pillars — remission induction logistics, ANCA-guided maintenance, multi-organ surveillance, and rapid relapse detection — sequenced into one program calendar.
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
              The Year-One GPA Program — Sequenced Across 12 Months
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
              Diagnostic workup, induction therapy, remission assessment, damage reassessment, ANCA-guided surveillance, and annual review — every milestone with a defined window.
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
              The 6 KPIs That Define a GPA Program
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
