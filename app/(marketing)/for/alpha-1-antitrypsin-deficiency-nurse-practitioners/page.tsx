import type { Metadata } from "next"
import { Bell, Stethoscope, Heart, Users2 } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Alpha-1 Antitrypsin Deficiency Nurse Practitioners | Momenties",
  description:
    "Designed for NPs coordinating AATD care — from weekly augmentation infusions and AAT level monitoring to pulmonary function tracking, liver surveillance, and cascade genetic testing for families.",
}

const pillars = [
  {
    icon: Bell,
    title: "Augmentation Infusion Coordination",
    description:
      "Schedule weekly Q7-day Prolastin-C, Zemaira, Glassia, or Aralast NP infusions across home infusion vendors, ambulatory infusion centers, and hospital outpatient suites. Track 60 mg/kg weight-based dosing, IgA screening prior to first dose, pre-infusion vitals, infusion reaction surveillance (headache, dizziness, low-grade fever, urticaria, rare anaphylaxis), serum AAT trough level monitoring above 11 μM, and prior-authorization renewal cycles. Coordinate venous access — peripheral, midline, or port — and document missed-dose recovery plans for travel, illness, or supply disruption.",
  },
  {
    icon: Stethoscope,
    title: "Pulmonary Monitoring & Exacerbation Management",
    description:
      "Operationalize semi-annual full PFTs with FEV1, FVC, and DLCO; annual HRCT with quantitative emphysema density; six-minute walk testing; BODE index updates; and CAT or mMRC dyspnea documentation. Maintain a written COPD exacerbation action plan with rescue prednisone and antibiotic course, refer to pulmonary rehabilitation, optimize inhaler technique for LAMA, LABA, and ICS combinations, and ensure annual influenza, PCV20, RSV, and COVID-19 vaccinations are scheduled and documented.",
  },
  {
    icon: Heart,
    title: "Liver Surveillance & Hepatology Coordination",
    description:
      "Schedule semi-annual LFTs (ALT, AST, GGT, ALP, bilirubin, INR, albumin, platelets), annual abdominal ultrasound with AFP for HCC screening in cirrhotic Pi*ZZ patients, and FibroScan transient elastography every 12–24 months. Coordinate hepatology referrals for indeterminate or progressive fibrosis, prepare patients for liver biopsy with PAS-diastase staining when indicated, screen for varices in compensated cirrhosis, and triage candidates for orthotopic liver transplant evaluation in decompensated disease.",
  },
  {
    icon: Users2,
    title: "Family Testing & Patient Education",
    description:
      "Order cascade Pi typing kits for siblings, adult children, and parents, document informed consent, and route results back through certified genetic counselors. Deliver structured education on smoking and vaping cessation — the single most important behavioral intervention in Pi*ZZ — and connect patients to the Alpha-1 Foundation Research Registry, DNA & Tissue Bank, peer support groups, AlphaNet disease management, and gene therapy clinical trial screening (AAV-based and mRNA-based investigational programs).",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnostic Workup & Onboarding",
    description:
      "Confirm quantitative serum AAT level, Pi typing by isoelectric focusing, and AAT gene sequencing. Capture baseline FEV1, DLCO, HRCT emphysema score, LFTs, FibroScan, and 6MWT. Build the family pedigree, dispatch cascade Pi typing kits to first-degree relatives, and complete a tobacco and vaping history with structured cessation counseling. Verify pneumococcal, hepatitis A, hepatitis B, influenza, RSV, and COVID-19 vaccination status.",
  },
  {
    month: "Month 3–4",
    title: "Augmentation Therapy Start-Up",
    description:
      "Coordinate prior authorization, IgA screening, venous access, and the first three supervised augmentation infusions in clinic. Educate patient and caregiver on infusion reactions, missed-dose protocol, and home infusion logistics. Transition stable patients to weekly home infusion. Schedule the first follow-up serum AAT trough at week 4 and the second at week 12 to confirm sustained levels above 11 μM.",
  },
  {
    month: "Month 5–6",
    title: "Pulmonary Reassessment & Rehab Referral",
    description:
      "Repeat full PFTs with DLCO at month 6. Refer symptomatic patients to 8–12 weeks of pulmonary rehabilitation. Reassess BODE index and CAT score. Refresh the written exacerbation action plan and confirm patient self-management of rescue prednisone and antibiotics. Audit home infusion adherence logs and infusion reaction events. Disclose cascade Pi typing results and arrange genetic counseling for newly identified Pi*ZZ relatives.",
  },
  {
    month: "Month 7–8",
    title: "Liver Surveillance Cycle",
    description:
      "Complete semi-annual LFTs, annual ultrasound with AFP for cirrhotic patients, and FibroScan elastography. Refer indeterminate or progressive fibrosis to hepatology. Screen for varices in compensated cirrhosis per Baveno VII guidance. Discuss antifibrotic and AAT-silencing clinical trial enrollment with selected Pi*ZZ patients who have meaningful fibrosis.",
  },
  {
    month: "Month 9–10",
    title: "Annual HRCT & Transplant Triage",
    description:
      "Schedule the annual HRCT with quantitative 15th percentile lung density emphysema scoring. Trend FEV1 decline, DLCO, and 6MWT. Identify patients with FEV1 below 25% predicted, severe gas exchange impairment, or pulmonary hypertension and initiate lung transplant referral, with bilateral lung transplant prioritized over single in AATD.",
  },
  {
    month: "Month 11–12",
    title: "Year-End Review & Registry Submission",
    description:
      "Complete the annual AATD chart review — augmentation adherence, infusion reactions, vaccination status, smoking and vaping status, FEV1 and DLCO trajectory, HRCT density progression, liver surveillance compliance, and cascade testing yield. Submit data to the Alpha-1 Foundation Research Registry where applicable. Refresh prior authorizations and gene therapy clinical trial eligibility for every Pi*ZZ candidate.",
  },
]

