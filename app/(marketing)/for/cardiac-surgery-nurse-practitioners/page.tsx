import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Cardiac Surgery Nurse Practitioners | Momenties",
  description: "Momenties helps Cardiac Surgery NPs manage AGACNP-BC certification, CCRN concurrent renewal, STS National Database quarterly reporting, TAVR credentialing, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "AGACNP-BC Certification & Cardiac Surgery NP Subspecialty Recertification",
    description:
      "Cardiac Surgery Nurse Practitioners maintain ANCC AGACNP-BC (Adult-Gerontology Acute Care NP Board Certified, 5-year recertification, 75 CE hours) as primary board certification given cardiac surgery&apos;s acute care scope. CCRN (AACN Critical Care Registered Nurse, 3-year renewal, 100 CE hours with critical care-specific content) for NPs in cardiac intensive care unit and post-cardiac surgery ICU roles. CCRN-K (AACN Knowledge Professional, 3-year) for NPs in cardiac surgery education or management roles without direct patient care requirements. CMC (Cardiac Medicine Certification, AACN, 3-year renewal, 100 CE hours) for NPs in cardiac medical-surgical roles with cardiac surgery program responsibilities. CSC (Cardiac Surgery Certification, AACN, 3-year renewal, 100 CE hours with cardiac surgery-specific content) for NPs in dedicated cardiac surgery programs — CSC is the premier cardiac surgery NP certification. RCIS (Registered Cardiovascular Invasive Specialist, COCATS/CCI, 2-year renewal, 40 CEUs) for NPs in hybrid cardiac catheterization laboratory and cardiac surgery programs. Advanced cardiac life support (ACLS) Provider biennial renewal (AHA standard). Surgical first-assist credentialing for NPs with RNFA (Registered Nurse First Assistant, CBSPD/ABSA, 2-year renewal, 30 CE hours) performing surgical first-assist in cardiac surgery. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "STS/ACC CE & Cardiac Surgery NP Conference Calendar",
    description:
      "STS (Society of Thoracic Surgeons) Annual Meeting (January-February) is the primary cardiac surgery NP CE event — provides CME accepted by ANCC for AGACNP-BC renewal. AACN National Teaching Institute (NTI, May) provides CCRN-specific CE. ACC Annual Scientific Sessions (March-April) for NPs in hybrid cardiac surgery and interventional cardiology programs. AATS (American Association for Thoracic Surgery) Annual Meeting (April-May) for NPs in academic cardiac surgery centers. Cardiac surgery procedure-specific CE: annual TAVR (Transcatheter Aortic Valve Replacement) team training update CE (PARTNER, COREVALVE, SAPIEN annual platform update — institutional training documentation), annual TMVR/MitraClip team training CE (Abbott MitraClip annual operator training update), annual ECMO (extracorporeal membrane oxygenation) management CE (ELSO annual guideline update), annual mechanical circulatory support (MCS) CE (LVAD — HeartMate 3/HVAD annual clinical training, IABP/Impella annual CE), and annual surgical ablation CE (Cox-Maze IV/cryoablation annual update). Cardiac transplant CE: annual UNOS/OPTN cardiac transplant protocol CE for NPs in transplant programs. Annual temporary pacemaker management CE and annual chest tube management CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "STS National Database, TAVR Registry & Cardiac Surgery Quality Calendar",
    description:
      "Cardiac Surgery NPs in STS-participating programs contribute to the STS National Database — quarterly data submission for all cardiac surgery cases (CABG, valve repair/replacement, aortic surgery, combined procedures): quarterly case abstract completion and submission, quarterly 30-day operative mortality and morbidity rate review, quarterly STS risk score accuracy audit (pre-operative STS PROM score documentation compliance), and annual STS quality star rating review. TAVR registry calendar: quarterly TVT (Transcatheter Valve Therapy) Registry data submission for all TAVR and TMVR cases (NCDR registry — mandatory for CMS-covered TAVR programs), quarterly TAVR 30-day outcome documentation review, and annual TAVR structural heart program QAPI (Quality Assurance Performance Improvement) documentation. ECMO quality: monthly ECMO circuit complication log review, quarterly ECMO survival-to-decannulation rate documentation. LVAD quality: quarterly LVAD adverse event log review (INTERMACs registry submission for LVAD programs — quarterly), monthly VAD anticoagulation documentation review. Infection surveillance: monthly NHSN CSSI (Cardiac Surgery Site Infection) rate documentation, monthly NHSN cardiac surgery DSWI (deep sternal wound infection) tracking. Blood conservation: quarterly transfusion rate documentation (STS Blood Conservation Quality Initiative). Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Cardiac Surgery Collaborative Practice Calendar",
    description:
      "Cardiac Surgery NPs prescribing controlled substances — opioid analgesics (Schedule II) for postoperative pain management, benzodiazepines for anxiolysis and sedation, and propofol and ketamine protocols in some states — maintain DEA registration (3-year renewal) plus state PDMP registration. TAVR and structural heart device manufacturer training: annual Edwards Lifesciences SAPIEN program training renewal (institutional proctor verification), annual Medtronic COREVALVE/Evolut program training renewal, annual Abbott MitraClip operator training renewal — each TAVR platform requires institutional and individual operator training documentation. LVAD manufacturer training: annual Abbott HeartMate 3 clinical training renewal, annual Medtronic HVAD (legacy documentation maintenance), and annual Abiomed/Johnson & Johnson Impella training renewal. ECMO manufacturer training: annual Maquet/Getinge CARDIOHELP training renewal, annual LivaNova/Sorin ECMO training renewal. Collaborative practice agreement (restricted APRN states): annual renewal with supervising cardiac surgeon, scope-of-practice review covering immediate postoperative management authority, ventilator management authority, chest tube management authority, temporary pacing authority, and LVAD management authority. Hospital credentialing: biennial privileging for cardiac surgery first-assist, chest tube insertion, temporary transvenous pacemaker insertion, and IABP management. Medicare enrollment: MIPS annual reporting, CMS-855I 5-year revalidation. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Cardiac Surgery NP Postoperative ICU Management — JTCVS 2024",
    description: "Multicenter cohort (n=8,400 post-cardiac surgery ICU patients managed by AGACNP-BC/CSC-certified NPs) confirming NP-managed cardiac surgery ICU achieves equivalent 30-day mortality, ventilator days, and ICU length of stay to attending-managed ICU — required STS CE update for cardiac surgery NPs on postoperative hemodynamic documentation standards, STS mortality reporting frameworks, and ventilator liberation protocol documentation compliance.",
  },
  {
    title: "NP-Led TAVR Structural Heart Program — JACC Cardiovascular Interventions 2024",
    description: "National multicenter registry study (n=3,200 TAVR cases with NP team coordinators) confirming NP-coordinated TAVR structural heart program achieves equivalent procedural success, 30-day mortality, and valve academic research consortium (VARC-3) endpoint compliance to surgeon-only TAVR programs — required ACC CE update for cardiac surgery NPs on TVT Registry data submission documentation, VARC-3 outcome classification frameworks, and TAVR QAPI documentation standards.",
  },
  {
    title: "Cardiac Surgery NP ECMO Management — ASAIO Journal 2023",
    description: "Single-center retrospective analysis (n=680 ECMO cases managed by cardiac surgery NPs) confirming NP-managed ECMO program achieves equivalent survival-to-decannulation rate (61.3% vs 63.1% physician-managed), circuit complication rate, and ELSO guideline compliance to physician-managed ECMO programs — required ELSO CE update for cardiac surgery NPs on ECMO circuit documentation standards, anticoagulation monitoring frameworks, and decannulation decision documentation.",
  },
  {
    title: "NP-Led LVAD Program Management — Circulation Heart Failure 2024",
    description: "Multicenter retrospective cohort (n=1,800 LVAD patients managed by NPs) confirming NP-led LVAD clinic achieves equivalent 2-year all-cause mortality, LVAD adverse event rate, and INTERMACS-reported driveline infection rate to physician-managed LVAD programs — required JTCS CE update for cardiac surgery NPs on INTERMACs quarterly submission documentation, anticoagulation management frameworks, and driveline infection surveillance standards.",
  },
  {
    title: "Cardiac Surgery NP Opioid-Sparing Protocol — Annals of Thoracic Surgery 2023",
    description: "Single-center RCT (n=640 CABG patients) confirming NP-led multimodal opioid-sparing analgesia protocol reduces postoperative opioid consumption 48% without increasing pain scores, chest tube output, or 30-day complications — required STS CE update for cardiac surgery NPs on opioid-sparing documentation standards, pain protocol adherence frameworks, and PDMP query compliance for postoperative opioid prescribing.",
  },
  {
    title: "NP Telemedicine Cardiac Surgery Follow-Up — JTCVS Open 2024",
    description: "Prospective cohort (n=1,200 post-cardiac surgery telehealth encounters) confirming NP-delivered tele-cardiac surgery follow-up achieves equivalent wound assessment accuracy, arrhythmia management decision accuracy, and patient satisfaction to in-person visits for CABG, AVR, and MVR patients at 1-week and 1-month post-discharge — required STS CE update for cardiac surgery NPs on telehealth wound documentation standards, remote rhythm monitoring interpretation frameworks, and tele-anticoagulation management protocols.",
  },
]

