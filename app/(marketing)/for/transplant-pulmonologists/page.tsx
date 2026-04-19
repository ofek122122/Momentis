import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Transplant Pulmonologists — ABIM MOC CME renewal, lung transplant medicine credential management',
  description:
    'Transplant pulmonologists manage ABIM internal medicine MOC and ABIM pulmonary disease subspecialty MOC simultaneously with ISHLT lung transplant program requirements, annual rejection surveillance CE as CLAD phenotyping and antibody-mediated rejection treatment protocols evolve, annual immunosuppression CE as tacrolimus extended-release and belatacept data emerge, state medical license biennial CME, DEA 3-year renewal, and professional development at ISHLT and ATS. Momenties tracks CME by certification and manages the full credential calendar.',
  alternates: { canonical: '/for/transplant-pulmonologists' },
  openGraph: {
    title: 'Momenties for Transplant Pulmonologists',
    description: 'ABIM MOC CME renewal, lung transplant medicine credential management.',
    url: '/for/transplant-pulmonologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABIM pulmonary disease MOC and ISHLT transplant program CE independently',
    desc: 'Transplant pulmonologists hold ABIM internal medicine primary certification under continuous MOC and ABIM pulmonary disease subspecialty under continuous MOC — two ABIM credentials with overlapping but distinct content requirements. ISHLT (International Society for Heart and Lung Transplantation) accreditation standards require transplant-specific CE distinct from general pulmonary disease MOC: CLAD (chronic lung allograft dysfunction) phenotyping — BOS (bronchiolitis obliterans syndrome), RAS (restrictive allograft syndrome), and azithromycin-responsive CLAD — antibody-mediated rejection (AMR) diagnosis and treatment, acute rejection grading (ISHLT 2007 revised grading), and primary graft dysfunction (PGD) management in the first 72 hours post-transplant.',
  },
  {
    icon: Clock,
    title: 'Transplant pulmonologist multi-credential renewal calendar',
    desc: '"ABIM internal medicine MOC — continuous CME." "ABIM pulmonary disease subspecialty MOC — continuous CME." "ISHLT transplant program CE — annual requirements per program accreditation." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual CLAD surveillance CE — BOS versus RAS phenotyping update, azithromycin-responsive CLAD diagnosis criteria." "Annual immunosuppression CE — tacrolimus level monitoring, mTOR inhibitor conversion timing, belatacept lung transplant data." "Annual PGD management CE — ISHLT 2016 PGD grading system updates, ECMO bridging criteria." "ISHLT membership — annual." All transplant pulmonology credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual CLAD surveillance CE and immunosuppression protocol update analytics',
    desc: 'Transplant pulmonologists managing CLAD must maintain CE on rapidly evolving phenotyping: ISHLT 2019 CLAD consensus document introduced the azithromycin-responsive CLAD (ARAD) category, requiring re-evaluation of prior BOS diagnoses and a distinct treatment protocol (azithromycin 250mg three times weekly before escalation to augmented immunosuppression). Annual CLAD CE ensures current application of RAS diagnosis criteria (TLC reduction >10% from post-transplant baseline, restrictive spirometric pattern) versus BOS criteria. Annual immunosuppression CE: extended-release tacrolimus (Astagraf XL, Envarsus XR) pharmacokinetic data in de novo lung transplant and the BENEFIT-EXT belatacept data (kidney, with extrapolation questions for lung) requires annual CE to maintain current protocols.',
  },
  {
    icon: Users,
    title: 'ISHLT, ATS, and transplant pulmonology professional development',
    desc: '"ISHLT Annual Meeting — april." "ATS International Conference — may." "AST American Society of Transplantation Symposium — may." "CHEST Annual Meeting — october." "CLAD CE — ISHLT 2024 CLAD phenotyping consensus update: neutrophilic reversible allograft dysfunction (NRAD) versus BOS Grade 0-p reclassification, pleuroparenchymal fibroelastosis (PPFE) as RAS sub-phenotype, bronchoscopy with BAL surveillance frequency post-CLAD diagnosis, and re-transplantation outcomes in CLAD patients by phenotype (BOS versus RAS 5-year survival comparison)." "Immunosuppression CE — CCTPT Consensus on Calcineurin Inhibitor Target Levels post-lung transplant by era (early perioperative, 6-month, 1-year, 5-year), azathioprine versus MMF mycophenolate conversion in tolerant patients, and inhaled cyclosporine (Mollipect) Phase 3 trial data for BOS prevention." "PGD CE — ISHLT PGD Grade 3 at 72 hours independent mortality predictor — ECMO bridge indications, inhaled nitric oxide protocol, and rehabilitation initiation criteria in PGD Grade 2-3." All transplant pulmonology professional development on calendar.',
  },
]

