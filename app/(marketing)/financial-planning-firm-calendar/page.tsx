import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Financial Planning Firm Calendar | Momenties",
  description: "Momenties gives financial planning firms an AI-powered calendar that tracks CFP renewal, Series 65/66 license maintenance, ADV annual amendment, Form CRS filing, client review cycles, and FINRA CE requirements — all in one place.",
}

const pillars = [
  {
    icon: Target,
    title: "CFP, CFA & Advisor License Renewal Calendar",
    description:
      "Financial planning firms managing advisor credential cycles track CFP (Certified Financial Planner, CFP Board, biennial renewal with 30 CE hours including 2 ethics hours) for fee-only and fee-based planners, CFA (Chartered Financial Analyst, CFA Institute, annual professional development program — 20 CPD hours per year), CPA/PFS (Personal Financial Specialist, AICPA, 3-year renewal, 60 CE hours) for CPA-based planning firms, ChFC (Chartered Financial Consultant, The American College, 2-year renewal, 30 CE hours), and CPWA (Certified Private Wealth Advisor, IMCA, 2-year renewal, 40 CE hours) for high-net-worth advisory practices. Securities license maintenance: Series 65 (Uniform Investment Adviser Law Exam) and Series 66 state renewal (no periodic CE requirement but state RIA registration annual renewal required), Series 7 (FINRA, biennial Regulatory Element CE — FinRA CE online modules), and Series 24 (General Securities Principal, biennial CE). FINRA Registration Depository (CRD): annual broker-dealer U4 amendment verification for all registered representatives. State RIA (Registered Investment Adviser) license renewal: annual state ADV filing in all registered states. Insurance licenses: annual life and health insurance CE (15-24 hours per state depending on state DOI requirements) for licensed financial planners offering insurance products. Momenties tracks all credential timelines concurrently.",
  },
  {
    icon: RefreshCw,
    title: "SEC/FINRA Annual Filings & Regulatory Calendar",
    description:
      "Financial planning firms registered with the SEC as Registered Investment Advisers (RIAs) maintain: annual Form ADV Part 1 and Part 2 amendment (must be filed annually within 90 days of fiscal year end — most firms file by March 31 for December 31 FYE), annual Form CRS (Customer Relationship Summary) review and update (annually and within 30 days of any material changes — SEC-registered RIA requirement since June 2020), and annual SEC investment adviser eligibility threshold review (SEC-registered if AUM ≥ $100M — annual review to verify continued eligibility). State-registered RIAs maintain: annual state ADV filing in each state where registered or where client threshold is met (15+ clients in a state for most states), annual state investment adviser license renewal fees by state deadline. FINRA-registered broker-dealers maintain: annual report to FINRA (BD Annual Report, FOCUS report quarterly), annual FINRA renewal (CRD system — annual renewal by December 31), and annual U4 and U5 disclosure update verification. Annual FINRA CE Regulatory Element completion for all registered representatives (online modules — biennial required, annual recommended). Annual Form 13F (quarterly — institutional investment managers with $100M+ AUM), annual Form PF (quarterly or annual for private fund advisers). Anti-money laundering: annual AML program review and training documentation for FINRA member firms. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "Client Review Cycles, ADV Delivery & Fiduciary Quality Calendar",
    description:
      "Financial planning firms managing fiduciary compliance maintain: annual Form ADV Part 2 (brochure) delivery to all clients (must deliver within 120 days of fiscal year end for annual update — most firms deliver by April 30) with written acknowledgment documentation, annual Form CRS delivery to new clients within 30 days of becoming a client, and annual privacy notice delivery (Gramm-Leach-Bliley Act initial and annual notice — opt-out documentation). Client review cycle compliance: annual comprehensive financial plan review for all AUM clients (fiduciary duty standard — annual review documented), quarterly investment performance review for all actively managed accounts, and semi-annual rebalancing documentation for portfolio accounts with drift triggers. Suitability and KYC: annual client risk tolerance questionnaire re-administration (industry best practice — document any tolerance changes), annual Know Your Customer (KYC) documentation update for all clients, and annual AML client due diligence refresh (FinCEN CDD rule — beneficial ownership re-verification for business accounts). Estate plan annual review: annual beneficiary designation review reminder for all clients (ERISA and estate planning best practice). Insurance policy review: annual life insurance in-force illustration update for clients with permanent life policies. Tax planning: annual tax projection and Roth conversion analysis (Q3/Q4 — before December 31 deadline). Momenties tracks all fiduciary compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "E&O Insurance, Cybersecurity & Firm Business Calendar",
    description:
      "Financial planning firms managing business compliance maintain: annual investment adviser professional liability (E&O) insurance renewal (60-90 days advance — coverage gaps create SEC disclosure obligation under ADV Part 2), annual cyber liability insurance renewal (SEC cybersecurity rule — annual renewal with coverage review for client PII protection obligations), and annual fidelity bond renewal (ERISA requirement for plan fiduciaries managing retirement plan assets — bond amount ≥ 10% of plan assets). Cybersecurity compliance: annual SEC Regulation S-P safeguards rule compliance review (customer financial information security — annual written policy update), annual vendor cybersecurity due diligence review (third-party service provider risk assessment), and annual cybersecurity incident response plan tabletop exercise. Annual SEC-required books and records inspection readiness: annual client files and account documentation completeness audit, and annual trading records and order ticket documentation audit. ERISA compliance for 401(k) plan advisers: annual 408(b)(2) disclosure review and update for plan sponsors, annual 404(a)(5) participant disclosure delivery for plan participants, and annual ERISA plan audit coordination (July 31 Form 5500 deadline for calendar year plans). Annual business continuity plan review and update (FINRA Rule 4370 / SEC rule). Annual FINRA Annual Compliance Meeting documentation. Momenties consolidates all.",
  },
]

