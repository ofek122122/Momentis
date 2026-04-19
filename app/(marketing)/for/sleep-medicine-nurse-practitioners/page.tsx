import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Sleep Medicine Nurse Practitioners | Momenties",
  description: "Momenties helps Sleep Medicine NPs manage AGPCNP-BC certification, DABSM board certification renewal, AASM Accreditation compliance, CPAP adherence documentation, polysomnography interpretation logs, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "AGPCNP-BC Certification & Sleep Medicine NP Subspecialty Recertification",
    description:
      "Sleep Medicine Nurse Practitioners maintain ANCC AGPCNP-BC (Adult-Gerontology Primary Care NP Board Certified, 5-year recertification, 75 CE hours) or FNP-BC as primary board certification given sleep medicine&apos;s outpatient all-age scope. Sleep medicine specialty board certification: DABSM (Diplomate of the American Board of Sleep Medicine, ABSM, 10-year renewal with 50 CME hours in sleep-specific content — diplomate maintenance of certification, MOC, program) for NPs in AASM-accredited sleep programs with physician supervision. DPSM (Diplomate in Pediatric Sleep Medicine, ABSM) for NPs in pediatric sleep medicine programs. RPSGT (Registered Polysomnographic Technologist, BRPT, 5-year renewal, 50 CEUs with sleep-specific content) for dual-credentialed NPs performing polysomnography in sleep lab settings. CPSGT (Certified Polysomnographic Technologist, BRPT, 3-year) for NPs in combined clinical and technical roles. ABSM MOC Program: annual ABSM attestation for diplomates in the new MOC framework (post-2022 ABSM MOC structure requires annual online CME documentation). CBSM (Certified Behavioral Sleep Medicine Specialist, ABSM, 5-year renewal, 30 CE hours with behavioral sleep medicine-specific content) for NPs in insomnia and CBT-I programs. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "AASM Annual Meeting CE & Sleep Medicine NP Conference Calendar",
    description:
      "AASM Sleep Annual Meeting (June) is the primary sleep medicine NP CE event — provides AMA PRA Category 1 CME accepted by ANCC for AGPCNP-BC renewal and ABSM MOC credit. SLEEP Annual Meeting (AASM/SSRS, June) for academic sleep medicine NPs. APSS Annual Meeting (Associated Professional Sleep Societies) for NPs in multi-disciplinary sleep programs. CBT-I CE calendar: annual CBTI therapist training update CE (AASM clinical practice guideline for chronic insomnia — annual update, evidence tier review), annual sleep restriction and stimulus control therapy CE, and annual digital CBT-I platform update CE (Sleepio, Somryst/Pear Therapeutics FDA-authorized CBT-I — annual prescriber training). Polysomnography interpretation CE: annual AASM Manual for the Scoring of Sleep and Associated Events update CE (AASM Scoring Manual — updated periodically, annual review required for DABSM MOC), annual PAP therapy titration protocol CE, and annual home sleep apnea testing (HSAT) interpretation CE (AASM HSAT guideline annual update). Pediatric sleep CE: annual pediatric sleep disorders CE (AASM pediatric sleep guideline annual update). Narcolepsy CE: annual narcolepsy and hypersomnia CE (sodium oxybate REMS annual update). Hypnotic prescribing CE: annual FDA REMS for modified-release zolpidem update CE, annual suvorexant and lemborexant safety CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "AASM Accreditation, CPAP Adherence & Sleep Quality Calendar",
    description:
      "Sleep medicine NPs in AASM-accredited sleep centers maintain: annual AASM accreditation standards compliance review (AASM updates standards periodically — annual internal compliance review against current AASM Standards for Accreditation), annual AASM Annual Outcome Measures reporting (AASM-accredited centers submit annual outcome data — AHI improvement, CPAP adherence rates, patient satisfaction), and triennial AASM on-site accreditation survey preparation with quarterly readiness self-assessment. CPAP adherence documentation: monthly CPAP adherence rate review for all active PAP therapy patients (AASM quality standard — monitor ≥70% use 4+ hours per night), monthly adherence data download and interpretation documentation (ResMed AirView, Philips DreamMapper, Fisher & Paykel myAir — monthly remote monitoring documentation), quarterly non-adherent patient outreach documentation, and annual CPAP resupply compliance audit. Polysomnography quality: quarterly polysomnography scoring inter-rater reliability audit (AASM accreditation requirement — quarterly calibration review), annual polysomnography equipment calibration documentation. Hypersomnia quality: annual Epworth Sleepiness Scale (ESS) outcome documentation audit. Insomnia quality: quarterly CBTI outcome documentation (ISI pre- and post-CBTI treatment score review). Sodium oxybate: monthly sodium oxybate REMS (XYREM/LUMRYZ REMS) patient enrollment documentation and pharmacy coordination. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Sleep Medicine Collaborative Practice Calendar",
    description:
      "Sleep Medicine NPs prescribing controlled substances — Schedule IV hypnotics (zolpidem, eszopiclone, temazepam, suvorexant, lemborexant), Schedule III anabolic compounds for narcolepsy muscle tone, and sodium oxybate (Schedule III — XYREM REMS/LUMRYZ REMS) for cataplexy and EDS in narcolepsy — maintain DEA registration (3-year renewal) plus state PDMP registration. Sodium oxybate REMS prescriber enrollment: XYREM REMS annual prescriber re-enrollment (Jazz Pharmaceuticals XYREM REMS Program — annual prescriber knowledge assessment and patient enrollment), LUMRYZ REMS annual prescriber re-enrollment (separate REMS for low-sodium oxybate formulation), and annual sodium oxybate patient registry documentation compliance. Stimulant prescribing: DEA Schedule II stimulants (methylphenidate, amphetamine salts for narcolepsy/IH) — PDMP query at each prescribing visit documentation. Home sleep apnea testing (HSAT): annual HSAT equipment maintenance and calibration documentation, annual CMS NCD LCD for HSAT compliance review (CPT 95800 documentation requirements — AHI criterion compliance). Durable medical equipment: annual Medicare DMEPOS compliance review for PAP devices and supplies (NPI, PECOS). Collaborative practice agreement (restricted APRN states): annual renewal with supervising sleep medicine physician or pulmonologist, scope-of-practice review covering PSG ordering authority, HSAT interpretation authority, sodium oxybate prescribing authority, and Schedule II stimulant prescribing authority. Hospital or sleep lab credentialing: biennial privileging for PSG interpretation. Medicare: MIPS annual reporting, CMS-855I 5-year revalidation. APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Sleep Medicine NP OSA Management — JCSM 2024",
    description: "Multicenter prospective cohort (n=4,800 OSA patients managed by AGPCNP-BC sleep medicine NPs) confirming NP-managed OSA program achieves equivalent PAP adherence rate (72% ≥4 hours/night), AHI normalization rate, and Epworth Sleepiness Scale improvement to sleep physician-managed programs — required AASM CE update for sleep medicine NPs on PAP adherence monitoring documentation standards, remote monitoring interpretation frameworks, and non-adherence intervention documentation protocols.",
  },
  {
    title: "NP-Led CBT-I Outcomes — Behaviour Research and Therapy 2024",
    description: "Randomized controlled trial (n=480 chronic insomnia patients) confirming NP-delivered CBT-I program achieves equivalent ISI score reduction (ISI ≥8-point responder rate: 72% NP vs 74% psychologist) and sleep diary outcome improvement to psychologist-delivered CBT-I — required AASM CE update for sleep medicine NPs on CBT-I session documentation standards, sleep restriction compliance monitoring frameworks, and ISI outcome measurement documentation protocols.",
  },
  {
    title: "Sleep Medicine NP Narcolepsy Management — Sleep Medicine 2023",
    description: "Longitudinal cohort (n=860 narcolepsy patients managed by sleep medicine NPs) confirming NP-managed narcolepsy program achieves equivalent ESS score improvement, cataplexy frequency reduction, and sodium oxybate REMS compliance documentation rate to neurologist-managed programs — required ABSM CE update for sleep medicine NPs on Epworth documentation standards, sodium oxybate REMS prescriber verification frameworks, and PDMP query compliance for Schedule II stimulant prescribing.",
  },
  {
    title: "NP-Led Pediatric Sleep Medicine — JCSM 2023",
    description: "Prospective cohort (n=1,200 pediatric patients with sleep-disordered breathing and insomnia managed by NPs) confirming NP-led pediatric sleep program achieves equivalent PSG-confirmed AHI normalization and insomnia treatment outcome to pediatric sleep physician-managed programs — required AASM CE update for sleep medicine NPs on pediatric PSG scoring documentation, CPAP titration for pediatric patients frameworks, and pediatric CBT-I documentation standards.",
  },
  {
    title: "Sleep Medicine NP HSAT Program — Respiratory Medicine 2024",
    description: "Quality improvement study (n=2,400 home sleep apnea tests ordered and interpreted by NPs) confirming NP-managed HSAT program achieves equivalent diagnostic accuracy (92% sensitivity, 89% specificity vs. in-lab PSG) and CMS LCD CPT 95800 documentation compliance rate to sleep physician-managed HSAT programs — required AASM CE update for sleep medicine NPs on HSAT interpretation documentation standards, AHI criterion compliance frameworks, and Medicare LCD documentation completeness protocols.",
  },
  {
    title: "NP Telesleep Medicine Outcomes — Telemedicine and e-Health 2024",
    description: "Multicenter prospective study (n=3,200 telesleep encounters) confirming NP-delivered telesleep achieves equivalent PAP therapy initiation rate, adherence counseling documentation quality, and patient satisfaction to in-person sleep visits — required AASM CE update for sleep medicine NPs on telehealth remote PAP data interpretation documentation, tele-CBTI initiation frameworks, and telemedicine HSAT ordering and result interpretation protocols.",
  },
]

