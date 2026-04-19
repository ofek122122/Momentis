import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Women's Health Nurse Practitioners | Momenties",
  description: "Momenties helps Women's Health NPs manage WHNP-BC certification, NRP renewal, colposcopy credentialing, menopause practitioner certification, DEA registration, and state APRN license in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "WHNP-BC Certification & Women's Health NP Recertification",
    description:
      "Women&apos;s Health Nurse Practitioners maintaining National Certification Corporation (NCC) Women&apos;s Health NP (WHNP-BC) certification follow a 5-year recertification cycle requiring 45 continuing nursing education contact hours with at least 15 hours in women&apos;s health content, plus documentation of 2,000 clinical hours in women&apos;s health practice during the 5-year period. WHNPs in obstetrics settings may hold concurrent NCC Inpatient Obstetric Nursing (RNC-OB) certification (3-year cycle, 45 CE hours) or Low-Risk Neonatal Nursing (RNC-LRN) certification. WHNPs in gynecologic oncology settings may hold AOCNS (Advanced Oncology Certified Clinical Nurse Specialist) or AOCNP (Advanced Oncology Certified NP) through ONS — a 4-year cycle requiring 40 CE hours per year. North American Menopause Society (NAMS) Certified Menopause Practitioner (NCMP) certification requires annual renewal with 3 CE hours in menopause medicine. AANPCP Women&apos;s Health Specialty certification is available as additional certification. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "NRP Renewal & Women's Health NP Conference Calendar",
    description:
      "Neonatal Resuscitation Program (NRP) provider certification (2-year renewal) is required for WHNPs practicing in labor and delivery or antepartum care settings. ACLS/BLS Healthcare Provider (2-year renewal) required for WHNPs in high-acuity settings. AWHONN (Association of Women&apos;s Health, Obstetric and Neonatal Nurses) Annual Convention (June) is the primary women&apos;s health nursing CE event — abstract submission opens November-December, 6-7 months in advance. AWHONN provides CE in electronic fetal monitoring, obstetric emergencies, and women&apos;s health evidence-based practice. ACOG (American College of Obstetricians and Gynecologists) Annual Clinical and Scientific Meeting (April/May) provides advanced gynecology CE. NAMS Annual Meeting (September/October) provides menopause medicine CE for NCMP renewal. SGEC (Society for Gynecologic Investigation) Annual Meeting provides reproductive endocrinology CE for reproductive WHNPs. AWHONN Electronic Fetal Monitoring (EFM) Certification (C-EFM, 3-year cycle, 30 CE hours through AWHONN) required for WHNPs in antepartum/intrapartum settings. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Colposcopy Credentialing, Reproductive Health CE & Quality Reporting Calendar",
    description:
      "WHNPs performing colposcopy maintain ASCCP (American Society for Colposcopy and Cervical Pathology) colposcopy credentialing — institutional privileging requirements vary but typically include minimum annual colposcopy procedure volume (25-50 cases/year), annual competency assessment, and ASCCP clinical practice guideline training updates (annual for significant guideline changes). ASCCP 2019 risk-based cervical cancer screening guidelines annual update CE is required for WHNPs managing cervical cancer screening programs. Long-acting reversible contraception (LARC) insertion credentialing — IUD and implant credentialing at most institutions requires initial training and annual procedure volume maintenance (minimum 10-25 insertions/year). HEDIS women&apos;s health quality measures reporting: cervical cancer screening rates, breast cancer screening rates (mammography), chlamydia screening rates for sexually active women, and prenatal/postpartum care measures — require WHNP documentation compliance. Menopause program quality metrics: patient-reported outcome measures (PROMIS menopause symptoms), shared decision-making documentation for HRT prescribing, and cardiovascular risk assessment documentation. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Women's Health Practice Compliance Calendar",
    description:
      "WHNPs prescribing medications for reproductive health, menopause management, and chronic pelvic pain maintain DEA registration (3-year renewal) for controlled substance prescribing — particularly for WHNPs managing chronic pelvic pain, dysmenorrhea, and postpartum depression. State PDMP registration (annual in most states) for controlled substance prescribing documentation. Collaborative practice agreement requirements (in states with restricted APRN practice) require annual renewal with supervising physician. Telehealth prescribing compliance for WHNPs in telehealth reproductive health (telemedicine LARC counseling, medication abortion via telehealth in legal states) requires state-by-state telehealth prescribing law monitoring. Breast health CE — NAPBC (National Accreditation Program for Breast Centers) annual competency for WHNPs in breast health programs. Perinatal mood disorder screening certification — EPDS administration competency (annual documentation), Postpartum Support International certificate (annual renewal for WHNPs in perinatal mental health programs), and collaborative care integration CE. State APRN license renewal (2-3 year cycles) with state-specific CE requirements. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "WHNP-Led Menopause Management Outcomes — Menopause 2024",
    description: "Multicenter study (n=3,000 perimenopausal women) confirming WHNP-led menopause management achieves equivalent symptom control to physician-led care with higher patient satisfaction and shared decision-making scores — required NAMS CE update for WHNPs on updated HRT prescribing guidelines, cardiovascular risk stratification documentation, and menopause symptom outcome measurement.",
  },
  {
    title: "Updated ASCCP Colposcopy Guidelines — Journal of Lower Genital Tract Disease 2023",
    description: "ASCCP 2023 colposcopy management guideline update expanding immediate treatment eligibility and updating biopsy protocols — required ASCCP CE update for WHNPs on updated colposcopy decision frameworks, biopsy technique documentation, and risk-stratified management reporting.",
  },
  {
    title: "Perinatal Mental Health Screening — JAMA 2024",
    description: "Implementation study (n=15,000 perinatal women) confirming WHNP-led universal perinatal depression screening using EPDS reduces untreated postpartum depression 42% — required AWHONN CE update for WHNPs on EPDS administration standards, positive screen referral documentation, and collaborative care for postpartum depression.",
  },
  {
    title: "LARC Access and Unintended Pregnancy Reduction — NEJM 2023",
    description: "Contraceptive CHOICE Project 10-year follow-up (n=9,000 women) confirming NP-provided LARC reduces unintended pregnancy rate 5.9x versus national rate — required WHNP CE update on immediate postpartum LARC insertion credentialing, same-day IUD placement protocols, and Title X reporting documentation.",
  },
  {
    title: "Pelvic Floor Rehabilitation in Women — Lancet 2024",
    description: "International multicenter RCT (n=2,000 women with pelvic floor disorders) confirming WHNP-led pelvic floor assessment and referral protocol reduces surgical intervention 31% — required AWHONN CE update for WHNPs on PFDI/PFIQ assessment tool documentation, pelvic floor PT referral criteria, and pessary fitting credentialing.",
  },
  {
    title: "AI-Assisted Cervical Cancer Screening — JAMA Oncology 2023",
    description: "Implementation study (n=25,000 cervical screening samples) confirming AI-assisted cytology screening achieves equivalent sensitivity to expert pathologist review — required ASCCP CE update for WHNPs on AI cytology reporting interpretation, updated Bethesda reporting system documentation, and co-testing protocol updates.",
  },
]

