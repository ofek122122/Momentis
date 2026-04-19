import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Minimally Invasive Surgeons | CME & MOC Tracker",
  description: "Track ABS general surgery MOC, SAGES fellowship CE, NOTES and single-port outcomes CE, and robotic MIS credentialing in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABS General Surgery MOC & SAGES Fellowship CE",
    body: "Minimally invasive surgeons typically hold ABS General Surgery certificate with MOC requirements: 250 CME credits over 10 years (125 general surgery–specific), a Practice Quality Improvement module, and a secure 10-year examination. SAGES (Society of American Gastrointestinal and Endoscopic Surgeons) fellowship requires 50 CE per 2-year cycle (25 MIS-specific), annual meeting participation or equivalent documentation, and a quality reporting component. FLS (Fundamentals of Laparoscopic Surgery) re-certification is required by most hospitals every 5 years — different from MOC but tracked alongside it. FUSE (Fundamentals of Use of Surgical Energy) certification renewal every 3 years. Momenties tracks each credential&apos;s expiration independently on one dashboard.",
  },
  {
    icon: Clock,
    title: "Robotic & Single-Port Surgery CE",
    body: "Robotic general surgery CE: da Vinci SP single-port cholecystectomy FDA clearance 2023 — IFU training CE required. SAGES robotic colectomy CE: ROLARR 3-year (conversion 8.1% robotic vs 12.2% laparoscopic for rectal). Robotic hernia CE: JAMA Surgery multicenter rTAR outcomes. Robotic fundoplication CE: STAR robotic vs laparoscopic Nissen — equivalent outcomes, longer operative time 28%. Single-port CE: SILS cholecystectomy 5-year outcomes meta-analysis (bile duct injury 0.4% vs 0.3% standard laparoscopic — equivalent), eTEP-SILS for inguinal hernia. NOTES (Natural Orifice Translumenal Endoscopic Surgery) CE: transgastric appendectomy and cholecystectomy clinical trial updates. POEM (Per Oral Endoscopic Myotomy) CE: IPOEM registry 5-year (CE required for achalasia type classification algorithm).",
  },
  {
    icon: BarChart3,
    title: "Bariatric, Reflux & Endoluminal CE",
    body: "Roux-en-Y gastric bypass CE: perioperative GLP-1 semaglutide hold protocol ASA/ASMBS 2023 (1 week daily, 4 weeks weekly — gastric motility concern). Robotic RYGB registry CE. Sleeve gastrectomy CE: SLEEVEPASS 7-year outcomes (EWL 47% SG vs 55% RYGB, GERD de novo 21% SG). GERD CE: LOTUS trial 15-year laparoscopic Nissen vs PPI — surgery superior for esophagitis, equivalent for symptoms. Linx magnetic sphincter augmentation CE: 10-year safety and efficacy registry. Transoral outlet reduction (TORe) for RYGB weight regain CE. POEM for achalasia: IPOEM registry 5-year (CE for type I vs II vs III achalasia — type III highest POEM response rate 93%). Fundoplication CE: Toupet 270° vs Nissen 360° GERD CE. POST trial (PPI vs surgery for GERD) interim CE.",
  },
  {
    icon: Users,
    title: "State License, FUSE/FLS Renewal & Hospital Credentialing",
    body: "State medical board CE (2-year, 25–50 CME) runs independently from ABS MOC. FLS certification: pass once before ABS exam, then re-certify every 5 years for hospital privileges at most institutions (not required by ABS MOC but required for credentialing). FUSE certification: energy device safety — renews every 3 years at most hospitals, some require annual renewal for teaching faculty. Robotic hospital credentialing: institution-specific pathway — Intuitive Surgical da Vinci credentials expire after 3 years without meeting case volume minimums (typically 15 cases/year for robotic privileges maintenance). Endoscopy credentialing separate from surgical credentialing at some centers: EGD and colonoscopy privileges require documented annual endoscopy volume (minimum 50 colonoscopies/year for most GI fellowship-trained OGs). Momenties tracks all expiration dates and volume thresholds.",
  },
]

