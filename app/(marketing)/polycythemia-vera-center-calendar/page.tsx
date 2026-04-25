import type { Metadata } from "next"
import { Stethoscope, ClipboardList, TrendingUp, Shield } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Polycythemia Vera Center — Phlebotomy & Monitoring Calendar | Momenties",
  description:
    "Dedicated scheduling for polycythemia vera centers — hematocrit-driven therapeutic phlebotomy, JAK2 V617F mutation monitoring, ruxolitinib titration visits, thrombosis risk reduction workflows, and cytoreduction cadence management.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Hematocrit-Driven Phlebotomy Scheduling",
    description:
      "Build a precise phlebotomy program anchored to ELN hematocrit targets: below 45% for men and below 42% for women. Momenties tracks each patient's rolling CBC trend, auto-queues a phlebotomy chair the moment hematocrit crosses threshold, and balances daily chair utilization so that no session runs overcapacity. Iron-deficiency follow-up labs after repeated phlebotomies are scheduled automatically, keeping the full PV cohort on cadence without manual coordination.",
  },
  {
    icon: ClipboardList,
    title: "JAK2 V617F & Molecular Monitoring",
    description:
      "Coordinate serial JAK2 V617F allele burden testing, CALR and MPL mutation reflex panels, and high-molecular-risk add-ons (ASXL1, TET2, DNMT3A) for patients being evaluated for advanced-phase risk. Momenties schedules send-out labs at protocol-defined intervals, routes results to the treating hematologist, and surfaces patients whose rising allele burden warrants cytoreduction escalation before clinical symptoms emerge.",
  },
  {
    icon: TrendingUp,
    title: "Ruxolitinib Titration & Cytoreduction Management",
    description:
      "Run a structured ruxolitinib monitoring program for hydroxyurea-resistant and hydroxyurea-intolerant PV: weekly CBCs during dose titration, platelet-floor alerts below 100k, hemoglobin drop flags greater than 2 g/dL, and four-week, twelve-week, and twenty-four-week hematocrit response reassessments. Hydroxyurea and interferon titration visits are anchored to the same scheduling engine, giving the center a unified cytoreduction calendar across all lines of therapy.",
  },
  {
    icon: Shield,
    title: "Thrombosis Risk Reduction Workflows",
    description:
      "Coordinate the full thrombosis prevention program: cardiovascular risk factor visits, aspirin therapy review, anticoagulation management for prior thrombotic events, and spleen size surveillance. Momenties tracks each patient's IPSET-Thrombosis score, schedules risk-stratification reassessments annually or after clinical events, and flags patients approaching high-risk criteria for accelerated cytoreduction — closing the gap between lab trends and clinical intervention before a thromboembolic event occurs.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Center Onboarding & Cohort Stratification",
    description:
      "Import the PV roster, classify patients by treatment status (phlebotomy-only vs. cytoreductive therapy), apply IPSET-Thrombosis risk scores, confirm JAK2 V617F allele burden baselines, and configure hematocrit targets per patient.",
  },
  {
    month: "Month 3–4",
    title: "Phlebotomy Cadence & Chair Utilization Live",
    description:
      "Launch hematocrit-trigger phlebotomy queues, balance chair utilization across morning and afternoon sessions, and activate iron-deficiency lab scheduling for patients receiving three or more phlebotomies per quarter.",
  },
  {
    month: "Month 5–6",
    title: "Cytoreduction Monitoring Protocol",
    description:
      "Roll out hydroxyurea CBC monitoring every two weeks during titration and monthly at maintenance, stand up ruxolitinib titration-phase weekly CBCs, and configure platelet-floor and hemoglobin-drop alerts for the clinical team.",
  },
  {
    month: "Month 7–8",
    title: "Molecular Surveillance Integration",
    description:
      "Schedule serial JAK2 V617F allele burden checks, route high-molecular-risk panel send-outs for newly risk-stratified patients, and integrate lab turnaround expectations into the treating hematologist's results calendar.",
  },
  {
    month: "Month 9–10",
    title: "Thrombosis Risk & Response Review",
    description:
      "Activate annual IPSET-Thrombosis reassessments, schedule cardiovascular risk factor visits, coordinate anticoagulation reviews for high-risk patients, and document ruxolitinib hematocrit response at week 24 per ELN criteria.",
  },
  {
    month: "Month 11–12",
    title: "Annual Outcomes Audit & Recalibration",
    description:
      "Review hematocrit-target adherence rates, phlebotomy session volume, cytoreduction dose intensity, allele burden trends, and thrombotic event incidence. Recalibrate cohort risk scores and present annual PV program performance to center leadership.",
  },
]

