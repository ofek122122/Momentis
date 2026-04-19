import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Law Firm Calendar | Momenties",
  description: "Momenties gives law firms an AI-powered calendar that tracks attorney bar license renewal, CLE cycles, IOLTA trust account compliance, malpractice renewal, statute of limitations deadlines, and court filing deadlines — all in one place.",
}

const pillars = [
  {
    icon: Target,
    title: "Bar License & CLE Renewal Calendar",
    description:
      "Law firms managing attorney credential cycles track state bar license renewal (annual or biennial depending on state — most states require 12-15 CLE hours per year with 1-3 ethics hours mandatory), multi-state bar admission maintenance (attorneys admitted in multiple states maintain separate CLE requirements per state bar — New York 24 hours biennial with 4 ethics, California 25 hours biennial with 4 ethics, Texas 15 hours annual with 3 ethics), and specialty certifications: Board Certified Specialist (BCS) designations by state — Texas Board of Legal Specialization, Florida Bar Board Certification (5-year renewal, 50+ CLE hours, peer review), California State Bar Board Certified Specialist (5-year renewal). Federal court admissions: U.S. District Court admission maintenance (most federal courts require active state bar admission — bar status changes trigger federal admission review). Patent and trademark: USPTO registration renewal for Registered Patent Attorneys and Agents (USPTO does not have separate renewal but requires active state bar for attorneys; USPTO Practice annual CLE recommended). Immigration: AILA membership annual renewal with immigration law CLE. International arbitration: CIArb membership annual renewal. Momenties tracks all credential timelines concurrently.",
  },
  {
    icon: RefreshCw,
    title: "Court Filing Deadlines & Annual Litigation Calendar",
    description:
      "Law firm litigation calendars track statute of limitations (SOL) deadlines per case: personal injury (2-3 years from date of injury — state-specific), medical malpractice (1-3 years with discovery rule — state-specific), contract breach (4-6 years — state-specific), and employment discrimination (180 days EEOC charge filing — 300 days in deferral states). Court filing deadline calendar: answer or responsive pleading (21 days federal, 20-30 days state), discovery scheduling order compliance (FRCP Rule 26 initial disclosures 14 days post-conference), expert designation deadlines (90-120 days before trial per scheduling order), dispositive motion deadlines, pre-trial deadlines, and appellate briefing deadlines. Annual court-specific deadlines: annual attorney registration fee deadlines for multi-court admissions, annual Federal Criminal Justice Act (CJA) panel reappointment for appointed counsel, biennial peer review for specialty bar certifications, annual continuing legal education (CLE) completion and reporting deadlines per state bar. IOLTA trust account: quarterly reconciliation of client trust account with three-way reconciliation documentation. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "IOLTA Compliance, Client Funds & Ethics Calendar",
    description:
      "Law firms managing client trust accounts maintain IOLTA (Interest on Lawyer Trust Accounts) compliance calendar: monthly IOLTA bank statement reconciliation, quarterly three-way reconciliation (ledger balance = bank balance = client ledger sum), annual IOLTA audit by state bar (in states with mandatory reporting — California, Texas, Florida, New York), and annual interest income remittance to state IOLTA foundation. Law firm ethics calendar: annual attorney ethics CLE completion (most states require 1-3 ethics hours per reporting cycle as standalone requirement — not satisfied by general CLE), annual MRPC (Model Rules of Professional Conduct) update review training, annual cybersecurity and data privacy ethics CE (most state bars now include technology competence under ethics requirements per Model Rule 1.1 Comment 8), annual mandatory reporter training (for attorneys in states requiring child abuse mandatory reporter training), and annual anti-money laundering CE (ABA guidance — CDD compliance for trust accounts). Attorney wellbeing: annual mental health CLE (many state bars now offer CLE credit for wellness and mental health programs). IOLTA errors and omissions: annual malpractice insurance renewal (60-90 days advance). Annual state bar fee payment by deadline (late fees trigger inactive status). Momenties tracks all compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Malpractice Renewal, Firm Registration & Law Firm Business Calendar",
    description:
      "Law firms managing business compliance maintain annual legal malpractice insurance renewal (60-90 days advance submission — most carriers require application review 90 days before expiration; coverage gaps trigger bar reporting requirements in some states), annual attorney professional liability premium audit, and annual cyber liability insurance renewal (state bars increasingly recommend or require cyber coverage — data breach notification and client notification requirements under Rule 1.6). Firm registration calendar: annual state professional corporation (PC) or limited liability partnership (LLP) annual report and registered agent fee, annual ABA TECHSHOW or state bar annual meeting CLE attendance and documentation, annual state bar membership dues payment (payment by deadline required to maintain active status — late payment triggers inactive status and unauthorized practice risk), and annual federal tax compliance (law firm payroll quarterly Form 941, annual partnership or S-corp return). Trust account banking: annual bank overdraft notification protocol review (IOLTA banks must notify state bar of overdrafts — law firms review and update overdraft alert procedures annually). Annual firm management CE: annual law firm management CLE (ABA TECHSHOW, state bar practice management). Referral and fee-splitting compliance: annual review of co-counsel fee agreement documentation. Momenties consolidates all.",
  },
]

