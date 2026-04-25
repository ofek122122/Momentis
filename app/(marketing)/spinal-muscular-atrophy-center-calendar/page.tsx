import type { Metadata } from "next"
import { Stethoscope, Activity, Heart, ClipboardList, Calendar, Bell, BarChart3, UserCheck, Workflow, Target, Award, Shield } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Spinal Muscular Atrophy Center — Treatment, Motor & Respiratory Calendar | Momenties",
  description:
    "Systematic scheduling for SMA centers — nusinersen intrathecal injections, onasemnogene abeparvovec gene therapy coordination, risdiplam dosing, motor function assessments, respiratory surveillance, and newborn screening follow-up programs.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Disease-Modifying Therapy Scheduling",
    description:
      "Coordinate every nusinersen (Spinraza) intrathecal injection — loading doses on Days 1, 14, 28, and 63, then maintenance every 4 months for life — alongside onasemnogene abeparvovec-xioi (Zolgensma) one-time IV infusion gene therapy with pre-treatment prednisolone 1 mg/kg/day starting one day prior, daily oral risdiplam (Evrysdi) weight-based dosing with adherence tracking, anti-AAV9 antibody titer screening before gene therapy, weekly LFTs and platelet counts in the 3 months post-onasemnogene infusion, troponin-I monitoring, and overlap protocol decisions when transitioning between disease-modifying therapies.",
  },
  {
    icon: Activity,
    title: "Motor Function & Milestone Assessment",
    description:
      "Schedule serial CHOP INTEND scoring for SMA Type 1 infants, Hammersmith Functional Motor Scale Expanded (HFMSE) for sitters and walkers, Revised Upper Limb Module (RULM) for older patients with limited ambulation, 6-minute walk test and timed rise-from-floor for ambulant patients, World Health Organization motor milestone tracking for presymptomatic and symptomatic infants, video-recorded standardized assessment intervals at every nusinersen dose and every 6 months on risdiplam or post-gene therapy, and physical/occupational therapy reassessment at every milestone change.",
  },
  {
    icon: Heart,
    title: "Respiratory & Swallowing Surveillance",
    description:
      "Track forced vital capacity (FVC), peak cough flow, sniff nasal inspiratory pressure, overnight pulse oximetry downloads, transcutaneous CO2 monitoring, and polysomnography intervals; schedule BiPAP and home ventilator titration visits, mechanical insufflation-exsufflation (cough assist) training, video fluoroscopic swallow studies (VFSS) at any sign of feeding fatigue or weight plateau, nutritional assessment with dietitian, and gastrostomy tube placement coordination when oral intake becomes unsafe — keeping pulmonology, GI, and feeding teams aligned across every visit.",
  },
  {
    icon: ClipboardList,
    title: "Newborn Screening & Gene Therapy Coordination",
    description:
      "Manage the urgent post-positive newborn screen workflow — confirmatory SMN1 deletion testing, SMN2 copy number determination, presymptomatic treatment initiation within the critical first weeks of life, multidisciplinary intake (neurology, genetics, pulmonology, feeding, PT/OT, social work), insurance pre-authorization for onasemnogene abeparvovec or nusinersen, anti-AAV9 antibody screening, and structured pediatric-to-adult transition planning at age 16–18 with handoff to adult neuromuscular and pulmonology teams.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnosis Confirmation & DMT Selection",
    description:
      "Confirm SMN1 homozygous deletion or compound heterozygous mutation, document SMN2 copy number (1–4+), assemble multidisciplinary team intake, complete anti-AAV9 antibody titer screening for gene therapy candidacy, finalize disease-modifying therapy selection (nusinersen vs. onasemnogene abeparvovec vs. risdiplam) with shared family decision, and submit insurance pre-authorization with supporting genetic and clinical documentation.",
  },
  {
    month: "Month 3–4",
    title: "Loading Dose & Gene Therapy Pre-Treatment",
    description:
      "Execute nusinersen loading schedule (Days 1, 14, 28, 63) with sedation, fluoroscopic LP, and post-procedure neurologic monitoring; or coordinate onasemnogene abeparvovec infusion day with prednisolone 1 mg/kg starting 24 hours prior, weekly LFTs and platelet counts, troponin-I, and 8+ week steroid taper; or initiate risdiplam at weight-based dose with daily adherence calendar and 8-week early efficacy assessment.",
  },
  {
    month: "Month 5–6",
    title: "First Maintenance Cycle & Motor Reassessment",
    description:
      "Begin nusinersen maintenance every 4 months, complete first post-loading CHOP INTEND or HFMSE/RULM scoring with video documentation, repeat baseline FVC and peak cough flow for ambulant or older patients, complete VFSS for any feeding concern, schedule first quarterly multidisciplinary clinic, and confirm all PT/OT goals are documented in the shared care plan.",
  },
  {
    month: "Month 7–8",
    title: "Respiratory & Nutritional Optimization",
    description:
      "Conduct overnight oximetry or polysomnography, titrate non-invasive ventilation (BiPAP) settings, train families on mechanical insufflation-exsufflation (cough assist), reassess swallowing safety with VFSS for any decline, complete nutrition labs (prealbumin, vitamin D, micronutrients), and coordinate gastrostomy tube placement if oral intake is no longer safe or sufficient.",
  },
  {
    month: "Month 9–10",
    title: "Mid-Year Motor & Functional Audit",
    description:
      "Perform comprehensive motor function reassessment (CHOP INTEND, HFMSE, RULM, 6MWT as applicable), recalculate care plan goals, audit DMT adherence, repeat anti-AAV9 antibody titers if patient is being considered for gene therapy add-on, review orthopedic surveillance for scoliosis and hip subluxation, and schedule DXA scan for bone health monitoring.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review & Transition Planning",
    description:
      "Compile annual SMA program report — DMT response rates, motor milestone gains, respiratory stability, nutritional adequacy, hospitalization frequency, and quality-of-life metrics; initiate or continue pediatric-to-adult transition planning for patients age 14+ with adult neuromuscular handoff; finalize next year's nusinersen schedule, risdiplam refill calendar, and multidisciplinary clinic dates; submit data to the Cure SMA Clinical Data Registry.",
  },
]

