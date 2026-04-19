import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Insurance Operations Calendar | Momenties",
  description: "Momenties helps insurance operations leaders track state license renewals, CE requirements, annual filing deadlines, rate revision cycles, and agent appointment renewals in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "State Insurance License Renewals, CE Requirements & Producer Appointment Calendar",
    description:
      "Insurance operations without structured license renewal calendars generate state regulatory violations — a lapsed insurance producer license generates automatic termination of all agent appointments in that state, requiring re-application with potential 30-90 day processing delays and interruption of all business in that state. Producer license renewal calendar: state insurance producer license renewal (varies by state — most states are biennial, some states annual — 50 different renewal dates across 50 states for multi-state producers), CE completion requirements per renewal (24-36 hours in most states — typically 3 hours ethics plus general line requirements), non-resident license renewal tracking (most non-resident licenses renew with home state schedule, but some states have independent non-resident renewal dates), and license surrender/conversion tracking. Agent appointment renewal: carrier appointment renewal (annual — most carriers require active appointment renewal for producers to bind business), NIPR (National Insurance Producer Registry) profile verification annual, and appointment termination monitoring (carriers file termination notices with state within 30 days of termination). Surplus lines: surplus lines broker license renewal (separate from standard lines — biennial in most states), surplus lines filing fees and tax reporting deadlines (quarterly or semi-annual per state), and NAPLSO annual surplus lines compliance review. Momenties manages every license milestone.",
  },
  {
    icon: RefreshCw,
    title: "Rate Filing Deadlines, Form Filings & State Regulatory Submission Calendar",
    description:
      "Insurance product compliance without structured filing calendars generates state regulatory violations — using unapproved rates or forms in a state constitutes a market conduct violation subject to fines averaging $50,000-$250,000 per violation per state. Rate filing calendar: annual rate revision cycle (for most property-casualty lines — rates must be filed and approved or effective-on-filing before use), rate change implementation monitoring (approved rates must be implemented within regulatory window — typically 60-90 days after approval), rate adequacy analysis annual (actuarial certification required for most lines), and experience modification rate annual update. Form filing calendar: policy form revision annual review (NAIC annual model act updates), certificate of insurance form approval (many states regulate COI forms), endorsement filing annual review, and ISO/AAIS circular adoption calendar (carriers electing to adopt ISO form revisions must file within specified windows — typically annual). State market conduct compliance: annual market conduct self-assessment, state market conduct examination preparation, and state consumer complaint ratio monitoring quarterly. Financial regulatory filings: annual statement filing (NAIC annual statement due March 1 for most lines), quarterly financial statements (Q1 due May 15, Q2 due August 15, Q3 due November 15), and RBC (Risk-Based Capital) annual report. Momenties schedules every filing cycle.",
  },
  {
    icon: TrendingUp,
    title: "Claims Compliance Calendar, Reserving Reviews & Loss Development Reporting",
    description:
      "Claims operations without structured compliance calendars generate bad faith exposure — state claims handling regulations impose specific timeliness requirements for acknowledgment (5-15 days), investigation (15-30 days), and payment (30-45 days after liability determination) with late payment penalties of 10-18% interest in most states. Claims compliance calendar: claims acknowledgment SLA monitoring (state-specific — typically 5-15 business days from receipt), investigation completion SLA (state-specific — typically 30-45 business days), claims payment SLA (state-specific — typically 30 days after liability determination), and bad faith claims review (claims open ≥90 days beyond SLA require supervisor review). Reserving calendar: monthly reserve adequacy review (IBNR development analysis), quarterly actuarial reserve review, annual actuarial opinion (required for NAIC annual statement), and year-end case reserve development analysis. Loss development calendar: quarterly loss triangle update, annual actuarial rate need analysis (required for rate filing support), annual large loss review (claims exceeding $100,000 — individual review), and catastrophe claims quarterly development review. Reinsurance compliance: treaty annual renewal negotiation (90-day advance), facultative certificate annual audit, cedant reporting deadlines per treaty (monthly or quarterly), and reinsurance recoverables quarterly reconciliation. Momenties consolidates the full claims compliance calendar.",
  },
  {
    icon: BarChart3,
    title: "Producer Compliance Training, E&O Coverage & Insurance Operations Development Calendar",
    description:
      "Insurance operations without structured E&O and compliance training calendars accumulate silent liability exposure — 70% of E&O claims against insurance agencies involve failure to advise, follow-up, or document adequately, making annual training the most cost-effective E&O risk management activity. Annual compliance training calendar: state CE completion documentation (annual training audit — ensure all producers completing CE before license renewal deadline, with buffer), anti-money laundering (AML) training annual completion (required for producers selling annuities and life insurance — FINRA and state requirements), anti-fraud training annual completion (required in most states — California annually, Texas biennially), and cybersecurity awareness training annual (NAIC cyber security model regulation compliance in 23+ states). E&O coverage calendar: E&O policy annual renewal (90-day advance renewal process — carrier evaluation, coverage review, premium negotiations), E&O retroactive date monitoring (ensure no gaps in coverage), and E&O claims reporting SLA (most policies require reporting within 30-60 days of known or suspected claim). Professional development calendar: CPCU (Chartered Property Casualty Underwriter) annual CE for CPCU holders (3 credits/year), CIC (Certified Insurance Counselor) annual continuation (annual institute completion), and CPIA (Certified Professional Insurance Agent) annual update. Agency management: annual agency errors and omissions self-audit, carrier production minimums annual review, and contingent compensation calculation annual verification. Momenties tracks all insurance operations cycles.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "NAIC Annual Statement Filing & Producer License Renewal Season",
    description: "File NAIC annual financial statement (March 1 deadline — begin January). Complete Q4 claims SLA review and reserve year-end development. Renew producer licenses expiring Q1-Q2 with CE completion verification. File Q4 surplus lines tax reports. Run January producer appointment verification. Submit rate filings for products requiring annual rate review.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 Financial Filing Deadlines & CE Audit",
    description: "File Q1 NAIC quarterly statement (May 15 deadline). Run mid-year CE completion audit for producers with fall license renewals. Renew reinsurance treaties expiring H1 (90-day advance negotiations). Complete anti-fraud training for states with annual requirement. Run Q1 claims compliance SLA review. File rate revisions for summer effective dates.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Market Conduct Prep & Mid-Year Reserving Review",
    description: "File Q2 NAIC quarterly statement (August 15 deadline). Complete mid-year actuarial reserve adequacy review. Run market conduct self-assessment for states with active examination potential. Complete AML training annual documentation for life and annuity producers. Review carrier appointment renewals expiring H2. Run mid-year E&O claims audit.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Q2 Financial Filings & Fall License Renewal Prep",
    description: "File Q2 quarterly statement (August 15). Begin CE completion push for producers with fall license renewals. Run surplus lines Q2 tax filings. Review non-resident license renewal dates for Q4 expirations. Complete cybersecurity awareness training annual documentation. Renew E&O policy (90-day advance for January anniversary).",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Q3 Filing Season & Annual Rate Review",
    description: "File Q3 NAIC quarterly statement (November 15 deadline). Launch annual rate need analysis for next-year filings. Run Q3 claims SLA compliance review. Complete anti-fraud training for states with Q4 annual deadline. Review CPCU and CIC annual CE completion for year-end credential maintenance. Run Q4 surplus lines advance tax estimate.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Compliance Close & Annual Planning",
    description: "File Q3 quarterly statement (November 15). Complete year-end producer license renewal audit — verify all active producers current in all states. File year-end surplus lines tax returns. Lock next-year rate filing calendar. Complete annual actuarial opinion for year-end annual statement. Run year-end NIPR profile verification for all producers. Plan next-year CE and compliance training calendar.",
  },
]

