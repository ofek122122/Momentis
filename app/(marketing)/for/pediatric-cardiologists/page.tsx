import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Pediatric Cardiologists — ABP MOC CME renewal, pediatric cardiology credential management',
  description:
    'Pediatric cardiologists manage ABP general pediatrics MOC continuous CME with pediatric cardiology subspecialty content, ABP pediatric cardiology subspecialty certification on an independent cycle, state medical license biennial CME, ACLS/PALS 2-year renewals, DEA 3-year renewal, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full pediatric cardiologist credential calendar.',
  alternates: { canonical: '/for/pediatric-cardiologists' },
  openGraph: {
    title: 'Momenties for Pediatric Cardiologists',
    description: 'ABP MOC CME renewal, pediatric cardiology credential management.',
    url: '/for/pediatric-cardiologists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABP pediatrics MOC and pediatric cardiology subspecialty independently',
    desc: 'Pediatric cardiologists hold ABP general pediatrics primary certification under continuous MOC and ABP pediatric cardiology subspecialty certification on a separate cycle — two ABP credentials with different CME content requirements. ABP general pediatrics MOC requires general pediatric CME; ABP pediatric cardiology subspecialty requires cardiology-specific content including congenital heart disease anatomy and physiology, pediatric echocardiography, cardiac catheterization interpretation, cardiac surgery outcomes, and pediatric heart failure. State medical license biennial CME runs on a third independent cycle.',
  },
  {
    icon: Clock,
    title: 'Pediatric cardiologist multi-credential renewal calendar',
    desc: '"ABP general pediatrics MOC — continuous CME." "ABP pediatric cardiology subspecialty — cardiology content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "ACLS — 2-year renewal." "PALS — 2-year renewal." "Annual echocardiography competency (if echo laboratory director)." "AHA membership — annual." "AEPC/PCSAI membership — annual." All pediatric cardiologist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Echocardiography competency and congenital heart disease catheterization CE analytics',
    desc: 'Pediatric cardiologists directing a pediatric echocardiography laboratory must maintain documented competency and may hold ASE or IAC accreditation-related training requirements for their laboratory\'s accreditation. Pediatric interventional cardiologists performing cardiac catheterization procedures must maintain documented cath lab competency and annual case volume thresholds for specific procedure types (ASD closure, pulmonary balloon valvuloplasty, coarctation stenting). CE covering updated catheterization techniques and outcomes — transcatheter pulmonary valve replacement, hybrid procedures — is a practice requirement as the field evolves.',
  },
  {
    icon: Users,
    title: 'PCSAI, AHA, and pediatric cardiology professional involvement',
    desc: '"PCSAI Annual Meeting — january." "AHA Scientific Sessions — november." "ACC Annual Scientific Session." "AEPC Annual Meeting (Europe)." "CHOP Annual Pediatric Cardiology Symposium." "Congenital heart disease imaging CE — cardiac MRI and CT for CHD anatomy." "Fontan circulation management CE — exercise physiology and heart failure in single ventricle patients." "Fetal echocardiography CE — prenatal diagnosis and counseling." "Pediatric pulmonary hypertension management CE." All pediatric cardiology professional development on calendar. PCSAI and AHA conference CME tagged by ABP general and subspecialty applicability.',
  },
]

