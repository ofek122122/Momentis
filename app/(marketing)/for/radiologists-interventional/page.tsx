import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Interventional Radiologists — ABR Diagnostic and IR MOC, CME tracking, and IR credential management',
  description:
    'Interventional radiologists manage ABR Diagnostic Radiology MOC alongside ABR Interventional Radiology and Diagnostic Radiology (IR/DR) or VSIR subspecialty certification, fluoroscopy operator licensing, DEA registration, procedural credentialing, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full IR credential calendar.',
  alternates: { canonical: '/for/radiologists-interventional' },
  openGraph: {
    title: 'Momenties for Interventional Radiologists',
    description: 'ABR Diagnostic and IR MOC, CME tracking, and IR credential management.',
    url: '/for/radiologists-interventional',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABR Diagnostic Radiology and IR subspecialty MOC',
    desc: 'ABR Diagnostic Radiology MOC requires ongoing CME and OLA (Online Longitudinal Assessment) modules. ABR IR/DR or VSIR (Vascular and Interventional Radiology) subspecialty certification requires subspecialty CME and separate assessment requirements. Both board tracks run concurrently. IR-specific procedural CME may satisfy IR MOC but not Diagnostic Radiology MOC requirements. Each board tracked independently.',
  },
  {
    icon: Clock,
    title: 'Interventional radiologist multi-credential renewal calendar',
    desc: '"ABR DR MOC — continuous, OLA modules annual." "ABR IR/DR or VSIR MOC — continuous, subspecialty CME." "State medical license — biennial CME." "DEA registration — 3-year." "Fluoroscopy operator license — biennial, state-specific." "Radiation worker training — annual." "SIR membership — annual." All IR credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Fluoroscopy, radiation safety, and procedural CE analytics',
    desc: 'Interventional radiologists hold state fluoroscopy operator licenses with biennial renewal CE requirements independent of ABR MOC. Annual radiation worker training required by institutional and NRC/Agreement State policy, tracked separately as compliance CE. Procedural credentialing for new techniques (TACE, TIPS, EVAR, embolization variants) tracked as institutional requirements. Each compliance category confirmed independently.',
  },
  {
    icon: Users,
    title: 'SIR, RSNA, ACR, and interventional radiology professional involvement',
    desc: '"SIR Annual Scientific Meeting — march." "RSNA Annual Meeting — november." "CIRSE Annual Congress — september." "ACR Annual Meeting — may." "Hospital IR quality improvement conference." "Vascular and interventional simulation skills course." All IR professional development on calendar. Conference CME tagged by applicable ABR board in advance.',
  },
]

const IR_WORKFLOW = [
  { time: 'Annual planning', action: 'ABR DR OLA module schedule, ABR IR/DR subspecialty CME pace, state medical license biennial renewal, DEA 3-year renewal, fluoroscopy license biennial renewal, annual radiation safety training, SIR Annual Meeting, and SIR membership all loaded in January. CME pace calculated per ABR board requirement independently.' },
  { time: 'CME completion', action: '"ABR-MOC approved — hepatocellular carcinoma transarterial chemoembolization: patient selection and technical considerations, 3 CME, IR subspecialty." Tagged by applicable board. ABR IR/DR MOC counter updates. If DR MOC also accepts the content, ABR DR counter updates. Each board tracked independently.' },
  { time: 'Fluoroscopy license', action: '"Fluoroscopy operator license renewal — biennial, state-specific, 8 CE." Fluoroscopy operator license tracked on biennial state cycle independent of ABR MOC and biennial state medical license. Fluoroscopy CE must be in radiation safety and fluoroscopy technique content areas as specified by state. Placed on calendar when current licensure dates are confirmed.' },
  { time: 'DEA and safety', action: '"DEA registration renewal — 3-year, november." "Annual radiation safety training — 1.5 CE, institutional compliance." DEA tracked on 3-year cycle. Annual radiation safety training as mandatory compliance. IR physicians who prescribe conscious sedation medications must maintain DEA registration. Radiation safety training placed as a January recurring event.' },
  { time: 'Renewal audit', action: 'Analytics: ABR DR MOC OLA modules current? ABR IR subspecialty CME on pace? State medical license CME complete? DEA registration valid? Fluoroscopy license current? Annual radiation safety training documented? SIR membership active? Complete IR credential audit 90 days before earliest renewal. ABR and state board documentation maintained separately.' },
]

export default function ForRadiologistsInterventionalPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Interventional Radiologists"
        title={
          <>
            ABR DR and IR subspecialty MOC maintained.
            <br />
            <em className="not-italic text-gold">Fluoroscopy license and DEA never lapsed.</em>
          </>
        }
        lede="Interventional radiologists manage ABR Diagnostic Radiology MOC alongside ABR IR/DR subspecialty certification on independent cycles, state fluoroscopy operator license with biennial CE, DEA 3-year registration renewal, annual radiation worker safety training, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full IR credential calendar in one view."
        crumbs={[{ label: 'For Interventional Radiologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How interventional radiologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for IR credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">IR credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed across independent board and regulatory cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {IR_WORKFLOW.map((step, i) => (
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
                &ldquo;IR has the most complex credential stack of any specialty I know. I maintain ABR DR MOC with annual OLA modules, ABR VSIR MOC with separate subspecialty CME, a state medical license, a state fluoroscopy operator license on its own biennial renewal, DEA registration, and annual radiation worker training. The fluoroscopy license is the one that people let lapse — it has a completely different regulatory authority than the medical license and the renewal CE is specialty-specific. Momenties is the only thing I trust to track all six tracks separately.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">A</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Alan T., MD, FSIR</div>
                  <div className="text-xs text-muted-foreground">Interventional radiologist, academic vascular and interventional program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All interventional radiology credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABR DR MOC CME and OLA modules — annual',
                'ABR IR/DR or VSIR subspecialty MOC — continuous',
                'State medical license CME — biennial',
                'State fluoroscopy operator license — biennial CE',
                'DEA registration renewal — 3-year',
                'Annual radiation worker safety training',
                'SIR and RSNA conference CME planning by board',
                'Procedural credentialing updates (institutional)',
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
        title="ABR DR and IR subspecialty MOC maintained."
        subtitle="CME tracking by board, fluoroscopy license and DEA calendar, and IR professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
