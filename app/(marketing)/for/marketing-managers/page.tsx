import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, BarChart3, Users, Zap, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Marketing Managers — Campaign scheduling, team coordination, and launch tracking',
  description:
    'Marketing managers coordinate campaign timelines, agency calls, creative reviews, and launch deadlines across multiple channels. Momenties templates campaign workflows and tracks team time by campaign.',
  alternates: { canonical: '/for/marketing-managers' },
  openGraph: {
    title: 'Momenties for Marketing Managers',
    description: 'Campaign scheduling and launch deadline tracking.',
    url: '/for/marketing-managers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Calendar,
    title: 'Campaign milestone templates',
    desc: 'Campaign template: brief, creative review, copy review, design approval, staging review, launch, post-launch review. Apply to any campaign. All meetings created in 30 seconds.',
  },
  {
    icon: BarChart3,
    title: 'Time per campaign analytics',
    desc: 'Tag all meetings and work time by campaign. Analytics shows hours per campaign per week. See if Campaign A is consuming disproportionate team bandwidth before the post-mortem.',
  },
  {
    icon: Users,
    title: 'Agency and vendor scheduling',
    desc: '"Agency creative review tuesday 2pm, 90 mins." "Vendor briefing thursday 10am." All external meetings scheduled instantly. Team overlay finds available times without back-and-forth.',
  },
  {
    icon: Zap,
    title: 'Launch date protection',
    desc: '"Product launch april 15." "Social media go-live april 15 8am." Launch dates on calendar with all surrounding milestones. The launch doesn\'t sneak up on anyone.',
  },
]

const MARKETING_WORKFLOW = [
  { time: 'Campaign start', action: 'Apply campaign template. All 8 milestone meetings created. Everyone on the team sees the timeline immediately.' },
  { time: 'Agency call', action: '"Creative review with agency tuesday 2pm, 90 mins, deck review." Voice-added during the kickoff call. On calendar before the meeting ends.' },
  { time: 'Review week', action: 'Team availability overlay finds approval meeting time across 6 stakeholders. No scheduling email chain.' },
  { time: 'Launch week', action: 'Launch date visible for 4 weeks. Daily Brief shows countdown. All pre-launch tasks confirmed on calendar.' },
  { time: 'Post-campaign', action: 'Analytics: campaign required 62 team hours. Compare to planned hours. Inform next campaign budget.' },
]

export default function ForMarketingManagersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Marketing Managers"
        title={
          <>
            Campaign milestones tracked.
            <br />
            <em className="not-italic text-gold">Launch dates visible.</em>
          </>
        }
        lede="Marketing managers coordinate complex campaign timelines across agencies, channels, and stakeholders. Momenties templates every campaign workflow, tracks time per campaign, and keeps launch dates visible before they become crises."
        crumbs={[{ label: 'For Marketing Managers' }]}
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
            Campaign templates
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Team plan from $9/person/month</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How marketing managers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for campaign management.</h2>
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

      {/* Marketing workflow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Campaign workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Campaign lifecycle with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {MARKETING_WORKFLOW.map((step, i) => (
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

      <CTA
        title="Every campaign milestone scheduled. Every launch date visible."
        subtitle="Campaign templates, team scheduling, and time analytics. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See templates', href: '/calendar-templates' }}
      />
    </>
  )
}
