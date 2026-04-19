import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Burn Surgeons — ABS MOC CME renewal, burn surgeon credential management',
  description:
    'Burn surgeons manage ABS general surgery MOC continuous CME with burn surgery-specific content, ABA burn surgeon verification requirements, state medical license biennial CME, ACLS 2-year renewal, ATLS 4-year recertification, DEA 3-year renewal, annual burn center credentialing with case volume requirements, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full burn surgeon credential calendar.',
  alternates: { canonical: '/for/burn-surgeons' },
  openGraph: {
    title: 'Momenties for Burn Surgeons',
    description: 'ABS MOC CME renewal, burn surgeon credential management.',
    url: '/for/burn-surgeons',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABS general surgery MOC and burn-specific content independently',
    desc: 'Burn surgeons hold ABS general surgery board certification under continuous MOC and, if at an ABA-verified burn center, must satisfy burn center-specific educational requirements. ABS general surgery MOC requires CME with surgery content across domains; burn-specific CE covers burn resuscitation, wound care and grafting, inhalation injury management, infection control in the burn wound, and nutritional support for burn patients. State medical license biennial CME runs on an independent cycle. ATLS 4-year recertification is a skills examination, not CE — the recertification window is easy to miss because it requires scheduling and travel, not just completing online modules.',
  },
  {
    icon: Clock,
    title: 'Burn surgeon multi-credential renewal calendar',
    desc: '"ABS general surgery MOC — continuous CME." "Burn center CE — ABA verification requirements." "State medical license — biennial CME." "DEA registration — 3-year renewal." "ACLS — 2-year renewal." "ATLS — 4-year recertification (skills exam, not CE)." "Annual burn center credentialing — case volume review." "ABA membership — annual." All burn surgeon credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'ABA burn center verification requirements and annual credentialing analytics',
    desc: 'Burn surgeons at ABA-verified burn centers (adult or pediatric) must satisfy annual credentialing requirements that include documented burn-specific case volumes — number of burn patients treated, major burns (≥20% TBSA), inhalation injuries, and pediatric burns if at a pediatric center. ABA verification site visits occur on a 3-year cycle, and the documentation built during annual credentialing forms the basis for verification. Burn center CE requirements for ABA verification include burn-specific education that may differ from what counts toward ABS general surgery MOC — both tracked in parallel.',
  },
  {
    icon: Users,
    title: 'ABA, ACS, and burn surgery professional involvement',
    desc: '"ABA Annual Meeting — february." "ACS Clinical Congress — october." "International Society for Burn Injuries World Congress (biennial)." "ABLS (Advanced Burn Life Support) — 4-year recertification." "Burn resuscitation and fluid management CE." "Inhalation injury and airway management CE." "Burn wound infection and antimicrobial stewardship CE." "Burn reconstruction and scar management CE." All burn surgery professional development on calendar. ABA conference CE tagged by ABS MOC and burn center ABA verification applicability.',
  },
]

