import type { Metadata } from "next"
import { Target, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Staffing Agency Calendar | Momenties",
  description: "Momenties gives staffing agencies an AI-powered calendar that tracks recruiter license renewals, EEOC compliance training, state agency registration, E&O insurance renewal, client contract annual reviews, and healthcare credential compliance — all in one place.",
}

const pillars = [
  {
    icon: Target,
    title: "Agency License & Recruiter Credential Renewal Calendar",
    description:
      "Staffing agencies managing facility and recruiter credential cycles track state employment agency license renewal (required in California, New York, Florida, Illinois, and 20+ other states — annual or biennial renewal with licensing fee and surety bond documentation), state private employment agency bond renewal (annual surety bond renewal — typically $5,000-$25,000 depending on state, with annual renewal documentation and premium payment), and specialty credentials: CSP (Certified Staffing Professional, ASA, annual renewal with 10 CE hours), CHP (Certified Healthcare Staffing Professional, NATSS/ASA Health Care Staffing, annual renewal) for healthcare staffing divisions, PRC (Professional Recruiter Certification, NPA, 3-year renewal) for executive search firms, CPHR (Certified Professional in Human Resources — SHRM-CP or PHR, 3-year renewal with 60 PDC or 60 CE hours) for agency HR and recruiting staff, and HRCI PHR/SPHR (3-year renewal, 60 CE hours) for HR-focused staffing managers. Healthcare staffing-specific: The Joint Commission (TJC) Health Care Staffing Services Certification (3-year cycle, triennial on-site certification survey) for healthcare staffing agencies. NATSS Healthcare Staffing Certification (annual renewal) for NATSS-member healthcare staffing firms. Momenties tracks all credential timelines concurrently.",
  },
  {
    icon: RefreshCw,
    title: "EEOC Compliance, OSHA & Annual Regulatory Calendar",
    description:
      "Staffing agencies as joint employers maintaining EEOC and labor law compliance manage: annual EEOC discrimination and harassment training for all internal staff (Title VII, ADA, ADEA, and GINA compliance — annual documentation), annual EEO-1 Component 1 filing (September 30 deadline for employers with 100+ employees or federal contractors — workforce composition data by race/ethnicity and sex), and annual OSHA 300A summary posting (February 1 through April 30 for agencies with 11+ employees). Employment law compliance: annual FLSA (Fair Labor Standards Act) wage and hour compliance training update (annual review of exempt vs. non-exempt classification for placed workers — overtime rule changes), annual I-9 compliance audit (all I-9 forms maintained for placed workers — annual reverification reminder for workers with work authorization expiration), and annual state-specific employment law update CE (many states have unique requirements — California AB5, New York DCWP requirements, Illinois EFAA). Background check: annual FCRA (Fair Credit Reporting Act) background check consent process review, annual state ban-the-box law compliance review. Pay equity: annual pay equity audit for placed workers. Momenties schedules all deadlines.",
  },
  {
    icon: TrendingUp,
    title: "Healthcare Staffing Credential Compliance & Quality Calendar",
    description:
      "Healthcare staffing agencies managing credentialing for placed nurses, allied health, and physician workers maintain: monthly credential expiration tracking for all actively placed healthcare workers (RN/LPN license, BLS/ACLS, TB test, immunization records, drug screen, background check — monthly rolling expiration review), quarterly Joint Commission Health Care Staffing Services certification standards compliance review (for TJC-certified agencies — quarterly internal audit of credentialing file completeness), annual TJC HCSS certification renewal documentation, and annual TJC random record review (25% of placed worker files reviewed annually per TJC standard). I-9 and work authorization: monthly I-9 reverification reminder for workers approaching work authorization expiration, annual I-9 audit for all active worker files. Healthcare worker compliance: annual healthcare worker flu vaccination status verification, annual TB (Mantoux or IGRA) documentation review for all placed healthcare workers (annual TB testing required by most healthcare facility clients), and annual immunization record update (hepatitis B, MMR, varicella titers — annual update for healthcare worker files). Competency: annual skills checklist completion for all placed healthcare workers (facility-specific annual competency assessment). Drug screening: annual drug testing policy review. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: BarChart3,
    title: "E&O Insurance, Client Contracts & Staffing Business Calendar",
    description:
      "Staffing agencies managing business compliance maintain: annual professional liability (E&O) insurance renewal (60-90 days advance — covers placement negligence and discrimination claims), annual employment practices liability insurance (EPLI) renewal (covers EEOC claims against the agency as joint employer), annual workers&apos; compensation insurance renewal (required for all placed workers — annual premium audit and renewal), and annual general liability insurance renewal with fidelity bond. Client contract compliance: annual master service agreement (MSA) review and renewal for all major client accounts (most staffing agency MSAs contain annual rate review provisions — proactive renewal avoids automatic rate freeze), annual mark-up rate and benefit cost review for all client accounts, and annual non-solicitation and exclusivity clause review for executive search agreements. Financial: annual SUI (State Unemployment Insurance) rate certification (annual SUI rate notice from state — update payroll systems by January 1), annual workers&apos; comp experience modification factor (EMR) review, quarterly payroll tax Form 941 for directly employed placed workers, and annual Form W-2 for all placed workers by January 31. ASA membership: annual American Staffing Association membership renewal and Workforce Monitor data reporting. Momenties consolidates all.",
  },
]

