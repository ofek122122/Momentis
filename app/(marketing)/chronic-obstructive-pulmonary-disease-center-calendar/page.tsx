import type { Metadata } from "next"
import { Stethoscope, ClipboardList, Shield, TrendingUp, BookOpen, Target, Award, Bell, UserCheck, BarChart3, Calendar, Workflow } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "COPD Center Calendar Management | Momenties",
  description: "AI-powered scheduling for COPD centers coordinating spirometry/CAT/mMRC monitoring, triple inhaler optimization, dupilumab/benralizumab biologic initiation, pulmonary rehabilitation enrollment, and exacerbation reduction protocols.",
}

const pillars = [
  {
    icon: BarChart3,
    title: "Spirometry & Symptom Score Monitoring",
    description: "Post-bronchodilator spirometry and CAT/mMRC symptom score Q6-month monitoring with automated recall scheduling and result trending to track disease progression.",
  },
  {
    icon: ClipboardList,
    title: "Triple Inhaler Optimization",
    description: "LABA/LAMA/ICS triple inhaler technique assessment and adherence visits with structured coaching sessions and device-specific follow-up appointment workflows.",
  },
  {
    icon: Stethoscope,
    title: "Biologic Therapy Cycling",
    description: "Dupilumab 300 mg Q2w or benralizumab 30 mg Q4w biologic cycling for eosinophilic COPD with eosinophil count gating, infusion scheduling, and response evaluation touchpoints.",
  },
  {
    icon: Workflow,
    title: "Pulmonary Rehab & Cessation",
    description: "Pulmonary rehabilitation referral and smoking-cessation pharmacotherapy coordination with enrollment tracking, session attendance reminders, and pharmacotherapy follow-up scheduling.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Baseline Spirometry & GOLD Classification",
    description: "Schedule post-bronchodilator spirometry for all new COPD patients, assign GOLD grade, capture CAT and mMRC scores at intake, and establish individual monitoring calendars.",
  },
  {
    month: "Month 3–4",
    title: "Inhaler Technique Assessment Rollout",
    description: "Conduct LABA/LAMA/ICS device technique assessments across the panel, identify adherence barriers, and schedule corrective education sessions with follow-up confirmation appointments.",
  },
  {
    month: "Month 5–6",
    title: "Exacerbation Action-Plan Distribution",
    description: "Issue personalized exacerbation action plans, schedule action-plan review visits at 6-month spirometry windows, and configure automated alert reminders for high-risk patients.",
  },
  {
    month: "Month 7–8",
    title: "Pulmonary Rehabilitation Enrollment",
    description: "Identify GOLD 2–4 candidates, generate pulmonary rehabilitation referrals, track enrollment status, and schedule pre- and post-rehabilitation 6-minute walk test assessments.",
  },
  {
    month: "Month 9–10",
    title: "Biologic Therapy Initiation",
    description: "Screen eosinophilic COPD patients meeting dupilumab or benralizumab criteria, schedule biologic initiation visits, and build Q2w/Q4w infusion or injection calendar templates.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review & Protocol Refresh",
    description: "Conduct annual spirometry, reassess GOLD grade, review exacerbation rates, evaluate biologic response, and update individualized care calendars for the next 12-month cycle.",
  },
]

const kpis = [
  {
    metric: "Spirometry Completion Rate",
    target: "≥ 90%",
    description: "Q6-month post-bronchodilator spirometry completed on schedule across COPD panel.",
  },
  {
    metric: "Inhaler Technique Pass Rate",
    target: "≥ 85%",
    description: "Patients demonstrating correct LABA/LAMA/ICS device technique at reassessment.",
  },
  {
    metric: "Exacerbation Hospitalization Rate",
    target: "↓ 30%",
    description: "Reduction in COPD-related acute exacerbations requiring hospitalization year over year.",
  },
  {
    metric: "Pulmonary Rehab Enrollment",
    target: "≥ 70%",
    description: "Eligible GOLD 2–4 patients enrolled in a certified pulmonary rehabilitation program.",
  },
  {
    metric: "Biologic Adherence",
    target: "≥ 88%",
    description: "Eosinophilic COPD patients maintaining dupilumab/benralizumab dosing schedule.",
  },
  {
    metric: "Smoking Cessation Rate",
    target: "≥ 40%",
    description: "Current smokers achieving confirmed abstinence at 12-month follow-up visit.",
  },
]

const testimonial = {
  quote: "Momenties transformed how our center coordinates spirometry recalls and biologic infusion windows. Missed monitoring visits are down substantially and our care team finally has a unified view of each patient's COPD trajectory.",
  name: "Dr. B. Celli",
  title: "COPD Research Program",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="COPD Specialty Center"
        title="COPD Center Calendar Management"
        subtitle="AI-powered scheduling for COPD centers coordinating spirometry/CAT/mMRC monitoring, triple inhaler (LABA/LAMA/ICS) optimization, dupilumab/benralizumab biologic initiation, pulmonary rehabilitation enrollment, and exacerbation reduction protocols."
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
