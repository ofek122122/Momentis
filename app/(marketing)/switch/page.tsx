import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { COMPETITORS } from '@/lib/competitors'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
  Minus,
  DownloadCloud,
  Sparkles,
  Zap,
  Shield,
  Clock,
  MessageSquare,
  FileText,
  Apple,
  Mail,
  Calendar,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Switch to Momenties — Keep your events. Lose the friction.',
  description:
    'A concierge-grade migration from Google Calendar, Calendly, Notion Calendar, Superhuman, Fantastical, Apple, Outlook, or a plain .ics file. Most migrations finish in under ten minutes.',
  alternates: { canonical: '/switch' },
  openGraph: {
    title: 'Switch to Momenties',
    description:
      'Migrate from Google, Notion, Fantastical, Apple, Outlook, or any .ics — in under ten minutes, with nothing lost.',
    url: '/switch',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Switch to Momenties',
    description: 'Keep your events. Lose the friction.',
  },
}

// Short-form switching cards — pulled from the full compare pages plus a couple
// of direct-import only entries that don't warrant a /compare/[slug] page.
const FROM_COMPETITORS = COMPETITORS.map((c) => ({
  slug: c.slug,
  name: c.name,
  short: c.short,
  summary: c.tagline,
  via: 'Side-by-side · full comparison',
}))

type DirectImporter = {
  name: string
  format: string
  note: string
  icon: typeof Apple
  minutes: number
}

const DIRECT_IMPORTERS: DirectImporter[] = [
  {
    name: 'Apple Calendar',
    format: 'CalDAV',
    note: 'Sign in with your Apple ID and we sync events live. No export needed.',
    icon: Apple,
    minutes: 3,
  },
  {
    name: 'Microsoft Outlook',
    format: 'Microsoft Graph',
    note: 'OAuth into Microsoft 365. Two-way sync on every plan.',
    icon: Mail,
    minutes: 3,
  },
  {
    name: 'Fantastical',
    format: '.ics export',
    note: 'Export from Fantastical, drop the file into Momenties. Events imported in bulk.',
    icon: Calendar,
    minutes: 5,
  },
  {
    name: 'Any other calendar',
    format: '.ics file',
    note: "If your tool produces an iCalendar feed, we'll take it. RFC 5545 compliant.",
    icon: FileText,
    minutes: 4,
  },
]

const TIMELINE: { n: string; title: string; body: string; minutes: string }[] = [
  {
    n: '01',
    title: 'Sign in with Google or Apple',
    body: 'One button. We request the read/write scope your calendar already has, and nothing else. Most users finish this step in under 60 seconds.',
    minutes: '~1 min',
  },
  {
    n: '02',
    title: 'Choose your calendars',
    body: 'Pick which calendars to sync. Work, personal, family, gym — scope each one independently. Read-only is a valid answer for any of them.',
    minutes: '~2 min',
  },
  {
    n: '03',
    title: 'We mirror, never duplicate',
    body: 'Events from your source calendar show up in Momenties immediately. We never copy, re-create, or re-send invites. Your source of truth stays your source of truth.',
    minutes: 'Instant',
  },
  {
    n: '04',
    title: 'Try the voice + image parser',
    body: 'With your calendar in view, say an event out loud or snap a photo of a printed schedule. This is usually the moment new users decide to stay.',
    minutes: '~3 min',
  },
  {
    n: '05',
    title: 'Turn off the old tool (when you are ready)',
    body: 'Most users keep both apps running for a week. After that, almost nobody goes back. There is no contract penalty if you do — Momenties is cancel-anytime.',
    minutes: 'Your call',
  },
]

type KGLRow = {
  label: string
  keep: string
  gain: string
  leave: string
}

const KGL: KGLRow[] = [
  {
    label: 'Your events & recurring rules',
    keep: 'Every one of them, live-synced',
    gain: 'AI parsing, voice, photo → events',
    leave: 'Manual retyping',
  },
  {
    label: 'Your invites & meeting links',
    keep: 'All existing Zoom / Meet / Teams links',
    gain: 'A quieter way to schedule new ones',
    leave: "RSVP emails you'll never read",
  },
  {
    label: 'Your work & personal calendars',
    keep: 'Separate calendars stay separate',
    gain: 'Unified view when you want it',
    leave: 'Five tabs, three apps',
  },
  {
    label: 'Your notification discipline',
    keep: 'Same native reminders you have today',
    gain: 'A tool that lowers your heart rate',
    leave: 'Engagement pings, feature nags, upsell modals',
  },
  {
    label: 'Your integrations',
    keep: 'Slack, Zoom, Notion, Linear, Stripe',
    gain: '24 more, plus a CLI and an open API',
    leave: 'Calendar-spam from tools you forgot you installed',
  },
]

const CONCIERGE_CHECKLIST: string[] = [
  '60-min migration call with an engineer, not a CSM',
  'Bulk-import of .ics exports from any tool or vendor',
  'Mapping of your org\'s calendar naming conventions',
  'SAML / SSO configuration (Okta, Azure AD, Google Workspace)',
  'Test group of 5 users before full rollout',
  'A 30-day white-glove period with direct-line support',
]

