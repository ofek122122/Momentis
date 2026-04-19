import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Neuro-Oncology Surgeons | CME & MOC Tracker",
  description: "Track ABNS neurosurgery MOC, SNO fellowship CE, tumor board credentialing, awake craniotomy CE, and fluorescence-guided surgery CE in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABNS Neurosurgery MOC & SNO Fellowship CE",
    body: "Neuro-oncology surgeons hold ABNS (American Board of Neurological Surgery) primary certification with a continuous MOC cycle: 150 CME per year (including 20 hours neurosurgery-specific), board examination at year 10 (ABNS Written Qualifying Examination — every 10 years), and Practice Quality module every 5 years. SNO (Society for Neuro-Oncology) fellowship in Neuro-Oncology Surgery requires 50 CE per 2-year cycle (25 neuro-oncology-specific), annual SNO Annual Meeting participation, and tumor board documentation (minimum 75% attendance at institutional neurosurgical oncology conference annually). AANS (American Association of Neurological Surgeons) and CNS (Congress of Neurological Surgeons) fellowship CE each run independently. NREF (Neurological Research and Education Foundation) grants CME applicable to ABNS MOC. Tumor board privileges: NCI cancer center requirements — documented multidisciplinary brain tumor board attendance (≥50% annually) for independent neuro-oncology surgical privileges at most academic centers. Momenties tracks the rolling annual CME deficit, tumor board attendance percentage, and ABNS 10-year exam deadline on one dashboard.",
  },
  {
    icon: Clock,
    title: "Glioblastoma, Glioma Molecular Profiling & Awake Craniotomy CE",
    body: "Glioblastoma CE: MGMT promoter methylation status CE (predicts TMZ response — methyl-guanine-methyltransferase immunohistochemistry interpretation CE), IDMH1 CE (IDH1/2 mutation — WHO 2021 classification, prognostic and surgical implication CE), EGFRvIII CE (amplification in ~40% primary GBM — future targeted therapy patient selection CE). TTFields CE: EF-14 5-year OS data — TTFields + TMZ maintenance vs TMZ alone (OS 20.9 vs 16.0 months, 5-year OS 13% vs 5% CE update 2023), TTFields patient selection CE (KPS ≥70, supratentorial GBM, completed RT+TMZ). CBTRUS 2023 brain tumor incidence update CE. Awake craniotomy CE: language mapping protocol (Ojemann cortical stimulation CE), motor threshold CE (3-5 mA for Brodmann area identification), asleep-awake-asleep versus continuously awake CE, DES (direct electrical stimulation) subcortical fiber tracking CE. Intraoperative MRI CE: high-field iMRI (1.5T vs 3T) residual tumor detection CE — IMRI MGMT-stratified resection benefit CE.",
  },
  {
    icon: BarChart3,
    title: "Fluorescence-Guided Surgery, Laser Ablation & Convection-Enhanced Delivery CE",
    body: "5-ALA (5-aminolevulinic acid) CE: STUPS trial — 5-ALA complete resection 65% vs white-light 36% (p<0.001, 6-month PFS CE update). FDA-approved (Gleolan) — 5-ALA CE for patient preparation (dietary restriction 24 hours, photosensitivity precautions 48 hours post-surgery CE), intraoperative dosing CE (20 mg/kg BW 4 hours pre-induction). Sodium fluorescein CE: off-label CE for recurrent glioma — FLUOGLIO trial comparison CE. LITT (laser interstitial thermal therapy) CE: Visualase CE (MRI thermometry guided ablation, target temperature 55°C isotherm), NeuroBlate CE (Inspired by MRI — 46°C damage threshold for eloquent cortex preservation CE), LITT for radiation necrosis CE (LITT vs bevacizumab — 2-year outcomes CE). CED (convection-enhanced delivery) CE: Ommaya reservoir CE for intraparenchymal drug delivery, carmustine wafer CE (GLIADEL wafer — 8% carmustine, contraindication with CSF communication). TERT promoter mutation CE: prognostic value in GBM and lower-grade glioma CE.",
  },
  {
    icon: Users,
    title: "State License, Tumor Board, Molecular Tumor Board & Skull Base CE",
    body: "State medical license CE (2-year, 25-50 CME) runs independently from ABNS MOC. Tumor board privileges: standard multidisciplinary brain tumor board (weekly, neuro-oncology + neurosurgery + radiation oncology + neuropathology). Molecular tumor board CE: comprehensive genomic profiling interpretation CE (Foundation One CDx, Tempus, Caris — EGFR, FGFR, NTRK, MSI-H, TMB CE for clinical trial eligibility determination), IDH inhibitor CE (vorasidenib INDIGO trial — IDH1/2 inhibitor for non-enhancing IDH-mutant glioma — grade 2 WHO CE update 2024, progression-free survival benefit), ONC201 CE for H3K27M-mutant diffuse midline glioma — FDA fast track. Skull base neuro-oncology CE: endoscopic endonasal approach CE for pituitary macroadenoma and craniopharyngioma, expanded EEA for clival chordoma CE, anterior skull base meningioma CE (OAG versus transcranial approach — AANS 2024 consensus). Awake mapping CE: tumor in eloquent cortex — continuous DES versus biphasic stimulation CE, subcortical U-fiber preservation CE. Momenties tracks ABNS 10-year deadline, tumor board attendance, and molecular tumor board CE together.",
  },
]

