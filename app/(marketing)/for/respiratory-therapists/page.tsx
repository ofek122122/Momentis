import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Respiratory Therapists — NBRC credential renewal, CE tracking, and RRT maintenance',
  description:
    'Respiratory therapists manage CRT and RRT credential renewals with NBRC, state RT license renewals, specialty credentials (NPS, ACCS, SDS), BLS and ACLS recertification, and professional development calendars simultaneously. Momenties tracks CE, surfaces renewal deadlines 90 days early, and manages the full RT credential calendar.',
  alternates: { canonical: '/for/respiratory-therapists' },
  openGraph: {
    title: 'Momenties for Respiratory Therapists',
    description: 'NBRC credential renewal, CE tracking, and RT license management.',
    url: '/for/respiratory-therapists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for NBRC credential renewal',
    desc: 'NBRC credentials (CRT, RRT) require continuing competency maintenance. Specialty credentials — NPS (Neonatal/Pediatric), ACCS (Adult Critical Care), SDS (Sleep Disorders) — each have independent renewal requirements. Tag every CE and continuing competency activity by credential. Progress toward each renewal tracked independently.',
  },
  {
    icon: Clock,
    title: 'RT multi-credential renewal calendar',
    desc: '"RRT credential — NBRC renewal, biennial." "State RT license — october 31." "NPS specialty credential — 5-year." "ACCS credential — 5-year." "BLS — 2-year, april." "ACLS — 2-year, october." All respiratory therapy credentials with 90-day advance alerts. No credential gap between ICU shifts.',
  },
  {
    icon: BarChart3,
    title: 'Specialty credential analytics',
    desc: 'Respiratory therapists in critical care, neonatal ICU, and sleep medicine hold specialty credentials alongside general RRT certification. Tag CE by credential applicability: NPS-applicable, ACCS-applicable, SDS-applicable, general RT. Analytics shows whether each credential\'s renewal requirements are on track without manual cross-referencing.',
  },
  {
    icon: Users,
    title: 'Professional development and AARC involvement',
    desc: '"AARC Congress — december." "State respiratory therapy society meeting — spring." "Neonatal/pediatric RT symposium — annual." "NBRC specialty exam prep group — monthly." All RT professional commitments on calendar. Active development maintains both clinical competency and specialty credential requirements.',
  },
]

const RT_WORKFLOW = [
  { time: 'Annual planning', action: 'RRT credential renewal date, state RT license deadline, NPS and ACCS specialty credential expirations, BLS/ACLS recertification dates, and AARC Congress all loaded in January. 90-day alerts on every credential. CE completion pace calculated for both general and specialty requirements.' },
  { time: 'CE completion', action: '"AARC-approved online module — mechanical ventilation management, tuesday 7pm, 1.5 hours, critical care CE." Tagged by credential applicability. RRT and ACCS CE counters both update where applicable. No double-counting confusion — categories make applicability explicit.' },
  { time: 'Specialty credential', action: '"NPS credential renewal — NBRC, 5-year cycle, march." "NPS specialty study group — thursdays 6pm." Study blocks scheduled 4 months before renewal deadline. NBRC specialty content areas reviewed against current clinical practice gaps.' },
  { time: 'ACLS renewal', action: '"ACLS recertification — saturday, 8-hour course, april." Required for RT practice in critical care at most institutions. 2-year certification updated. Hospital credential renewal dependent on current ACLS — tracked alongside NBRC credentials.' },
  { time: 'Renewal audit', action: 'Analytics: CE progress by credential category. RRT continuing competency on track? NPS and ACCS specialty requirements met? State license CE complete? BLS and ACLS current? Time to complete remaining requirements before any renewal deadline closes.' },
]

export default function ForRespiratoryTherapistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Respiratory Therapists"
        title={
          <>
            Every credential current.
            <br />
            <em className="not-italic text-gold">Specialty certs maintained.</em>
          </>
        }
        lede="Respiratory therapists manage NBRC credential maintenance for CRT and RRT, specialty credentials in neonatal, critical care, and sleep medicine, state RT license renewals, BLS and ACLS recertification, and professional development simultaneously. Momenties tracks CE by credential type, surfaces renewal deadlines 90 days early, and manages the full RT credential calendar in one view."
        crumbs={[{ label: 'For Respiratory Therapists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How respiratory therapists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for RT credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">RT credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every renewal cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {RT_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold RRT, NPS, and ACCS credentials. Each has a different renewal cycle and different CE requirements. I was tracking all three in my head and missing CE that applied to multiple credentials — I took a course that counted for both NPS and ACCS but only logged it once. Momenties lets me tag a single CE event against multiple credentials. Everything is counted correctly and I can see each credential&apos;s status independently.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">D</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Darius W., RRT, NPS, ACCS</div>
                  <div className="text-xs text-muted-foreground">Neonatal/pediatric respiratory therapist, children&apos;s hospital</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All RT credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'NBRC CRT and RRT credential renewal',
                'NPS specialty credential — 5-year renewal',
                'ACCS specialty credential — 5-year renewal',
                'SDS sleep disorders credential renewal',
                'State RT license renewal deadline',
                'BLS/ACLS recertification — 2-year',
                'AARC Congress and state society events',
                'Hospital credentialing renewal',
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
        title="Every credential current. Specialty certs maintained."
        subtitle="CE tracking by credential type, multi-credential renewal calendar, and RT professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
