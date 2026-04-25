import type { Metadata } from "next"
import {
  Stethoscope,
  Activity,
  Workflow,
  Shield,
  Calendar,
  Clock,
  Target,
  CheckCircle,
  TrendingUp,
  ClipboardList,
  Users2,
  Bell,
} from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title:
    "Pompe Disease Center — ERT Infusion, Pulmonary & Motor Surveillance Calendar | Momentis",
  description:
    "Comprehensive scheduling for Pompe disease centers — alglucosidase alfa and avalglucosidase alfa biweekly infusion cycles, CRIM status testing, immune tolerance induction, FVC sitting/supine pulmonary surveillance, BiPAP titration, 6-minute walk and Walton-Gardner motor assessments, anti-alglucosidase antibody monitoring, and newborn screening GAA confirmation.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "ERT Infusion Scheduling & CRIM Assessment",
    description:
      "Coordinate biweekly enzyme replacement therapy across product lines — alglucosidase alfa (Lumizyme/Myozyme) 20 mg/kg IV every 2 weeks vs. avalglucosidase alfa (Nexviazyme) 20 mg/kg IV q2w vs. cipaglucosidase alfa + miglustat (ATB200/AT2221, Pombiliti + Opfolda) 20 mg/kg IV q2w with oral miglustat 1 hour pre-infusion. Schedule CRIM (cross-reactive immunologic material) status testing on residual GAA enzyme activity and GAA gene sequencing before the first infusion in infantile-onset disease, with immune tolerance induction (ITI) protocols (rituximab + methotrexate + IVIG) initiated for CRIM-negative patients prior to ERT exposure to suppress high-titer anti-drug antibody formation.",
  },
  {
    icon: Activity,
    title: "Pulmonary Function & Ventilator Management",
    description:
      "Sequence quarterly pulmonary surveillance for late-onset Pompe — FVC sitting and supine (postural drop >10% indicates diaphragmatic weakness), MIP/MEP, peak cough flow, and overnight oximetry to detect nocturnal hypoventilation. Schedule polysomnography and BiPAP titration for symptomatic hypoventilation or daytime hypercapnia, with quarterly ventilator settings audit (IPAP/EPAP, backup rate) and tracheostomy tube changes. For infantile-onset disease, calendar weekly ventilator weaning attempts, monthly chest physiotherapy reviews, and annual sleep studies to track ERT-driven respiratory recovery.",
  },
  {
    icon: Workflow,
    title: "Motor Function & Physical Therapy Coordination",
    description:
      "Plan biannual motor assessments — 6-minute walk test (6MWT) distance, Walton-Gardner functional scale, GSGC (Gait, Stairs, Gowers, Chair), Quick Motor Function Test, and Gross Motor Function Measure (GMFM-88) for infantile-onset patients. Coordinate weekly physical therapy and occupational therapy across the disease arc — proximal muscle strengthening, postural conditioning, fall prevention, fine motor preservation. Calendar annual DEXA for osteoporosis surveillance secondary to immobility, and Q6-month swallowing evaluations (modified barium swallow) for bulbar involvement.",
  },
  {
    icon: Shield,
    title: "Immunomodulation & Antibody Monitoring",
    description:
      "Run quarterly anti-alglucosidase antibody titers (ELISA IgG, neutralizing antibody assays — inhibition of GAA enzyme uptake and activity) with stratified protocols for low (<12,800), intermediate, and high-sustained titers (HSAT, ≥51,200 sustained ≥6 months). Schedule rescue immunomodulation — rituximab 375 mg/m² weekly × 4, methotrexate 0.4 mg/kg subcutaneous, and IVIG 0.4 g/kg — when titers cross HSAT thresholds in CRIM-negative infantile-onset patients. Differentiate surveillance cadence between infantile-onset (monthly clinical exam, antibody titers q3 months) and late-onset adult (q6 month titers, annual cardiac echo, EKG screening).",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnostic Confirmation & CRIM Stratification",
    description:
      "Confirm Pompe diagnosis via dried blood spot GAA enzyme activity, fibroblast or muscle GAA assay, and GAA gene sequencing for two pathogenic variants. Calendar CRIM status determination on residual protein expression. Schedule baseline echocardiogram (LV mass index, hypertrophic cardiomyopathy assessment in infantile-onset), 12-lead EKG with PR interval, FVC sitting/supine, 6MWT, GSGC, baseline antibody titer panel, and genetic counseling.",
  },
  {
    month: "Month 3–4",
    title: "ERT Initiation & Immune Tolerance Induction",
    description:
      "Begin alglucosidase alfa, avalglucosidase alfa, or cipaglucosidase alfa + miglustat per phenotype and prescriber preference. Pre-medicate with diphenhydramine, acetaminophen, and methylprednisolone for first 4 infusions. For CRIM-negative infantile-onset, run ITI protocol — rituximab + methotrexate + IVIG concurrent with ERT initiation. Document infusion-associated reactions (urticaria, flushing, bronchospasm, tachycardia) and rate adjustments. Calendar nursing escalation triggers and IV access reviews.",
  },
  {
    month: "Month 5–6",
    title: "First Pulmonary & Motor Reassessment",
    description:
      "Repeat FVC sitting/supine, MIP/MEP, peak cough flow at month 6 post-ERT initiation. Repeat 6MWT, Walton-Gardner, GSGC. Run overnight oximetry; if nocturnal hypoventilation present, schedule polysomnography and BiPAP titration. Document antibody titer at month 6, classify low/intermediate/HSAT. Audit physical therapy adherence and adjust home program. Confirm ICD-10 documentation for ongoing ERT prior authorization renewal.",
  },
  {
    month: "Month 7–8",
    title: "Cardiac Surveillance & Cardiomyopathy Tracking",
    description:
      "For infantile-onset patients, schedule echocardiogram with LV mass index Z-score and ejection fraction to track hypertrophic cardiomyopathy regression on ERT. For late-onset adults, screen for arrhythmias, conduction delays, and Wolff-Parkinson-White via 12-lead EKG and Holter. Run repeat antibody titers and adjust immunomodulation if titers escalate. Continue biweekly ERT cycle planning with infusion suite capacity audit.",
  },
  {
    month: "Month 9–10",
    title: "Functional Reassessment & Antibody Reclassification",
    description:
      "Complete second 6MWT, Walton-Gardner, and GSGC at 9–10 months on ERT. Reclassify antibody status (low/intermediate/HSAT/sustained intermediate). For HSAT patients, escalate to rescue immunomodulation and reassess ERT response trajectory. Run repeat FVC sitting/supine, document postural drop %. Schedule swallowing evaluation if dysphagia symptoms emerge. Audit BiPAP adherence (compliance ≥4 h/night) for nocturnal ventilation cohort.",
  },
  {
    month: "Month 11–12",
    title: "Annual Comprehensive Review & Trial Eligibility",
    description:
      "Compile annual outcome review — FVC trajectory, 6MWT distance change, motor scale change, antibody titer history, infusion reaction log, hospitalizations, and survival metric for infantile-onset cohort. Screen for AAV gene therapy trial eligibility (e.g., AT845, SPK-3006), next-generation ERT trials, and substrate reduction therapy studies. Re-consent annually for registries (Pompe Registry, ICGNMD). Plan year-2 ERT continuation, immunomodulation strategy, and pulmonary/motor surveillance cadence.",
  },
]

