import type { Metadata } from "next"
import { ClipboardList, TrendingUp, Stethoscope, Heart } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "ILD Nurse Practitioner Scheduling Guide | Momenties",
  description:
    "Scheduling infrastructure for NPs managing antifibrotic side-effect counseling, PFT/6MWT trending, supplemental oxygen titration, and lung transplant listing workup in interstitial lung disease clinics.",
}

const pillars = [
  {
    icon: ClipboardList,
    title: "Antifibrotic Side-Effect Counseling",
    description:
      "Structured follow-up cadences for nintedanib diarrhea and hepatotoxicity management and pirfenidone photosensitivity counseling, with dose-hold and restart reminders built into each patient's schedule.",
  },
  {
    icon: TrendingUp,
    title: "PFT/6MWT Decline Monitoring",
    description:
      "Longitudinal FVC/DLCO and 6-minute walk test trending with configurable decline-alert protocols that flag NPs when results cross predefined thresholds requiring escalation.",
  },
  {
    icon: Stethoscope,
    title: "Oxygen Titration & Pulmonary Rehab",
    description:
      "Scheduled supplemental oxygen reassessment visits and pulmonary rehabilitation referral coordination, ensuring patients receive timely titration adjustments as functional capacity changes.",
  },
  {
    icon: Heart,
    title: "Psychosocial Support & Transplant Workup",
    description:
      "PHQ-9/GAD-7 psychosocial screening intervals and lung transplant listing workup scheduling, with automated pre-referral checklist reminders for NPs managing high-risk ILD patients.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "NP Panel Setup & Baseline Documentation",
    description:
      "Import ILD patient panels into Momenties, document current antifibrotic regimens, and establish baseline PFT and 6MWT values for longitudinal trend tracking.",
  },
  {
    month: "Month 3–4",
    title: "Side-Effect Counseling Workflow Activation",
    description:
      "Launch structured follow-up templates for nintedanib GI toxicity and pirfenidone photosensitivity counseling, with dose-adjustment decision trees embedded in each encounter.",
  },
  {
    month: "Month 5–6",
    title: "Decline Alert Protocol Go-Live",
    description:
      "Activate FVC/DLCO and 6MWT decline-alert thresholds; NPs receive automated flags when patients meet pre-specified criteria for escalation or transplant referral discussion.",
  },
  {
    month: "Month 7–8",
    title: "Oxygen Titration Scheduling Integration",
    description:
      "Embed supplemental oxygen reassessment intervals and pulmonary rehabilitation referral workflows, coordinating logistics between ILD clinic, respiratory therapy, and rehab services.",
  },
  {
    month: "Month 9–10",
    title: "Psychosocial Screening Cadence",
    description:
      "Integrate PHQ-9/GAD-7 screening reminders into routine ILD follow-up visits, with warm-referral scheduling to social work and behavioral health when scores exceed thresholds.",
  },
  {
    month: "Month 11–12",
    title: "Transplant Workup Optimization & Review",
    description:
      "Audit transplant listing workup lead times across the NP panel; refine pre-referral checklist templates and refine decline-alert sensitivity settings for the coming year.",
  },
]

const kpis = [
  {
    metric: "Side-Effect Follow-Up Completion",
    target: "≥ 95%",
    description: "Patients on antifibrotics receiving scheduled tolerability follow-up",
  },
  {
    metric: "PFT Decline Alert Response Time",
    target: "< 5 days",
    description: "Days from decline alert to NP-initiated clinical action",
  },
  {
    metric: "6MWT Documentation Rate",
    target: "≥ 89%",
    description: "ILD patients with two or more 6MWT results documented annually",
  },
  {
    metric: "Oxygen Reassessment Adherence",
    target: "≥ 92%",
    description: "Patients on supplemental O₂ completing scheduled titration reviews",
  },
  {
    metric: "Psychosocial Screening Coverage",
    target: "≥ 90%",
    description: "Patients receiving annual PHQ-9/GAD-7 assessment in ILD clinic",
  },
  {
    metric: "Transplant Workup Initiation",
    target: "< 14 days",
    description: "Days from FVC <50% flag to transplant listing workup referral",
  },
]

const testimonial = {
  quote:
    "Managing antifibrotic side effects, tracking PFT trends, and navigating transplant workup for a full ILD panel requires a level of scheduling precision that most tools simply can't handle. Momenties gives our NPs one place where every follow-up, every alert, and every referral is automatically queued and visible.",
  name: "Patricia H., AGPCNP-BC",
  title: "Pulmonary NP",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="NP Resource — Interstitial Lung Disease"
        title="ILD Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs managing antifibrotic side-effect counseling, PFT/6MWT trending, supplemental oxygen titration, and lung transplant listing workup in interstitial lung disease clinics."
      />
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 28,
              color: "#f0ece3",
              marginBottom: 32,
            }}
          >
            Why Momenties
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
                <h3
                  style={{
                    color: "#f0ece3",
                    fontSize: 16,
                    fontWeight: 600,
                    marginBottom: 8,
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    color: "rgba(240,236,227,0.65)",
                    fontSize: 14,
                    lineHeight: 1.6,
                  }}
                >
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 28,
              color: "#f0ece3",
              marginBottom: 32,
            }}
          >
            12-Month Implementation Timeline
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {timeline.map((t) => (
              <div
                key={t.month}
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  gap: 16,
                }}
              >
                <span style={{ color: "#c5a35c", fontSize: 13, fontWeight: 600 }}>
                  {t.month}
                </span>
                <div>
                  <h4
                    style={{
                      color: "#f0ece3",
                      fontSize: 15,
                      fontWeight: 600,
                      marginBottom: 4,
                    }}
                  >
                    {t.title}
                  </h4>
                  <p
                    style={{
                      color: "rgba(240,236,227,0.65)",
                      fontSize: 14,
                      lineHeight: 1.6,
                    }}
                  >
                    {t.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 28,
              color: "#f0ece3",
              marginBottom: 32,
            }}
          >
            Key Performance Indicators
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
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
                <p
                  style={{
                    color: "#c5a35c",
                    fontSize: 13,
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  {k.metric}
                </p>
                <p
                  style={{
                    color: "#f0ece3",
                    fontSize: 22,
                    fontWeight: 700,
                    marginBottom: 4,
                  }}
                >
                  {k.target}
                </p>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: 13 }}>
                  {k.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <div
            style={{
              background: "#131318",
              border: "1px solid rgba(197,163,92,0.25)",
              borderRadius: 16,
              padding: "36px 40px",
              maxWidth: 720,
            }}
          >
            <p
              style={{
                color: "#f0ece3",
                fontSize: 18,
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p style={{ color: "#c5a35c", fontWeight: 600 }}>{testimonial.name}</p>
            <p style={{ color: "rgba(240,236,227,0.65)", fontSize: 14 }}>
              {testimonial.title}
            </p>
          </div>
        </section>
      </Reveal>
      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
