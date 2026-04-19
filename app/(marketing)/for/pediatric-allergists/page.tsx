import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Allergists — ABP MOC CME renewal, pediatric allergy and immunology credential management',
  description:
    'Pediatric allergists manage ABP general pediatrics primary MOC with allergy/immunology subspecialty content, ABAI allergy and immunology subspecialty certification on a separate cycle, ACLS and PALS 2-year renewals, annual oral immunotherapy CE as peanut OIT protocols expand, annual primary immunodeficiency CE as novel gene therapy and replacement therapy approvals reach pediatric patients, state medical license biennial CME, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full credential calendar.',
  alternates: { canonical: '/for/pediatric-allergists' },
  openGraph: {
    title: 'Momenties for Pediatric Allergists',
    description: 'ABP MOC CME renewal, pediatric allergy and immunology credential management.',
    url: '/for/pediatric-allergists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP pediatrics MOC and ABAI allergy/immunology subspecialty independently',
    desc: 'Pediatric allergists hold ABP general pediatrics primary certification under continuous MOC and ABAI (American Board of Allergy and Immunology) allergy and immunology subspecialty certification on a separate cycle — two certifications from two different boards. ABP general pediatrics MOC requires pediatric-breadth content on a continuous cycle. ABAI allergy and immunology subspecialty certification requires allergy/immunology-specific content: food allergy (peanut, tree nut, milk, wheat), drug allergy and hypersensitivity, allergic rhinitis and asthma, atopic dermatitis, urticaria/angioedema, anaphylaxis management, primary immunodeficiency diseases, and allergen immunotherapy. Each board tracks CE independently.',
  },
  {
    icon: Clock,
    title: 'Pediatric allergist multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC — continuous CME." "ABAI allergy and immunology subspecialty — separate cycle." "State medical license — biennial CME." "DEA registration — 3-year renewal." "ACLS — 2-year renewal." "PALS — 2-year renewal." "Annual oral immunotherapy CE — peanut OIT, multi-food OIT, epicutaneous immunotherapy." "Annual primary immunodeficiency CE — gene therapy approvals, immunoglobulin replacement updates." "AAAAI membership — annual." "ACAAI membership — annual." All pediatric allergist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual OIT CE and primary immunodeficiency gene therapy analytics',
    desc: 'Pediatric allergists managing food allergy must maintain CE on oral immunotherapy — Palforzia (peanut allergen powder) is the only FDA-approved peanut OIT product but off-label peanut OIT programs vary widely in protocol, and multi-food OIT for multiple simultaneous allergies is an active research area requiring annual CE. Annual OIT CE ensures current knowledge of dosing escalation protocols, home dosing criteria, reaction management during build-up, and maintenance phase requirements. Annual primary immunodeficiency CE: ADA-SCID gene therapy (Strimvelis), X-linked CGD gene therapy, and RAG1/RAG2 deficiency gene therapy trials require annual CE as new gene therapy approvals change management of conditions previously treated exclusively with HSCT.',
  },
  {
    icon: Users,
    title: 'AAAAI, ACAAI, and pediatric allergy/immunology professional involvement',
    desc: '"AAAAI Annual Meeting — february." "ACAAI Annual Scientific Meeting — november." "EAACI Annual Congress — june." "WAO World Allergy Congress — biennial." "OIT CE — peanut OIT safety data from PALISADE extension trial, AR101 real-world outcomes versus clinical trial, multi-allergen OIT (MOIT) simultaneous desensitization protocols." "Biologic CE — dupilumab in pediatric atopic dermatitis (age 6 months and older), omalizumab in chronic urticaria in children 2+, dupilumab in pediatric EoE, tezepelumab pediatric severe asthma data." "PID CE — ADA-SCID gene therapy outcomes at 5 years, common variable immunodeficiency treatment escalation, selective IgA deficiency management in pediatric patients with recurrent infections." All pediatric allergy/immunology professional development on calendar.',
  },
]

