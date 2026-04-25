import type { Metadata } from "next"
import { Zap, Heart, FlaskConical, Stethoscope } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Hypereosinophilic Syndrome Center Calendar | Momenties",
  description:
    "Comprehensive scheduling for HES centers — mepolizumab and benralizumab biologic therapy monitoring, eosinophil count trending, cardiac (Loffler endocarditis) surveillance, thrombosis prevention, FIP1L1-PDGFRA reclassification, and imatinib coordination.",
}

const pillars = [
  {
    icon: Zap,
    title: "Biologic Therapy Scheduling & Monitoring",
    description:
      "Mepolizumab (Nucala) 300 mg subcutaneous every 4 weeks for HES — three 100 mg injections per dose with anti-IL-5 monoclonal antibody surveillance per FDA approval (September 2020) for HES of 6+ months duration without identifiable non-hematologic secondary cause; benralizumab (Fasenra) every 4-8 weeks subcutaneous dosing with anti-IL-5 receptor alpha eosinophil-depletion monitoring; monthly absolute eosinophil count (AEC) trending with target <1,500 cells/microliter (BMJ 2012 diagnostic criteria threshold); pre-injection vital signs, injection site rotation logs, and post-injection 30-minute observation for hypersensitivity reactions; quarterly response assessment with corticosteroid dose-sparing documentation; biologic infusion clinic capacity planning; and patient self-injection training milestone tracking for home administration transition.",
  },
  {
    icon: Heart,
    title: "Cardiac & Thromboembolic Surveillance",
    description:
      "Annual cardiac MRI for Loffler endocarditis surveillance with endomyocardial fibrosis assessment — most feared HES complication driving morbidity and mortality; quarterly transthoracic echocardiogram with strain imaging, biventricular function, and apical thrombus screening; monthly troponin and BNP/NT-proBNP surveillance for early myocardial damage detection; annual cardiac PET-MRI for active inflammation in suspected acute necrotic stage; quarterly D-dimer and Doppler ultrasound for HES-associated venous and arterial thrombosis (Budd-Chiari, splanchnic vein, intracardiac thrombus); anticoagulation INR monitoring weekly during warfarin initiation, monthly stable; DOAC adherence audits; and emergency cardiology referral pathway for new heart failure symptoms or chest pain in active eosinophilia.",
  },
  {
    icon: FlaskConical,
    title: "FIP1L1-PDGFRA & Tyrosine Kinase Inhibitor Management",
    description:
      "Diagnostic FIP1L1-PDGFRA fusion testing by FISH or RT-PCR on peripheral blood at HES diagnosis to reclassify to chronic eosinophilic leukemia (CEL) myeloid neoplasm — fundamentally changes treatment paradigm; imatinib (Gleevec) 100-400 mg daily with monthly CBC, comprehensive metabolic panel, and quarterly molecular monitoring of FIP1L1-PDGFRA transcript by RT-PCR; cardiac function surveillance during imatinib initiation given documented heart failure cases (echocardiogram baseline, 1 month, then quarterly); annual ETV6, JAK2, FGFR1, PDGFRB rearrangement screening for non-FIP1L1-PDGFRA myeloid HES variants; quarterly bone marrow biopsy for first year then annually with reticulin staining and chromosomal analysis; tryptase level surveillance; and sustained molecular response (SMR) documentation for treatment-free remission consideration after 24+ months undetectable transcript.",
  },
  {
    icon: Stethoscope,
    title: "Organ-Specific Damage Assessment",
    description:
      "Systematic organ-by-organ HES damage staging — quarterly skin examination with biopsy of suspicious lesions for eosinophilic dermatitis, urticaria, angioedema, and Wells syndrome documentation; quarterly pulmonary function tests (spirometry, DLCO) and high-resolution CT chest for eosinophilic pneumonia, parenchymal infiltrates, and pleural effusions with bronchoalveolar lavage when indicated; quarterly neurological examination and brain MRI for HES encephalopathy, peripheral neuropathy, and embolic stroke surveillance; quarterly upper/lower endoscopy with biopsy for eosinophilic gastroenteritis variants; monthly CBC with differential and absolute eosinophil count trending; serum tryptase, vitamin B12, IgE, and lymphocyte immunophenotyping (CD3-CD4+ aberrant T-cell clone testing for lymphocytic-variant HES); and annual quality-of-life patient-reported outcome assessment using HES-specific symptom diaries.",
  },
]

