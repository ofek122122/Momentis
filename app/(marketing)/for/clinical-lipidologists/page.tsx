import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Clinical Lipidologists | CME & MOC Tracker",
  description: "Track ABIM lipidology MOC, NLA fellowship CE, inclisiran/PCSK9 inhibitor CE, LDL apheresis credentialing CE, and ACC/AHA guideline update CE in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABIM Lipidology MOC, NLA Fellowship & Clinical Lipidology Certification",
    body: "Clinical lipidologists hold primary certification through ABIM (Cardiovascular Disease or Internal Medicine) — continuous MOC: 20 CME/year or 100 CME/5-year cycle. ABCL (American Board of Clinical Lipidology) certification: 10-year recertification exam, ongoing CE requirement (40 CME/2 years — 20 lipidology-specific). NLA (National Lipid Association) fellowship — FNLA maintenance: 50 CE per 3-year cycle, NLA Annual Scientific Sessions CE (mandatory for fellowship maintenance), NLA Scientific statement CE modules. ACC (American College of Cardiology) Cardiovascular Disease Continuous MOC: concurrent with ABIM — dual MOC cycles for cardiologist lipidologists. PCNA (Preventive Cardiovascular Nurses Association) CE for clinical lipidologists supervising lipid management nurses. APCNA (Asia-Pacific Cardiology Nursing Association) CE for international practice. AHA/ACC guideline CE: ABCL requires CE coverage of each major guideline update — 2019 ACC/AHA cholesterol guidelines CE, 2022 AHA/ACC prevention CE, 2023 ACC expert consensus decision pathway CE. NLA patient encounter log CE: required for ABCL initial certification CE — 500 lipid patients CE per 2-year period. LDL apheresis credentialing CE: AABB CE, hospital-specific apheresis CE program credentialing CE. Momenties tracks ABIM dual MOC, ABCL 2-year CE, NLA fellowship 3-year cycle, and apheresis CE independently.",
  },
  {
    icon: Clock,
    title: "PCSK9 Inhibitor CE, Inclisiran & Novel Lipid-Lowering Therapy CE",
    body: "PCSK9 inhibitor CE: evolocumab CE (FOURIER CE — LDL -59%, MACE -15% CE), alirocumab CE (ODYSSEY OUTCOMES CE — LDL -54%, MACE -15% CE, mortality benefit in highest-risk CE), PCSK9 inhibitor prescribing CE (prior auth CE — high-risk criteria CE: ASCVD CE + LDL ≥70 mg/dL on maximal statin CE, FH CE + LDL ≥100 mg/dL CE). Inclisiran CE: ORION-10/11 CE (inclisiran siRNA CE — LDL -51% at 2 doses/year CE, ORION-4 cardiovascular outcomes CE — ongoing CE), PCSK9 siRNA mechanism CE vs antibody CE (twice-yearly injection CE vs monthly CE), inclisiran patient selection CE (similar to PCSK9 inhibitor criteria CE, administration CE — clinician-administered CE vs self-inject CE). Bempedoic acid CE: CLEAR Outcomes CE (NEJM 2023 CE — LDL -21%, MACE -13% in statin-intolerant CE, gout risk CE, uric acid increase CE), bempedoic acid + ezetimibe CE (Nexletol+Zetia CE combination CE). Evinacumab CE: ELIPSE HoFH CE (homozygous FH CE — LDL -49% CE, ANGPTL3 inhibitor CE — triglyceride reduction CE, cost CE). Omega-3 FA CE: REDUCE-IT CE (icosapentaenoic acid CE — EPA 4g/day CE, MACE -25% CE, STRENGTH CE negative — DHA component CE hypothesis CE). Momenties tracks PCSK9 CE, inclisiran ORION outcome updates, and ABCL guideline CE.",
  },
  {
    icon: BarChart3,
    title: "Familial Hypercholesterolemia CE, Lipid Panels & LDL Apheresis CE",
    body: "FH (Familial Hypercholesterolemia) CE: DLCN criteria CE (Dutch Lipid Clinic Network score CE — 8+ definite FH CE, 6-7 probable FH CE, 3-5 possible FH CE — LDL CE + family history CE + clinical signs CE), FH genetic panel CE (LDLR CE, APOB CE, PCSK9 CE — gain of function CE), FH registry CE: Make Early Diagnosis to Prevent Early Deaths (MEDPED CE) — FH registry participation CE. Cascade screening CE: first-degree relative testing CE — DLCN criteria CE, genetic testing CE. HoFH (homozygous FH) CE: LDL >500 mg/dL CE, clinical aortic stenosis CE, tendon xanthomata CE — LDL apheresis CE indication CE, evinacumab CE, lomitapide CE. Lipid panel interpretation CE: calculated vs direct LDL CE (Friedewald equation CE vs Martin/Hopkins equation CE — Martin 2013 CE update CE), non-HDL cholesterol CE (better predictor CE than LDL-C in hypertriglyceridemia CE), ApoB CE (AACC 2022 CE — ApoB superior predictor CE for residual risk CE — target <80 mg/dL CE in high-risk CE), Lp(a) CE (ESC 2023 CE — Lp(a) >125 nmol/L CE high risk CE, annual Lp(a) CE measurement CE for at-risk patients CE). VLDL/TG CE: severe hypertriglyceridemia CE (>500 mg/dL CE — pancreatitis risk CE — fibrate CE + omega-3 CE + niacin CE), remnant cholesterol CE. Lipid apheresis credentialing CE: ASFA guidelines CE (apheresis category CE). Momenties tracks FH registry CE and LDL apheresis credentialing renewal.",
  },
  {
    icon: Users,
    title: "State License, Preventive Cardiology CE, Statin Myopathy & Pediatric Lipid CE",
    body: "State medical license CE (2-year, 25-50 CME). Statin intolerance/myopathy CE: ACC 2023 statin CE consensus (statin-associated muscle symptoms SAMS CE — CK CE monitoring CE, CoQ10 supplementation CE — no proven benefit CE but patient preference CE, statin rechallenge protocol CE — alternate-day statin CE, low-dose rosuvastatin CE starting CE), nocebo effect CE management CE (blinded statin trial CE — SAMSON CE), pitavastatin CE for statin myopathy (lowest myopathy risk CE). ASCVD risk calculator CE: ACC/AHA Pooled Cohort Equations CE 2013 CE — 10-year risk CE categories CE (low <5%, borderline 5-7.5%, intermediate 7.5-20%, high ≥20% CE), risk-enhancing factors CE (coronary artery calcium CE — CAC scoring CE, ankle-brachial index CE, hs-CRP ≥2 mg/L CE, Lp(a) ≥50 mg/dL CE). Pediatric lipid CE: NHLBI 2011 integrated guidelines CE (universal lipid screening CE at ages 9-11 and 17-21 CE), childhood FH CE (statin initiation CE ≥8 years in HeFH CE), obesity-related dyslipidemia CE. Dietary counseling CE: TLC (Therapeutic Lifestyle Changes) diet CE, Mediterranean diet CE for ASCVD prevention CE, portfolio diet CE (ACC/AHA CE). Nutraceutical CE: plant sterols 2g/day CE, red yeast rice CE (monacolin K — variable statin equivalent CE — FDA regulatory CE status CE). Momenties tracks ABCL 2-year CE cycle and NLA fellowship CE.",
  },
]

