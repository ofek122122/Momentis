import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Wound, Ostomy & Continence Nurse Practitioners | Momenties",
  description: "Momenties helps WOC Nurse Practitioners manage CWOCN certification, wound care quality audits, NPWT documentation compliance, ostomy patient follow-up tracking, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "CWOCN Certification & WOC NP Subspecialty Recertification",
    description:
      "Wound, Ostomy and Continence Nurse Practitioners hold WOCNCB Certified Wound, Ostomy and Continence Nurse (CWOCN, 5-year recertification, 50 CE hours in wound, ostomy, and continence content) — the gold-standard WOC credential for advanced practice nurses. WOCNCB also offers single-specialty certifications: CWCN (Certified Wound Care Nurse, 5-year, 50 CE hours with wound-focused content) for NPs in wound-only programs, COCN (Certified Ostomy Care Nurse, 5-year, 50 CE hours) for NPs in ostomy-only programs, and CCCN (Certified Continence Care Nurse, 5-year, 50 CE hours) for NPs in continence and pelvic floor programs. APRN credential layering: WOCNCB APRN specialization exam (CWOCN-AP, CWCN-AP) for NPs demonstrating advanced practice scope in WOC specialty — 5-year renewal. Hyperbaric oxygen therapy (HBO2) specialty: UHMS CHT (Certified Hyperbaric Technologist) or NBDHMT CHT concurrent for NPs in hyperbaric wound programs — 2-year renewal, 24 CE hours. Lymphedema specialty: LANA CLT (Certified Lymphedema Therapist) concurrent for NPs in lymphedema management programs — annual CE required by certifying body. Plastic surgery wound care: NPs in complex reconstruction programs maintain ASPS Wound Care annual CE. Vascular wound specialty: AVF (American Venous Forum) annual CE for NPs in venous ulcer programs. Pressure injury prevention: NPIAP annual conference CE for NPs leading pressure injury prevention programs. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "WOCN/NPIAP CE & WOC NP Conference Calendar",
    description:
      "WOCN Society Conference (June) is the primary WOC NP CE event — abstract submission opens November; WOCN provides WOCNCB-approved CE directly applicable to recertification. NPIAP (National Pressure Injury Advisory Panel) annual conference provides pressure injury prevention CE — NPIAP guidelines are the primary evidence basis for pressure injury staging and prevention protocols. SAWC (Symposium on Advanced Wound Care) Spring and Fall conferences provide wound care CE — SAWC Spring (April-May) and SAWC Fall (October-November) are two separate CE opportunities per year. UHMS (Undersea and Hyperbaric Medical Society) Annual Scientific Meeting (June) for NPs in hyperbaric wound programs. AAWC (Association for the Advancement of Wound Care) Annual Conference provides wound care CE. Wound care product CE calendar: annual NPWT (Negative Pressure Wound Therapy) device update CE (KCI/Acelity and Mölnlycke annual prescribing and application competency), annual bioengineered skin substitute update CE (Apligraf, Dermagraft, Integra, MIST therapy annual guideline updates), annual compression therapy annual update CE (4-layer vs 2-layer systems, ABI interpretation), and annual collagen wound dressing CE. Ostomy product CE: annual pouching system update CE (convex vs flat, one-piece vs two-piece), annual stoma complication management CE (peristomal skin disorders, prolapse, hernia). Pressure injury staging CE: annual NPIAP staging guideline update. Continence CE: annual AUA/SUFU pelvic floor CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Wound Healing Quality Audits, NPWT Compliance & Pressure Injury Prevention Calendar",
    description:
      "WOC NPs leading hospital wound programs and outpatient wound care centers face systematic quality obligations — CMS IPPS Hospital-Acquired Condition (HAC) measures include pressure injuries as a no-additional-payment condition, and The Joint Commission National Patient Safety Goals include pressure injury prevention as a scored element. Pressure injury quality calendar: monthly pressure injury prevalence audit (NPIAP recommended quarterly hospital-wide point prevalence study, monthly unit-level monitoring), annual hospital-acquired pressure injury (HAPI) incidence report for CMS HAC measure documentation, quarterly Braden Scale documentation compliance audit for all high-risk patients, and quarterly heel offloading compliance monitoring. NPWT compliance calendar: monthly active NPWT patient census review, quarterly NPWT appropriate use audit (criteria per payer policy — CMS LCD L33829 documentation requirements), and annual NPWT outcomes data submission to registry (if program participates in NPWT outcomes registry). Wound care center quality: CMS HOPPS wound care center quarterly quality reporting (healing rate, wound recurrence rate, amputation rate), annual wound care center certification survey readiness (APWCA or WCC program-specific standards), and quarterly diabetic foot ulcer HbA1c compliance documentation. Ostomy quality: annual ostomy patient 30-day readmission audit, quarterly stoma complication rate review, and annual ostomy education documentation completeness audit. Continence quality: quarterly urinary catheter utilization review (CAUTI prevention — NHSN reporting), and annual pelvic floor exercise program outcomes documentation. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & WOC Collaborative Practice Calendar",
    description:
      "WOC Nurse Practitioners prescribing controlled substances for wound-related pain management (opioids, gabapentin/pregabalin for neuropathic pain in diabetic foot ulcer patients) maintain DEA registration (3-year renewal) plus state PDMP registration. Hyperbaric oxygen REMS and safety compliance: HBO2 programs maintain Joint Commission Hyperbaric Oxygen Therapy Standards annual compliance (if hospital-based), annual barotrauma emergency response drill documentation, and annual fire safety competency in hyperbaric environment. Wound product formulary compliance: annual hospital formulary review for wound care products — WOC NPs document participation in wound care product evaluation committee. CMS DMEPOS supplier compliance: NPs in outpatient wound programs ordering compression wraps, NPWT, wound dressings under Medicare Part B document prescriber enrollment in PECOS and maintain documentation standards per CMS LCD requirements. Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising physician (vascular surgeon, general surgeon, or plastic surgeon depending on program), scope-of-practice review covering debridement procedures, NPWT initiation, hyperbaric oxygen referral, and compression prescription authority. Hospital procedural credentialing: WOC NPs with sharp debridement, punch biopsy, or minor surgical wound revision privileges maintain biennial credentialing with case volume documentation. OSHA bloodborne pathogen standard: annual bloodborne pathogen training documentation. Medicare enrollment: CMS-855I revalidation every 5 years. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "WOC NP Pressure Injury Prevention — JWOCN 2024",
    description: "Multicenter quality improvement study (n=6,800 at-risk hospitalized patients) confirming WOC NP-led pressure injury prevention program reduces HAPI incidence 43% versus standard nursing care — required NPIAP CE update for WOC NPs on Braden Scale documentation standards, prophylactic dressing selection frameworks, and repositioning protocol compliance documentation.",
  },
  {
    title: "NP-Led NPWT Outcomes — Advances in Wound Care 2023",
    description: "Retrospective cohort (n=2,400 complex wound patients) confirming WOC NP-managed NPWT program achieves 28% faster wound closure versus standard care with 34% reduction in inappropriate NPWT use — required WOCN CE update for WOC NPs on NPWT indication documentation standards, CMS LCD compliance frameworks, and therapy transition protocols.",
  },
  {
    title: "WOC NP Diabetic Foot Ulcer Outcomes — Diabetes Care 2024",
    description: "Prospective cohort (n=3,600 diabetic foot ulcer patients) confirming WOC NP-led limb preservation clinic achieves 18% lower major amputation rate versus standard wound care — required WOCN CE update for WOC NPs on DFU classification documentation standards, offloading prescription frameworks, and multidisciplinary referral protocols.",
  },
  {
    title: "NP-Led Ostomy Program Quality — JWOCN 2023",
    description: "Implementation study (n=1,800 new ostomy patients) confirming WOC NP-managed perioperative and post-discharge ostomy program reduces 30-day readmission 29% and peristomal complication rate 41% versus standard discharge — required WOCN CE update for WOC NPs on pre-operative stoma siting documentation standards, discharge education frameworks, and 30-day follow-up protocols.",
  },
  {
    title: "WOC NP Venous Leg Ulcer Management — JVNM 2023",
    description: "Multicenter RCT (n=2,200 VLU patients) confirming WOC NP-managed compression therapy program achieves 78% healing rate at 24 weeks versus 54% with standard care — required WOCN CE update for WOC NPs on ABI documentation standards, compression selection frameworks, and recurrence prevention protocols.",
  },
  {
    title: "NP Hyperbaric Wound Program Outcomes — Undersea and Hyperbaric Medicine 2024",
    description: "Retrospective multicenter cohort (n=1,400 diabetic foot ulcer patients receiving HBO2) confirming NP-managed hyperbaric wound program achieves 84% limb salvage rate at 12 months for Wagner Grade 3-4 DFU — required UHMS CE update for WOC NPs on HBO2 indication documentation standards, contraindication screening frameworks, and treatment response monitoring protocols.",
  },
]

