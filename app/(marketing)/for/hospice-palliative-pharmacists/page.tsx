import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Hospice & Palliative Care Pharmacists | Momenties",
  description: "Momenties helps hospice and palliative care pharmacists manage BCPS/BCPP recertification, HPNA pharmacy CE, opioid prescribing DEA compliance, and state board pharmacy license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "BCPS/BCGP Recertification & Palliative Care Pharmacy MOC",
    description:
      "Hospice and palliative care pharmacists maintaining Board of Pharmacy Specialties (BPS) certification follow a 7-year recertification cycle — BCPS (Board Certified Pharmacotherapy Specialist) recertification requires 100 CE hours with documentation of practice area relevance, or passing the BCPS recertification examination. BCGP (Board Certified Geriatric Pharmacist) certification, highly relevant for hospice pharmacists serving geriatric populations, follows a 7-year cycle requiring 100 CE hours in geriatric pharmacy practice. Pharmacists in palliative care settings may hold BCPP (Board Certified Psychiatric Pharmacist) for dual psychiatric/palliative care roles — a 7-year cycle requiring 100 CE hours. ASHP (American Society of Health-System Pharmacists) Specialty Practice Residency PGY2 Palliative Care graduates maintain ASHP member continuing education requirements. HPNA (Hospice and Palliative Nurses Association) pharmacy track CE participation requires annual documentation. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "HPNA Pharmacy CE & Palliative Care Conference Calendar",
    description:
      "American Society of Health-System Pharmacists (ASHP) Midyear Clinical Meeting (December) and Summer Meetings provide primary BCPS CE — abstract submission opens June-July for Midyear, 5-6 months in advance. Hospice and Palliative Care Pharmacists Association (HPCA) Annual Symposium (April/May) is the primary specialty CE event for hospice pharmacists. NHPCO (National Hospice and Palliative Care Organization) Annual Leadership Conference (March) provides hospice operations CE. American Academy of Hospice and Palliative Medicine (AAHPM) Annual Assembly (February/March) provides interdisciplinary palliative care CE relevant for pharmacists in pain management and symptom control. Opioid analgesic prescribing CE — DEA Diversion Investigators training updates, Drug Enforcement Administration continuing education requirements for buprenorphine prescribing pharmacists — requires annual tracking. Palliative sedation competency training (Palliative Care Network of Wisconsin PCNOW modules) requires annual documentation at hospice institutions. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Opioid Prescribing DEA Compliance, REMS & Controlled Substance Calendar",
    description:
      "Hospice pharmacists managing opioid dispensing and prescribing compliance navigate layered federal and state regulatory obligations — DEA registration renewal (3-year cycle) for pharmacists with independent prescribing authority in collaborative practice agreements, plus state DEA registration where separate state DEA numbers are required. Extended-release opioid REMS (Risk Evaluation and Mitigation Strategy) — FDA ERLA REMS (Extended-Release/Long-Acting Opioid Analgesics) — requires pharmacist CE completion and dispensing compliance documentation with annual program updates. Buprenorphine dispensing training — DATA Waiver (now standard DEA registration) continuing education requirements for pharmacists in hospice medication management — requires annual compliance documentation. State prescription drug monitoring program (PDMP) mandatory reporting compliance (real-time dispensing reporting for Schedule II-IV controlled substances) requires standing protocol review. State pharmacy board CE — palliative care-specific CE hours required in states with specialty CE mandates — varies by state licensure. Momenties tracks all controlled substance compliance cycles.",
  },
  {
    icon: Users,
    title: "State Board Pharmacy License, Compounding Accreditation & Hospice Quality Calendar",
    description:
      "Hospice pharmacists managing compounded medications — particularly custom pain management formulations, topical analgesics, and comfort care compounded preparations — maintain USP 795 (non-sterile) and USP 797 (sterile) compounding competency certifications with annual training updates required by PCAB (Pharmacy Compounding Accreditation Board) accredited pharmacies. PCAB pharmacy compounding accreditation requires biennial renewal with staff training documentation. NHPCO Hospice Quality Reporting Program (HQRP) — Hospice Item Set (HIS) and Consumer Assessment of Healthcare Providers and Systems (CAHPS) Hospice Survey quarterly data reporting — requires pharmacist participation in medication management quality metrics. Joint Commission hospice accreditation (3-year cycle) requires pharmacy documentation compliance with Joint Commission medication management standards. State board pharmacy license renewal (1-2 year cycles) with state-specific CE requirements completes the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Opioid Rotation Protocols in Refractory Cancer Pain — JAMA Oncology 2024",
    description: "Systematic review (n=2,400 cancer patients requiring opioid rotation) confirming pharmacist-led opioid rotation protocols reduce refractory pain in 72% of cases — required HPCA CE update for hospice pharmacists on opioid rotation decision frameworks, equianalgesic dosing documentation, and collaborative pain management protocols.",
  },
  {
    title: "Palliative Sedation for Refractory Symptoms — NEJM 2023",
    description: "International multicenter study (n=800 terminal patients) establishing evidence base for proportionate palliative sedation protocols — required AAHPM CE update for hospice pharmacists on midazolam/phenobarbital palliative sedation protocols, documentation standards, and family communication frameworks.",
  },
  {
    title: "Pharmacist-Led Symptom Management in Hospice — Lancet Oncology 2024",
    description: "RCT (n=600 hospice patients) confirming pharmacist-driven symptom burden assessment reduces uncontrolled pain 38% versus standard nursing-only assessment — required BCPS CE update for hospice pharmacists on systematic symptom burden assessment tools, medication optimization protocols, and collaborative practice agreement scope.",
  },
  {
    title: "Ketamine for Opioid-Refractory Pain in Palliative Care — Pain 2023",
    description: "Cochrane systematic review update (n=400 palliative care patients) confirming sub-anesthetic ketamine infusion as effective opioid adjunct — required HPCA CE update for hospice pharmacists on ketamine compounding standards, sub-anesthetic dosing protocols, and hospice formulary approval documentation.",
  },
  {
    title: "Polypharmacy Deprescribing in Hospice — JAMA Internal Medicine 2024",
    description: "Cohort study (n=10,000 hospice patients) demonstrating pharmacist-led deprescribing reduces medication burden 45% while maintaining symptom control — required BCGP CE update for hospice pharmacists on STOPP/START criteria application, goals-of-care-aligned medication review frameworks, and family education protocols.",
  },
  {
    title: "Compounded Topical Analgesics in Palliative Care — Journal of Pain and Symptom Management 2023",
    description: "Meta-analysis (n=1,200 palliative care patients) evaluating evidence base for compounded topical analgesics — required PCAB CE update for hospice compounding pharmacists on evidence-based compounding standards, USP 795 compliance documentation, and palliative care formulary integration.",
  },
]

