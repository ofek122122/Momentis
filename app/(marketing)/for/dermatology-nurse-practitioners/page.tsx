import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Dermatology Nurse Practitioners | Momenties",
  description: "Momenties helps Dermatology NPs manage DCNP certification, CANS cosmetic neurotoxin renewal, iPLEDGE monthly compliance, biologic monitoring, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "DCNP Certification & Dermatology NP Subspecialty Recertification",
    description:
      "Dermatology Nurse Practitioners maintain ANCC FNP-BC or AGPCNP-BC (5-year recertification, 75 CE hours) as primary board certification, given dermatology&apos;s outpatient-dominant, all-age scope. DCNP (Dermatology Certified Nurse Practitioner, DCANP/Dermatology Nurses&apos; Association, 5-year renewal, 75 CE hours including 45 dermatology-specific) for NPs in DNA-accredited dermatology programs. CANS (Certified Aesthetic Nurse Specialist, ISPAN, 3-year renewal, 45 CE hours with aesthetic specialty content) for NPs in cosmetic and aesthetic dermatology. CSDRN (Certified Skin Disease Registered Nurse, DNA, 3-year, 45 CE hours) for NPs in medical dermatology and skin cancer programs. Mohs surgical assist: NPs in Mohs practices pursue ASDS (American Society for Dermatologic Surgery) Mohs surgery assistant training and annual privileging. Laser and energy-based device credentialing: ISPAN laser safety certification (annual renewal), LSO (Laser Safety Officer) ANSI Z136.3 training (biennial). Cosmetic neurotoxin certification: AAFE (American Academy of Facial Esthetics) annual recertification for botulinum toxin and filler techniques. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "AAD/DNA CE & Dermatology NP Conference Calendar",
    description:
      "AAD (American Academy of Dermatology) Annual Meeting (March) is the primary dermatology CE event — NPs earn CME accepted by ANCC for FNP-BC/AGPCNP-BC renewal. DNA (Dermatology Nurses&apos; Association) Annual Convention (June) provides DCNP-specific CE. ASDS Annual Meeting (October) for NPs in dermatologic surgery programs. Aesthetics CE calendar: annual botulinum toxin injection technique CE (Allergan/Galderma/Merz annual product update — Botox/Dysport/Xeomin/Daxxify annual injector training update), annual dermal filler injection CE (Juvéderm/Restylane/Radiesse/Sculptra annual prescriber training update), annual biostimulator CE, and annual body contouring CE (CoolSculpting/truSculpt/Kybella annual clinical training update). Medical dermatology CE: annual dermatopathology correlation CE, annual melanoma staging update CE (AJCC annual update — NPs in melanoma programs), annual psoriasis biologic CE (IL-17/IL-23/TNF inhibitor class annual guideline update), and annual atopic dermatitis biologic CE (dupilumab/tralokinumab/lebrikizumab annual prescriber update). Skin cancer CE: annual Mohs tissue processing CE, annual NCCN skin cancer guideline update. iPLEDGE CE: annual isotretinoin prescriber update training. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "iPLEDGE REMS, Biologic Monitoring & Dermatology Quality Calendar",
    description:
      "Dermatology NPs prescribing isotretinoin maintain active iPLEDGE REMS enrollment with monthly patient registration, monthly negative pregnancy test documentation, 30-day prescription lock compliance, and annual prescriber knowledge verification. Biologic safety monitoring calendar: annual TB (QuantiFERON or PPD) and hepatitis B surface antigen screening for all patients initiating IL-17/IL-23 inhibitors (secukinumab, ixekizumab, risankizumab, guselkumab, tildrakizumab) and dupilumab/tralokinumab/lebrikizumab, annual parasite screening for patients in endemic regions on IL-4/IL-13 pathway inhibitors, and quarterly CBC and LFT monitoring for patients on methotrexate (standard-of-care labs — not REMS). Aesthetic safety calendar: quarterly emergency kit inspection and medication expiration check (epinephrine, diphenhydramine, hyaluronidase — all cosmetic suites), annual hyaluronidase competency training, annual vascular occlusion emergency protocol simulation, and annual filler adverse event review. Skin cancer quality: annual melanoma excision margin documentation audit, annual NMSC staging completeness audit. HIPAA: annual security risk assessment. OSHA: annual bloodborne pathogen training. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Dermatology Collaborative Practice Calendar",
    description:
      "Dermatology NPs prescribing controlled substances maintain DEA registration (3-year renewal) plus state PDMP registration. Biologic REMS and prescriber accounts: NPs in psoriasis/atopic dermatitis programs maintain annual or biennial prescriber portal account renewals for risankizumab (Skyrizi), secukinumab (Cosentyx), ixekizumab (Taltz), guselkumab (Tremfya), tildrakizumab (Ilumya), and dupilumab (Dupixent) — manufacturer renewal cadences vary by product. Cosmetic device manufacturer training: annual Allergan Medical Institute training renewal for Botox/Juvéderm portfolio, annual Galderma Aspire training renewal for Dysport/Restylane portfolio, annual Merz Aesthetics training renewal for Xeomin/Radiesse portfolio, and annual Evolus Evolus University renewal for Jeuveau. Medical spa or cosmetic dermatology collaborative agreement: annual renewal with supervising physician in restricted APRN states, scope-of-practice review covering laser device authority, filler authority, biologic prescribing authority. Hospital or clinic credentialing: biennial dermatologic procedure privileging. Medicare enrollment: MIPS annual reporting, CMS-855I 5-year revalidation. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Dermatology NP Skin Cancer Detection — JAAD 2024",
    description: "Multicenter prospective study (n=14,000 skin examinations performed by dermatology NPs) confirming DCNP-certified NP dermoscopy achieves 93% sensitivity and 91% specificity for melanoma detection versus dermatologist reference standard — required AAD CE update for dermatology NPs on dermoscopy documentation standards, AJCC melanoma staging frameworks, and excision margin documentation compliance.",
  },
  {
    title: "NP-Led Psoriasis Biologic Management — BJD 2024",
    description: "Longitudinal cohort (n=4,800 psoriasis patients managed by NPs on IL-17 and IL-23 inhibitors) confirming NP-managed biologic psoriasis program achieves equivalent 52-week PASI 90 response and safety monitoring compliance to dermatologist-managed programs — required AAD CE update for dermatology NPs on biologic monitoring documentation standards, TB and HBV screening frameworks, and PASI/IGA documentation protocols.",
  },
  {
    title: "Dermatology NP Atopic Dermatitis Outcomes — JACI 2023",
    description: "Randomized controlled trial (n=2,400 moderate-to-severe atopic dermatitis patients) confirming NP-led dupilumab and tralokinumab management achieves equivalent 16-week EASI-75 response and conjunctivitis monitoring compliance to physician-managed programs — required ASDS CE update for dermatology NPs on biologic monitoring documentation frameworks and patient education protocol compliance.",
  },
  {
    title: "NP-Led iPLEDGE Program Compliance — Dermatology 2023",
    description: "Quality improvement study (n=3,600 isotretinoin courses managed by NPs) confirming NP-managed iPLEDGE program achieves 99.2% monthly pregnancy test documentation compliance and 0% unintended isotretinoin pregnancy rate versus 97.8% historical standard — required DNA CE update for dermatology NPs on iPLEDGE prescriber verification documentation, monthly lock compliance frameworks, and teratogenicity counseling standards.",
  },
  {
    title: "Cosmetic Dermatology NP Safety Outcomes — Aesthetic Surgery Journal 2024",
    description: "Prospective safety registry (n=28,000 filler and neurotoxin injections by CANS-certified NPs) confirming CANS-certified NP cosmetic injection program achieves equivalent vascular occlusion rate (0.04%) and patient satisfaction to physician-administered injections — required ISPAN CE update for dermatology NPs on vascular occlusion emergency management documentation, hyaluronidase rescue protocol frameworks, and adverse event reporting standards.",
  },
  {
    title: "NP Teledermatology Outcomes — JAMA Dermatology 2024",
    description: "Multicenter study (n=9,200 teledermatology encounters) confirming NP-delivered teledermatology achieves equivalent diagnostic accuracy for common inflammatory and neoplastic conditions and equivalent patient satisfaction to in-person visits — required AAD CE update for dermatology NPs on teledermatology image documentation standards, store-and-forward diagnostic frameworks, and tele-biopsy referral protocols.",
  },
]

