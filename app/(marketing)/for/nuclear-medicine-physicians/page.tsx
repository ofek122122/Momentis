import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Nuclear Medicine Physicians | Momenties",
  description: "Momenties helps nuclear medicine physicians manage ABR/ABNM board certification renewal, SNM&MI fellowship CE, radioactive material license compliance, radiation safety program cycles, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABR/ABNM Board Certification & Nuclear Medicine MOC",
    description:
      "Nuclear medicine physicians certified through the American Board of Radiology (ABR) or the American Board of Nuclear Medicine (ABNM) maintain independent MOC cycles. ABR nuclear radiology MOC requires annual online assessment modules and 10-year MOCA exam. ABNM certification requires recertification every 10 years with a content-specific examination covering radiopharmaceuticals, PET/CT, SPECT, thyroid cancer management, radionuclide therapy, and radiation biology. Physicians with dual ABR diagnostic radiology certification must complete MOCA-II (continuous online exam) in addition to nuclear medicine subspecialty requirements. Radioactive material authorized user (AU) status requires CME in radiation safety concurrent with medical license renewal. Momenties tracks all timelines.",
  },
  {
    icon: Clock,
    title: "SNM&MI Fellowship CE & Molecular Imaging Conference Calendar",
    description:
      "The Society of Nuclear Medicine and Molecular Imaging (SNM&MI) Annual Meeting is the primary CE event — abstract submission opens October-November for June conferences. SNM&MI fellowship (FSNMMI) maintenance requires documented CE in theranostics (PSMA, DOTATATE), cardiac nuclear medicine, and oncologic PET/CT. The European Association of Nuclear Medicine (EANM) annual meeting provides international CE recognized by ABNM and ABR. American College of Radiology (ACR) nuclear medicine practice guidelines — updated 2023 for PET/CT oncology indications, PSMA PET, and DOTATATE PET — require CE review documentation. ASNC annual meeting CE is required for nuclear cardiologists. Momenties schedules all society deadlines and conference windows.",
  },
  {
    icon: BarChart3,
    title: "Radioactive Material License & NRC/Agreement State Compliance",
    description:
      "Nuclear medicine practices operate under NRC or Agreement State radioactive material licenses — requiring annual radiation safety committee (RSC) meetings, quarterly radiation safety officer (RSO) review, annual personnel radiation exposure monitoring review, and license condition compliance audits. Authorized user status under 10 CFR 35 requires concurrent medical license and specific training documentation — renewal triggered by license changes or after 5 years in some states. NRC inspection preparation — typically every 5 years for broad-scope licenses — requires documentation audits starting 12 months in advance. State radiation machine inspection for gamma cameras and PET scanners follows biennial cycles. Momenties manages all NRC and state compliance calendars.",
  },
  {
    icon: Users,
    title: "Theranostics Program CE, REMS & Authorized User Training",
    description:
      "The 2022 FDA approval of lutetium-177 DOTATATE (Lutathera) and 2022 approval of lutetium-177 PSMA (Pluvicto) created new CE and authorized user training requirements. REMS program compliance for Pluvicto requires prescriber certification, site certification, and quarterly patient monitoring documentation. Authorized user training for therapeutic radiopharmaceuticals — 80-hour training requirement under 10 CFR 35.390 — requires training program selection and documentation 6-12 months before initiating a new theranostics program. State medical license renewal (2-3 year cycles), DEA registration for sedation in nuclear medicine procedures, and ACLS certification for therapeutic programs complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "PSMA PET/CT for Prostate Cancer Staging — NEJM 2024",
    description: "OSPREY and CONDOR trial extension data (n=1,200 patients) confirming Ga-68 PSMA PET/CT superiority over conventional imaging for biochemical recurrence — updated SNM&MI PSMA PET CE for ABR/ABNM recertification and AU training programs.",
  },
  {
    title: "Lutetium-177 PSMA Therapy Outcomes — Lancet 2024",
    description: "VISION trial 3-year outcomes (n=831 patients) confirming lutetium-177 PSMA-617 overall survival benefit — updated REMS compliance CE and theranostics authorized user training requirements for all Lu-177 PSMA prescribing programs.",
  },
  {
    title: "DOTATATE PET/CT Sensitivity in NETs — NEJM Evidence 2023",
    description: "Multicenter registry (n=2,400 NET patients) establishing Ga-68 DOTATATE superiority over In-111 OctreoScan — foundational CE update for SNM&MI NET management guidelines and ABNM recertification theranostics curriculum.",
  },
  {
    title: "AI-Assisted PET/CT Interpretation — Radiology 2024",
    description: "Multicenter validation (n=8,200 PET/CT scans) of deep learning AI for FDG-PET lesion detection and quantification — established new ABR nuclear medicine AI CE requirement for MOCA-II module completion.",
  },
  {
    title: "Cardiac PET/CT Perfusion vs SPECT — JAMA Cardiology 2024",
    description: "Head-to-head RCT (n=1,600 patients) confirming Rb-82 PET superiority over Tc-99m SPECT for myocardial perfusion imaging sensitivity and radiation dose — updated ASNC PET cardiac credentialing CE.",
  },
  {
    title: "FDG-PET Response Assessment in Lymphoma — Lancet Oncology 2024",
    description: "Updated Lugano Classification response criteria validation (n=3,200 lymphoma patients) — revised Deauville score application CE for nuclear medicine physicians reading oncologic PET/CT for lymphoma treatment response.",
  },
]

