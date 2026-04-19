import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Addiction Psychiatrists — ABPN MOC CME renewal, addiction psychiatry credential management',
  description:
    'Addiction psychiatrists manage ABPN psychiatry board MOC continuous CME with addiction psychiatry subspecialty content, ABPN addiction psychiatry subspecialty certification on an independent cycle, SAMHSA DATA 2000 buprenorphine waiver compliance, state medical license biennial CME, DEA 3-year renewal critical for controlled substance prescribing, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full addiction psychiatrist credential calendar.',
  alternates: { canonical: '/for/addiction-psychiatrists' },
  openGraph: {
    title: 'Momenties for Addiction Psychiatrists',
    description: 'ABPN MOC CME renewal, addiction psychiatry credential management.',
    url: '/for/addiction-psychiatrists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPN psychiatry MOC and addiction psychiatry subspecialty independently',
    desc: 'Addiction psychiatrists hold ABPN psychiatry board certification under continuous MOC and ABPN addiction psychiatry subspecialty certification on a separate renewal cycle — two ABPN credentials with different CME content requirements. ABPN addiction psychiatry subspecialty certification requires CME with addiction medicine-specific content including substance use disorder pharmacotherapy, motivational interviewing, co-occurring disorders, and opioid use disorder management. State medical license biennial CME runs on a third independent cycle. DEA registration 3-year cycle is operationally critical — a DEA lapse terminates the ability to prescribe buprenorphine, methadone referrals, and all controlled substances used in addiction treatment.',
  },
  {
    icon: Clock,
    title: 'Addiction psychiatrist multi-credential renewal calendar',
    desc: '"ABPN psychiatry MOC — continuous CME." "ABPN addiction psychiatry subspecialty — addiction content CE." "State medical license — biennial CME." "DEA registration — 3-year renewal." "SAMHSA buprenorphine waiver — annual patient limit reporting if >30 patients." "ASAM membership — annual." "APA membership — annual." All addiction psychiatrist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'DEA Schedule II-V prescribing authority and buprenorphine waiver compliance analytics',
    desc: 'Addiction psychiatrists prescribing buprenorphine under DATA 2000 (now consolidated under SUPPORT Act provisions) must maintain their DEA registration continuously — a DEA lapse is not a paperwork inconvenience, it is an immediate discontinuation of buprenorphine prescribing authority that directly harms patients in treatment. Addiction psychiatrists treating >30 patients with buprenorphine must comply with annual reporting requirements. CME with addiction psychiatry content maps to ABPN subspecialty renewal, but hours specifically covering opioid use disorder pharmacotherapy apply to both ABPN and DEA Schedule II authority clinical education.',
  },
  {
    icon: Users,
    title: 'ASAM, APA, and addiction psychiatry professional involvement',
    desc: '"ASAM Annual Conference — april." "APA Annual Meeting — may." "American Academy of Addiction Psychiatry Annual Meeting — december." "AOAAM Annual Conference." "Opioid use disorder pharmacotherapy (buprenorphine, naltrexone, methadone) CE." "Stimulant use disorder and methamphetamine treatment CE." "Co-occurring psychiatric disorder management CE." "Motivational interviewing and contingency management CE." All addiction psychiatry professional development on calendar. ASAM conference CME tagged by ABPN primary and addiction subspecialty domain applicability.',
  },
]

