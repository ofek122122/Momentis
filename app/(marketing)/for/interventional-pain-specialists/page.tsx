import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Interventional Pain Specialists | CME & MOC Tracker",
  description: "Track ABPM/ABANES/ABA pain medicine MOC, ABIPP board CE, fluoroscopy credentialing CE, spinal cord stimulation CE, and DEA renewal deadlines in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABPM/ABA Pain Medicine MOC & ABIPP Board CE",
    body: "Interventional pain specialists hold primary certification through multiple pathways — ABPM (American Board of Pain Medicine) continuous MOC: 40 CME per year (20 pain-specific), ABPM re-examination every 10 years or annual MOC attestation pathway. ABA (American Board of Anesthesiology) Pain Medicine subspecialty: ABA MOCA-Minute™ pain module quarterly deadlines (30 questions/quarter), 10-year recertification exam for those not on continuous MOC. ABANES (American Board of Anesthesiology — Neurology Emergency — for neurologists with pain fellowship) MOC. ABIPP (American Board of Interventional Pain Physicians) board: 2-year renewal CE cycle (60 CME/2 years — 40 interventional-specific). ASIPP (American Society of Interventional Pain Physicians) fellowship CE: 2-year cycle. NANS (North American Neuromodulation Society) fellowship CE: annual CE, NANS Annual Meeting participation. APS (American Pain Society) CE. IPPS (Interventional Pain Practice Summit) CE. State pain management practice requirements: 8+ states require specific pain CE for controlled substance prescribing (e.g., FL 2 CE/year CME pain specifically). Momenties tracks ABPM MOC, ABIPP 2-year cycle, and state pain CE requirements independently.",
  },
  {
    icon: Clock,
    title: "Fluoroscopy Credentialing, SCS CE & Intrathecal Pump CE",
    body: "Fluoroscopy credentialing CE: ACR/ASIPP fluoroscopy CE (radiation safety CE — fluoroscopy time optimization CE, reference air kerma CE, operator radiation protection CE), annual fluoroscopy credentialing renewal CE (hospital privileging requirement), C-arm positioning CE (AP/oblique/lateral CE for epidural, facet, SIJ, celiac CE). Spinal cord stimulation (SCS) CE: Medtronic SCS programmer CE (annual update CE — Intellis platform CE), Abbott Dorsal CE (burst waveform CE), Boston Scientific Spectra CE (high-frequency 10kHz Senza CE), SCS trialing CE (trial success criterion CE — ≥50% pain reduction or ≥50% opioid reduction CE), SCS complication CE (lead migration CE, infection CE, hardware failure CE), dorsal root ganglion stimulation CE (DRG-S CE — ACCURATE trial CE). Intrathecal drug delivery (IDDS) CE: PACC (Polyanalgesic Consensus Conference) guidelines CE (2022 update CE — ziconotide CE, intrathecal opioid CE, baclofen CE), intrathecal morphine CE, IDDS infection prevention CE, pump refill CE, dose adjustment CE, trial protocol CE. Neuromodulation device manufacturer CE: annual mandatory training CE for credentialed operators. Momenties tracks SCS/IDDS device CE and fluoroscopy credentialing renewal.",
  },
  {
    icon: BarChart3,
    title: "Epidural CE, Facet/SIJ CE, Radiofrequency & Vertebral Augmentation CE",
    body: "Epidural steroid injection CE: ASIPP guidelines 2023 CE (caudal CE — 80mg methylprednisolone CE, transforaminal CE — particulate vs non-particulate CE — dexamethasone preferred cervical/thoracic CE, NASS guidelines CE), epidural contrast CE (Omnipaque CE — neuraxial injection CE, intravascular injection prevention CE — live fluoroscopy CE, digital subtraction CE). Facet/SIJ CE: ISIS guidelines medial branch block CE (diagnostic block — ≥80% relief criterion CE, two diagnostic blocks before RFA CE), radiofrequency ablation (RFA) CE (temperature CE 80°C 60-90 sec CE, electrode placement CE — perpendicular vs parallel CE, cooled RFA CE — SMART trial SIJ CE), SIJ injection CE vs SIJ fusion CE (iFuse CE — minimally invasive SI fusion CE). Cervical procedures CE: cervical MBB CE, cervical transforaminal CE — dexamethasone mandatory CE (particulate risk CE). Vertebral augmentation CE: vertebroplasty vs kyphoplasty CE (VERTOS II CE — kyphoplasty pain reduction CE), balloon kyphoplasty CE, vertebroplasty controversy CE (sham-controlled trials CE vs observational CE), osteoporotic fracture CE. Regenerative medicine CE: PRP CE (platelet-rich plasma), prolotherapy CE — evidence review CE. Momenties tracks RFA credentialing and fluoroscopy CE rotation.",
  },
  {
    icon: Users,
    title: "DEA Renewal, State License, Opioid Prescribing CE & PDMP Compliance",
    body: "DEA registration renewal CE: 3-year cycle — DEA CME requirement: 8 hours opioid CE for DEA registration renewal (DEA 2023 regulation CE), online DEA CE requirement CE. State controlled substance license: 2-year cycle (most states), state PDMP (prescription drug monitoring program) mandatory review CE (before each opioid prescription — 47 states require PDMP CE, some require registration documentation CE). Opioid prescribing CE: CDC 2022 opioid prescribing guidelines CE (primary care and specialist guidance CE, LTOT assessment CE — PEG scale CE, urine drug screen CE, prescription monitoring CE), chronic pain opioid therapy CE — informed consent CE, treatment agreement CE. REMS (Risk Evaluation and Mitigation Strategy) CE: extended-release/long-acting opioid REMS CE (mandatory prescriber CE — Opioid Analgesic REMS 2023 CE, TIRF REMS for transmucosal fentanyl CE). Buprenorphine CE: DEA X-waiver eliminated 2023 CE (all DEA-licensed providers may prescribe buprenorphine CE — required 8-hour CE no longer mandatory but recommended), buprenorphine for chronic pain CE (off-label CE, CSAT CE). Telemedicine controlled substance CE: Ryan Haight Act exemption CE (DEA in-person requirement CE waiver). Momenties tracks DEA 3-year renewal, state license 2-year cycle, and REMS CE deadlines.",
  },
]

