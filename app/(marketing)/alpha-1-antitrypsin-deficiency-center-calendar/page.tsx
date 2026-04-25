import type { Metadata } from "next"
import { Stethoscope, Activity, Heart, Users2 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Alpha-1 Antitrypsin Deficiency Center Calendar | Momenties",
  description:
    "Systematic scheduling for AATD centers — weekly IV augmentation therapy, pulmonary function surveillance, liver disease monitoring, genetic counseling, and lung transplant evaluation for ZZ phenotype patients.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Augmentation Therapy Scheduling",
    description:
      "Coordinate weekly Q7-day IV alpha-1 proteinase inhibitor (human) infusions — Prolastin-C, Zemaira, Glassia, and Aralast NP — across hospital infusion centers, ambulatory clinics, and home infusion vendors. Track serum AAT trough level targets above 11 μM (the protective threshold derived from the AAT Registry), pre-infusion vital signs and IgA screening, weight-based dosing at 60 mg/kg, infusion reaction surveillance, and prior-authorization renewal cycles for every Pi*ZZ, Pi*Z-null, and Pi*null-null patient on chronic replacement.",
  },
  {
    icon: Activity,
    title: "Pulmonary Function & CT Surveillance",
    description:
      "Schedule semi-annual full PFTs with FEV1, FVC, FEV1/FVC ratio, lung volumes, and DLCO every 6 months to detect accelerated decline characteristic of AATD basilar panacinar emphysema. Layer in annual high-resolution chest CT with quantitative emphysema density analysis (15th percentile lung density) — the most sensitive endpoint in RAPID and RAPID-OLE — plus six-minute walk testing, BODE index updates, and pulmonary rehabilitation referral cycles for symptomatic Pi*ZZ patients.",
  },
  {
    icon: Heart,
    title: "Liver Disease Monitoring",
    description:
      "Track Pi*ZZ liver disease surveillance — semi-annual LFTs (ALT, AST, GGT, alkaline phosphatase, bilirubin, INR, albumin, platelets), annual abdominal ultrasound with AFP for HCC screening in cirrhotic patients, FibroScan transient elastography every 12–24 months for fibrosis staging, and selective liver biopsy with PAS-diastase staining to confirm the characteristic intrahepatocyte globule accumulation. Coordinate hepatology co-management, antifibrotic clinical trial enrollment, and orthotopic liver transplant evaluation for decompensated cirrhosis.",
  },
  {
    icon: Users2,
    title: "Genetic Counseling & Cascade Testing",
    description:
      "Operationalize Pi typing (ZZ, SZ, MZ, MS, MM, null variants) and serum AAT level confirmation for every newly diagnosed proband, then sequence cascade testing for first-degree relatives — siblings, children, and parents — through certified genetic counselors. Track informed consent, kit shipment, results disclosure visits, reproductive counseling for Pi*ZZ couples, and gene therapy clinical trial eligibility screening (AAV-based and mRNA-based investigational programs).",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnostic Confirmation & Phenotyping",
    description:
      "Confirm AATD diagnosis with quantitative serum AAT level, Pi typing by isoelectric focusing, and AAT gene sequencing for null and rare variants. Document baseline FEV1, DLCO, HRCT emphysema score, LFTs, FibroScan, and 6MWT. Initiate genetic counseling, family pedigree, and cascade testing kit dispatch for all first-degree relatives. Prioritize smoking and vaping cessation counseling — the single most modifiable determinant of pulmonary outcome in Pi*ZZ.",
  },
  {
    month: "Month 3–4",
    title: "Augmentation Therapy Initiation",
    description:
      "Secure prior authorization, IgA screening, and venous access planning for Prolastin-C, Zemaira, Glassia, or Aralast NP at 60 mg/kg IV weekly. Schedule first three supervised infusions in clinic, then transition stable patients to home infusion. Capture serum AAT trough at week 4 and week 12 to confirm sustained levels above 11 μM. Provide vaccinations — annual influenza, PCV20, RSV, hepatitis A, hepatitis B, COVID-19 — and document COPD inhaler optimization (LAMA/LABA ± ICS).",
  },
  {
    month: "Month 5–6",
    title: "Pulmonary Reassessment & Rehabilitation",
    description:
      "Repeat full PFTs with DLCO at month 6 to confirm stability. Enroll symptomatic patients in 8–12 week pulmonary rehabilitation. Reassess BODE index, mMRC dyspnea, and CAT score. Refine exacerbation action plan with rescue corticosteroid and antibiotic course. Review home infusion adherence and infusion reaction logs. Confirm cascade Pi typing results for siblings and adult children, and offer genetic counseling for newly identified Pi*ZZ relatives.",
  },
  {
    month: "Month 7–8",
    title: "Liver Surveillance Cycle",
    description:
      "Complete semi-annual LFTs, abdominal ultrasound with AFP for HCC screening in cirrhotic Pi*ZZ patients, and FibroScan elastography. Refer indeterminate or progressive fibrosis to hepatology for liver biopsy with PAS-diastase staining. Screen for varices in compensated cirrhosis per Baveno VII. Discuss antifibrotic trial enrollment (siRNA-based AAT silencing programs) for selected Pi*ZZ patients with significant fibrosis.",
  },
  {
    month: "Month 9–10",
    title: "Annual HRCT & Transplant Evaluation",
    description:
      "Schedule annual HRCT chest with quantitative emphysema density (15th percentile lung density) — the validated structural endpoint for disease progression. Trend FEV1 decline, DLCO, and 6MWT. Refer patients with FEV1 below 25% predicted, severe gas exchange impairment, or pulmonary hypertension to lung transplant evaluation, recognizing that bilateral lung transplant outperforms single lung in AATD per ISHLT registry data.",
  },
  {
    month: "Month 11–12",
    title: "Year-End Review & Registry Submission",
    description:
      "Complete the annual AATD chart audit — augmentation adherence, infusion reaction events, vaccination status, smoking and vaping status, FEV1 and DLCO trajectory, HRCT density progression, liver surveillance compliance, and cascade testing yield. Submit data to the Alpha-1 Foundation Research Registry and DNA & Tissue Bank where applicable. Finalize next-year prior authorizations, and refresh gene therapy clinical trial eligibility for all Pi*ZZ candidates.",
  },
]

