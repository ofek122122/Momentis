import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Emergency Physicians — ABP or ABEM MOC CME renewal, pediatric emergency medicine credential management',
  description:
    'Pediatric emergency physicians manage ABP or ABEM primary board MOC with pediatric emergency medicine subspecialty content, ABP pediatric emergency medicine subspecialty certification or ABEM emergency medicine primary on an independent cycle, PALS and PEARS 2-year renewals, state medical license biennial CME, DEA 3-year renewal, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full pediatric emergency physician credential calendar.',
  alternates: { canonical: '/for/pediatric-emergency-physicians' },
  openGraph: {
    title: 'Momenties for Pediatric Emergency Physicians',
    description: 'ABP or ABEM MOC CME renewal, pediatric emergency medicine credential management.',
    url: '/for/pediatric-emergency-physicians',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for dual-pathway PEM board certification and primary board independently',
    desc: 'Pediatric emergency physicians may be certified through two pathways: the pediatrics pathway (ABP general pediatrics primary + ABP pediatric emergency medicine subspecialty) or the emergency medicine pathway (ABEM emergency medicine primary + ABP pediatric emergency medicine subspecialty). Each pathway creates a different set of concurrent certification requirements. ABP pediatrics MOC requires general pediatric CME; ABEM emergency medicine MOC requires emergency medicine CME; ABP pediatric emergency medicine subspecialty requires PEM-specific content. State medical license biennial CME runs independently.',
  },
  {
    icon: Clock,
    title: 'Pediatric emergency physician multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC (pediatrics pathway) OR ABEM emergency medicine MOC (EM pathway) — continuous CME." "ABP pediatric emergency medicine subspecialty — PEM content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "PALS — 2-year renewal." "PEARS — 2-year renewal." "ACLS (if required by institution) — 2-year renewal." "AAEM or AAP membership — annual." All pediatric emergency physician credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'PALS and PEARS renewal sequencing and PEM procedural credentialing analytics',
    desc: 'Pediatric emergency physicians must maintain PALS (Pediatric Advanced Life Support) every 2 years for hospital credentialing in the pediatric emergency department. Some institutions also require PEARS (Pediatric Emergency Assessment, Recognition and Stabilization) separately from PALS. PALS and PEARS renewals on a 2-year cycle can drift out of alignment — one expiring 6 months before the other — creating two separate renewal scheduling events per cycle. PED procedural credentialing (procedural sedation, cricothyrotomy, intraosseous access, lumbar puncture) may require annual case volume documentation or simulation competency.',
  },
  {
    icon: Users,
    title: 'ACEP, AAP, and pediatric emergency medicine professional involvement',
    desc: '"ACEP Scientific Assembly — october." "AAP National Conference — october." "SAEM Annual Meeting — may." "PEM Fellows Conference." "Pediatric sepsis and shock management CE — Pediatric Surviving Sepsis Campaign updates." "Pediatric trauma and non-accidental trauma CE — TEN-4 criteria, PECARN validation." "Pediatric toxicology CE — ingestion management, antidotal therapy." "Pediatric procedural sedation CE — ketamine, dexmedetomidine, propofol protocols." All pediatric emergency medicine professional development on calendar. ACEP and AAP conference CME tagged by primary board and PEM subspecialty applicability.',
  },
]

