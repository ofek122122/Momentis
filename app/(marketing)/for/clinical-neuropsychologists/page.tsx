import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Clinical Neuropsychologists | CME & MOC Tracker",
  description: "Track ABCN or ABPP diplomate renewal, NAN/INS CE requirements, neuropsychological assessment CE, competency-based supervision CE, and state licensure in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABCN Diplomate Renewal & NAN/INS Fellowship CE",
    body: "Clinical neuropsychologists hold ABCN (American Board of Clinical Neuropsychology) or ABPP (American Board of Professional Psychology) diplomate in Clinical Neuropsychology — the gold standard specialty credential. ABCN diplomate renewal: 120 CE per 5-year cycle (40 neuropsychology-specific, 3 ethics hours mandatory) with a formal competency review every 10 years. ABPP neuropsychology diplomate follows the same CE structure through ABCN as the accrediting body. NAN (National Academy of Neuropsychology) fellowship CE: 60 CE per 2-year cycle (30 neuropsychology-specific), annual NAN Annual Conference participation or equivalent. INS (International Neuropsychological Society) fellowship adds a 2-year CE cycle. NASP (National Association of School Psychologists) membership CE cycle applies for neuropsychologists working in educational settings. State psychology licensure CE (2-4 year, 40-80 hours) runs independently from ABCN diplomate renewal — ethics CE typically mandated separately by state boards. Momenties tracks ABCN 5-year cycle, state licensure, NAN fellowship, and ethics CE as independent dashboards.",
  },
  {
    icon: Clock,
    title: "Neuropsychological Assessment CE: Dementia, TBI & ADHD Batteries",
    body: "Dementia assessment CE: NIA-AA 2024 Alzheimer&apos;s disease diagnostic framework CE (preclinical, MCI, dementia staging — AT(N) biomarker integration into clinical diagnosis), lewy body dementia DLB Consortium 2023 revised criteria CE (core features: fluctuating cognition, recurrent visual hallucinations, REM sleep behavior disorder, parkinsonism), FTD FTLD neuropsychological profile CE (bvFTD executive and social cognition CE vs nfvPPA language CE vs svPPA semantic CE). TBI neuropsychological evaluation CE: VA/DoD 2023 mTBI clinical practice guidelines CE (Brief Traumatic Brain Injury Screen, return-to-duty decision tree CE), PCSS-R (Post-Concussion Symptom Scale Revised) interpretation CE, base rate literature CE for post-concussive symptoms. ADHD adult evaluation CE: Barkley Adult ADHD Rating Scale CE, embedded validity indicators CE for adult ADHD (CASS, MSVT — performance validity testing in ADHD evaluation), differential diagnosis CE (ADHD vs sleep disorder vs depression CE). Dementia with neuropsychiatric symptoms CE: NPI (Neuropsychiatric Inventory) administration CE, psychosis in Alzheimer&apos;s NINCDS CE.",
  },
  {
    icon: BarChart3,
    title: "Performance Validity Testing, Cultural Competency & Telehealth CE",
    body: "Performance validity testing CE: consensus 2023 PVT guidelines — embedded versus stand-alone PVT battery CE (TOMM, WMT, MSVT, RDS — criteria for insufficient effort CE), failure rates in neurological versus psychiatric populations CE (base rate CE for TBI, ADHD, dementia, PTSD), classification accuracy CE for each instrument. Symptom validity testing CE: SIMS, MMPI-2-RF FBS-r/RBS CE for somatic overreporting, structured interview for malingered symptomatology (SIMS) cut score CE update 2024. Cultural neuropsychology CE: ECLECTIC guidelines for multicultural neuropsychological assessment CE, normative data for multilingual populations CE (Spanish-language CVLT-3, Batería-IV Woodcock-Muñoz CE), acculturation CE in interpretation of test performance. Telehealth neuropsychological assessment CE: APA 2023 guidelines for video-based neuropsychological assessment CE, standardization concerns for remote administration CE (attention monitoring, distraction-free environment CE), which tests are validated for telehealth administration (MMSE telehealth CE, MoCA telephone CE).",
  },
  {
    icon: Users,
    title: "State Licensure, Ethics CE, Supervision & Forensic Neuropsychology CE",
    body: "State psychology licensure CE (2-4 year cycle, 40-80 CE hours) — ethics CE mandated in most states (varies 3-6 hours per cycle). APA ethics code CE: 2022 APA Ethics Code revision CE update, multiple relationship CE, telehealth informed consent CE (FaceTime/Zoom CE for clinical neuropsychology). Supervision CE: ABCN requires documented supervision hours for diplomate renewal — competency-based supervision model CE (CbS framework CE), supervisee self-assessment CE, cross-cultural supervision CE. Forensic neuropsychology CE: NAN 2024 position statement on base rates CE (mandatory CE for forensic evaluations), AAFP (American Academy of Forensic Psychology) guidelines CE, personal injury evaluation CE (causation versus correlation CE, pre-existing versus post-injury CE methodology), competency to stand trial CE (Dusky standard neuropsychological operationalization CE), MMPI-3 forensic interpretation CE. Expert witness CE: FRE 702 Daubert standard for neuropsychological testimony CE — methodology reliability CE, peer review CE, error rate CE. Momenties tracks ABCN 5-year cycle, state board ethics CE, and forensic CE deadlines independently.",
  },
]

