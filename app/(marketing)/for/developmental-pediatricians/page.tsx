import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Developmental-Behavioral Pediatricians | CME & MOC Tracker",
  description: "Track ABPDN board CE, ABP MOC, SDBP fellowship CE, autism diagnostic credentialing CE, ADOS-2 training CE, and ADHD guideline update CE in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABPDN Board CE, ABP MOC & SDBP Fellowship CE",
    body: "Developmental-behavioral pediatricians hold primary certification through ABPDN (American Board of Pediatrics — Developmental-Behavioral Pediatrics subspecialty): ABPDN initial certification 10-year exam, continuous MOC maintenance — 30 CME/year (20 DBP-specific). ABP (American Board of Pediatrics) general pediatrics MOC: concurrent continuous MOC (dual cycle — pediatrics + DBP subspecialty), MOCA-Peds (Maintenance of Certification for Pediatrics) — continuous assessment, 30 questions/year, points-based. SDBP (Society for Developmental and Behavioral Pediatrics) fellowship CE: SDBP Annual Meeting CE (annual — ASD CE, ADHD CE, learning disability CE, feeding CE), SDBP journal article CE modules. ABP Quality Improvement CE: QIDA (Quality Improvement in Developmental Assessments) module CE — annual. SPR (Society for Pediatric Research) CE for academic DBP specialists. AAP (American Academy of Pediatrics) Section on Developmental and Behavioral Pediatrics CE: pediaLink CE modules. BHI (Behavioral Health Integration) CE for DBP specialists in primary care consultation roles. Autism specialty certification CE: BACB (Board Certified Behavior Analyst) supplemental CE for DBP specialists co-managing ABA. Momenties tracks ABPDN MOC, ABP dual MOC, and SDBP fellowship CE independently.",
  },
  {
    icon: Clock,
    title: "ADOS-2, ADI-R & Autism Diagnostic Credentialing CE",
    body: "ADOS-2 (Autism Diagnostic Observation Schedule, 2nd Edition) credentialing CE: WPS (Western Psychological Services) ADOS-2 training CE — initial 2-day workshop CE, annual reliability maintenance CE (interrater reliability ≥80% required for clinical use), online recalibration CE (module 1-4 CE, Toddler Module CE), ADOS-2 administration CE (comparision score CE — CSS 1-10 CE, Algorithm CE vs comparison score CE). ADI-R (Autism Diagnostic Interview-Revised) CE: WPS training workshop CE — interviewer reliability CE. Vineland Adaptive Behavior Scales CE: Vineland-3 CE (norm-referenced adaptive behavior CE — communication CE, daily living CE, socialization CE — ASD support level CE). DSM-5-TR ASD diagnostic CE: 2022 DSM-5-TR update CE (social communication deficit CE Level 1-2-3 CE, restricted/repetitive behavior CE, no longer separate Asperger CE), ICD-11 CE (autism spectrum disorder CE vs ASD without intellectual disability CE). Bayley Scales CE: Bayley-4 CE (cognitive CE, language CE, motor CE, social-emotional CE, adaptive behavior CE — 16 days to 42 months CE), Bayley-III vs Bayley-4 normative update CE. M-CHAT-R/F toddler screening CE: SDBP 2023 CE (revised M-CHAT CE — follow-up interview CE necessity CE, 18-month and 24-month integrated CE). Momenties tracks ADOS-2 reliability maintenance CE and Bayley recertification.",
  },
  {
    icon: BarChart3,
    title: "ADHD CE: Diagnosis, Medication Management & AAP 2023 Guideline",
    body: "AAP 2023 ADHD clinical practice guideline CE: expanded age range CE (4-18 years — preschool CE now included), multi-informant CE (teacher rating scales mandatory CE — Vanderbilt CE, Conners CE), comorbidity assessment CE (anxiety CE, mood CE, learning disability CE — mandatory DSM-5-TR criteria CE), ADHD rating scale reliability CE (NICHQ Vanderbilt CE). ADHD pharmacotherapy CE: stimulant CE — methylphenidate CE (immediate release CE vs extended release CE — Concerta CE, Vyvanse CE), amphetamine CE (Adderall XR CE, Mydayis CE), stimulant cardiovascular CE (baseline ECG CE — when indicated CE, AAP guidance CE), non-stimulant CE — atomoxetine CE (ADHD + anxiety CE), viloxazine CE (Qelbree CE — 2021 FDA approval CE), clonidine ER CE, guanfacine ER CE. Preschool ADHD CE: AAP 2023 CE — behavior therapy first in <6 years CE (parent training CE — PCIT CE, Triple P CE), methylphenidate CE for severe preschool ADHD CE (off-label safety data CE). ADHD in ASD CE: ADHD-ASD co-occurrence 30-50% CE, stimulant tolerability CE (irritability CE — dose reduction CE). Long-acting injectable for ADHD CE: Azstarys CE (serdexmethylphenidate + dexmethylphenidate CE — 2021 CE). Momenties tracks AAP guideline updates and ADHD CE by drug class.",
  },
  {
    icon: Users,
    title: "State License, Feeding Disorder CE, Learning Disability & IEP Assessment CE",
    body: "State medical license CE (2-year, 25-50 CME). Feeding and eating disorder CE: ARFID (Avoidant/Restrictive Food Intake Disorder) CE — SDBP 2022 CE (ARFID vs food selectivity in ASD CE, texture sensitivity CE, weight-based criteria CE), tube feeding weaning CE (behavioral feeding therapy CE — GET Permission CE, Chatoor CE), NG/G-tube management CE. Learning disability CE: dyslexia CE (phonological awareness CE — RAVE-O CE, Wilson Reading CE), dyscalculia CE, DLD (Developmental Language Disorder) CE — ASHA diagnostic criteria CE, CELF-5 CE (Clinical Evaluation of Language Fundamentals-5 CE). IEP/educational evaluation CE: IDEA 2024 update CE — evaluation timeline CE (60-day federal CE), eligibility categories CE (autism CE, SLD CE, developmental delay CE — age cutoff CE), extended evaluation CE (DBP role in IEP CE, school-based CE vs clinical CE distinction CE), Section 504 accommodation CE vs IEP services CE. Developmental surveillance CE: AAP periodic developmental surveillance CE (9, 18, 24/30 months — referral thresholds CE), early intervention CE (Part C CE — IDEA age 0-3 CE, referral criteria CE). Telehealth developmental assessment CE: SDBP 2022 CE (virtual ADOS-2 CE — Tele-ASD-Peds screening CE, limitations CE). Momenties tracks IEP assessment cycles and feeding therapy renewal CE.",
  },
]

