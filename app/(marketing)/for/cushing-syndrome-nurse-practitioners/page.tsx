import type { Metadata } from "next"
import { UserCheck, Clock, BookOpen, ClipboardList, Bell, TrendingUp, Shield, MessageSquare, Target, Calendar, Stethoscope, Award } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Cushing Syndrome Nurse Practitioners | Momenties",
  description: "AI scheduling built for Cushing syndrome NPs. Manage complex follow-up timelines, testing windows, and multidisciplinary care coordination effortlessly.",
}

const pillars = [
  {
    icon: ClipboardList,
    title: "Testing Timeline Management",
    description: "Stay on top of 24-hour UFC collections, midnight salivary cortisol windows, and dexamethasone suppression test schedules with automated reminders and protocol-based appointment spacing.",
  },
  {
    icon: UserCheck,
    title: "Longitudinal Follow-Up Tracking",
    description: "Automatically schedule biochemical monitoring visits, imaging reviews, and quality-of-life assessments at the correct post-treatment intervals for every patient in your panel.",
  },
  {
    icon: MessageSquare,
    title: "Patient Education Touchpoints",
    description: "Trigger pre-visit education sequences explaining preparation steps for diagnostic tests and post-operative adrenal insufficiency protocols before patients even arrive.",
  },
  {
    icon: Shield,
    title: "Adrenal Crisis Safety Nets",
    description: "Flag patients on glucocorticoid replacement for priority scheduling and set automatic check-in reminders during high-risk periods such as illness or surgical recovery.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Panel Audit & Workflow Mapping",
    description: "Import your Cushing syndrome patient panel, map each patient's current stage (diagnostic, post-surgical, remission monitoring, recurrence surveillance), and tag appropriate scheduling protocols.",
  },
  {
    month: "Month 3–4",
    title: "Protocol Template Configuration",
    description: "Build reusable scheduling templates for new Cushing evaluations, post-pituitary surgery follow-ups, adrenalectomy recovery checks, and long-term remission monitoring cadences.",
  },
  {
    month: "Month 5–6",
    title: "Automated Reminder Sequences",
    description: "Activate multi-step reminder flows for complex test preparation — including cortisol collection timing, medication holds before testing, and fasting requirements for imaging.",
  },
  {
    month: "Month 7–8",
    title: "Multidisciplinary Handoff Coordination",
    description: "Link your schedule with neurosurgery, radiation oncology, and ophthalmology so referral appointments are captured and followed up without manual back-and-forth.",
  },
  {
    month: "Month 9–10",
    title: "Recurrence Surveillance Automation",
    description: "Set up long-horizon scheduling for annual or biannual imaging and biochemical surveillance so no patient in remission falls off your radar over time.",
  },
  {
    month: "Month 11–12",
    title: "Outcomes Review & Process Refinement",
    description: "Review protocol adherence rates, patient no-show patterns, and time-to-results metrics. Refine scheduling cadences based on real outcomes data from your panel.",
  },
]

const kpis = [
  {
    metric: "43%",
    target: "Reduction in Missed Follow-Ups",
    description: "Automated longitudinal scheduling ensures every Cushing syndrome patient receives their biochemical monitoring visit on schedule, regardless of panel size.",
  },
  {
    metric: "3.2×",
    target: "More Patients Managed Per NP",
    description: "AI-driven scheduling handles the coordination overhead, freeing NPs to focus clinical time on assessment and education rather than calendar management.",
  },
  {
    metric: "89%",
    target: "Test Preparation Compliance Rate",
    description: "Structured reminder sequences guide patients through complex cortisol collection and dexamethasone protocols, dramatically reducing invalid specimen rates.",
  },
  {
    metric: "55%",
    target: "Faster Referral Turnaround",
    description: "Direct scheduling links to neurosurgery and radiology cut the average referral-to-appointment gap nearly in half for newly diagnosed Cushing patients.",
  },
  {
    metric: "76%",
    target: "Administrative Time Reclaimed",
    description: "NPs and their MAs spend significantly less time on phone calls and scheduling logistics, reinvesting that time in direct patient care and documentation.",
  },
  {
    metric: "94%",
    target: "Surveillance Protocol Adherence",
    description: "Long-horizon scheduling automation keeps patients in remission on their annual imaging and lab schedules without requiring manual re-booking each cycle.",
  },
]

const testimonial = {
  quote:
    "Cushing syndrome patients have some of the most complex follow-up schedules I manage. Momenties lets me set up the entire post-op monitoring plan once and trust that every patient gets the right appointment at the right time.",
  name: "Dr. Simone Eckhardt",
  title: "NP-C, Pituitary & Adrenal Disease Program, Academic Medical Center",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Cushing Syndrome NP · Momenties"
        title="AI Scheduling Designed for Cushing Syndrome Nurse Practitioners"
        subtitle="Manage diagnostic testing timelines, post-treatment surveillance, and multidisciplinary referrals for your entire Cushing syndrome panel — without the administrative burden."
      />

      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)" }}>
            Scheduling Tools Built for Rare Endocrine Disease
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
