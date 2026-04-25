import type { Metadata } from "next";
import {
  Heart,
  Stethoscope,
  Workflow,
  Users2,
  Calendar,
  ClipboardList,
  TrendingUp,
  Target,
  Award,
  Shield,
} from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/marketing/Reveal";
import { CTA } from "@/components/marketing/CTA";

export const metadata: Metadata = {
  title:
    "Fabry Disease Center — ERT Infusion, Monitoring & Surveillance Calendar | Momenties",
  description:
    "Systematic scheduling for Fabry disease centers — agalsidase infusion cycles (alfa/beta Q2 weeks), migalastat for amenable GLA mutations, lyso-Gb3 Q6 months, cardiac/renal/neurological surveillance, stroke prevention, and family cascade screening.",
};

const pillars = [
  {
    icon: Workflow,
    title: "ERT Infusion Scheduling",
    description:
      "Biweekly enzyme replacement therapy infusion cycles for agalsidase alfa (Replagal, 0.2 mg/kg IV Q2 weeks) and agalsidase beta (Fabrazyme, 1.0 mg/kg IV Q2 weeks); migalastat (Galafold) 123 mg PO every other day scheduling for patients with GLA mutations amenable to chaperone therapy; pre-medication protocol scheduling (acetaminophen, diphenhydramine, methylprednisolone for reaction-prone patients); home infusion eligibility review at 6 months; infusion-reaction tracking with rate adjustment documentation; and missed-dose protocol coordination to maintain steady-state plasma enzyme activity.",
  },
  {
    icon: Heart,
    title: "Cardiac & Renal Surveillance",
    description:
      "Annual echocardiogram with strain imaging for Fabry cardiomyopathy and left ventricular hypertrophy (LVH) progression; annual 24-hour Holter monitoring for conduction abnormalities, arrhythmia, and short PR interval; cardiac MRI Q2-3 years with T1 mapping (low native T1 = pathognomonic for Fabry); eGFR (CKD-EPI) and urine protein-to-creatinine ratio Q3-6 months for nephropathy progression; annual renal ultrasound for parapelvic cysts; ACEi/ARB titration scheduling for proteinuria >150 mg/day; and renal transplant evaluation at eGFR <30 mL/min/1.73m².",
  },
  {
    icon: Stethoscope,
    title: "Neurological & Stroke Monitoring",
    description:
      "Brain MRI Q2-3 years with FLAIR sequences for white matter lesions, pulvinar sign, and silent cerebrovascular disease; annual stroke risk assessment with carotid imaging for high-risk adults; transcranial Doppler for posterior circulation involvement; antiplatelet/anticoagulation protocol coordination for secondary stroke prevention; small-fiber neuropathy assessment Q6 months with QST and skin biopsy referral; pain crisis (Fabry crisis) emergency protocol scheduling; anhidrosis monitoring with sweat testing; and audiology evaluation Q1-2 years for sensorineural hearing loss progression.",
  },
  {
    icon: Users2,
    title: "Genetic Counseling & Family Screening",
    description:
      "GLA mutation typing and pathogenicity classification for every proband; cascade testing scheduling for first-degree relatives (mothers, sisters, daughters as obligate or possible carriers); newborn screening follow-up coordination for confirmed positives (lyso-Gb3 + GLA sequencing); annual female heterozygote evaluation with X-inactivation considerations and treatment-decision documentation; reproductive counseling for affected couples (PGD, prenatal testing); pediatric transition-to-adult-care milestones; and patient registry enrollment (Fabry Registry, Fabry Outcome Survey) for long-term natural history data.",
  },
];

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnostic Confirmation & Baseline Workup",
    description:
      "Confirm Fabry diagnosis with plasma α-galactosidase A enzyme activity (males) and GLA gene sequencing (males and females). Order baseline lyso-Gb3, urine Gb3, full mutation report, and pathogenicity classification. Complete baseline echocardiogram, ECG, brain MRI, eGFR, and 24-hour urine protein. Initiate genetic counseling and document classic vs. later-onset phenotype.",
  },
  {
    month: "Month 3–4",
    title: "Therapy Selection & ERT/Migalastat Initiation",
    description:
      "Review GLA mutation amenability for migalastat (HEK assay positive) vs. ERT eligibility. Initiate agalsidase alfa or beta biweekly infusion schedule with pre-medication protocol, or start migalastat 123 mg every other day. Schedule first 3 infusions in monitored unit. Establish home-infusion candidacy criteria. Begin lyso-Gb3 trend monitoring.",
  },
  {
    month: "Month 5–6",
    title: "Cardiac, Renal & Neurological Baseline Tracking",
    description:
      "Complete first 6-month lyso-Gb3 measurement to confirm biochemical response to therapy. Document baseline LVH on echo, eGFR slope, urinalysis trends, and brain MRI white-matter burden. Initiate ACEi/ARB if proteinuria >150 mg/day. Begin small-fiber neuropathy assessment and pain-management plan (carbamazepine, gabapentin trial if needed).",
  },
  {
    month: "Month 7–8",
    title: "Family Cascade Screening & Carrier Workup",
    description:
      "Schedule cascade genetic testing for all first-degree relatives. Initiate female heterozygote workup (lyso-Gb3, echocardiogram, eGFR, brain MRI when symptomatic). Document treatment-decision reasoning for each carrier. Coordinate newborn screening follow-up for any positive infants identified through state programs. Enroll family in Fabry Registry.",
  },
  {
    month: "Month 9–10",
    title: "Mid-Year Surveillance & Stroke-Risk Review",
    description:
      "Complete interval echocardiogram if baseline showed LVH or strain abnormality. Repeat eGFR and urine protein at 6-month interval. Review brain MRI plan and antiplatelet decision for adults with white-matter lesions or prior TIA. Audit infusion-reaction logs and adjust pre-medication. Reassess anhidrosis and heat-intolerance counseling before summer.",
  },
  {
    month: "Month 11–12",
    title: "Annual Comprehensive Review & Registry Submission",
    description:
      "Complete annual echo with strain, 24-hour Holter, eGFR, urine ACR, lyso-Gb3, brain MRI (if due), audiology, and ophthalmology (cornea verticillata documentation). Hold annual multidisciplinary case conference (cardiology + nephrology + neurology + genetics). Submit Fabry Registry / Fabry Outcome Survey data. Update treatment plan and family-screening status.",
  },
];

