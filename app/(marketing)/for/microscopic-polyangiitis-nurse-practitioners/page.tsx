import type { Metadata } from "next"
import { Stethoscope, ClipboardList, Shield, Target } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Microscopic Polyangiitis Nurse Practitioners | Momenties",
  description:
    "Built for NPs managing microscopic polyangiitis — from rituximab infusion coordination and MPO-ANCA monitoring to renal surveillance, steroid-related risk management, and relapse detection.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Induction Therapy Coordination",
    description:
      "Schedule rituximab induction (375 mg/m^2 weekly x 4 or 1,000 mg x 2 doses two weeks apart) per RAVE and MAINRITSAN protocols and cyclophosphamide IV pulses (15 mg/kg q2-3 weeks) when used. Coordinate premedication for acetaminophen, diphenhydramine, and methylprednisolone, infusion reaction monitoring, and slow-titration protocols on subsequent doses. Verify hepatitis B serology (HBsAg, anti-HBc, anti-HBs) before every induction with entecavir or tenofovir prophylaxis for HBcAb-positive patients. Confirm TMP-SMX PCP prophylaxis or sulfa-allergy alternative (atovaquone, dapsone, pentamidine) initiation. Verify live-vaccine hold during B-cell depletion and inactivated vaccine catch-up before deeper immunosuppression. Document infusion reactions with structured grading for the rheumatology and nephrology team.",
  },
  {
    icon: ClipboardList,
    title: "ANCA & Renal Function Monitoring",
    description:
      "Order and trend serial MPO-ANCA titers and quarterly urinalysis with microscopy, serum creatinine, eGFR, and urine protein-to-creatinine ratio. Recognize relapse signals — rising MPO-ANCA, new hematuria, RBC casts, dysmorphic RBCs, creatinine bump, or rising proteinuria — and escalate same-day to nephrology and rheumatology with structured nudges. Trigger nephrology referral for any acute drop in eGFR, new RBC casts, or proteinuria above patient baseline. Coordinate phlebotomy and urine collection windows so labs result before clinic visits. Track CD19 B-cell counts to time rituximab redosing. Document each MPO-ANCA-renal data set in a single relapse-surveillance view the entire vasculitis-renal team can review at a glance.",
  },
  {
    icon: Shield,
    title: "Steroid Toxicity & Bone Health",
    description:
      "Order baseline DEXA scan and repeat every 1-2 years for every patient on prednisone >=7.5 mg/day for >=3 months. Initiate calcium 1,200 mg and vitamin D 800-1,000 IU daily. Prescribe bisphosphonate (alendronate 70 mg weekly or zoledronic acid 5 mg IV annually) or denosumab for steroid-induced osteoporosis per ACR 2017 guideline. Monitor home blood pressure logs and quarterly fasting glucose or HbA1c for steroid-induced hyperglycemia. Coordinate ophthalmology for cataract and intraocular pressure surveillance. Reinforce steroid taper teaching with structured patient instruction on adrenal insufficiency warning signs, sick-day stress dosing, and never stopping abruptly. Track avacopan steroid-sparing outcomes when used per ADVOCATE protocol.",
  },
  {
    icon: Target,
    title: "Maintenance Adherence & Relapse Surveillance",
    description:
      "Coordinate maintenance rituximab 500-1,000 mg every 6 months per MAINRITSAN protocol with pre-infusion CBC, CMP, immunoglobulin levels, and CD19 count. Document BVAS/v3 (Birmingham Vasculitis Activity Score) at every clinic visit and VDI (Vasculitis Damage Index) annually for cumulative damage tracking. Trend MPO-ANCA quarterly with structured escalation for rising titers even in clinically quiet patients. Run structured symptom check-ins for hemoptysis, dyspnea, peripheral neuropathy, palpable purpura, abdominal pain, and fatigue. Connect families with the Vasculitis Foundation and Vasculitis UK for peer support, advocacy, and clinical trial resources. Reinforce warning signs requiring same-day call (hemoptysis, red urine, sudden vision change, new neurologic symptoms).",
  },
]

