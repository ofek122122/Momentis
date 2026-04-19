import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Neuroradiologists — ABR MOC CME renewal, neuroradiology credential management',
  description:
    'Neuroradiologists manage ABR diagnostic radiology primary MOC with neuroradiology subspecialty content, ABR neuroradiology subspecialty certificate of added qualification, annual fluoroscopy radiation safety CE as a state regulatory requirement, annual MR safety medical director training, state medical license biennial CME, DEA 3-year renewal, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full neuroradiologist credential calendar.',
  alternates: { canonical: '/for/neuroradiologists' },
  openGraph: {
    title: 'Momenties for Neuroradiologists',
    description: 'ABR MOC CME renewal, neuroradiology credential management.',
    url: '/for/neuroradiologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABR diagnostic radiology MOC and neuroradiology subspecialty independently',
    desc: 'Neuroradiologists hold ABR diagnostic radiology primary certification under continuous MOC and ABR neuroradiology certificate of added qualification (CAQ) — two ABR credentials with different content requirements. ABR neuroradiology CAQ requires neuroradiology-specific content including brain MRI interpretation, spine and head and neck imaging, neurointerventional procedures, and advanced neuro MRI techniques (perfusion, diffusion tensor imaging, MR spectroscopy). ABR diagnostic radiology MOC runs on a continuous cycle. Annual fluoroscopy radiation safety CE is a state-level regulatory requirement for fluoroscopy operators separate from all ABR board requirements — neuroradiologists performing fluoroscopy-guided procedures must satisfy this requirement independently.',
  },
  {
    icon: Clock,
    title: 'Neuroradiologist multi-credential renewal calendar',
    desc: '"ABR diagnostic radiology MOC — continuous CME." "ABR neuroradiology CAQ — neuroradiology content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual fluoroscopy radiation safety CE — state regulatory requirement." "Annual MR safety medical director training (if MR safety officer or supervising MRI)." "ASNR membership — annual." "ACR membership — annual." All neuroradiologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Annual fluoroscopy radiation safety CE and MR safety medical director training analytics',
    desc: 'Annual fluoroscopy radiation safety CE is required by state radiation control programs for physicians who operate or supervise fluoroscopic equipment — this is a state regulatory requirement that exists entirely outside the ABR MOC system. Most states require documented annual radiation safety training for fluoroscopy operators with completion certificates from approved providers. MR safety medical director training for physicians serving as the MR safety officer at their institution is an ACR MRI accreditation requirement — ACR standards require the MR medical director to complete MR safety training, typically annually or biennially depending on accreditation cycle.',
  },
  {
    icon: Users,
    title: 'ASNR, ACR, and neuroradiology professional involvement',
    desc: '"ASNR Annual Meeting — may." "ACR Annual Meeting — may." "RSNA Annual Meeting — november." "American Society of Neuroradiology Annual Meeting." "Neuro MRI advanced techniques CE — arterial spin labeling, diffusion tensor imaging tractography, fMRI task design." "Spine imaging CE — postoperative spine MRI interpretation, intradural versus extradural pathology." "Head and neck imaging CE — neck mass evaluation, skull base tumors, temporal bone CT/MRI." "Neurointerventional imaging CE — aneurysm morphology on CTA, vasospasm on TCD and MRA." All neuroradiology professional development on calendar. ASNR and RSNA conference CME tagged by ABR primary and neuroradiology CAQ applicability.',
  },
]

