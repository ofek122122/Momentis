import type { Metadata } from "next"
import {
  Stethoscope,
  Target,
  Shield,
  Bell,
  Calendar,
  Workflow,
  ClipboardList,
  BarChart3,
  Heart,
  Users2,
  CheckCircle,
  Award,
} from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title:
    "Neurofibromatosis Center Calendar — MEK Inhibitor & Tumor Surveillance | Momenties",
  description:
    "Comprehensive scheduling for NF centers — selumetinib and mirdametinib MEK inhibitor monitoring for NF1-associated plexiform neurofibromas, optic pathway glioma surveillance, MPNST risk assessment, hearing surveillance for NF2/schwannomatosis, and annual multidisciplinary reviews.",
}

const pillars = [
  {
    icon: Target,
    title: "MEK Inhibitor Therapy Monitoring",
    description:
      "Selumetinib (Koselugo) — FDA-approved for NF1-associated plexiform neurofibromas in patients ≥3 years — dosed at 25 mg/m² PO BID with formal monitoring of MEK inhibitor class toxicities including acneiform rash, paronychia, CPK elevation, asymptomatic LV ejection fraction decline, ocular toxicity (CSR/RVO), and GI side effects. Mirdametinib (Gomekli) coordination for adult NF1 plexiform neurofibroma patients with monthly LFT, CK, and ECHO/MUGA cadence. Baseline ophthalmology, cardiology echo, and dermatology reviews wired into the calendar before Cycle 1 Day 1.",
  },
  {
    icon: ClipboardList,
    title: "Plexiform Neurofibroma & OPG Surveillance",
    description:
      "Volumetric MRI of target plexiform neurofibroma lesions every 4 months on MEK inhibitor therapy with response assessment per REiNS criteria; optic pathway glioma (OPG) MRI every 3–6 months with paired neuro-ophthalmology vision check, visual field, and OCT. Standardized imaging protocols, contrast timing, sedation coordination for pediatrics, and side-by-side volumetric comparison reads sequenced so families never miss a surveillance window.",
  },
  {
    icon: Shield,
    title: "MPNST Risk Assessment & Management",
    description:
      "Whole-body MRI screening for high-risk NF1 patients with internal nodular plexiform neurofibromas, atypical neurofibromas (ANNUBP), or rapid pain/growth — paired with FDG-PET for SUVmax thresholds and image-guided biopsy coordination when MPNST is suspected. Multidisciplinary tumor board scheduling with sarcoma surgery, radiation oncology, and medical oncology. Annual constitutional NF1 NGS review for somatic CDKN2A/B and SUZ12/EED loss tracked alongside imaging cadence.",
  },
  {
    icon: Heart,
    title: "NF2/Schwannomatosis Hearing & Tumor Care",
    description:
      "NF2 vestibular schwannoma surveillance — annual brain and full-spine MRI, audiogram every 12 months with word recognition score and AAO-HNS hearing class, and bevacizumab infusion scheduling for hearing preservation in eligible patients. Schwannomatosis genetic workup (SMARCB1, LZTR1) coordinated with pain medicine and neurosurgery. Dermatology cutaneous neurofibroma surveillance, and annual cognitive/learning assessment for pediatric patients all sequenced into one program-wide calendar.",
  },
]