const kpis = [
  {
    metric: "Hematocrit Target Adherence",
    target: "≥ 90% of visits",
    description:
      "Percentage of PV patients maintaining hematocrit below 45% (men) and 42% (women) across rolling 90-day monitoring windows.",
  },
  {
    metric: "Phlebotomy On-Time Rate",
    target: "≥ 95%",
    description:
      "Therapeutic phlebotomy sessions completed within seven days of the hematocrit-trigger threshold being crossed on CBC review.",
  },
  {
    metric: "JAK2 V617F Allele Burden Monitoring",
    target: "100% of cytoreduction patients",
    description:
      "Proportion of patients on ruxolitinib or interferon with serial allele burden testing completed at protocol-defined intervals.",
  },
  {
    metric: "Ruxolitinib Hematocrit Response",
    target: "≥ 60% at Week 24",
    description:
      "Proportion of ruxolitinib-treated PV patients achieving and maintaining hematocrit control without phlebotomy at week 24.",
  },
  {
    metric: "IPSET-Thrombosis Reassessment",
    target: "100% annually",
    description:
      "Percentage of the PV cohort with a documented thrombosis risk re-stratification completed within the calendar year.",
  },
  {
    metric: "Thrombotic Event Rate Reduction",
    target: "≥ 30% vs. baseline",
    description:
      "Year-over-year reduction in thromboembolic events per 100 patient-years following implementation of the coordinated PV monitoring program.",
  },
]

const testimonial = {
  quote:
    "Before Momenties, our PV program ran on paper phlebotomy logs and scattered CBC reminders. Now every patient has a hematocrit-driven schedule, ruxolitinib titration visits land on time, and our allele burden labs get routed automatically. Our hematocrit target adherence went from 71% to over 93% in the first six months.",
  name: "Dr. Priya S.",
  title: "Director, Polycythemia Vera & MPN Program",
}

export default function PolycythemiaVeraCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Polycythemia Vera Center Calendar"
        title="A Coordinated Scheduling System Built for PV Centers"
        subtitle="Hematocrit-driven phlebotomy queues, JAK2 V617F allele burden tracking, ruxolitinib titration monitoring, and thrombosis risk workflows — unified on one calendar across every patient in your PV cohort."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Four Clinical Systems That Drive a High-Performing PV Center
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <p.icon size={28} color="#c5a35c" style={{ marginBottom: 16 }} />
                <h3 style={{ color: "#f0ece3", fontSize: "1.05rem", fontWeight: 600, marginBottom: 12 }}>
                  {p.title}
                </h3>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.92rem", lineHeight: 1.65 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* 12-Month Timeline */}
      <Reveal>
        <section style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Your 12-Month PV Center Roadmap
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {timeline.map((t, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  gap: 24,
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                  alignItems: "start",
                }}
              >
                <span style={{ color: "#c5a35c", fontWeight: 600, fontSize: "0.9rem", paddingTop: 2 }}>
                  {t.month}
                </span>
                <div>
                  <p style={{ color: "#f0ece3", fontWeight: 600, marginBottom: 6 }}>{t.title}</p>
                  <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    {t.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* KPIs */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            KPIs That Define PV Program Quality
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {kpis.map((k) => (
              <div
                key={k.metric}
                style={{
                  background: "#0a0a0d",
                  border: "1px solid rgba(197,163,92,0.2)",
                  borderRadius: 12,
                  padding: 24,
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 700, fontSize: "1.1rem", marginBottom: 4 }}>
                  {k.target}
                </p>
                <p style={{ color: "#f0ece3", fontWeight: 600, marginBottom: 8 }}>{k.metric}</p>
                <p style={{ color: "rgba(240,236,227,0.6)", fontSize: "0.88rem", lineHeight: 1.6 }}>
                  {k.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 0" }}>
          <blockquote
            style={{
              background: "#131318",
              border: "1px solid rgba(197,163,92,0.25)",
              borderRadius: 16,
              padding: "36px 40px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "rgba(240,236,227,0.85)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                fontStyle: "italic",
                marginBottom: 24,
              }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p style={{ color: "#c5a35c", fontWeight: 600 }}>{testimonial.name}</p>
            <p style={{ color: "rgba(240,236,227,0.5)", fontSize: "0.88rem" }}>{testimonial.title}</p>
          </blockquote>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
