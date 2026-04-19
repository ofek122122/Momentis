import type { Metadata } from "next"
import { Heart, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Customer Experience Calendar | Momenties",
  description: "Build a systematic customer experience calendar — NPS and CSAT survey cadences, customer feedback loop programs, CX improvement sprint cycles, journey mapping reviews, and CX ROI measurement rhythms that drive loyalty and reduce churn.",
}

const pillars = [
  {
    icon: Heart,
    title: "NPS & CSAT Survey Cadences & Feedback Loop Programs",
    description:
      "Customer satisfaction measurement without a disciplined cadence produces survey fatigue and response rate collapse — or worse, metrics that don&apos;t reflect actual customer sentiment because they&apos;re collected at the wrong moments in the customer journey. Momenties schedules relationship NPS surveys on a quarterly cadence (all active customers, stratified by segment), transactional CSAT surveys triggered by key journey events (onboarding completion, support ticket resolution, renewal touch), and annual CX benchmark surveys with competitive satisfaction comparison. Closed-loop follow-up programs — reaching every detractor (NPS 0-6) within 48 hours with a senior customer success contact — are managed with escalation timelines and resolution tracking. Passive signal programs (in-product sentiment, support ticket sentiment analysis, community NPS) are reviewed monthly alongside survey data.",
  },
  {
    icon: RefreshCw,
    title: "Customer Journey Mapping Reviews & Touchpoint Optimization",
    description:
      "Customer journey maps built at product launch become wrong within 12 months — product changes, new customer segments, and support process evolution create uncharted journey gaps that erode experience. Momenties schedules semi-annual journey map reviews (updating touchpoints, pain points, and emotional arc based on real interaction data), quarterly touchpoint experience audits (sampling actual customer interactions at each journey stage), and annual full journey redesign cycles where low-performing touchpoints are redesigned with cross-functional teams. Voice of the customer (VoC) collection points — strategic placement of feedback requests at high-impact journey moments — are reviewed quarterly for response rate optimization and bias detection. Journey analytics (drop-off rates, time-to-value, feature adoption sequences) inform journey map updates monthly.",
  },
  {
    icon: TrendingUp,
    title: "CX Improvement Sprint Cycles & Cross-Functional Ownership",
    description:
      "Customer experience improvement without execution ownership dissolves into good intentions — pain points identified in NPS surveys remain unresolved because no function owns the fix. Momenties schedules monthly CX sprint planning sessions (prioritizing top pain points from NPS/CSAT data with assigned owners across product, support, success, and engineering), quarterly cross-functional CX reviews (measuring improvement sprint outcomes against NPS and CSAT deltas), and semi-annual CX roadmap planning cycles where experience investments are prioritized alongside product and support investments. Executive CX reviews — monthly dashboards for CX leadership, quarterly for CEO and board — connect customer satisfaction trends to retention and revenue impact. Internal CX culture programs (CX champion training, customer empathy workshops) are calendared quarterly.",
  },
  {
    icon: BarChart3,
    title: "CX ROI Measurement & Churn Attribution Calendar",
    description:
      "Customer experience programs without ROI measurement lose investment in every planning cycle — finance sees cost but not the churn prevention and expansion revenue that good CX generates. Momenties schedules monthly CX-to-revenue attribution dashboards (comparing NPS scores against renewal rates, expansion rates, and referral volume by cohort), quarterly churn attribution analysis (mapping churn reasons to specific CX failure points — onboarding gaps, support resolution failures, product friction), and annual CX program ROI reviews presenting the relationship between NPS improvement and net revenue retention improvement. Customer lifetime value (LTV) by NPS cohort analysis — demonstrating that promoters have 2-4× higher LTV than detractors — is reviewed quarterly to quantify the financial return on CX investment. CX competitive benchmarking against industry NPS standards is reviewed annually.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "CX Audit & Measurement Architecture",
    description: "Audit current NPS/CSAT methodology and response rates; map complete customer journey with current pain point inventory; implement relationship NPS survey cadence; establish closed-loop detractor follow-up process; review touchpoint audit coverage; baseline CX-to-churn correlation analysis.",
  },
  {
    month: "Month 3",
    title: "Journey Map Refresh & First CX Sprint",
    description: "Run first comprehensive journey map review with cross-functional team; launch first monthly CX improvement sprint; establish CX sprint prioritization framework; implement transactional CSAT at onboarding and support resolution; launch passive VoC signal monitoring.",
  },
  {
    month: "Month 4–5",
    title: "Cross-Functional CX Ownership & Detractor Recovery Program",
    description: "Establish cross-functional CX ownership model with product and support; launch formal detractor recovery program with 48-hour escalation SLA; run first quarterly CX performance review; implement journey analytics dashboard; launch internal CX champion training.",
  },
  {
    month: "Month 6",
    title: "Mid-Year CX Review & NPS Cohort Analysis",
    description: "Present mid-year NPS trend with attribution to improvement sprint outcomes; run NPS-to-churn correlation analysis for H1 cohort; review CX improvement sprint completion rates and impact; update journey map with H1 feedback data; adjust H2 CX investment priorities.",
  },
  {
    month: "Month 7–9",
    title: "Annual Journey Redesign & CX ROI Program",
    description: "Launch annual full journey redesign for highest-friction touchpoints; implement quarterly LTV-by-NPS-cohort analysis; run competitive CX benchmarking; review CX program budget ROI with finance; launch semi-annual VoC program review.",
  },
  {
    month: "Month 10–12",
    title: "Annual CX Review & Next-Year Program Planning",
    description: "Present annual CX program ROI (NPS improvement, churn reduction, LTV by cohort); finalize next-year CX roadmap and investment plan; run annual CX benchmark survey with competitive comparison; lock survey cadence and journey review calendar for next year.",
  },
]

