import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Maternal-Fetal Medicine Specialists — ABOG MOC CME renewal, MFM credential management',
  description:
    'Maternal-fetal medicine specialists manage ABOG primary OB/GYN board MOC and MFM subspecialty certification MOC continuous CME, state medical license biennial CME, DEA 3-year renewal, annual fetal monitoring competency, ultrasound credentialing maintenance, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full MFM specialist credential calendar.',
  alternates: { canonical: '/for/maternal-fetal-medicine-specialists' },
  openGraph: {
    title: 'Momenties for Maternal-Fetal Medicine Specialists',
    description: 'ABOG MOC CME renewal, MFM credential management.',
    url: '/for/maternal-fetal-medicine-specialists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABOG OB/GYN MOC and MFM subspecialty MOC independently',
    desc: 'MFM specialists hold ABOG (American Board of Obstetrics and Gynecology) primary OB/GYN certification and MFM subspecialty certification — both under ABOG\'s continuous MOC program with different content requirements. Primary OB/GYN MOC requires general obstetrics and gynecology CME. MFM subspecialty MOC requires high-risk obstetrics, fetal surveillance, periviability management, and maternal critical care content specifically. State medical license biennial CME runs on an independent cycle. DEA registration 3-year renewal for obstetric analgesics and other controlled substances.',
  },
  {
    icon: Clock,
    title: 'MFM specialist multi-credential renewal calendar',
    desc: '"ABOG primary OB/GYN MOC — continuous CME." "ABOG MFM subspecialty MOC — high-risk OB content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual fetal monitoring competency — ACOG NRP or institutional." "Ultrasound credentialing maintenance — ARDMS or institutional." "SMFM membership — annual." All MFM credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'MFM subspecialty content requirements and ultrasound credentialing analytics',
    desc: 'ABOG MFM subspecialty MOC requires CME content in high-risk obstetrics domains — fetal growth restriction management, preterm labor prevention, fetal anomaly counseling, and maternal critical care — general OB/GYN CME does not satisfy MFM subspecialty content requirements. Ultrasound credentialing for MFM physicians performing targeted anatomic surveys, fetal echocardiography, and invasive procedures (amniocentesis, CVS) requires maintenance through ARDMS or institutional credentialing with documented procedure logs. Annual fetal monitoring competency covers electronic fetal monitoring interpretation separately from board certification.',
  },
  {
    icon: Users,
    title: 'SMFM, ACOG, and maternal-fetal medicine professional involvement',
    desc: '"SMFM Annual Meeting — february." "ACOG Annual Clinical and Scientific Meeting — may." "ISUOG World Congress — october." "AIUM Annual Convention." "Fetal intervention and therapy CE." "Periviability counseling and management CE." "Maternal cardiac disease in pregnancy CE." "Fetal echocardiography and cardiac anomaly CE." All MFM professional development on calendar. SMFM and ACOG conference CME tagged by ABOG primary MOC and MFM subspecialty domain applicability.',
  },
]

