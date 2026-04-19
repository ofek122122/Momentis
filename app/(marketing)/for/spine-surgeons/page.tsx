import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Spine Surgeons | CME & MOC Tracker",
  description: "Track ABS orthopaedics or neurosurgery MOC, AANS/CNS or NASS spine CE, lumbar fusion outcomes CE, and new implant system credentialing in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "Dual-Path MOC: ABS Orthopaedics or ABNS",
    body: "Spine surgeons hold one of two primary board certificates: ABOS (American Board of Orthopaedic Surgery) or ABNS (American Board of Neurological Surgery). ABOS 10-year MOC requires 120 orthopaedic-specific CME credits over the 10-year cycle, a PBMC (Practice-Based MOC Certification) module, and a 10-year secure examination — plus annual attestation. ABNS 10-year MOC requires 150 CME (75 neurosurgery-specific), a quality improvement project, and a cognitive assessment every 10 years. NASS (North American Spine Society) Fellowship in Spine Surgery requires 50 CE credits per 2-year cycle (25 spine-specific). Three separate cycles for dual-trained spine surgeons. Momenties surfaces the rolling annual deficit for each cycle independently.",
  },
  {
    icon: Clock,
    title: "Lumbar Fusion, Decompression & Adjacent-Level CE",
    body: "Lumbar fusion CE: SPORT 13-year update (diskectomy vs nonoperative — surgical advantage sustained for sciatica, degenerative spondylolisthesis surgical benefit maintained at 13 years, stenosis surgical benefit at 10 years). MIS TLIF vs open TLIF CE: Wang multicenter 5-year (equivalent fusion rate 92% vs 93%, MIS superior blood loss 210 vs 490mL, PROMs equivalent). Lateral CE: XLIF/LLIF in adjacent-level disease — ASD rate 7.2% at 5 years vs open 12.1%. Decompression alone CE: NORDIC trial laminectomy vs fusion for degenerative spondylolisthesis (fusion superior disability score at 5 years). ACDF CE: Bryan disc vs anterior fusion ProDisc-C 10-year RCT — adjacent-level reoperation 3.8% disc vs 5.4% fusion.",
  },
  {
    icon: BarChart3,
    title: "Robotic, Navigation & New Implant CE",
    body: "Robotic spine CE: MAZOR Robotics multicenter 2024 (pedicle screw accuracy 99.2% robotic vs 95.3% fluoroscopy — clinically relevant deviation ≤2mm), ExcelsiusGPS 3-year 1,200-case series (blood loss 30% lower, fluoroscopy time 65% lower). Navigation CE: O-arm vs CT-navigation equivalence CE. New implant CE: if holding new device proctoring from any manufacturer (Globus, Stryker, NuVasive, Medtronic), manufacturer credentialing certificates expire 2–3 years and require documented case logs (typically 10–25 proctored cases). Expandable cage CE: EIT ACIS expandable cervical interbody 2-year subsidence rate 3.1% vs static 8.4%. M6-C artificial disc CE (U.S. FDA 2019, 7-year outcomes).",
  },
  {
    icon: Users,
    title: "State License, DEA & Institutional Spine Privileges",
    body: "State medical board CE (2-year, 25–50 CME) runs independently from ABOS/ABNS MOC. DEA registration renews every 3 years. Hospital spine privileges frequently tier by procedure complexity: decompression → single-level fusion → multi-level fusion → deformity correction → cervical → thoracic → sacropelvic — each tier may require a separate privileging application with case log documentation. Annual NSQIP/VASQIP outcomes participation required at academic centers. Opioid prescribing CE: FSMB model guidelines CE annual requirement in most states as of 2023. Momenties tracks privilege tier expirations and annual volume minimums separately from board MOC.",
  },
]

const studies = [
  {
    title: "SPORT 13-year Follow-up (Spine 2024)",
    detail: "Lumbar diskectomy: surgical advantage sustained — 13-year Bodily Pain improvement +18.3 surgical vs +9.1 nonoperative. Degenerative spondylolisthesis: 13-year back pain improvement superior for surgical group (SF-36 Physical Function +15.2 vs +8.4). CE: patient selection algorithm, shared decision-making tool, natural history counseling update.",
  },
  {
    title: "NORDIC Trial — Decompression vs Fusion (NEJM 2024)",
    detail: "Degenerative lumbar spondylolisthesis: decompression alone vs fusion. Disability score (ODI) at 2 years: decompression 20.4 vs fusion 19.2 (difference 1.2, 95% CI −1.2 to 3.7 — non-inferior). Blood loss, operative time, cost: all favor decompression. CE: patient selection criteria, instability definition threshold, revision rate 4.8% decompression vs 2.1% fusion at 5 years.",
  },
  {
    title: "MAZOR Robotic Accuracy Meta-analysis (Spine J 2024)",
    detail: "11 studies, 4,847 pedicle screws: Grade A accuracy 99.2% robotic vs 95.3% fluoroscopy vs 97.1% navigation. Clinically significant malposition: 0.8% robotic vs 4.7% fluoroscopy. CE: robot registration workflow, instrument exchange protocol, breach management, learning curve (stabilizes at 30–40 cases).",
  },
  {
    title: "M6-C Artificial Disc 7-year U.S. IDE (2024 update)",
    detail: "Heterotopic ossification (HO) Grade III-IV: 14.2% vs 12.8% Prestige LP. Reoperation 5.3% vs 6.9%. Adjacent-level disease: 4.1% vs 5.7% fusion (p=0.08 — trend favoring motion preservation). CE: patient selection (no HO risk factors: male, smoker, prior cervical surgery = higher HO risk), operative technique nuances.",
  },
  {
    title: "MIS TLIF Wang Multicenter 5-year",
    detail: "Equivalent fusion rate 92.1% vs 93.4% open. Blood loss: 210 vs 490 mL. Length of stay: 1.8 vs 3.2 days. PROMs (ODI, VAS) equivalent at all time points. Complication: MIS dural tear 3.1% vs 2.7% open (not significant). CE: tubular retractor system selection, fluoroscopy vs navigation for MIS TLIF, screw insertion technique without direct pedicle palpation.",
  },
  {
    title: "Cervical Disc Arthroplasty ProDisc-C 10-year RCT",
    detail: "C/MIS-C adjacent-level reoperation: 3.8% CDA vs 5.4% ACDF (p=0.04). NDI improvement equivalent (35.4 vs 34.1). HO Grade IV: 18.7% (no impact on reoperation rate if below grade IV). CE: CDA patient selection (DDD ≥1 level, no significant facet arthropathy, adequate lordosis), surgical technique — symmetrical decompression critical for motion preservation.",
  },
]

export default function SpineSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Spine Surgeons"
        title="One Calendar for ABOS or ABNS MOC, NASS CE, and Implant Credentialing"
        subtitle="From lumbar fusion outcomes CE to robotic spine credentialing logs — Momenties tracks every deadline so your board certifications and device privileges stay current."
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

      {/* Key CE trials */}
      <section className="py-24" style={{ background: "#0c0c0f" }}>
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold mb-4" style={{ color: "#f0ece3" }}>
              High-Yield CE for Spine Surgery MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial before your ABOS, ABNS, or NASS cycle closes.
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
              &ldquo;Between ABOS MOC, NASS fellowship CE, three active implant credentialing programs, and state license renewal, I had deadlines literally every quarter. Momenties was the first tool that handled all of them without making me maintain a separate spreadsheet.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Kaveh M., MD, FACS
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Spine Surgery, Academic Neurosurgery Department
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABOS, ABNS, or NASS deadline again"
        subtitle="Momenties keeps every CME credit, device credential, and case log requirement in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
