import type { Metadata } from "next"
import { Calendar, Clock, Users2, ClipboardList, TrendingUp, Bell, FileText, Stethoscope, Target, CheckCircle, BookOpen, Award } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for IgA Nephropathy Nurse Practitioners | Momenties",
  description: "Purpose-built scheduling for IgAN nurse practitioners. Manage proteinuria monitoring, medication titrations, patient education, and nephrology care coordination effortlessly.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Structured Monitoring Schedules",
    description: "Build recurring appointment cadences for eGFR checks, urine albumin-creatinine ratios, and blood pressure assessments tailored to each patient's IgAN risk category.",
  },
  {
    icon: Bell,
    title: "Medication Titration Reminders",
    description: "Never miss a RAAS inhibitor up-titration or immunosuppressive review. Automated alerts keep your medication management protocols on track for every IgAN patient.",
  },
  {
    icon: ClipboardList,
    title: "Patient Education Session Planning",
    description: "Schedule disease education visits, dietary counseling referrals, and self-monitoring instruction sessions with built-in follow-up prompts for patient engagement.",
  },
  {
    icon: Users2,
    title: "Care Team Coordination",
    description: "Seamlessly coordinate with supervising nephrologists, pharmacists, dietitians, and social workers through shared calendar views and automated handoff scheduling.",
  },
  {
    icon: TrendingUp,
    title: "Lab Result Follow-Up Automation",
    description: "Automatically queue follow-up appointments when proteinuria thresholds are exceeded or eGFR decline triggers protocol-based escalation in your IgAN management workflow.",
  },
  {
    icon: BookOpen,
    title: "CME & Certification Tracking",
    description: "Log nephrology continuing education credits, IgAN specialty certifications, and conference attendance alongside your clinical schedule without juggling separate systems.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Practice Assessment & Onboarding",
    description: "Map your current IgAN patient panel, document monitoring protocols, and configure Momenties to match your clinic's visit cadences and documentation requirements.",
  },
  {
    month: "Month 3–4",
    title: "Monitoring Protocol Templates",
    description: "Build recurring schedule templates for high-risk IgAN patients (proteinuria >1g/day) and lower-risk patients, incorporating Oxford MEST-C staging into visit planning.",
  },
  {
    month: "Month 5–6",
    title: "Medication Management Workflows",
    description: "Automate scheduling for RAAS inhibitor reviews, sparsentan follow-ups, targeted-release budesonide assessments, and immunosuppressive toxicity monitoring.",
  },
  {
    month: "Month 7–8",
    title: "Patient Engagement Integration",
    description: "Deploy patient-facing appointment reminders, lab prep instructions, and dietary counseling scheduling to improve adherence and visit completion rates.",
  },
  {
    month: "Month 9–10",
    title: "Clinical Research Participation",
    description: "Coordinate IgAN clinical trial screening visits, informed consent sessions, and protocol follow-ups alongside your standard NP practice schedule.",
  },
  {
    month: "Month 11–12",
    title: "Outcomes Review & Panel Optimization",
    description: "Analyze scheduling data to identify care gaps, optimize panel size for effective monitoring, and refine protocols based on patient outcomes and workflow efficiency.",
  },
]

const kpis = [
  {
    metric: "48%",
    target: "Improvement in Monitoring Adherence",
    description: "More IgAN patients completing scheduled proteinuria and eGFR assessments within recommended windows.",
  },
  {
    metric: "52%",
    target: "Reduction in Administrative Burden",
    description: "Hours reclaimed weekly from manual appointment management, allowing more time for direct patient care and education.",
  },
  {
    metric: "39%",
    target: "Faster Medication Review Cycles",
    description: "Reduced lag time between lab result availability and scheduled RAAS inhibitor or immunosuppressive therapy review appointments.",
  },
  {
    metric: "44%",
    target: "Increase in Education Session Completion",
    description: "More patients completing structured IgAN disease education and dietary counseling through proactive scheduling and reminders.",
  },
  {
    metric: "36%",
    target: "Fewer Missed Escalation Triggers",
    description: "Reduction in cases where proteinuria thresholds or eGFR decline went unaddressed due to scheduling gaps.",
  },
  {
    metric: "58%",
    target: "Improved Care Coordination Speed",
    description: "Faster handoffs to supervising nephrologists, pharmacists, and dietitians through automated multi-provider scheduling.",
  },
]

const testimonial = {
  quote: "As an NP managing a complex IgAN panel, Momenties keeps every monitoring interval, medication review, and patient education visit on track. I spend my mental energy on patients, not on juggling appointments.",
  name: "Dr. Meredith Callahan",
  title: "Nephrology Nurse Practitioner, Glomerular Disease Specialty Clinic",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="IgA Nephropathy Nurse Practitioners · Momenties"
        title="The Scheduling Platform Built for IgAN Nurse Practitioners"
        subtitle="Manage your IgA nephropathy patient panel with precision — from structured monitoring cadences and medication titration workflows to care team coordination and patient education scheduling."
      />

      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)" }}>
            Tools That Match How IgAN Nurse Practitioners Work
          </h2>
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
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)" }}>
            12-Month Implementation Roadmap
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {timeline.map((t) => (
              <div key={t.month} style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: 24 }}>
                <span style={{ color: "#c5a35c", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>{t.month}</span>
                <h3 style={{ color: "#f0ece3", fontSize: 15, fontWeight: 600, margin: "8px 0 6px" }}>{t.title}</h3>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: 13, lineHeight: 1.6 }}>{t.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)" }}>
            Performance Benchmarks
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {kpis.map((k) => (
              <div key={k.target} style={{ background: "#131318", border: "1px solid rgba(197,163,92,0.2)", borderRadius: 12, padding: 24 }}>
                <div style={{ fontSize: 32, fontWeight: 700, color: "#c5a35c", marginBottom: 4 }}>{k.metric}</div>
                <div style={{ color: "#f0ece3", fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{k.target}</div>
                <div style={{ color: "rgba(240,236,227,0.65)", fontSize: 13, lineHeight: 1.5 }}>{k.description}</div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ maxWidth: 800, margin: "0 auto", padding: "80px 24px 0" }}>
          <blockquote style={{ background: "#131318", border: "1px solid rgba(197,163,92,0.25)", borderRadius: 16, padding: "40px 48px", textAlign: "center" }}>
            <p style={{ color: "#f0ece3", fontSize: 18, lineHeight: 1.7, fontStyle: "italic", marginBottom: 24 }}>"{testimonial.quote}"</p>
            <footer>
              <div style={{ color: "#c5a35c", fontWeight: 600, fontSize: 15 }}>{testimonial.name}</div>
              <div style={{ color: "rgba(240,236,227,0.5)", fontSize: 13, marginTop: 4 }}>{testimonial.title}</div>
            </footer>
          </blockquote>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}><CTA /></div>
    </main>
  )
}
