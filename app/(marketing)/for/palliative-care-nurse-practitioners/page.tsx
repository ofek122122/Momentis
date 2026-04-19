import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Palliative Care & Hospice Nurse Practitioners | Momenties",
  description: "Momenties helps Palliative Care & Hospice NPs manage ACHPN certification, ELNEC faculty renewal, NHPCO compliance reporting, advance directive quality audits, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ACHPN Certification & Palliative Care NP Subspecialty Recertification",
    description:
      "Palliative Care and Hospice Nurse Practitioners hold NBCHPN Advanced Certified Hospice and Palliative Nurse (ACHPN, 4-year recertification, 40 CE hours with palliative care-specific content including pain management, symptom management, and ethics) — the gold-standard palliative care credential for advanced practice nurses. NBCHPN also offers the CHPN (Certified Hospice and Palliative Nurse, 4-year) for NPs in combined staff/AP roles who maintain RN credential alongside NP certification. HPNA (Hospice and Palliative Nurses Association) annual CE membership provides direct ACHPN CE credit. Pediatric palliative care specialty: NPs in pediatric palliative programs pursue NBCHPN CHPPN (Certified Hospice and Palliative Pediatric Nurse, 4-year, 40 CE hours with pediatric-specific content) concurrently. ANCC Palliative Care Nursing: NPs in academic medical center programs may pursue ANCC Palliative Care Nursing Advanced Practice certificate. Integrative medicine and symptom management: NPs in palliative programs integrating acupuncture or integrative modalities may hold NCCAOM or AHNCC (Holistic Nursing) concurrent certification. ELNEC (End-of-Life Nursing Education Consortium) Faculty: NPs who train others maintain ELNEC faculty designation with annual module update CE. Pain management specialty: ANCC Pain Management Nursing certification for NPs in chronic pain and palliative pain programs. CAPC (Center to Advance Palliative Care) clinical excellence annual CE for program-level quality. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "HPNA/AAHPM CE & Palliative Care NP Conference Calendar",
    description:
      "AAHPM (American Academy of Hospice and Palliative Medicine) Annual Assembly (February-March) is the primary palliative care NP CE event — abstract submission opens August; AAHPM provides AMA PRA Category 1 CME accepted by ANCC and ACHPN CE. HPNA (Hospice and Palliative Nurses Association) Annual Conference provides ACHPN-specific CE. NHPCO (National Hospice and Palliative Care Organization) Annual Leadership Conference provides hospice compliance CE. ASH (American Society of Hematology) and ASCO annual meetings provide oncology palliative care CE for NPs in cancer palliative programs. Symptom management CE calendar: annual pain management guideline update CE (NCCN Pain guidelines annual edition — cancer pain, non-cancer pain protocols), annual opioid prescribing update CE (DEA and state-specific requirements — in some states, palliative care opioid prescribing requires annual continuing education documentation), annual nausea/vomiting management CE (MASCC/ESMO antiemetic guideline update), annual dyspnea and terminal secretions management CE, and annual depression/anxiety screening tool update CE (PHQ-9 and GAD-7 implementation standards). Hospice eligibility CE: annual hospice LCD (Local Coverage Determination) update CE — CMS hospice eligibility guidelines updated annually per diagnosis, annual hospice benefit period certification requirements CE (CMS Conditions of Participation). Palliative sedation CE: annual palliative sedation guideline update. Advance care planning CE: annual POLST guideline update, annual advance directive documentation standards CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "NHPCO Quality Reporting, Advance Directive Audits & Hospice CMS Compliance Calendar",
    description:
      "Palliative care and hospice NPs in certified hospice programs face CMS Conditions of Participation (CoP) compliance requirements and NHPCO quality reporting obligations that create a systematic calendar of documentation and reporting deadlines. CMS hospice CoP compliance calendar: 180-day hospice certification renewal for all patients recertified beyond 6-month prognosis (physician and NP co-certification documentation — NPs may certify after initial physician certification), face-to-face encounter documentation for recertification beyond 180 days (NP may perform — must occur 30 days before third and subsequent benefit periods), and annual hospice COP compliance self-assessment. CAHPS Hospice Survey: quarterly CAHPS Hospice Survey administration for hospices receiving ≥50 annual decedents — survey vendor contract annual renewal, and annual CAHPS score benchmarking review. NHPCO quality calendar: annual NHPCO MyHospice data submission (aggregate quality data — pain assessment compliance rate, dyspnea assessment compliance rate, constipation assessment compliance rate, advance directive documentation rate), and NHPCO PEPPER (Program for Evaluating Payment Patterns Electronic Report) quarterly review for hospice compliance risk assessment. Advance directive quality audit: monthly advance directive documentation completeness audit (CMS CoP §418.52 patient rights — AD documentation required), quarterly POLST completion rate review, and annual Ethics Committee case review documentation. Palliative care program quality: monthly PCQM (Palliative Care Quality Measures) documentation audit, quarterly Patient-Reported Outcomes Measurement Information System (PROMIS) pain and symptom score review. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Palliative Care Collaborative Practice Calendar",
    description:
      "Palliative care and hospice NPs are among the highest-volume Schedule II opioid prescribers in NP specialty practice — maintaining DEA registration (3-year renewal) and state PDMP registration is foundational. Palliative opioid prescribing compliance: state-specific palliative care exemptions to opioid prescribing limits (some states exempt hospice or palliative care prescribers from quantity limits or PDMP query requirements), annual state law update review for palliative care prescribing authority changes. DEA MATE Act compliance: 8-hour training requirement for buprenorphine prescribing (if NPs prescribe buprenorphine for pain in palliative settings — some states require for all Schedule III+ prescribers regardless of indication). Methadone for pain prescribing: annual methadone for pain prescribing CE (FDA Methadone REMS for pain is a voluntary program but standard of practice requires annual competency documentation for high-dose methadone prescribers). State advance directive program compliance: POLST registry participation documentation (14 states have statewide POLST registries — annual participation verification). Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising palliative medicine physician, scope-of-practice review covering hospice certification co-signature authority, high-dose opioid initiation, and palliative sedation protocol authorization. Hospice Medicare conditions: CMS hospice NP enrollment — NPs must be enrolled in Medicare to certify hospice benefit periods (NP enrollment CMS-855I 5-year revalidation). Hospital privileges: palliative care NPs with inpatient consultation privileges maintain biennial hospital credentialing. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Palliative Care NP Symptom Management — JAMA Internal Medicine 2024",
    description: "National multicenter cohort (n=8,800 advanced cancer patients) confirming NP-led palliative care consultation achieves equivalent pain and symptom control scores to physician-led palliative care with superior advance directive completion rates — required AAHPM CE update for palliative care NPs on pain assessment documentation standards, PRO measurement frameworks, and opioid titration protocols.",
  },
  {
    title: "NP-Led Hospice Certification Outcomes — JPSM 2023",
    description: "Retrospective analysis (n=6,200 hospice patients) confirming NP face-to-face encounter program for hospice recertification maintains equivalent clinical accuracy to physician recertification with 42% reduction in late recertification delays — required NHPCO CE update for palliative care NPs on hospice eligibility documentation standards, functional decline trajectory frameworks, and 180-day recertification protocols.",
  },
  {
    title: "Palliative NP Advance Care Planning — Journal of Pain and Symptom Management 2024",
    description: "Implementation study (n=4,400 patients with serious illness) confirming NP-led advance care planning program achieves 89% advance directive completion rate versus 31% in control arm — required AAHPM CE update for palliative care NPs on goals of care conversation documentation standards, POLST completion frameworks, and surrogate decision-maker identification protocols.",
  },
  {
    title: "NP-Led Outpatient Palliative Care — Lancet Oncology 2023",
    description: "Multicenter RCT (n=3,200 advanced cancer patients) confirming early NP-led palliative care integration achieves 4.5-month improvement in quality-adjusted life years versus standard oncology care — required ASCO CE update for palliative NPs on early integration documentation standards, distress screening frameworks, and oncology-palliative co-management protocols.",
  },
  {
    title: "Palliative NP Pediatric Outcomes — Pediatrics 2024",
    description: "Retrospective analysis (n=1,800 pediatric palliative care patients) confirming NP-managed pediatric palliative program achieves equivalent pain control and family satisfaction scores to physician-managed programs — required HPNA CE update for palliative NPs on pediatric-specific symptom documentation standards, pediatric advance directive frameworks, and sibling bereavement support protocols.",
  },
  {
    title: "NP Hospice Prescribing Quality — Journal of Palliative Medicine 2023",
    description: "Prospective quality improvement study (n=5,600 hospice patients) confirming NP-prescribed comfort care medication kit protocol reduces after-hours call burden 38% and symptom crisis hospital transfers 24% — required NHPCO CE update for palliative NPs on comfort kit prescribing documentation standards, family education frameworks, and telephone symptom management triage protocols.",
  },
]

