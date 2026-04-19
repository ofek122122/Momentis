import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Child Care Center Calendar | Momenties",
  description: "Momenties gives child care centers an AI-powered calendar that tracks state licensing renewal, staff CPR/First Aid cycles, NAEYC accreditation, immunization compliance, subsidy contract renewals, and child-to-staff ratio audits — all in one place.",
}

const pillars = [
  {
    icon: Target,
    title: "Center License & Staff Credential Renewal Calendar",
    description:
      "Child care centers managing facility and staff credential cycles track state child care center license renewal (annual or biennial depending on state licensing agency — most states require license renewal 60-90 days in advance with annual health and fire safety inspection documentation), director credential renewal (CDA — Child Development Associate, CDA Council, 3-year renewal with 120 CE hours or equivalent; or state-specific director credential with annual or biennial CE requirements), and staff certification renewals: CDA renewal for lead teachers (3-year cycle), annual CPR/AED training for all staff (AHA or Red Cross — annual renewal required by most state licensing agencies for all staff, not biennial), annual First Aid training for all staff, annual Pediatric First Aid and CPR for infant and child choking (required by most states as separate from adult CPR), and biennial Medication Administration training (required in most states for staff authorized to administer medications to children). Staff background check compliance: annual CBI (Colorado Bureau of Investigation) or state equivalent background check renewal for all staff (many states now require periodic rechecks — annual or 3-year depending on state). NAEYC Director Credential or state ECE director permit annual CE. Momenties tracks all credential timelines concurrently.",
  },
  {
    icon: RefreshCw,
    title: "NAEYC Accreditation, State Inspections & Annual Compliance Calendar",
    description:
      "Child care centers maintaining NAEYC (National Association for the Education of Young Children) accreditation manage the 5-year accreditation cycle with annual self-study reporting: annual NAEYC Portfolio Preparation and evidence collection (ongoing documentation of 10 NAEYC program standards), quinquennial on-site evaluation with 12-month preparation timeline, and annual NAEYC accreditation fee renewal. State licensing annual compliance calendar: annual state licensing renewal application (60-90 days advance), annual health and sanitation inspection documentation, annual fire safety inspection documentation (quarterly fire drill logs required in most states), quarterly tornado/emergency drill documentation, and annual carbon monoxide detector and smoke alarm inspection and battery replacement documentation. Immunization compliance: annual review of child immunization records for all enrolled children (most states require up-to-date immunization documentation at enrollment and annual review), annual exclusion policy review for immunization exemption documentation. Subsidy compliance: annual Child Care Assistance Program (CCAP)/CCDF subsidy contract renewal (state subsidy contracts — annual renewal with income verification and program compliance documentation), annual USDA Child and Adult Care Food Program (CACFP) annual renewal and site review (annual January 1 CACFP institution agreement renewal — meal pattern documentation). Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "Child-to-Staff Ratios, QRIS & Quality Calendar",
    description:
      "Child care centers participating in state Quality Rating and Improvement Systems (QRIS) maintain: annual QRIS self-assessment documentation (most states: annual star rating renewal application with documentation of staff credentials, curriculum, learning environment, and family engagement), annual QRIS classroom observation and assessment (CLASS — Classroom Assessment Scoring System, biennial external observation with annual self-assessment for participating programs), and annual QRIS professional development plan update for all teaching staff. Child-to-staff ratio compliance: monthly ratio compliance audit (state licensing ratio requirements — infant rooms typically 1:3 or 1:4, toddler rooms 1:5 or 1:6, preschool 1:10 or 1:12 — monthly documentation of daily ratio compliance), quarterly staff qualification documentation review (state-required education and training hours per role). Curriculum quality: annual ECERS (Early Childhood Environment Rating Scale) or ITERS self-assessment, annual curriculum fidelity audit (HighScope, Creative Curriculum, or program-specific curriculum). Health and nutrition: monthly CACFP meal count and menu documentation review, annual CACFP meal pattern compliance training for all food service staff, and quarterly allergy and special diet accommodation review. Emergency: annual active shooter/lockdown drill documentation (required by most states post-2018). Momenties tracks all quality compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Subsidy Billing, Parent Fees & Child Care Business Calendar",
    description:
      "Child care centers managing subsidy and private pay billing maintain: monthly CCDF/CCAP attendance-based billing submission (state subsidy portals — monthly billing cycle with attendance documentation, typically submitted by the 5th-10th of each month), annual CCDF provider agreement renewal (annual re-enrollment with state childcare agency — updated rates, program certifications, and compliance documentation), and quarterly copayment collection and audit (family share copayments for subsidy families — monthly collection tracking). CACFP financial calendar: monthly CACFP claim submission (USDA food program — monthly claim by the 5th of following month with meal counts and income eligibility documentation), annual CACFP administrative review (state agency site review — advance preparation required), and annual CACFP income eligibility application renewal for all families. Child care tax forms: annual IRS Form W-10 (Dependent Care Provider identification) provision to all families by January 31 (families need for Form 2441 dependent care credit). Business: quarterly payroll tax Form 941, annual renewal of certificate of occupancy (some states require annual CO renewal for child care facilities), and annual insurance renewal (general liability, abuse and molestation rider — 60-90 days advance). Staff: annual FMLA and ADA staff policy review update. Momenties consolidates all.",
  },
]

