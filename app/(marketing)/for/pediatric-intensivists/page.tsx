import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Intensivists — ABP MOC CME renewal, PICU physician credential management',
  description:
    'Pediatric intensivists manage ABP general pediatrics MOC continuous CME with pediatric critical care subspecialty content, ABP pediatric critical care medicine subspecialty certification on an independent cycle, PALS 2-year renewal, ACLS 2-year renewal, state medical license biennial CME, DEA 3-year renewal, annual PICU procedural competency, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full pediatric intensivist credential calendar.',
  alternates: { canonical: '/for/pediatric-intensivists' },
  openGraph: {
    title: 'Momenties for Pediatric Intensivists',
    description: 'ABP MOC CME renewal, PICU physician credential management.',
    url: '/for/pediatric-intensivists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP pediatrics MOC and pediatric critical care subspecialty independently',
    desc: 'Pediatric intensivists hold ABP general pediatrics primary certification under continuous MOC and ABP pediatric critical care medicine subspecialty certification on a separate cycle — two ABP credentials with different CME content requirements. ABP general pediatrics MOC requires general pediatric CME; ABP pediatric critical care subspecialty requires critical care-specific content including mechanical ventilation, hemodynamic monitoring, sepsis and shock management, ECMO, and pediatric organ failure. State medical license biennial CME runs on a third independent cycle. PALS and ACLS 2-year renewals are hospital credentialing requirements separate from all board CE.',
  },
  {
    icon: Clock,
    title: 'Pediatric intensivist multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC — continuous CME." "ABP pediatric critical care subspecialty — critical care content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "PALS — 2-year renewal." "ACLS — 2-year renewal." "Annual PICU procedural competency — intubation, central line, arterial line." "SCCM membership — annual." All pediatric intensivist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'ECMO program credentialing and annual PICU procedural competency analytics',
    desc: 'Pediatric intensivists at ELSO-member ECMO programs must satisfy ECMO program credentialing requirements including documented ECMO management competency and annual continuing education specific to ECMO cannulation and circuit management. ECMO credentialing is a program-level requirement separate from ABP MOC. Annual PICU procedural competency documentation for Joint Commission credentialing covers endotracheal intubation (including difficult airway), central venous line placement (femoral, internal jugular, subclavian), arterial line placement, and thoracentesis — each requiring documented annual case volumes or simulation competency.',
  },
  {
    icon: Users,
    title: 'SCCM, AAP, and pediatric critical care professional involvement',
    desc: '"SCCM Critical Care Congress — february." "AAP National Conference — october." "PAS Annual Meeting — april." "ESICM Annual Congress (Europe)." "Pediatric sepsis CE — Pediatric Surviving Sepsis Campaign 2024 updates." "PICU mechanical ventilation CE — lung-protective strategies in pediatric ARDS, PRISM." "ECMO management CE — VA-ECMO vs. VV-ECMO selection, anticoagulation protocols." "Pediatric organ failure and renal replacement therapy CE." All pediatric critical care professional development on calendar. SCCM conference CME tagged by ABP general and subspecialty applicability.',
  },
]

