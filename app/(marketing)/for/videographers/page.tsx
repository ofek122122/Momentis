import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Camera, Calendar, BarChart3, Clock, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Videographers — Shoot scheduling, edit deadlines, and client time tracking',
  description:
    'Videographers manage shoot days, edit sessions, client reviews, and delivery deadlines across multiple projects. Momenties makes every booking instant, tracks client hours, and keeps delivery dates visible.',
  alternates: { canonical: '/for/videographers' },
  openGraph: {
    title: 'Momenties for Videographers',
    description: 'Shoot scheduling and delivery deadline tracking.',
    url: '/for/videographers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Camera,
    title: 'Shoot day scheduling',
    desc: '"Wedding shoot BrandX saturday 10am through 8pm." "Corporate video Smith Co tuesday 9am-1pm." Voice-added the moment booking is confirmed. Tagged to client.',
  },
  {
    icon: Clock,
    title: 'Edit timeline blocking',
    desc: '"Edit session BrandX wedding monday-wednesday, 6 hours/day." Post-shoot edit blocks created before the wedding day is over. Delivery timeline protected.',
  },
  {
    icon: Calendar,
    title: 'Delivery deadline tracking',
    desc: '"First cut delivery BrandX friday." "Final delivery with revisions BrandX may 20." Deadlines on calendar when the contract is signed — not when the shoot day ends.',
  },
  {
    icon: BarChart3,
    title: 'Project hours analytics',
    desc: 'Tag all shoot, edit, and review time by client. Analytics shows total hours per project. Understand your actual time investment before pricing the next project.',
  },
]

const VIDEO_WORKFLOW = [
  { time: 'Booking confirmed', action: '"Wedding shoot Harrison-Lee june 22, 10am-8pm." On calendar. Tagged. Edit blocks created for the following week.' },
  { time: 'Post-shoot', action: '"Edit session Harrison-Lee monday-friday 9am-3pm." Full edit week protected before the exhaustion of shoot day wears off.' },
  { time: 'Client review', action: '"First cut review Harrison-Lee wednesday 2pm 60 mins." Scheduled the moment the rough cut is sent.' },
  { time: 'Delivery', action: '"Final delivery Harrison-Lee friday." Visible in calendar. Daily Brief reminds you the day before.' },
  { time: 'Month end', action: 'Analytics: Harrison-Lee 42h total, BrandX 28h, Smith Co 16h. Actual hours vs. quoted hours — price the next project accurately.' },
]

export default function ForVideographersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Videographers"
        title={
          <>
            Shoot scheduled.
            <br />
            <em className="not-italic text-gold">Edit time protected.</em>
          </>
        }
        lede="Videographers juggle shoot days, edit marathons, client reviews, and delivery deadlines across overlapping projects. Momenties captures every date instantly, protects edit blocks, and tracks actual project hours so pricing stays accurate."
        crumbs={[{ label: 'For Videographers' }]}
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
            Project analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · Voice input from the field · Mobile-first</p>
      </PageHero>

      {/* Use cases */}
      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How videographers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for production workflows.</h2>
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

      {/* Video workflow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Production workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From booking to delivery.</h2>
          </Reveal>
          <div className="space-y-3">
            {VIDEO_WORKFLOW.map((step, i) => (
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

      {/* Testimonial */}
      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I tracked my hours per project for the first time in three years. I had been undercharging my wedding clients by 30% because I had no idea how long edits actually took. That changed my pricing immediately.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">L</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Luca V.</div>
                  <div className="text-xs text-muted-foreground">Wedding and commercial videographer</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Every project, every hour, every deadline."
        subtitle="Shoot-to-delivery calendar with project analytics. Free plan available."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See project analytics', href: '/features/analytics' }}
      />
    </>
  )
}