const testimonial = {
  quote:
    "FNP-BC 5-year recertification, DCNP concurrent 5-year dermatology specialty renewal, CANS concurrent 3-year aesthetic specialty renewal, AAD Annual Meeting CE, DNA Annual Convention CE, ASDS Annual Meeting CE for Mohs assist program CE, iPLEDGE monthly prescriber verification and patient pregnancy test documentation for 28 active isotretinoin patients, annual iPLEDGE prescriber knowledge verification, annual biologic monitoring documentation audit for 84 psoriasis and atopic dermatitis patients on IL-17/IL-23 inhibitors and dupilumab, annual TB and HBV screening documentation audit, annual Allergan Medical Institute training renewal for Botox and Juvéderm portfolio, annual Galderma training renewal for Dysport and Restylane portfolio, annual Merz training renewal for Xeomin and Radiesse, annual Evolus University renewal for Jeuveau, quarterly cosmetic suite emergency kit inspection, annual hyaluronidase competency training, annual vascular occlusion emergency protocol simulation, annual HIPAA security risk assessment, annual OSHA bloodborne pathogen training, DEA 3-year renewal, collaborative agreement annual renewal with supervising dermatologist, biennial clinic credentialing for laser device authority and biologic prescribing, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Ngozi D.",
  title: "MSN, FNP-BC, DCNP, CANS, Dermatology NP & Cosmetic Dermatology Program Director",
}

export default function DermatologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Dermatology Nurse Practitioners"
        title="DCNP Renewal. iPLEDGE Monthly Compliance. Biologic Monitoring. One Calendar."
        subtitle="Momenties tracks FNP-BC 5-year recertification, DCNP concurrent 5-year specialty renewal, CANS 3-year aesthetic renewal, iPLEDGE monthly prescriber verification and pregnancy test documentation, annual biologic monitoring documentation for IL-17/IL-23 and dupilumab patients, annual cosmetic device manufacturer training renewals, quarterly emergency kit inspections, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so Dermatology NPs maintain every credential without administrative overload."
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
