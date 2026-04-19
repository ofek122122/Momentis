import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Hyperbaric Medicine Specialists | CME & MOC Tracker",
  description: "Track ABPM or ABEM primary MOC, UHMS baromedical credentialing, NBDHMT certification renewal, chamber safety CE, and wound care credentialing in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "Primary Board MOC & UHMS Baromedical Credentialing",
    body: "Hyperbaric medicine specialists hold primary certification through any of six American Board of Medical Specialties boards — most commonly ABPM (American Board of Preventive Medicine), ABEM (American Board of Emergency Medicine), ABIM (Internal Medicine), ABFM (Family Medicine), ABPMR (Physical Medicine), or ABS (Surgery) — each with its own MOC cycle (ABPM 10-year, ABEM continuous, ABIM continuous, etc.). The Undersea and Hyperbaric Medical Society (UHMS) baromedical credentialing requires: NBDHMT (National Board of Diving and Hyperbaric Medical Technology) Hyperbaric Medicine Specialist certification (300 hours clinical training, written examination), 30 CE per 2-year UHMS renewal cycle (20 hyperbaric medicine-specific), and active membership in UHMS. ACEP, SMACNA, or ACOEM fellowship CE may run concurrently. Because no single board covers hyperbaric medicine exclusively, UHMS serves as the primary specialty credential authority. Momenties tracks the primary MOC and UHMS cycle on separate dashboards.",
  },
  {
    icon: Clock,
    title: "Hyperbaric Oxygen CE: Diabetic Wounds, Radiation Injury & Carbon Monoxide",
    body: "Diabetic foot wound HBO CE: UHMS approved indications list 2024 update — Wagner Grade 3+ DFU with failed standard wound care (30-day non-response criterion), ABI ≥0.5 CE for selection, toe pressure >30 mmHg CE for selection. CO poisoning CE: Undersea and Hyperbaric Medical Society CO CPG 2023 update — LOC (loss of consciousness), CoHgb >25%, pregnancy >20% — class I indication CE, NBO versus HBO comparison trial data CE (Weaver 2002 update meta-analysis), CO-ox monitoring frequency CE for repeat CO poisoning. Radiation injury CE: UHMS 2023 osteoradionecrosis protocol update — mandibular ORN HBO before surgery CE (20 pre-op + 10 post-op sessions), radiation cystitis hemorrhagic CE (UHMS Grade 2-3 indication), XRT proctitis CE — endoscopic argon plasma coagulation versus HBO sequencing. Necrotizing fasciitis CE: UHMS 2024 NF indication — adjunct to surgical debridement, HBO scheduling within 24 hours of initial debridement CE.",
  },
  {
    icon: BarChart3,
    title: "Chamber Safety, Oxygen Toxicity & Multiplace Operations CE",
    body: "Chamber safety CE: NFPA 99C Health Care Facilities Code — hyperbaric facility fire safety CE (annual, required for department accreditation). Oxygen toxicity CE: CNS oxygen toxicity prevention — partial pressure of oxygen ≤2.4 ATA for treatment protocols (2.0 ATA standard), seizure management in chamber CE, pulmonary oxygen toxicity — oxygen unit calculation CE (UPTD/OTU accumulation per UHMS protocol). Multiplace chamber operations CE: inside attendant training CE — NBDHMT CHT (Certified Hyperbaric Technologist) credentialing, 4-year renewal, 24 CE. Tender/inside attendant CE: chamber pressurization protocol, emergency decompression CE, fire suppression protocol CE. Monoplace CE: transcutaneous oximetry interpretation CE (TcPO2 during treatment), TCOM periwound measurement CE for HBO candidacy assessment. Annual UHMS hyperbaric oxygen therapy committee CE: Indication update — annual UHMS review of approved versus contraindicated diagnoses, off-label use documentation CE.",
  },
  {
    icon: Users,
    title: "State License, Wound Care Credentialing & ACHC/TJC Accreditation CE",
    body: "State medical license CE (2-year, 25–50 CME) runs independently from UHMS and primary board MOC. Wound care credentialing: CWS (Certified Wound Specialist) through ABWM — 1,000 hours documented wound care, board examination, 3-year 40-hour CE renewal. CWSP (Certified Wound Specialist Physician) — separately credentialed, 10 CE per year wound care-specific. ACHC (Accreditation Commission for Health Care) hyperbaric program accreditation: annual compliance CE for hyperbaric program director — UHMS facility accreditation standards, ACHC survey readiness CE (treatment logs, outcome tracking, equipment maintenance documentation). The Joint Commission wound care and HBO accreditation standards CE: TJC NPSGs applicable to HBO (patient identification, medication reconciliation for oxygen toxicity drug interactions — disulfiram, bleomycin, doxorubicin). Momenties tracks chamber safety CE, wound credentialing, and ACHC compliance deadlines together with UHMS and primary board cycles.",
  },
]