const timeline = [
  {
    month: "January – February",
    title: "SUI Rate Update & W-2 Filing",
    tasks: [
      "January 1: annual SUI rate update — apply new rates from state UI rate notice to payroll system",
      "January 31: Form W-2 filing for all placed workers employed through the agency",
      "January 31: Form 941 Q4 payroll tax return",
      "Annual EEO-1 planning — begin workforce composition data collection for September 30 filing",
      "Annual I-9 audit — review all active worker I-9 files for completeness and expiration",
    ],
  },
  {
    month: "March – April",
    title: "OSHA 300A Posting & EEOC Training",
    tasks: [
      "OSHA 300A Summary posted February 1 through April 30 for agencies with 11+ employees",
      "Annual EEOC discrimination and harassment training for all internal staff",
      "Annual FLSA wage and hour compliance training — exempt/non-exempt classification review",
      "Annual FCRA background check consent process review",
      "Annual state employment law update CE for recruiters in regulated states",
    ],
  },
  {
    month: "May – June",
    title: "E&O Renewal & Agency License Audit",
    tasks: [
      "Annual E&O professional liability insurance renewal — submit 90 days before expiration",
      "Annual EPLI employment practices liability renewal",
      "Annual general liability and fidelity bond renewal",
      "Annual state employment agency license renewal (states with June-September expiration)",
      "Annual state private employment agency surety bond renewal",
    ],
  },
  {
    month: "July – August",
    title: "Healthcare Credential Push & Contract Reviews",
    tasks: [
      "Annual healthcare worker flu vaccination status verification (before fall flu season)",
      "Annual TB documentation review for all placed healthcare workers",
      "Annual immunization record update for placed healthcare workers",
      "Annual master service agreement review and renewal for Q4 and Q1 expiring client contracts",
      "Annual workers&apos; comp EMR review and renewal preparation",
    ],
  },
  {
    month: "September – October",
    title: "EEO-1 Filing & Pay Equity Audit",
    tasks: [
      "September 30: EEO-1 Component 1 filing deadline for employers with 100+ employees",
      "Annual pay equity audit for placed workers across client accounts",
      "Annual ban-the-box law compliance review — state and local law update review",
      "Annual Joint Commission HCSS credentialing file 25% random record review",
      "Annual skills checklist completion audit for all placed healthcare workers",
    ],
  },
  {
    month: "November – December",
    title: "Year-End CE & CSP Renewal",
    tasks: [
      "Annual CSP (Certified Staffing Professional) CE completion — 10 hours required by year-end",
      "Annual CHP healthcare staffing certification CE completion",
      "PHR/SPHR or SHRM-CP CE completion sprint for staff with December 31 renewal deadlines",
      "Annual TJC HCSS certification internal audit documentation",
      "Annual rate and markup review for all MSAs renewing Q1",
    ],
  },
]

