import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Insurance Agency Compliance Calendar | Momenties",
  description: "Momenties helps insurance agencies track state P&C and life/health license CE renewals, FINRA annual registration, E&O insurance annual renewal, anti-fraud training, anti-money laundering certification, and surplus lines tax filings in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "State Insurance License CE & Producer License Renewal Calendar",
    description:
      "Insurance producers (agents and brokers) maintain state-issued property/casualty, life, health, and surplus lines licenses with CE requirements that vary significantly by state. Property &amp; Casualty CE: most states require 24 CE hours biennial (3 hours ethics mandatory), some states annual (California: 24 hours biennial including 3 hours ethics; Texas: 24 hours biennial; Florida: 24 hours biennial including 3 hours ethics and 4 hours law and regulation). Life &amp; Health CE: typically 24 CE hours biennial with mandatory ethics CE. Long-Term Care Partnership CE: LTC Partnership certification annual training update (required in all Partnership states for LTC Partnership policy sales). Medicare supplement CE: annual AHIP (America&apos;s Health Insurance Plans) Medicare training certification (annual — required for all producers selling Medicare Advantage and Part D plans; renewal due September 1 each year for October 1 annual election period). Variable products license: FINRA Series 6 (investment company products) or Series 7 (general securities) — annual U4 renewal December 31 via FINRA CRD; Series 63 (state securities) annual renewal. Annual FINRA CE Program: new FINRA continuing education program (annual — all registered representatives must complete annual FINRA CE by December 31). Designated Responsible Licensed Producer (DRLP) annual verification. Multi-state license management: NCI (National Producer Number) annual maintenance. Momenties tracks all staggered multi-state CE deadlines.",
  },
  {
    icon: RefreshCw,
    title: "Anti-Fraud, AML & State Regulatory Compliance Training Calendar",
    description:
      "Annual anti-fraud training: state insurance department mandatory anti-fraud training (most states require annual completion by all licensed producers — typically 1–3 hours, certification submitted to state fraud bureau). Annual anti-money laundering (AML) certification: FINRA/ACAMS annual AML training for producers selling variable life or variable annuity products — FinCEN Customer Identification Program, SAR filing triggers, cash transaction reporting. Annual HIPAA training: annual HIPAA Privacy and Security Rule training for producers handling individual health insurance (PHI handling, minimum necessary standard, BAA compliance). Annual flood insurance CE: NFIP (National Flood Insurance Program) annual agent training update — Write-Your-Own program compliance, flood zone mapping annual update, elevation certificate review. Annual surplus lines compliance: annual surplus lines taxes and stamping fee payment calendar (state surplus lines filing deadlines vary — California SLSC quarterly, Texas SLTX monthly, Florida quarterly), annual surplus lines eligibility verification (diligent search documentation per state requirement). NAIC model regulation training: annual market conduct compliance training (state market conduct examination preparation, complaint ratio annual review). Annual state-specific compliance: California AB 2345 climate risk disclosure, New York Regulation 187 best interest training update. Annual data security program review: NAIC Insurance Data Security Model Law (annual information security program update required for licensed insurers and producers). Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "FINRA CRD, E&O Insurance & Financial Compliance Calendar",
    description:
      "E&O (Errors &amp; Omissions) insurance compliance calendar: annual professional liability E&O insurance renewal — begin 90 days before expiration; some states require minimum E&O coverage as condition of license (California $500,000 minimum; New York $100,000 minimum). Annual fidelity bond renewal. Annual cyber liability insurance renewal (state insurance department increasingly requires cyber coverage documentation for larger agencies). FINRA compliance calendar: annual Form U4 review and update (changes in residential history, criminal disclosures, customer complaints — promptly report within 30 days but annual comprehensive audit), annual FINRA CRD registration renewal December 31, annual FINRA CE compliance verification for all registered reps. Annual carrier appointments: annual carrier appointment renewal (many carriers require annual reappointment documentation with E&O certificate, license copy, FINRA registration) — staggered by carrier. Annual appointment reconciliation audit: quarterly review of active carrier appointments vs. licensed states (unauthorized insurance transaction risk). Annual binding authority audit: review of binding authority grants vs. actual policies placed (E&O exposure assessment). Annual premium trust account reconciliation: monthly three-way reconciliation with annual CPA audit for larger agencies. Annual state market conduct compliance review (complaint ratio analysis — state insurance department market conduct examination trigger threshold). Annual agency valuation and perpetuation planning review (buy-sell agreement annual review for multi-owner agencies). Momenties tracks all compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "AHIP Medicare Certification, LTC Partnership & Producer Quality Calendar",
    description:
      "Medicare product compliance calendar: annual AHIP Medicare training certification by September 1 (required for all producers selling Medicare Advantage and Part D — CMS-mandated annual recertification through America&apos;s Health Insurance Plans); annual carrier-specific Medicare Advantage certification (each MA carrier — Humana, UnitedHealthcare, Aetna, BCBS — requires separate annual product training certification, typically July 1–September 1); annual CMS Marketing Guidelines review update (CMS Medicare Marketing Guidelines annual release — typically January, review required before AEP). Annual compliance for Medicare marketing rules: CMS Star Rating compliance in marketing materials, scope of appointment documentation, 48-hour rule compliance (48-hour advance appointment requirement for in-home presentations). Long-Term Care compliance: annual LTC Partnership program CE (state-specific annual update for Partnership-certified producers), annual LTC rate stability disclosure compliance review, annual LTC in-force policy service standards review. Annuity suitability: annual NAIC Suitability in Annuity Transactions Model Regulation training (Best Interest standard — annual training required for all annuity sales; NAIC model adopted in 40+ states). Annual replacement ratio documentation audit: life insurance and annuity replacement disclosure compliance (Form 1033 and Form 1035 documentation accuracy). Annual life settlement compliance (if applicable): state life settlement broker license annual CE. Annual continuing professional development: CPCU (3-year), CLU/ChFC (annual CE), CIC (annual CE). Momenties tracks all.",
  },
]

