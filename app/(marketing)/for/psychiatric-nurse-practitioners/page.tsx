import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Psychiatric Nurse Practitioners — PMHNP-BC CE renewal, psychiatric NP credential management',
  description:
    'Psychiatric nurse practitioners manage ANCC PMHNP-BC certification biennial 30 CE renewal with psychiatric content, state APRN licensure CE renewal, DEA 3-year registration for controlled substance prescribing, SAMHSA buprenorphine waiver requirements, annual suicide risk assessment competency, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full psychiatric NP credential calendar.',
  alternates: { canonical: '/for/psychiatric-nurse-practitioners' },
  openGraph: {
    title: 'Momenties for Psychiatric Nurse Practitioners',
    description: 'PMHNP-BC CE renewal, psychiatric NP credential management.',
    url: '/for/psychiatric-nurse-practitioners',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for ANCC PMHNP-BC and state APRN licensure independently',
    desc: 'Psychiatric mental health nurse practitioners hold ANCC PMHNP-BC certification requiring 30 CE hours every 5 years with psychiatric and mental health content from pharmacology and non-pharmacologic treatment domains. State APRN licensure renews biennially with separate CE requirements and provider approval standards. Psychiatric NPs holding both PMHNP-BC and a primary NP certification (FNP-BC) carry two independent ANCC renewal cycles. DEA registration 3-year cycle critical for psychotropic medication prescribing. SAMHSA buprenorphine waiver (DATA 2000) training requirements for OUD treatment tracked separately.',
  },
  {
    icon: Clock,
    title: 'Psychiatric NP multi-credential renewal calendar',
    desc: '"ANCC PMHNP-BC — 30 CE/5 years, psychiatric content." "State APRN licensure — biennial CE." "DEA registration — 3-year renewal." "SAMHSA buprenorphine waiver CE — OUD treatment compliance." "Annual suicide risk assessment competency." "APNA membership — annual." "State APRN prescriptive authority renewal (if separate)." All psychiatric NP credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'ANCC psychiatric content requirements and buprenorphine waiver analytics',
    desc: 'ANCC PMHNP-BC renewal requires CE from two content categories: pharmacology (at least 25 of 30 CE hours) and non-pharmacologic treatment. General nursing CE does not satisfy PMHNP-BC content requirements — psychiatric pharmacology CE from ANCC-approved providers required. SAMHSA DATA 2000 waiver for buprenorphine prescribing requires initial training and may require continuing education updates as regulations evolve — separate from ANCC CE. Annual suicide risk assessment competency required by many institutions and state regulations for prescribers treating mental health conditions.',
  },
  {
    icon: Users,
    title: 'APNA, APA, and psychiatric nursing professional involvement',
    desc: '"APNA Annual Conference — october." "APA Annual Meeting." "ISPN Congress." "Psychopharmacology CE — antipsychotic monitoring and metabolic syndrome, mood stabilizer pharmacokinetics." "Trauma-informed care certification CE." "Ketamine and esketamine prescribing CE." "Clozapine monitoring and REMS compliance CE." "Motivational interviewing and CBT integration CE." All psychiatric NP professional development on calendar. APNA conference CE tagged by ANCC PMHNP-BC pharmacology and non-pharmacologic domain applicability.',
  },
]

