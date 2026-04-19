import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Neonatal Nurse Practitioners — NCC NNP-BC CE renewal, neonatal NP credential management',
  description:
    'Neonatal nurse practitioners manage NCC NNP-BC certification 30 CE/3yr renewal with neonatal-specific content, ANCC NP certification if held independently, state APRN licensure biennial CE, NRP instructor certification 2-year renewal, annual NICU competency assessment, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full neonatal NP credential calendar.',
  alternates: { canonical: '/for/neonatal-nurse-practitioners' },
  openGraph: {
    title: 'Momenties for Neonatal Nurse Practitioners',
    description: 'NCC NNP-BC CE renewal, neonatal NP credential management.',
    url: '/for/neonatal-nurse-practitioners',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for NCC NNP-BC and state APRN licensure on independent cycles',
    desc: 'Neonatal Nurse Practitioners hold NNP-BC certification from the National Certification Corporation (NCC), which requires 30 CE hours every 3 years with neonatal-specific content. State APRN licensure renews biennially with separate CE requirements — state CE content requirements and provider approval standards differ from NCC requirements. Neonatal NPs at academic centers may also hold ANCC certification from a different pathway, adding an independent renewal cycle. NRP Instructor certification requires 2-year renewal separate from NNP-BC CE. Each tracked independently.',
  },
  {
    icon: Clock,
    title: 'Neonatal NP multi-credential renewal calendar',
    desc: '"NCC NNP-BC — 30 CE/3 years, neonatal-specific content." "State APRN licensure — biennial CE." "NRP Instructor certification — 2-year renewal." "Annual NICU competency assessment." "NANN membership — annual." "State advanced practice RN prescriptive authority renewal (if separate)." "DEA registration — 3-year (if prescribing)." All neonatal NP credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'NCC neonatal content requirements and NRP instructor status analytics',
    desc: 'NCC NNP-BC renewal requires CE with neonatal and perinatal content — general nursing CE does not satisfy NCC content requirements. Neonatal NPs who are NRP Instructors must maintain NRP Instructor status through the American Academy of Pediatrics with a 2-year renewal cycle that includes teaching a course and completing instructor updates — separate from NNP-BC CE. Annual NICU competency assessment at institutional level covers unit-specific skills and protocols separate from national certification. Each tracked independently.',
  },
  {
    icon: Users,
    title: 'NANN, AAP, and neonatal professional involvement',
    desc: '"NANN Annual Conference — october." "AAP National Conference." "Hot Topics in Neonatology — december." "AAACN or specialty neonatal conference CE." "Surfactant therapy and respiratory distress CE." "Point-of-care ultrasound in the NICU CE." "Neonatal abstinence syndrome management updates." "Transport medicine CE for transport NNPs." All neonatal NP professional development on calendar. NANN conference CE tagged by NCC NNP-BC neonatal content applicability.',
  },
]

