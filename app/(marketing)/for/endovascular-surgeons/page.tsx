import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Endovascular Surgeons — SVS MOC CME renewal, endovascular surgeon credential management',
  description:
    'Endovascular surgeons manage ABVS vascular surgery board certification MOC continuous CME with vascular and endovascular content, ABS general surgery primary MOC on an independent cycle, annual fluoroscopy radiation safety CE, ACLS 2-year renewal, DEA 3-year renewal, annual vascular laboratory credentialing, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full endovascular surgeon credential calendar.',
  alternates: { canonical: '/for/endovascular-surgeons' },
  openGraph: {
    title: 'Momenties for Endovascular Surgeons',
    description: 'ABVS MOC CME renewal, endovascular surgeon credential management.',
    url: '/for/endovascular-surgeons',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABVS vascular surgery MOC and ABS general surgery independently',
    desc: 'Endovascular surgeons hold ABS general surgery primary board certification and ABVS vascular surgery subspecialty certification — two separate boards with different MOC structures. ABVS vascular surgery MOC requires vascular and endovascular CE content including open aortic repair, EVAR/TEVAR, peripheral arterial disease endovascular intervention, carotid endarterectomy vs. CAS, dialysis access, and venous disease management. ABS general surgery MOC requires general surgery content on an independent cycle. Annual fluoroscopy radiation safety CE is a state regulatory requirement separate from both boards for surgeons operating in an endovascular suite.',
  },
  {
    icon: Clock,
    title: 'Endovascular surgeon multi-credential renewal calendar',
    desc: '"ABVS vascular surgery MOC — continuous CME, vascular content." "ABS general surgery MOC — general surgery CE, independent cycle." "State medical license — biennial CME." "DEA registration — 3-year renewal." "ACLS — 2-year renewal." "Annual fluoroscopy radiation safety CE — state regulatory requirement." "Annual vascular laboratory credentialing (if vascular lab director)." "SVS membership — annual." All endovascular surgeon credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Fluoroscopy radiation safety CE and vascular laboratory director competency analytics',
    desc: 'Endovascular surgeons operating in an endovascular suite using fluoroscopy are subject to state radiation safety regulations requiring annual or biennial radiation safety and protection CE — the specific requirement varies by state but is mandated separately from ABVS MOC and ABS MOC. Vascular surgeons serving as medical directors of an accredited vascular laboratory (IAC or ICAVL) must maintain documented directorship competency including annual quality assurance review and case volume thresholds for each accredited modality (duplex ultrasound, physiologic testing). Vascular lab directorship CE is separate from all board CE.',
  },
  {
    icon: Users,
    title: 'SVS, ACS, and endovascular surgery professional involvement',
    desc: '"SVS Vascular Annual Meeting — june." "ACS Clinical Congress — october." "VEITH Symposium — november." "CIRSE Annual Congress (Europe)." "EVAR and TEVAR anatomic planning CE — IFU compliance and off-label sizing." "Peripheral arterial disease endovascular CE — drug-coated balloon, atherectomy device selection." "Carotid artery stenting and CEA CE — high-risk surgical criteria, embolic protection." "Dialysis access CE — AV fistula maturation surveillance, intervention timing." All endovascular surgery professional development on calendar. SVS conference CME tagged by ABVS and ABS applicability.',
  },
]

