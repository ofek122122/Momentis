import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Forensic Pathologists — ABP MOC CME renewal, forensic pathology credential management',
  description:
    'Forensic pathologists manage ABP anatomic pathology and forensic pathology MOC continuous CME, state medical license biennial CME, state forensic pathologist or medical examiner certification in some jurisdictions, ABMDI death investigation certification if held, mass fatality incident training, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full forensic pathologist credential calendar.',
  alternates: { canonical: '/for/forensic-pathologists' },
  openGraph: {
    title: 'Momenties for Forensic Pathologists',
    description: 'ABP MOC CME renewal, forensic pathology credential management.',
    url: '/for/forensic-pathologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP MOC dual subspecialty and state medical license renewal',
    desc: 'Forensic pathologists hold ABP (American Board of Pathology) certification in Anatomic Pathology with Forensic Pathology subspecialty — two ABP certifications under a single continuous MOC program. Forensic pathology CME content requirements are tracked within ABP MOC for both AP and forensic subspecialty domains. State medical license biennial CME runs independently. Some jurisdictions (California, Texas, New York, others) require separate state forensic pathologist or medical examiner certification with its own renewal requirements. ABMDI (death investigation certification) adds another independent cycle.',
  },
  {
    icon: Clock,
    title: 'Forensic pathologist multi-credential renewal calendar',
    desc: '"ABP MOC — continuous CME, anatomic pathology + forensic pathology domains." "State medical license — biennial CME." "State forensic pathologist/ME certification — jurisdiction-specific." "ABMDI death investigation certification — 5-year renewal (if held)." "Mass fatality incident training — periodic." "NAME membership — annual." "AAFS membership — annual." All forensic pathologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'ABP forensic pathology domain content and death investigation certification analytics',
    desc: 'ABP MOC forensic pathology domain requires CME content in forensic pathology topics — general anatomic pathology CME does not satisfy the forensic subspecialty content requirements. Forensic pathologists who are also ABMDI-certified (American Board of Medicolegal Death Investigators) maintain a separate 5-year credentialing cycle from ABMDI with its own CE requirements. Mass fatality incident response training required by many medical examiner offices as an institutional competency separate from board certification. Toxicology interpretation updates tracked as forensic practice CME separately from general pathology toxicology.',
  },
  {
    icon: Users,
    title: 'NAME, AAFS, and forensic professional involvement',
    desc: '"NAME Annual Meeting — october." "AAFS Annual Scientific Meeting — february." "IAI Annual Educational Conference." "Forensic toxicology interpretation CE." "Gunshot wound analysis and wound ballistics CE." "Child death investigation and SIDS/SUDC CE." "Sexual assault forensic examination protocols." "Mass fatality identification and disaster victim identification CE." All forensic pathology professional development on calendar. NAME and AAFS conference CME tagged by ABP MOC forensic domain applicability.',
  },
]

const FP_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP MOC CME pace (AP and forensic domains tracked separately), state medical license biennial CME, ABMDI 5-year CE pace (if held), state ME certification renewal (if applicable), NAME Annual Meeting, AAFS Annual Meeting, and NAME membership all loaded in January. ABP MOC CME counter and state licensure CME tracked independently with forensic subspecialty domain coverage monitored separately.' },
  { time: 'CME completion', action: '"NAME-approved — blunt force trauma: wound pattern analysis, skin and subcutaneous tissue injury classification, and bone injury characterization in homicidal versus accidental mechanisms, 2 CME, ABP MOC applicable — forensic pathology domain." ABP MOC counter updates. Forensic domain content confirmed. State licensure CME updates. General anatomic pathology CME logged separately from forensic-specific CME to maintain domain tracking accuracy.' },
  { time: 'Toxicology CE', action: '"Forensic toxicology interpretation CE — postmortem redistribution of drugs and metabolites: fentanyl analog pharmacokinetics, ethanol estimation methodology, and interpretation of antemortem versus postmortem specimens, 2 CME, Q1." Toxicology interpretation CE placed as an annual update requirement for forensic pathologists issuing toxicologic cause of death opinions. Drug landscape changes annually — new fentanyl analogs, novel synthetic cannabinoids, and changing alcohol metabolism standards require annual update CE documented separately.' },
  { time: 'MFI training', action: '"Mass fatality incident response training — DMORT operations, victim identification protocol, and decomposed remains examination, Q3." Mass fatality incident training placed as a periodic institutional requirement for ME offices participating in DMORT or regional mass fatality response teams. Separate from ABP MOC — jurisdictional and institutional emergency preparedness compliance. Placed biennially or as tabletop exercises require, with completion documented for office emergency preparedness records.' },
  { time: 'Renewal audit', action: 'Analytics: ABP MOC CME on pace? Forensic pathology domain content adequate? State medical license CME complete? ABMDI CE current (if applicable)? State ME certification valid (if applicable)? NAME membership active? Complete forensic pathologist credential audit 90 days before earliest renewal. ABP, state board, ABMDI, and jurisdictional ME certification documentation maintained separately.' },
]

export default function ForForensicPathologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Forensic Pathologists"
        title={
          <>
            ABP MOC and state licensure maintained.
            <br />
            <em className="not-italic text-gold">Forensic domain CE tracked. ABMDI credential current.</em>
          </>
        }
        lede="Forensic pathologists manage ABP continuous MOC for both anatomic pathology and forensic pathology subspecialty domains with independent content requirements, state medical license biennial CME, state forensic pathologist certification in applicable jurisdictions, ABMDI death investigation certification on a 5-year independent cycle if held, mass fatality incident training as an institutional preparedness requirement, and professional development at NAME and AAFS simultaneously. Momenties tracks CME by forensic pathologist credential, surfaces renewal deadlines 90 days early, and manages the full forensic pathologist credential calendar in one view."
        crumbs={[{ label: 'For Forensic Pathologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How forensic pathologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for forensic pathologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Forensic pathologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every ABP MOC cycle, ABMDI renewal window, and mass fatality preparedness obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {FP_WORKFLOW.map((step, i) => (
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
                &ldquo;ABP MOC covers both my anatomic pathology and forensic pathology certifications, but the forensic pathology domain has content requirements — I can&apos;t just log general pathology CME and call it done. I also have ABMDI because our office considers it a professional standard. My state medical license renews every 2 years. I keep up with toxicology CE every year because the drug landscape changes — new fentanyl analogs, new synthetic cannabinoids — and I&apos;m signing death certificates that depend on accurate interpretation. That&apos;s an annual obligation even though no organization formally mandates it. Momenties is the only tool I&apos;ve used that could track all of these separately rather than treating them as one pile of CME.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">T</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Thomas A., MD, FCAP</div>
                  <div className="text-xs text-muted-foreground">Forensic pathologist, county medical examiner office</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All forensic pathologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP MOC CME — continuous, AP + forensic pathology domain content',
                'State medical license CME — biennial',
                'ABMDI death investigation certification — 5-year CE renewal (if held)',
                'State forensic pathologist or ME certification (jurisdiction-specific)',
                'Annual forensic toxicology interpretation update — practice requirement',
                'Mass fatality incident response training — institutional preparedness',
                'NAME membership renewal — annual',
                'NAME and AAFS conference CME planning by ABP forensic domain applicability',
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
        title="ABP MOC and state licensure maintained."
        subtitle="CME tracking with forensic domain content requirements, ABMDI renewal calendar, toxicology CE, and forensic professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