const PEM_WORKFLOW = [
  { time: 'Annual planning', action: 'Primary MOC CME pace (ABP pediatrics content or ABEM EM content, depending on pathway), ABP PEM subspecialty CE pace (PEM-specific content), state medical license biennial CME, DEA 3-year renewal, PALS 2-year cycle, PEARS 2-year cycle (if institutional requirement), ACEP Annual Meeting, AAP National Conference, and ACEP or AAP membership all loaded in January. Primary MOC counter, PEM subspecialty counter, and state licensure CME tracked independently. PALS and PEARS expiration dates tracked separately.' },
  { time: 'CE completion', action: '"ACEP-approved — pediatric septic shock: Pediatric Surviving Sepsis Campaign 2024 update, early goal-directed fluid resuscitation with balanced crystalloid, vasopressor initiation in fluid-refractory shock, and corticosteroid criteria in catecholamine-refractory shock, 2 CME, AMA PRA Category 1, ABP MOC applicable, PEM subspecialty applicable — critical care and shock domain." Primary MOC counter updates. PEM subspecialty counter updates. State licensure CME updates.' },
  { time: 'PALS renewal', action: '"PALS renewal — 2-year cycle. PEARS renewal — 2-year cycle (if institutional requirement)." PALS and PEARS renewals placed with 6-week advance alerts. PALS renewal may require scheduling at a specific AHA-authorized training center depending on institutional requirements. PEARS renewal — if required separately — placed with an independent expiration date that may not align with PALS. Both placed with their actual expiration dates so that the 6-week alert triggers independently for each rather than assuming they expire simultaneously.' },
  { time: 'Sim competency', action: '"Annual pediatric procedural simulation competency — neonatal resuscitation with NRP algorithm, pediatric rapid sequence intubation with videolaryngoscopy, and intraosseous access in the decompensated pediatric patient, 2 CME, Q1." Annual simulation competency placed for pediatric emergency physicians at simulation-center-credentialed institutions. Joint Commission and departmental quality standards may require documented annual simulation competency for procedural privileges — placed as an institutional requirement separate from ABP and ABEM MOC.' },
  { time: 'Renewal audit', action: 'Analytics: Primary board MOC CME on pace (ABP pediatrics or ABEM EM)? ABP PEM subspecialty CE content-appropriate? State medical license CME complete? DEA valid? PALS current? PEARS current? Annual simulation competency documented? ACEP or AAP membership active? Complete pediatric emergency physician credential audit 90 days before earliest renewal.' },
]

export default function ForPediatricEmergencyPhysiciansPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Emergency Physicians"
        title={
          <>
            PEM subspecialty and primary board maintained.
            <br />
            <em className="not-italic text-gold">PALS and PEARS current. Dual pathway tracked.</em>
          </>
        }
        lede="Pediatric emergency physicians manage primary board certification (ABP pediatrics or ABEM emergency medicine) and ABP pediatric emergency medicine subspecialty on independent cycles with different CME content requirements depending on the training pathway, state medical license biennial CME, DEA 3-year registration, PALS and PEARS 2-year renewals on potentially misaligned expiration dates, annual simulation-based procedural competency at credentialed institutions, and professional development at ACEP and AAP simultaneously. Momenties tracks CME by PEM physician credential, surfaces renewal deadlines 90 days early, and manages the full credential calendar in one view."
        crumbs={[{ label: 'For Pediatric Emergency Physicians' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric emergency physicians use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric emergency physician credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric emergency physician credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every primary board and PEM subspecialty cycle, PALS and PEARS renewals, and annual simulation competency.</h2>
          </Reveal>
          <div className="space-y-3">
            {PEM_WORKFLOW.map((step, i) => (
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
                &ldquo;I trained through pediatrics so I have ABP general pediatrics and ABP pediatric emergency medicine — two ABP credentials with different CME requirements. My colleague trained through emergency medicine and has ABEM plus the same ABP PEM subspecialty, but their primary MOC is emergency medicine content. We work in the same department but our credential management is completely different. My institution requires both PALS and PEARS separately and they expired 7 months apart because I took them in different years. DEA is 3 years, state license is biennial. I do annual sim competency for procedural credentialing. Before Momenties I was tracking three credential systems and two separate life support courses in my head. I missed my PEARS window by 3 weeks because I confused its expiration with my PALS date.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Jennifer Q., MD, FAAP, FACEP</div>
                  <div className="text-xs text-muted-foreground">Pediatric emergency physician, academic children&apos;s hospital PED</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric emergency physician credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC (pediatrics pathway) or ABEM EM MOC (EM pathway)',
                'ABP pediatric emergency medicine subspecialty — PEM content domains',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'PALS certification — 2-year renewal (independent expiration date)',
                'PEARS certification — 2-year renewal (independent expiration date)',
                'Annual simulation competency documentation — procedural credentialing',
                'ACEP and AAP conference CME planning by primary board and PEM applicability',
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
        title="PEM subspecialty and primary board maintained."
        subtitle="CME tracking for dual-pathway PEM board certification, independent PALS and PEARS renewals, annual simulation competency, and professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
