import type { Metadata } from "next"
import { Calendar, Clock, Users2, ClipboardList, Bell, TrendingUp, Stethoscope, Shield, Target, BarChart3, FileText, CheckCircle } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Lupus Nephritis Center Calendar & Scheduling Optimization | Momenties",
  description: "AI-powered scheduling for lupus nephritis centers. Coordinate nephrology, rheumatology, and infusion appointments to improve patient outcomes.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Multidisciplinary Care Coordination",
    description: "Synchronize nephrology, rheumatology, pathology, and infusion therapy appointments so lupus nephritis patients receive seamlessly connected care without scheduling gaps.",
  },
  {
    icon: Bell,
    title: "Flare & Lab Follow-Up Alerts",
    description: "Automatically schedule follow-up visits after abnormal urinalysis, creatinine spikes, or complement level changes so disease activity is never left unmonitored.",
  },
  {
    icon: ClipboardList,
    title: "Biopsy & Infusion Workflow",
    description: "Coordinate kidney biopsy prep, pathology read-back, and induction therapy infusion slots within a single scheduling workflow to eliminate delays in treatment initiation.",
  },
  {
    icon: Shield,
    title: "Immunosuppression Monitoring",
    description: "Schedule routine CBC, metabolic panels, and drug-level checks aligned with mycophenolate, azathioprine, or belimumab protocols to keep immunosuppression safely on track.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Workflow Discovery & Integration",
    description: "Audit current nephrology and rheumatology scheduling workflows, map existing EHR touchpoints, and connect Momenties to existing calendar and reminder systems.",
  },
  {
    month: "Month 3–4",
    title: "Multidisciplinary Template Build",
    description: "Create shared appointment templates for new lupus nephritis diagnoses, induction regimens, maintenance therapy cycles, and urgent flare assessments.",
  },
  {
    month: "Month 5–6",
    title: "Lab-Triggered Scheduling Automation",
    description: "Configure rules that auto-generate follow-up slots when lab results cross pre-defined thresholds, reducing manual triage and missed follow-up rates.",
  },
  {
    month: "Month 7–8",
    title: "Infusion Suite Capacity Optimization",
    description: "Analyze infusion chair utilization, redistribute belimumab and cyclophosphamide infusion blocks, and reduce patient wait times for induction therapy.",
  },
  {
    month: "Month 9–10",
    title: "Patient Communication & Reminders",
    description: "Deploy automated pre-visit reminders, urine collection prep instructions, and post-visit follow-up confirmations to reduce no-show rates by specialty.",
  },
  {
    month: "Month 11–12",
    title: "Outcomes Review & Scale",
    description: "Review scheduling KPIs against clinical benchmarks, present findings to center leadership, and expand optimized workflows to satellite nephrology locations.",
  },
]

const kpis = [
  {
    metric: "38%",
    target: "Reduction in Time to Treatment Initiation",
    description: "Faster coordination between biopsy results, pathology read-back, and first induction infusion scheduling.",
  },
  {
    metric: "45%",
    target: "Decrease in Missed Lab Follow-Ups",
    description: "Automated scheduling triggered by abnormal renal function or serology results closes critical gaps in monitoring.",
  },
  {
    metric: "29%",
    target: "Improvement in Infusion Chair Utilization",
    description: "Optimized block scheduling for cyclophosphamide and belimumab reduces idle chair time and overtime.",
  },
  {
    metric: "52%",
    target: "Fewer Scheduling-Related Care Gaps",
    description: "Multidisciplinary appointment templates ensure nephrology and rheumatology visits stay synchronized throughout the care journey.",
  },
  {
    metric: "41%",
    target: "Reduction in Patient No-Show Rate",
    description: "Intelligent multi-step reminders with urine prep instructions dramatically improve day-of attendance for complex visits.",
  },
  {
    metric: "34%",
    target: "Administrative Time Saved per Coordinator",
    description: "AI-driven auto-scheduling and template reuse free coordinators to focus on complex case navigation and patient support.",
  },
]

const testimonial = {
  quote: "Momenties transformed how our lupus nephritis program coordinates care. Biopsy results now automatically trigger an infusion scheduling workflow — our team spends less time chasing appointments and more time with patients.",
  name: "Dr. Serena Okafor",
  title: "Director of Lupus Nephritis Program, Academic Medical Center",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Lupus Nephritis Center · Momenties"
        title="Smarter Scheduling for Lupus Nephritis Programs"
        subtitle="AI-powered calendar coordination built for nephrology and rheumatology teams managing complex, multi-step lupus nephritis care pathways."
      />

      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)" }}>
            Purpose-Built for Lupus Nephritis Care Teams
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
