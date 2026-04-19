import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Senior Living & Assisted Living Compliance Calendar | Momenties",
  description: "Momenties helps senior living and assisted living facilities track state residential care license annual renewal, AHCA/NCAL accreditation, CNA annual in-service hours, monthly elopement drill documentation, annual fire safety inspection, OIG monthly exclusions check, and CMS annual certification in one AI calendar.",
}

const pillars = [
  {
    icon: Target,
    title: "State AL License, Staff Credentialing & Residential Care Renewal Calendar",
    description:
      "Assisted living, memory care, and senior living facilities maintain state residential care license with annual renewal requirements that vary significantly by state. State assisted living license: annual renewal (most states) with annual license fee and annual compliance documentation — administrator, staffing ratios, physical plant compliance. Administrator license: state residential care facility administrator (RCFE/RCFA) license renewal — biennial in most states with continuing education (California: 40 CE hours every 2 years including mandatory dementia CE; Florida: 12 CE hours biennial; Texas: 12 CE hours annual). NCAL (National Center for Assisted Living) accreditation: NCAL/AHCA Quality Award program — annual quality improvement documentation. CALA (Certified Assisted Living Administrator, NCAL/NAB, 3-year renewal) for NPs or clinical directors in administrator roles. CDAL (Certified Director of Assisted Living, NCAL, 3-year renewal) — annual attestation. CNA (Certified Nursing Assistant) annual in-service: most states require 12 hours annual CNA in-service (federal minimum; state requirements may exceed — California: 8 hours annual dementia-specific training for all direct care staff). Medication aide certification: state-specific medication aide (MA/CMA/QMAP) annual or biennial renewal. Dementia care specialist: CDP (Certified Dementia Practitioner, NCCDP, 1-year renewal) for memory care unit managers and direct care staff. Annual background check: annual criminal background check renewal for all direct care staff in most states (live scan annual or biennial). Annual TB test: annual TB screening for all direct care staff. Momenties tracks all staggered staff credential cycles.",
  },
  {
    icon: RefreshCw,
    title: "CMS Certification, OIG Exclusions & Regulatory Compliance Calendar",
    description:
      "CMS compliance calendar: monthly OIG/LEIE exclusions check — all employees, contractors, vendors, and owners must be checked against the OIG List of Excluded Individuals and Entities monthly (OIG requires monthly screening for Medicare/Medicaid participation); monthly SAM.gov (System for Award Management) exclusion check. Annual CMS Conditions of Participation (CoP) compliance review for facilities with Medicare/Medicaid certification. Life safety code: annual fire safety inspection (state fire marshal or AHJ — annual sprinkler inspection, annual fire alarm inspection, annual generator testing documentation), quarterly fire drill documentation (most states require quarterly fire drills for all shifts — 4 drills per year minimum including at least 1 nighttime drill), monthly fire extinguisher inspection documentation. Elopement safety: monthly elopement/wandering prevention drill documentation (required in most states for memory care units — monthly drill with documentation of all participants), quarterly door alarm testing documentation. Annual survey preparation: state health department annual survey preparation (AHCA/NCAL benchmarks — annual internal mock survey before state inspection). Annual HIPAA training for all staff (PHI handling, minimum necessary, breach reporting). Annual emergency preparedness: annual facility emergency operations plan review (CMS Emergency Preparedness Rule 42 CFR 483 — annual EP tabletop exercise, annual EP plan update). Annual food service inspection: annual health department food service inspection. Annual elevator and equipment certification. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "Fall Prevention, Incident Reporting & Quality Compliance Calendar",
    description:
      "Senior living quality compliance calendar: fall prevention quality: monthly fall rate review (AHCA/NCAL quality benchmark — falls per 1,000 resident days; target ≤5.0 per 1,000 resident days for assisted living), monthly fall with injury rate review, quarterly fall prevention program audit (STEADI fall prevention protocol compliance). Pressure injury quality: monthly pressure injury incidence rate review (NPUAP/EPUAP Stage 2+ pressure injuries — monthly audit, target ≤2% incidence), quarterly wound care documentation audit. Resident rights compliance: monthly grievance documentation review (state requirement — grievance log audit), annual resident rights training for all staff, annual resident satisfaction survey completion. Medication management quality: monthly medication error rate review (state standard — error rate per 1,000 medication administrations), quarterly medication storage temperature log audit, annual medication aide competency assessment. Elopement and behavioral: monthly incident report accuracy audit (state reporting requirements — reportable incidents to state licensing agency within 24 hours), quarterly behavioral intervention documentation audit (for memory care units). Weight and nutrition: monthly unintended weight loss rate review (CMS threshold — ≥5% weight loss in 30 days or ≥10% in 180 days triggers RCA). Staffing: quarterly direct care hours per resident day review (AHCA/NCAL benchmark and state minimum staffing ratio compliance). Annual background check completion rate: 100% of direct care staff with current background check. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "Financial Compliance, Insurance Renewals & Senior Living Operations Calendar",
    description:
      "Senior living facility financial and operational compliance calendar: annual general liability and professional liability insurance renewal — senior care liability, professional liability (nursing), and abuse/molestation coverage annual renewal, begin 90 days before expiration. Annual D&amp;O (Directors &amp; Officers) insurance renewal for multi-facility operators. Annual workers&apos; compensation premium audit (WC payroll audit for senior living — high risk classification code). Annual property and casualty insurance renewal. Annual cyber liability insurance renewal (resident EHR and billing data). Annual environmental compliance: annual AHERA asbestos management plan review (if building pre-1980 — annual re-inspection and plan update), annual lead paint compliance review (EPA RRP rule for pre-1978 buildings — annual maintenance protocol review). Annual financial audit or review: state licensing requirements for annual financial statements (some states require audited financial statements for residential care license renewal). Annual CMS cost report (Form 2552-10 for SNF-certified beds — if applicable). Annual contract review: annual review of all resident admission agreements for state regulatory compliance (admission agreement terms, fee disclosure, discharge criteria). Annual physician/NP oversight agreement renewal: state requirement for physician or NP medical director contract (annual renewal for medical director agreement — scope of services, on-call response time, medication oversight). Momenties tracks all operational compliance.",
  },
]

