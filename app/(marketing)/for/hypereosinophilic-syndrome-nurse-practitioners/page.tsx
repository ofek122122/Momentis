import type { Metadata } from "next"
import { Bell, ClipboardList, Heart, Stethoscope } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "HES Nurse Practitioners | Momenties",
  description:
    "Purpose-built for NPs coordinating HES care — from mepolizumab/benralizumab injection logistics and eosinophil trending to cardiac surveillance coordination, imatinib monitoring, and patient education.",
}

const pillars = [
  {
    icon: Bell,
    title: "Biologic Injection Coordination",
    description:
      "Schedule subcutaneous injection visits for mepolizumab (Nucala) 300 mg every 4 weeks (three 100 mg injections per dose) and benralizumab (Fasenra) every 4-8 weeks per FDA-approved HES protocols. Educate patients on transition to home self-injection with prefilled syringe/autoinjector technique demonstration, injection site rotation logs, and post-injection observation guidance. Coordinate prior authorization renewals, specialty pharmacy delivery windows, cold-chain storage, and missed-dose recovery protocols. Track corticosteroid dose-sparing milestones as anti-IL-5 biologic response indicator and document patient-reported tolerability between visits.",
  },
  {
    icon: ClipboardList,
    title: "Eosinophil Count & CBC Monitoring",
    description:
      "Order and trend monthly CBC with differential and absolute eosinophil count (AEC) for every HES patient with target <1,500 cells/microliter (BMJ 2012 diagnostic criteria threshold). Monitor for breakthrough eosinophilia indicating loss of biologic response or non-adherence. Schedule comprehensive metabolic panel and liver function panels to support imatinib safety surveillance. Flag rising eosinophil trajectories early with structured nudges to providers. Coordinate phlebotomy windows so labs are resulted before clinic visits, eliminating last-minute reschedules and ensuring intake appointments have actionable trending data.",
  },
  {
    icon: Heart,
    title: "Cardiac & Organ Surveillance Scheduling",
    description:
      "Coordinate cardiology referrals and book annual cardiac MRI for Loffler endocarditis surveillance with endomyocardial fibrosis assessment plus quarterly transthoracic echocardiogram with strain imaging. Schedule monthly troponin and BNP/NT-proBNP draws. Manage anticoagulation INR monitoring weekly during warfarin initiation and monthly when stable, with DOAC adherence audits for HES-associated thrombosis. Coordinate dermatology for skin HES biopsies, allergy/immunology for respiratory HES with PFTs and HRCT, and neurology for HES-associated peripheral neuropathy or embolic stroke surveillance.",
  },
  {
    icon: Stethoscope,
    title: "Imatinib Adherence & Toxicity Monitoring",
    description:
      "For FIP1L1-PDGFRA-positive chronic eosinophilic leukemia patients on imatinib (Gleevec) 100-400 mg daily, manage monthly CBC, comprehensive metabolic panel, and liver function panel ordering with structured edema, weight gain, and fluid retention symptom check-ins. Schedule quarterly molecular monitoring of FIP1L1-PDGFRA transcript by RT-PCR and document sustained molecular response. Coordinate baseline and serial echocardiograms during imatinib initiation given heart failure case reports. Provide patient education on trigger avoidance, missed-dose protocols, and connect families with UCAN and HES Alliance peer support, advocacy, and clinical trial resources.",
  },
]

