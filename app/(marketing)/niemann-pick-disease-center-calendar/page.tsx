import type { Metadata } from "next";
import {
  Stethoscope,
  Database,
  Workflow,
  Users2,
  Calendar,
  Clock,
  ClipboardList,
  Target,
  Award,
  Shield,
} from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/marketing/Reveal";
import { CTA } from "@/components/marketing/CTA";

export const metadata: Metadata = {
  title:
    "Niemann-Pick Disease Center — Treatment, Monitoring & Surveillance Calendar | Momenties",
  description:
    "Specialized scheduling for Niemann-Pick disease centers — miglustat therapy for NPC, olipudase alfa ERT for ASMD, NPC Severity Scale tracking, vertical supranuclear gaze palsy monitoring, oxysterol biomarkers, swallowing assessments, and multidisciplinary care coordination across NPC and ASMD patient populations.",
};

const pillars = [
  {
    icon: Stethoscope,
    title: "Miglustat & NPC Treatment Monitoring",
    description:
      "Coordinate miglustat (Zavesca) substrate reduction therapy for NPC1/2 patients with neurological involvement — initiation work-up, dose titration to 200 mg TID adult target, GI tolerance windows, quarterly NPC Severity Scale (Iturriaga/Patterson) re-scoring, FiloNi tremor and ataxia rating intervals, semi-annual oxysterol (cholestane-3β,5α,6β-triol and 7-ketocholesterol) and bile acid biomarker draws, annual brain MRI for cerebellar atrophy and white matter changes, and structured documentation of disease stabilization vs. progression to support payer reauthorization.",
  },
  {
    icon: Workflow,
    title: "ASMD Enzyme Replacement Scheduling",
    description:
      "Run olipudase alfa (Xenpozyme) Q2-week IV infusions for ASMD type B and A/B patients with locked-in dose-escalation phase scheduling (0.03 → 3.0 mg/kg over 14 weeks), maintenance phase windows, pre-medication blocks for acute phase reactions, sphingomyelin and lyso-sphingomyelin lysosomal storage marker draws, quarterly liver/spleen volumetric MRI, semi-annual DLCO and 6-minute walk test for interstitial lung disease, lipid panel and platelet trending, and infusion-day documentation aligned to manufacturer REMS-style monitoring requirements.",
  },
  {
    icon: ClipboardList,
    title: "Neurological & Cognitive Assessment",
    description:
      "Build a single neurology surveillance lane covering vertical supranuclear gaze palsy (VSGP) saccade testing, gelastic cataplexy episode logging, cerebellar ataxia progression with SARA scoring, dystonia and dysarthria tracking, neuropsychological testing on a 6–12 month cadence, swallowing safety with videofluoroscopic swallow study (VFSS) every 6–12 months, EEG when seizures are suspected, and an adult NPC late-onset diagnostic workup pathway (psychiatric prodrome, splenomegaly, oxysterol screening, NPC1/NPC2 sequencing) so atypical presentations are not missed.",
  },
  {
    icon: Users2,
    title: "Multidisciplinary Care & Transition",
    description:
      "Synchronize metabolic genetics, neurology, pulmonology (ASMD), hepatology, PT/OT/speech, nutrition, palliative care, social work, and clinical research visits into one shared calendar — annual care conferences, school/IEP letters for pediatric NPC, pediatric-to-adult transition milestones, advance care planning checkpoints for advanced NPC, INPDR (International Niemann-Pick Disease Registry) data submission windows, and clinical trial screening visits — so families navigate one coordinated plan instead of ten siloed clinics.",
  },
];

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnostic Confirmation & Baseline Phenotyping",
    description:
      "Complete diagnostic workup — oxysterol panel (cholestane-triol, 7-ketocholesterol), bile acid metabolites, acid sphingomyelinase enzyme activity for ASMD, NPC1/NPC2 and SMPD1 sequencing, filipin staining when indicated. Establish baseline NPC Severity Scale, SARA ataxia score, FiloNi tremor rating, VSGP saccade exam, neuropsychological battery, baseline brain MRI, abdominal MRI for liver/spleen volumetrics, DLCO and 6-minute walk test for ASMD type B, swallowing assessment, and full lipid and platelet panel. Confirm NPC vs. ASMD subtype and document family pedigree.",
  },
  {
    month: "Month 3–4",
    title: "Therapy Initiation — Miglustat or Olipudase Alfa",
    description:
      "Begin miglustat dose titration for NPC patients with neurological involvement (100 mg daily up to 200 mg TID adult target) with structured GI tolerance check-ins, lactase supplementation counseling, and low-carbohydrate dietary plan. For ASMD type B and A/B, start olipudase alfa dose-escalation infusions Q2 weeks (0.03 → 3.0 mg/kg) with pre-medication, vital monitoring, and acute phase reaction observation windows. Submit prior authorizations and confirm specialty pharmacy and infusion center logistics.",
  },
  {
    month: "Month 5–6",
    title: "First Disease-Specific Response Review",
    description:
      "Repeat NPC Severity Scale and SARA scoring for NPC patients on miglustat. For ASMD patients, repeat sphingomyelin and lyso-sphingomyelin biomarkers, lipid panel, platelet count, and abdominal volumetrics to document early liver/spleen volume reduction. Assess swallowing safety with repeat VFSS if dysphagia is present. Adjust feeding plans, thickened liquids, and aspiration precautions. Refer to PT/OT/speech as indicated and lock in standing therapy slots.",
  },
  {
    month: "Month 7–8",
    title: "Pulmonary, Hepatic & Cardiac Surveillance",
    description:
      "Run mid-year pulmonary panel for ASMD type B — DLCO, spirometry, 6-minute walk, high-resolution chest CT if indicated for interstitial lung disease. Repeat hepatic panel and consider FibroScan or liver MRI elastography for hepatic fibrosis. Cardiology baseline ECG and echocardiogram for ASMD. For NPC, screen for seizures, gelastic cataplexy frequency, and dystonia. Document any acute phase reactions, infusion adjustments, or dose holds with corresponding biomarker context.",
  },
  {
    month: "Month 9–10",
    title: "Neurological Re-Imaging & Cognitive Re-Assessment",
    description:
      "Repeat brain MRI for NPC patients to track cerebellar atrophy, white matter changes, and any new lesions. Repeat neuropsychological battery to compare against baseline. Re-score VSGP, SARA, and FiloNi. For pediatric NPC, update school accommodations, IEP letters, and behavioral health support. Coordinate genetic counseling for at-risk siblings and reproductive planning for adult patients and parents. Begin advance care planning conversations for advanced NPC where appropriate.",
  },
  {
    month: "Month 11–12",
    title: "Annual Care Conference & Registry Submission",
    description:
      "Hold the annual multidisciplinary Niemann-Pick care conference with metabolic genetics, neurology, pulmonology, hepatology, PT/OT/speech, nutrition, palliative care, social work, and the family. Finalize the 12-month treatment response summary for miglustat (NPC) or olipudase alfa (ASMD), reauthorize therapy with payers, and submit annual data to the International Niemann-Pick Disease Registry (INPDR). Refresh clinical trial eligibility screening, transition planning for pediatric-to-adult patients, and the next 12-month surveillance calendar.",
  },
];