const kpis = [
  {
    metric: "Producer License Renewal On-Time Rate 100%",
    description: "Zero lapsed producer licenses across all states; a single lapse terminates all carrier appointments in that state requiring full re-application",
  },
  {
    metric: "Claims SLA Compliance ≥ 98%",
    description: "Percentage of claims meeting state-mandated timeliness requirements; below 95% creates bad faith exposure and state market conduct examination triggers",
  },
  {
    metric: "NAIC Financial Statement On-Time Rate 100%",
    description: "Zero late annual or quarterly financial statements; late filing triggers state insurance department inquiry and potential license action",
  },
  {
    metric: "CE Completion Rate ≥ 100%",
    description: "All producers completing required CE hours before license renewal deadline; incomplete CE at renewal requires emergency completion or license lapse",
  },
  {
    metric: "Rate Filing Implementation Compliance 100%",
    description: "Zero instances of using unapproved rates or forms; using unapproved rates constitutes a market conduct violation with fines averaging $50,000-$250,000 per state",
  },
  {
    metric: "Reinsurance Treaty Renewal On-Time 100%",
    description: "All treaty renewals completed before expiration; an expired reinsurance treaty creates unprotected exposure for all new and renewal business bound during the gap",
  },
]

const testimonial = {
  quote:
    "Producer license renewals across 38 states for 24 producers on biennial cycles with different state renewal dates, CE completion audits for all 24 producers with content category requirements per state, carrier appointment renewal tracking for 12 carriers, non-resident license tracking for 32 producer-state combinations with different non-resident renewal schedules, surplus lines quarterly tax filings in 8 states, NAIC annual statement March 1 deadline, Q1-Q3 quarterly financial statements, annual actuarial opinion, annual rate filings for 6 product lines, form filing annual reviews, quarterly claims SLA compliance monitoring across 5 adjusting offices, monthly reserve adequacy review, annual reinsurance treaty renewals for 4 treaties with 90-day advance negotiations, annual E&O renewal, AML annual training documentation for 18 life and annuity producers, annual anti-fraud training for all staff, and CPCU annual CE for 8 CPCU holders — all in spreadsheets. Momenties organized everything. We had zero license lapses for the first time.",
  name: "Kwame I.",
  title: "VP Insurance Operations & Chief Compliance Officer",
}

export default function InsuranceOperationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Insurance Operations Calendar"
        title="Producer Licenses. Rate Filings. Claims SLA Compliance. One Calendar."
        subtitle="Momenties tracks producer license renewals across all 50 states with CE completion audits, NAIC annual and quarterly financial statement deadlines, annual rate filing cycles, form filing annual reviews, quarterly claims SLA compliance monitoring, annual actuarial reserving reviews, reinsurance treaty annual renewal negotiations, surplus lines quarterly tax filings, annual E&O renewal timelines, and AML training documentation so insurance operations leaders never miss a regulatory filing or license renewal."
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
            Four Insurance Operations Pillars Momenties Tracks
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
            12-Month Insurance Operations Calendar
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
            Insurance Operations KPIs Momenties Keeps on Track
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