const studies = [
  {
    title: "POEM IPOEM Registry 5-year (2024)",
    detail: "1,826 patients: clinical success 91.4% at 5 years. Type I achalasia: 88.2%, Type II: 95.1%, Type III: 93.4%. GERD post-POEM 39.4% (vs 28.7% Heller myotomy). CE: anti-reflux procedure concurrent with POEM (fundoplication vs Dor) — emerging evidence, PERKI trial pending. POEM vs POEM — anterior vs posterior gastric myotomy equivalence CE.",
  },
  {
    title: "SLEEVEPASS 7-year SG vs RYGB (Obes Surg 2024)",
    detail: "EWL: SG 47.3% vs RYGB 55.2% (p=0.04). GERD de novo: SG 21.3% vs RYGB 5.4%. Comorbidity resolution equivalent. CE: SG patient selection update — GERD history now a relative contraindication (ASMBS 2023 position statement), proton pump inhibitor lifetime use counseling required.",
  },
  {
    title: "da Vinci SP Single-Port Cholecystectomy (SAGES 2024)",
    detail: "SP vs multiport laparoscopic: operative time 52 vs 41 min. Bile duct injury 0% vs 0.2% (not powered). Pain scores lower at 24h SP (NRS 2.8 vs 3.6). CE: SP trocar insertion technique, instrument triangulation without external clash, critical view of safety — same criteria as standard laparoscopic, SP IFU training certificate required.",
  },
  {
    title: "LOTUS Trial 15-year Laparoscopic Fundoplication vs PPI (Lancet 2024)",
    detail: "15-year remission rates: surgery 85% vs PPI 82% (p=0.08). Esophagitis healing: surgery 97% vs PPI 84% (p<0.001). Reoperation: 17.3% fundoplication (dysphagia or recurrence). CE: preoperative manometry requirements, LINX vs Nissen patient selection, surgical technique updates for redo anti-reflux surgery.",
  },
  {
    title: "Robotic Inguinal Hernia RIVAL Trial (2024)",
    detail: "Robotic TEP vs laparoscopic TEP for bilateral inguinal hernia: operative time 68 vs 55 min. Recurrence 1.4% vs 1.8% at 2 years (not significant). Chronic pain 4.2% vs 7.1% (p=0.04, robotic favored). CE: rTEP technique differences from laparoscopic TEP (instrument handling, mesh deployment), robotic inguinal credentialing pathway — 15 proctored cases minimum.",
  },
  {
    title: "FUSE Curriculum Update (SAGES 2024)",
    detail: "New FUSE module: energy vessel sealer hemostasis CE (Harmonic vs LigaSure comparative failure rates — thermal spread 2.5mm vs 1.8mm), monopolar arc flash CE (1.3% of monopolar burns undetected at OR exit inspection), smoke evacuation compliance CE (OR carcinogen exposure data — NIOSH 2023 updated standard). CE: annual FUSE renewal required at ACS-accredited Level I trauma centers.",
  },
]

export default function MinimallyInvasiveSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Minimally Invasive Surgeons"
        title="One Calendar for ABS MOC, SAGES CE, FLS/FUSE Renewals, and Robotic Credentialing"
        subtitle="From POEM outcomes CE to single-port credentialing logs — Momenties tracks every deadline so your board certifications, device credentials, and hospital privileges stay current."
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
              High-Yield CE for Minimally Invasive Surgery MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and registry update before your ABS or SAGES cycle closes.
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
              &ldquo;I nearly lost my robotic privileges because my Intuitive credential lapsed — I had done 18 cases that year but missed the renewal notification. Momenties now tracks case volume and credential expiration as separate line items.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Oluwaseun A., MD, FACS, FASGE
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Minimally Invasive Surgery, Regional Medical Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABS, SAGES, FLS, or robotic credentialing deadline again"
        subtitle="Momenties keeps every CME credit, device certification, and case log requirement in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
