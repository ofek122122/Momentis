import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Real Estate Brokerage Calendar | Momenties",
  description: "Momenties gives real estate brokerages an AI-powered calendar that tracks broker and agent license renewal, NAR ethics training, MLS dues, E&O insurance renewal, Fair Housing CE, and commission trust account compliance — all in one place.",
}

const pillars = [
  {
    icon: Target,
    title: "Broker & Agent License Renewal Calendar",
    description:
      "Real estate brokerages managing broker and agent credential cycles track state real estate license renewal (annual or biennial depending on state — most states require 12-18 hours of CE per cycle with mandatory Fair Housing, agency, and ethics topics), broker-in-charge (BIC) or designated broker license renewal (additional CE hours required in most states — 3-6 additional hours of broker management CE), and specialty designations: GRI (Graduate REALTOR Institute, NAR, 3-year CE cycles), CRS (Certified Residential Specialist, RRC, annual dues renewal plus ongoing CE), ABR (Accredited Buyer&apos;s Representative, REBAC, 2-year renewal with 8 ABR-specific CE hours), SRES (Seniors Real Estate Specialist, NAR, 2-year renewal), CIPS (Certified International Property Specialist, NAR, annual dues), CCIM (Certified Commercial Investment Member, CCIM Institute, 3-year renewal with 30 CE hours), SIOR (Society of Industrial and Office Realtors, annual dues and production requirements), and MAI (Member Appraisal Institute, AI, annual CE) for brokerage-affiliated appraisers. Property management: CAM (Certified Apartment Manager, NAA, 3-year renewal) for property management divisions. Momenties tracks all credential timelines concurrently.",
  },
  {
    icon: RefreshCw,
    title: "NAR Ethics, MLS Dues & Annual Membership Calendar",
    description:
      "NAR (National Association of REALTORS) requires Ethics Training every 3 years for all REALTOR members (current cycle: January 1, 2022 – December 31, 2024; new cycle resets January 2025) — ethics training completion required to maintain REALTOR membership and MLS access. NAR annual membership dues (January 31 deadline for most local boards — late payment triggers suspension of REALTOR designation and MLS access). MLS membership dues calendar: local MLS dues (typically annual or semi-annual — Q1 and Q3 billing cycles for many MLS systems), annual MLS rules update training (required in many MLS systems following rules changes — CLEAR Cooperation Policy annual update), and annual lockbox/Supra/SentriLock annual subscription renewal. State and local REALTOR association annual dues payment. Annual NAR Profile of Home Buyers and Sellers CE (recommended for all agents — fair housing and statistical competency annual update). Fair Housing CE: annual Fair Housing and Anti-Discrimination CE (required in most states and strongly recommended annually by HUD guidance). Appraisal CE: USPAP (Uniform Standards of Professional Appraisal Practice, ASC, biennial 7-hour USPAP update) for brokerage-affiliated appraisers. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "Trust Account Compliance, E&O & Brokerage Quality Calendar",
    description:
      "Real estate brokerages managing client funds maintain broker trust account (escrow account) compliance calendar: monthly trust account reconciliation (state real estate commission requirement — monthly three-way reconciliation of trust account ledger with bank statement and individual client ledger), quarterly trust account audit readiness review, and annual state real estate commission examination of trust accounts (random audit programs — brokerages maintain reconciliation documentation for minimum 3 years). Errors and Omissions insurance calendar: annual E&O insurance renewal (60-90 days advance submission — most carriers require application 90 days before expiration; many state real estate commissions require minimum E&O coverage for license renewal; coverage gaps trigger license suspension), annual E&O claims reporting review, and annual cyber liability insurance renewal. Property management compliance: annual security deposit accounting audit, annual rent roll reconciliation. Disclosure compliance: annual agency disclosure form update review (state-specific buyer/seller/dual agency forms — update to current year version), annual Lead-Based Paint Disclosure training for pre-1978 properties. Commission disbursement: quarterly commission audit for compliance with state disbursement rules. MLS compliance: annual MLS listing accuracy audit. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Fair Housing, ADA & Real Estate Business Calendar",
    description:
      "Real estate brokerages maintain comprehensive Fair Housing compliance calendars: annual Fair Housing Act training for all agents (HUD recommendation — documenting training completion reduces liability exposure), annual ADA (Americans with Disabilities Act) accessibility CE for commercial real estate brokers, annual marketing material review for Fair Housing compliant language (HUD updated advertising guidance — review print, web, and social media templates), and annual agent social media Fair Housing policy acknowledgment. Business compliance: annual state real estate brokerage license renewal (separate from individual broker license — most states issue firm licenses with annual or biennial renewal), annual registered agent and business entity annual report (LLC/S-corp annual filing — state-specific due dates), annual NAR Code of Ethics annual acknowledgment, and annual cybersecurity and data security training (NAR and CFPB recommend annual training for agents handling financial and personal data). Seasonal campaigns: spring buying season marketing prep (February 1 launch), fall market update campaign (August launch), year-end tax advantage buyer campaign (October 1 launch). Annual FHA lending limit update review (January — HUD publishes new FHA loan limits). RESPA/CFPB compliance: annual RESPA affiliated business arrangement disclosure review. Momenties consolidates all.",
  },
]

