import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Restaurant Operations Calendar | Momenties",
  description: "Momenties helps restaurant operators track health inspection cycles, liquor license renewals, food handler certification, menu review cadences, and seasonal staffing cycles in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Health Inspection Cycles, Food Safety Compliance & Permit Renewal Calendar",
    description:
      "Restaurant operations without structured compliance calendars generate preventable health department violations — establishments with active food safety management systems receive 40% fewer critical violations per FDA Food Code audit data than those without. Health inspection calendar: local health department inspection cycle (varies by jurisdiction — typically 2-4 times per year for full-service restaurants, annually for limited-service), health permit annual renewal (most jurisdictions require renewal 30-60 days before expiration), and re-inspection window tracking (typically 10-30 days after violation citation). Food safety certification calendar: Certified Food Protection Manager (CFPM) renewal every 5 years — most jurisdictions require at least one CFPM on-site per shift (ServSafe, National Registry, PRFPC approved), food handler certification for all staff (annual in most states — ServSafe Handler, 3-year certificate), and allergen awareness training annual documentation. Temperature log compliance: daily temperature logs for refrigeration and hot-hold equipment (required by FDA Food Code 3-501.16), HACCP plan annual review and update, and TCS (Time/Temperature Control for Safety) procedure annual audit. Liquor license compliance: liquor license annual renewal (45-90 days advance preparation), ABC compliance training annual attestation for all bartenders and servers (required in most states), and third-party alcohol server certification (TIPs or ServSafe Alcohol, 3-year renewal). Fire safety: kitchen hood and suppression system inspection (semi-annual in most jurisdictions), fire extinguisher annual inspection, and fire safety training annual documentation. Momenties manages every compliance milestone.",
  },
  {
    icon: RefreshCw,
    title: "Menu Review Cadences, COGS Analysis & Vendor Contract Calendar",
    description:
      "Restaurant profitability without structured menu engineering cycles erodes silently — food cost increases of 3-5% over 12 months without compensating menu price adjustments reduce restaurant net margins by 2-4 percentage points annually. Menu review calendar: quarterly COGS analysis by menu item (food cost percentage target typically 28-35% for full-service, 25-30% for QSR), semi-annual menu engineering matrix review (stars/plowhorses/puzzles/dogs classification), annual full menu redesign (new items, retired items, price adjustments), and seasonal menu updates (typically 4 seasonal rotations per year — spring, summer, fall, winter). Vendor contract calendar: primary food supplier contract renewal (annual — negotiate 60 days in advance), produce vendor pricing review (monthly or market-based), beverage distribution agreement annual review, smallwares and equipment supplier annual review, and linen service annual renewal. Commodity pricing calendar: monthly USDA commodity price monitoring for beef, poultry, pork, dairy, and produce, weekly spot market monitoring for high-volatility items, and quarterly menu price adjustment review based on COGS variance. Bar program review: spirits and wine by-the-glass program quarterly review, beer tap rotation monthly, and annual spirits program strategic review. Momenties schedules every menu and vendor milestone.",
  },
  {
    icon: TrendingUp,
    title: "Seasonal Staffing Cycles, Training Compliance & Labor Management Calendar",
    description:
      "Restaurant labor without structured planning calendars generates last-minute hiring that produces undertrained staff — restaurants that hire minimum 4 weeks before peak season achieve 35% lower 90-day turnover than those that hire reactively. Seasonal staffing calendar: summer staffing ramp (April-May hiring cycle), holiday staffing ramp (October-November hiring cycle), spring break planning (February for coastal markets, March for university markets), Valentine&apos;s Day staffing (90-day planning), and Mother&apos;s Day staffing (120-day planning for highest-revenue single day). New hire training calendar: FOH server training (5-7 day onboarding, 2-week sidework before solo section), BOH culinary training (2-4 week station training per position), bartender certification training (brand program compliance, 3-4 weeks), and manager onboarding (30-60-90 day structured development). Annual compliance training calendar: sexual harassment prevention training (annual in most states — California, New York, Illinois require annual training with specific hour minimums), OSHA safety training annual documentation, and PCI compliance training annual for all staff processing payments. Tip pool compliance: annual tip pool policy review per FLSA updates, tip credit documentation audit (quarterly), and 8/80 overtime rule compliance review. Workers compensation annual audit and insurance renewal. Momenties tracks all labor compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Equipment Maintenance Cycles, Lease Management & Financial Compliance Calendar",
    description:
      "Restaurant equipment without structured maintenance calendars generates emergency repair costs 3-5x higher than preventive maintenance costs — a failed walk-in refrigeration unit during peak season can result in $15,000-$40,000 in food spoilage, repair, and revenue loss. Equipment maintenance calendar: commercial hood cleaning (quarterly in most jurisdictions — required by NFPA 96), grease trap pumping (monthly for high-volume restaurants, quarterly for lower-volume), walk-in cooler and freezer preventive maintenance (quarterly), commercial dishwasher monthly chemical calibration and quarterly service, HVAC semi-annual service, exhaust fan quarterly cleaning, and fryer oil testing and replacement cycle. Lease and real estate calendar: lease renewal decision timeline (12-18 months before expiration — option exercise windows are typically 6-12 months before expiration), lease commencement anniversary rent adjustment review (annual CPI escalation clause), CAM (Common Area Maintenance) reconciliation (annual — landlord typically provides within 90 days of fiscal year end), and personal guarantee annual review with legal counsel. Financial compliance calendar: sales tax filing (monthly or quarterly per state), payroll tax quarterly deposit, annual W-2 and 1099 distribution (January 31), tip income tax reporting (Form 8027 annual filing for large food and beverage establishments), and POS system annual security audit. Momenties consolidates the full restaurant operations calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Q1 Compliance Launch & Valentine&apos;s Day Preparation",
    description: "Complete annual CFPM certification renewals due in Q1. File Form 8027 annual tip income report (January 31 for prior year). Begin Valentine's Day staffing and prep (90-day window). Renew health permits due in Q1. Complete annual payroll tax filing. Review Q4 COGS performance and adjust menu pricing if food cost variance exceeds 2%. Conduct Q1 hood cleaning inspection.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Spring Menu Launch & Summer Staffing Ramp",
    description: "Launch spring seasonal menu. Begin summer staffing hiring cycle (April for June/July peak). Complete annual food handler certification for all staff. File Q1 sales tax returns. Renew liquor license if Q2 expiration (60-day advance). Complete annual sexual harassment prevention training (California/NY/IL deadline). Run quarterly COGS analysis and menu engineering matrix.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Mother&apos;s Day Execution & Summer Operations",
    description: "Execute Mother's Day (single highest-revenue day — 120-day prep cycle completes). Launch summer menu and full summer staffing. Complete Q2 equipment preventive maintenance (walk-in, HVAC, fryer service). File Q2 sales tax returns. Review vendor contract expirations for H2 renewals. Submit Q2 health department re-inspections if any Q1 citations.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Mid-Year Financial Review & Fall Menu Planning",
    description: "Run mid-year P&L review with labor cost and food cost analysis. Begin fall menu development and costing. Review lease terms if renewal decision deadline approaching. Conduct Q3 grease trap pumping. Complete mid-year tip pool compliance audit. Evaluate summer staffing performance for retention into fall. Begin holiday staffing planning (90-day window opens August for November).",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Holiday Staffing Ramp & Year-End Compliance Prep",
    description: "Launch holiday staffing hiring (October — 10 weeks before Thanksgiving). Launch fall/winter seasonal menu. Begin holiday event booking calendar. Complete Q3 hood cleaning and fire suppression inspection. Review and renew expiring vendor contracts for year-end. File Q3 sales tax returns. Complete annual OSHA safety training documentation. Renew health permits due Q4.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Holiday Season Execution & Annual Planning",
    description: "Execute holiday season peak (Thanksgiving, Christmas, New Year's Eve). Complete annual menu engineering review — retire underperformers, price adjustments for next year. Lock next-year staffing and marketing calendar. File Q4 sales tax returns. Complete annual POS security audit. Review lease for next-year CAM reconciliation. Begin next-year food safety certification renewal planning.",
  },
]

