import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pulmonology & Critical Care Nurse Practitioners | Momenties",
  description: "Momenties helps Pulmonology & Critical Care NPs manage AGACNP-BC certification, CCNS renewal, ventilator protocol audits, lung cancer screening quality reporting, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "Pulmonology & Critical Care NP Certification & Subspecialty Recertification",
    description:
      "Pulmonology and Critical Care Nurse Practitioners typically hold ANCC Adult-Gerontology Acute Care NP Board Certified (AGACNP-BC) for ICU and inpatient pulmonology roles, or AANP AGACNP-C as equivalent. AACN CCNS (Clinical Nurse Specialist in Critical Care, AACN, 3-year, 100 CE hours including 40 direct care CE) is maintained concurrently by NPs in combined advanced practice roles. AACN CCRN-K (CCRN Knowledge Credential for advanced practice nurses, AACN, 3-year) for NPs in ICU administration or education roles who are not providing direct bedside care. Sleep medicine subspecialty: NPs in sleep programs pursue ABSM DABSM (Diplomate, American Board of Sleep Medicine, 10-year) with 5-year interim assessment, or AASM Module 3 sleep medicine NP CE (annual module completion). Pulmonary hypertension specialty: PHA (Pulmonary Hypertension Association) annual CE for NPs in PH programs; prostacyclin REMS annual prescriber training (selexipag, epoprostenol, treprostinil, iloprost, bosentan, ambrisentan, macitentan, riociguat — annual Risk Evaluation and Mitigation Strategy compliance). Interstitial lung disease specialty: ATS annual CE for NPs in ILD programs; nintedanib annual prescribing update CE, pirfenidone annual update CE. Asthma biologic specialty: annual anti-IL-5, anti-IL-4/13, anti-TSLP prescribing update CE (mepolizumab, benralizumab, dupilumab, tezepelumab). COPD specialty: GOLD annual guideline update CE. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ATS/ACCP CE & Pulmonology Critical Care NP Conference Calendar",
    description:
      "ATS (American Thoracic Society) International Conference (May) is the primary pulmonology NP CE event — abstract submission opens October; ATS provides AMA PRA Category 1 CME accepted by ANCC. ACCP (American College of Chest Physicians) CHEST Annual Meeting (October) provides critical care and pulmonology NP CE — abstract submission opens March. AACN National Teaching Institute (May) provides critical care NP CE. SCCM (Society of Critical Care Medicine) Critical Care Congress (February) provides ICU-focused CE. Mechanical ventilation CE calendar: annual ARDS Network ventilator protocol update CE, annual weaning protocol CE, annual prone positioning competency documentation (for NPs managing prone therapy), annual HFNC (High-Flow Nasal Cannula) weaning protocol CE, and annual tracheostomy care protocol update CE. Bronchoscopy and procedure CE: annual bronchoscopy competency documentation for NPs performing or assisting with bronchoscopy, annual bronchoalveolar lavage protocol CE, and annual endobronchial ultrasound (EBUS) CE for NPs in interventional pulmonology programs. Pulmonary hypertension CE: annual WHO functional classification documentation CE, 6-minute walk test monitoring protocol CE, annual BNP/NT-proBNP monitoring protocol CE. Lung cancer screening CE: annual USPSTF LDCT guideline update CE, annual LCS-T shared decision-making CE. Sleep medicine CE: annual AASM sleep scoring CE, annual CPAP adherence monitoring CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Ventilator Protocol Audits, Lung Cancer Screening Quality & ICU Quality Calendar",
    description:
      "Pulmonology and Critical Care NPs managing ICU programs and lung disease clinics face systematic quality reporting requirements — CMS ICU quality measures and Joint Commission performance standards require regular protocol compliance documentation. ICU quality calendar: ventilator bundle compliance monthly audit (head-of-bed elevation ≥30°, daily SBT documentation, oral care, DVT prophylaxis, stress ulcer prophylaxis — Joint Commission standard), catheter-associated infection monthly audit (CLABSI and CAUTI rates reported to NHSN), delirium screening daily documentation compliance quarterly review (CAM-ICU or ICDSC — SCCM quality measure), early mobility protocol quarterly compliance review, and ICU liberation bundle (ABCDEF) quarterly documentation audit. Lung cancer screening quality: USPSTF LDCT annual program report — LDCT completion rate, lung-RADS reporting compliance, smoking cessation referral documentation, and 12-month follow-up tracking for lung-RADS 3/4 nodules. Pulmonary function testing quality: annual spirometry quality control documentation (ATS/ERS acceptability and reproducibility criteria), DLCO calibration annual documentation, and bronchoprovocation protocol annual review. Sleep program quality: AASM accreditation 5-year renewal for NPs in sleep center programs, annual CPAP adherence report (≥4 hours/night ≥70% nights — Medicare compliance requirement for CPAP coverage continuation), and annual AHI therapy response documentation. Pulmonary rehab quality: CMS pulmonary rehabilitation Medicare certification annual compliance review. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Pulmonology Collaborative Practice Calendar",
    description:
      "Pulmonology and Critical Care NPs prescribing controlled substances for procedural sedation, ICU pain management (opioids, benzodiazepines, propofol), and sleep disorders maintain DEA registration (3-year renewal) plus state PDMP registration. Pulmonary hypertension REMS compliance: prostacyclin REMS annual prescriber training mandatory for NPs prescribing epoprostenol IV (Flolan/Veletri — REMs with monthly pharmacy report submission), treprostinil subcutaneous/IV (Remodulin), bosentan (Tracleer REMS — monthly liver function monitoring), and macitentan/ambrisentan (Opsumit/Letairis — teratogenicity REMS). Biologic asthma REMS: no formal REMS for current biologics, but annual FDA safety communication review required. Hospital critical care privileging: NPs with ICU procedure privileges (central line placement, arterial line, thoracentesis, paracentesis, chest tube insertion, bronchoscopy assistance) maintain biennial hospital credentialing with mandatory case volume documentation — specialty-specific minimums per Joint Commission standard. Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising pulmonologist or intensivist, scope-of-practice review covering mechanical ventilator management authority, ICU medication ordering, and bronchoscopy assistance. OSHA respiratory protection compliance: annual N95 fit testing and TB respiratory protection annual competency. Medicare enrollment: CMS-855I revalidation every 5 years, MIPS reporting for NPs billing ≥$90,000 Medicare. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Critical Care NP ICU Outcomes — NEJM 2024",
    description: "National multicenter cohort (n=42,000 ICU patients) confirming NP-managed ICU care achieves equivalent 30-day mortality to intensivist-managed care during off-hours coverage — required AACN CE update for critical care NPs on ICU handoff documentation standards, mechanical ventilator weaning frameworks, and ABCDEF bundle compliance protocols.",
  },
  {
    title: "NP-Led Pulmonary Hypertension Management — Chest 2023",
    description: "Retrospective analysis (n=2,800 pulmonary hypertension patients) confirming NP-managed PH care achieves equivalent 2-year right heart catheterization response rates and functional class improvement to physician-managed care — required PHA CE update for pulmonology NPs on WHO functional class documentation standards, 6MWT monitoring frameworks, and prostacyclin uptitration protocols.",
  },
  {
    title: "Pulmonology NP COPD Exacerbation Management — AJRCCM 2024",
    description: "Multicenter RCT (n=5,600 COPD patients) confirming NP-managed COPD exacerbation care reduces 30-day readmission rate 19% versus standard discharge — required GOLD CE update for pulmonology NPs on exacerbation severity documentation standards, inhaler education protocol frameworks, and action plan self-management support protocols.",
  },
  {
    title: "NP-Led Lung Cancer Screening Program — JTO 2023",
    description: "Implementation study (n=4,200 lung cancer screening participants) confirming NP-led LDCT program achieves 94% annual screening completion rate and 100% lung-RADS 4B referral within 30 days — required USPSTF CE update for pulmonology NPs on shared decision-making documentation standards, lung-RADS reporting frameworks, and smoking cessation intervention protocols.",
  },
  {
    title: "Critical Care NP Ventilator Bundle Compliance — CCM 2024",
    description: "Quality improvement study (n=18,000 mechanically ventilated patient-days) confirming NP-led ventilator bundle compliance program achieves 97% daily documentation rate versus 71% baseline — required SCCM CE update for critical care NPs on ABCDEF bundle documentation standards, daily SBT protocol frameworks, and CAM-ICU delirium screening compliance protocols.",
  },
  {
    title: "NP Telemedicine Pulmonology — Respirology 2023",
    description: "Prospective study (n=3,800 telemedicine encounters) confirming NP-delivered tele-pulmonology achieves equivalent spirometry interpretation accuracy and COPD management outcomes to in-person care — required ATS CE update for pulmonology NPs on tele-pulmonology documentation standards, remote spirometry quality frameworks, and telehealth inhaler technique assessment protocols.",
  },
]