const timeline = [
  {
    month: "January – February",
    title: "NAR Dues & FHA Limit Update",
    tasks: [
      "January 31: NAR annual membership dues payment deadline for all REALTOR members",
      "January: annual FHA loan limit update review — update buyer pre-qualification communications",
      "Annual Fair Housing CE completion push for all agents before spring season",
      "Annual NAR Code of Ethics annual acknowledgment for all agents",
      "Annual MLS dues payment (Q1 billing cycle for most MLS systems)",
    ],
  },
  {
    month: "March – April",
    title: "Spring Season Launch & Trust Account Audit",
    tasks: [
      "Spring buying season marketing campaign launch (February 1 prep — April peak)",
      "Q1 trust account three-way reconciliation — complete by April 30",
      "Annual agency disclosure form update review — verify current year state-specific forms",
      "Annual Lead-Based Paint Disclosure training for pre-1978 property transactions",
      "Annual ADA accessibility CE for commercial real estate division",
    ],
  },
  {
    month: "May – June",
    title: "E&O Renewal & License Audit",
    tasks: [
      "Annual E&O insurance renewal — submit application 90 days before expiration",
      "Annual cyber liability insurance renewal — review coverage for client data obligations",
      "Annual agent license renewal audit — flag all licenses expiring in Q3/Q4",
      "Annual state brokerage entity license renewal (many states: June-September due dates)",
      "Annual registered agent and business entity annual report filing",
    ],
  },
  {
    month: "July – August",
    title: "Mid-Year CE Push & Fall Campaign Prep",
    tasks: [
      "Mid-year CE audit — all agents on track for state-specific renewal requirements",
      "Fall market update campaign launch — August 1 launch for Q3 and Q4 transactions",
      "Q2 trust account three-way reconciliation — complete by July 31",
      "Annual MLS rules update training for agents (Q3 MLS compliance cycle)",
      "NAR Ethics Training completion audit — track 3-year cycle completion for all agents",
    ],
  },
  {
    month: "September – October",
    title: "Year-End Buyer Campaign & CE Sprint",
    tasks: [
      "October 1: year-end tax advantage buyer campaign launch prep",
      "Annual Fair Housing marketing material review — update templates for print and digital",
      "Annual agent social media Fair Housing policy acknowledgment",
      "Annual cybersecurity and data security training for all agents",
      "Q3 trust account three-way reconciliation — complete by October 31",
    ],
  },
  {
    month: "November – December",
    title: "Year-End CE Completion & Renewal Push",
    tasks: [
      "Final CE hour completion push for all agents with December 31 license renewal deadlines",
      "NAR Ethics Training 3-year cycle deadline check — complete before December 31 cycle end",
      "Annual MRPC Fair Housing and anti-discrimination CE completion documentation",
      "Q4 trust account three-way reconciliation — complete by January 31 of following year",
      "Annual broker-in-charge additional CE completion verification",
    ],
  },
]

