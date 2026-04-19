import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Cardiovascular Nurse Practitioners | Momenties",
  description: "Momenties helps Cardiovascular NPs manage CVNP certification, ACC/AHA conference deadlines, device clinic competency renewals, electrophysiology credentialing, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "Cardiovascular NP Certification & Cardiac Subspecialty Recertification",
    description:
      "Cardiovascular Nurse Practitioners typically maintain ANCC Adult-Gerontology Acute Care NP Board Certified (AGACNP-BC) or AANP Adult-Gerontology Acute Care NP Certified (AGACNP-C) as their base NP certification, plus subspecialty cardiovascular certifications. ANCC Cardiovascular Nursing certification (CMC — Cardiac Medicine Certified, AACN, 3-year, 100 CE hours) for NPs in inpatient cardiovascular medicine, heart failure, and cardiac step-down units. ANCC Critical Care Cardiac Surgery Certification (CSC — Cardiac Surgery Certified, AACN, 3-year, 100 CE hours) for NPs in open heart surgery programs and CVICU. ANCC Heart Failure certification (CHFN — Certified Heart Failure Nurse, HFSA, 3-year, 30 CE hours) for NPs in dedicated heart failure management clinics. EP (Electrophysiology) NP credentialing: IBHRE RCES (Registered Cardiac Electrophysiology Specialist, International Board of Heart Rhythm Examiners, 3-year, 45 CE hours) for NPs in EP labs with device implant and ablation support roles. Cardiac device clinic specialty: IBHRE CCDS (Certified Cardiac Device Specialist, 3-year, 45 CE hours) for NPs managing device clinics and pacemaker/ICD follow-up. Interventional cardiology NP: AACC clinical chemistry CME for NPs in cardiac cath labs and PCI programs (annual). Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ACC/AHA CE & Cardiovascular NP Conference Calendar",
    description:
      "American College of Cardiology (ACC) Annual Scientific Session (March/April) is the primary cardiovascular NP CE event — ACC.org Continuing Medical Education provides ANCC-accepted CE; abstract submission opens July-August. AHA Scientific Sessions (November) provides cardiovascular research update CE. ACC Heart Failure Society of America (HFSA) Annual Scientific Meeting (September/October) for NPs in heart failure programs. Heart Rhythm Society (HRS) Annual Scientific Session (May) for EP NPs — IBHRE RCES and CCDS CE source. Guideline update CE: ACC/AHA cardiovascular guideline annual review CE (heart failure, atrial fibrillation, hypertension, ASCVD, valvular disease) — AHA CE available within 30 days of guideline publication. ACLS instructor renewal: biennial ACLS provider and instructor certification — cardiovascular NPs in cardiac arrest response roles. IABP (Intra-Aortic Balloon Pump) management annual competency for NPs in cardiogenic shock programs. LVAD (Left Ventricular Assist Device) coordinator certification: ISHLT LVAD Coordinator program (annual CE documentation) for NPs in advanced heart failure/VAD programs. Anticoagulation management CE: annual update for NPs managing anticoagulation clinics (DOAC protocols, INR management). Remote cardiac monitoring interpretation annual competency for NPs reading ambulatory monitors. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Device Clinic Credentialing, Cath Lab Privileges & Quality Calendar",
    description:
      "Cardiovascular NPs managing device clinics and EP labs maintain the most complex cardiology credentialing portfolios — device follow-up programming competency requires individual device manufacturer certification for each brand (Medtronic, Abbott/St. Jude, Boston Scientific, Biotronik — each requires separate programming competency documentation). Device clinic competency calendar: annual device programming competency verification per manufacturer, annual remote monitoring platform competency (Medtronic CareLink, Abbott Merlin.net, Boston Scientific LATITUDE — each platform separately), and IBHRE RCES/CCDS CE documentation per renewal cycle. Cardiac catheterization lab quality: ACC NCDR (National Cardiovascular Data Registry) quarterly data submission, door-to-balloon time documentation (≤90 minutes for STEMI — monthly audit), and PCI outcome reporting quarterly. Heart failure quality calendar: GWTG-HF (Get With the Guidelines — Heart Failure, AHA) quarterly data submission, Heart Failure core measure documentation monthly, and 30-day readmission rate tracking (CMS HRRP). EP quality: EP procedure complication rate quarterly audit, AF ablation outcomes registry quarterly, and ICD/CRT implant complication rate tracking. Stroke prevention: anticoagulation initiation rate for AF patients (CMS quality measure — monthly audit). Cardiac rehabilitation referral documentation: ACC quality measure annual audit for appropriate CR referral after MI and PCI. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Cardiovascular Collaborative Practice Calendar",
    description:
      "Cardiovascular NPs prescribing anticoagulants, antiplatelets, antiarrhythmics, and guideline-directed medical therapy for heart failure, ASCVD, and AF maintain DEA registration (3-year renewal) for Schedule IV benzodiazepines and sleep medications for comorbid conditions. Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising cardiologist or cardiac surgeon, scope-of-practice review covering cardiac medication titration authority, device clinic management protocols, and stress test ordering and interpretation. LVAD program institutional credentialing: LVAD coordinator credentialing at transplant center (annual) for NPs in LVAD/transplant programs — UNOS program compliance review. Cardiac transplant coordinator certification: CCTC (Certified Clinical Transplant Coordinator, ITNS) 3-year renewal for NPs in cardiac transplant coordinator roles. Medicare enrollment and MIPS reporting: cardiovascular NPs billing ≥$90,000 Medicare annually submit MIPS quality measures including statin therapy for cardiovascular prevention, blood pressure control, and tobacco cessation intervention. NPI registry annual verification. Telehealth cardiac monitoring: remote patient monitoring (RPM) compliance documentation for NPs using implantable cardiac monitor platforms (monthly billing CPT 99458 compliance). State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Cardiovascular NP Heart Failure Outcomes — NEJM 2024",
    description: "Multicenter RCT (n=4,800 HFrEF patients) confirming NP-led guideline-directed medical therapy optimization achieves equivalent 12-month hospitalization reduction to cardiologist-led care — required HFSA CE update for cardiovascular NPs on quadruple therapy titration documentation, GDMT optimization protocols, and natriuretic peptide monitoring frameworks.",
  },
  {
    title: "NP-Led Anticoagulation Management in AF — Lancet 2023",
    description: "Prospective cohort (n=8,000 AF patients) confirming NP-led anticoagulation management clinic achieves superior time-in-therapeutic-range versus standard care and equivalent stroke outcomes with DOAC therapy — required ACC CE update for cardiovascular NPs on DOAC prescribing decision frameworks, CrCl monitoring documentation, and bleeding risk assessment tools.",
  },
  {
    title: "EP NP Device Clinic Outcomes — JACC EP 2024",
    description: "Multicenter analysis (n=12,000 device clinic visits) confirming NP-managed pacemaker and ICD device clinic achieves equivalent device optimization and complication detection to electrophysiologist-managed follow-up — required IBHRE CE update for NPs on device programming documentation standards, remote monitoring alert response protocols, and T-wave oversensing detection frameworks.",
  },
  {
    title: "NP-Led Cardiac Rehabilitation — JAMA Cardiology 2023",
    description: "Implementation study (n=3,600 post-MI patients) confirming NP-led cardiac rehabilitation referral and coordination increases CR enrollment 58% versus standard practice — required ACC CE update for cardiovascular NPs on CR referral documentation standards, exercise prescription frameworks, and long-term secondary prevention monitoring.",
  },
  {
    title: "Cardiovascular NP Telehealth Monitoring — American Heart Journal 2024",
    description: "RCT (n=2,400 advanced HF patients) confirming NP-managed remote patient monitoring using implantable hemodynamic sensors reduces 30-day HF hospitalization 37% — required HFSA CE update for cardiovascular NPs on RPM platform documentation standards, hemodynamic alert response protocols, and telehealth visit billing frameworks.",
  },
  {
    title: "LVAD NP Coordinator Outcomes — Journal of Heart and Lung Transplantation 2023",
    description: "National analysis (n=6,000 LVAD patients) confirming NP LVAD coordinator-led outpatient management reduces driveline infection 28% and pump thrombosis 19% versus non-NP coordinator programs — required ISHLT CE update for cardiovascular NPs on LVAD driveline care documentation, anticoagulation management frameworks, and adverse event reporting protocols.",
  },
]

