import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Geriatric Cardiologists — ABIM MOC CME renewal, geriatric cardiology credential management',
  description:
    'Geriatric cardiologists manage ABIM internal medicine primary MOC, ABIM cardiovascular disease subspecialty MOC, and ABIM geriatric medicine subspecialty MOC on three independent cycles, annual transcatheter valve CE as TAVR indications expand to lower-risk younger patients, annual polypharmacy CE for geriatric cardiac medication management, state medical license biennial CME, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full credential calendar.',
  alternates: { canonical: '/for/geriatric-cardiologists' },
  openGraph: {
    title: 'Momenties for Geriatric Cardiologists',
    description: 'ABIM MOC CME renewal, geriatric cardiology credential management.',
    url: '/for/geriatric-cardiologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABIM IM MOC, cardiovascular disease, and geriatric medicine independently',
    desc: 'Geriatric cardiologists hold ABIM internal medicine primary certification under continuous MOC, ABIM cardiovascular disease subspecialty certification on a second MOC cycle, and ABIM geriatric medicine subspecialty certification on a third independent cycle — three ABIM credentials with different content requirements. ABIM cardiovascular disease requires cardiology-specific content: heart failure, coronary artery disease, arrhythmia, valvular disease, and structural heart disease. ABIM geriatric medicine requires geriatric-specific content: frailty assessment, polypharmacy management, cognitive impairment, functional status evaluation, goals of care, and shared decision-making in older adults. Each ABIM certification tracks CE independently.',
  },
  {
    icon: Clock,
    title: 'Geriatric cardiologist multi-credential renewal calendar',
    desc: '"ABIM internal medicine MOC — continuous CME." "ABIM cardiovascular disease subspecialty MOC — cardiology content." "ABIM geriatric medicine subspecialty MOC — geriatrics content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual transcatheter valve CE — TAVR and TEER expansion to lower-risk and younger patients." "Annual polypharmacy CE — Beers Criteria updates, deprescribing strategies in older cardiac patients." "ACC membership — annual." "AGS membership — annual." All geriatric cardiologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual TAVR CE and polypharmacy management analytics for older cardiac patients',
    desc: 'Geriatric cardiologists directing transcatheter structural programs must maintain CE on rapidly evolving TAVR and TEER indications — PARTNER 3 and EVOLUT LOW RISK 5-year data, NOTION-2 severe aortic stenosis in younger patients, and CLASP IID/IIF transcatheter edge-to-edge repair data have expanded indications annually. Annual TAVR CE is required for Heart Team participation and structural heart program quality reporting. Annual polypharmacy CE: American Geriatrics Society Beers Criteria updated biannually — deprescribing trials for beta-blockers, mineralocorticoid antagonists, and anticoagulants in older patients with frailty and reduced kidney function require current knowledge before adjusting chronic cardiac regimens.',
  },
  {
    icon: Users,
    title: 'ACC, AGS, and geriatric cardiology professional involvement',
    desc: '"ACC Scientific Sessions — march." "AGS Annual Scientific Meeting — may." "Heart Failure Society of America — september." "ESC Congress — august." "TAVR CE — PARTNER 3 extended follow-up in low-risk patients, TAVR versus SAVR at 10 years in intermediate-risk (SURTAVI), valve durability data for bioprosthetic TAVR in younger patients." "Frailty CE — Essential Frailty Toolset validation in cardiac surgery candidates, frailty-indexed TAVR risk prediction, pre-frail versus frail outcomes in structural intervention." "Polypharmacy CE — LOOP trial loop diuretic reduction in HFpEF, ARNi initiation in older HFrEF patients, anticoagulation reversal in frail patients with falls." All geriatric cardiology professional development on calendar. ACC and AGS conference CME tagged by ABIM IM, cardiology, and geriatrics applicability.',
  },
]

