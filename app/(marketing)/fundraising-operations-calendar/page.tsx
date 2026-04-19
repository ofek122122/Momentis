import type { Metadata } from "next"
import { DollarSign, Users, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Fundraising Operations Calendar | Momenties",
  description: "Build a systematic fundraising operations calendar — investor pipeline management, LP reporting cadence, due diligence coordination, and close process management that helps GPs raise faster and maintain institutional LP relationships.",
}

const pillars = [
  {
    icon: DollarSign,
    title: "Investor Pipeline Management & Outreach Cadence",
    description:
      "Fundraising pipelines stall when GPs let warm relationships cool between meetings. Momenties maps a structured investor outreach cadence: quarterly update touchpoints for warm LPs, bi-annual portfolio performance briefings for cold prospects, and monthly personal notes to top-tier LP targets during the 18-month pre-fund-launch window. It tracks last-contacted dates across the full LP pipeline, surfaces stalling conversations before they expire, and queues follow-up tasks after every LP meeting within 24 hours.",
  },
  {
    icon: Users,
    title: "LP Reporting, Capital Call & Distribution Calendar",
    description:
      "LP relationships are maintained between funds through consistent, high-quality reporting. Momenties builds the full reporting calendar: quarterly LP reports (due 45 days after quarter end), annual audited financial statements, capital call notices (10-business-day advance notice), and distribution waterfall calculations. It reminds fund administrators of upcoming capital call windows, queues distribution calculations for review, and surfaces LP reporting deadlines against legal document requirements — ensuring no LP surprise ever comes from a missed communication.",
  },
  {
    icon: TrendingUp,
    title: "Due Diligence Coordination & Data Room Management",
    description:
      "LP due diligence processes take 3-6 months and require coordinated document delivery, reference calls, back-office reviews, and regulatory filings. Momenties tracks each LP&apos;s due diligence status, queues document updates as data room content ages, schedules reference calls with anchor LPs, and monitors DDQ completion rates against close timeline targets. Form ADV update windows, state blue sky filing deadlines, and placement agent disclosure requirements are all surfaced with sufficient lead time to avoid close delays.",
  },
  {
    icon: BarChart3,
    title: "Fund Close Process & Regulatory Filing Calendar",
    description:
      "Fund closes require precise sequencing: final LP commitment confirmations, subscription document review, legal condition precedent satisfaction, and first close capital call — all timed against SEC and state filing deadlines. Momenties builds reverse-engineered close calendars from target first close dates: subscription document distribution 6 weeks prior, legal review 4 weeks prior, SEC Form D filing within 15 days of first sale, and state notice filings per LP jurisdiction. Second and final closes are pre-scheduled against fund documents.",
  },
]

const timeline = [
  {
    month: "Month 1–6 (Pre-Launch)",
    title: "LP Relationship Warm-Up & Materials Development",
    description: "Reactivate LP relationships with portfolio updates; draft fund strategy document and tearsheet; complete fund terms modeling; engage placement agent or build direct LP outreach list.",
  },
  {
    month: "Month 7–9 (Soft Launch)",
    title: "Anchor LP Engagement & Data Room Launch",
    description: "Engage top 5-10 anchor LP targets; share strategy document and PPM draft; launch data room; begin DDQ response process with lead LPs; schedule due diligence reference calls.",
  },
  {
    month: "Month 10–12 (Active Fundraise)",
    title: "Broad LP Outreach & Pipeline Acceleration",
    description: "Launch broad LP outreach; track pipeline weekly in Momenties; execute LP meeting cadence; finalize legal documents; build subscription document workflow; target first close in Month 12.",
  },
  {
    month: "Month 13–15 (Post-First Close)",
    title: "Second Close Push & Portfolio Deployment",
    description: "Pursue second close commitments; deploy first close capital; send quarterly LP update demonstrating active deployment; schedule third-party portfolio valuation for next quarterly report.",
  },
  {
    month: "Month 16–18 (Final Close)",
    title: "Final Close & Fund Administration Launch",
    description: "Execute final close; complete all SEC and state regulatory filings; launch full LP reporting cycle; transition LP relationship management from fundraising mode to ongoing portfolio management.",
  },
  {
    month: "Ongoing",
    title: "LP Reporting & Next Fund Preparation",
    description: "Execute quarterly LP reports, annual audits, capital calls, and distributions; begin building next fund LP pipeline 18 months before anticipated launch; maintain co-investment relationship cadence.",
  },
]

const kpis = [
  {
    metric: "LP Meeting-to-Commitment Rate",
    target: "≥ 15%",
    description: "Percentage of first LP meetings that result in a signed commitment — below 10% signals pitch deck quality, market fit, or relationship pre-work issues.",
  },
  {
    metric: "Fundraise Cycle Duration",
    target: "≤ 18 months",
    description: "Months from first LP meeting to final close — above 24 months signals LP conviction issues, fund thesis weakness, or GP track record gaps that outreach cadence cannot solve.",
  },
  {
    metric: "LP Reporting On-Time Rate",
    target: "100% by deadline",
    description: "Percentage of quarterly LP reports delivered within the contractual window — late reporting is the single highest-impact LP relationship damage signal between fund raises.",
  },
  {
    metric: "LP Pipeline Coverage",
    target: "3× target fund size",
    description: "Total soft commitments and warm conversations as a multiple of target fund size — below 2× at 6 months post-launch signals fundraising risk requiring strategy adjustment.",
  },
  {
    metric: "Data Room Completion Rate",
    target: "≥ 85% of committed LPs",
    description: "Percentage of committed LPs who completed full data room review — below 70% creates legal risk exposure and indicates due diligence process gaps.",
  },
  {
    metric: "LP Re-Up Rate",
    target: "≥ 70% from prior fund",
    description: "Percentage of prior fund LPs who commit to the current fund — the single strongest signal of GP execution quality and LP relationship management effectiveness.",
  },
]

const testimonial = {
  quote:
    "We raised Fund II in 14 months vs. 24 months for Fund I. The difference was Momenties — structured LP outreach cadence, 24-hour follow-up queues after every meeting, and a reporting calendar that kept our Fund I LPs engaged during the raise. Our re-up rate went from 58% to 82% and three of our Fund II anchor LPs came from warm introductions by Fund I LPs we&apos;d maintained systematically.",
  name: "Olumide A.",
  title: "Managing Partner, Early Stage VC",
}

export default function FundraisingOperationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Fundraising Operations Calendar"
        title="Raise Your Next Fund 40% Faster with a Structured LP Calendar"
        subtitle="A systematic fundraising operations calendar with LP outreach cadences, due diligence coordination, reporting schedules, and close process management that turns relationship maintenance into institutional LP commitments."
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
            Four Systems That Accelerate Fund Closes
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

      {/* Fundraise Timeline */}
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
            The 18-Month Fund Raise Calendar
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {timeline.map((t, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "160px 1fr",
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
            KPIs That Define Fundraising Excellence
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
