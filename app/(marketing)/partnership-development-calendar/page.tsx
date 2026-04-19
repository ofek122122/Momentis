import type { Metadata } from "next"
import { Handshake, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Partnership Development Calendar | Momenties",
  description: "Build a systematic partnership development calendar — partner pipeline cadences, co-sell program cycles, technology integration roadmaps, and partner performance review rhythms that turn strategic relationships into scalable revenue.",
}

const pillars = [
  {
    icon: Handshake,
    title: "Partner Pipeline Development & Sourcing Cadence",
    description:
      "Partner pipeline requires the same disciplined calendar as direct sales — but most companies manage it reactively. Momenties schedules quarterly partner prospecting reviews (identifying target ISV, SI, and reseller partners aligned to ICP), monthly partner pipeline QBRs with business development leads, and annual partner tiering assessments where existing partners are evaluated against contribution and invested resources. Partnership conference attendance calendar — AWS re:Invent, Dreamforce, Microsoft Build, Salesforce ISV Summit — is managed with booth and speaking applications tracked 4-6 months before events. Partner NDA and preliminary agreement cadence is templated with 30-day execution timelines.",
  },
  {
    icon: RefreshCw,
    title: "Co-Sell Program Management & Partner Enablement Cycles",
    description:
      "Co-sell programs with hyperscalers (AWS, Azure, GCP, Salesforce) require systematic calendar management or opportunity registrations expire and marketplace listings fall out of compliance. Momenties schedules AWS co-sell opportunity registration reviews (90-day expiration windows), Azure IP co-sell program annual re-qualification, Salesforce AppExchange listing renewal and security review cycles, and partner portal content updates. Partner enablement calendar — quarterly training refreshes, new product certification launches, battlecard updates at every competitive win/loss cycle — is managed with completion tracking and partner NPS measurement.",
  },
  {
    icon: TrendingUp,
    title: "Technology Integration Roadmap & API Partner Certification",
    description:
      "Technology partnerships live and die by integration depth — and integration depth requires a maintenance calendar. Momenties schedules quarterly API partner integration reviews (deprecation alerts, version upgrade windows, certification renewals), bi-annual integration marketplace audits where underperforming integrations are prioritized or deprecated, and annual technology partner advisory council meetings where roadmap alignment is confirmed. Integration certification programs — Salesforce ISV certification, HubSpot App Partner certification, Stripe Partner certification — each carry annual renewal requirements with testing cycles that begin 3-4 months before expiration.",
  },
  {
    icon: BarChart3,
    title: "Partner QBRs, Performance Reviews & Attribution Measurement",
    description:
      "Partner-sourced and partner-influenced revenue is invisible without a structured attribution and review cadence. Momenties schedules quarterly executive QBRs with Tier 1 partners (30-day prep cycle with deal data compilation), semi-annual partner health assessments scoring activity, pipeline, and revenue against targets, and annual partner program reviews where the overall partner tier structure, commission rates, and enablement investment are evaluated. Partner attribution dashboards — tracking partner-sourced ARR, partner-influenced ARR, and co-sell win rates vs. direct — are reviewed monthly before board reporting.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Partner Program Architecture & Pipeline Audit",
    description: "Audit current partner portfolio (activity, pipeline, revenue contribution); define partner tiers with criteria and benefits; identify top 10 target new partners; establish partner attribution tracking in CRM.",
  },
  {
    month: "Month 3",
    title: "Co-Sell Program Launch & Hyperscaler Registration",
    description: "Launch AWS co-sell program or Azure IP co-sell qualification; register top 5 partners on hyperscaler marketplaces; complete first partner enablement training cycle; schedule first round of partner QBRs.",
  },
  {
    month: "Month 4–5",
    title: "Technology Integration Audit & Certification Renewals",
    description: "Complete technology partner integration audit; renew Salesforce ISV and HubSpot App Partner certifications; identify integration gaps with top-requested partner platforms; launch partner developer portal.",
  },
  {
    month: "Month 6",
    title: "Mid-Year Partner Performance Review",
    description: "Run mid-year partner health assessment; tier all active partners against contribution metrics; identify partners to invest in and partners to sunset; adjust Q3-Q4 partner enablement priorities.",
  },
  {
    month: "Month 7–9",
    title: "Partner Conference Season & New Partner Launches",
    description: "Execute fall partner conference program (Dreamforce, AWS re:Invent prep); onboard 3-5 new partners from Q1-Q2 prospecting; launch second enablement training cycle; run co-sell pipeline push with hyperscalers.",
  },
  {
    month: "Month 10–12",
    title: "Annual Partner Program Review & Next-Year Planning",
    description: "Present annual partner program report (sourced ARR, influenced ARR, partner NPS, tier distribution); restructure partner tiers if needed; lock next-year partner investment budget; plan conference and marketplace calendar.",
  },
]

const kpis = [
  {
    metric: "Partner-Sourced ARR",
    target: "≥ 20% of new ARR",
    description: "Percentage of new annual recurring revenue sourced through the partner channel — elite partner programs reach 30-40% at scale; below 10% after 18 months indicates partner program is not generating demand.",
  },
  {
    metric: "Co-Sell Win Rate",
    target: "≥ 15% above direct",
    description: "Win rate on partner co-sell opportunities vs. direct sales — co-sell with major partners (AWS, Salesforce) should produce a 15-25% win rate lift; below parity signals co-sell program underinvestment.",
  },
  {
    metric: "Partner Activation Rate",
    target: "≥ 60% registered partners",
    description: "Percentage of registered partners that have sourced at least one opportunity in the trailing 90 days — below 40% indicates partner program is attracting but not activating partners.",
  },
  {
    metric: "Co-Sell Opportunity Expiration",
    target: "≤ 5% expired without action",
    description: "Percentage of registered co-sell opportunities expiring without partner follow-up — above 15% expiration rate triggers hyperscaler co-sell program review and partnership manager accountability.",
  },
  {
    metric: "Integration Certification Currency",
    target: "100% certified partners current",
    description: "Percentage of technology partners with current integration certifications — expired certifications remove marketplace listings and break customer integrations, creating churn risk.",
  },
  {
    metric: "Partner NPS",
    target: "≥ 8.0 / 10 semi-annually",
    description: "Partner satisfaction score from semi-annual partner survey — below 7.0 signals enablement, support, or program economics issues that will reduce partner engagement within 2 quarters.",
  },
]

const testimonial = {
  quote:
    "Our AWS co-sell opportunities were expiring because nobody owned the calendar, our Salesforce ISV cert lapsed for two months, and partner QBRs happened when one of us remembered to schedule them. Momenties gave our partnerships team a real operating system. Partner-sourced ARR went from 8% to 24% of new business in 14 months because we finally had a systematic approach.",
  name: "Femi A.",
  title: "VP Partnerships & Alliances, Series C Cloud SaaS",
}

export default function PartnershipDevelopmentCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Partnership Development Calendar"
        title="Partner Pipeline. Co-Sell Activated. 20%+ Revenue from Partnerships."
        subtitle="A systematic partnership development calendar with partner pipeline cadences, co-sell program management cycles, integration certification renewals, and partner QBR rhythms that turn strategic relationships into scalable revenue."
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
            Four Systems That Build Partnership Revenue
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
            Your 12-Month Partnership Development Roadmap
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
            KPIs That Define Partnership Program Maturity
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