const studies = [
  {
    title: "NIA-AA 2024 Alzheimer&apos;s Disease Diagnostic Framework Update CE",
    detail: "NIA-AA 2024 revision: biological definition of AD (amyloid, tau pathology) now separates from clinical syndrome (MCI or dementia). AT(N) staging: A (amyloid status) + T (tau) + N (neurodegeneration) — CE for integrating biomarker results with neuropsychological profile. CE: memory encoding versus storage CE (amnestic MCI: poor delayed recall, relative preserved recognition — vs DLB fluctuating encoding CE), executive screening CE for early AD (DKEFS Trail Making, Category Fluency — early sensitivity CE), clinical utility of amyloid PET CE in MCI evaluation.",
  },
  {
    title: "DLB Consortium Revised Criteria 2023 CE",
    detail: "Revised DLB criteria: core features updated — parkinsonism CE (motor features in DLB vs PD CE), fluctuating cognition CE (Clinician Assessment of Fluctuation CE), recurrent visual hallucinations CE, REM sleep behavior disorder CE (polysomnography gold standard — clinical interview sensitivity 87% CE). Neuropsychological profile CE: relative visuospatial deficit CE (VOSP, Rey-O CE for DLB vs AD), clock drawing CE (peripheral clock features — DLB versus AD profiles CE), attention CE (Serial 7s, digit span in DLB fluctuation CE).",
  },
  {
    title: "PVT Consensus Guidelines Update 2023 — NAN/AACN",
    detail: "Consensus update: performance validity testing recommended for all clinical neuropsychological evaluations regardless of referral question. CE: two or more PVT failures in absence of severe neurological injury — insufficient effort CE (not malingering — terminology CE). Base rates CE: PVT failure rates in TBI (20-40% mild TBI litigation CE), ADHD (15-25% adult ADHD CE), PTSD (30-40% forensic PTSD CE). TOMM trial 1 CE: sensitivity 68%, specificity 90% — not a standalone PVT CE. RDS (Reliable Digit Span) CE: cut score ≤7 — sensitivity 75%, specificity 93% for insufficient effort.",
  },
  {
    title: "APA Telehealth Neuropsychological Assessment Guidelines 2023",
    detail: "APA 2023 guidelines: telehealth neuropsychological assessment acceptable with informed consent disclosures (technology limitations, third-party presence monitoring CE). Test validation CE: tests with telehealth equivalence studies — CVLT-3 remote CE (Pearson 2022 data — equivalent performance), RBANS telehealth CE, MoCA-BLIND (telephone administration CE). Tests NOT validated for remote: timed psychomotor tests (Pegboard, SDMT paper CE), physical tests (grip strength CE). Clinical CE: attention behavior monitoring via video CE, peripheral vision check before beginning visuospatial tests CE.",
  },
  {
    title: "MMPI-3 Release and Forensic Interpretation CE (2022, 2024 follow-up)",
    detail: "MMPI-3 (2022): successor to MMPI-2-RF. CE: validity scales CE — updated VRS (variable response inconsistency), TRIN (true response inconsistency), F-r, Fp-r, Fs, FBS-r, RBS scales CE for symptom validity. Clinical scales CE: RC (restructured clinical) scales retained, SP (specific problems) scales updated. Forensic CE: personal injury MMPI-3 profile interpretation CE, FBS-r CE (functional somatic symptoms — cut score 17 women, 16 men CE), RBS (response bias scale) CE for neurocognitive symptoms over-reporting. MMPI-3 versus MMPI-2-RF CE: conversion norms not available — re-establish within-lab norms CE.",
  },
  {
    title: "ECLECTIC Multicultural Neuropsychological Assessment Guidelines 2024",
    detail: "ECLECTIC framework CE: Evaluate acculturation, Consider education, Language dominance, Evaluate SES, Consider test familiarity, Test experience, Investigate health factors, Consider cultural validity. CE: Spanish-language normative data CE — Heaton Spanish norms (CVLT, SDMT), D-KEFS Spanish CE (limited normative data CE — caution in interpretation). Bilingualism CE: evaluate language dominance before test selection (non-verbal tests are NOT culture-free CE), standardized acculturation assessment CE (SAS or ARSMA-II CE), language switching cost CE in processing speed tasks.",
  },
]

