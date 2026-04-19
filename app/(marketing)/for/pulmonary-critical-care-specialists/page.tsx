import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pulmonary & Critical Care Specialists | Momenties",
  description: "Momenties helps pulmonary and critical care medicine specialists manage ABIM dual board certification, ACCP fellowship CE, bronchoscopy and EBUS credentialing, lung transplant program compliance, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABIM Pulmonary & Critical Care Medicine Board Certification MOC",
    description:
      "Pulmonary and critical care medicine (PCCM) specialists holding dual ABIM subspecialty certification — in both pulmonary disease and critical care medicine — must maintain two independent ABIM MOC pathways simultaneously. Each requires 100 CME credits per 5-year MOC cycle, with separate specialty-specific self-assessment activity (SAA) requirements: CHEST SAA modules for pulmonary MOC and SCCM/ACCP modules for critical care MOC. Pulmonologists pursuing additional ABIM Sleep Medicine certification maintain a third independent MOC pathway. ABIM longitudinal knowledge assessment (LKA) replaces the 10-year exam — quarterly questions delivered via My ABIM portal with annual pass/fail milestones. Momenties tracks all three ABIM MOC timelines with individual deadline management.",
  },
  {
    icon: Clock,
    title: "ACCP Fellowship CE & Critical Care Society Conference Calendar",
    description:
      "The American College of Chest Physicians (CHEST) Annual Meeting — held October/November — is the primary CE event; abstract submission opens April-May for fall conferences, 6 months in advance. ACCP fellowship (FCCP) maintenance requires documented CE in pulmonary vascular disease, ILD management, lung cancer staging, and mechanical ventilation protocols. Society of Critical Care Medicine (SCCM) Critical Care Congress (January) provides critical care subspecialty MOC CE credits. ATS International Conference (May) and ERS International Congress (September) provide supplementary CE for academic pulmonologists. ATS/IDSA/SCCM/ESICM surviving sepsis guidelines and CHEST ILD guidelines — updated 2022-2024 — require documented CE review for FCCP maintenance. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Bronchoscopy, EBUS & Advanced Interventional Pulmonology Credentialing",
    description:
      "Pulmonary and critical care specialists performing advanced bronchoscopic procedures navigate the most complex procedural credentialing landscape in internal medicine subspecialties. Endobronchial ultrasound (EBUS) credentialing — for TBNA of mediastinal lymph nodes — requires documented case volume minimums (typically 50+ supervised EBUS procedures) and annual hospital reappointment with ongoing volume documentation. Robotic bronchoscopy credentialing (Intuitive Ion, Monarch) requires vendor simulator training, proctored case completion, and institutional competency sign-off. Cryobiopsy credentialing for ILD diagnosis, bronchial thermoplasty credentialing for severe asthma, and bronchoscopic lung volume reduction (BLVR) credentialing each have independent hospital privileging requirements. Critical care procedural credentialing — bronchoscopy in the ICU, ECMO specialist certification (ELSO), and POCUS cardiac/lung certification — is managed separately. Momenties tracks all credentialing cycles.",
  },
  {
    icon: Users,
    title: "State License, DEA & Lung Transplant Program Compliance",
    description:
      "Pulmonary specialists serving as lung transplant program medical directors or primary pulmonologists must maintain UNOS-required continuing education for transplant programs — UNOS CTEP modules annually, plus transplant quality improvement data submissions quarterly. ILD multidisciplinary team (MDT) conference participation — required for UIP/IPF and hypersensitivity pneumonitis program designation at academic centers — generates ongoing CE credit documentation. Pulmonary hypertension REMS programs (Orenitram, Uptravi, Adempas) require prescriber certification with annual renewal for prostacyclin and riociguat therapy. State medical license renewal (2-3 year cycles), DEA registration for controlled substance prescribing (benzodiazepines, opiates for palliation), ACLS certification (2-year cycle), and POCUS certification maintenance complete the compliance portfolio. Momenties consolidates all with jurisdiction-specific tracking.",
  },
]

const studies = [
  {
    title: "Tezepelumab for Severe Asthma — NEJM 2023",
    description: "NAVIGATOR trial 3-year extension (n=1,061 patients with severe uncontrolled asthma) confirming tezepelumab sustained exacerbation reduction across all eosinophil levels — required CHEST CE update for biologic selection and GINA severe asthma management guidelines.",
  },
  {
    title: "SAVE-More Trial for ILD — Lancet 2024",
    description: "Nintedanib plus pirfenidone combination therapy RCT (n=600 IPF patients) versus monotherapy — updated ATS/ERS/JRS/ALAT IPF treatment guideline CE for combination antifibrotic strategies in progressive fibrosing ILD management.",
  },
  {
    title: "ARDS Phenotype-Guided Ventilation — NEJM 2024",
    description: "Multi-center phenotyping trial (n=2,800 ARDS patients) demonstrating hyper-inflammatory phenotype response to simvastatin and hypo-inflammatory phenotype benefit from conservative fluid strategy — required SCCM critical care CE for precision ventilation and pharmacotherapy protocols.",
  },
  {
    title: "LDCT Lung Cancer Screening Expanded Criteria — JAMA 2024",
    description: "USPSTF-aligned validation of expanded LDCT screening criteria (age 50+, 20 pack-years) across 200,000 patients — updated CHEST/ACCP lung cancer screening guideline CE for pulmonologists managing high-risk screening programs and nodule follow-up protocols.",
  },
  {
    title: "Sotatercept for Pulmonary Arterial Hypertension — NEJM 2023",
    description: "STELLAR trial (n=323 PAH patients) demonstrating sotatercept 84% reduction in clinical worsening events — established new REMS prescriber CE program for activin signaling inhibitor therapy in pulmonary hypertension programs requiring updated prescriber certification.",
  },
  {
    title: "Dinutuximab Beta for Mesothelioma — Lancet Oncology 2024",
    description: "BEAT-meso trial (n=510 malignant pleural mesothelioma patients) evaluating bevacizumab-chemotherapy versus immunotherapy combinations — required CHEST/IASLC CE update for pulmonologists managing mesothelioma multidisciplinary programs and systemic therapy protocols.",
  },
]

const testimonial = {
  quote:
    "Dual ABIM MOC for pulmonary and critical care, FCCP maintenance, EBUS credentialing at three hospitals, robotic bronchoscopy proctoring requirements, two PAH REMS programs, UNOS transplant CE modules, and state license — each running on different timelines. Momenties mapped all of it into a single calendar. I haven&apos;t missed a single deadline in two years.",
  name: "Adaeze N.",
  title: "MD, FCCP, Interventional Pulmonology & Lung Transplant Program Director",
}

export default function PulmonaryCriticalCareSpecialistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Pulmonary & Critical Care Specialists"
        title="Dual ABIM MOC. EBUS Credentialing. PAH REMS. One Calendar."
        subtitle="Momenties tracks dual ABIM pulmonary and critical care board certification, ACCP fellowship CE, bronchoscopy and EBUS credentialing, pulmonary hypertension REMS prescriber requirements, and lung transplant program compliance so pulmonary specialists maintain every credential without administrative overload."
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
            Landmark Studies Shaping Pulmonary & Critical Care Practice
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