const kpis = [
  {
    metric: "Healthcare Worker Credential Expiration Rate",
    target: "Zero expired credentials for active placements",
    description: "Placing a healthcare worker with an expired license, BLS, or TB test triggers joint employer liability and client contract breach.",
  },
  {
    metric: "EEO-1 Filing On-Time Rate",
    target: "Filed by September 30 annually",
    description: "Late EEO-1 filings trigger EEOC investigations and, for federal contractors, debarment risk — track the deadline 60 days early.",
  },
  {
    metric: "Annual I-9 Audit Compliance",
    target: "100% of worker files complete",
    description: "I-9 errors carry $272–$2,701 per violation — annual audits identify issues before ICE audits and E-Verify mismatches surface.",
  },
  {
    metric: "Annual MSA Review Completion",
    target: "100% of major client contracts reviewed",
    description: "Unreviewed MSAs auto-renew at frozen rates — annual review protects margin against wage inflation and benefit cost increases.",
  },
  {
    metric: "E&O Insurance Renewal Lead Time",
    target: "Application submitted 90 days early",
    description: "E&O coverage gaps create uninsured placement negligence exposure — late renewal also violates most client MSA insurance requirements.",
  },
  {
    metric: "Annual EEOC Training Completion",
    target: "100% of internal staff trained annually",
    description: "Documented annual EEOC training is the primary affirmative defense in EPLI claims — missing documentation eliminates the defense.",
  },
]

const testimonial = {
  quote:
    "Annual state employment agency license renewal in 3 states on different cycles, annual surety bond renewal in 3 states, annual CSP certification CE for 8 recruiting staff, annual CHP healthcare staffing CE for 4 healthcare division staff, annual PHR renewal CE for 2 HR staff, TJC Health Care Staffing Services triennial certification with annual 25% random record review, monthly credential expiration tracking for 340 actively placed healthcare workers across RN license, BLS, ACLS, TB test, immunization records, and background check, monthly I-9 reverification reminder for workers approaching work authorization expiration, annual I-9 audit for all active files, annual EEO-1 filing for September 30 deadline, annual EEOC harassment and discrimination training for all 22 internal staff, OSHA 300A posting February 1, annual FLSA wage classification review, annual FCRA background check process review, annual state employment law update CE for staff in California and New York and Illinois, annual pay equity audit, annual flu vaccination verification for all placed healthcare workers, annual TB documentation review, annual skills checklist completion for all placed healthcare workers, annual E&O and EPLI and workers&apos; comp and general liability renewal, annual SUI rate update January 1, annual MSA review for 28 major client accounts, quarterly Form 941, January 31 W-2 filing for 680 placed workers, and annual ASA membership renewal — all simultaneously. Momenties mapped every deadline.",
  name: "Kwame SA.",
  title: "CSP, CHP, President & Owner, Multi-State Healthcare and General Staffing Agency",
}

export default function StaffingAgencyCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Staffing Agency Calendar"
        title="Healthcare Credential Tracking. EEO-1 Filing. E&O Insurance. One Calendar."
        subtitle="Momenties tracks monthly healthcare worker credential expirations for every active placement, annual EEO-1 September 30 filing, annual EEOC training documentation for all internal staff, annual I-9 audit for all worker files, monthly I-9 reverification reminders for workers approaching authorization expiration, annual state employment agency license renewals, annual surety bond renewals, annual MSA review for all major client accounts, and annual E&O and EPLI renewal — so your staffing agency never misses a compliance deadline."
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
            Four Calendar Pillars for Staffing Agency Compliance
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
            Your Staffing Agency Compliance Calendar
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
            Six KPIs Every Staffing Agency Should Track
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
