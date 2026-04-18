import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Gastroenterologists — ABIM MOC, endoscopy privileges, and GI CME tracking',
  description:
    'Gastroenterologists manage ABIM Maintenance of Certification for internal medicine and gastroenterology subspecialty, endoscopy and colonoscopy procedure privileges, state medical license renewals, DEA registration, and GI society involvement simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full GI credential calendar.',
  alternates: { canonical: '/for/gastroenterologists' },
  openGraph: {
    title: 'Momenties for Gastroenterologists',
    description: 'ABIM MOC, endoscopy privileges, and GI CME management.',
    url: '/for/gastroenterologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABIM MOC dual certification',
    desc: 'Gastroenterologists typically maintain ABIM internal medicine certification and ABIM gastroenterology subspecialty certification simultaneously. Each has independent MOC requirements. Tag every CME event by applicable certification: internal medicine MOC, gastroenterology subspecialty MOC. Annual point targets for both tracked independently without manual cross-referencing.',
  },
  {
    icon: Clock,
    title: 'GI multi-credential renewal calendar',
    desc: '"ABIM internal medicine — MOC annual." "ABIM gastroenterology subspecialty — MOC annual." "State medical license — october." "DEA registration — 3-year, july." "Endoscopy privileges — hospital annual." "Radiation safety — annual." All GI credentials with 90-day advance alerts. Procedure privileges never interrupted between hospital credentialing cycles.',
  },
  {
    icon: BarChart3,
    title: 'Endoscopy and procedure analytics',
    desc: 'Hospital credentialing for endoscopy, colonoscopy, and ERCP privileges requires documentation of ongoing procedural competency including volume logs and complication rates for some institutions. Tag procedure-specific CME alongside case volume documentation. Annual credentialing review prepared with complete documentation rather than last-minute compilation.',
  },
  {
    icon: Users,
    title: 'ACG and GI society involvement',
    desc: '"ACG Annual Scientific Meeting — october." "DDW — Digestive Disease Week, may." "ASGE endoscopy symposium — annual." "GI quality and safety meeting." All major GI conferences on calendar at year start with CME sessions planned for dual ABIM MOC credit. Conference travel arranged when endoscopy schedule allows.',
  },
]

const GI_WORKFLOW = [
  { time: 'Annual planning', action: 'Both ABIM MOC annual point targets, state medical license renewal, DEA expiration, endoscopy procedure privileges renewal date, and ACG/DDW conference dates all loaded in January. 90-day alerts on every credential. CME plan structured to satisfy both IM and GI subspecialty MOC requirements from the same conferences.' },
  { time: 'CME completion', action: '"DDW — 24 CME hours, gastroenterology and internal medicine content." Tagged by ABIM certification: GI subspecialty-specific sessions tagged to subspecialty MOC, general GI and internal medicine content to both certifications. Running totals for each certification accurate and independent.' },
  { time: 'Endoscopy privileges', action: '"Endoscopy privileges renewal — hospital credentialing, august." Procedure volume documentation, complication tracking, and procedure-specific CME compiled 90 days before the credentialing committee review. No last-minute scramble to locate procedure logs from 11 months ago.' },
  { time: 'DEA renewal', action: '"DEA registration renewal — 3-year, july 15." Prescribing authority for sedation medications used in GI procedures maintained without interruption. 90-day alert fires in April. Renewal initiated before expiration. Endoscopy suite scheduling dependent on current DEA registration updated immediately.' },
  { time: 'MOC audit', action: 'Analytics: ABIM IM MOC annual points on target? GI subspecialty MOC points on track? Endoscopy privilege documentation ready? State license CE complete? DEA current? Radiation safety training done? Complete GI credential audit in one view, 90 days before any deadline.' },
]

export default function ForGastroenterologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Gastroenterologists"
        title={
          <>
            Dual MOC maintained.
            <br />
            <em className="not-italic text-gold">Endoscopy privileges current.</em>
          </>
        }
        lede="Gastroenterologists manage ABIM Maintenance of Certification for both internal medicine and gastroenterology subspecialty certifications, endoscopy procedure privileges, state medical license renewals, DEA registration, and GI society involvement simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full GI credential calendar in one view."
        crumbs={[{ label: 'For Gastroenterologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How gastroenterologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for GI CME and credential management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">GI credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every annual cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {GI_WORKFLOW.map((step, i) => (
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
                &ldquo;Managing two ABIM certifications — internal medicine and GI subspecialty — meant the same DDW conference CME could count toward both, some toward just subspecialty, and some toward just general IM. I was assigning it wrong for two years before I caught it on a MOC audit. Momenties lets me tag each CME session to the correct certification immediately. The running totals are always right.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">P</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Priya N., MD, FACG</div>
                  <div className="text-xs text-muted-foreground">Gastroenterologist, academic GI practice</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All GI credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABIM IM MOC — annual points',
                'ABIM GI subspecialty MOC — annual points',
                'State medical license renewal deadline',
                'DEA registration — 3-year renewal',
                'Endoscopy and colonoscopy privileges renewal',
                'ERCP and advanced endoscopy privileges',
                'Radiation safety training — annual',
                'ACG/DDW/ASGE conference CME planning',
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
        title="Dual MOC maintained. Endoscopy privileges current."
        subtitle="CME tracking by certification, procedure privileges renewal, and GI professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
