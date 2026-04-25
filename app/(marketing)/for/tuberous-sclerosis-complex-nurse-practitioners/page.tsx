import type { Metadata } from "next"
import {
  Stethoscope,
  Zap,
  ClipboardList,
  Users2,
  Calendar,
  Clock,
  Heart,
  BookOpen,
  Target,
  Bell,
  UserCheck,
  Workflow,
} from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title:
    "TSC Nurse Practitioners — Scheduling for a Complex Multi-System Genetic Disorder | Momentis",
  description:
    "Purpose-built for NPs coordinating TSC care — from everolimus trough monitoring and seizure management to renal/brain surveillance coordination, TAND assessments, and annual multidisciplinary reviews.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "mTOR Inhibitor Coordination & Monitoring",
    description:
      "Everolimus dose adjustment by trough level (target 5–15 ng/mL) and toxicity profile (stomatitis, infections, hyperlipidemia, pneumonitis, amenorrhea); CBC, LFTs, fasting lipids, glucose, and urinalysis tracking; pre-dose timing reminders for accurate trough draws; pregnancy testing and counseling for women of childbearing age; coordination of dose holds for surgery, immunizations, and intercurrent infections.",
  },
  {
    icon: Zap,
    title: "Seizure Management & EEG Coordination",
    description:
      "Vigabatrin initiation and 3-month visual field assessments for infantile spasms; cannabidiol (Epidiolex) titration for refractory seizures; ketogenic diet onboarding with dietitian; rescue medication training (rectal diazepam, intranasal midazolam); EEG scheduling for breakthrough events; epilepsy surgery referral coordination; seizure diary review at every visit.",
  },
  {
    icon: ClipboardList,
    title: "Multi-Organ Surveillance Scheduling",
    description:
      "Renal ultrasound and MRI scheduling with angiomyolipoma size tracking and >3 cm intervention threshold flagging; brain MRI intervals for SEGA; CT chest with PFTs for LAM follow-up in adolescent and adult women; ophthalmology dilated exams for retinal hamartomas; dermatology visits for facial angiofibroma topical sirolimus response; echocardiograms for rhabdomyoma surveillance in young children.",
  },
  {
    icon: Users2,
    title: "TAND Assessment & Family Support",
    description:
      "Annual TAND checklist administration at multidisciplinary review visits; neuropsychology referral coordination for IQ and adaptive behavior testing; pulmonology connection for LAM-positive women; school accommodation letters and IEP/504 planning support; TSC Alliance resource navigation and family education; adolescent transition planning to adult TSC programs and adult subspecialty teams.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Intake, Diagnosis Confirmation & Care Team Assembly",
    description:
      "Review TSC1/TSC2 genetic testing results with families, document clinical diagnostic criteria, schedule baseline brain MRI, renal ultrasound, echocardiogram (in young children), ophthalmology, dermatology, and EEG. Build the patient's individualized surveillance schedule and connect family to TSC Alliance peer resources.",
  },
  {
    month: "Month 3–4",
    title: "Everolimus Initiation & Baseline Labs",
    description:
      "Coordinate baseline CBC, CMP, fasting lipid panel, glucose, urinalysis, hepatitis B serologies, and pregnancy testing. Initiate everolimus per neurologist or nephrologist orders, schedule first trough at week 2, and educate families on stomatitis prophylaxis (dexamethasone mouthwash) and infection precautions.",
  },
  {
    month: "Month 5–6",
    title: "Seizure Optimization & Rescue Plan Education",
    description:
      "Review seizure diaries, optimize ASM regimens, complete vigabatrin visual field check at 3 months, train caregivers on rescue medications, and coordinate ketogenic diet for refractory cases. Schedule epilepsy surgery evaluation referrals as indicated and update school seizure action plans.",
  },
  {
    month: "Month 7–8",
    title: "Renal AML Tracking & LAM Follow-up",
    description:
      "Schedule renal MRI for AML size tracking and flag patients crossing the >3 cm threshold for interventional radiology referral. Coordinate CT chest and PFTs for LAM follow-up in adolescent and adult women, review pulmonology recommendations, and update reproductive health counseling.",
  },
  {
    month: "Month 9–10",
    title: "Skin, Eye & Cardiac Reassessment",
    description:
      "Coordinate dermatology visits for facial angiofibroma topical sirolimus response and skin lesion documentation, schedule ophthalmology dilated exams, and arrange echocardiograms for rhabdomyoma regression in younger patients. Update genetic counseling for family planning conversations.",
  },
  {
    month: "Month 11–12",
    title: "TAND Re-Screen & Annual Review Prep",
    description:
      "Administer the TAND checklist, schedule neuropsychology testing for IQ and adaptive behavior, draft school accommodation letters, prepare adolescents for adult-program transition, and coordinate the annual multidisciplinary clinic visit so every subspecialty assessment is captured in one care plan refresh.",
  },
]

const kpis = [
  {
    metric: "100%",
    target: "TAND screening at annual review",
    description:
      "Every TSC patient receives an administered TAND checklist with documented action items and referrals before leaving the annual visit.",
  },
  {
    metric: "≥95%",
    target: "Everolimus trough draw on time",
    description:
      "Trough labs drawn within the correct pre-dose window so dose adjustments are based on accurate steady-state levels, not mistimed samples.",
  },
  {
    metric: "<2 weeks",
    target: "AML >3 cm referral to IR",
    description:
      "Patients with renal angiomyolipomas crossing the 3 cm intervention threshold receive interventional radiology referral within two weeks of imaging.",
  },
  {
    metric: "100%",
    target: "Female adolescent LAM baseline",
    description:
      "All female patients receive baseline CT chest and PFTs by age 18 with documented pulmonology connection if findings are positive.",
  },
  {
    metric: "≥90%",
    target: "Vigabatrin visual field follow-up",
    description:
      "Pediatric patients on vigabatrin complete 3-month visual field or ERG monitoring and have findings communicated back to the prescriber.",
  },
  {
    metric: ">85%",
    target: "Adolescent transition packet completion",
    description:
      "Patients aged 16+ have a completed transition packet covering adult TSC program connections, subspecialty handoffs, and family planning resources.",
  },
]

const testimonial = {
  quote:
    "As an NP coordinating TSC care, I'm holding everolimus troughs, seizure rescue plans, renal MRIs, LAM CTs, TAND screens, and school letters all at once. Momentis became the place where every reminder lives — so I can spend visits with families instead of reconstructing schedules. Our adolescents now transition to adult TSC programs with everything documented.",
  name: "Nicole B., CPNP-PC",
  title: "TSC NP, Neurology and Genetics Program",
}

export default function TuberousSclerosisComplexNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="TSC Nurse Practitioners"
        title="TSC Nurse Practitioners — Scheduling for a Complex Multi-System Genetic Disorder"
        subtitle="Purpose-built for NPs coordinating TSC care — from everolimus trough monitoring and seizure management to renal/brain surveillance coordination, TAND assessments, and annual multidisciplinary reviews."
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
            Built for the NP Coordinating TSC Across Every System
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
              The TSC NP Year — Month by Month
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 48,
                fontSize: "0.97rem",
              }}
            >
              Every trough, surveillance touchpoint, TAND screen, and family-support task — sequenced across 12 months.
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
              The 6 KPIs That Define TSC NP Excellence
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
