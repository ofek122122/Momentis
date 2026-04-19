import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Nonprofit Development Calendar | Momenties",
  description: "Momenties helps nonprofit development directors track grant application deadlines, annual fund campaign cycles, major donor cultivation timelines, planned giving stewardship, and fundraising event planning windows in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Grant Application Deadlines, Foundation Research & LOI Calendar",
    description:
      "Nonprofit development without structured grant calendars loses the single most predictable funding source — foundation grant deadlines are known 6-12 months in advance, and organizations that apply 8+ weeks before deadline receive 23% higher award rates than those that rush applications in the final 2 weeks. Grant application calendar: letter of inquiry (LOI) submission windows (typically 3-6 months before full proposal deadline — many foundations require LOI before invitation to apply), full grant proposal submission deadlines (foundation-specific — most major foundations have 1-2 annual deadlines), federal grant deadlines (Grants.gov subscription alerts — RFA deadlines 30-90 days from publication), and state government grant deadlines (annual cycle per state agency). Grant research calendar: Candid (GuideStar/Foundation Center) prospect research quarterly, 990 review of top prospects annually, IRS Publication 78 annual verification for tax-exempt status of recipient organizations, and new foundation launch monitoring (quarterly). Grant relationship calendar: funder cultivation meetings (3-6 months before application cycle), site visit preparation (2-4 weeks when scheduled by funder), and interim and final report deadlines (30-90 days after grant period end depending on funder). Grant pipeline management: monthly grant pipeline review, quarterly grant portfolio review with board development committee, and annual grant revenue vs. budget variance analysis. Momenties manages every grant deadline.",
  },
  {
    icon: RefreshCw,
    title: "Annual Fund Campaign Cycles, Direct Mail & Digital Fundraising Calendar",
    description:
      "Annual fund programs without structured campaign calendars miss the predictable giving peaks that drive 60%+ of annual fund revenue — year-end (October-December) represents 30% of annual giving, and GivingTuesday alone accounts for 2-5% of annual digital revenue for organizations with active online fundraising programs. Annual fund campaign calendar: year-end campaign (September strategy, October content production, November launch, December follow-up — 5x typical donation velocity), GivingTuesday (first Tuesday after Thanksgiving — 8-week preparation minimum), spring campaign (April/May — second-highest giving window for many cause areas), and fiscal year-end campaign (if June fiscal year — May-June push). Direct mail calendar: cultivation mailing (September — pre-year-end warming), year-end appeal (November — print lead time 4-6 weeks, mail date target November 15-20), new year gratitude/receipt mailing (January — within 30 days of December gifts), and spring reactivation mailing (March — lapsed donor reactivation). Digital fundraising calendar: email cultivation series (monthly newsletter — 12-month annual plan), year-end email series (5-7 emails October-December), GivingTuesday email series (3-4 emails preceding and day-of), and social media content calendar (30-day advance planning). Peer-to-peer fundraising calendar: spring P2P campaign launch (February-March preparation, April-May execution). Momenties schedules every development campaign.",
  },
  {
    icon: TrendingUp,
    title: "Major Donor Cultivation Cycles, Planned Giving & Principal Gift Calendar",
    description:
      "Major gift programs without structured cultivation calendars convert at half the rate of programs with systematic touchpoint cadences — donors with 12+ meaningful touchpoints in the 18 months before ask demonstrate 41% higher close rates than those with fewer than 6 touchpoints. Major donor stewardship calendar: personal stewardship calls (monthly for donors above threshold — typically gifts of $10,000+ annually), personal meetings (annual — for donors above major gift threshold), site visits (annual or semi-annual for top donors), impact reports (quarterly for major donors — individual program updates), and birthday/anniversary recognition (annual — personal acknowledgment). Major gift ask calendar: proposal development timeline (6-12 weeks), ask meeting scheduling (3-5 year relationship cultivation target before principal gift ask), post-ask follow-up (24-48 hour follow-up contact), and pledge payment schedule tracking (annual reminder for multi-year pledges). Planned giving calendar: planned giving society annual luncheon (June or October), bequest intention annual confirmation letters (January — for known bequest expectancies), CGAs (Charitable Gift Annuities) annual payment processing, and planned giving newsletter quarterly distribution. Board member fundraising calendar: board individual fundraising commitments annual review, board member donor introductions (quarterly tracking), and board giving campaign annual close (October). Capital campaign calendar: feasibility study (12-18 months before public launch), quiet phase (18-24 months), public launch, and campaign close. Momenties schedules every major gift milestone.",
  },
  {
    icon: BarChart3,
    title: "Fundraising Event Planning Calendar, Sponsorship Cycles & Donor Stewardship Reporting",
    description:
      "Fundraising events without structured planning timelines generate 40% higher event costs and 25% lower net revenue than events with 6-month advance planning cycles — venue availability, sponsor commitment windows, and print lead times all require structured advance planning. Gala and major event calendar: venue selection and contract (9-12 months before event), event chair and committee formation (8-10 months before), honoree selection and acceptance (6-8 months before), sponsorship prospecting (8-10 months before), sponsorship deadline (4-6 months before), invitation design and print (8 weeks before), save-the-date (4-6 months before), and invitation mailing (6-8 weeks before). Sponsorship calendar: corporate partner prospecting (September-October for next-year calendar), sponsorship proposals (October-November), sponsorship commitments (December-January), and fulfillment and impact reporting (post-event, within 30 days). Walk/Run event calendar: permit applications (12-16 weeks before event), participant registration opening (4-6 months before), fundraising page activation, and team captain recruitment (3-4 months before). Stewardship reporting calendar: acknowledgment letters within 48 hours of gift, IRS substantiation letters (for gifts over $250 — required by January 31 of following year), quarterly impact reports for major donors, and annual impact report production (Q1 for prior year — print and digital). Donor recognition: annual report donor listing review (90-day production timeline), and recognition event annual planning. Momenties consolidates the full development calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Year-End Thank Yous & Foundation Grant Season Launch",
    description: "Send IRS substantiation letters (January 31 deadline for gifts over $250 in prior year). Complete year-end campaign close analysis. Send new year gratitude mailing. Submit federal grant applications with February-March deadlines. Confirm planned giving bequest intention letters. Renew foundation relationships — schedule spring funder meetings. Complete annual report donor listing.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Spring Campaign Execution & Annual Gala Prep",
    description: "Launch spring annual fund campaign. Execute spring P2P fundraising campaign. Submit foundation LOIs for summer/fall deadlines (6-month advance). Begin gala planning for fall event (venue selection, chair recruitment). Complete Q1 grant reports for active grants. Run spring board fundraising commitment review. Finalize annual impact report.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Fiscal Year-End Campaign & Mid-Year Review",
    description: "Execute fiscal year-end campaign (May-June for June 30 FY nonprofits). Complete H1 foundation grant submissions. Send quarterly major donor impact reports. Lock fall gala sponsorship prospecting (8-10 months before event). Launch planned giving society annual event planning. Run mid-year development department revenue vs. budget review.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Year-End Campaign Strategy & GivingTuesday Prep Start",
    description: "Lock year-end campaign strategy (September execution planning). Begin GivingTuesday 8-week preparation window. Complete summer foundation grant submissions. Submit federal grant applications with August-September deadlines. Run major donor cultivation meeting calendar for fall. Lock gala sponsorship deadline (4-6 months before October event).",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Year-End Campaign Launch & Fall Gala Execution",
    description: "Launch year-end campaign (September content production, October launch). Execute fall gala. Launch GivingTuesday campaign preparation (final 4 weeks). Submit fall foundation grant applications. Run October board fundraising campaign. Send cultivation mailing to annual fund lapsed donors. Begin direct mail year-end appeal production (6-week print lead time).",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Campaign Peak & Annual Development Planning",
    description: "Execute GivingTuesday. Run year-end campaign peak (December 28-31 represents 12% of annual giving). Mail year-end appeal (November 15-20 target). Complete board giving campaign. Lock next-year development plan and revenue budget. Complete grant pipeline year-end review. Plan next-year campaign and event calendar.",
  },
]