const TRANSPLANT_PULM_WORKFLOW = [
  { time: 'Annual planning', action: 'ABIM internal medicine MOC CME pace (pulmonary and transplant content weighted), ABIM pulmonary disease subspecialty MOC pace, ISHLT transplant program annual CE requirements, state medical license biennial CME, DEA 3-year renewal, annual CLAD surveillance CE, annual immunosuppression CE, annual PGD management CE, ISHLT Annual Meeting, ATS International Conference, and ISHLT membership all loaded in January. ABIM IM counter and pulmonary disease counter tracked independently. ISHLT program CE tracked separately — program accreditation requirements are distinct from personal board maintenance.' },
  { time: 'CE completion', action: '"ISHLT-approved — ISHLT 2023 Annual Meeting plenary: primary graft dysfunction scoring reliability across centers — inter-rater agreement for PGD Grade 2 versus 3 at 72 hours, venovenous ECMO duration and weaning criteria in refractory PGD Grade 3, inhaled prostaglandin E1 versus inhaled nitric oxide equivalence in PGD Grade 2-3 management, and ambulatory ECMO bridging as destination therapy waiting criteria in bilateral lung transplant candidates, 4 CME, AMA PRA Category 1, ABIM MOC applicable, ISHLT transplant program CE applicable." Both ABIM counters and ISHLT CE update.' },
  { time: 'CLAD CE', action: '"Annual CLAD surveillance and management CE — phenotype-specific management 2024: azithromycin-responsive CLAD (ARAD) 18-month stabilization rate after azithromycin initiation, RAS treatment with augmented immunosuppression — evidence for photopheresis versus total lymphoid irradiation in RAS versus BOS, spirometry monitoring frequency in CLAD diagnosis pre-transplant and post-CLAD diagnosis (monthly FEV1 decline rate as phenotype predictor), and re-transplantation listing criteria when CLAD progresses to BOS Grade 3 — functional criteria and waitlist mortality modeling, 3 CME, ABIM pulmonary applicable, ISHLT CE applicable, Q1." Annual CLAD CE placed Q1 aligned with ISHLT April meeting.' },
  { time: 'Rejection CE', action: '"Annual rejection surveillance and immunosuppression CE — AMR treatment protocol update: complement-fixing donor-specific antibody (DSA) management — rituximab plus IVIG versus plasmapheresis plus rituximab for AMR with DSA MFI >5000, C1q-binding DSA independent predictor of CLAD progression (Registry data), and subclinical AMR surveillance bronchoscopy frequency in sensitized recipients — protocol biopsy versus DSA-triggered bronchoscopy comparative outcomes, 3 CME, ABIM pulmonary applicable, ISHLT CE applicable, Q3." Annual rejection CE placed Q3 aligned with AST May and CHEST October sessions.' },
  { time: 'Renewal audit', action: 'Analytics: ABIM internal medicine MOC CME on pace? ABIM pulmonary disease subspecialty MOC content satisfied? ISHLT transplant program annual CE requirements met? State medical license CME complete? DEA valid? Annual CLAD surveillance CE documented? Annual immunosuppression CE documented? Annual PGD management CE documented? ISHLT membership active? Complete transplant pulmonologist credential audit 90 days before earliest renewal.' },
]

export default function ForTransplantPulmonologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Transplant Pulmonologists"
        title={
          <>
            ABIM pulmonary MOC and ISHLT transplant CE maintained.
            <br />
            <em className="not-italic text-gold">CLAD surveillance CE current. Rejection protocols tracked.</em>
          </>
        }
        lede="Transplant pulmonologists manage ABIM internal medicine continuous MOC, ABIM pulmonary disease subspecialty continuous MOC, and ISHLT lung transplant program annual CE requirements — all tracked separately. Annual CLAD surveillance CE as BOS, RAS, and ARAD phenotyping consensus evolves, annual rejection CE as AMR treatment protocols and DSA monitoring update, annual PGD management CE, state medical license biennial CME, DEA 3-year registration, and professional development at ISHLT and ATS. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Transplant Pulmonologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How transplant pulmonologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for transplant pulmonologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Transplant pulmonologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABIM dual MOC cycles, ISHLT program requirements, and annual CLAD, rejection, and PGD CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {TRANSPLANT_PULM_WORKFLOW.map((step, i) => (
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
                &ldquo;ABIM IM and ABIM pulmonary both continuous and tracked separately. The ISHLT program CE is a third track — it is not the same as my personal board maintenance, it is a program accreditation requirement with different content specifications. The CLAD phenotyping CE is where the clinical urgency is highest: the ISHLT 2019 consensus document introduced ARAD as a distinct phenotype and I had to update my institutional protocol before I could apply the new treatment criteria. That CE was not on my board renewal calendar — it was a protocol-change requirement. The PGD management CE is similar: ISHLT revised the grading system in 2016 and published clinical guidance that changed how we use ECMO in Grade 3 — CE before implementing the new criteria in the ICU. All of these on separate timelines that I now track in one place.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">C</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Clara N., MD</div>
                  <div className="text-xs text-muted-foreground">Transplant pulmonologist and lung transplant medical director, academic transplant center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All transplant pulmonologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABIM internal medicine MOC CME — continuous',
                'ABIM pulmonary disease subspecialty MOC — continuous, transplant content weighted',
                'ISHLT transplant program annual CE — program accreditation requirements',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual CLAD surveillance CE — BOS, RAS, ARAD phenotyping consensus updates',
                'Annual rejection CE — AMR treatment, DSA monitoring, complement-fixing antibodies',
                'ISHLT membership and conference CME planning by ABIM and program CE applicability',
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
        title="ABIM pulmonary MOC and ISHLT transplant CE maintained."
        subtitle="CME tracking for ABIM dual MOC and ISHLT program requirements, annual CLAD surveillance CE, rejection protocol CE, and lung transplant professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