const ADDICT_WORKFLOW = [
  { time: 'Annual planning', action: 'ABPN psychiatry MOC CME pace (addiction content weighted), ABPN addiction psychiatry subspecialty CE pace, state medical license biennial CME, DEA 3-year renewal, SAMHSA buprenorphine patient limit reporting (if >30 patients), ASAM Annual Conference, APA Annual Meeting, and ASAM membership all loaded in January. ABPN MOC counter, addiction subspecialty CE counter, state licensure CME, and DEA expiration tracked independently. DEA renewal placed with 90-day advance alert — DEA renewal without advance notice leads to coverage lapses in buprenorphine prescribing.' },
  { time: 'CME completion', action: '"ASAM-approved — opioid use disorder pharmacotherapy: buprenorphine induction and maintenance dosing, extended-release naltrexone initiation timing after opioid abstinence, and methadone referral criteria for patients requiring higher structure, 3 CME, AMA PRA Category 1, ABPN MOC applicable, addiction psychiatry subspecialty applicable — opioid use disorder domain." ABPN MOC counter updates. Addiction subspecialty CE counter updates. State licensure CME updates. Addiction-specific content confirmed at logging.' },
  { time: 'DEA renewal', action: '"DEA registration renewal — 3-year cycle, controlled substance Schedule II-V prescribing authority." DEA renewal placed 90 days before expiration. Addiction psychiatrists whose DEA lapses cannot prescribe buprenorphine, amphetamines for ADHD co-occurring with SUD, benzodiazepines for alcohol withdrawal management, or any Schedule II-V medications. DEA renewal requires no CE but requires timely online submission — the lapse risk is purely logistical. 90-day advance alert converts a logistical oversight risk into a calendar item.' },
  { time: 'Subspecialty CE', action: '"ABPN addiction psychiatry subspecialty CE — stimulant use disorder and methamphetamine management: contingency management protocols, psychostimulant pharmacotherapy trials, and harm reduction integration, 2 CE, addiction psychiatry subspecialty applicable — stimulant use disorder domain, Q2." ABPN addiction psychiatry subspecialty CME requirements tracked by content domain. Addiction subspecialty CE that covers stimulant use disorder, alcohol use disorder, and opioid use disorder domains should be distributed across domains rather than concentrated in one area. Domain distribution tracked in CE log.' },
  { time: 'Renewal audit', action: 'Analytics: ABPN psychiatry MOC CME on pace? Addiction subspecialty CE current and content domain-appropriate? State medical license CME complete? DEA registration current? SAMHSA reporting complete (if applicable)? ASAM membership active? Complete addiction psychiatrist credential audit 90 days before earliest renewal. ABPN, state medical board, DEA, and SAMHSA documentation maintained separately. DEA the highest-stakes item — surfaces first in audit.' },
]

export default function ForAddictionPsychiatristsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Addiction Psychiatrists"
        title={
          <>
            ABPN MOC and addiction subspecialty maintained.
            <br />
            <em className="not-italic text-gold">DEA current. Buprenorphine prescribing protected.</em>
          </>
        }
        lede="Addiction psychiatrists manage ABPN psychiatry continuous MOC with addiction psychiatry-specific content, ABPN addiction psychiatry subspecialty certification with separate content domain requirements, state medical license biennial CME, DEA 3-year registration critical for buprenorphine and all controlled substance prescribing authority, SAMHSA buprenorphine patient limit reporting requirements, and professional development at ASAM and APA simultaneously. Momenties tracks CME by addiction psychiatrist credential, surfaces renewal deadlines 90 days early, and manages the full addiction psychiatrist credential calendar in one view."
        crumbs={[{ label: 'For Addiction Psychiatrists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How addiction psychiatrists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for addiction psychiatrist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Addiction psychiatrist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every ABPN MOC cycle, addiction subspecialty window, and DEA renewal.</h2>
          </Reveal>
          <div className="space-y-3">
            {ADDICT_WORKFLOW.map((step, i) => (
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
                &ldquo;My DEA renewal is the credential I&apos;m most paranoid about. A lapse doesn&apos;t mean a paperwork delay — it means I stop being able to prescribe buprenorphine to the patients who depend on it. I had one near-miss where I got the renewal notice, set it aside to handle after a busy call week, and then found it again 10 days before expiration. ABPN tracks my psychiatry MOC continuously and my addiction subspecialty separately — they have different content requirements even though they cover similar ground. State license is biennial and hits on a different cycle entirely. I also do annual SAMHSA reporting. Having all of it in one calendar where the DEA renewal shows up 90 days early is the only thing that gives me confidence I won&apos;t miss the credential that directly affects my patients&apos; access to care.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">D</div>
                <div>
                  <div className="text-sm font-medium text-foreground">David M., MD</div>
                  <div className="text-xs text-muted-foreground">Addiction psychiatrist, outpatient SUD and co-occurring disorders program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All addiction psychiatrist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPN psychiatry board MOC CME — continuous, addiction content weighted',
                'ABPN addiction psychiatry subspecialty — addiction domain CE tracking',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year (buprenorphine prescribing authority)',
                'SAMHSA buprenorphine patient limit reporting — annual (if >30 patients)',
                'Annual opioid use disorder pharmacotherapy update CE',
                'ASAM membership renewal — annual',
                'ASAM and APA conference CME planning by ABPN primary and addiction subspecialty applicability',
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
        title="ABPN MOC and addiction subspecialty maintained."
        subtitle="CME tracking with addiction content requirements, DEA renewal 90 days early, buprenorphine waiver compliance, and professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
