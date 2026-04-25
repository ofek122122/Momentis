import type { Metadata } from "next"
import { Stethoscope, ClipboardList, Heart, Shield } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "GPA Nurse Practitioners | Momenties",
  description:
    "Purpose-built for NPs managing GPA patients — from rituximab infusion coordination and ANCA monitoring to ENT surveillance, renal function tracking, PCP prophylaxis management, and relapse detection.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "Rituximab Infusion Coordination",
    description:
      "Schedule rituximab induction (375 mg/m^2 weekly x 4 or 1,000 mg x 2 doses two weeks apart) and maintenance (500-1,000 mg every 6 months) per RAVE and MAINRITSAN protocols. Coordinate premedication orders for acetaminophen, diphenhydramine, and methylprednisolone to mitigate cytokine release. Manage infusion reaction monitoring across the first hour, slow-titration protocols on subsequent doses, and rebooking logistics for missed cycles. Verify hepatitis B serology (HBsAg, anti-HBc, anti-HBs) before every induction and confirm live-vaccine hold status before each dose. Track CD19/CD20 B-cell depletion confirmation labs and document infusion reactions with structured grading for the rheumatology team.",
  },
  {
    icon: ClipboardList,
    title: "ANCA & Renal Function Tracking",
    description:
      "Order and trend serial PR3-ANCA titers and quarterly urinalysis with microscopy plus serum creatinine, eGFR, and urine protein-to-creatinine ratio for every GPA patient. Communicate rising PR3-ANCA trajectories and new hematuria, RBC casts, or creatinine bumps to the rheumatologist and nephrologist with structured nudges. Coordinate phlebotomy and urine collection windows so labs result before clinic visits. Track CD19 B-cell counts to time rituximab redosing for repopulating patients and document each ANCA-renal data set in a single relapse-surveillance view that the entire vasculitis team can review at a glance.",
  },
  {
    icon: Heart,
    title: "ENT & Pulmonary Surveillance",
    description:
      "Coordinate ENT follow-up for chronic sinusitis, saddle-nose deformity monitoring, subglottic stenosis surveillance with serial flexible laryngoscopy, and otologic exams for conductive hearing loss. Schedule pulmonology consultations, baseline and serial high-resolution chest CT for nodule and cavitary lesion tracking, PFTs with DLCO for diffuse alveolar hemorrhage and interstitial disease surveillance, and bronchoscopy when indicated. Align imaging windows with infusion cycles to reduce patient travel burden. Document new epistaxis, hemoptysis, hoarseness, or hearing changes through structured symptom check-ins between visits and escalate red flags to the GPA team same-day.",
  },
  {
    icon: Shield,
    title: "PCP Prophylaxis & Immunosuppression",
    description:
      "Manage Pneumocystis jirovecii prophylaxis with TMP-SMX (Bactrim) single-strength daily or double-strength three times weekly for every patient on rituximab, cyclophosphamide, or high-dose corticosteroids. Coordinate sulfa-allergy alternatives — atovaquone 1,500 mg daily, dapsone 100 mg daily after G6PD screening, or aerosolized pentamidine 300 mg monthly. Order entecavir or tenofovir hepatitis B reactivation prophylaxis for HBcAb-positive patients. Verify live-vaccine contraindication during B-cell depletion and document inactivated vaccine catch-up (pneumococcal PCV20, recombinant zoster, annual influenza). Connect families to the Vasculitis Foundation for peer support, advocacy, and clinical trial resources.",
  },
]

