import type { Metadata } from "next"
import { Calendar, Clock, Stethoscope, BarChart3, ClipboardList, TrendingUp, Bell, UserCheck, Shield, FileText, Target, Award } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Cushing Syndrome Center Calendar Scheduling Optimization | Momenties",
  description: "AI-powered scheduling for Cushing syndrome and endocrinology centers. Reduce no-shows, coordinate multidisciplinary care, and optimize patient flow.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Multidisciplinary Coordination",
    description: "Automatically sync appointments across endocrinology, neurosurgery, radiology, and ophthalmology teams managing Cushing syndrome cases.",
  },
  {
    icon: ClipboardList,
    title: "Protocol-Driven Scheduling",
    description: "Build scheduling workflows around UFC, late-night salivary, and dexamethasone suppression testing timelines to ensure proper diagnostic sequencing.",
  },
  {
    icon: Bell,
    title: "Automated Reminders",
    description: "Send patient reminders for complex pre-appointment preparation requirements including fasting, medication holds, and specimen collection windows.",
  },
  {
    icon: BarChart3,
    title: "Utilization Analytics",
    description: "Track appointment slot utilization, identify peak demand periods, and optimize provider availability for rare disease consultations.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Baseline Assessment & Integration",
    description: "Audit current scheduling workflows, identify bottlenecks in Cushing syndrome care pathways, and integrate Momenties with your existing EHR and calendar systems.",
  },
  {
    month: "Month 3–4",
    title: "Protocol Template Build-Out",
    description: "Configure appointment templates for new Cushing evaluations, post-operative pituitary follow-ups, biochemical remission checks, and adrenal imaging reviews.",
  },
  {
    month: "Month 5–6",
    title: "Multidisciplinary Workflow Launch",
    description: "Go live with cross-specialty scheduling links connecting endocrinology, neurosurgery, and radiology so care teams see shared availability in real time.",
  },
  {
    month: "Month 7–8",
    title: "Patient Communication Automation",
    description: "Activate AI-generated reminders, preparation instructions, and follow-up prompts tailored to each stage of the Cushing evaluation and treatment journey.",
  },
  {
    month: "Month 9–10",
    title: "Capacity Optimization",
    description: "Analyze scheduling data to right-size new-patient versus follow-up ratios, reduce after-hours gaps, and increase access for urgent diagnostic referrals.",
  },
  {
    month: "Month 11–12",
    title: "Outcomes Review & Scale",
    description: "Measure no-show rates, time-to-diagnosis improvements, and provider satisfaction scores. Expand optimized templates to satellite clinic locations.",
  },
]

const kpis = [
  {
    metric: "38%",
    target: "Reduction in No-Show Rate",
    description: "Automated reminders and preparation guidance keep Cushing syndrome patients engaged and present for critical diagnostic appointments.",
  },
  {
    metric: "52%",
    target: "Faster Time to First Appointment",
    description: "Intelligent slot matching and real-time availability sharing cut weeks off the wait for newly referred Cushing syndrome patients.",
  },
  {
    metric: "4.1×",
    target: "Multidisciplinary Visit Coordination",
    description: "Care teams coordinate up to four times more cross-specialty visits per quarter without adding administrative headcount.",
  },
  {
    metric: "29%",
    target: "Increase in Provider Utilization",
    description: "Smarter fill logic reduces gaps between appointments, keeping rare-disease specialists fully productive throughout the day.",
  },
  {
    metric: "91%",
    target: "Patient Preparation Compliance",
    description: "Step-by-step reminder sequences ensure patients arrive ready for UFC collections, dexamethasone tests, and post-op labs.",
  },
  {
    metric: "67%",
    target: "Administrative Time Saved",
    description: "Front-desk staff reclaim hours previously spent on manual phone-tag follow-ups and referral coordination across departments.",
  },
]

const testimonial = {
  quote:
    "Since deploying Momenties, our Cushing syndrome diagnostic pathway has become dramatically more efficient. Patients no longer fall through scheduling gaps between endocrinology and neurosurgery — it just works.",
  name: "Dr. Renata Hollis",
  title: "Director of Endocrinology, Regional Pituitary & Adrenal Center",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Endocrinology Center · Momenties"
        title="Smarter Scheduling for Cushing Syndrome Centers"
        subtitle="Coordinate complex multidisciplinary care pathways, eliminate scheduling gaps between specialties, and give every Cushing syndrome patient a clear, timely road to diagnosis and treatment."
      />

      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)" }}>
            Built for the Complexity of Cushing Syndrome Care
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