const NNP_WORKFLOW = [
  { time: 'Annual planning', action: 'NCC NNP-BC 30-CE/3yr pace (annualized to 10 CE/year), state APRN biennial CE cycle, NRP Instructor 2-year renewal, DEA 3-year renewal (if prescribing), annual NICU competency assessment, NANN Annual Conference, and NANN membership all loaded in January. NNP-BC CE counter and state APRN CE tracked independently with neonatal content requirement monitored within NNP-BC counter.' },
  { time: 'CE completion', action: '"NANN-approved — neonatal abstinence syndrome: pharmacologic management protocols, non-pharmacologic care bundles, and family-centered NICU approach, 2 CE, NCC NNP-BC applicable — neonatal content domain." NNP-BC counter updates (toward 30/3yr). State APRN CE updates if provider approved by state board. Neonatal-specific content confirmed at logging — general nursing CE logged separately without NNP-BC credit.' },
  { time: 'NRP instructor', action: '"NRP Instructor renewal — AAP course facilitation documentation and instructor update completion, 2-year cycle, Q2." NRP Instructor status tracked as a separate certification from NNP-BC. NRP Instructor renewal requires documented course facilitation within the renewal period plus completion of the AAP instructor update. Neonatal NPs who teach NRP must maintain instructor status to continue teaching — important for NICU orientation programs and transport team training.' },
  { time: 'NICU competency', action: '"Annual NICU competency assessment — PICC line placement, umbilical catheter care, high-frequency ventilator management, and therapeutic hypothermia protocol, Q1." Annual institutional NICU competency assessment placed as a Joint Commission and institutional requirement separate from national certification. NICU competency assessment covers unit-specific equipment and protocols that change with technology and guideline updates. Annual placement with Q1 completion target before performance review cycles.' },
  { time: 'Renewal audit', action: 'Analytics: NCC NNP-BC CE on pace (30/3yr)? Neonatal content requirement satisfied? State APRN CE complete? NRP Instructor status current? DEA valid (if prescribing)? Annual NICU competency documented? NANN membership active? Complete neonatal NP credential audit 90 days before earliest renewal. NCC, state APRN board, AAP NRP, and institutional documentation maintained separately.' },
]

export default function ForNeonatalNursePractitionersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Neonatal Nurse Practitioners"
        title={
          <>
            NNP-BC certification and APRN licensure maintained.
            <br />
            <em className="not-italic text-gold">NRP Instructor status current. NICU competencies documented.</em>
          </>
        }
        lede="Neonatal nurse practitioners manage NCC NNP-BC certification with 30 CE hours every 3 years in neonatal-specific content, state APRN licensure biennial CE on an independent cycle, NRP Instructor certification 2-year renewal requiring documented course facilitation separate from CE, DEA 3-year registration if prescribing, annual NICU competency assessment as an institutional requirement, and professional development at NANN and AAP simultaneously. Momenties tracks CE by neonatal NP credential, surfaces renewal deadlines 90 days early, and manages the full neonatal NP credential calendar in one view."
        crumbs={[{ label: 'For Neonatal Nurse Practitioners' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How neonatal nurse practitioners use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for neonatal NP credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Neonatal NP credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every NNP-BC renewal cycle, NRP Instructor obligation, and annual NICU competency requirement.</h2>
          </Reveal>
          <div className="space-y-3">
            {NNP_WORKFLOW.map((step, i) => (
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
                &ldquo;NNP-BC through NCC renews every 3 years with 30 CE hours of neonatal content. My state APRN license renews every 2 years — different content requirements, different approved providers. I&apos;m an NRP Instructor, which means I need to document teaching a course and complete an instructor update every 2 years, and that has nothing to do with my NNP-BC CE hours. Our unit does annual competency sign-offs on things like PICC placement and the cooling protocol. My DEA is every 3 years. All of these are on different schedules and none of them talk to each other. I had everything documented in different systems. Momenties gave me one view of all of it and the 90-day alerts mean I&apos;m never catching up at the last minute.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">A</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Alicia P., NNP-BC</div>
                  <div className="text-xs text-muted-foreground">Neonatal nurse practitioner, Level III NICU and transport team</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All neonatal NP credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'NCC NNP-BC certification CE — 30 hours/3 years, neonatal content',
                'State APRN licensure CE — biennial, state-specific requirements',
                'NRP Instructor certification — 2-year renewal, course facilitation documented',
                'DEA registration renewal — 3-year (if prescribing)',
                'Annual NICU competency assessment — institutional Joint Commission requirement',
                'State APRN prescriptive authority renewal (if separate from licensure)',
                'NANN membership renewal — annual',
                'NANN conference CE planning by NCC NNP-BC neonatal content applicability',
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
        title="NNP-BC certification and APRN licensure maintained."
        subtitle="CE tracking with neonatal content requirements, NRP Instructor renewal, NICU competency calendar, and neonatal professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
