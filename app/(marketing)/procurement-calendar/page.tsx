import type { Metadata } from "next"
import { FileText, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Procurement Calendar | Momenties",
  description: "Build a systematic procurement calendar — vendor contract renewal tracking, RFP and RFI cycles, supplier performance review cadence, and spend management reviews that prevent surprise renewals and optimize total cost of ownership.",
}

const pillars = [
  {
    icon: FileText,
    title: "Vendor Contract Renewal & Auto-Renew Prevention",
    description:
      "Auto-renewing vendor contracts are silent budget killers — teams discover 12-month extensions only after they&apos;ve locked. Momenties maps every vendor contract expiration date with 90/60/30-day alerts, routes renewal decisions to the right budget owner, and triggers RFP processes for strategic vendor categories 6 months before expiration. The result: procurement teams negotiate from strength, not urgency — and CFOs stop approving surprise multi-year renewals for underused platforms.",
  },
  {
    icon: RefreshCw,
    title: "RFP/RFI Cycle Management & Vendor Selection",
    description:
      "Competitive sourcing for major vendor categories — SaaS platforms, professional services, logistics — requires 12-16 week RFP cycles to run properly. Momenties builds reverse-engineered RFP calendars from need-by dates: requirements gathering 12 weeks prior, vendor shortlist 10 weeks prior, proposal submission 7 weeks prior, evaluation and scoring 5 weeks prior, final selection 3 weeks prior, and contract execution 1 week prior. Strategic sourcing reviews for vendor categories with >$50K annual spend are scheduled annually in Momenties.",
  },
  {
    icon: TrendingUp,
    title: "Supplier Performance Review & SLA Compliance Cadence",
    description:
      "Supplier relationships deteriorate when performance reviews happen reactively — after an outage, a billing dispute, or a missed SLA. Momenties schedules quarterly business reviews (QBRs) for Tier 1 suppliers, bi-annual reviews for Tier 2, and annual reviews for Tier 3 — with pre-populated SLA scorecard templates and trend data from the prior period. CSAT surveys are distributed to internal stakeholders 2 weeks before each review, giving procurement the voice-of-customer data to have credible performance conversations.",
  },
  {
    icon: BarChart3,
    title: "Spend Management Reviews & Category Optimization",
    description:
      "Spend visibility requires a structured review cadence — monthly P-card and software subscription audits, quarterly category spend analysis, and annual total cost of ownership reviews per major vendor category. Momenties schedules every spend review with the relevant budget owner, surfaces duplicate vendor contracts and category overlap, and triggers category strategy reviews when market pricing shifts significantly. Annual procurement ROI reporting (cost savings + cost avoidance) is scheduled in Q4 with input collection starting in October.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Contract Inventory Audit & Renewal Calendar Build",
    description: "Audit all vendor contracts for expiration dates, auto-renew clauses, and spend thresholds; load all contracts into Momenties with 90/60/30-day renewal alerts; identify high-risk auto-renewals in the next 6 months.",
  },
  {
    month: "Month 3–4",
    title: "Supplier Segmentation & Tier Assignment",
    description: "Classify vendor portfolio into Tier 1 (strategic), Tier 2 (preferred), Tier 3 (approved) based on spend, criticality, and switchability; establish review cadence per tier; assign supplier relationship owners.",
  },
  {
    month: "Month 5–6",
    title: "RFP Calendar Launch & Category Strategy Reviews",
    description: "Identify vendor categories requiring competitive re-sourcing in next 12 months; build RFP project calendars with procurement and business owners; complete first quarterly Tier 1 supplier performance reviews.",
  },
  {
    month: "Month 7–8",
    title: "Spend Audit & Category Optimization",
    description: "Run mid-year category spend analysis; identify duplicate vendors and consolidation opportunities; complete P-card and software subscription audit; present savings opportunities to CFO.",
  },
  {
    month: "Month 9–10",
    title: "Q4 Contract Renewal Preparation",
    description: "Activate 90-day alerts for all contracts expiring in Q1 of next year; run competitive benchmarking for strategic renewals; complete Tier 1 and Tier 2 supplier QBRs for H2.",
  },
  {
    month: "Month 11–12",
    title: "Annual Procurement Review & Next-Year Planning",
    description: "Present annual procurement ROI (cost savings, cost avoidance, spend under management growth); lock next-year RFP calendar; negotiate strategic vendor renewals; publish contract renewal calendar for all budget owners.",
  },
]

const kpis = [
  {
    metric: "Cost Savings vs. Target",
    target: "≥ 8% of managed spend",
    description: "Negotiated savings vs. prior contract or market benchmark — primary metric for justifying procurement team investment and demonstrating ROI to the CFO.",
  },
  {
    metric: "Contract Renewal On-Time Rate",
    target: "100% (no surprise renewals)",
    description: "Percentage of vendor contracts addressed before auto-renewal — any auto-renewal without a deliberate decision represents procurement process failure.",
  },
  {
    metric: "Spend Under Management",
    target: "≥ 80% of total spend",
    description: "Percentage of company spend flowing through procurement processes — below 60% signals rogue purchasing, maverick spend, and significant savings leakage.",
  },
  {
    metric: "Supplier QBR Completion Rate",
    target: "100% of Tier 1 quarterly",
    description: "Percentage of Tier 1 supplier quarterly business reviews completed on schedule — missed reviews lead to SLA degradation and missed renegotiation windows.",
  },
  {
    metric: "RFP Cycle Time",
    target: "≤ 12 weeks",
    description: "Average time from RFP launch to vendor selection — above 16 weeks creates project timeline risk and internal stakeholder frustration with procurement speed.",
  },
  {
    metric: "Cost Avoidance vs. Target",
    target: "≥ 5% of managed spend",
    description: "Spend prevented through competitive pressure, consolidation, or renegotiation vs. if prior terms had continued — often larger than cost savings, equally important for total procurement ROI.",
  },
]

const testimonial = {
  quote:
    "We had $4.2M in auto-renewing software contracts and no systematic process to catch them. Three renewals hit in a single quarter because no one had a 90-day alert. Momenties mapped every contract in the first month, caught two renewals before they locked, and we saved $340K by running competitive RFPs instead of accepting the renewal price. The tool paid for itself in 48 hours.",
  name: "Kolade T.",
  title: "Head of Procurement & Vendor Management, Series D SaaS",
}

export default function ProcurementCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Procurement Calendar"
        title="Never Miss a Contract Renewal. Never Pay the Auto-Renew Price."
        subtitle="A systematic procurement calendar with 90-day contract renewal alerts, RFP cycle management, quarterly supplier performance reviews, and spend audits that save money before it walks out the door."
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
            Four Systems That Systematize Procurement
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
            Your Annual Procurement Operations Calendar
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
            KPIs That Define Procurement Excellence
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
