import type { Metadata } from "next"
import { DollarSign, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Accounts Payable Calendar | Momenties",
  description: "Build a systematic accounts payable calendar — payment run cycles, vendor statement reconciliation cadences, early payment discount capture programs, 1099 compliance schedules, and AP audit preparation rhythms that optimize cash flow and eliminate costly errors.",
}

const pillars = [
  {
    icon: DollarSign,
    title: "Payment Run Cycles & Cash Flow Optimization Calendar",
    description:
      "Payment runs without a disciplined calendar create cash flow waste — either paying early (leaving working capital on the table) or paying late (incurring late fees and damaging vendor relationships). Momenties schedules weekly payment run cycles aligned to net terms (Net 30 invoices batched for day 28-30 payment, Net 60 for day 57-60), bi-weekly check and ACH disbursement windows with bank cut-off time management, and monthly wire transfer batches for international vendor payments. Early payment discount capture (2/10 Net 30 terms) is managed with automated threshold alerts — capturing 2% discounts on early payment generates 36% annualized ROI on accelerated cash deployment.",
  },
  {
    icon: RefreshCw,
    title: "Vendor Statement Reconciliation & Invoice Exception Management",
    description:
      "Unreconciled vendor statements create hidden liabilities — credits not applied, duplicate payments not caught, and aging disputes that compound into audit findings. Momenties schedules monthly vendor statement reconciliation for top 50 vendors by spend, quarterly invoice exception reviews (PO-to-invoice mismatches, invoices without approved POs, duplicate invoice detection), and bi-annual vendor master data audits (identifying duplicate vendors, banking information changes, dormant vendor review). Three-way match exception management — triggered when invoice price or quantity deviates from PO or receipt — is managed with owner-assigned resolution tasks and escalation timelines before payment runs.",
  },
  {
    icon: TrendingUp,
    title: "1099 Compliance Calendar & Year-End Close Preparation",
    description:
      "1099-NEC and 1099-MISC compliance requires data collection throughout the year — not a January scramble. Momenties schedules monthly W-9 collection triggers for new vendors above the $600 reporting threshold, quarterly TIN validation runs to catch mismatched taxpayer identification before year-end, and a full 1099 year-end compliance calendar: November data collection audit, December 1099 draft review with finance, January 31 filing deadline (IRS and state), and February 28/March 31 extension deadlines for complex cases. State 1099 filing requirements — California, New York, and 8 other states with independent 1099 filing programs — are tracked with jurisdiction-specific deadlines.",
  },
  {
    icon: BarChart3,
    title: "AP Performance Reviews & Audit Readiness Calendar",
    description:
      "AP performance without a measurement cadence is invisible to finance leadership until something goes wrong. Momenties schedules monthly AP performance dashboards (invoices processed per day, payment accuracy rate, on-time payment rate, early payment discount capture rate), quarterly AP process audits (sampling invoices for authorization compliance, PO compliance rate, and duplicate payment detection), and annual AP program reviews for external audit preparation (Sox 404 walkthroughs for AP, internal audit sampling documentation, segregation of duties compliance review). Vendor ACH and banking change verification protocols — triggered any time banking information is modified — are managed with dual-approval workflows on a 48-hour escalation timeline.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "AP Process Audit & Payment Calendar Architecture",
    description: "Audit current payment run cadence, on-time payment rate, and discount capture; map all vendor payment terms; build structured payment run calendar; establish vendor statement reconciliation cadence; run W-9 audit for existing vendor master.",
  },
  {
    month: "Month 3",
    title: "Three-Way Match Implementation & Exception Workflow",
    description: "Implement automated three-way match exception alerts; establish PO-required policy for vendors above spend threshold; run first quarterly vendor statement reconciliation; launch duplicate vendor master clean-up.",
  },
  {
    month: "Month 4–5",
    title: "1099 Compliance Program Launch & TIN Validation",
    description: "Run TIN validation batch for all vendors above $600 YTD; collect missing W-9s; implement new vendor W-9 collection trigger; complete first quarterly invoice exception review.",
  },
  {
    month: "Month 6",
    title: "Mid-Year AP Performance Review & Audit Preparation",
    description: "Review AP metrics (on-time payment, discount capture, invoice processing time); run mid-year vendor master audit; prepare AP process documentation for internal audit cycle; assess Sox 404 AP control compliance.",
  },
  {
    month: "Month 7–9",
    title: "Vendor Reconciliation Sprint & Banking Change Audit",
    description: "Run comprehensive vendor statement reconciliation for top 50 vendors; audit all banking information changes since January with dual-approval verification; begin 1099 November data collection preparation.",
  },
  {
    month: "Month 10–12",
    title: "1099 Year-End Close & Annual AP Review",
    description: "Execute 1099 compliance calendar (November audit, December draft, January filing); run year-end AP accrual process; present annual AP program review (discount capture ROI, payment accuracy, processing efficiency); plan next-year AP optimization.",
  },
]

const kpis = [
  {
    metric: "On-Time Payment Rate",
    target: "≥ 98% within net terms",
    description: "Percentage of invoices paid within contracted payment terms — below 95% creates late fee exposure and damages vendor relationship NPS; above 99% with early payment captures discount ROI.",
  },
  {
    metric: "Early Payment Discount Capture",
    target: "≥ 80% of eligible discounts",
    description: "Percentage of available early payment discounts captured — 2/10 Net 30 discounts represent 36% annualized ROI; below 50% capture rate means AP timing is leaving significant cash benefit uncaptured.",
  },
  {
    metric: "Invoice Processing Time",
    target: "≤ 3 business days receipt-to-approval",
    description: "Average time from invoice receipt to approval for payment — above 5 days creates payment timing risk and reduces discount capture window to zero for 2/10 Net 30 terms.",
  },
  {
    metric: "1099 Filing Accuracy",
    target: "Zero B-notices from IRS",
    description: "Percentage of 1099 filings without IRS B-notices (incorrect TIN) — any B-notices require costly follow-up withholding; above 2% B-notice rate signals W-9 collection process failure.",
  },
  {
    metric: "Duplicate Payment Rate",
    target: "≤ 0.1% of invoices",
    description: "Percentage of invoices resulting in duplicate payments — above 0.5% indicates three-way match or invoice numbering process failures; duplicate payments typically take 6-12 months to recover from vendors.",
  },
  {
    metric: "Vendor Master Data Accuracy",
    target: "≥ 99% valid records",
    description: "Percentage of active vendor master records with complete, verified banking information and current W-9 — below 95% accuracy creates 1099 compliance risk and ACH payment failure exposure.",
  },
]

const testimonial = {
  quote:
    "Our AP team ran on intuition — payment runs happened when someone remembered, 1099s were a January crisis every year, and we discovered a $180K duplicate payment in an audit. Momenties gave us a structured AP calendar. We&apos;re capturing 89% of early payment discounts, haven&apos;t had a duplicate payment in 18 months, and our 1099 filing was done in January 15th for the first time.",
  name: "Ngozi A.",
  title: "Corporate Controller, Series B Manufacturing",
}

export default function AccountsPayableCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Accounts Payable Calendar"
        title="98% On-Time Payments. Zero Duplicates. 1099s Filed on January 31st."
        subtitle="A systematic accounts payable calendar with weekly payment run cycles, monthly vendor statement reconciliation, early payment discount capture programs, 1099 compliance schedules, and AP audit preparation cadences that optimize cash flow and eliminate costly errors."
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
            Four Systems That Build AP Excellence
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
            Your 12-Month AP Optimization Roadmap
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
            KPIs That Define AP Program Maturity
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
