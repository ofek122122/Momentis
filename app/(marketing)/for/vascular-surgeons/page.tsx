import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Vascular Surgeons | Momenties",
  description: "Momenties helps vascular surgeons manage ABVS board certification renewal, SVS fellowship CE, endovascular procedure credentialing, EVAR/TEVAR device training, and state license compliance in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABVS/ABS Vascular Surgery Board Certification & MOC",
    description:
      "Vascular surgeons certified through the American Board of Vascular Surgery (ABVS) or through the American Board of Surgery (ABS) vascular surgery subspecialty maintain 10-year recertification cycles with content-specific examinations covering open and endovascular aortic repair, carotid endarterectomy, peripheral artery disease management, venous disease, and hemodialysis access surgery. ABS recertification requires concurrent completion of SCORE curriculum self-assessment and ACS-AEI simulation assessments. RVT (Registered Vascular Technologist) or RPVI (Registered Physician in Vascular Interpretation) credentialing — increasingly required for vascular surgery practices with in-house duplex labs — adds independent maintenance requirements. Momenties tracks all timelines.",
  },
  {
    icon: Clock,
    title: "SVS Fellowship CE & Vascular Society Conference Calendar",
    description:
      "The Society for Vascular Surgery (SVS) Vascular Annual Meeting (VAM) is the primary CE event — abstract submission opens October-November for June conferences. SVS Quality Initiative (SVS-QI) requires annual outcomes data submission for practice-based certification programs. The Vascular and Endovascular Surgery Society (VESS) and the Southern Association for Vascular Surgery (SAVS) provide subspecialty CE for academic vascular surgeons. SVS Clinical Practice Guidelines — updated 2023-2024 for EVAR surveillance (new post-EVAR imaging protocol), lower extremity PAD management, and TOS (thoracic outlet syndrome) — require documented CE review for SVS fellowship maintenance. ACLS recertification (2-year cycle) is required for all vascular surgeons. Momenties schedules all.",
  },
  {
    icon: BarChart3,
    title: "Endovascular Procedure Credentialing & EVAR/TEVAR Device Training",
    description:
      "Vascular surgeons performing endovascular procedures navigate the most complex device-specific credentialing landscape in surgery. EVAR/TEVAR stent graft credentialing requires proctored cases and manufacturer IFU training for each device platform — Cook Zenith, Gore Excluder/TAG, Medtronic Endurant/Valiant, and Endologix all maintain independent training programs with annual update requirements when new iterations are introduced. TCAR (transcarotid artery revascularization) requires manufacturer ENROUTE system training (ENROUTE TCAR Certification) before independent practice. Peripheral vascular intervention credentialing for atherectomy systems (Philips Spectranetics, BD Rotarex) follows similar manufacturer-specific training cycles. Momenties tracks all device certification timelines.",
  },
  {
    icon: Users,
    title: "State License, DEA & Vascular Registry Participation",
    description:
      "Vascular surgery practices participating in SVS-QI, the Vascular Quality Initiative (VQI) regional data centers, or the National Surgical Quality Improvement Program (NSQIP) must submit procedure outcomes data within 90 days of each procedure, with annual program participation reviews. Hospital reappointment (typically 2-year cycles) requires documented procedure volumes, complication rates within national benchmarks, and any adverse outcome reporting. State medical license renewal (2-3 year cycles) with state-specific CME requirements, DEA registration for post-operative pain management, and fluoroscopy safety certification (required in several states for endovascular procedures) complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "ESVS 2023 Clinical Practice Guidelines for PAD — EJVES 2023",
    description: "Comprehensive European Society for Vascular Surgery guideline update covering revascularization thresholds, antiplatelet/anticoagulation protocols, hybrid procedures, and CLTI management — required CE for all vascular surgery board recertification programs.",
  },
  {
    title: "TEVAR for Type B Aortic Dissection: 5-Year Outcomes — NEJM 2024",
    description: "INSTEAD-XL 10-year follow-up and new multicenter data (n=1,400 patients) confirming TEVAR superiority for uncomplicated type B dissection in aortic remodeling and late complications — updated SVS TEVAR CE and device credentialing requirements.",
  },
  {
    title: "CREST-2 Carotid Stenting vs Endarterectomy — NEJM 2024",
    description: "Multicenter RCT (n=2,480 patients) evaluating CAS vs CEA vs intensive medical therapy for asymptomatic carotid stenosis — landmark CE update for vascular surgeons on carotid revascularization indication thresholds and operative risk stratification.",
  },
  {
    title: "BEST-CLI Revascularization for CLTI — NEJM 2022 Extended Follow-Up",
    description: "2-year follow-up of BEST-CLI trial (n=1,830 patients) confirming vein bypass superiority over endovascular therapy in adequate single-segment vein patients — required SVS CE update for CLTI treatment algorithm and patient selection criteria.",
  },
  {
    title: "TCAR vs CEA Outcomes Registry Analysis — JVS 2024",
    description: "VQI registry analysis (n=18,000 cases) confirming TCAR non-inferiority to CEA for stroke/death rates with lower cranial nerve injury — updated vascular surgery TCAR credentialing CE on patient selection and technical outcomes benchmarks.",
  },
  {
    title: "Fenestrated EVAR for Complex Aortic Aneurysms — JAMA Surgery 2024",
    description: "Multicenter outcomes study (n=3,200 fenestrated/branched EVAR cases) establishing benchmark perioperative outcomes and surveillance protocols — required SVS CE and advanced endovascular credentialing update for FEVAR practitioners.",
  },
]

const testimonial = {
  quote:
    "ABS recertification, SVS fellowship CE, EVAR device training for three platforms, TCAR certification, VQI annual data submission, RPVI maintenance, hospital reappointment at four systems, and state license — each on a different schedule. Momenties gave me a single calendar for all of it. My ABS recertification application went in six months early for the first time in my career.",
  name: "Chukwuemeka O.",
  title: "MD, FACS, RPVI, Vascular Surgery Program Director",
}

export default function VascularSurgeonsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Vascular Surgeons"
        title="ABVS Certification. EVAR Device Credentialing. VQI Reporting. One Calendar."
        subtitle="Momenties tracks ABVS/ABS board certification, SVS fellowship CE, EVAR/TEVAR device training, TCAR certification, VQI data submission, and hospital reappointment so vascular surgeons manage credentials without administrative chaos."
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
            Landmark Studies Shaping Vascular Surgery Practice
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
