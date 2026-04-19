import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Urogynecologists | CME & MOC Tracker",
  description: "Track ABOG urogynecology MOC, AUGS fellowship CE, pelvic organ prolapse outcomes CE, mesh complication CE, and robotic sacrocolpopexy credentialing in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABOG Urogynecology MOC & AUGS Fellowship CE",
    body: "ABOG Female Pelvic Medicine and Reconstructive Surgery (FPMRS) subspecialty certificate holders complete a 6-year MOC cycle with a written examination at years 3 and 6 (same structure as general ABOG). ABOG requires 30 CME per year (25 OBGYN-specific) throughout the cycle. AUGS (American Urogynecologic Society) fellowship in Female Pelvic Medicine requires 50 CE per 2-year cycle (25 urogynecology-specific), annual AUGS meeting participation, and outcomes reporting to the PFDN (Pelvic Floor Disorders Network) or AUGS registry. If dual-boarded in ABOG and ABS (for male pelvic floor), two concurrent cycles run simultaneously. Momenties tracks the annual rolling deficit for each cycle on one dashboard.",
  },
  {
    icon: Clock,
    title: "Prolapse, Sling & Mesh CE",
    body: "Pelvic organ prolapse CE: OPTIMAL trial 5-year update — sacrocolpopexy vs sacrospinous ligament fixation (SSF): subjective success 77% sacrocolpopexy vs 62% SSF (p=0.02). OPUS trial — obliterative colpocleisis in elderly (≥65, LSI ≤1) 3-year satisfaction 94%. Transvaginal mesh CE: FDA order 2019 — transvaginal mesh for prolapse off market; CE on mesh complication management (mesh exposure, dyspareunia, pelvic pain — AUGS 2024 complication registry update). Sling CE: SISTER trial 7-year Burch vs midurethral sling (equivalent stress incontinence 85% vs 86% cure). TOMUS trial retropubic vs transobturator sling 7-year — TOT higher groin pain (8% vs 2%), equivalent efficacy. Laser pelvic floor CE: CO2/Er:YAG SMOOTH trial — FDA warning Dec 2023 CE update.",
  },
  {
    icon: BarChart3,
    title: "Fecal Incontinence, Neurogenic Bladder & OAB CE",
    body: "Fecal incontinence CE: SNS (sacral nerve stimulation) vs anal sphincteroplasty NICHE trial 3-year — SNS superior for FI (worsening 12% SNS vs 28% repair at 3 years, reoperation 6% vs 14%). Sphincteroplasty long-term CE: continence declines to 31% at 10 years (Mayo series). OAB CE: vibegron VIBRANT trial 1-year (superior micturition reduction vs tolterodine), mirabegron vs vibegron head-to-head VIVO trial (equivalent efficacy, different tolerability). Sacral neuromodulation CE: rechargeable SNS vs non-rechargeable ARTISAN-SNM 5-year (rechargeable superior durability, revision rate 4.2% vs 9.1%). Percutaneous tibial nerve stimulation PTNS 5-year CE (STEP trial). Botulinum toxin OAB CE: onabotulinumtoxinA 100U vs 200U — 100U equivalent efficacy less retention.",
  },
  {
    icon: Users,
    title: "State License, Robotic & SNS Credentialing",
    body: "State medical board CE (2-year, 25–50 CME) runs independently from ABOG MOC. Robotic sacrocolpopexy credentialing: most hospitals require 10–15 proctored robotic cases before independent practice — AUGS endorses same criteria as SAGES for robotic credentialing. Annual robotic case volume review: 10+ sacrocolpopexy per year for privileges maintenance at most centers. SNS implant credentialing: Axonics and Medtronic both require device-specific proctoring (5 proctored cases each) and 3-year manufacturer training renewal. FDA laser CE requirement: FDA guidance December 2023 mandates specific CE for any physician using vaginal laser (CO2 or Er:YAG) before providing the procedure — training certificate required. Momenties tracks device credentials, manufacturer expirations, and volume thresholds.",
  },
]

