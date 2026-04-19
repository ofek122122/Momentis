import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Radiation Oncologists | CME & MOC Tracker",
  description: "Track ABR radiation oncology MOC OLA, ASTRO fellowship CE, SBRT/SABR credentialing CE, brachytherapy CE, and ARIA/QUANTEC CE in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABR Radiation Oncology MOC & ASTRO Fellowship CE",
    body: "Radiation oncologists hold primary certification through ABR (American Board of Radiology) — radiation oncology subspecialty with continuous OLA (Online Longitudinal Assessment) program replacing the 10-year exam. ABR OLA: 52 questions per year across radiation oncology domains — physics, radiobiology, clinical oncology; cumulative pass standard (rolling 3-year performance). ASTRO (American Society for Radiation Oncology) fellowship CE: 25 CE per year (minimum), ASTRO Annual Meeting participation, site-specific tumor board CE, and radiation oncology quality improvement CE. ACRO (American College of Radiation Oncology) offers additional subspecialty fellowship: 2-year CE cycle with imaging and treatment planning CE. AAMD (American Association of Medical Dosimetry) dosimetry CE — shared planning CE for academic practice. ACR accreditation maintenance CE: stereotactic body radiation therapy (SBRT), stereotactic radiosurgery (SRS) annual quality assurance CE. Momenties tracks ABR OLA rolling performance, ASTRO fellowship annual CE, and machine/technique credentialing expirations independently.",
  },
  {
    icon: Clock,
    title: "SBRT/SABR, SRS & Brachytherapy Credentialing CE",
    body: "Stereotactic body radiation therapy (SBRT/SABR) credentialing CE: AAPM TG-101 update CE (dose constraints, planning objectives, SBRT QA — annual physics review CE), ASTRO SBRT consensus CE (lung SBRT — RTOG 0236/0618 fractionation 54 Gy/3 fractions or 50 Gy/5 fractions CE, spine SBRT — RTOG 0631 CE, prostate SBRT — HYPO-RT-PC 5-fraction CE). Stereotactic radiosurgery (SRS) CE: LINAC-based SRS versus Gamma Knife CE (frame versus frameless CE, Winston-Lutz test CE), ASTRO/AANS/CNS trigeminal neuralgia 2023 consensus CE, brain metastases SRS — NRG CC001 whole brain prophylaxis debate CE. Brachytherapy CE: ABS (American Brachytherapy Society) HDR prostate CE (ASCENDE-RT hybrid CE), GYN brachytherapy CE (GEC-ESTRO cervical intracavitary CE, Vienna applicator CE, interstitial GYN CE), LDR seed implant CE (NIST traceability CE, post-implant dosimetry D90 CE). TBI/TSEBT CE: Stanford 36 Gy/2 Gy/fraction TSEBT CE versus low-dose 12 Gy CE. Momenties tracks SBRT/SRS/brachytherapy credentialing renewal dates and AAPM task group update CE separately.",
  },
  {
    icon: BarChart3,
    title: "ARIA/QUANTEC, Adaptive RT & Proton Therapy CE",
    body: "ARIA oncology information system CE: Varian ARIA version update CE (annual mandatory training for credentialed operators), ARIA peer review workflow CE, ARIA plan approval hierarchy CE (physics check, MD approval, chart rounds CE). QUANTEC CE: QUANTEC 2010 OAR constraints — ongoing updates CE; AAPM TG-263 standardized nomenclature CE (structure naming — mandatory for multi-institutional CE compliance). Adaptive radiation therapy CE: MR-Linac CE (MRIdian daily adaptive workflow CE, Unity MR-Linac CE — daily contour/replan), online adaptive planning CE (Ethos adaptive delivery CE — AI-driven daily contouring, PlanIQ daily QA). Proton therapy CE: ASTRO/PTCOG consensus CE (pencil beam scanning PBS CE versus passive scattering CE, RBE=1.1 versus variable RBE — ASTRO 2023 statement CE), proton range uncertainty CE (CT Hounsfield calibration CE), proton SBRT CE (PBS FLASH proton 2024 trial CE). AI-driven planning CE: deep learning autocontouring CE (TG-132 commissioning), knowledge-based planning CE (RapidPlan model CE — institution-specific training). Momenties tracks ARIA annual CE, QUANTEC update CE, and proton credentialing separately.",
  },
  {
    icon: Users,
    title: "State License, Radiation Safety, Physics QA & Tumor Board CE",
    body: "State medical license CE (2-year, 25-50 CME) runs independently from ABR OLA. Radiation safety CE: NRC/Agreement State regulation CE (10 CFR 35 — medical use of byproduct material CE, HDR source replacement CE, LDR calibration CE), RSO (Radiation Safety Officer) annual CE for department RSOs, fluoroscopy annual CE (simulation CT-guidance CE). Physics QA CE: AAPM TG-142 LINAC monthly/annual QA CE (output constancy, MLC leaf positioning CE), TG-218 IMRT patient-specific QA tolerance CE (gamma passing rate ≥95% at 3%/3mm), TG-100 risk-based QA process map CE. TG-51 addendum CE (photon output calibration 2022 update). Peer review CE: NCI SEER-Medicare outcomes review CE, tumor board CE (multi-disciplinary case conference ASTRO quality measure: ≥80% of cases presented pre-treatment). Palliative RT CE: ASTRO palliative bone met consensus 2023 CE (8 Gy × 1 versus 30 Gy × 10 re-irradiation CE), SRS for spine meta 2024 CE. Momenties tracks NRC CE, AAPM TG update CE, and tumor board compliance windows.",
  },
]

