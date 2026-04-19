import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Vascular & Endovascular Surgeons | CME Tracker",
  description: "Track ABS vascular surgery MOC, SVS credentialing CE, EVAR/TEVAR registry requirements, and open aortic CE in one HIPAA-aware calendar. Built for vascular and endovascular surgeons.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABS Vascular Surgery MOC & SVS Credentialing CE",
    body: "ABS Vascular Surgery certificate holders complete a 10-year MOC cycle: 250 AMA PRA Category 1 credits, at least 125 vascular-specific, a practice quality improvement (PQI) module, and a secure examination. SVS membership requires 50 CME per year with at least 25 vascular-specific as a condition of active Fellow designation. These two cycles run concurrently with different annual minimums — Momenties surfaces the rolling-12-month gap in vascular-specific credits so you never discover a deficit at renewal.",
  },
  {
    icon: Clock,
    title: "EVAR/TEVAR & Endovascular Registry CE",
    body: "SVS-VQI (Vascular Quality Initiative) participation requires annual data submission and an SVS-mandated webinar series for registry members. EVAR CE priorities: EVAR-1 15-year (late rupture 4% vs 0% open — aneurysm-related mortality converges, NICE guidance updated), ANCHOR IFU-challenging aortic neck registry outcomes (hostile neck EVAR 4-year 88% technical success, 14% type Ia endoleak), endoanchors ANCHOR-II for proximal fixation, and physician-modified EVAR (PMEG) 2024 IDE trial updates. TEVAR CE: INSTEAD-XL 5-year B-type dissection (TEVAR 27% vs 46% aortic-specific mortality favoring intervention), PAGE trial (false lumen thrombosis aneurysm prevention), and STABLE-2 optimal medical therapy comparison.",
  },
  {
    icon: BarChart3,
    title: "Open Aortic, Carotid & Peripheral CE",
    body: "Open AAA CE: OVER trial 14-year (long-term EVAR vs open survival convergence), mandatory annual NSQIP/VASQIP outcomes review for credentialing. Carotid CE: CREST-2 enrollment complete — landmark trial for asymptomatic carotid stenosis management (CEA + medical vs medical alone + TCAR/CAS vs medical); interim results CE now available. TCAR vs CEA ROADSTER-2 3-year (stroke/death 1.4% TCAR vs 3.2% CEA in high-surgical-risk). Peripheral arterial CE: BASIL-3 LRTI (vein vs PTFE vs drug-coated balloon below-the-knee), BEST-CLI 4-year vein vs prosthetic CLTI secondary outcomes, paclitaxel controversy FDA 2023 clarification update with individual patient data meta-analysis.",
  },
  {
    icon: Users,
    title: "State License, DEA & Hybrid OR Credentialing CE",
    body: "Most state medical boards require 25–50 CME per 2-year renewal cycle, with mandated topic hours (opioid prescribing, human trafficking, implicit bias — varies by state). DEA registration renews every 3 years with no CME requirement, but maintaining a current DEA-mandated 8-hour opioid training certificate satisfies hospital credentialing. Hybrid OR credentialing requires documented case volume minimums (typically 50+ endovascular procedures annually), proctored cases for new device platforms (fenestrated EVAR: 10 proctored cases before independent practice at most centers), and manufacturer IFU training certificates that expire. Momenties links each device platform to its expiration date.",
  },
]

const studies = [
  {
    title: "EVAR-1 15-year",
    detail: "Late aneurysm-related rupture: EVAR 4.0% vs open 0.0% (p<0.001). All-cause mortality converges by year 8. Re-intervention rate 34% EVAR vs 12% open. CE implication: lifelong surveillance protocol CE — annual CTA vs ultrasound.",
  },
  {
    title: "BEST-CLI (NEJM 2022, 4-year update 2024)",
    detail: "Infrapopliteal CLTI: vein conduit superior to best endovascular (MALE+death 42% vs 57%, p<0.001). Prosthetic subgroup: no significant difference. CE: patient selection algorithm, vein mapping protocol, wound care team coordination.",
  },
  {
    title: "CREST-2 (2024 primary results)",
    detail: "Asymptomatic carotid stenosis ≥70%: intensive medical therapy alone vs revascularization. Landmark null result reshaping indication CE. Updates carotid endarterectomy ACS guidelines pending 2025 — early CE now available.",
  },
  {
    title: "INSTEAD-XL 5-year",
    detail: "Uncomplicated type B aortic dissection: TEVAR significantly reduces aorta-specific mortality (27% vs 46%, p=0.04) and aortic progression (27% vs 67%). CE: optimal timing window 2–52 weeks, MRI-based false lumen assessment protocol.",
  },
  {
    title: "ROADSTER-2 3-year",
    detail: "TCAR in high-surgical-risk patients: stroke/death/MI 1.4% vs 3.2% CEA. Cranial nerve injury 0.5% vs 3.8%. CE: TCAR credentialing pathway (15 proctored cases minimum per SVS), flow reversal troubleshooting.",
  },
  {
    title: "Fenestrated EVAR IDE Trials (2024)",
    detail: "GORE EXCLUDER Thoracoabdominal FDA approval 2023: 30-day mortality 2.6%, branch vessel patency 97.8% at 1 year. Branch occlusion 2.4% at 2 years. CE: fenestration alignment technique, bridging stent selection, secondary intervention management.",
  },
]

export default function VascularSurgeonsEndovascularPage() {
  return (
    <>
      <PageHero
        eyebrow="For Vascular & Endovascular Surgeons"
        title="One Calendar for Your ABS MOC, SVS CE, and Endovascular Registry Requirements"
        subtitle="From EVAR surveillance protocols to TCAR credentialing logs — Momenties tracks every deadline so your privileges and board certification stay current."
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

      {/* Key trials CE table */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-4" style={{ color: "#f0ece3" }}>
              High-Yield Trial CE for Vascular MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each trial before its deadline. ABS MOC requires evidence-based updates tied to a learning outcome — each entry below satisfies that requirement.
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
              &ldquo;Between ABS MOC, SVS-VQI quarterly submissions, and device-specific proctoring logs, I had four separate spreadsheets. Momenties collapsed all of it — I haven&apos;t missed a deadline in 18 months.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Renata O., MD, FACS, FSVS
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Vascular and Endovascular Surgery, Academic Medical Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABS, SVS, or state license deadline again"
        subtitle="Momenties keeps every CME credit, registry requirement, and device credentialing log in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