const kpis = [
  {
    metric: "≥95%",
    target: "ERT Infusion Adherence",
    description:
      "Percentage of scheduled biweekly agalsidase infusions completed on time, the primary determinant of long-term renal and cardiac stability.",
  },
  {
    metric: "Q6 mo",
    target: "Lyso-Gb3 Monitoring",
    description:
      "Plasma lyso-Gb3 measured every 6 months to confirm biochemical response and detect anti-drug antibody-related loss of efficacy.",
  },
  {
    metric: "Annual",
    target: "Echo + Holter Surveillance",
    description:
      "Yearly echocardiogram with strain plus 24-hour Holter for LVH progression, conduction disease, and arrhythmia detection.",
  },
  {
    metric: "Q3–6 mo",
    target: "eGFR + Proteinuria Tracking",
    description:
      "Renal function and urine protein-to-creatinine ratio every 3–6 months with ACEi/ARB titration for proteinuria >150 mg/day.",
  },
  {
    metric: "100%",
    target: "Family Cascade Screening",
    description:
      "All first-degree relatives offered genetic counseling and GLA testing within 6 months of proband diagnosis.",
  },
  {
    metric: "Q2–3 yr",
    target: "Brain MRI for White-Matter Lesions",
    description:
      "Surveillance brain MRI every 2–3 years (more often if symptomatic) to monitor cerebrovascular involvement and guide stroke prevention.",
  },
];

const testimonial = {
  quote:
    "Running a Fabry program means juggling biweekly agalsidase infusions for dozens of patients, migalastat amenability reviews, lyso-Gb3 trends, annual cardiac and renal surveillance, brain MRI cadence, and cascade screening for entire families — all at once. Momenties holds every deadline in one place. We have not missed a surveillance interval since adopting it, and our family-screening completion rate is the highest it has ever been.",
  name: "Dr. S. Hopkin",
  title: "Fabry Disease Program Director",
};

export default function FabryDiseaseCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Fabry Disease Center Calendar"
        title="Fabry Disease Center — ERT Infusion, Monitoring & Surveillance Calendar"
        subtitle="Systematic scheduling for Fabry disease centers — agalsidase infusion cycles, lyso-Gb3 biomarker monitoring, cardiac and renal surveillance, stroke prevention programs, and newborn screening follow-up."
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
            Four Pillars of Fabry Disease Center Scheduling
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

      {/* 12-Month Timeline */}
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
              The Fabry Center 12-Month Cadence
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              From diagnostic confirmation through annual comprehensive review — every infusion, biomarker, surveillance interval, and family-screening milestone sequenced across the year.
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
              Six KPIs That Define a High-Performing Fabry Center
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
                      marginBottom: 8,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <div
                    style={{
                      fontSize: "0.92rem",
                      color: "#f0ece3",
                      fontWeight: 600,
                      marginBottom: 8,
                    }}
                  >
                    {kpi.target}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(240,236,227,0.65)",
                      lineHeight: 1.5,
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
        <section style={{ padding: "20px 24px 0" }}>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
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
                  marginBottom: 16,
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
              <div
                style={{
                  fontWeight: 700,
                  color: "#c5a35c",
                  fontSize: "0.95rem",
                }}
              >
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
  );
}
