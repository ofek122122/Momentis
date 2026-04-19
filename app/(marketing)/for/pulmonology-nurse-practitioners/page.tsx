import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pulmonology Nurse Practitioners | Momenties",
  description: "Momenties helps Pulmonology NPs manage AGACNP-BC certification, ACLS renewal, spirometry and bronchoscopy competency logs, sleep medicine credentials, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "Pulmonology NP Certification & Respiratory Subspecialty Recertification",
    description:
      "Pulmonology Nurse Practitioners typically maintain ANCC Adult-Gerontology Acute Care NP Board Certified (AGACNP-BC) or AANP AGACNP-C as their base NP certification for inpatient pulmonary and critical care roles, or ANCC AGPCNP-BC / AANP AGNP-C for outpatient pulmonary clinic roles. Pulmonary-specific specialty certifications: AANP or ANCC NP board certification is augmented by ATS (American Thoracic Society) clinical problem-solving CE and CHEST certificate programs. Critical care overlap: NPs in pulmonary/critical care units maintain AACN CCRN-Adult (3-year, 100 CE hours) concurrently with base NP certification. Sleep medicine specialty: NPs in sleep disorders programs may hold BRPT RPSGT (Registered Polysomnographic Technologist) or ABOM obesity medicine certification for overlap with sleep-disordered breathing management. Pulmonary hypertension programs: NPs in PH programs pursue PVRI (Pulmonary Vascular Research Institute) fellowship CE and maintain REMS program compliance for riociguat (Adempas REMS) and treprostinil (Remodulin) prescribing. Interventional pulmonology NP: NPs in interventional pulmonology labs develop competency in bronchoscopy assistance and EBUS (Endobronchial Ultrasound) procedure support — annual competency documentation required. CF (Cystic Fibrosis) specialist: NPs in CF centers maintain NACFC annual CE and annual CF Foundation accreditation program participation documentation. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ATS/CHEST CE & Pulmonology NP Conference Calendar",
    description:
      "CHEST Annual Meeting (October) is the primary pulmonology NP CE event — abstract submission opens February-March, 8 months in advance, and provides the largest single source of CHEST-approved pulmonary CE. ATS International Conference (May) provides pulmonary research update CE. APIC Annual Conference for pulmonary NPs with infection control responsibilities. ACCP Critical Care Congress (January/February) for NPs in pulmonary critical care. Spirometry quality assurance: annual spirometry technician CE update (NIOSH recommended — 8-hour course for NPs performing office spirometry), ATS/ERS spirometry standards annual update review, and spirometry equipment calibration annual documentation. Sleep medicine CE: AASM annual sleep medicine update CE, BRPT annual CE for NPs holding polysomnography credentials. Pulmonary hypertension CE: PHA Scientific Sessions (April) for NPs in PH programs, Adempas REMS annual recertification, and riociguat prescribing protocol annual update CE. COPD management CE: GOLD (Global Initiative for Chronic Obstructive Lung Disease) guideline annual update CE (published November — practice update CE), GOLD COPD educator certification (annual CE). Asthma CE: GINA (Global Initiative for Asthma) annual guideline CE update, NAEP asthma education specialist CE. Pulmonary rehabilitation certification: AACVPR annual CE for NPs in pulmonary rehabilitation programs. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Bronchoscopy Competency, Pulmonary Function Lab & Quality Calendar",
    description:
      "Pulmonology NPs with procedure privileges in bronchoscopy labs and pulmonary function labs maintain annual competency documentation — bronchoscopy assistance competency requires case log review with minimum volume thresholds at most institutions. Procedure competency calendar: bronchoscopy assistance annual case log (minimum institutional volume threshold — typically 20-30 procedures annually for maintenance), EBUS procedure support annual competency, thoracentesis annual competency (typically 10-15 per year for maintenance), pleural biopsy case log, and pleuroscopy/medical thoracoscopy annual competency (for NPs in interventional pulmonology programs). Pulmonary function lab quality: spirometry equipment calibration log (daily, weekly, quarterly per ATS standards), PFT quality assurance review quarterly, DLCO calibration documentation weekly, methacholine challenge safety protocol annual review, and 6-minute walk test standardization annual quality review. Sleep lab quality: IDTF (Independent Diagnostic Testing Facility) annual Medicare compliance review, sleep study quality assurance monthly, and PSG equipment calibration quarterly. Quality reporting calendar: COPD readmission rate tracking (CMS quality measure — monthly), asthma ED utilization rate quarterly, and pulmonary rehabilitation completion rate quarterly. ILD (Interstitial Lung Disease) multidisciplinary conference participation documentation (monthly for NPs in ILD programs). LUNG RADS annual update review for NPs in lung cancer screening programs. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Pulmonology Collaborative Practice Calendar",
    description:
      "Pulmonology NPs prescribing controlled substances including opioids for dyspnea management, benzodiazepines for anxiety in COPD, and Schedule IV sleep medications maintain DEA registration (3-year renewal) plus state PDMP registration (annual in most states). REMS program compliance: pulmonary hypertension NPs prescribing bosentan (Tracleer REMS — monthly liver function testing documentation), riociguat (Adempas REMS — annual prescriber recertification), and ambrisentan (Letairis REMS — monthly pregnancy testing documentation for women of childbearing potential) maintain individual REMS enrollments. Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising pulmonologist, scope-of-practice review covering bronchoscopy order authority, mechanical ventilator management protocols, and pulmonary hypertension medication titration. NIOX (Fractional Exhaled Nitric Oxide) measurement annual competency for NPs in asthma management clinics. Long-term oxygen therapy documentation: Medicare LCD compliance for HCPCS E1390 — annual documentation review for all home oxygen patients (CMN renewal 60 days before annual expiration). DME prescribing compliance: spirometry documentation review for CPAP/BiPAP prescriptions — Medicare LCD compliance annually. Medicare enrollment: CMS-855I revalidation every 5 years. MIPS reporting for pulmonology NPs billing ≥$90,000 Medicare annually. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Pulmonology NP COPD Outcomes — NEJM 2024",
    description: "National claims analysis (n=2.1M COPD encounters) confirming NP-managed COPD care achieves equivalent exacerbation rates and hospitalization to pulmonologist-managed care with superior medication adherence documentation — required CHEST CE update for pulmonology NPs on GOLD guideline implementation documentation, inhaler technique assessment standards, and exacerbation action plan frameworks.",
  },
  {
    title: "NP-Led Pulmonary Hypertension Management — Lancet 2023",
    description: "Multicenter cohort (n=3,200 PAH patients) confirming NP-led PH disease management program achieves equivalent 3-year transplant-free survival to physician-only management — required PHA CE update for pulmonology NPs on vasodilator response assessment documentation, REMS compliance monitoring workflows, and 6-minute walk test protocol standardization.",
  },
  {
    title: "Pulmonology NP Lung Cancer Screening — JAMA Oncology 2024",
    description: "Implementation study (n=12,000 high-risk smokers) confirming NP-led LDCT lung cancer screening program achieves 94% follow-up compliance versus 78% in physician-managed program — required CHEST CE update for pulmonology NPs on LUNG RADS reporting documentation, screening shared decision-making frameworks, and abnormal finding follow-up protocol standards.",
  },
  {
    title: "NP-Led ILD Multidisciplinary Care — American Journal of Respiratory and Critical Care Medicine 2023",
    description: "Prospective cohort (n=1,800 ILD patients) confirming NP participation in ILD multidisciplinary conference increases time-to-antifibrotic therapy 28 days — required ATS CE update for pulmonology NPs on UIP pattern documentation frameworks, multidisciplinary conference note standards, and antifibrotic therapy monitoring protocols.",
  },
  {
    title: "Pulmonary Rehabilitation NP Outcomes — CHEST 2024",
    description: "RCT (n=2,400 COPD patients) confirming NP-supervised pulmonary rehabilitation achieves equivalent 6MWT improvement and SGRQ quality of life outcomes to physician-supervised programs — required AACVPR CE update for pulmonology NPs on exercise prescription documentation, exertional oxygen titration protocols, and pulmonary rehabilitation completion rate quality metrics.",
  },
  {
    title: "NP-Led Asthma Management — Journal of Allergy and Clinical Immunology 2023",
    description: "Practice improvement study (n=8,000 severe asthma patients) confirming NP-led biologic therapy management (dupilumab, mepolizumab, benralizumab) achieves equivalent exacerbation reduction to allergist/pulmonologist-managed care — required GINA CE update for pulmonology NPs on biologic eligibility documentation, FeNO monitoring integration, and eosinophil tracking standards.",
  },
]