const FAQ: { q: string; a: string }[] = [
  {
    q: 'Will you copy my events into your database?',
    a: "No. We mirror your source calendar live — we don't copy it. If you revoke access tomorrow, there is nothing to delete on our side beyond a week of cached display data. We keep the ledger where you left it.",
  },
  {
    q: 'What happens to my invites and RSVPs?',
    a: "We never send duplicate invites, never re-invite anyone, and never send calendar-spam. When you accept or decline from Momenties, the RSVP is routed through your original provider exactly as if you had clicked accept in Gmail.",
  },
  {
    q: 'Can I run both tools for a while?',
    a: "Yes, and most people do. We do not treat this as disloyalty. Most new users run both for 5–10 days, then turn the old one off without ceremony.",
  },
  {
    q: 'Is there a contract lock-in?',
    a: 'No. Every plan is cancel-anytime. If you cancel, your events stay in your source provider — you never lose anything that was yours.',
  },
  {
    q: 'What if my company has SSO requirements?',
    a: 'SAML SSO (Okta, Azure AD, Google Workspace) is available on Enterprise. The concierge migration includes a one-hour call to configure it end-to-end.',
  },
]

const SWITCH_STATS = [
  { label: 'Median migration time', value: '8 min' },
  { label: 'Users who finished the migration alone', value: '94%' },
  { label: 'Enterprise concierge slots per week', value: '5' },
  { label: 'Contract lock-in', value: 'None' },
]

