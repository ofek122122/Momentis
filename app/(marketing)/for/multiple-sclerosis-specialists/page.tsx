import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Multiple Sclerosis Specialists — ABPN MOC CME renewal, MS credential management',
  description:
    'Multiple sclerosis specialists manage ABPN neurology primary MOC alongside CMSC MS certification and annual high-efficacy DMT CE as ublituximab, ofatumumab, and tolebrutinib data update treatment sequencing, annual progressive MS CE as ocrelizumab PPMS and siponimod SPMS data evolve, annual biosimilar CE as natalizumab and ocrelizumab biosimilars gain FDA approval, state medical license biennial CME, DEA 3-year renewal, and CMSC membership. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/multiple-sclerosis-specialists' },
  openGraph: {
    title: 'Momenties for Multiple Sclerosis Specialists',
    description: 'ABPN MOC CME renewal, MS credential management.',
    url: '/for/multiple-sclerosis-specialists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPN neurology MOC and CMSC MS certification independently',
    desc: 'Multiple sclerosis specialists hold ABPN neurology primary certification under continuous MOC and CMSC (Consortium of Multiple Sclerosis Centers) MS certification — requiring MS-specific CE distinct from general neurology MOC. CMSC certification requires MS-specific content: relapsing-remitting MS (RRMS) disease-modifying therapy selection and sequencing, progressive MS (PPMS and SPMS) management, MS-related symptom management (spasticity, fatigue, cognition, bladder), MS in pregnancy and postpartum, and MRI monitoring protocols for treatment response and safety (PML surveillance for natalizumab, JC virus index monitoring).',
  },
  {
    icon: Clock,
    title: 'Multiple sclerosis specialist multi-credential renewal calendar',
    desc: '"ABPN neurology MOC — continuous CME." "CMSC MS certification — renewal requirements, MS-specific CME." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual high-efficacy DMT CE — ublituximab Briumvi FDA 2023 approval, ofatumumab Kesimpta subcutaneous dosing update, tolebrutinib BTK inhibitor Phase 3 data." "Annual progressive MS CE — ocrelizumab PPMS 4-year data, siponimod SPMS data in secondary progressive, fenebrutinib progressive MS trial." "Annual biosimilar CE — natalizumab (Tyruko) biosimilar FDA 2023, ocrelizumab biosimilar pipeline." "CMSC membership — annual." "NARCOMS Registry CE — patient-reported outcome tools." All MS credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual high-efficacy DMT CE and progressive MS treatment update analytics',
    desc: 'Multiple sclerosis specialists managing DMT selection must maintain CE on an expanding treatment landscape: ublituximab (Briumvi) received FDA approval December 2022 as the first anti-CD20 for RRMS with a 1-hour infusion time (versus 3.5-6 hours for ocrelizumab) — CE on ublituximab versus ocrelizumab patient selection (infusion duration preference, hypersensitivity history, renal function) is required before prescribing. BTK inhibitors (tolebrutinib, fenebrutinib, evobrutinib) are in Phase 3 for both relapsing and progressive MS — CE on BTK inhibitor mechanism (CNS-penetrant versus non-penetrant) and liver enzyme monitoring requirements is required before clinic trial enrollment counseling.',
  },
  {
    icon: Users,
    title: 'CMSC, ECTRIMS, ACTRIMS, and MS professional development',
    desc: '"CMSC Annual Conference — june." "ECTRIMS European Committee for Treatment and Research in MS — september." "ACTRIMS Americas Committee for Treatment and Research in MS — february." "AAN Annual Meeting — april." "High-efficacy DMT CE — ublituximab ULTIMATE I and II trials 2-year ARR and MRI data versus teriflunomide, ofatumumab self-injection subcutaneous versus IV anti-CD20 comparison — adherence and immunoglobulin monitoring, anti-CD20 therapy and COVID-19 vaccine response — humoral versus cellular immunity monitoring, and B-cell replenishment monitoring for anti-CD20 redosing decisions." "Progressive MS CE — ocrelizumab PPMS ORATORIO extension 6-year disability worsening data, siponimd EXPAND trial SPMS subgroup — benefit in active SPMS versus non-active (gadolinium lesions required), ibudilast progressive MS phase 2b data, and phenylbutyrate neuroprotective trial in PPMS." "Biosimilar CE — natalizumab biosimilar Tyruko (PML risk equivalence to reference natalizumab — JC virus antibody index monitoring protocol applicability), ofatumumab patent expiry timeline and biosimilar development." "Pregnancy CE — MS disease-modifying therapy interruption timing preconception, postpartum MS rebound risk mitigation — restart timing after anti-CD20 therapy, natalizumab washout and pregnancy — JC virus index change during pregnancy." All MS professional development on calendar.',
  },
]

