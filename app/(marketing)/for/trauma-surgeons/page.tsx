import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Trauma Surgeons — ABS MOC CME renewal, trauma surgeon credential management',
  description:
    'Trauma surgeons manage ABS MOC continuous CME with surgical content, ATLS 4-year renewal independent from ABS MOC, state medical license biennial CME, DEA 3-year renewal, trauma center credentialing with volume and outcomes documentation, ACGME case log requirements for fellowship directors, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full trauma surgeon credential calendar.',
  alternates: { canonical: '/for/trauma-surgeons' },
  openGraph: {
    title: 'Momenties for Trauma Surgeons',
    description: 'ABS MOC CME renewal, ATLS renewal, trauma surgeon credential management.',
    url: '/for/trauma-surgeons',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABS MOC, ATLS renewal, and state medical license independently',
    desc: 'Trauma surgeons maintain ABS (American Board of Surgery) certification under continuous MOC with surgical content CME requirements. ATLS (Advanced Trauma Life Support) renewal is a 4-year cycle from the American College of Surgeons — completely separate from ABS MOC with its own skill-based recertification examination. State medical license biennial CME runs independently. Trauma surgeons with fellowship training in surgical critical care hold an additional ABST or ABS critical care certification on an independent MOC cycle. Each tracked separately.',
  },
  {
    icon: Clock,
    title: 'Trauma surgeon multi-credential renewal calendar',
    desc: '"ABS MOC — continuous CME, surgical content." "ATLS recertification — 4-year, ACS skill examination." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Trauma center credentialing — annual volume and outcomes." "ACLS — 2-year renewal." "ACS membership — annual." All trauma surgeon credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Trauma center credentialing and damage control surgery analytics',
    desc: 'Level I and Level II trauma centers require annual surgeon credentialing review covering trauma volume thresholds, outcomes data, and performance improvement participation — separate from ABS MOC. Trauma surgeons at teaching programs have ACGME case log documentation requirements distinct from personal CME. Damage control resuscitation and damage control surgery CE tracked within ABS MOC surgical domain. Massive transfusion protocol training as institutional annual competency separate from board certification. Each tracked independently.',
  },
  {
    icon: Users,
    title: 'AAST, ACS, and trauma professional involvement',
    desc: '"AAST Annual Scientific Assembly — september." "ACS Clinical Congress — october." "EAST Annual Scientific Assembly — january." "WTA Annual Meeting — february." "Damage control surgery masterclass CE." "Trauma ultrasound (FAST) competency maintenance." "Burn management CE (if applicable)." "Military-civilian trauma exchange programs." All trauma surgery professional development on calendar. AAST and ACS conference CME tagged by ABS MOC surgical domain applicability.',
  },
]

const TS_WORKFLOW = [
  { time: 'Annual planning', action: 'ABS MOC CME pace (surgical content), ATLS 4-year renewal cycle, state medical license biennial CME, ACLS 2-year cycle, DEA 3-year renewal, annual trauma center credentialing review, AAST Annual Assembly, ACS Clinical Congress, and ACS membership all loaded in January. ABS MOC counter and state licensure CME tracked independently. ATLS 4-year expiration tracked with 12-month lead alert.' },
  { time: 'CME completion', action: '"AAST-approved — damage control resuscitation in penetrating abdominal trauma: permissive hypotension thresholds, balanced blood product ratios, and transition from DCR to definitive surgery, 2 CME, AMA PRA Category 1, ABS MOC applicable — trauma and surgical critical care domain." ABS MOC counter updates. State licensure CME updates. Damage control and trauma-specific CME tagged by subspecialty domain for ABS content tracking.' },
  { time: 'ATLS renewal', action: '"ATLS recertification — 4-year renewal, ACS skill station and written examination, Q3." ATLS recertification placed with 12-month advance alert — ATLS course registration requires planning for a 2-day skills course. ATLS recertification requires passing skill stations (airway, chest, abdominal assessment) and written examination — not just a CE course. Many trauma centers require current ATLS as a credentialing prerequisite. ATLS lapse affects both hospital credentialing and ACS verification eligibility.' },
  { time: 'Trauma center', action: '"Annual trauma center credentialing — volume review, mortality analysis, performance improvement participation, and morbidity conference documentation, Q1." Annual trauma credentialing placed as an ACS verification requirement for Level I and II trauma centers. Credentialing review requires documented trauma activations, operative interventions, outcomes data, and PI participation. Separate from ABS MOC — institutional trauma program compliance, not board certification.' },
  { time: 'Renewal audit', action: 'Analytics: ABS MOC CME on pace? Surgical content requirements met? State medical license CME complete? ATLS current? ACLS current? DEA valid? Annual trauma center credentialing documented? ACS membership active? Complete trauma surgeon credential audit 90 days before earliest renewal. ABS, state board, ACS verification, and DEA documentation maintained separately.' },
]

export default function ForTraumaSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Trauma Surgeons"
        title={
          <>
            ABS MOC and state licensure maintained.
            <br />
            <em className="not-italic text-gold">ATLS current. Trauma center credentialing documented.</em>
          </>
        }
        lede="Trauma surgeons manage ABS MOC continuous CME with surgical content requirements, ATLS 4-year recertification on a completely independent cycle requiring a skills examination rather than just CE hours, state medical license biennial CME, DEA 3-year registration, annual trauma center credentialing review with volume and outcomes documentation for ACS verification, ACLS 2-year renewal, and professional development at AAST and ACS simultaneously. Momenties tracks CME by trauma surgeon credential, surfaces renewal deadlines 90 days early, and manages the full trauma surgeon credential calendar in one view."
        crumbs={[{ label: 'For Trauma Surgeons' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How trauma surgeons use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for trauma surgeon credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Trauma surgeon credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every ABS MOC cycle, ATLS recertification window, and trauma center annual review.</h2>
          </Reveal>
          <div className="space-y-3">
            {TS_WORKFLOW.map((step, i) => (
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
                &ldquo;ATLS is the one that catches people off guard. It&apos;s not a CME course — it&apos;s a 2-day skills recertification that requires booking months in advance. If you let it lapse, you&apos;re not just out of compliance with ABS MOC. You can&apos;t be listed as the trauma surgeon of record at most Level I centers. ABS MOC is continuous CME and I have a system for that. ATLS is a 4-year cycle that disappears from your mental calendar. My state license is biennial. The trauma center does annual credentialing. DEA is every 3 years. At any given moment I have at least one credential expiring within 18 months. Momenties is the first time I&apos;ve had a single view of all of them.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">R</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Robert C., MD, FACS</div>
                  <div className="text-xs text-muted-foreground">Trauma and acute care surgeon, Level I trauma center and surgical critical care</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All trauma surgeon credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABS MOC CME — continuous, surgical content requirements',
                'ATLS recertification — 4-year, ACS skills examination',
                'State medical license CME — biennial',
                'ACLS certification — 2-year renewal',
                'DEA registration renewal — 3-year',
                'Annual trauma center credentialing — ACS verification requirements',
                'ACS membership renewal — annual',
                'AAST and ACS conference CME planning by ABS MOC domain applicability',
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
        title="ABS MOC and state licensure maintained."
        subtitle="CME tracking, ATLS 4-year recertification calendar, trauma center annual credentialing, and trauma surgery professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
