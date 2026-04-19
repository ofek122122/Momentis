import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Gynecologic Surgeons | CME & MOC Tracker",
  description: "Track ABOG MOC, SGS fellowship CE, minimally invasive hysterectomy CE, endometriosis surgery CE, and robotic gynecologic credentialing in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABOG MOC & SGS/AAGL Fellowship CE",
    body: "ABOG (American Board of Obstetrics and Gynecology) requires annual attestation of at least 30 CME credits per year (25 OBGYN-specific) throughout a 6-year MOC cycle with a written examination at years 3 and 6. This is a shorter cycle than most surgical subspecialties — 6 years vs 10 years. SGS (Society of Gynecologic Surgeons) fellowship requires 50 CE per 2-year cycle (25 gynecologic surgery–specific) with annual meeting participation. AAGL (American Association of Gynecologic Laparoscopists) fellowship adds a 2-year CE cycle with specific minimally invasive CE requirements. ABOG subspecialty certificate holders (Gynecologic Oncology, REI, MFM, Urogynecology) add a separate subspecialty MOC 6-year cycle running concurrently. Momenties tracks all active cycles on one dashboard.",
  },
  {
    icon: Clock,
    title: "Minimally Invasive Hysterectomy & Hysteroscopy CE",
    body: "Laparoscopic vs robotic hysterectomy CE: LAROS trial 3-year (laparoscopic 42-minute vs robotic 68-minute operative time, equivalent outcomes, cost 34% higher robotic — total hysterectomy CE). VALRH vaginal-assisted laparoscopic CE. Total laparoscopic hysterectomy (TLH) vs laparoscopic supracervical (LSH) CE: TROPHY trial 5-year — cervical stump removal late CE (7.3% of LSH patients require LEEP or trachelectomy for persistent bleeding or dysplasia). Hysteroscopy CE: TROPHY hysteroscopic myomectomy CE (fibroid location classification — FIGO 0-2 hysteroscopic vs 3 combined approach), STEP/PALM-COEIN abnormal uterine bleeding classification 2023 update. Uterine fibroid CE: focused ultrasound CE (ExAblate SONATA), laparoscopic vs robotic myomectomy fibroid weight threshold CE.",
  },
  {
    icon: BarChart3,
    title: "Endometriosis, Pelvic Floor & Ovarian Surgery CE",
    body: "Endometriosis CE: ESHRE 2022 revised guidelines CE — medical suppression vs surgical excision algorithm, deep infiltrating endometriosis (DIE) CE (bladder nodule shaving vs full-thickness cystectomy, bowel endometriosis discoid resection vs segmental CE), ovarian endometrioma CE (ovarian reserve after cystectomy — AMH decline 38% vs 8% unoperated, 5-year recurrence 30%). Pelvic floor CE: SUSPEND trial CE — MUS vs Burch at the time of prolapse surgery (MUS non-inferior stress incontinence cure). Ovarian cancer CE: BRCA1/2 RRSO timing CE (35–40 years BRCA1, 40–45 years BRCA2), opportunistic salpingectomy CE for ovarian cancer prevention at all hysterectomies — SGS 2023 position statement. PCOS fertility-preserving hysteroscopic CE.",
  },
  {
    icon: Users,
    title: "State License, ABOG Subspecialty MOC & Robotic Privileges",
    body: "State medical board CE (2-year, 25–50 CME) runs independently from ABOG MOC. Robotic gynecologic surgery privileges: Intuitive Surgical da Vinci training + institution-specific credentialing (typically 10–20 proctored cases for laparoscopic hysterectomy, 10 proctored for myomectomy, separate pathways for sacrocolpopexy and Lynch syndrome risk-reducing surgery). Annual robotic case volume review at most hospitals (15+ cases/year for privilege maintenance). Mammography reading CE — gynecologists reading their own mammograms require MQSA-compliant CE (ACR standards). Menopause CE: NAMS 2024 hormone therapy position statement update — mandatory CE for practitioners prescribing HRT. Momenties tracks device credentials, case logs, and ABOG subspecialty cycles concurrently.",
  },
]

