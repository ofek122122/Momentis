import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Construction Project Calendar | Momenties",
  description: "Momenties helps construction project managers and GCs track permit timelines, subcontractor milestone schedules, RFI and submittal cycles, inspection windows, and contractor license renewals in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Permit Timelines, Inspection Windows & Code Compliance Calendar",
    description:
      "Construction projects without structured permit calendars lose weeks to avoidable delays — permit processing times range from 2 business days (express review) to 90+ days (complex commercial permits requiring third-party review), and missed inspection windows add 5-15 business days to project schedules per failed inspection. Permit timeline calendar: building permit application submission (design development complete, typically 60% CD drawings), plan check response and resubmittal cycles (first review 15-30 business days, resubmittal 10-15 business days), permit issuance window, and permit expiration tracking (most jurisdictions allow 6-24 months to begin work, 6-month inspection activity requirement to maintain active permit). Inspection calendar: foundation inspection (pre-pour concrete — 24-48 hour advance notice required), underground rough-in (plumbing, electrical conduit — 24 hour notice), framing inspection (prior to insulation), rough MEP inspections (electrical rough, plumbing rough, HVAC rough — concurrent scheduling), insulation inspection, drywall nailing inspection (before board), and final inspections (building, electrical, plumbing, mechanical — coordinated scheduling). Specialty inspection calendar: structural steel inspection (IBC Chapter 17, Special Inspections program), concrete mix design and placement inspection, soils and compaction testing, and third-party envelope testing (ASTM E1105 water infiltration — schedule 2 weeks in advance). Momenties manages every inspection milestone.",
  },
  {
    icon: RefreshCw,
    title: "Subcontractor Milestone Schedules, RFI & Submittal Review Calendar",
    description:
      "Construction schedules without structured RFI and submittal review calendars generate compounding delays — average RFI response time of 10-15 days multiplied by 300-800 RFIs on a complex commercial project represents 50-200 person-days of potential schedule impact if not managed proactively. Submittal review calendar: submittal log creation (NTP + 2 weeks), submittal due dates per procurement lead time (MEP equipment: 8-16 weeks lead, structural steel: 8-12 weeks, glazing: 10-18 weeks, elevators: 20-26 weeks, custom millwork: 8-12 weeks), A/E review cycle (14-day review window per AIA contract), and re-submittal cycle tracking. RFI calendar: RFI log weekly status review, A/E response tracking (10-day response SLA per AIA document), and RFI closeout before affected work begins. Schedule management: CPM schedule update (monthly — required by most general contract general conditions), 3-week look-ahead schedule (weekly), monthly project schedule progress report to owner, and schedule recovery plan trigger (if float below 10 days on critical path). Subcontractor milestone calendar: subcontractor NTP issuance (14 days before mobilization), material release authorization (per submittal approval), subcontractor completion milestones (MEP rough-in, drywall, paint, finish work), and punch list generation and completion tracking (30 days from substantial completion). Momenties schedules every project milestone.",
  },
  {
    icon: TrendingUp,
    title: "Pay Application Cycles, Lien Waiver Management & Owner Reporting Calendar",
    description:
      "Construction cash flow without structured pay application calendars creates project financing crises — the average time from payment application submission to owner payment is 35-60 days, and contractors with structured monthly billing cycles receive payment 8-12 days faster than those with irregular billing. Pay application calendar: monthly pay application submission (typically 25th of each month per contract requirements), conditional lien waivers submitted with each application, unconditional lien waivers issued upon payment receipt, retainage reduction request (typically at 50% completion — per contract terms), and final payment application (30 days after certificate of occupancy). Lien compliance calendar: preliminary notice (in 20-day states — serve within 20 days of first furnishing labor or materials), monthly invoice reconciliation with lien waiver tracking, and mechanics lien filing deadline monitoring (varies by state: 60-90 days after last work in most states, 20 days in some states). Change order calendar: owner change order authorization tracking (10-day response per AIA contract), change order log weekly status review, and change order closeout before final payment. Owner reporting calendar: monthly owner project status report (budget, schedule, RFI/submittal log), weekly construction meeting minutes distribution (24 hours after meeting), and milestone completion certificate issuance. Momenties consolidates the full project financial calendar.",
  },
  {
    icon: BarChart3,
    title: "Contractor License Renewal, Insurance Certificates & Safety Compliance Calendar",
    description:
      "Construction contractors without structured license and insurance renewal calendars face project shutdowns — an expired contractor license discovered during permit application or inspection can halt a project for 30-60 days while renewal is processed. Contractor license renewal calendar: state contractor license renewal (annual or biennial per state — California B General Contractor: biennial, Texas GC Registration: annual, New York HIC: biennial), LEED certification maintenance for LEED APs on green projects (3-year, 30 CE hours), and specialty license renewals (electrical, plumbing, mechanical — separate renewal cycles per state). Insurance certificate calendar: general liability annual renewal (30-day advance certificate issuance to all project owners), workers compensation annual renewal (experience modification rate monitoring), builder&apos;s risk policy placement (per project — 30 days before construction start), umbrella/excess renewal (annual), professional liability (E&O) annual renewal, and subcontractor certificate of insurance collection before each subcontractor mobilization. Safety compliance calendar: OSHA 10-hour and 30-hour training expiration tracking for all site supervisors, weekly toolbox talks documentation, monthly safety inspection documentation, annual OSHA 300 log posting (February 1 - April 30), and OSHA recordable incident rate tracking. Certified payroll reporting (weekly for federally funded projects — Davis-Bacon Act), prevailing wage rate annual update monitoring, and apprenticeship ratio compliance monthly documentation. Momenties tracks all construction compliance cycles.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "OSHA 300 Log Posting & Q1 Project Mobilization",
    description: "Post OSHA 300 log (February 1 - April 30 required posting period). Mobilize Q1 project starts. Submit early design-phase permit applications for projects targeting spring construction. Update prevailing wage rates for federally funded projects. Complete annual contractor license renewals due Q1. Issue January pay applications by the 25th.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Spring Construction Season Launch & Permit Season",
    description: "Launch spring construction season — peak permit application season (March-May). Expedite plan check for projects targeting summer completions. Complete OSHA 300 log annual review. Collect subcontractor COI renewals for all Q2 mobilizations. Run Q1 project financial review — budget vs. actual, change order status, retainage balance. Submit Q2 pay applications.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Peak Construction Season & Mid-Year Schedule Review",
    description: "Peak construction activity — maximize inspection scheduling efficiency. Complete mid-year CPM schedule update for all active projects. Process H1 change orders. Submit retainage reduction requests at 50% completion for eligible projects. Renew annual contractor general liability and workers comp policies (if June anniversary). Run mid-year safety record review — OSHA recordable incident rate.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Summer Completions & Fall Project Planning",
    description: "Target substantial completion for projects started Q1. Begin permit applications for fall project starts. Run lien waiver reconciliation for completed projects. Submit final pay applications and retainage applications. Begin prequalification of subcontractors for fall work. Update subcontractor COI expirations for Q3 mobilizations. Process certificate of occupancy applications for completing projects.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Fall Construction Launch & Year-End Planning",
    description: "Mobilize fall project starts. Submit October pay applications. Run Q3 project status reviews — schedule float analysis, budget variance, RFI backlog. Begin year-end substantial completion planning for projects needing CO before December 31. Complete annual OSHA safety training for all site supervisors. Begin contractor license renewals due Q1 of next year (60-day advance).",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Completions & Annual Compliance Close",
    description: "Push year-end substantial completions and certificate of occupancy issuance. Complete OSHA 300 log year-end reconciliation. Lock next-year project pipeline and permit strategy. Complete final pay applications and retainage releases for completed projects. File annual mechanics lien releases. Submit November and December pay applications. Begin next-year project schedule and permit calendar planning.",
  },
]

