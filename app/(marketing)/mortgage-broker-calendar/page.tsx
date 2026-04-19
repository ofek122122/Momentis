import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Mortgage Broker Compliance Calendar | Momenties",
  description: "Momenties helps mortgage brokers track NMLS annual renewal, state MLO license CE, surety bond annual renewal, HMDA LAR annual submission, RESPA/TRID training, and anti-money laundering annual certification in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "NMLS Annual Renewal & State MLO License CE Calendar",
    description:
      "Mortgage Loan Originators (MLOs) and mortgage brokers maintain NMLS (Nationwide Multistate Licensing System) federal registration or state license with annual renewal deadline of December 31. Annual MLO continuing education: 8 hours minimum SAFE Act CE (3 hours federal law, 2 hours ethics including fraud/fair lending/consumer protection, 2 hours non-traditional mortgage products, 1 hour elective) — must be completed through NMLS-approved provider before November 30 to allow processing. State-specific additional CE: many states require additional hours — California 1 hour CA-specific CE, Texas 1 hour TX-specific CE, Florida 1 hour FL-specific CE. MLO federal registration (large banks): annual NMLS federal registration renewal December 31 (exempt from CE but must maintain active registration). Mortgage broker company license: annual state mortgage broker license renewal (separate from individual MLO license) — varies by state, typically December 31 or March 31. Surety bond annual renewal: state-required surety bond for mortgage broker license (amount varies by state — typically $25,000–$150,000; annual renewal, begin 60–90 days before expiration). Annual NMLS financial statement submission: some states require annual audited or reviewed financial statements (typically March 31 for prior year). Designated Responsible Individual (DRI) annual verification in NMLS. Momenties tracks all staggered renewal cycles.",
  },
  {
    icon: RefreshCw,
    title: "RESPA, TRID & Federal Mortgage Compliance Training Calendar",
    description:
      "Annual RESPA (Real Estate Settlement Procedures Act) compliance training: annual all-staff RESPA Section 8 anti-kickback training (affiliated business arrangement disclosure, marketing services agreement compliance, CFPB enforcement update), annual Loan Estimate/Closing Disclosure TRID (TILA-RESPA Integrated Disclosure) accuracy training update. Annual TRID tolerance review: Regulation Z/RESPA tolerance violation audit — zero-tolerance vs 10% tolerance vs no-tolerance item compliance. Annual Fair Lending training: annual ECOA/HMDA fair lending compliance training (disparate impact, disparate treatment, pricing analysis — CFPB/DOJ enforcement annual update), annual Fair Housing Act (FHA) training. Annual HMDA compliance: HMDA LAR (Loan Application Register) annual submission to CFPB — deadline March 1 each year for prior calendar year data (for covered institutions). Annual AML (Anti-Money Laundering) certification: FinCEN/BSA annual AML training for all MLOs and staff (Customer Identification Program, SAR filing, currency transaction reports). Annual privacy notice review: annual Gramm-Leach-Bliley Act (GLBA) privacy notice review and distribution to customers. Annual CAN-SPAM email marketing compliance audit. Quarterly CFPB regulation update review. Annual NMLS MU4 background check: annual criminal background check renewal for MLOs in many states. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "HMDA Reporting, Loan File Audits & Compliance Quality Calendar",
    description:
      "HMDA compliance calendar: annual HMDA LAR data integrity audit (quarterly data entry review to ensure accurate collection of application date, loan purpose, property type, applicant demographics — reduces March 1 submission errors), annual HMDA filing deadline March 1 (covered institutions — ≥25 closed-end mortgage loans or ≥200 open-end lines prior year), annual HMDA resubmission review (CFPB error rate threshold — ≥5% error rate triggers resubmission). Loan file compliance audits: quarterly Loan Estimate delivery timing audit (LE must be delivered within 3 business days of application — Regulation Z), quarterly Closing Disclosure timing audit (CD must be received 3 business days before consummation), quarterly fee tolerance violation audit (zero-tolerance, 10% tolerance, good faith determination). Annual Qualified Mortgage (QM) compliance review: annual ATR/QM rule compliance audit (Ability-to-Repay — income/asset documentation review, 43% DTI limit or GSE patch compliance). HMDA peer analysis: annual fair lending statistical peer analysis (pricing, denial rate, geographic concentration analysis — pre-examination self-assessment). Annual LO compensation plan review: Regulation Z LO compensation rule compliance audit (no compensation based on loan terms). Quarterly pipeline rate lock expiration management. Annual mortgage call report submission (NMLS MCR — quarterly filings with annual reconciliation). Momenties tracks all quality compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "State License, Bond, E&O Insurance & Broker Operational Calendar",
    description:
      "Mortgage broker operational compliance calendar: annual state mortgage broker company license renewal (December 31 or March 31 depending on state — all states where licensed), annual individual MLO license renewal for all sponsored MLOs (December 31), annual surety bond renewal (begin 90 days before expiration — bond amount based on prior year loan volume in some states). Annual E&O (Errors &amp; Omissions) insurance renewal: mortgage broker professional liability E&O insurance annual renewal — begin 90 days before expiration; some states require minimum E&O coverage as condition of license. Annual fidelity/crime bond renewal (lender requirements for wholesale or correspondent relationships). Lender approval renewals: annual renewal of wholesale lender and correspondent lender approval packages (financial statements, E&O certificates, license certificates, W-9). Annual warehouse line of credit renewal: annual review and renewal negotiation for warehouse credit facilities (if applicable). Annual DBA/trade name registration renewal (county or state level — business name used in advertising). Annual advertising compliance audit: annual review of all marketing materials for RESPA, Regulation Z, and state-specific advertising compliance (APR disclosure, NMLS number display on all ads). Annual data security review: Gramm-Leach-Bliley Act information security program annual review (written Information Security Program update). NMLS MU3 company renewal processing — submit before December 31. Momenties consolidates all.",
  },
]