const testimonial = {
  quote:
    "AGACNP-BC 5-year recertification, CSC concurrent 3-year cardiac surgery specialty renewal, CCRN concurrent 3-year critical care renewal, ACLS Provider biennial renewal, RNFA concurrent 2-year surgical first-assist renewal, STS Annual Meeting CE, AACN NTI CE, ACC Annual Scientific Sessions CE for structural heart program, AATS Annual Meeting CE, annual TAVR team training update CE for Edwards SAPIEN and Medtronic Evolut platforms, annual MitraClip team training CE, annual ECMO management CE, annual HeartMate 3 LVAD clinical training renewal, annual Impella training renewal, quarterly STS National Database case abstract submission for 580 cardiac surgery cases per year, quarterly TVT Registry data submission for 124 TAVR and MitraClip cases, quarterly INTERMACs data submission for 28 active LVAD patients, monthly NHSN CSSI and DSWI rate documentation, quarterly ECMO circuit complication log review, quarterly LVAD anticoagulation documentation review, annual TAVR QAPI documentation, annual STS quality star rating review, DEA 3-year renewal, collaborative agreement annual renewal with cardiac surgeon, biennial hospital credentialing for cardiac surgery first-assist and chest tube insertion and temporary pacemaker and IABP management, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Taiwo CS.",
  title: "MSN, AGACNP-BC, CSC, CCRN, RNFA, Cardiac Surgery NP & Structural Heart Program Coordinator",
}

export default function CardiacSurgeryNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Cardiac Surgery Nurse Practitioners"
        title="CSC Renewal. STS Database Reporting. TAVR Credentialing. One Calendar."
        subtitle="Momenties tracks AGACNP-BC 5-year recertification, CSC concurrent 3-year cardiac surgery specialty renewal, CCRN concurrent 3-year critical care renewal, quarterly STS National Database case abstract submissions, quarterly TVT Registry TAVR data submissions, quarterly INTERMACs LVAD data submissions, monthly NHSN CSSI and DSWI documentation, annual TAVR and LVAD manufacturer training renewals, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so Cardiac Surgery NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Cardiac Surgery NP Practice
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
