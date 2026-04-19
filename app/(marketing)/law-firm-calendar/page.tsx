import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Law Firm Calendar | Momenties",
  description: "Momenties helps law firms track bar license renewals, CLE compliance, court deadline management, client reporting cycles, trust account reconciliation, and partnership obligation deadlines in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Bar License Renewals, CLE Compliance & Multi-State Attorney Licensing Calendar",
    description:
      "Law firms without structured bar license and CLE calendars generate ethics violations — a lapsed bar license requires attorneys to immediately cease practice in that jurisdiction, and most state bars impose automatic suspension for CLE non-compliance, making systematic deadline management essential for multi-state practices. Bar license renewal calendar: state bar annual membership dues payment (January 15 — February 1 deadline in most states, with late fees of $100-$500), annual registration fees (varies by state — California MCLE fee separate from dues), multi-state bar registration tracking (attorneys admitted pro hac vice or in multiple states — each state has independent renewal dates), and bar ID verification annual (for states requiring annual attorney registration confirmations). CLE calendar: mandatory CLE completion before renewal deadline (varies by state — California 25 hours per 3-year period, New York 24 hours per 2-year period, Texas 15 hours annually including 3 ethics), ethics/professionalism CLE requirement (1-3 hours annually in most states — state-specific content requirements), substance abuse/mental health CLE (some states require 1-hour annually — California, New York), technology CLE (ABA Model Rule 1.1 annual tech competency CE — increasing state requirements), and diversity/inclusion CLE (some states require 1 hour annually). Specialized certification: Board Certification renewal (varies by specialty — typically 5-year cycles with annual CE requirements in certified specialty area), and Patent Bar (USPTO registration renewal for patent attorneys and agents — biennial maintenance). Momenties manages every bar compliance deadline.",
  },
  {
    icon: RefreshCw,
    title: "Court Deadline Calendar, Statute of Limitations Tracking & Docket Management",
    description:
      "Law firms without structured court deadline and statute of limitations tracking generate malpractice claims — missed statutes of limitations are the single largest category of attorney malpractice claims, and firms with systematic docket calendaring experience 75% fewer malpractice incidents than those relying on individual attorney tracking. Court deadline calendar: statute of limitations tracking per matter (3-year personal injury most states, 4-year breach of contract most states, 2-year medical malpractice most states — matter-specific), answer deadlines (21 days federal court, 20-30 days state court — from date of service), discovery cutoffs per scheduling order, motion filing deadlines, pretrial conference preparation, and trial date preparation calendar (6-8 weeks pre-trial preparation intensive). Appellate calendar: notice of appeal deadline (30 days federal civil, 30 days most state appellate courts — from judgment entry), opening brief deadline (40 days Ninth Circuit, varies by circuit), reply brief deadline, and oral argument preparation (typically scheduled 3-6 months after briefing complete). Transactional calendar: due diligence completion windows per LOI (typically 30-60 days), signature deadline tracking, condition precedent satisfaction deadlines, and post-closing obligation calendar (earn-out milestones, rep and warranty expiration). Corporate annual filing deadlines: annual report filings per state of incorporation for corporate clients, registered agent renewal coordination, and entity dissolution deadlines for winding-down clients. Momenties schedules every court and transaction deadline.",
  },
  {
    icon: TrendingUp,
    title: "Trust Account Reconciliation, Client Billing & Law Firm Financial Calendar",
    description:
      "Law firms without structured trust accounting calendars generate bar disciplinary violations — most state bars impose strict IOLTA trust account reconciliation requirements (monthly in most jurisdictions) and billing cycle obligations, and trust account mismanagement is the most common cause of attorney disbarment. IOLTA trust account compliance calendar: monthly three-way trust account reconciliation (client ledger vs. bank statement vs. trust account balance — ABA Model Rules and most state bar rules require monthly), quarterly CPA trust account review (for firms above revenue threshold), annual state bar trust account audit preparation, and trust account interest remittance to state IOLTA program (quarterly in most states). Client billing calendar: monthly billing cycle (invoice generation by 5th of following month), accounts receivable monthly review (30/60/90 day aging analysis), retainer replenishment notices (when trust balance drops below retainer threshold), and annual billing rate review (Q4 for January implementation). Contingency fee case calendar: settlement conference preparation windows, demand letter preparation calendar (6-8 weeks before deadline), and fee agreement annual audit for compliance with state court approval requirements. Alternative fee arrangement calendar: flat fee matter budget monitoring (monthly), subscription legal service fee review (quarterly), and value billing premium triggers (outcome-based). Partner draw and compensation: annual partner capital account reconciliation, compensation formula annual review (Q4), and K-1 distribution calendar (January 31 deadline for prior-year K-1s). Momenties tracks all financial compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Client Reporting, Business Development & Law Firm Operations Calendar",
    description:
      "Law firms without structured client reporting and business development calendars lose clients to firms with systematic communication cadences — clients who receive proactive quarterly status updates have 40% lower client departure rates than clients who only hear from attorneys when action is required. Client reporting calendar: quarterly matter status reports for active litigation clients (within 10 business days of quarter-end), annual client relationship review meeting (within 60 days of anniversary of engagement), major milestone reports (within 48 hours of settlement, verdict, or transaction close), and annual budget vs. actual fee summary for corporate clients with matter budgets. Business development calendar: annual business development plan (January — individual attorney goals per practice group), CLE-qualifying speaking engagement preparation calendar (4-6 month advance), article/publication calendar (quarterly — law review and bar journal submission windows), Chambers and Legal 500 submission deadline (annual — Chambers submissions typically due March/April), and Martindale-Hubbell peer review cycle (annual). Client development calendar: annual client survey (Q1 — structured feedback on service quality and communication), lateral attorney integration meetings (quarterly for first year), and firm anniversary/milestone client acknowledgment. Operations calendar: malpractice insurance annual renewal (90-day advance), cyber liability insurance annual renewal, professional liability reporting (annual to carrier — matter inventory update), annual law firm strategic planning (Q4 for following year), and associate review cycles (annual — December/January). Momenties consolidates the full law firm calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Bar Dues Season & Annual CLE Audit",
    description: "Pay state bar dues and registration fees (January 15-February 1 deadlines in most states). Run CLE completion audit for attorneys with December 31 CLE year-end. Distribute K-1s to partners (January 31 deadline for prior-year K-1s). Begin annual billing rate review implementation (January). Conduct client matter status reports for Q4. Run January trust account three-way reconciliation. Begin annual client surveys for Q1 distribution. File annual reports for corporate clients with January deadlines.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Chambers Submission Season & Q1 Financial Review",
    description: "Submit Chambers and Legal 500 rankings materials (March/April deadline). Run Q1 trust account reconciliation and CPA review. File corporate client annual reports with March-April state deadlines. Run Q1 CLE completion review for attorneys with spring renewal deadlines. Begin lateral attorney 90-day integration reviews (for Q1 laterals). Renew Board Certification CE for attorneys with spring deadlines. Run first-quarter accounts receivable aging review.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Mid-Year CLE Push & Client Relationship Reviews",
    description: "Run mid-year CLE completion audit for all attorneys. Schedule annual client relationship review meetings for Q1 engagement anniversaries. Complete Q2 trust account reconciliation. Run mid-year matter budget vs. actual review for all corporate clients with annual matter budgets. File corporate client annual reports with June deadlines. Review malpractice insurance renewal if anniversary falls in Q3 (begin 90-day advance). Review statute of limitations tracking for high-risk matters.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Summer CLE Season & Fall Preparation",
    description: "Complete summer CLE programs for attorneys with fall renewal deadlines (August-October). Run Q2 accounts receivable aging review and collections push. Begin fall business development planning (speaking engagements, articles, conference presentations for Q4). Complete Q3 trust account reconciliation. Review patent bar biennial registration for patent attorneys. Run annual legal technology audit (software subscriptions, matter management, e-billing). Begin annual strategic planning process (Q4 for following year).",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Annual Malpractice Renewal & Fall CLE Season",
    description: "Renew professional liability malpractice insurance (90-day advance for January anniversary). Renew cyber liability insurance (90-day advance for January anniversary). Complete CLE requirements for attorneys with October-November deadlines. Run Q3 matter status reports for all active clients. Begin law firm annual strategic planning sessions. Review and update retainer agreement template for upcoming year. Run annual associate performance review process (October-November). Begin Q4 billing push.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End CLE Completion & Annual Planning Lock",
    description: "Complete CLE requirements for all attorneys with December 31 annual deadlines. File year-end IOLTA trust account reconciliation. Run December accounts receivable push (calendar year-end client billing). Complete annual partner compensation formula review and draws. Lock next-year billing rates. Complete annual client matter audits — close resolved matters, update active matter status. Run year-end business development goal attainment review. Prepare K-1 documentation for January 31 distribution.",
  },
]

