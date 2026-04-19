import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Corporate Communications Calendar | Momenties",
  description: "Momenties helps CCOs and corporate communications leaders track earnings call preparation cycles, crisis communications rehearsal cadences, employee communications governance, ESG reporting timelines, and media relations programs in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Earnings Call Preparation Cycles & Investor Communications Calendar",
    description:
      "Earnings communications for public companies run on rigid quarterly calendars — and investor relations teams that begin earnings preparation within 2 weeks of quarter close consistently produce higher-quality messaging than teams that start the day after close. Earnings call preparation calendar: earnings date announcement (T-30 days before call), analyst consensus estimate monitoring (weekly in T-30 to T-14 window), draft script and Q&A preparation (T-14 to T-7), legal and financial review (T-7 to T-3), CEO/CFO rehearsal (T-3 to T-1), and post-earnings communication follow-up (T+1 through T+5). SEC filing deadlines: 8-K for earnings release (within 4 business days of quarter-end), 10-Q for quarterly reports (40 days for large accelerated filers, 45 days for accelerated filers), and 10-K for annual reports (60 days for large accelerated filers, 75 days for accelerated filers). Annual Investor Day preparation (8-12 week preparation cycle): presentation development, analyst logistics, and webcast production. Momenties manages the full investor communications calendar.",
  },
  {
    icon: RefreshCw,
    title: "Crisis Communications Rehearsal Cadences & Issues Management Calendar",
    description:
      "Crisis communications plans without regular rehearsal become museum pieces — organizations that rehearse crisis protocols semi-annually respond 60% faster in actual crises than those that rehearse only annually. Crisis preparedness calendar: quarterly crisis scenario tabletop exercise (2-hour simulation with C-suite and communications team), semi-annual dark site activation test (verifying crisis microsite can be live within 2 hours), annual full crisis simulation (with media, board, and external stakeholders), and annual crisis communications plan refresh (updating contact trees, spokesperson rosters, and scenario playbooks). Issues management calendar: weekly media monitoring review with issues escalation assessment, monthly issues register review with legal and government affairs, and quarterly stakeholder sentiment analysis. CEO communications calendar: monthly internal CEO message (town hall, written, or video), quarterly earnings message alignment review, and annual CEO external speaking calendar (conferences, op-eds, media appearances) with 3-6 month advance booking window. Momenties schedules every crisis and issues management milestone.",
  },
  {
    icon: TrendingUp,
    title: "Employee Communications Governance, Town Hall Calendar & Culture Program Calendar",
    description:
      "Employee communications without governance calendars produce inconsistent messaging — companies with structured internal communications cadences report 25% higher employee trust scores than those with ad-hoc communication patterns. Employee communications calendar: weekly leadership digest (Monday distribution, 3-5 key messages for manager cascade), biweekly all-hands update (alternating CEO and functional leader featuring), monthly town hall (60-90 minute format with Q&A), and quarterly all-company meeting (in-person or hybrid, with strategic update). Culture programs: annual employee survey communication and action planning cycle, quarterly employee recognition program communication, and biannual culture health pulse reporting to board. Executive communications support: quarterly business review presentation narrative development (4-week production cycle), board communications preparation (2-week advance for board package narrative), and annual report narrative (8-12 week production). Intranet and digital workplace content governance: quarterly content freshness audit, annual information architecture review, and monthly editorial calendar management. Momenties tracks every internal communications milestone.",
  },
  {
    icon: BarChart3,
    title: "ESG Reporting Calendar, Media Relations Program & Awards Calendar",
    description:
      "ESG reporting without a structured calendar produces rushed disclosure quality — companies that begin ESG data collection in Q1 for prior year reporting produce materially more accurate and comprehensive disclosures than those beginning in Q3. ESG communications calendar: GRI/SASB/TCFD data collection kickoff (January for prior year), draft ESG report (March-April), legal and board review (May), publication (June-July for calendar year reporters). Media relations program: quarterly proactive media outreach planning (story pitching calendar, byline placements), monthly media coverage analysis (share of voice, tone, message pull-through), and quarterly analyst and journalist relationship reviews. Awards and recognition calendar: industry award nominations calendar (most major B2B and trade publication awards have September-November nomination windows), analyst report briefing cycle (Gartner Magic Quadrant, Forrester Wave — briefing requests typically 6-8 weeks before questionnaire launch). Annual communications team skill development: PRSA APR maintenance, speechwriting training, and media training refreshers for executive spokespeople. Momenties consolidates the full communications calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual Comms Strategy & ESG Data Collection Launch",
    description: "Launch annual communications strategy and messaging architecture review. Begin ESG data collection for prior year annual report. Complete Q4 earnings call preparation and execution. Set annual communications OKRs and measurement framework. Conduct Q1 crisis preparedness tabletop exercise.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 Earnings Preparation & Annual Report Production",
    description: "Execute Q1 earnings communications cycle. Begin annual report narrative production. Launch Q1 employee engagement survey communications. Run Q2 proactive media outreach planning. Complete dark site activation semi-annual test.",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "ESG Report Publication & H1 Communications Review",
    description: "Publish annual ESG/sustainability report. Conduct H1 communications performance review (media coverage, employee communications effectiveness, investor messaging). Run annual Investor Day if applicable. Complete H1 issues management review with legal. Conduct semi-annual crisis communications plan refresh.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Q2 Earnings & Award Nominations Launch",
    description: "Execute Q2 earnings communications cycle. Begin industry award nomination submissions (Q3-Q4 nomination windows). Run annual full crisis simulation. Launch analyst briefing cycle for Q3 analyst reports. Review executive spokesperson media training needs.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Q3 Earnings & Annual Communications Planning",
    description: "Execute Q3 earnings communications cycle. Begin annual integrated communications plan for next year. Complete Q3 crisis preparedness tabletop exercise. Run quarterly analyst and journalist relationship reviews. Launch annual employee survey communications cycle.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Earnings & Next-Year Lock",
    description: "Execute Q4 earnings preparation and pre-release communications. Lock next-year communications calendar and agency plans. Complete annual communications team skills assessment. Deliver year-end communications performance report to board. Update crisis communications plan for next year.",
  },
]