const NRAD_WORKFLOW = [
  { time: 'Annual planning', action: 'ABR diagnostic radiology MOC CME pace (neuroradiology content weighted), ABR neuroradiology CAQ CE pace, state medical license biennial CME, DEA 3-year renewal, annual fluoroscopy radiation safety CE (Q1, before state renewal cycle), annual MR safety training (if MR medical director), ASNR Annual Meeting, RSNA Annual Meeting, and ASNR and ACR memberships all loaded in January. ABR primary counter, neuroradiology CAQ counter, and state licensure CME tracked independently. Fluoroscopy CE placed as Q1 priority before state inspection cycles.' },
  { time: 'CE completion', action: '"ASNR-approved — advanced brain MRI perfusion techniques: ASL perfusion in acute stroke — advantages over DSC perfusion, normal perfusion patterns by age, common artifacts and correction methods, and clinical integration with DWI in hyperacute stroke, 2 CME, AMA PRA Category 1, ABR MOC applicable, ABR neuroradiology CAQ applicable — brain imaging domain." ABR primary counter updates. Neuroradiology CAQ counter updates. State licensure CME updates. Neuroradiology content confirmed.' },
  { time: 'Fluoroscopy CE', action: '"Annual fluoroscopy radiation safety CE — state radiation control program requirement: fluoroscopic equipment operation, radiation dose monitoring and recording, patient dose optimization in neurointerventional procedures, and occupational dose limits for fluoroscopy operators, 2 CE, Q1." Annual fluoroscopy CE placed as Q1 state regulatory requirement with documentation due before annual facility radiation safety report. Certificate of completion required for state records. Separate from ABR MOC — board CE does not satisfy state radiation control program documentation requirement.' },
  { time: 'MR safety', action: '"Annual MR safety medical director training — ACR accreditation requirement: zone definition and access control updates, MR conditional implant screening protocol review, projectile risk mitigation, and quench emergency procedures, 3 CE, Q2." Annual MR safety training placed for neuroradiologists serving as MR safety officers or medical directors at ACR-accredited MRI sites. ACR MRI accreditation standards require documented MR safety training for the physician medical director — ACR accreditation cycle is 3 years but annual training is a best-practice requirement for facilities with active incident documentation programs.' },
  { time: 'Renewal audit', action: 'Analytics: ABR diagnostic radiology MOC CME on pace? ABR neuroradiology CAQ content requirements satisfied? State medical license CME complete? DEA valid? Annual fluoroscopy radiation safety CE documented? MR safety training current? ASNR membership active? Fluoroscopy CE certificate filed with state radiation control program? Complete neuroradiologist credential audit 90 days before earliest renewal.' },
]

export default function ForNeuroradiologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Neuroradiologists"
        title={
          <>
            ABR MOC and neuroradiology CAQ maintained.
            <br />
            <em className="not-italic text-gold">Fluoroscopy CE documented. MR safety training tracked.</em>
          </>
        }
        lede="Neuroradiologists manage ABR diagnostic radiology continuous MOC with neuroradiology subspecialty content, ABR neuroradiology certificate of added qualification on a separate cycle, state medical license biennial CME, DEA 3-year registration, annual fluoroscopy radiation safety CE as a state regulatory requirement separate from ABR MOC, annual MR safety medical director training for ACR accreditation, and professional development at ASNR and RSNA simultaneously. Momenties tracks CME by neuroradiologist credential, surfaces renewal deadlines 90 days early, and manages the full credential calendar in one view."
        crumbs={[{ label: 'For Neuroradiologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How neuroradiologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for neuroradiologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Neuroradiologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABR MOC cycles, neuroradiology CAQ, and annual state fluoroscopy and MR safety requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {NRAD_WORKFLOW.map((step, i) => (
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
                &ldquo;ABR diagnostic radiology MOC is continuous. My neuroradiology CAQ has its own content requirements — not all my radiology CE counts toward the neuroradiology CAQ. I&apos;m also the MR medical director for our facility, which means ACR accreditation requires me to complete MR safety training annually — that&apos;s a documentation requirement that exists completely outside ABR. The fluoroscopy radiation safety CE is a state regulatory requirement, not a board requirement — my state radiation control program requires annual documentation that I completed an approved fluoroscopy safety course. Most radiologists don&apos;t realize it&apos;s separate from their CME because it feels similar, but the certificate goes to the state, not the board. State license biennial, DEA 3-year. Before Momenties I had four separate places where I tracked CE and two of them were paper files.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">A</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Alexis F., MD</div>
                  <div className="text-xs text-muted-foreground">Neuroradiologist and MR medical director, academic medical center radiology department</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All neuroradiologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABR diagnostic radiology MOC CME — continuous, neuroradiology content weighted',
                'ABR neuroradiology CAQ — brain, spine, head and neck, neurointerventional domains',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual fluoroscopy radiation safety CE — state radiation control program requirement',
                'Annual MR safety medical director training — ACR accreditation standard',
                'ASNR membership renewal — annual',
                'ASNR and RSNA conference CME planning by ABR primary and neuroradiology CAQ applicability',
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
        title="ABR MOC and neuroradiology CAQ maintained."
        subtitle="CME tracking for ABR dual certification, state fluoroscopy radiation safety CE documentation, MR safety medical director training, and neuroradiology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
