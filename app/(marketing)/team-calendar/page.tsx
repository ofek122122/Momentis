import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Users, Eye, Layers, Shield, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Team calendar — See your whole team's schedule in one view',
  description:
    'Momenties team calendar overlays every member's availability on a single shared view, shows overloaded people, and lets you schedule with context — without sharing individual events.',
  alternates: { canonical: '/team-calendar' },
  openGraph: {
    title: 'Team calendar — One view. Real availability.',
    description: 'Schedule across your team without the back-and-forth.',
    url: '/team-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Eye,
    title: 'Availability overlay',
    desc: 'See every team member\'s free/busy status on a single calendar view. Color-coded by person. No event titles exposed.',
  },
  {
    icon: Layers,
    title: 'Overload warnings',
    desc: 'When someone has more than 4 hours of meetings in a day, their slot turns amber. Book with awareness, not ignorance.',
  },
  {
    icon: Users,
    title: 'Shared team events',
    desc: 'Create events that appear on everyone\'s calendar simultaneously. Recurring standups, sprint ceremonies, all-hands — one action, propagated to all.',
  },
  {
    icon: Shield,
    title: 'Privacy-first',
    desc: 'Team members see free/busy only, never event titles or descriptions. Individuals control what they expose. No surveillance dynamics.',
  },
]

const PROBLEMS = [
  {
    problem: '"What\'s everyone doing Thursday afternoon?"',
    solution: 'Open team view. Thursday afternoon shows green (free), amber (loaded), or red (blocked) for each person. No Slack thread needed.',
  },
  {
    problem: 'Back-and-forth scheduling for a 30-minute sync',
    solution: 'Find the first shared green slot across all attendees in two seconds. Click to create.',
  },
  {
    problem: 'You don\'t know who\'s close to burnout until they tell you',
    solution: 'Team analytics (Team plan) shows meeting load per person per week. You see the overload before they do.',
  },
  {
    problem: 'New hire doesn\'t know who\'s available or how to find out',
    solution: 'Shared team calendar is the default view on day one. Onboarding included.',
  },
]

const PLANS = [
  {
    name: 'Pro',
    price: '$12/mo per person',
    features: ['Team calendar view (up to 5 members)', 'Free/busy overlay', 'Shared events'],
    href: '/pro',
  },
  {
    name: 'Team',
    price: '$9/mo per person (5+ seats)',
    features: ['Unlimited members', 'Overload warnings', 'Team analytics', 'Admin controls', 'Priority support'],
    href: '/teams',
    highlight: true,
  },
]

export default function TeamCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Team calendar"
        title={
          <>
            Your whole team's
            <br />
            <em className="not-italic text-gold">schedule. One view.</em>
          </>
        }
        lede="Stop asking 'when is everyone free?' See it. Momenties overlays your team's availability without exposing private event details — so you can schedule with context, not guesswork."
        crumbs={[{ label: 'Team calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free trial <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/teams"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            See Team plan
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Pro trial · 14 days · No credit card</p>
      </PageHero>

      {/* Visual mockup */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Team view</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              Free/busy at a glance. No detail exposed.
            </h2>
          </Reveal>
          <Reveal>
            {/* CSS team calendar mockup */}
            <div className="rounded-2xl border border-border overflow-hidden bg-[#0f0f14]">
              {/* Header */}
              <div className="border-b border-border px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-gold/60" />
                  <span className="text-sm font-medium text-foreground">Team · Week of Apr 21</span>
                </div>
                <div className="flex items-center gap-2">
                  {[
                    { name: 'Alex', color: 'bg-blue-500' },
                    { name: 'Sam', color: 'bg-emerald-500' },
                    { name: 'Maya', color: 'bg-violet-500' },
                    { name: 'Jordan', color: 'bg-amber-500' },
                  ].map((m) => (
                    <div key={m.name} className="flex items-center gap-1.5">
                      <div className={`w-2 h-2 rounded-full ${m.color}`} />
                      <span className="text-xs text-muted-foreground">{m.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Grid */}
              <div className="grid grid-cols-6 text-xs">
                {/* Time column */}
                <div className="border-r border-border/50 py-2">
                  {['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d) => (
                    <div key={d} className="h-10 flex items-center justify-center font-mono text-[10px] text-muted-foreground/50">{d}</div>
                  ))}
                </div>
                {/* Time rows */}
                {['9am', '10am', '11am', '12pm', '1pm'].map((time) => (
                  <div key={time} className="border-r border-border/50 py-2">
                    <div className="h-10 flex items-center justify-center font-mono text-[10px] text-muted-foreground/50">{time}</div>
                    <div className="h-10 mx-1 rounded flex items-center justify-center bg-blue-500/20 border border-blue-500/20">
                      <span className="text-[9px] text-blue-400">Alex</span>
                    </div>
                    <div className="h-10 mx-1 rounded" />
                    <div className="h-10 mx-1 rounded flex items-center justify-center bg-emerald-500/20 border border-emerald-500/20">
                      <span className="text-[9px] text-emerald-400">Sam</span>
                    </div>
                    <div className="h-10 mx-1 rounded flex items-center justify-center bg-amber-500/20 border border-amber-500/20">
                      <span className="text-[9px] text-amber-400">Jordan</span>
                    </div>
                    <div className="h-10 mx-1 rounded" />
                  </div>
                ))}
              </div>
              <div className="border-t border-border/50 px-5 py-2 flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500/40" />
                  <span className="text-[10px] text-muted-foreground">Busy</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-amber-500/40" />
                  <span className="text-[10px] text-muted-foreground">Overloaded (4h+ meetings)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-border" />
                  <span className="text-[10px] text-muted-foreground">Free</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Features</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              What the team calendar does.
            </h2>
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

      {/* Problems solved */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What it solves</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Scheduling problems that go away.
            </h2>
          </Reveal>
          <div className="space-y-4">
            {PROBLEMS.map((item, i) => (
              <Reveal key={item.problem} delay={i * 50}>
                <div className="rounded-xl border border-border/50 lux-card p-5">
                  <p className="text-sm font-mono text-muted-foreground/60 mb-3">"{item.problem}"</p>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/90 leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Plans</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Team features start on Pro.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {PLANS.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 60}>
                <div className={`rounded-xl border p-6 h-full ${plan.highlight ? 'border-gold/30 bg-gold/5' : 'border-border'}`}>
                  {plan.highlight && (
                    <span className="text-[9px] font-mono uppercase tracking-widest text-gold bg-gold/10 rounded-full px-2 py-0.5 mb-3 inline-block">Recommended</span>
                  )}
                  <h3 className="text-base font-display font-bold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground mb-4 font-mono">{plan.price}</p>
                  <ul className="space-y-2 mb-5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/85">
                        <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.href}
                    className={`inline-flex items-center gap-1.5 text-sm rounded-full px-4 py-2 transition-colors ${
                      plan.highlight
                        ? 'bg-gold text-[#0c0c0f] hover:bg-gold/90'
                        : 'border border-border hover:border-gold/30 text-foreground'
                    }`}
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Stop asking. Just look."
        subtitle="See your team's real availability. No back-and-forth required."
        primary={{ label: 'Start free trial', href: '/login' }}
        secondary={{ label: 'Compare plans', href: '/pricing' }}
      />
    </>
  )
}
