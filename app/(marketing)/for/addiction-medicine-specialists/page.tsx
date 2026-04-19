import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Addiction Medicine Specialists — ABPM MOC CME renewal, addiction medicine credential management',
  description:
    'Addiction medicine specialists manage ABPM addiction medicine board certification on a 10-year cycle or ABPN addiction psychiatry subspecialty certification simultaneously with DEA DATA 2000 waiver maintenance for buprenorphine prescribing, annual opioid use disorder CE as methadone prescribing regulations change, annual stimulant use disorder CE as contingency management evidence expands, state medical license biennial CME, and ASAM membership. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full credential calendar.',
  alternates: { canonical: '/for/addiction-medicine-specialists' },
  openGraph: {
    title: 'Momenties for Addiction Medicine Specialists',
    description: 'ABPM MOC CME renewal, addiction medicine credential management.',
    url: '/for/addiction-medicine-specialists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPM addiction medicine and DEA waiver compliance independently',
    desc: 'Addiction medicine specialists may hold ABPM addiction medicine certification on a 10-year recertification cycle or ABPN addiction psychiatry subspecialty certification on a 10-year examination cycle — two different credentialing bodies with different content requirements. Both require addiction-specific CE. Separately, the DEA DATA 2000 waiver (now simplified under SUPPORT Act 2023 — X-waiver eliminated for most practitioners, but 8-hour training requirement for new prescribers remains) requires specific OUD training documentation. ABPM requires addiction medicine-specific content: opioid use disorder, alcohol use disorder, stimulant use disorder, tobacco/nicotine, co-occurring disorders, and harm reduction.',
  },
  {
    icon: Clock,
    title: 'Addiction medicine specialist multi-credential renewal calendar',
    desc: '"ABPM addiction medicine certification — 10-year recertification, addiction-specific CME." "ABPN addiction psychiatry subspecialty — 10-year examination cycle (if dual-boarded), 24-month prep window." "State medical license — biennial CME." "DEA registration — 3-year renewal (critical for Schedule II-V controlled substance prescribing, methadone OTP authorization, buprenorphine)." "Annual OUD CE — methadone OTP prescribing regulatory updates, buprenorphine maintenance dose optimization." "Annual stimulant CE — contingency management CMS coverage update, methamphetamine treatment protocol." "ASAM membership — annual." All addiction medicine credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual OUD treatment CE and regulatory compliance analytics',
    desc: 'Addiction medicine specialists managing OUD must maintain CE on a rapidly changing regulatory landscape: the SUPPORT Act (2023) eliminated the X-waiver requirement for buprenorphine prescribing but introduced an 8-hour OUD training requirement for all DEA registrants — a new annual documentation category. Methadone for OUD in office-based settings (OTPB) regulatory framework is under active change following SAMHSA 2023 rule: take-home flexibility expanded (up to 28 days for stable patients), telehealth induction permanently authorized. Annual stimulant CE: CMS proposed coverage of contingency management (CM) for stimulant use disorder in 2024 Medicaid — CM implementation CE is now required before billing.',
  },
  {
    icon: Users,
    title: 'ASAM, AOAAM, and addiction medicine professional development',
    desc: '"ASAM Annual Conference — april." "AOAAM National Conference — october." "AAAP American Academy of Addiction Psychiatry Annual Meeting — december." "AMERSA National Conference — november." "OUD CE — SAMHSA 2023 opioid treatment program final rule implementation: expanded take-home criteria, telehealth buprenorphine induction permanence under SUPPORT Act, low-barrier OUD treatment models (same-day buprenorphine start in emergency settings), and naloxone co-prescribing mandate updates by state." "Alcohol CE — COMBINE trial long-term outcomes, acamprosate versus naltrexone by AUD severity, gabapentin AUD evidence and state prescribing restrictions, injectable naltrexone (Vivitrol) versus sublingual buprenorphine-naloxone in co-occurring OUD and AUD." "Stimulant CE — contingency management protocol design for clinic implementation, extended-release naltrexone in methamphetamine AUD co-occurring OUD, mirtazapine methamphetamine harm reduction RCT data." All addiction medicine professional development on calendar.',
  },
]

