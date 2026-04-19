import type { Metadata } from "next"
import { DollarSign, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Accounts Receivable Calendar | Momenties",
  description: "Build a systematic accounts receivable calendar — collections follow-up cycles, DSO reduction programs, credit policy reviews, cash application efficiency, and AR aging analysis cadences that accelerate cash flow and reduce bad debt.",
}

const pillars = [
  {
    icon: DollarSign,
    title: "Collections Follow-Up Cycles & Dunning Calendar",
    description:
      "Accounts receivable balances without a disciplined collections follow-up calendar age into bad debt — invoices unpaid at 60 days have a 50% lower recovery rate than invoices followed up at 30 days. Momenties schedules automated dunning escalation sequences for every aging bucket: Day 15 first reminder, Day 30 second reminder with CFO copy trigger for invoices above $10K, Day 45 formal demand letter with payment plan offer, Day 60 credit hold notification, and Day 75 escalation to collection agency or legal. High-value customer accounts with payment history exceptions receive senior relationship manager outreach at Day 20 to prevent unnecessary credit damage. Payment promise tracking — capturing verbal and written commitments with follow-up dates — is managed with automated promise-broken alerts to collections teams.",
  },
  {
    icon: RefreshCw,
    title: "Credit Policy Reviews & Customer Credit Limit Calendar",
    description:
      "Credit limits set at customer onboarding become liabilities as customer financial health changes — a customer that earned Net 30 terms in 2021 may carry significant credit risk in 2024 without ongoing review. Momenties schedules quarterly credit limit reviews for customers above the top 20% spend tier, annual full credit policy reviews (updating scoring models, terms by customer segment, and concentration risk thresholds), and event-triggered reviews for customers with payment deterioration signals (3+ late payments in a quarter, bankruptcy filings, or public financial distress). New customer credit applications are approved within 48-hour SLA windows with credit scoring documentation. Credit hold and release workflows — including finance approval chains for customer credit holds that impact active orders — are managed with escalation timelines.",
  },
  {
    icon: TrendingUp,
    title: "DSO Reduction Programs & Cash Application Efficiency",
    description:
      "Days Sales Outstanding above 45 days in B2B environments signals collections process failures — and every extra DSO day represents working capital tied up in receivables. Momenties schedules monthly DSO trend analysis (by customer segment, geography, and payment method), quarterly cash application efficiency reviews (identifying unapplied cash, short-payments, and remittance matching failures that delay cash posting), and semi-annual DSO improvement programs where root cause analysis drives process changes. Electronic payment adoption campaigns — migrating customers from check to ACH/wire — are calendared quarterly with adoption rate targets. Early payment discount programs (offering 1-2% discounts for Net 7 payment) are reviewed semi-annually for ROI against DSO improvement. Momenties tracks DSO trends against industry benchmarks.",
  },
  {
    icon: BarChart3,
    title: "AR Aging Reviews & Bad Debt Reserve Calendar",
    description:
      "AR aging analysis without a governance cadence means finance makes bad debt reserve decisions on stale data — and bad debt reserves that lag actual collectability distort financial statements. Momenties schedules weekly AR aging reviews for the collections team (focusing on 60-90 day buckets with owner assignments), monthly AR aging reports for CFO and finance leadership (comparing current period to prior year by customer and segment), and quarterly bad debt reserve adequacy reviews where write-off decisions are documented and reserve percentages are updated based on collection experience. Annual AR audit preparation — supporting external auditor confirmations, allowance for doubtful accounts documentation, and AR balance testing — is calendared 60 days before fiscal year-end close. Customer dispute resolution tracking (billing errors, price discrepancies, short-payments) is managed with resolution SLA timelines.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "AR Audit & Collections Process Architecture",
    description: "Audit current DSO, aging bucket distribution, and bad debt write-off rate; map all customer payment terms; build structured dunning escalation sequence; establish credit limit review calendar; implement AR aging dashboard; review cash application process for unapplied cash.",
  },
  {
    month: "Month 3",
    title: "Dunning Launch & Credit Policy Implementation",
    description: "Launch structured dunning sequence for all accounts; implement credit limit review triggers; run first quarterly credit limit audit for top-spend customers; establish payment promise tracking; run first cash application efficiency review.",
  },
  {
    month: "Month 4–5",
    title: "DSO Improvement Program & Electronic Payment Campaign",
    description: "Run first quarterly DSO trend analysis; launch electronic payment migration campaign; establish monthly AR aging CFO reports; complete first quarterly bad debt reserve review; implement dispute resolution tracking system.",
  },
  {
    month: "Month 6",
    title: "Mid-Year AR Performance Review",
    description: "Review mid-year DSO trend vs. plan; compare bad debt write-offs to prior year; present collections efficiency metrics (dunning response rates, payment promise fulfillment); review credit policy for customers with payment deterioration; assess cash application efficiency gains.",
  },
  {
    month: "Month 7–9",
    title: "Annual Credit Policy Review & DSO Benchmark Analysis",
    description: "Run annual full credit policy review; update credit scoring model with payment history data; run semi-annual early payment discount ROI review; complete DSO benchmarking against industry peers; review concentration risk in top 10 customer AR balances.",
  },
  {
    month: "Month 10–12",
    title: "Year-End AR Close & Annual Review",
    description: "Run year-end AR aging analysis for bad debt reserve documentation; prepare AR confirmation letters for external audit; present annual AR program review (DSO improvement, bad debt reduction, collections efficiency); plan next-year collections team targets and credit policy updates.",
  },
]