const timeline = [
  {
    month: "January – February",
    title: "ADV Annual Amendment & CFP CE Audit",
    tasks: [
      "Form ADV Part 1 and Part 2 annual amendment — file within 90 days of fiscal year end (March 31 for December 31 FYE)",
      "CFP biennial CE audit — verify 30 hours with 2 ethics hours for advisors due this cycle",
      "Annual FINRA U4 and U5 disclosure amendment verification for all registered reps",
      "Annual FINRA renewal (CRD system) — December 31 prior year completion verification",
      "Annual AML program review and training documentation for FINRA member firms",
    ],
  },
  {
    month: "March – April",
    title: "ADV Delivery & Form CRS Update",
    tasks: [
      "March 31: Form ADV annual amendment filing deadline for December 31 FYE firms",
      "April 30: Form ADV Part 2 brochure delivery to all existing clients with written acknowledgment",
      "Annual Form CRS review and update (within 30 days of any material change, and annually)",
      "Annual Gramm-Leach-Bliley privacy notice delivery and opt-out documentation",
      "Annual client risk tolerance questionnaire re-administration for all AUM clients",
    ],
  },
  {
    month: "May – June",
    title: "E&O Renewal & ERISA Disclosures",
    tasks: [
      "Annual E&O professional liability insurance renewal — submit application 90 days before expiration",
      "Annual cyber liability insurance renewal — review coverage for client PII obligations",
      "Annual ERISA 408(b)(2) disclosure review and update for all 401(k) plan sponsor clients",
      "Annual ERISA 404(a)(5) participant disclosure delivery for plan participants",
      "Quarterly investment performance review documentation for all managed accounts",
    ],
  },
  {
    month: "July – August",
    title: "Form 5500 & Mid-Year Fiduciary Review",
    tasks: [
      "July 31: Form 5500 annual report deadline for calendar-year ERISA plan clients",
      "Annual fidelity bond renewal for ERISA plan fiduciary clients",
      "Annual KYC documentation update and beneficial ownership re-verification for business accounts",
      "Annual SEC cybersecurity incident response plan tabletop exercise",
      "Annual vendor cybersecurity due diligence review",
    ],
  },
  {
    month: "September – October",
    title: "Tax Planning Season & Insurance Review",
    tasks: [
      "Annual client tax projection and Roth conversion analysis — begin Q3 for December 31 deadline",
      "Annual life insurance in-force illustration update for clients with permanent life policies",
      "Annual beneficiary designation review reminder for all clients",
      "FINRA Annual Compliance Meeting documentation for FINRA-registered firms",
      "Annual Reg S-P safeguards rule compliance review — written policy update",
    ],
  },
  {
    month: "November – December",
    title: "Year-End CE Completion & Rebalancing",
    tasks: [
      "Year-end portfolio rebalancing documentation for all accounts with drift triggers",
      "CFP/CFA/ChFC CE completion sprint for biennial renewals due Q1",
      "FINRA CE Regulatory Element biennial completion audit for all registered reps",
      "Annual books and records client files completeness audit",
      "Annual business continuity plan review and update",
    ],
  },
]