const timeline = [
  {
    month: "Month 1-2",
    title: "Intake, Diagnostic Coordination & Education",
    description:
      "Complete new-patient HES intake with absolute eosinophil count history, organ damage symptom inventory, parasitic and allergic exposure screening, and family history. Coordinate FIP1L1-PDGFRA FISH/RT-PCR, ETV6/JAK2/FGFR1/PDGFRB rearrangement panel, lymphocyte immunophenotyping for CD3-CD4+ aberrant T-cell clone, serum tryptase, vitamin B12, and IgE. Begin patient education on HES vs. CEL distinction, why eosinophils damage organs, and what biologic vs. tyrosine kinase inhibitor pathways look like. Connect family to UCAN and HES Alliance.",
  },
  {
    month: "Month 3-4",
    title: "Treatment Initiation & Self-Injection Training",
    description:
      "For idiopathic HES, coordinate corticosteroid taper protocols and prior authorization for mepolizumab 300 mg SC every 4 weeks or benralizumab. Schedule first injection visit with vitals, injection site rotation log start, and 30-minute post-dose observation. Begin progressive self-injection training. For FIP1L1-PDGFRA-positive patients, set up imatinib dispensing, education on edema/fluid retention symptom monitoring, and baseline echocardiogram. Schedule monthly CBC and CMP draws and align them with clinic visit timing.",
  },
  {
    month: "Month 5-6",
    title: "Response Tracking & Steroid Sparing",
    description:
      "Trend monthly absolute eosinophil count toward <1,500 cells/microliter target. Document corticosteroid dose-sparing milestones for biologic patients. Run quarterly FIP1L1-PDGFRA RT-PCR transcript quantification for imatinib patients. Repeat echocardiogram, troponin, and BNP per cardiac surveillance protocol. Update anticoagulation INR/DOAC adherence logs. Transition stable mepolizumab patients to home self-injection with home-health follow-up call cadence. Reinforce trigger avoidance education and symptom diary completion.",
  },
  {
    month: "Month 7-8",
    title: "Mid-Year Cardiac & Multi-Specialty Coordination",
    description:
      "Book mid-year cardiac MRI for Loffler endocarditis surveillance and Doppler ultrasound for thrombosis screening. Coordinate dermatology biopsies for new skin HES lesions, allergy/immunology for respiratory HES with PFT/HRCT, and neurology for new neurologic symptoms. Schedule endoscopy for eosinophilic gastroenteritis variants when indicated. Run patient-reported HES symptom diary review. Update quality-of-life and adherence touchpoints with structured callbacks for any patient missing appointments or labs.",
  },
  {
    month: "Month 9-10",
    title: "Lymphocytic-Variant HES & Refractory Pathways",
    description:
      "Repeat lymphocyte immunophenotyping for CD3-CD4+ aberrant T-cell clone surveillance in lymphocytic-variant HES with T-cell receptor gene rearrangement studies. Coordinate referral to NIH Eosinophil Disorders Clinic for refractory or atypical patients. Support enrollment workups for interferon-alpha or alemtuzumab trials. Reinforce education on warning signs requiring same-day call (chest pain, sudden swelling, neurologic change). Update dermatology and allergy/immunology follow-up cadence based on organ-specific progression.",
  },
  {
    month: "Month 11-12",
    title: "Annual Reassessment & Care Plan Renewal",
    description:
      "Coordinate annual comprehensive reassessment — cardiac MRI, echocardiogram, PFTs, HRCT, full skin/neurologic exam, and symptom diary review. Document final imatinib molecular response status (sustained molecular response if 24+ months undetectable transcript) for treatment-free remission discussion. Renew biologic prior authorizations and dose-spacing decisions with provider. Submit annual HES Alliance and UCAN registry updates if applicable. Sit down with patient to refresh next-year care plan, education priorities, and self-management goals.",
  },
]

const kpis = [
  {
    metric: "Monthly",
    target: "AEC + CBC",
    description: "Eosinophil trending toward <1,500 cells/microliter biologic response target",
  },
  {
    metric: "100%",
    target: "Injection On-Time",
    description: "Mepolizumab Q4 weeks and benralizumab Q4-8 weeks adherence tracking",
  },
  {
    metric: "Quarterly",
    target: "FIP1L1-PDGFRA RT-PCR",
    description: "Molecular monitoring for imatinib-treated chronic eosinophilic leukemia",
  },
  {
    metric: "Annual",
    target: "Cardiac MRI",
    description: "Loffler endocarditis surveillance coordinated with cardiology partners",
  },
  {
    metric: ">=90%",
    target: "Self-Injection Training",
    description: "HES patients transitioned to home mepolizumab/benralizumab administration",
  },
  {
    metric: "100%",
    target: "UCAN/HES Alliance",
    description: "Patients connected to peer support, advocacy, and clinical trial resources",
  },
]

const testimonial = {
  quote:
    "HES patients live between hematology, allergy-immunology, and cardiology — and the NP is usually the one stitching it all together. Momenties keeps every monthly CBC, mepolizumab injection, FIP1L1-PDGFRA transcript, cardiac MRI, and INR check on a single timeline. I stopped chasing labs and reschedules and started actually teaching my patients about their disease. Our self-injection conversion rate jumped, breakthrough eosinophilia dropped, and our cardiology partners finally trust that surveillance imaging shows up on time.",
  name: "Nicole W., AGPCNP-BC",
  title: "Eosinophil Disorders NP, Academic Allergy-Immunology Program",
}

export default function HypereosinophilicSyndromeNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="HES Nurse Practitioners"
        title="HES Nurse Practitioners — Scheduling for Rare Eosinophil Overproduction Disorders"
        subtitle="Purpose-built for NPs coordinating HES care — from mepolizumab/benralizumab injection logistics and eosinophil trending to cardiac surveillance coordination, imatinib monitoring, and patient education."
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
            Built Around the HES NP Workflow
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
              The HES NP Year — Month by Month
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 56,
                fontSize: "0.97rem",
              }}
            >
              Every monthly CBC, biologic injection, cardiac MRI booking, imatinib molecular check, and patient education touchpoint — sequenced across 12 months.
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
              The 6 KPIs That Define HES NP Excellence
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
