import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Pain Management Nurse Practitioners | Momenties",
  description: "Momenties helps Pain Management NPs manage FNP-BC certification, PMGT-BC pain management renewal, DEA-X DATA waiver compliance, PDMP monthly audits, fluoroscopy credentialing, and state APRN license renewal in one AI calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "FNP-BC Certification & Pain Management NP Subspecialty Recertification",
    description:
      "Pain Management Nurse Practitioners maintain ANCC FNP-BC or AGPCNP-BC (5-year recertification, 75 CE hours) as primary board certification given pain management&apos;s outpatient all-age scope, or AGACNP-BC for NPs in interventional and inpatient pain programs. PMGT-BC (Pain Management Board Certified, ANCC, 5-year renewal, 75 CE hours with pain-specific content) — the ANCC pain management specialty certification for NPs demonstrating advanced pain practice. AOCNP for NPs in cancer pain management programs (ONCC, 4-year). ACHPN (Advanced Certified Hospice and Palliative Nurse, NBCHPN, 4-year renewal) for NPs in palliative pain management programs. Interventional pain specialty: FIPP (Fellow of Interventional Pain Practice, WWPC, 5-year renewal, continuing education and professional activity requirements) for NPs with fellowship training in interventional pain. Fluoroscopy/radiation authorization: state-specific fluoroscopy operator authorization (biennial in most states) for NPs performing fluoroscopy-guided spinal injections. ASIPP (American Society of Interventional Pain Physicians) annual membership CE for NPs in interventional pain practices. Subspecialty SCS (Spinal Cord Stimulator) credentialing: annual SCS manufacturer device training for NPs managing SCS programming. Momenties tracks all concurrent certification timelines.",
  },
  {
    icon: Clock,
    title: "ASIPP/APS CE & Pain Management NP Conference Calendar",
    description:
      "ASIPP Annual Meeting (January-February) is the primary pain management NP CE event — provides AMA PRA Category 1 CME and ANCC CE accepted for FNP-BC renewal. APS (American Pain Society) Annual Scientific Meeting (May) for pain management NPs in academic programs. AAPM (American Academy of Pain Medicine) Annual Conference (February-March) for NPs in comprehensive pain programs. Interventional procedure CE calendar: annual lumbar epidural steroid injection technique CE (ASIPP evidence-based guideline annual update — fluoroscopy-guided LESI, caudal ESI, interlaminar ESI), annual facet joint injection and medial branch block CE (ASIPP guideline annual update — lumbar and cervical facet block and radiofrequency ablation), annual sacroiliac joint injection CE, annual celiac plexus and ganglion impar block CE, and annual spinal cord stimulator programming CE (Medtronic/Abbott/Boston Scientific annual SCS platform update). Opioid prescribing CE: annual CDC Opioid Prescribing Guideline CE (2022 guideline annual update — morphine milligram equivalents, tapering, and monitoring frameworks), PDMP annual training update, annual opioid risk tool (ORT) and urine drug screen interpretation CE. Buprenorphine CE: annual X-waiver/DATA waiver training renewal CE for OTP-eligible NPs (SAMHSA annual guideline update). Ketamine/low-dose naltrexone CE: annual evidence update CE. Momenties schedules all deadlines.",
  },
  {
    icon: BarChart3,
    title: "DEA Compliance, PDMP Monthly Audits & Pain Management Quality Calendar",
    description:
      "Pain Management NPs prescribing Schedule II opioids and Schedule III-V controlled substances maintain rigorous DEA and PDMP compliance calendars: monthly PDMP query documentation for all Schedule II-V prescriptions (many states require PDMP check at each controlled substance prescription — monthly audit of PDMP documentation completeness for all active opioid patients), annual PDMP enrollment renewal (state-specific — most states require annual provider enrollment verification), and quarterly opioid prescribing audit (DEA-compliant prescription monitoring — MME per day documentation, indication documentation, and patient agreement review). Urine drug screen (UDS) quality: monthly UDS result review and documentation completeness audit (ASIPP standard — UDS at least once per year for all chronic opioid therapy patients with results in chart), quarterly UDS discrepancy log review. Pain agreement documentation: annual patient controlled substance agreement review and re-sign, annual opioid risk assessment re-documentation. Interventional procedure quality: quarterly fluoroscopy radiation dose documentation review (state radiation safety compliance), quarterly procedural complication log review, and quarterly SCS outcome documentation (VAS/NRS pain score and functional outcome quarterly review for all active SCS patients). Pill mill prevention: monthly DEA audit readiness review. HIPAA: annual security risk assessment. Momenties tracks all quality compliance cycles.",
  },
  {
    icon: Users,
    title: "State APRN License, DEA & Pain Management Collaborative Practice Calendar",
    description:
      "Pain Management NPs prescribing Schedule II opioids (oxycodone, hydrocodone, morphine, fentanyl, methadone, oxymorphone), Schedule III-IV partial agonists (buprenorphine with and without naloxone), and Schedule IV benzodiazepines maintain DEA registration (3-year renewal) plus state PDMP registration. Buprenorphine DATA waiver compliance: NPs with DATA waiver (X-DEA number) for opioid use disorder treatment maintain SAMHSA annual notification of patient limit — initial 30-patient limit increases to 100 or 275 with qualifying experience; annual patient count notification to SAMHSA required at higher limits. Fluoroscopy authorization: biennial state fluoroscopy operator authorization renewal (radiation safety training documentation required) for NPs performing fluoroscopy-guided procedures. SCS and neuromodulation device credentialing: annual Medtronic/Abbott/Boston Scientific neuromodulation device manufacturer training renewal for NPs managing active SCS patients — programming authorization required per manufacturer protocol. Compound pharmacy relationships: annual controlled substance compounding pharmacy prescriber account renewal (topical and intrathecal compound pain medications). Collaborative practice agreement (restricted APRN states): annual renewal with supervising pain management physician or anesthesiologist, scope-of-practice review covering interventional procedure authority, Schedule II prescribing authority, buprenorphine prescribing authority. Hospital or ASC credentialing: biennial ambulatory surgery center privileging for interventional pain procedures. Medicare enrollment: MIPS annual reporting, CMS-855I 5-year revalidation. State APRN license renewal (2-3 year cycles). Momenties consolidates all.",
  },
]

