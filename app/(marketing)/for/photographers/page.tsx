import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Camera, Clock, BarChart3, Zap, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Photographers — Shoot scheduling, editing time, and client billing analytics',
  description:
    'Photographers schedule shoots, editing sessions, client galleries, and print deliveries across multiple projects. Momenties captures every booking instantly and tracks actual project hours so pricing stays accurate.',
  alternates: { canonical: '/for/photographers' },
  openGraph: {
    title: 'Momenties for Photographers',
    description: 'Shoot scheduling and project time analytics.',
    url: '/for/photographers',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Camera,
    title: 'Shoot booking in seconds',
    desc: '"Portrait session Emma saturday 10am 2 hours." "Corporate headshots Acme Co wednesday 9am-1pm." Voice-added the moment confirmation comes in. Tagged to client.',
  },
  {
    icon: Clock,
    title: 'Edit and cull time blocking',
    desc: '"Edit session Emma portraits monday 9am-1pm." Post-shoot edit time protected before the shoot day ends. Delivery timeline defended.',
  },
  {
    icon: BarChart3,
    title: 'Project hours = pricing accuracy',
    desc: 'Tag shoot, edit, and delivery time by client. Analytics shows total hours per project. Know your actual time investment before quoting the next project.',
  },
  {
    icon: Zap,
    title: 'Gallery and delivery deadlines',
    desc: '"Gallery delivery Emma portraits friday." "Print order ready Thursday." All delivery milestones on calendar. Daily Brief reminds you the morning before.',
  },
]

const PHOTO_WORKFLOW = [
  { time: 'Booking confirmed', action: '"Family session Harrison saturday 3pm 2h." Tagged, on calendar. Edit block created for the following monday.' },
  { time: 'Post-shoot', action: '"Cull Harrison family monday 9-11am." "Edit monday 1-4pm." "Gallery delivery thursday." Three events in 30 seconds.' },
  { time: 'Client review', action: '"Gallery review call Harrison thursday 2pm 30 mins." Scheduled when the gallery is sent.' },
  { time: 'Month end', action: 'Analytics: Harrison 9h, corporate work 14h, personal projects 6h. Price adjustment conversation next quarter.' },
]

export default function ForPhotographersPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Photographers"
        title={
          <>
            Every shoot scheduled.
            <br />
            <em className="not-italic text-gold">Edit time protected.</em>
          </>
        }
        lede="Photographers juggle shoots, editing marathons, client deliveries, and business admin across overlapping projects. Momenties captures every booking instantly and tracks project hours so pricing decisions are based on data, not intuition."
        crumbs={[{ label: 'For Photographers' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How photographers use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for photography businesses.</h2>
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

      {/* Workflow */}
      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Production workflow</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">From booking to gallery delivery.</h2>
          </Reveal>
          <div className="space-y-3">
            {PHOTO_WORKFLOW.map((step, i) => (
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
                &ldquo;Looking at the analytics showed me I was spending 8–10 hours on every wedding — double what I was quoting for. My minimum package price went up $400 based on that data alone.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">S</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Sophie R.</div>
                  <div className="text-xs text-muted-foreground">Wedding and portrait photographer</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Track the hours. Price the work accurately."
        subtitle="Project analytics built into your calendar. No separate time tracker needed."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'See analytics', href: '/features/analytics' }}
      />
    </>
  )
}
