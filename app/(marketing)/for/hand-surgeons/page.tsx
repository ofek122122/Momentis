import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Hand Surgeons — ABOS or ABPS MOC CME renewal, hand surgery credential management',
  description:
    'Hand surgeons manage ABOS or ABPS primary board MOC continuous CME, subspecialty hand surgery certificate of added qualification MOC, state medical license biennial CME, DEA 3-year renewal, annual hospital hand surgery credentialing review, ASSH membership, and professional development simultaneously. Momenties tracks CME by certification, surfaces renewal deadlines 90 days early, and manages the full hand surgeon credential calendar.',
  alternates: { canonical: '/for/hand-surgeons' },
  openGraph: {
    title: 'Momenties for Hand Surgeons',
    description: 'ABOS MOC CME renewal, hand surgery credential management.',
    url: '/for/hand-surgeons',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for primary board MOC and hand surgery CAQ independently',
    desc: 'Hand surgeons hold primary board certification through ABOS (American Board of Orthopaedic Surgery) or ABPS (American Board of Plastic Surgery) depending on training pathway — two different board organizations with different MOC structures. Certificate of Added Qualification (CAQ) in Hand Surgery requires separate MOC through ABOS or ABPS with hand surgery-specific content requirements. Hand surgeons with both orthopedic and plastic surgery training backgrounds maintain their respective primary board MOC independently from hand surgery CAQ. State medical license biennial CME runs on a third independent cycle.',
  },
  {
    icon: Clock,
    title: 'Hand surgeon multi-credential renewal calendar',
    desc: '"ABOS primary board MOC — continuous CME, orthopedic surgery content." "Hand surgery CAQ — subspecialty MOC, hand surgery content." "State medical license — biennial CME." "DEA registration — 3-year renewal." "Annual hospital hand surgery credentialing review." "ACLS — 2-year renewal." "ASSH membership — annual." All hand surgeon credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'ABOS CAQ content requirements and hospital credentialing analytics',
    desc: 'ABOS Hand Surgery CAQ MOC requires CME content in hand surgery-specific domains — microsurgery, replantation, tendon repair, peripheral nerve surgery, and congenital hand differences — orthopedic general CME does not satisfy CAQ content requirements. Annual hospital hand surgery credentialing review at privileges-granting institutions covers procedure volumes, operative outcomes, and microsurgery case logs separate from board certification. ASSH conference CME applicable to both primary ABOS MOC and hand CAQ tagged by domain at logging.',
  },
  {
    icon: Users,
    title: 'ASSH, AAHS, and hand surgery professional involvement',
    desc: '"ASSH Annual Meeting — september." "AAHS Annual Meeting — january." "IFSSH World Congress — triennial." "Peripheral nerve surgery and neurolysis CE." "Microsurgery and free flap reconstruction CE." "Wrist arthroscopy and carpal instability CE." "Congenital hand difference management CE." "Hand surgery ultrasound and MSK imaging CE." All hand surgery professional development on calendar. ASSH conference CME tagged by ABOS primary MOC and hand CAQ domain applicability.',
  },
]

