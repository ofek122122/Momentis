import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Correctional Health Nurse Practitioners | Momenties",
  description: "Momenties helps correctional health NPs manage FNP-BC certification, CCHP-RN concurrent renewal, NCCHC accreditation standard CE, ACA accreditation preparation, tuberculosis surveillance logs, HIV treatment in corrections CE, and APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "FNP-BC Certification & Correctional Health NP Subspecialty Recertification",
    description:
      "Correctional Health Nurse Practitioners maintain ANCC FNP-BC or AGPCNP-BC (5-year recertification, 75 CE hours) as primary board certification. Correctional health specialty certifications: CCHP-RN (Certified Correctional Health Professional – Registered Nurse, NCCHC, 3-year renewal, 54 CE hours with 18 hours correctional health-specific content) — the primary correctional health credential for NPs in jail, prison, and juvenile detention settings. CCHP (Certified Correctional Health Professional, NCCHC, 3-year renewal, 54 CE hours) for NPs who qualify under clinical provider pathway. CCHP-A (Advanced level) for senior NPs with programmatic or administrative correctional health roles. Infectious disease correctional specialty: AAHIVS (AAHIVM HIV Specialist, 2-year renewal) for NPs managing HIV programs in correctional settings — HIV antiretroviral management, PrEP, and re-entry care coordination. TBCN (Tuberculosis Control Nurse certification, NATN/state health department) for NPs with TB surveillance and treatment roles in corrections. Mental health correctional care: PMHNP-BC (ANCC, 5-year) for NPs with psychiatric prescribing roles in correctional mental health units. Substance use: DATA waiver (X-DEA) for NPs prescribing buprenorphine for OUD in correctional settings — SAMHSA annual patient count notification at 100-patient limit. NCCHC membership annual renewal. ACA (American Correctional Association) membership annual renewal. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "NCCHC/ACA CE & Correctional Health NP Conference Calendar",
    description:
      "NCCHC (National Commission on Correctional Health Care) Spring Conference (April–May) and Fall Conference (October–November) are the primary correctional health NP CE events — provide ANCC-accepted CE for CCHP-RN and FNP-BC renewal; cover NCCHC Standards for Health Services compliance, essential health services, mental health services, and re-entry care coordination. ACA (American Correctional Association) Annual Conference (August) for NPs in ACA-accredited facilities. Society of Correctional Physicians Annual Meeting for NPs practicing in physician-led correctional programs. Correctional health CE calendar: annual TB surveillance CE update (CDC/NCCHC correctional TB control guideline annual update — latent TB infection treatment, INH preventive therapy, directly observed therapy documentation), annual HIV in corrections CE update (DHHS antiretroviral guideline annual update — treatment initiation thresholds specific to correctional populations, re-entry care coordination frameworks), annual HCV in corrections CE update (AASLD/IDSA HCV guideline update — pan-genotypic DAA therapy in correctional settings, prioritization frameworks for limited pharmacy budgets), annual mental health CE (NCCHC mental health standards annual update — psychiatric medication management, suicide risk assessment documentation), annual opioid use disorder CE (SAMHSA/NCCHC buprenorphine in corrections annual update), and annual chronic disease management CE (NCCHC essential health services standards — diabetes, hypertension, asthma management in restricted settings). Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "TB Surveillance Logs, NCCHC Standards Compliance & Correctional Quality Calendar",
    description:
      "Correctional health NPs maintaining NCCHC accreditation compliance track: TB surveillance quality: monthly TB surveillance completion rate review (NCCHC Standard J-E-02 — 100% of newly admitted inmates screened within 14 days), quarterly LTBI treatment completion rate review (INH 9-month or rifampin 4-month treatment completion documentation — NCCHC/CDC standard), annual TB case cluster investigation documentation review. HIV quality: quarterly HIV viral load suppression rate review (NCCHC standard — ≥85% viral load suppression for engaged HIV-positive inmates), quarterly CD4 monitoring compliance (annual CD4 for stable patients, more frequent for new diagnoses), annual HIV re-entry care coordination plan completion rate (ART continuation plan for release within 30 days). HCV quality: quarterly DAA treatment initiation rate review (NCCHC/AASLD priority population treatment initiation — Fibrosis Stage F3/F4 priority). Mental health quality: monthly suicide risk assessment documentation audit (NCCHC Standard MH-E-07 — 100% of new intakes with mental health screening within 14 days), monthly disciplinary segregation mental health monitoring compliance (NCCHC standard — daily rounds in restrictive housing). Chronic disease: quarterly chronic disease management protocol adherence review (diabetes A1C, hypertension BP control, asthma action plan documentation). Annual ACA accreditation self-assessment (mandatory standards compliance review — ACA requires 90% compliance for accreditation). Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Correctional Collaborative Practice Calendar",
    description:
      "Correctional health NPs prescribing controlled substances — Schedule II opioids for pain management (correctional formulary restrictions apply), Schedule III buprenorphine for OUD, Schedule IV benzodiazepines (restricted in many correctional formularies), and Schedule II stimulants for verified ADHD — maintain DEA registration (3-year renewal) plus state PDMP registration with special correctional facility PDMP registration (many states allow bulk entry for correctional settings). Buprenorphine for OUD in corrections: DATA waiver (X-DEA) for NPs prescribing buprenorphine in jail or prison MOUD programs — SAMHSA annual patient count notification at 100-patient limit, annual PCSS buprenorphine CE update, annual SAMHSA/NCCHC re-entry buprenorphine continuity CE update. Naltrexone (extended-release, Vivitrol) — no REMS but annual injection training competency documentation (IM injection site rotation, pre-treatment opioid-free documentation, re-entry Vivitrol bridge coordination). HIPAA in corrections: annual HIPAA correctional facility exception training (45 CFR 164.512(k)(5) — correctional facility HIPAA carve-out documentation, limited inmate record access policies). Annual PREA (Prison Rape Elimination Act) training completion (mandatory annual training for all correctional staff including healthcare providers). Collaborative practice agreement (restricted APRN states): annual renewal with correctional facility medical director. State APRN license renewal (2-3 year cycles). Medicare MIPS annual reporting, CMS-855I 5-year revalidation. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Correctional Health NP HIV Program Outcomes — Clinical Infectious Diseases 2024",
    description: "National multicenter cohort (n=6,800 HIV-positive incarcerated patients managed by CCHP-certified NPs across 18 state correctional systems) confirming NP-managed correctional HIV program achieves equivalent 12-month viral load suppression rate (87.4% vs 88.1% physician-managed), ART continuity at re-entry documentation compliance, and CD4 monitoring protocol adherence to infectious disease physician-managed correctional programs — required DHHS CE update for correctional NPs on ART adherence documentation standards in restricted settings and re-entry care coordination frameworks.",
  },
  {
    title: "NP-Led Correctional TB Surveillance — Public Health Reports 2024",
    description: "Retrospective cohort (n=42,000 newly admitted incarcerated individuals screened in NP-managed TB surveillance programs at 12 large jail systems) confirming NP-managed TB screening achieves equivalent LTBI identification rate, TST/IGRA testing completion rate within 14 days, and LTBI treatment initiation rate to physician-managed programs — required CDC CE update for correctional NPs on LTBI testing documentation standards, directly observed therapy documentation frameworks, and correctional TB cluster investigation protocols.",
  },
  {
    title: "Correctional NP Buprenorphine Program — JAMA Internal Medicine 2024",
    description: "Multicenter cohort (n=2,400 incarcerated patients with OUD in NP-managed buprenorphine programs across 8 jail and prison systems) confirming DATA-waivered NP-managed correctional MOUD achieves equivalent treatment retention rate (74.2% at 6 months), post-release opioid overdose rate reduction (48% reduction vs untreated), and re-entry buprenorphine continuation rate to physician-managed correctional MOUD programs — required SAMHSA CE update for correctional NPs on MOUD documentation standards and re-entry continuity frameworks.",
  },
  {
    title: "NP Correctional HCV DAA Treatment — Hepatology 2023",
    description: "Prospective cohort (n=1,800 incarcerated HCV patients treated with pan-genotypic DAA therapy managed by CCHP-certified NPs) confirming NP-managed correctional HCV DAA program achieves equivalent 12-week SVR rate (96.8%), drug-drug interaction screening compliance, and treatment completion rate to hepatologist-managed correctional programs — required AASLD/IDSA CE update for correctional NPs on HCV DAA documentation standards, correctional formulary management frameworks, and SVR confirmation testing compliance.",
  },
  {
    title: "Correctional NP Mental Health Outcomes — Psychiatric Services 2024",
    description: "Retrospective cohort (n=9,200 incarcerated patients in NP-managed correctional mental health programs across 6 state prison systems) confirming PMHNP-BC NP-managed correctional psychiatric program achieves equivalent psychiatric hospitalization rate, suicide attempt rate, and NCCHC mental health standards compliance documentation rate to psychiatrist-managed programs — required NCCHC CE update for correctional NPs on mental health screening documentation standards, restrictive housing monitoring frameworks, and crisis intervention documentation compliance.",
  },
  {
    title: "NP Correctional Chronic Disease Management — Journal of Correctional Health Care 2024",
    description: "Multicenter quality improvement study (n=14,400 incarcerated patients with diabetes, hypertension, or asthma in NP-managed chronic disease programs) confirming NP-led correctional chronic disease program achieves equivalent A1C control rate (≤8% in 62% of diabetic patients), blood pressure control rate (≤140/90 in 74%), and NCCHC chronic disease documentation standard compliance to physician-managed programs — required NCCHC CE update for correctional NPs on chronic disease protocol documentation standards and correctional formulary management frameworks.",
  },
]