const ADDICTION_WORKFLOW = [
  { time: 'Annual planning', action: 'ABPM addiction medicine CME pace (OUD, AUD, stimulant, tobacco, co-occurring disorders content weighted), ABPN addiction psychiatry subspecialty CE pace if dual-boarded (10-year cycle — 24-month prep window alert calculated), state medical license biennial CME, DEA 3-year renewal (critical for buprenorphine, methadone, Schedule II-V), annual OUD regulatory CE, annual stimulant CE, ASAM Annual Conference, and ASAM membership all loaded in January. DEA renewal tracked with 3-year cycle — a lapsed DEA shuts down all controlled substance prescribing for the entire practice.' },
  { time: 'CE completion', action: '"ASAM-approved — ASAM 2023 Clinical Practice Guideline for Alcohol Use Disorder update: naltrexone dosing for heavy drinking reduction versus abstinence goals, acamprosate contraindications in renal impairment, topiramate and gabapentin off-label evidence and prescribing restrictions by state, brief intervention (BI) and motivational enhancement therapy (MET) effectiveness in primary care AUD screening, and alcohol withdrawal CIWA-Ar severity-guided benzodiazepine dosing in outpatient medically supervised withdrawal, 4 CME, AMA PRA Category 1, ABPM applicable, addiction medicine domain." ABPM counter updates.' },
  { time: 'OUD CE', action: '"Annual OUD treatment CE — SAMHSA 2024 OTP regulatory update: expanded take-home medication criteria for stable patients (28 days), COVID-19 pandemic flexibility permanent authorization for audio-only telehealth buprenorphine induction, low-barrier access programs (same-day prescribing in hospital and emergency settings), and harm reduction integration (naloxone standing orders, fentanyl test strip provision as medical practice), 3 CME, ABPM applicable, DEA OUD training documentation applicable, Q1." Annual OUD CE placed Q1 aligned with SAMHSA regulatory calendar.' },
  { time: 'Stimulant CE', action: '"Annual stimulant use disorder CE — contingency management implementation: CMS 2024 proposed Medicaid coverage for CM in stimulant use disorder (voucher and prize-based reinforcement), mirtazapine 30mg for methamphetamine harm reduction (METH-1 and METH-2 trial 12-week outcomes), bupropion SR 450mg + naltrexone 380mg injectable combination in METH use disorder (iCEPS consortium trial), and contingency management electronic systems (Pivotal Certified) for outpatient implementation, 2 CME, ABPM applicable, Q3." Annual stimulant CE placed Q3 aligned with ASAM annual publication of SUD guidelines updates.' },
  { time: 'Renewal audit', action: 'Analytics: ABPM addiction medicine CME on pace? ABPN addiction psychiatry subspecialty content satisfied if applicable? (24-month prep window?) State medical license CME complete? DEA valid (critical for buprenorphine and all controlled substance prescribing)? DEA 8-hour OUD training documentation current (SUPPORT Act 2023)? Annual OUD regulatory CE documented? Annual stimulant CE documented? ASAM membership active? Complete addiction medicine credential audit 90 days before earliest renewal.' },
]

export default function ForAddictionMedicineSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Addiction Medicine Specialists"
        title={
          <>
            ABPM certification and DEA registration maintained.
            <br />
            <em className="not-italic text-gold">OUD regulatory CE current. Stimulant treatment tracked.</em>
          </>
        }
        lede="Addiction medicine specialists manage ABPM addiction medicine certification on a 10-year recertification cycle with addiction-specific CME requirements, DEA 3-year registration (critical for buprenorphine, methadone authorization, and all controlled substance prescribing), SUPPORT Act 2023 OUD training documentation, state medical license biennial CME, annual OUD CE as SAMHSA methadone and telehealth regulations expand, annual stimulant use disorder CE as contingency management gains CMS coverage, and professional development at ASAM. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Addiction Medicine Specialists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How addiction medicine specialists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for addiction medicine specialist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Addiction medicine specialist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABPM 10-year certification cycle, DEA registration, OUD regulatory requirements, and annual treatment CE.</h2>
          </Reveal>
          <div className="space-y-3">
            {ADDICTION_WORKFLOW.map((step, i) => (
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
                &ldquo;ABPM certification on a 10-year cycle with addiction-specific content requirements. DEA registration is the most operationally critical credential I manage — a lapsed DEA means I cannot prescribe buprenorphine to any of my OUD patients the next day. The SUPPORT Act 2023 changes created a new documentation category: the 8-hour OUD training requirement is now tied to DEA registration for all prescribers, not just waiver holders. The SAMHSA methadone regulatory changes in 2023 required CE before I could implement the new take-home flexibility in my program — that CE was urgent and had nothing to do with my board renewal timeline. The stimulant use disorder CE is now a billing documentation requirement in states that have implemented contingency management coverage. All of these on separate timelines that I now track in one place.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">M</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Marcus J., MD</div>
                  <div className="text-xs text-muted-foreground">Addiction medicine specialist and OTP medical director, community health system</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All addiction medicine specialist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPM addiction medicine certification — 10-year recertification, addiction-specific CME',
                'ABPN addiction psychiatry subspecialty — 10-year cycle, 24-month preparation window (if dual-boarded)',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year (critical for buprenorphine and controlled substance prescribing)',
                'DEA 8-hour OUD training documentation — SUPPORT Act 2023 requirement',
                'Annual OUD regulatory CE — SAMHSA methadone rules, telehealth buprenorphine permanence',
                'Annual stimulant use disorder CE — contingency management implementation',
                'ASAM membership and annual conference CME planning',
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
        title="ABPM certification and DEA registration maintained."
        subtitle="CME tracking for ABPM 10-year certification, DEA registration with OUD training documentation, annual OUD and stimulant use disorder CE, and addiction medicine professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
