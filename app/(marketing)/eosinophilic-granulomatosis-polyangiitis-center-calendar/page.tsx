import type { Metadata } from "next"
import { Zap, Database, Stethoscope, Bell } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "EGPA Center Calendar — Vasculitis & Biologic Scheduling | Momenties",
  description:
    "Systematic scheduling for eosinophilic granulomatosis with polyangiitis centers — mepolizumab biologic therapy, eosinophil and ANCA monitoring, organ damage assessment, steroid tapering, BVAS scoring, and multidisciplinary vasculitis reviews.",
}

const pillars = [
  {
    icon: Zap,
    title: "Mepolizumab Biologic Therapy",
    description:
      "Mepolizumab 300 mg SC every 4 weeks is the FDA-approved cornerstone of EGPA care for eosinophilic-phenotype disease. Centers must coordinate IL-5 antagonist injection scheduling, prior-authorization renewals, anaphylaxis premedication review, lot-number documentation, and steroid-sparing response tracking. Calendar logic also blocks cyclophosphamide pulses for severe organ-threatening disease (cardiac, renal, CNS, GI) and azathioprine or mycophenolate mofetil maintenance windows so biologic, induction, and maintenance therapies stay synchronized across the rare-disease cohort.",
  },
  {
    icon: Database,
    title: "Eosinophil & ANCA Monitoring",
    description:
      "EGPA disease activity is tracked through serial eosinophil counts (target <1,000 cells/μL on therapy), MPO and PR3-ANCA titers every 3 to 6 months, CRP, IgE, and tryptase trending. The calendar sequences phlebotomy windows around mepolizumab dosing, flags missed ANCA cycles, and surfaces eosinophil rebound patterns predictive of relapse. Built-in cadence rules also reserve slots for repeat tissue biopsy review when ANCA seroconversion or new organ involvement emerges.",
  },
  {
    icon: Stethoscope,
    title: "Organ Damage Assessment",
    description:
      "EGPA can damage heart, lung, kidney, peripheral nerves, sinuses, and gut. The center calendar enforces cardiac MRI for suspected Löffler endocarditis or eosinophilic myocarditis, echocardiogram surveillance, high-resolution chest CT, pulmonary function testing, urinalysis with renal function, EMG/NCS for mononeuritis multiplex, and ENT sinus endoscopy windows. Five-Factor Score (FFS) reassessment and Birmingham Vasculitis Activity Score (BVAS) scoring slots are pre-booked so prognostic data drives every multidisciplinary review.",
  },
  {
    icon: Bell,
    title: "Steroid Tapering & Relapse Detection",
    description:
      "Long-term glucocorticoid burden is the dominant driver of EGPA morbidity. The calendar models per-patient prednisone taper schedules, adrenal axis testing windows, bone density and ophthalmology follow-ups, and asthma control review. Relapse-detection logic surfaces eosinophil rebound, ANCA conversion, new neuropathy, sinus flares, and respiratory symptoms — converting each signal into an urgent multidisciplinary vasculitis review slot before organ-threatening disease takes hold.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnosis Confirmation & Baseline Phenotyping",
    description:
      "Confirm EGPA per ACR/EULAR criteria, document asthma and eosinophilia history, complete tissue biopsy review, MPO/PR3-ANCA, baseline eosinophil count, IgE, tryptase, BVAS, FFS, cardiac MRI, echo, HRCT, PFTs, renal panel, EMG/NCS, and ENT evaluation. Calendar locks induction pathway (cyclophosphamide vs. mepolizumab) and books multidisciplinary vasculitis board review.",
  },
  {
    month: "Month 3–4",
    title: "Induction Therapy & First Mepolizumab Cycle",
    description:
      "Initiate mepolizumab 300 mg SC Q4 weeks for non-severe eosinophilic disease, or cyclophosphamide induction for severe FFS-positive disease. Schedule weekly safety labs during cyclophosphamide, post-injection observation for mepolizumab, and prednisone taper milestones. Cardiology and nephrology co-management slots open if organ involvement is documented.",
  },
  {
    month: "Month 5–6",
    title: "Remission Assessment & Maintenance Transition",
    description:
      "Re-score BVAS and FFS, repeat eosinophil count and ANCA, reassess cardiac MRI if Löffler endocarditis was suspected, and transition cyclophosphamide responders onto azathioprine or MMF maintenance. Mepolizumab continues Q4 weeks. Steroid taper accelerated toward physiologic dosing with adrenal axis testing booked.",
  },
  {
    month: "Month 7–8",
    title: "Organ Surveillance & Steroid-Sparing Review",
    description:
      "Repeat HRCT and PFTs for pulmonary disease, urinalysis and renal function, ENT sinus endoscopy, neuropathy reassessment, and ophthalmology screening for chronic steroid exposure. Bone density scan booked at the 6-month mark. Mepolizumab steroid-sparing effect quantified against baseline prednisone burden.",
  },
  {
    month: "Month 9–10",
    title: "Relapse Vigilance & Patient Education",
    description:
      "Quarterly ANCA and eosinophil counts repeated, asthma control test administered, sinus and neuropathy symptom review, and structured patient education on relapse warning signs. Any eosinophil rebound, ANCA seroconversion, or new organ findings escalate to urgent multidisciplinary vasculitis review.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review, Registry & Long-Term Planning",
    description:
      "Full annual review with BVAS, Vasculitis Damage Index (VDI), repeat cardiac MRI for prior endocarditis, comprehensive labs, mepolizumab continuation decision, EUVAS and rare-disease registry data submission, and forward planning for year two of maintenance, taper, and biologic therapy.",
  },
]

