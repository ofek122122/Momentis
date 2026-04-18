import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Calendar, Clock, BarChart3, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tax Deadline Calendar — Never miss an estimated tax payment or filing deadline',
  description:
    'Self-employed professionals, freelancers, and business owners manage quarterly estimated tax payments, annual filing deadlines, payroll tax deposits, and state tax obligations simultaneously. A tax deadline calendar surfaces every deadline 30 days early so tax obligations are managed proactively instead of discovered in penalty notices.',
  alternates: { canonical: '/tax-deadline-calendar' },
  openGraph: {
    title: 'Tax Deadline Calendar — Momenties',
    description: 'Never miss an estimated tax payment or filing deadline with a proactive tax calendar.',
    url: '/tax-deadline-calendar',
    type: 'website',
  },
}

const FEATURES = [
  {
    icon: Calendar,
    title: 'Quarterly estimated taxes as recurring calendar events',
    desc: 'Quarterly estimated tax payments fall on April 15, June 15, September 15, and January 15. These are recurring calendar events for self-employed professionals, not optional reminders. A missed quarterly payment generates an underpayment penalty regardless of whether the annual return is filed correctly. All four dates are on the calendar before Q1 begins.',
  },
  {
    icon: Clock,
    title: '30-day prep blocks before every deadline',
    desc: 'A tax deadline on April 15 with no preparation block placed ahead of it arrives as a surprise. "Q1 estimated tax prep — march 20" placed 25 days before the payment deadline creates time to calculate income, gather deductible expenses, and initiate the payment. Deadlines discovered 3 days ahead produce rushed, error-prone tax work.',
  },
  {
    icon: BarChart3,
    title: 'Annual filing timeline with upstream milestones',
    desc: '"W-2s/1099s arrive — early february." "Gather deductions — february 15." "CPA meeting — march 1." "Review and sign return — march 15." "File by — april 15 or extension." Each upstream milestone placed on the calendar turns tax filing from a scramble into a managed process. Extension decision made in March, not April 14.',
  },
  {
    icon: Shield,
    title: 'State tax obligations tracked separately',
    desc: 'State tax deadlines don\'t always align with federal deadlines. Some states require quarterly estimated payments with different due dates. State payroll tax deposits may be monthly or semi-weekly. Track state and federal tax obligations as separate calendar entries. No state obligation missed because it was assumed to match the federal schedule.',
  },
]

const TAX_CALENDAR_ITEMS = [
  {
    deadline: 'January 15',
    obligation: 'Q4 estimated tax payment — previous year\'s fourth quarter income',
    prep: 'December 15: calculate Q4 income, determine payment amount, initiate transfer',
  },
  {
    deadline: 'January 31',
    obligation: 'W-2 and 1099 issuance deadline — distribute to contractors and employees',
    prep: 'January 15: gather all contractor payments, calculate withholding, prepare forms',
  },
  {
    deadline: 'April 15',
    obligation: 'Annual federal tax return OR extension request. Q1 estimated tax payment.',
    prep: 'March 1: all documents gathered, CPA meeting scheduled. March 15: review draft return',
  },
  {
    deadline: 'June 15',
    obligation: 'Q2 estimated tax payment — April 1 through May 31 income',
    prep: 'May 20: YTD income review, calculate Q2 payment, check for deductible Q2 expenses',
  },
  {
    deadline: 'September 15',
    obligation: 'Q3 estimated tax payment. Extended returns due if extension was filed.',
    prep: 'August 20: Q3 income totaled, estimated payment calculated, extended return prep begins',
  },
  {
    deadline: 'October 15',
    obligation: 'Extended return deadline — final filing date for extended federal returns',
    prep: 'September 15: all amendments gathered, final CPA review, return ready to sign',
  },
]

const SELF_EMPLOYED_ITEMS = [
  'Q1-Q4 estimated federal tax payments',
  'Annual federal return (April 15 or extension)',
  'State income tax return deadlines',
  'State quarterly estimated payments',
  'Self-employment tax calculations (Schedule SE)',
  'Retirement account contributions (SEP-IRA, Solo 401k)',
  'W-2/1099 issuance deadlines (Jan 31)',
  'Business personal property tax deadlines',
]

export default function TaxDeadlineCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Tax Deadline Calendar"
        title={
          <>
            Every tax deadline visible.
            <br />
            <em className="not-italic text-gold">Penalties prevented.</em>
          </>
        }
        lede="Self-employed professionals and business owners manage quarterly estimated tax payments, annual filing deadlines, payroll obligations, and state tax requirements simultaneously — without an employer to handle withholding. A tax deadline calendar places every obligation on the calendar 30 days before it's due so tax management is proactive instead of reactive. Here's how to build one that prevents penalties and surprises."
        crumbs={[{ label: 'Tax Deadline Calendar' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Try free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/annual-planning-calendar"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            Annual planning calendar
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Four principles</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">How Momenties supports proactive tax deadline management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Annual tax calendar</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Key federal tax dates and what to do 30 days before each.</h2>
          </Reveal>
          <div className="space-y-3">
            {TAX_CALENDAR_ITEMS.map((item, i) => (
              <Reveal key={item.deadline} delay={i * 40}>
                <div className="rounded-xl border border-border lux-card p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-sm font-medium text-foreground">{item.obligation}</h3>
                    <span className="font-mono text-[10px] text-gold/60 uppercase tracking-wide shrink-0">{item.deadline}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.prep}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Self-employed tax calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every obligation for self-employed professionals and business owners.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {SELF_EMPLOYED_ITEMS.map((item) => (
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
        title="Every tax deadline visible. Penalties prevented."
        subtitle="Quarterly estimated tax reminders, annual filing milestones, and state tax deadline tracking. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Annual planning calendar', href: '/annual-planning-calendar' }}
      />
    </>
  )
}
