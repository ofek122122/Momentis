import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Real Estate Agency Calendar | Momenties",
  description: "Momenties helps real estate agencies track agent license renewals, CE requirements, MLS compliance, E&O insurance cycles, NAR Code of Ethics training, and seasonal market planning in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Agent License Renewal, CE Compliance & Multi-State License Management",
    description:
      "Real estate agencies without structured license renewal calendars generate state regulatory violations — a lapsed real estate license prohibits agents from earning commissions on any transaction and requires full re-application in most states, making systematic license tracking essential for every agent in the brokerage. Agent license renewal calendar: real estate salesperson license renewal (biennial in most states — each state has different renewal months, creating year-round renewal monitoring obligations for multi-agent offices), broker license renewal (biennial — typically more CE hours than salesperson), CE completion requirements per renewal (most states require 24-45 hours per renewal cycle — state-specific content requirements), and CE provider approval verification (agent CE must be from state-approved providers). State-specific mandatory CE: NAR Code of Ethics training (every 3 years — NAR requirement for all REALTOR® members — next cycle 2025-2027), Fair Housing CE (required annually in some states — California, New York, Illinois), and agency law CE (required in most states). Multi-state license tracking: agents operating under reciprocity agreements maintain renewal in home state plus each reciprocal state — each state may have different renewal dates. Specialty designation renewals: ABR (Accredited Buyer&apos;s Representative, NAR, 3-year), CRS (Certified Residential Specialist, RRC, annual CE), GRI (Graduate, REALTOR® Institute, NAR, state-specific — most one-time), SRES (Senior Real Estate Specialist, NAR, 2-year), and CRE (Counselors of Real Estate, annual). Momenties manages every license milestone.",
  },
  {
    icon: RefreshCw,
    title: "MLS Compliance, NAR Dues Calendar & Brokerage Operations",
    description:
      "Real estate agencies without structured MLS and NAR compliance calendars generate MLS violations and membership suspensions — MLS non-compliance results in lockbox access revocation, listing database suspension, and loss of showing access, creating immediate revenue impact. NAR dues calendar: NAR annual dues (September-October billing for January 1 renewal — most local boards bill in fall, delinquency results in suspension of REALTOR® designation and MLS access by February 1), state REALTOR® association annual dues (concurrent with NAR billing cycle), and local association annual dues (same billing cycle — total annual dues typically $800-$1,200 per agent). MLS compliance calendar: MLS annual dues renewal (January or by association calendar — separate from NAR dues in some markets), MLS rule compliance training (annual CE requirement in most MLS systems), listing input deadline compliance (MLS rules require listings in system within 1-3 business days of agreement), and MLS accuracy audit (annual — MLS associations conduct periodic audits; violations generate fines of $500-$5,000 per violation). Lockbox and showing service annual renewals: Supra/Sentri lockbox system annual subscription, ShowingTime/CSS annual subscription, and E-key authorization annual renewal. Transaction management platform: DocuSign/Dotloop/SkySlope annual subscription renewal and esignature provider compliance audit. State broker supervision requirements: broker annual supervision log maintenance (most states require documented broker supervision for new licensees — first 2 years), and branch office license renewal (separate license in most states). Momenties schedules every compliance deadline.",
  },
  {
    icon: TrendingUp,
    title: "E&O Insurance Renewal, Trust Account Compliance & Agency Legal Calendar",
    description:
      "Real estate agencies without structured E&O and trust account compliance calendars accumulate silent liability exposure — 60% of real estate E&O claims involve undisclosed material facts, inadequate documentation, and contract deadline misses, making annual compliance training the most cost-effective risk management activity. E&O coverage calendar: E&O policy annual renewal (90-day advance process — coverage gap creates personal liability exposure for all transactions during gap period), E&O retroactive date monitoring (ensure no coverage gap in transaction history), and E&O claims reporting SLA (most policies require reporting within 30-60 days of known or suspected claim). Trust account compliance calendar: client trust account monthly three-way reconciliation (required in most states — escrow/earnest money reconciliation), quarterly trust account audit (state-specific — California requires quarterly reconciliation and annual review), and annual trust account education (required CE in most states for brokers managing trust accounts). Real estate transaction legal calendar: dual agency disclosure documentation (required in 48 states — must be documented per transaction), property condition disclosure timeline (required in most states — 5-10 days from accepted offer), and 1031 exchange identification window management (45-day identification deadline per exchange). Antitrust compliance: NAR REALTOR® Code of Ethics annual acknowledgment, Sherman Antitrust Act annual training (required after 2024 NAR settlement), buyer representation agreement documentation (NAR settlement requirement — written buyer agreements required before showing in participating MLS markets). Momenties tracks all legal and compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Seasonal Market Calendar, Lead Generation Cycles & Agent Performance Planning",
    description:
      "Real estate agencies without structured seasonal market and lead generation calendars miss the predictable inventory peaks that drive annual revenue — spring market (March-June) represents 40-50% of annual transaction volume for most markets, and brokerages that launch agent lead generation programs in January outperform reactive brokerages by 25% in spring transaction volume. Seasonal market calendar: spring market launch (January 1 — database activation, just-listed campaigns, open house schedule launch), spring peak (March-May — maximum active listing and buyer engagement), summer slowdown strategy (June-August — shift to relocation buyers, investment buyers), fall market launch (August — second wave of listing activity before school year), fall peak (September-October — inventory spike), and holiday market strategy (November-December — serious buyer focus, price reduction opportunities). Lead generation calendar: sphere of influence annual contact plan (minimum 12 touches per contact per year — birthday, anniversary, market update, holiday), annual client appreciation event (Q4 or spring), past client review and referral request campaign (January and July), and just-listed/just-sold postcard campaign calendar (per listing cycle — 2-week campaign). Agent development calendar: annual production goal review (December/January), quarterly individual agent coaching reviews, annual team retreat and goal-setting, and designation/certification program enrollment (ABR, SRES, CRS — annual enrollment windows). Continuing education planning: state CE completion planning (12-month rolling window before license renewal). Momenties consolidates the full real estate agency calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "NAR Dues Delinquency Deadline & Spring Market Launch",
    description: "Confirm NAR, state, and local association dues paid (delinquency suspension triggers February 1 in most markets). Launch spring market lead generation — database activation, market update emails, open house schedule. Begin CE completion for agents with spring license renewals. Review E&O policy for January anniversary renewals (90-day advance). Run trust account January reconciliation. Submit any outstanding year-end transaction documentation. Complete NAR Code of Ethics training for agents in 3-year cycle due.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Spring Peak Season Execution & License Renewal Push",
    description: "Execute spring market peak operations (March-May — maximum listing and buyer activity). Complete CE requirements for agents with April-May renewal deadlines. Run Q1 trust account reconciliation and broker supervision log review. Renew MLS subscriptions if spring billing cycle. Complete Fair Housing annual CE for states with spring deadline. Launch past client spring referral campaign. Review buyer representation agreement compliance (post-NAR settlement documentation audit).",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Mid-Year Performance Review & E&O Renewal Prep",
    description: "Run mid-year production review against annual goals. Begin E&O renewal for July anniversary policies (90-day advance). Complete state license renewals due in summer. Run trust account Q2 reconciliation. Begin fall market listing inventory preparation (July-August). Complete any outstanding NAR Code of Ethics training for 2025-2027 cycle. Review all agent CE completion pacing for year-end license renewals. Run mid-year agent coaching reviews.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Fall Market Prep & NAR Dues Billing Season Begins",
    description: "Launch fall market preparation — database outreach, listing inventory targeting (August just-listed campaigns). NAR annual dues billing begins (September-October — begin Q3 cash flow planning for dues season). Complete summer license renewals. Run Supra/lockbox annual subscription renewals. Complete back-to-school move-in transactions (July 15-August 15 closing peak for families). Begin annual CE planning for agents with fall/winter license renewals. Run Q3 trust account reconciliation.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "NAR Dues Season & Fall Market Peak",
    description: "Pay NAR, state, and local association dues (September-October billing — avoid February 1 delinquency suspension). Execute fall market peak (September-October inventory surge). Complete CE for agents with October-November renewal deadlines. Renew E&O policy for January anniversary (90-day advance — October renewal process). Run annual agent production goal-setting sessions for following year. Begin past client annual appreciation event planning (Q4). Run Q3 trust account reconciliation and annual trust account CE.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Close & Annual Business Planning",
    description: "Execute holiday market strategy (serious buyers, price reduction campaigns). Complete all remaining CE for year-end license renewal deadlines. Run year-end trust account reconciliation and annual audit documentation. Submit any MLS compliance documentation. Lock next-year business plan and lead generation calendar. Run annual team retreat. Complete NAR Code of Ethics 3-year cycle documentation for agents due. Plan spring market launch strategy (January execution). Run year-end agent performance reviews.",
  },
]