const timeline = [
  {
    phase: "Jan–Feb",
    title: "HMDA Filing & Post-Year-End Reporting",
    items: [
      "Submit HMDA LAR to CFPB by March 1 (prior year data — begin January)",
      "Annual HMDA data integrity audit of prior year LAR",
      "Annual fair lending statistical peer analysis (pricing and denial rate review)",
      "Annual LO compensation plan review for Regulation Z compliance",
      "Annual Gramm-Leach-Bliley privacy notice distribution to all customers",
    ],
  },
  {
    phase: "Mar–Apr",
    title: "HMDA Deadline & Financial Statement Submissions",
    items: [
      "HMDA LAR submission deadline: March 1",
      "Annual NMLS financial statement submission (March 31 for states requiring audited statements)",
      "Annual mortgage call report (NMLS MCR) Q4 reconciliation",
      "Annual surety bond renewal check — 90 days before expiration",
      "Annual advertising compliance audit of all marketing materials",
    ],
  },
  {
    phase: "May–Jun",
    title: "Fair Lending Training & Mid-Year Audits",
    items: [
      "Annual ECOA/HMDA fair lending compliance training (all MLOs and staff)",
      "Annual Fair Housing Act training",
      "Quarterly Loan Estimate and Closing Disclosure timing audit (Q2)",
      "Quarterly fee tolerance violation audit (Q2)",
      "Annual data security Gramm-Leach-Bliley information security program review",
    ],
  },
  {
    phase: "Jul–Aug",
    title: "E&O Insurance, Lender Approvals & Annual Audit",
    items: [
      "Annual E&O insurance renewal — begin 90 days before expiration",
      "Annual fidelity/crime bond renewal",
      "Annual wholesale and correspondent lender approval package renewals",
      "Annual warehouse line of credit renewal negotiation",
      "Annual ATR/QM rule compliance audit (income documentation and DTI review)",
    ],
  },
  {
    phase: "Sep–Oct",
    title: "CE Completion & NMLS Prep",
    items: [
      "Complete 8-hour SAFE Act annual CE by November 30 (all MLOs)",
      "Complete state-specific additional CE hours (California/Texas/Florida MLOs)",
      "Annual RESPA Section 8 anti-kickback training (all staff)",
      "Annual TRID Loan Estimate/Closing Disclosure accuracy training",
      "Annual AML/BSA certification (FinCEN annual training — all MLOs and staff)",
    ],
  },
  {
    phase: "Nov–Dec",
    title: "NMLS Annual Renewal Deadline",
    items: [
      "Submit NMLS MU3 company renewal before December 31",
      "Submit individual MLO NMLS license renewals for all sponsored MLOs by December 31",
      "Annual DBA/trade name registration renewal",
      "Annual CFPB regulation update review (Q4 regulatory changes)",
      "Quarterly pipeline rate lock expiration audit (Q4 year-end review)",
    ],
  },
]