const MS_WORKFLOW = [
  { time: 'Annual planning', action: 'ABPN neurology MOC CME pace (MS and neuroimmunology content weighted), CMSC MS certification CE requirements, state medical license biennial CME, DEA 3-year renewal, annual high-efficacy DMT CE, annual progressive MS CE, annual biosimilar CE, annual MS pregnancy CE, CMSC Annual Conference, ECTRIMS or ACTRIMS, and CMSC membership all loaded in January. ABPN counter and CMSC certification requirements tracked independently.' },
  { time: 'CE completion', action: '"CMSC-approved — CMSC 2024 Clinical Practice Recommendations update: anti-CD20 therapy sequencing in treatment-naive high-risk RRMS (ocrelizumab versus ofatumumab versus ublituximab first-line selection framework), JC virus antibody index monitoring in natalizumab — quarterly versus every-6-month testing in low-risk versus high-risk patients, and switching from natalizumab to anti-CD20 — washout period and PML risk management, 4 CME, AMA PRA Category 1, ABPN MOC applicable, CMSC CE applicable." Both ABPN and CMSC counters update.' },
  { time: 'DMT CE', action: '"Annual high-efficacy DMT CE — BTK inhibitor update 2024: tolebrutinib CNS-penetrant BTK inhibitor Phase 3 HERCULES (SPMS) and GEMINI (RRMS) trial design and mechanism of action, evobrutinib Phase 3 negative RRMS data (EVOLUTIONRR trial) — implications for class effect assumptions, liver enzyme monitoring protocol during BTK inhibitor trials (alanine aminotransferase elevation 3-month intensive monitoring), and fenebrutinib progressive MS trial (FENoble) Phase 2b microglia suppression biomarker data, 3 CME, CMSC CE applicable, Q1." Annual DMT CE placed Q1 aligned with ACTRIMS February meeting.' },
  { time: 'Progressive CE', action: '"Annual progressive MS CE — ocrelizumab PPMS 8-year data: disability worsening confirmed at 12 and 24 weeks — treatment responder analysis, treatment initiation before wheelchair dependence versus early-stage PPMS, siponimd SPMS — replication of EXPAND trial benefit in active SPMS in real-world registries, and CNS penetrant versus non-penetrant anti-inflammatory approaches in progressive MS — repair and remyelination trial CE (bexarotene Phase 2b CCMR One data, opicinumab Phase 2b trial), 3 CME, CMSC CE applicable, Q3." Annual progressive MS CE placed Q3 aligned with ECTRIMS September.' },
  { time: 'Renewal audit', action: 'Analytics: ABPN neurology MOC CME on pace? CMSC MS certification CE requirements met? State medical license CME complete? DEA valid? Annual high-efficacy DMT CE documented? Annual progressive MS CE documented? Annual biosimilar CE documented? CMSC membership active? Complete MS specialist credential audit 90 days before earliest renewal.' },
]

export default function ForMultipleSclerosiSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Multiple Sclerosis Specialists"
        title={
          <>
            ABPN neurology MOC and CMSC MS certification maintained.
            <br />
            <em className="not-italic text-gold">High-efficacy DMT CE current. Progressive MS protocols tracked.</em>
          </>
        }
        lede="Multiple sclerosis specialists manage ABPN neurology continuous MOC and CMSC MS certification requirements — tracked separately. Annual high-efficacy DMT CE as ublituximab and BTK inhibitors expand treatment options, annual progressive MS CE as ocrelizumab PPMS long-term data and neuroprotective trials evolve, annual biosimilar CE as anti-CD20 biosimilars reach approval, state medical license biennial CME, DEA 3-year registration, and professional development at CMSC, ECTRIMS, and ACTRIMS. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Multiple Sclerosis Specialists' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/analytics"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            CE analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How multiple sclerosis specialists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for multiple sclerosis specialist credential and CME management.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {USE_CASES.map((uc, i) => (
              <Reveal key={uc.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <uc.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{uc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{uc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Multiple sclerosis specialist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABPN MOC, CMSC certification, and annual DMT, progressive MS, and biosimilar CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {MS_WORKFLOW.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-24 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
                  <p className="text-sm text-foreground/90">{step.action}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;ABPN neurology continuous MOC and CMSC certification — two separate tracks. The MS treatment landscape has changed so rapidly that annual CE is a clinical minimum, not a credential requirement. When ublituximab came through FDA approval, I needed CE on the infusion duration comparison with ocrelizumab before I could counsel patients on the switch. The BTK inhibitor CE is different: the Phase 3 trials are still running and I need current CE on the liver enzyme monitoring protocol before I can enroll patients in trials or prescribe off-label. The natalizumab biosimilar CE was necessary for a specific reason: I had patients asking whether JC virus antibody monitoring applies to the biosimilar and I needed documented CE on equivalence before I could answer them. Progressive MS is where the CE pressure is highest — new mechanisms and endpoints change my counseling every year.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">E</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Elena M., MD, PhD</div>
                  <div className="text-xs text-muted-foreground">Multiple sclerosis specialist and MS center director, academic neurology department</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Credentials tracked</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All multiple sclerosis specialist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPN neurology MOC CME — continuous, MS and neuroimmunology content weighted',
                'CMSC MS certification — renewal requirements, MS-specific CE',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual high-efficacy DMT CE — BTK inhibitors, anti-CD20 sequencing, biosimilars',
                'Annual progressive MS CE — PPMS/SPMS long-term data, neuroprotection trials',
                'Annual MS pregnancy CE — DMT interruption, postpartum rebound prevention',
                'CMSC, ECTRIMS, and ACTRIMS conference CME planning by ABPN and CMSC applicability',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="h-3 w-3 text-gold shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="ABPN neurology MOC and CMSC MS certification maintained."
        subtitle="CME tracking for ABPN MOC and CMSC certification, annual DMT CE, progressive MS CE, biosimilar CE, and MS professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