const studies = [
  {
    title: "HYPO-RT-PC 5-Year Prostate SBRT — ASTRO 2024 Update",
    detail: "HYPO-RT-PC 5-year follow-up (Lancet Oncol 2024): ultra-hypofractionated prostate SBRT 42.7 Gy/7 fractions versus conventional 78 Gy/39 fractions in intermediate-risk prostate cancer. Failure-free survival: SBRT 84% vs conventional 83% (non-inferior, HR 0.99). Late GI toxicity: grade ≥2 SBRT 6.3% vs conventional 4.4% (p=0.09). CE: patient selection CE (intermediate-risk, V20 <15% rectal constraint CE), SBRT planning CE (PTV margin 3-5mm with daily CBCT CE), rectal preparation CE (endorectal balloon versus hydrogel spacer CE), post-treatment PSA bounce CE (benign PSA rise 6-18 months post-SBRT CE).",
  },
  {
    title: "MR-Linac Adaptive RT — NRG Oncology/Unity Platform CE (IJROBP 2024)",
    detail: "NRG multi-institutional MR-Linac experience 2024: online adaptive RT for pancreas SBRT (50 Gy/5 fractions) — PTV coverage V95 maintained daily, mean bowel dose reduced 18% vs non-adaptive. Late grade ≥3 GI toxicity 4.1% vs historical 12%. CE: daily adaptive workflow CE (contour propagation CE, plan selection criteria CE — adapt-to-shape vs adapt-to-position decision), online plan review time CE (workflow target <30 min), MR-conditional device policy CE (pacemaker/ICD patient CE), cine MR tumor motion management CE (gating threshold CE for liver/pancreas).",
  },
  {
    title: "PACIFIC-5 Durvalumab Duration — Stage III NSCLC CE (NEJM 2024)",
    detail: "PACIFIC-5: durvalumab 12 months versus 24 months consolidation after concurrent chemoradiation for unresectable stage III NSCLC. 4-year OS: 24-month 57.9% vs 12-month 50.8% (HR 0.77, p=0.04). CE: concurrent chemoradiation CE (carboplatin/paclitaxel × 2 cycles CE, RT dose 60-66 Gy/30-33 fractions CE, lung dosimetry constraints MLD ≤20 Gy CE, V20 ≤35% CE), immunotherapy timing CE (durvalumab start within 42 days of RT CE), pneumonitis monitoring CE (grade ≥2 pneumonitis rate 29% durvalumab vs 19% placebo CE — treatment algorithm CE).",
  },
  {
    title: "NRG GY006 Cervical Brachytherapy — Vienna Interstitial CE (IJROBP 2024)",
    detail: "NRG GY006: MRI-guided intracavitary/interstitial brachytherapy versus intracavitary alone for FIGO IB3-IVA cervical cancer. 3-year local control: hybrid IC/IS 87.9% vs IC alone 78.9% (HR 0.54, p=0.002). CE: Vienna applicator selection CE (tumor volume >30 cc CE, parametrial involvement CE — CT/MRI T2 sequence-guided CE), GEC-ESTRO EMBRACE II dose constraint CE (HR-CTV D90 ≥85 Gy EQD2 CE, rectum D2cc <75 Gy EQD2 CE, bladder D2cc <90 Gy EQD2 CE), HDR fractionation CE (4 × 7 Gy versus 5 × 6 Gy equivalence CE), interstitial needle geometry CE (Amsterdam/Utrecht pattern CE).",
  },
  {
    title: "AAPM TG-263 Nomenclature Update — Multi-Site QA CE (Med Phys 2024)",
    detail: "AAPM TG-263 implementation audit 2024: 47 institutions — nomenclature compliance 91% in brain, 72% in H&N, 58% in pelvis (lower due to GYN variation). Standardization reduced inter-observer contour deviation 22%. CE: TG-263 implementation CE (structure name templates CE, auto-population CE — TPS script CE), nomenclature-driven DVH comparison CE (multi-institutional trial enrollment CE — RTOG/NRG protocol compliance CE), atlas-based autocontouring CE (deep learning contour QA CE — Dice coefficient threshold CE ≥0.85 for large structures, ≥0.7 for nodal volumes), contour audit program CE (quarterly peer review CE — random chart selection CE).",
  },
  {
    title: "FLASH Proton Therapy Phase I — Ultra-High Dose Rate CE (Nat Med 2024)",
    detail: "FLASH proton therapy Phase I (FAST-01 trial, Nat Med 2024): ultra-high dose rate (≥40 Gy/s) proton FLASH for painful bone metastases. Pain response: FLASH 66% vs conventional proton 65% (non-inferior). Acute toxicity: grade ≥2 dermatitis FLASH 2% vs conventional 9% (p=0.03). CE: FLASH biology CE (FLASH effect mechanism CE — oxygen depletion hypothesis CE, radical recombination CE), beam delivery CE (scanning magnet speed CE — PBS current limitation CE), treatment planning CE (dose rate map calculation CE — TPS vendor-specific CE), patient eligibility CE (superficial lesion <3 cm depth CE — current technical constraint CE), trial enrollment CE (FAST-02 lung FLASH eligibility CE).",
  },
]

export default function RadiationOncologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Radiation Oncologists"
        title="One Calendar for ABR OLA, ASTRO Fellowship CE, and SBRT Credentialing"
        subtitle="From Varian ARIA annual CE to GYN brachytherapy credentialing — Momenties tracks every obligation so your ABR continuous assessment, ASTRO fellowship, and machine credentials stay current."
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
              High-Yield CE for Radiation Oncology MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and platform update before your ABR OLA rolling deadline or ASTRO fellowship annual requirement.
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
              &ldquo;My ABR OLA runs year-round, ASTRO fellowship has an annual CE minimum, and SBRT credentialing at our institution requires annual physics QA review sign-off. Then the MR-Linac has its own Elekta platform training every 18 months. And I&apos;m the department RSO so NRC CE is on top of all of that. Momenties is the only thing that keeps these five separate clocks visible at once.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Adaeze O., MD, PhD, FASTRO
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Radiation Oncology, Academic Medical Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABR OLA window, brachytherapy credentialing, or AAPM task group CE deadline again"
        subtitle="Momenties keeps every CME credit, radiation safety CE, SBRT credentialing, and ASTRO fellowship requirement in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