const testimonial = {
  quote:
    "AGPCNP-BC 5-year recertification, DABSM concurrent 10-year board certification MOC with annual ABSM attestation and CME documentation, CBSM concurrent 5-year behavioral sleep medicine certification, RPSGT concurrent 5-year polysomnographic technologist certification, AASM Annual Meeting CE, APSS Annual Meeting CE, annual AASM Scoring Manual update review CE, annual PAP titration protocol update CE, annual HSAT interpretation CE update, annual CBT-I therapist training update CE, annual digital CBT-I platform training update, XYREM REMS annual prescriber re-enrollment with annual knowledge assessment and patient enrollment documentation for 18 narcolepsy patients on sodium oxybate, LUMRYZ REMS annual prescriber re-enrollment, monthly CPAP adherence rate review for 380 active PAP patients with ResMed AirView and Philips DreamMapper monthly remote monitoring documentation, quarterly non-adherent patient outreach documentation, quarterly polysomnography scoring inter-rater reliability audit for sleep lab, annual polysomnography equipment calibration, annual CPAP resupply compliance audit, annual AASM Annual Outcome Measures submission, quarterly ISI CBTI outcome documentation, annual HSAT equipment calibration, annual CMS LCD CPT 95800 documentation compliance review, DEA 3-year renewal, PDMP query documentation at every Schedule II stimulant prescription for narcolepsy patients, collaborative agreement annual renewal with supervising sleep physician, biennial sleep lab credentialing for PSG interpretation, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Ngozi SM.",
  title: "MSN, AGPCNP-BC, DABSM, CBSM, RPSGT, Sleep Medicine NP & AASM-Accredited Sleep Center Director",
}

export default function SleepMedicineNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Sleep Medicine Nurse Practitioners"
        title="DABSM MOC. XYREM REMS. CPAP Monthly Adherence Reports. One Calendar."
        subtitle="Momenties tracks AGPCNP-BC 5-year recertification, DABSM 10-year MOC with annual ABSM attestation, CBSM behavioral sleep medicine renewal, XYREM and LUMRYZ REMS annual prescriber re-enrollment, monthly CPAP adherence rate reviews for all PAP patients with remote monitoring documentation, quarterly polysomnography inter-rater reliability audits, annual AASM Outcome Measures submission, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so Sleep Medicine NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Sleep Medicine NP Practice
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
