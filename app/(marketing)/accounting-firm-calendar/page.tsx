import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Accounting Firm Calendar | Momenties",
  description: "Momenties helps accounting firms track tax filing deadlines, audit season planning, CPA license renewals, peer review cycles, client service rhythms, and CPE completion in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Tax Deadline Calendar, Extension Cycles & Multi-Entity Filing Management",
    description:
      "Accounting firms without structured tax deadline calendars accumulate malpractice exposure — a missed tax deadline generates automatic penalties (5% per month on unpaid taxes, up to 25% failure-to-file penalty) and potential CPA license discipline, making systematic deadline tracking essential for every client in the portfolio. Individual tax calendar: Form 1040 original deadline (April 15 — extensions to October 15), estimated tax quarterly payments (April 15, June 16, September 15, January 15 — four separate client reminders each year), amended return filing window (3-year statute), and FBAR deadline (FinCEN 114, April 15 with automatic extension to October 15). Business entity tax calendar: C-Corporation Form 1120 (March 15 — extension to September 15), S-Corporation Form 1120-S (March 15 — extension to September 15), Partnership Form 1065 (March 15 — extension to September 15), LLC Form 1065 or 1120-S (March 15), and Trust/Estate Form 1041 (April 15 — extension to September 30). State and local tax calendar: state income tax returns (most states follow federal calendar, but 12 states have different deadlines), state estimated tax payments (state-specific quarterly dates), sales tax filing (monthly, quarterly, or annual — client-specific), and payroll tax deposits (semi-weekly or monthly — per IRS deposit schedule). International tax: FBAR April 15, Form 8938 FATCA with return, Form 5471 with return, and Form 8865 with return. Momenties manages every tax deadline.",
  },
  {
    icon: RefreshCw,
    title: "Audit Season Planning, Engagement Milestones & Peer Review Cycle",
    description:
      "Audit practices without structured engagement timelines generate quality control violations — GAAS requires specific documentation completion timelines (60-day archive deadline from report date), and PCAOB inspections penalize late workpaper completion. Audit engagement calendar: planning meeting and risk assessment (8-10 weeks before fieldwork), interim procedures (6-8 weeks before year-end), fieldwork completion target (2-3 weeks after period end), draft financial statements (4-5 weeks after period end), client review and comment period (1-2 weeks), report issuance (6-8 weeks after period end), and workpaper archiving deadline (60 days after report issuance — GAAS requirement). Calendar year-end audit cycle: December 31 fiscal year-end clients — January/February fieldwork, March report target. June 30 fiscal year-end clients — July/August fieldwork, September report target. Nonprofit audit cycle: Form 990 due date (4.5 months after fiscal year-end, typically November 15 for December fiscal year), audit due date (typically tied to 990 deadline), and Single Audit Act submission (9 months after fiscal year-end for federal award recipients). AICPA peer review cycle: peer review enrollment (3-year cycle — enrollment due 6 months before review year), annual review completion, peer review report response (30 days after draft), and corrective action completion (90 days after final report). Momenties schedules every engagement milestone.",
  },
  {
    icon: TrendingUp,
    title: "CPA License Renewal, CPE Tracking & Professional Standards Calendar",
    description:
      "CPA firms without structured CPE tracking generate state board violations — most states require 40 CPE hours annually (or 80 biennially) with specific ethics requirements, and CPA license lapse removes the ability to issue audit reports, sign tax returns as CPA, or perform attest functions. CPA license renewal calendar: state CPA license renewal (biennial in most states — 50 different renewal dates for multi-state CPAs), CPE completion verification before renewal (40 hours annually or 80 biennially — state-specific), ethics CPE requirement (2-4 hours of state ethics annually — state-specific content required), and state board application for new staff completing CPA exam (exam section 18-month window). CPE calendar by specialty: tax CPE — annual update on Tax Cuts and Jobs Act developments, annual IRS priority guidance updates, SALT (state and local tax) annual update; audit CPE — annual ASU (accounting standards update) adoption calendar, annual auditing standards update, Yellow Book CPE (24 hours in 2-year period for government auditors), and Single Audit CPE (24 hours every 2 years for single audit practitioners). Professional standards calendar: annual FASB ASU adoption deadlines (new standard adoption — early adoption vs. required effective date tracking per client), GASB pronouncement adoption for government clients, and ASC 842 (lease accounting) annual reassessment. PCAOB inspection: annual inspection cycle for registered firms, inspection comment letter response (30 days). Momenties tracks every CPE and standards cycle.",
  },
  {
    icon: BarChart3,
    title: "Client Service Calendar, Billing Cycles & Firm Management Deadlines",
    description:
      "Accounting firms without structured client service calendars miss recurring engagement windows and generate billing gaps — quarterly bookkeeping reviews, annual planning meetings, and mid-year tax projections are high-value services that require systematic advance scheduling to maintain client retention and revenue. Client service calendar: annual tax planning meeting (September-October — before year-end for meaningful planning opportunities), mid-year tax projection review (June-July — for estimated payment adjustments), quarterly financial statement review (within 3 weeks of quarter-end for calendar-year clients), annual audit planning meeting (October-November for December fiscal year-end clients), and board of directors financial presentation (annual or quarterly per client governance). Billing and revenue management: monthly invoice cycle (within 5 business days of month-end), engagement letter annual renewal (for recurring engagements — send 60 days before engagement start), retainer agreement annual adjustment (January for calendar-year clients), and WIP (work in progress) monthly review (billing realization rate monitoring). HR and firm management calendar: staff performance reviews (annual — typically December/January), new hire onboarding tax season preparation (January), annual compensation review (January), and internship recruitment calendar (fall campus recruiting — September/October for next summer). Regulatory firm deadlines: IRS PTIN renewal (December 31 annually for all paid preparers), CAF (Centralized Authorization File) annual maintenance, EFIN (Electronic Filing Identification Number) annual verification, and firm registration renewal with state CPA society. Momenties consolidates the full accounting firm calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Tax Season Launch & Year-End Audit Fieldwork",
    description: "Open tax season — receive and organize client documents. Begin calendar year-end audit fieldwork for December 31 clients. File January payroll tax deposits (semi-weekly or monthly per deposit schedule). Send W-2 and 1099 to clients (January 31 deadline). Send engagement letters for recurring tax engagements. Begin CPE tracking for new year. Renew IRS PTINs for all paid preparers (December 31 deadline passed — verify completion).",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Individual & Business Return Deadlines & Audit Report Season",
    description: "File S-Corporation, Partnership, and C-Corporation returns (March 15 deadline — or extend). Issue December year-end audit reports (target March). File individual returns (April 15 deadline — or extend to October 15). Submit Q1 estimated tax payments for clients (April 15). Complete Form 990 for calendar-year nonprofits (April 15 — or extend to November 15). Renew CPA licenses expiring in spring. Begin mid-year audit planning for June 30 fiscal year-end clients.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Mid-Year Planning & June Fiscal Year-End Prep",
    description: "Send Q2 estimated tax payment reminders (June 16). Begin mid-year tax projection reviews for high-value clients (June-July planning window). Begin June 30 fiscal year-end audit fieldwork. Complete CPE hours for staff with summer license renewals. Submit peer review documentation for firms in review year. Run mid-year WIP and billing realization review. Schedule fall tax planning meetings (September-October block).",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Extended Return Season & Summer Audit Fieldwork",
    description: "Complete June 30 audit fieldwork and target report issuance (September). Begin work on extended individual and business returns (October 15 deadline for extended 1040s; September 15 for extended business returns). File Q2 payroll tax returns (July 31). Send Q3 estimated tax reminders (September 15). Recruit fall interns and new staff. Run August ASU adoption review for clients with new accounting standard adoption deadlines.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Extended Return Deadlines & Tax Planning Season",
    description: "File extended S-Corp and Partnership returns (September 15). Launch annual tax planning meetings for high-value clients (September-October). Begin December year-end audit planning and risk assessment (October-November). File extended individual returns (October 15). Submit FBAR extensions (October 15). Lock CPE completion plan for staff with December 31 CPE year-end. Run Q3 WIP and collections review. Submit Form 990 extensions (November 15).",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Tax Planning Execution & Annual Firm Planning",
    description: "Execute year-end tax planning strategies for clients (December 31 window closes). Renew IRS PTINs for all paid preparers (December 31). Complete CPE hours for all staff with December 31 CPE year-end. Send engagement letters for next-year tax engagements. Complete annual staff performance reviews and compensation planning. Lock next-year fee schedule. Run year-end EFIN and CAF verification. Complete peer review corrective actions with December deadlines.",
  },
]

