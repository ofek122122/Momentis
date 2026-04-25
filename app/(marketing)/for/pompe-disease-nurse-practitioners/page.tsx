import type { Metadata } from "next"
import {
  UserCheck,
  Stethoscope,
  Activity,
  Users2,
  ClipboardList,
  Bell,
  Heart,
  BookOpen,
  Shield,
  Calendar,
  CheckCircle,
  FileText,
} from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title:
    "Pompe Disease NPs — Scheduling for Infantile and Late-Onset Pompe Management | Momentis",
  description:
    "Built for nurse practitioners coordinating Pompe disease care — biweekly ERT pre-medication and infusion reaction management, anti-drug antibody monitoring, FVC sitting/supine pulmonary tracking, BiPAP titration, PT/OT functional assessments, dysphagia evaluation, newborn screening GAA confirmation, and gene therapy trial eligibility screening.",
}

const pillars = [
  {
    icon: UserCheck,
    title: "ERT Coordination & Infusion Reaction Management",
    description:
      "Calendar pre-medication protocols (diphenhydramine 1 mg/kg, acetaminophen 15 mg/kg, methylprednisolone for first 4 infusions and high-titer patients) ahead of biweekly alglucosidase alfa, avalglucosidase alfa, or cipaglucosidase alfa + miglustat. Track infusion-associated reactions — urticaria, flushing, bronchospasm, tachycardia, hypotension — with rate-reduction algorithms and emergency escalation contacts. Coordinate IV access (port maintenance, peripheral rotation), home infusion vendor handoffs, and prior-authorization renewal windows so no patient skips a biweekly dose.",
  },
  {
    icon: Activity,
    title: "Pulmonary Assessment & Ventilator Monitoring",
    description:
      "Coordinate pulmonology referrals for FVC sitting and supine, MIP/MEP, peak cough flow, and overnight oximetry on a quarterly cadence. Schedule respiratory therapy referrals for BiPAP titration when nocturnal hypoventilation, daytime hypercapnia, or postural drop >10% emerges. Track BiPAP adherence (target ≥4 h/night), mask fit follow-ups, and quarterly ventilator settings reviews. Calendar chest physiotherapy and cough assist (MI-E) education for patients with weak cough flow.",
  },
  {
    icon: Users2,
    title: "Functional & Motor Assessment Coordination",
    description:
      "Schedule PT/OT functional reassessments every 6 months — 6-minute walk test, Walton-Gardner, GSGC, GMFM-88 for infantile-onset patients — with documentation of fall history, assistive device transitions, and home modification needs. Coordinate speech-language pathology for dysphagia evaluation (modified barium swallow, FEES) when bulbar symptoms or aspiration risk emerge. Calendar annual DEXA for osteoporosis surveillance, occupational therapy for fine motor preservation, and orthotic fittings.",
  },
  {
    icon: BookOpen,
    title: "Family Education & Newborn Screening Follow-up",
    description:
      "Run structured family education visits — disease trajectory, ERT expectations, infusion reaction red flags, BiPAP adherence, emergency action plans — and document in the chart. For newborn screening referrals, coordinate confirmatory GAA enzyme activity testing on dried blood spot, GAA gene sequencing, CRIM status determination, and urgent cardiology and neuromuscular consults. Maintain ICD-10 documentation (E74.02 for Pompe / glycogen storage disease type II) for enzyme replacement prior authorization. Screen the active panel for AAV gene therapy trial eligibility (e.g., AT845, SPK-3006) and substrate reduction therapy studies.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Newborn Screening & Diagnostic Confirmation",
    description:
      "Receive newborn screening referral or symptomatic patient intake. Coordinate confirmatory dried blood spot GAA enzyme activity, GAA gene sequencing for biallelic pathogenic variants, and CRIM status testing. Schedule urgent pediatric cardiology echocardiogram for infantile-onset suspicion, baseline 12-lead EKG, FVC for late-onset adults, and genetic counseling. Document ICD-10 E74.02 for prior authorization workup.",
  },
  {
    month: "Month 3–4",
    title: "ERT Initiation & Pre-Medication Setup",
    description:
      "Coordinate first ERT infusion in clinic with full pre-medication (diphenhydramine, acetaminophen, methylprednisolone) and crash cart readiness. Educate caregivers on infusion reaction signs and home action plan. For CRIM-negative infantile-onset patients, coordinate concurrent ITI protocol (rituximab + methotrexate + IVIG) with the immunology team. Schedule biweekly infusion appointments and confirm home infusion vendor activation.",
  },
  {
    month: "Month 5–6",
    title: "First Multidisciplinary Reassessment",
    description:
      "Coordinate 6-month pulmonology follow-up (FVC sitting/supine, MIP/MEP, overnight oximetry), PT/OT 6MWT and Walton-Gardner reassessment, and antibody titer draw. Refer to respiratory therapy for BiPAP titration if nocturnal hypoventilation present. Refer to speech-language pathology for swallowing evaluation if dysphagia symptoms. Document infusion reaction log and adjust pre-medications.",
  },
  {
    month: "Month 7–8",
    title: "Cardiac & Antibody Surveillance",
    description:
      "Coordinate echocardiogram for infantile-onset patients to track LV mass index Z-score regression on ERT. Coordinate Holter or 12-lead EKG for late-onset adults to screen for arrhythmia or conduction delay. Repeat antibody titers and route to immunology for HSAT escalation if needed. Audit PT/OT home program adherence and update home modifications.",
  },
  {
    month: "Month 9–10",
    title: "Functional Reassessment & Trial Screening",
    description:
      "Coordinate second functional reassessment (6MWT, Walton-Gardner, GSGC). Audit BiPAP adherence (≥4 h/night) and mask fit. Refer to dietitian for nutrition and weight management. Begin AAV gene therapy trial eligibility screening — anti-AAV neutralizing antibody titers, vector serotype matching, hepatic and cardiac eligibility criteria — for patients meeting trial entry.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review & Authorization Renewal",
    description:
      "Compile annual outcome summary — ERT adherence rate, FVC trajectory, 6MWT change, antibody status, infusion reactions, hospitalizations, BiPAP adherence. Renew enzyme replacement prior authorization with updated ICD-10 documentation, recent labs, and clinical justification. Re-consent for patient registries (Pompe Registry). Plan year-2 surveillance cadence and family education refresh visits.",
  },
]

