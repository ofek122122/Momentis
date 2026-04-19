import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Microsurgeons | CME & Credentialing Tracker",
  description: "Track ABS plastic surgery or hand surgery MOC, ASRM fellowship CE, replantation and free-flap outcomes CE, and supermicrosurgery training in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABS MOC & Dual-Subspecialty CE Obligations",
    body: "Microsurgeons most commonly hold ABS Plastic Surgery or ABS Surgery certificates with a hand surgery CAQ. ABS Plastic Surgery requires 250 CME over 10 years with at least 125 plastic surgery–specific, a practice quality improvement module, and a secure examination. Hand surgery CAQ holders add an ASSH-aligned CE requirement with 50 hand-specific credits per renewal cycle. If the microsurgeon also holds an AAHKS or peripheral nerve subspecialty credential, a third cycle runs concurrently. Momenties surfaces the remaining-credits deficit for each cycle independently on one dashboard.",
  },
  {
    icon: Clock,
    title: "Free-Flap & Replantation Outcomes CE",
    body: "ASRM (American Society for Reconstructive Microsurgery) endorses outcomes-based CE tied to annual registry reporting. Flap failure rate CE: BREAST-Q prospective registry annual review, MIRA multi-institutional DIEP flap outcomes (perfusion zone necrosis 7.2%, clinical venous congestion 3.1%). Replantation CE: NXRM (National Extremity Replantation) registry annual update, digital replantation survival 86% vs 94% with WALANT technique, multidigit replantation sequence CE, viability scoring systems. Momenties schedules outcomes review CE immediately after your annual registry submission deadline.",
  },
  {
    icon: BarChart3,
    title: "Supermicrosurgery & Lymphedema CE",
    body: "Supermicrosurgery (anastomosis ≤0.8mm vessels) CE: LYMPHA (LYmphatic Microsurgical Preventive Healing Approach) prospective cohort update, LVA (lymphovenous anastomosis) vs VLNT (vascularized lymph node transfer) ISL consensus 2023, ICG lymphography mapping protocol CE, anastomosis patency assessment duplex protocol. Perforator flap CE: DIEP vs MS-TRAM evidence update, SIEA flap eligibility criteria, PAP/TMG flap for autologous breast reconstruction, propeller flap design algorithm CE for extremity reconstruction. Nerve CE: processed allografts RANGER registry (17 mm/month regeneration rate across 70mm gaps), MAPS-1 nerve transfer protocol update.",
  },
  {
    icon: Users,
    title: "State License, Hospital Privileges & Proctoring CE",
    body: "State medical board CE cycles (2 years, 25–50 CME) run independently from ABS MOC. Hospital privileging for robotic-assisted microsurgery (da Vinci SP for head-and-neck free flaps) requires documented case logs: minimum 25 proctored cases before independent practice at most academic centers, annual volume minimums (15+ free flaps per year for privileges maintenance), and manufacturer training certificate renewals every 3 years. ACGME fellowship director CE: if holding a faculty or PD role, annual ACGME outcomes update and milestones evaluation training. Momenties links each privilege type to its expiration and volume check-in date.",
  },
]

const studies = [
  {
    title: "BREAST-Q DIEP Registry (2024 update)",
    detail: "Patient-reported satisfaction 82% at 5 years post-DIEP vs 71% implant-based reconstruction. Fat necrosis rate 12.4% clinically vs 7.1% radiologic only. CE: patient selection algorithm for BMI >35, bilateral DIEP technical modifications, postoperative monitoring protocol.",
  },
  {
    title: "ISL Consensus 2023 — LVA vs VLNT",
    detail: "LVA superior for early-stage lymphedema (ISL I-IIA): circumference reduction 52% vs 38% VLNT at 2 years. VLNT preferred for late fibrotic stage (ISL III). Combined LVA+VLNT emerging data (NCMC cohort 2023). CE: staging workup with ICG, technique selection criteria, outcomes reporting standards.",
  },
  {
    title: "RANGER Processed Nerve Allograft (2024 5-year)",
    detail: "Nerve gaps 15–70mm: 87% meaningful recovery (S3+ or M3+). Comparable to autograft in 15–30mm gaps (89% vs 91%). Gap >50mm: autograft still preferred (78% vs 64%). CE: AxoGen RANGER indication criteria, gap measurement protocol, adjunct cell therapy (NERVE trial pending).",
  },
  {
    title: "WALANT Replantation Series (multi-center 2023)",
    detail: "Wide-awake local anesthesia no tourniquet for digital replantation: survival 94.2% vs 86.1% GA. Active intraoperative tendon glide assessment reduces re-exploration rate 6.1% vs 14.3%. CE: WALANT technique certification, patient selection (single digit, zone I-II), postoperative CRPS prevention protocol.",
  },
  {
    title: "Robotic Microsurgery SP Platform (2024 IDE)",
    detail: "da Vinci SP for head and neck free flap inset and vessel anastomosis: anastomosis time 18 min vs 26 min open. Pharyngocutaneous fistula rate 3.2% vs 8.4% in oropharyngeal reconstruction cohort. CE: credentialing pathway, anastomosis simulation training validation, outcome reporting to AAORS registry.",
  },
  {
    title: "MAPS-1 Nerve Transfer Protocol (AAHS 2024)",
    detail: "Oberlin + AIN double fascicular transfer for high ulnar: 89% grip recovery at 2 years. Locoregional motor nerve transfers for high radial (PIN to triceps, ECRB to ECU): 91% M3+. CE: intraoperative EMG mapping protocol, donor fascicle selection, rehabilitation co-management timeline.",
  },
]

export default function MicrosurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Microsurgeons"
        title="One Calendar for ABS MOC, ASRM CE, and Free-Flap Credentialing"
        subtitle="From supermicrosurgery outcomes reporting to robotic anastomosis credentialing — Momenties tracks every deadline so your privileges and subspecialty certificates stay current."
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
              High-Yield CE for Microsurgery MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark study before your ABS or CAQ cycle closes.
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
              &ldquo;I track ABS plastic surgery MOC, my hand surgery CAQ, hospital free-flap privileges, and ASRM registry CE simultaneously. Momenties is the only tool that handles all four cycles without me manually cross-referencing deadlines.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Yuki T., MD, FACS
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Reconstructive Microsurgery & Hand Surgery, Level I Trauma Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABS, ASRM, or hospital privileges deadline again"
        subtitle="Momenties keeps every CME credit, registry requirement, and proctoring log in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
