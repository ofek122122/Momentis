import type { Metadata } from "next"
import { Shield, Clock, BarChart3, Users } from "lucide-react"
import { PageHero } from "@/components/marketing/PageHero"
import { Reveal } from "@/components/marketing/Reveal"
import { CTA } from "@/components/marketing/CTA"

export const metadata: Metadata = {
  title: "Momenties for Maternal-Fetal Medicine Specialists | CME & MOC Tracker",
  description: "Track ABOG MFM subspecialty MOC, SMFM fellowship CE, ultrasound credentialing CE, cell-free DNA screening CE, and SMFM/ACOG guideline CE in one HIPAA-aware calendar.",
}

const pillars = [
  {
    icon: Shield,
    title: "ABOG MFM Subspecialty MOC & SMFM Fellowship CE",
    body: "Maternal-fetal medicine specialists hold primary certification through ABOG (American Board of Obstetrics and Gynecology) — MFM subspecialty continuous MOC: ABOG OB/GYN MOC + MFM subspecialty MOC (separate continuous assessment, 30 CME/year — 20 MFM-specific), ABOG Voluntary Review of Education and Practice (VREP) module (annual PIM equivalent CE — MFM quality improvement CE). SMFM (Society for Maternal-Fetal Medicine) fellowship CE: SMFM Annual Meeting CE (Pregnancy Meeting CE — annual, mandatory for fellowship maintenance), SMFM Clinical Bulletin CE (monthly education module CE), SMFM Consult Series CE. ACOG (American College of Obstetricians and Gynecologists) practice bulletins CE: mandatory MFM review CE — new and revised bulletins published monthly (MFM specialty topics CE). ISUOG (International Society of Ultrasound in Obstetrics and Gynecology) CE: annual meeting CE, ISUOG practice guidelines CE. AIUM (American Institute of Ultrasound in Medicine) accreditation CE: obstetric ultrasound practice accreditation renewal every 3 years. Fetal echocardiography credentialing CE: ASE/ISUOG fetal echo CE — ICC (ISUOG Certification in Fetal Ultrasound) CE. Momenties tracks ABOG MFM MOC, SMFM fellowship, and AIUM accreditation renewal independently.",
  },
  {
    icon: Clock,
    title: "Prenatal Screening CE: cfDNA, Anatomy Survey & Fetal Echo CE",
    body: "Cell-free DNA (cfDNA) screening CE: ACOG/SMFM 2023 guidelines CE (cfDNA offered to all pregnancies CE — not just high risk CE, positive predictive value CE — 21 vs 18 vs 13 CE, PPV table CE, reporting conventions CE), cfDNA for microdeletions CE (limited evidence — 22q11 CE), cfDNA failure rate CE (low fetal fraction <4% CE — redraw vs proceed with serum screen CE), expanded cfDNA panels CE (copy number variants CE — non-reportable at 2023 guideline standard CE). First trimester combined screening CE: NT measurement CE (FMF certificate required CE — CRL 45-84mm CE, NT ≥3.0mm CE threshold), nasal bone CE, tricuspid regurgitation CE, ductus venosus a-wave CE. Anatomy survey CE: AIUM/ACOG standard anatomy survey CE (18-20 weeks — 70+ structures CE), soft markers CE — pyelectasis CE, echogenic bowel CE, choroid plexus cyst CE (isolated CE — chromosomal risk CE versus combined CE), SMFM 2021 soft marker update CE. Fetal echocardiography CE: ISUOG 2023 cardiac screening CE (5-chamber view CE), ASE pediatric echo CE, fetal arrhythmia CE (SVT vs complete heart block CE — maternal SSA/SSB antibody CE). Placenta assessment CE: placenta accreta spectrum CE (SMFM 2020/2023 CE — MRI CE, MAP CE, CSP CE).",
  },
  {
    icon: BarChart3,
    title: "Preterm Birth Prevention CE, Hypertensive Disorders & Genetic CE",
    body: "Preterm birth prevention CE: progesterone CE — 17-OHPC PROLONG trial CE (no benefit in low-risk CE), vaginal progesterone OPPTIMUM trial CE, SMFM 2022 updated guidance CE (short cervix ≤25mm — vaginal progesterone CE; prior PTB + short cervix — cerclage CE; prior PTB alone — 17-OHPC no longer recommended CE), cerclage CE (McDonald vs Shirodkar CE, cervical length threshold CE, rescue cerclage CE). Hypertensive disorders CE: ACOG 2023 hypertension in pregnancy CE — gestational hypertension CE, preeclampsia CE without severe features CE, severe hypertension threshold CE (≥160/110 on two occasions CE — IV labetalol CE vs IV hydralazine CE vs oral nifedipine CE), magnesium sulfate CE (seizure prophylaxis dosing CE, toxicity monitoring CE). Low-dose aspirin CE: USPSTF 2023 preeclampsia prevention CE (81mg/day starting 12 weeks CE — moderate/high risk criteria CE). Fetal growth restriction CE: SMFM 2020 FGR definition CE (EFW <10th percentile CE — SGA vs FGR CE distinction CE), Doppler surveillance CE (umbilical artery CE, MCA PSV CE, ductus venosus CE), SMFM delivery timing CE. Genetic CE: ACMG 2023 expanded carrier screening CE — 280+ conditions CE, prenatal exome sequencing CE (SMFM 2023 consult CE — anomalous fetus CE), Bayesian inheritance CE. Momenties tracks guideline update CE by SMFM bulletin date.",
  },
  {
    icon: Users,
    title: "State License, Fetal Surveillance CE, Multiple Gestation & Critical Care CE",
    body: "State medical license CE (2-year, 25-50 CME). Antenatal fetal surveillance CE: ACOG PB 145 2023 update CE — NST CE (reactive CE — 2 accelerations ≥15 bpm × 15 sec CE), BPP CE (Manning BPP CE — 8 normal CE, modified BPP CE), contraction stress test CE, SMFM 2023 antenatal surveillance consult CE. Multiple gestation CE: SMFM/ACOG 2023 di/di twin CE (delivery 38 weeks CE), mo/di twin CE (TTTS screening CE — weekly ultrasound 16-26 weeks CE), TTTS staging CE (Quintero I-V CE), laser treatment CE (fetoscopic laser photocoagulation CE — SMFM consult CE), mo/mo twin CE (delivery 32-34 weeks CE). Obstetric critical care CE: SMFM COVID-19 and pregnancy CE (NSAID avoidance CE, vaccination CE), amniotic fluid embolism CE (SMFM management algorithm CE), HELLP syndrome CE (platelet threshold for delivery CE), peripartum cardiomyopathy CE (SMFM consult CE). Ultrasound credentialing CE: AIUM obstetric standard CE, Maternal-Fetal Medicine Fellowship Program Director survey CE (program requirements CE). Fetal intervention CE: spina bifida in-utero repair CE (MOMS trial CE — 30% ambulatory improvement CE), laser photocoagulation CE, intracardiac intervention CE. Momenties tracks SMFM bulletin CE, AIUM accreditation renewal, and fetal surveillance guideline updates.",
  },
]