const kpis = [
  {
    metric: "Net Promoter Score",
    target: "≥ +40 NPS",
    description: "Percentage of promoters minus percentage of detractors — below +20 indicates systematic CX failures; above +50 reflects world-class customer experience; NPS improvement of 7+ points per year is achievable with structured improvement programs.",
  },
  {
    metric: "Detractor Closed-Loop Rate",
    target: "100% contacted within 48h",
    description: "Percentage of NPS detractors (0-6) contacted by senior CS within 48 hours with resolution commitment — any missed detractor is a churn risk and potential negative review; closed-loop programs recover 30-40% of at-risk detractors when executed consistently.",
  },
  {
    metric: "CSAT Score",
    target: "≥ 4.5 / 5.0",
    description: "Average satisfaction score on transactional surveys at key journey moments — below 4.0 at onboarding predicts 40% higher churn in the first 90 days; below 4.2 on support resolution indicates process failures requiring sprint intervention.",
  },
  {
    metric: "CX Sprint Completion Rate",
    target: "≥ 80% sprints delivered",
    description: "Percentage of monthly CX improvement sprint commitments delivered on schedule — below 60% indicates ownership or prioritization failures; unresolved pain points grow in severity and NPS impact with each survey cycle.",
  },
  {
    metric: "NPS-to-Retention Correlation",
    target: "Promoters ≥ 95% retained",
    description: "Annual renewal rate for NPS promoters (9-10) versus passives and detractors — above 20% gap between promoter and detractor renewal rates confirms CX investment ROI; below 10% gap suggests NPS is measuring satisfaction but not predicting retention.",
  },
  {
    metric: "Survey Response Rate",
    target: "≥ 25% response rate",
    description: "Percentage of relationship NPS surveys completed — below 15% response rate produces statistically unreliable NPS scores and fails to surface the full range of customer sentiment; above 30% response rate enables segment-level analysis with confidence.",
  },
]

const testimonial = {
  quote:
    "Our NPS surveys went out twice a year, we never followed up with detractors, and customer journey maps from 2020 hadn&apos;t been touched. We were measuring satisfaction but not doing anything about it. Momenties gave us a structured CX calendar. NPS went from +18 to +51, detractor churn dropped by 34%, and for the first time CX had a line in the board deck with revenue attribution.",
  name: "Oluwakemi A.",
  title: "Chief Customer Officer, Series C SaaS Platform",
}

export default function CustomerExperienceCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Customer Experience Calendar"
        title="NPS +51. 34% Churn Reduction. CX With Revenue Attribution."
        subtitle="A systematic customer experience calendar with quarterly NPS and CSAT survey cadences, semi-annual journey map reviews, monthly CX improvement sprint cycles, closed-loop detractor programs, and CX ROI measurement rhythms that drive customer loyalty and give CX teams budget credibility."
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
            Four Systems That Build Customer Experience Excellence
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
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Your 12-Month CX Program Roadmap
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {timeline.map((t, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  gap: 24,
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  alignItems: "start",
                }}
              >
                <span style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.9rem", paddingTop: 2 }}>
                  {t.month}
                </span>
                <div>
                  <p style={{ color: "#f0ece3", fontWeight: 600, marginBottom: 6 }}>{t.title}</p>
                  <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    {t.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
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
            KPIs That Define CX Program Maturity
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {kpis.map((k) => (
              <div
                key={k.metric}
                style={{
                  background: "#0a0a0d",
                  border: "1px solid rgba(197,163,92,0.2)",
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1.1rem", marginBottom: 4 }}>
                  {k.target}
                </p>
                <p style={{ color: "#f0ece3", fontWeight: 600, marginBottom: 8 }}>{k.metric}</p>
                <p style={{ color: "rgba(240,236,227,0.6)", fontSize: "0.88rem", lineHeight: 1.6 }}>
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
