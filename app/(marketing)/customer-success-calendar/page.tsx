import type { Metadata } from "next"
import { Heart, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Customer Success Calendar | Momenties",
  description: "Build a systematic customer success calendar — onboarding milestone cadences, QBR scheduling programs, health score review cycles, renewal and expansion playbooks, and churn risk intervention schedules that drive NRR above 110%.",
}

const pillars = [
  {
    icon: Heart,
    title: "Onboarding Milestone Calendar & Time-to-Value Cadence",
    description:
      "Customers who don&apos;t activate in 90 days rarely renew. Momenties schedules the complete onboarding milestone calendar: day-1 kickoff call (within 48 hours of contract sign), week-2 implementation check-in, 30-day first value moment confirmation, 60-day adoption depth review, and 90-day onboarding graduation with health score establishment. For enterprise customers, onboarding project plans with week-by-week deliverable tracking are assigned to CSMs with escalation alerts triggered before 14-day delays. Early lifecycle intervention — scheduled at day 14 if no product login, day 30 if no core feature adoption — prevents silent churners from reaching renewal without a conversation.",
  },
  {
    icon: RefreshCw,
    title: "QBR Scheduling Program & Executive Relationship Cadence",
    description:
      "Quarterly Business Reviews happen reactively in most CS organizations — requested when the customer complains, or skipped entirely for mid-market accounts. Momenties schedules QBRs proactively 6-8 weeks in advance for all accounts above churn risk threshold: Tier 1 accounts (annual QBRs with executive sponsors + monthly CSM check-ins), Tier 2 accounts (semi-annual QBRs + quarterly check-ins), Tier 3 accounts (annual health check). QBR preparation calendar — data pull 2 weeks out, slide deck review 1 week out, pre-call with champion 3 days out — is automated. Executive sponsor cadence at C-level — separate from CSM relationship — is managed on an independent 90-day schedule.",
  },
  {
    icon: TrendingUp,
    title: "Health Score Reviews, Churn Risk Triggers & Intervention Calendar",
    description:
      "Customer health deteriorates in predictable patterns — and most CS teams identify it too late. Momenties schedules weekly health score review meetings for the red/yellow cohort, monthly full portfolio health reviews for CS team leads, and quarterly health score model recalibration sessions where leading indicators are validated against actual churn outcomes. Churn risk intervention playbooks — triggered when health score drops below threshold, NPS drops below 6, or support ticket volume spikes — are managed with owner-assigned tasks and escalation timelines. At-risk accounts are surfaced 90+ days before renewal to allow genuine intervention before the at-risk discount conversation begins.",
  },
  {
    icon: BarChart3,
    title: "Renewal & Expansion Playbook Calendar",
    description:
      "Renewals treated as transactions churn at 1.5× the rate of renewals treated as milestones. Momenties schedules the complete renewal calendar: 180-day renewal initiation for enterprise accounts (ROI documentation, expansion scoping), 90-day procurement process start for large customers, 60-day pricing and term negotiation window, and 30-day contract execution with legal review. Expansion playbooks — triggered at product usage thresholds, seat utilization above 80%, or new stakeholder hire events — are managed with CSM assignments and timing coordination. NPS survey distribution (post-onboarding at day 90, annual for all accounts, post-QBR for enterprise) feeds the renewal risk and expansion signal pipeline.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "CS Calendar Architecture & Onboarding Cadence Build",
    description: "Audit current onboarding completion rates and time-to-value metrics; build structured onboarding milestone calendar; implement health score framework; assign CSM account tiers; launch QBR scheduling program.",
  },
  {
    month: "Month 3",
    title: "QBR Program Launch & Churn Risk Intervention System",
    description: "Execute first round of proactive QBRs; launch health score review cadence; implement churn risk trigger alerts; run first at-risk account intervention playbooks; establish NPS survey cadence.",
  },
  {
    month: "Month 4–5",
    title: "Renewal Calendar Activation & Expansion Playbook Launch",
    description: "Activate 180-day renewal calendar for all enterprise accounts renewing in H2; launch expansion playbooks for accounts at usage thresholds; run first quarterly health score model review.",
  },
  {
    month: "Month 6",
    title: "Mid-Year CS Performance Review",
    description: "Review NRR, GRR, time-to-value, QBR completion rate, and health score distribution vs. baseline; identify churn patterns from H1 churned accounts; adjust CS capacity model for H2.",
  },
  {
    month: "Month 7–9",
    title: "H2 Renewal Push & Executive Relationship Deepening",
    description: "Execute H2 renewal calendar; run executive sponsor cadence for top 20 accounts; complete second round of QBRs; run CSM performance reviews against portfolio health metrics.",
  },
  {
    month: "Month 10–12",
    title: "Annual CS Review & Next-Year Capacity Planning",
    description: "Present annual CS program review (NRR, GRR, QBR coverage, onboarding graduation rate, expansion pipeline); calibrate health score model; plan next-year CSM headcount and segmentation.",
  },
]

const kpis = [
  {
    metric: "Net Revenue Retention",
    target: "≥ 110%",
    description: "Net revenue retained from the existing customer base including expansion — below 100% means existing customers are shrinking the business; 110%+ enables growth without net new logo acquisition.",
  },
  {
    metric: "Gross Revenue Retention",
    target: "≥ 90%",
    description: "Revenue retained from existing customers excluding expansion — below 85% GRR indicates fundamental product-market fit or onboarding failure; industry median for B2B SaaS is 87%.",
  },
  {
    metric: "Onboarding Graduation Rate",
    target: "≥ 85% by day 90",
    description: "Percentage of new customers completing defined onboarding milestones within 90 days — below 70% predicts first-year churn above 15% regardless of product quality.",
  },
  {
    metric: "QBR Completion Rate",
    target: "≥ 90% of Tier 1+2",
    description: "Percentage of Tier 1 and Tier 2 accounts receiving completed QBR within schedule — below 75% indicates CS team capacity issues or account engagement problems preceding churn.",
  },
  {
    metric: "At-Risk Intervention Rate",
    target: "≥ 80% contacted within 48h",
    description: "Percentage of accounts triggering churn risk alerts that receive CSM contact within 48 hours — below 60% means at-risk accounts are identified but not acted on, making health scoring theater.",
  },
  {
    metric: "Expansion Pipeline Coverage",
    target: "≥ 3× expansion quota",
    description: "Expansion pipeline value relative to expansion quota — below 2× coverage entering a quarter means CS team will miss expansion targets and NRR will decline.",
  },
]

const testimonial = {
  quote:
    "QBRs were ad-hoc, onboarding had no structure, and we identified churn risk when customers emailed to cancel. Momenties gave our CS team a calendar-driven operating model. Onboarding graduation rate went from 54% to 88%, QBR coverage hit 94% of Tier 1 accounts, and NRR improved from 96% to 114% in 18 months.",
  name: "Kemi A.",
  title: "VP Customer Success, Series B Enterprise SaaS",
}

export default function CustomerSuccessCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Customer Success Calendar"
        title="110%+ NRR. 90% QBR Coverage. Churn Identified Before It Happens."
        subtitle="A systematic customer success calendar with onboarding milestone cadences, proactive QBR scheduling, health score review cycles, churn risk intervention playbooks, and renewal and expansion programs that drive NRR above 110%."
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
            Four Systems That Build Customer Success Excellence
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
            Your 12-Month Customer Success Roadmap
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
            KPIs That Define Customer Success Maturity
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