export default function SwitchPage() {
  return (
    <>
      <PageHero
        eyebrow="Switch to Momenties"
        title={
          <>
            Keep your events. <em className="not-italic text-gold">Lose the friction</em>.
          </>
        }
        lede="A concierge-grade migration from Google Calendar, Apple, Outlook, Fantastical, Notion Calendar, Calendly, Superhuman — or any .ics file on your hard drive. Median migration time is under ten minutes, and nothing in your life disappears."
        crumbs={[{ label: 'Switch' }]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
          >
            Start your migration
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
          <Link
            href="#concierge"
            className="inline-flex items-center gap-2 h-10 px-5 rounded-full border border-border text-sm text-foreground hover:border-gold/40 hover:text-gold transition-colors"
          >
            Enterprise concierge
          </Link>
        </div>
      </PageHero>

      {/* Stats strip */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
            {SWITCH_STATS.map((s) => (
              <div key={s.label} className="bg-[#0c0c0f] p-5">
                <div className="font-display text-3xl md:text-4xl text-gold font-semibold leading-none">
                  {s.value}
                </div>
                <div className="mt-2 text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground/80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Switching from (full compare pages) */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-8 flex-wrap mb-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                Side-by-side · switching from
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Full comparisons of the four tools most of you ask about.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Each of these is an honest, feature-by-feature side-by-side. We show where the other tool is better, too.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FROM_COMPETITORS.map((c, i) => (
              <Reveal key={c.slug} delay={i * 60}>
                <Link
                  href={`/compare/${c.slug}`}
                  className="group h-full rounded-2xl border border-border bg-[#131318] p-6 flex flex-col hover:border-gold/30 hover:-translate-y-0.5 transition-all"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                    Switching from
                  </p>
                  <div className="font-display text-2xl text-foreground tracking-tight leading-snug">
                    {c.name}
                  </div>
                  <p className="mt-3 text-[13.5px] text-muted-foreground leading-relaxed flex-1">
                    {c.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm text-gold group-hover:underline">
                    See full comparison
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Direct importers */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border bg-[#0a0a0e]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-8 flex-wrap mb-10">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-emerald-400/5 border border-emerald-300/20 flex items-center justify-center shrink-0">
                <DownloadCloud className="h-5 w-5 text-emerald-300" aria-hidden />
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-300/80 mb-2">
                  Direct importers
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                  Four ways to bring every event over, without a copy step.
                </h2>
              </div>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Live sync where possible, bulk import where not. Every path respects the data at the source.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {DIRECT_IMPORTERS.map((d, i) => {
              const Icon = d.icon
              return (
                <Reveal key={d.name} delay={i * 60}>
                  <article className="h-full rounded-2xl border border-border bg-[#131318] p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/25 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-gold" aria-hidden />
                      </div>
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground">
                        <Clock className="h-3 w-3" aria-hidden />
                        {d.minutes} min
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-foreground tracking-tight">{d.name}</h3>
                    <p className="mt-1 text-[11px] font-mono text-gold/80 uppercase tracking-wider">
                      via {d.format}
                    </p>
                    <p className="mt-3 text-[13.5px] text-muted-foreground leading-relaxed flex-1">
                      {d.note}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center shrink-0">
              <Zap className="h-5 w-5 text-gold" aria-hidden />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-2">
                The migration, step-by-step
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Five steps. Under ten minutes, most of the time.
              </h2>
            </div>
          </div>
          <ol className="relative border-l border-border/70 ml-5 space-y-4">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.n} delay={i * 60}>
                <li className="relative pl-8">
                  <span className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-[#0c0c0f] border-2 border-gold flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden />
                  </span>
                  <div className="rounded-2xl border border-border bg-[#131318] p-5 md:p-6">
                    <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-[11px] text-gold/70 uppercase tracking-[0.25em]">
                          Step {t.n}
                        </span>
                        <h3 className="font-display text-xl md:text-2xl text-foreground tracking-tight">
                          {t.title}
                        </h3>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border border-border text-[10px] font-mono text-muted-foreground">
                        <Clock className="h-3 w-3" aria-hidden />
                        {t.minutes}
                      </span>
                    </div>
                    <p className="text-[14px] text-muted-foreground leading-relaxed">{t.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Keep / Gain / Leave */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border bg-[#0a0a0e]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              What changes · what doesn&apos;t
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              A short, honest accounting.
            </h2>
          </div>

          <div className="rounded-2xl border border-border overflow-hidden">
            <div className="grid grid-cols-4 gap-px bg-border text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground/80">
              <div className="bg-[#0c0c0f] p-4">Category</div>
              <div className="bg-[#0c0c0f] p-4 text-emerald-300/80 inline-flex items-center gap-1.5">
                <Check className="h-3 w-3" aria-hidden /> You keep
              </div>
              <div className="bg-[#0c0c0f] p-4 text-gold/80 inline-flex items-center gap-1.5">
                <Sparkles className="h-3 w-3" aria-hidden /> You gain
              </div>
              <div className="bg-[#0c0c0f] p-4 text-rose-300/80 inline-flex items-center gap-1.5">
                <Minus className="h-3 w-3" aria-hidden /> You leave behind
              </div>
            </div>
            {KGL.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-4 gap-px bg-border ${
                  i === KGL.length - 1 ? '' : 'border-b border-border/60'
                }`}
              >
                <div className="bg-[#131318] p-4 text-[13px] text-foreground/90 font-medium">
                  {row.label}
                </div>
                <div className="bg-[#131318] p-4 text-[13px] text-muted-foreground leading-relaxed">
                  {row.keep}
                </div>
                <div className="bg-[#131318] p-4 text-[13px] text-muted-foreground leading-relaxed">
                  {row.gain}
                </div>
                <div className="bg-[#131318] p-4 text-[13px] text-muted-foreground leading-relaxed">
                  {row.leave}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concierge for Enterprise */}
      <section id="concierge" className="py-16 md:py-24 px-5 md:px-8 border-b border-border scroll-mt-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              Enterprise · concierge migration
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.05]">
              Ship the migration with an engineer, not a CSM.
            </h2>
            <p className="mt-6 text-[15px] text-muted-foreground leading-relaxed max-w-xl">
              For teams of 20+ seats, we run a single 60-minute migration call with a Momenties engineer. We map your
              naming conventions, configure SSO end-to-end, and set up a pilot group before the full rollout. No third
              parties, no recorded transcripts sold back to you as a service.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/enterprise"
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors"
              >
                Book a concierge slot
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
              <Link
                href="/contact?subject=Sales%20%2F%20Enterprise"
                className="inline-flex items-center gap-2 h-11 px-5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Email the sales team
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/[0.04] to-transparent p-6 md:p-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold mb-4 inline-flex items-center gap-1.5">
              <Shield className="h-3 w-3" aria-hidden />
              What&apos;s included
            </p>
            <ul className="space-y-3">
              {CONCIERGE_CHECKLIST.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-foreground/90">
                  <Check className="h-4 w-4 text-gold mt-0.5 shrink-0" aria-hidden />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-border/70 flex items-start gap-3 text-[13px] text-muted-foreground">
              <MessageSquare className="h-4 w-4 text-gold/70 shrink-0 mt-0.5" aria-hidden />
              <span>
                Five concierge slots per week, worldwide. Usually booked two weeks out. For urgent cases, email{' '}
                <Link href="/contact?subject=Sales" className="text-gold hover:underline">
                  sales@momenties.app
                </Link>
                .
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-5 md:px-8 border-b border-border">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">
              Migration FAQ
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              The five things people ask us before switching.
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-border bg-[#131318] p-5 md:p-6 open:border-gold/30 open:bg-[#15151b]"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-[15px] font-medium text-foreground">
                  <span className="pr-4">{f.q}</span>
                  <span className="shrink-0 mt-1 w-6 h-6 rounded-full border border-border flex items-center justify-center text-muted-foreground group-open:rotate-45 transition-transform">
                    <X className="h-3 w-3 rotate-45" aria-hidden />
                  </span>
                </summary>
                <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ten minutes from here to a calendar you actually want to open."
        subtitle="Free to start, no card, no migration fee on any plan. Bring everything, lose nothing."
        primary={{ label: 'Start your migration', href: '/login' }}
        secondary={{ label: 'Talk to sales', href: '/enterprise' }}
      />
    </>
  )
}
