import type { Metadata } from "next"
import { Users, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Diversity, Equity & Inclusion Calendar | Momenties",
  description: "Build a systematic DEI calendar — pay equity analysis cycles, diverse hiring pipeline cadences, ERG program management, inclusion survey rhythms, and supplier diversity reporting schedules that translate DEI commitment into measurable organizational change.",
}

const pillars = [
  {
    icon: Users,
    title: "Diverse Hiring Pipeline Cadence & Inclusive Recruiting Calendar",
    description:
      "Representation goals don&apos;t improve without a systematic recruiting calendar. Momenties schedules quarterly diverse candidate pipeline reviews (measuring diverse slate compliance by department and level), bi-annual recruiting source audits (identifying which channels produce diverse hires vs. which don&apos;t), and annual campus and HBCU/HSI/tribal college recruiting program planning (applications open 6-9 months before program start). Structured interview process compliance — consistent question sets, diverse interview panels, calibration sessions — is tracked with hiring manager completion rates. Offer acceptance rate analysis by demographic — identifying where the funnel loses diverse candidates — is scheduled monthly for roles with approved requisitions.",
  },
  {
    icon: RefreshCw,
    title: "Pay Equity Analysis Cycles & Compensation Review Calendar",
    description:
      "Pay equity audits run once at IPO and forgotten are not equity programs. Momenties schedules annual unadjusted pay equity analysis (identifying unexplained gaps by gender, race/ethnicity, and intersectionality), semi-annual adjusted pay equity audits with regression analysis controlling for role, level, tenure, and performance, and quarterly pay band adherence reviews where offers and promotions are evaluated against approved compensation frameworks. California SB 1162, Illinois Equal Pay Registration Certificate, and Colorado Equal Pay for Equal Work Act all require annual pay data reporting with specific filing deadlines that Momenties tracks by jurisdiction.",
  },
  {
    icon: TrendingUp,
    title: "ERG Program Management & Inclusion Measurement Calendar",
    description:
      "Employee Resource Groups with no budget cycle and no measurement framework become social clubs rather than business drivers. Momenties schedules quarterly ERG leadership forums (cross-ERG coordination, business sponsorship alignment), annual ERG budget allocation cycles (proposals due 3 months before fiscal year start), bi-annual ERG health surveys measuring membership, engagement, and business impact, and annual inclusion index surveys measuring psychological safety, belonging, and manager inclusion behavior. Allyship training program completion tracking — often tied to performance review cycles — is managed with department-level completion rates and escalation alerts.",
  },
  {
    icon: BarChart3,
    title: "Supplier Diversity Program & DEI Metrics Reporting Calendar",
    description:
      "Supplier diversity programs without reporting cadences spend money without accountability. Momenties schedules quarterly supplier diversity spend reporting (tracking % of total spend with certified MBE/WBE/VOSB/SDVOSB suppliers), annual supplier diversity program certification audits, and NMSDC/WBENC certification renewal tracking for key diverse suppliers. Internal DEI metrics reporting — representation by level and department, promotion rate parity, attrition rate by demographic — is compiled monthly for CHROs and quarterly for boards. Annual DEI report production (external-facing) is managed with a 12-week content production calendar and legal review checkpoint.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "DEI Baseline Assessment & Calendar Architecture",
    description: "Complete representation audit by level, department, and demographic; run first pay equity analysis; assess ERG health and budget alignment; identify top 3 gaps to address in first year program.",
  },
  {
    month: "Month 3",
    title: "Inclusive Recruiting Launch & Pay Equity Remediation",
    description: "Launch diverse slate compliance program; implement structured interview process; begin pay equity remediation for identified gaps; establish quarterly pipeline metrics dashboard.",
  },
  {
    month: "Month 4–5",
    title: "ERG Program Refresh & Allyship Training Launch",
    description: "Audit and restructure ERG program with executive sponsorship; launch allyship training curriculum; establish ERG budget cycle; run first quarterly ERG leadership forum.",
  },
  {
    month: "Month 6",
    title: "Mid-Year DEI Metrics Review & Inclusion Survey",
    description: "Run mid-year inclusion index survey; review representation trends vs. hiring goals; assess pay equity remediation progress; adjust H2 DEI program priorities based on data.",
  },
  {
    month: "Month 7–9",
    title: "Supplier Diversity Launch & External Reporting Prep",
    description: "Launch supplier diversity program with spend tracking; submit state pay equity reports with upcoming deadlines; begin annual DEI report production; run second pay equity analysis.",
  },
  {
    month: "Month 10–12",
    title: "Annual DEI Review & Next-Year Program Planning",
    description: "Publish annual DEI report; present annual DEI metrics to board; lock next-year ERG budgets; complete pay data filings for applicable jurisdictions; plan next-year hiring diversity targets.",
  },
]

const kpis = [
  {
    metric: "Diverse Slate Compliance",
    target: "≥ 90% of requisitions",
    description: "Percentage of open requisitions above IC3 with at least one diverse candidate advancing to final round — below 70% compliance predicts flat or declining representation despite hiring volume growth.",
  },
  {
    metric: "Adjusted Pay Gap",
    target: "≤ 2% unexplained gap",
    description: "Unexplained compensation gap after controlling for role, level, tenure, and performance — above 5% adjusted gap creates legal exposure and signals systemic bias in compensation decisions.",
  },
  {
    metric: "Promotion Rate Parity",
    target: "Within 5% across demographics",
    description: "Ratio of promotion rates for underrepresented vs. majority demographic groups — above 15% promotion rate disparity is a leading indicator of future representation decline at senior levels.",
  },
  {
    metric: "Inclusion Index Score",
    target: "≥ 75% favorable bi-annually",
    description: "Percentage of employees responding favorably to belonging, psychological safety, and manager inclusion questions — below 65% favorable indicates inclusion initiatives are not translating to day-to-day experience.",
  },
  {
    metric: "ERG Membership Rate",
    target: "≥ 25% eligible employees",
    description: "Percentage of employees participating in at least one ERG — below 15% participation suggests ERG programs lack relevance or visibility, limiting their business and cultural impact.",
  },
  {
    metric: "Supplier Diversity Spend",
    target: "≥ 10% of addressable spend",
    description: "Percentage of total procurement spend with certified diverse suppliers — below 5% after 2 years indicates supplier diversity program lacks executive sponsorship or procurement process integration.",
  },
]

const testimonial = {
  quote:
    "Our DEI commitments were real but our execution was reactive — representation reviews happened when the board asked, pay equity analysis was triggered by complaints, and ERGs had no budget cycle. Momenties gave our People team a DEI operating calendar. Pay equity is reviewed twice a year now, our diverse slate compliance is at 94%, and our first annual DEI report was actually data-driven.",
  name: "Adaeze K.",
  title: "Chief People Officer, Series D SaaS",
}

export default function DiversityEquityInclusionCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Diversity, Equity & Inclusion Calendar"
        title="Pay Equity Audited. Diverse Slates. Inclusion Measured Twice a Year."
        subtitle="A systematic DEI calendar with pay equity analysis cycles, diverse hiring pipeline cadences, ERG program management rhythms, inclusion survey schedules, and supplier diversity reporting that translates DEI commitment into measurable organizational change."
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
            Four Systems That Build DEI Program Accountability
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
            Your Annual DEI Program Calendar
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
            KPIs That Define DEI Program Maturity
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
