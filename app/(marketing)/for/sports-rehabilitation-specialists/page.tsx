import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Sports Rehabilitation Specialists | CME & MOC Tracker",
  description: "Track ABPMR sports medicine MOC, AOSSM fellowship CE, ultrasound-guided procedure credentialing CE, concussion protocol CE, PRP/regenerative medicine CE, and CAQSM certification CE in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABPMR/ABFM Sports Medicine MOC & AOSSM Fellowship CE",
    body: "Sports rehabilitation specialists hold primary certification through ABPMR (American Board of Physical Medicine and Rehabilitation) or ABFM/ABIM (non-surgical sports medicine subspecialty) — continuous MOC. ABPMR Sports Medicine subspecialty: 10-year recertification exam, continuous MOC attestation (30 CME/year — 20 sports medicine-specific). CAQSM (Certificate of Added Qualification in Sports Medicine) — ABFM/ABEM/ABIM/ABP/ABPMR: 10-year renewal CE. AOSSM (American Orthopaedic Society for Sports Medicine) fellowship CE: AOSSM Annual Meeting CE (mandatory for fellowship maintenance), AOSSM Arthroscopy CE modules. AMSSM (American Medical Society for Sports Medicine) fellowship: AMSSM Annual Meeting CE, AMSSM Sports Ultrasound CE, AMSSM Concussion CE. NATA (National Athletic Trainers Association) ATC CE — for sports medicine physicians supervising ATCs. Team physician credentialing CE: NFL/NBA/MLB/NHL team physician CE requirements (CPR/AED CE, emergency action plan CE, heat illness CE). USOC (US Olympic and Paralympic Committee) team physician CE: quadrennial review CE. Momenties tracks ABPMR MOC, CAQSM 10-year renewal, and AMSSM fellowship CE independently.",
  },
  {
    icon: Clock,
    title: "Ultrasound-Guided Procedure CE & Diagnostic MSK US Credentialing",
    body: "Musculoskeletal (MSK) ultrasound credentialing CE: AMSSM MSK ultrasound CE — AMSSM Basic Level Ultrasound CE (40 hours didactic + 100 supervised scans CE), AMSSM Intermediate Level CE (200 scans CE), AMSSM Advanced Level CE (500 scans CE). AIUM practice parameter CE for MSK ultrasound CE: annual review CE — diagnostic CE (tendon CE, bursa CE, nerve CE, joint CE), dynamic CE assessment CE (dynamic instability CE, tendon pathology CE — real-time CE). Ultrasound-guided injection CE: joint injection CE (glenohumeral CE, AC CE, hip CE, knee CE), bursa injection CE (subacromial CE, trochanteric CE, retrocalcaneal CE), tendon peritendinous injection CE (rotator cuff CE, Achilles CE — avoid intratendinous CE), nerve block CE (US-guided carpal tunnel CE, pudendal CE). Prolotherapy/PRP CE: AMSSM PRP position statement 2022 CE — PRP for lateral epicondylitis CE (limited evidence CE, level II CE), PRP for osteoarthritis CE (RESTORE trial CE — knee OA CE), PRP for rotator cuff CE (MAPP trial CE). Hydrodissection CE: carpal tunnel CE (US-guided CE, 5% dextrose CE). Diagnostic arthrocentesis CE: knee, hip, shoulder technique CE, synovial fluid analysis CE. Momenties tracks MSK ultrasound CE scan count and procedure-specific credentialing.",
  },
  {
    icon: BarChart3,
    title: "Concussion CE: Protocols, Return-to-Play & CTE Surveillance",
    body: "Concussion management CE: CISG (Concussion in Sport Group) 2023 consensus CE — concussion definition CE update, graduated return-to-play protocol CE (6-step CE, 24-hour minimum per step CE, symptom-free required CE), SCAT6 CE (Sport Concussion Assessment Tool 6th edition 2023 CE — sideline CE assessment CE), Child SCAT6 CE (ages 8-12 CE). Return-to-play CE: CSRR (Cognitive and Symptom-guided Return-to-Recreation) CE — no longer strict 6-step for recreational athletes CE, individualized protocol CE for non-contact sports CE. ImPACT CE: neurocognitive testing CE — baseline CE value/limitations CE, repeat testing CE interpretation CE, ImPACT limitations CE (alternative CE tools — Cogstate CE, CNS Vital Signs CE). Prolonged concussion CE: post-concussion syndrome CE (>30 days CE symptoms CE), cervicogenic headache CE (occipital nerve block CE), vestibular therapy CE referral CE, multidisciplinary concussion clinic CE. Return-to-learn CE: academic accommodation CE, gradual school return CE protocol CE, special education coordinator communication CE. CTE (Chronic Traumatic Encephalopathy) surveillance CE: UNITE Brain Bank CE, DIAGNOSE CTE CE, pre-mortem biomarkers CE (plasma p-tau217 CE — CTE diagnosis advance CE, PTSD CE vs CTE CE distinction CE). Second impact syndrome CE (prevention CE — absolute disqualification CE criteria CE). Momenties tracks concussion protocol CE updates and return-to-play guideline revisions.",
  },
  {
    icon: Users,
    title: "State License, ACL Prevention CE, Load Management & Heat Illness CE",
    body: "State medical license CE (2-year, 25-50 CME). ACL injury prevention CE: FIFA 11+ CE (AMSSM endorsed CE — neuromuscular training CE, 30% ACL reduction CE), JUMPSTEP CE, PEP program CE, ACL return-to-sport criteria CE (psychological readiness CE — ACL-RSI CE, hop test CE battery CE — LSI ≥90% CE, time from surgery ≥9 months CE). Load management CE: RPE (Rate of Perceived Exertion) CE — ACWR (Acute:Chronic Workload Ratio) CE (ACWR 0.8-1.3 CE — sweet spot CE, >1.5 CE — injury risk CE), GPS tracking CE in team sport CE, HRV (heart rate variability) CE for recovery monitoring CE. Shoulder instability CE: Bankart repair CE vs LATARJET CE (glenoid bone loss >20% CE), SLAP tear management CE (anchor-based repair CE vs non-operative CE — AMSSM 2023 CE). Elbow injury CE: UCL reconstruction CE (Tommy John surgery CE — 18-24 month return CE), internal brace CE (BIOME trial CE — accelerated return 9-12 months CE). Heat illness CE: KOREY STRINGER INSTITUTE CE — exertional heat stroke CE (wet ice CE immersion — target rectal temp <40°C in 30 min CE), AMSSM heat acclimatization CE (14-day protocol CE), EAP (Emergency Action Plan) CE (mandatory for team physicians CE). WADA CE: anti-doping rules CE, TUE (Therapeutic Use Exemption) application CE, prohibited list update CE (annual Jan 1 CE). Momenties tracks WADA annual prohibited list CE and ACL prevention program CE.",
  },
]