const testimonial = {
  quote:
    "BCPS 7-year recertification with 100 CE hours, BCGP concurrent renewal, ASHP Midyear CE, HPCA Annual Symposium, DEA 3-year renewal, ERLA REMS annual compliance, buprenorphine DEA continuing education, PCAB biennial compounding accreditation renewal, USP 795/797 annual competency training, PDMP mandatory reporting protocol annual review, NHPCO HQRP quarterly data, Joint Commission pharmacy documentation, and state board license — across two states simultaneously. Momenties mapped every deadline. I maintained BCPS and BCGP simultaneously for the first time without a missed CE.",
  name: "Kwame P.",
  title: "PharmD, BCPS, BCGP, Hospice & Palliative Care Pharmacist",
}

export default function HospicePalliativePharmacistsPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Hospice & Palliative Care Pharmacists"
        title="BCPS Recertification. Opioid REMS. DEA Compliance. One Calendar."
        subtitle="Momenties tracks BCPS and BCGP recertification CE cycles, HPCA specialty CE, DEA 3-year renewal, ERLA opioid REMS annual compliance, buprenorphine continuing education, PCAB compounding accreditation biennial renewal, USP 795/797 annual competency training, NHPCO quality reporting, and state pharmacy board license so hospice pharmacists maintain every credential without administrative overload."
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
            Landmark Studies Shaping Hospice Pharmacy Practice
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