const kpis = [
  {
    metric: "Augmentation Adherence",
    target: ">95%",
    description:
      "Percentage of weekly Q7-day Prolastin-C, Zemaira, Glassia, or Aralast NP infusions delivered on schedule across the active Pi*ZZ population.",
  },
  {
    metric: "Serum AAT Trough",
    target: ">11 μM",
    description:
      "Patients on chronic IV augmentation maintaining the protective serum trough threshold derived from the AAT Registry epidemiologic data.",
  },
  {
    metric: "Annual HRCT Compliance",
    target: ">90%",
    description:
      "Pi*ZZ patients completing annual high-resolution CT with quantitative 15th percentile lung density emphysema scoring on schedule.",
  },
  {
    metric: "Liver Surveillance",
    target: "100%",
    description:
      "Pi*ZZ patients with documented semi-annual LFTs, annual ultrasound with AFP for cirrhotic patients, and FibroScan every 12–24 months.",
  },
  {
    metric: "Cascade Testing Yield",
    target: ">80%",
    description:
      "First-degree relatives of probands who have completed Pi typing and serum AAT confirmation through the center's genetic counseling pathway.",
  },
  {
    metric: "Smoking & Vaping Cessation",
    target: ">95%",
    description:
      "Active Pi*ZZ patients documented as never-smokers or sustained quitters at 12 months — the strongest modifiable predictor of pulmonary outcome.",
  },
]

const testimonial = {
  quote:
    "AATD is the rare disease where missing a single weekly augmentation infusion, a semi-annual LFT, an annual HRCT, or a cascade Pi typing kit can change a family's trajectory for decades. Momenties gives our center a single source of truth for every Pi*ZZ patient — augmentation cycles, PFT and DLCO surveillance, FibroScan and liver ultrasound intervals, lung transplant evaluation milestones, and cascade testing for siblings and children. We finally schedule the way the disease actually behaves.",
  name: "Dr. R. Stoller",
  title: "Alpha-1 Foundation Center Director",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Alpha-1 Antitrypsin Deficiency Center Calendar"
        title="Alpha-1 Antitrypsin Deficiency Center — Augmentation, Pulmonary & Liver Calendar"
        subtitle="Systematic scheduling for AATD centers — weekly IV augmentation therapy, pulmonary function surveillance, liver disease monitoring, genetic counseling, and lung transplant evaluation for ZZ phenotype patients."
      />

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
            Four Pillars of AATD Center Operations
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 28,
            }}
          >
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

      <Reveal>
        <section style={{ background: "#0a0a0d", padding: "80px 24px" }}>
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
              The 12-Month AATD Center Calendar
            </h2>
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
              Six KPIs Every AATD Center Should Track
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
                    background: "#0a0a0d",
                    border: "1px solid rgba(197,163,92,0.2)",
                    borderRadius: 14,
                    padding: "28px 24px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.78rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "rgba(240,236,227,0.65)",
                      marginBottom: 8,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(1.4rem,2.5vw,1.9rem)",
                      fontWeight: 700,
                      color: "#c5a35c",
                      fontFamily: "Playfair Display, serif",
                      marginBottom: 10,
                    }}
                  >
                    {kpi.target}
                  </div>
                  <div
                    style={{
                      fontSize: "0.88rem",
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

      <Reveal>
        <section style={{ background: "#0e0e12", padding: "72px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <blockquote
              style={{
                background: "#131318",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "40px 36px",
                margin: 0,
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  color: "#c5a35c",
                  marginBottom: 12,
                  lineHeight: 1,
                }}
              >
                &ldquo;
              </div>
              <p
                style={{
                  fontSize: "clamp(1rem,2vw,1.15rem)",
                  color: "#f0ece3",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  marginBottom: 24,
                }}
              >
                {testimonial.quote}
              </p>
              <div style={{ fontWeight: 700, color: "#c5a35c", fontSize: "0.95rem" }}>
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
            </blockquote>
          </div>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
