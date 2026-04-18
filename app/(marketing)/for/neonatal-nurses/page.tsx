import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Neonatal Nurses — RNC-NIC CE renewal, NICU credential management',
  description:
    'Neonatal nurses manage NCC RNC-NIC certification 30CE/3yr renewal, state RN license biennial CE, STABLE program renewal, NRP 2-year renewal, mandatory patient safety and NICU competency CE, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full neonatal nursing credential calendar.',
  alternates: { canonical: '/for/neonatal-nurses' },
  openGraph: {
    title: 'Momenties for Neonatal Nurses',
    description: 'RNC-NIC CE renewal, NICU credential management.',
    url: '/for/neonatal-nurses',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for RNC-NIC, RNC-OB, and neonatal nursing certifications',
    desc: 'NCC Registered Nurse Certified — Neonatal Intensive Care Nursing (RNC-NIC) certification requires 30 CE hours every 3 years in neonatal nursing content. RNC-OB (obstetric nursing) is a separate NCC certification with independent 3-year renewal requirements. CE must be in applicable neonatal and obstetric nursing content. State RN license CE runs on a biennial cycle independent of NCC certifications. Each tracked independently.',
  },
  {
    icon: Clock,
    title: 'Neonatal nurse multi-credential renewal calendar',
    desc: '"RNC-NIC — NCC, 30 CE/3 years." "RNC-OB — NCC, 30 CE/3 years (if applicable)." "State RN license — biennial CE." "NRP — 2-year renewal." "STABLE program — renewal per institutional policy." "S.T.A.B.L.E. certification — biennial." "Annual NICU competency assessment." "ANN membership — annual." All neonatal nursing credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'NRP, STABLE, and NICU competency analytics',
    desc: 'Neonatal nurses face mandatory biennial renewal for Neonatal Resuscitation Program (NRP) independent of RNC-NIC and state RN license. STABLE program certification required by most NICU facilities on a biennial or per-policy schedule. Annual NICU competency assessment required for Joint Commission and institutional compliance — covers ventilator management, medication administration, and thermoregulation. Each tracked independently on calendar.',
  },
  {
    icon: Users,
    title: 'ANN, AWHONN, and neonatal nursing professional involvement',
    desc: '"ANN Annual Conference — fall." "AWHONN National Convention — june." "NANN Annual Conference." "NCC Annual Symposium." "AWHONN Fetal Heart Monitoring course CE." "High-risk neonatal transport training." "Kangaroo care and family-centered NICU education." All neonatal nursing professional development on calendar. ANN and AWHONN conference CE tagged by RNC-NIC and state RN applicability.',
  },
]

const NEO_WORKFLOW = [
  { time: 'Annual planning', action: 'RNC-NIC 3-year 30-CE pace (annualized to 10 CE/year), RNC-OB cycle (if applicable), state RN biennial CE cycle, NRP 2-year cycle, STABLE biennial cycle, annual NICU competency assessment, ANN Annual Conference, and ANN membership all loaded in January. RNC-NIC, RNC-OB, and state RN CE paces tracked independently.' },
  { time: 'CE completion', action: '"NCC-approved — thermoregulation in the premature neonate: evidence-based bundled care and outcome improvement, 3 CE, RNC-NIC applicable." Tagged by applicable certification. RNC-NIC counter updates (cumulative toward 30/3yr target). State RN CE updates if state accepts neonatal nursing content. NICU competency CE logged separately — competency documentation has different purposes than certification CE.' },
  { time: 'NRP renewal', action: '"NRP renewal — AHA/AAP, 2-year cycle, October." NRP placed on 2-year renewal cycle independent of RNC-NIC 3-year and state RN biennial cycles. NRP certification required for all NICU clinical staff at most institutions. Expired NRP means the nurse cannot participate in delivery room resuscitations — the core clinical function of neonatal nursing. NRP renewal placed with 90-day advance alert.' },
  { time: 'STABLE program', action: '"STABLE program recertification — biennial, Q2." STABLE (Sugar, Temperature, Airway, Blood pressure, Lab work, Emotional support) program certification tracked on biennial institutional cycle. STABLE required for transport and stabilization competency in most NICU programs. Certification documentation required for neonatal transport team eligibility. Tracked independently on calendar with biennial renewal alert.' },
  { time: 'Renewal audit', action: 'Analytics: RNC-NIC CE on pace (cumulative toward 30/3yr)? RNC-OB CE adequate? State RN CE complete? NRP current? STABLE current? Annual NICU competency done? ANN membership active? Complete neonatal nursing credential audit 90 days before earliest certification renewal. NCC and state board documentation maintained separately.' },
]

export default function ForNeonatalNursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Neonatal Nurses"
        title={
          <>
            RNC-NIC certification and state license maintained.
            <br />
            <em className="not-italic text-gold">NRP and STABLE credentials never lapsed.</em>
          </>
        }
        lede="Neonatal nurses manage NCC RNC-NIC certification with 30 CE hours over 3 years in neonatal nursing content, state RN license biennial CE on an independent cycle, NRP biennial renewal required for delivery room resuscitation participation, STABLE program biennial recertification, annual NICU competency assessments, and professional development simultaneously. Momenties tracks CE by neonatal nursing credential, surfaces renewal deadlines 90 days early, and manages the full neonatal nursing credential calendar in one view."
        crumbs={[{ label: 'For Neonatal Nurses' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How neonatal nurses use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for neonatal nursing credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Neonatal nursing credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every NCC certification and resuscitation renewal cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {NEO_WORKFLOW.map((step, i) => (
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
                &ldquo;RNC-NIC is 3 years, state license is 2 years, NRP is 2 years, and STABLE is on a hospital-defined cycle. None of those cycles align with each other. I was tracking NRP renewal in my head because it felt like something I would just remember, and I nearly missed it because NRP renewed in October and my state license renewed in December, and I confused the two. Once NRP lapses, I can&apos;t go to deliveries — that&apos;s a core function of my job. Momenties tracks each cycle independently. I haven&apos;t had a lapse in any credential since I started using it.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">G</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Grace T., RN, RNC-NIC</div>
                  <div className="text-xs text-muted-foreground">Neonatal intensive care nurse, level IV NICU, children&apos;s hospital</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All neonatal nursing credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'NCC RNC-NIC certification CE — 30 hours/3 years',
                'NCC RNC-OB certification CE — 30 hours/3 years',
                'State RN license CE — biennial renewal',
                'NRP certification — 2-year renewal',
                'STABLE program certification — biennial',
                'Annual NICU competency assessment',
                'ANN and AWHONN membership renewal — annual',
                'ANN and AWHONN conference CE planning by applicability',
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
        title="RNC-NIC certification and state license maintained."
        subtitle="CE tracking by certification, NRP and STABLE renewal calendar, NICU competency tracking, and neonatal nursing professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
