import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Infection Control Practitioners — CIC CE renewal, infection prevention credential management',
  description:
    'Infection control practitioners manage CBIC CIC certification 45CE/5yr renewal, state licensure CE (RN, MT, MPH), mandatory epidemiology and surveillance CE categories, annual HAI prevention competency, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full infection control practitioner credential calendar.',
  alternates: { canonical: '/for/infection-control-practitioners' },
  openGraph: {
    title: 'Momenties for Infection Control Practitioners',
    description: 'CIC CE renewal, infection prevention credential management.',
    url: '/for/infection-control-practitioners',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CIC certification and state licensure renewal',
    desc: 'CBIC Certified in Infection Control (CIC) certification requires 45 CE hours every 5 years in infection prevention and control content. CIC CE must be in infection control content domains: epidemiology, surveillance, HAI prevention, and cleaning/disinfection/sterilization. State licensure CE (RN, MT, MPH) runs on independent cycles with separate content requirements. Mandatory CE categories tracked separately — epidemiology and surveillance hours required within CIC total.',
  },
  {
    icon: Clock,
    title: 'Infection control practitioner multi-credential renewal calendar',
    desc: '"CIC — CBIC, 45 CE/5 years." "State licensure CE — varies by underlying credential." "APIC membership — annual." "HAI prevention competency — annual institutional." "Epidemiology and surveillance CE — CIC mandatory category." "CDC/NHSN training — annual updates." "Joint Commission standard updates — annual." All infection control practitioner credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Mandatory CE category and regulatory compliance analytics',
    desc: 'CBIC CIC renewal requires CE distributed across infection control content domains — epidemiology and surveillance CE tracked as a mandatory category with minimum hours. CDC NHSN (National Healthcare Safety Network) training updated annually with new HAI definitions and surveillance protocols. Joint Commission infection control standard updates require annual documentation. Each tracked as a separate mandatory category.',
  },
  {
    icon: Users,
    title: 'APIC, SHEA, and infection control professional involvement',
    desc: '"APIC Annual Conference — june." "SHEA Spring Conference." "IDSA Annual Meeting IDWeek — october." "APIC chapter meetings — quarterly CE." "CDC Infection Control Intensive." "CDC NHSN annual training." "WHO hand hygiene compliance CE." All infection control professional development on calendar. APIC and SHEA conference CE tagged by CIC applicability and mandatory category coverage.',
  },
]

const IC_WORKFLOW = [
  { time: 'Annual planning', action: 'CIC 5-year 45-CE pace (annualized to 9 CE/year), state licensure CE cycle, epidemiology and surveillance mandatory category pace, HAI prevention competency date, CDC NHSN annual training, Joint Commission annual updates, APIC Annual Conference, and APIC membership all loaded in January. CIC cumulative counter and state licensure CE tracked independently.' },
  { time: 'CE completion', action: '"APIC-approved — CLABSI prevention bundle: surveillance definitions, insertion practice auditing, and outcome reporting to NHSN, 3 CE, CIC applicable — HAI prevention and surveillance domains." Tagged by applicable certification and CIC content domain. CIC counter and HAI prevention/surveillance mandatory category counters both update. State licensure CE updates if applicable.' },
  { time: 'NHSN training', action: '"CDC NHSN annual training update — new HAI definitions and protocol changes, 2 CE." NHSN annual training placed as a mandatory category separate from CIC CE totals. CMS conditions of participation require hospital infection control programs to use NHSN reporting — practitioners responsible for NHSN reporting must document updated training when definitions change. Annual update placed as a Q1 event.' },
  { time: 'Joint Commission', action: '"Joint Commission infection control standard update — annual review, Q4." Joint Commission IC standard updates tracked as an annual institutional requirement. Infection control practitioners responsible for IC plan compliance must document review of standard changes as they affect hospital policy and procedure. Annual review placed as a Q4 calendar event before accreditation survey preparation.' },
  { time: 'Renewal audit', action: 'Analytics: CIC CE on pace (cumulative toward 45/5yr)? Epidemiology and surveillance mandatory category satisfied? State licensure CE complete? HAI prevention competency documented? NHSN annual training done? Joint Commission standard review complete? APIC membership active? Complete infection control practitioner credential audit 90 days before CIC renewal.' },
]

export default function ForInfectionControlPractitionersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Infection Control Practitioners"
        title={
          <>
            CIC certification and state licensure maintained.
            <br />
            <em className="not-italic text-gold">NHSN training and mandatory CE categories never short.</em>
          </>
        }
        lede="Infection control practitioners manage CBIC CIC certification with 45 CE hours over 5 years across infection control content domains including mandatory epidemiology and surveillance categories, state licensure CE on independent cycles, annual CDC NHSN training updates, annual Joint Commission standard reviews, annual HAI prevention competency assessments, and professional development simultaneously. Momenties tracks CE by infection control credential with mandatory category analytics, surfaces renewal deadlines 90 days early, and manages the full infection control practitioner credential calendar in one view."
        crumbs={[{ label: 'For Infection Control Practitioners' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How infection control practitioners use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for infection control credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Infection control credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every CIC cycle, NHSN update, and regulatory standard change.</h2>
          </Reveal>
          <div className="space-y-3">
            {IC_WORKFLOW.map((step, i) => (
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
                &ldquo;CIC is 5 years and 45 hours sounds manageable until you realize there&apos;s a domain distribution requirement. I was accumulating general CE and discovered at year 4 that I was short on epidemiology and surveillance — the mandatory category that CBIC tracks separately. My underlying RN license is also biennial with completely different content requirements. And NHSN releases updated HAI definitions every year that I need to document for our CMS certification. Four different tracking needs and I was using one total CE number for all of them. Momenties gave me separate counters for each. I can see the mandatory category shortfalls months in advance.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">H</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Helen B., RN, CIC</div>
                  <div className="text-xs text-muted-foreground">Infection preventionist, acute care hospital, system infection control program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All infection control practitioner credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CBIC CIC certification CE — 45 hours/5 years',
                'CIC epidemiology and surveillance CE — mandatory category',
                'State licensure CE — varies by underlying credential',
                'Annual HAI prevention competency assessment',
                'CDC NHSN annual training — definition and protocol updates',
                'Joint Commission IC standard annual review',
                'APIC membership renewal — annual',
                'APIC and SHEA conference CE planning by CIC domain applicability',
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
        title="CIC certification and state licensure maintained."
        subtitle="CE tracking with domain category analytics, NHSN training calendar, Joint Commission review, and infection control professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
