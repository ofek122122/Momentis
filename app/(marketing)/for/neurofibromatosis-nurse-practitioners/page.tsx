import type { Metadata } from "next"
import {
  Stethoscope,
  Calendar,
  BookOpen,
  Users2,
  ClipboardList,
  Bell,
  Heart,
  Shield,
  CheckCircle,
  UserCheck,
  Workflow,
  Target,
} from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title:
    "Neurofibromatosis Nurse Practitioners — NF1, NF2 & Schwannomatosis Scheduling | Momenties",
  description:
    "Purpose-built for NPs coordinating NF care — from selumetinib dosing and MEK inhibitor toxicity monitoring to plexiform neurofibroma MRI coordination, MPNST surveillance, and annual multidisciplinary reviews.",
}

const pillars = [
  {
    icon: Stethoscope,
    title: "MEK Inhibitor Coordination & Toxicity",
    description:
      "Selumetinib dose calculation at 25 mg/m² PO BID with BSA recalculation at every growth check, capsule-handling counseling, fasting windows, and missed-dose rules built into patient-facing reminders. NP-led toxicity workflows for acneiform rash (topical clindamycin, doxycycline, dose holds), paronychia wound care referrals, CPK trending, ophthalmology follow-up for blurred vision, ECHO ejection fraction reviews, and standardized dose-modification triggers tied directly to lab and symptom calendars.",
  },
  {
    icon: ClipboardList,
    title: "MRI Surveillance Scheduling",
    description:
      "Volumetric plexiform neurofibroma MRI every 4 months with paired NF center radiologist reads, optic pathway glioma MRI every 3–6 months coordinated with neuro-ophthalmology vision check, OCT, and visual field, whole-body MRI for high-risk MPNST surveillance, and annual NF2 brain plus full-spine MRI. Sedation scheduling for pediatrics, contrast pre-screening, and side-by-side comparison reads queued so families never lose a window.",
  },
  {
    icon: BookOpen,
    title: "Learning & Cognitive Assessment",
    description:
      "Annual neuropsychology and learning assessment for NF1 children, IEP and 504 plan referral coordination, ADHD evaluation tracking, and school re-entry letters after surgery or MEK inhibitor toxicity. Adolescent transition checklist with adult NF program handoff, vocational counseling, and reproductive genetic counseling all queued into the same shared NP calendar.",
  },
  {
    icon: Users2,
    title: "Multidisciplinary Care Coordination",
    description:
      "Single NP-owned calendar bridging neurology, neurosurgery, neuro-oncology, ophthalmology (Lisch nodules, OPG vision), audiology, dermatology (cutaneous neurofibroma surveillance), pain medicine for schwannomatosis, genetics (NF1, NF2, SMARCB1, LZTR1), psychosocial support for disfiguring tumors, and family liaison with the Children's Tumor Foundation. Annual multidisciplinary review pre-built so nothing slips between subspecialty visits.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Diagnostic Confirmation & NP Intake",
    description:
      "Confirm NF1, NF2, or schwannomatosis with NIH/NCI criteria and germline genetics. NP-led intake covers tumor mapping, learning history, pain pattern, hearing, and vision. Schedule baseline volumetric MRI, audiogram, neuro-ophthalmology, dermatology cutaneous neurofibroma mapping, and connect family to the Children's Tumor Foundation and local NF chapter.",
  },
  {
    month: "Month 3–4",
    title: "MEK Inhibitor Initiation & Education",
    description:
      "BSA-based selumetinib dose calculation, capsule-handling and fasting education, antiemetic plan, and rash prophylaxis counseling. Cycle 1 ECHO, ophthalmology baseline, monthly LFT and CK lab orders. NP-led weekly check-in calls during the first month for toxicity capture and dose-hold decisions, with rapid dermatology and ophthalmology slots pre-reserved.",
  },
  {
    month: "Month 5–6",
    title: "First Response Read & Symptom PROs",
    description:
      "First on-treatment volumetric plexiform neurofibroma MRI at 4 months with REiNS read; pain, motor function, disfigurement, and quality-of-life PROs collected by NP at clinic. OPG MRI plus vision assessment for OPG cohort. Continue monthly MEK toxicity labs and dermatology paronychia or rash visits as needed.",
  },
  {
    month: "Month 7–8",
    title: "MPNST Vigilance & Pain Coordination",
    description:
      "NP-led red-flag review — new persistent pain, rapid growth, neurologic deficit, or hard nodule — triggers whole-body MRI plus FDG-PET and image-guided biopsy coordination. Pain medicine referral for schwannomatosis patients. Ophthalmology check for Lisch nodule progression and cataract screening for NF2 patients on bevacizumab.",
  },
  {
    month: "Month 9–10",
    title: "NF2 Hearing & Cutaneous NF Care",
    description:
      "Annual NF2 audiogram, AAO-HNS hearing class, word recognition score, and bevacizumab infusion scheduling with BP and urine protein checks. Adult NF1 dermatology block for cutaneous neurofibroma counts, electrodessication, and laser planning. Psychosocial support visits scheduled for patients with disfiguring tumors and body-image concerns.",
  },
  {
    month: "Month 11–12",
    title: "Annual Review & Adolescent Transition",
    description:
      "NP coordinates the annual multidisciplinary NF review — imaging, genetics update, neuropsychology, IEP renewal, dermatology, audiology, and pain plan. Adolescent transition packet to adult NF program, reproductive genetic counseling, and Children's Tumor Foundation educational resources delivered. Calendar rolls forward to the next 12-month surveillance cycle.",
  },
]

