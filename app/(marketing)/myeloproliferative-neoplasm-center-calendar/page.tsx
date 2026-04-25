import type { Metadata } from "next"
import { Stethoscope, Zap, ClipboardList, TrendingUp } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Myeloproliferative Neoplasm Center — Clinical Scheduling & Monitoring Calendar",
  description:
    "Complete scheduling for MPN centers managing polycythemia vera, essential thrombocythemia, and myelofibrosis — JAK inhibitor monitoring, phlebotomy schedules, bone marrow biopsy coordination, mutation panel tracking, and transformation surveillance.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Phlebotomy & Cytoreduction Scheduling",
    description:
      "Coordinate therapeutic phlebotomy chairs, cytoreductive infusion windows, and hydroxyurea titration visits across the PV cohort. Momenties anchors each PV patient to a hematocrit-target schedule (under 45% for men, under 42% for women), auto-queues phlebotomy reminders when the last CBC trends upward, and balances chair utilization across mornings — keeping treatment-naïve and high-risk PV patients on cadence without infusion-bay bottlenecks.",
  },
  {
    icon: Zap,
    title: "JAK Inhibitor Management",
    description:
      "Run a structured ruxolitinib and fedratinib monitoring program: weekly CBCs during titration, thiamine checks before fedratinib initiation, dose-adjustment visits tied to platelet floor thresholds, and spleen-response reassessments at weeks 12 and 24. Momenties surfaces every dose-decision touchpoint, flags Wernicke encephalopathy screening windows, and ensures pre-treatment hepatitis B reactivation labs never slip through the queue.",
  },
  {
    icon: ClipboardList,
    title: "Bone Marrow Assessment & Biopsy",
    description:
      "Coordinate bone marrow aspirate and biopsy slots with cytogenetics, JAK2 V617F, CALR, MPL, and high-molecular-risk panel send-outs (ASXL1, EZH2, IDH1/2, SRSF2). Momenties tracks each procedural calendar slot, syncs pathology turnaround expectations, and routes results back to the treating hematologist — keeping diagnostic workups and DIPSS-Plus risk reclassifications on a defensible cadence.",
  },
  {
    icon: TrendingUp,
    title: "Transformation Surveillance",
    description:
      "Monitor the high-risk pathways into accelerated and blast phase: rising blasts on peripheral smear, new cytopenias, escalating LDH, progressive splenomegaly, and constitutional symptom flare. Momenties builds a quarterly surveillance loop for myelofibrosis patients, schedules urgent re-biopsy visits when transformation triggers fire, and surfaces transplant-eligibility re-evaluations before disease windows close.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Center Onboarding & Cohort Stratification",
    description:
      "Import the active MPN roster, stratify by diagnosis (PV, ET, PMF, post-PV/ET MF), apply IPSS-R, DIPSS-Plus, and MIPSS70+ risk categories, and configure baseline JAK2/CALR/MPL mutation tracking per patient.",
  },
  {
    month: "Month 3–4",
    title: "Phlebotomy & Cytoreduction Cadence Live",
    description:
      "Launch hematocrit-driven phlebotomy queues for PV patients, hydroxyurea CBC monitoring schedules for high-risk ET, and chair-utilization reporting so that treatment days run lean across all infusion bays.",
  },
  {
    month: "Month 5–6",
    title: "JAK Inhibitor Monitoring Protocol",
    description:
      "Roll out ruxolitinib and fedratinib structured monitoring: titration-phase weekly CBCs, thiamine baselines, week-12 and week-24 spleen response checks, and automated alerts for platelets under 50k or hemoglobin drops greater than 2 g/dL.",
  },
  {
    month: "Month 7–8",
    title: "Mutation Panel & Biopsy Coordination",
    description:
      "Tighten bone marrow biopsy scheduling against high-molecular-risk panel turnaround, integrate pathology results into the patient calendar, and standardize re-biopsy intervals for MF patients on momelotinib or pacritinib.",
  },
  {
    month: "Month 9–10",
    title: "Transformation Surveillance Layer",
    description:
      "Activate quarterly transformation-risk reviews: peripheral blast tracking, LDH trend lines, spleen size deltas, and constitutional symptom escalation — with auto-routing to transplant clinic for newly eligible MF patients.",
  },
  {
    month: "Month 11–12",
    title: "Outcomes Review & Annual Recalibration",
    description:
      "Audit hematocrit-target adherence, JAK inhibitor dose-intensity preservation, biopsy yield, and transformation-detection lead time. Recalibrate cohorts, refresh DIPSS-Plus scoring, and present annual MPN center performance to leadership.",
  },
]