const timeline = [
  {
    month: "Month 1-2",
    title: "Diagnostic Workup & FIP1L1-PDGFRA Reclassification",
    description:
      "Establish HES diagnosis per BMJ 2012 criteria — peripheral blood eosinophilia >1,500 cells/microliter on two occasions ≥1 month apart, organ damage attributable to eosinophilia, and exclusion of secondary causes (parasitic, allergic, drug-induced). Order FIP1L1-PDGFRA FISH/RT-PCR, ETV6, JAK2, FGFR1, PDGFRB rearrangement panel, lymphocyte immunophenotyping for CD3-CD4+ aberrant T-cell clone, serum tryptase, vitamin B12, IgE, and bone marrow biopsy with cytogenetics. Reclassify FIP1L1-PDGFRA-positive cases as chronic eosinophilic leukemia and initiate imatinib 100-400 mg daily.",
  },
  {
    month: "Month 3-4",
    title: "Baseline Organ Damage Assessment & Treatment Initiation",
    description:
      "Complete baseline cardiac MRI, transthoracic echocardiogram with strain imaging, troponin, BNP, and D-dimer for Loffler endocarditis and thrombosis screening. Pulmonary function testing and HRCT chest. Skin examination with biopsy of suspect lesions. Initiate first-line corticosteroids for idiopathic HES with rapid taper protocol. For corticosteroid-refractory or steroid-dependent disease, schedule mepolizumab 300 mg SC every 4 weeks initiation visit with patient injection training and post-dose observation protocol.",
  },
  {
    month: "Month 5-6",
    title: "Biologic Response Assessment & Steroid Sparing",
    description:
      "Quarterly response assessment for mepolizumab/benralizumab cohort — absolute eosinophil count trending toward <1,500 cells/microliter target, corticosteroid dose-sparing documentation, organ damage stabilization. Imatinib molecular monitoring with FIP1L1-PDGFRA RT-PCR transcript quantification. Repeat echocardiogram, troponin, BNP for cardiac surveillance. Update anticoagulation regimens for HES-associated thrombosis with INR/DOAC adherence audit. Initiate home self-injection training transition for stable mepolizumab patients.",
  },
  {
    month: "Month 7-8",
    title: "Mid-Year Cardiac MRI & Thrombosis Surveillance",
    description:
      "Comprehensive mid-year cardiac MRI re-imaging for Loffler endocarditis surveillance with endomyocardial fibrosis quantification. Repeat D-dimer and Doppler ultrasound for venous/arterial thrombosis screening. Bone marrow biopsy for FIP1L1-PDGFRA-positive patients with reticulin staining and chromosomal analysis. Pulmonary function testing repeat for patients with baseline parenchymal involvement. Endoscopic surveillance for eosinophilic gastroenteritis variants. Schedule cardiology multi-disciplinary case conference for cardiac-involvement HES.",
  },
  {
    month: "Month 9-10",
    title: "Lymphocytic-Variant HES & Refractory Workup",
    description:
      "Repeat lymphocyte immunophenotyping for CD3-CD4+ aberrant T-cell clone surveillance in lymphocytic-variant HES. T-cell receptor gene rearrangement studies. Consider interferon-alpha or alemtuzumab for refractory lymphocytic HES per NIH protocols. Neurological examination with brain MRI for new-onset cognitive symptoms or peripheral neuropathy. Skin examination with biopsy for new dermatologic lesions. Update aberrant immunophenotype documentation for prognostic stratification per NIH Eosinophil Disorders Clinic protocols.",
  },
  {
    month: "Month 11-12",
    title: "Annual Comprehensive Reassessment & Registry Reporting",
    description:
      "Complete annual comprehensive reassessment — cardiac MRI, echocardiogram, PFTs, HRCT, full skin/neurologic exam, and patient-reported outcome HES symptom diary. Final imatinib molecular response classification (sustained molecular response if 24+ months undetectable transcript) for treatment-free remission consideration. Update biologic therapy continuation, dose-spacing, or transition decisions. Submit annual HES Alliance and UCAN registry data. Plan next-year diagnostic, biologic, and surveillance schedule with patient.",
  },
]

