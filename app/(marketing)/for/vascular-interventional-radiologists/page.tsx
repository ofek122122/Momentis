import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Vascular and Interventional Radiologists — ABR MOC CME renewal, VIR credential management',
  description:
    'Vascular and interventional radiologists manage ABR diagnostic radiology and interventional radiology MOC continuous CME, state medical license biennial CME, annual fluoroscopy radiation safety CE, DEA 3-year renewal for procedural sedation, hospital VIR credentialing with procedure volume requirements, RSNA/SIR conference CE, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full VIR credential calendar.',
  alternates: { canonical: '/for/vascular-interventional-radiologists' },
  openGraph: {
    title: 'Momenties for Vascular and Interventional Radiologists',
    description: 'ABR MOC CME renewal, VIR credential management.',
    url: '/for/vascular-interventional-radiologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABR diagnostic radiology and interventional radiology MOC independently',
    desc: 'Vascular and interventional radiologists hold ABR (American Board of Radiology) certification in diagnostic radiology with interventional radiology subspecialty — or the newer dedicated ABR IR/DR certification. ABR MOC requires continuous CME with radiology content and meets ABR IR pathway requirements. State medical license biennial CME runs independently. Annual fluoroscopy radiation safety CE required under state radiation protection regulations for operators of fluoroscopic equipment — separate from ABR MOC. ACLS 2-year renewal for procedural sedation at many institutions.',
  },
  {
    icon: Clock,
    title: 'VIR multi-credential renewal calendar',
    desc: '"ABR MOC — continuous CME, DR + IR content." "State medical license — biennial CME." "Annual fluoroscopy radiation safety CE — state requirement." "DEA registration — 3-year (procedural sedation)." "ACLS — 2-year renewal (for sedation credentialing)." "Hospital VIR credentialing — annual procedure volume review." "SIR membership — annual." All VIR credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Fluoroscopy radiation safety and hospital VIR credentialing analytics',
    desc: 'Annual fluoroscopy radiation safety CE required for all fluoroscopy operators under state radiation protection programs — separate from ABR MOC, typically 1-2 CE hours annually on dose optimization, patient dose management, and radiation protection posture in the angiography suite. Hospital VIR credentialing reviews procedure volumes (TIPS, UFE, peripheral arterial interventions, ablations) and outcomes annually — separate from ABR certification. ACLS required by many institutions for credentialing VIR physicians who administer conscious sedation. Each tracked independently.',
  },
  {
    icon: Users,
    title: 'SIR, RSNA, and interventional radiology professional involvement',
    desc: '"SIR Annual Scientific Meeting — march." "RSNA Annual Meeting — november." "CIRSE Annual Congress — september." "AVIR Annual Meeting." "Embolization techniques and materials CE." "Venous thromboembolic disease intervention CE." "Y-90 radioembolization operator training." "Irreversible electroporation and microwave ablation CE." All VIR professional development on calendar. SIR and RSNA conference CME tagged by ABR MOC IR/DR content domain applicability.',
  },
]