const kpis = [
  {
    metric: "Health Inspection Score ≥ 90/A Grade",
    description: "Consistently high health inspection scores; B or C grade reduces foot traffic 10-30% and triggers more frequent inspections increasing compliance burden",
  },
  {
    metric: "Food Cost Percentage 28–32%",
    description: "Monthly food cost as percentage of food revenue; above 35% requires immediate menu price review or vendor renegotiation to protect margin",
  },
  {
    metric: "Labor Cost Percentage 28–35%",
    description: "Weekly labor cost as percentage of total revenue; above 38% signals scheduling inefficiency, overtime overuse, or revenue shortfall requiring immediate attention",
  },
  {
    metric: "Liquor License Compliance 100%",
    description: "Zero license violations or ABC citations; a single major ABC violation can suspend operations and trigger mandatory server retraining requirements",
  },
  {
    metric: "90-Day Staff Retention ≥ 70%",
    description: "Percentage of new hires still employed at 90 days; below 50% signals training quality, culture, or scheduling issues increasing hiring and training costs",
  },
  {
    metric: "Equipment Downtime ≤ 2 hrs/month",
    description: "Critical equipment (walk-in, hood, fryer) unplanned downtime; exceeding 8 hours per month signals deferred maintenance creating food safety risk and revenue loss",
  },
]

const testimonial = {
  quote:
    "Quarterly health department inspections with preparation cycles, annual health permit renewal 60 days in advance, annual CFPM certification renewal for 3 managers, food handler annual certification for 45 staff, semi-annual hood and fire suppression inspection, quarterly grease trap pumping, monthly walk-in PM, annual liquor license renewal 90 days advance, quarterly ABC compliance attestation, seasonal menu launches 4 times per year with COGS analysis, monthly vendor commodity price monitoring, annual vendor contract renewals for 8 primary suppliers, Valentine&apos;s Day and Mother&apos;s Day 90-120 day staffing cycles, summer and holiday staffing ramps, annual sexual harassment training for all staff, Q1-Q4 sales tax filings, Form 8027 annual tip reporting, lease CAM reconciliation, and POS annual security audit — all in spreadsheets. Momenties organized everything. We had zero compliance gaps for the first time.",
  name: "Emeka R.",
  title: "Multi-Unit Restaurant Operator, 4 Locations",
}

export default function RestaurantOperationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Restaurant Operations Calendar"
        title="Health Inspections. Liquor License. Seasonal Staffing. One Calendar."
        subtitle="Momenties tracks health department inspection preparation cycles, liquor license renewal timelines, CFPM and food handler annual certification, kitchen hood semi-annual inspection, grease trap quarterly pumping, seasonal menu launch cycles with COGS analysis, Valentine's Day and Mother's Day 90-120 day staffing windows, summer and holiday staffing ramps, quarterly sales tax filings, and equipment preventive maintenance schedules so restaurant operators never miss a compliance deadline or peak season preparation window."
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
            Four Restaurant Operations Pillars Momenties Tracks
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
            12-Month Restaurant Operations Calendar
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
            Restaurant Operations KPIs Momenties Keeps on Track
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