const kpis = [
  {
    metric: "Agent License Renewal On-Time Rate",
    target: "100% renewed before expiration",
    description: "Agents with lapsed licenses cannot legally represent clients — brokerage liability for transactions with unlicensed agents.",
  },
  {
    metric: "NAR Ethics Training Compliance",
    target: "100% of REALTOR members per 3-year cycle",
    description: "Ethics training non-compliance triggers REALTOR membership suspension and MLS access termination — no grace period.",
  },
  {
    metric: "Monthly Trust Account Reconciliation",
    target: "Three-way reconciliation by end of each month",
    description: "Trust account reconciliation failures are the leading cause of real estate commission disciplinary actions and license suspension.",
  },
  {
    metric: "E&O Insurance Renewal Lead Time",
    target: "Application submitted 90 days early",
    description: "E&O coverage gaps trigger license suspension in most states and create retroactive liability for pending transactions.",
  },
  {
    metric: "Fair Housing CE Annual Completion",
    target: "100% of agents annually",
    description: "Annual Fair Housing training documentation reduces HUD and state commission liability exposure for brokerage-wide complaints.",
  },
  {
    metric: "MLS Dues On-Time Rate",
    target: "100% paid before suspension date",
    description: "Late MLS dues trigger listing access suspension — agents cannot upload or modify listings, stalling active transactions.",
  },
]

const testimonial = {
  quote:
    "Annual NAR dues payment tracking for 38 REALTOR agents before January 31, NAR Ethics Training 3-year cycle completion tracking for all 38 agents with individual completion date tracking, agent license renewal tracking across 3 states on different annual and biennial cycles, broker-in-charge additional CE tracking for 4 BIC-licensed brokers, annual E&O insurance renewal 90 days early, annual cyber liability insurance renewal, annual state brokerage entity license renewal in 2 states, monthly trust account three-way reconciliation for 4 client trust accounts, quarterly trust account audit readiness review, annual security deposit accounting audit for 120 property management units, annual agency disclosure form update review for 3 states, annual Lead-Based Paint Disclosure training for all agents, annual ADA accessibility CE for commercial division, annual Fair Housing CE completion documentation for all agents, annual Fair Housing marketing material review for print and digital templates, annual MLS rules update training, semi-annual MLS dues payment tracking, annual cybersecurity training for all agents, annual NAR Code of Ethics acknowledgment, annual FHA loan limit update review, spring buying season campaign February launch, fall market update August launch, and year-end tax advantage campaign October launch — all simultaneously. Momenties mapped every deadline.",
  name: "Kwame RE.",
  title: "BIC, GRI, CCIM, Broker-Owner, 38-Agent Regional Real Estate Brokerage",
}

export default function RealEstateBrokerageCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Real Estate Brokerage Calendar"
        title="Agent License Renewal. NAR Ethics. E&O Insurance. One Calendar."
        subtitle="Momenties tracks agent and broker license renewals across all state boards, NAR Ethics Training 3-year cycle completion for every REALTOR member, monthly trust account three-way reconciliation, annual E&O and cyber liability insurance renewal 90 days in advance, MLS dues payment deadlines, annual Fair Housing CE completion documentation, annual agency disclosure form updates, and seasonal campaign launch dates — so your real estate brokerage never misses a license or compliance deadline."
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
            Four Calendar Pillars for Real Estate Brokerage Compliance
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
            Your Real Estate Brokerage Compliance Calendar
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {timeline.map((phase, idx) => (
              <div
                key={phase.month}
                style={{
                  display: "grid",
                  gridTemplateColumns: "180px 1fr",
                  gap: 0,
                  borderTop: idx === 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  style={{
                    padding: "24px 20px",
                    borderRight: "1px solid rgba(255,255,255,0.07)",
                    background: "#0e0e12",
                  }}
                >
                  <p style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.85rem", marginBottom: 4 }}>
                    {phase.month}
                  </p>
                  <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.95rem", lineHeight: 1.4 }}>
                    {phase.title}
                  </p>
                </div>
                <div style={{ padding: "24px 28px", background: "#0a0a0d" }}>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {phase.tasks.map((task) => (
                      <li key={task} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "#c5a35c", marginTop: 2, flexShrink: 0 }}>›</span>
                        <span style={{ color: "rgba(240,236,227,0.7)", fontSize: "0.9rem", lineHeight: 1.55 }}>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
            Six KPIs Every Real Estate Brokerage Should Track
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {kpis.map((k) => (
              <div
                key={k.metric}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "22px 24px",
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1.15rem", marginBottom: 4 }}>{k.target}</p>
                <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.95rem", marginBottom: 8 }}>{k.metric}</p>
                <p style={{ color: "rgba(240,236,227,0.6)", fontSize: "0.88rem", lineHeight: 1.6 }}>{k.description}</p>
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