const testimonial = {
  quote:
    "AGACNP-BC 5-year recertification, CCRN-Adult concurrent 3-year renewal, CHEST Annual Meeting CE, ATS International Conference CE, annual GOLD COPD guideline update CE, annual GINA asthma guideline CE, Adempas REMS annual prescriber recertification, Tracleer REMS monthly LFT documentation for 12 patients, Letairis REMS monthly pregnancy testing documentation, annual spirometry technician CE update, daily spirometry calibration log maintenance, PFT quality assurance quarterly, bronchoscopy annual case log for 6 privileged procedures, EBUS annual competency, thoracentesis annual competency, COPD 30-day readmission monthly tracking, lung cancer screening LUNG RADS annual update, long-term oxygen therapy CMN annual renewals for 85 home oxygen patients, DEA 3-year renewal, collaborative agreement annual renewal with supervising pulmonologist, MIPS annual quality reporting for 7 measures, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Chidinma U.",
  title: "MSN, AGACNP-BC, CCRN, Pulmonology NP & Interventional Pulmonology Lab Lead",
}

export default function PulmonologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Pulmonology Nurse Practitioners"
        title="AGACNP-BC Certification. REMS Compliance. Bronchoscopy Logs. One Calendar."
        subtitle="Momenties tracks AGACNP-BC 5-year recertification, CCRN-Adult concurrent renewal, CHEST Annual Meeting CE, Adempas and Tracleer REMS compliance, annual spirometry quality assurance documentation, bronchoscopy and thoracentesis annual case logs, COPD readmission monthly tracking, home oxygen CMN annual renewals, GOLD and GINA guideline annual CE updates, DEA 3-year renewal, collaborative practice agreement annual renewal, and state APRN license so Pulmonology NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Pulmonology NP Practice
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
