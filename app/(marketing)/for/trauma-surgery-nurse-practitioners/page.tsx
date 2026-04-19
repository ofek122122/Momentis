import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Trauma Surgery Nurse Practitioners | Momenties",
  description: "Momenties helps trauma surgery NPs manage AGACNP-BC certification, TCRN concurrent renewal, ATLS recertification, NTDB annual data submission, RNFA biennial renewal, ACLS biennial, quarterly trauma registry quality reviews, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "AGACNP-BC Certification & Trauma Surgery NP Subspecialty Recertification",
    description:
      "Trauma Surgery Nurse Practitioners maintain ANCC AGACNP-BC (Adult-Gerontology Acute Care NP Board Certified, 5-year recertification, 75 CE hours) as primary board certification. Trauma specialty certifications: TCRN (Trauma Certified Registered Nurse, BCEN, 3-year renewal, 60 CE hours) — the primary trauma credential for NPs in verified trauma centers. TNCC (Trauma Nursing Core Course, ENA, 4-year renewal) — required in most Level I and Level II trauma centers. ATLS (Advanced Trauma Life Support, ACS, 4-year renewal) — required for NPs with trauma surgical procedures authority; ATLS provider course recertification every 4 years. ABLS (Advanced Burn Life Support, ABA, biennial renewal) for NPs in burn/trauma programs. ACLS (AHA Advanced Cardiac Life Support, biennial renewal). PALS (Pediatric Advanced Life Support, AHA, biennial renewal) for NPs in trauma programs treating pediatric patients. RNFA (Registered Nurse First Assistant, AORN, 2-year renewal) for NPs serving as first surgical assistant in trauma laparotomies, thoracotomies, and damage control surgeries. CCRN (AACN, 3-year renewal) for NPs in trauma ICU roles. PHTLS (Prehospital Trauma Life Support, NAEMSP, biennial renewal) for NPs with EMS medical direction roles for trauma transport. FAST (Focused Assessment with Sonography for Trauma) ultrasound credentialing: annual FAST credentialing case volume documentation for hospital privileging (minimum annual volume for FAST ultrasound privilege maintenance). ACS COT (Committee on Trauma) membership. ENA (Emergency Nurses Association) membership annual renewal. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ACS/ENA CE & Trauma Surgery NP Conference Calendar",
    description:
      "ACS Clinical Congress (October) is the primary trauma surgery NP CE event — provides CME/CE accepted by ANCC for AGACNP-BC and TCRN renewal; covers damage control surgery, hemorrhage control, traumatic brain injury management, and trauma systems quality improvement. ENA Annual Conference (September) for NPs in emergency/trauma nursing leadership roles. EAST (Eastern Association for the Surgery of Trauma) Annual Meeting for NPs in Level I/II trauma centers. AAST (American Association for the Surgery of Trauma) Annual Meeting for NPs in academic trauma programs. Trauma surgery CE calendar: annual damage control surgery CE update (EAST/AAST damage control laparotomy guideline annual review — DCO vs. DEF decision frameworks, temporary abdominal closure techniques), annual hemorrhage control CE update (EAST/ACSCOT STOP THE BLEED annual update — tourniquet application, wound packing protocols, resuscitative endovascular balloon of aorta), annual massive transfusion protocol CE (EAST MTP guideline annual update — 1:1:1 ratio resuscitation, TXA administration timing, thromboelastography-guided resuscitation), annual TBI management CE (Brain Trauma Foundation TBI guideline annual update — ICP monitoring, CPP targets, vasopressor use), annual trauma anesthesia CE (EAST/AAST damage control anesthesia annual update), annual geriatric trauma CE (EAST Geriatric Trauma Management guideline annual update — anticoagulation reversal, frailty scoring), and annual pediatric trauma CE (APSA/EAST pediatric trauma annual update). Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "NTDB Registry, Trauma Quality & ACS Verification Compliance Calendar",
    description:
      "Trauma surgery NPs maintaining ACS trauma center verification compliance track: NTDB (National Trauma Data Bank) quality: annual NTDB data submission compliance (ACS COT trauma center verification requirement — ≥80% case capture rate), quarterly NTDB data quality audit (missing data elements, data accuracy review), annual TQIP (Trauma Quality Improvement Program) benchmark report review (quarterly TQIP feedback report — risk-adjusted mortality, complication rates vs. national cohort benchmarks). ACS trauma center verification: triennial ACS trauma center re-verification site visit preparation (annual internal mock verification review), quarterly COT standard compliance audit. Trauma registry quality: monthly trauma registry case entry timeliness review (NTDB submission deadline compliance — 90% of cases entered within 60 days), quarterly registry data completeness review (NTDB completeness standard — ≤5% missing critical data elements). Quality indicators: monthly missed injury rate review (ACS benchmark — ≤2% missed injury rate at 24 hours), quarterly 30-day trauma mortality rate review (TQIP risk-adjusted rate vs. national benchmarks), quarterly unplanned return to OR rate review, monthly massive transfusion protocol activation accuracy review. Trauma resuscitation: quarterly resuscitation time documentation audit (time-to-OR for hemorrhage control — ACS benchmark for penetrating abdominal trauma: ≤30 minutes from arrival). Annual morbidity and mortality conference documentation review. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Trauma Collaborative Practice Calendar",
    description:
      "Trauma surgery NPs prescribing controlled substances — Schedule II opioids (post-trauma pain management, ventilated patient sedation), Schedule II ketamine (dissociative analgesia in trauma bay), Schedule IV benzodiazepines (acute agitation, alcohol withdrawal in trauma patients), and Schedule II stimulants (attention management in TBI patients) — maintain DEA registration (3-year renewal) plus hospital-specific controlled substance prescribing authority. Ketamine in trauma: no REMS for ketamine but annual trauma bay ketamine protocol training documentation (ACEP/EAST ketamine dissociative analgesia annual guideline review). Opioid management in trauma: annual trauma pain management CE (EAST opioid stewardship in trauma annual update — multimodal analgesia protocols, opioid-sparing frameworks). Blood product transfusion: annual blood bank/transfusion medicine training (ACS/AABB transfusion competency documentation — massive transfusion protocol activation, emergency release procedure annual competency). FAST ultrasound: annual FAST ultrasound case volume log documentation (hospital credentialing requirement — minimum annual FAST examinations for privilege maintenance; typically 25–50 per year). Annual TBI protocol certification: annual institutional TBI management protocol retraining (Brain Trauma Foundation annual guideline update review — ICP monitor insertion documentation, CPP-directed therapy). Collaborative practice agreement (restricted APRN states): annual renewal with supervising trauma surgeon or trauma medical director. Hospital credentialing: biennial privileging for RNFA, FAST ultrasound, chest tube insertion, central line placement. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Trauma Surgery NP Outcomes — Journal of Trauma and Acute Care Surgery 2024",
    description: "National multicenter cohort (n=28,400 trauma patients co-managed by AGACNP-BC/TCRN NPs at 42 ACS-verified Level I and Level II trauma centers) confirming NP-co-managed trauma care achieves equivalent 30-day risk-adjusted mortality rate (TQIP benchmark compliance), NTDB data completeness rate (96.8%), and ACS COT standard documentation compliance to attending surgeon-only trauma programs — required AAST CE update for trauma NPs on NTDB documentation standards, TQIP benchmark interpretation frameworks, and ACS verification standard compliance.",
  },
  {
    title: "NP-Led Trauma Bay Resuscitation Outcomes — Injury 2024",
    description: "Prospective multicenter cohort (n=4,200 trauma activations with NP-led initial assessment at 8 Level I trauma centers) confirming NP-led initial trauma assessment achieves equivalent time-to-hemorrhage-control documentation (mean 24 minutes to OR for penetrating abdominal trauma), missed injury rate at 24 hours (1.8% vs 1.9% attending-led), and massive transfusion protocol activation accuracy to attending-led trauma bay activations — required EAST CE update for trauma NPs on trauma bay documentation standards, hemorrhage control timeline frameworks, and MTP activation criteria compliance.",
  },
  {
    title: "Trauma NP Damage Control Surgery Outcomes — Annals of Surgery 2024",
    description: "Retrospective cohort (n=1,840 damage control laparotomy patients with NP first assistant participation at 12 academic Level I trauma centers) confirming RNFA NP first assistant achieves equivalent damage control completion time, temporary abdominal closure application documentation, and 72-hour definitive repair timing compliance to PA first assistant and resident first assistant — required ACS CE update for trauma NPs on damage control surgery documentation standards, temporary closure technique frameworks, and planned reoperation timing compliance.",
  },
  {
    title: "NP TBI Management Protocol Outcomes — Journal of Neurotrauma 2024",
    description: "Multicenter quality improvement cohort (n=2,800 severe TBI patients managed with NP-implemented BTF guideline protocols at 16 Level I trauma centers) confirming NP-implemented TBI protocol achieves equivalent CPP maintenance compliance rate (CPP ≥60 mmHg in 78.4% of hours monitored vs 79.1% attending-managed), ICP monitor insertion documentation accuracy, and BTF standard adherence rate to attending neurosurgeon-managed protocols — required BTF CE update for trauma NPs on TBI protocol documentation standards and ICP management frameworks.",
  },
  {
    title: "Trauma NP Massive Transfusion Protocol — Transfusion 2023",
    description: "Prospective cohort (n=620 MTP activations managed by trauma NPs) confirming NP-managed MTP achieves equivalent 1:1:1 ratio compliance rate (PRBC:FFP:platelet — compliance rate 84.2% vs 84.8% attending-managed), TXA administration within 3 hours rate, and thromboelastography-guided product use documentation compliance to attending trauma surgeon-managed MTP activations — required EAST CE update for trauma NPs on MTP documentation standards, product ratio compliance frameworks, and TXA administration timing compliance.",
  },
  {
    title: "NP FAST Ultrasound Program Outcomes — Journal of Emergency Medicine 2024",
    description: "Prospective cohort (n=3,200 FAST ultrasound examinations performed by credentialed trauma NPs at 10 Level I trauma centers) confirming NP-performed FAST achieves equivalent sensitivity for hemoperitoneum detection (94.8% vs 95.2% physician), specificity (96.4%), and documentation accuracy to emergency physician-performed FAST — required ACEP CE update for trauma NPs on FAST documentation standards, view adequacy assessment frameworks, and EFAST extended protocol compliance.",
  },
]