const kpis = [
  {
    metric: "ERT Adherence",
    target: "≥95%",
    description:
      "On-time biweekly alglucosidase alfa, avalglucosidase alfa, or cipaglucosidase alfa + miglustat infusion completion across the active cohort.",
  },
  {
    metric: "FVC Stability",
    target: "≤2% / yr decline",
    description:
      "Annual FVC sitting decline rate in late-onset Pompe patients on ERT, benchmarked against natural history of 1–4.6% per year.",
  },
  {
    metric: "6MWT Improvement",
    target: "≥30 m gain",
    description:
      "Median 6-minute walk test distance change at month 12 in ambulatory late-onset patients on ERT.",
  },
  {
    metric: "HSAT Rate",
    target: "<5%",
    description:
      "Proportion of CRIM-negative infantile-onset patients developing high-sustained antibody titers despite ITI protocol.",
  },
  {
    metric: "BiPAP Adherence",
    target: "≥4 h/night",
    description:
      "Mean nocturnal noninvasive ventilation usage among patients with documented nocturnal hypoventilation.",
  },
  {
    metric: "Cardiac LVMI",
    target: "Normal Z-score",
    description:
      "Proportion of infantile-onset patients achieving normalization of LV mass index Z-score within 12 months of ERT.",
  },
]