const timeline = [
  {
    phase: "Jan–Feb",
    title: "New Year License Renewals & CMS Guidelines Review",
    items: [
      "Annual CMS Medicare Marketing Guidelines review (January CMS release)",
      "Annual FINRA Form U4 comprehensive review and update",
      "Annual state market conduct complaint ratio analysis",
      "Annual premium trust account CPA reconciliation (prior year)",
      "Annual annuity suitability replacement ratio documentation audit",
    ],
  },
  {
    phase: "Mar–Apr",
    title: "Financial Filings & Carrier Appointment Renewals",
    items: [
      "Surplus lines quarterly stamping fee payment (California SLSC Q1)",
      "Annual carrier appointment renewal package preparation (E&O, license, FINRA copies)",
      "Annual agency buy-sell agreement and perpetuation planning review",
      "Annual data security NAIC Information Security Program update",
      "Annual HIPAA Privacy and Security training for all staff handling health insurance",
    ],
  },
  {
    phase: "May–Jun",
    title: "E&O Insurance Renewal & Mid-Year Audits",
    items: [
      "Annual E&O professional liability insurance renewal — 90-day advance preparation",
      "Annual cyber liability insurance renewal",
      "Quarterly carrier appointment reconciliation audit (Q2 — unauthorized transaction risk)",
      "Annual binding authority audit",
      "Annual LTC Partnership CE completion",
    ],
  },
  {
    phase: "Jul–Aug",
    title: "AHIP Medicare Certification Season",
    items: [
      "Complete AHIP Medicare training certification by September 1 (all Medicare producers)",
      "Complete carrier-specific Medicare Advantage annual product certifications (Humana/UHC/Aetna/BCBS)",
      "Annual anti-fraud training completion and state fraud bureau submission",
      "Annual AML certification for variable product producers",
      "Annual NFIP flood insurance agent training update",
    ],
  },
  {
    phase: "Sep–Oct",
    title: "Medicare AEP Prep & CE Completion",
    items: [
      "Annual Election Period (AEP) begins October 15 — all certifications must be current",
      "Annual 48-hour rule and scope of appointment documentation audit",
      "Complete state biennial CE hours (producers with year-end renewal dates)",
      "Annual California AB 2345 climate risk disclosure training",
      "Annual New York Regulation 187 best interest standard training update",
    ],
  },
  {
    phase: "Nov–Dec",
    title: "FINRA Annual Renewal & Year-End License Renewals",
    items: [
      "Submit FINRA CRD annual registration renewal by December 31",
      "Complete annual FINRA CE Program by December 31 (all registered reps)",
      "Submit state insurance producer license renewals (December 31 expiration states)",
      "Annual fidelity bond renewal",
      "Quarterly surplus lines stamping fee payment (Q4 — Texas SLTX monthly final)",
    ],
  },
]