const ENDOVASC_WORKFLOW = [
  { time: 'Annual planning', action: 'ABVS vascular surgery MOC CME pace (vascular content), ABS general surgery MOC CME pace (general surgery content, independent cycle), state medical license biennial CME, DEA 3-year renewal, ACLS 2-year cycle, annual fluoroscopy radiation safety CE, annual vascular laboratory quality review (if vascular lab director), SVS Annual Meeting, ACS Clinical Congress, and SVS membership all loaded in January. ABVS counter, ABS counter, and state licensure CME tracked independently. Fluoroscopy CE placed Q1 before endovascular case season accelerates.' },
  { time: 'CE completion', action: '"SVS-approved — TEVAR for descending thoracic aortic aneurysm: landing zone classification, subclavian artery revascularization decision criteria, and spinal cord ischemia prevention with staged deployment, 2 CME, AMA PRA Category 1, ABVS applicable — aortic endovascular domain, ABS applicable." ABVS counter updates. ABS general surgery counter updates. State licensure CME updates. Dual-credit for vascular and general surgery confirmed.' },
  { time: 'Radiation CE', action: '"Annual fluoroscopy radiation safety CE — state regulatory requirement: ALARA principles in the endovascular suite, radiation dose monitoring and reporting in complex EVAR and TEVAR procedures, and patient and staff dose minimization techniques in hybrid operating room, 2 CE, Q1." Annual fluoroscopy CE placed as Q1 regulatory requirement. State radiation safety regulations specify the CE requirement for fluoroscopy operators — placed Q1 before spring endovascular scheduling ramps. Radiation CE logged separately from ABVS and ABS CME — state regulatory requirement has its own documentation track.' },
  { time: 'Vascular lab', action: '"Annual vascular laboratory quality assurance review — IAC accreditation: duplex ultrasound protocol compliance audit, sonographer competency documentation, and correlation analysis for stenosis classification vs. angiographic findings, Q2." Annual vascular laboratory QA review placed as IAC accreditation requirement for vascular lab directors. IAC accreditation requires annual quality assurance documentation — correlation audits, protocol compliance, and case volume thresholds. Vascular lab director CE distinct from personal ABVS MOC.' },
  { time: 'Renewal audit', action: 'Analytics: ABVS vascular surgery MOC CME on pace? ABS general surgery MOC current? State medical license CME complete? DEA valid? ACLS current? Annual fluoroscopy radiation safety CE documented? Vascular laboratory QA review complete (if applicable)? SVS membership active? Complete endovascular surgeon credential audit 90 days before earliest renewal. ABVS, ABS, state board, DEA, and vascular lab documentation maintained separately.' },
]

export default function ForEndovascularSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Endovascular Surgeons"
        title={
          <>
            ABVS and ABS MOC maintained.
            <br />
            <em className="not-italic text-gold">Fluoroscopy CE documented. Vascular lab credentialing tracked.</em>
          </>
        }
        lede="Endovascular surgeons manage ABVS vascular surgery continuous MOC with vascular and endovascular-specific content, ABS general surgery primary MOC on an independent cycle, state medical license biennial CME, annual fluoroscopy radiation safety CE as a state regulatory requirement separate from both boards, DEA 3-year registration, ACLS 2-year renewal, vascular laboratory IAC accreditation directorship documentation, and professional development at SVS and ACS simultaneously. Momenties tracks CME by endovascular surgeon credential, surfaces renewal deadlines 90 days early, and manages the full credential calendar in one view."
        crumbs={[{ label: 'For Endovascular Surgeons' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How endovascular surgeons use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for endovascular surgeon credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Endovascular surgeon credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through ABVS and ABS MOC cycles, annual fluoroscopy CE, and vascular laboratory accreditation requirements.</h2>
          </Reveal>
          <div className="space-y-3">
            {ENDOVASC_WORKFLOW.map((step, i) => (
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
                &ldquo;I have ABVS vascular surgery and ABS general surgery — two boards with different CME content requirements and independent renewal timelines. My state requires annual fluoroscopy radiation safety CE because I operate in a hybrid OR with a fixed fluoroscopy system — that&apos;s a regulatory requirement that exists entirely outside of either board. I direct our IAC-accredited vascular lab, which has its own annual QA requirements. ACLS is hospital-required. State license is biennial. At any given time I have five things running on different clocks. The fluoroscopy CE is the one that people overlook — it&apos;s a real state regulatory requirement with real consequences and it doesn&apos;t show up in your board renewal reminder because it&apos;s not a board requirement. Momenties is the first system where I could put all five in one calendar.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">N</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Nicholas P., MD, FACS, FAVLS</div>
                  <div className="text-xs text-muted-foreground">Endovascular and vascular surgeon, academic hybrid OR and IAC-accredited vascular laboratory</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All endovascular surgeon credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABVS vascular surgery MOC CME — continuous, vascular and endovascular content',
                'ABS general surgery MOC — independent cycle, general surgery content',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'ACLS certification — 2-year renewal',
                'Annual fluoroscopy radiation safety CE — state regulatory requirement',
                'Vascular laboratory IAC accreditation QA documentation (if lab director)',
                'SVS and ACS conference CME planning by ABVS and ABS applicability',
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
        title="ABVS and ABS MOC maintained."
        subtitle="CME tracking for dual board certification, annual fluoroscopy regulatory CE, vascular laboratory accreditation, and endovascular surgery professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
