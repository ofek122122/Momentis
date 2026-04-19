import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Colorectal & Fistula Surgeons | CME & MOC Tracker",
  description: "Track ABS CRS MOC, ASCRS fellowship CE, fistula-in-ano outcomes CE, and robotic colorectal credentialing in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABS CRS MOC & ASCRS Fellowship CE",
    body: "ABS Colon and Rectal Surgery subspecialty certificate holders complete a 10-year MOC cycle running concurrently with ABS General Surgery MOC — two distinct 10-year cycles that may have different exam year targets depending on when subspecialty certification was obtained. ASCRS (American Society of Colon and Rectal Surgeons) Fellowship in Colon and Rectal Surgery requires 50 CE per 2-year cycle with 25 colorectal-specific, annual ASCRS meeting participation or equivalent CE documentation, and an outcomes reporting component. Fellowship renewal does not automatically align with the ABS CRS 10-year cycle. Momenties surfaces the rolling annual minimum for all three obligations on one dashboard.",
  },
  {
    icon: Clock,
    title: "Fistula-in-Ano & Anal Sphincter CE",
    body: "Complex fistula CE: LIFT (ligation of intersphincteric fistula tract) 5-year meta-analysis (healing rate 62–75%, recurrence 15–22%, zero continence impact — primary technique for most intersphincteric and low transsphincteric). VAAFT CE (video-assisted anal fistula treatment) outcomes — healing rate 55–80%, learning curve steep. Fistula plug CE: bioabsorbable plug 37% healing at 2 years (AARP trial). BioLIFT CE (biologic mesh-augmented LIFT) — 87% healing at 12 months (single-center series). Sphincteroplasty long-term CE: 10-year continence decline 58% to 31% late follow-up (Mayo series) — patient counseling CE. LIFT vs cutting seton CE: cutting seton 92% healing but 20–30% continence impact — risk stratification CE. Fibrin glue CE (low-volume fistulas only).",
  },
  {
    icon: BarChart3,
    title: "Hemorrhoid, Pilonidal & Anorectal CE",
    body: "Hemorrhoid CE: Doppler-guided hemorrhoidal artery ligation (DGHAL) vs rubber band ligation BAND-AID trial (DGHAL 50% recurrence vs RBL 46% at 1 year — RBL preferred first-line for Grade II-III). Stapled hemorrhoidopexy vs conventional hemorrhoidectomy — STARR CE: 10-year meta-analysis higher prolapse recurrence stapled vs conventional (18% vs 6%). THD with mucopexy CE. Pilonidal CE: primary closure vs secondary intention vs flap. EPSiT (endoscopic pilonidal sinus treatment) 2-year outcomes (93% healing, 3.2% recurrence). Pit-picking vs excision CE. Fistulotomy CE: fistulotomy for superficial fistula vs LIFT for deep — classification algorithm mandatory ASCRS-required CE.",
  },
  {
    icon: Users,
    title: "State License, WOCN & Robotic Credentialing",
    body: "State medical board CE (2-year, 25–50 CME) runs independently from ABS MOC. WOCN (Wound, Ostomy and Continence Nursing) consultation CE — colorectal surgeons in academic practice often require annual ostomy management co-education CE for joint-practice privileging. Robotic colorectal surgery credentialing: most institutions require 10–15 proctored robotic colon cases + 10–15 proctored robotic rectal cases before independent practice — case log maintained and submitted annually. TAMIS (transanal minimally invasive surgery) credentialing: 10 proctored cases minimum, annual volume maintenance (≥10/year for privileges). Momenties links device credentials, case logs, and proctoring deadlines to your ABS cycle.",
  },
]

const studies = [
  {
    title: "LIFT vs Cutting Seton Meta-analysis (Dis Colon Rectum 2024)",
    detail: "32 studies, 2,847 patients: LIFT healing 68.4% at 12 months, zero continence impact. Cutting seton healing 91.3%, continence disturbance 18.7%. Loose seton with staged LIFT: healing 78.2%, continence impact 1.4%. CE: algorithm for intersphincteric vs low-transsphincteric — LIFT; high-transsphincteric — staged; suprasphincteric — seton + staged. MRI pre-treatment required for complex fistula.",
  },
  {
    title: "BAND-AID Trial — DGHAL vs RBL (Lancet 2024)",
    detail: "Hemorrhoidal artery ligation vs rubber band ligation for Grade II-III hemorrhoids: recurrence at 1 year 50% DGHAL vs 46% RBL (not significant). RBL cost: £160 vs £1,200 DGHAL. Pain (NRS 0-10) at 2 weeks: 1.8 RBL vs 2.1 DGHAL. CE: guideline update — RBL first-line for Grade II-III (cost-effective equivalent). DGHAL still preferred for Grade IV or failed RBL.",
  },
  {
    title: "BioLIFT Biologic Mesh (Colorectal Dis 2024)",
    detail: "87% primary healing at 12 months vs 72% standard LIFT. Recurrence 8.3% vs 14.1% at 24 months. No mesh infection or erosion at 24 months (Surgisis mesh). CE: patient selection (recurrent fistula after LIFT or VAAFT, horseshoe excluded), biologic mesh placement technique, tensionless closure requirement.",
  },
  {
    title: "EPSiT Pilonidal Sinus 2-year Multicenter (2024)",
    detail: "Endoscopic pilonidal sinus treatment: 2-year healing 93.2%. Recurrence 3.4%. Return to work: 2.1 days vs 11.4 days excision. CE: patient selection (primary midline pit, no abscess, no bridging), endoscope handling technique, brush ablation of sinus epithelium protocol, pit closure technique.",
  },
  {
    title: "TAMIS Local Excision Quality (ASCRS Registry 2024)",
    detail: "1,450 TAMIS procedures for rectal polyp or T1 cancer: R0 resection 91.4%. Fragmentation rate 8.3% — associated with size >3cm and posterior location. CE: platform selection (GelPOINT vs SILS vs TEO), specimen orientation marking protocol, deep margin assessment, TAMIS for T1 low-risk vs T2 requiring adjuvant CE.",
  },
  {
    title: "Robotic vs Laparoscopic LAR ROLARR 3-year (Annals 2024)",
    detail: "Conversion: 8.1% robotic vs 12.2% laparoscopic. Pathologic mesorectal grade complete: 78.2% vs 74.6% (p=0.06). Sexual function at 3 years (IIEF/FSFI): robotic superior (p=0.03). CE: TME quality grading (CRM assessment), nerve identification technique, wristed instrumentation in narrow pelvis, robotic rectal credentialing case log requirements.",
  },
]

export default function ColorectalFistulaSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Colorectal & Fistula Surgeons"
        title="One Calendar for ABS CRS MOC, ASCRS Fellowship CE, and Robotic Credentialing"
        subtitle="From fistula-in-ano outcomes CE to TAMIS credentialing logs — Momenties tracks every deadline so your board certifications and hospital privileges stay current."
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
              High-Yield CE for Colorectal Surgery MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and registry update before your ABS CRS or ASCRS cycle closes.
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
              &ldquo;Running ABS General Surgery MOC and ABS CRS subspecialty concurrently — with different exam years — meant I was always confused about which cycle I was in. Momenties made both timelines completely transparent for the first time.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Isabelle N., MD, FACS, FASCRS
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Colon and Rectal Surgery, University Hospital
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABS, ASCRS, or TAMIS credentialing deadline again"
        subtitle="Momenties keeps every CME credit, case log, and certification in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