const GERCARD_WORKFLOW = [
  { time: 'Annual planning', action: 'ABIM IM MOC CME pace (cardiology/geriatrics content weighted), ABIM cardiovascular disease subspecialty CE pace, ABIM geriatric medicine subspecialty CE pace, state medical license biennial CME, DEA 3-year renewal, annual TAVR/structural heart CE, annual polypharmacy CE, ACC Scientific Sessions, AGS Annual Meeting, and ACC and AGS memberships all loaded in January. All three ABIM counters tracked independently. Content tagged as cardiology-applicable, geriatrics-applicable, or both.' },
  { time: 'CE completion', action: '"AGS-approved — polypharmacy management in older adults with heart failure: OPTIMIZE-HF deprescribing protocol for mineralocorticoid antagonists in frail patients with eGFR <30, discontinuation of beta-blockers in end-stage HF with weight loss and functional decline, oral anticoagulant selection by renal function trajectory in older patients with AF and falls, 3 CME, AMA PRA Category 1, ABIM MOC applicable, ABIM cardiovascular applicable, ABIM geriatric medicine applicable — polypharmacy domain." All three ABIM counters update.' },
  { time: 'TAVR CE', action: '"Annual transcatheter valve CE — structural heart guideline update: ACC/AHA 2024 valvular heart disease guideline TAVR expansion, PARTNER 3 5-year outcomes in low-risk patients (surgical equivalent durability at 5 years), TEER in primary MR (CLASP IID) versus functional MR (COAPT 5-year), and transcatheter tricuspid replacement (TRISCEND II trial) for severe tricuspid regurgitation in high-surgical-risk patients, 3 CME, ABIM cardiovascular applicable, Q1." Annual TAVR CE placed Q1 aligned with ACC Scientific Sessions data presentations in March.' },
  { time: 'Geriatrics CE', action: '"Annual geriatric cardiology CE — frailty and cardiac intervention: Essential Frailty Toolset (EFT) versus Clinical Frailty Scale (CFS) predictive validity in TAVR candidates, frailty-adjusted outcomes in cardiac resynchronization therapy (CRT), comprehensive geriatric assessment in Heart Team decision-making for structural procedures, and goals of care conversation documentation standards for older cardiac patients facing intervention, 2 CME, ABIM geriatric medicine applicable, Q3." Annual geriatrics-cardiology intersection CE placed Q3 aligned with AGS annual meeting content.' },
  { time: 'Renewal audit', action: 'Analytics: ABIM IM MOC CME on pace? ABIM cardiovascular disease subspecialty content satisfied? ABIM geriatric medicine subspecialty content satisfied? State medical license CME complete? DEA valid? Annual TAVR/structural CE documented? Annual polypharmacy CE documented? ACC and AGS memberships active? All three ABIM counters reviewed independently. Complete geriatric cardiologist credential audit 90 days before earliest renewal.' },
]

export default function ForGeriatricCardiologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Geriatric Cardiologists"
        title={
          <>
            Three ABIM certifications tracked independently.
            <br />
            <em className="not-italic text-gold">TAVR indication CE current. Polypharmacy and frailty knowledge tracked.</em>
          </>
        }
        lede="Geriatric cardiologists manage ABIM internal medicine continuous MOC, ABIM cardiovascular disease subspecialty MOC, and ABIM geriatric medicine subspecialty MOC — three independent ABIM certifications with different content requirements. Plus state medical license biennial CME, DEA 3-year registration, annual TAVR and transcatheter structural heart CE as PARTNER 3 and CLASP data expand low-risk indications, annual polypharmacy CE as Beers Criteria updates change chronic cardiac medication management in older patients with frailty, and professional development at ACC and AGS. Momenties manages the full credential calendar."
        crumbs={[{ label: 'For Geriatric Cardiologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How geriatric cardiologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for geriatric cardiologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Geriatric cardiologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through three ABIM MOC cycles, annual TAVR/structural CE, and polypharmacy and frailty CE for geriatric cardiac management.</h2>
          </Reveal>
          <div className="space-y-3">
            {GERCARD_WORKFLOW.map((step, i) => (
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
                &ldquo;Three ABIM boards — internal medicine, cardiovascular disease, and geriatric medicine. ABIM tracks all three separately. A session on TAVR outcomes at ACC counts for my cardiology MOC and probably my IM MOC, but not necessarily my geriatrics MOC unless it covers frailty assessment or goals of care. A session on polypharmacy deprescribing at the AGS meeting counts for my geriatrics MOC and potentially my IM MOC, but not my cardiology MOC unless it specifically addresses cardiac medications. The tagging has to happen at the time of logging — not six months later at renewal. The Beers Criteria update came out last year and I had six patients on medications that moved into avoid-or-use-with-caution for frailty and reduced kidney function. That CE was clinically urgent, not board-calendar-aligned.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">H</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Harold T., MD</div>
                  <div className="text-xs text-muted-foreground">Geriatric cardiologist and structural heart program co-director, academic geriatric cardiology division</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All geriatric cardiologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABIM internal medicine MOC CME — continuous, cardiology and geriatrics content weighted',
                'ABIM cardiovascular disease subspecialty MOC — structural, HF, arrhythmia domains',
                'ABIM geriatric medicine subspecialty MOC — frailty, polypharmacy, goals of care domains',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual transcatheter valve CE — TAVR and TEER indications, Heart Team CE',
                'Annual polypharmacy CE — Beers Criteria updates, deprescribing in frail cardiac patients',
                'ACC and AGS conference CME planning by ABIM IM, cardiology, and geriatrics applicability',
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
        title="Three ABIM certifications tracked independently."
        subtitle="CME tracking for ABIM IM, cardiovascular, and geriatric medicine MOC, annual TAVR CE, polypharmacy and frailty CE, and geriatric cardiology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
