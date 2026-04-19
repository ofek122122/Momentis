import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Perioperative Nurses — CNOR CE renewal, perioperative nurse credential management',
  description:
    'Perioperative nurses manage CNOR certification 60CE/5yr renewal, state RN biennial licensure CE, annual AORN perioperative competency, ACLS 2-year renewal, annual sterile technique competency, robotic surgical system credentialing, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full perioperative nurse credential calendar.',
  alternates: { canonical: '/for/perioperative-nurses' },
  openGraph: {
    title: 'Momenties for Perioperative Nurses',
    description: 'CNOR CE renewal, perioperative nurse credential management.',
    url: '/for/perioperative-nurses',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CNOR certification and state RN licensure renewal',
    desc: 'CNBF Certified Nurse Operating Room (CNOR) certification requires 60 CE hours every 5 years in perioperative nursing content. CNOR CE must be in perioperative content areas covering the nursing process in the OR, instrument and equipment handling, and patient safety. State RN licensure runs on a biennial cycle with content requirements that may differ from CNOR domain requirements. CNOR 5-year counter and state biennial CE tracked independently.',
  },
  {
    icon: Clock,
    title: 'Perioperative nurse multi-credential renewal calendar',
    desc: '"CNOR — CNBF, 60 CE/5 years." "State RN license — biennial CE." "ACLS — 2-year renewal." "Annual perioperative competency — AORN recommended." "Annual sterile technique and surgical asepsis competency — institutional." "Robotic system credentialing — da Vinci or other system, annual or per platform." "AORN membership — annual." All perioperative nurse credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Robotic credentialing and sterile technique competency analytics',
    desc: 'Perioperative nurses scrubbing or circulating on robotic procedures require platform-specific credentialing — Intuitive Surgical da Vinci credentialing is institutional and separate from CNOR CE. Annual sterile technique and surgical asepsis competency required by most institutions under AORN standards — separate from CNOR CE documentation. Annual fire safety, laser safety, and electrosurgery safety CE tracked as independent institutional requirements. Each tracked separately.',
  },
  {
    icon: Users,
    title: 'AORN, CNBF, and perioperative professional involvement',
    desc: '"AORN Global Surgical Conference — spring." "AORN Chapter local meetings — quarterly CE." "CNBF examination prep CE." "Intuitive Surgical robotic credentialing training." "Stryker/Medtronic surgical system updates." "Perioperative specialty: orthopedic, neurosurgical, cardiac OR." "AORN Perioperative Standards update — annual." All perioperative professional development on calendar. AORN conference CE tagged by CNOR and state licensure applicability.',
  },
]

const PERI_WORKFLOW = [
  { time: 'Annual planning', action: 'CNOR 5-year 60-CE pace (annualized to 12 CE/year), state RN biennial CE cycle, ACLS 2-year cycle, annual perioperative competency assessment, annual sterile technique competency, robotic system credentialing renewal, AORN Global Conference, and AORN membership all loaded in January. CNOR cumulative counter and state licensure CE tracked independently.' },
  { time: 'CE completion', action: '"AORN-approved — patient positioning for orthopedic and spinal procedures: pressure injury prevention, nerve injury risk, and team communication during repositioning, 2 CE, CNOR applicable." Tagged by applicable certification. CNOR counter updates (cumulative toward 60/5yr target). State licensure CE updates if state accepts perioperative CE. Position-specific CE differentiates from general nursing CE.' },
  { time: 'Robotic credentialing', action: '"Da Vinci robotic system credentialing — Intuitive Surgical, annual renewal, February." Robotic credentialing placed as an institutional requirement separate from CNOR CE. Intuitive Surgical requires documented competency for circulating and scrub roles independently — circulator credentialing is different from scrub tech credentialing. Annual renewal placed separately from CNOR 5-year cycle.' },
  { time: 'Sterile technique', action: '"Annual sterile technique competency — scrub technique validation, gowning/gloving competency, back table setup assessment, Q1." Annual sterile technique and surgical asepsis competency placed as institutional requirement under AORN Perioperative Standards. Separate from CNOR CE documentation. Surgical conscience competency tracked independently from ACLS and CNOR documentation.' },
  { time: 'Renewal audit', action: 'Analytics: CNOR CE on pace (cumulative toward 60/5yr)? State RN CE complete for biennial renewal? ACLS current? Annual perioperative competency documented? Sterile technique competency current? Robotic system credentialing valid? AORN membership active? Complete perioperative nurse credential audit 90 days before earliest renewal. CNBF, state board, and institutional documentation maintained separately.' },
]

export default function ForPerioperativeNursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Perioperative Nurses"
        title={
          <>
            CNOR certification and state RN licensure maintained.
            <br />
            <em className="not-italic text-gold">Sterile technique and robotic credentialing never lapsed.</em>
          </>
        }
        lede="Perioperative nurses manage CNBF CNOR certification with 60 CE hours over 5 years in perioperative content, state RN biennial licensure CE on an independent cycle, ACLS 2-year renewal, annual perioperative competency assessments under AORN standards, annual sterile technique and surgical asepsis competency, platform-specific robotic surgical credentialing, and professional development simultaneously. Momenties tracks CE by perioperative credential, surfaces renewal deadlines 90 days early, and manages the full perioperative nurse credential calendar in one view."
        crumbs={[{ label: 'For Perioperative Nurses' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How perioperative nurses use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for perioperative nurse credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Perioperative nurse credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every CNOR cycle, AORN competency, and robotic credentialing renewal.</h2>
          </Reveal>
          <div className="space-y-3">
            {PERI_WORKFLOW.map((step, i) => (
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
                &ldquo;CNOR is a 5-year cycle so it feels like there&apos;s time — but 60 hours over 5 years is 12 per year, and perioperative-specific CE is harder to find than general nursing CE. My state RN license renews every 2 years on a different schedule. When we added a da Vinci Xi robot to our OR, I needed separate institutional credentialing for both circulating and scrubbing roles. That&apos;s completely outside my CNOR documentation. I had CE hours tracked in three different places — CNBF&apos;s system, the state board portal, and a paper form for robotic credentialing. Momenties put them all on one screen with independent alerts for each.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">S</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Stephanie K., RN, CNOR</div>
                  <div className="text-xs text-muted-foreground">Perioperative nurse, academic medical center OR</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All perioperative nurse credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CNBF CNOR certification CE — 60 hours/5 years',
                'State RN licensure CE — biennial',
                'ACLS certification — 2-year renewal',
                'Annual perioperative competency assessment — AORN standard',
                'Annual sterile technique and surgical asepsis competency',
                'Robotic surgical system credentialing — per platform, institutional',
                'AORN membership renewal — annual',
                'AORN conference CE planning by CNOR domain applicability',
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
        title="CNOR certification and state RN licensure maintained."
        subtitle="CE tracking by credential, robotic credentialing calendar, AORN competency tracking, and perioperative professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
