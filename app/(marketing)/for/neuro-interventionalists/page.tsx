import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Neurointerventionalists | CME & MOC Tracker",
  description: "Track ABPN neurology or ABR radiology MOC, SNIS fellowship CE, stroke thrombectomy credentialing, aneurysm coiling CE, and device-specific CE in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABPN/ABR Primary MOC & SNIS Fellowship CE",
    body: "Neurointerventionalists hold primary certification through ABPN (Neurology), ABR (Radiology — neuroradiology subspecialty), or ABNS (Neurosurgery) — each with different MOC cycles. ABPN continuous MOC: 90 hours per year (30 neurology-specific). ABR radiology 10-year MOC: OLA (Online Longitudinal Assessment) program — 52 questions per year, continuous assessment replaces 10-year exam. ABNS continuous MOC: 150 CME per year. SNIS (Society of NeuroInterventional Surgery) fellowship CE: 50 CE per 2-year cycle (25 neurointerventional-specific), annual SNIS Annual Meeting participation required, and QOPI (Quality Oncology Practice Initiative equivalent — QCER: Quality Certification for Endovascular Recanalization) for stroke centers. ASITN (American Society of Interventional & Therapeutic Neuroradiology) fellowship adds a 2-year CE cycle. UltraNeuro or Certus registry participation satisfies SNIS quality reporting requirement. Momenties tracks primary MOC cycle, SNIS fellowship, and device credentialing expiration dates independently.",
  },
  {
    icon: Clock,
    title: "Stroke Thrombectomy, LVO CE & Aneurysm Coiling CE",
    body: "Acute stroke thrombectomy CE: DAWN trial (DWI or CTP with clinical mismatch — 6-24 hour thrombectomy CE), DEFUSE-3 CE (perfusion imaging-guided thrombectomy 6-16 hours CE), DIRECT-SAFE CE (directly transferred late window CE — 2024 real-world outcomes), tandem occlusion CE (cervical ICA + intracranial LVO — simultaneous stenting CE), basilar artery occlusion — BEST trial CE (basilar thrombectomy versus medical therapy CE). First pass effect CE: SNIS 2023 standards (first-pass recanalization ≥TICI 2b target CE), stent-retriever versus direct aspiration CE (COMPASS trial), combined technique CE. Aneurysm coiling CE: unruptured aneurysm — ISAT 2 update CE (coiling versus clipping long-term CE), flow diversion CE (Pipeline embolization device — PED Flex generation CE, antiplatelet protocol CE — aspirin + clopidogrel 5 days pre-procedure, prasugrel CE for clopidogrel non-responders by VerifyNow P2Y12 testing). WEB device CE for wide-neck bifurcation aneurysms (WEBCAST 2 3-year CE). Coiling CE: complication management — coil herniation CE, thromboembolic complication CE (tirofiban rescue CE).",
  },
  {
    icon: BarChart3,
    title: "Carotid Stenting, Intracranial Atherosclerosis & Venous CE",
    body: "Carotid artery stenting CE: CREST-2 CE (CAS versus medical therapy in asymptomatic carotid stenosis CE — TCAR versus transfemoral CAS outcomes CE), embolic protection device CE (FilterWire versus proximal protection system CE), dual antiplatelet CE (DAPT protocol 30 days post-CAS). Transcarotid artery revascularization (TCAR) CE: ROADSTER-3 real-world registry CE (stroke rate 0.7% — lower than transfemoral CAS CE), TCAR versus CEA CE (ROADSTER-3 non-inferiority CE). Intracranial atherosclerosis CE: WEAVE trial Wingspan stent CE (standard of care after aggressive medical therapy failure CE), SAMMPRIS CE (medical therapy superior — patient selection CE for stenting versus medical management). Cerebral venous sinus thrombosis CE: RESPECT-CVT trial CE (endovascular thrombectomy versus anticoagulation alone for deteriorating CVT CE). Cerebral arteriovenous malformation CE: ARUBA 7-year CE (medical management vs intervention CE for unruptured AVM — ongoing controversy CE), radiosurgery versus embolization CE.",
  },
  {
    icon: Users,
    title: "State License, Device Credentialing, Radiation Safety & Stroke Center CE",
    body: "State medical license CE (2-year, 25-50 CME) runs independently from primary board MOC. Device credentialing CE: Stryker Trevo CE (annual proctoring renewal CE for stent-retriever), Medtronic Solitaire CE (annual credentialing renewal), Penumbra ACE CE, Pipeline embolization device Medtronic annual update CE (manufacturing changes, new indications CE — mandatory for Pipeline-credentialed operators). Radiation safety CE: ACR-ASNR radiation dose optimization CE (fluoroscopy time limits, reference air kerma CE), radiation safety officer CE (annual CE for operators at high-volume fluoroscopy centers), fluoroscopy credentialing renewal CE. Stroke center CE: JCS (Joint Commission) CSC (Comprehensive Stroke Center) certification CE for medical directors (thrombectomy quality metrics CE — door-to-recanalization time, TICI 2b+ rate, 90-day mRS 0-2 CE). SNIS QI registry submission: quarterly outcomes data (TICI rates, procedural complications, 90-day outcomes). Momenties tracks device credential expirations, radiation CE, and SNIS quarterly submission windows.",
  },
]

