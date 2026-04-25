import type { Metadata } from "next"
import { ClipboardList, TrendingUp, BookOpen, Workflow, Target, UserCheck, Award, Bell } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "COPD Nurse Practitioner Scheduling Guide | Momenties",
  description: "Scheduling infrastructure for NPs managing inhaler technique assessments, exacerbation action-plan education, smoking-cessation counseling, and pulmonary rehabilitation referrals in COPD specialty clinics.",
}

const pillars = [
  {
    icon: ClipboardList,
    title: "Inhaler Technique & Adherence Coaching",
    description: "Inhaler technique assessment and LABA/LAMA/ICS adherence coaching with device-specific education workflows, structured return-demonstration appointments, and adherence gap follow-up scheduling.",
  },
  {
    icon: TrendingUp,
    title: "CAT/mMRC/GOLD Grade Trending",
    description: "CAT/mMRC/GOLD grade trending and exacerbation action plan review at every visit, with automated alerts for clinically significant score changes and urgent follow-up scheduling.",
  },
  {
    icon: BookOpen,
    title: "Smoking-Cessation Counseling",
    description: "Smoking-cessation pharmacotherapy (varenicline/NRT) counseling and follow-up with quit-date scheduling, 1-week and 1-month check-in reminders, and relapse-prevention appointment workflows.",
  },
  {
    icon: Workflow,
    title: "Pulmonary Rehab & Oxygen Titration",
    description: "Pulmonary rehabilitation enrollment and oxygen therapy titration with referral tracking, enrollment status reminders, and 6-minute walk test and overnight oximetry scheduling coordination.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Panel Assessment & Risk Stratification",
    description: "Review the full COPD patient panel, document GOLD grades and exacerbation history, and flag high-risk patients for priority scheduling and proactive outreach.",
  },
  {
    month: "Month 3–4",
    title: "Inhaler Technique Audit",
    description: "Complete LABA/LAMA/ICS device technique assessments across the panel using standardized checklists, schedule corrective education visits for patients failing technique criteria.",
  },
  {
    month: "Month 5–6",
    title: "Exacerbation Action-Plan Education",
    description: "Issue written exacerbation action plans to all COPD patients, conduct dedicated education visits, and schedule 6-month review appointments aligned with spirometry windows.",
  },
  {
    month: "Month 7–8",
    title: "Smoking-Cessation Program Launch",
    description: "Identify current smokers, initiate varenicline or NRT prescriptions, set quit dates, and build automated follow-up reminder sequences at 1 week, 1 month, and 3 months.",
  },
  {
    month: "Month 9–10",
    title: "Pulmonary Rehabilitation Referrals",
    description: "Generate GOLD 2–4 referrals to certified pulmonary rehabilitation programs, track enrollment progress, and schedule pre- and post-rehab assessment visits.",
  },
  {
    month: "Month 11–12",
    title: "Annual Panel Review & Calendar Reset",
    description: "Conduct annual COPD reviews, update GOLD classifications, assess program outcomes, and rebuild individualized scheduling calendars for the next care year.",
  },
]

const kpis = [
  {
    metric: "Inhaler Technique Pass Rate",
    target: "≥ 85%",
    description: "Patients demonstrating correct device technique at follow-up assessment visit.",
  },
  {
    metric: "Action-Plan Distribution",
    target: "100%",
    description: "All active COPD patients holding a current written exacerbation action plan.",
  },
  {
    metric: "Quit-Date Scheduling Rate",
    target: "≥ 75%",
    description: "Current smokers with a documented quit date and pharmacotherapy plan in place.",
  },
  {
    metric: "Pulmonary Rehab Referral Rate",
    target: "≥ 70%",
    description: "Eligible GOLD 2–4 patients with an active pulmonary rehabilitation referral.",
  },
  {
    metric: "CAT Score Trending Compliance",
    target: "≥ 90%",
    description: "Patients with CAT/mMRC scores documented at every scheduled COPD visit.",
  },
  {
    metric: "30-Day Exacerbation Readmission",
    target: "↓ 25%",
    description: "Reduction in 30-day readmissions following COPD acute exacerbation hospitalizations.",
  },
]

const testimonial = {
  quote: "Momenties gave our pulmonary NP team a simple way to coordinate inhaler education follow-ups, quit-date reminders, and rehab referral tracking in one place. It cut our administrative burden significantly and our patients notice the difference.",
  name: "Donna C., AGPCNP-BC",
  title: "Pulmonary NP",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="NP Resource — COPD"
        title="COPD Nurse Practitioner Scheduling Guide"
        subtitle="Scheduling infrastructure for NPs managing inhaler technique assessments, exacerbation action-plan education, smoking-cessation counseling, and pulmonary rehabilitation referrals in COPD specialty clinics."
      />
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "#f0ece3", marginBottom: 32 }}>Why Momenties</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {pillars.map((p) => (
              <div key={p.title} style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 28 }}>
                <p.icon size={28} color="#c5a35c" style={{ marginBottom: 16 }} />
                <h3 style={{ color: "#f0ece3", fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: 14, lineHeight: 1.6 }}>{p.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "#f0ece3", marginBottom: 32 }}>12-Month Implementation Timeline</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {timeline.map((t) => (
              <div key={t.month} style={{ display: "grid", gridTemplateColumns: "140px 1fr", background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "20px 24px", gap: 16 }}>
                <span style={{ color: "#c5a35c", fontSize: 13, fontWeight: 600 }}>{t.month}</span>
                <div>
                  <h4 style={{ color: "#f0ece3", fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{t.title}</h4>
                  <p style={{ color: "rgba(240,236,227,0.65)", fontSize: 14, lineHeight: 1.6 }}>{t.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "#f0ece3", marginBottom: 32 }}>Key Performance Indicators</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {kpis.map((k) => (
              <div key={k.metric} style={{ background: "#0a0a0d", border: "1px solid rgba(197,163,92,0.2)", borderRadius: 12, padding: 24 }}>
                <p style={{ color: "#c5a35c", fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{k.metric}</p>
                <p style={{ color: "#f0ece3", fontSize: 22, fontWeight: 700, marginBottom: 4 }}>{k.target}</p>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: 13 }}>{k.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <div style={{ background: "#131318", border: "1px solid rgba(197,163,92,0.25)", borderRadius: 16, padding: "36px 40px", maxWidth: 720 }}>
            <p style={{ color: "#f0ece3", fontSize: 18, lineHeight: 1.7, marginBottom: 24 }}>&ldquo;{testimonial.quote}&rdquo;</p>
            <p style={{ color: "#c5a35c", fontWeight: 600 }}>{testimonial.name}</p>
            <p style={{ color: "rgba(240,236,227,0.65)", fontSize: 14 }}>{testimonial.title}</p>
          </div>
        </section>
      </Reveal>
      <div style={{ padding: "80px 0 0" }}><CTA /></div>
    </main>
  )
}
