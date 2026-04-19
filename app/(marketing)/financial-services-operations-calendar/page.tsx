import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Financial Services Operations Calendar | Momenties",
  description: "Momenties helps financial services operations leaders track regulatory filing deadlines, exam cycles, model validation reviews, audit schedules, and compliance training calendars in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Regulatory Filing Deadlines, FINRA/SEC Reporting & Exam Cycle Calendar",
    description:
      "Financial services compliance without structured filing calendars generates regulatory sanctions — firms that miss SEC or FINRA filing deadlines face penalties averaging $500,000 per violation for broker-dealers and $250,000 for investment advisers. Broker-dealer regulatory filings: FOCUS Report (Financial and Operational Combined Uniform Single) monthly (Form X-17A-5, Part II) and quarterly (Part IIA) via FINRA, SIPC annual assessment, and net capital computation annual audit. Investment adviser regulatory filings: Form ADV annual amendment (within 90 days of fiscal year end), Form ADV Part 2A and 2B annual update and delivery to clients, Form PF annual (for large advisers — within 120 days of fiscal year end), and Form CRS (Customer Relationship Summary) annual review and delivery. SEC examination preparation: OCIE examination readiness review (annual), compliance manual annual update and board approval, best execution semi-annual review, and annual compliance meeting documentation. FINRA examination calendar: FINRA annual report review, OSJ annual inspection, and branch office examination schedule. Bank regulatory examination: CAMELS rating preparation (OCC/Federal Reserve/FDIC annual exam cycle), BSA/AML program annual independent testing, and CRA (Community Reinvestment Act) annual self-assessment. Momenties manages every regulatory deadline.",
  },
  {
    icon: RefreshCw,
    title: "Model Risk Management, Stress Testing & Risk Governance Calendar",
    description:
      "Model risk without structured review calendars accumulates silently until examiner challenge — SR 11-7 guidance requires annual model validation for all models in use, with high-risk models validated at least annually and low-risk models at least every 3 years. Model validation calendar: credit risk models (annual validation), market risk VaR models (annual), algorithmic trading models (annual), CECL/ALLL loan loss models (quarterly backtesting, annual full validation), and DFAST stress test models (annual for banks with assets ≥$10B). Stress testing calendar: DFAST annual stress test submission (December 5 for banks with $100B-$250B in assets), internal capital stress testing quarterly, liquidity stress testing (LCR daily, NSFR monthly), and interest rate risk stress testing quarterly. ALCO (Asset Liability Committee) governance: monthly ALCO meetings with interest rate risk reporting, quarterly balance sheet review, and annual ALCO policy review. Market risk governance: VaR limit utilization monthly reporting, back-testing quarterly, and risk appetite statement annual review and board approval. Operational risk: annual RCSA (Risk and Control Self-Assessment), quarterly risk event reporting, and annual op risk scenario analysis. Momenties schedules every risk governance milestone.",
  },
  {
    icon: TrendingUp,
    title: "Internal Audit Plan, SOX Compliance & Third-Party Risk Calendar",
    description:
      "Internal audit without structured annual plans misses coverage of high-risk areas — financial services firms subject to SOX require quarterly CEO/CFO certifications with management review cycles that compound if not managed proactively. SOX compliance calendar: quarterly disclosure controls testing, quarterly management assessment of ICFR (Internal Controls over Financial Reporting), annual PCAOB external auditor review of ICFR, annual SOX scoping and risk assessment, and management response to findings (30 days from report issuance). Internal audit plan: annual audit universe risk ranking (September-October for calendar year), audit plan board approval (November-December), Q1-Q4 audit execution per plan, and audit committee quarterly reporting. Vendor/third-party risk management: annual vendor risk tier assessment, critical vendor business continuity testing (annual), vendor contract renewal pipeline (60-90 day advance notification), and fourth-party risk assessment annual update. Cybersecurity and technology audit: annual penetration testing, SOC 2 Type II audit (annual certification cycle), cloud provider annual review, and FFIEC cybersecurity assessment semi-annual update. BCBS 239 data governance: annual data quality assessment and board reporting. Momenties consolidates the full audit and compliance calendar.",
  },
  {
    icon: BarChart3,
    title: "AML/KYC Review Cycles, BSA Compliance & Financial Crimes Calendar",
    description:
      "BSA/AML programs without structured review calendars fail to satisfy FinCEN's four pillars of compliance — firms that fail BSA independent testing or fail to file timely SARs face OCC enforcement actions averaging $1.2M per violation in 2024. AML program review calendar: AML risk assessment annual update (by October for calendar year firms), independent BSA/AML program testing (annual, by independent auditor), and AML training annual completion (all employees — documentation of 100% completion required). SAR and CTR compliance: SAR filing (30 days from detection of suspicious activity, 60 days if no suspect identified), CTR filing (within 15 days of transaction), and SAR quality review quarterly. KYC/CDD review calendar: enhanced due diligence (EDD) customer re-review (high-risk customers: annual; medium-risk: every 2-3 years; low-risk: every 3-5 years), beneficial ownership certification renewal (annual or on material change), and PEP (Politically Exposed Person) screening monthly refresh. OFAC screening calendar: customer and transaction screening daily, watchlist update monitoring (OFAC SDN list updated irregularly — subscription alert required), and annual OFAC risk assessment. FinCEN beneficial ownership reporting: Corporate Transparency Act compliance — annual verification that current BOI filings are accurate. Momenties tracks all financial crimes compliance cycles.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Regulatory Filing Season & Annual Audit Launch",
    description: "Submit Form ADV annual amendment (within 90 days of 12/31 fiscal year end). Deliver Form ADV Part 2 to clients. File SIPC annual assessment. Submit DFAST stress test (December 5 deadline — final review). Launch Q1 internal audit engagements. Complete annual AML training documentation. Submit January FOCUS Report by 17th of February.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "SOX Certification Cycle & Model Validation Season",
    description: "Complete Q1 SOX disclosure controls testing and CEO/CFO certification. Launch annual model validation for credit risk and VaR models. Submit Form PF annual (within 120 days of fiscal year end). Complete Q1 ALCO meeting with interest rate risk reporting. Submit FINRA annual report review. Complete Q1 audit committee reporting.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Examination Prep & Mid-Year Risk Assessment",
    description: "Conduct H1 examination readiness review for SEC/FINRA/OCC. Complete mid-year AML risk assessment update. Review and update compliance manual for H1 regulatory changes. Complete annual cybersecurity penetration testing. Launch H1 vendor risk tier assessment. Complete Q2 SOX certification cycle.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "BSA Independent Testing & Third-Party Risk Reviews",
    description: "Complete annual BSA/AML independent testing (target completion by August). Launch annual KYC/EDD high-risk customer re-review cycle. Complete critical vendor business continuity testing. Submit Form CRS annual review and delivery to clients. Complete Q3 ALCO and DFAST model backtesting. Launch annual RCSA update process.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Annual Audit Planning & Regulatory Year-End Prep",
    description: "Complete annual audit universe risk ranking (September). Draft next-year internal audit plan for board approval (October). Complete annual AML risk assessment and document findings. Renew vendor contracts expiring Q4 (90-day advance review). Launch DFAST stress test preparation for December submission. Complete Q3 SOX certification.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "DFAST Submission & Annual Plan Approvals",
    description: "Submit DFAST stress test (December 5 for applicable banks). Complete annual audit plan board approval. Finalize SOX ICFR annual assessment and external auditor review. Complete AML training annual attestation documentation. Submit December FOCUS Report. Lock next-year regulatory filing and examination calendar.",
  },
]

