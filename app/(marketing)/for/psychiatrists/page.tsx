import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Psychiatrists — ABPN MOC, CME tracking, DEA renewal, and psychiatric credential management',
  description:
    'Psychiatrists manage ABPN Maintenance of Certification with 300 CME hours per 10-year cycle, subspecialty certifications in child/adolescent or addiction psychiatry, state medical license renewals, DEA registration, and controlled substance CE requirements simultaneously. Momenties tracks CME by ABPN category, surfaces renewal deadlines 90 days early, and manages the full psychiatric credential calendar.',
  alternates: { canonical: '/for/psychiatrists' },
  openGraph: {
    title: 'Momenties for Psychiatrists',
    description: 'ABPN MOC, CME tracking, and psychiatric credential management.',
    url: '/for/psychiatrists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CME tracking for ABPN MOC',
    desc: 'ABPN MOC requires 300 CME hours over 10 years with specific psychiatry content requirements. Subspecialty certifications in child and adolescent psychiatry, addiction psychiatry, geriatric psychiatry, and forensic psychiatry each add independent CME requirements. Tag every CME activity by ABPN certification. Multi-subspecialty practice tracked without conflation.',
  },
  {
    icon: Clock,
    title: 'Psychiatry multi-credential renewal calendar',
    desc: '"ABPN MOC — 10-year cycle, annual check-in." "State medical license — october." "DEA registration — 3-year, june." "DEA X-waiver — buprenorphine prescribing, annual." "State controlled substance license — biennial." "Child/adolescent subspecialty — ABPN, MOC." All credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Controlled substance CE and DEA compliance',
    desc: 'Psychiatrists who prescribe controlled substances — stimulants, benzodiazepines, buprenorphine — manage DEA registration, state controlled substance schedules, and in some states mandatory CE for controlled substance prescribing. Tag controlled substance CE separately. DEA and state prescribing authority requirements tracked alongside ABPN MOC.',
  },
  {
    icon: Users,
    title: 'APA and subspecialty society involvement',
    desc: '"APA Annual Meeting — may." "AACAP Annual Meeting — child/adolescent, october." "ASAM Annual Conference — addiction, april." "Regional psychiatric society — quarterly." All psychiatric professional development on calendar. Major meeting CME applied to applicable ABPN certifications immediately after attendance.',
  },
]

const PSYCH_WORKFLOW = [
  { time: 'Annual planning', action: 'ABPN MOC 10-year cycle status, annual check-in schedule, state medical license renewal date, DEA expiration, state controlled substance license deadline, and APA/AACAP Annual Meeting all loaded in January. CME pace calculated — 30 CME hours per year maintains the 10-year ABPN requirement without end-of-cycle scramble.' },
  { time: 'CME completion', action: '"APA Annual Meeting — 18 CME hours, psychiatry content including psychopharmacology and ethics." Tagged by ABPN MOC category and subspecialty applicability. Child/adolescent certification and addiction subspecialty each updated where conference CME applies. Ethics hours tracked separately where state-mandated.' },
  { time: 'DEA renewal', action: '"DEA registration renewal — 3-year, june 15." "DEA buprenorphine prescribing — annual training renewal." Prescribing authority for controlled substances maintained without gap. State requirements for continuing education in controlled substance prescribing tagged and tracked alongside DEA registration.' },
  { time: 'Subspecialty MOC', action: '"ABPN child/adolescent psychiatry — MOC annual check-in." Subspecialty MOC requirements tracked independently from general psychiatry. AACAP conference CME applied specifically to child/adolescent certification. No annual check-in missed due to competing deadlines.' },
  { time: 'MOC audit', action: 'Analytics: CME progress by ABPN category. 10-year cycle on pace? Annual check-in completed? Subspecialty MOC current? DEA registration valid? State controlled substance license renewed? State license CE complete? Complete psychiatric credential status in one view.' },
]

export default function ForPsychiatristsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Psychiatrists"
        title={
          <>
            MOC on track.
            <br />
            <em className="not-italic text-gold">Prescribing authority maintained.</em>
          </>
        }
        lede="Psychiatrists manage ABPN Maintenance of Certification with 300 CME hours over 10 years, subspecialty certifications in child and adolescent or addiction psychiatry, state medical license renewals, DEA registration, controlled substance CE requirements, and annual MOC check-ins simultaneously. Momenties tracks CME by ABPN certification, surfaces renewal deadlines 90 days early, and manages the full psychiatric credential calendar in one view."
        crumbs={[{ label: 'For Psychiatrists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How psychiatrists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for psychiatric CME and credential management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Psychiatric credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CME and credentials managed through the 10-year ABPN cycle.</h2>
          </Reveal>
          <div className="space-y-3">
            {PSYCH_WORKFLOW.map((step, i) => (
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
                &ldquo;I hold ABPN general psychiatry and addiction subspecialty certifications. Both have annual check-ins that I kept confusing with each other — missing one and doubling up on the other in the same year. I also prescribe buprenorphine which adds DEA training requirements my state board requires documentation of. Momenties keeps all of these completely separate. I can see each certification&apos;s status and each prescribing credential independently.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">A</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Amara J., MD, DFAPA</div>
                  <div className="text-xs text-muted-foreground">Addiction psychiatrist, community mental health center</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All psychiatric credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABPN MOC CME — 300 hours over 10-year cycle',
                'Annual ABPN check-in completion',
                'Child/adolescent or addiction subspecialty MOC',
                'State medical license renewal deadline',
                'DEA registration — 3-year renewal',
                'DEA buprenorphine training — annual',
                'State controlled substance license renewal',
                'APA/AACAP Annual Meeting CME planning',
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
        title="MOC on track. Prescribing authority maintained."
        subtitle="CME tracking by ABPN certification, DEA and controlled substance renewal calendar, and psychiatric professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CME analytics', href: '/features/analytics' }}
      />
    </>
  )
}