const kpis = [
  {
    metric: "Agent License Renewal On-Time Rate 100%",
    description: "Zero lapsed agent licenses across all states; a single lapsed license prohibits earned commissions on any active transaction and requires full state re-application — typically 30-60 day processing delay",
  },
  {
    metric: "NAR Dues Paid On-Time 100%",
    description: "All agents with paid NAR, state, and local association dues before February 1 delinquency deadline; delinquency triggers MLS access suspension — immediate revenue impact on all active transactions",
  },
  {
    metric: "Trust Account Reconciliation On-Time 100%",
    description: "Monthly trust account three-way reconciliation completed; trust account violations are the most common cause of real estate broker license suspension and disciplinary proceedings",
  },
  {
    metric: "CE Completion Rate 100%",
    description: "All agents completing required CE hours before license renewal deadline; incomplete CE at renewal generates automatic license lapse requiring expedited CE completion and reinstatement fees",
  },
  {
    metric: "Buyer Representation Agreement Compliance 100%",
    description: "Written buyer representation agreements executed before first property showing per NAR settlement requirement; non-compliance with settlement terms generates MLS suspension for the brokerage",
  },
  {
    metric: "E&O Coverage Continuous 100%",
    description: "Zero gaps in errors and omissions coverage; an E&O coverage lapse creates uninsured personal liability exposure for broker on all transactions during the gap period",
  },
]