const kpis = [
  {
    metric: "Schedule Adherence ≥ 90%",
    description: "Percentage of milestone dates met on original CPM schedule; below 80% triggers contract liquidated damages exposure and owner relationship risk",
  },
  {
    metric: "RFI Response Time ≤ 10 Days",
    description: "Average A/E response time to RFIs; above 15 days compounds schedule delay risk — log escalations to A/E project manager when approaching threshold",
  },
  {
    metric: "Pay Application Cycle ≤ 35 Days",
    description: "Days from application submission to owner payment; above 45 days requires contract review and potential demand letter — cash flow management is mission critical",
  },
  {
    metric: "Change Order Approval Rate ≥ 85%",
    description: "Percentage of submitted change orders approved by owner; below 70% signals scope documentation gaps or adversarial owner relationship requiring proactive management",
  },
  {
    metric: "OSHA Recordable Rate ≤ 2.0",
    description: "Total recordable incident rate per 100 workers; above industry average (3.1 for specialty contractors) increases workers comp EMR and disqualifies from some public project bidding",
  },
  {
    metric: "License and Insurance Compliance 100%",
    description: "Zero expired contractor licenses or lapsed insurance certificates; a single lapse discovered during permit inspection can halt the project for 30-60 days",
  },
]

const testimonial = {
  quote:
    "Permit application tracking with plan check resubmittal cycles across 8 active projects, inspection scheduling 24-48 hours in advance with coordination of building/electrical/plumbing/mechanical concurrent inspections, submittal log with 200 items and 14-day A/E review windows, RFI log with 10-day response SLA tracking, weekly CPM schedule updates, monthly pay applications by the 25th for 8 projects with conditional and unconditional lien waiver tracking, 20-day preliminary notice compliance in California, mechanics lien deadline monitoring, subcontractor COI collection before every mobilization, OSHA 300 log annual posting February 1, weekly toolbox talk documentation for 6 crews, annual contractor license renewals in 3 states, prevailing wage annual rate updates, and certified payroll weekly on 4 federally funded projects — all in spreadsheets. Momenties organized everything. We had zero permit delays from missed inspection windows for the first time.",
  name: "Kwame B.",
  title: "Principal & Project Executive, Commercial General Contractor",
}

export default function ConstructionProjectCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Construction Project Calendar"
        title="Permit Timelines. Inspection Windows. Pay Applications. One Calendar."
        subtitle="Momenties tracks building permit application and plan check resubmittal cycles, 24-48 hour inspection scheduling windows, submittal review calendars with MEP equipment lead times, RFI 10-day response SLA monitoring, monthly pay application cycles with lien waiver management, preliminary notice 20-day compliance, contractor license renewal tracking, OSHA safety compliance documentation, and subcontractor COI collection so construction project managers never miss a permit window or inspection deadline."
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
            Four Construction Project Pillars Momenties Tracks
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
            12-Month Construction Project Calendar
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
            Construction Project KPIs Momenties Keeps on Track
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