const kpis = [
  {
    metric: "CLE Completion Rate 100%",
    description: "All attorneys completing required CLE hours before renewal deadline; incomplete CLE at renewal triggers automatic bar suspension in most states — practice cessation until completion and reinstatement",
  },
  {
    metric: "Trust Account Reconciliation On-Time 100%",
    description: "Monthly three-way trust reconciliation completed by 10th of following month; trust accounting violations are the most common cause of bar discipline and account for 30% of disbarment proceedings",
  },
  {
    metric: "Statute of Limitations Zero Misses",
    description: "Zero missed statutes of limitations across all matters; a single missed SOL constitutes attorney malpractice per se — the single largest malpractice claim category for plaintiff and defense firms",
  },
  {
    metric: "A/R Days Outstanding ≤ 45",
    description: "Average accounts receivable days outstanding; above 60 days signals billing cycle gaps or client communication issues — every 10-day improvement in A/R collection increases firm cash flow 8-12%",
  },
  {
    metric: "Client Retention Rate ≥ 85%",
    description: "Percentage of clients returning for additional engagements; below 75% signals service quality, communication, or responsiveness gaps — annual client relationship reviews are the primary retention driver",
  },
  {
    metric: "Bar License Renewal On-Time 100%",
    description: "Zero lapsed bar licenses across all attorneys and jurisdictions; a single lapsed license requires immediate cessation of practice and generates client notification obligations in most states",
  },
]

