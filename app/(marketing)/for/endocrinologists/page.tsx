import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Endocrinologists — ABIM IM and Endocrinology MOC, CME tracking, and endocrinology credential management',
  description:
    'Endocrinologists manage ABIM dual MOC (Internal Medicine + Endocrinology, Diabetes and Metabolism subspecialty), diabetes education CE, AACE fellowship requirements, state medical license biennial CME, DEA registration, and professional development simultaneously. Momenties tracks CME by board track, surfaces renewal deadlines 90 days early, and manages the full endocrinology credential calendar.',
  alternates: { canonical: '/for/endocrinologists' },
  openGraph: {
    title: 'Momenties for Endocrinologists',
    description: 'ABIM IM and Endocrinology MOC, CME tracking, and endocrinology credential management.',
    url: '/for/endocrinologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABIM IM and Endocrinology MOC',
    desc: 'ABIM Internal Medicine MOC requires ongoing CME and periodic assessment. ABIM Endocrinology, Diabetes and Metabolism subspecialty MOC requires subspecialty CME and separate Knowledge Check-Ins. Both board tracks run concurrently with different requirements. Tag every CME by applicable ABIM board track. IM and Endocrinology counters tracked independently — diabetes and endocrine CME may partially satisfy IM general MOC but requires verification.',
  },
  {
    icon: Clock,
    title: 'Endocrinologist multi-credential renewal calendar',
    desc: '"ABIM IM MOC — continuous, annual attestation." "ABIM Endocrinology MOC — continuous, knowledge check-in cycle." "State medical license — biennial CME, varies." "DEA registration — 3-year." "AACE membership — annual." "Continuous glucose monitoring device training — manufacturer-specific." All endocrinology credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Diabetes technology and device training analytics',
    desc: 'Endocrinologists who manage patients on insulin pumps, CGM systems, and hybrid closed-loop devices may require manufacturer-sponsored training and competency demonstration. Device training logged separately from ABIM CME — training is a clinical credentialing requirement, not optional CE. Analytics confirms device competency training current for each system in use without conflating it with board MOC totals.',
  },
  {
    icon: Users,
    title: 'ENDO, ADA, AACE, and endocrinology professional involvement',
    desc: '"ENDO — Endocrine Society Annual Meeting, june." "ADA Scientific Sessions — june." "AACE Annual Meeting — may." "AADE Annual Conference (diabetes education)." "Hospital metabolism and endocrine grand rounds." All endocrinology professional development on calendar. Endocrine Society and ADA conference CME tagged by ABIM board track in advance.',
  },
]

const ENDO_WORKFLOW = [
  { time: 'Annual planning', action: 'ABIM IM MOC annual attestation, ABIM Endocrinology Knowledge Check-In cycle, state medical license biennial renewal, DEA 3-year renewal, ENDO and ADA conferences, and AACE membership all loaded in January. CME pace calculated per ABIM board requirement independently. Diabetes technology training reviews scheduled based on clinical use.' },
  { time: 'CME completion', action: '"ABIM-MOC approved — glycemic management in hospitalized patients: insulin protocols and CGM integration, 3 CME, endocrinology subspecialty." Tagged by applicable ABIM board track. ABIM Endocrinology counter updates. If IM MOC accepts the content, ABIM IM counter also updates. Each board tracked independently.' },
  { time: 'Device training', action: '"Omnipod 5 hybrid closed-loop system — prescriber training module, 1.5 hours, clinical competency." Device training logged as clinical credentialing CE, separate from ABIM CME. CGM and insulin pump prescriber competency maintained per manufacturer requirements and institutional policy. Device competency renewals tracked on device-specific schedules.' },
  { time: 'DEA registration', action: '"DEA registration renewal — 3-year, march." DEA tracked on 3-year cycle separate from biennial state license and ABIM annual attestation. Endocrinologists who prescribe controlled substances (e.g., GHD management) must maintain DEA registration. DEA renewal placed on calendar when current registration dates are confirmed.' },
  { time: 'Renewal audit', action: 'Analytics: ABIM IM MOC annual attestation current? ABIM Endocrinology CME on pace? Knowledge Check-In cycle current? State medical license CME complete? DEA registration valid? Device training certifications current? AACE membership active? Complete endocrinology credential audit 90 days before earliest renewal.' },
]

export default function ForEndocrinologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Endocrinologists"
        title={
          <>
            ABIM IM and Endocrinology MOC maintained.
            <br />
            <em className="not-italic text-gold">Device training and DEA never lapsed.</em>
          </>
        }
        lede="Endocrinologists manage ABIM dual board MOC (Internal Medicine and Endocrinology, Diabetes and Metabolism subspecialty) on independent cycles, diabetes technology device training requirements, DEA 3-year registration renewal, state medical license biennial CME, and professional development simultaneously. Momenties tracks CME by ABIM board track, surfaces renewal deadlines 90 days early, and manages the full endocrinology credential calendar in one view."
        crumbs={[{ label: 'For Endocrinologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How endocrinologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for endocrinology credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Endocrinology credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed across independent board and device cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {ENDO_WORKFLOW.map((step, i) => (
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
                &ldquo;Endocrinology is complicated because I track ABIM IM MOC, ABIM Endocrinology MOC, my state license, DEA, and now manufacturer training for every diabetes device I prescribe. The device training is what no tracking system handled — each CGM and pump system has its own prescriber competency requirement on a different schedule. Momenties lets me log each one separately. I can see at a glance that my Omnipod training is current but my Dexcom G7 prescriber module is due — without mixing it up with my board CME.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">R</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Rajiv M., MD, FACE</div>
                  <div className="text-xs text-muted-foreground">Endocrinologist, academic diabetes and metabolic disease center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All endocrinology credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABIM IM MOC CME — annual attestation',
                'ABIM Endocrinology subspecialty MOC — knowledge check-in',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Diabetes device prescriber training — per manufacturer',
                'AACE and Endocrine Society membership — annual',
                'ENDO and ADA conference CME planning by board track',
                'Thyroid ultrasound credentialing (where applicable)',
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
        title="ABIM IM and Endocrinology MOC maintained."
        subtitle="CME tracking by board track, device training calendar, and endocrinology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