const kpis = [
  {
    metric: "ADV Annual Amendment On-Time Rate",
    target: "Filed within 90 days of FYE",
    description: "Late ADV filings trigger SEC enforcement action — for December 31 FYE firms, March 31 is the hard deadline.",
  },
  {
    metric: "Form ADV Part 2 Delivery Compliance",
    target: "100% of clients with acknowledgment by April 30",
    description: "Failure to deliver the annual ADV brochure is a fiduciary violation — documentation of delivery and acknowledgment is required.",
  },
  {
    metric: "CFP CE Biennial Completion Rate",
    target: "30 hours including 2 ethics — 100% on time",
    description: "CFP certification lapses trigger public disclosure on the CFP Board website and immediate client notification obligation.",
  },
  {
    metric: "Annual Client Review Completion Rate",
    target: "≥ 99% of AUM clients reviewed annually",
    description: "Missing annual client reviews are the leading source of FINRA arbitration claims for financial planning firms.",
  },
  {
    metric: "E&O Insurance Renewal Lead Time",
    target: "Application submitted 90 days early",
    description: "E&O coverage gaps require immediate SEC ADV Part 2 disclosure to all clients — coverage continuity is critical.",
  },
  {
    metric: "AML Training Annual Completion",
    target: "100% of staff by December 31",
    description: "Annual AML training documentation is required under FinCEN CDD rules for FINRA member firms — gaps trigger examination findings.",
  },
]

const testimonial = {
  quote:
    "Annual Form ADV Part 1 and Part 2 annual amendment March 31 deadline, annual Form ADV Part 2 brochure delivery to 186 clients with written acknowledgment documentation by April 30, annual Form CRS review and update, annual Gramm-Leach-Bliley privacy notice delivery, CFP biennial CE tracking for 6 CFP advisors on different renewal cycles, CFA annual 20-hour CPD tracking for 3 CFA charterholders, ChFC 2-year CE tracking for 2 advisors, FINRA CRD annual renewal by December 31, FINRA U4 and U5 annual disclosure verification for 4 registered reps, annual FINRA CE Regulatory Element completion for all registered reps, annual AML program review and training documentation, annual client risk tolerance questionnaire re-administration for 186 clients, annual KYC update and beneficial ownership re-verification for 48 business accounts, annual ERISA 408(b)(2) disclosure update for 24 plan sponsor clients, annual ERISA 404(a)(5) participant disclosure delivery, annual Form 5500 coordination for 24 calendar-year plans by July 31, annual fidelity bond renewal for ERISA clients, annual E&O renewal 90 days early, annual cyber liability renewal, annual Reg S-P safeguards policy update, annual cybersecurity tabletop exercise, annual vendor cybersecurity due diligence review, annual books and records audit, quarterly performance reviews for 186 clients, semi-annual rebalancing documentation, annual tax projection and Roth conversion analysis for all clients, and annual BCP review — all simultaneously. Momenties mapped every deadline.",
  name: "Adaeze FP.",
  title: "CFP, CFA, Managing Partner, 6-Advisor SEC-Registered RIA & Financial Planning Firm",
}

export default function FinancialPlanningFirmCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Financial Planning Firm Calendar"
        title="ADV Annual Amendment. Form CRS. CFP Renewal. One Calendar."
        subtitle="Momenties tracks Form ADV annual amendment 90-day deadline, ADV Part 2 brochure delivery to every client with acknowledgment, annual Form CRS review and update, CFP and CFA and ChFC CE biennial cycles, FINRA CRD annual renewal, annual AML training documentation, annual client risk tolerance re-administration, quarterly investment performance review documentation, annual ERISA 408(b)(2) disclosures, Form 5500 coordination, and annual E&O and cyber liability insurance renewal — so your financial planning firm never misses a regulatory deadline."
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
            Four Calendar Pillars for Financial Planning Firm Compliance
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
        <section style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Your Financial Planning Firm Compliance Calendar
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {timeline.map((phase, idx) => (
              <div
                key={phase.month}
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 0,
                  borderTop: idx === 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  style={{
                    padding: "24px 20px",
                    borderRight: "1px solid rgba(255,255,255,0.07)",
                    background: "#0e0e12",
                  }}
                >
                  <p style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.85rem", marginBottom: 4 }}>
                    {phase.month}
                  </p>
                  <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.95rem", lineHeight: 1.4 }}>
                    {phase.title}
                  </p>
                </div>
                <div style={{ padding: "24px 28px", background: "#0a0a0d" }}>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {phase.tasks.map((task) => (
                      <li key={task} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "#c5a35c", marginTop: 2, flexShrink: 0 }}>›</span>
                        <span style={{ color: "rgba(240,236,227,0.7)", fontSize: "0.9rem", lineHeight: 1.55 }}>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Six KPIs Every Financial Planning Firm Should Track
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {kpis.map((k) => (
              <div
                key={k.metric}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "22px 24px",
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1.15rem", marginBottom: 4 }}>{k.target}</p>
                <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.95rem", marginBottom: 8 }}>{k.metric}</p>
                <p style={{ color: "rgba(240,236,227,0.6)", fontSize: "0.88rem", lineHeight: 1.6 }}>{k.description}</p>
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
