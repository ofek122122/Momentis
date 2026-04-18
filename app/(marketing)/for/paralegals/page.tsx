import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Clock, Shield, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Paralegals — Deadline tracking, court dates, and billable time analytics',
  description:
    'Paralegals manage court deadlines, statute of limitations dates, deposition schedules, and billable hours across multiple matters. Momenties tracks every deadline, bills time by matter, and templates recurring litigation workflows.',
  alternates: { canonical: '/for/paralegals' },
  openGraph: {
    title: 'Momenties for Paralegals',
    description: 'Court deadlines, matter time tracking, and litigation workflow templates.',
    url: '/for/paralegals',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'Court deadline tracking',
    desc: '"Answer due march 15." "Discovery cutoff april 30." "Expert designation june 1." "Trial date october 14." Every case deadline on calendar the moment it\'s set. Nothing slips between matters.',
  },
  {
    icon: Clock,
    title: 'Deposition and hearing scheduling',
    desc: '"Deposition of Dr. Martinez thursday 9am, Jones conference room, 4 hours." "Hearing on motion tuesday 10am, Courtroom 3." Voice-added from anywhere. On calendar before the call ends.',
  },
  {
    icon: BarChart3,
    title: 'Billable time by matter',
    desc: 'Tag every event and work block by matter number. Weekly analytics shows hours per matter. Compare to budget. Surface over-serviced matters before the billing partner asks why.',
  },
  {
    icon: Users,
    title: 'Litigation workflow templates',
    desc: 'Standard litigation template: complaint, service, answer, 26(a)(1) disclosures, discovery, expert designation, dispositive motions, pretrial, trial. Apply to any new matter in seconds.',
  },
]

const PARALEGAL_WORKFLOW = [
  { time: 'New matter', action: 'Apply litigation template. All major deadline categories created. Add actual dates as they\'re set by court order.' },
  { time: 'Discovery', action: '"Plaintiff depo tuesday 10am 3 hours, Client A." "Document production deadline friday 5pm." Both voice-added from the scheduling email.' },
  { time: 'Scheduling conf.', action: 'Court sets all remaining dates. Voice-add each one immediately: "Summary judgment briefing complete october 1." Six dates added in 3 minutes.' },
  { time: 'Weekly', action: 'Analytics: how many hours on Matter X this week? Is the budget on track? Early warning before the billing partner\'s monthly review.' },
  { time: 'Trial prep', action: 'Trial date visible in Daily Brief for 60 days prior. Witness prep, exhibit prep, and trial brief deadlines all on calendar with countdown.' },
]

export default function ForParalegalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Paralegals"
        title={
          <>
            Every deadline on calendar.
            <br />
            <em className="not-italic text-gold">No court date missed.</em>
          </>
        }
        lede="Paralegals manage court deadlines, deposition schedules, statute of limitations dates, and billable hours across multiple active matters simultaneously. Momenties tracks every deadline by matter, bills time accurately, and templates standard litigation workflows so nothing falls through."
        crumbs={[{ label: 'For Paralegals' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/calendar-templates"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Litigation templates
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No client data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How paralegals use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for legal support professionals.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Matter lifecycle</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A matter from intake to trial with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {PARALEGAL_WORKFLOW.map((step, i) => (
              <Reveal key={step.time} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-28 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{step.time}</span>
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
                &ldquo;Managing 15 active matters, I was terrified of missing a deadline. Now every court date, deposition, and filing deadline is on my calendar the moment it\'s set. The Daily Brief shows me what\'s coming before I open my email. Zero missed deadlines in 18 months.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">P</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Patricia G., RP</div>
                  <div className="text-xs text-muted-foreground">Senior paralegal, litigation practice, 15 active matters</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Every deadline tracked. Every matter billed accurately."
        subtitle="Court deadline calendar, matter time analytics, and litigation templates. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Litigation templates', href: '/calendar-templates' }}
      />
    </>
  )
}