const kpis = [
  {
    metric: "Eosinophils",
    target: "<1,000 cells/μL",
    description: "On-therapy eosinophil suppression sustained across mepolizumab cycles.",
  },
  {
    metric: "BVAS",
    target: "0 at 6 months",
    description: "Birmingham Vasculitis Activity Score remission rate by month six of induction.",
  },
  {
    metric: "Prednisone",
    target: "≤7.5 mg/day",
    description: "Steroid-sparing target maintained at the 12-month maintenance review.",
  },
  {
    metric: "ANCA Cadence",
    target: "Q3–6 months",
    description: "MPO/PR3-ANCA surveillance compliance for relapse prediction.",
  },
  {
    metric: "Cardiac MRI",
    target: "100% suspected cases",
    description: "Imaging completion for Löffler endocarditis and eosinophilic myocarditis review.",
  },
  {
    metric: "Mepolizumab",
    target: "≥95% on-time",
    description: "Q4-week SC injection adherence across the eosinophilic vasculitis cohort.",
  },
]

const testimonial = {
  quote:
    "EGPA sits at the intersection of severe asthma, hypereosinophilia, and ANCA-associated vasculitis — and our patients pay the price when any one thread slips. Momenties keeps mepolizumab cycles, ANCA windows, cardiac MRI, BVAS scoring, steroid tapers, and multidisciplinary reviews in one accountable calendar. We finally run our eosinophilic vasculitis program the way the disease demands.",
  name: "Dr. L. Guillevin",
  title: "EGPA Program Director, Vasculitis Center",
}

export default function EGPACenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="EGPA Center Calendar"
        title="Eosinophilic Granulomatosis with Polyangiitis Center — Vasculitis & Biologic Calendar"
        subtitle="Systematic scheduling for EGPA centers — mepolizumab biologic therapy, eosinophil and ANCA monitoring, organ damage assessment, steroid tapering, and multidisciplinary vasculitis reviews."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem,3vw,2.2rem)",
              fontFamily: "Playfair Display, serif",
              marginBottom: 48,
              color: "#f0ece3",
            }}
          >
            Four Pillars of EGPA Center Scheduling
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 24,
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
                marginBottom: 12,
                color: "#f0ece3",
              }}
            >
              The 12-Month EGPA Center Cadence
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 48,
                fontSize: "0.97rem",
              }}
            >
              From diagnostic confirmation through annual registry submission — every mepolizumab cycle, ANCA window, BVAS rescore, and multidisciplinary review pre-sequenced.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {timeline.map((item) => (
                <div
                  key={item.month}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr",
                    gap: 20,
                    background: "#131318",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 12,
                    padding: "20px 24px",
                    alignItems: "start",
                  }}
                >
                  <div
                    style={{
                      color: "#c5a35c",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {item.month}
                  </div>
                  <div>
                    <div
                      style={{
                        color: "#f0ece3",
                        fontWeight: 600,
                        fontSize: "0.97rem",
                        marginBottom: 6,
                      }}
                    >
                      {item.title}
                    </div>
                    <p
                      style={{
                        color: "rgba(240,236,227,0.65)",
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
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
                marginBottom: 48,
                color: "#f0ece3",
              }}
            >
              EGPA Program KPIs the Calendar Drives
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                gap: 20,
              }}
            >
              {kpis.map((kpi) => (
                <div
                  key={kpi.metric}
                  style={{
                    background: "#0a0a0d",
                    border: "1px solid rgba(197,163,92,0.2)",
                    borderRadius: 12,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      color: "#c5a35c",
                      fontFamily: "Playfair Display, serif",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      marginBottom: 4,
                    }}
                  >
                    {kpi.target}
                  </div>
                  <div
                    style={{
                      color: "#f0ece3",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      marginBottom: 8,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <p
                    style={{
                      color: "rgba(240,236,227,0.65)",
                      fontSize: "0.85rem",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {kpi.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ padding: "40px 24px 0" }}>
          <div style={{ maxWidth: 880, margin: "0 auto" }}>
            <div
              style={{
                background: "#131318",
                border: "1px solid rgba(197,163,92,0.25)",
                borderRadius: 16,
                padding: "36px 40px",
              }}
            >
              <p
                style={{
                  color: "#f0ece3",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  margin: 0,
                  marginBottom: 20,
                }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div style={{ color: "#c5a35c", fontWeight: 700, fontSize: "0.95rem" }}>
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