const HS_WORKFLOW = [
  { time: 'Annual planning', action: 'ABOS MOC CME pace (orthopedic content), hand surgery CAQ MOC CE pace (hand-specific content), state medical license biennial CME, DEA 3-year renewal, ACLS 2-year cycle, annual hospital hand credentialing, ASSH Annual Meeting, and ASSH membership all loaded in January. ABOS MOC counter, CAQ CE counter, and state licensure CME tracked independently.' },
  { time: 'CME completion', action: '"ASSH-approved — peripheral nerve repair and grafting: epineural versus grouped fascicular technique selection, nerve conduit indications, and sensory recovery outcomes prediction, 2 CME, AMA PRA Category 1, ABOS MOC applicable, hand CAQ applicable — peripheral nerve surgery domain." ABOS MOC counter updates. Hand CAQ CE counter updates. State licensure CME updates. Hand-specific content confirmed at logging.' },
  { time: 'Microsurgery CE', action: '"ASSH microsurgery workshop CE — digital replantation: ischemia time thresholds, vessel preparation for anastomosis, and postoperative monitoring protocol, 3 CME, hand CAQ applicable — microsurgery domain." Microsurgery CE tracked within hand CAQ domain portfolio. Hand surgeons performing digital replantation and free tissue transfer document microsurgery CE separately from general hand surgery CE for privileges documentation and CAQ content tracking.' },
  { time: 'Hospital credentialing', action: '"Annual hand surgery privileges review — replantation volume, free flap success rate, nerve repair outcomes, and tendon repair complication rate, Q2." Annual hospital credentialing review for hand surgery privileges placed as a transplant-equivalent privileges process. Microsurgery and replantation case volumes tracked for institutional privileges review separate from ABOS MOC. Outcome data submitted annually for performance improvement documentation.' },
  { time: 'Renewal audit', action: 'Analytics: ABOS primary MOC CME on pace? Hand CAQ content requirements met? State medical license CME complete? ACLS current? DEA valid? Annual hospital credentialing documented? ASSH membership active? Complete hand surgeon credential audit 90 days before earliest renewal. ABOS, state board, and institutional credentialing documentation maintained separately.' },
]

export default function ForHandSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Hand Surgeons"
        title={
          <>
            ABOS MOC and hand CAQ maintained.
            <br />
            <em className="not-italic text-gold">Microsurgery CE tracked. Hospital credentialing current.</em>
          </>
        }
        lede="Hand surgeons manage ABOS or ABPS primary board MOC continuous CME with orthopedic or plastic surgery content, hand surgery CAQ subspecialty MOC on an independent cycle with hand-specific domain requirements, state medical license biennial CME, DEA 3-year registration, annual hospital hand surgery privileges review with microsurgery volume and outcomes documentation, ACLS 2-year renewal, and professional development at ASSH and AAHS simultaneously. Momenties tracks CME by hand surgeon credential, surfaces renewal deadlines 90 days early, and manages the full hand surgeon credential calendar in one view."
        crumbs={[{ label: 'For Hand Surgeons' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How hand surgeons use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for hand surgeon credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Hand surgeon credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through every ABOS MOC cycle, hand CAQ requirement, and annual hospital privileges review.</h2>
          </Reveal>
          <div className="space-y-3">
            {HS_WORKFLOW.map((step, i) => (
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
                &ldquo;I have ABOS orthopedic surgery, hand surgery CAQ through ABOS, and my state medical license. The CAQ is a subspecialty credential within ABOS so it&apos;s technically under the same MOC umbrella — but the content requirements are different. Hand surgery CME counts for the CAQ domain. General orthopedic CME doesn&apos;t. My hospital does annual hand surgery privileges review that covers my replantation volume and microsurgery outcomes — completely separate from ABOS. I do ASSH every year for CE. DEA is 3 years. Before I started tracking all of this in Momenties I was logging CE to a system that treated everything as one bucket. I was technically completing my CE requirements but I wasn&apos;t tracking whether the CAQ content requirement was being satisfied until renewal time.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">L</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Lisa N., MD, FACS</div>
                  <div className="text-xs text-muted-foreground">Hand and microsurgery specialist, academic orthopedic department</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All hand surgeon credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABOS or ABPS primary board MOC CME — continuous, orthopedic or plastic surgery content',
                'Hand surgery CAQ MOC — subspecialty content, independent tracking',
                'State medical license CME — biennial',
                'ACLS certification — 2-year renewal',
                'DEA registration renewal — 3-year',
                'Annual hospital hand surgery privileges review — volume and outcomes',
                'ASSH membership renewal — annual',
                'ASSH and AAHS conference CME planning by primary MOC and CAQ domain applicability',
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
        title="ABOS MOC and hand CAQ maintained."
        subtitle="CME tracking with subspecialty content domains, microsurgery CE, hospital privileges calendar, and hand surgery professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