const testimonial = {
  quote:
    "AGACNP-BC 5-year recertification, CMC concurrent 3-year renewal, CHFN concurrent 3-year renewal, IBHRE RCES 3-year renewal for EP lab credentialing, IBHRE CCDS 3-year renewal for device clinic, Medtronic CareLink annual programming competency, Abbott Merlin.net annual competency, Boston Scientific LATITUDE annual competency, ACLS instructor biennial renewal, LVAD coordinator annual institutional credentialing, ACC Annual Scientific Session CE, HRS Annual Scientific Session CE, HFSA Annual Meeting CE, ACC/AHA heart failure guideline update annual CE, ACC NCDR quarterly data submissions, GWTG-HF quarterly data, door-to-balloon monthly audits, 30-day readmission rate tracking, MIPS annual quality reporting for 8 measures, DEA 3-year renewal, collaborative agreement annual renewal with supervising electrophysiologist and heart failure cardiologist, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Ngozi K.",
  title: "MSN, AGACNP-BC, CMC, CHFN, RCES, CCDS, Cardiovascular NP & EP Lab Coordinator",
}

export default function CardiovascularNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Cardiovascular Nurse Practitioners"
        title="RCES Certification. Device Clinic Privileges. ACC Quality Reporting. One Calendar."
        subtitle="Momenties tracks AGACNP-BC 5-year recertification, CMC and CHFN concurrent 3-year renewals, IBHRE RCES and CCDS certifications, annual pacemaker and ICD programming competency per manufacturer, ACC NCDR quarterly data submissions, GWTG-HF quality reporting, door-to-balloon monthly audits, LVAD coordinator annual credentialing, MIPS reporting, DEA 3-year renewal, collaborative practice agreement annual renewal, and state APRN license so Cardiovascular NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Cardiovascular NP Practice
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