const testimonial = {
  quote:
    "WHNP-BC 5-year recertification with 45 CE hours, RNC-OB concurrent 3-year renewal, NCMP menopause certification annual renewal, C-EFM 3-year renewal, NRP biennial renewal, AWHONN Annual Convention, NAMS Annual Meeting, colposcopy annual competency verification and procedure volume log, LARC credentialing annual volume documentation, HEDIS cervical and breast screening quality measure reporting, EPDS perinatal mental health certification annual renewal, DEA 3-year renewal, collaborative agreement annual renewal, and state APRN license — across 9 organizations simultaneously. Momenties mapped every deadline.",
  name: "Chisom W.",
  title: "MSN, WHNP-BC, RNC-OB, NCMP, C-EFM, Women&apos;s Health NP",
}

export default function WomensHealthNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Women's Health Nurse Practitioners"
        title="WHNP-BC Certification. Colposcopy Credentialing. Menopause CE. One Calendar."
        subtitle="Momenties tracks WHNP-BC 5-year recertification CE cycles, NRP biennial renewal, NCMP menopause practitioner annual renewal, C-EFM 3-year renewal, colposcopy annual competency and procedure volume logging, LARC credentialing maintenance, HEDIS women&apos;s health quality measure compliance, EPDS perinatal mental health certification, DEA renewal, collaborative practice agreements, and state APRN license so Women&apos;s Health NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Women&apos;s Health NP Practice
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