const PMHNP_WORKFLOW = [
  { time: 'Annual planning', action: 'ANCC PMHNP-BC 30-CE/5yr pace with pharmacology and non-pharmacology domain tracking, state APRN biennial CE, DEA 3-year renewal, SAMHSA buprenorphine waiver compliance, annual suicide risk assessment competency, APNA Annual Conference, and APNA membership all loaded in January. PMHNP-BC CE counter (pharmacology hours separated from non-pharmacology), state APRN CE, and DEA expiration tracked independently.' },
  { time: 'CE completion', action: '"ANCC-approved — psychopharmacology of treatment-resistant depression: augmentation strategies with lithium and atypical antipsychotics, esketamine mechanism and monitoring protocol, and ECT patient selection criteria, 3 CE, pharmacology domain, PMHNP-BC applicable." PMHNP-BC pharmacology counter updates (toward 25 of 30 CE pharmacology requirement). State APRN CE updates. Non-pharmacology CE logged separately when attending therapy-focused CE.' },
  { time: 'DEA and waiver', action: '"DEA renewal — 3-year cycle." "SAMHSA DATA 2000 buprenorphine waiver compliance — current prescribing volume documentation and any required CE updates, Q1." DEA renewal placed with 12-month advance alert — critical for uninterrupted psychotropic prescribing. Buprenorphine waiver compliance documentation placed annually as SAMHSA may update waiver requirements. DEA lapse immediately affects ability to prescribe controlled psychiatric medications — including benzodiazepines, stimulants, and buprenorphine.' },
  { time: 'Suicide risk CE', action: '"Annual suicide risk assessment competency — Columbia Suicide Severity Rating Scale (C-SSRS) interpretation, safety planning documentation, and means restriction counseling, 1 CE, Q1." Annual suicide risk assessment competency placed as a regulatory and institutional requirement for prescribers treating psychiatric patients. New York, California, and other states require annual suicide risk assessment training for all mental health prescribers. Placed at Q1 to align with institutional annual training cycles.' },
  { time: 'Renewal audit', action: 'Analytics: PMHNP-BC CE on pace (30/5yr)? Pharmacology domain (25 CE) and non-pharmacology (5 CE) satisfied? State APRN CE complete? DEA valid? Buprenorphine waiver compliance current? Annual suicide risk competency documented? APNA membership active? Complete psychiatric NP credential audit 90 days before earliest renewal. ANCC, state APRN board, DEA, and SAMHSA documentation maintained separately.' },
]

export default function ForPsychiatricNursePractitionersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Psychiatric Nurse Practitioners"
        title={
          <>
            PMHNP-BC certification and APRN licensure maintained.
            <br />
            <em className="not-italic text-gold">DEA current. Pharmacology CE domains tracked.</em>
          </>
        }
        lede="Psychiatric nurse practitioners manage ANCC PMHNP-BC certification with 30 CE hours over 5 years split between pharmacology and non-pharmacologic treatment domains, state APRN licensure biennial CE on an independent cycle, DEA 3-year registration critical for psychotropic and controlled substance prescribing, SAMHSA buprenorphine waiver compliance for OUD treatment, annual suicide risk assessment competency as a regulatory requirement, and professional development at APNA and APA simultaneously. Momenties tracks CE by psychiatric NP credential, surfaces renewal deadlines 90 days early, and manages the full psychiatric NP credential calendar in one view."
        crumbs={[{ label: 'For Psychiatric Nurse Practitioners' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How psychiatric nurse practitioners use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for psychiatric NP credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Psychiatric NP credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every PMHNP-BC renewal cycle, DEA registration, and annual psychiatric competency requirement.</h2>
          </Reveal>
          <div className="space-y-3">
            {PMHNP_WORKFLOW.map((step, i) => (
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
                &ldquo;PMHNP-BC through ANCC requires 30 CE with specific content splits — 25 hours in pharmacology and 5 in non-pharmacologic treatment. It&apos;s not just any nursing CE. My state APRN license renews every 2 years with different approved providers and different hour requirements. DEA is every 3 years and I need it for every controlled substance I prescribe — benzodiazepines, stimulants, buprenorphine, everything. My state requires annual suicide risk assessment training. And I document my buprenorphine waiver compliance separately. Five separate credential systems and I was tracking them in my email reminders until I started using Momenties. The pharmacology domain tracking alone was worth it — I was always guessing whether I had enough pharmacology hours.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">M</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Michelle R., PMHNP-BC</div>
                  <div className="text-xs text-muted-foreground">Psychiatric nurse practitioner, outpatient psychiatry and addiction medicine practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All psychiatric NP credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ANCC PMHNP-BC CE — 30 hours/5 years (pharmacology 25 CE, non-pharmacologic 5 CE)',
                'State APRN licensure CE — biennial, state board-approved providers',
                'DEA registration renewal — 3-year (controlled substance prescribing)',
                'SAMHSA buprenorphine waiver compliance — OUD treatment documentation',
                'Annual suicide risk assessment competency — regulatory requirement',
                'State APRN prescriptive authority renewal (if separate from licensure)',
                'APNA membership renewal — annual',
                'APNA conference CE planning by ANCC pharmacology and non-pharmacology domain applicability',
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
        title="PMHNP-BC certification and APRN licensure maintained."
        subtitle="CE tracking with pharmacology domain requirements, DEA renewal, buprenorphine waiver compliance, and psychiatric professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