const kpis = [
  {
    metric: "AEC <1,500",
    target: "cells/microliter",
    description: "Absolute eosinophil count target on biologic therapy per BMJ 2012 criteria",
  },
  {
    metric: "100%",
    target: "FIP1L1-PDGFRA Tested",
    description: "All HES patients screened at diagnosis to identify imatinib-responsive CEL",
  },
  {
    metric: "Annual",
    target: "Cardiac MRI",
    description: "Loffler endocarditis surveillance with endomyocardial fibrosis assessment",
  },
  {
    metric: "Q4 Weeks",
    target: "Mepolizumab 300 mg",
    description: "Anti-IL-5 dosing interval per FDA-approved HES protocol",
  },
  {
    metric: ">=50%",
    target: "Steroid Dose Reduction",
    description: "Corticosteroid-sparing benefit on mepolizumab or benralizumab",
  },
  {
    metric: "Monthly",
    target: "CBC + Differential",
    description: "Eosinophil trending, imatinib safety, and breakthrough eosinophilia detection",
  },
]

const testimonial = {
  quote:
    "HES sits at the intersection of hematology, allergy-immunology, and cardiology — and every patient is different. One needs imatinib for FIP1L1-PDGFRA, another mepolizumab for idiopathic HES, another anticoagulation for Loffler endocarditis. Momenties keeps every cardiac MRI, monthly CBC, biologic injection, and FISH transcript on schedule across our entire cohort. We finally stopped chasing reminders and started running a real eosinophil disorders program.",
  name: "Dr. P. Klion",
  title: "HES Program Director, NIH Eosinophil Disorders Clinic",
}

export default function HypereosinophilicSyndromeCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Hypereosinophilic Syndrome Center Calendar"
        title="Hypereosinophilic Syndrome Center — Eosinophil Control & Organ Surveillance Calendar"
        subtitle="Comprehensive scheduling for HES centers — mepolizumab and benralizumab biologic therapy monitoring, eosinophil count trending, cardiac (Loffler endocarditis) surveillance, thrombosis prevention, FIP1L1-PDGFRA reclassification, and imatinib coordination."
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
            Built for the Full HES Center Lifecycle
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
              The HES Center Calendar — Month by Month
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Every biologic injection, eosinophil count, cardiac MRI, FIP1L1-PDGFRA transcript, and organ damage assessment — sequenced across 12 months.
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
                    borderRadius: 12,
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
              The 6 KPIs That Define HES Program Excellence
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
                gap: 20,
              }}
            >
              {kpis.map((kpi) => (
                <div
                  key={kpi.target}
                  style={{
                    background: "#0a0a0d",
                    border: "1px solid rgba(197,163,92,0.2)",
                    borderRadius: 12,
                    padding: "28px 20px",
                    textAlign: "center",
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
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#f0ece3",
                      fontWeight: 600,
                      marginBottom: 8,
                    }}
                  >
                    {kpi.target}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "rgba(240,236,227,0.65)",
                      lineHeight: 1.45,
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
        <section style={{ padding: "0 24px 40px" }}>
          <blockquote
            style={{
              maxWidth: 720,
              margin: "0 auto",
              background: "#131318",
              border: "1px solid rgba(197,163,92,0.25)",
              borderRadius: 16,
              padding: "40px 36px",
              textAlign: "center",
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
                fontSize: "clamp(1rem,2vw,1.2rem)",
                color: "#f0ece3",
                lineHeight: 1.7,
                fontStyle: "italic",
                marginBottom: 28,
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
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