const studies = [
  {
    title: "UHMS Approved Indications 2024 Update — Diabetic Lower Extremity Wounds",
    detail: "Updated UHMS indication 64 (diabetic lower extremity wounds): Wagner Grade 3 or higher with inadequate response to standard wound care (defined as <50% area reduction in 30 days with optimized offloading and infection control). CE: pre-HBO wound assessment protocol — ABI measurement, TcPO2 ≥30 mmHg at treatment site (or hypoxic response to 100% normobaric oxygen — TcPO2 rise ≥10 mmHg confirms perfusion reserve), comorbidity optimization CE (glycemic control, offloading compliance), expected treatment course (20-40 sessions at 2.0-2.4 ATA) and response monitoring protocol.",
  },
  {
    title: "CO Poisoning HBO: Updated Meta-Analysis and UHMS CPG 2023",
    detail: "Weaver et al. 2002 randomized trial 3-year follow-up + 2023 meta-analysis: HBO reduces cognitive sequelae at 6 weeks (27% NBO vs 46% HBO group with cognitive sequelae — reversal). Updated UHMS CPG 2023: class I indications — COHgb >25%, loss of consciousness, neurological signs, abnormal ECG, cardiac dysfunction, pregnancy >20% COHgb. CE: HBO timing (within 24 hours optimal, up to 72 hours for delayed neurologic sequelae), number of sessions (3 sessions within 24 hours — Weaver protocol), CO-oximetry monitoring interval, car versus smoke CO source algorithm.",
  },
  {
    title: "UHMS Osteoradionecrosis HBO Protocol — Mandibular ORN 2024",
    detail: "Updated UHMS ORN mandible protocol: 20 pre-operative HBO sessions (90 min at 2.4 ATA) + sequestrectomy/debridement + 10 post-operative sessions. Marx criteria ORN staging CE (Stage I-III classification, stage-specific surgical approach). CE: patient selection (ORN at ≥6 months post-RT, failure of antibiotics/debridement — minimum 3-month non-response), osteointegration CE for implant planning post-HBO, HBO timing relative to reconstruction (pre-flap versus post-flap protocol).",
  },
  {
    title: "NFPA 99C Hyperbaric Facility Fire Safety — 2024 Code Update CE",
    detail: "NFPA 99C 2024: updated Class A (multiplace) and Class B (monoplace) fire hazard classification, fuel restriction requirements, oxygen enrichment monitoring. CE: fire suppression options by chamber class (inert gas flooding vs water mist for monoplace), emergency decompression protocol (rate versus time tradeoff in fire emergency), patient clothing requirements (100% cotton — synthetic prohibition CE), prohibited item list update, annual fire drill documentation requirement for ACHC accreditation.",
  },
  {
    title: "TcPO2 Transcutaneous Oximetry as HBO Candidacy Predictor (2024 Wound Rep Regen)",
    detail: "TcPO2 ≥30 mmHg pre-HBO predicts wound healing response: responder rate 74% vs 31% for TcPO2 <30 mmHg. Periwound TcPO2 during 100% NBO (normobaric oxygen) — rise ≥10 mmHg from ambient-air baseline identifies tissue perfusion reserve. CE: TcPO2 measurement protocol (electrode placement 3-5 cm proximal to wound, 45-minute warm-up, measurement at room air then NBO), documentation for Medicare HBO reimbursement (UHMS-compliant TcPO2 report requirement), TcPO2 at 2.0 ATA in-chamber measurement CE (treatment response monitoring).",
  },
  {
    title: "ACHC Hyperbaric Program Accreditation Standards — 2024 Survey Requirements CE",
    detail: "ACHC 2024 hyperbaric standards: outcome data tracking (wound closure rate, amputation avoidance rate, patient safety events), treatment log documentation (pressure, duration, O2 fraction per session), equipment maintenance logs (chamber inspection, O2 analyzer calibration CE). CE: program medical director requirements (UHMS membership, board-eligible in hyperbaric medicine, minimum 40 clinical hours/year), quality improvement documentation — QI project per accreditation cycle, ACHC survey preparation CE (mock survey protocol, standards self-assessment).",
  },
]

export default function HyperbaricMedicineSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Hyperbaric Medicine Specialists"
        title="One Calendar for Primary Board MOC, UHMS Credentialing, and Chamber Safety CE"
        subtitle="From diabetic wound indication updates to NFPA 99C fire safety CE — Momenties tracks every obligation across your primary board, UHMS, NBDHMT, and wound care credentials."
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
              High-Yield CE for Hyperbaric Medicine MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each UHMS indication update, NFPA safety code, and ACHC accreditation standard before your primary board or UHMS renewal cycle closes.
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
              &ldquo;My primary board is ABPM, so I have a 10-year MOC cycle. My UHMS credential is a 2-year cycle. My NBDHMT certification is a 4-year cycle. My CWS wound care credential is a 3-year cycle. And NFPA 99C fire safety CE is annual. None of these cycles align. Momenties is the only tool that let me see all five tracks at once without a spreadsheet.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Tariq B., MD, FUHM, CWS
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Hyperbaric Medicine, Hospital-Based Wound Care & HBO Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss a UHMS renewal, NBDHMT recertification, or ACHC compliance deadline again"
        subtitle="Momenties keeps every CME credit, chamber safety CE, wound credentialing, and primary board MOC requirement in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