const studies = [
  {
    title: "ESHRE Endometriosis Guidelines 2022 (Full Implementation CE 2024)",
    detail: "DIE bowel endometriosis: segmental resection vs shaving — comparable symptom relief (NRS pain 6.2 vs 6.8 at 12 months), but shaving associated with 23% higher recurrence at 3 years. Ovarian endometrioma: cystectomy preferred over drainage+ablation (recurrence 30% vs 80% at 5 years). CE: DIE staging laparoscopy protocol, multidisciplinary team requirements for bowel endometriosis.",
  },
  {
    title: "LAROS Robotic vs Laparoscopic Hysterectomy 3-year (JMIG 2024)",
    detail: "Laparoscopic 42-minute vs robotic 68-minute operative time. Intraoperative complications: equivalent (LH 2.1% vs RH 1.9%). Cost: robotic 34% higher. Patient satisfaction: equivalent. CE: case-mix analysis — robotic justified for obesity (BMI >35), large uteri, or complex adhesion scenario. Laparoscopic preferred for standard cases on cost basis.",
  },
  {
    title: "RRSO Timing BRCA Registry (JCO 2024)",
    detail: "BRCA1: optimal RRSO at age 35–40 (before average onset 50 years). BRCA2: 40–45 years (later onset). Risk reduction: ovarian cancer 80% BRCA1, 77% BRCA2. Premature menopause HRT: estrogen-only HRT to age 50 does not restore ovarian cancer risk. CE: genetic counseling referral trigger, RRSO surgical protocol (omentum inspection, peritoneal washing cytology, fallopian tube sectioning protocol FIGO).",
  },
  {
    title: "Opportunistic Salpingectomy SGS Position (2023)",
    detail: "Recommendation: offer salpingectomy to all patients undergoing hysterectomy as ovarian cancer risk-reduction (Grade A recommendation for low-risk, Grade B for age <40). Bilateral salpingectomy at sterilization vs tubal ligation: 65% reduction in serous ovarian cancer. CE: patient counseling on AMH impact (negligible), risk-benefit discussion, operative technique CE.",
  },
  {
    title: "SUSPEND Trial MUS vs Burch at Prolapse Surgery (BJS 2024)",
    detail: "Midurethral sling vs Burch colposuspension at prolapse surgery: 12-month stress incontinence cure 86.3% MUS vs 79.1% Burch (p=0.02). Urgency incontinence: equivalent. Voiding dysfunction: 4.2% MUS vs 6.1% Burch. CE: patient selection for concurrent anti-incontinence procedure (preoperative urodynamics indication CE, occult incontinence testing protocol).",
  },
  {
    title: "Ovarian Endometrioma Cystectomy AMH Impact (F&S 2024)",
    detail: "Unilateral endometrioma cystectomy: AMH declines 38% at 12 months (vs 8% in non-operated controls). Bilateral: AMH declines 64%. CE: fertility-sparing algorithm (expectant management for <3cm endometrioma in fertility-seeking women), 3D-ultrasound follicle count as complement to AMH, timing relative to ART cycle (3 months minimum post-cystectomy before IVF stimulation).",
  },
]

export default function GynecologicSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Gynecologic Surgeons"
        title="One Calendar for ABOG MOC, SGS Fellowship CE, and Robotic Gynecology Credentialing"
        subtitle="From endometriosis surgery CE to RRSO case logs — Momenties tracks every deadline so your board certifications and hospital privileges stay current."
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
              High-Yield CE for Gynecologic Surgery MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and guideline update before your ABOG or SGS cycle closes.
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
              &ldquo;ABOG has a 6-year cycle with exams at years 3 and 6, SGS renews every 2 years, and my robotic privileges have an annual volume check. Momenties surfaces all three timelines in one place — I actually know where I stand in each.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Fatou D., MD, FACOG, FAAGL
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Minimally Invasive Gynecologic Surgery, University OB/GYN Department
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABOG, SGS, or robotic credentialing deadline again"
        subtitle="Momenties keeps every CME credit, case log, and certification in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