const kpis = [
  {
    metric: "AHIP Medicare Certification",
    target: "100% by September 1",
    description: "All Medicare-producing agents complete AHIP annual certification and all carrier Medicare Advantage certifications before October 15 AEP — zero uncertified agents writing Medicare business.",
  },
  {
    metric: "FINRA Annual Renewal",
    target: "100% by December 31",
    description: "All registered representatives complete FINRA CRD annual renewal and annual FINRA CE Program by December 31 — zero lapsed FINRA registrations entering January 1.",
  },
  {
    metric: "E&O Coverage Current",
    target: "Zero lapse days",
    description: "E&O professional liability insurance renewed before expiration with zero lapse days — E&O lapse creates personal liability exposure and triggers carrier appointment terminations.",
  },
  {
    metric: "Anti-Fraud Training",
    target: "100% annual completion",
    description: "All licensed producers complete state-mandated annual anti-fraud training with certification submitted to state fraud bureau — 100% compliance avoids state market conduct examination triggers.",
  },
  {
    metric: "Surplus Lines Filings",
    target: "Zero late filings",
    description: "All surplus lines stamping fees and tax filings submitted by state deadline — California SLSC quarterly, Texas SLTX monthly — zero late filings to avoid state regulatory sanctions.",
  },
  {
    metric: "Trust Account Reconciliation",
    target: "Monthly three-way balance",
    description: "Premium trust account three-way reconciliation completed monthly — zero unresolved variances exceeding 30 days, annual CPA audit filed within 90 days of fiscal year end.",
  },
]

const testimonial = {
  quote:
    "State P&C license biennial CE renewals for 14 producers across 8 states with staggered expiration dates, state life and health license biennial CE renewals for 11 producers, AHIP Medicare annual certification for 9 Medicare producers by September 1, carrier-specific Medicare Advantage annual product certifications for 9 producers across 6 carriers, annual FINRA CRD registration renewal for 4 registered representatives, annual FINRA CE Program completion for all 4 registered reps by December 31, annual anti-fraud training completion and state bureau submission for all 14 producers, annual AML certification for 4 variable product producers, annual HIPAA training for all staff handling health insurance, annual NFIP flood insurance agent training, annual E&O professional liability insurance renewal for the agency, annual cyber liability insurance renewal, annual fidelity bond renewal, annual carrier appointment renewal packages for 22 carrier appointments, quarterly carrier appointment reconciliation audits, quarterly surplus lines stamping fee payments for California and Texas, monthly Texas SLTX surplus lines filings, annual premium trust account CPA reconciliation, annual CMS Medicare Marketing Guidelines review, annual Regulation 187 best interest training for New York-licensed producers, annual NAIC annuity suitability training, annual LTC Partnership CE for 3 LTC-certified producers, annual data security information security program update, and annual binding authority audit — all simultaneously. Momenties mapped every deadline.",
  name: "Ngozi IA.",
  title: "Licensed P&C and L&H Insurance Agency Owner, CPCU, CIC",
}

export default function InsuranceAgencyCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Insurance Agency Compliance Calendar"
        title="AHIP Medicare Certification. FINRA Annual Renewal. E&amp;O Insurance. One Calendar."
        subtitle="Momenties tracks state P&amp;C and life/health producer CE renewals across all licensed states, AHIP Medicare annual certification by September 1, carrier-specific Medicare Advantage certifications, FINRA CRD annual renewal, annual FINRA CE, E&amp;O insurance renewal, annual anti-fraud training, annual AML certification, surplus lines tax filings, and premium trust account reconciliation so insurance agency owners maintain every compliance deadline without administrative overload."
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
            Four Compliance Pillars Momenties Manages for Your Insurance Agency
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
            Your Insurance Agency Compliance Year at a Glance
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
                  gap: 24,
                }}
              >
                <div>
                  <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1rem" }}>{t.phase}</p>
                  <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.92rem", marginTop: 4 }}>{t.title}</p>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {t.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        color: "rgba(240,236,227,0.65)",
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        paddingLeft: 16,
                        position: "relative",
                        marginBottom: 4,
                      }}
                    >
                      <span style={{ position: "absolute", left: 0, color: "#c5a35c" }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
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
            Six KPIs Momenties Keeps on Track
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
                  background: "#0e0e12",
                  border: "1px solid rgba(197,163,92,0.15)",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1.05rem", marginBottom: 4 }}>
                  {k.metric}
                </p>
                <p style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.88rem", marginBottom: 8 }}>
                  Target: {k.target}
                </p>
                <p style={{ color: "rgba(240,236,227,0.6)", fontSize: "0.87rem", lineHeight: 1.6 }}>
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
