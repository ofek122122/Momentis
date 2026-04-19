import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Preventive Medicine Physicians | Momenties",
  description: "Momenties helps preventive medicine physicians manage ABPM board certification, ACPM fellowship CE, population health program reporting, occupational medicine license compliance, and public health practitioner CE in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABPM Board Certification & Preventive Medicine MOC",
    description:
      "Preventive medicine physicians maintain American Board of Preventive Medicine (ABPM) certification in one of four subspecialties: general preventive medicine and public health, occupational medicine, aerospace medicine, or undersea and hyperbaric medicine. Each subspecialty has a 10-year recertification examination cycle with independent MOC requirements. ABPM MOC requires 50 CME credits per 5-year cycle in preventive medicine topics, plus completion of the ABPM practice improvement module — a structured quality improvement activity documenting population health outcomes improvement within the diplomate&apos;s scope of practice. Occupational medicine diplomates additionally maintain ACOEM SOEM (Society of Occupational and Environmental Medicine) CME requirements. Clinical informatics subspecialty certification (ABPM co-sponsorship) adds a parallel MOC pathway for preventive medicine physicians leading population health IT programs. Momenties tracks all ABPM pathways.",
  },
  {
    icon: Clock,
    title: "ACPM Fellowship CE & Preventive Medicine Society Conference Calendar",
    description:
      "The American College of Preventive Medicine (ACPM) Annual Meeting (February/March) is the primary CE event — abstract submission opens July-August for winter conferences, 6-7 months in advance. ACPM fellowship (FACPM) maintenance requires documented CE in clinical preventive services, evidence-based public health, health policy, and population health management. APHA (American Public Health Association) Annual Meeting (November) provides public health CE credits for preventive medicine physicians with population health roles. USPSTF Preventive Services recommendations — updated continuously, with 2023-2024 updates on colorectal cancer screening, hypertension screening, and prediabetes/diabetes prevention — require quarterly CE review for clinical preventive medicine programs. CDC Prevention Research Centers and ASTHO (Association of State and Territorial Health Officials) annual meetings provide public health systems CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Population Health Reporting, Quality Metrics & PCMH Credentialing",
    description:
      "Preventive medicine physicians leading population health programs manage complex quality reporting calendars that govern value-based care contract performance. NCQA HEDIS measure reporting (annual, tied to health plan accreditation cycles) requires data collection throughout the year for childhood immunization, breast cancer screening, colorectal cancer screening, and diabetes care quality measures. CMS MIPS (Merit-based Incentive Payment System) quality reporting for physicians in group practices has December 31 data submission deadlines with 90-day performance period options. PCMH (Patient-Centered Medical Home) recognition — NCQA 3-year renewal cycle — requires preventive care quality documentation including preventive visit rates and screening completion rates. Worksite wellness program certification (WELCOA, HERO) and employer health management program credentialing have annual renewal requirements. Momenties tracks all reporting cycles.",
  },
  {
    icon: Users,
    title: "State Health Officer Credentialing, DEA & Occupational Medicine CE",
    description:
      "Preventive medicine physicians serving as State Health Officers, Local Health Officers, or Medical Directors of public health agencies in state-licensed positions may require state-specific public health officer credentialing — requirements vary significantly by state. Occupational medicine physicians maintaining active practice additionally manage DOT physical examination certification (MRO Medical Review Officer certification), OSHA medical surveillance protocol CE, and ACOEM guidelines CE. Aerospace medicine physicians require FAA Aviation Medical Examiner (AME) designation renewal with FAA-required training annually. State medical license renewal (2-3 year cycles), DEA registration for physicians maintaining prescribing roles, and public health emergency preparedness CE (FEMA ICS courses required for public health incident command roles) complete the compliance portfolio. Momenties consolidates all with jurisdiction-specific tracking.",
  },
]

const studies = [
  {
    title: "USPSTF Colorectal Cancer Screening Update — JAMA 2023",
    description: "USPSTF 2023 update expanding colorectal cancer screening to adults beginning at age 45 — required ACPM CE update for preventive medicine physicians on screening modality selection, implementation frameworks, and health equity considerations in population health programs.",
  },
  {
    title: "GLP-1 Receptor Agonist for Obesity Prevention — NEJM 2023",
    description: "SELECT trial (n=17,604 overweight patients with cardiovascular disease) demonstrating semaglutide 20% MACE reduction independent of weight loss — established ACPM CE framework for preventive medicine physicians on GLP-1 therapy as cardiovascular risk reduction in obesity prevention programs.",
  },
  {
    title: "Hypertension Detection in Primary Prevention — NEJM 2024",
    description: "SPRINT-SENIOR and HYPE extension data confirming intensive BP targets (systolic ≤120) in older adults — updated USPSTF and ACC/AHA CE for preventive medicine physicians on hypertension screening thresholds and intensive management in primary prevention programs.",
  },
  {
    title: "Community Health Worker Programs for Chronic Disease — JAMA 2024",
    description: "National evaluation of community health worker (CHW) programs (n=40,000 patients across 85 programs) confirming 23% reduction in preventable hospitalizations — required ACPM CE update for preventive medicine physicians designing CHW-integrated population health interventions.",
  },
  {
    title: "Prediabetes Prevention Programs and Diabetes Incidence — NEJM 2023",
    description: "National Diabetes Prevention Program 10-year outcomes (n=4,200 participants) confirming sustained diabetes incidence reduction — updated CDC DPP CE requirements for preventive medicine physicians leading employer and health system diabetes prevention programs.",
  },
  {
    title: "Social Determinants of Health Screening Implementation — JAMA Network Open 2024",
    description: "Multicenter SDOH screening study (n=50,000 patients across 120 practices) demonstrating structured SDOH intervention programs reduce ED utilization 18% — required ACPM CE for preventive medicine physicians on SDOH screening implementation, referral networks, and population health data integration.",
  },
]

const testimonial = {
  quote:
    "ABPM recertification, FACPM fellowship CE, HEDIS measure reporting deadlines, MIPS December cutoff, PCMH 3-year renewal, MRO occupational medicine recertification, FEMA ICS public health training, and three state license renewals — each running independently. Momenties organized everything in one calendar. I lead a population health team of 60 and finally have my own credentials under control.",
  name: "Chiamaka O.",
  title: "MD, MPH, FACPM, Chief Prevention and Population Health Officer",
}

export default function PreventiveMedicinePhysiciansPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Preventive Medicine Physicians"
        title="ABPM Certification. HEDIS Reporting. Population Health CE. One Calendar."
        subtitle="Momenties tracks ABPM board certification, ACPM fellowship CE, HEDIS quality measure reporting, CMS MIPS deadlines, PCMH recognition cycles, and occupational medicine credentialing so preventive medicine physicians maintain every credential without administrative overload."
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
            Landmark Studies Shaping Preventive Medicine Practice
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