const kpis = [
  {
    metric: "100%",
    target: "Newborn Screen → DMT Within 6 Weeks",
    description:
      "Every positive newborn screen confirmed and disease-modifying therapy initiated within 6 weeks of life — the window most strongly associated with normal motor development.",
  },
  {
    metric: "≥95%",
    target: "Nusinersen Maintenance On-Schedule",
    description:
      "Every Q4-month maintenance dose delivered within a ±14-day window — the interval validated by CHERISH and ENDEAR pivotal trials for sustained motor benefit.",
  },
  {
    metric: "≥90%",
    target: "Annual CHOP INTEND / HFMSE Documentation",
    description:
      "Standardized motor function scoring captured at minimum annually for every active SMA patient, with serial scores reviewed for therapeutic decision-making.",
  },
  {
    metric: "100%",
    target: "Gene Therapy Steroid Protocol Adherence",
    description:
      "Pre-onasemnogene prednisolone started 24 hours pre-infusion, weekly LFTs and platelet counts for 3 months, and structured taper completed without protocol deviation.",
  },
  {
    metric: "≥85%",
    target: "Annual VFSS or Swallow Reassessment",
    description:
      "Every patient with bulbar involvement or feeding concern receives video fluoroscopic swallow study or speech-language pathology reassessment annually.",
  },
  {
    metric: "100%",
    target: "Pediatric-to-Adult Transition by Age 18",
    description:
      "Structured handoff to adult neuromuscular and pulmonology teams documented and completed for every patient before their 18th birthday.",
  },
]

