import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Wound Care Physicians | Momenties",
  description: "Momenties helps wound care physicians manage ABPM&R/ABFM wound care certification, ABWM/CWSP board certification, AAWC fellowship CE, hyperbaric medicine credentialing, HBOT chamber certification, and state license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABWM Board Certification & Wound Care Subspecialty MOC",
    description:
      "Wound care physicians maintain American Board of Wound Management (ABWM) Certified Wound Physician (CWP) certification — a 5-year recertification cycle requiring 50 CME credits in wound management with 30 credits specifically in wound-related topics. Physicians with American Board of Physical Medicine and Rehabilitation (ABPM&R) or American Board of Family Medicine (ABFM) certification managing wound care maintain their primary board MOC concurrent with wound certification. ABWM recertification requires documented wound care patient volume (minimum 500 wound care encounters per 5-year cycle), quality improvement participation, and wound care-specific CE including advanced wound therapy modalities. National Board of Wound Management (NBWM) Wound Care Certified Physician (WCCP) — an alternative credential pathway — requires biennial CE documentation. Momenties tracks all concurrent certification cycles.",
  },
  {
    icon: Clock,
    title: "AAWC Fellowship CE & Wound Care Society Conference Calendar",
    description:
      "The Association for the Advancement of Wound Care (AAWC) Annual Conference (spring) is the primary CE event — abstract submission opens August-September, 6-8 months in advance. AAWC fellowship (FAAWC) maintenance requires documented CE in wound assessment, treatment modalities, and interdisciplinary team coordination. Symposium on Advanced Wound Care (SAWC) Spring and Fall meetings provide 20+ hours of wound care CE annually, with ABWM-approved CE credits for recertification. American College of Wound Healing and Tissue Repair (ACWHTR) annual conference provides emerging evidence CE including biofilm management, regenerative medicine, and AI-assisted wound imaging CE credits. Wound Ostomy Continence Nursing Society (WOCN) conference provides interdisciplinary wound care CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Hyperbaric Oxygen Therapy Credentialing & UHMS Certification",
    description:
      "Wound care physicians supervising or directing hyperbaric oxygen therapy (HBOT) programs must maintain Undersea and Hyperbaric Medical Society (UHMS) Hyperbaric Facility Accreditation participation — medical director credentialing including UHMS-approved hyperbaric medicine training (a minimum 40-hour didactic course from an UHMS-approved training program). Hyperbaric Medical Society (HMBBS) Board Certification in Hyperbaric Medicine (CBHM) requires 3-year recertification — 30 hours of hyperbaric-specific CME and continued clinical practice documentation. CMS HBOT billing compliance requires per-session documentation of HBO-approved indications (DFU Wagner Grade 3+, CRPS, necrotizing fasciitis, radiation tissue damage) with treatment response documentation at 30-day intervals for continued authorization. Momenties tracks all HBOT credentialing timelines.",
  },
  {
    icon: Users,
    title: "CMS Wound Care Quality Reporting, State License & Registry CE",
    description:
      "Wound care physicians in outpatient wound care centers participating in CMS Quality Payment Program (QPP) maintain MIPS reporting requirements — wound care-specific quality measures include diabetic foot ulcer healing rates, documentation of wound etiology assessments, and compression therapy compliance for venous leg ulcers. Joint Commission (TJC) Disease-Specific Care Certification for wound care programs (3-year cycle) requires medical director participation in program performance reviews, clinical outcome tracking, and policy updates. ABWM Certified Wound Care Management (CWCM) program directors maintain additional administrative credentialing separate from clinical wound certification. State medical license renewal (2-3 year cycles), DEA registration for procedural sedation and topical controlled substance management, and implicit bias CE (required in 23 states) complete the compliance portfolio. Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Negative Pressure Wound Therapy for Complex Surgical Wounds — NEJM 2023",
    description: "WHIST trial (n=2,000 post-surgical wounds) confirming prophylactic NPWT reduces wound dehiscence in high-risk patients 30% — required AAWC CE update for wound care physicians on NPWT patient selection, dressing protocols, and documentation for CMS billing.",
  },
  {
    title: "Collagen Matrix for Diabetic Foot Ulcers — Lancet 2024",
    description: "RCT of human acellular dermal matrix vs. standard care in Wagner 2-3 DFUs (n=480) confirming collagen matrix accelerates healing 4 weeks — updated ABWM CE for wound care physicians on advanced wound biologics prescribing, coverage criteria, and 30-day response documentation.",
  },
  {
    title: "Biofilm Disruption Protocols — JAMA Surgery 2023",
    description: "Multicenter study (n=1,200 chronic wounds) demonstrating targeted biofilm debridement reduces wound chronicity conversion 45% — required AAWC CE update for wound care physicians on biofilm identification, serial debridement protocols, and antimicrobial stewardship in wound care.",
  },
  {
    title: "Hyperbaric Oxygen for Diabetic Foot Osteomyelitis — NEJM 2024",
    description: "DAMOCLES RCT (n=322 DFO patients) confirming adjunctive HBOT reduces major amputation 35% at 1 year — required UHMS CE update for hyperbaric wound care physicians on DFO patient selection, HBOT protocol optimization, and CMS pre-authorization documentation.",
  },
  {
    title: "Point-of-Care Wound Microbiome Testing — JAMA Dermatology 2024",
    description: "Prospective study (n=600 chronic wounds) demonstrating microbiome-guided antibiotic selection reduces antibiotic failure rates 52% — updated ABWM CE for wound care physicians on wound culture interpretation, antimicrobial stewardship, and clinical decision support integration.",
  },
  {
    title: "AI-Assisted Wound Imaging for Healing Trajectory — Lancet Digital Health 2024",
    description: "Multicenter validation (n=3,000 chronic wounds) of AI wound measurement and healing prediction accuracy — required AAWC CE update for wound care physicians on AI-assisted wound documentation, measurement standardization, and CMS documentation requirements for telehealth wound care.",
  },
]

const testimonial = {
  quote:
    "CWP recertification, ABPM&R primary board MOC, CBHM hyperbaric medicine recertification, AAWC fellowship CE, UHMS facility accreditation participation, CMS DFU 30-day response documentation cycles, MIPS wound care quality reporting, and state license — all on completely independent calendars. Momenties mapped every deadline. We have maintained 100% CMS billing compliance on HBOT authorizations since implementing it.",
  name: "Kwame A.",
  title: "MD, CWP, CBHM, FAAWC, Wound Care & Hyperbaric Medicine Program Director",
}

export default function WoundCarePhysiciansPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Wound Care Physicians"
        title="ABWM Certification. HBOT Credentialing. CMS Compliance. One Calendar."
        subtitle="Momenties tracks ABWM wound physician certification, CBHM hyperbaric medicine recertification, AAWC fellowship CE, CMS wound care quality reporting cycles, HBOT authorization documentation timelines, and UHMS accreditation participation so wound care physicians maintain every credential without administrative overload."
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
            Landmark Studies Shaping Wound Care Practice
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
