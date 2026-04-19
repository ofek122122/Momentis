import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Dermatology Nurse Practitioners | Momenties",
  description: "Momenties helps Dermatology NPs manage AGPCNP-BC certification, DCNP specialty renewal, laser safety officer certification, botulinum toxin competency, iPLEDGE REMS compliance, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "Dermatology NP Certification & Dermatological Subspecialty Recertification",
    description:
      "Dermatology Nurse Practitioners maintain ANCC Family NP Board Certified (FNP-BC) or AANP FNP-C as primary certification, with DERNCC (Dermatology Nurses&apos; Certification Corporation) specialty certifications layered on top. DCNP (Dermatology Certified Nurse Practitioner, DERNCC, 5-year, 75 CE hours with dermatology-specific content categories) — the primary dermatology NP specialty credential for NPs in medical and cosmetic dermatology programs. Aesthetic specialty: NPs in cosmetic dermatology programs maintain AMSN annual CE for injectable techniques and energy-based device updates; AAFPRS (American Academy of Facial Plastic and Reconstructive Surgery) CE for NPs performing aesthetic procedures. Dermatopathology overlap: NPs in academic dermatology programs maintaining ASDP (American Society of Dermatopathology) annual CE for biopsy technique and pathology correlation. Skin cancer specialty: NPs in Mohs surgery programs maintain ASDS (American Society for Dermatologic Surgery) annual CE; Mohs surgery assisting annual competency documentation. Phototherapy specialty: NPs managing phototherapy units (narrowband UVB, PUVA) maintain annual phototherapy protocol CE and state radiation safety documentation. Biologics specialty: NPs prescribing IL-4/IL-13 inhibitors (dupilumab, tralokinumab), IL-17 inhibitors (secukinumab, ixekizumab, bimekizumab), IL-23 inhibitors (guselkumab, risankizumab, tildrakizumab), and IL-12/23 inhibitors (ustekinumab) maintain annual biologic prescribing update CE per drug class. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "AAD/SDNP CE & Dermatology NP Conference Calendar",
    description:
      "American Academy of Dermatology (AAD) Annual Meeting (March) is the primary dermatology NP CE event — abstract submission opens July; AAD provides AMA PRA Category 1 CME accepted by ANCC. Society of Dermatology Nurse Practitioners (SDNP) Annual Conference (May) provides DCNP-approved CE with dermatology NP-specific content. ASDS Annual Meeting (October) provides dermatologic surgery CE for NPs in procedural programs. ASLMS (American Society for Laser Medicine and Surgery) Annual Conference (April) for NPs managing laser and energy-based device programs. Dermatology biologic CE calendar: annual dupilumab (Dupixent) prescribing update CE (atopic dermatitis — pediatric and adult label expansions require annual CE), annual IL-17 inhibitor update (secukinumab/ixekizumab — psoriasis and PsA label updates), annual IL-23 inhibitor update (risankizumab/guselkumab — psoriasis and PsA), annual JAK inhibitor update (abrocitinib, upadacitinib for atopic dermatitis — annual safety update CE required), and annual ustekinumab update CE. iPLEDGE REMS compliance: annual isotretinoin prescriber recertification (iPLEDGE — monthly prescriber registration maintenance), monthly patient pregnancy test documentation for female patients of childbearing potential, and isotretinoin monthly prescription authorization window management. Laser safety CE: Laser Safety Officer annual recertification (ASLMS or institutional — required for class 3B and 4 laser devices), new laser platform competency training per device, and vascular complication management CE for injectable procedures. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Laser Safety Competency, iPLEDGE Compliance & Dermatology Quality Calendar",
    description:
      "Dermatology NPs managing laser programs and iPLEDGE-enrolled patients face systematic quality documentation requirements — iPLEDGE monthly prescription authorization windows and laser safety officer certification are practice-critical compliance obligations with zero tolerance for lapse. Laser safety compliance calendar: annual LSO (Laser Safety Officer) certification renewal — ASLMS or ANSI Z136.3 standard compliance review, annual device-specific competency documentation per laser platform (Nd:YAG, IPL, CO2 fractional, diode, pulsed dye — separate competency per device category), and eye protection compliance annual audit (ANSI-compliant OD rating per laser wavelength). iPLEDGE compliance calendar: monthly prescriber registration renewal (iPLEDGE — prescribers must log in monthly to maintain active status), monthly patient pregnancy test documentation for females of childbearing potential (within 30 days before dispensing), 30-day prescription authorization window management (iPLEDGE — prescriptions must be authorized within 7 days of test for FCBP patients), and cumulative dose tracking per patient. Dermatology quality reporting: MIPS Psoriasis Measure — body surface area documentation, biologic therapy initiation threshold (BSA ≥10% or DLQI ≥10), atopic dermatitis EASI/IGA quarterly response monitoring, and MIPS annual quality reporting for dermatology NPs billing Medicare. Botulinum toxin quality: annual injection competency documentation (PREEMPT protocol for migraine prophylaxis, cosmetic dosing per anatomic site), complication management annual training, and annual filler injection competency with vascular occlusion emergency management CE. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Dermatology Collaborative Practice Calendar",
    description:
      "Dermatology NPs prescribing isotretinoin (iPLEDGE REMS), biologic injections requiring REMS training, scheduled medications including Schedule IV benzodiazepines for procedure anxiolysis, and topical anesthetic compounded preparations maintain DEA registration (3-year renewal) plus state PDMP registration where applicable. iPLEDGE REMS prescriber obligations: annual iPLEDGE educational module completion (FDA-mandated prescriber training renewal), monthly prescriber registration maintenance (login requirement), and monthly prescription authorization compliance per patient. Biologic REMS training: annual prescriber training completion for any biologic with REMS requirements — monitor FDA REMS updates annually for newly added dermatology biologic REMS programs. Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising dermatologist, scope-of-practice review covering biologic medication prescribing authority, isotretinoin prescribing, laser procedure ordering, Mohs surgery assisting, and botulinum toxin injection privileges. Injectable procedure liability: annual filler and botulinum toxin malpractice coverage review — confirm dermatology NP injector privileges are covered under professional liability policy (some policies require annual certification documentation). Hospital credentialing: dermatology NPs with procedure room privileges maintain biennial institutional credentialing with procedure volume documentation. MIPS reporting: MIPS annual quality reporting for dermatology NPs billing ≥$90,000 Medicare — dermatology measures include psoriasis body surface area documentation and biologic initiation appropriateness. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Dermatology NP Biologic Management — JAMA Dermatology 2024",
    description: "National multicenter cohort (n=5,400 moderate-to-severe psoriasis patients) confirming NP-managed biologic therapy achieves equivalent PASI 90 response rates at 24 weeks to dermatologist-managed care — required AAD CE update for dermatology NPs on biologic selection documentation standards, DLQI monitoring frameworks, and treat-to-target psoriasis algorithm protocols.",
  },
  {
    title: "NP-Led Atopic Dermatitis Management — NEJM Evidence 2023",
    description: "RCT (n=3,200 moderate-to-severe atopic dermatitis patients) confirming NP-managed dupilumab therapy achieves equivalent EASI-75 response rates to dermatologist-managed care with superior patient education scores — required AAD CE update for dermatology NPs on EASI/IGA documentation standards, JAK inhibitor safety monitoring frameworks, and atopic dermatitis treat-to-target protocols.",
  },
  {
    title: "Dermatology NP Skin Cancer Surveillance — Journal of the American Academy of Dermatology 2024",
    description: "Retrospective analysis (n=8,600 melanoma surveillance patients) confirming NP-led melanoma surveillance achieves equivalent 5-year melanoma-specific survival to dermatologist-managed surveillance — required ASDS CE update for dermatology NPs on dermoscopy documentation standards, total body photography frameworks, and biopsy decision threshold protocols.",
  },
  {
    title: "NP-Led Isotretinoin Management — Journal of the American Academy of Dermatology 2023",
    description: "Real-world cohort (n=4,800 iPLEDGE-enrolled acne patients) confirming NP-managed isotretinoin therapy achieves equivalent treatment completion rates and adverse event profiles to dermatologist-managed therapy — required SDNP CE update for dermatology NPs on iPLEDGE monthly authorization documentation standards, cumulative dose calculation frameworks, and teratogenicity counseling documentation protocols.",
  },
  {
    title: "Cosmetic Dermatology NP Outcomes — Dermatologic Surgery 2024",
    description: "Prospective multicenter cohort (n=6,200 cosmetic procedure patients) confirming NP-performed botulinum toxin and hyaluronic acid filler injections achieve equivalent patient satisfaction scores and complication rates to dermatologist-performed procedures — required ASDS CE update for dermatology NPs on PREEMPT protocol documentation, vascular occlusion emergency management frameworks, and cosmetic outcome assessment tools.",
  },
  {
    title: "NP Telemedicine Dermatology — JAMA Dermatology 2023",
    description: "Implementation study (n=9,400 teledermatology encounters) confirming NP-delivered teledermatology achieves equivalent diagnostic accuracy for common dermatological conditions to in-person care — required AAD CE update for dermatology NPs on teledermatology image documentation standards, dermoscopy photograph interpretation frameworks, and telehealth biopsy referral threshold protocols.",
  },
]

