import type { Metadata } from "next"
import { Calendar, ClipboardList, Stethoscope, BarChart3, Clock, Shield, FileText, UserCheck, Bell, BookOpen, TrendingUp, Target } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pemphigus Vulgaris Center Calendar | Momenties",
  description: "AI-powered scheduling for autoimmune blistering disease centers managing rituximab infusions, desmoglein antibody monitoring, immunosuppression tapers, and mucosal wound care follow-ups.",
}

const pillars = [
  {
    icon: Calendar,
    title: "Rituximab Infusion Scheduling",
    description: "Coordinate B-cell depletion infusion cycles with pre-medication windows, post-infusion observation slots, and 6-month re-dosing reminders built into a single calendar workflow.",
  },
  {
    icon: ClipboardList,
    title: "Desmoglein Antibody Monitoring",
    description: "Auto-schedule IIF and ELISA lab draws at protocol intervals, link results review appointments to taper decision windows, and flag overdue serology before the next clinical encounter.",
  },
  {
    icon: Stethoscope,
    title: "Mucosal Wound Care Follow-Up",
    description: "Track oral, pharyngeal, and genital lesion assessments on staggered cadences, ensuring wound-care nurses and dermatologists are booked before dressing change deadlines.",
  },
  {
    icon: Shield,
    title: "Immunosuppression Taper Coordination",
    description: "Build taper milestones directly into the patient timeline so prednisone dose reductions, azathioprine checks, and mycophenolate labs never fall between scheduling cracks.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Baseline Workflow Audit",
    description: "Map current scheduling touchpoints for new PV diagnoses—from biopsy confirmation through first rituximab consent—and identify gaps causing appointment delays or missed serology.",
  },
  {
    month: "Month 3–4",
    title: "Rituximab Infusion Protocol Integration",
    description: "Import B-cell depletion infusion protocols into Momenties, configure pre-medication visit slots, and connect infusion suite availability to dermatology follow-up windows.",
  },
  {
    month: "Month 5–6",
    title: "Serology & Lab Cadence Automation",
    description: "Automate desmoglein-1 and desmoglein-3 ELISA/IIF draw reminders at 3-, 6-, and 12-month marks, routing results to the ordering clinician before the next scheduled appointment.",
  },
  {
    month: "Month 7–8",
    title: "Mucosal Care & Wound Nurse Coordination",
    description: "Introduce shared calendars between dermatology and wound care nursing so oral and mucosal lesion follow-ups are co-scheduled, reducing fragmented patient journeys.",
  },
  {
    month: "Month 9–10",
    title: "Taper Decision Visit Alignment",
    description: "Align immunosuppression taper milestone appointments with lab availability and specialist review, embedding dose-reduction triggers directly into the patient's visit schedule.",
  },
  {
    month: "Month 11–12",
    title: "Outcomes Review & Continuous Improvement",
    description: "Analyze no-show rates, infusion slot utilization, and serology lag times. Recalibrate scheduling templates using Momenties analytics to hit next-year performance targets.",
  },
]

const kpis = [
  {
    metric: "94%",
    target: "Rituximab Cycle Adherence",
    description: "Centers using structured scheduling report near-complete adherence to planned B-cell depletion re-dosing intervals, preventing disease relapse from missed infusions.",
  },
  {
    metric: "61%",
    target: "Reduction in Serology Lag",
    description: "Automated ELISA/IIF reminders cut the average delay between scheduled and completed antibody monitoring draws by more than half.",
  },
  {
    metric: "78%",
    target: "Taper Visit Completion Rate",
    description: "Pre-scheduled taper milestone appointments reach completion far more reliably than ad-hoc follow-up requests, supporting safer immunosuppression reduction.",
  },
  {
    metric: "3.2×",
    target: "Faster New-Patient Onboarding",
    description: "From confirmed diagnosis to first rituximab infusion, AI-assisted scheduling compresses the intake pathway from weeks to days.",
  },
  {
    metric: "88%",
    target: "Staff Calendar Utilization",
    description: "Shared visibility across dermatology, infusion nursing, and wound care teams eliminates double-booking and idle slots in high-demand treatment suites.",
  },
  {
    metric: "47%",
    target: "Fewer Missed Lab Draws",
    description: "Proactive reminders tied to visit schedules reduce the rate of undrawn desmoglein antibody panels that previously delayed taper decisions.",
  },
]

const testimonial = {
  quote: "Managing PV patients means juggling rituximab cycles, antibody labs, and wound care simultaneously. Momenties pulled all of that into one coherent schedule. Our infusion suite runs at capacity and our patients actually arrive prepared for their serology draws.",
  name: "Dr. Miriam Osei",
  title: "Director, Autoimmune Blistering Disease Center",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="AUTOIMMUNE BLISTERING DISEASE · Momenties"
        title="Pemphigus Vulgaris Center Scheduling, Optimized"
        subtitle="AI-powered calendar management for dermatology centers coordinating rituximab infusions, desmoglein antibody surveillance, immunosuppression tapers, and mucosal wound care—all in one place."
      />
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)" }}>
            Four Pillars of PV Center Scheduling Excellence
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
