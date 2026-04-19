import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Occupational Medicine Physicians | CME & MOC Tracker",
  description: "Track ABPM occupational medicine MOC, ACOEM fellowship CE, DOT medical examiner certification CE, MRO certification CE, and OSHA medical surveillance CE in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABPM Occupational Medicine MOC, ACOEM Fellowship & CME-Pro CE",
    body: "Occupational medicine physicians hold primary certification through ABPM (American Board of Preventive Medicine) — Occupational Medicine subspecialty: 10-year recertification exam (continuous MOC pathway available — 150 CE/3 years, 50 OM-specific). ACOEM (American College of Occupational and Environmental Medicine) fellowship — FACOEM maintenance: 50 CE per 3-year cycle, ACOEM Annual Conference CE, ACOEM Evidence-Based Practice Guidelines CE. AOEC (Association of Occupational and Environmental Clinics) fellowship CE: 2-year cycle for academic occupational medicine specialists. ABPM MOC Part IV CE: practice improvement module — occupational health quality improvement CE (workplace injury prevention CE, return-to-work program CE). CME-Pro (Occupational Medicine CME module): ACOEM/ABPM jointly approved CE modules. SOEM (Society of Occupational and Environmental Medicine) CE for academic practice. AIHA (American Industrial Hygiene Association) CE for occupational medicine physicians with industrial hygiene practice. Mining medicine CE: MSHA (Mine Safety and Health Administration) required CE for physicians providing medical surveillance at mine sites. Offshore medicine CE: OGUK (Oil and Gas UK) medical fitness standards CE for offshore physicians. Momenties tracks ABPM MOC 10-year cycle, ACOEM fellowship 3-year CE, and specialty-specific site CE independently.",
  },
  {
    icon: Clock,
    title: "DOT Medical Examiner Certification & MRO Certification CE",
    body: "DOT Federal Motor Carrier Safety Administration (FMCSA) Medical Examiner CE: FMCSA National Registry CME requirement — 5-year recertification CE (40 hours of FMCSA-approved training), 2-year recertification for certified examiners CE (6 FMCSA-approved CME credits/2 years). FMCSA ME training CE: advanced training CE modules (cardiovascular CE, neurological CE, psychiatric CE, diabetes CE, sleep apnea CE — current FMCSA vision standards CE, hearing standards CE). DOT FMCSA standards update CE: 2024 Sleep Apnea Advisory Criteria CE, diabetes insulin exemption program CE (FMCSA Federal Diabetes Exemption CE — expanded 2023 CE), epilepsy exemption program CE. MRO (Medical Review Officer) Certification: AAMRO (American Association of Medical Review Officers) certification CE — 12 CME/year (MRO-specific CE), AAMRO Annual Meeting CE. DATIA (Drug and Alcohol Testing Industry Association) MRO CE. DOT 49 CFR Part 40 CE updates: annual review CE — federal workplace drug testing CE, alcohol testing CE, SAP (Substance Abuse Professional) referral CE. SAMHSA mandatory guidelines update CE: annual January 1 CE (drug panel CE additions CE — fentanyl analog CE 2024, synthetic cannabinoid CE). FAA Medical Examiner CE: FAA aviation medical examiner — annual refresher CE required CE. Momenties tracks FMCSA 5-year/2-year recert, MRO annual CE, and FAA AME annual CE.",
  },
  {
    icon: BarChart3,
    title: "OSHA Medical Surveillance CE, Fitness-for-Duty & Return-to-Work CE",
    body: "OSHA medical surveillance program CE: asbestos medical surveillance CE (29 CFR 1910.1001 CE — annual exam CE, spirometry CE, chest X-ray CE every 3-5 years CE), lead medical surveillance CE (29 CFR 1910.1025 CE — blood lead CE ≥40 µg/dL CE — remove from exposure CE, BLL CE ≤40 µg/dL CE return CE), beryllium standard CE (2020 OSHA beryllium standard CE — CBD chronic beryllium disease CE — BeLPT test CE), silica standard CE (OSHA 2016 CE — audiometry CE, spirometry CE, chest X-ray CE program CE), hexavalent chromium CE (29 CFR 1910.1026 CE — respiratory exam CE). Audiometry surveillance CE: OSHA 29 CFR 1910.95 CE — annual audiogram CE, baseline CE, STS (Standard Threshold Shift) CE determination CE. Fitness-for-duty CE: ACOEM guidelines CE (alcohol CE, drugs CE, cognitive impairment CE, physical CE requirements CE — ADA CE interaction CE), FAA fit-for-duty CE, DOT fit-for-duty CE. Return-to-work CE: ACOEM Official Disability Guidelines CE (ODG CE — evidence-based RTW CE timelines CE), work restrictions CE (modified duty CE — OSHA recordability CE implications CE), FCE (Functional Capacity Evaluation) CE — interpretation CE, RTW communication CE (HIPAA CE considerations CE for employer CE). Momenties tracks OSHA medical surveillance program CE cycles and fitness-for-duty update CE.",
  },
  {
    icon: Users,
    title: "State License, Workers Comp CE, Environmental Medicine & Travel Medicine CE",
    body: "State medical license CE (2-year, 25-50 CME). Workers compensation CE: state WC fee schedule CE (annual update CE — state-specific CE), IME (Independent Medical Evaluation) training CE (ACOEM IME CE standards CE), work-relatedness causation CE (ACOEM causation guidelines CE — Bradford Hill criteria CE in OM CE), impairment rating CE (AMA Guides 6th edition CE — DRE CE vs ROM CE method CE, MMI CE determination CE). Environmental medicine CE: ATSDR ToxFAQs CE (annual update CE — priority hazardous substances CE), PFAS CE (per- and polyfluoroalkyl substances CE — community exposure CE, health screening CE — 2024 EPA drinking water limits CE), lead in children CE (ACOEM 2024 CE — blood lead reference value CE), heavy metals CE (arsenic CE, mercury CE — occupational vs environmental CE). Travel medicine CE: ISTM (International Society of Travel Medicine) fellowship CE — annual CISTM CE modules CE, vaccine schedule CE update CE (CDC Yellow Book CE — updated every 2 years CE), malaria prophylaxis CE (CDC 2024 CE — tafenoquine CE for P. vivax CE, atovaquone-proguanil CE vs doxycycline CE by destination CE), traveler&apos;s diarrhea CE, altitude sickness CE. Aviation medicine CE: HIMS AME CE (Human Intervention Motivation Study CE — aviation medical CE for substance use CE recovery CE). Momenties tracks state WC fee schedule CE, CDC Yellow Book CE revision, and FMCSA renewal.",
  },
]