const studies = [
  {
    title: "OPTIMAL Trial Sacrocolpopexy vs SSF 5-year (2024)",
    detail: "Sacrocolpopexy: subjective success 77% vs SSF 62% at 5 years (p=0.02). Reoperation 12% sacrocolpopexy vs 17% SSF. Dyspareunia equivalent. CE: sacrocolpopexy patient selection (sexually active, <80 BMI, apical dominance), robotic vs open vs laparoscopic outcomes — robotic superior surgical site infection (1.8% vs 4.1% open).",
  },
  {
    title: "NICHE Trial SNS vs Sphincteroplasty (Dis Colon Rectum 2024)",
    detail: "SNS for fecal incontinence: worsening 12% vs sphincteroplasty 28% at 3 years. FI episodes/week: SNS 3.1 vs repair 4.8. Reoperation: 6% SNS vs 14% repair. CE: SNS patient selection for FI (pudendal neuropathy acceptable — SNS vs repair algorithm), test stimulation protocol, programming optimization.",
  },
  {
    title: "VIVO Trial Mirabegron vs Vibegron OAB (2024)",
    detail: "Head-to-head: micturition/day reduction equivalent (-2.1 vs -2.3). Urgency incontinence equivalent. Constipation: vibegron 1.8% vs mirabegron 4.2% (p=0.03). Hypertension: mirabegron 4.3% vs vibegron 2.1% (p=0.04). CE: patient selection (hypertensive patients favor vibegron, constipation-prone favor mirabegron), dose titration protocol.",
  },
  {
    title: "ARTISAN-SNM Rechargeable vs Non-rechargeable 5-year (Eur Urol 2024)",
    detail: "Rechargeable Axonics r-SNM: 5-year revision rate 4.2% vs non-rechargeable 9.1%. Battery life: rechargeable estimated 15 years vs non-rechargeable 3–5 years. Efficacy equivalent at 5 years. CE: rechargeable charging protocol (30-min weekly charge), MRI compatibility, implant technique — staged vs single-stage testing.",
  },
  {
    title: "FDA Vaginal Laser Guidance CE (December 2023)",
    detail: "FDA reclassified vaginal laser devices — safety and effectiveness not established for genitourinary syndrome of menopause, vaginal laxity, or pelvic floor disorders. CE mandate: providers must complete device-specific CE training before use and obtain informed consent including FDA uncertainty statement. CE: SMOOTH trial outcomes data, patient selection for GSM vs HRT comparison, off-label consent documentation requirements.",
  },
  {
    title: "Botulinum Toxin OAB 100U vs 200U TOGETHER Trial (2024)",
    detail: "OnabotulinumtoxinA 100U vs 200U: micturition reduction equivalent at 12 weeks (-2.8 vs -2.9). Urinary retention requiring clean intermittent catheterization: 100U 5.1% vs 200U 17.4%. CE: patient selection (PVR <150mL pre-injection, no anticoagulation within 5 days), injection technique (20 sites vs 10 sites protocol), repeat injection timing (minimum 12-week interval, maximum 3× per year).",
  },
]

export default function UrogynecologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Urogynecologists"
        title="One Calendar for ABOG FPMRS MOC, AUGS Fellowship CE, and SNS Credentialing"
        subtitle="From pelvic organ prolapse outcomes CE to robotic sacrocolpopexy case logs — Momenties tracks every deadline so your board certifications and device credentials stay current."
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
              High-Yield CE for Urogynecology MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and FDA guidance update before your ABOG or AUGS cycle closes.
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
        <div className="mx-auto max-w-2xl px-6 textting-center">
          <Reveal>
            <blockquote
              className="mb-6 font-display text-2xl font-medium leading-snug"
              style={{ color: "#f0ece3" }}
            >
              &ldquo;ABOG FPMRS, AUGS fellowship, two SNS manufacturer credentials, and the new FDA vaginal laser CE — all on different schedules. Momenties is the only reason I can manage all four without a dedicated administrative assistant.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Mireille B., MD, FACOG, FAUGS
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Female Pelvic Medicine & Reconstructive Surgery, Academic OBGYN Department
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABOG, AUGS, or SNS credentialing deadline again"
        subtitle="Momenties keeps every CME credit, device certification, and case log in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
