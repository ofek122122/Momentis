import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Podiatrists — ABPM/ABPS CME tracking, DPM license renewals, and credential management',
  description:
    'Podiatrists manage CME requirements for ABPM or ABPS board certification maintenance, state DPM license renewals, DEA registration, hospital surgical privileges renewal, and specialty society involvement simultaneously. Momenties tracks CME by category, surfaces renewal deadlines 90 days early, and manages the full podiatric credential calendar.',
  alternates: { canonical: '/for/podiatrists' },
  openGraph: {
    title: 'Momenties for Podiatrists',
    description: 'ABPM/ABPS CME tracking, DPM license renewals, and podiatric credential management.',
    url: '/for/podiatrists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPM and ABPS certification',
    desc: 'ABPM board certification maintenance requires continuing education logged with the board. ABPS surgical board certification adds procedure volume and CME requirements. Tag every CME activity by board applicability: ABPM primary care podiatry, ABPS reconstructive rearfoot/ankle surgery. Both certifications tracked independently without double-counting.',
  },
  {
    icon: Clock,
    title: 'Podiatric multi-credential renewal calendar',
    desc: '"DPM license — state board, october 31." "DEA registration — 3-year, august." "BLS — 2-year, april." "Hospital surgical privileges — annual." "Radiation safety training — annual." "APMA membership renewal." All podiatric credentials with 90-day advance alerts. Surgical privileges never interrupted between hospital credentialing cycles.',
  },
  {
    icon: BarChart3,
    title: 'Surgical privilege CME documentation',
    desc: 'Hospital surgical privileges in podiatric surgery require documentation of continued procedural competency and relevant CME. Tag CME events applicable to surgical privileging separately from general license renewal CE. Analytics shows whether surgery-specific CE is on track for the annual hospital credentialing review alongside state board requirements.',
  },
  {
    icon: Users,
    title: 'APMA and specialty society involvement',
    desc: '"APMA National Conference — july." "ACFAS Annual Scientific Conference — reconstructive surgery, february." "State podiatric society meeting — annual." "Wound care certification — CWSP renewal." All podiatric professional development on calendar from year start. APMA National Conference CME planned in advance for maximum renewal credit.',
  },
]

const DPM_WORKFLOW = [
  { time: 'Annual planning', action: 'State DPM license renewal date, DEA expiration, hospital surgical privileges renewal, BLS recertification, APMA National Conference, and ACFAS surgical conference all loaded in January. 90-day alerts on every credential. CME pace calculated for both state license and board certification requirements.' },
  { time: 'CME completion', action: '"APMA National Conference — 18 CME hours, podiatric medicine and surgery." Tagged by ABPM and ABPS applicability where relevant. State renewal CE counter and board certification CME counter updated simultaneously. Surgical privilege documentation CE tagged separately.' },
  { time: 'Surgical privileges', action: '"Hospital surgical privileges renewal — credentialing committee, august." Required CME for specific procedures documented and ready for submission. Procedure volume documentation maintained. 90-day alert ensures credentialing packet prepared before the committee review cycle.' },
  { time: 'DEA renewal', action: '"DEA registration renewal — 3-year, august 15." Prescribing authority for controlled substances maintained. Podiatric practice post-surgical pain management requires current DEA registration. 90-day alert initiates renewal before any lapse in prescribing authority.' },
  { time: 'License audit', action: 'Analytics: CME progress by category. State DPM renewal requirement met? ABPM CME on track? ABPS surgical board documentation complete? Surgical privileges CE ready? DEA current? BLS valid? Complete podiatric credential audit before any renewal window opens.' },
]

export default function ForPodiatristsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Podiatrists"
        title={
          <>
            Board certified. Surgical privileges current.
            <br />
            <em className="not-italic text-gold">CME never scrambled.</em>
          </>
        }
        lede="Podiatrists manage CME requirements for ABPM and ABPS board certification maintenance, state DPM license renewals, DEA registration, hospital surgical privileges renewal, and specialty society involvement simultaneously. Momenties tracks CME by board and category, surfaces renewal deadlines 90 days early, and manages the full podiatric credential calendar in one view."
        crumbs={[{ label: 'For Podiatrists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How podiatrists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for podiatric CME and credential management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Podiatric credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through the year.</h2>
          </Reveal>
          <div className="space-y-3">
            {DPM_WORKFLOW.map((step, i) => (
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
                &ldquo;I have ABPM board certification and ABPS surgical board certification, plus hospital surgical privileges at two hospitals — each with different annual credentialing cycles. The credentialing committees want specific CME documentation, and the boards want different hours. I was maintaining four separate tracking systems. Momenties collapsed all of them into one calendar. I tag CME once and it goes where it belongs.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">S</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Scott P., DPM, FACFAS</div>
                  <div className="text-xs text-muted-foreground">Podiatric surgeon, private practice and hospital</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All podiatric credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'CME hours by board — ABPM and ABPS',
                'State DPM license renewal deadline',
                'DEA registration — 3-year renewal',
                'Hospital surgical privileges — annual',
                'BLS recertification — 2-year',
                'Radiation safety training — annual',
                'CWSP wound care certification renewal',
                'APMA National Conference and ACFAS',
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
        title="Board certified. Surgical privileges current."
        subtitle="CME tracking by board, surgical privileges renewal calendar, and podiatric professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
