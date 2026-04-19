import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Transplant Surgeons — ABTS/ASTS MOC CE renewal, transplant surgeon credential management',
  description:
    'Transplant surgeons manage ABTS or ABS MOC continuous CME, UNOS annual compliance training, MPSC annual credentialing review, annual institutional transplant competency, DEA 3-year renewal, hepatitis B and tuberculosis annual testing, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full transplant surgeon credential calendar.',
  alternates: { canonical: '/for/transplant-surgeons' },
  openGraph: {
    title: 'Momenties for Transplant Surgeons',
    description: 'Transplant surgery MOC CME renewal, transplant surgeon credential management.',
    url: '/for/transplant-surgeons',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABTS MOC and state medical license renewal',
    desc: 'Transplant surgeons with ABTS (American Board of Thoracic Surgery) or ABS (American Board of Surgery) certification maintain MOC with continuous CME requirements including transplant-specific content. State medical license biennial CME runs independently with state-specific AMA PRA Category 1 requirements. MPSC (Medical Practice and Standards Committee) annual credentialing review at transplant centers requires documented competency separate from ABTS/ABS MOC. Each tracked on independent cycles.',
  },
  {
    icon: Clock,
    title: 'Transplant surgeon multi-credential renewal calendar',
    desc: '"ABTS/ABS MOC — continuous CME." "State medical license — biennial CME." "UNOS annual compliance training — CMS CoP requirement." "MPSC annual credentialing review — transplant center requirement." "DEA registration — 3-year renewal." "Annual hepatitis B titer and tuberculosis testing — institutional occupational health." "ASTS membership — annual." All transplant surgeon credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'UNOS compliance training and transplant center credentialing analytics',
    desc: 'UNOS (United Network for Organ Sharing) annual compliance training required for transplant physicians under CMS Conditions of Participation — separate from ABTS/ABS MOC CME. MPSC annual credentialing review at transplant centers includes outcomes review and peer assessment — institutional requirement separate from board certification. Annual hepatitis B titer and tuberculosis testing tracked as occupational health requirements. Each tracked as a separate mandatory requirement with independent deadlines.',
  },
  {
    icon: Users,
    title: 'ASTS, TTS, and transplant surgery professional involvement',
    desc: '"ASTS Annual Meeting — january." "TTS (The Transplantation Society) Congress — biennial." "ISODP Annual Congress (organ procurement)." "ILTS Annual Meeting (liver transplantation)." "ISHLT Annual Meeting (heart and lung)." "UNOS/OPTN policy update training." "Normothermic machine perfusion CE — emerging technology." All transplant surgery professional development on calendar. ASTS and TTS conference CME tagged by ABTS/ABS MOC and state license applicability.',
  },
]

const TS_WORKFLOW = [
  { time: 'Annual planning', action: 'ABTS/ABS MOC CME pace, state medical license biennial CME cycle, UNOS annual compliance training, MPSC annual credentialing review, DEA 3-year renewal, annual occupational health testing, ASTS Annual Meeting, and ASTS membership all loaded in January. ABTS/ABS MOC CME counter and state licensure CME tracked independently.' },
  { time: 'CME completion', action: '"ACS-approved — normothermic machine perfusion for kidney and liver preservation: device operation, perfusate management, and viability assessment criteria, 3 CME, AMA PRA Category 1, ABTS MOC applicable." ABTS/ABS MOC counter updates. State licensure CME updates. Transplant-specific procedural CE tagged separately from general surgery CE for MOC portfolio documentation.' },
  { time: 'UNOS training', action: '"UNOS annual compliance training — CMS Conditions of Participation, OPTN policies update, and organ allocation algorithm changes, 2 CME." UNOS annual training placed as a mandatory CMS requirement for transplant center physicians. UNOS training documentation submitted to transplant program director for MPSC review. Annual UNOS training placed as Q1 event — CMS surveys review training records for preceding year.' },
  { time: 'MPSC review', action: '"MPSC annual credentialing review — transplant program outcomes, case volume, and competency assessment, Q2." Annual MPSC credentialing review placed as a transplant center institutional requirement. MPSC review includes surgical volume documentation, patient outcomes, and peer assessment for continued transplant surgical privileges. Annual MPSC review is distinct from hospital-wide medical staff credentialing — transplant program-specific review with program-specific standards.' },
  { time: 'Renewal audit', action: 'Analytics: ABTS/ABS MOC CME on pace? State medical license CME adequate? UNOS annual training current? MPSC credentialing review scheduled? DEA registration valid? Annual occupational health testing done? ASTS membership active? Complete transplant surgeon credential audit 90 days before earliest renewal. ABTS, state board, UNOS, and institutional documentation maintained separately.' },
]

export default function ForTransplantSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Transplant Surgeons"
        title={
          <>
            ABTS/ABS MOC and medical licensure maintained.
            <br />
            <em className="not-italic text-gold">UNOS compliance and MPSC credentialing current.</em>
          </>
        }
        lede="Transplant surgeons manage ABTS or ABS MOC continuous CME with transplant-specific content, state medical license biennial CME on an independent cycle, mandatory UNOS annual compliance training under CMS Conditions of Participation, annual MPSC transplant center credentialing review, DEA 3-year registration, annual occupational health testing, and professional development simultaneously. Momenties tracks CME by transplant surgeon credential, surfaces renewal deadlines 90 days early, and manages the full transplant surgeon credential calendar in one view."
        crumbs={[{ label: 'For Transplant Surgeons' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How transplant surgeons use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for transplant surgeon credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Transplant surgeon credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every MOC cycle, UNOS requirement, and transplant center credentialing obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {TS_WORKFLOW.map((step, i) => (
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
                &ldquo;Transplant surgery has a credential layer that other surgical specialties don&apos;t have — UNOS compliance training that is a CMS requirement separate from everything else, and the MPSC review that is a transplant program-specific credentialing process beyond the standard hospital credentialing. My ABTS MOC is continuous and I track it alongside my state license biennial CME. The DEA is 3 years on its own cycle. Annual occupational health testing is institutional. When I add it up I have 6 or 7 active credential obligations at any given time, and several of them have hard deadlines that affect my ability to practice transplant surgery. Momenties surfaces the 90-day view across all of them.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">James C., MD, FACS</div>
                  <div className="text-xs text-muted-foreground">Transplant surgeon, academic liver and kidney transplant program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All transplant surgeon credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABTS/ABS MOC CME — continuous, transplant-specific content',
                'State medical license CME — biennial',
                'UNOS annual compliance training — CMS Conditions of Participation',
                'MPSC annual transplant center credentialing review',
                'DEA registration renewal — 3-year',
                'Annual occupational health testing — hepatitis B, tuberculosis',
                'ASTS membership renewal — annual',
                'ASTS and TTS conference CME planning by MOC and state licensure applicability',
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
        title="ABTS/ABS MOC and medical licensure maintained."
        subtitle="CME tracking by credential, UNOS compliance calendar, MPSC credentialing tracking, and transplant surgery professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