const testimonial = {
  quote:
    "Real estate license renewals for 22 agents across 3 states on biennial cycles with different renewal months, CE tracking for 22 agents with state-specific hour requirements and mandatory Fair Housing content, NAR Code of Ethics 3-year cycle tracking for all 22 agents, NAR dues annual billing in September-October with February 1 delinquency deadline, MLS annual dues renewal for 2 MLS systems, monthly trust account three-way reconciliation, quarterly trust account audit documentation, E&O policy annual renewal 90-day advance, Supra lockbox annual subscription renewal, ShowingTime annual subscription, buyer representation agreement compliance audit after NAR settlement, ABR 3-year renewal for 8 agents, SRES 2-year renewal for 5 agents, seasonal market campaign calendar with 8 major campaigns, annual client appreciation event Q4, monthly sphere-of-influence contact plan for database of 3,200 contacts, and agent quarterly coaching review calendar — all in spreadsheets. Momenties organized everything. Zero CE lapses all year.",
  name: "Adaeze R.",
  title: "Qualifying Broker, Regional Real Estate Agency",
}

export default function RealEstateAgencyCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Real Estate Agency Calendar"
        title="Agent License Renewals. NAR Dues Deadlines. E&O Coverage. One Calendar."
        subtitle="Momenties tracks agent license renewals across all states with CE completion audits, NAR annual dues billing cycles with February 1 delinquency deadlines, monthly trust account reconciliation requirements, E&O insurance 90-day advance renewal windows, MLS compliance training, buyer representation agreement compliance documentation, NAR Code of Ethics 3-year cycle tracking, seasonal market campaign production windows, and annual agent designation renewal cycles so real estate agencies never miss a compliance deadline or lead generation window."
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
            Four Real Estate Agency Pillars Momenties Tracks
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
            12-Month Real Estate Agency Calendar
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
            Real Estate Agency KPIs Momenties Keeps on Track
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
