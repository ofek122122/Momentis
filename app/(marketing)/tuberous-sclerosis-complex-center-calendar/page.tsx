import type { Metadata } from "next"
import {
  Stethoscope,
  Brain,
  Activity,
  Zap,
  Calendar,
  Clock,
  Target,
  Users2,
  ClipboardList,
  Heart,
  Eye,
  ShieldCheck,
} from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title:
    "Tuberous Sclerosis Complex Center Calendar — mTOR Therapy & Multidisciplinary Surveillance | Momentis",
  description:
    "Comprehensive scheduling for TSC centers — everolimus/sirolimus mTOR inhibitor monitoring, brain/kidney/lung tumor surveillance, epilepsy management, neurodevelopmental assessments, and multidisciplinary annual reviews.",
}

const pillars = [
  {
    icon: Activity,
    title: "mTOR Inhibitor Therapy Monitoring",
    description:
      "Everolimus (Afinitor) compliance for SEGA, renal angiomyolipoma (AML), and lymphangioleiomyomatosis (LAM); sirolimus off-label dosing schedules; trough level draws every 2–4 weeks during initiation, then every 3 months at steady state (target 5–15 ng/mL); CBC, LFTs, lipids, glucose, and urinalysis tracking; toxicity surveillance for stomatitis, infections, hyperlipidemia, pneumonitis, and amenorrhea; TSC1/TSC2 mutation testing and genetic counselor coordination.",
  },
  {
    icon: Brain,
    title: "Brain & CNS Tumor Surveillance",
    description:
      "Brain MRI every 1–3 years for subependymal giant cell astrocytoma (SEGA) growth and ventricular obstruction; baseline and follow-up neurology consultations; SEGA volumetric measurement protocols; neurosurgery referral pathways for symptomatic or growing lesions; coordination with everolimus initiation for tumor reduction; tuber burden assessment; cortical dysplasia mapping for epilepsy surgery candidates.",
  },
  {
    icon: ShieldCheck,
    title: "Kidney, Lung & Skin Surveillance",
    description:
      "Renal ultrasound or MRI every 1–3 years for angiomyolipoma surveillance with intervention threshold at >3 cm or aneurysmal features; CT chest with TLC/DLCO for LAM screening in adolescent and adult females; dermatology visits for facial angiofibromas, shagreen patches, hypomelanotic macules, and ungual fibromas; renal function panel and urinalysis; pulmonary function tests annually for LAM-positive patients.",
  },
  {
    icon: Zap,
    title: "Epilepsy & Neurodevelopmental Management",
    description:
      "EEG and routine seizure medication management with vigabatrin for infantile spasms; cannabidiol (Epidiolex) for refractory seizures; ketogenic diet coordination; TAND (TSC-Associated Neuropsychiatric Disorders) annual screening checklist; neuropsychology batteries for IQ and adaptive behavior; ophthalmology visits for retinal hamartomas; cardiology echocardiograms for rhabdomyoma regression in infants and toddlers; multidisciplinary annual review coordination.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnostic Workup & TSC1/TSC2 Confirmation",
    description:
      "Confirm clinical diagnosis per 2012 International TSC Consensus criteria (major and minor features), obtain TSC1/TSC2 sequencing and deletion/duplication analysis, complete baseline brain MRI, renal ultrasound, ophthalmology exam, dermatology mapping, echocardiogram in infants, and EEG. Establish multidisciplinary care team and assign care coordinator.",
  },
  {
    month: "Month 3–4",
    title: "Baseline mTOR Eligibility & SEGA Assessment",
    description:
      "Volumetric SEGA measurement on MRI to determine everolimus eligibility, baseline labs (CBC, CMP, fasting lipid panel, glucose, urinalysis), hepatitis B serologies, and pregnancy test for women of childbearing age. Initiate everolimus 4.5 mg/m²/day with first trough draw at week 2 and dose titration to 5–15 ng/mL.",
  },
  {
    month: "Month 5–6",
    title: "Seizure Optimization & TAND Baseline",
    description:
      "Optimize antiseizure medications, assess vigabatrin response in infantile spasms (3-month visual field assessment), establish ketogenic diet for refractory cases, complete baseline TAND checklist, neuropsychology testing for IQ and adaptive behavior, and school accommodation planning. Coordinate epilepsy surgery evaluation for refractory focal seizures.",
  },
  {
    month: "Month 7–8",
    title: "Renal AML & LAM Surveillance",
    description:
      "Repeat renal MRI for angiomyolipoma size tracking with intervention referral if AML >3 cm with aneurysmal features. Schedule CT chest with PFTs in adolescent and adult females for LAM screening. Coordinate interventional radiology for selective embolization candidates and pulmonology consultation for LAM-positive patients.",
  },
  {
    month: "Month 9–10",
    title: "Skin, Eye & Cardiac Reassessment",
    description:
      "Dermatology visit for facial angiofibroma topical sirolimus response, shagreen patch and ungual fibroma documentation, ophthalmology dilated exam for retinal hamartomas, repeat echocardiogram for rhabdomyoma regression in infants and young children, and routine cardiology follow-up. Update genetic counseling for family planning discussions.",
  },
  {
    month: "Month 11–12",
    title: "Annual Multidisciplinary Review & Care Plan Refresh",
    description:
      "Comprehensive annual TSC clinic visit with neurology, nephrology, pulmonology, dermatology, cardiology, ophthalmology, and genetics. Re-administer TAND checklist, review everolimus tolerability and trough trends, update individualized surveillance plan per 2021 International TSC Surveillance and Management Recommendations, and coordinate adolescent transition planning.",
  },
]

