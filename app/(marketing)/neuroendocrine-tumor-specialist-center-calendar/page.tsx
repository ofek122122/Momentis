import type { Metadata } from "next"
import { Calendar, Stethoscope, BarChart3, ClipboardList, Shield, Users2, TrendingUp, Workflow } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Neuroendocrine Tumor Specialist Center Scheduling Calendar | Momenties",
  description: "Streamline NET center scheduling with AI-powered calendar automation. Coordinate somatostatin analog dosing intervals, Ga-68 DOTATATE PET cycles, chromogranin A surveillance, PRRT treatment planning, and multidisciplinary tumor board sessions without friction.",
}

const pillars = [
  {
    icon: Calendar,
    title: "Somatostatin Analog Dosing Intervals",
    description: "Automate long-acting octreotide and lanreotide injection scheduling with precise 28-day cycles, dose-adjustment reminders, and tolerability follow-up windows built directly into the care team calendar.",
  },
  {
    icon: Stethoscope,
    title: "Ga-68 DOTATATE PET Coordination",
    description: "Schedule somatostatin receptor scintigraphy cycles aligned with treatment response milestones, referral lead times, and scanner availability — ensuring no imaging window is missed across your NET panel.",
  },
  {
    icon: BarChart3,
    title: "Chromogranin A Surveillance",
    description: "Track serial CgA and 24-hour urine 5-HIAA draws on rolling schedules tied to each patient's tumor grade and functional status, with automatic escalation prompts when biomarker trends warrant early review.",
  },
  {
    icon: Workflow,
    title: "PRRT Treatment Planning",
    description: "Coordinate Lu-177 DOTATATE infusion sequences, pre-treatment renal protection protocols, and post-cycle hematology checks across radiation oncology, nephrology, and nuclear medicine on one unified timeline.",
  },
  {
    icon: ClipboardList,
    title: "Multidisciplinary Tumor Board",
    description: "Generate recurring NET tumor board agendas with case submission deadlines, pathology review slots, and cross-specialty attendance confirmations — reducing preparation time and last-minute cancellations.",
  },
  {
    icon: Shield,
    title: "Registry & Quality Compliance",
    description: "Stay ahead of NANETS annual registry submissions, NCDB case completeness deadlines, and REMS training renewals with proactive calendar alerts that surface compliance gaps before they become audit findings.",
  },
  {
    icon: TrendingUp,
    title: "Carcinoid Crisis Prevention",
    description: "Flag surgical and interventional procedures that require octreotide prophylaxis preparation, notifying anesthesia and nursing teams automatically so every procedural encounter includes carcinoid crisis protocols.",
  },
  {
    icon: Users2,
    title: "Patient Education Touchpoints",
    description: "Schedule structured education sessions covering dietary triggers, symptom diaries, and self-injection technique at key care milestones, improving patient adherence and reducing unplanned urgent visits.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Panel Audit & Baseline Mapping",
    description: "Import existing NET patient panel, classify by tumor grade (G1/G2/G3) and functional status, and map current SSA injection dates and imaging due dates into Momenties.",
  },
  {
    month: "Month 3–4",
    title: "SSA & Biomarker Automation",
    description: "Activate automated 28-day SSA dosing reminders and rolling CgA/5-HIAA draw schedules, with care team notifications routed to the appropriate nurse coordinator or endocrinologist.",
  },
  {
    month: "Month 5–6",
    title: "Imaging & PRRT Integration",
    description: "Connect Ga-68 DOTATATE PET scheduling workflows with nuclear medicine and configure PRRT cycle sequencing templates including renal function and hematology check-in milestones.",
  },
  {
    month: "Month 7–8",
    title: "Tumor Board Workflow Launch",
    description: "Deploy recurring multidisciplinary tumor board calendar structure with automated case submission reminders, cross-specialty RSVP tracking, and post-board action item assignments.",
  },
  {
    month: "Month 9–10",
    title: "Registry & Compliance Dashboards",
    description: "Activate NANETS registry deadline tracking, NCDB case completeness alerts, and REMS renewal calendars — giving compliance coordinators a single view of all open obligations.",
  },
  {
    month: "Month 11–12",
    title: "Optimization & Outcomes Review",
    description: "Analyze scheduling adherence rates, SSA gap occurrences, and missed imaging windows. Refine automation rules based on outcomes data and prepare program for year-two expansion.",
  },
]

const kpis = [
  {
    metric: "94%",
    target: "SSA On-Time Injection Rate",
    description: "Centers using automated dosing interval reminders achieve near-complete adherence to 28-day SSA cycles, reducing symptomatic breakthrough episodes.",
  },
  {
    metric: "87%",
    target: "Ga-68 PET Scheduling Adherence",
    description: "Structured imaging calendars eliminate ad hoc scheduling delays, keeping response-assessment scans within the protocol-specified window for active PRRT patients.",
  },
  {
    metric: "78%",
    target: "Reduction in Biomarker Draw Gaps",
    description: "Automated CgA and 5-HIAA reminders cut the frequency of overdue surveillance labs, providing earlier detection of disease progression or hormonal crisis risk.",
  },
  {
    metric: "3.2×",
    target: "Tumor Board Case Throughput",
    description: "Structured preparation workflows enable NET MDT meetings to review significantly more cases per session while maintaining documentation quality standards.",
  },
  {
    metric: "91%",
    target: "PRRT Cycle Completion Rate",
    description: "Coordinated multi-specialty timelines reduce PRRT cycle delays attributable to scheduling misalignment between nuclear medicine, nephrology, and hematology.",
  },
  {
    metric: "68%",
    target: "Reduction in Registry Deadline Misses",
    description: "Proactive compliance calendar alerts surface NANETS and NCDB submission windows early, dramatically reducing late or incomplete registry entries.",
  },
]

const testimonial = {
  quote: "Before Momenties, coordinating Ga-68 DOTATATE PET cycles with our PRRT schedule and tumor board was a manual puzzle. Now the entire NET care pathway runs on a single automated calendar — our team spends time on patients, not spreadsheets.",
  name: "Dr. Sandra Okonkwo",
  title: "Director, Neuroendocrine Tumor Program — Regional Cancer Center",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="NEUROENDOCRINE TUMOR CARE · Momenties"
        title="NET Specialist Center Scheduling Calendar"
        subtitle="AI-powered scheduling automation purpose-built for neuroendocrine tumor programs — aligning SSA dosing cycles, Ga-68 DOTATATE PET intervals, PRRT coordination, chromogranin A surveillance, and multidisciplinary tumor boards on one frictionless calendar."
      />
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)" }}>
            Built for Every Dimension of NET Center Operations
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
      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