const testimonial = {
  quote:
    "Pompe centers carry an exhausting orchestration burden — biweekly ERT, CRIM stratification, ITI protocols, FVC sitting and supine, BiPAP titration, motor scales, and quarterly antibody titers. Momentis turned a fragmented spreadsheet into a coordinated calendar. Our late-onset cohort now sees fewer missed assessments, and our infantile-onset CRIM-negative patients start ITI on time, every time.",
  name: "Dr. M. Kroos",
  title: "Pompe Disease Program Director, Neuromuscular Center",
}

export default function PompeDiseaseCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Pompe Disease Center Calendar"
        title="Pompe Disease Center — ERT Infusion, Pulmonary & Motor Surveillance Calendar"
        subtitle="Comprehensive scheduling for Pompe disease centers — alglucosidase alfa and avalglucosidase alfa infusion cycles, pulmonary function testing, motor function assessments, immunomodulation protocols, and newborn screening follow-up programs."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem,3vw,2.2rem)",
              fontFamily: "Playfair Display, serif",
              marginBottom: 48,
              color: "#f0ece3",
            }}
          >
            Built for the Full Pompe Disease Surveillance Lifecycle
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 28,
            }}
          >
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "#131318",
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <Icon size={28} color="#c5a35c" style={{ marginBottom: 14 }} />
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    marginBottom: 10,
                    color: "#f0ece3",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "rgba(240,236,227,0.65)",
                    lineHeight: 1.65,
                  }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Timeline */}
      <Reveal>
        <section style={{ background: "#0a0a0d", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(1.6rem,3vw,2.2rem)",
                fontFamily: "Playfair Display, serif",
                marginBottom: 12,
                color: "#f0ece3",
              }}
            >
              The 12-Month Pompe Disease Center Surveillance Arc
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Every ERT infusion, CRIM stratification step, pulmonary test, motor scale, and antibody titer — sequenced bimonthly across the year.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((item) => (
                <div
                  key={item.month}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "200px 1fr",
                    gap: 24,
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "#131318",
                    borderRadius: 14,
                    padding: "24px 28px",
                    alignItems: "start",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: "#c5a35c",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        marginBottom: 4,
                      }}
                    >
                      {item.month}
                    </div>
                    <div
                      style={{
                        color: "#f0ece3",
                        fontWeight: 600,
                        fontSize: "0.97rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.title}
                    </div>
                  </div>
                  <p
                    style={{
                      color: "rgba(240,236,227,0.65)",
                      fontSize: "0.9rem",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
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
            <h2
              style={{
                textAlign: "center",
                fontSize: "clamp(1.6rem,3vw,2.2rem)",
                fontFamily: "Playfair Display, serif",
                marginBottom: 48,
                color: "#f0ece3",
              }}
            >
              The 6 KPIs That Define a High-Performing Pompe Disease Center
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                gap: 20,
              }}
            >
              {kpis.map((kpi) => (
                <div
                  key={kpi.metric}
                  style={{
                    border: "1px solid rgba(197,163,92,0.2)",
                    background: "#0a0a0d",
                    borderRadius: 14,
                    padding: "28px 22px",
                  }}
                >
                  <div
                    style={{
                      color: "#c5a35c",
                      fontWeight: 700,
                      fontSize: "0.78rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 8,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(1.4rem,2.5vw,1.9rem)",
                      fontWeight: 700,
                      color: "#f0ece3",
                      fontFamily: "Playfair Display, serif",
                      marginBottom: 10,
                    }}
                  >
                    {kpi.target}
                  </div>
                  <div
                    style={{
                      fontSize: "0.86rem",
                      color: "rgba(240,236,227,0.65)",
                      lineHeight: 1.55,
                    }}
                  >
                    {kpi.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ padding: "40px 24px 0" }}>
          <blockquote
            style={{
              maxWidth: 820,
              margin: "0 auto",
              border: "1px solid rgba(255,255,255,0.07)",
              background: "#131318",
              borderRadius: 16,
              padding: "40px 36px",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1rem,2vw,1.2rem)",
                color: "#f0ece3",
                lineHeight: 1.7,
                fontStyle: "italic",
                marginBottom: 24,
              }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer>
              <div style={{ color: "#c5a35c", fontWeight: 700, fontSize: "0.95rem" }}>
                {testimonial.name}
              </div>
              <div
                style={{
                  color: "rgba(240,236,227,0.65)",
                  fontSize: "0.88rem",
                  marginTop: 4,
                }}
              >
                {testimonial.title}
              </div>
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
