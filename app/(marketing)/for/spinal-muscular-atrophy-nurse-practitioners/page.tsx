import type { Metadata } from "next"
import { UserCheck, ClipboardList, Heart, Users2 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "SMA Nurse Practitioners — Scheduling for Life-Changing Neuromuscular Disease Care | Momenties",
  description:
    "Built for NPs coordinating SMA care — from nusinersen intrathecal injection prep and gene therapy infusion monitoring to motor milestone tracking, respiratory management, and family education.",
}

const pillars = [
  {
    icon: UserCheck,
    title: "Intrathecal Injection & Gene Therapy Coordination",
    description:
      "Schedule LP procedure pre-authorizations, sedation team coordination, fluoroscopy or ultrasound suite reservation, post-procedure neurologic checks for every nusinersen dose (Days 1, 14, 28, 63 loading; then Q4-month maintenance), and orchestrate the full onasemnogene abeparvovec gene therapy day — including pre-treatment prednisolone 1 mg/kg/day starting one day before infusion, anti-AAV9 antibody titer review, weight-based dosing verification, weekly LFTs, AST/ALT, total bilirubin, and platelet counts for at least 3 months post-infusion, troponin-I monitoring, and structured corticosteroid taper.",
  },
  {
    icon: ClipboardList,
    title: "Motor Assessment & Milestone Documentation",
    description:
      "Administer and document CHOP INTEND scoring at every visit for SMA Type 1 infants, HFMSE and RULM at scheduled intervals for sitters and ambulant patients, WHO motor milestone checklists for presymptomatic newborn-screen patients, video-recorded assessments for serial comparison, 6-minute walk tests for ambulant Type 3 patients, and longitudinal trend reports that drive shared treatment decisions and family conversations about therapy response.",
  },
  {
    icon: Heart,
    title: "Respiratory & Nutrition Monitoring",
    description:
      "Track overnight pulse oximetry downloads with interpretation, FVC and peak cough flow trends, BiPAP and home ventilator adherence reports, mechanical insufflation-exsufflation training compliance, video fluoroscopic swallow study (VFSS) scheduling at any feeding fatigue or aspiration concern, weight-for-length and BMI percentiles, micronutrient labs, gastrostomy site care education, and coordination with pulmonology, GI, and dietitian colleagues across every visit cycle.",
  },
  {
    icon: Users2,
    title: "Family Education & Care Coordination",
    description:
      "Connect families to Cure SMA, the SMA Foundation, and the Muscular Dystrophy Association for psychosocial and financial support; coordinate multidisciplinary team meetings (neurology, pulmonology, GI, PT/OT, social work, palliative care); deliver structured risdiplam adherence counseling with daily dosing diaries; lead newborn-screen-positive family intake within 72 hours; and coordinate pediatric-to-adult transition meetings beginning at age 14 with adult neuromuscular handoff documentation.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Newborn Screen / New Diagnosis Intake",
    description:
      "Lead within-72-hour family intake for every positive SMA newborn screen, confirm SMN1 deletion and SMN2 copy number, complete anti-AAV9 antibody titer for gene therapy candidacy, schedule multidisciplinary intake clinic, support shared DMT decision-making (nusinersen vs. onasemnogene abeparvovec vs. risdiplam), and prepare insurance pre-authorization with supporting clinical documentation.",
  },
  {
    month: "Month 3–4",
    title: "DMT Initiation & Monitoring Setup",
    description:
      "Coordinate first nusinersen LP — sedation pre-auth, fluoroscopy booking, post-LP recovery — across the loading schedule (Days 1, 14, 28, 63); or run the onasemnogene abeparvovec infusion day — pre-infusion prednisolone 1 mg/kg starting 24 hours prior, weekly LFT/platelet draws scheduled for 12 weeks, troponin-I, and structured taper; or initiate risdiplam with weight-based oral dose, daily adherence calendar, and 8-week early-response check-in.",
  },
  {
    month: "Month 5–6",
    title: "Maintenance Cadence & First Reassessment",
    description:
      "Lock in nusinersen Q4-month maintenance calendar with 14-day flexibility windows, complete first post-loading CHOP INTEND or HFMSE/RULM with video documentation, repeat overnight oximetry and FVC/peak cough flow as appropriate, baseline VFSS for any feeding concern, and consolidate the multidisciplinary care plan with PT/OT goals.",
  },
  {
    month: "Month 7–8",
    title: "Respiratory & Feeding Optimization",
    description:
      "Lead BiPAP and cough-assist family education sessions, coordinate polysomnography for any sleep-disordered-breathing flag, schedule VFSS reassessment for any swallow change, complete nutrition labs (prealbumin, vitamin D, iron studies), and coordinate gastrostomy tube placement when oral intake becomes unsafe — anchoring the family through every transition.",
  },
  {
    month: "Month 9–10",
    title: "Mid-Year Functional Audit",
    description:
      "Repeat full motor function battery (CHOP INTEND, HFMSE, RULM, 6MWT as applicable), reassess therapy response and adherence, audit risdiplam refill calendar and home dosing diaries, review orthopedic and DXA surveillance plans, and prepare data for the upcoming annual multidisciplinary review.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review, Cure SMA Resources & Transition Planning",
    description:
      "Lead annual care plan reassessment, document DMT response and motor milestone trajectory, refresh family Cure SMA and MDA resource referrals, coordinate adult neuromuscular and pulmonology handoff for patients age 14+, finalize next year's nusinersen and clinic calendar, and submit data to the Cure SMA Clinical Data Registry.",
  },
]