const timeline = [
  {
    month: "January – February",
    title: "CLE Reporting & Annual Bar Dues",
    tasks: [
      "Annual state bar membership dues payment — late payment triggers inactive status",
      "CLE completion audit for all attorneys — verify hours and ethics credits by state bar deadline",
      "Annual IOLTA trust account three-way reconciliation (Q4 of prior year) — complete by January 31",
      "January 31: payroll tax Form 941 Q4 and annual Form 940 FUTA",
      "Annual malpractice insurance premium audit submission",
    ],
  },
  {
    month: "March – April",
    title: "Federal Court Admissions & Tax Filings",
    tasks: [
      "Annual federal court admission fee payments for multi-court admissions",
      "March 15: S-corporation or partnership tax return filing (or extension)",
      "April 15: individual tax filings for partners and shareholders",
      "Annual CJA panel reappointment application for appointed counsel programs",
      "Q1 IOLTA three-way reconciliation — complete by April 30",
    ],
  },
  {
    month: "May – June",
    title: "Malpractice Renewal & CLE Mid-Year Push",
    tasks: [
      "Annual malpractice insurance renewal — submit application 90 days before expiration",
      "Annual cyber liability insurance renewal — review coverage limits for client data obligations",
      "Mid-year CLE audit — all attorneys on track for state-specific annual or biennial requirements",
      "Annual state PC/LLP annual report filing (due dates vary by state — May through June in many states)",
      "Q2 IOLTA three-way reconciliation — complete by July 31",
    ],
  },
  {
    month: "July – August",
    title: "Multi-State Bar Renewals & Trust Audit",
    tasks: [
      "Annual state bar renewal fees due in Q3 for multi-state attorneys (California, New York, Texas — check each state)",
      "Annual IOLTA bank overdraft notification protocol review",
      "Annual anti-money laundering CE and CDD trust account compliance review",
      "Annual data breach response plan review and cybersecurity training for all staff",
      "Q3 IOLTA three-way reconciliation prep",
    ],
  },
  {
    month: "September – October",
    title: "ABA Annual Meeting & Ethics CE Push",
    tasks: [
      "ABA Annual Meeting CLE documentation (August-September)",
      "Annual ethics CLE completion sprint — most state bars require standalone ethics hours",
      "Annual technology competence ethics CE (Model Rule 1.1 Comment 8 — cybersecurity and AI tools)",
      "Annual mental health and attorney wellbeing CLE (increasingly required or available for credit)",
      "Q3 IOLTA three-way reconciliation — complete by October 31",
    ],
  },
  {
    month: "November – December",
    title: "Year-End CLE Completion & Trust Reconciliation",
    tasks: [
      "Final CLE hour completion push for all state bars with December 31 reporting deadlines",
      "Annual MRPC update review training — review significant changes to Model Rules",
      "Q4 IOLTA three-way reconciliation — complete by January 31 of following year",
      "Annual state bar IOLTA reporting (mandatory reporting states — December or January deadline)",
      "Annual review of co-counsel fee agreements and referral documentation",
    ],
  },
]