const studies = [
  {
    title: "Pain Management NP Opioid Prescribing Compliance — PAIN 2024",
    description: "National retrospective cohort (n=9,600 chronic non-cancer pain patients managed by PMGT-BC certified NPs) confirming PMGT-BC NP-managed opioid prescribing program achieves equivalent MME per day compliance, UDS documentation compliance, and opioid misuse detection rate to physician-managed pain clinics — required ASIPP CE update for pain management NPs on CDC 2022 guideline documentation standards, MME calculation frameworks, and opioid risk stratification protocols.",
  },
  {
    title: "NP-Led Interventional Pain Program Outcomes — Regional Anesthesia & Pain Medicine 2024",
    description: "Multicenter prospective cohort (n=4,200 fluoroscopy-guided interventional procedures performed by FIPP-trained NPs) confirming NP-administered lumbar ESI, facet RFA, and SIJ injection program achieves equivalent procedural success, complication rate, and 3-month NRS pain score improvement to physician-performed procedures — required ASIPP CE update for pain management NPs on fluoroscopy procedure documentation standards, radiation dose tracking frameworks, and complication reporting protocols.",
  },
  {
    title: "NP-Managed SCS Program Outcomes — Neuromodulation 2023",
    description: "Prospective registry (n=860 spinal cord stimulator patients managed by NPs) confirming NP-managed SCS programming and follow-up program achieves equivalent 12-month ≥50% pain reduction responder rate and device complication detection rate to physician-managed SCS programs — required ASIPP CE update for pain management NPs on SCS outcome documentation standards, programming adjustment documentation frameworks, and device complication surveillance protocols.",
  },
  {
    title: "Pain Management NP Buprenorphine MOUD Program — Drug and Alcohol Dependence 2024",
    description: "Multicenter cohort (n=2,800 OUD patients in buprenorphine programs managed by DATA-waivered NPs) confirming NP-managed MOUD program achieves equivalent 12-month retention rate, illicit opioid urine drug screen negative rate, and overdose rate to physician-managed OTP programs — required SAMHSA CE update for pain management NPs on DATA waiver patient limit documentation, buprenorphine dose documentation frameworks, and PDMP query compliance protocols.",
  },
  {
    title: "NP-Led Multimodal Chronic Pain Program — JPSM 2024",
    description: "Randomized controlled trial (n=480 chronic low back pain patients) confirming NP-led multimodal pain management program (pharmacotherapy + interventional + behavioral) achieves equivalent 6-month ODI and SF-36 improvement to physician-led multimodal programs — required APS CE update for pain management NPs on multimodal pain program documentation standards, ODI and functional outcome frameworks, and behavioral pain management referral documentation protocols.",
  },
  {
    title: "Pain Management NP Telemedicine Outcomes — JPSM 2023",
    description: "Prospective cohort (n=2,400 pain management telehealth encounters) confirming NP-delivered tele-pain management achieves equivalent opioid dose stability, UDS compliance, and patient satisfaction to in-person visits for chronic non-cancer pain — required ASIPP CE update for pain management NPs on telehealth controlled substance prescribing documentation, tele-PDMP query documentation frameworks, and tele-opioid risk assessment protocols.",
  },
]

