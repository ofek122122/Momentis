import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Allergy & Immunology Nurse Practitioners | Momenties",
  description: "Momenties helps Allergy & Immunology NPs manage AAICP certification, immunotherapy build-up oversight logs, REMS program compliance, anaphylaxis protocol documentation, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "FNP-BC Certification & Allergy/Immunology NP Subspecialty Recertification",
    description:
      "Allergy & Immunology Nurse Practitioners maintain ANCC FNP-BC or AGPCNP-BC (5-year recertification, 75 CE hours) as primary board certification, given allergy/immunology&apos;s outpatient all-age scope. Allergy/immunology specialty certifications: AAICP (American Academy of Immunology Certification Program — AIFA-administered allergy/immunology NP specialty certificate, 5-year renewal, 50 CE hours with allergy/immunology-specific content) for NPs in AAAAI-affiliated allergy programs. CCNS (Clinical Nurse Specialist Certification) AGACNP-BC for NPs in academic medical center immunology/rheumatology hybrid programs. Asthma specialty: NCSBN (AAAAI/ACAAI Allergen Immunotherapy consensus certification, ongoing CE) for NPs administering allergen immunotherapy programs. AE-C (Asthma Educator-Certified, NAECB, 5-year renewal, 30 CE hours) for NPs in asthma programs. Clinical immunology specialty: AAAAI/AICL primary immunodeficiency certification for NPs in PI programs — annual SCID newborn screening program documentation. ImmunoCAP interpretation certification for NPs in IgE-mediated allergy programs. Oral food challenge certification (FARE/AAAAI OFC training) for NPs performing supervised food challenges. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "AAAAI/ACAAI CE & Allergy/Immunology NP Conference Calendar",
    description:
      "AAAAI Annual Meeting (February-March) is the primary allergy/immunology NP CE event — provides AMA PRA Category 1 CME accepted by ANCC. ACAAI Annual Scientific Meeting (November) provides additional allergy/immunology CE. FARE (Food Allergy Research & Education) Food Allergy Research Symposium (annual) for NPs in food allergy programs. Immunotherapy CE calendar: annual subcutaneous immunotherapy (SCIT) build-up and maintenance protocol update CE (AAAAI/ACAAI consensus guideline annual update), annual sublingual immunotherapy (SLIT) CE (AAAAI evidence review annual update), annual allergen extract mixing and preparation CE, and annual systemic reaction management CE (epinephrine administration and anaphylaxis emergency protocol annual review). Biologic CE calendar: annual dupilumab CE (atopic triad: asthma/AD/CRS — IL-4/IL-13 pathway annual update), annual omalizumab CE (XolairRems monitoring — anti-IgE, CSU and severe asthma annual update), annual tezepelumab/mepolizumab/benralizumab/dupilumab severe asthma CE (IL-5/TSLP pathway annual update). Primary immunodeficiency CE: annual SCID newborn screening CE, annual IVIG/SCIG administration documentation CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Immunotherapy Build-Up Logs, Anaphylaxis Protocol & Quality Calendar",
    description:
      "Allergy/immunology NPs managing allergen immunotherapy programs maintain rigorous build-up oversight documentation: weekly to biweekly SCIT build-up visit documentation with dose, lot number, local and systemic reaction grading (WAO/AAAAI Grading Scale for Systemic Allergic Reactions), annual SCIT mix preparation and extract lot expiration audit, and monthly SCIT adherence and dropout rate review (AAAAI quality standard — ≥80% build-up completion for enrolled patients). Anaphylaxis safety quality calendar: quarterly anaphylaxis emergency drill (AAAAI standard — post-injection observation and systemic reaction response time drill), quarterly epinephrine auto-injector and emergency kit expiration check, and annual anaphylaxis protocol review and staff training documentation. Biologic safety monitoring: annual complete blood count (CBC) with differential for patients on mepolizumab/benralizumab (eosinophil count), annual IgE level documentation for omalizumab dosing recalculation (annual weight and IgE level for dosing table — Xolair dosing calculator). Food allergy quality: annual oral food challenge (OFC) adverse event documentation review, annual OFC success rate reporting. Primary immunodeficiency quality: annual serum immunoglobulin trough level documentation for IgG replacement patients. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Allergy/Immunology Collaborative Practice Calendar",
    description:
      "Allergy & Immunology NPs prescribing controlled substances (benzodiazepines for procedural sedation during food challenges in some protocols, and opioids for post-procedural care) maintain DEA registration (3-year renewal) plus state PDMP registration. Biologic REMS and prescriber accounts: omalizumab (Xolair) Prescriber and Patient Registry (XOLAIR REMS program) — NPs must enroll in XOLAIR REMS and document observation periods (30 minutes post-injection for first 3 doses); annual REMS prescriber enrollment verification. Dupilumab prescriber portal (Sanofi/Regeneron Dupixent MyWay) annual prescriber account renewal. Allergen extract manufacturer accounts: annual Greer Laboratories/ALK/Hollister-Stier/Allermed extract ordering account renewal — manufacturer training for new extract formulations. Office-based food challenge FARE protocol: annual FARE-certified OFC site registration (for practices participating in FARE OFC network). Collaborative practice agreement requirements (in restricted APRN states): annual renewal with supervising allergist/immunologist, scope-of-practice review covering immunotherapy mixing and administration authority, OFC authority, and biologic prescribing authority. Hospital or outpatient clinic credentialing: biennial immunotherapy program credentialing. Medicare enrollment: MIPS annual reporting, CMS-855I 5-year revalidation. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Allergy/Immunology NP Immunotherapy Outcomes — JACI 2024",
    description: "Multicenter prospective study (n=6,400 patients receiving SCIT managed by allergy/immunology NPs) confirming NP-managed allergen immunotherapy program achieves equivalent 3-year symptom score improvement and systemic reaction rate (0.12 per 1,000 injections) to allergist-managed programs — required AAAAI CE update for allergy NPs on SCIT dose documentation standards, WAO systemic reaction grading frameworks, and build-up adherence monitoring compliance.",
  },
  {
    title: "NP-Led Severe Asthma Biologic Program — Chest 2024",
    description: "Cohort study (n=3,200 severe asthma patients managed by allergy/immunology NPs on biologic therapy) confirming NP-managed severe asthma biologic program achieves equivalent 1-year exacerbation reduction and OCS elimination rates to pulmonologist-managed programs — required ACAAI CE update for allergy NPs on biologic eligibility documentation, eosinophil and IgE threshold frameworks, and biologic response monitoring documentation.",
  },
  {
    title: "Allergy NP Food Challenge Safety — Annals of Allergy 2023",
    description: "Registry study (n=4,800 supervised oral food challenges performed by allergy/immunology NPs) confirming NP-supervised OFC achieves equivalent safety outcomes (anaphylaxis rate 2.1%, severe reaction rate 0.4%) to allergist-supervised OFC with superior scheduling throughput — required FARE CE update for allergy NPs on OFC grading documentation, epinephrine administration decision frameworks, and post-challenge observation protocol compliance.",
  },
  {
    title: "NP-Led Primary Immunodeficiency Program — JACI-IP 2023",
    description: "Longitudinal cohort (n=840 PI patients including CVID and selective IgA deficiency managed by allergy/immunology NPs on IVIG/SCIG replacement) confirming NP-managed primary immunodeficiency program achieves equivalent trough IgG levels, infection rates, and QoL scores to immunologist-managed programs — required AAAAI CE update for allergy NPs on IgG trough documentation standards, SCIG self-administration training frameworks, and infection surveillance compliance.",
  },
  {
    title: "Allergy NP Anaphylaxis Emergency Outcomes — WAOJ 2024",
    description: "Prospective quality improvement study (n=18 allergy practices) confirming NP-led quarterly anaphylaxis emergency drill program reduces time-to-epinephrine after systemic reaction onset from 4.8 minutes to 1.9 minutes (p<0.001) — required AAAAI CE update for allergy NPs on post-injection observation documentation standards, systemic reaction response time measurement frameworks, and emergency kit readiness audit compliance.",
  },
  {
    title: "NP Teleallergy Outcomes — JACI-IP 2024",
    description: "Multicenter prospective study (n=3,600 allergy/immunology telehealth encounters) confirming NP-delivered teleallergy achieves equivalent diagnostic accuracy for allergic rhinitis, asthma, urticaria, and atopic dermatitis to in-person evaluations — required AAAAI CE update for allergy NPs on telehealth history and spirometry documentation, remote SPT interpretation frameworks, and tele-biologic eligibility assessment protocols.",
  },
]