const kpis = [
  {
    metric: "CLE Compliance Rate",
    target: "100% of attorneys meet all state bars",
    description: "CLE shortfalls trigger state bar suspension — multi-state attorneys must meet the requirements of every state independently.",
  },
  {
    metric: "IOLTA Three-Way Reconciliation",
    target: "Quarterly — zero unresolved variances",
    description: "IOLTA reconciliation failures are the leading cause of attorney disciplinary proceedings — reconcile quarterly without exception.",
  },
  {
    metric: "Ethics CLE Annual Completion",
    target: "1-3 standalone ethics hours per state",
    description: "Ethics hours cannot always be substituted by general CLE — verify each state bar&apos;s standalone ethics requirement separately.",
  },
  {
    metric: "Malpractice Renewal Lead Time",
    target: "Application submitted 90 days early",
    description: "Coverage gaps triggered by late malpractice renewal require bar reporting in some states and create client notification obligations.",
  },
  {
    metric: "Statute of Limitations Tracking",
    target: "Zero SOL-missed matters",
    description: "SOL calendar must be set per-matter on intake — missed SOLs are the leading cause of legal malpractice claims.",
  },
  {
    metric: "Multi-State Bar Annual Dues",
    target: "All dues paid before each state deadline",
    description: "Late bar dues trigger inactive status — unauthorized practice of law risk for attorneys who miss payments in any admitted state.",
  },
]

const testimonial = {
  quote:
    "Annual CLE completion tracking for 12 attorneys across 6 state bars with different annual and biennial cycles, ethics hour requirements, and reporting deadlines, Florida Bar Board Certification 5-year renewal for 2 attorneys with peer review and CLE requirements, annual bar dues payment tracking for all attorneys across all admitted jurisdictions, federal court annual admission fee payments for 8 federal district and appellate courts, monthly IOLTA three-way reconciliation for 3 client trust accounts, quarterly IOLTA reconciliation audit, annual IOLTA mandatory reporting to Florida Bar, annual malpractice insurance renewal application 90 days early, annual cyber liability insurance renewal, annual state PC annual report filing, annual federal court CJA panel reappointment for 4 appointed counsel attorneys, annual data breach response plan review, annual ABA technology competence ethics CE, annual mental health wellbeing CLE documentation, annual anti-money laundering CE and CDD compliance review, annual MRPC update review training, quarterly Form 941 payroll tax for the firm, SOL calendar tracking for 340 active litigation matters, and annual firm partnership tax return — all simultaneously. Momenties mapped every deadline.",
  name: "Emeka L.",
  title: "JD, Board Certified Trial Lawyer, Managing Partner, 12-Attorney Regional Litigation Firm",
}

export default function LawFirmCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Law Firm Calendar"
        title="CLE Deadlines. IOLTA Compliance. Malpractice Renewal. One Calendar."
        subtitle="Momenties tracks CLE hours by category across all state bars for every attorney, quarterly IOLTA three-way trust account reconciliation, annual ethics CLE standalone requirements, annual bar dues payment deadlines per admitted state, annual malpractice and cyber liability insurance renewal 90 days in advance, federal court annual admission fees, Board Certification 5-year peer review cycles, statute of limitations per active matter, and annual MRPC ethics training — so your law firm never misses a compliance deadline."
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
            Four Calendar Pillars for Law Firm Compliance
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
            Your Law Firm Compliance Calendar
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
            Six KPIs Every Law Firm Should Track
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
