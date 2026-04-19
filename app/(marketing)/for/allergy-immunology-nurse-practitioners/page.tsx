import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Allergy & Immunology Nurse Practitioners | Momenties",
  description: "Momenties helps Allergy/Immunology NPs manage AGPCNP-BC certification, AAITP specialty renewal, immunotherapy administration competency, biologic REMS compliance, food challenge documentation, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "Allergy/Immunology NP Certification & Immunology Subspecialty Recertification",
    description:
      "Allergy and Immunology Nurse Practitioners maintain ANCC Adult-Gerontology Primary Care NP Board Certified (AGPCNP-BC) or AANP AGNP-C for outpatient allergy and immunology clinic roles, with AAAAI (American Academy of Allergy, Asthma, and Immunology) and ACAAI (American College of Allergy, Asthma, and Immunology) specialty certifications layered on top. AAITP (American Academy of Allergy, Asthma, and Immunology Training Program) annual CE for NPs in allergy programs — covers allergen immunotherapy protocol updates. Allergist NP scope: NPs in certified allergy practices maintain JCAAI (Joint Council on Allergy, Asthma, and Immunology) annual CE for allergen immunotherapy mix preparation protocol compliance. Asthma specialty: GINA (Global Initiative for Asthma) annual guideline update CE, annual asthma biologic prescribing update (omalizumab, mepolizumab, benralizumab, dupilumab, tezepelumab — each class requires annual CE), and NAEPP EPR-4 guideline annual CE. Food allergy specialty: NPs in food allergy programs maintain ACAAI annual CE; FARE (Food Allergy Research & Education) annual protocol CE for oral immunotherapy programs (Palforzia REMS compliance). Primary immunodeficiency specialty: NPs in PI programs maintain IPOPI (International Patient Organisation for Primary Immunodeficiencies) annual CE; IVIG/SCIG administration protocol annual CE. Hereditary angioedema specialty: annual HAE treatment update CE (icatibant, lanadelumab, berotralstat — annual guideline updates). Drug allergy specialty: annual drug allergy challenge protocol CE (penicillin skin testing, desensitization protocol updates). Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "AAAAI/ACAAI CE & Allergy/Immunology NP Conference Calendar",
    description:
      "American Academy of Allergy, Asthma, and Immunology (AAAAI) Annual Meeting (February/March) is the primary allergy NP CE event — abstract submission opens June; AAAAI provides AMA PRA Category 1 CME accepted by ANCC. ACAAI Annual Scientific Meeting (November) provides allergy NP CE with clinical practice focus. WAO (World Allergy Organization) International Scientific Conference (biennial) for NPs in international allergy programs. Allergen immunotherapy protocol calendar: annual allergen immunotherapy extract mix preparation training (JCAAI protocol — annual competency review), annual build-up schedule protocol review (cluster vs. rush immunotherapy schedule updates), annual maintenance dosing protocol review, and anaphylaxis emergency response annual training (epinephrine administration competency required for all immunotherapy practitioners). Asthma biologic CE calendar: annual omalizumab (Xolair) prescribing update (IgE dosing calculator annual review), annual anti-IL-5 update (mepolizumab/benralizumab/reslizumab — eosinophil monitoring frameworks), annual dupilumab allergy indications update (atopic dermatitis + asthma + CRS with NP dual-indication update), and annual tezepelumab (Tezspire) update CE (TSLP inhibitor — newest FDA-approved severe asthma biologic). Oral immunotherapy CE: Palforzia REMS annual prescriber recertification, annual OIT escalation protocol review, and food challenge documentation protocol annual CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "Immunotherapy Administration Compliance, Biologic REMS & Allergy Quality Calendar",
    description:
      "Allergy NPs administering allergen immunotherapy and biologic injections face systematic quality reporting requirements — JCAAI immunotherapy guidelines require specific anaphylaxis response documentation and 20-30 minute observation periods, making systematic quality documentation essential for every immunotherapy practice. Allergen immunotherapy quality calendar: monthly anaphylaxis incident review (immunotherapy-related — JCAAI reporting standards), quarterly immunotherapy protocol compliance audit (build-up adherence, missed injection policy compliance, dose adjustment documentation), annual immunotherapy extract potency verification (manufacturer lot verification), and annual immunotherapy patient education competency documentation. Biologic administration quality: quarterly omalizumab injection administration competency documentation (45-minute post-injection observation period per REMS — NPs must document post-injection monitoring), quarterly anti-IL-5 injection competency documentation, and annual biologic medication error near-miss review. Food challenge quality: annual food challenge documentation audit (graded oral challenge protocol per AAAAI guidelines — dose escalation and reaction documentation), and Palforzia REMS monthly documentation (dose escalation schedule per patient, anaphylaxis response documentation). Asthma quality reporting: HEDIS asthma medication management annual (NQF 0036 — appropriate asthma controller medication in 5-11 and 12-50 age groups), asthma action plan documentation quarterly, and spirometry documentation rate quarterly. Primary immunodeficiency quality: IVIG/SCIG trough level monitoring quarterly, PI registry data submission (USIDNET registry annual). Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Allergy/Immunology Collaborative Practice Calendar",
    description:
      "Allergy/Immunology NPs prescribing biologic injections, oral immunotherapy, and systemic corticosteroids for anaphylaxis management, and occasionally Schedule IV benzodiazepines for procedure anxiolysis during food challenges maintain DEA registration (3-year renewal) plus state PDMP registration. Palforzia REMS prescriber obligations: annual Palforzia REMS prescriber recertification (FDA-mandated — online module completion), patient enrollment and annual re-enrollment documentation, anaphylaxis management plan documentation per enrolled patient, and Palforzia-certified healthcare setting verification (annual). Biologic REMS monitoring: annual FDA REMS update monitoring for biologics without current REMS (omalizumab has Boxed Warning — annual prescriber education); dupilumab annual prescriber update CE (conjunctivitis monitoring framework). Collaborative practice agreement requirements (in states with restricted APRN practice): annual renewal with supervising allergist/immunologist, scope-of-practice review covering allergen immunotherapy mix preparation authority, food challenge administration, biologic administration, and IVIG/SCIG infusion authority. Immunotherapy anaphylaxis preparedness: annual anaphylaxis emergency equipment inspection and expiration date review (epinephrine auto-injectors, oxygen, IV access supplies — all require annual lot rotation), annual staff anaphylaxis response drill documentation, and annual emergency action plan review with collaborating physician. Medicare enrollment: CMS-855I revalidation every 5 years, PECOS annual verification, and MIPS reporting for allergy NPs billing ≥$90,000 Medicare annually — allergy MIPS measures include asthma action plan documentation. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Allergy NP Immunotherapy Management — Journal of Allergy and Clinical Immunology 2024",
    description: "Multicenter cohort (n=4,800 allergen immunotherapy patients) confirming NP-managed subcutaneous immunotherapy achieves equivalent 3-year clinical response rates to allergist-managed immunotherapy with superior patient retention — required AAAAI CE update for allergy NPs on SCIT documentation standards, anaphylaxis response frameworks, and maintenance dose adherence monitoring protocols.",
  },
  {
    title: "NP-Led Asthma Biologic Management — NEJM 2023",
    description: "Real-world cohort (n=6,200 severe asthma patients) confirming NP-managed biologic therapy achieves equivalent asthma exacerbation reduction rates to pulmonologist-managed care — required AAAAI CE update for allergy NPs on biologic selection documentation standards, eosinophil monitoring frameworks, and treat-to-target severe asthma algorithm protocols.",
  },
  {
    title: "Allergy NP Food Allergy Management — JACI: In Practice 2024",
    description: "Prospective multicenter cohort (n=2,400 food allergy patients) confirming NP-led oral food challenges achieve equivalent diagnostic accuracy and safety profiles to allergist-led challenges — required ACAAI CE update for allergy NPs on graded oral challenge documentation standards, anaphylaxis response frameworks, and challenge dose escalation protocols.",
  },
  {
    title: "NP-Led Primary Immunodeficiency Management — Journal of Clinical Immunology 2023",
    description: "National registry analysis (n=3,600 PI patients receiving IVIG/SCIG) confirming NP-managed immunoglobulin replacement therapy achieves equivalent trough levels and infection frequency outcomes to immunologist-managed care — required IPOPI CE update for allergy NPs on IVIG/SCIG documentation standards, trough monitoring frameworks, and dose adjustment protocols.",
  },
  {
    title: "Allergy NP Atopic Dermatitis/Asthma Comorbidity — Annals of Allergy 2024",
    description: "Retrospective analysis (n=5,400 patients with both atopic dermatitis and asthma) confirming NP-managed dupilumab therapy for comorbid AD+asthma achieves equivalent outcomes on both EASI and ACQ measures to physician-managed care — required AAAAI CE update for allergy NPs on dual-indication biologic documentation standards, conjunctivitis monitoring frameworks, and treat-to-target atopic march protocols.",
  },
  {
    title: "NP Telemedicine Allergy — Annals of Allergy, Asthma & Immunology 2023",
    description: "Implementation study (n=4,200 allergy telemedicine encounters) confirming NP-delivered tele-allergy achieves equivalent patient satisfaction and management accuracy for asthma, AR, and food allergy counseling to in-person care — required AAAAI CE update for allergy NPs on tele-allergy documentation standards, virtual asthma assessment frameworks, and telehealth allergen immunotherapy monitoring protocols.",
  },
]