const timeline = [
  {
    month: "Month 1–2",
    title: "Intake, Genetics & Baseline Workup",
    description:
      "Confirm NF1, NF2, or schwannomatosis diagnosis with NCI/NIH criteria and germline genetics (NF1, NF2, SMARCB1, LZTR1). Schedule baseline whole-body MRI for high-risk NF1, brain/spine MRI for NF2, neuro-ophthalmology (Lisch nodules, OPG vision), audiogram, dermatology mapping of cutaneous neurofibromas, and cardiology echo plus ophthalmology pre-MEK inhibitor screening.",
  },
  {
    month: "Month 3–4",
    title: "MEK Inhibitor Cycle 1 & Toxicity Monitoring",
    description:
      "Initiate selumetinib 25 mg/m² BID (or mirdametinib for adults) with weekly toxicity check-ins for acneiform rash, paronychia, GI symptoms, and CPK trends. Cycle 1 ECHO/MUGA, monthly LFT, CK, and ophthalmology review for CSR/RVO. Wire dermatology rapid-access slots and pharmacy dose-hold protocols directly into the calendar so toxicity events do not stall therapy.",
  },
  {
    month: "Month 5–6",
    title: "First Volumetric Response Assessment",
    description:
      "First on-treatment volumetric plexiform neurofibroma MRI at 4 months with REiNS response criteria read; OPG MRI at 3–6 months with neuro-ophthalmology vision, visual field, and OCT. Multidisciplinary review of pain, motor, and disfigurement PROs. Continue monthly MEK inhibitor labs, dermatology checks, and pediatric growth/puberty tracking on schedule.",
  },
  {
    month: "Month 7–8",
    title: "MPNST Surveillance & Whole-Body MRI",
    description:
      "Whole-body MRI for high-risk NF1 patients with internal nodular plexiform neurofibromas or atypical features, paired with FDG-PET when SUVmax discrimination is needed. Image-guided biopsy coordination and sarcoma tumor board slots reserved. NF2 cohort receives interim brain MRI and audiogram if symptoms or growth flagged at last review.",
  },
  {
    month: "Month 9–10",
    title: "NF2 Hearing Preservation & Bevacizumab",
    description:
      "Annual NF2 audiogram with AAO-HNS hearing class and word recognition score; bevacizumab infusion scheduling for eligible patients with growing vestibular schwannoma or threatened hearing, including BP, urine protein, and wound surveillance. Schwannomatosis pain plan review with pain medicine and neurosurgery. Cutaneous neurofibroma dermatology block scheduled for adult NF1 patients.",
  },
  {
    month: "Month 11–12",
    title: "Annual Multidisciplinary Review",
    description:
      "Annual NF center multidisciplinary review — neurology, neurosurgery, neuro-oncology, ophthalmology, audiology, dermatology, genetics, pain medicine, and psychosocial support. Repeat volumetric MRI, OPG MRI, audiogram, whole-body MRI for high-risk patients, and cognitive/learning assessment for children. Update care plan, transition adolescents to adult NF program, and reset 12-month surveillance cycle.",
  },
]

const kpis = [
  {
    metric: "Selumetinib Response",
    target: "≥66% PR",
    description:
      "Volumetric plexiform neurofibroma partial response rate at 12 months on selumetinib per REiNS criteria, benchmarked against SPRINT trial outcomes for NF1 pediatric patients.",
  },
  {
    metric: "MRI Adherence",
    target: "≥95%",
    description:
      "On-time completion of Q4-month volumetric plexiform neurofibroma MRI and Q3–6 month optic pathway glioma MRI for all patients on active surveillance or therapy.",
  },
  {
    metric: "Audiogram Cadence",
    target: "100% Annual",
    description:
      "Annual audiogram with AAO-HNS hearing class and word recognition score completed for every NF2 and schwannomatosis patient on the active surveillance roster.",
  },
  {
    metric: "MPNST Time-to-Biopsy",
    target: "≤14 days",
    description:
      "Median time from imaging or PET red-flag finding to image-guided biopsy and sarcoma tumor board review for suspected MPNST in high-risk NF1 patients.",
  },
  {
    metric: "MEK Toxicity Capture",
    target: "100%",
    description:
      "Documented monthly CTCAE grading of rash, paronychia, CPK, ECHO ejection fraction, ocular toxicity, and GI symptoms for every patient on selumetinib or mirdametinib.",
  },
  {
    metric: "Annual MDC Review",
    target: "≥90%",
    description:
      "Patients receiving a complete annual NF multidisciplinary review including imaging, genetics update, learning assessment, and transition planning when age-appropriate.",
  },
]

const testimonial = {
  quote:
    "Running an NF center means juggling MEK inhibitor toxicity calls, plexiform MRI volumetrics every four months, optic pathway glioma vision checks, whole-body MRI for MPNST risk, NF2 audiograms, bevacizumab infusions, and annual multidisciplinary reviews — all without dropping a child waiting on a learning assessment or an adult facing a cutaneous neurofibroma decision. Momenties became the single source of truth across every clinic, scanner, and lab in our program.",
  name: "Dr. V. Mautner",
  title: "NF Center Director, Neurofibromatosis Program",
}

export default function NeurofibromatosisCenterCalendarPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="Neurofibromatosis Center Calendar"
        title="Neurofibromatosis Center — Tumor Surveillance & MEK Inhibitor Calendar"
        subtitle="Comprehensive scheduling for NF centers — selumetinib and mirdametinib MEK inhibitor monitoring for NF1-associated plexiform neurofibromas, optic pathway glioma surveillance, MPNST risk assessment, hearing surveillance for NF2/schwannomatosis, and annual multidisciplinary reviews."
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
            Four Pillars of NF Center Scheduling
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
              The 12-Month NF Center Cadence
            </h2>
            <p
              style={{
                textAlign: "center",
                color: "rgba(240,236,227,0.65)",
                marginBottom: 48,
                fontSize: "0.97rem",
              }}
            >
              Every MEK inhibitor cycle, MRI surveillance interval, audiogram, and multidisciplinary review — sequenced across the year.
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
              Six KPIs That Define NF Program Excellence
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