export default function ClinicalNeuropsychologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Clinical Neuropsychologists"
        title="One Calendar for ABCN Diplomate Renewal, NAN Fellowship CE, and State Licensure Ethics"
        subtitle="From performance validity testing CE to multicultural assessment guideline updates — Momenties tracks every obligation so your diplomate, fellowship, and state license stay current."
        cta="Start free — HIPAA-aware"
        ctaHref="/sign-up"
      />

      {/* Four pillars */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-16" style={{ color: "#f0ece3" }}>
              Every Credentialing Obligation, One Calendar
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {pillars.map(({ icon: Icon, title, body }) => (
              <Reveal key={title}>
                <div
                  className="rounded-xl p-8 h-full"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="mb-4 inline-flex items-center justify-center rounded-lg p-3"
                    style={{ background: "rgba(197,163,92,0.12)" }}
                  >
                    <Icon size={22} style={{ color: "#c5a35c" }} />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-semibold" style={{ color: "#f0ece3" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key CE */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-4" style={{ color: "#f0ece3" }}>
              High-Yield CE for Clinical Neuropsychology MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each diagnostic framework update, assessment guideline revision, and ethics mandate before your ABCN cycle or state licensure deadline.
            </p>
          </Reveal>
          <div className="space-y-4">
            {studies.map(({ title, detail }) => (
              <Reveal key={title}>
                <div
                  className="rounded-xl p-6"
                  style={{ background: "#131318", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <h3 className="mb-2 font-semibold text-base" style={{ color: "#c5a35c" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#8b8b8b" }}>
                    {detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24" style={{ background: "#0a0a0d" }}>
        <div className="mx-auto max-w-2xl px-6 text-center">
          <Reveal>
            <blockquote
              className="mb-6 font-display text-2xl font-medium leading-snug"
              style={{ color: "#f0ece3" }}
            >
              &ldquo;ABCN diplomate renewal is every 5 years — but the 40 neuropsychology-specific hours and the ethics CE don&apos;t accumulate automatically. My state board has a separate ethics requirement. NAN fellowship is every 2 years. The PVT consensus CE became required at our clinic after the 2023 guidelines dropped. Telehealth CE became mandatory after COVID. It&apos;s not an enormous number of hours, but it&apos;s an enormous number of separate calendars. Momenties consolidated it.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Ingrid W., PhD, ABCN, ABPP
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Clinical Neuropsychology, Academic Medical Center Memory Disorders Clinic
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABCN renewal, state ethics CE, or NAN fellowship deadline again"
        subtitle="Momenties keeps every CE credit, assessment guideline CE, supervision hour, and ethics requirement in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