const PICU_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP general pediatrics MOC CME pace (critical care content weighted), ABP pediatric critical care subspecialty CE pace, state medical license biennial CME, DEA 3-year renewal, PALS 2-year cycle, ACLS 2-year cycle, annual PICU procedural competency, ECMO program recredentialing (if ECMO program), SCCM Critical Care Congress, AAP National Conference, and SCCM membership all loaded in January. ABP primary counter, PCCM subspecialty counter, and state licensure CME tracked independently.' },
  { time: 'CE completion', action: '"SCCM-approved — pediatric ARDS management: PALICC-2 criteria update, lung-protective ventilation targets in pediatric vs. adult ARDS, high-frequency oscillatory ventilation decision criteria, and prone positioning protocols for moderate-severe pediatric ARDS, 2 CME, AMA PRA Category 1, ABP MOC applicable, pediatric critical care subspecialty applicable — respiratory failure domain." ABP primary counter updates. PCCM subspecialty counter updates. State licensure CME updates.' },
  { time: 'PALS + ACLS', action: '"PALS renewal — 2-year cycle. ACLS renewal — 2-year cycle." PALS and ACLS renewals placed with independent expiration dates — 6-week advance alerts for each. For pediatric intensivists who completed PALS and ACLS in the same year, renewals may land simultaneously, but any offset between completion dates creates independent renewal events. PALS and ACLS placed separately to surface any expiration date drift between the two certifications.' },
  { time: 'Procedural competency', action: '"Annual PICU procedural competency — emergent intubation simulation: RSI with ketamine and rocuronium, videolaryngoscopy technique, and failure-to-intubate protocol with LMA rescue; central venous line: femoral PICU protocol with ultrasound guidance, Q1." Annual procedural competency placed as Q1 institutional credentialing requirement. Joint Commission standards for procedural privileges require documented competency maintenance — for invasive PICU procedures, simulation-based annual competency placed before spring PICU staffing reviews.' },
  { time: 'Renewal audit', action: 'Analytics: ABP general pediatrics MOC CME on pace? ABP pediatric critical care subspecialty content requirements satisfied? State medical license CME complete? DEA valid? PALS current? ACLS current? Annual procedural competency documented? ECMO credentialing current (if applicable)? SCCM membership active? Complete pediatric intensivist credential audit 90 days before earliest renewal.' },
]

export default function ForPediatricIntensivistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Intensivists"
        title={
          <>
            ABP MOC and PCCM subspecialty maintained.
            <br />
            <em className="not-italic text-gold">PALS and ACLS current. ECMO credentialing tracked.</em>
          </>
        }
        lede="Pediatric intensivists manage ABP general pediatrics continuous MOC with pediatric critical care subspecialty content, ABP PCCM subspecialty certification on a separate cycle, state medical license biennial CME, DEA 3-year registration, PALS and ACLS 2-year renewals on potentially independent expiration dates, annual PICU procedural competency documentation for Joint Commission credentialing, ECMO program credentialing requirements at ELSO-member centers, and professional development at SCCM and AAP simultaneously. Momenties tracks CME by pediatric intensivist credential, surfaces renewal deadlines 90 days early, and manages the full credential calendar in one view."
        crumbs={[{ label: 'For Pediatric Intensivists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric intensivists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric intensivist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric intensivist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every ABP MOC cycle, PCCM subspecialty window, PALS and ACLS renewals, and annual PICU procedural competency.</h2>
          </Reveal>
          <div className="space-y-3">
            {PICU_WORKFLOW.map((step, i) => (
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
                &ldquo;ABP tracks my general pediatrics certification and my pediatric critical care certification separately. PCCM has different CME content requirements than general pediatrics — a critical care-specific conference counts for my PCCM subspecialty but may not satisfy my general peds MOC content requirements. I also need PALS and ACLS — they expired 8 months apart because I took ACLS as an attending before I finished my PCCM fellowship. Our program is ELSO-certified which means there&apos;s ECMO program credentialing on top of my personal credentials. Joint Commission requires annual procedural competency documentation for my PICU privileges. I started using Momenties after I realized I had 6 different credential tracking items and no single place to see them all. The PALS and ACLS drift is the thing that surprises people — they assume they expire together but they often don&apos;t.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">T</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Theresa M., MD</div>
                  <div className="text-xs text-muted-foreground">Pediatric intensivist and ECMO medical director, academic children&apos;s hospital PICU</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric intensivist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC CME — continuous, critical care content weighted',
                'ABP pediatric critical care subspecialty — mechanical ventilation, sepsis, ECMO domains',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'PALS certification — 2-year renewal (independent expiration tracking)',
                'ACLS certification — 2-year renewal (independent expiration tracking)',
                'Annual PICU procedural competency — Joint Commission credentialing',
                'ECMO program credentialing — ELSO-member center requirements (if applicable)',
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
        title="ABP MOC and PCCM subspecialty maintained."
        subtitle="CME tracking for ABP dual certification, independent PALS and ACLS renewals, ECMO credentialing, and pediatric critical care professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