const studies = [
  {
    title: "DIRECT-SAFE Real-World Late Window Thrombectomy CE (Stroke 2024)",
    detail: "DIRECT-SAFE: directly transferred patients 6-24 hours — thrombectomy outcomes in real-world (no CTP perfusion selection): mRS 0-2 at 90 days 43.1% vs 32.8% medical (p=0.02). ASPECTS 6-10 CE. CE: imaging selection CE for late window without perfusion CT (ASPECTS ≥6 as minimum threshold CE, diffusion-weighted imaging infarct core <70 mL CE), tandem occlusion late window CE, basilar late window CE.",
  },
  {
    title: "CREST-2 CAS vs Medical Therapy Asymptomatic Carotid (NEJM 2024)",
    detail: "CREST-2: CAS versus intensive medical therapy versus CEA in asymptomatic carotid stenosis ≥70%. Ipsilateral stroke or death: CAS 3.8% vs medical 2.4% (p=0.07 — non-significant). CE: patient selection CE for CAS versus medical management (contralateral occlusion, previous neck radiation, tandem lesion CE — when CAS is preferred), risk stratification CE (STS risk calculator for CAS vs CEA selection), anatomic assessment CE (aortic arch type, ICA calcification CE).",
  },
  {
    title: "WEB Device WEBCAST-2 3-year Outcomes (JNIS 2024)",
    detail: "WEB (Woven EndoBridge) device for wide-neck bifurcation aneurysms 3-year: adequate occlusion (Raymond 1-2) 88.1%. Retreatment 8.4%. Procedure-related morbidity 2.3%. CE: WEB sizing CE (intra-aneurysmal device — width CE, height CE, device selection algorithm), antiplatelet protocol CE (single antiplatelet versus DAPT for WEB versus coiling CE — WEB typically single antiplatelet), follow-up MRA timing CE (3, 12, 24 months).",
  },
  {
    title: "Pipeline PED Flex — Medtronic Annual CE Update 2024",
    detail: "PED Flex generation CE update: improved deliverability — 5.3% navigation failure vs 8.1% original PED. New indication CE: internal carotid artery aneurysms 10mm+ (FDA-approved). CE: antiplatelet protocol CE — aspirin 325 mg + clopidogrel 75 mg starting 5 days pre-procedure. Non-responder CE: P2Y12 reaction units (PRU) ≥240 by VerifyNow → clopidogrel non-responder CE (prasugrel 10 mg substitution CE or dose escalation CE). Post-procedure DAPT duration CE: 6 months standard, 12 months for large/giant aneurysms.",
  },
  {
    title: "Basilar Artery Occlusion BEST Trial 5-year CE (Stroke 2024)",
    detail: "BEST trial 5-year follow-up: endovascular treatment vs standard medical therapy for acute basilar artery occlusion. mRS 0-3 at 90 days: ET 42% vs medical 32% (HR 1.74, p=0.03 — borderline benefit). mRS 0-2: 28% vs 19% (p=0.09 — non-significant). CE: patient selection CE (PC-ASPECTS ≥6 CE, symptom onset < 24 hours CE, posterior circulation CT perfusion CE for beyond 6 hours), computed angiography confirmation CE before treatment decision, groin-to-recanalization time CE (>120 minutes — poor outcomes CE).",
  },
  {
    title: "Radiation Dose Optimization — ACR-ASNR 2024 Joint Practice Parameter CE",
    detail: "ACR-ASNR 2024: reference air kerma alert levels for neurointerventional procedures — threshold for notification 3 Gy (peak skin dose ~4 Gy), threshold for follow-up exam 5 Gy. CE: cumulative radiation tracking across multiple procedures CE, patient radiation card CE (cumulative skin dose documentation for follow-up), fluoroscopy time reduction techniques CE (collimation, pulsed fluoroscopy, last-image hold), operator dose reduction CE (distance CE, lead apron CE, thyroid shield CE, protective glasses CE for cataract prevention).",
  },
]

export default function NeuroInterventionalistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Neurointerventionalists"
        title="One Calendar for ABPN/ABR MOC, SNIS Fellowship CE, and Device Credentialing"
        subtitle="From Pipeline PED annual CE to stroke thrombectomy quality metrics — Momenties tracks every obligation so your board certification, fellowship, and procedural credentials stay current."
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
              High-Yield CE for Neurointerventional Surgery MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and device update before your primary board MOC cycle or SNIS fellowship deadline.
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
              &ldquo;My primary board is ABPN, so I have continuous MOC with 90 CME per year. SNIS fellowship is every 2 years. Stryker requires annual Trevo credentialing renewal. Medtronic requires annual Pipeline credentialing. Our JCS stroke center requires quarterly outcomes data submission. And the radiation safety CE became mandatory after our institution updated their fluoroscopy policy. Momenties is the only tool that keeps all five timelines on one screen.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Nalini R., MD, FSNIS, FAHA
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Neurointerventional Surgery, Comprehensive Stroke Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss a SNIS fellowship, device credentialing, or stroke center CE deadline again"
        subtitle="Momenties keeps every CME credit, radiation safety CE, quarterly outcomes submission, and device credential in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
