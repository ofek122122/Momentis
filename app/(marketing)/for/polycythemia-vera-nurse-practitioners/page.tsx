import type { Metadata } from "next"
import { Heart, ClipboardList, Zap, UserCheck } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Polycythemia Vera Nurse Practitioners — Phlebotomy & Monitoring Scheduling | Momenties",
  description:
    "Purpose-built for NPs managing polycythemia vera — hematocrit-triggered phlebotomy coordination, JAK2 V617F allele burden follow-up, ruxolitinib monitoring, pruritus and symptom management, and thrombosis risk reassessment workflows.",
}

const pillars = [
  {
    icon: Heart,
    title: "Phlebotomy Coordination & Lab Follow-Up",
    description:
      "Own the day-to-day rhythm of PV phlebotomy: hematocrit-trigger calls, session scheduling, post-phlebotomy hydration guidance, and iron-deficiency follow-up labs after repeated sessions. Momenties notifies the NP team the moment a patient's CBC trends past the hematocrit threshold, generates a phlebotomy scheduling task, and tracks ferritin and iron studies at protocol-defined intervals — so that no patient stays above target while waiting for a manual review.",
  },
  {
    icon: ClipboardList,
    title: "PV Symptom Burden Assessment",
    description:
      "Run a structured symptom monitoring program at every PV visit: aquagenic pruritus severity, headache and dizziness frequency, erythromelalgia flares, fatigue scores, and constitutional symptom trends. Momenties schedules patient-reported outcome capture before each encounter, trends symptom scores against treatment changes, and surfaces patients whose pruritus or headache burden is escalating even when hematocrit is controlled — giving the NP the signal to revisit cytoreduction adequacy.",
  },
  {
    icon: Zap,
    title: "Cytoreduction & Ruxolitinib Monitoring",
    description:
      "Manage hydroxyurea CBC monitoring every two weeks during titration and monthly at maintenance, track anagrelide platelet thresholds, and run the ruxolitinib NP monitoring protocol: weekly CBCs during titration, platelet-floor alerts below 100k, hemoglobin drop flags, and four-week, twelve-week, and twenty-four-week hematocrit response reviews. Momenties anchors every dose-decision visit and pre-treatment workup — HBV reactivation screening, baseline CBC — so NP-driven therapy starts are safe and on time.",
  },
  {
    icon: UserCheck,
    title: "Thrombosis Risk & Patient Education",
    description:
      "Coordinate the NP-led thrombosis prevention touchpoints: IPSET-Thrombosis reassessments after any clinical event, aspirin therapy reviews, cardiovascular risk factor counseling, anticoagulation management check-ins for high-risk patients, and JAK2 V617F allele burden result delivery. Momenties schedules annual risk-stratification reviews, queues patient education sessions on hyperviscosity warning signs, and routes patients whose risk category escalates to hematocrit for urgent cytoreduction decisions.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "NP Panel Onboarding & Risk Stratification",
    description:
      "Import the PV patient panel, classify by treatment status (phlebotomy-only vs. cytoreductive therapy), confirm JAK2 V617F allele burden baselines, set hematocrit targets, and complete initial IPSET-Thrombosis risk scoring per patient.",
  },
  {
    month: "Month 3–4",
    title: "Phlebotomy Cadence & Symptom Capture Live",
    description:
      "Activate hematocrit-trigger phlebotomy notifications, deploy pruritus and symptom burden scoring at every encounter, and stand up NP dashboards surfacing patients overdue for phlebotomy or trending up on symptom scores.",
  },
  {
    month: "Month 5–6",
    title: "Cytoreduction Monitoring Workflows",
    description:
      "Roll out hydroxyurea CBC monitoring schedules, configure ruxolitinib titration-phase weekly CBCs, set platelet-floor and hemoglobin-drop alerts, and integrate pre-treatment HBV screening reminders for patients starting JAK inhibitor therapy.",
  },
  {
    month: "Month 7–8",
    title: "Molecular Monitoring & Result Routing",
    description:
      "Schedule serial JAK2 V617F allele burden labs for patients on ruxolitinib or interferon, integrate result delivery into the NP workflow, and flag rising allele burden for hematocrit review and potential escalation discussion.",
  },
  {
    month: "Month 9–10",
    title: "Thrombosis Risk Review & Patient Education",
    description:
      "Activate annual IPSET-Thrombosis reassessments, schedule cardiovascular risk factor visits, queue patient education sessions on hyperviscosity symptoms and thrombosis warning signs, and document anticoagulation reviews for high-risk patients.",
  },
  {
    month: "Month 11–12",
    title: "Annual Outcomes Review & Panel Recalibration",
    description:
      "Audit phlebotomy adherence, symptom burden trends, hydroxyurea and ruxolitinib dose intensity, allele burden trajectories, and thrombotic event rates. Recalibrate the PV panel risk scores and present NP program impact to hematology leadership.",
  },
]

const kpis = [
  {
    metric: "Phlebotomy Trigger Response Time",
    target: "≤ 48 hours",
    description:
      "Time from CBC crossing the hematocrit threshold to NP-initiated phlebotomy scheduling contact with the patient.",
  },
  {
    metric: "Hematocrit Target Maintenance",
    target: "≥ 90% of patients",
    description:
      "Proportion of PV patients maintaining hematocrit below 45% (men) and 42% (women) across rolling 90-day monitoring windows on the NP panel.",
  },
  {
    metric: "Symptom Burden Capture Rate",
    target: "≥ 95% of visits",
    description:
      "Percentage of PV patient encounters with a documented pruritus severity score and constitutional symptom assessment completed before the NP visit.",
  },
  {
    metric: "Ruxolitinib Hematocrit Control",
    target: "≥ 60% at Week 24",
    description:
      "Proportion of NP-monitored ruxolitinib patients achieving sustained hematocrit control without additional phlebotomy at the week-24 assessment.",
  },
  {
    metric: "IPSET-Thrombosis Annual Review",
    target: "100% of panel",
    description:
      "Percentage of PV patients with a documented thrombosis risk reassessment completed within the calendar year by the NP team.",
  },
  {
    metric: "Hydroxyurea CBC Adherence",
    target: "≥ 90%",
    description:
      "Patients on hydroxyurea with CBC monitoring completed on protocol cadence (every two weeks during titration, monthly at maintenance) across the NP panel.",
  },
]

const testimonial = {
  quote:
    "I was manually tracking hematocrit thresholds, pruritus scores, and ruxolitinib CBC schedules across spreadsheets and sticky notes. Momenties gave me a single system — phlebotomy calls trigger automatically, symptom scores come in before every visit, and I see my ruxolitinib patients' week-12 response windows without digging through charts. I reclaimed about four hours a week and my hematocrit adherence numbers have never been better.",
  name: "Joanna W., NP",
  title: "Hematology Nurse Practitioner, Polycythemia Vera Clinic",
}

export default function PolycythemiaVeraNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Polycythemia Vera Nurse Practitioners"
        title="Streamlined Scheduling for NPs Managing Polycythemia Vera"
        subtitle="A purpose-built calendar for hematocrit-triggered phlebotomy coordination, pruritus and symptom monitoring, ruxolitinib titration tracking, and thrombosis risk reassessment — built around the PV NP workflow."
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
            Four Systems Built Around the PV NP Workflow
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
            Your 12-Month PV NP Roadmap
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
            KPIs That Show PV NP Program Impact
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