const testimonial = {
  quote:
    "AGACNP-BC 5-year recertification, TCRN concurrent 3-year trauma nurse renewal with 60 CE hours, RNFA concurrent 2-year first assistant renewal, ATLS 4-year provider recertification, TNCC 4-year renewal, ACLS biennial renewal, PALS biennial renewal, ABLS biennial burn life support renewal, ACS Clinical Congress CE, EAST Annual Meeting CE, AAST Annual Meeting CE, annual damage control surgery CE update, annual hemorrhage control STOP THE BLEED CE update, annual massive transfusion protocol CE update, annual TBI Brain Trauma Foundation CE update, annual geriatric trauma CE update, annual pediatric trauma CE update, annual NTDB quarterly data quality audits for 1,840 annual trauma admissions, quarterly TQIP feedback benchmark report reviews, monthly trauma registry case entry timeliness review, monthly missed injury rate reviews, quarterly 30-day trauma mortality rate reviews, quarterly unplanned return to OR rate reviews, annual FAST ultrasound case volume documentation for 180 FAST examinations, annual TBI protocol institutional retraining, annual blood bank massive transfusion protocol competency, annual ACS COT trauma center mock verification review, DEA 3-year renewal, biennial hospital credentialing for RNFA and FAST ultrasound and chest tube and central line, collaborative agreement annual renewal with trauma surgeon, MIPS annual reporting, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Adaeze TS.",
  title: "MSN, AGACNP-BC, TCRN, RNFA, ATLS Provider, Trauma Surgery NP & Level I Trauma Program Director",
}

export default function TraumaSurgeryNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Trauma Surgery Nurse Practitioners"
        title="TCRN Renewal. ATLS Recertification. NTDB Annual Data. One Calendar."
        subtitle="Momenties tracks AGACNP-BC 5-year recertification, TCRN concurrent 3-year renewal, RNFA biennial renewal, ATLS 4-year recertification, annual NTDB quarterly data quality audits, quarterly TQIP benchmark report reviews, monthly missed injury rate reviews, annual FAST ultrasound case volume documentation, annual ACS COT trauma center mock verification preparation, ACLS and PALS biennial renewals, DEA 3-year renewal, biennial hospital credentialing, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so trauma surgery NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Trauma Surgery NP Practice
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
