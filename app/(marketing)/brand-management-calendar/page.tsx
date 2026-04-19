import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Brand Management Calendar | Momenties",
  description: "Momenties helps brand managers and CMOs track brand health measurement cycles, brand refresh projects, trademark renewal calendars, agency review cadences, and campaign planning governance in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "Brand Health Measurement Cycles & Brand Equity Tracking Calendar",
    description:
      "Brand health programs without structured measurement cadences produce anecdotal brand management — brand teams that measure brand health quarterly detect market share threats 6-8 months earlier than teams measuring annually. Brand health tracking calendar: quarterly brand tracker survey (unaided awareness, aided awareness, brand consideration, preference, NPS — 500+ respondents per wave), semi-annual brand equity deep dive (brand associations, emotional connectivity, competitive positioning analysis), and annual brand audit (share of voice analysis, earned media sentiment, brand architecture review). Brand health dashboard reporting cadence: monthly brand mentions and sentiment monitoring (Brandwatch, Sprinklr, or Mention), quarterly brand scorecard distribution to leadership, and annual brand performance review for board. Share of voice monitoring (weekly competitive mention tracking) with monthly competitive brand share-of-voice report. Consumer insights calendar: 2-3 annual qualitative brand studies (focus groups or ethnographic research), annual brand positioning validation study, and post-campaign brand impact measurement. Momenties manages every brand health measurement cycle.",
  },
  {
    icon: RefreshCw,
    title: "Brand Refresh Projects, Visual Identity Governance & Campaign Planning Calendar",
    description:
      "Brand refresh initiatives without structured project governance routinely take 2-3x longer than planned — brand identity projects that compress discovery phases miss critical brand equity signals and produce guidelines that lack organizational adoption. Brand refresh calendar: brand audit and consumer research (12 weeks), creative brief development and agency briefing (4 weeks), concept development (8 weeks), creative refinement (4 weeks), brand guidelines production (6 weeks), internal launch and training (4 weeks), and external rollout phasing (12-16 weeks). Brand guidelines governance: annual brand standards review (identifying guideline violations, updating for new platform requirements), quarterly brand asset audit (ensuring all external materials meet current guidelines), and brand training for new marketing hires (within first 30 days). Integrated campaign planning calendar: annual campaign calendar locked in Q4 for following year, seasonal campaign briefs (90-day advance for major seasonal moments), and campaign performance retrospectives (T+30 post-campaign). Momenties schedules every brand and campaign milestone.",
  },
  {
    icon: TrendingUp,
    title: "Trademark Renewal Calendar, Brand Protection & IP Governance",
    description:
      "Trademark portfolios without maintenance calendars generate inadvertent abandonment — USPTO trademark registrations require Section 8 declaration (between Year 5-6), Section 15 incontestability filing (optional, Year 5-6), and renewal (every 10 years). International trademark maintenance in Madrid Protocol member countries requires renewal tracking by individual country class. Brand protection monitoring: monthly brand term keyword monitoring for trademark infringement (Google Ads brand terms, Amazon brand registry violations, domain squatting alerts), quarterly trademark opposition monitoring during application periods, and annual brand protection audit. Domain portfolio management: annual renewal calendar for all owned brand domains (including defensive registrations for brand name + competitor terms, common misspellings), SSL certificate renewal tracking (annual for custom brand domains), and social media handle verification (quarterly). Brand licensing agreement renewals (annual or multi-year): royalty reporting deadlines, brand usage approval cycles, and licensee audit rights. Momenties tracks every IP and trademark obligation.",
  },
  {
    icon: BarChart3,
    title: "Agency Review Cadences, Brand Budget Planning & Marketing Mix Calendar",
    description:
      "Agency relationships without structured review cadences drift — agencies operating without quarterly performance reviews against SOW deliverables routinely under-deliver on value while billing at full contracted rates. Agency management calendar: monthly agency performance check-in (output quality, budget pacing, relationship health), quarterly SOW deliverable review (on-track, behind, or scope change required), annual agency review and contract renewal negotiation (starting 90 days before contract expiration), and biennial agency RFP process (AOR review every 2-3 years). Brand budget planning: annual brand marketing budget submission (Q3 draft, Q4 approval), monthly budget pacing versus spend, quarterly brand ROI reporting (brand health KPIs versus spend, media efficiency metrics), and year-end budget reconciliation. Marketing mix modeling (MMM): annual MMM study with media allocation recommendations, quarterly channel attribution updates, and campaign-level ROI measurement. Brand manager career development: quarterly brand mentorship sessions, annual brand marketing certification renewals (AMA PCM, digital marketing certs). Momenties consolidates the full brand management calendar.",
  },
]

