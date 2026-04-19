import type { Metadata } from "next"
import { Shield, RefreshCw, TrendingUp, BarChart3 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Compliance Training Calendar | Momenties",
  description: "Build a systematic compliance training calendar — mandatory training completion cycles, regulatory update education programs, role-based certification renewals, training effectiveness measurement, and audit readiness documentation that keeps organizations protected and regulators satisfied.",
}

const pillars = [
  {
    icon: Shield,
    title: "Mandatory Training Completion Cycles & New Hire Onboarding",
    description:
      "Compliance training programs without a governance calendar miss completion deadlines, create audit findings, and expose organizations to regulatory penalties — and new hires who miss required training before customer access create liability. Momenties schedules annual mandatory training cycles for all employees (harassment prevention, data privacy/GDPR, security awareness, code of conduct, anti-bribery/FCPA), role-based annual training for specific positions (HIPAA for healthcare-adjacent roles, SOX controls for finance, PCI-DSS for payment processors), and new hire onboarding training requirements with completion gates before system access is granted. Automated escalation workflows — reminders at 30, 14, and 7 days before deadlines, with manager notifications at 7 days and HRIS access restrictions at overdue — ensure near-100% completion without manual chasing.",
  },
  {
    icon: RefreshCw,
    title: "Regulatory Update Education & Policy Change Training Calendar",
    description:
      "Compliance training based on last year&apos;s regulations creates false confidence — and failing to train employees on regulatory changes is treated as a compliance program deficiency in most regulatory audits. Momenties schedules quarterly regulatory horizon scans (identifying upcoming regulatory changes that require training program updates), just-in-time training deployments when material regulatory changes take effect (GDPR updates, CCPA amendments, FTC rule changes, DOL regulation revisions), and annual policy update training cycles where revised internal policies are communicated with comprehension verification. Training content refresh cycles — updating harassment prevention content for new case law, updating security training for current threat vectors, updating anti-corruption training for active enforcement priorities — are managed with legal and compliance team ownership. Training vendor contract renewals are tracked 90 days before expiration.",
  },
  {
    icon: TrendingUp,
    title: "Role-Based Certification Renewals & Professional Compliance CE",
    description:
      "Role-based compliance certifications that lapse create immediate regulatory exposure — a lapsed AML Certified Anti-Money Laundering Specialist (CAMS) at a financial institution or a lapsed CIPP privacy certification at a data processor creates documented control gaps. Momenties schedules renewal calendars for all professional compliance certifications held by team members: CAMS (3-year cycle), CIPP/CIPM/CIPT (2-year cycle), CFE Certified Fraud Examiner (2-year cycle), CCEP Certified Compliance and Ethics Professional (2-year cycle), and CIA Certified Internal Auditor (3-year cycle). Certification renewal requires CPE credits throughout the cycle — not just at renewal — so ongoing CE tracking is integrated with certification renewal deadlines. Industry-specific certification calendars (CHPC for healthcare privacy, CISSP for security-adjacent compliance roles) are tracked with jurisdiction-specific requirements.",
  },
  {
    icon: BarChart3,
    title: "Training Effectiveness Measurement & Audit Readiness Calendar",
    description:
      "Compliance training programs measured only by completion rate tell regulators nothing about whether employees can apply what they learned — and regulators increasingly request evidence of training effectiveness, not just completion records. Momenties schedules quarterly training effectiveness assessments (comparing pre/post quiz scores, measuring behavior change through policy violation rates, and correlating training completion with incident rates), semi-annual training program audits (reviewing content accuracy, regulatory alignment, and comprehension rates by role), and annual compliance training program reviews presenting evidence of program effectiveness to the board compliance committee. Audit readiness documentation — training completion reports by employee, role, and date; training content version control; regulatory alignment mapping — is maintained on a rolling basis so it is available within 24 hours of an audit request.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Training Audit & Compliance Calendar Architecture",
    description: "Audit current mandatory training completion rates and regulatory alignment; map all role-based certification renewal dates; build annual training cycle calendar; implement automated completion reminders and escalation workflows; establish new hire onboarding training gates; review training vendor contracts.",
  },
  {
    month: "Month 3",
    title: "Mandatory Training Launch & Regulatory Update Program",
    description: "Launch annual mandatory training cycle with automated reminders; run first quarterly regulatory horizon scan; establish policy update training deployment process; create role-based certification renewal tracking for all team certifications; implement training completion dashboard.",
  },
  {
    month: "Month 4–5",
    title: "Training Effectiveness Measurement & Content Refresh",
    description: "Run first quarterly training effectiveness assessment (pre/post quiz scores, violation rate tracking); complete first training content refresh cycle for highest-priority modules; launch CPE tracking for all professional certifications; run first semi-annual training program audit.",
  },
  {
    month: "Month 6",
    title: "Mid-Year Compliance Training Review",
    description: "Present mid-year training completion rates by department and role; review regulatory change training deployments; assess training effectiveness trends; review certification renewal pipeline for H2; update training program for any H1 policy changes.",
  },
  {
    month: "Month 7–9",
    title: "Annual Content Audit & Certification Renewal Sprint",
    description: "Run annual training content audit (regulatory alignment, case law updates, current threat vectors); process H2 certification renewals with CPE gap analysis; run second semi-annual training program audit; complete annual harassment prevention content refresh for new case law.",
  },
  {
    month: "Month 10–12",
    title: "Annual Compliance Training Report & Next-Year Planning",
    description: "Present annual compliance training effectiveness report for board compliance committee; prepare audit readiness documentation package; lock next-year training calendar and mandatory training schedule; finalize vendor contracts; run annual regulatory horizon scan for next-year training program planning.",
  },
]

