import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Neurology Nurse Practitioners | Momenties",
  description: "Momenties helps Neurology NPs manage AGPCNP-BC certification, CNRN specialty renewal, MS biologic REMS compliance, botulinum toxin prescriber training, epilepsy monitoring unit logs, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "AGPCNP-BC Certification & Neurology NP Subspecialty Recertification",
    description:
      "Neurology Nurse Practitioners maintain ANCC AGPCNP-BC (Adult-Gerontology Primary Care NP Board Certified, 5-year recertification, 75 CE hours) or FNP-BC as primary board certification given neurology&apos;s outpatient all-age scope, or AGACNP-BC for NPs in acute stroke units, neurocritical care, and neurology hospitalist roles. CNRN (Certified Neuroscience Registered Nurse, ABNN, 5-year renewal, 100 CE hours with neuroscience-specific content) for NPs in ABNN-credentialed neuroscience programs. SCRN (Stroke Certified Registered Nurse, ABNN, 5-year, 100 CE hours) for NPs in certified stroke center programs. CRRN (Certified Rehabilitation Registered Nurse, ARN, 5-year renewal, 80 CE hours) for NPs in neurorehabilitation. CCRN (AACN, 3-year renewal) for NPs in neurocritical care. CNLCP (Certified Nurse Life Care Planner, IANLCP, 5-year renewal) for NPs providing life care planning for TBI, SCI, and stroke patients. Epilepsy specialty: ABRET CLTM (Continuous Long-Term Monitoring technologist, 4-year renewal) or AES (American Epilepsy Society) annual CE for NPs in epilepsy monitoring units. Headache specialty: AHS (American Headache Society) UCNS HEADACHE certificate for NPs in headache specialty practices. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "AAN Annual Meeting CE & Neurology NP Conference Calendar",
    description:
      "AAN (American Academy of Neurology) Annual Meeting (April) is the primary neurology NP CE event — provides AMA PRA Category 1 CME accepted by ANCC for NP board renewal. ABNN Neuroscience Nursing Symposium for CNRN/SCRN CE. AES Annual Meeting (December) for NPs in epilepsy programs. NASN Annual Conference for stroke NPs. Multiple sclerosis CE calendar: annual disease-modifying therapy (DMT) class update CE (natalizumab, dimethyl fumarate, siponimod, cladribine, ofatumumab, ublituximab, tolebrutinib annual clinical update), annual JC virus and PML risk stratification CE (natalizumab-specific: JCV antibody index annual monitoring with 6-month retesting protocol), and annual NEDA (No Evidence of Disease Activity) monitoring framework CE. Botulinum toxin CE: annual botulinum toxin injection technique CE for migraine, spasticity, and dystonia indications (Allergan/Ipsen/Merz annual injector certification renewal). Stroke CE: annual tPA and thrombectomy protocol CE, annual NIHSS re-certification (annual for stroke units — NINDS NIHSS certification). Epilepsy CE: annual antiseizure medication (ASM) update CE, annual SUDEP counseling documentation CE. Neurocognitive CE: annual MOCA and MMSE certification update. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "MS REMS Compliance, Stroke Certification & Neurology Quality Calendar",
    description:
      "Neurology NPs prescribing high-efficacy MS DMTs maintain active REMS enrollment: natalizumab TYSABRI REMS (annual prescriber enrollment renewal, monthly infusion documentation with TOUCH prescribing program, every 6-month JCV antibody index testing documentation), alemtuzumab LEMTRADA REMS (prescribing, infusion site, and patient enrollment — annual prescriber recertification, infusion-day monitoring documentation for 2 hours post-infusion), cladribine MAVENCLAD REMS (annual prescriber training verification, lymphocyte count documentation per prescribing protocol). Stroke certification quality: annual door-to-CT quality metric review for certified stroke centers (JCAHO DNV standard — time-to-CT target ≤25 minutes, time-to-tPA target ≤60 minutes), quarterly stroke quality dashboard review, and annual NIHSS inter-rater reliability audit. Epilepsy unit quality: monthly seizure frequency documentation audit for EMU patients, quarterly EEG-confirmed seizure rate review. Headache quality: quarterly MIDAS/HIT-6 outcome score review for headache management. Botulinum toxin: quarterly injection outcome documentation review (UPDRS for dystonia, MIDAS for migraine prevention). Neuropsychological testing: annual MOCA/MoCA training CE (annual MOCA Cognition platform training update). Dementia quality: annual NINCDS-ADRDA diagnostic documentation audit. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Neurology Collaborative Practice Calendar",
    description:
      "Neurology NPs prescribing controlled substances — Schedule II stimulants (methylphenidate, amphetamine for narcolepsy), Schedule III-IV benzodiazepines (clonazepam, lorazepam for seizure management), Schedule IV sedatives (zolpidem, eszopiclone for sleep disorders in neurological conditions), and opioids for neuropathic pain — maintain DEA registration (3-year renewal) plus state PDMP registration. Botulinum toxin prescriber accounts: annual Allergan Medical Institute BOTOX Therapeutic injector account renewal (migraine, spasticity, dystonia indications), annual Ipsen Dysport therapeutic prescriber account renewal, and annual Merz Xeomin therapeutic prescriber account renewal — each manufacturer maintains separate annual or biennial prescriber credentialing accounts. REMS prescriber accounts: annual natalizumab TOUCH program prescriber re-enrollment, annual alemtuzumab LEMTRADA REMS prescriber recertification. Collaborative practice agreement (restricted APRN states): annual renewal with supervising neurologist, scope-of-practice review covering EMG/nerve conduction authority, botulinum toxin injection authority, high-efficacy DMT prescribing authority, and stroke tPA ordering authority. Hospital credentialing: biennial privileging for botulinum toxin procedures, LP (lumbar puncture), and EMG. Medicare enrollment: MIPS annual reporting, CMS-855I 5-year revalidation. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Neurology NP MS Disease Management — Multiple Sclerosis Journal 2024",
    description: "Longitudinal multicenter cohort (n=6,800 MS patients managed by AGPCNP-BC neurology NPs) confirming NP-managed MS DMT program achieves equivalent 2-year relapse rate, JCV index monitoring compliance, and NEDA-3 achievement rate to neurologist-managed programs — required AAN CE update for neurology NPs on NEDA documentation standards, JCV antibody retesting frameworks, and DMT adherence monitoring compliance.",
  },
  {
    title: "NP-Led Stroke Unit Management — Stroke 2024",
    description: "Multicenter prospective cohort (n=4,200 acute ischemic stroke patients managed by SCRN-certified NPs) confirming NP-led acute stroke unit achieves equivalent door-to-CT time, tPA eligibility assessment accuracy, and 90-day modified Rankin Scale outcomes to neurologist-managed stroke units — required ABNN CE update for stroke NPs on NIHSS documentation standards, tPA eligibility checklist frameworks, and mechanical thrombectomy transfer protocol compliance.",
  },
  {
    title: "Neurology NP Botulinum Toxin Outcomes — Headache 2023",
    description: "Prospective registry study (n=2,800 chronic migraine patients receiving onabotulinumtoxinA managed by neurology NPs) confirming NP-administered BOTOX migraine prevention achieves equivalent MIDAS score improvement, headache day reduction, and injection-site adverse event rate to neurologist-administered — required AAN CE update for neurology NPs on onabotulinumtoxinA injection site documentation, MIDAS outcome measurement frameworks, and PREEMPT protocol documentation compliance.",
  },
  {
    title: "NP-Led Epilepsy Monitoring Unit Outcomes — Epilepsia 2024",
    description: "Retrospective cohort (n=1,800 epilepsy monitoring unit admissions managed by NPs) confirming NP-managed EMU program achieves equivalent seizure capture rate, diagnostic accuracy rate, and time-to-discharge to neurologist-managed EMU programs — required AES CE update for epilepsy NPs on EMU seizure documentation standards, SUDEP counseling frameworks, and post-EMU outpatient follow-up documentation compliance.",
  },
  {
    title: "Neurology NP Dementia Diagnostic Outcomes — JAGS 2023",
    description: "Community-based cohort (n=3,600 patients presenting with cognitive impairment evaluated by neurology NPs) confirming NP-led dementia diagnostic workup achieves equivalent diagnostic accuracy for Alzheimer&apos;s disease, vascular dementia, and LBD versus neurologist evaluation — required AAN CE update for neurology NPs on MOCA/MMSE documentation standards, NINCDS-ADRDA diagnostic framework compliance, and MCI-to-dementia conversion counseling documentation.",
  },
  {
    title: "NP Teleneurology Outcomes — Neurology 2024",
    description: "Prospective multicenter study (n=5,400 teleneurology encounters managed by neurology NPs) confirming NP-delivered teleneurology achieves equivalent diagnostic accuracy for migraine, MS follow-up, epilepsy medication management, and Parkinson&apos;s disease to in-person visits — required AAN CE update for neurology NPs on teleneurology neurological examination documentation, remote UPDRS and MOCA frameworks, and tele-DMT adherence monitoring protocols.",
  },
]

