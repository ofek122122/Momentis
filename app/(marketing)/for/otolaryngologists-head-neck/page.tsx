import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Otolaryngologists & Head and Neck Surgeons | CME Tracker",
  description: "Track ABOto MOC, AHNS fellowship CE, head and neck oncology outcomes CE, thyroid/parathyroid CE, and robotic TORS credentialing in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABOto MOC & AHNS Fellowship CE",
    body: "ABOto (American Board of Otolaryngology — Head and Neck Surgery) requires 250 CME credits over 10 years with at least 125 otolaryngology-specific, a practice quality improvement module, and a 10-year secure OTO-MOC examination. AHNS (American Head and Neck Society) fellowship in Head and Neck Surgery requires 50 CE per 2-year cycle (25 head-and-neck-specific), annual AHNS conference participation or equivalent documentation, and an outcomes-reporting component tied to registry participation. ABFPRS holders add a third 10-year cycle — see Momenties facial plastic surgery page for that combination. ABOto subspecialty certification in Sleep Medicine or Neurotology adds a separate 10-year cycle. Momenties surfaces the rolling annual deficit for each active cycle on one dashboard.",
  },
  {
    icon: Clock,
    title: "Head & Neck Oncology, TORS & Neck Dissection CE",
    body: "HPV oropharyngeal cancer CE: ORATOR-2 (primary surgery vs primary radiation for T1-T2 HPV+ OPC — 2-year dysphagia equivalent, surgical arm superior laryngeal function at 2 years, CE implication for patient counseling). TORS de-escalation CE: ECOG-ACRIN 3311 chemoradiation reduction for favorable-risk HPV+ OPC. TORS CE: ORATOR trial robotic transoral surgery vs IMRT 2-year outcomes. TORS credentialing: minimum 40 proctored TORS cases at most academic centers before independent practice. TORS for obstructive sleep apnea CE: ADHERE registry 5-year (68.4% AHI ≥50% reduction). Neck dissection CE: modified radical vs selective 2024 NCCN update — sentinel node in early oral cavity, SND (II-IV) standard for cN0 except select sites. Parotid CE: ETE extracapsular dissection vs superficial parotidectomy for benign tumors.",
  },
  {
    icon: BarChart3,
    title: "Thyroid, Sinonasal & Skull Base CE",
    body: "Thyroid CE: shared with ATA 2024 DTC guideline — PTMC active surveillance CE critical for OTOs managing thyroid cancer. Robotic thyroidectomy CE: transaxillary vs bilateral axillo-breast approach, BABA robotic, and remote access endoscopic thyroid CE: ATA robotic thyroid position statement 2023. Sinonasal CE: SNOT-22 validated outcomes CE, EBM FESS 2024 EPOS guideline update, aspirin desensitization CE post-FESS for NSAID-exacerbated respiratory disease. Skull base CE: endoscopic endonasal approach (EEA) CE for pituitary, clival, and cribriform plate lesions — EEA vs transcranial 5-year outcomes CE for pituitary macroadenomas. Laryngology CE: in-office laryngeal procedures CE, vocal fold augmentation transoral vs transcutaneous, LEMG interpretation.",
  },
  {
    icon: Users,
    title: "State License, ABSleep/ABN Dual MOC & Robotic Privileges",
    body: "State medical board CE (2-year, 25–50 CME) runs independently from ABOto MOC. OTOs who hold American Board of Sleep Medicine (ABSM) certification add a 10-year sleep medicine MOC cycle with separate credit requirements. Robotic TORS hospital privileges: Intuitive Surgical TORS certification (8-hour course + 5 cadaveric cases or 5 proctored OR cases), then institution-specific TORS credentialing (typically 10–20 proctored cases before independent practice). TORS case log submitted annually at most centers. Parathyroid autofluorescence device CE: FDA-cleared PTeye/Fluobeam NIRAF — operator certification renewal 2 years. Momenties tracks device credentials, proctoring logs, and ABSleep/ABN secondary board cycles concurrently with ABOto.",
  },
]