const PEDCARD_WORKFLOW = [
  { time: 'Annual planning', action: 'ABP general pediatrics MOC CME pace (pediatric cardiology content weighted), ABP pediatric cardiology subspecialty CE pace, state medical license biennial CME, DEA 3-year renewal, ACLS 2-year cycle, PALS 2-year cycle, annual echo laboratory competency (if applicable), PCSAI Annual Meeting, AHA Scientific Sessions, and AHA membership all loaded in January. ABP primary counter, ABP cardiology subspecialty counter, and state licensure CME tracked independently.' },
  { time: 'CE completion', action: '"AHA-approved — Fontan circulation and single ventricle management: declining Fontan hemodynamics, exercise intolerance assessment with cardiopulmonary exercise testing, and protein-losing enteropathy treatment options, 2 CME, AMA PRA Category 1, ABP MOC applicable, pediatric cardiology subspecialty applicable — congenital heart disease management domain." ABP primary counter updates. Pediatric cardiology subspecialty counter updates. State licensure CME updates.' },
  { time: 'Echo competency', action: '"Annual echocardiography laboratory competency — congenital heart disease echo: segmental analysis methodology for complex CHD, pulmonary artery pressure estimation in right ventricular outflow tract obstruction, and 3D echo reconstruction for surgical planning, 2 CME, Q1." Annual echo competency placed for pediatric cardiologists with echo laboratory director responsibilities. IAC echo laboratory accreditation requires documented physician competency and case volume thresholds for complex congenital echo studies.' },
  { time: 'PALS renewal', action: '"PALS renewal — 2-year cycle. ACLS renewal — 2-year cycle." PALS and ACLS renewals placed with 6-week advance alert. Pediatric cardiologists in academic children\'s hospital settings need both PALS and ACLS for cardiology service credentialing. PALS certification is hospital-specific — some institutions require hospital-sponsored PALS courses rather than AHA-affiliate courses. Confirmation of accepted course provider placed with renewal scheduling.' },
  { time: 'Renewal audit', action: 'Analytics: ABP general pediatrics MOC CME on pace? ABP pediatric cardiology subspecialty content requirements satisfied? State medical license CME complete? DEA valid? ACLS current? PALS current? Echo laboratory competency documented? AHA membership active? Complete pediatric cardiologist credential audit 90 days before earliest renewal.' },
]

export default function ForPediatricCardiologistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Pediatric Cardiologists"
        title={
          <>
            ABP MOC and pediatric cardiology subspecialty maintained.
            <br />
            <em className="not-italic text-gold">ACLS and PALS current. Echo competency documented.</em>
          </>
        }
        lede="Pediatric cardiologists manage ABP general pediatrics continuous MOC with pediatric cardiology subspecialty content, ABP pediatric cardiology subspecialty certification on a separate cycle, state medical license biennial CME, DEA 3-year registration, ACLS and PALS 2-year renewals for hospital credentialing, echocardiography laboratory director competency documentation for IAC accreditation, and professional development at PCSAI and AHA simultaneously. Momenties tracks CME by pediatric cardiologist credential, surfaces renewal deadlines 90 days early, and manages the full credential calendar in one view."
        crumbs={[{ label: 'For Pediatric Cardiologists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How pediatric cardiologists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for pediatric cardiologist credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Pediatric cardiologist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every ABP MOC cycle, pediatric cardiology subspecialty window, and biennial ACLS and PALS renewal.</h2>
          </Reveal>
          <div className="space-y-3">
            {PEDCARD_WORKFLOW.map((step, i) => (
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
                &ldquo;ABP tracks my general pediatrics certification and my pediatric cardiology subspecialty as two separate credentials — different CME content requirements, different renewal timelines. A conference talk on Fontan management hits my cardiology subspecialty domains. A general pediatric acute care session hits my primary pediatrics MOC but may not contribute to my cardiology subspecialty. I also direct our echo laboratory, which has IAC accreditation requirements including physician competency documentation that exists entirely outside of ABP. PALS is required by the hospital every 2 years. State license is biennial. DEA is 3 years. I did the math once: at any given moment I have at least four credential clocks running. Momenties is the first time I&apos;ve had all four in one place.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">F</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Fatima I., MD</div>
                  <div className="text-xs text-muted-foreground">Pediatric cardiologist and echo laboratory director, academic children&apos;s hospital CHD program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All pediatric cardiologist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABP general pediatrics MOC CME — continuous, cardiology content weighted',
                'ABP pediatric cardiology subspecialty — CHD, echo, heart failure domains',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'ACLS certification — 2-year renewal',
                'PALS certification — 2-year renewal (hospital credentialing)',
                'Annual echocardiography laboratory competency — IAC accreditation requirement',
                'PCSAI and AHA conference CME planning by ABP primary and subspecialty applicability',
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
        title="ABP MOC and pediatric cardiology subspecialty maintained."
        subtitle="CME tracking for ABP dual certification, echo laboratory competency, ACLS and PALS renewals, and pediatric cardiology professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
