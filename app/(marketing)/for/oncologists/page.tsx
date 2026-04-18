import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Oncologists — ABIM MOC, tumor board calendar, and oncology CME tracking',
  description:
    'Oncologists manage ABIM Maintenance of Certification for internal medicine and medical oncology subspecialty, tumor board and multidisciplinary care conference commitments, state license renewals, DEA registration, and ASCO involvement simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full oncology calendar.',
  alternates: { canonical: '/for/oncologists' },
  openGraph: {
    title: 'Momenties for Oncologists',
    description: 'ABIM MOC, tumor board calendar, and oncology CME management.',
    url: '/for/oncologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for dual ABIM MOC certifications',
    desc: 'Oncologists maintain ABIM internal medicine and ABIM medical oncology subspecialty certifications simultaneously. Each requires independent annual MOC points. Hematology/oncology subspecialty adds a third certification for hematologists. Tag every CME by applicable certification. Dual or triple ABIM MOC requirements tracked independently from the same conference CME.',
  },
  {
    icon: Clock,
    title: 'Oncology multi-credential renewal calendar',
    desc: '"ABIM internal medicine — MOC annual." "ABIM medical oncology subspecialty — MOC annual." "State medical license — october." "DEA registration — 3-year." "Chemotherapy administration privileges — hospital annual." "ACLS — 2-year." All oncology credentials with 90-day advance alerts. Clinical privileges never interrupted between credentialing cycles.',
  },
  {
    icon: BarChart3,
    title: 'Tumor board and multidisciplinary conference calendar',
    desc: 'Oncologists participate in weekly or biweekly tumor boards, multidisciplinary care conferences, and disease site-specific case conferences that constitute both clinical practice requirements and CME opportunities. Tag tumor board attendance as CME where eligible. Professional commitment calendar visible alongside credential renewal requirements.',
  },
  {
    icon: Users,
    title: 'ASCO and disease-site society involvement',
    desc: '"ASCO Annual Meeting — june." "ASH annual meeting — hematology, december." "AACR Annual Meeting — april." "ESMO congress — september." "Disease site tumor board — weekly." All oncology professional commitments on calendar. Conference CME applied to applicable ABIM certifications immediately after each session.',
  },
]

const ONCO_WORKFLOW = [
  { time: 'Annual planning', action: 'Both ABIM MOC annual point targets (IM and oncology subspecialty), state medical license renewal date, DEA expiration, chemotherapy privileges renewal, ASCO Annual Meeting, and ASH conference all loaded in January. CME plan designed to satisfy both certification requirements from the same major conference attendance.' },
  { time: 'CME completion', action: '"ASCO Annual Meeting — 26 CME hours, oncology and internal medicine content." Tagged by ABIM certification: oncology-specific sessions to subspecialty MOC, systemic disease and internal medicine content to both. Running totals for each certification independently accurate.' },
  { time: 'Clinical trials', action: '"Protocol update meeting — clinical trial X, thursday 12pm." "IRB renewal — protocol annual, march." Clinical trial protocol commitments and regulatory obligations managed alongside credential renewals. IRB-required training updates tracked as separate credential requirements.' },
  { time: 'Chemo privileges', action: '"Chemotherapy administration privileges renewal — hospital credentialing, august." Annual privileging requires documentation of current ACLS and relevant oncology-specific competency training. Credentialing packet assembled 90 days before the committee review cycle.' },
  { time: 'MOC audit', action: 'Analytics: ABIM IM MOC on target? Oncology subspecialty MOC on track? State license CE complete? DEA current? Chemotherapy privileges documentation ready? ACLS valid? Clinical trial protocol training current? Complete oncology credential audit before any deadline.' },
]

export default function ForOncologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Oncologists"
        title={
          <>
            Dual MOC current.
            <br />
            <em className="not-italic text-gold">Clinical privileges maintained.</em>
          </>
        }
        lede="Oncologists manage ABIM Maintenance of Certification for internal medicine and medical oncology subspecialty certifications, tumor board and multidisciplinary conference commitments, state license renewals, DEA registration, and ASCO involvement simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full oncology professional calendar in one view."
        crumbs={[{ label: 'For Oncologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How oncologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for oncology CME and credential management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Oncology credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every annual cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {ONCO_WORKFLOW.map((step, i) => (
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
                &ldquo;I have ABIM certifications in both internal medicine and hematology/oncology. Tumor board every week counts as CME at my institution but I was never sure how to apportion it between certifications. Momenties lets me tag each tumor board session to the applicable certification. ASCO and ASH conference CME gets split correctly too. My MOC records are clean for both certifications for the first time.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">C</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Christine B., MD, FASCO</div>
                  <div className="text-xs text-muted-foreground">Hematologist-oncologist, NCI-designated cancer center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All oncology credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABIM IM MOC — annual points',
                'ABIM oncology subspecialty MOC — annual',
                'State medical license renewal deadline',
                'DEA registration — 3-year renewal',
                'Chemotherapy administration privileges',
                'ACLS recertification — 2-year',
                'Clinical trial protocol training renewals',
                'ASCO/ASH/AACR conference CME planning',
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
        title="Dual MOC current. Clinical privileges maintained."
        subtitle="CME tracking by certification, tumor board calendar, and oncology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