const testimonial = {
  quote:
    "Coordinating nusinersen loading and maintenance, gene therapy steroid protocols, daily risdiplam adherence, CHOP INTEND scoring, FVC and peak cough flow tracking, BiPAP titration, VFSS scheduling, and newborn screening follow-up across neurology, pulmonology, GI, and PT/OT for every patient — across pediatric and adult clinics — used to live in a dozen spreadsheets. Momenties gave us one calendar with one source of truth, and our presymptomatic newborn-screen-to-treatment interval is now under 4 weeks.",
  name: "Dr. B. Darras",
  title: "SMA Program Director, Neuromuscular Center",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="SMA Center Calendar"
        title="Spinal Muscular Atrophy Center — Treatment, Motor & Respiratory Calendar"
        subtitle="Systematic scheduling for SMA centers — nusinersen intrathecal injections, onasemnogene abeparvovec gene therapy coordination, risdiplam dosing, motor function assessments, respiratory surveillance, and newborn screening follow-up programs."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontFamily: "Playfair Display, serif", marginBottom: 48, color: "#f0ece3" }}>
            Built for the Full SMA Center Lifecycle
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 28 }}>
            {pillars.map(({ icon: Icon, title, description }) => (
              <div key={title} style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 28 }}>
                <Icon size={28} color="#c5a35c" style={{ marginBottom: 14 }} />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 10, color: "#f0ece3" }}>{title}</h3>
                <p style={{ fontSize: "0.92rem", color: "rgba(240,236,227,0.65)", lineHeight: 1.65 }}>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* 12-Month Timeline */}
      <Reveal>
        <section style={{ background: "#0a0a0d", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontFamily: "Playfair Display, serif", marginBottom: 12, color: "#f0ece3" }}>
              The SMA Center Calendar — Month by Month
            </h2>
            <p style={{ textAlign: "center", color: "rgba(240,236,227,0.65)", marginBottom: 56, fontSize: "0.97rem" }}>
              From newborn screen confirmation to gene therapy infusion, motor reassessment, respiratory surveillance, and adult transition — sequenced across 12 months.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((item) => (
                <div key={item.month} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 24, background: "#131318", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "24px 28px", alignItems: "start" }}>
                  <div>
                    <div style={{ color: "#c5a35c", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{item.month}</div>
                    <div style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.97rem", lineHeight: 1.4 }}>{item.title}</div>
                  </div>
                  <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontFamily: "Playfair Display, serif", marginBottom: 48, color: "#f0ece3" }}>
              The 6 KPIs That Define an SMA Center
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
              {kpis.map((kpi) => (
                <div key={kpi.target} style={{ background: "#0a0a0d", border: "1px solid rgba(197,163,92,0.2)", borderRadius: 14, padding: "28px 24px" }}>
                  <div style={{ fontSize: "clamp(1.6rem,2.6vw,2rem)", fontWeight: 700, color: "#c5a35c", fontFamily: "Playfair Display, serif", marginBottom: 8 }}>{kpi.metric}</div>
                  <div style={{ fontSize: "0.95rem", color: "#f0ece3", fontWeight: 600, marginBottom: 8 }}>{kpi.target}</div>
                  <div style={{ fontSize: "0.85rem", color: "rgba(240,236,227,0.65)", lineHeight: 1.55 }}>{kpi.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ background: "#0e0e12", padding: "72px 24px" }}>
          <blockquote style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", color: "#c5a35c", marginBottom: 16, lineHeight: 1 }}>&ldquo;</div>
            <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: "#f0ece3", lineHeight: 1.7, fontStyle: "italic", marginBottom: 28 }}>
              {testimonial.quote}
            </p>
            <footer>
              <div style={{ fontWeight: 700, color: "#c5a35c", fontSize: "0.95rem" }}>{testimonial.name}</div>
              <div style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.88rem", marginTop: 4 }}>{testimonial.title}</div>
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
