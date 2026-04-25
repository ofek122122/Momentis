import type { Metadata } from "next"
import { ClipboardList, FlaskConical, Heart, Users2 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Mucopolysaccharidosis Center — ERT, Monitoring & Multidisciplinary Care Calendar | Momenties",
  description:
    "Comprehensive scheduling for MPS centers — laronidase/idursulfase/elosulfase ERT cycles, HSCT coordination for MPS-I, urinary GAG monitoring, multidisciplinary organ surveillance, and newborn screening follow-up across all MPS subtypes.",
}

const pillars = [
  {
    icon: FlaskConical,
    title: "ERT Infusion Scheduling by MPS Subtype",
    description:
      "Subtype-specific enzyme replacement therapy infusion calendars for laronidase (Aldurazyme) for MPS I, idursulfase (Elaprase) for MPS II Hunter syndrome, elosulfase alfa (Vimizim) for MPS IVA Morquio A, galsulfase (Naglazyme) for MPS VI Maroteaux-Lamy, and heparan-N-sulfatase (cerliponase-class) intrathecal investigational therapy for MPS IIIA Sanfilippo. Weekly IV infusions with subtype-specific dosing (laronidase 0.58 mg/kg, idursulfase 0.5 mg/kg, elosulfase alfa 2.0 mg/kg, galsulfase 1.0 mg/kg) tracked alongside infusion-reaction prophylaxis windows, vascular access port maintenance, home infusion transitions, and antibody titer surveillance for neutralizing IgG anti-drug antibodies that blunt ERT efficacy.",
  },
  {
    icon: ClipboardList,
    title: "Urinary GAG & Enzyme Monitoring",
    description:
      "Quarterly to semiannual urinary glycosaminoglycan (uGAG) quantification every 3–6 months on ERT to confirm sustained substrate clearance, with subtype-specific GAG fractionation (dermatan sulfate for MPS I/II/VI, keratan sulfate for MPS IVA, heparan sulfate for MPS II/III). Annual leukocyte enzyme activity confirmation, plasma heparan sulfate biomarker tracking for CNS-active MPS subtypes, and serial anti-drug antibody (ADA) and neutralizing antibody (NAb) titers at months 3, 6, 12 and annually thereafter — flagging titer rises that warrant immune tolerance induction or therapy modification.",
  },
  {
    icon: Heart,
    title: "Multidisciplinary Organ Surveillance",
    description:
      "Annual cardiac valve surveillance via echocardiogram for mitral/aortic regurgitation and thickening common across all MPS subtypes; annual sleep study (polysomnography) for obstructive sleep apnea driven by upper-airway GAG deposition; biennial cervical spine MRI for atlantoaxial instability and dens hypoplasia (highest risk MPS IVA); annual ophthalmology with slit-lamp for corneal clouding and optic nerve compression; annual audiogram for conductive and sensorineural hearing loss; annual joint range-of-motion goniometry; and 6-minute walk test (6MWT) every 6 months for MPS IVA and VI to track endurance response to ERT.",
  },
  {
    icon: Users2,
    title: "HSCT Coordination & Newborn Screening",
    description:
      "Hematopoietic stem cell transplant referral coordination for severe MPS I (Hurler) before age 2.5 years — donor search, HLA typing, conditioning regimen scheduling (busulfan/fludarabine), and pre-transplant ERT bridging. Newborn screening positive-result follow-up for MPS I across expanding state RUSP panels, with rapid confirmatory leukocyte enzyme assay, GAG profiling, and IDUA gene sequencing within 14 days. Long-term post-HSCT chimerism monitoring, donor enzyme activity tracking, and lifelong residual disease surveillance for skeletal and corneal manifestations not corrected by transplant.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnosis Confirmation & Subtype Stratification",
    description:
      "Confirm MPS diagnosis with leukocyte enzyme activity assay and gene sequencing (IDUA, IDS, GNS, NAGLU, GALNS, ARSB). Document subtype (MPS I attenuated/severe, MPS II, MPS IIIA-D, MPS IVA, MPS VI). Establish baseline urinary GAG, anti-drug antibody status, growth parameters, and a multidisciplinary baseline workup including echocardiogram, polysomnography, cervical spine MRI, ophthalmology, and audiogram.",
  },
  {
    month: "Month 3–4",
    title: "ERT Initiation & Infusion-Reaction Protocols",
    description:
      "Initiate weekly ERT (laronidase, idursulfase, elosulfase alfa, or galsulfase) with vascular access placement, pre-medication regimen (antihistamine, antipyretic, corticosteroid), and slow titration during first four infusions. Document infusion-reaction grade per CTCAE, transition to home infusion when stable, and finalize HSCT referral for severe MPS I patients under 2.5 years.",
  },
  {
    month: "Month 5–6",
    title: "Quarterly GAG Response & Antibody Surveillance",
    description:
      "First quarterly urinary GAG measurement to confirm substrate clearance trajectory. Draw 3-month anti-drug antibody and neutralizing antibody titers. Reassess infusion tolerance and reaction frequency, audit pre-medication step-downs, and schedule the first multidisciplinary surveillance circuit (cardiology, pulmonology, ENT, ophthalmology, orthopedics).",
  },
  {
    month: "Month 7–8",
    title: "Mid-Year Multidisciplinary Surveillance",
    description:
      "Complete echocardiogram for valvular thickening, polysomnography for sleep-disordered breathing, audiology, ophthalmology with slit-lamp, and joint range-of-motion exam. For MPS IVA and VI, perform 6-minute walk test and pulmonary function testing. Document findings against baseline and update the family on disease trajectory and ERT response.",
  },
  {
    month: "Month 9–10",
    title: "HSCT Post-Transplant Monitoring & Skeletal Imaging",
    description:
      "For post-HSCT MPS I patients, document chimerism, donor leukocyte enzyme activity, and immunosuppression taper status. Complete cervical spine MRI for atlantoaxial instability and skeletal survey for dysostosis multiplex. Coordinate orthopedic surgical planning (carpal tunnel release, hip dysplasia, spinal decompression) for any patient with progressive deformity.",
  },
  {
    month: "Month 11–12",
    title: "Annual Response Review & Care Plan Refresh",
    description:
      "Compile annual ERT response report — urinary GAG trend, antibody status, 6MWT delta, echo and PSG changes, growth velocity, and quality-of-life measures. Recalibrate dosing, infusion site, and pre-medication regimens. Refresh anesthesia/airway alerts, Emergency Information Form, and educational accommodation plans before the next annual cycle begins.",
  },
]