const studies = [
  {
    title: "FMCSA Sleep Apnea Advisory Criteria 2024 CE Update",
    detail: "FMCSA 2024 Sleep Apnea Advisory Criteria update: DOT medical examiners advised to screen all CMV drivers with BMI ≥33 (revised from ≥35 CE) + neck circumference ≥17 inches (men) or ≥15.5 inches (women) CE + at least one additional risk factor (hypertension CE, type 2 diabetes CE, witnessed apnea CE). Polysomnography requirement CE: drivers meeting criteria referred for PSG before certification CE. Renewal CE: CPAP adherence ≥70% CE (4+ hours/night, 70% of nights CE) required for annual certification CE. CE: positive airway pressure titration CE (auto-CPAP CE vs fixed-pressure CE), MSLT CE (multiple sleep latency test CE — narcolepsy CE vs OSA CE), oral appliance CE alternative CE (custom-fitted CE, follow-up PSG required CE), driver compliance CE counseling CE (HOS — Hours of Service — impact CE), telematics CPAP data upload CE (FMCSA CE — direct modem CE — provider access CE authorization CE).",
  },
  {
    title: "OSHA Silica Standard Medical Surveillance — NIOSH 2023 Review CE",
    detail: "NIOSH 2023 occupational silica surveillance review: crystalline silica OSHA PEL 50 µg/m³ CE (cut from 100 µg/m³ CE — 2016 OSHA standard CE). Medical surveillance program CE: initial exam CE (spirometry CE, CXR ILO classification CE, TB screen CE), periodic exam CE (annually for exposures ≥25 µg/m³ CE), physician written opinion CE (fitness CE for continued exposure CE, MRI not required CE). ILO 2011 Classification CE update: profusion CE grading CE (0/0 to 3/3 CE), NIOSH B-reader certification CE (required for ILO classification CE — biennial CE re-examination CE), early silicosis CE vs accelerated silicosis CE (high-exposure CE — <10 years CE — lung transplant CE consideration CE). Silicosis CE: 2024 engineered stone CE — countertop workers CE accelerated silicosis epidemic CE — NIOSH hazard alert CE, engineering controls CE (wet cutting CE, LEV CE), construction CE silica CE table 1 CE compliance CE.",
  },
  {
    title: "DOT MRO Federal Workplace Drug Testing — SAMHSA 2024 Panel Update CE",
    detail: "SAMHSA 2024 mandatory guidelines federal workplace drug testing CE: revised panel includes fentanyl analogs CE (norfentanyl CE, acetylfentanyl CE, furanylfentanyl CE — by LC-MS/MS CE — not initial immunoassay CE). MRO interpretation CE: fentanyl immunoassay cross-reactivity CE (methadone immunoassay may cross-react CE — confirmatory testing CE mandatory CE), medical explanation CE (legitimate fentanyl prescription CE — TUE equivalent CE), specimen validity testing CE (creatinine CE, pH CE, specific gravity CE — adulteration CE vs dilution CE). Point-of-care testing CE: FMCSA-approved POCT CE (not DOT-acceptable for federal CE — lab-based only CE). MRO duty CE: downtime notification CE (medical explanation interview CE — 5-day CE deadline from employer notification CE), cancelled tests CE (not positive CE — no DOT violation CE). Synthetic cannabinoid CE: new SAMHSA CE pending CE — JWH compounds CE — current panel CE does not detect CE — employer CE policy options CE.",
  },
  {
    title: "ACOEM Return-to-Work Guidelines — ODG 2024 Update CE",
    detail: "ACOEM ODG (Official Disability Guidelines) 2024 update: expanded evidence-based RTW timelines for 200+ diagnoses CE. Key RTW CE changes: lumbar strain CE (modified duty day 1 CE — not bed rest CE, RTW 1-3 days sedentary CE, 7-14 days medium work CE), carpal tunnel syndrome CE (post-op RTW sedentary 1 week CE — ACOEM 2024 CE — earlier than previous guidelines CE), rotator cuff repair CE (desk work 1 week CE, full return 4-6 months CE — duty restriction CE documentation CE). CE: ADA interactive process CE — OM physician role CE (essential functions CE, reasonable accommodation CE — vs OSHA fitness for duty CE), FMLA CE interaction with WC CE, IME CE standards (ACOEM 2023 CE — disclosure CE, opinion CE format CE, causation CE opinion CE — more probable than not CE standard CE). Work hardening program CE (FCE-based CE, 4-hour/day CE → full duty CE — return compliance CE).",
  },
  {
    title: "PFAS Health Effects — ATSDR 2023 Environmental Medicine CE",
    detail: "ATSDR PFAS health effects update 2023: minimum risk levels (MRLs) — PFOA CE 0.000007 mg/kg/day CE, PFOS CE 0.000002 mg/kg/day CE. EPA 2024 drinking water limits CE: PFOA 4 ng/L CE, PFOS 4 ng/L CE, PFHxS CE, PFNA CE, HFPO-DA (GenX CE) — combined CE. Occupational exposure CE: AFFF (aqueous film-forming foam) CE — firefighters CE, military CE, airport workers CE — serum PFAS CE measurement CE. CE: biomonitoring CE (serum PFAS CE testing CE — community exposure CE vs occupational CE), PFAS health effects CE (thyroid disease CE, immune suppression CE — vaccine antibody titers CE, kidney cancer CE, testicular cancer CE — NIOSH studies CE), medical surveillance program CE (firefighters CE — annual serum PFAS CE, thyroid CE, CBC CE, lipid panel CE, renal function CE), PFAS registry CE — NTP human PFAS CE exposure program CE.",
  },
  {
    title: "NIOSH B-Reader Recertification CE — ILO 2011 Chest Radiograph CE Update",
    detail: "NIOSH B-Reader program recertification 2024 CE: biennial recertification exam CE — correct classification of 100 CXR set CE (pass ≥85% correct CE). ILO 2011 classification CE update: digital radiography CE classification CE (DICOM CE — digital CE equivalent to film CE, monitor calibration CE requirements CE — 3 megapixel luminance CE, ambient lighting CE), profusion scoring CE methodology CE (major CE vs minor CE opacity category CE), pleural abnormalities CE (costophrenic angle obliteration CE — mesothelioma CE screen CE). CE: quality control program CE (NIOSH-approved facility CE, B-reader CE 3-year archive CE), occupational lung disease CE (pneumoconiosis CE — coal worker CE, silicosis CE, asbestosis CE, mixed dust CE — ILO CE coding comparison CE), nonmalignant pleural disease CE (diffuse pleural thickening CE vs pleural plaques CE — ILO CE coding CE), B-reader impartiality CE (defense B-reader CE vs plaintiff CE — ACOEM standards CE).",
  },
]