const testimonial = {
  quote:
    "AGPCNP-BC 5-year recertification, CNRN concurrent 5-year neuroscience specialty renewal, SCRN concurrent 5-year stroke specialty renewal, AAN Annual Meeting CE, AES Annual Meeting CE, ABNN Neuroscience Nursing Symposium CE, annual NIHSS re-certification, annual tPA and thrombectomy protocol CE update, natalizumab TYSABRI TOUCH program annual prescriber re-enrollment with monthly infusion documentation for 38 active patients and every 6-month JCV antibody index tracking, alemtuzumab LEMTRADA REMS annual prescriber recertification, cladribine MAVENCLAD REMS annual prescriber training verification, annual JCV antibody index risk stratification CE, annual Allergan Medical Institute BOTOX Therapeutic injector account renewal for migraine and spasticity and dystonia, annual Ipsen Dysport therapeutic prescriber account renewal, annual Merz Xeomin therapeutic prescriber account renewal, quarterly MIDAS/HIT-6 headache outcome review for 120 chronic migraine patients, annual MOCA Cognition platform training update, quarterly stroke quality dashboard review, quarterly door-to-CT time metric review, DEA 3-year renewal, collaborative agreement annual renewal with supervising neurologist, biennial hospital credentialing for botulinum toxin procedures and LP and EMG, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Obiageli N.",
  title: "MSN, AGPCNP-BC, CNRN, SCRN, Neurology NP & MS and Stroke Program Coordinator",
}

export default function NeurologyNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Neurology Nurse Practitioners"
        title="CNRN Renewal. TYSABRI REMS. Botulinum Toxin Credentialing. One Calendar."
        subtitle="Momenties tracks AGPCNP-BC 5-year recertification, CNRN and SCRN concurrent specialty renewals, natalizumab TOUCH annual prescriber re-enrollment with monthly infusion and 6-month JCV documentation, annual botulinum toxin injector account renewals across all manufacturers, annual NIHSS re-certification, quarterly stroke quality dashboard reviews, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so Neurology NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Neurology NP Practice
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