const timeline = [
  {
    month: "January – February",
    title: "CACFP Renewal & W-10 Tax Forms",
    tasks: [
      "January 1: CACFP institution agreement annual renewal and January claim submission",
      "January 31: IRS Form W-10 (Dependent Care Provider ID) provided to all families for tax filing",
      "Annual child immunization record review for all enrolled children",
      "Annual QRIS professional development plan update for all teaching staff",
      "Annual CCDF/CCAP provider agreement renewal application (submit 60 days early)",
    ],
  },
  {
    month: "March – April",
    title: "State Licensing Renewal & NAEYC Prep",
    tasks: [
      "Annual state child care center license renewal application (60-90 days advance for April-June expirations)",
      "Annual state health and sanitation inspection documentation",
      "Annual fire safety inspection documentation",
      "NAEYC annual portfolio evidence collection update",
      "Quarterly fire drill log review — verify Q1 drill documentation",
    ],
  },
  {
    month: "May – June",
    title: "Summer Enrollment & Staff Credential Push",
    tasks: [
      "Annual CPR/AED and First Aid renewal for all staff (most states: annual renewal)",
      "Annual Pediatric First Aid and infant/child choking CPR renewal for all staff",
      "Annual CDA renewal audit — verify 3-year cycle for all CDA-credentialed teachers",
      "Monthly child-to-staff ratio compliance audit — document all ratio compliance for summer enrollment",
      "Annual director credential CE completion audit",
    ],
  },
  {
    month: "July – August",
    title: "Back-to-School Enrollment & Income Eligibility",
    tasks: [
      "Annual CACFP income eligibility application renewal for all returning families (due before new program year)",
      "Annual CCDF/CCAP copayment schedule update for new program year",
      "New enrollment immunization record collection for all new children",
      "Annual exclusion policy and immunization exemption documentation review",
      "Quarterly tornado/emergency drill documentation (Q3 drill)",
    ],
  },
  {
    month: "September – October",
    title: "QRIS Annual Assessment & Background Checks",
    tasks: [
      "Annual QRIS star rating renewal application (most states: September-November submission window)",
      "Annual QRIS classroom observation scheduling (CLASS observation — annual or biennial)",
      "Annual staff background check renewal (states with annual recheck requirements)",
      "Annual carbon monoxide detector and smoke alarm battery replacement documentation",
      "Annual active shooter/lockdown drill documentation",
    ],
  },
  {
    month: "November – December",
    title: "Year-End CE Completion & Insurance Renewal",
    tasks: [
      "Annual general liability and abuse/molestation rider insurance renewal — submit 60-90 days early",
      "Annual state-required staff CE hours completion audit",
      "Annual ECERS/ITERS curriculum environment self-assessment",
      "Annual FMLA and ADA staff policy review and update",
      "Annual CACFP administrative review preparation — verify meal documentation completeness",
    ],
  },
]