const kpis = [
  {
    metric: "≥90%",
    target: "Everolimus trough in target range",
    description:
      "Patients on mTOR inhibitor therapy maintaining steady-state troughs between 5–15 ng/mL with minimal grade 3+ toxicity events.",
  },
  {
    metric: "100%",
    target: "Annual TAND screening completion",
    description:
      "All TSC patients receiving annual TSC-Associated Neuropsychiatric Disorders checklist administration and documented follow-up referrals.",
  },
  {
    metric: "≤3 yrs",
    target: "Brain MRI interval adherence",
    description:
      "Pediatric and adolescent patients receiving SEGA surveillance imaging at intervals consistent with consensus recommendations.",
  },
  {
    metric: ">50%",
    target: "SEGA volume reduction on everolimus",
    description:
      "Eligible patients achieving meaningful SEGA volumetric response within 12 months of mTOR inhibitor initiation.",
  },
  {
    metric: "100%",
    target: "Female adolescent LAM screening",
    description:
      "All female TSC patients receiving baseline CT chest and PFTs by age 18 with annual symptom review and follow-up imaging as indicated.",
  },
  {
    metric: "≥95%",
    target: "Annual multidisciplinary review attendance",
    description:
      "Patients completing the annual coordinated multidisciplinary TSC clinic visit with all required subspecialty assessments documented.",
  },
]

const testimonial = {
  quote:
    "TSC care touches every organ system — brain, kidney, lung, skin, heart, and eyes — and missing a single surveillance interval can change a child's trajectory. Momentis gave our center one calendar that holds everolimus troughs, MRI intervals, TAND screens, LAM CTs, and the annual multidisciplinary review together. Our families finally feel that nothing falls through the cracks.",
  name: "Dr. J. Bissler",
  title: "TSC Center Director, Tuberous Sclerosis Alliance Center",
}

export default function TuberousSclerosisComplexCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Tuberous Sclerosis Complex Center Calendar"
        title="Tuberous Sclerosis Complex Center — Surveillance, mTOR Therapy & Multidisciplinary Calendar"
        subtitle="Comprehensive scheduling for TSC centers — everolimus/sirolimus mTOR inhibitor monitoring, brain/kidney/lung tumor surveillance, epilepsy management, neurodevelopmental assessments, and multidisciplinary annual reviews."
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
            Built for the Full TSC Multidisciplinary Care Lifecycle
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 24,
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
              The TSC Surveillance Year — Month by Month
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 48,
                fontSize: "0.97rem",
              }}
            >
              Every mTOR trough, MRI interval, TAND assessment, and multidisciplinary touchpoint sequenced across 12 months.
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
                    padding: "24px 28px",
                    alignItems: "start",
                  }}
                >
                  <div
                    style={{
                      color: "#c5a35c",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {item.month}
                  </div>
                  <div>
                    <div
                      style={{
                        color: "#f0ece3",
                        fontWeight: 600,
                        fontSize: "1rem",
                        marginBottom: 8,
                      }}
                    >
                      {item.title}
                    </div>
                    <p
                      style={{
                        color: "rgba(240,236,227,0.65)",
                        fontSize: "0.92rem",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
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
              The 6 KPIs That Define TSC Center Excellence
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
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
                      fontSize: "0.95rem",
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
        <section style={{ padding: "40px 24px 80px" }}>
          <blockquote
            style={{
              maxWidth: 820,
              margin: "0 auto",
              background: "#131318",
              border: "1px solid rgba(197,163,92,0.25)",
              borderRadius: 16,
              padding: "40px 36px",
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                color: "#c5a35c",
                lineHeight: 1,
                marginBottom: 16,
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