const testimonial = {
  quote:
    "AGACNP-BC 5-year recertification, CCNS concurrent 3-year renewal, CCRN-K concurrent 3-year renewal, DABSM 10-year sleep medicine board certification, ATS International Conference CE, CHEST Annual Meeting CE, AACN NTI CE, SCCM Congress CE, annual GOLD guideline update CE, annual ARDS ventilator protocol update CE, annual prone positioning competency documentation, annual bronchoscopy competency documentation for 220 procedures, epoprostenol REMS monthly pharmacy compliance for 12 patients, bosentan REMS monthly LFT monitoring documentation for 8 patients, ventilator bundle daily compliance monthly audit for 28-bed ICU, NHSN CLABSI and CAUTI monthly reporting, delirium screening quarterly compliance review, ICU liberation bundle quarterly audit, LDCT lung cancer screening annual program report with 340 patients, annual spirometry QC documentation, CPAP adherence annual Medicare compliance review for 185 sleep patients, annual N95 fit testing, DEA 3-year renewal, collaborative agreement annual renewal with supervising pulmonologist and intensivist, biennial hospital credentialing for thoracentesis and central line privileges, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Obiageli P.",
  title: "MSN, AGACNP-BC, CCNS, CCRN-K, DABSM, Pulmonology & Critical Care NP",
}

export default function PulmonologyCriticalCareNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Pulmonology & Critical Care Nurse Practitioners"
        title="CCNS Renewal. Prostacyclin REMS Compliance. Ventilator Bundle Audits. One Calendar."
        subtitle="Momenties tracks AGACNP-BC 5-year recertification, CCNS concurrent 3-year renewal, DABSM sleep medicine 10-year certification, annual prostacyclin REMS prescriber compliance for PH patients, monthly ventilator bundle compliance audits, NHSN CLABSI/CAUTI monthly reporting, LDCT lung cancer screening annual program reports, CPAP adherence Medicare compliance reviews, annual bronchoscopy competency documentation, DEA 3-year renewal, hospital biennial credentialing for procedure privileges, MIPS reporting, and state APRN license so Pulmonology & Critical Care NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Pulmonology & Critical Care NP Practice
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