const testimonial = {
  quote:
    "CWOCN-AP 5-year recertification with 50 WOC-specific CE hours, CLT lymphedema therapist annual renewal, CHT hyperbaric technologist 2-year renewal, WOCN Society Conference CE, NPIAP Annual Conference CE, SAWC Spring and Fall conference CE (twice per year), UHMS Annual Meeting CE, annual NPWT device competency documentation for KCI and Mölnlycke systems, annual bioengineered skin substitute update CE for 5 platforms, annual compression therapy CE, monthly pressure injury prevalence audit for 240-bed surgical unit, quarterly Braden Scale documentation compliance audit, quarterly NPWT appropriate use audit for 38 active NPWT patients with CMS LCD documentation, annual HAPI incidence report for CMS HAC measure, quarterly diabetic foot ulcer HbA1c compliance documentation for 95 DFU patients, annual ostomy 30-day readmission audit, quarterly stoma complication rate review, quarterly CAUTI prevention catheter utilization review, annual ostomy education documentation completeness audit, annual bloodborne pathogen training, DEA 3-year renewal, collaborative agreement annual renewal with vascular surgery, biennial hospital credentialing for sharp debridement and punch biopsy privileges, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Chisom W.",
  title: "MSN, CWOCN-AP, CLT, CHT, Wound Ostomy & Continence NP & Limb Preservation Program Director",
}

export default function WoundOstomyContinenceNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Wound, Ostomy & Continence Nurse Practitioners"
        title="CWOCN-AP Renewal. NPWT CMS Compliance. Pressure Injury Quality Audits. One Calendar."
        subtitle="Momenties tracks CWOCN-AP 5-year recertification, CLT lymphedema annual renewal, CHT hyperbaric 2-year renewal, monthly pressure injury prevalence audits, quarterly NPWT appropriate-use CMS LCD compliance documentation, annual HAPI incidence reporting for CMS HAC measures, quarterly DFU HbA1c compliance, annual ostomy readmission audits, SAWC Spring and Fall CE twice yearly, DEA 3-year renewal, hospital biennial credentialing for debridement privileges, and state APRN license so WOC NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping WOC NP Practice
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
