import type { Metadata } from "next"
import { ClipboardList, Stethoscope, Shield, Bell, UserCheck, Heart, Target, Calendar } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pheochromocytoma & Paraganglioma Nurse Practitioners | Momenties",
  description: "Purpose-built scheduling automation for pheochromocytoma and paraganglioma NPs. Streamline catecholamine biochemical surveillance, alpha-blockade protocol reminders, surgical and interventional follow-up, genetic counseling coordination, and SDH mutation surveillance across your complex rare tumor panel.",
}

const pillars = [
  {
    icon: ClipboardList,
    title: "Catecholamine Biochemical Surveillance",
    description: "Automate serial plasma metanephrine and 24-hour urine catecholamine draw schedules tailored to each patient's tumor burden, treatment phase, and recurrence risk — ensuring no surveillance window is missed.",
  },
  {
    icon: Shield,
    title: "Alpha-Blockade Protocol Reminders",
    description: "Schedule pre-surgical phenoxybenzamine or doxazosin titration check-ins, blood pressure monitoring windows, and cardiology clearance timelines so every patient arrives at the OR safely prepared.",
  },
  {
    icon: Stethoscope,
    title: "Surgical & Interventional Follow-Up",
    description: "Coordinate post-adrenalectomy and paraganglioma resection follow-up cadences including early biochemical cure confirmation labs, wound checks, and 3-month, 6-month, and annual imaging reassessments.",
  },
  {
    icon: UserCheck,
    title: "Genetic Counseling Coordination",
    description: "Schedule genetic counseling referrals and cascade testing outreach for patients with identified SDH, VHL, RET, or NF1 pathogenic variants, ensuring timely family member risk stratification.",
  },
  {
    icon: Target,
    title: "SDH Mutation Surveillance Programs",
    description: "Build structured annual and biennial surveillance calendars for SDHB, SDHC, and SDHD mutation carriers including whole-body MRI, biochemical panels, and ophthalmology or audiology adjuncts as indicated.",
  },
  {
    icon: Heart,
    title: "Hypertensive Crisis Risk Monitoring",
    description: "Flag patients approaching high-risk procedural or physiologic stress windows and prompt preemptive alpha-blockade review, anesthesia coordination, and ICU alert notifications before planned interventions.",
  },
  {
    icon: Bell,
    title: "Recurrence Detection Alerts",
    description: "Configure rolling surveillance reminders for patients with malignant or metastatic disease, integrating functional imaging schedules, biochemical trending reviews, and multidisciplinary oncology case presentations.",
  },
  {
    icon: Calendar,
    title: "Rare Tumor Registry Compliance",
    description: "Stay current with PASS score documentation, MAPP Network registry submissions, and NCDB case completeness requirements with proactive compliance calendar alerts that surface deadlines before they lapse.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Panel Stratification & Import",
    description: "Segment existing pheo/PGL panel by hereditary syndrome, tumor location, and malignant risk. Import current surveillance due dates and alpha-blockade taper schedules into Momenties.",
  },
  {
    month: "Month 3–4",
    title: "Biochemical Surveillance Automation",
    description: "Activate automated plasma metanephrine and urine catecholamine draw reminders calibrated to each patient's recurrence risk tier, with escalation prompts for rising values.",
  },
  {
    month: "Month 5–6",
    title: "Pre-Surgical Protocol Workflows",
    description: "Deploy alpha-blockade titration check-in sequences, cardiology clearance trackers, and OR scheduling coordination templates for all patients approaching adrenalectomy.",
  },
  {
    month: "Month 7–8",
    title: "Genetic Counseling & Cascade Testing",
    description: "Launch structured referral workflows and cascade testing reminder sequences for index patients with pathogenic germline variants, linking genetic counseling appointments to family risk calendars.",
  },
  {
    month: "Month 9–10",
    title: "SDH Mutation Surveillance Rollout",
    description: "Build individualized annual surveillance calendars for SDHB, SDHC, and SDHD carriers with whole-body MRI, biochemical, and subspecialty review reminders integrated across care teams.",
  },
  {
    month: "Month 11–12",
    title: "Outcomes Review & Program Refinement",
    description: "Measure surveillance adherence rates, pre-surgical protocol completion rates, and genetic counseling uptake. Refine automation rules and expand templates based on first-year outcomes data.",
  },
]

const kpis = [
  {
    metric: "96%",
    target: "Biochemical Surveillance Adherence",
    description: "Automated draw reminders tied to individual risk tiers eliminate missed catecholamine surveillance windows, supporting early recurrence detection.",
  },
  {
    metric: "89%",
    target: "Pre-Surgical Alpha-Blockade Completion",
    description: "Structured titration check-in workflows ensure patients complete adequate alpha-blockade before adrenalectomy, reducing intraoperative hemodynamic complications.",
  },
  {
    metric: "82%",
    target: "Genetic Counseling Referral Uptake",
    description: "Proactive scheduling prompts at diagnosis and at variant identification nearly double genetic counseling completion rates compared to ad hoc referral workflows.",
  },
  {
    metric: "74%",
    target: "Reduction in SDH Surveillance Gaps",
    description: "Automated annual and biennial surveillance calendars for mutation carriers cut missed imaging and biochemical review windows substantially across the hereditary cohort.",
  },
  {
    metric: "3.4×",
    target: "NP Panel Capacity Increase",
    description: "By eliminating manual scheduling burden, NPs using Momenties manage significantly larger pheo/PGL panels without compromising surveillance protocol fidelity.",
  },
  {
    metric: "91%",
    target: "Registry Submission Completeness",
    description: "Proactive compliance deadline alerts drive near-complete NCDB and MAPP Network registry submissions, strengthening rare tumor outcomes research infrastructure.",
  },
]

const testimonial = {
  quote: "Managing SDH mutation carriers alongside active pheo patients used to require three separate tracking systems. Momenties unified everything — biochemical surveillance, surgical prep, genetic counseling, and registry compliance — into one calendar I can actually trust.",
  name: "Dr. Mariana Vásquez",
  title: "Advanced Practice Provider, Rare Endocrine Tumor Program — Academic Medical Center",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="PHEOCHROMOCYTOMA & PARAGANGLIOMA · Momenties"
        title="Scheduling Automation for Pheo/PGL Nurse Practitioners"
        subtitle="AI-powered calendar tools designed for the complexity of pheochromocytoma and paraganglioma care — automating catecholamine surveillance cycles, alpha-blockade protocols, surgical follow-up, genetic counseling, and SDH mutation surveillance across your entire rare tumor panel."
      />
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2 style={{ color: "#f0ece3", fontSize: 28, fontWeight: 700, marginBottom: 40, fontFamily: "var(--font-display)" }}>
            Built for the Full Pheo/PGL Care Continuum
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