const MFM_WORKFLOW = [
  { time: 'Annual planning', action: 'ABOG primary OB/GYN MOC CME pace, ABOG MFM subspecialty MOC CE pace (high-risk OB content tracked), state medical license biennial CME, DEA 3-year renewal, annual fetal monitoring competency, ultrasound credentialing maintenance, SMFM Annual Meeting, ACOG meeting, and SMFM membership all loaded in January. ABOG primary MOC counter, MFM subspecialty CE counter, and state licensure CME tracked independently.' },
  { time: 'CME completion', action: '"SMFM-approved — preterm birth prevention: cervical length screening protocols, progesterone supplementation dosing in singleton and twin gestations, and cerclage indications in cervical insufficiency, 2 CME, AMA PRA Category 1, ABOG MOC applicable, MFM subspecialty applicable — preterm birth domain." ABOG MOC counter updates. MFM subspecialty CE counter updates. High-risk OB content confirmed — general OB CME logged separately without MFM subspecialty credit.' },
  { time: 'Fetal monitoring', action: '"Annual fetal monitoring competency — electronic fetal monitoring category 1/2/3 interpretation, uterine activity assessment, and Category 2 triage decision protocol, Q1." Annual fetal monitoring competency assessment placed as an ACOG and institutional labor and delivery credentialing requirement separate from ABOG board certification. Fetal monitoring interpretation competency required for MFM physicians participating in high-risk labor management and remote FHR interpretation consultations.' },
  { time: 'Ultrasound CE', action: '"ARDMS CE — advanced fetal cardiac ultrasound: four-chamber view optimization, outflow tract assessment, and color Doppler in fetal cardiac anomaly detection, 2 CE, Q2." Ultrasound CE tracked for ARDMS registered diagnostic medical sonographer credential maintenance (if held) or institutional ultrasound privileging requirements. MFM physicians performing targeted anatomic surveys and fetal echocardiography document ultrasound CE separately from ABOG MOC CME for hospital credentialing documentation.' },
  { time: 'Renewal audit', action: 'Analytics: ABOG primary OB/GYN MOC CME on pace? MFM subspecialty content requirements satisfied? State medical license CME complete? Annual fetal monitoring competency documented? DEA valid? Ultrasound credentialing current? SMFM membership active? Complete MFM specialist credential audit 90 days before earliest renewal. ABOG, state board, institutional ultrasound, and DEA documentation maintained separately.' },
]

export default function ForMaternalFetalMedicineSpecialistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Maternal-Fetal Medicine Specialists"
        title={
          <>
            ABOG MOC and MFM subspecialty maintained.
            <br />
            <em className="not-italic text-gold">Ultrasound credentialing current. Fetal monitoring competency documented.</em>
          </>
        }
        lede="Maternal-fetal medicine specialists manage ABOG primary OB/GYN continuous MOC and MFM subspecialty MOC with separate high-risk obstetrics content requirements, state medical license biennial CME, DEA 3-year registration, annual fetal monitoring competency assessment as a labor and delivery credentialing requirement, ultrasound credentialing maintenance for targeted anatomic surveys and fetal echocardiography, and professional development at SMFM and ACOG simultaneously. Momenties tracks CME by MFM credential, surfaces renewal deadlines 90 days early, and manages the full MFM specialist credential calendar in one view."
        crumbs={[{ label: 'For Maternal-Fetal Medicine Specialists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How maternal-fetal medicine specialists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for MFM specialist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">MFM specialist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every ABOG MOC cycle, MFM subspecialty requirement, and annual ultrasound credentialing obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {MFM_WORKFLOW.map((step, i) => (
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
                &ldquo;ABOG has my OB/GYN certification and my MFM subspecialty certification under one MOC umbrella but the content requirements are different. MFM requires CME in high-risk obstetrics topics specifically — not just any OB/GYN CME. My state license is biennial with its own CE requirement. We do annual fetal monitoring competency at the department level. I maintain my ultrasound credentialing for fetal echo with documented CE and procedure logs. DEA is every 3 years. My institution also has continuing credentialing requirements for high-risk procedures. That&apos;s five separate credentialing tracks. Momenties was the first tool that let me separate them while still seeing them in one calendar.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">P</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Patricia V., MD</div>
                  <div className="text-xs text-muted-foreground">Maternal-fetal medicine specialist, academic high-risk obstetrics and fetal therapy program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All MFM specialist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABOG primary OB/GYN MOC CME — continuous, general obstetrics content',
                'ABOG MFM subspecialty MOC — high-risk obstetrics content, independent tracking',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Annual fetal monitoring competency — labor and delivery credentialing requirement',
                'Ultrasound credentialing maintenance — ARDMS or institutional privilege renewal',
                'SMFM membership renewal — annual',
                'SMFM and ACOG conference CME planning by ABOG primary and MFM subspecialty applicability',
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
        title="ABOG MOC and MFM subspecialty maintained."
        subtitle="CME tracking with high-risk OB content requirements, fetal monitoring competency calendar, ultrasound credentialing, and MFM professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