const timeline = [
  {
    phase: "Jan–Feb",
    title: "Annual Compliance Kick-Off & OIG Checks",
    items: [
      "January 1: renew annual state assisted living license and pay license fee",
      "Monthly OIG/LEIE and SAM.gov exclusion checks (ongoing — first check of year)",
      "Annual emergency operations plan review and EP tabletop exercise",
      "Annual HIPAA training for all staff",
      "Annual CMS Conditions of Participation compliance self-review",
    ],
  },
  {
    phase: "Mar–Apr",
    title: "Fire Safety Inspections & Annual Survey Prep",
    items: [
      "Annual fire safety inspection (state fire marshal — sprinkler, alarm, generator)",
      "Annual AHCA/NCAL mock survey preparation (before anticipated state survey window)",
      "Quarterly fire drill Q1 (all shifts — documentation required)",
      "Annual TB screening for all direct care staff",
      "Annual elevator and mechanical equipment certification",
    ],
  },
  {
    phase: "May–Jun",
    title: "Insurance Renewals & Staff Credential Audits",
    items: [
      "Annual general liability, professional liability, and abuse coverage renewal — 90-day advance",
      "Annual workers&apos; compensation payroll audit",
      "Annual background check status audit (100% of direct care staff current)",
      "Quarterly fall prevention program audit (Q2 — STEADI protocol compliance)",
      "Monthly elopement drill documentation (June drill — all memory care staff)",
    ],
  },
  {
    phase: "Jul–Aug",
    title: "Mid-Year Quality Reviews & CE Completion",
    items: [
      "Mid-year fall rate and fall with injury rate review (Q2 performance vs. AHCA benchmarks)",
      "Mid-year pressure injury incidence rate review",
      "Annual administrator license CE completion (for fall expiration dates)",
      "Annual CNA in-service 12-hour requirement — mid-year completion check",
      "Annual dementia-specific training completion for all memory care direct care staff",
    ],
  },
  {
    phase: "Sep–Oct",
    title: "Annual Survey Window & Quality Reporting",
    items: [
      "Primary state annual survey window (most states September–November)",
      "Annual resident satisfaction survey completion and review",
      "Annual resident rights training for all staff",
      "Quarterly fire drill Q3 (nighttime drill — all shifts)",
      "Annual food service health department inspection",
    ],
  },
  {
    phase: "Nov–Dec",
    title: "Year-End License Renewals & Financial Compliance",
    items: [
      "Annual financial statement or audit preparation for license renewal",
      "Annual physician/NP medical director agreement renewal",
      "Annual admission agreement review for state regulatory compliance",
      "Annual asbestos management plan review (pre-1980 buildings)",
      "Annual cyber liability insurance renewal",
    ],
  },
]

