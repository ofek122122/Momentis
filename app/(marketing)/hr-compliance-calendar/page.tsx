import type { Metadata } from "next"
import { FileText, RefreshCw, TrendingUp, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "HR Compliance Calendar | Momenties",
  description: "Build a systematic HR compliance calendar — employment law posting updates, benefits open enrollment deadlines, I-9 audit cycles, EEO reporting schedules, and harassment training renewal cadences that keep your workforce compliant year-round.",
}

const pillars = [
  {
    icon: FileText,
    title: "Employment Law Posting & Policy Review Cadence",
    description:
      "Federal and state employment law posting requirements change every year — minimum wage updates, OSHA poster revisions, FMLA notices, NLRA rights notices, and state-specific leave law postings all have independent update cycles. Momenties tracks all federal and state labor law poster update obligations, schedules annual employee handbook reviews with legal counsel, and manages policy acknowledgment collection cycles (30-day window post-update). State-specific compliance calendars — California DFEH, New York NYSDHR, Illinois IDHR — are mapped alongside federal EEOC requirements to prevent jurisdiction-specific violations.",
  },
  {
    icon: RefreshCw,
    title: "Benefits Open Enrollment, ACA Reporting & ERISA Deadlines",
    description:
      "Benefits compliance operates on a parallel calendar that most HR teams manage reactively. Momenties schedules the full benefits compliance cycle: open enrollment planning (begins 3 months before enrollment window), ACA Form 1094/1095-C filing deadlines (March 31 electronic, February 28 paper), Summary Plan Description (SPD) distribution to new hires within 90 days and updates within 210 days of plan changes, and ERISA Form 5500 annual report filing (7 months after plan year end, extended to 9.5 months with extension). COBRA qualifying event notices — 44-day window from qualifying event — are tracked with individual timers.",
  },
  {
    icon: TrendingUp,
    title: "EEO-1, VETS-4212 & Affirmative Action Plan Reporting",
    description:
      "Federal contractor and covered employer reporting obligations require systematic calendar management. EEO-1 Component 1 data collection and filing (typically March-May annually, employer size ≥100), VETS-4212 federal contractor report (August 1 – September 30 annually), and state pay equity reports (California SB 1162 by May 10, Illinois by March 23) all run concurrently. Affirmative Action Plan (AAP) annual updates — required within 120 days of federal contract award for contractors ≥$50K — require systematic workforce data compilation. Momenties schedules all data collection windows and filing deadlines with owner assignments.",
  },
  {
    icon: Users,
    title: "Harassment Training, I-9 Audits & New Hire Compliance",
    description:
      "State-mandated sexual harassment training has expanded to 11 states with renewal cycles of 1-2 years and role-specific hour requirements (California SB 1343: 2 hours supervisors/1 hour employees, New York 1 hour all employees). I-9 employment eligibility verification audits — annual internal audits recommended; 3-year re-verification window for temporary work authorization — are scheduled before ICE audit risk windows. New hire compliance packets — I-9, WOTC screening, state new hire reporting (within 20 days of hire), and benefits enrollment — are managed with individual onboarding calendars triggered at hire date.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "HR Compliance Audit & Calendar Baseline",
    description: "Complete HR compliance audit identifying all federal, state, and local obligations; map all annual filing deadlines; assign compliance owners; audit current labor law posting compliance and employee handbook currency.",
  },
  {
    month: "Month 3",
    title: "Benefits Compliance Calendar & COBRA Launch",
    description: "Map full benefits compliance calendar (open enrollment, ACA, Form 5500, SPD distribution); implement COBRA qualifying event tracking; audit current ERISA plan document currency and beneficiary designations.",
  },
  {
    month: "Month 4–5",
    title: "EEO & Affirmative Action Reporting Launch",
    description: "Set up EEO-1 data collection workflow; complete VETS-4212 if applicable; update or create Affirmative Action Plans; implement workforce demographic data reporting infrastructure.",
  },
  {
    month: "Month 6",
    title: "Harassment Training Rollout & I-9 Audit",
    description: "Launch state-mandated harassment training with completion tracking by role and state; complete annual I-9 internal audit; remediate I-9 errors and document corrections with legal review.",
  },
  {
    month: "Month 7–9",
    title: "Open Enrollment Planning & Policy Review Cycle",
    description: "Launch benefits open enrollment planning 3 months early; begin annual employee handbook review cycle; update all state and federal labor law postings; distribute SPD updates to active employees.",
  },
  {
    month: "Month 10–12",
    title: "Year-End Compliance Close & Next-Year Planning",
    description: "Execute open enrollment; file ACA 1095-C distribution timeline; complete Form 5500 for calendar-year plans; prepare next-year HR compliance calendar; present compliance posture report to CHRO and legal.",
  },
]

const kpis = [
  {
    metric: "Labor Law Posting Currency",
    target: "100% current within 30 days",
    description: "Percentage of required federal and state labor law postings current within 30 days of regulatory update — any lapse creates FMLA, OSHA, or NLRA posting violation exposure.",
  },
  {
    metric: "Harassment Training Completion",
    target: "100% by state deadline",
    description: "Percentage of employees completing mandatory state harassment training by statutory deadline — California, New York, and Illinois impose per-employee fines for non-compliance.",
  },
  {
    metric: "EEO-1 Filing On-Time",
    target: "100% by deadline",
    description: "EEO-1 Component 1 report filed by EEOC deadline — late filing triggers EEOC enforcement letters and can elevate audit risk for federal contractors.",
  },
  {
    metric: "I-9 Error Rate",
    target: "≤ 1% on internal audit",
    description: "Percentage of I-9 forms with substantive errors on annual internal audit — ICE civil penalties range $272–$2,701 per substantive violation; over 10% error rates commonly result in escalated penalties.",
  },
  {
    metric: "COBRA Notice Compliance",
    target: "100% within 44 days",
    description: "Percentage of COBRA qualifying event notices sent within the 44-day required window — late notices expose employers to $110/day excise tax per qualified beneficiary.",
  },
  {
    metric: "New Hire Reporting Compliance",
    target: "100% within 20 days",
    description: "Percentage of new hires reported to state new hire registry within the 20-day federal requirement — non-compliance creates state enforcement risk and child support withholding failures.",
  },
]

const testimonial = {
  quote:
    "We had 340 employees across six states and a compliance calendar that lived in one HR manager&apos;s head. State harassment training renewals, I-9 audits, EEO-1 filing, COBRA notices — everything was reactive. Momenties mapped every obligation by state and jurisdiction and gave our whole team visibility. We had zero compliance violations for the first time in our company&apos;s history.",
  name: "Ngozi F.",
  title: "Chief People Officer, Multi-State SaaS",
}

export default function HRComplianceCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="HR Compliance Calendar"
        title="Zero Posting Violations. Clean I-9 Audits. On-Time EEO Filings."
        subtitle="A systematic HR compliance calendar with employment law posting updates, benefits deadline tracking, EEO reporting cycles, harassment training renewals, and I-9 audit schedules that keep your workforce compliant year-round."
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
            Four Systems That Keep HR Compliance Current
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
            Your Annual HR Compliance Calendar
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
            KPIs That Define HR Compliance Maturity
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