const kpis = [
  {
    metric: "Days Sales Outstanding (DSO)",
    target: "≤ 40 days",
    description: "Average days from invoice date to cash collection — above 50 days in B2B SaaS indicates collections process failure; every 5-day DSO reduction frees approximately 1.4% of annual revenue in working capital.",
  },
  {
    metric: "Collection Effectiveness Index",
    target: "≥ 85% CEI",
    description: "Percentage of AR balance that was collectible in the period that was actually collected — below 75% CEI indicates dunning cadence failures or credit policy problems; best-in-class B2B teams achieve 90%+ CEI consistently.",
  },
  {
    metric: "Bad Debt Write-Off Rate",
    target: "≤ 0.5% of revenue",
    description: "Annual bad debt write-offs as a percentage of total revenue — above 1% signals credit approval process failures or collections escalation breakdown; most of bad debt above 0.5% is preventable with proactive collections.",
  },
  {
    metric: "Invoice Dispute Resolution Time",
    target: "≤ 5 business days",
    description: "Average time from customer dispute submission to resolution — above 10 days delays payment and damages customer relationships; unresolved disputes are the leading cause of intentional payment holds among otherwise creditworthy customers.",
  },
  {
    metric: "Electronic Payment Adoption",
    target: "≥ 70% of AR by volume",
    description: "Percentage of collected AR via ACH/wire versus check — below 50% electronic adoption creates cash application delays, float loss, and manual reconciliation overhead; each check payment adds 2-5 days to average cash posting time.",
  },
  {
    metric: "AR Aging 90+ Day Percentage",
    target: "≤ 5% of total AR",
    description: "Percentage of total AR balance over 90 days past due — above 10% indicates structural collections process failure; 90+ day AR has approximately 30% lower recovery rate and requires dramatically more collections effort per dollar recovered.",
  },
]

const testimonial = {
  quote:
    "DSO was running at 67 days, 12% of AR was over 90 days, and our dunning process was a spreadsheet someone updated when they remembered. We had $2.1M in unapplied cash sitting in a suspense account. Momenties gave us a structured AR calendar. DSO dropped to 38 days in two quarters, we cleared the unapplied cash backlog, and bad debt write-offs fell by 60%.",
  name: "Adaeze I.",
  title: "VP Finance & Controller, Series B Enterprise SaaS",
}

export default function AccountsReceivableCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Accounts Receivable Calendar"
        title="38-Day DSO. 85%+ CEI. Bad Debt Under 0.5%."
        subtitle="A systematic accounts receivable calendar with structured dunning cycles, monthly credit limit reviews, DSO reduction programs, cash application efficiency cadences, and quarterly AR aging governance that accelerates cash flow and eliminates preventable bad debt."
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
            Four Systems That Build AR Excellence
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
            Your 12-Month AR Optimization Roadmap
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
            KPIs That Define AR Program Maturity
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