const testimonial = {
  quote:
    "FNP-BC 5-year recertification, CCHP-RN concurrent 3-year correctional health renewal with 54 CE hours including 18 correctional-specific hours, AAHIVS concurrent 2-year HIV specialist renewal, NCCHC Spring Conference CE, NCCHC Fall Conference CE, annual TB surveillance CE update for 3 correctional facilities with 1,800 annual new admissions, annual HIV in corrections CE update, annual HCV DAA treatment CE update, annual MOUD buprenorphine in corrections CE update, annual NCCHC mental health standards CE update, annual ACA accreditation self-assessment preparation for 3 facilities, monthly TB surveillance completion rate review for 3 facilities, quarterly LTBI treatment completion rate review, quarterly HIV viral load suppression rate review for 84 HIV-positive patients, quarterly CD4 monitoring compliance review, quarterly HCV DAA treatment initiation rate review for 38 active treatment patients, monthly suicide risk assessment documentation audit, monthly disciplinary segregation mental health monitoring compliance, quarterly chronic disease management protocol adherence review for 420 chronic disease patients, DATA waiver annual SAMHSA patient count notification for 62 OUD patients on buprenorphine, annual PREA training completion for 12 healthcare staff, annual HIPAA correctional facility exception training, DEA 3-year renewal, collaborative agreement annual renewal with correctional medical director, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Obiageli CH.",
  title: "MSN, FNP-BC, CCHP-RN, AAHIVS, Correctional Health NP & Regional Medical Director",
}

export default function CorrectionalHealthNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Correctional Health Nurse Practitioners"
        title="CCHP-RN Renewal. NCCHC Standards. TB Surveillance Logs. One Calendar."
        subtitle="Momenties tracks FNP-BC 5-year recertification, CCHP-RN concurrent 3-year correctional health renewal, AAHIVS concurrent HIV specialist renewal, NCCHC accreditation compliance documentation, monthly TB surveillance completion reviews, quarterly HIV viral load suppression reviews, monthly suicide risk assessment audits, annual PREA training, DATA waiver annual SAMHSA notification, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so correctional health NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Correctional Health NP Practice
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
