import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Cardiologists — ABIM MOC, subspecialty certifications, and cardiology CME tracking',
  description:
    'Cardiologists manage ABIM Maintenance of Certification with annual MOC points, subspecialty board certifications in interventional cardiology, electrophysiology, or heart failure, state license renewals, DEA registration, and ACLS recertification simultaneously. Momenties tracks CME by ABIM category, surfaces renewal deadlines 90 days early, and manages the full cardiology credential calendar.',
  alternates: { canonical: '/for/cardiologists' },
  openGraph: {
    title: 'Momenties for Cardiologists',
    description: 'ABIM MOC, subspecialty certifications, and cardiology CME management.',
    url: '/for/cardiologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABIM MOC',
    desc: 'ABIM MOC requires annual CME with points allocated across categories: medical knowledge, practice assessment, patient safety and quality improvement. Subspecialty certifications in interventional cardiology, electrophysiology, nuclear cardiology, and heart failure each have independent MOC requirements. All tracked by certification and category simultaneously.',
  },
  {
    icon: Clock,
    title: 'Cardiology multi-credential renewal calendar',
    desc: '"ABIM cardiology certification — MOC annual." "Interventional cardiology — ABIM subspecialty, annual." "State medical license — october." "DEA — 3-year, july." "ACLS — 2-year, march." "Radiation safety training — annual." All cardiology credentials with 90-day advance alerts. Catheterization lab privileges never interrupted.',
  },
  {
    icon: BarChart3,
    title: 'Subspecialty MOC analytics',
    desc: 'Cardiologists with interventional, electrophysiology, or nuclear subspecialty certifications manage MOC requirements for each independently. ABIM MOC points for the general cardiology certification and each subspecialty tracked separately. Analytics shows whether each certification\'s annual point requirement is on track without spreadsheet cross-referencing.',
  },
  {
    icon: Users,
    title: 'ACC and subspecialty society involvement',
    desc: '"ACC Annual Scientific Session — march." "HRS Annual Scientific Sessions — electrophysiology, may." "TCT interventional cardiology — october." "AHA Scientific Sessions — november." Major cardiology meetings planned at year start. CME from conference sessions tagged by ABIM category immediately after attendance.',
  },
]

const CARDIO_WORKFLOW = [
  { time: 'Annual planning', action: 'ABIM MOC annual point requirements for each certification, state medical license renewal date, DEA expiration, ACLS recertification, and major cardiology conferences all loaded in January. 90-day alerts on every credential. MOC point pace calculated by conference attendance and online CME plan.' },
  { time: 'Conference CME', action: '"ACC Annual Scientific Session — 20 AMA PRA Category 1 credits, medical knowledge and patient safety." Tagged by ABIM MOC category. CME from ACC, AHA, HRS, and TCT applied to applicable certifications. General cardiology and subspecialty MOC requirements updated simultaneously where applicable.' },
  { time: 'ABIM assessment', action: '"ABIM Knowledge Check-In — online assessment, 2-hour block, scheduled october." ABIM\'s longitudinal assessment option tracks knowledge annually. Assessment block placed on calendar with preparation time. Assessment completion logged immediately to ABIM MOC record.' },
  { time: 'Privileges renewal', action: '"Catheterization lab privileges — hospital credentialing, annual, september." "Echo lab reading privileges — annual." Hospital procedural privileges requiring current ABIM certification and ACLS tracked alongside board certification renewal. No privileges gap between hospital credentialing cycles.' },
  { time: 'MOC audit', action: 'Analytics: ABIM MOC points by category. Annual point target met? Subspecialty certifications on track? State license CE complete? DEA renewal initiated? ACLS current? Procedural privileges renewal calendar confirmed? Complete cardiology credential audit in one view.' },
]

export default function ForCardiologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Cardiologists"
        title={
          <>
            Every certification maintained.
            <br />
            <em className="not-italic text-gold">MOC always current.</em>
          </>
        }
        lede="Cardiologists manage ABIM Maintenance of Certification with annual point requirements across multiple certifications, subspecialty board certifications in interventional cardiology or electrophysiology, state license renewals, DEA registration, ACLS recertification, and procedural privileges renewals simultaneously. Momenties tracks CME by ABIM category and certification, surfaces renewal deadlines 90 days early, and manages the full cardiology credential calendar in one view."
        crumbs={[{ label: 'For Cardiologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How cardiologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for cardiology CME and credential management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Cardiology MOC rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every annual cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {CARDIO_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold general cardiology and interventional subspecialty certifications — both require annual ABIM MOC points, and I was conflating them into one tracking system. A conference CME event applies to general cardiology MOC but not necessarily to the interventional subspecialty. Momenties separates them. I tag each event by applicable certification and the running totals stay accurate for both.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">M</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Michael C., MD, FACC, FSCAI</div>
                  <div className="text-xs text-muted-foreground">Interventional cardiologist, academic heart center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All cardiology credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABIM MOC points by category — annual',
                'Interventional/EP/nuclear subspecialty MOC',
                'ABIM Knowledge Check-In assessment',
                'State medical license renewal deadline',
                'DEA registration — 3-year renewal',
                'ACLS recertification — 2-year',
                'Catheterization lab privileges renewal',
                'ACC/AHA/HRS conference CME planning',
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
        title="Every certification maintained. MOC always current."
        subtitle="CME tracking by ABIM category, multi-certification MOC calendar, and cardiology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