const studies = [
  {
    title: "PREVENT Trial Aspirin 150mg Preeclampsia Prevention — NEJM 2024",
    detail: "PREVENT trial (NEJM 2024): aspirin 150mg/day from 11-14 weeks to 36 weeks in high-risk women (first-trimester combined screen ≥1:100 risk). Preterm preeclampsia: aspirin 2.1% vs placebo 4.5% (relative risk 0.47, p<0.001). Term preeclampsia: no significant difference. CE: 150mg vs 81mg CE (PREVENT used 150mg — FDA-approved 81mg CE, European practice 150mg CE, NNT comparison CE), Doppler-based risk stratification CE (mean arterial pressure CE, uterine artery pulsatility index CE, PAPP-A CE — combined screening CE for preeclampsia), aspirin timing CE (before 16 weeks for benefit CE), low-dose aspirin safety CE (no increase in hemorrhage risk CE), discontinuation at 36 weeks CE.",
  },
  {
    title: "SMFM Short Cervix and Progesterone 2022 Update CE — Obstetrics 2023 Validation",
    detail: "SMFM 2022 progesterone update validation (Obstetrics 2023): vaginal progesterone in singleton pregnancy with cervical length ≤25mm on transvaginal ultrasound — preterm birth <34 weeks reduced 45%. 17-OHPC with prior PTB: PROLONG trial invalidated prior data — no benefit in unselected prior PTB CE. CE: progesterone type CE (vaginal 200mg daily CE vs 90mg gel CE — clinical equivalence CE), cervical length screening CE (universal vs high-risk CE — SMFM 2022 recommends universal singleton screening 18-24 weeks CE), cerclage indication CE (prior PTB + TVU CL <25mm CE — cerclage superior to progesterone alone CE), cerclage technique CE (McDonald suture placement CE, Shirodkar CE), rescue cerclage CE (painless cervical dilation ≤24 weeks CE).",
  },
  {
    title: "Prenatal Exome Sequencing — NEJM 2024 Anomalous Fetus CE",
    detail: "Prenatal exome sequencing (PES) meta-analysis (NEJM 2024): additional diagnostic yield of PES over chromosomal microarray in anomalous fetus — 8.2% additional diagnoses in structurally normal karyotype/CMA-negative fetuses. CE: SMFM 2023 PES consult CE (PES offered when fetal anomaly + negative microarray CE), variant interpretation CE (ACMG/AMP 5-tier classification CE — pathogenic/likely pathogenic CE), incidental findings CE (ACMG secondary findings list CE — prenatal context CE — offer vs decline CE), PES variants of uncertain significance CE (VUS — genetic counseling CE), whole genome sequencing vs whole exome CE (turnaround time CE — prenatal 7-14 days CE), RNA-seq adjunct CE.",
  },
  {
    title: "TTTS Laser Photocoagulation — 5-Year Neurodevelopmental Outcomes CE (AJOG 2024)",
    detail: "EUROFOETUS 5-year follow-up and TTTS Consortium 2024 (AJOG 2024): fetoscopic laser photocoagulation vs amnioreduction for TTTS stage II-IV — neurological intact survival: laser 60.4% vs amnioreduction 52.0% (p=0.007). Cerebral palsy: laser 4.9% vs amnioreduction 7.3%. CE: TTTS staging CE (Quintero I — DA in donor CE, II — absent DA CE, III — abnormal Doppler CE, IV — hydrops CE, V — fetal death CE), laser technique CE (selective vs non-selective CE, Solomon technique CE — v-shaped anastomotic occlusion CE), TAPS post-laser CE (twin anemia polycythemia sequence CE — MCA PSV screening post-laser CE weekly × 4 weeks CE), TOPS post-laser CE (twin oligohydramnios polyhydramnios sequence CE — persistent after laser CE), stage I management CE — expectant vs laser controversy CE.",
  },
  {
    title: "Placenta Accreta Spectrum SMFM 2023 Consult CE — MRI Accuracy Update",
    detail: "SMFM 2023 PAS consult (Am J Obstet Gynecol 2023): MRI sensitivity 94% for PAS in suspected cases (ultrasound suspicion + prior uterine surgery). CE: PAS risk factors CE (prior cesarean + anterior placenta previa — risk table CE: 1 prior CS 3%, 2 CS 11%, 3 CS 40%, 4 CS 61%), ultrasound criteria CE (placental lacunae CE, loss of retroplacental clear space CE, bridging vessels CE, bladder wall interruption CE), MRI indication CE (posterior placenta — obscured on US CE, suspected parametrial invasion CE), delivery planning CE (planned delivery 34-35 weeks CE for PAS, multidisciplinary surgical team CE — urology CE + vascular surgery CE), cell salvage CE, SMFM UAB algorithm CE (balloon occlusion vs immediate hysterectomy CE).",
  },
  {
    title: "ACOG Severe Hypertension Treatment Threshold — N Engl J Med 2023 CHAP Trial",
    detail: "CHAP trial (NEJM 2022/ACOG 2023 integration): treatment of mild chronic hypertension (BP ≥140/90) in pregnancy — composite adverse outcomes (preeclampsia with severe features + preterm birth + placental abruption + fetal/neonatal death): treated 30.2% vs untreated 37.0% (adjusted RR 0.82, p=0.002). CE: ACOG severe hypertension treatment CE (acute severe threshold ≥160/110 CE — treat within 30-60 minutes CE — IV labetalol CE vs IV hydralazine CE vs oral nifedipine immediate-release CE), mild-moderate chronic HTN treatment CE (target BP 120-160/80-105 CE — labetalol CE, nifedipine CE, methyldopa CE — teratogen CE comparison CE), fetal surveillance in chronic HTN CE (growth ultrasound every 4 weeks after 28 weeks CE, NST weekly after 32 weeks if growth restriction CE).",
  },
]