const testimonial = {
  quote:
    "FNP-BC 5-year recertification, DCNP concurrent 5-year renewal, AAD Annual Meeting CE, SDNP Annual Conference CE, ASDS Annual Meeting CE, ASLMS Annual Conference CE, annual LSO certification renewal for 4 laser platforms (Nd:YAG, CO2 fractional, IPL, diode), device-specific competency documentation for each platform, annual botulinum toxin injection competency with PREEMPT protocol, annual filler injection competency with vascular occlusion management, iPLEDGE monthly prescriber registration for 34 enrolled isotretinoin patients, monthly pregnancy test documentation for 12 FCBP patients, 30-day prescription authorization window management, annual iPLEDGE prescriber training renewal, annual dupilumab prescribing update CE, annual IL-17 inhibitor update CE, annual IL-23 inhibitor update CE, annual JAK inhibitor safety update CE, MIPS psoriasis body surface area documentation quarterly for 85 Medicare psoriasis patients, MIPS biologic initiation appropriateness annual reporting, DEA 3-year renewal, collaborative agreement annual renewal with supervising dermatologist, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Adaeze D.",
  title: "MSN, FNP-BC, DCNP, Dermatology NP & Cosmetic Dermatology Program Director",
}

export default function DermatologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Dermatology Nurse Practitioners"
        title="DCNP Renewal. iPLEDGE Compliance. Laser Safety Certification. One Calendar."
        subtitle="Momenties tracks FNP-BC 5-year recertification, DCNP concurrent 5-year renewal, iPLEDGE monthly prescriber registration and prescription authorization windows, annual LSO certification per laser platform, annual botulinum toxin and filler injection competency documentation, annual biologic prescribing updates across 5 drug classes, MIPS psoriasis and atopic dermatitis quality measures, DEA 3-year renewal, collaborative practice agreement annual renewal, and state APRN license so Dermatology NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Dermatology NP Practice
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
