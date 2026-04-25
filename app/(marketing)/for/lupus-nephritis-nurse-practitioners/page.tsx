import type { Metadata } from "next"
import { UserCheck, Clock, ClipboardList, Bell, BookOpen, TrendingUp, Stethoscope, Shield, Calendar, BarChart3, FileText, CheckCircle } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Lupus Nephritis Nurse Practitioners | Momenties",
  description: "AI scheduling for lupus nephritis NPs. Manage flare follow-ups, immunosuppression labs, and multidisciplinary visits with zero administrative friction.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Disease Activity Monitoring Schedules",
    description: "Build recurring visit cadences around SLEDAI assessments, renal function panels, and complement levels so disease activity is caught and acted on before a full flare develops.",
  },
  {
    icon: Bell,
    title: "Automated Lab-Triggered Follow-Ups",
    description: "When a patient's proteinuria or creatinine crosses a threshold, Momenties instantly generates a follow-up slot — eliminating the manual triage step that delays intervention.",
  },
  {
    icon: ClipboardList,
    title: "Immunosuppression Protocol Tracking",
    description: "Align CBC, LFT, and drug-level checks with each patient's mycophenolate, azathioprine, or tacrolimus regimen so routine monitoring never falls through the cracks.",
  },
  {
    icon: UserCheck,
    title: "Infusion Pre-Authorization Coordination",
    description: "Coordinate belimumab or voclosporin prior authorization timelines with infusion suite scheduling so patients start therapy on time without bureaucratic delays.",
  },
  {
    icon: BookOpen,
    title: "Patient Education Visit Blocks",
    description: "Reserve dedicated time for renal diet counseling, lupus self-management education, and contraception counseling — high-value NP interactions that improve long-term adherence.",
  },
  {
    icon: Shield,
    title: "Flare Response Urgent Slots",
    description: "Maintain a daily buffer of urgent same-day slots for suspected flares, ensuring NPs can see acute presentations promptly without disrupting the full clinic schedule.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Practice Audit & Patient Panel Review",
    description: "Map your current lupus nephritis panel by disease stage, active immunosuppression, and visit frequency requirements to identify scheduling gaps and priority groups.",
  },
  {
    month: "Month 3–4",
    title: "Visit Template Library",
    description: "Build NP-specific appointment templates for new diagnosis workups, induction monitoring, maintenance visits, flare assessments, and annual renal risk reviews.",
  },
  {
    month: "Month 5–6",
    title: "Lab Integration & Alert Rules",
    description: "Connect Momenties to your EHR lab feed and configure threshold-based alert rules that auto-schedule follow-up appointments when critical values are returned.",
  },
  {
    month: "Month 7–8",
    title: "Multidisciplinary Sync",
    description: "Establish recurring joint slots with nephrology, rheumatology, and pharmacy so NP-led care plans are reviewed collaboratively without requiring ad-hoc phone coordination.",
  },
  {
    month: "Month 9–10",
    title: "Patient Reminder & Prep Automation",
    description: "Configure multi-step reminders that include urine collection instructions, fasting requirements, and medication hold guidance to maximize the value of every clinic visit.",
  },
  {
    month: "Month 11–12",
    title: "Outcome Review & Panel Expansion",
    description: "Analyze panel-wide scheduling adherence, flare response times, and lab monitoring compliance — then use findings to safely expand your lupus nephritis NP panel.",
  },
]

const kpis = [
  {
    metric: "47%",
    target: "Improvement in Monitoring Adherence",
    description: "Patients on immunosuppression stay on schedule with required lab checks when visits are auto-generated around their protocol calendar.",
  },
  {
    metric: "39%",
    target: "Faster Flare Response Time",
    description: "Reserved urgent slots and lab-triggered scheduling cut the time from abnormal result to NP assessment significantly.",
  },
  {
    metric: "33%",
    target: "Reduction in Administrative Task Time",
    description: "AI scheduling and automated reminders eliminate hours of manual follow-up calls and appointment booking each week.",
  },
  {
    metric: "55%",
    target: "Decrease in Missed Lab Follow-Ups",
    description: "Automated threshold alerts ensure no patient with worsening proteinuria or rising creatinine is waiting weeks for a return visit.",
  },
  {
    metric: "28%",
    target: "Increase in Patient Education Visit Completion",
    description: "Protected time blocks for education visits mean counseling happens consistently rather than being squeezed out by acute care demands.",
  },
  {
    metric: "42%",
    target: "Reduction in No-Show Rate",
    description: "Intelligent multi-step reminders with visit-specific prep instructions drive significantly higher day-of attendance across the lupus nephritis panel.",
  },
]

const testimonial = {
  quote: "As a lupus nephritis NP, I was spending an hour every morning sorting through lab results and manually booking follow-ups. Momenties automated that entire workflow. Now that hour goes directly to patient care.",
  name: "Dr. Amara Nwosu",
  title: "Lupus Nephritis Nurse Practitioner, Academic Nephrology Practice",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Lupus Nephritis NPs · Momenties"
        title="AI Scheduling Designed for Lupus Nephritis Nurse Practitioners"
        subtitle="From lab-triggered follow-ups to infusion coordination and flare response slots — Momenties handles the scheduling so you can focus on managing complex autoimmune kidney disease."
      />

      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)" }}>
            Built for Every Dimension of Lupus Nephritis NP Practice
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
