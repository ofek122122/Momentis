import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Zap, Users, Clock, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Appointment Scheduling — AI-powered booking for any service business',
  description:
    'Schedule appointments in seconds with natural language input, track client hours by tag, and find availability across teams instantly. Momenties appointment scheduling works for coaches, trainers, consultants, and service businesses.',
  alternates: { canonical: '/appointment-scheduling' },
  openGraph: {
    title: 'Appointment Scheduling — Momenties',
    description: 'Any appointment scheduled in seconds.',
    url: '/appointment-scheduling',
    type: 'website',
  },
}

const USE_CASES = [
  { label: 'Coaches', example: '"Coaching session Sarah thursday 4pm 60 mins." On calendar before the onboarding call ends.' },
  { label: 'Consultants', example: '"Strategy session Acme Corp wednesday 10am, 2 hours." Tagged to client for billing.' },
  { label: 'Therapists', example: '"Session CT-14 tuesday 3pm 50 mins." Client-opaque. AI parses time, not identity.' },
  { label: 'Personal trainers', example: '"Training Jake 7am, 60 mins." Voice-added from the gym floor mid-session.' },
  { label: 'Lawyers', example: '"Client meeting Martinez file friday 2pm 45 mins." Billed to client code.' },
  { label: 'Healthcare', example: '"Follow-up Dr Chen thursday 11am." Reminder set. Nothing missed.' },
]

const FEATURES = [
  {
    icon: Zap,
    title: 'Book any appointment in 5 seconds',
    desc: 'Natural language input handles client name, date, time, and duration in one sentence. No form, no field-hopping. Voice input works from anywhere.',
  },
  {
    icon: Users,
    title: 'Client hours tracking built in',
    desc: 'Tag every appointment by client. Analytics aggregates hours per tag. Monthly billing summary without a separate time tracker.',
  },
  {
    icon: Clock,
    title: 'Buffer and prep time',
    desc: 'Add prep blocks before appointments and documentation windows after. Template-driven: create a client session template with all surrounding blocks included.',
  },
  {
    icon: Calendar,
    title: 'Recurring appointment series',
    desc: '"Weekly session Sarah thursdays 4pm." Set once — every weekly appointment created automatically. Adjust one or all when schedules change.',
  },
]

const APPOINTMENT_TYPES = [
  { type: '1:1 sessions', speed: 'Under 5 seconds from confirmation to calendar' },
  { type: 'Recurring appointments', speed: 'Set once, auto-generated weekly or biweekly' },
  { type: 'Group sessions', speed: 'Team overlay finds availability across all participants' },
  { type: 'Intake calls', speed: 'Template: 60-min intake + follow-up window' },
  { type: 'Check-ins', speed: '15-min recurring blocks, batch-scheduled for the month' },
  { type: 'Final sessions', speed: 'Marked complete in analytics — tracks session count per client' },
]

export default function AppointmentSchedulingPage() {
  return (
    <>
      <PageHero
        eyebrow="Appointment Scheduling"
        title={
          <>
            Any appointment.
            <br />
            <em className="not-italic text-gold">5 seconds to calendar.</em>
          </>
        }
        lede="Service businesses book appointments constantly. Momenties makes each one 5 seconds — natural language, voice, or photo — and tracks client hours automatically via tags so billing is always current."
        crumbs={[{ label: 'Appointment Scheduling' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/calendar-templates"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Appointment templates
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Client analytics on Pro · Works with Google Calendar</p>
      </PageHero>

      {/* Who it's for */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Who uses it</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Appointment scheduling for any service business.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {USE_CASES.map((uc, i) => (
              <Reveal key={uc.label} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border/50 p-4">
                  <p className="text-xs font-medium text-gold/70 uppercase tracking-wider font-mono mb-2">{uc.label}</p>
                  <p className="font-mono text-xs text-foreground/70 leading-relaxed">{uc.example}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Features</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Everything appointment scheduling needs.</h2>
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

      {/* Appointment types */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every type of appointment, handled.</h2>
          </Reveal>
          <Reveal>
            <div className="space-y-2">
              {APPOINTMENT_TYPES.map((a) => (
                <div key={a.type} className="flex items-center justify-between py-2.5 border-b border-border/30 last:border-0">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                    <p className="text-sm text-foreground/85">{a.type}</p>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground/60">{a.speed}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Book it now. Track it automatically. Bill accurately."
        subtitle="Natural language appointment scheduling with client hour analytics. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See client analytics', href: '/features/analytics' }}
      />
    </>
  )
}