const kpis = [
  {
    metric: "100%",
    target: "Newborn Screen Intake Within 72 Hours",
    description:
      "Every positive newborn screen contacted, counseled, and scheduled into multidisciplinary intake clinic within 72 hours — the workflow most predictive of presymptomatic treatment success.",
  },
  {
    metric: "≥95%",
    target: "Nusinersen Doses On-Time (±14 Days)",
    description:
      "Every loading and maintenance intrathecal injection delivered within the ±14-day window, with sedation, fluoroscopy, and post-procedure monitoring fully coordinated by the NP.",
  },
  {
    metric: "100%",
    target: "Gene Therapy Steroid Protocol Adherence",
    description:
      "Pre-onasemnogene prednisolone started 24 hours pre-infusion, weekly LFTs and platelet counts charted for 3 months, and corticosteroid taper completed without gaps in monitoring.",
  },
  {
    metric: "≥90%",
    target: "Risdiplam Adherence (Daily Diary)",
    description:
      "Daily-dosing risdiplam tracked through patient/caregiver diaries with structured NP adherence counseling — sustained ≥90% adherence across rolling 90-day windows.",
  },
  {
    metric: "≥85%",
    target: "Annual VFSS or Swallow Reassessment Scheduled",
    description:
      "Every patient with bulbar involvement or feeding concern receives VFSS or speech-language pathology reassessment annually, with NP-led scheduling and follow-up.",
  },
  {
    metric: "100%",
    target: "Cure SMA / Family Resource Referral",
    description:
      "Every newly diagnosed family receives a documented Cure SMA, SMA Foundation, and MDA resource referral plus a contact for psychosocial and financial support.",
  },
]

const testimonial = {
  quote:
    "As an SMA NP, my day is LP pre-authorization, sedation coordination, post-injection neuro checks, gene therapy steroid protocols, weekly LFT draws, oximetry downloads, VFSS scheduling, daily risdiplam adherence calls, and connecting families to Cure SMA — for dozens of children at once. Momenties pulled every recurring task, every guideline interval, and every multidisciplinary touchpoint into a single calendar I actually trust. Nothing falls through anymore.",
  name: "Angela T., CPNP-AC",
  title: "Neuromuscular NP, Children's Hospital SMA Clinic",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="SMA Nurse Practitioners"
        title="SMA Nurse Practitioners — Scheduling for Life-Changing Neuromuscular Disease Care"
        subtitle="Built for NPs coordinating SMA care — from nusinersen intrathecal injection prep and gene therapy infusion monitoring to motor milestone tracking, respiratory management, and family education."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(1.6rem,3vw,2.2rem)", fontFamily: "Playfair Display, serif", marginBottom: 48, color: "#f0ece3" }}>
            Built for the Full SMA NP Practice
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
              The SMA NP Year — Month by Month
            </h2>
            <p style={{ textAlign: "center", color: "rgba(240,236,227,0.65)", marginBottom: 56, fontSize: "0.97rem" }}>
              From newborn-screen intake and DMT initiation to maintenance cadence, respiratory optimization, and adult transition — sequenced across 12 months.
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
              The 6 KPIs That Define SMA NP Excellence
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