const kpis = [
  {
    metric: "On-Time Filing Rate 100%",
    description: "Zero missed tax or regulatory deadlines across client portfolio; a single missed deadline generates client penalties and potential CPA license discipline",
  },
  {
    metric: "CPE Completion Rate 100%",
    description: "All CPAs completing required CPE hours before license renewal deadline; incomplete CPE at renewal results in license lapse and inability to issue attest reports",
  },
  {
    metric: "Audit Archiving Compliance 100%",
    description: "All audit workpapers archived within 60 days of report issuance per GAAS; late archiving is a quality control violation flagged in peer review and PCAOB inspections",
  },
  {
    metric: "Billing Realization Rate ≥ 85%",
    description: "Percentage of billed hours collected; below 75% signals WIP management, write-off, or client billing communication gaps requiring engagement letter or fee review",
  },
  {
    metric: "Client Retention Rate ≥ 90%",
    description: "Percentage of prior-year clients retained; below 85% signals service quality, pricing, or communication issues — annual planning meetings are the primary retention driver",
  },
  {
    metric: "Peer Review Pass Rate 100%",
    description: "Clean peer review report without material findings; a modified peer review report triggers state board notification and reputational risk with referral sources",
  },
]

const testimonial = {
  quote:
    "Tax deadlines for 340 client entities — 1040s, 1120s, 1120-Ss, 1065s, 1041s, 990s, FBARs — on original and extended calendars, quarterly estimated payments for 180 clients on four different dates, monthly and quarterly payroll tax deposits for 55 clients, sales tax filing calendar for 28 clients across 8 states, December year-end audit fieldwork for 22 clients with 60-day workpaper archiving, June year-end audit cycle for 11 nonprofit clients, Single Audit submissions for 6 federal award recipients, peer review enrollment on 3-year cycle with annual documentation, CPE tracking for 18 CPAs across 5 states with different ethics hour requirements, IRS PTIN renewal December 31 for all 18 staff, EFIN annual verification, ASU adoption deadline tracking for clients on new lease and revenue standards, annual tax planning meeting scheduling for 85 clients in September-October, and Form 990 extended deadlines November 15 for 14 nonprofits — all in spreadsheets. Momenties organized everything. We had zero missed deadlines.",
  name: "Emeka A.",
  title: "Managing Partner, Regional Accounting Firm",
}

export default function AccountingFirmCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Accounting Firm Calendar"
        title="Tax Deadlines. Audit Season. CPE Compliance. One Calendar."
        subtitle="Momenties tracks multi-entity tax filing deadlines on original and extended calendars, quarterly estimated payment reminders for every client, audit fieldwork milestones with 60-day workpaper archiving deadlines, peer review 3-year enrollment cycles, CPE completion tracking for all CPAs across every state license, IRS PTIN annual renewal, FASB ASU adoption deadlines by client, annual tax planning meeting windows, and Form 990 cycles so accounting firms never miss a client deadline or compliance obligation."
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
            Four Accounting Firm Pillars Momenties Tracks
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
            12-Month Accounting Firm Calendar
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
            Accounting Firm KPIs Momenties Keeps on Track
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