const kpis = [
  {
    metric: "NPC Severity Scale",
    target: "Stable or <2 pt/yr increase",
    description:
      "Annual NPC Severity Scale (Iturriaga/Patterson) trajectory used to demonstrate miglustat disease stabilization vs. natural history progression and support payer reauthorization.",
  },
  {
    metric: "Olipudase Alfa Adherence",
    target: ">=95% Q2-week infusions",
    description:
      "On-time olipudase alfa infusion rate across dose-escalation and maintenance phases for ASMD type B and A/B patients, with documented reasons for any held or delayed doses.",
  },
  {
    metric: "Spleen Volume Reduction",
    target: ">=30% by Month 12",
    description:
      "Reduction in spleen volume on abdominal MRI by 12 months of olipudase alfa therapy, tracked alongside platelet count and lipid panel improvement as core ASMD response markers.",
  },
  {
    metric: "Oxysterol Biomarker Capture",
    target: "100% semi-annual",
    description:
      "Percentage of NPC patients with documented semi-annual oxysterol (cholestane-triol, 7-ketocholesterol) and bile acid biomarker draws to monitor disease activity and trial eligibility.",
  },
  {
    metric: "Swallowing Safety Review",
    target: "Annual VFSS or sooner",
    description:
      "Annual videofluoroscopic swallow study (or earlier if symptomatic) for all NPC patients with dysphagia risk, with documented aspiration precautions and feeding plans.",
  },
  {
    metric: "INPDR Data Submission",
    target: "100% on-time annually",
    description:
      "On-time annual submission to the International Niemann-Pick Disease Registry for every active NPC and ASMD patient, including disease milestones, therapies, and outcomes.",
  },
];

const testimonial = {
  quote:
    "Niemann-Pick is two diseases living under one name — NPC patients on miglustat with cerebellar ataxia, VSGP, gelastic cataplexy, and swallowing risk, and ASMD patients on olipudase alfa with infusion logistics, lung function, and liver/spleen volumetrics. Momenties is the first calendar that holds both pathways at once. Our biomarker draws, NPC Severity Scale re-scoring, Q2-week infusions, VFSS intervals, and INPDR submissions all live on one timeline. Families finally feel like one team is driving the plan.",
  name: "Dr. J. Imrie",
  title: "Niemann-Pick Disease Program Director, Metabolic Center",
};

export default function NiemannPickDiseaseCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Niemann-Pick Disease Center Calendar"
        title="Niemann-Pick Disease Center — Treatment, Monitoring & Surveillance Calendar"
        subtitle="Specialized scheduling for Niemann-Pick disease centers — miglustat therapy for NPC, olipudase alfa ERT for ASMD, disability tracking, neurological surveillance, swallowing assessments, and multidisciplinary care coordination."
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
            Built for the Full Niemann-Pick Disease Care Lifecycle
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
              The 12-Month Niemann-Pick Surveillance Calendar
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Diagnostic workup, miglustat or olipudase alfa initiation, biomarker draws, neurological surveillance, VFSS, imaging, and registry submission — sequenced across one year.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((item) => (
                <div
                  key={item.month}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr",
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
              The 6 KPIs That Define Niemann-Pick Program Excellence
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
                      fontSize: "0.78rem",
                      color: "#c5a35c",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 8,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(1.2rem,2vw,1.5rem)",
                      fontWeight: 700,
                      color: "#f0ece3",
                      fontFamily: "Playfair Display, serif",
                      marginBottom: 10,
                      lineHeight: 1.2,
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
        <section style={{ background: "#0e0e12", padding: "72px 24px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <blockquote
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                background: "#131318",
                borderRadius: 16,
                padding: "40px 36px",
                margin: 0,
                textAlign: "center",
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
                  fontSize: "clamp(1rem,2vw,1.18rem)",
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