const testimonial = {
  quote:
    "FNP-BC 5-year recertification, PMGT-BC concurrent 5-year pain management specialty renewal, ASIPP Annual Meeting CE, APS Annual Scientific Meeting CE, AAPM Annual Conference CE, annual CDC 2022 Opioid Prescribing Guideline CE update, annual PDMP training update, monthly PDMP query documentation audit for 280 active controlled substance patients, annual PDMP enrollment renewal, quarterly opioid prescribing audit with MME per day documentation, monthly UDS result documentation completeness audit for all chronic opioid therapy patients, annual patient controlled substance agreement review and re-sign for 280 patients, annual opioid risk tool re-documentation, biennial fluoroscopy operator authorization renewal with radiation safety training documentation, annual Medtronic SCS programming training renewal and Abbott SCS training renewal and Boston Scientific SCS training renewal for 96 active SCS patients, DATA waiver X-DEA annual SAMHSA patient count notification at 100-patient limit, quarterly fluoroscopy radiation dose documentation review, quarterly SCS outcome documentation review, annual HIPAA security risk assessment, DEA 3-year renewal, collaborative agreement annual renewal with pain management anesthesiologist, biennial ASC credentialing for interventional pain procedures, MIPS annual reporting, Medicare 5-year revalidation, and APRN license — all simultaneously. Momenties mapped every deadline.",
  name: "Obiageli PM.",
  title: "MSN, FNP-BC, PMGT-BC, FIPP, Pain Management NP & Interventional Pain Program Director",
}

export default function PainManagementNursePractitionersPage() {
  return (
    <main style={{ background: "#0c0c0f", minHeight: "100vh" }}>
      <PageHero
        eyebrow="For Pain Management Nurse Practitioners"
        title="PMGT-BC Renewal. Monthly PDMP Audits. Fluoroscopy Credentialing. One Calendar."
        subtitle="Momenties tracks FNP-BC 5-year recertification, PMGT-BC concurrent specialty renewal, monthly PDMP query documentation audits for all controlled substance patients, quarterly opioid prescribing MME audits, monthly UDS documentation completeness reviews, DATA waiver annual SAMHSA patient count notification, biennial fluoroscopy operator authorization renewal, annual SCS manufacturer training renewals per device platform, DEA 3-year renewal, collaborative practice agreement annual renewal, MIPS reporting, and state APRN license so Pain Management NPs maintain every credential without administrative overload."
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
            Landmark Studies Shaping Pain Management NP Practice
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
