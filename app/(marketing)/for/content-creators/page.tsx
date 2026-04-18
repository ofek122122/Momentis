import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, BarChart3, Clock, Shield, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Content Creators — Publishing schedule, creation time, and brand deadlines',
  description:
    'Content creators manage publishing schedules across platforms, creation deep work, brand collaboration deadlines, and audience growth analytics simultaneously. Momenties templates content calendars, protects creation time, and shows time per platform and per client.',
  alternates: { canonical: '/for/content-creators' },
  openGraph: {
    title: 'Momenties for Content Creators',
    description: 'Content calendar, creation time protection, and brand analytics for content creators.',
    url: '/for/content-creators',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Calendar,
    title: 'Content calendar on the actual calendar',
    desc: 'Publishing days are recurring events. "YouTube upload — tuesday." "Newsletter — thursday 9am." "Podcast drops — friday." Your publishing schedule is on the calendar — not in a spreadsheet that drifts from reality.',
  },
  {
    icon: Shield,
    title: 'Creation time blocked early in the week',
    desc: 'Content creation requires focused, uninterrupted time. Block filming, writing, and editing sessions before calls and collaboration fill the week. "Filming block — monday 10am-1pm." On the calendar before Monday arrives.',
  },
  {
    icon: Clock,
    title: 'Brand collaboration deadlines',
    desc: '"Sponsored content due — Acme campaign, thursday." "Brand review window — TechCo, friday EOD." "Contract renewal deadline — Agency A, month end." Every brand obligation on calendar. Nothing missed in the inbox.',
  },
  {
    icon: BarChart3,
    title: 'Time per platform and per client',
    desc: 'Tag creation sessions, filming, editing, and collaboration calls by platform and client. Analytics shows time per platform. Is YouTube getting 70% of your time but driving 20% of revenue? The data changes decisions.',
  },
]

const CREATOR_WORKFLOW = [
  { time: 'Content planning', action: '"Content planning session — sunday 6pm 60 mins." Weekly content plan finalized. All creation blocks for the week added. Publishing deadlines confirmed. Brand deliverables scheduled.' },
  { time: 'Creation days', action: '"Filming — tuesday 10am-1pm." "Writing — wednesday 9-11am." "Editing — thursday 9am-noon." All creation time blocked before the week begins. Calendar defends it from call requests.' },
  { time: 'Brand work', action: '"Sponsored content creation — Acme, tuesday 2-4pm." "Brand review call — thursday 11am." All collaboration work tagged to the brand. Time tracked per client automatically.' },
  { time: 'Publishing', action: '"Upload — youtube tuesday 8pm." "Newsletter send — thursday 9am." Recurring events. Publishing happens at the scheduled time — not whenever the content happens to be done.' },
  { time: 'Monthly review', action: 'Analytics: time per platform, creation vs. admin ratio, brand collaboration hours. Which platform is consuming the most time relative to impact? Adjust next month\'s focus.' },
]

export default function ForContentCreatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Content Creators"
        title={
          <>
            Creation time protected.
            <br />
            <em className="not-italic text-gold">Publishing on schedule.</em>
          </>
        }
        lede="Content creators manage publishing schedules across multiple platforms, creation deep work, brand collaboration deadlines, and business development simultaneously. Momenties templates the content calendar, protects creation time, and shows time per platform and per client so you know what's driving the business."
        crumbs={[{ label: 'For Content Creators' }]}
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
            Platform analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No creator data shared with AI</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How content creators use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for content business management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Content creator weekly rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Planning to publishing with Momenties.</h2>
          </Reveal>
          <div className="space-y-3">
            {CREATOR_WORKFLOW.map((step, i) => (
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
                &ldquo;I was spreading myself across YouTube, a newsletter, Instagram, and a podcast — and analytics showed me I was spending nearly equal time on all four. But 80% of my revenue came from YouTube. I cut Instagram and doubled YouTube creation time. Revenue grew 60% in 4 months with less total work hours.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">J</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Jordan W.</div>
                  <div className="text-xs text-muted-foreground">Full-time content creator, 200k subscribers</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What creators track</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Content business analytics in Momenties.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Creation hours per platform per week',
                'Brand collaboration time per client',
                'Creation vs. admin vs. promotion ratio',
                'Publishing consistency (did it go out on time?)',
                'Filming vs. editing vs. writing breakdown',
                'Revenue per hour by platform (your estimate)',
                'Weekly content output trend',
                'Brand deadline hit rate',
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
        title="Creation time protected. Publishing on schedule. Data driving decisions."
        subtitle="Content calendar, creation block scheduling, and platform analytics. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Platform analytics', href: '/features/analytics' }}
      />
    </>
  )
}