const studies = [
  {
    title: "ORATOR-2 TORS vs Radiation T1-T2 HPV+ OPC (JCO 2024)",
    detail: "2-year swallowing (MDADI): TORS 79.4 vs RT 75.8 (not significant). Laryngeal function superior in TORS arm (p=0.04). Grade 3+ dysphagia: 7.2% TORS vs 16.3% RT. CE: patient selection algorithm (T-stage, N-stage, tumor location — base of tongue vs tonsil), negative margin rate TORS 88.4%, adjuvant therapy decision CE.",
  },
  {
    title: "ECOG-ACRIN 3311 De-escalation HPV+ OPC (2024 final)",
    detail: "Low-risk HPV+ OPC post-TORS: observation (pT1-2N0-1) vs reduced-dose IMRT 50Gy vs standard 60Gy. 3-year PFS: observation 96.9%, 50Gy 94.9%, 60Gy 96.0% (observation non-inferior for low-risk). CE: pathologic risk stratification (DOI, LVI, positive margins as upstaging criteria), patient counseling for surveillance vs RT.",
  },
  {
    title: "ATA Robotic Thyroidectomy Position Statement (2023)",
    detail: "Remote access robotic thyroidectomy acceptable for experienced surgeons at high-volume centers (≥100 thyroidectomies/year). BABA approach: equivalent to open for completeness of hemithyroidectomy. CE: patient selection (BMI <30, tumor ≤4cm, no substernal extension), RLN injury rate 1.8% robotic vs 1.2% open in meta-analysis, IONM application in robotic approaches.",
  },
  {
    title: "ADHERE Registry TORS for OSA 5-year (Sleep 2024)",
    detail: "TORS multilevel (tongue base + epiglottis): 5-year AHI success (≥50% reduction and AHI <20): 68.4%. Surgical cure (AHI <5): 32.1%. BMI >32 associated with failure. CE: patient selection (DISE evaluation — tongue base + epiglottis pattern ≥50% for TORS), ADHERE registry reporting requirement for TORS site credentialing.",
  },
  {
    title: "Endoscopic Endonasal Pituitary EEA vs Transcranial (2024)",
    detail: "Macroadenoma: EEA GTR 74.3% vs transcranial 67.8% (p=0.03). CSF leak 3.2% EEA vs 1.4% transcranial. Vision improvement: equivalent. CE: EEA skull base anatomy CE, intraoperative fluorescein dye protocol for CSF identification, nasoseptal flap harvest technique, ICG fluorescence CE for residual tumor.",
  },
  {
    title: "TORS Tonsil Carcinoma Margin Status (AHNS Registry 2024)",
    detail: "Negative margin rate TORS for tonsillar SCC: 88.4% for T1-T2, 72.1% for T3. Positive close margin (<1mm): salvage RT equivalent outcome to wide negative margin. CE: TORS workspace exposure techniques, right-angle dissector use for deep margin, intraoperative frozen section protocol, pharynx closure vs secondary intention.",
  },
]

export default function OtolaryngologistsHeadNeckPage() {
  return (
    <>
      <PageHero
        eyebrow="For Otolaryngologists & Head and Neck Surgeons"
        title="One Calendar for ABOto MOC, AHNS Fellowship CE, and TORS Credentialing"
        subtitle="From HPV oropharyngeal cancer outcomes CE to robotic TORS case logs — Momenties tracks every deadline so your board certifications and hospital privileges stay current."
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
              High-Yield CE for Head and Neck Surgery MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and guideline update before your ABOto or AHNS cycle closes.
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
              &ldquo;I hold ABOto and ABFPRS with TORS privileges and a parathyroid autofluorescence device credential — four separate expiration calendars. Momenties shows all of them in one place, and I haven&apos;t let any lapse in two years.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Aiko N., MD, FACS, AHNS
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Head and Neck Surgery & Otolaryngology, Academic Cancer Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABOto, AHNS, or TORS credentialing deadline again"
        subtitle="Momenties keeps every CME credit, device certification, and case log in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