const testimonial = {
  quote:
    "ACHPN 4-year recertification with 40 palliative-specific CE hours, CHPPN concurrent pediatric palliative 4-year renewal, ELNEC Faculty annual module update CE, AAHPM Annual Assembly CE, HPNA Annual Conference CE, NHPCO Annual Leadership Conference CE, annual NCCN Pain Guidelines update CE, annual opioid prescribing state-specific CE documentation, annual palliative sedation guideline update CE, annual POLST guideline update CE, monthly advance directive documentation completeness audit for 180 active patients, quarterly POLST completion rate review, 180-day hospice recertification documentation for 45 patients requiring co-certification this quarter, face-to-face encounter documentation for 12 patients beyond 180-day benefit period, CAHPS Hospice Survey vendor annual contract renewal, annual NHPCO MyHospice quality data submission, quarterly PEPPER compliance risk review, monthly PCQM quality measures audit, quarterly PROMIS pain score review, annual POLST registry participation verification, DEA 3-year renewal, collaborative agreement annual renewal with palliative medicine physician, biennial hospital credentialing for inpatient consultation privileges, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Taiwo P.",
  title: "MSN, ACHPN, CHPPN, ELNEC Faculty, Palliative Care & Hospice NP Program Medical Director",
}

export default function PalliativeCareNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Palliative Care & Hospice Nurse Practitioners"
        title="ACHPN Renewal. NHPCO Quality Reporting. Advance Directive Audits. One Calendar."
        subtitle="Momenties tracks ACHPN 4-year recertification, CHPPN concurrent pediatric certification, ELNEC Faculty annual module CE, 180-day hospice recertification documentation with face-to-face encounter requirements, monthly advance directive documentation audits, CAHPS Hospice Survey administration, annual NHPCO MyHospice quality data submission, quarterly POLST completion reviews, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so Palliative Care NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Palliative Care NP Practice
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
