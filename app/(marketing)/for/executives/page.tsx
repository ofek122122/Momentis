import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { BarChart3, Shield, Zap, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Executives — Calendar intelligence at the C-suite level',
  description:
    'Executives need a calendar that provides strategic visibility, enforces executive-level time protection, and creates zero friction for their team to schedule with them. Momenties does all three.',
  alternates: { canonical: '/for/executives' },
  openGraph: {
    title: 'Momenties for Executives',
    description: 'Strategic visibility. Time protection. Zero scheduling friction.',
    url: '/for/executives',
    type: 'website',
  },
}

const PROBLEMS = [
  {
    icon: BarChart3,
    problem: 'You have no systemic view of where your time goes',
    fix: 'Analytics breaks your calendar into categories: strategic, operational, people, admin. Most execs see the split and immediately identify where strategic time is being stolen by operational meetings.',
  },
  {
    icon: Shield,
    problem: 'Thinking time gets scheduled away before it can happen',
    fix: 'Focus mode protects strategic thinking blocks. Attendees see a warning. EA-initiated meetings show up flagged. The time holds.',
  },
  {
    icon: Zap,
    problem: 'Your EA wastes time relaying your availability',
    fix: 'Scheduling links (Q3 2026) let your EA send a link that shows your real, live availability. No relay, no back-and-forth, no "let me check."',
  },
  {
    icon: Users,
    problem: 'You can\'t see team overload until someone breaks',
    fix: 'Team calendar analytics shows load by person per week. You see who\'s in back-to-backs before they tell you they\'re burning out.',
  },
]

const TESTIMONIALS = [
  {
    quote: 'I used to have a standing Friday meeting with my EA just to review the next week\'s calendar. With the Daily Brief and analytics, that meeting became 5 minutes instead of 45.',
    name: 'Claire Vandenbergh',
    role: 'COO, Series C logistics company',
    avatar: 'C',
  },
  {
    quote: 'The analytics tab showed me that 18% of my calendar time was in external-facing meetings. I thought it was 40%. Turns out the 18% was doing most of the work.',
    name: 'David T.',
    role: 'CEO, B2B software company',
    avatar: 'D',
  },
]

export default function ForExecutivesPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Executives"
        title={
          <>
            Calendar intelligence
            <br />
            <em className="not-italic text-gold">at the C-suite level.</em>
          </>
        }
        lede="At the executive level, your calendar is your strategy made visible. Where you spend your time is where your priorities actually are. Momenties gives you the visibility and protection to align those."
        crumbs={[{ label: 'For Executives' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free trial <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/enterprise"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Enterprise plan
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Pro trial · 14 days · Enterprise available</p>
      </PageHero>

      {/* Problems */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What we solve</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Four executive calendar challenges.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {PROBLEMS.map((item, i) => (
              <Reveal key={item.problem} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <item.icon className="h-4 w-4 text-gold" />
                  </div>
                  <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-2">Challenge</p>
                  <p className="text-sm text-muted-foreground mb-3">{item.problem}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/90 leading-relaxed">{item.fix}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The strategic calendar essay */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Strategic visibility</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
              Your calendar is your strategy made visible.
            </h2>
          </Reveal>
          <div className="space-y-5 text-[15px] leading-[1.8] text-foreground/85 font-light">
            <Reveal>
              <p>
                There's a management heuristic that applies very directly to calendars: show me someone's calendar and I'll tell you what they actually prioritize, not what they say they prioritize. The two are often different.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                For executives, this gap is usually the most visible and the most consequential. The company's strategic priorities say "customer success." The CEO's calendar shows 70% internal meetings. That's not a strategy problem — it's a calendar problem.
              </p>
            </Reveal>
            <Reveal delay={40}>
              <p>
                Momenties analytics doesn't fix the strategy. It makes the misalignment visible so you can decide whether to fix it. Most executives who look at their calendar analytics see something surprising. That surprise is valuable data.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="rounded-xl border border-border lux-card p-7 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[0,1,2,3,4].map((s) => (
                      <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="font-display text-base text-foreground/90 leading-snug mb-5">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">{t.avatar}</div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise note */}
      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-gold/20 bg-gold/5 p-6">
              <p className="text-[9px] font-mono uppercase tracking-widest text-gold mb-2">Enterprise</p>
              <h3 className="text-base font-display font-bold text-foreground mb-2">EA + admin workflow available</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Enterprise plan includes EA admin access (manage calendar without sharing credentials), audit logs, SSO, and dedicated support. Contact us to discuss your executive team's specific needs.
              </p>
              <Link href="/enterprise" className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold/80 transition-colors">
                Enterprise plan details <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Your time allocation is your strategy. Make it visible."
        subtitle="Analytics, Focus mode, and team visibility. Pro trial included."
        primary={{ label: 'Start free trial', href: '/login' }}
        secondary={{ label: 'Enterprise plan', href: '/enterprise' }}
      />
    </>
  )
}