const BURN_WORKFLOW = [
  { time: 'Annual planning', action: 'ABS general surgery MOC CME pace (burn content weighted), burn center ABA verification CE requirements, state medical license biennial CME, DEA 3-year renewal, ACLS 2-year cycle, ATLS 4-year cycle, annual burn center case volume documentation, ABA Annual Meeting, ACS Clinical Congress, and ABA membership all loaded in January. ABS MOC counter, burn center CE counter, and state licensure CME tracked independently. ATLS recertification placed with 6-month advance alert — ATLS requires scheduling a course with a live skills station.' },
  { time: 'CE completion', action: '"ABA-approved — burn resuscitation: Parkland formula modification for pediatric burn patients, colloid introduction timing after 24 hours, and endpoints of resuscitation including abdominal compartment syndrome monitoring, 2 CME, AMA PRA Category 1, ABS MOC applicable, burn center ABA verification applicable." ABS MOC counter updates. Burn center CE verification counter updates. State licensure CME updates. Burn-specific content confirmed at logging.' },
  { time: 'ATLS renewal', action: '"ATLS recertification — 4-year cycle, skills examination required." ATLS recertification placed 6 months before expiration. ATLS recertification is not an online module — it requires attendance at an ATLS course with a live skills station. Burn surgeons who wait until 60 days before ATLS expiration may find no course seats available in their region. 6-month advance placement gives time to identify a nearby course, register, and arrange coverage for clinical responsibilities on the course date. ATLS is required for trauma surgery privileges at most burn centers.' },
  { time: 'Case volume', action: '"Annual burn center case volume documentation — major burns ≥20% TBSA, inhalation injuries, pediatric burns, total admissions, operative cases, Q4." Case volume documentation placed as Q4 annual requirement. ABA verification requires documented case volumes — individual surgeon case logs maintained in parallel with institutional volume reporting. Burn surgeons with privileges at multiple burn centers track case volumes per institution. Annual documentation placed before Q1 ABA reporting deadlines.' },
  { time: 'Renewal audit', action: 'Analytics: ABS general surgery MOC CME on pace? Burn center ABA verification CE current? State medical license CME complete? DEA valid? ACLS current? ATLS recertification on schedule? Annual case volume documentation complete? ABA membership active? Complete burn surgeon credential audit 90 days before earliest renewal. ABS, state board, DEA, and ABA institutional documentation maintained separately.' },
]

export default function ForBurnSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Burn Surgeons"
        title={
          <>
            ABS MOC and burn center verification maintained.
            <br />
            <em className="not-italic text-gold">ATLS scheduled. Case volume documented.</em>
          </>
        }
        lede="Burn surgeons manage ABS general surgery continuous MOC with burn-specific content, ABA burn center verification CE requirements separate from board CME, state medical license biennial CME, DEA 3-year registration, ACLS 2-year renewal, ATLS 4-year recertification requiring a live skills examination that cannot be completed online, annual burn center case volume documentation for ABA credentialing, and professional development at ABA and ACS simultaneously. Momenties tracks CME by burn surgeon credential, surfaces renewal deadlines 90 days early, and manages the full burn surgeon credential calendar in one view."
        crumbs={[{ label: 'For Burn Surgeons' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How burn surgeons use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for burn surgeon credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Burn surgeon credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every ABS MOC cycle, ABA verification requirement, and ATLS recertification window.</h2>
          </Reveal>
          <div className="space-y-3">
            {BURN_WORKFLOW.map((step, i) => (
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
                &ldquo;ATLS is the credential that catches burn surgeons off guard — not because they forget they have it, but because they forget it requires a live course with a skills station. You can&apos;t just do it online. Last recertification cycle I found a course with 3 weeks to spare and had to drive four hours each way because everything nearby was full. I also maintain ABS general surgery MOC, our burn center has specific ABA CE requirements that don&apos;t perfectly overlap with ABS, and my state license is biennial. I keep case volume logs separately for the annual ABA credentialing review. That&apos;s five separate credential systems before I factor in DEA and ACLS. Momenties solved ATLS by putting the 6-month advance alert on the calendar the day I entered my current expiration date. That&apos;s all it took.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">A</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Andrew K., MD, FACS</div>
                  <div className="text-xs text-muted-foreground">Burn surgeon, ABA-verified adult and pediatric burn center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All burn surgeon credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABS general surgery MOC CME — continuous, burn content domain tracking',
                'ABA burn center verification CE — burn-specific content, independent tracking',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'ACLS certification — 2-year renewal',
                'ATLS recertification — 4-year, live skills exam (6-month advance alert)',
                'Annual burn center case volume documentation — ABA credentialing',
                'ABA and ACS conference CE planning by ABS MOC and burn center verification applicability',
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
        title="ABS MOC and burn center verification maintained."
        subtitle="CE tracking with burn-specific content, ATLS recertification calendar, ABA case volume documentation, and burn surgery professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
