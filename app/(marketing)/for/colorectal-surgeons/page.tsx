import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Colorectal Surgeons — ABCRS MOC, CME tracking, and colorectal surgery credential management',
  description:
    'Colorectal surgeons manage ABCRS (American Board of Colon and Rectal Surgery) MOC with continuous CME requirements, state medical license biennial CME, DEA 3-year registration, robotic colorectal surgery credentialing, colonoscopy quality metrics, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full colorectal surgery credential calendar.',
  alternates: { canonical: '/for/colorectal-surgeons' },
  openGraph: {
    title: 'Momenties for Colorectal Surgeons',
    description: 'ABCRS MOC, CME tracking, and colorectal surgery credential management.',
    url: '/for/colorectal-surgeons',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABCRS MOC and colorectal board requirements',
    desc: 'Colorectal surgeons certified by the American Board of Colon and Rectal Surgery (ABCRS) face continuous MOC requirements with CME specific to colorectal surgery content. ABCRS MOC requires CME in colorectal surgery content domains including oncology, inflammatory bowel disease, anorectal disorders, and minimally invasive colorectal surgery. Not all general surgery CME counts toward ABCRS attestation. ABCRS counter tracked independently from state license CME.',
  },
  {
    icon: Clock,
    title: 'Colorectal surgeon multi-credential renewal calendar',
    desc: '"ABCRS MOC — continuous, colorectal CME." "State medical license — biennial CE." "DEA registration — 3-year." "Robotic colorectal surgery credentialing — institutional annual." "Colonoscopy quality metrics review — institutional annual." "ASCRS membership — annual." "NAPRC accreditation education — periodic." All colorectal surgery credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Robotic surgery and NAPRC accreditation CME analytics',
    desc: 'Colorectal surgeons at National Accreditation Program for Rectal Cancer (NAPRC)-accredited centers face additional education requirements for rectal cancer multidisciplinary team participation. NAPRC recertification requires documented surgeon education in rectal cancer staging, neoadjuvant therapy, and total mesorectal excision (TME). Robotic colorectal credentialing tracked on institutional policy — typically annual peer review with case minimums.',
  },
  {
    icon: Users,
    title: 'ASCRS, NAPRC, and colorectal surgery professional involvement',
    desc: '"ASCRS Annual Scientific Meeting — may/june." "NAPRC annual rectal cancer update." "ACS Clinical Congress colorectal sessions." "Robotic colorectal surgery simulation training." "ASCRS ERAS colorectal pathway education." "IBD surgery CME updates." All colorectal surgery professional development on calendar. ASCRS Annual Meeting CME tagged by ABCRS MOC applicability.',
  },
]

const COLOR_WORKFLOW = [
  { time: 'Annual planning', action: 'ABCRS MOC continuous CME pace, state medical license biennial CE cycle, DEA 3-year renewal, robotic colorectal credentialing institutional renewal, colonoscopy quality metrics annual review, NAPRC education requirements, ASCRS Annual Meeting, and ASCRS membership all loaded in January. ABCRS and state CE paces tracked independently.' },
  { time: 'CME completion', action: '"ASCRS-approved — laparoscopic and robotic low anterior resection: sphincter preservation and oncologic outcomes, 3 CME, ABCRS applicable." Tagged by applicable board. ABCRS counter updates. If state license accepts colorectal CME, state counter updates. IBD surgery and anorectal CME logged to ABCRS content domains separately.' },
  { time: 'NAPRC education', action: '"NAPRC rectal cancer surgeon education — neoadjuvant therapy and TME technique update, 2 CME." NAPRC accreditation center surgeon education tracked as a separate category. NAPRC requires documented surgeon participation in multidisciplinary rectal cancer conference and annual education. NAPRC category CE tracked independent of ABCRS MOC attestation.' },
  { time: 'Robotic credentialing', action: '"Robotic colorectal surgery credentialing renewal — institutional peer review, Q1." Robotic colorectal credentialing tracked on institutional renewal cycle. Case minimum thresholds maintained for peer review documentation. Simulator training requirements tracked per hospital credentialing policy. Credentialing lapse stops robotic colorectal case scheduling.' },
  { time: 'Renewal audit', action: 'Analytics: ABCRS MOC CME on pace? State license CE complete? DEA valid? Robotic credentialing current? NAPRC education documented? Colonoscopy quality metrics reviewed? ASCRS membership active? Complete colorectal surgery credential audit 90 days before earliest renewal. ABCRS attestation and NAPRC documentation maintained separately.' },
]

export default function ForColorectalSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Colorectal Surgeons"
        title={
          <>
            ABCRS MOC and robotic credentialing maintained.
            <br />
            <em className="not-italic text-gold">NAPRC education and DEA never lapsed.</em>
          </>
        }
        lede="Colorectal surgeons manage ABCRS board MOC with continuous colorectal CME requirements, institutional robotic colorectal surgery credentialing on annual peer review cycles, NAPRC rectal cancer surgeon education for accreditation compliance, DEA 3-year registration, and professional development simultaneously. Momenties tracks CME by board credential, surfaces renewal deadlines 90 days early, and manages the full colorectal surgery credential calendar in one view."
        crumbs={[{ label: 'For Colorectal Surgeons' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How colorectal surgeons use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for colorectal surgery credential and CME management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Colorectal surgery credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed across board, institutional, and accreditation cycles.</h2>
          </Reveal>
          <div className="space-y-3">
            {COLOR_WORKFLOW.map((step, i) => (
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
                &ldquo;ABCRS MOC is its own board with its own content requirements — general surgery CME doesn&apos;t always satisfy the colorectal content domains. My program is also NAPRC-accredited, which adds a separate surgeon education requirement that isn&apos;t the same as MOC CME. I was treating them as interchangeable and discovered at NAPRC re-survey that the NAPRC documentation requirement was distinct. Now I have ABCRS, NAPRC education, robotic credentialing, and my state license each on their own calendar track. The separation alone was worth it.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">M</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Marcus T., MD, FACS, FASCRS</div>
                  <div className="text-xs text-muted-foreground">Colorectal surgeon, NAPRC-accredited rectal cancer program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All colorectal surgery credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABCRS board MOC CME — continuous',
                'State medical license CME — biennial',
                'DEA registration renewal — 3-year',
                'Robotic colorectal surgery credentialing — institutional annual',
                'NAPRC rectal cancer surgeon education — annual',
                'Colonoscopy quality metrics review — institutional annual',
                'ASCRS membership renewal — annual',
                'ASCRS Annual Meeting CME planning by ABCRS applicability',
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
        title="ABCRS MOC and robotic credentialing maintained."
        subtitle="CME tracking by board, NAPRC education calendar, robotic surgery credentialing, and colorectal surgery professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