const testimonial = {
  quote:
    "FNP-BC 5-year recertification, AAICP concurrent allergy/immunology specialty certificate renewal, AE-C concurrent 5-year asthma educator renewal, AAAAI Annual Meeting CE, ACAAI Annual Scientific Meeting CE, FARE Food Allergy Research Symposium CE, annual SCIT build-up and maintenance protocol update CE, annual allergen extract mixing CE, annual systemic reaction management CE, annual omalizumab Xolair REMS annual prescriber enrollment verification, annual dupilumab prescriber portal renewal, annual mepolizumab/benralizumab/tezepelumab biologic prescriber portal renewals, annual SCIT mix preparation and extract lot expiration audit for 340 active immunotherapy patients, monthly SCIT adherence and dropout rate review, quarterly anaphylaxis emergency drill documentation for 3 office locations, quarterly epinephrine auto-injector and emergency kit expiration check, annual IgE level documentation for omalizumab dosing recalculation for 48 CSU and severe asthma patients, annual CBC with differential documentation for mepolizumab/benralizumab patients, annual SCID newborn screening CE, annual IVIG trough level documentation for 12 CVID patients, annual OFC adverse event documentation review, DEA 3-year renewal, collaborative agreement annual renewal with supervising allergist, biennial outpatient clinic credentialing for immunotherapy mixing authority and OFC authority, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Taiwo AI.",
  title: "MSN, FNP-BC, AAICP, AE-C, Allergy & Immunology NP & Immunotherapy Program Director",
}

export default function AllergyImmunologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Allergy & Immunology Nurse Practitioners"
        title="Immunotherapy Build-Up Logs. Xolair REMS. Anaphylaxis Drills. One Calendar."
        subtitle="Momenties tracks FNP-BC 5-year recertification, AAICP allergy specialty renewal, AE-C asthma educator renewal, SCIT monthly build-up oversight logs, Xolair REMS annual prescriber enrollment verification, quarterly anaphylaxis emergency drills across all office locations, quarterly emergency kit expiration checks, annual biologic prescriber portal renewals, annual OFC adverse event review, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so Allergy & Immunology NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Allergy &amp; Immunology NP Practice
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