const kpis = [
  {
    metric: "Infusion Adherence",
    target: ">95%",
    description:
      "Weekly Q7-day augmentation infusions delivered on schedule across the NP's active Pi*ZZ panel, including home infusion patients.",
  },
  {
    metric: "AAT Trough Levels",
    target: ">11 μM",
    description:
      "Patients on chronic IV augmentation maintaining the protective serum trough threshold derived from the AAT Registry data.",
  },
  {
    metric: "Smoking & Vaping Cessation",
    target: ">95%",
    description:
      "Pi*ZZ patients documented as never-smokers or sustained quitters at 12 months — the strongest modifiable predictor of lung outcome.",
  },
  {
    metric: "Vaccination Coverage",
    target: "100%",
    description:
      "Influenza, PCV20, hepatitis A, hepatitis B, RSV, and COVID-19 vaccinations current for every active AATD patient on the panel.",
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
      "First-degree relatives of probands who have completed Pi typing and serum AAT confirmation through the NP-led cascade pathway.",
  },
]

const testimonial = {
  quote:
    "AATD is a slow disease that punishes inconsistency. A skipped weekly Prolastin infusion, a missed FibroScan, an unfilled cascade Pi typing kit for a sibling — none of it shows up that day, but every gap quietly bends a patient's 20-year trajectory. Momenties lets me run my AATD panel like a true longitudinal program: every infusion, every PFT, every LFT, every cascade kit, every smoking-cessation follow-up. My patients feel held — and so do their families.",
  name: "Christine L., FNP-BC",
  title: "Pulmonary NP, Alpha-1 Antitrypsin Deficiency Clinic",
}

export default function Page() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Alpha-1 Antitrypsin Deficiency Nurse Practitioners"
        title="Alpha-1 NPs — Scheduling for a Rare Inherited Lung and Liver Disease"
        subtitle="Designed for NPs coordinating AATD care — from weekly augmentation infusions and AAT level monitoring to pulmonary function tracking, liver surveillance, and cascade genetic testing for families."
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
            Four Pillars of the AATD NP Practice
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
              The 12-Month AATD NP Calendar
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
              Six KPIs Every AATD NP Should Track
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
