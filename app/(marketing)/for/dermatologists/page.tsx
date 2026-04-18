import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Dermatologists — ABD MOC, CME tracking, and dermatology license management',
  description:
    'Dermatologists manage ABD Maintenance of Certification with 50 CME hours per 3-year cycle, state medical license renewals, DEA registration, Mohs surgery credentialing, and cosmetic procedure certifications simultaneously. Momenties tracks CME by ABD category, surfaces renewal deadlines 90 days early, and manages the full dermatology credential calendar.',
  alternates: { canonical: '/for/dermatologists' },
  openGraph: {
    title: 'Momenties for Dermatologists',
    description: 'ABD MOC, CME tracking, and dermatology credential management.',
    url: '/for/dermatologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABD MOC',
    desc: 'ABD Maintenance of Certification requires 50 CME hours per 3-year cycle with specific category requirements including dermatology-specific content and patient safety. Tag every CME activity by ABD category: dermatology content, patient safety, practice improvement. ABD self-assessment modules tracked separately. Progress visible throughout the 3-year cycle.',
  },
  {
    icon: Clock,
    title: 'Dermatology multi-credential renewal calendar',
    desc: '"ABD MOC — 3-year cycle, december." "State medical license — renewal, october." "DEA registration — 3-year, june." "Mohs surgery credentialing — hospital annual." "Botox and filler training documentation." "BLS — 2-year." All dermatology credentials with 90-day advance alerts. Practice never interrupted by credential lapses.',
  },
  {
    icon: BarChart3,
    title: 'Cosmetic procedure documentation',
    desc: 'Cosmetic dermatologists maintain training documentation for injectable procedures, laser certifications, and body contouring credentials alongside board certification requirements. Tag cosmetic training separately from ABD CME. Track which cosmetic credentials have manufacturer training documentation and when annual refreshers are required.',
  },
  {
    icon: Users,
    title: 'Professional meetings and subspecialty development',
    desc: '"AAD Annual Meeting — march." "ASDSA annual symposium — dermatologic surgery." "Cosmetic Bootcamp — june." "Regional dermatology society — quarterly." All dermatology professional development on calendar. AAD Annual Meeting CME planned in advance to maximize category requirements fulfilled per event.',
  },
]

const DERM_WORKFLOW = [
  { time: 'Annual planning', action: 'ABD MOC 3-year cycle status, state medical license renewal date, DEA expiration, Mohs credentialing renewal, and AAD Annual Meeting all loaded in January. 90-day alerts on every credential. CME pace calculated — hours per quarter to complete the ABD 3-year requirement without end-of-cycle scramble.' },
  { time: 'CME completion', action: '"AAD Annual Meeting — 16 CME hours, dermatology content and patient safety." Tagged by ABD category. Self-assessment module completion logged separately. ABD cycle progress updates after each CME event. No duplicate counting between ABD and state license requirements.' },
  { time: 'ABD self-assessment', action: '"ABD self-assessment module — procedural dermatology, saturday 2pm, 3 hours." ABD requires SAMs as a distinct MOC component. Completion logged separately from CME hours. SAM completion timeline ensures the MOC portfolio is complete before cycle closes.' },
  { time: 'DEA renewal', action: '"DEA registration renewal — 3-year, june 15." 90-day alert fires in March. Renewal initiated before expiration. Prescribing authority maintained without gap. DEA renewal timeline documented in calendar so hospital credentialing dependent on current DEA is never surprised.' },
  { time: 'MOC audit', action: 'Analytics: CME progress by ABD category. Dermatology-specific content hours complete? Patient safety requirement met? Self-assessment modules done? State license CE on track? DEA current? Complete ABD MOC portfolio status in one view, 90 days before any deadline.' },
]

export default function ForDermatologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Dermatologists"
        title={
          <>
            Board certified. CME tracked.
            <br />
            <em className="not-italic text-gold">MOC never scrambled.</em>
          </>
        }
        lede="Dermatologists manage ABD Maintenance of Certification with CME category requirements across 3-year cycles, state medical license renewals, DEA registration, Mohs surgery credentialing, cosmetic procedure training documentation, and specialty society involvement simultaneously. Momenties tracks CME by ABD category, surfaces renewal deadlines 90 days early, and manages the full dermatology credential calendar in one view."
        crumbs={[{ label: 'For Dermatologists' }]}
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
            CME analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How dermatologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for dermatology CME and credential management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">MOC credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through the 3-year ABD cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {DERM_WORKFLOW.map((step, i) => (
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
                &ldquo;The ABD 3-year MOC cycle felt manageable until I realized I needed CME in specific categories plus self-assessment modules as a separate component. I was ahead on total hours but behind on patient safety specifically. Momenties tracks each category independently so I can see exactly which ABD requirements are complete and which need attention — not just a single total that hides the category breakdown.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">V</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Vanessa K., MD, FAAD</div>
                  <div className="text-xs text-muted-foreground">Dermatologist, academic medical center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All dermatology credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CME hours by ABD category — 3-year MOC cycle',
                'ABD self-assessment module (SAM) completion',
                'State medical license renewal deadline',
                'DEA registration — 3-year renewal',
                'BLS recertification — 2-year',
                'Mohs surgery hospital credentialing',
                'Cosmetic procedure training documentation',
                'AAD Annual Meeting and specialty symposia',
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
        title="Board certified. CME tracked. MOC never scrambled."
        subtitle="CME tracking by ABD category, multi-credential renewal calendar, and dermatology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