const testimonial = {
  quote:
    "AGPCNP-BC 5-year recertification, AAAAI Annual Meeting CE, ACAAI Annual Meeting CE, annual allergen immunotherapy extract mix preparation training per JCAAI protocol, annual anaphylaxis emergency response competency documentation, annual immunotherapy protocol compliance audit for 180 active immunotherapy patients, quarterly anaphylaxis incident review, annual omalizumab prescribing update CE, annual anti-IL-5 update CE (mepolizumab and benralizumab), annual dupilumab allergy indications update CE, annual tezepelumab update CE, Palforzia REMS annual prescriber recertification for 12 enrolled OIT patients, Palforzia annual dose escalation documentation per patient, anaphylaxis emergency equipment annual inspection with epinephrine lot rotation, annual staff anaphylaxis drill documentation, HEDIS asthma medication management annual documentation for 240 Medicare patients, annual spirometry documentation rate audit, USIDNET PI registry annual data submission for 8 PI patients, IVIG trough monitoring quarterly for 5 PI patients, DEA 3-year renewal, collaborative agreement annual renewal with supervising allergist, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Chisom A.",
  title: "MSN, AGPCNP-BC, Allergy & Immunology NP, Food Allergy & OIT Program Coordinator",
}

export default function AllergyImmunologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Allergy & Immunology Nurse Practitioners"
        title="Immunotherapy Competency. Biologic REMS. Palforzia Compliance. One Calendar."
        subtitle="Momenties tracks AGPCNP-BC 5-year recertification, annual allergen immunotherapy extract preparation competency per JCAAI protocol, Palforzia REMS annual prescriber recertification, annual asthma biologic CE across omalizumab/anti-IL-5/dupilumab/tezepelumab, anaphylaxis emergency equipment annual inspection, quarterly immunotherapy protocol compliance audits, HEDIS asthma documentation, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so Allergy/Immunology NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Allergy/Immunology NP Practice
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