const kpis = [
  {
    metric: "Earned Media Tone ≥ 70% Positive/Neutral",
    description: "Percentage of earned media coverage with positive or neutral tone; negative tone above 30% signals reactive communications posture",
  },
  {
    metric: "Employee Communications Open Rate ≥ 65%",
    description: "Internal newsletter/digest open rate; below 50% signals relevance, frequency, or format issue requiring program redesign",
  },
  {
    metric: "Earnings Script Delivery On-Time 100%",
    description: "Zero earnings-related SEC filing deadline misses; late 8-K or 10-Q filings trigger regulatory scrutiny and analyst concern",
  },
  {
    metric: "Crisis Response Time ≤ 2 Hours",
    description: "Time from crisis identification to first public statement; above 4 hours significantly increases reputational damage in social media environment",
  },
  {
    metric: "Share of Voice ≥ 25% in Category",
    description: "Brand mentions as percentage of total category media mentions; tracks competitive communications effectiveness quarterly",
  },
  {
    metric: "Town Hall Satisfaction ≥ 4.2/5",
    description: "Post-town-hall employee satisfaction score; below 3.8 signals format, content, or leadership accessibility issue",
  },
]

const testimonial = {
  quote:
    "Quarterly earnings call preparation cycles with 30-day lead time, annual 10-K and quarterly 10-Q SEC filing deadlines, annual Investor Day 10-week production cycle, quarterly crisis tabletop exercises, semi-annual dark site tests, annual full crisis simulation, monthly all-company town halls, weekly leadership digest production, ESG report annual production with 6-month data collection, analyst briefing cycle for Gartner and Forrester waves, industry award nominations in September-November, and biannual executive media training refreshers — all tracked in email threads and shared drives. Momenties organized everything. We had our first quarter with zero reactive media cycles.",
  name: "Emeka W.",
  title: "Chief Communications Officer, NYSE-Listed Technology Company",
}

export default function CorporateCommunicationsCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Corporate Communications Calendar"
        title="Earnings Calls. Crisis Rehearsal. ESG Reporting. One Calendar."
        subtitle="Momenties tracks quarterly earnings call preparation cycles, SEC filing deadlines, annual Investor Day production timelines, crisis communications rehearsal cadences, employee town hall and digest schedules, ESG report annual production, proactive media outreach planning, analyst briefing cycles, and industry award nomination windows so corporate communications leaders run proactive programs without operational gaps."
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
            Four Corporate Communications Pillars Momenties Tracks
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
            12-Month Corporate Communications Calendar
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
            Corporate Communications KPIs Momenties Keeps on Track
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
