import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BarChart3, Clock, Shield, Zap, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Freelance Developers — Client meetings, deep work, and billable hours tracking',
  description:
    'Freelance developers context-switch between client calls, deep coding sessions, code reviews, and project deadlines. Momenties tracks time per client, protects deep work, and keeps all project deadlines visible.',
  alternates: { canonical: '/for/freelance-developers' },
  openGraph: {
    title: 'Momenties for Freelance Developers',
    description: 'Client meetings, deep work protection, and billable time analytics.',
    url: '/for/freelance-developers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'Deep work blocks that actually hold',
    desc: 'Block 4-hour coding sessions with Focus mode. Notifications off, Slack paused, calendar shows busy. Clients know you\'re in deep work until 2pm. No interruptions, no context switching.',
  },
  {
    icon: BarChart3,
    title: 'Time per client for invoicing',
    desc: 'Tag every meeting and work block by client. Weekly analytics shows hours per client. Invoice confidently. Know which client is consuming disproportionate time before the next contract negotiation.',
  },
  {
    icon: Clock,
    title: 'Project deadline visibility',
    desc: '"Client A MVP deadline june 15." "Code review friday 3pm, Client B." All deadlines and deliverables on calendar. Daily Brief surfaces approaching deadlines. Nothing slips.',
  },
  {
    icon: Zap,
    title: 'Client meeting scheduling without email chains',
    desc: '"Sprint review Client C tuesday 10am 45 mins." "Onboarding call new client thursday 2pm." Voice-added from anywhere. On calendar before the email thread starts.',
  },
]

const DEV_WEEK = [
  { time: 'Monday', action: 'Weekly planning: check all client deadlines, block deep work for highest-priority project. Client calls fill the gaps, not the mornings.' },
  { time: 'Morning', action: '9am-1pm deep work block. Focus mode active. Coding session on the highest-complexity ticket. Calendar shows busy — clients see that.' },
  { time: 'Afternoon', action: 'Client calls, code reviews, async feedback. Voice-add any meeting that comes up: "Quick sync Alex tuesday 3pm 30 mins."' },
  { time: 'Friday', action: 'Analytics review: hours per client this week. Does the rate match the contract? Are some clients eating more time than scoped?' },
  { time: 'Monthly', action: 'Invoice prep: pull time analytics per client. Hours vs. budgeted hours visible. Scope creep shows up in the data before the awkward conversation.' },
]

export default function ForFreelanceDevelopersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Freelance Developers"
        title={
          <>
            Deep work protected.
            <br />
            <em className="not-italic text-gold">Client time tracked.</em>
          </>
        }
        lede="Freelance developers manage multiple clients, deep coding sessions, deadlines, and meetings simultaneously. Momenties protects focus time, tracks billable hours by client, and keeps all project deadlines visible — without becoming another project management tool."
        crumbs={[{ label: 'For Freelance Developers' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/deep-work"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Deep work system
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How freelance developers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for independent developers.</h2>
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

      {/* Dev week */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Freelance rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">A freelance developer's week with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {DEV_WEEK.map((step, i) => (
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

      {/* What developers protect */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">What freelance developers protect with Momenties.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Morning deep work — no meetings before 1pm',
                'Focus blocks that signal availability to clients',
                'Deadline countdown for each active project',
                'Billable time per client per week',
                'Context-switch cost — fewer interruptions',
                'Proposal writing blocks during slow weeks',
                'Learning time — courses, side projects',
                'Hard stop to prevent evening overwork',
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

      {/* Testimonial */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I was undercharging because I had no idea how many hours I was actually spending on each client. The analytics showed me immediately. I adjusted two contracts and covered the cost of Momenties Pro in the first week.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">D</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Dan V.</div>
                  <div className="text-xs text-muted-foreground">Freelance full-stack developer, 4 active clients</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Protect the work. Track the time. Invoice with confidence."
        subtitle="Deep work blocks, client time analytics, and deadline tracking. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Time analytics', href: '/features/analytics' }}
      />
    </>
  )
}