const testimonial = {
  quote:
    "Bar dues in 6 states for 18 attorneys on different January-February deadlines, CLE tracking for 18 attorneys across 4 states with different hour requirements and ethics mandates, Board Certification renewal for 4 certified specialists, Patent Bar biennial renewal for 2 patent attorneys, monthly three-way trust account reconciliation for main and satellite IOLTA accounts, quarterly IOLTA interest remittance, statute of limitations calendar for 340 active matters across 8 jurisdictions, court deadline calendar per scheduling order for 45 active litigations, Chambers and Legal 500 submission April deadline, K-1 distribution January 31 for 12 partners, annual billing rate review Q4, malpractice insurance renewal 90-day advance, cyber liability renewal, annual client matter budget reviews for 28 corporate clients, quarterly matter status reports for 65 clients, annual strategic planning Q4, and associate performance reviews — all in a shared calendar and spreadsheets. Momenties organized everything. We had zero CLE lapses for the first time.",
  name: "Ngozi L.",
  title: "Managing Partner, Regional Litigation & Transactional Firm",
}

export default function LawFirmCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Law Firm Calendar"
        title="Bar License Renewals. CLE Compliance. Trust Accounting. One Calendar."
        subtitle="Momenties tracks bar dues and registration renewals across all states and attorneys, CLE completion audits with ethics and specialty hour requirements, monthly IOLTA trust account reconciliation deadlines, statute of limitations tracking per matter, court deadline calendars per scheduling order, Chambers submission annual windows, malpractice insurance renewal advance windows, K-1 partner distribution deadlines, annual billing rate review cycles, and client relationship review scheduling so law firms never miss a bar compliance deadline or trust accounting obligation."
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
            Four Law Firm Pillars Momenties Tracks
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
            12-Month Law Firm Calendar
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
            Law Firm KPIs Momenties Keeps on Track
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