const VIR_WORKFLOW = [
  { time: 'Annual planning', action: 'ABR MOC CME pace (DR and IR content), state medical license biennial CME, annual fluoroscopy radiation safety CE, ACLS 2-year cycle, DEA 3-year renewal, annual VIR hospital credentialing, SIR Annual Meeting, RSNA Annual Meeting, and SIR membership all loaded in January. ABR MOC counter and state licensure CME tracked independently. Annual fluoroscopy CE placed as Q1 requirement.' },
  { time: 'CME completion', action: '"SIR-approved — portal hypertension management: TIPS indication criteria, technical considerations in TIPS creation, and post-TIPS surveillance protocol for hepatic encephalopathy, 2 CME, AMA PRA Category 1, ABR MOC applicable — interventional radiology domain." ABR MOC counter updates. State licensure CME updates. IR-specific procedural CME tagged by procedure category for VIR credentialing portfolio documentation.' },
  { time: 'Radiation safety', action: '"Annual fluoroscopy radiation safety CE — angiographic suite dose optimization: DAP thresholds, last image hold utilization, and patient dose monitoring in complex arterial interventions, 1 CME, Q1." Annual fluoroscopy radiation safety CE placed as a state regulatory requirement for VIR physicians. All fluoroscopy operators must complete annual radiation safety CE under most state radiation protection programs. Placed Q1 with completion documented before annual VIR hospital credentialing cycle.' },
  { time: 'VIR credentialing', action: '"Annual VIR hospital credentialing review — peripheral arterial intervention volume, TIPS outcomes, UFE complication rate, and ablation case log, Q2." Annual VIR hospital credentialing review placed as an institutional privileges requirement. Procedure volume thresholds (minimum cases per year for TIPS, UFE, chemoembolization) and outcome metrics submitted annually. Separate from ABR board certification — institutional competency verification for interventional privileges.' },
  { time: 'Renewal audit', action: 'Analytics: ABR MOC CME on pace? IR content requirements satisfied? State medical license CME complete? Annual fluoroscopy CE documented? ACLS current? DEA valid? VIR hospital credentialing submitted? SIR membership active? Complete VIR credential audit 90 days before earliest renewal. ABR, state board, institutional, and DEA documentation maintained separately.' },
]

export default function ForVascularInterventionalRadiologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Vascular and Interventional Radiologists"
        title={
          <>
            ABR MOC and state licensure maintained.
            <br />
            <em className="not-italic text-gold">Radiation safety CE current. VIR credentialing documented.</em>
          </>
        }
        lede="Vascular and interventional radiologists manage ABR continuous MOC with diagnostic radiology and interventional radiology content, state medical license biennial CME, annual fluoroscopy radiation safety CE as a state regulatory requirement for fluoroscopy operators, DEA 3-year registration for procedural sedation, ACLS 2-year renewal for sedation credentialing, annual hospital VIR procedure volume and outcomes review, and professional development at SIR and RSNA simultaneously. Momenties tracks CME by VIR credential, surfaces renewal deadlines 90 days early, and manages the full VIR credential calendar in one view."
        crumbs={[{ label: 'For Vascular and Interventional Radiologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How vascular and interventional radiologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for VIR credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">VIR credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every ABR MOC cycle, radiation safety requirement, and hospital VIR privileges review.</h2>
          </Reveal>
          <div className="space-y-3">
            {VIR_WORKFLOW.map((step, i) => (
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
                &ldquo;I have ABR diagnostic radiology and the interventional radiology subspecialty certification. MOC is continuous for both. My state license is biennial. I have to do annual fluoroscopy radiation safety CE — that&apos;s a regulatory requirement, not a board requirement, and most people don&apos;t realize they&apos;re separate. My hospital does annual VIR credentialing where I submit my TIPS, UFE, and peripheral arterial case volumes. ACLS is required because I sedate my own patients. DEA is 3 years for the sedation medications. That&apos;s six credential items on completely different clocks. Momenties was the first calendar I&apos;ve used that treated all of them as real items rather than hoping I&apos;d remember them when they came due.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">G</div>
                <div>
                  <div className="text-sm font-medium text-foreground">George S., MD, FSIR</div>
                  <div className="text-xs text-muted-foreground">Vascular and interventional radiologist, academic medical center IR program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All VIR credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABR MOC CME — continuous, DR + IR content requirements',
                'State medical license CME — biennial',
                'Annual fluoroscopy radiation safety CE — state regulatory requirement',
                'ACLS certification — 2-year renewal (sedation credentialing)',
                'DEA registration renewal — 3-year (procedural sedation)',
                'Annual hospital VIR credentialing — procedure volume and outcomes review',
                'SIR membership renewal — annual',
                'SIR and RSNA conference CME planning by ABR MOC domain applicability',
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
        title="ABR MOC and state licensure maintained."
        subtitle="CME tracking, annual radiation safety CE, VIR hospital credentialing calendar, and interventional radiology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