const kpis = [
  {
    metric: "PV Hematocrit Target Adherence",
    target: "≥ 90%",
    description:
      "Percentage of PV patients maintaining hematocrit under 45% (men) and 42% (women) across rolling 90-day windows.",
  },
  {
    metric: "JAK Inhibitor Dose Intensity",
    target: "≥ 80% of planned",
    description:
      "Cumulative ruxolitinib or fedratinib dose delivered vs. planned during the first 24 weeks of therapy.",
  },
  {
    metric: "Biopsy Result Turnaround",
    target: "≤ 14 days",
    description:
      "Median days from bone marrow procedure to integrated pathology, cytogenetics, and mutation panel result.",
  },
  {
    metric: "Spleen Response Rate (SVR35)",
    target: "≥ 35% of MF cohort",
    description:
      "Proportion of myelofibrosis patients achieving ≥35% spleen volume reduction at week 24 on JAK inhibitor therapy.",
  },
  {
    metric: "Transformation Detection Lead Time",
    target: "≥ 60 days",
    description:
      "Average lead time from earliest surveillance signal to formal accelerated or blast phase confirmation and intervention.",
  },
  {
    metric: "Phlebotomy On-Time Rate",
    target: "≥ 95%",
    description:
      "Therapeutic phlebotomy visits completed within seven days of the hematocrit-trigger threshold for PV patients.",
  },
]

const testimonial = {
  quote:
    "We were juggling phlebotomy chairs, ruxolitinib titrations, and biopsy results across three calendars and a paper sign-out. Momenties gave our MPN program a single rhythm — hematocrit triggers, dose-decision visits, and transformation surveillance all in one place. Our SVR35 rate climbed and our biopsy turnaround dropped under two weeks.",
  name: "Dr. Mariam H.",
  title: "Director, Myeloproliferative Neoplasms Program",
}

export default function MyeloproliferativeNeoplasmCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Myeloproliferative Neoplasm Center Calendar"
        title="Run a Coordinated MPN Program Across PV, ET, and Myelofibrosis"
        subtitle="A clinical scheduling layer built for hematocrit-driven phlebotomy, JAK inhibitor monitoring, mutation panel coordination, and transformation surveillance — all on one calendar."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Four Systems That Anchor a High-Volume MPN Center
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <p.icon size={28} color="#c5a35c" style={{ marginBottom: 16 }} />
                <h3 style={{ color: "#f0ece3", fontSize: "1.05rem", fontWeight: 600, marginBottom: 12 }}>
                  {p.title}
                </h3>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.92rem", lineHeight: 1.65 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* 12-Month Timeline */}
      <Reveal>
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Your 12-Month MPN Center Roadmap
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {timeline.map((t, i) => (
              <div
                key={i}
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
                <span style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.9rem", paddingTop: 2 }}>
                  {t.month}
                </span>
                <div>
                  <p style={{ color: "#f0ece3", fontWeight: 600, marginBottom: 6 }}>{t.title}</p>
                  <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    {t.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            KPIs That Define MPN Program Quality
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {kpis.map((k) => (
              <div
                key={k.metric}
                style={{
                  background: "#0a0a0d",
                  border: "1px solid rgba(197,163,92,0.2)",
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1.1rem", marginBottom: 4 }}>
                  {k.target}
                </p>
                <p style={{ color: "#f0ece3", fontWeight: 600, marginBottom: 8 }}>{k.metric}</p>
                <p style={{ color: "rgba(240,236,227,0.6)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                  {k.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 0" }}>
          <blockquote
            style={{
              background: "#131318",
              border: "1px solid rgba(197,163,92,0.25)",
              borderRadius: 16,
              padding: "36px 40px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "rgba(240,236,227,0.85)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                fontStyle: "italic",
                marginBottom: 24,
              }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p style={{ color: "#c5a35c", fontWeight: 600 }}>{testimonial.name}</p>
            <p style={{ color: "rgba(240,236,227,0.5)", fontSize: "0.88rem" }}>{testimonial.title}</p>
          </blockquote>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