const timeline = [
  {
    month: "Month 1-2",
    title: "Intake, Diagnosis Confirmation & Education",
    description:
      "Complete new-patient MPA intake with organ-system review (renal, pulmonary, cutaneous, neurologic, GI), prior treatment history, and BVAS/v3 baseline scoring. Coordinate baseline MPO-ANCA, PR3-ANCA, urinalysis with microscopy, eGFR, urine protein-to-creatinine, hepatitis B and C serologies, HIV, QuantiFERON-TB Gold, HRCT chest, and renal biopsy review. Begin patient education on MPA pathophysiology vs. GPA distinction, why MPO-ANCA matters, the role of rituximab vs. cyclophosphamide, and what relapse warning signs require same-day calls. Connect family to the Vasculitis Foundation and Vasculitis UK.",
  },
  {
    month: "Month 3-4",
    title: "Induction Therapy & Prophylaxis Setup",
    description:
      "Coordinate rituximab induction or cyclophosphamide IV pulses with premedication orders, hepatitis B prophylaxis verification, and infusion reaction protocols. Schedule glucocorticoid taper checkpoints and document avacopan initiation per ADVOCATE protocol when used as steroid-sparing adjunct. Initiate TMP-SMX PCP prophylaxis or sulfa-allergy alternative based on G6PD status. Verify pneumococcal PCV20, recombinant zoster, and inactivated influenza vaccines before B-cell depletion deepens. Schedule first nephrology and pulmonology consults, baseline DEXA scan, calcium and vitamin D initiation, and bisphosphonate or denosumab prescribing for steroid-induced osteoporosis prevention.",
  },
  {
    month: "Month 5-6",
    title: "Response Tracking & Steroid Sparing",
    description:
      "Trend MPO-ANCA, urinalysis, eGFR, urine protein-to-creatinine, and CRP toward remission. Document BVAS/v3 score reduction and confirm CD19 B-cell depletion. Manage glucocorticoid taper milestones with avacopan-supported regimens where applicable. Coordinate repeat HRCT chest and PFTs with DLCO for diffuse alveolar hemorrhage and interstitial disease surveillance. Run quarterly fasting glucose or HbA1c, home blood pressure logs, and ophthalmology follow-up for cataract and IOP. Reinforce PCP prophylaxis adherence, hepatitis B reactivation surveillance with quarterly HBV DNA when indicated, and sick-day steroid dosing teaching.",
  },
  {
    month: "Month 7-8",
    title: "Mid-Year Multi-Specialty Coordination",
    description:
      "Book mid-year nephrology review with eGFR, urine protein-to-creatinine, and urinalysis trending plus repeat renal biopsy when indicated for unexplained creatinine rise. Coordinate pulmonology HRCT and PFT review for fibrosis surveillance. Schedule neurology for peripheral neuropathy monitoring with EMG/NCS when symptomatic. Align nephrology, pulmonology, and rheumatology visits with rituximab maintenance dosing windows to reduce patient travel. Run patient-reported symptom diary review and update quality-of-life and adherence touchpoints with structured callbacks for any patient missing labs or appointments.",
  },
  {
    month: "Month 9-10",
    title: "Maintenance Rituximab & Relapse Surveillance",
    description:
      "Coordinate maintenance rituximab 500-1,000 mg every 6 months per MAINRITSAN protocol with pre-infusion CBC, CMP, immunoglobulin levels, and CD19 count. Trend MPO-ANCA quarterly with structured escalation for rising titers. Order surveillance HRCT for new pulmonary nodules or fibrosis and renal panel for relapse signal recognition. Reinforce education on warning signs requiring same-day call (hemoptysis, red urine, sudden vision change, new neurologic symptoms). Update PCP prophylaxis based on sustained B-cell depletion. Document BVAS/v3 score at every encounter and refresh VDI damage index quarterly.",
  },
  {
    month: "Month 11-12",
    title: "Annual Reassessment & Care Plan Renewal",
    description:
      "Coordinate annual comprehensive reassessment — BVAS/v3, VDI, HRCT chest, PFTs with DLCO, renal panel with urine protein-to-creatinine, DEXA scan, fasting lipids, HbA1c, ophthalmology exam, and immunoglobulin levels. Renew PCP prophylaxis and hepatitis B reactivation surveillance plans. Consider IVIG for hypogammaglobulinemia with recurrent infections. Renew inactivated vaccine schedule and live-vaccine hold documentation. Reinforce bisphosphonate or denosumab continuation per ACR 2017 guideline. Sit down with patient to refresh next-year care plan, education priorities, and self-management goals. Submit Vasculitis Foundation and Vasculitis UK registry updates if applicable.",
  },
]

const kpis = [
  {
    metric: "Quarterly",
    target: "MPO-ANCA + UA",
    description: "Serial MPO-ANCA and urinalysis with microscopy for relapse surveillance",
  },
  {
    metric: "100%",
    target: "PCP Prophylaxis",
    description: "TMP-SMX or atovaquone/dapsone/pentamidine alternative coverage on every induction",
  },
  {
    metric: "Q6 Months",
    target: "Maintenance Rituximab",
    description: "MAINRITSAN-protocol redosing aligned with CD19 B-cell repopulation",
  },
  {
    metric: "Annual",
    target: "DEXA + Bisphosphonate",
    description: "Steroid-induced osteoporosis screening and treatment per ACR 2017 guideline",
  },
  {
    metric: "Every Visit",
    target: "BVAS/v3 Score",
    description: "Birmingham Vasculitis Activity Score documented at each clinic encounter",
  },
  {
    metric: "100%",
    target: "Vasculitis Foundation",
    description: "Patients connected to peer support, advocacy, and clinical trial resources",
  },
]

const testimonial = {
  quote:
    "MPA patients live between rheumatology, nephrology, and pulmonology — and the NP is the one keeping every infusion, MPO-ANCA, urinalysis, DEXA, and PCP prophylaxis prescription on track. Momenties consolidates rituximab induction and maintenance, quarterly MPO-ANCA trending, hepatitis B reactivation screens, BVAS/v3 scoring, and bone-health prescribing into a single timeline. I stopped chasing labs and started catching relapses earlier. Our renal partners trust that creatinine and urinalysis trends arrive before clinic, and our patients feel cared for, not chased.",
  name: "Patricia M., AGPCNP-BC",
  title: "Vasculitis NP, Renal-Rheumatology Program",
}

export default function MicroscopicPolyangiitisNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Microscopic Polyangiitis Nurse Practitioners"
        title="MPA Nurse Practitioners — Scheduling for MPO-ANCA Vasculitis Management"
        subtitle="Built for NPs managing microscopic polyangiitis — from rituximab infusion coordination and MPO-ANCA monitoring to renal surveillance, steroid-related risk management, and relapse detection."
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
            Built Around the MPA NP Workflow
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
              The MPA NP Year — Month by Month
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Every rituximab cycle, MPO-ANCA titer, urinalysis, DEXA scan, BVAS/v3 score, and patient education touchpoint — sequenced across 12 months.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {timeline.map((item) => (
                <div
                  key={item.month}
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
              The 6 KPIs That Define MPA NP Excellence
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
                    padding: 24,
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
              padding: "36px 40px",
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