const kpis = [
  {
    metric: "Monthly CACFP Claim Submission Rate",
    target: "100% submitted by 5th of each month",
    description: "Late CACFP claims are denied — reimbursement funds staff salaries and food costs. No exceptions for monthly deadlines.",
  },
  {
    metric: "Child-to-Staff Ratio Compliance",
    target: "100% compliance every operating day",
    description: "Ratio violations trigger immediate state licensing citations, potential fines, and license suspension — document daily.",
  },
  {
    metric: "Annual CPR/First Aid Renewal Rate",
    target: "100% of staff renewed annually",
    description: "Staff with lapsed CPR certifications must not be counted toward ratio — creates compliance risk during any health emergency.",
  },
  {
    metric: "Immunization Record Compliance",
    target: "100% of enrolled children up-to-date",
    description: "Unenforced immunization compliance triggers state licensing citations and liability in disease outbreak scenarios.",
  },
  {
    metric: "QRIS Star Rating Maintenance",
    target: "Annual renewal filed on time",
    description: "Lapsed QRIS rating eliminates enhanced subsidy rates in most states — revenue loss can exceed $50 per enrolled child per month.",
  },
  {
    metric: "W-10 Tax Form Delivery",
    target: "100% of families receive by January 31",
    description: "Families cannot file the dependent care tax credit without Form W-10 — late delivery creates parent complaints and potential liability.",
  },
]

const testimonial = {
  quote:
    "Annual state child care license renewal in 2 states on different cycles, NAEYC accreditation 5-year cycle with annual portfolio evidence collection and annual NAEYC fee renewal, annual health and sanitation and fire safety inspection documentation, monthly fire drill log documentation, quarterly tornado drill documentation, annual active shooter drill, annual carbon monoxide and smoke alarm inspection, annual CPR and AED and First Aid and Pediatric First Aid renewal for 18 staff members, annual medication administration training for 8 authorized staff, annual CDA renewal tracking for 6 CDA-credentialed teachers on different 3-year cycles, annual director credential CE completion, annual background check renewal for all staff in 2 states, monthly CCDF attendance-based billing for 84 subsidy-enrolled children, annual CCDF provider agreement renewal, monthly CACFP meal count claim submission for 110 enrolled children, annual CACFP income eligibility application renewal for all families, annual CACFP administrative review preparation, January 31 W-10 tax form delivery to all 110 families, annual child immunization record review for all enrolled children, annual QRIS star rating renewal application with classroom observation, quarterly ratio compliance audit, annual ECERS self-assessment, annual insurance renewal, and annual FMLA policy review — all simultaneously across 2 locations. Momenties mapped every deadline.",
  name: "Emeka CC.",
  title: "MBA, CDA, Owner & Director, 2-Location NAEYC-Accredited Child Care Center",
}

export default function ChildcareCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Child Care Center Calendar"
        title="State License. CACFP Monthly Claims. NAEYC Accreditation. One Calendar."
        subtitle="Momenties tracks annual state child care center license renewal, monthly CACFP meal claim submissions by the 5th, annual CPR and First Aid renewal for every staff member, monthly child-to-staff ratio compliance audits, annual QRIS star rating renewal applications, annual CCDF provider agreement renewals, annual child immunization record reviews, NAEYC accreditation annual portfolio documentation, and annual insurance renewal — so your child care center never misses a licensing or compliance deadline."
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
            Four Calendar Pillars for Child Care Center Compliance
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
            Your Child Care Center Compliance Calendar
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
            Six KPIs Every Child Care Center Should Track
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
