import type { Metadata } from "next"
import { Stethoscope, BarChart3, ClipboardList, Heart } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "ILD Center Calendar Management | Momenties",
  description:
    "AI-powered scheduling for ILD centers coordinating HRCT and PFT surveillance, nintedanib/pirfenidone antifibrotic dosing, mycophenolate/azathioprine immunosuppression monitoring, 6-minute walk test tracking, and lung transplant listing criteria assessment.",
}

const pillars = [
  {
    icon: BarChart3,
    title: "HRCT & PFT Surveillance",
    description:
      "Automated Q3–6 month scheduling for high-resolution CT fibrosis pattern review and pulmonary function testing (FVC/DLCO) to track disease progression and treatment response.",
  },
  {
    icon: ClipboardList,
    title: "Antifibrotic Titration Tracking",
    description:
      "Structured follow-up workflows for nintedanib 150 mg BID and pirfenidone 2403 mg/day titration, including dose-adjustment milestones and tolerability check-ins at each titration step.",
  },
  {
    icon: Stethoscope,
    title: "Immunosuppression Monitoring",
    description:
      "Recurring CBC and LFT surveillance visits for patients on mycophenolate or azathioprine, with configurable alert thresholds and automatic rescheduling on abnormal results.",
  },
  {
    icon: Heart,
    title: "6MWT & Transplant Referral",
    description:
      "6-minute walk test tracking, PHQ-9/GAD-7 psychosocial screening, and lung transplant referral triggers when FVC declines below 50% predicted.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Baseline Assessment & Onboarding",
    description:
      "Import existing ILD patient panels, establish baseline HRCT and PFT schedules, and configure antifibrotic titration workflows for new and existing patients.",
  },
  {
    month: "Month 3–4",
    title: "Surveillance Protocol Activation",
    description:
      "Launch automated Q3–6 month HRCT and PFT recall reminders across the panel, with stratified urgency based on baseline disease severity.",
  },
  {
    month: "Month 5–6",
    title: "Antifibrotic Titration Milestones",
    description:
      "Activate dose-escalation reminders for nintedanib and pirfenidone titration, including tolerability follow-ups and pharmacist coordination slots.",
  },
  {
    month: "Month 7–8",
    title: "Immunosuppression Lab Cadence",
    description:
      "Embed CBC/LFT monitoring schedules for mycophenolate and azathioprine cohorts, with automated alerts routed to the ILD nurse coordinator on out-of-range results.",
  },
  {
    month: "Month 9–10",
    title: "Functional & Psychosocial Integration",
    description:
      "Integrate 6MWT appointments, PHQ-9/GAD-7 screening intervals, and supplemental oxygen reassessments into each patient's longitudinal care plan.",
  },
  {
    month: "Month 11–12",
    title: "Transplant Listing Review & Optimization",
    description:
      "Activate FVC <50% decline alerts to trigger transplant listing workup referrals; review panel metrics and refine scheduling templates for the next program year.",
  },
]

const kpis = [
  {
    metric: "PFT Surveillance Completion",
    target: "≥ 94%",
    description: "Patients completing scheduled FVC/DLCO assessments on time",
  },
  {
    metric: "Antifibrotic Retention at 12 Mo",
    target: "≥ 78%",
    description: "Patients maintained on nintedanib or pirfenidone at one year",
  },
  {
    metric: "Immunosuppression Lab Compliance",
    target: "≥ 97%",
    description: "CBC/LFT draws completed within the prescribed monitoring window",
  },
  {
    metric: "6MWT Tracking Rate",
    target: "≥ 88%",
    description: "Patients with at least two 6-minute walk tests documented annually",
  },
  {
    metric: "Transplant Referral Lead Time",
    target: "< 14 days",
    description: "Days from FVC <50% flag to transplant listing workup initiation",
  },
  {
    metric: "Psychosocial Screening Coverage",
    target: "≥ 90%",
    description: "ILD patients receiving annual PHQ-9/GAD-7 assessment",
  },
]

const testimonial = {
  quote:
    "Coordinating HRCT cycles, antifibrotic titration, and transplant workup across a large ILD panel is extraordinarily complex. Momenties brings that entire longitudinal schedule into a single intelligent system — our team finally has the visibility to act before patients decline.",
  name: "Dr. G. Raghu",
  title: "ILD Research Program",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Interstitial Lung Disease Center"
        title="ILD Center Calendar Management"
        subtitle="AI-powered scheduling for ILD centers coordinating HRCT and PFT surveillance, nintedanib/pirfenidone antifibrotic dosing, mycophenolate/azathioprine immunosuppression monitoring, 6-minute walk test tracking, and lung transplant listing criteria assessment."
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
