import type { Metadata } from "next"
import { FileText, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Legal Operations Calendar | Momenties",
  description: "Build a systematic legal operations calendar — matter management reviews, outside counsel performance cadence, contract lifecycle management, compliance program reviews, and legal spend optimization that reduces outside counsel costs and improves GC efficiency.",
}

const pillars = [
  {
    icon: FileText,
    title: "Matter Management & Outside Counsel Performance Reviews",
    description:
      "Legal spend visibility requires a structured review cadence. Momenties schedules monthly matter budget vs. actual reviews for active litigation and significant transactions, quarterly outside counsel performance evaluations (billing rate compliance, matter budget adherence, responsiveness), and annual outside counsel panel reviews where law firm relationships are formally assessed. Post-matter debriefs are scheduled within 30 days of matter close — capturing lessons learned while institutional memory is still fresh.",
  },
  {
    icon: RefreshCw,
    title: "Contract Lifecycle Management & Renewal Cadence",
    description:
      "High-volume contract teams need a calendar as much as a CLM system. Momenties maps standard contract SLAs (NDA 24-hour turnaround, MSA 5-business-day review, enterprise agreement 3-week redline cycle) and tracks compliance weekly. Contract renewal queues surface 90 days before expiration with business owner routing. Annual contract template refresh reviews ensure standard terms stay current with recent case law, regulatory updates, and lessons from recently negotiated agreements.",
  },
  {
    icon: TrendingUp,
    title: "Compliance Calendar & Regulatory Filing Deadlines",
    description:
      "GC offices responsible for corporate compliance must track a dense regulatory calendar: annual report and proxy statement deadlines, state annual report filings, employment law compliance training cycles, data privacy review schedules (annual GDPR/CCPA audit, DPA review), and industry-specific regulatory filings. Momenties maps every compliance deadline with owners assigned — surfacing SEC, state secretary of state, and regulatory filing dates 90 days in advance so legal teams respond to regulators, not to regulator notices.",
  },
  {
    icon: BarChart3,
    title: "Legal Budget Reviews & Value Delivery Reporting",
    description:
      "In-house legal teams face increasing pressure to demonstrate value beyond cost management. Momenties schedules quarterly legal spend vs. budget reviews, outside counsel value scorecard reviews, and annual legal team effectiveness surveys from internal business clients. Year-end legal value reports — matters handled, contracts executed, compliance programs maintained, litigation outcomes — are built quarterly throughout the year so the GC never scrambles for data when presenting to the board.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Legal Operations Audit & Matter Calendar Build",
    description: "Audit active matter portfolio and budget status; load all contract renewals and regulatory filing deadlines into Momenties; assign matter ownership and budget responsibility to all active engagements.",
  },
  {
    month: "Month 3–4",
    title: "Outside Counsel Panel Review & Billing Guidelines Refresh",
    description: "Conduct first quarterly outside counsel performance reviews; refresh billing guidelines and approved rate schedule; distribute updated billing compliance requirements to all panel firms.",
  },
  {
    month: "Month 5–6",
    title: "Contract Template Audit & Standard Terms Refresh",
    description: "Audit standard contract templates for legal currency; update NDA, MSA, and vendor agreement templates based on recent negotiations and case law; publish updated templates to self-service library.",
  },
  {
    month: "Month 7–8",
    title: "Compliance Calendar Review & Data Privacy Audit",
    description: "Complete mid-year compliance calendar review; run annual GDPR/CCPA data privacy audit; audit third-party DPA coverage across vendor portfolio; update compliance training calendar for H2.",
  },
  {
    month: "Month 9–10",
    title: "Budget Reforecast & Q4 Regulatory Planning",
    description: "Complete legal budget reforecast for full year; plan Q4 regulatory filing deadlines; initiate outside counsel rate negotiation for next year; begin annual employment law compliance training cycle.",
  },
  {
    month: "Month 11–12",
    title: "Annual Legal Review & Next-Year Budget Planning",
    description: "Present annual legal value report to board and leadership; complete next-year budget submission; negotiate outside counsel rates; publish next-year regulatory filing calendar to business stakeholders.",
  },
]

const kpis = [
  {
    metric: "Outside Counsel Spend vs. Budget",
    target: "Within ±10% per matter",
    description: "Matter-level budget adherence — persistent overruns signal budget estimation methodology issues or outside counsel scope management failures requiring performance conversation.",
  },
  {
    metric: "Contract Cycle Time",
    target: "NDA ≤ 24h, MSA ≤ 5 days",
    description: "Average time from contract request to executed document by contract type — above-SLA cycle times create business friction and indicate resourcing or prioritization issues.",
  },
  {
    metric: "Compliance Filing On-Time Rate",
    target: "100% by deadline",
    description: "Percentage of regulatory and compliance filings submitted before statutory deadlines — any late filing creates regulatory risk, potential fines, and reputational exposure.",
  },
  {
    metric: "Legal Spend per Revenue Dollar",
    target: "Track & reduce YoY",
    description: "Total legal spend (inside + outside) as a percentage of company revenue — industry benchmark for SaaS: 0.5-1.5%; above 2% signals legal cost management opportunity.",
  },
  {
    metric: "Internal Client NPS",
    target: "≥ 7 / 10",
    description: "Annual internal client satisfaction survey score from business stakeholders — tracks whether legal is a strategic partner or compliance bottleneck in the perception of the company.",
  },
  {
    metric: "Self-Service Contract Rate",
    target: "≥ 40% of standard contracts",
    description: "Percentage of standard contract types (NDAs, vendor agreements) completed via self-service template without attorney review — frees attorney capacity for high-value, non-standard work.",
  },
]

const testimonial = {
  quote:
    "Our GC was spending 40% of their time on operational legal management — billing reviews, contract follow-ups, compliance filing checklists. Momenties moved all of it onto a structured calendar with owner accountability. The GC now spends that 40% on strategic matters, our outside counsel spend dropped 22% in 12 months, and we&apos;ve had zero missed regulatory filings since launch.",
  name: "Amara A.",
  title: "Chief of Staff & Legal Operations Lead, Growth-Stage SaaS",
}

export default function LegalOperationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Legal Operations Calendar"
        title="Cut Outside Counsel Spend. Zero Missed Filings. One Calendar."
        subtitle="A systematic legal operations calendar with matter budget reviews, outside counsel performance cadence, compliance filing deadlines, and contract lifecycle management that frees GC bandwidth for strategic work."
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
            Four Systems That Make Legal Operations Proactive
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
            Your Annual Legal Operations Calendar
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
            KPIs That Define Legal Operations Maturity
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