const PEDALLERGY_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP general pediatrics MOC CME pace (allergy/immunology content weighted), ABAI allergy and immunology subspecialty CE pace, state medical license biennial CME, DEA 3-year renewal, ACLS 2-year cycle, PALS 2-year cycle, annual OIT CE, annual PID gene therapy CE, AAAAI Annual Meeting, ACAAI Annual Meeting, and AAAAI membership all loaded in January. ABP primary counter, ABAI subspecialty counter, and state licensure CME tracked independently. ACLS and PALS placed with independent expiration date tracking.' },
  { time: 'CE completion', action: '"AAAAI-approved — dupilumab in pediatric atopic dermatitis: LIBERTY AD PEDS pivotal trial outcomes in ages 6 months to 11 years, dosing by weight category (15 kg, 30 kg thresholds), safety and injection site reactions in infants versus adolescents, itch and sleep interference NRS endpoints in age-appropriate outcome measures, and real-world insurance authorization strategies for pediatric dupilumab, 2 CME, AMA PRA Category 1, ABP MOC applicable, ABAI applicable — atopic dermatitis and biologic domain." Both counters update.' },
  { time: 'OIT CE', action: '"Annual oral immunotherapy CE — multi-food OIT protocols: simultaneous desensitization to peanut, tree nut, milk, and wheat in children 4-17 with multiple food allergies (MOIT PRISM protocol), home build-up dosing safety data, reaction management protocol during OIT escalation phases, school accommodation documentation for children on OIT maintenance, and patient selection criteria for multi-food versus sequential single-food OIT, 3 CME, ABAI applicable, Q1." Annual OIT CE placed Q1. AAAAI annual meeting data on OIT protocols released February.' },
  { time: 'PID CE', action: '"Annual primary immunodeficiency CE — gene therapy update: ADA-SCID gene therapy (Strimvelis) 5-year survival and immune reconstitution outcomes versus HSCT, X-linked SCID lentiviral gene therapy trial data, newborn screening expansion for SCID and additional PID conditions (X-ALD, Krabbe), and IVIG versus SCIG dosing optimization in common variable immunodeficiency by IgG trough and infection frequency, 2 CME, ABAI applicable, Q3." Annual PID CE placed Q3 aligned with ACAAI annual meeting.' },
  { time: 'Renewal audit', action: 'Analytics: ABP general pediatrics MOC CME on pace? ABAI allergy and immunology subspecialty content satisfied? State medical license CME complete? DEA valid? ACLS current? PALS current? Annual OIT CE documented? Annual PID gene therapy CE documented? AAAAI membership active? Complete pediatric allergist credential audit 90 days before earliest renewal.' },
]

export default function ForPediatricAllervistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Allergists"
        title={
          <>
            ABP MOC and ABAI allergy/immunology subspecialty maintained.
            <br />
            <em className="not-italic text-gold">OIT protocol CE current. PID gene therapy knowledge tracked.</em>
          </>
        }
        lede="Pediatric allergists manage ABP general pediatrics continuous MOC and ABAI allergy and immunology subspecialty certification on separate cycles from two different boards, state medical license biennial CME, DEA 3-year registration, ACLS and PALS 2-year renewals on independent expiration dates, annual oral immunotherapy CE as peanut and multi-food OIT protocols evolve, annual primary immunodeficiency CE as gene therapy approvals change management of SCID and CGD in children, and professional development at AAAAI and ACAAI. Momenties tracks CME by credential and manages the full calendar."
        crumbs={[{ label: 'For Pediatric Allergists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric allergists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric allergist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric allergist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABP and ABAI MOC cycles, and annual OIT protocol and primary immunodeficiency CE requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {PEDALLERGY_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold two certifications from two different boards — ABP for general pediatrics and ABAI for allergy and immunology. They track CE independently and have different renewal structures. OIT is the area that moves fastest — the field went from no approved products to Palforzia to off-label multi-food OIT protocols in under five years. I have patients on OIT right now and I need annual CE on reaction management and maintenance protocols before I update my practice, not before my next ABAI renewal. The PID gene therapy space is changing rapidly — SCID management has been transformed by gene therapy trials and I need to know the outcomes data before I counsel families. Dupilumab in infants is new. ACLS and PALS are on independent cycles. State license biennial. The credential calendar was too complex to manage mentally.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">R</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Rachel B., MD</div>
                  <div className="text-xs text-muted-foreground">Pediatric allergist and oral immunotherapy program director, academic children&apos;s hospital</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric allergist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC CME — continuous, allergy/immunology content weighted',
                'ABAI allergy and immunology subspecialty — food allergy, asthma, PID, immunotherapy domains',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'ACLS certification — 2-year renewal (independent expiration tracking)',
                'PALS certification — 2-year renewal (independent expiration tracking)',
                'Annual OIT CE — peanut and multi-food oral immunotherapy protocol updates',
                'AAAAI and ACAAI conference CME planning by ABP and ABAI applicability',
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
        title="ABP MOC and ABAI allergy/immunology subspecialty maintained."
        subtitle="CME tracking for ABP and ABAI dual-board certification, annual OIT protocol CE, primary immunodeficiency CE, ACLS and PALS independent renewals, and pediatric allergy/immunology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