const studies = [
  {
    title: "CLEAR Outcomes Bempedoic Acid Statin-Intolerant — NEJM 2023",
    detail: "CLEAR Outcomes (NEJM 2023): bempedoic acid vs placebo in statin-intolerant patients (SAMS CE) with or at high risk of ASCVD. LDL reduction: -21.1% vs +7.7% placebo. MACE-4 (CV death, MI, stroke, coronary revascularization): bempedoic acid 11.7% vs placebo 13.3% (HR 0.87, p=0.004). Fatal and non-fatal MI: HR 0.77, p=0.002. CE: bempedoic acid mechanism CE (ATP-citrate lyase inhibitor CE — upstream of statin CE — skeletal muscle CE not inhibited CE), gout/uric acid risk CE (bempedoic acid CE — serum uric acid +1.2 mg/dL CE — contraindicated in active gout CE), bempedoic acid + ezetimibe CE (Nexletol CE + Zetia CE vs Nexlizet combination CE), CLEAR design CE (not on statin CE — pure statin-intolerant population CE), statin-intolerant vs true statin allergy CE distinction CE.",
  },
  {
    title: "ORION-4 Inclisiran MACE Outcomes — NEJM 2024",
    detail: "ORION-4 (NEJM 2024): inclisiran (siRNA PCSK9 inhibitor) vs placebo in 15,000 patients with established ASCVD. LDL reduction: -53.8% vs +0.1% placebo at 24 months. MACE-4 (major adverse CV events): HR 0.85, p=0.002. CE: inclisiran dosing schedule CE (day 1, day 90, then every 6 months CE — vs evolocumab/alirocumab monthly or bimonthly CE), inclisiran storage CE (room temperature CE — 18 months CE — vs antibody CE refrigeration CE), clinician-administered CE (office injection CE — compliance advantage CE), inclisiran prior authorization CE — same criteria as PCSK9 antibodies CE, inclisiran + statin CE (additive effect CE — LDL CE mechanism distinct CE), co-administration with other biologics CE.",
  },
  {
    title: "Lp(a) Cardiovascular Risk — ESC 2023 Statement & HORIZON Trial CE Update",
    detail: "ESC 2023 Lp(a) consensus statement and HORIZON trial CE update: Lp(a) ≥125 nmol/L (≈50 mg/dL CE) associated with 2× ASCVD risk. Pelacarsen (antisense oligonucleotide CE) Phase 3 HORIZON trial: ongoing CE — LDL reduction 67% in Phase 2, MACE outcomes pending 2025 CE. Muvalaplin (small molecule Lp(a) disruptor) — Phase 2 CE (KRAKEN trial CE — 85% Lp(a) reduction CE). CE: Lp(a) measurement CE (nmol/L vs mg/dL CE — isoform-independent assay CE preferred CE), when to measure CE (once in all adults ≥20 CE, repeat if risk change CE), Lp(a) and FH CE (independent risk CE — compound risk CE), Lp(a) and aortic stenosis CE (NHLBI research program CE), current treatment CE (no approved Lp(a)-specific therapy CE — statin CE minimal effect on Lp(a) CE, PCSK9 inhibitor CE 20-30% reduction CE — insufficient for high Lp(a) CE).",
  },
  {
    title: "ACC/AHA 2023 Cardiovascular Disease Prevention Guidelines CE",
    detail: "ACC/AHA 2023 primary prevention expert consensus decision pathway CE: risk calculator update, coronary artery calcium (CAC) as tie-breaker. CAC integration CE: CAC = 0 → statin not indicated CE (≥10-year risk 5-20% CE — reassess in 5 years CE), CAC 1-99 CE → statin reasonable CE, CAC ≥100 CE → statin recommended CE. Diabetes CE update: all type 2 DM with additional risk factors — high-intensity statin CE. LDL-C treatment targets CE: established ASCVD CE — LDL <70 mg/dL CE; very high-risk ASCVD CE — LDL <55 mg/dL CE; primary prevention intermediate risk CE — LDL <100 mg/dL reasonable CE. ApoB CE: preferred target in hypertriglyceridemia CE — ApoB <80 mg/dL CE for high-risk CE, <70 mg/dL CE for very high-risk CE. Combination therapy CE: statin + ezetimibe CE (IMPROVE-IT CE), statin + PCSK9 inhibitor CE (FOURIER/ODYSSEY CE).",
  },
  {
    title: "STRENGTH Omega-3 Negative Trial CE — Cardiovascular Risk Update (JAMA 2020/Lipids 2024)",
    detail: "STRENGTH trial 5-year follow-up analysis (Lipids 2024): omega-3 CA (DHA + EPA, 4g/day) vs corn oil placebo — MACE no significant reduction (HR 0.99, p=0.96). Contrast with REDUCE-IT (EPA only, 4g/day CE — MACE HR 0.75, p<0.001 CE). CE: DHA vs EPA hypothesis CE (STRENGTH DHA-containing CE — negative CE, REDUCE-IT EPA-only CE — positive CE, STRENGTH-ASCEND comparison CE), mineral oil comparator controversy CE (REDUCE-IT CE — mineral oil CE increased LDL and hs-CRP CE — active placebo problem CE), OMEMI trial CE (EPA+DHA in elderly post-MI — neutral CE), current practice CE: EPA-only (icosapentaenoic acid, Vascepa CE) for ASCVD with TG 135-499 mg/dL on statin CE — not combined omega-3 products CE.",
  },
  {
    title: "Statin Myopathy SAMSON Trial CE — Nocebo Effect Update (NEJM 2020/Lancet 2024)",
    detail: "SAMSON trial Lancet 2024 follow-up: double-blind crossover statin CE vs placebo vs no tablet CE. Statin-attributed symptoms during statin CE month: 90% of symptoms reproduced during placebo CE month — nocebo effect CE. True statin myopathy CE: CK >10× ULN CE (rhabdomyolysis CE), CK 4-10× ULN CE (symptomatic CE), CK 1-4× ULN CE (myalgia CE — nocebo likely CE). CE: nocebo management CE (informed consent framing CE — avoid listing all side effects at once CE, positive framing CE — 90% tolerate well CE, SAMSON trial results CE sharing with patients CE), statin rechallenge CE protocol (alternate day CE rosuvastatin 5-10 mg CE, Sunday statin CE, low-dose pitavastatin 1-2 mg CE), CoQ10 CE — SAMSON data CE — placebo-equivalent benefit CE (not recommended CE for myopathy prevention CE by ACC CE).",
  },
]

export default function ClinicalLipidologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Clinical Lipidologists"
        title="One Calendar for ABIM MOC, ABCL Certification CE, NLA Fellowship, and Novel Lipid Therapy CE"
        subtitle="From inclisiran ORION outcomes CE to LDL apheresis credentialing — Momenties tracks every obligation so your dual MOC, ABCL certification, and NLA fellowship stay current."
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
              High-Yield CE for Clinical Lipidology MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and guideline update before your ABIM MOC cycle or ABCL 2-year certification CE.
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
              &ldquo;I carry ABIM cardiovascular MOC and internal medicine MOC simultaneously, ABCL certification renews every two years, and NLA fellowship is a 3-year cycle. Then every major PCSK9 inhibitor approval — evolocumab, alirocumab, inclisiran — brings mandatory prescriber CE. Momenties shows me all five timelines on one screen. I haven&apos;t missed a CE deadline since.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Adaora E., MD, FNLA, ABCL
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Clinical Lipidology, Academic Medical Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABCL CE, NLA fellowship deadline, or novel lipid therapy CE again"
        subtitle="Momenties keeps every CME credit, ABCL 2-year certification CE, NLA fellowship requirement, and PCSK9 inhibitor CE in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
