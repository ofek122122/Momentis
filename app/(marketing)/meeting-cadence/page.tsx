import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Meeting Cadence — How to design recurring meetings that stay valuable instead of becoming overhead',
  description:
    'Meeting cadence is the rhythm of recurring meetings that keeps teams aligned without consuming the time needed for actual work. Here\'s how to design a meeting cadence that serves communication needs, audit it regularly, and eliminate the recurring meetings that have outlived their purpose.',
  alternates: { canonical: '/meeting-cadence' },
  openGraph: {
    title: 'Meeting Cadence — Momenties',
    description: 'Design recurring meetings that stay valuable and audit out the ones that have become overhead.',
    url: '/meeting-cadence',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Users,
    title: 'Meeting cadence designed at team formation',
    desc: 'A meeting cadence designed intentionally at team or project formation beats one that accumulates by default. "What does this team need to stay aligned?" produces a minimal effective cadence. A cadence that grows organically — "let\'s add a weekly sync" after every friction point — produces overcrowded calendars and under-produced work.',
  },
  {
    icon: Clock,
    title: 'Fixed cadence prevents scheduling overhead',
    desc: 'Recurring meetings with fixed times eliminate per-meeting scheduling overhead. "1:1 — every other tuesday 2pm" schedules once and runs indefinitely. Ad hoc equivalents require re-scheduling every occurrence, consuming attention, and competing with focused work blocks placed by others first.',
  },
  {
    icon: BarChart3,
    title: 'Meeting load analytics identifies cadence drift',
    desc: 'Meeting time has a habit of expanding. A team starts with 4 hours of weekly meeting time and accumulates to 12 hours without anyone deciding to triple the meeting load — it drifts. Analytics tracks meeting hours per week and flags when cadence load has grown beyond the team\'s design intent. Drift caught early is easy to reverse.',
  },
  {
    icon: Shield,
    title: 'Quarterly cadence audit removes dead weight',
    desc: 'Every recurring meeting should be audited quarterly with one question: if this meeting ended today, would the team be worse off? Meetings that answer "no" or "probably not" are candidates for cancellation. The quarterly audit is a scheduled calendar event — "recurring meeting audit — first monday of quarter" — not an ad hoc exercise that never happens.',
  },
]

const CADENCE_TIERS = [
  {
    tier: 'Daily (15 min max)',
    purpose: 'Surface blockers and coordinate immediate work',
    suitable: 'High-interdependence teams: sprints, incident response, active project delivery',
    unsuitable: 'Autonomous individual contributors, async-first teams, reporting relationships',
  },
  {
    tier: 'Weekly (30-60 min)',
    purpose: 'Team alignment, progress against weekly goals, problem-solving',
    suitable: 'Most teams with ongoing shared work and regular coordination needs',
    unsuitable: 'Teams with purely independent work, or where async status updates suffice',
  },
  {
    tier: 'Biweekly (45-60 min)',
    purpose: '1:1 relationship maintenance, feedback, career development',
    suitable: 'Manager-report 1:1s, cross-functional stakeholder syncs, peer accountability pairs',
    unsuitable: 'Teams in active crisis, high-stakes delivery periods requiring tighter loops',
  },
  {
    tier: 'Monthly (60-90 min)',
    purpose: 'Strategy review, goal tracking, departmental alignment',
    suitable: 'Leadership reviews, OKR check-ins, team retrospectives, stakeholder updates',
    unsuitable: 'Operational teams where monthly frequency creates too much information lag',
  },
  {
    tier: 'Quarterly (2-4 hours)',
    purpose: 'Planning, goal-setting, retrospectives, strategic direction',
    suitable: 'All teams for planning cycles, board/leadership reviews, team offsites',
    unsuitable: 'Tactical operations meetings — too infrequent for operational coordination',
  },
]

const AUDIT_CRITERIA = [
  { criterion: 'Attendance quality', question: 'Are attendees engaged or checking email? Disengaged attendees signal the meeting doesn\'t require their participation — reduce the invite list or cancel.' },
  { criterion: 'Replaceability', question: 'Could a well-written async update replace this meeting? If the meeting\'s primary function is information sharing, async likely serves better.' },
  { criterion: 'Action outcomes', question: 'Does this meeting produce decisions or action items? A meeting that ends without a decision or action every session is a status theater.' },
  { criterion: 'Cadence fit', question: 'Is the meeting cadence matched to the coordination need? A daily meeting for a monthly deliverable is mismatched. A monthly meeting for a daily operational need is too slow.' },
  { criterion: 'Energy cost', question: 'Does this meeting energize the team or drain it? High-cost meetings that produce low value are the first candidates for elimination.' },
]

export default function MeetingCadencePage() {
  return (
    <>
      <PageHero
        eyebrow="Meeting Cadence"
        title={
          <>
            Meetings that serve the work.
            <br />
            <em className="not-italic text-gold">Overhead eliminated.</em>
          </>
        }
        lede="A meeting cadence is not just a list of recurring calendar events — it's a communication architecture. Each meeting has a purpose, a frequency matched to that purpose, and a quarterly review to confirm it still earns its place on the calendar. Here's how to design a meeting cadence intentionally, audit it regularly, and maintain the focused work time that the meetings exist to protect."
        crumbs={[{ label: 'Meeting Cadence' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/no-meeting-wednesday"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            No-meeting day guide
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties supports intentional meeting cadence design.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Cadence tiers</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">When to use each meeting frequency.</h2>
          </Reveal>
          <div className="space-y-3">
            {CADENCE_TIERS.map((item, i) => (
              <Reveal key={item.tier} delay={i * 40}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-foreground">{item.tier}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{item.purpose}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    <p className="text-[11px] text-emerald-400/80 leading-relaxed"><span className="font-medium">Suitable:</span> {item.suitable}</p>
                    <p className="text-[11px] text-amber-400/80 leading-relaxed"><span className="font-medium">Unsuitable:</span> {item.unsuitable}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Audit criteria</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Five questions to ask every recurring meeting each quarter.</h2>
          </Reveal>
          <div className="space-y-3">
            {AUDIT_CRITERIA.map((item, i) => (
              <Reveal key={item.criterion} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-24 shrink-0 pt-0.5 uppercase tracking-wide leading-relaxed">{item.criterion}</span>
                  <p className="text-sm text-foreground/90">{item.question}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Meeting analytics</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What Momenties tracks for meeting cadence health.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Meeting hours per week trend',
                'Meeting load as % of total work hours',
                'Meetings per cadence tier (daily/weekly/monthly)',
                'Deep work hours vs. meeting hours ratio',
                'Recurring meeting count over time',
                'Meeting-free days per week',
                'Focus block fragmentation by meeting pattern',
                'Quarterly recurring meeting audit completion',
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
        title="Meetings that serve the work. Overhead eliminated."
        subtitle="Meeting cadence design, meeting load analytics, and quarterly audit tracking. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'No-meeting day guide', href: '/no-meeting-wednesday' }}
      />
    </>
  )
}
