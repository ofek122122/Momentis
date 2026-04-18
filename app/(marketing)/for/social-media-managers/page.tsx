import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, BarChart3, Clock, Zap, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Social Media Managers — Content calendar, client calls, and deadline tracking',
  description:
    'Social media managers coordinate content deadlines, client approvals, shoots, and reporting across multiple accounts. Momenties makes scheduling instant, tracks time per client, and keeps deadlines visible.',
  alternates: { canonical: '/for/social-media-managers' },
  openGraph: {
    title: 'Momenties for Social Media Managers',
    description: 'Content deadlines and client time — all tracked.',
    url: '/for/social-media-managers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Calendar,
    title: 'Content deadline tracking',
    desc: '"Instagram content deadline friday 5pm for BrandX." "Monthly report client ABC monday." All deadlines on calendar the moment they\'re agreed. Nothing lost in a thread.',
  },
  {
    icon: BarChart3,
    title: 'Client hours analytics',
    desc: 'Tag all work by client. Analytics shows hours per client per month. See which accounts are consuming disproportionate time — inform rate conversations or resourcing.',
  },
  {
    icon: Zap,
    title: 'Shoot and review scheduling',
    desc: '"Photo shoot BrandX thursday 10am, 2 hours." "Content review call wednesday 3pm, 45 mins." Voice-added during a message thread. On calendar before you close the app.',
  },
  {
    icon: Clock,
    title: 'Campaign launch windows',
    desc: '"Campaign launch day BrandX april 15." "Boost window april 15-22." All campaign timing visible in context of the full calendar. Never launch blind.',
  },
]

const SMM_WORKFLOW = [
  { time: 'Monday', action: 'Review all client content deadlines for the week. Analytics shows last week\'s hours per client — any imbalances to correct?' },
  { time: 'Content day', action: '3 client shoots or review calls. All pre-scheduled. Tags link each event to the right account for billing.' },
  { time: 'Approval deadline', action: '"Client approval BrandX thursday 3pm." Voice-added the moment the email arrives. On calendar. Visible. Not forgotten.' },
  { time: 'Reporting week', action: 'Monthly reports for 4 clients. All deadline events created with photo-to-calendar from the editorial calendar PDF.' },
  { time: 'Month end', action: 'Analytics: client A 22 hours, client B 14 hours, client C 8 hours. Use for billing and capacity planning.' },
]

export default function ForSocialMediaManagersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Social Media Managers"
        title={
          <>
            Client deadlines tracked.
            <br />
            <em className="not-italic text-gold">Time per account visible.</em>
          </>
        }
        lede="Social media managers run multiple client accounts with simultaneous deadlines, approval windows, and reporting cycles. Momenties captures every deadline instantly and tracks client hours so billing is never a guessing game."
        crumbs={[{ label: 'For Social Media Managers' }]}
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
            Client analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Pro from $12/month · No separate time tracker needed</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How SMMs use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for multi-client work.</h2>
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

      {/* SMM workflow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Multi-client week with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {SMM_WORKFLOW.map((step, i) => (
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

      {/* Testimonial */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I have 6 clients. The analytics shows me immediately when one client is taking up 40% of my week. I used that data in three rate renegotiations this year and raised my fees on two of them.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">Z</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Zoe K.</div>
                  <div className="text-xs text-muted-foreground">Freelance social media manager, 6 clients</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Know exactly where your time goes. Bill accordingly."
        subtitle="Client tagging, hour analytics, and instant deadline capture. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