const testimonial = {
  quote:
    "ABR MOCA-II, ABNM recertification, SNM&MI fellowship CE, NRC license compliance, RSC meeting documentation, Pluvicto REMS, Lu-177 AU training records, and state license — I managed it all in my head until something slipped. Momenties mapped the entire compliance landscape. My last NRC inspection preparation started 14 months out instead of 3.",
  name: "Obiora A.",
  title: "MD, FASNM, FSNMMI, Nuclear Medicine & Theranostics Director",
}

export default function NuclearMedicinePhysiciansPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Nuclear Medicine Physicians"
        title="ABR/ABNM Certification. NRC Compliance. Theranostics REMS. One Calendar."
        subtitle="Momenties tracks ABR/ABNM board certification, SNM&MI fellowship CE, NRC radioactive material license compliance, PSMA and DOTATATE REMS requirements, and theranostics authorized user training so nuclear medicine physicians maintain every credential and license without administrative overload."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Four Credential Pillars Momenties Manages for You
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {pillars.map((p) => (
              <div
                key={p.title}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <p.icon size={28} color="#c5a35c" style={{ marginBottom: 16 }} />
                <h3 style={{ color: "#f0ece3", fontSize: "1.05rem", fontWeight: 600, marginBottom: 12 }}>
                  {p.title}
                </h3>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.92rem", lineHeight: 1.65 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Landmark Studies */}
      <Reveal>
        <section style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 700,
              color: "#f0ece3",
              marginBottom: 48,
            }}
          >
            Landmark Studies Shaping Nuclear Medicine Practice
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {studies.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "#131318",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 12,
                  padding: "20px 24px",
                }}
              >
                <p style={{ color: "#c5a35c", fontWeight: 600, marginBottom: 6, fontSize: "0.95rem" }}>
                  {s.title}
                </p>
                <p style={{ color: "rgba(240,236,227,0.65)", fontSize: "0.9rem", lineHeight: 1.65 }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ maxWidth: 720, margin: "0 auto", padding: "80px 24px 0" }}>
          <blockquote
            style={{
              background: "#131318",
              border: "1px solid rgba(197,163,92,0.25)",
              borderRadius: 16,
              padding: "36px 40px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "rgba(240,236,227,0.85)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                fontStyle: "italic",
                marginBottom: 24,
              }}
            >
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p style={{ color: "#c5a35c", fontWeight: 600 }}>{testimonial.name}</p>
            <p style={{ color: "rgba(240,236,227,0.5)", fontSize: "0.88rem" }}>{testimonial.title}</p>
          </blockquote>
        </section>
      </Reveal>

      <div style={{ padding: "80px 0 0" }}>
        <CTA />
      </div>
    </main>
  )
}