const kpis = [
  {
    metric: "Selumetinib Adherence",
    target: "≥90%",
    description:
      "BSA-recalculated dose adherence captured by pill counts and pharmacy refill data for NF1 pediatric patients on selumetinib over each 12-month review window.",
  },
  {
    metric: "Toxicity Documentation",
    target: "100%",
    description:
      "Monthly CTCAE grading of rash, paronychia, GI symptoms, CPK, LFTs, and ophthalmology review documented in the NP note for every patient on MEK inhibitor therapy.",
  },
  {
    metric: "MRI On-Time Rate",
    target: "≥95%",
    description:
      "Volumetric plexiform neurofibroma, OPG, and whole-body MPNST surveillance MRIs completed within the planned interval, with sedation and contrast logistics handled by the NP team.",
  },
  {
    metric: "Learning Assessment",
    target: "100% Annual",
    description:
      "Annual neuropsychology or formal learning assessment completed for every NF1 pediatric patient, with IEP or 504 letters generated and sent to schools by the NP.",
  },
  {
    metric: "NF2 Audiogram",
    target: "100% Annual",
    description:
      "Annual audiogram with hearing class and word recognition documented for every NF2 and schwannomatosis patient, with bevacizumab eligibility re-reviewed each year.",
  },
  {
    metric: "Transition Readiness",
    target: "≥85%",
    description:
      "Adolescent NF1 patients aged 16–21 with completed transition checklist — adult NF program identified, reproductive counseling, vocational referral, and self-management plan.",
  },
]

const testimonial = {
  quote:
    "An NF nurse practitioner is the connective tissue of the program — selumetinib BSA recalculations, rash and paronychia triage, MRI scheduling for plexiform and OPG, MPNST red-flag reviews, NF2 audiograms, IEP letters for school, and annual multidisciplinary reviews. Momenties gave me one calendar that holds every cycle, every dose hold, every learning assessment, and every transition milestone — and finally lets me focus on the family in front of me.",
  name: "Laura M., CPNP-PC",
  title: "NF NP, Comprehensive Neurofibromatosis Program",
}

export default function NeurofibromatosisNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="NF Nurse Practitioners"
        title="Neurofibromatosis NPs — Scheduling for NF1, NF2 & Schwannomatosis Management"
        subtitle="Purpose-built for NPs coordinating NF care — from selumetinib dosing and MEK inhibitor toxicity monitoring to plexiform neurofibroma MRI coordination, MPNST surveillance, and annual multidisciplinary reviews."
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
            Four Pillars of NF Nurse Practitioner Scheduling
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
              The 12-Month NF NP Cadence
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 48,
                fontSize: "0.97rem",
              }}
            >
              Every selumetinib cycle, MRI window, audiogram, learning assessment, and multidisciplinary touchpoint — sequenced across the year.
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
                    padding: "22px 26px",
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
                        fontSize: "0.97rem",
                        marginBottom: 6,
                      }}
                    >
                      {item.title}
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
              Six KPIs That Define NF NP Excellence
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
                    borderRadius: 12,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      color: "#c5a35c",
                      fontFamily: "Playfair Display, serif",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      marginBottom: 4,
                    }}
                  >
                    {kpi.target}
                  </div>
                  <div
                    style={{
                      color: "#f0ece3",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      marginBottom: 8,
                    }}
                  >
                    {kpi.metric}
                  </div>
                  <p
                    style={{
                      color: "rgba(240,236,227,0.65)",
                      fontSize: "0.88rem",
                      lineHeight: 1.55,
                      margin: 0,
                    }}
                  >
                    {kpi.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section style={{ padding: "20px 24px 40px" }}>
          <blockquote
            style={{
              maxWidth: 880,
              margin: "0 auto",
              background: "#131318",
              border: "1px solid rgba(197,163,92,0.25)",
              borderRadius: 16,
              padding: "40px 44px",
            }}
          >
            <div
              style={{
                fontSize: "2.5rem",
                color: "#c5a35c",
                lineHeight: 1,
                marginBottom: 12,
              }}
            >
              &ldquo;
            </div>
            <p
              style={{
                color: "#f0ece3",
                fontSize: "clamp(1rem,1.6vw,1.15rem)",
                lineHeight: 1.7,
                fontStyle: "italic",
                margin: "0 0 24px",
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