const studies = [
  {
    title: "EF-14 TTFields + TMZ 5-year OS Update (Lancet Oncol 2023)",
    detail: "TTFields (200 kHz) + TMZ vs TMZ alone for newly diagnosed GBM: 5-year OS 13.0% vs 5.0% (p<0.001). Median OS 20.9 vs 16.0 months. Correlation of compliance: >90% TTFields compliance associated with median OS 24.9 months. CE: patient selection (KPS ≥70, supratentorial, completed RT+TMZ), device application CE (18 transducer arrays, device worn ≥18 hours/day), skin care under arrays CE, concurrent bevacizumab interaction CE.",
  },
  {
    title: "INDIGO Trial Vorasidenib IDH1/2 Non-Enhancing Glioma (NEJM 2023, 2024 follow-up)",
    detail: "Vorasidenib (pan-IDH inhibitor) vs placebo for WHO grade 2 IDH-mutant glioma after surgery: PFS 27.7 vs 11.1 months (HR 0.39, p<0.001). Time to next treatment (TTNT) extended. CE: molecular eligibility (IDH1 R132H or IDH2 R172 mutation confirmed by NGS), dosing CE (40 mg daily, oral), hepatotoxicity monitoring (ALT/AST monthly × 6 months), enrollment in INDIGO-2 expansion CE. Neuro-oncology surgical CE: biopsy-confirmed IDH status pre-systemic therapy — sample adequacy for NGS CE.",
  },
  {
    title: "5-ALA Fluorescence-Guided Surgery STUPS Trial 5-year (Eur J Cancer 2024)",
    detail: "5-ALA fluorescence-guided surgery versus white-light surgery for newly diagnosed GBM: complete resection 68% vs 38% (p<0.001 — 5-year update). PFS: no survival difference in MGMT-unmethylated GBM (complete resection benefit only in MGMT-methylated subgroup — CE update). CE: 5-ALA Gleolan patient preparation (sodium-free diet 24 hours, no photosensitizing drugs), intraoperative fluorescence interpretation (solid tumor: bright pink, infiltrating edge: weak pink — biopsy CE), photosensitivity precautions 48 hours post-surgery CE (avoid sunlight, UV).",
  },
  {
    title: "Awake Craniotomy Language Mapping DES Update (J Neurosurg 2024)",
    detail: "Direct electrical stimulation (DES) protocol update: biphasic square wave 0.5-1 ms per phase, 50-60 Hz, starting at 1 mA (threshold varies 1-8 mA for positive sites). Subcortical U-fiber identification CE: short-range fibers between adjacent gyri critical for spatial memory — motor CE (corticospinal tract 5-10mm warning margin), language CE (arcuate fasciculus, uncinate, inferior fronto-occipital fasciculus). CE: task battery (picture naming, sentence completion, counting — concurrent with DES), response inhibition task for pre-SMA mapping, motor fatigue protocol for Broca area.",
  },
  {
    title: "ONC201 H3K27M Diffuse Midline Glioma Phase 2 (Neuro Oncol 2024)",
    detail: "ONC201 (imipridone — DRD2/ClpP antagonist) for H3K27M-mutant diffuse midline glioma after RT: ORR 20%, disease control rate 63%, median PFS 7.2 months. CE: molecular eligibility (H3.3K27M or H3.1K27M by IHC or NGS — mandatory CE), ONC201 dosing CE (125 mg weekly, oral), FDA fast track designation — enrollment priority CE. Pediatric diffuse intrinsic pontine glioma (DIPG) CE update: H3K27M prevalence 80% DIPG — biopsy CE for molecular confirmation before ONC201 trial enrollment.",
  },
  {
    title: "LITT vs Bevacizumab for Radiation Necrosis (J Neurooncol 2024)",
    detail: "LITT (laser interstitial thermal therapy) versus bevacizumab for symptomatic radiation necrosis: 12-month steroid independence 78% LITT vs 41% bevacizumab (p=0.02). 12-month Karnofsky score preservation equivalent. CE: LITT patient selection (symptomatic RN with corticosteroid dependence, lesion ≤3cm, accessible trajectory), MRI thermometry real-time monitoring CE (LITT heat damage estimate overlay — protect critical structures), post-LITT steroid taper CE, LITT versus second surgery for recurrent GBM CE.",
  },
]

export default function NeuroOncologistsSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Neuro-Oncology Surgeons"
        title="One Calendar for ABNS MOC, SNO Fellowship CE, and Tumor Board Compliance"
        subtitle="From vorasidenib IDH inhibitor CE to 5-ALA fluorescence surgery credentialing — Momenties tracks every obligation so your board certification and cancer center privileges stay current."
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
              High-Yield CE for Neuro-Oncology Surgery MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and molecular classification update before your ABNS cycle or tumor board compliance deadline.
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
              &ldquo;Between ABNS MOC, SNO fellowship, our weekly tumor board attendance requirement, the new molecular tumor board we added last year, and now the LITT credentialing after we brought the system online — plus the vorasidenib CE our department required after INDIGO changed our grade 2 glioma management — I was managing more CE cycles than I have operating days. Momenties is the only reason I can keep track of all of it.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Dmitri P., MD, PhD, FAANS
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Neuro-Oncology Surgery, NCI-Designated Comprehensive Cancer Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABNS MOC, SNO CE, or tumor board compliance deadline again"
        subtitle="Momenties keeps every CME credit, molecular tumor board CE, fluorescence surgery credential, and cancer center privilege requirement in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