const kpis = [
  {
    metric: "NMLS Renewal",
    target: "100% by December 31",
    description: "All individual MLO and company NMLS licenses renewed by December 31 — zero expired licenses entering January 1.",
  },
  {
    metric: "HMDA LAR Submission",
    target: "Filed by March 1",
    description: "Annual HMDA Loan Application Register submitted to CFPB by March 1 with error rate below CFPB 5% resubmission threshold.",
  },
  {
    metric: "SAFE Act CE Completion",
    target: "100% by November 30",
    description: "All sponsored MLOs complete 8-hour SAFE Act continuing education by November 30 to allow NMLS processing before December 31.",
  },
  {
    metric: "TRID Timing Compliance",
    target: "Zero tolerance violations",
    description: "100% of Loan Estimates delivered within 3 business days of application and Closing Disclosures received 3 business days before consummation.",
  },
  {
    metric: "Surety Bond Current",
    target: "Zero lapse days",
    description: "Surety bond renewed before expiration with zero lapse days — bond expiration triggers automatic license suspension in most states.",
  },
  {
    metric: "AML Training",
    target: "100% annual completion",
    description: "All MLOs and staff complete annual AML/BSA certification — FinCEN requires documented annual training for all mortgage broker staff.",
  },
]

const testimonial = {
  quote:
    "NMLS company license annual renewal by December 31 across 4 states, individual MLO license renewals for 18 sponsored MLOs by December 31, 8-hour SAFE Act CE completion for all 18 MLOs by November 30, state-specific additional CE for MLOs licensed in California and Texas and Florida, annual surety bond renewal for 4 states, annual E&O insurance renewal for entire brokerage, annual fidelity bond renewal, annual wholesale lender approval package renewals for 12 lender relationships, annual HMDA LAR submission for 340 loans by March 1, annual HMDA data integrity audit, annual HMDA fair lending statistical peer analysis, annual RESPA Section 8 anti-kickback training for 22 staff members, annual TRID accuracy training, annual fair lending ECOA training, annual Fair Housing Act training, annual AML FinCEN certification for all staff, annual Gramm-Leach-Bliley privacy notice distribution, annual ATR/QM compliance audit, annual LO compensation plan review, annual data security information security program review, quarterly Loan Estimate delivery timing audits, quarterly fee tolerance violation audits, quarterly CFPB regulation update reviews, annual advertising compliance audit, NMLS financial statement submission, and annual DBA registration renewal — all simultaneously. Momenties mapped every deadline.",
  name: "Adaeze MB.",
  title: "Licensed Mortgage Broker, Multi-State MLO, NMLS #XXXXXX",
}

export default function MortgageBrokerCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Mortgage Broker Compliance Calendar"
        title="NMLS Annual Renewal. HMDA LAR. SAFE Act CE. One Calendar."
        subtitle="Momenties tracks NMLS company and individual MLO annual renewal deadlines, 8-hour SAFE Act CE completion by November 30, annual HMDA LAR submission by March 1, surety bond renewal, E&amp;O insurance renewal, annual RESPA and TRID compliance training, annual AML certification, quarterly Loan Estimate timing audits, and annual fair lending statistical analysis so mortgage brokers maintain every compliance deadline without administrative overload."
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
            Four Compliance Pillars Momenties Manages for Your Mortgage Brokerage
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
            Your Mortgage Brokerage Compliance Year at a Glance
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
                  gap: 24,
                }}
              >
                <div>
                  <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1rem" }}>{t.phase}</p>
                  <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.92rem", marginTop: 4 }}>{t.title}</p>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {t.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        color: "rgba(240,236,227,0.65)",
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        paddingLeft: 16,
                        position: "relative",
                        marginBottom: 4,
                      }}
                    >
                      <span style={{ position: "absolute", left: 0, color: "#c5a35c" }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
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
            Six KPIs Momenties Keeps on Track
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
                  background: "#0e0e12",
                  border: "1px solid rgba(197,163,92,0.15)",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1.05rem", marginBottom: 4 }}>
                  {k.metric}
                </p>
                <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.88rem", marginBottom: 8 }}>
                  Target: {k.target}
                </p>
                <p style={{ color: "rgba(240,236,227,0.6)", fontSize: "0.87rem", lineHeight: 1.6 }}>
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