export default function OccupationalMedicinePhysiciansPage() {
  return (
    <>
      <PageHero
        eyebrow="For Occupational Medicine Physicians"
        title="One Calendar for ABPM MOC, FMCSA Recertification, MRO CE, and OSHA Surveillance CE"
        subtitle="From DOT medical examiner renewal to PFAS environmental medicine CE — Momenties tracks every obligation so your ABPM MOC, FMCSA certification, and MRO credential stay current."
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
              High-Yield CE for Occupational Medicine MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each regulatory update and surveillance guideline before your ABPM MOC cycle, FMCSA recertification, or MRO annual CE deadline.
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
              &ldquo;ABPM MOC has a 10-year exam cycle but ongoing CE. FMCSA recertifies every 2 years. MRO requires 12 CE annually. OSHA medical surveillance cycles run on completely different schedules per standard. And SAMHSA updates the federal drug testing panel every January. Momenties is the only tool that shows all five timelines without me maintaining a spreadsheet.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Tunde A., MD, MPH, FACOEM, MRO
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Occupational Medicine, Corporate Health Program
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss a FMCSA recertification, MRO annual CE, OSHA surveillance cycle, or ABPM MOC window again"
        subtitle="Momenties keeps every CME credit, DOT certification renewal, MRO annual CE, OSHA surveillance program, and ABPM MOC cycle in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