const kpis = [
  {
    metric: "Grant Award Rate ≥ 35%",
    description: "Percentage of submitted grant applications funded; below 25% signals prospect research quality, relationship development, or proposal writing improvement opportunities",
  },
  {
    metric: "Donor Retention Rate ≥ 60%",
    description: "Percentage of prior-year donors giving again; below 45% (industry average) signals stewardship gap — every 10-point retention improvement increases revenue 20-25% without new acquisition costs",
  },
  {
    metric: "Year-End Campaign Revenue Growth ≥ 10%",
    description: "Year-over-year year-end campaign (Oct-Dec) revenue growth; flat performance requires analysis of email deliverability, direct mail offer, and digital giving friction",
  },
  {
    metric: "Major Donor Upgrade Rate ≥ 20%",
    description: "Percentage of major donors increasing their gift level year-over-year; below 15% signals inadequate cultivation and impact reporting in the major gift portfolio",
  },
  {
    metric: "Event Net Revenue ≥ 60% of Gross",
    description: "Gala and fundraising event net revenue as percentage of gross revenue; below 50% net margin requires event structure, sponsorship, or cost review",
  },
  {
    metric: "Pledge Fulfillment Rate ≥ 90%",
    description: "Percentage of multi-year pledges fulfilled on schedule; below 80% fulfillment signals stewardship or donor relationship gap — unpaid pledges cannot be recognized as revenue",
  },
]

const testimonial = {
  quote:
    "Foundation grant calendar with 45 active relationships and 60 application deadlines per year, federal grant LOIs and full proposals with Grants.gov alert monitoring, 8-week GivingTuesday preparation, 12-week year-end campaign strategy-to-close, spring campaign, monthly newsletter digital calendar, year-end direct mail production with 6-week print lead time, annual gala 10-month planning cycle with sponsorship close 4 months out, walk event permit and registration calendar, IRS substantiation letters January 31 for 1,200 donors, monthly major donor calls for 80 donors, quarterly impact reports for 40 major donors, bequest intention annual confirmation letters, CGAs annual payment processing, planned giving society luncheon planning, annual report 90-day production timeline, board giving campaign October close, and Q1-Q4 grant reporting for 18 active grants — all in spreadsheets. Momenties organized everything. We hit our highest donor retention rate ever.",
  name: "Adaeze D.",
  title: "Chief Development Officer, National Nonprofit",
}

export default function NonprofitDevelopmentCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Nonprofit Development Calendar"
        title="Grant Deadlines. Year-End Campaign. Major Donor Cultivation. One Calendar."
        subtitle="Momenties tracks foundation grant application windows with LOI advance preparation, GivingTuesday 8-week preparation cycles, year-end campaign strategy-to-close timelines, direct mail production lead times, major donor monthly stewardship touchpoints, annual gala 10-month planning windows with sponsorship cycles, IRS substantiation letter January 31 deadlines, bequest intention annual confirmations, pledge fulfillment tracking, and quarterly impact reporting so nonprofit development leaders never miss a grant deadline or donor moment."
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
            Four Nonprofit Development Pillars Momenties Tracks
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
            12-Month Nonprofit Development Calendar
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
            Nonprofit Development KPIs Momenties Keeps on Track
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
