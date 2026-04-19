import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Sports Cardiologists — ABIM MOC CME renewal, sports cardiology credential management',
  description:
    'Sports cardiologists manage ABIM internal medicine MOC and ABIM cardiovascular disease subspecialty MOC simultaneously with annual athlete ECG interpretation CE as Seattle Criteria evolve, annual sudden cardiac death prevention CE as screening protocol evidence updates, ACC sports cardiology certificate of added qualification requirements, state medical license biennial CME, and AMSSM or ACSM membership. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full credential calendar.',
  alternates: { canonical: '/for/sports-cardiologists' },
  openGraph: {
    title: 'Momenties for Sports Cardiologists',
    description: 'ABIM MOC CME renewal, sports cardiology credential management.',
    url: '/for/sports-cardiologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABIM cardiovascular disease MOC and sports cardiology certificate independently',
    desc: 'Sports cardiologists hold ABIM internal medicine primary certification under continuous MOC and ABIM cardiovascular disease subspecialty under continuous MOC. The ACC/AHA Sports and Exercise Cardiology section offers a Certificate of Added Qualification (CAQ) in Sports Cardiology requiring sports-specific content distinct from general cardiovascular disease MOC: preparticipation cardiovascular evaluation (PPE), athlete ECG interpretation using International Criteria (refined Seattle Criteria), sudden cardiac death (SCD) risk stratification in athletes, exercise testing interpretation in trained athletes, and return-to-play decision-making after cardiac events.',
  },
  {
    icon: Clock,
    title: 'Sports cardiologist multi-credential renewal calendar',
    desc: '"ABIM internal medicine MOC — continuous CME." "ABIM cardiovascular disease subspecialty MOC — continuous CME." "ACC sports cardiology CAQ — renewal cycle, sports-specific content." "State medical license — biennial CME." "Annual athlete ECG CE — International Criteria updates, ethnic-specific ECG pattern prevalence in Black athletes (T-wave inversion anterior leads — physiologic versus pathologic)." "Annual SCD prevention CE — preparticipation screening protocol evidence, ICD decision-making in athletes with structural heart disease." "ACSM certification renewal — if applicable." "AMSSM membership — annual." All sports cardiology credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual athlete ECG CE and SCD risk stratification update analytics',
    desc: 'Sports cardiologists performing preparticipation cardiovascular evaluations must maintain CE on evolving athlete ECG criteria: the 2017 International Criteria (refined from Seattle Criteria) updated pathologic versus physiologic ECG changes, and subsequent studies have refined ethnic-specific patterns — anterior T-wave inversion in Black athletes has a 2-4% prevalence and is frequently physiologic, but requires current CE for proper differentiation from ARVC or HCM. Annual SCD CE: the AHA/ACC 2020 guidelines on competitive athletes with cardiovascular abnormalities updated return-to-play recommendations for HCM, ARVC, WPW, and channelopathies — CE before implementing updated risk stratification is required for ACC CAQ maintenance.',
  },
  {
    icon: Users,
    title: 'AMSSM, ACSM, ACC sports cardiology section, and professional development',
    desc: '"AMSSM Annual Meeting — april." "ACSM Annual World Congress — may." "ACC Scientific Sessions — march." "ESC Congress sports cardiology sessions — august." "HRS Annual Sessions — may." "Athlete ECG CE — International Criteria 2024 update for master athletes (age >35) with physiologic remodeling ECG patterns, anterior T-wave inversion differentiation in Black athletes (Afrikaner cohort data, race-specific prevalence versus ARVC), PR interval prolongation in endurance athletes — vagal versus pathologic PR criteria in cyclist and triathlete populations." "SCD CE — HCM shared decision-making framework for ICD implantation in competitive athletes (HCM Risk-SCD model limitations in young athletes), ARVC definite diagnosis Task Force Criteria 2010 application in high-volume endurance athletes with physiologic RV remodeling, and return-to-play post-myocarditis — RECOVERY trial 3-month abstinence protocol evidence update." "Preparticipation CE — 14-element AHA PPE history and physical versus ECG screening cost-effectiveness evidence update, collegiate student-athlete sudden death incidence data 2020-2023." All sports cardiology professional development on calendar.',
  },
]