const kpis = [
  {
    metric: "OIG Monthly Checks",
    target: "100% every month",
    description: "All employees, contractors, and vendors checked against OIG/LEIE and SAM.gov exclusion lists monthly — zero excluded individuals working or billing in the facility.",
  },
  {
    metric: "Fall Rate",
    target: "≤ 5.0 per 1,000 resident days",
    description: "Monthly fall rate at or below AHCA/NCAL benchmark of 5.0 falls per 1,000 resident days — monitored monthly with root cause analysis for falls with serious injury.",
  },
  {
    metric: "Quarterly Fire Drills",
    target: "4 per year (all shifts)",
    description: "Four fire drills per year on all shifts including at least one nighttime drill — zero missed quarterly drills with full participant documentation as required by state.",
  },
  {
    metric: "Elopement Drills",
    target: "Monthly in memory care",
    description: "Monthly elopement/wandering prevention drills in memory care units with all direct care staff documented as participants — zero missed monthly drills.",
  },
  {
    metric: "Background Checks",
    target: "100% direct care staff current",
    description: "100% of direct care staff with current criminal background check — zero direct care staff working beyond background check expiration date per state requirement.",
  },
  {
    metric: "CNA Annual In-Service",
    target: "12 hours per staff year",
    description: "All CNAs complete minimum 12 hours annual in-service including mandatory dementia-specific training — 100% completion before anniversary or license renewal date.",
  },
]

const testimonial = {
  quote:
    "Annual state assisted living license renewal for 3 facilities, monthly OIG LEIE exclusions check for 84 employees and contractors across all 3 facilities, monthly SAM.gov exclusion checks, annual CMS Conditions of Participation compliance review for 2 Medicare-certified buildings, annual fire safety inspections for 3 facilities including sprinkler and alarm and generator, quarterly fire drills for all shifts at all 3 facilities including nighttime drills, monthly elopement drill documentation for 2 memory care units, annual state health department survey preparation mock surveys, annual resident rights training for 84 staff, annual HIPAA training for 84 staff, annual emergency operations plan review and tabletop exercise, annual TB screening for all direct care staff, annual background check status audit for all 84 direct care staff, annual CNA 12-hour in-service completion tracking for 42 CNAs, annual dementia-specific training for all 28 memory care direct care staff, CALA biennial renewal CE for 3 administrators, CDP annual renewal for 6 memory care managers, monthly fall rate reviews and monthly fall with injury rate reviews, quarterly fall prevention program audits, monthly pressure injury incidence rate reviews, monthly medication error rate reviews, monthly incident report accuracy audits, monthly unintended weight loss rate reviews, quarterly staffing direct care hours per resident day reviews, annual general liability and professional liability and abuse coverage renewal, annual workers&apos; compensation payroll audit, annual asbestos management plan review for pre-1980 buildings, annual admission agreement attorney review, annual physician medical director agreement renewals, and annual food service inspection — all simultaneously. Momenties mapped every deadline.",
  name: "Obiageli SL.",
  title: "RN, CALA, Multi-Facility Assisted Living Executive Director",
}

export default function SeniorLivingFacilityCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Senior Living &amp; Assisted Living Compliance Calendar"
        title="OIG Monthly Checks. AL License Annual. Quarterly Fire Drills. One Calendar."
        subtitle="Momenties tracks monthly OIG LEIE exclusion checks, annual state assisted living license renewals, annual CNA in-service tracking, quarterly fire drill documentation, monthly elopement drill documentation, annual fire safety inspections, annual state survey preparation, monthly fall rate reviews, annual HIPAA training, annual emergency operations plan reviews, annual administrator license CE, annual medical director agreement renewals, and annual general liability insurance renewals so senior living administrators maintain every compliance deadline without administrative overload."
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
            Four Compliance Pillars Momenties Manages for Your Senior Living Facility
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
            Your Senior Living Facility Compliance Year at a Glance
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
