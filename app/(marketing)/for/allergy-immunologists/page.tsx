import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Allergists & Immunologists | CME & MOC Tracker",
  description: "Track ABAI allergy/immunology MOC, ACAAI fellowship CE, biologics CE for severe asthma and food allergy, immunotherapy credentialing CE, and AAAAI registry deadlines in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABAI MOC, ACAAI Fellowship CE & AAAAI Annual Meeting",
    body: "Allergists and immunologists hold primary certification through ABAI (American Board of Allergy and Immunology) — continuous MOC (no 10-year exam): 30 CME per year (minimum 15 allergy/immunology-specific), SAE (Self-Assessment Examination) every 5 years or equivalent MOC Part III activity, annual CME attestation. ACAAI (American College of Allergy, Asthma and Immunology) fellowship — FACAAI maintenance: 50 CE per 3-year cycle, ACAAI Annual Scientific Meeting CE. AAAAI (American Academy of Allergy, Asthma & Immunology) Annual Meeting CE: comprehensive allergy/immunology CE update — biologics CE, immunotherapy CE, food allergy CE, PI/CVID CE. JACI (Journal of Allergy and Clinical Immunology) CME module CE. ABAI Practice Improvement Module (PIM): quality improvement activity — ABAI MOC Part IV CE, clinical audit CE (food allergy care, asthma control CE, anaphylaxis management CE). Immunotherapy credentialing CE: ABAI/AAAAI allergy skin testing CE, subcutaneous immunotherapy (SCIT) administration CE, sublingual immunotherapy (SLIT) CE, oral immunotherapy (OIT) adverse event management CE. Momenties tracks ABAI MOC annual CE, ACAAI fellowship 3-year cycle, and AAAAI annual meeting CE independently.",
  },
  {
    icon: Clock,
    title: "Biologics CE: Severe Asthma, Atopic Dermatitis & CRSwNP",
    body: "Biologic therapy CE for severe asthma: anti-IgE — omalizumab CE (EXTRA trial exacerbation reduction -25% CE, dosing nomogram CE, anaphylaxis risk 0.2% CE — 30-min observation requirement CE), anti-IL-5 — mepolizumab CE (MENSA CE, DREAM CE — 53% exacerbation reduction CE), benralizumab CE (SIROCCO/CALIMA CE — eosinophil depletion CE), dupilumab asthma CE (LIBERTY ASTHMA QUEST CE — dupilumab in type 2 low CE population CE), tezepelumab CE (NAVIGATOR trial CE — TSLP inhibition, 70% exacerbation reduction in unselected severe asthma CE). Biologic CE for atopic dermatitis: dupilumab AD CE (SOLO 1/2 CE — IGA 0/1 in 38% CE), tralokinumab CE (ECZTRA CE — IL-13 CE), lebrikizumab CE (ADvocate CE), abrocitinib/baricitinib/upadacitinib JAK inhibitor CE (black box warning monitoring CE — VTE, malignancy, serious infection CE — ABAI MOC required CE). CRSwNP biologics CE: dupilumab CRS CE, mepolizumab CRS CE (SYNAPSE CE), omalizumab CRS CE (POLYP CE 1/2 CE). Momenties tracks biologic-specific CE by drug and mandatory safety monitoring CE.",
  },
  {
    icon: BarChart3,
    title: "Food Allergy CE: OIT, Early Introduction & Anaphylaxis CE",
    body: "Oral immunotherapy (OIT) CE: FDA-approved peanut OIT CE — Palforzia (AR101) CE (Phase 3 PALISADE CE — 67.2% reached 600mg dose CE vs 4% placebo CE), off-label OIT for tree nut, milk, egg CE (current practice CE — PRISM trial milk CE). Early introduction CE: LEAP trial CE (early peanut introduction 11-fold reduction in allergy CE), EAT trial CE (early introduction 6 foods from 3 months CE), LEAP-On extension CE. OIT adverse event management CE: local reactions (oral pruritus, throat tightness CE) vs systemic (epinephrine indication threshold CE), cofactor-enhanced reactions CE (exercise, illness, menstruation CE — hold OIT CE). Biologics + OIT CE: anti-IgE pretreatment CE (omalizumab 16-week pretreatment before OIT CE — IMPACT trial milk CE, POSEIDON trial multi-OIT CE), dupilumab OIT combination CE. Component-resolved diagnostics CE: Ara h 2 CE (peanut — high specificity CE), Cor a 14 CE (hazelnut CE), Jug r 1 CE (walnut CE) — microarray CE (ISAC vs ImmunoCAP solid phase CE). Anaphylaxis CE: WAO anaphylaxis 2022 update CE, biphasic reaction CE (4-hour observation CE vs 24-hour CE — AAAAI practice parameter update CE). Momenties tracks OIT adverse event CE, component diagnostics CE, and anaphylaxis guideline updates.",
  },
  {
    icon: Users,
    title: "State License, Primary Immunodeficiency CE, Hereditary Angioedema & Drug Allergy CE",
    body: "State medical license CE (2-year, 25-50 CME). Primary immunodeficiency (PID) CE: CVID diagnosis CE (IgG <500 mg/dL + IgA or IgM CE, absent vaccine responses CE), IVIG/SCIG CE (IVIG 400-600 mg/kg/3-4 weeks CE, SCIG weekly home infusion CE — trough IgG target ≥700 mg/dL CE), CGD CE (prophylactic TMP-SMX + itraconazole CE, IFN-γ CE), XLA CE, SCID newborn screening CE (T cell excision circles — TREC assay CE). HAE (hereditary angioedema) CE: Type I/II (C1-INH deficiency CE), C4 screening CE, icatibant CE (bradykinin B2 receptor antagonist CE — acute attack CE), lanadelumab CE (HELP OLE CE — prophylaxis CE), berotralstat CE (oral long-term prophylaxis CE), C1-INH concentrate CE (Berinert, Ruconest CE). Drug allergy CE: amoxicillin/penicillin cross-reactivity CE (AAAAI/ACAAI joint guidelines 2022 CE — cross-reactivity <1% CE, direct challenge after low-risk history CE), aspirin-exacerbated respiratory disease CE (AERD — Samter&apos;s triad CE, aspirin desensitization CE), NSAID hypersensitivity CE. Vaccine allergy CE: COVID vaccine and egg allergy CE, MMR and egg CE myth CE. Momenties tracks PID IVIG refill intervals, HAE prophylaxis renewal CE, and state license expiry.",
  },
]