const kpis = [
  {
    metric: "Infusion Adherence",
    target: "≥95%",
    description:
      "On-time biweekly ERT infusion completion across the active NP panel, including home infusion handoffs.",
  },
  {
    metric: "Pre-Med Compliance",
    target: "100%",
    description:
      "Documented pre-medication (diphenhydramine, acetaminophen, methylprednisolone where indicated) ahead of every ERT infusion.",
  },
  {
    metric: "BiPAP Adherence",
    target: "≥4 h/night",
    description:
      "Mean nocturnal noninvasive ventilation usage across the cohort with documented hypoventilation.",
  },
  {
    metric: "PT/OT Cadence",
    target: "Q6 months",
    description:
      "Proportion of patients with on-time 6-month PT/OT functional reassessment (6MWT, Walton-Gardner, GSGC).",
  },
  {
    metric: "Antibody Monitoring",
    target: "Quarterly",
    description:
      "Proportion of CRIM-negative infantile-onset patients with quarterly anti-alglucosidase antibody titers documented.",
  },
  {
    metric: "PA Renewal On-Time",
    target: "100%",
    description:
      "Enzyme replacement prior authorization renewals submitted before expiration to prevent ERT gaps.",
  },
]

const testimonial = {
  quote:
    "As a Pompe NP I juggle pre-medication checklists, biweekly infusions, antibody titers, BiPAP follow-ups, swallow studies, PT/OT reassessments, and prior authorization renewals — across infants and adults with very different surveillance cadences. Momentis lets me see the entire panel at a glance and never miss a window. Newborn screening confirmations are tracked from day one, and gene therapy trial eligibility screening finally has a home.",
  name: "Linda P., CPNP-AC",
  title: "Neuromuscular NP, Children's Hospital Pompe Clinic",
}

export default function PompeDiseaseNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Pompe Disease Nurse Practitioners"
        title="Pompe Disease NPs — Scheduling for Infantile and Late-Onset Pompe Management"
        subtitle="Built for NPs coordinating Pompe disease care — from biweekly ERT infusions and antibody monitoring to pulmonary function tracking, BiPAP titration, and physical therapy coordination."
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
            Built for the Day-to-Day of a Pompe Disease Nurse Practitioner
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
              The 12-Month Pompe NP Coordination Cycle
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              From newborn screening confirmation through annual prior authorization renewal — every NP touchpoint sequenced bimonthly.
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
              The 6 KPIs Every Pompe NP Should Track
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