const SPORTS_CARDIO_WORKFLOW = [
  { time: 'Annual planning', action: 'ABIM internal medicine MOC CME pace (cardiovascular content weighted), ABIM cardiovascular disease subspecialty MOC pace (sports cardiology content weighted), ACC sports cardiology CAQ renewal requirements, state medical license biennial CME, annual athlete ECG CE, annual SCD prevention CE, AMSSM Annual Meeting, ACC Scientific Sessions, and AMSSM membership all loaded in January. ABIM IM counter and cardiovascular disease counter tracked independently. ACC CAQ renewal requirements tracked separately — CAQ requires sports-specific content distinct from general cardiovascular disease MOC.' },
  { time: 'CE completion', action: '"ACC/AHA-approved — ACC/AHA 2023 Guideline on the Management of Patients with Hypertrophic Cardiomyopathy: shared decision-making framework for ICD implantation in asymptomatic low-risk HCM, updated SCD risk model limitations in young athletes (HCM Risk-SCD validated 40+ years, limited data under 40), return-to-play considerations after ICD implantation in competitive athletes and non-competitive recreational sports, and athlete with HCM and preserved EF in endurance sport — guidance on training intensity limits and sport restriction criteria, 4 CME, AMA PRA Category 1, ABIM MOC applicable, ACC sports cardiology CAQ applicable." Both ABIM counters and CAQ requirements update.' },
  { time: 'ECG CE', action: '"Annual athlete ECG interpretation CE — International Criteria 2024 updates: female athlete ECG pattern prevalence compared with male reference data (anterior TWI in female endurance athletes — revised physiologic classification criteria), right bundle branch block in high-volume athletes — complete versus incomplete RBBB significance, athlete ECG with epsilon waves and late potentials — ARVC versus benign RV remodeling differentiation protocol, and master athlete (>35) ECG patterns with physiologic age-related changes superimposed on training-related changes, 3 CME, ACC sports cardiology CAQ applicable, Q1." Annual ECG CE placed Q1 aligned with ACC March meeting.' },
  { time: 'SCD CE', action: '"Annual SCD prevention and return-to-play CE — myocarditis and return to sport: RECOVERY trial (3-month abstinence from competitive sport post-myocarditis) 1-year follow-up data, CMR-guided return-to-play protocol versus symptom-guided protocol in athlete myocarditis, COVID-19-associated myocarditis incidence update and revised 2024 screening protocol for athletes with prior COVID infection, and WPW in competitive athletes — radiofrequency ablation decision threshold in asymptomatic high-risk versus low-risk accessory pathway, 3 CME, ACC sports cardiology CAQ applicable, Q3." Annual SCD CE placed Q3 aligned with HRS May and ESC August sessions.' },
  { time: 'Renewal audit', action: 'Analytics: ABIM internal medicine MOC CME on pace? ABIM cardiovascular disease subspecialty MOC content satisfied — sports cardiology content weighted? ACC sports cardiology CAQ renewal requirements met? State medical license CME complete? Annual athlete ECG CE documented? Annual SCD prevention and return-to-play CE documented? AMSSM membership active? Complete sports cardiologist credential audit 90 days before earliest renewal.' },
]

export default function ForSportsCardiologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Sports Cardiologists"
        title={
          <>
            ABIM cardiovascular MOC and sports cardiology CAQ maintained.
            <br />
            <em className="not-italic text-gold">Athlete ECG CE current. SCD prevention protocols tracked.</em>
          </>
        }
        lede="Sports cardiologists manage ABIM internal medicine continuous MOC, ABIM cardiovascular disease subspecialty continuous MOC, and ACC sports cardiology Certificate of Added Qualification requirements — all tracked separately. Annual athlete ECG CE as International Criteria evolve for ethnic-specific patterns, annual sudden cardiac death prevention CE as return-to-play protocols update for myocarditis and HCM, state medical license biennial CME, and professional development at AMSSM and ACC. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Sports Cardiologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How sports cardiologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for sports cardiologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Sports cardiologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABIM dual MOC cycles, ACC sports cardiology CAQ, and annual athlete ECG and SCD prevention CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {SPORTS_CARDIO_WORKFLOW.map((step, i) => (
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
                &ldquo;ABIM IM and ABIM cardiovascular disease MOC both continuous and tracked separately. The ACC sports cardiology CAQ has different content requirements — athlete ECG interpretation and SCD risk stratification are distinct from general cardiovascular disease content. The athlete ECG CE is clinically urgent: the International Criteria have been updated multiple times since 2017 and the ethnic-specific ECG pattern data for Black athletes changes my interpretation of anterior T-wave inversions directly. When COVID-19 myocarditis return-to-play protocols changed, I needed current CE before I cleared athletes — that had nothing to do with my board renewal calendar. The return-to-play decision after a cardiac event is a medicolegal documentation issue and I want current CE on record before I make those calls.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">T</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Theo M., MD</div>
                  <div className="text-xs text-muted-foreground">Sports cardiologist and team physician, university athletics and professional sports organization</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All sports cardiologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABIM internal medicine MOC CME — continuous',
                'ABIM cardiovascular disease subspecialty MOC — continuous, sports cardiology content weighted',
                'ACC sports cardiology Certificate of Added Qualification — renewal requirements',
                'State medical license CME — biennial',
                'Annual athlete ECG CE — International Criteria updates, ethnic-specific patterns',
                'Annual SCD prevention CE — return-to-play protocols, HCM/ARVC/myocarditis',
                'AMSSM membership renewal — annual',
                'ACC and AMSSM conference CME planning by CAQ applicability',
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
        title="ABIM cardiovascular MOC and sports cardiology CAQ maintained."
        subtitle="CME tracking for ABIM dual MOC and ACC sports cardiology CAQ, annual athlete ECG interpretation CE, SCD prevention and return-to-play CE, and sports cardiology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