const timeline = [
  {
    phase: "Phase 1 — Jan–Feb",
    title: "Annual Brand Review & Campaign Calendar Launch",
    description: "Distribute Q4 brand health tracker results and annual brand scorecard. Lock annual integrated campaign calendar for the year. Review prior year brand budget performance. Set annual brand OKRs and measurement framework. Launch Q1 brand health tracker wave.",
  },
  {
    phase: "Phase 2 — Mar–Apr",
    title: "Q1 Brand Health Results & Spring Campaign Execution",
    description: "Analyze Q1 brand tracker results and brief agency on insights. Execute spring seasonal campaign. Complete Q1 agency performance review against SOW. Run quarterly share-of-voice competitive analysis. Initiate any trademark renewals due in Q3 (90-day advance preparation).",
  },
  {
    phase: "Phase 3 — May–Jun",
    title: "Semi-Annual Brand Equity Study & Agency Reviews",
    description: "Launch semi-annual brand equity deep dive study. Complete H1 brand performance review. Run semi-annual brand asset audit (materials compliance with guidelines). Conduct mid-year agency relationship review. Brief summer and back-to-school campaign creative.",
  },
  {
    phase: "Phase 4 — Jul–Aug",
    title: "Q2 Brand Health & Annual Campaign Planning Kickoff",
    description: "Analyze Q2 brand tracker results. Launch annual marketing mix modeling study if applicable. Begin annual integrated campaign calendar planning for next year. Complete Q2 trademark monitoring audit. Review brand guidelines for Q4 seasonal campaign requirements.",
  },
  {
    phase: "Phase 5 — Sep–Oct",
    title: "Brand Budget Submission & Q3 Brand Review",
    description: "Submit annual brand marketing budget for next year. Analyze Q3 brand health tracker results. Brief holiday campaign creative (if applicable). Complete Q3 agency performance review. Launch annual brand audit (share of voice, earned media). Start agency contract renewal negotiations for Q1 expirations.",
  },
  {
    phase: "Phase 6 — Nov–Dec",
    title: "Year-End Brand Reporting & Next-Year Lock",
    description: "Execute Q4 brand health tracker wave. Lock next-year campaign calendar and brand initiatives. Complete annual trademark portfolio maintenance review. Run annual brand manager team retrospective. Deliver year-end brand health and ROI report to leadership and board.",
  },
]

const kpis = [
  {
    metric: "Unaided Brand Awareness +2–5% YoY",
    description: "Annual improvement in unaided brand awareness among target audience; flat or declining signals media investment or message inefficiency",
  },
  {
    metric: "Brand Consideration ≥ 40% Among Target",
    description: "Percentage of target audience considering the brand in next purchase; below category average signals positioning or value proposition issue",
  },
  {
    metric: "Share of Voice ≥ Share of Market",
    description: "SOV versus SOM ratio; SOV below SOM indicates brand under-investment relative to competitors",
  },
  {
    metric: "Brand NPS ≥ 45",
    description: "Brand-level Net Promoter Score from quarterly brand tracker; below 30 signals advocacy gap versus competitive set",
  },
  {
    metric: "Campaign Brand Lift ≥ 5%",
    description: "Lift in brand awareness or consideration attributable to major brand campaigns versus control group in post-campaign measurement",
  },
  {
    metric: "Trademark Portfolio 100% Current",
    description: "Zero lapsed trademark registrations or missed maintenance deadlines across all brand marks and international registrations",
  },
]

const testimonial = {
  quote:
    "Quarterly brand health tracker waves in eight markets, semi-annual brand equity studies, annual MMM study, monthly share-of-voice competitive reporting, trademark renewal tracking across 14 countries and 3 classes, domain portfolio annual renewal for 230 registered domains, agency quarterly performance reviews across 5 AORs, annual agency contract renewals, campaign planning for 12 seasonal moments with 90-day creative briefs, annual brand budget cycle, and brand guidelines governance for 200+ external partners — all in spreadsheets. Momenties organized everything. We caught a competitive brand share threat 7 months early.",
  name: "Taiwo M.",
  title: "VP Brand & Creative, Fortune 500 Consumer Brand",
}

export default function BrandManagementCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Brand Management Calendar"
        title="Brand Health Tracking. Trademark Renewals. Agency Reviews. One Calendar."
        subtitle="Momenties tracks quarterly brand health tracker waves, brand equity study cadences, trademark renewal deadlines across international markets, domain portfolio renewals, agency SOW performance reviews, integrated campaign planning with 90-day creative brief windows, annual brand budget cycles, and brand guidelines governance so brand managers protect and grow brand equity without administrative gaps."
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
            Four Brand Management Pillars Momenties Tracks
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
            12-Month Brand Management Calendar
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
            Brand Management KPIs Momenties Keeps on Track
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