const kpis = [
  {
    metric: "Mandatory Training Completion Rate",
    target: "100% by deadline",
    description: "Percentage of employees completing mandatory training by the annual deadline — any incomplete mandatory training creates documented control gaps in regulatory audits; above 95% completion by 2 weeks before deadline is achievable with automated reminder cadences.",
  },
  {
    metric: "New Hire Training Completion Time",
    target: "≤ 5 business days before system access",
    description: "Average time from hire start to completion of required onboarding training — any new hire with system access before mandatory training completion creates documented liability; completion gates prevent access until training is verified.",
  },
  {
    metric: "Training Effectiveness Score",
    target: "≥ 85% pass rate on assessments",
    description: "Average post-training assessment pass rate across all compliance training programs — below 75% pass rate indicates content clarity problems or learner engagement failures; training that cannot be passed cannot be relied on to change behavior.",
  },
  {
    metric: "Regulatory Alignment Currency",
    target: "100% content updated within 60 days",
    description: "Percentage of training content updated within 60 days of material regulatory changes — content more than 90 days stale after a regulation change is treated as a control deficiency in most compliance program audits.",
  },
  {
    metric: "Certification Renewal Lapse Rate",
    target: "Zero lapsed certifications",
    description: "Number of professional compliance certifications held by staff that lapse due to missing renewal — any lapsed certification creates an immediate documented control gap; certifications should be renewed at 90% of the renewal window, not at the deadline.",
  },
  {
    metric: "Audit Documentation Readiness",
    target: "≤ 24 hours to produce records",
    description: "Time to produce complete training completion records, content version history, and regulatory alignment documentation in response to an audit request — above 72 hours suggests documentation management failures that themselves create audit findings.",
  },
]

const testimonial = {
  quote:
    "We had 34% incomplete mandatory training at audit time, certification renewals managed in a personal spreadsheet, training content that hadn&apos;t been updated since GDPR passed, and no documentation of training effectiveness whatsoever. The regulator cited all of it. Momenties gave us a compliance training calendar. We&apos;ve had 99.8% completion every cycle since, and our last audit resulted in zero training-related findings.",
  name: "Nkechi O.",
  title: "Chief Compliance Officer, Series C Financial Services",
}

export default function ComplianceTrainingCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Compliance Training Calendar"
        title="99.8% Completion. Zero Audit Findings. Training That Actually Works."
        subtitle="A systematic compliance training calendar with automated mandatory training cycles, quarterly regulatory update deployments, role-based certification renewal tracking, training effectiveness measurement, and audit readiness documentation that keeps organizations protected and regulators satisfied."
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
            Four Systems That Build Compliance Training Excellence
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
            Your 12-Month Compliance Training Roadmap
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
            KPIs That Define Compliance Training Program Maturity
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
