import type { Metadata } from "next"
import { Heart, ClipboardList, Zap, TrendingUp } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "MPN Nurse Practitioners — Streamlined Scheduling for PV, ET & Myelofibrosis",
  description:
    "Purpose-built for NPs managing MPN patients across polycythemia vera, essential thrombocythemia, and myelofibrosis — phlebotomy coordination, cytoreductive therapy monitoring, constitutional symptom assessment, and transformation workups.",
}

const pillars = [
  {
    icon: Heart,
    title: "Phlebotomy & Lab Management",
    description:
      "Own the day-to-day rhythm of PV care: hematocrit-trigger phlebotomy calls, ferritin and iron-deficiency follow-ups after repeated phlebotomies, and pre-phlebotomy hydration counseling. Momenties keeps every patient on a hematocrit-driven cadence, sends NP reminder calls when the next CBC trends past target, and tracks lab orders so that no PV patient slips between standing and as-needed phlebotomy windows.",
  },
  {
    icon: ClipboardList,
    title: "Symptom Burden Assessment",
    description:
      "Run a structured MPN-10 (MPN-SAF Total Symptom Score) program at every clinic visit: fatigue, early satiety, abdominal discomfort, inactivity, concentration, night sweats, pruritus, bone pain, fever, and weight loss. Momenties auto-schedules MPN-10 capture, trends scores against treatment changes, and surfaces patients whose constitutional burden is rising even when CBCs look stable — the signal NPs need to push for therapy escalation.",
  },
  {
    icon: Zap,
    title: "Cytoreductive Therapy Monitoring",
    description:
      "Stay on top of hydroxyurea, anagrelide, interferon (peg-IFN, ropeginterferon), ruxolitinib, fedratinib, momelotinib, and pacritinib monitoring. Momenties anchors hydroxyurea CBC every two weeks during titration, tracks ANC and platelet floors, schedules ruxolitinib spleen reassessments, and flags pre-treatment screenings (TB, HBV, thiamine for fedratinib) so that NP-driven therapy starts run safely.",
  },
  {
    icon: TrendingUp,
    title: "Disease Progression Tracking",
    description:
      "Catch transformation early: rising peripheral blasts, new cytopenias, escalating LDH, progressive splenomegaly, and constitutional symptom flare. Momenties builds an NP-led surveillance loop for myelofibrosis and high-risk ET/PV patients, queues urgent re-biopsy workups when triggers fire, and routes transplant-eligibility re-evaluations to the hematologist before disease windows close.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Onboarding & Patient Stratification",
    description:
      "Import the NP panel, classify patients by diagnosis (PV, ET, PMF, post-PV/ET MF) and risk category, set baseline MPN-10 scores, and confirm JAK2/CALR/MPL mutation status per chart.",
  },
  {
    month: "Month 3–4",
    title: "Phlebotomy Cadence & Symptom Tracking Live",
    description:
      "Stand up hematocrit-driven phlebotomy reminder calls, deploy MPN-10 capture at every encounter, and build NP dashboards that surface patients overdue for phlebotomy or trending up in symptom burden.",
  },
  {
    month: "Month 5–6",
    title: "Cytoreductive Therapy Workflows",
    description:
      "Roll out structured hydroxyurea CBC monitoring, interferon titration schedules, and ruxolitinib response assessments — including pre-treatment HBV, TB, and thiamine workups handled by the NP team.",
  },
  {
    month: "Month 7–8",
    title: "Treatment Response Review",
    description:
      "Lock in week-12 and week-24 ruxolitinib spleen and symptom response checkpoints, document hydroxyurea intolerance and ELN resistance criteria, and coordinate handoffs for second-line therapy decisions.",
  },
  {
    month: "Month 9–10",
    title: "Progression Surveillance Layer",
    description:
      "Activate quarterly NP-led transformation reviews: peripheral blast trends, LDH trajectory, spleen size deltas, constitutional symptom flare, and re-biopsy scheduling for patients meeting accelerated-phase criteria.",
  },
  {
    month: "Month 11–12",
    title: "Annual Outcomes Review",
    description:
      "Audit phlebotomy adherence, MPN-10 trend lines, hydroxyurea and JAK inhibitor dose-intensity, transformation lead time, and patient-reported outcome improvements. Recalibrate panel and present NP program impact.",
  },
]

const kpis = [
  {
    metric: "MPN-10 Capture Rate",
    target: "≥ 95% of visits",
    description:
      "Percentage of MPN patient visits with a documented MPN-SAF Total Symptom Score for treatment-decision support.",
  },
  {
    metric: "Phlebotomy Call On-Time Rate",
    target: "≥ 95%",
    description:
      "NP-initiated phlebotomy scheduling calls completed within 48 hours of the hematocrit-trigger threshold being crossed.",
  },
  {
    metric: "Hydroxyurea CBC Adherence",
    target: "≥ 90%",
    description:
      "Patients on hydroxyurea with CBC monitoring completed on protocol cadence (every two weeks during titration, monthly maintenance).",
  },
  {
    metric: "Ruxolitinib Symptom Response",
    target: "≥ 50% TSS reduction",
    description:
      "Proportion of MF patients on ruxolitinib achieving ≥50% reduction in MPN-10 total symptom score by week 24.",
  },
  {
    metric: "Constitutional Symptom Resolution",
    target: "≥ 70% of flares",
    description:
      "Patient-reported improvement on pruritus, night sweats, and bone pain after NP-led intervention or therapy adjustment.",
  },
  {
    metric: "Progression Workup Lead Time",
    target: "≤ 21 days",
    description:
      "Days from earliest progression signal flagged by the NP team to completed re-biopsy and updated risk reclassification.",
  },
]

const testimonial = {
  quote:
    "I used to chase down hematocrit trends, MPN-10 scores, and hydroxyurea CBCs across three different systems. Momenties pulls all of it into the same calendar — phlebotomy calls, symptom assessments, and transformation surveillance. I caught a quiet shift to accelerated phase six weeks earlier than I would have last year.",
  name: "Renee D., NP",
  title: "Hematology Nurse Practitioner, MPN Clinic",
}

export default function MyeloproliferativeNeoplasmNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="MPN Nurse Practitioners"
        title="Streamlined Scheduling for NPs Managing PV, ET, and Myelofibrosis"
        subtitle="A purpose-built calendar for hematocrit-driven phlebotomy calls, MPN-10 symptom tracking, cytoreductive therapy monitoring, and transformation workups — owned by the NP team."
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
            Four Systems Built Around the MPN NP Workflow
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
            Your 12-Month MPN NP Roadmap
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
            KPIs That Show MPN NP Impact
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
