import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, Shield, Clock, Users, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Calendar for Seniors — Simple, clear scheduling for medical appointments, medications, and daily life',
  description:
    'Seniors manage medical appointments across multiple specialists, medication schedules, prescription renewal deadlines, family commitments, and community activities. A calendar designed to be simple and clear — with voice entry, large text, and important reminders that actually surface.',
  alternates: { canonical: '/calendar-for-seniors' },
  openGraph: {
    title: 'Calendar for Seniors — Momenties',
    description: 'Simple calendar management for medical appointments, medications, and daily life.',
    url: '/calendar-for-seniors',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Calendar,
    title: 'Medical appointments from multiple specialists',
    desc: '"Cardiologist — tuesday 10am, quarterly." "Primary care — annual, june." "Ophthalmologist — february." "Physical therapy — mondays and thursdays 2pm." All specialist appointments on one calendar. Upcoming appointments visible in the Daily Brief every morning.',
  },
  {
    icon: Clock,
    title: 'Prescription renewal reminders',
    desc: '"Metformin refill — 7 days supply remaining." "Blood pressure medication renewal — end of month." "Annual prescription review — with Dr. Chen, april." Medication renewal deadlines on calendar before the pharmacy runs out. No gap in medications from missed refill timing.',
  },
  {
    icon: Shield,
    title: 'Medicare and insurance enrollment deadlines',
    desc: '"Medicare open enrollment — october 15 to december 7." "Supplemental insurance renewal — november 30." "Annual wellness visit — preventive, before december 31 to use benefit." Health plan and insurance deadlines on calendar. Enrollment windows never missed.',
  },
  {
    icon: Users,
    title: 'Family, social, and community commitments',
    desc: '"Family dinner — sunday 5pm, weekly." "Bridge club — tuesday 1pm, biweekly." "Church — sunday 10am." "Grandchildren\'s school events." "Senior center activities." All personal and social commitments on calendar. Daily Brief shows the full day every morning.',
  },
]

const SENIOR_USES = [
  { category: 'Medical care', examples: ['Specialist appointments — all providers on one calendar', 'Annual preventive care visits', 'Lab work and test follow-up appointments', 'Physical, occupational, and speech therapy sessions'] },
  { category: 'Medications and health', examples: ['Prescription refill reminder — days before running out', 'Annual medication review with primary care', 'Blood pressure and glucose monitoring schedule', 'Vaccine and immunization reminders'] },
  { category: 'Insurance and benefits', examples: ['Medicare open enrollment window', 'Supplemental insurance renewal dates', 'Annual wellness visit — benefit use deadline', 'FSA/HSA spending deadline'] },
  { category: 'Daily life', examples: ['Family dinners and visits', 'Social and community activities', 'Religious and faith community events', 'Exercise and wellness classes'] },
]

const SIMPLE_FEATURES = [
  { feature: 'Voice entry', detail: '"Doctor appointment — thursday 10am at Dr. Chen\'s office." Say it once, it\'s on the calendar. No typing, no clicking through multiple screens. Voice input adds events in seconds.' },
  { feature: 'Daily Brief', detail: 'Every morning, see what\'s on the calendar for today. Medical appointments, medications to take, family commitments. Today\'s schedule in one clear view, surfaced automatically.' },
  { feature: '90-day alerts', detail: 'Prescription renewals, insurance enrollment windows, and annual appointments all surface 90 days before they\'re due. Plenty of time to schedule, refill, or enroll.' },
  { feature: 'Simple design', detail: 'Clean, uncluttered calendar view. Large text. High contrast. Events in plain language. A calendar that shows what matters — not a complicated system to learn.' },
]

export default function CalendarForSeniorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar for Seniors"
        title={
          <>
            Every appointment.
            <br />
            <em className="not-italic text-gold">Every refill. On time.</em>
          </>
        }
        lede="Seniors manage medical appointments across multiple specialists, prescription refill schedules, Medicare enrollment windows, family commitments, and community activities simultaneously. Momenties puts everything on one calendar with voice entry, morning Daily Brief, and 90-day advance alerts on important deadlines — so nothing falls through the cracks."
        crumbs={[{ label: 'Calendar for Seniors' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/features/voice"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Voice entry guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No health data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the calendar</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four types of commitments on one calendar.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <f.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">By category</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Everything on one calendar, organized clearly.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {SENIOR_USES.map((use, i) => (
              <Reveal key={use.category} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-5 h-full">
                  <h3 className="text-xs font-mono text-gold/70 uppercase tracking-wide mb-3">{use.category}</h3>
                  <ul className="space-y-1.5">
                    {use.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="h-3 w-3 text-gold/60 shrink-0 mt-0.5" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How it works</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Simple features for a complete picture of each day.</h2>
          </Reveal>
          <div className="space-y-3">
            {SIMPLE_FEATURES.map((item, i) => (
              <Reveal key={item.feature} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-24 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{item.feature}</span>
                  <p className="text-sm text-foreground/90">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What Momenties manages</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">The complete senior calendar picture.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'All specialist and primary care appointments',
                'Annual preventive care visit scheduling',
                'Prescription refill reminders',
                'Medicare and insurance enrollment windows',
                'Family visits and events',
                'Social and community activities',
                'Daily Brief — morning schedule overview',
                'Voice entry — no typing required',
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
        title="Every appointment. Every refill. Every event. On the calendar."
        subtitle="Simple voice-entry calendar with daily brief and advance appointment reminders. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Voice entry guide', href: '/features/voice' }}
      />
    </>
  )
}
