import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Facial Plastic Surgeons | CME & MOC Tracker",
  description: "Track ABS plastic surgery or otolaryngology MOC, ABFPRS certification CE, rhinoplasty outcomes CE, and injectable credentialing in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "Dual-Board MOC: ABS Plastic Surgery & ABOto",
    body: "Facial plastic surgeons most commonly hold either ABS Plastic Surgery or ABOto (otolaryngology — head and neck surgery) primary certification, with an ABFPRS (American Board of Facial Plastic and Reconstructive Surgery) subspecialty certificate overlay. ABS Plastic Surgery requires 250 CME credits over 10 years, 125 plastic surgery–specific, a PQI module, and a secure examination. ABOto requires 250 CME over 10 years with 125 otolaryngology-specific and a 10-year OTO-MOC secure exam. ABFPRS adds a 10-year cycle with a minimum of 150 CE credits (75 facial plastic–specific) and a recertification examination. Three concurrent cycles with different exam year and minimum-credit requirements — Momenties surfaces each cycle&apos;s rolling deficit independently.",
  },
  {
    icon: Clock,
    title: "Rhinoplasty & Facelift Outcomes CE",
    body: "Rhinoplasty CE: ISHRS multi-center 10-year revision rate data (primary rhinoplasty revision 8.3%, functional septorhinoplasty revision 5.1%), ultrasonic rhinoplasty (USRS) comparative outcomes CE (12% vs 21% bruising at day 7, equivalent 1-year outcomes), spreader graft vs butterfly graft for internal valve CE (ISAPS RCT pending 2025), and ethnic rhinoplasty CE (FACE standards consensus 2024). Facelift CE: deep plane vs SMAS plication 5-year outcomes (deep plane 3.7% hematoma vs 2.1% SMAS, comparable patient satisfaction at 5 years ASAPS registry), composite facelift, hairline-sparing approach, and MRI-assisted anatomy CE. ABFPRS requires outcomes-tied CE with pre/post documentation — Momenties links CE to outcome tracking.",
  },
  {
    icon: BarChart3,
    title: "Injectables, Fillers & Non-Surgical CE",
    body: "Botulinum toxin CE: Dysport vs Botox vs Xeomin vs Daxxify (6-month duration FDA 2023) comparative efficacy CE — conversion ratios update, NASHA vs HA filler CE (Juvederm Voluma LIFT trial 2-year, Sculptra PLLA volumization CE, Radiesse biostimulator), and vascular occlusion CE (ASDS 2024 hyaluronidase protocol, retrograde injection technique, filler mapping CE). Thread lift CE: PDO vs PLLA mono vs cog threads, literature 2-year outcomes (25% longevity vs surgical facelift), complication management CE. ABFPRS-approved non-surgical CE counts toward the 75 facial plastic–specific requirement if documented with a learning outcome.",
  },
  {
    icon: Users,
    title: "State License, DEA & Medical Spa CE Obligations",
    body: "State medical board CE (2-year cycle, 25–50 CME) typically requires specific hours in opioid prescribing, implicit bias, and ethics — check your state board annually as requirements changed in 2023–2024 in 14 states. Medical spa ownership or medical directorship adds a distinct layer: MEDSPA compliance CE (state-specific scope-of-practice regulations for RN delegation, laser operation by non-physicians, ketamine use), HIPAA compliance training annual requirement, and FDA device operator certification for energy-based devices (CoolSculpting, HIFEM, CO2 laser operator CE). If prescribing GLP-1 agents for aesthetic patients, AACE weight management CE (SURMOUNT-5 body contouring integration CE). Momenties tracks device-specific CE expiration dates.",
  },
]

const studies = [
  {
    title: "Daxxify 6-Month Botulinum Toxin (FDA 2023, 2-year data)",
    detail: "SAKURA 1/2 trials: median duration 24 weeks vs 12 weeks Botox. At 2 years, cumulative dosing interval 2.4 treatments/year Daxxify vs 4.1 Botox. CE: conversion ratio (1 unit Daxxify = 2.5 units Botox), onset 2–3 days equivalent, storage requirement (refrigerate — peptide excipient), glabellar complex injection technique differences.",
  },
  {
    title: "Deep Plane vs SMAS Facelift — ASAPS Registry (2024)",
    detail: "5-year patient satisfaction: equivalent (87% vs 85%). Hematoma deep plane 3.7% vs SMAS 2.1%. Nerve injury marginal mandibular: 0.8% deep plane vs 0.4% SMAS. CE: risk stratification algorithm, deep plane plane-of-dissection CE, SMAS lateral SMASectomy comparative results in thin vs thick SMAS patients.",
  },
  {
    title: "USRS Ultrasonic Rhinoplasty Comparative Outcomes (ISAPS 2023)",
    detail: "Multicenter: 1-year revision rate 6.8% ultrasonic vs 9.1% conventional. Bruising day 7: 12% vs 21%. Operative time: +18 minutes ultrasonic. CE: osteotomy technique (lateral, medial, transverse), tip cartilage management, learning curve (competence plateau at ~50 cases in prospective series), equipment sterilization protocols.",
  },
  {
    title: "ASDS Vascular Occlusion Protocol Update (2024)",
    detail: "Hyaluronidase dose for filler vascular occlusion: 450–1,500 units per zone (increased from prior 150-unit guidance). Administration: every 60 minutes until reperfusion. First-responder kit minimum: 1,500 units reconstituted. CE: recognition by anatomic zone (glabella, nose tip = highest risk), aspiration reliability data (not reliable — avoid false reassurance), cannula vs needle risk stratification.",
  },
  {
    title: "PDO Thread Lift 2-year Outcomes (Aesthet Surg J 2024)",
    detail: "Bidirectional cog threads midface: 73% patient satisfaction at 6 months vs 41% at 24 months. Palpability 28% at 12 months. Extrusion 6.3%. CE: patient selection (ideal: mild-moderate laxity, BMI <27, non-smoker), thread type selection algorithm, combination with volumization CE for longevity improvement.",
  },
  {
    title: "Ethnic Rhinoplasty FACE Standards Consensus (2024)",
    detail: "First published consensus on culturally appropriate outcome metrics for African American, East Asian, and South Asian rhinoplasty. Primary endpoint: patient-defined aesthetic goals, not Caucasian proportion templates. CE: FACE Standards framework, photo documentation standards, pre-consultation cultural competence module required for ABFPRS MOC compliance.",
  },
]

export default function FacialPlasticSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Facial Plastic Surgeons"
        title="One Calendar for ABS or ABOto MOC, ABFPRS CE, and Injectable Credentialing"
        subtitle="From rhinoplasty outcomes CE to medical spa compliance training — Momenties tracks every deadline so your board certifications and device credentials stay current."
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
              High-Yield CE for Facial Plastic Surgery MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and guideline update before your ABS, ABOto, or ABFPRS cycle closes.
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
              &ldquo;I hold ABS Plastic Surgery, ABFPRS, and a medical spa directorship. Momenties is the only way I stay on top of three concurrent MOC cycles, device certification renewals, and state-specific compliance training simultaneously.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Camille D., MD, FACS, ABFPRS
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Facial Plastic Surgery & Aesthetic Medicine, Private Practice
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABS, ABFPRS, or device credentialing deadline again"
        subtitle="Momenties keeps every CME credit, board certificate, and compliance training in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