const kpis = [
  {
    metric: "≥80%",
    target: "uGAG Reduction on ERT",
    description:
      "Average urinary glycosaminoglycan reduction from baseline at 12 months on subtype-appropriate enzyme replacement therapy.",
  },
  {
    metric: "100%",
    target: "Annual Cardiac Echo Compliance",
    description:
      "Echocardiographic surveillance for valvular thickening and regurgitation completed annually for every MPS patient on the program roster.",
  },
  {
    metric: "≤14 Days",
    target: "Newborn Screen Follow-Up",
    description:
      "Time from positive MPS newborn screen result to confirmatory enzyme assay, GAG profile, and IDUA genotyping at the center.",
  },
  {
    metric: "<2.5 Yrs",
    target: "HSCT Window for Severe MPS I",
    description:
      "Time-to-transplant for severe Hurler phenotype patients to maximize cognitive preservation and skeletal/cardiac outcomes.",
  },
  {
    metric: "Q6 Months",
    target: "6-Minute Walk Test (MPS IVA/VI)",
    description:
      "Endurance testing cadence for elosulfase alfa and galsulfase responders to capture functional improvement on ERT.",
  },
  {
    metric: "Biennial",
    target: "Cervical Spine MRI",
    description:
      "Atlantoaxial instability and dens hypoplasia surveillance — every 24 months or sooner for any neurologic red flag.",
  },
]

const testimonial = {
  quote:
    "MPS center scheduling is a different category of complexity — weekly ERT infusions for laronidase, idursulfase, elosulfase alfa, and galsulfase, quarterly urinary GAG and antibody titers, biennial cervical spine MRIs, annual echocardiograms and polysomnograms, ophthalmology and audiogram circuits, HSCT timelines for severe MPS I before 2.5 years, and newborn screening follow-up windows that cannot slip. Momenties became the single source of truth for every subtype-specific cadence. Our program now hits ≥80% uGAG reduction on ERT and 100% annual organ surveillance compliance across the panel.",
  name: "Dr. C. Hendriksz",
  title: "MPS Disease Program Director, Metabolic Center",
}

export default function MucopolysaccharidosisCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="MPS Disease Center Calendar"
        title="Mucopolysaccharidosis Center — ERT, Monitoring & Multidisciplinary Care Calendar"
        subtitle="Comprehensive scheduling for MPS centers — laronidase/idursulfase/elosulfase ERT cycles, HSCT coordination for MPS-I, urinary GAG monitoring, multidisciplinary organ surveillance, and newborn screening follow-up across all MPS subtypes."
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
            Built for the Full MPS Center Care Lifecycle
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 28 }}>
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <Icon size={28} color="#c5a35c" style={{ marginBottom: 14 }} />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 10, color: "#f0ece3" }}>
                  {title}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "rgba(240,236,227,0.65)", lineHeight: 1.65 }}>
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
              The MPS Center 12-Month Surveillance Calendar
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Every ERT infusion cycle, GAG check, organ surveillance pass, HSCT milestone, and family-support touchpoint — sequenced across 12 months.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((item) => (
                <div
                  key={item.month}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr",
                    gap: 24,
                    background: "#131318",
                    border: "1px solid rgba(255,255,255,0.07)",
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
                    <div style={{ color: "#f0ece3", fontWeight: 600, fontSize: "0.97rem", lineHeight: 1.4 }}>
                      {item.title}
                    </div>
                  </div>
                  <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>
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
              The 6 KPIs That Define MPS Center Excellence
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 20 }}>
              {kpis.map((kpi) => (
                <div
                  key={kpi.target}
                  style={{
                    background: "#0a0a0d",
                    border: "1px solid rgba(197,163,92,0.2)",
                    borderRadius: 14,
                    padding: "28px 22px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(1.4rem,2.5vw,1.9rem)",
                      fontWeight: 700,
                      color: "#c5a35c",
                      fontFamily: "Playfair Display, serif",
                      marginBottom: 6,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <div style={{ fontSize: "0.95rem", color: "#f0ece3", fontWeight: 600, marginBottom: 8 }}>
                    {kpi.target}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "rgba(240,236,227,0.65)", lineHeight: 1.55 }}>
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
        <section style={{ background: "#0e0e12", padding: "72px 24px" }}>
          <blockquote style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", color: "#c5a35c", marginBottom: 16, lineHeight: 1 }}>&ldquo;</div>
            <p
              style={{
                fontSize: "clamp(1rem,2vw,1.2rem)",
                color: "#f0ece3",
                lineHeight: 1.7,
                fontStyle: "italic",
                marginBottom: 28,
              }}
            >
              {testimonial.quote}
            </p>
            <footer>
              <div style={{ fontWeight: 700, color: "#c5a35c", fontSize: "0.95rem" }}>{testimonial.name}</div>
              <div style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.88rem", marginTop: 4 }}>
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