export default function MaternalFetalMedicineSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Maternal-Fetal Medicine Specialists"
        title="One Calendar for ABOG MFM MOC, SMFM Fellowship CE, and AIUM Accreditation"
        subtitle="From prenatal exome sequencing CE to TTTS laser credentialing — Momenties tracks every obligation so your ABOG MOC, SMFM fellowship, and obstetric ultrasound accreditation stay current."
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
              High-Yield CE for Maternal-Fetal Medicine MOC
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#8b8b8b" }}>
              Schedule CE for each SMFM consult update and landmark trial before your ABOG MFM MOC cycle or SMFM fellowship deadline.
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
              &ldquo;ABOG MOC runs continuously, SMFM fellowship has annual CE requirements, and AIUM accreditation renews every three years. SMFM publishes clinical bulletins monthly and ACOG revises practice bulletins constantly — every one of them is a CE obligation. Momenties finally puts all of these obligations on one screen so nothing falls through.&rdquo;
            </blockquote>
            <p className="text-sm font-semibold" style={{ color: "#c5a35c" }}>
              Simone A., MD, MFM, FACOG
            </p>
            <p className="text-xs mt-1" style={{ color: "#8b8b8b" }}>
              Maternal-Fetal Medicine, Academic Medical Center
            </p>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Never miss an SMFM bulletin CE, AIUM accreditation renewal, or ABOG MFM MOC window again"
        subtitle="Momenties keeps every CME credit, SMFM consult CE, ultrasound accreditation, and ABOG MOC cycle in one place."
        cta="Get started free"
        href="/sign-up"
      />
    </>
  )
}