const studies = [
  {
    title: "AAP 2023 ADHD Clinical Practice Guideline CE — Age 4-18 Update",
    detail: "AAP 2023 ADHD CPG update (Pediatrics 2023): formal expansion to ages 4-18 (previously 4-17). Preschool ADHD: behavior therapy FIRST (PCIT or Triple P CE), pharmacotherapy second (FDA indication CE). Adolescent CE: transition planning CE mandatory (18+ care CE), driving safety CE, college accommodations CE. Key changes CE: comorbidity screening at every ADHD diagnosis CE (anxiety CE, depression CE, learning disability CE, sleep disorder CE), telehealth ADHD evaluation CE (multi-informant challenge CE — teacher rating scale CE via electronic portal CE), treatment response monitoring CE (every 3-6 months CE once stable — not annually CE), ADHD in girls CE (inattentive presentation CE — underdiagnosed CE), ADHD in racial/ethnic minorities CE (cultural considerations CE — lower diagnosis rate CE despite equal prevalence CE).",
  },
  {
    title: "ADOS-2 Comparison Score Validity — Calibrated Severity Score Update CE (J Autism 2024)",
    detail: "ADOS-2 CSS calibrated severity score update (J Autism Dev Disord 2024): CSS re-normed with expanded sample (n=8,400) — modules 1-4 updated. CSS 7-10 CE (autism CE), CSS 4-6 CE (autism spectrum CE), CSS 1-3 CE (below cut CE). Significant change: Module 1 (non-verbal) cut-point recalibration — previous algorithms overidentified in young children with global developmental delay. CE: ADOS-2 administration reliability CE (interrater reliability maintenance ≥80% CE), ADOS-2 vs CARS-2 CE (complementary CE — CARS-2 CE severity quantification CE), ADOS-2 in minimally verbal adults CE — Module 1 adapted CE, ADOS-2 + ADI-R concordance CE (gold standard CE combination CE), ADOS-2 limitations CE (not diagnostic standalone CE — clinical judgment CE).",
  },
  {
    title: "DSM-5-TR ASD Updates — ICD-11 Alignment CE (SDBP 2022 / AAIDD 2024)",
    detail: "DSM-5-TR (2022) ASD CE: removed gender identity text corrections, updated language CE (autistic person vs person with autism — person-first vs identity-first CE guidance CE). ICD-11 ASD alignment 2024 CE: WHO ICD-11 ASD code — 6A02 CE, intellectual development disorder separation CE (previously merged CE), functional language CE distinction (autism without/with intellectual disability CE), concordance table CE (DSM-5 vs ICD-11 vs DSM-IV CE). Clinical implication CE: school eligibility CE (ICD-11 vs DSM-5 for international families CE), insurance coding CE (ICD-10-CM F84.0 CE — unchanged for billing CE, ICD-11 transition CE timeline CE), support level CE documentation (Level 1-2-3 CE — IEP eligibility CE), co-occurring conditions CE — separated from ASD core in DSM-5-TR CE.",
  },
  {
    title: "ARFID Treatment — SPACE-ARFID Family Therapy CE (JCPP 2024)",
    detail: "SPACE-ARFID (Supportive Parenting for Anxious Childhood Emotions — ARFID) trial (JCPP 2024): family-based CBT for ARFID vs standard nutritional counseling. Functional impairment improvement: SPACE-ARFID 68% vs standard 34% (p=0.003). Food variety: SPACE-ARFID +8.3 accepted foods vs +2.1 standard at 16 weeks. CE: ARFID subtype CE (limited variety CE, sensory sensitivity CE, fear of aversive consequences CE — vomiting CE, choking CE — different treatment CE), ARFID + ASD CE (sensory profile CE — feeding occupational therapy CE, SOS approach CE, sequential oral sensory CE), ARFID vs anorexia nervosa CE (weight CE vs fear of weight gain CE — distinction CE), DBP role CE (diagnosis CE, coordinating CE with feeding therapy team CE, tube weaning CE oversight CE).",
  },
  {
    title: "ASD Pharmacotherapy — Cariprazine, Brexpiprazole CE (J Child Adolesc Psychopharmacol 2024)",
    detail: "Emerging ASD pharmacotherapy CE (J Child Adolesc Psychopharmacol 2024 review): cariprazine (Vraylar) CE — Phase 2 ASD irritability data (50% responder rate, EPS profile CE), brexpiprazole (Rexulti) CE — BEACON trial ASD irritability (ABC-I improvement -11.2 vs -5.3 placebo CE). CE: FDA-approved ASD irritability CE — risperidone CE (Risperdal CE, 2006 CE), aripiprazole CE (Abilify CE, 2009 CE) — first-line CE. Off-label CE: SSRIs in ASD CE (minimal evidence for core symptoms CE — fluoxetine CE OCD-like behaviors CE), NAC (N-acetylcysteine) CE — limited evidence CE, bumetanide CE — European trial CE (JAMA Psychiatry 2023 negative CE). Melatonin CE: MAST trial CE (prolonged-release melatonin CE — PedSleep CE — significant sleep improvement CE). ASD psychopharmacology CE: monitoring CE (weight CE, glucose CE, lipid panel CE for atypical antipsychotics CE — annual CE).",
  },
  {
    title: "Early Intensive Behavioral Intervention Long-Term CE — Pediatrics 2024 Systematic Review",
    detail: "EIBI systematic review (Pediatrics 2024): 28 RCTs — EIBI (applied behavior analysis, 20-40 hours/week CE) vs control for ASD (ages 18 months to 5 years). Language outcomes: EIBI +8.3 standardized units at 24 months (p<0.001). Adaptive behavior: EIBI +6.4 units. IQ: EIBI +7.0 units. CE: ABA intensity CE (20 vs 40 hours CE — dose-response CE), EIBI start age CE (before 30 months CE — optimal window CE, 18-24 months CE first choice CE), naturalistic developmental behavioral intervention CE (NDBI CE — PRT CE, JASPER CE, ESDM CE — more parent-friendly CE), DBP oversight CE (ABA programming CE supervision CE — medical CE vs behavioral CE role delineation CE), school-based vs clinic-based ABA CE, insurance authorization CE documentation CE.",
  },
]

