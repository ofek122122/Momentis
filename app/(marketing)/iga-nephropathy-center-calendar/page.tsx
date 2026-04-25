import type { Metadata } from "next"
import { Calendar, Clock, Users2, ClipboardList, BarChart3, TrendingUp, Bell, FileText, Stethoscope, Shield, Target, CheckCircle } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "IgA Nephropathy Center Calendar & Scheduling Optimization | Momenties",
  description: "AI-powered scheduling for IgA nephropathy centers. Coordinate nephrology visits, kidney biopsies, proteinuria monitoring, and immunosuppressive therapy follow-ups.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Nephrology Visit Coordination",
    description: "Intelligently schedule nephrology consultations, repeat kidney function panels, and urine protein-creatinine ratio assessments to align with disease monitoring intervals.",
  },
  {
    icon: ClipboardList,
    title: "Biopsy & Pathology Scheduling",
    description: "Coordinate kidney biopsy appointments, post-procedure follow-ups, and pathology review sessions with seamless multi-department calendar integration.",
  },
  {
    icon: Bell,
    title: "Medication Monitoring Alerts",
    description: "Automate reminders for immunosuppressive therapy reviews, RAAS inhibitor titrations, and sparsentan or budesonide follow-up appointments.",
  },
  {
    icon: BarChart3,
    title: "Disease Progression Tracking",
    description: "Schedule structured eGFR and proteinuria trending reviews at clinically appropriate intervals, supporting Oxford MEST-C classification follow-up workflows.",
  },
  {
    icon: Users2,
    title: "Multidisciplinary Team Sync",
    description: "Align nephrologists, pathologists, nurse practitioners, dietitians, and transplant coordinators with shared calendar visibility across care teams.",
  },
  {
    icon: Shield,
    title: "Regulatory & Audit Readiness",
    description: "Maintain documented scheduling logs for accreditation reviews, ensuring IgAN center compliance with nephrology quality standards and reporting requirements.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Workflow Discovery & EHR Mapping",
    description: "Audit existing scheduling workflows, identify bottlenecks in nephrology visit cycles, and map IgAN-specific care pathways from diagnosis to chronic management.",
  },
  {
    month: "Month 3–4",
    title: "Calendar Infrastructure Setup",
    description: "Configure AI scheduling templates for initial nephrology consultations, kidney biopsy pre/post workflows, and proteinuria monitoring cadences.",
  },
  {
    month: "Month 5–6",
    title: "Multidisciplinary Integration",
    description: "Connect nephrologist, pathology, pharmacy, and dietitian calendars into unified IgAN care team views with automated handoff scheduling.",
  },
  {
    month: "Month 7–8",
    title: "Patient Monitoring Automation",
    description: "Deploy automated scheduling for quarterly eGFR checks, annual biopsy reviews, and immunosuppression toxicity monitoring appointments.",
  },
  {
    month: "Month 9–10",
    title: "Clinical Trial Coordination",
    description: "Integrate research visit scheduling for IgAN clinical trial participants, aligning protocol windows with standard-of-care nephrology appointments.",
  },
  {
    month: "Month 11–12",
    title: "Performance Review & Optimization",
    description: "Analyze scheduling efficiency metrics, reduce no-show rates through intelligent reminders, and refine workflows for the next annual planning cycle.",
  },
]

const kpis = [
  {
    metric: "42%",
    target: "Reduction in Scheduling Gaps",
    description: "Fewer missed monitoring windows between nephrology visits and lab result reviews for IgAN patients.",
  },
  {
    metric: "55%",
    target: "Faster Biopsy Coordination",
    description: "Reduced time from nephrology referral to kidney biopsy completion through automated multi-department scheduling.",
  },
  {
    metric: "38%",
    target: "Improved Medication Follow-Up Rates",
    description: "More patients completing scheduled immunosuppressive therapy reviews and RAAS inhibitor titration appointments.",
  },
  {
    metric: "61%",
    target: "Decrease in Administrative Time",
    description: "Hours saved per week on manual scheduling tasks, freeing clinical staff for direct patient care.",
  },
  {
    metric: "47%",
    target: "Better Proteinuria Monitoring Adherence",
    description: "Increase in patients completing scheduled urine protein-creatinine ratio assessments on time.",
  },
  {
    metric: "33%",
    target: "Reduction in Patient No-Shows",
    description: "Fewer missed nephrology appointments through AI-driven reminders and intelligent rescheduling prompts.",
  },
]

const testimonial = {
  quote: "Momenties transformed how our IgAN center coordinates care. Biopsy scheduling, proteinuria monitoring, and immunosuppression follow-ups now happen seamlessly — our team spends time on patients, not calendars.",
  name: "Dr. Rachel Holloway",
  title: "Director of Glomerular Disease Program, University Nephrology Center",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="IgA Nephropathy · Momenties"
        title="Smarter Scheduling for IgA Nephropathy Centers"
        subtitle="AI-powered calendar coordination built for the complexity of IgAN care — from kidney biopsies and proteinuria monitoring to immunosuppressive therapy follow-ups and multidisciplinary team alignment."
      />

      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)" }}>
            Scheduling Solutions Designed for IgAN Care Complexity
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