const kpis = [
  {
    metric: "Regulatory Filing On-Time Rate 100%",
    description: "Zero late SEC, FINRA, OCC, or FinCEN filings; a single late filing triggers regulator inquiry and can escalate to enforcement action",
  },
  {
    metric: "Model Validation Coverage ≥ 95%",
    description: "Percentage of in-use models validated within SR 11-7 required cycle; below 80% creates examiner-citable model risk management gaps",
  },
  {
    metric: "SAR Filing Timeliness 100%",
    description: "Zero late SAR filings (30-day deadline from detection); late SARs are a primary driver of BSA enforcement actions at community and mid-size banks",
  },
  {
    metric: "AML Training Completion 100%",
    description: "Annual AML training completion across all employees before fiscal year end; below 95% completion triggers independent testing findings",
  },
  {
    metric: "Audit Plan Completion ≥ 90%",
    description: "Percentage of planned audit engagements completed in the year; below 80% requires audit committee explanation and may signal resource or scope issues",
  },
  {
    metric: "High-Risk KYC Re-Review On-Time ≥ 98%",
    description: "Percentage of high-risk customers re-reviewed within annual cycle; overdue EDD reviews are the leading CDD finding in BSA examinations",
  },
]

const testimonial = {
  quote:
    "Monthly FOCUS Report by the 17th, quarterly FOCUS Part IIA, Form ADV annual amendment within 90 days, Form ADV Part 2 annual delivery to 2,400 clients, Form PF annual, Form CRS annual review, DFAST annual stress test December 5 deadline, quarterly CEO/CFO SOX certifications, annual ICFR external auditor review, annual model validation for 14 credit risk models and 3 VaR models, quarterly CECL backtesting, monthly ALCO interest rate risk reporting, annual BSA/AML independent testing, annual AML training documentation for 180 employees, quarterly SAR timeliness review, annual KYC high-risk re-review for 400 EDD customers, annual vendor risk tier assessment for 85 vendors, SOC 2 annual certification, annual OFAC risk assessment, and FINRA annual report review — all in spreadsheets. Momenties organized everything. We had zero late filings for the first time.",
  name: "Kwame F.",
  title: "Chief Compliance Officer & Head of Financial Services Operations",
}

export default function FinancialServicesOperationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Financial Services Operations Calendar"
        title="Regulatory Filings. Model Validation. BSA Compliance. One Calendar."
        subtitle="Momenties tracks SEC and FINRA filing deadlines, Form ADV and Form PF annual submissions, DFAST stress test cycles, SR 11-7 annual model validation schedules, SOX quarterly certification cycles, BSA/AML independent testing, SAR timeliness monitoring, annual KYC high-risk customer re-review, vendor risk assessments, and examination preparation windows so financial services operations leaders never miss a regulatory deadline."
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
            Four Financial Services Pillars Momenties Tracks
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
            12-Month Financial Services Operations Calendar
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {timeline.map((t) => (
              <div
                key={t.phase}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 20,
                  alignItems: "start",
                }}
              >
                <div>
                  <p style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.85rem", marginBottom: 4 }}>
                    {t.phase}
                  </p>
                  <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.95rem" }}>{t.title}</p>
                </div>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                  {t.description}
                </p>
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
            Financial Services Operations KPIs Momenties Keeps on Track
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {kpis.map((k) => (
              <div
                key={k.metric}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.95rem", marginBottom: 8 }}>
                  {k.metric}
                </p>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.88rem", lineHeight: 1.6 }}>
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