export default function DevelopmentalPediatriciansPage() {
  return (
    <>
      <PageHero
        eyebrow="For Developmental-Behavioral Pediatricians"
        title="One Calendar for ABPDN MOC, SDBP Fellowship CE, and ADOS-2 Reliability CE"
        subtitle="From ADHD guideline updates to ADOS-2 annual reliability maintenance — Momenties tracks every obligation so your ABPDN MOC, SDBP fellowship, and diagnostic credentialing stay current."
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
              High-Yield CE for Developmental-Behavioral Pediatrics MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each guideline update and diagnostic tool revision before your ABPDN MOC cycle or SDBP fellowship deadline.
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
              &ldquo;ABPDN MOC and general ABP MOC run on separate cycles. SDBP fellowship has annual CE, ADOS-2 reliability requires annual recalibration, and AAP updates ADHD and autism guidelines faster than I can track. Momenties is the only tool that keeps all five timelines visible without me logging into five separate portals.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Taiwo A., MD, FAAP
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Developmental-Behavioral Pediatrics, Academic Children&apos;s Hospital
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an ADOS-2 reliability CE, ABPDN MOC window, or AAP guideline update again"
        subtitle="Momenties keeps every CME credit, diagnostic credentialing CE, SDBP fellowship requirement, and ABPDN MOC cycle in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