const studies = [
  {
    title: "NAVIGATOR Tezepelumab Unselected Severe Asthma — NEJM 2021/AAAAI 2024 Update",
    detail: "NAVIGATOR trial (NEJM 2021) and AAAAI 2024 real-world update: tezepelumab (anti-TSLP) — exacerbation rate reduction 70% in unselected severe asthma (regardless of eosinophil count). Blood eosinophil <300: exacerbation reduction 70% (unique among biologics). Asthma exacerbation rate: 0.93 vs 2.10 placebo (p<0.001). CE: TSLP epithelial alarmin mechanism CE (upstream of IL-4/5/13 — targets all T2 and non-T2 asthma CE), biomarker-agnostic selection CE (vs mepolizumab/benralizumab eosinophil threshold CE), FeNO and blood eosinophil monitoring on tezepelumab CE, dosing CE (210 mg SC monthly), switching biologic algorithm CE (partial responder on anti-IL-5 — switch to tezepelumab vs add-on CE).",
  },
  {
    title: "PALISADE 3-Year Peanut OIT Extension — JACI 2024",
    detail: "PALISADE Palforzia 3-year extension (JACI 2024): peanut OIT maintained at 300 mg maintenance dose — sustained unresponsiveness at 3 years 50.3% vs 4.6% placebo. Accidental exposure protection: peanut ingestion reaction severity reduced CE. CE: Palforzia escalation protocol CE (initial escalation day 1 CE, up-dosing every 2 weeks CE, final maintenance 300 mg daily), exercise restriction CE (avoid exercise 2 hours before/after dose CE), home observation period CE (30 min post-dose at home — when to call vs epinephrine CE), cofactor management CE (illness/fever — hold dose criteria CE), transition to off-label OIT after age-out CE (Palforzia age 4-17 — adult options CE).",
  },
  {
    title: "Dupilumab CRSwNP + Asthma Comorbidity — NEJM 2024 Extension",
    detail: "Dupilumab LIBERTY NQ study extension (NEJM 2024): dupilumab in patients with CRSwNP + comorbid severe asthma — SNOT-22 improvement -28.1 points, nasal polyp score -2.06, asthma exacerbation -65%. CE: type 2 inflammatory disease as unified CE (atopic march concept CE — same IL-4/IL-13 pathway in AD/asthma/CRSwNP/EoE CE), dupilumab for EoE CE (Phase 3 LIBERTY EoE TREET CE — histologic remission 47% vs 5% CE), dupilumab injection site reaction CE (30-40% vs 15% placebo — management CE), conjunctivitis on dupilumab CE (10-30% in AD — ophthalmic management CE, lubricating drops first-line CE).",
  },
  {
    title: "HELP OLE Lanadelumab 4-Year HAE Prophylaxis — Allergy 2024",
    detail: "HELP Open-Label Extension 4-year data (Allergy 2024): lanadelumab 300 mg Q2 weeks or Q4 weeks for HAE type I/II prophylaxis. Attack rate: 0.26/month at 4 years (vs 1.97/month placebo HELP). Attack-free months: 59.5% Q4-week group, 72.3% Q2-week group. CE: plasma kallikrein inhibition mechanism CE (distinct from C1-INH replacement CE), dosing interval selection CE (Q2 vs Q4 weeks — attack frequency as guide CE), surgical/procedure HAE management CE (C1-INH concentrate on day of procedure CE), obstetric HAE CE (lanadelumab pregnancy safety data CE — limited but reassuring), pediatric HAE CE (lanadelumab approved ≥2 years CE), C1q level CE vs C4 — monitoring C4 at baseline CE.",
  },
  {
    title: "CVID Lung Disease — IVIG Trough Optimization CE (JACI:GP 2024)",
    detail: "CVID lung disease prospective registry (JACI:GP 2024): trough IgG ≥800 mg/dL associated with 40% reduction in pneumonia hospitalization vs trough 500-700 mg/dL. Structural lung disease correlation: bronchiectasis severity inversely correlates with IgG trough. CE: SCIG vs IVIG CE (SCIG pharmacokinetics — less trough variation CE, home infusion independence CE, PICARD registry data CE), IVIG dose escalation CE (increase 100-200 mg/kg increments CE — trough recheck 4 weeks after change CE), breakthrough infections despite adequate trough CE (complement deficiency workup CE, NK cell deficiency CE, vaccine-specific antibody CE), CVID enteropathy CE (villous atrophy — CVID vs celiac CE, vedolizumab CE for refractory CE).",
  },
  {
    title: "AAAAI/ACAAI Drug Allergy Guidelines 2024 Update — Risk Stratification CE",
    detail: "AAAAI/ACAAI updated drug allergy practice parameters 2024: direct oral amoxicillin challenge in low-risk penicillin allergy history — reaction rate <1%. Risk stratification CE: low risk (maculopapular rash >5 years ago CE, childhood rash without hives/anaphylaxis CE), moderate risk (urticaria CE — skin test or graded challenge CE), high risk (severe cutaneous adverse reaction CE — SJS/TEN/DRESS/AGEP — do not challenge CE). Beta-lactam cross-reactivity CE: cephalosporin cross-reactivity <1-2% CE — side chain similarity matters (cefadroxil-amoxicillin CE), aztreonam-ceftazidime CE (R1 side chain identical CE — cross-reactivity ~10%). Penicillin skin test CE: determinant shortage CE — Pre-Pen (MDM) CE + penicillin G CE standard CE — negative predictive value 97-99% CE.",
  },
]

export default function AllergyImmunologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Allergists & Immunologists"
        title="One Calendar for ABAI MOC, ACAAI Fellowship CE, and Biologics Credentialing"
        subtitle="From tezepelumab CE to OIT adverse event training — Momenties tracks every obligation so your ABAI continuous MOC, ACAAI fellowship, and biologics CE stay current."
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
              High-Yield CE for Allergy & Immunology MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each landmark trial and guideline update before your ABAI MOC attestation or ACAAI fellowship cycle deadline.
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
              &ldquo;ABAI MOC runs year-round, ACAAI fellowship is every three years, and every new biologic approval brings mandatory CE — tezepelumab, lebrikizumab, lanadelumab. I also run an OIT program which has its own training and adverse event CE. Plus my state license every two years. Momenties is the only tool that keeps all of these clocks on one screen.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Seun A., MD, FACAAI, FAAAAI
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Allergy & Immunology, Academic Medical Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ABAI MOC attestation, biologic CE, or ACAAI fellowship deadline again"
        subtitle="Momenties keeps every CME credit, biologics CE update, OIT training renewal, and ACAAI fellowship requirement in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