const studies = [
  {
    title: "RESTORE PRP Knee OA Phase 3 — NEJM 2024",
    detail: "RESTORE trial (NEJM 2024): leukocyte-poor PRP vs saline injection for knee osteoarthritis (symptomatic Kellgren-Lawrence grade 1-3). WOMAC pain score at 12 months: PRP -8.4 vs saline -6.5 (p=0.04). OMERACT-OARSI responder: PRP 48.7% vs saline 38.9% (p=0.03). CE: PRP preparation CE (leukocyte-poor vs leukocyte-rich CE — OA CE — LP-PRP preferred CE for joint CE), PRP injection technique CE (US-guided CE vs palpation CE — US guidance increases accuracy CE for knee CE), platelet concentration CE (target 3-5× baseline CE), anticoagulant protocol CE (stop aspirin 5 days CE, hold NSAIDs 72 hours CE before and after CE), repeat injection CE protocol CE (3-injection series CE vs single injection CE — RESTORE single CE), response durability CE (12-month CE — 24-month data pending CE).",
  },
  {
    title: "SCAT6 Concussion Tool 2023 — BJSM Validation CE",
    detail: "SCAT6 validation (BJSM 2023 consensus statement): updated sideline concussion assessment for athletes ≥13 years (Child SCAT6 for 8-12 years). Key SCAT6 changes CE: removed Maddocks questions from adult version (poor sensitivity CE), added cervical spine screen CE (new in SCAT6 CE — separate from concussion CE assessment CE), VOR/VMS (vestibular-ocular motor screen) CE added as red flag screen CE, tandem gait CE modified (4 steps back-to-back CE), new normative data CE (2023 sample CE — different cut scores CE vs SCAT5 CE). CE: SCAT6 vs ImPACT CE (different domains CE — SCAT6 CE sideline CE screening CE, neurocognitive test CE office CE), sideline CE interpretation CE (sensitivity 67% CE, specificity 91% CE at standard cut CE), child SCAT6 ceiling effect CE (pediatric CE differences CE — visual scoring CE), SCAT6 language-adapted versions CE (Spanish CE, French CE).",
  },
  {
    title: "CISG 2023 Consensus Statement CE — Return-to-Play Update",
    detail: "CISG 2023 6th consensus statement (BJSM 2023): individualized concussion management replaces rigid 6-step protocol for recreational athletes. Return-to-sport CE: GRTP CE updated (step 1 — symptom-limited daily activity CE, step 6 — full unrestricted return CE, minimum 24h per step CE maintained CE, symptom threshold CE — ≤2/10 CE severity to advance CE). Active rehabilitation CE: subsymptom threshold aerobic exercise CE — started early (24-48 hours CE after injury CE, not bed rest CE) — ACTIVE trial CE (aerobic exercise at 24h CE — 14 vs 17 days to recovery CE). Child/adolescent CE: no return same day CE — all ages CE. High school CE: school accommodation letter CE template CE. Psychological readiness CE: SCAT6 now includes psychological CE section CE (mandatory documentation CE). Vestibular CE: VOMS battery CE (smooth pursuit CE, horizontal saccade CE, NPC CE, VOR × CE, VOR tilt CE) — score ≥2 CE = vestibular dysfunction CE referral CE.",
  },
  {
    title: "UCL Internal Brace Repair — BIOME Trial CE (Am J Sports Med 2024)",
    detail: "BIOME trial 2-year follow-up (Am J Sports Med 2024): UCL repair with internal brace vs Tommy John reconstruction in pitchers. Return to same-level play: repair 86.8% vs reconstruction 69.4% (p=0.04). Return time: repair 9.1 vs reconstruction 20.3 months (p<0.001). Re-rupture rate: repair 13.2% vs reconstruction 4.6% (non-significant at 2 years). CE: internal brace candidate selection CE (acute UCL tear CE — not chronic attritional CE, ≥50% intact ligament CE on MRI CE), repair technique CE (DIschiavi CE — anchor-based CE, suture tape CE augmentation CE), accelerated rehab CE (throwing at 3 months CE vs 4-6 months reconstruction CE), re-rupture risk CE (higher repair CE — salvage to reconstruction CE options CE), Tommy John CE current outcomes CE (96% same-level return CE — gold standard CE still),",
  },
  {
    title: "WADA 2024 Prohibited List CE — New Additions",
    detail: "WADA 2024 Prohibited List effective January 1, 2024 CE: new additions and modifications CE. Hypoxia-inducible factor (HIF) stabilizers CE — added to Prohibited List (S2 CE — prolyl hydroxylase inhibitors CE — roxadustat CE, molidustat CE, vadadustat CE — erythropoietin production stimulation CE). SR9009/SR9011 CE (Rev-erbα agonists CE — gene doping CE precursors CE) — Schedule prohibited CE. Tramadol removed from Monitoring Program CE (no longer prohibited CE — 2023 reversal CE). TUE update CE: inhaled corticosteroid TUE CE threshold (budesonide ≤1600 mcg/day CE — no TUE required CE), inhaled beta-2 agonist TUE CE (salbutamol CE ≤1600 mcg/24h CE — no TUE CE). Team physician CE: annual WADA Prohibited List review CE mandatory CE, TUE application process CE, Athlete Biological Passport CE (ABP hematological CE — longitudinal hemoglobin and reticulocyte CE).",
  },
  {
    title: "ACL Return-to-Sport Criteria — AMSSM Position Statement 2024",
    detail: "AMSSM 2024 ACL return-to-sport position statement: no single criterion sufficient — multi-criteria battery required. CE: hop test battery CE (single-leg hop CE, triple hop CE, crossover hop CE, 6-meter timed hop CE — LSI ≥90% for all four CE), quadriceps strength CE (isokinetic testing CE — LSI ≥90% at 60°/s and 300°/s CE vs KT-1000 CE arthrometer LSI CE), psychological readiness CE (ACL-RSI score CE — 17-item questionnaire CE — ≥65 CE for clearance CE), time CE (minimum 9 months from surgery CE — 12 months CE for high-risk positions CE), functional movement screening CE, running volume progression CE. Re-injury risk CE: ACL re-tear rate 15-25% CE — highest in <20 years CE + return <9 months CE (40% re-tear CE). Contralateral ACL CE: secondary ACL prevention program CE post-clearance CE.",
  },
]

export default function SportsRehabilitationSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Sports Rehabilitation Specialists"
        title="One Calendar for ABPMR MOC, CAQSM Renewal, MSK Ultrasound CE, and WADA Updates"
        subtitle="From SCAT6 concussion protocol CE to PRP credentialing — Momenties tracks every obligation so your MOC cycle, fellowship CE, and procedure credentialing stay current."
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
              High-Yield CE for Sports Rehabilitation MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and guideline update before your ABPMR MOC cycle or CAQSM renewal.
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
              &ldquo;ABPMR MOC runs year-round, CAQSM renews every ten years but with CE requirements every year, AMSSM fellowship has annual CE, my MSK ultrasound scan count needs annual documentation, and WADA updates the prohibited list every January 1. Momenties is the only system that shows me all five timelines without me having to remember which portal each one lives in.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Emeka O., MD, FACSM, CAQSM
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Sports Medicine, Team Physician — Professional Sports Organization
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss a WADA prohibited list CE, CAQSM renewal, or MSK ultrasound credentialing deadline again"
        subtitle="Momenties keeps every CME credit, MSK ultrasound scan count, concussion protocol CE, ABPMR MOC cycle, and WADA annual update in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