const studies = [
  {
    title: "FLASH High-Frequency 10kHz SCS vs Conventional — NEJM 2023/Pain 2024",
    detail: "SENZA-RCT 5-year extension (Pain 2024): high-frequency 10kHz spinal cord stimulation (HF10 — Senza) vs conventional SCS for chronic back and leg pain. Back pain responder rate: HF10 84.5% vs conventional 43.8% at 5 years (p<0.001). Leg pain responder: HF10 83.1% vs conventional 55.5%. Paresthesia-free CE. CE: HF10 mechanism CE (non-paresthesia CE — dorsal column inhibition without paresthesia CE), HF10 programming CE (carrier frequency 10kHz, pulse width 30 μs, amplitude ≤5 mA CE), position independence CE (supine vs standing vs walking — consistent pain relief CE), cross-over CE (poor conventional SCS responders — trial to HF10 CE), HF10 for FBSS CE (failed back surgery syndrome CE).",
  },
  {
    title: "ACCURATE DRG Stimulation CRPS/Causalgia — Neuromodulation 2024 Follow-up",
    detail: "ACCURATE trial 5-year follow-up (Neuromodulation 2024): dorsal root ganglion stimulation (DRG-S) vs conventional SCS for CRPS type I and II, and causalgia. Responder (≥50% VAS reduction): DRG-S 74.2% vs SCS 53.0% at 5 years (p=0.002). CRPS lower extremity CE: DRG-S superior for foot/ankle CRPS. CE: DRG-S lead placement CE (paramedian approach CE — L4/L5/S1 for lower extremity CE), DRG-S programming CE (frequency 20Hz CE, pulse width 300 μs CE — different from conventional SCS CE), DRG-S versus conventional SCS selection CE (focal pain CE — DRG-S preferred CE, diffuse multidermatomal pain CE — HF10/conventional CE), DRG-S complication CE (DRG lead migration CE higher vs SCS lead CE — anchoring technique CE).",
  },
  {
    title: "SMART Trial Cooled Radiofrequency SI Joint — Pain Med 2024",
    detail: "SMART trial 2-year follow-up (Pain Med 2024): cooled RFA (CRFA) for sacroiliac joint pain vs conventional RFA and SIJ injection. CRFA responder rate (≥50% NRS reduction): 72% at 24 months vs 42% conventional RFA vs 31% SIJ injection (p<0.001). Duration of relief: CRFA median 16 months vs 9 months conventional RFA. CE: cooled RFA mechanism CE (larger ablation zones via internally cooled probe CE — target lateral sacral crest CE), CRFA electrode placement CE (L5 dorsal ramus + S1/S2/S3 lateral sacral crest CE vs conventional water-cooled vs bipolar CE), CRFA SIJ diagnosis CE (provocative testing CE — FABER, Gaenslen, compression CE — ≥3 positive tests CE), SIJ fusion timing CE (iFuse minimally invasive vs CRFA CE — patient selection CE).",
  },
  {
    title: "PACC 2022 Intrathecal Consensus — Ziconotide & Trialing CE (Pain Physician 2022/Update 2024)",
    detail: "PACC (Polyanalgesic Consensus Conference) 2022 intrathecal algorithm update and 2024 addendum: Line 1 therapy — morphine CE or hydromorphone CE or ziconotide CE (ziconotide moved to first-line for cancer pain CE and non-opioid tolerance CE). Ziconotide CE: PRIALT dosing CE (initial 2.4 mcg/day CE, titrate ≤7 days CE, max 21.6 mcg/day CE), adverse event profile CE (psychiatric symptoms CE — MMSE monitoring CE, creatine kinase CE), ziconotide vs opioid CE (no opioid tolerance or dependence CE, opioid rotation not applicable CE). Intrathecal trial protocol CE: single injection CE vs catheter trial CE vs external pump trial CE — PACC preference CE for continuous infusion trial CE (lower false positive CE). IDDS infection prevention CE: perioperative antibiotics CE, tunnel CE technique, pump pocket CE.",
  },
  {
    title: "CDC Opioid Prescribing Guidelines 2022 — Clinical Practice Implications CE",
    detail: "CDC Clinical Practice Guideline for Prescribing Opioids 2022 (MMWR 2022): primary care recommendations extrapolated to specialist CE. Key changes CE: removed strict dose thresholds (previously 90 MME/day CE), reasserted clinical judgment CE, added explicit guidance on tapering (5-10%/week CE — no forced rapid taper CE), patient-centered care emphasis CE. CE for pain specialists: LTOT risk assessment CE (ORT tool CE, DIRE tool CE), urine drug testing CE (immunoassay vs confirmatory LC-MS/MS CE), PDMP review documentation CE (before initiating and before each refill), opioid treatment agreement CE (ASIPP guidelines vs CDC guidelines CE), LTOT patient monitoring CE (quarterly CE — functional status CE, PEG-3 scale CE).",
  },
  {
    title: "Cervical Transforaminal ESI Particulate vs Non-Particulate — Spine 2024",
    detail: "Meta-analysis (Spine 2024): cervical TFESI particulate (methylprednisolone/triamcinolone) vs non-particulate (dexamethasone) steroid — catastrophic neurologic injury risk. Particulate cervical TFESI: 47 catastrophic events reported (ISMP data). Dexamethasone cervical TFESI: no catastrophic events in series of 3,200+ injections (Pain Physician CE). CE: particulate vs non-particulate mechanism CE (arterial embolism CE — triamcinolone large particle CE vs dexamethasone small particle/soluble CE), cervical TFESI technique CE (sub-pedicle approach CE vs lateral approach CE — which avoids radicular artery CE), digital subtraction angiography CE (DSA mandatory before cervical TFESI CE — detect arterial uptake CE), real-time contrast CE (live fluoroscopy — 3-4 mL contrast CE before injecting steroid CE), aspiration test CE (negative — does not rule out intravascular CE).",
  },
]

export default function InterventionalPainSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Interventional Pain Specialists"
        title="One Calendar for ABPM MOC, ABIPP CE, DEA Renewal, and SCS Credentialing"
        subtitle="From REMS CE to fluoroscopy credentialing — Momenties tracks every obligation so your pain medicine MOC, device CE, DEA renewal, and state license stay current."
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
              High-Yield CE for Interventional Pain Medicine MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and device update before your ABPM MOC attestation or ABIPP 2-year renewal.
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
              &ldquo;ABPM MOC is continuous, ABIPP renews every two years, DEA is every three years, and my state requires two CME credits per year specifically in pain management. Then every SCS manufacturer requires annual device CE, and REMS training runs on its own schedule. Momenties is the only system that shows me all six timelines without me having to check six different portals.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Marcus B., MD, DABPM, FIPP
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Interventional Pain Medicine, Private Practice
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss a DEA renewal, REMS CE, device credentialing, or ABIPP deadline again"
        subtitle="Momenties keeps every CME credit, DEA 3-year renewal, REMS training, SCS device CE, and state pain CE requirement in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