const timeline = [
  {
    month: "Month 1-2",
    title: "Intake, Diagnosis Confirmation & Education",
    description:
      "Complete new-patient GPA intake with organ-system review (sinopulmonary, renal, ocular, neurologic, cutaneous), prior treatment history, and BVAS/v3 baseline scoring. Coordinate baseline PR3-ANCA, MPO-ANCA, urinalysis with microscopy, eGFR, urine protein-to-creatinine, hepatitis B and C serologies, HIV, QuantiFERON-TB Gold, and HRCT chest. Begin patient education on GPA pathophysiology, the difference between rituximab and cyclophosphamide induction, why PCP prophylaxis matters, and what relapse warning signs require same-day calls. Connect family to the Vasculitis Foundation.",
  },
  {
    month: "Month 3-4",
    title: "Induction Therapy & Prophylaxis Setup",
    description:
      "Coordinate rituximab induction (375 mg/m^2 weekly x 4 or 1,000 mg x 2) with premedication orders, hepatitis B prophylaxis screening, and infusion reaction protocols. Schedule glucocorticoid taper checkpoints and document avacopan initiation when used as steroid-sparing adjunct. Initiate TMP-SMX PCP prophylaxis or alternative based on sulfa allergy and G6PD status. Verify pneumococcal PCV20, recombinant zoster, and influenza inactivated vaccines before B-cell depletion deepens. Schedule first ENT and pulmonology consults, baseline PFTs with DLCO, and laryngoscopy.",
  },
  {
    month: "Month 5-6",
    title: "Response Tracking & Steroid Sparing",
    description:
      "Trend PR3-ANCA, urinalysis, eGFR, and CRP toward remission. Document BVAS/v3 score reduction and confirm CD19 B-cell depletion. Manage glucocorticoid taper milestones with avacopan-supported regimens where applicable. Coordinate repeat ENT laryngoscopy for subglottic stenosis surveillance and follow-up HRCT for nodule resolution. Reinforce PCP prophylaxis adherence, hepatitis B reactivation surveillance with quarterly HBV DNA when indicated, and inactivated vaccine catch-up. Run structured symptom check-ins for epistaxis, hemoptysis, hearing change, and new joint or cutaneous involvement.",
  },
  {
    month: "Month 7-8",
    title: "Mid-Year Multi-Specialty Coordination",
    description:
      "Book mid-year nephrology review with eGFR, urine protein-to-creatinine, and urinalysis trending. Coordinate ophthalmology for episcleritis, scleritis, or orbital pseudotumor surveillance. Schedule audiology for sensorineural and conductive hearing loss tracking. Align ENT, pulmonology, and rheumatology visits with rituximab maintenance dosing windows to reduce patient travel. Run patient-reported symptom diary review and update quality-of-life and adherence touchpoints with structured callbacks for any patient missing labs or appointments.",
  },
  {
    month: "Month 9-10",
    title: "Maintenance Rituximab & Relapse Surveillance",
    description:
      "Coordinate maintenance rituximab 500-1,000 mg every 6 months per MAINRITSAN protocol with pre-infusion CBC, CMP, immunoglobulin levels, and CD19 count. Trend PR3-ANCA quarterly with structured escalation for rising titers, even in clinically quiet patients. Order surveillance HRCT for new pulmonary nodules and laryngoscopy for subglottic stenosis progression. Reinforce education on warning signs requiring same-day call (hemoptysis, sudden vision change, new red urine, neurologic symptoms). Update PCP prophylaxis based on sustained B-cell depletion.",
  },
  {
    month: "Month 11-12",
    title: "Annual Reassessment & Care Plan Renewal",
    description:
      "Coordinate annual comprehensive reassessment — BVAS/v3 scoring, VDI damage index, HRCT chest, PFTs with DLCO, laryngoscopy, audiology, ophthalmology exam, and renal function panel. Renew PCP prophylaxis and hepatitis B reactivation surveillance plans. Document immunoglobulin levels and consider IVIG for hypogammaglobulinemia with recurrent infections. Renew inactivated vaccine schedule and live-vaccine hold documentation. Sit down with patient to refresh next-year care plan, education priorities, and self-management goals. Submit Vasculitis Foundation registry updates if applicable.",
  },
]

const kpis = [
  {
    metric: "Quarterly",
    target: "PR3-ANCA + UA",
    description: "Serial ANCA titers and urinalysis with microscopy for relapse surveillance",
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
    target: "HRCT + PFTs",
    description: "Pulmonary nodule, cavitary lesion, and DLCO surveillance with pulmonology",
  },
  {
    metric: "100%",
    target: "HBV Screen",
    description: "Hepatitis B serology and reactivation prophylaxis verified before every induction",
  },
  {
    metric: "100%",
    target: "Vasculitis Foundation",
    description: "Patients connected to peer support, advocacy, and clinical trial resources",
  },
]

const testimonial = {
  quote:
    "GPA patients live between rheumatology, nephrology, ENT, and pulmonology — and the NP is the one keeping every infusion, ANCA, urinalysis, laryngoscopy, and PCP prophylaxis prescription on track. Momenties consolidates rituximab induction and maintenance, quarterly PR3-ANCA trending, hepatitis B reactivation screens, and live-vaccine hold flags into a single timeline. I stopped chasing labs and started catching relapses earlier. Our subglottic stenosis surveillance is finally on cadence and our patients trust that nothing will fall through.",
  name: "Rachel T., AGPCNP-BC",
  title: "Vasculitis NP, Rheumatology Division",
}

export default function GranulomatosisPolyangiitisNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="GPA Nurse Practitioners"
        title="GPA Nurse Practitioners — Scheduling for a Systemic ANCA-Associated Vasculitis"
        subtitle="Purpose-built for NPs managing GPA patients — from rituximab infusion coordination and ANCA monitoring to ENT surveillance, renal function tracking, PCP prophylaxis management, and relapse detection."
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
            Built Around the GPA NP Workflow
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
              The GPA NP Year — Month by Month
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Every rituximab cycle, ANCA titer, urinalysis, ENT laryngoscopy, PCP prophylaxis renewal, and patient education touchpoint — sequenced across 12 months.
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
              The 6 KPIs That Define GPA NP Excellence
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
