'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Users, Clock, DollarSign, Sparkles, ArrowUpRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Methodology constants — shown on-page under "Assumptions".
 * Savings come from two sources:
 *   - a time-per-event saving (avg 2.3 min per scheduled event),
 *   - a context-switching overhead saving (22% of scheduling time on average).
 * See /pricing/calculator#methodology.
 */
const WEEKS_PER_YEAR = 47 // deliberately conservative: excludes 5 weeks of leave
const CONTEXT_SWITCH_REDUCTION = 0.22
const TOOL_CONSOLIDATION_WEEKLY_SAVING_MIN = 9 // replaces 2–3 tools, saves ~9 min/week

const PRO_PRICE_PER_USER_MONTH = 8
const TEAM_PRICE_PER_USER_MONTH = 12
const ENTERPRISE_MIN_USERS = 50

function currency(n: number): string {
  if (!Number.isFinite(n)) return '$0'
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 10_000) return `$${Math.round(n / 1000)}k`
  return `$${Math.round(n).toLocaleString()}`
}

function hoursPretty(h: number): string {
  if (h >= 1000) return `${Math.round(h / 1000)}k hrs`
  if (h >= 100) return `${Math.round(h)} hrs`
  return `${h.toFixed(1)} hrs`
}

function pickPlan(teamSize: number): 'Pro' | 'Team' | 'Enterprise' {
  if (teamSize >= ENTERPRISE_MIN_USERS) return 'Enterprise'
  if (teamSize >= 2) return 'Team'
  return 'Pro'
}

function pricePerUserMonth(plan: 'Pro' | 'Team' | 'Enterprise'): number {
  if (plan === 'Pro') return PRO_PRICE_PER_USER_MONTH
  if (plan === 'Team') return TEAM_PRICE_PER_USER_MONTH
  return 18 // enterprise list price anchor for the calc
}

type Result = {
  weeklyHoursSavedPerPerson: number
  yearlyHoursSavedPerPerson: number
  teamYearlyHoursSaved: number
  teamYearlyDollarSaved: number
  momentiesAnnualCost: number
  roiMultiple: number
  paybackDays: number
  plan: 'Pro' | 'Team' | 'Enterprise'
}

function calculate(hoursPerWeek: number, hourlyRate: number, teamSize: number): Result {
  // Time reclaimed per person per week
  const contextReclaim = hoursPerWeek * CONTEXT_SWITCH_REDUCTION
  const consolidationReclaim = TOOL_CONSOLIDATION_WEEKLY_SAVING_MIN / 60
  const weeklyHoursSavedPerPerson = contextReclaim + consolidationReclaim
  const yearlyHoursSavedPerPerson = weeklyHoursSavedPerPerson * WEEKS_PER_YEAR

  const teamYearlyHoursSaved = yearlyHoursSavedPerPerson * teamSize
  const teamYearlyDollarSaved = teamYearlyHoursSaved * hourlyRate

  const plan = pickPlan(teamSize)
  const perUserMonth = pricePerUserMonth(plan)
  const momentiesAnnualCost = perUserMonth * 12 * teamSize

  const roiMultiple = momentiesAnnualCost > 0 ? teamYearlyDollarSaved / momentiesAnnualCost : 0
  // Days to payback = (Momenties annual cost / daily dollar savings)
  const dailySaving = teamYearlyDollarSaved / 365
  const paybackDays = dailySaving > 0 ? momentiesAnnualCost / dailySaving : Infinity

  return {
    weeklyHoursSavedPerPerson,
    yearlyHoursSavedPerPerson,
    teamYearlyHoursSaved,
    teamYearlyDollarSaved,
    momentiesAnnualCost,
    roiMultiple,
    paybackDays,
    plan,
  }
}

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  prefix = '',
  suffix = '',
  icon,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step?: number
  prefix?: string
  suffix?: string
  icon: React.ReactNode
  onChange: (v: number) => void
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <label className="flex items-center gap-2 text-sm text-foreground/90">
          <span className="text-gold">{icon}</span>
          {label}
        </label>
        <span className="font-mono text-[13px] text-gold">
          {prefix}
          {value.toLocaleString()}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="roi-slider w-full"
        aria-label={label}
      />
      <div className="flex justify-between mt-1 text-[10px] font-mono text-muted-foreground/50">
        <span>
          {prefix}
          {min}
          {suffix}
        </span>
        <span>
          {prefix}
          {max}
          {suffix}
        </span>
      </div>
    </div>
  )
}

function OutputTile({
  label,
  value,
  hint,
  tone = 'gold',
}: {
  label: string
  value: string
  hint?: string
  tone?: 'gold' | 'emerald' | 'muted'
}) {
  return (
    <div className="rounded-2xl border border-border bg-[#0c0c0f] p-5">
      <p className="text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground/80">{label}</p>
      <div
        className={cn(
          'mt-2 font-display font-semibold leading-none',
          tone === 'gold' ? 'text-gold' : tone === 'emerald' ? 'text-emerald-300' : 'text-foreground',
          value.length > 8 ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl'
        )}
      >
        {value}
      </div>
      {hint && <p className="mt-2 text-[12px] text-muted-foreground leading-snug">{hint}</p>}
    </div>
  )
}

export function ROICalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(5)
  const [hourlyRate, setHourlyRate] = useState(100)
  const [teamSize, setTeamSize] = useState(8)

  const r = useMemo(
    () => calculate(hoursPerWeek, hourlyRate, teamSize),
    [hoursPerWeek, hourlyRate, teamSize]
  )

  const paybackLabel =
    r.paybackDays < 1
      ? 'Same day'
      : r.paybackDays < 14
        ? `${Math.round(r.paybackDays)} days`
        : r.paybackDays < 60
          ? `${Math.round(r.paybackDays / 7)} weeks`
          : `${(r.paybackDays / 30).toFixed(1)} months`

  return (
    <div className="grid lg:grid-cols-5 gap-5">
      {/* Inputs */}
      <div className="lg:col-span-2 rounded-2xl border border-border bg-[#131318] p-6 md:p-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70 mb-5">
          Your inputs · drag the sliders
        </p>
        <div className="space-y-7">
          <Slider
            label="Hours/week spent scheduling per person"
            value={hoursPerWeek}
            min={1}
            max={20}
            step={0.5}
            suffix=" hrs"
            icon={<Clock className="h-4 w-4" aria-hidden />}
            onChange={setHoursPerWeek}
          />
          <Slider
            label="Loaded hourly cost per person"
            value={hourlyRate}
            min={25}
            max={500}
            step={5}
            prefix="$"
            icon={<DollarSign className="h-4 w-4" aria-hidden />}
            onChange={setHourlyRate}
          />
          <Slider
            label="Team size"
            value={teamSize}
            min={1}
            max={250}
            step={1}
            icon={<Users className="h-4 w-4" aria-hidden />}
            onChange={setTeamSize}
          />
        </div>

        <div className="mt-7 pt-5 border-t border-border flex items-center justify-between gap-4 text-[12px] font-mono text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-gold" aria-hidden />
            Assumptions are conservative.
          </span>
          <a href="#methodology" className="text-gold hover:underline">
            See methodology →
          </a>
        </div>
      </div>

      {/* Outputs */}
      <div className="lg:col-span-3 rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/[0.06] via-transparent to-transparent p-6 md:p-8 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(60% 60% at 100% 0%, rgba(197,163,92,0.12) 0%, rgba(197,163,92,0) 60%)',
          }}
        />
        <p className="relative font-mono text-[10px] uppercase tracking-[0.25em] text-gold mb-5">
          What you get back · live
        </p>
        <div className="relative grid sm:grid-cols-2 gap-4">
          <OutputTile
            label="Hours saved / year (team)"
            value={hoursPretty(r.teamYearlyHoursSaved)}
            hint={`${r.weeklyHoursSavedPerPerson.toFixed(1)} hrs/week per person`}
          />
          <OutputTile
            label="Dollars saved / year (team)"
            value={currency(r.teamYearlyDollarSaved)}
            hint={`At ${currency(hourlyRate)}/hr loaded cost`}
          />
          <OutputTile
            label="ROI multiple"
            value={`${r.roiMultiple >= 1 ? r.roiMultiple.toFixed(1) : r.roiMultiple.toFixed(2)}×`}
            hint={`On ${currency(r.momentiesAnnualCost)} annual cost`}
            tone="emerald"
          />
          <OutputTile
            label="Payback period"
            value={paybackLabel}
            hint={`Recommended plan: ${r.plan}`}
            tone="emerald"
          />
        </div>

        <div className="relative mt-6 rounded-xl border border-border bg-[#0c0c0f] p-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center">
              <Check className="h-4 w-4 text-gold" aria-hidden />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                {r.plan === 'Pro'
                  ? 'Start with Pro.'
                  : r.plan === 'Team'
                    ? 'Team plan fits your size.'
                    : 'Talk to us about Enterprise.'}
              </p>
              <p className="mt-1 text-[13px] text-muted-foreground">
                {r.plan === 'Pro'
                  ? `$${PRO_PRICE_PER_USER_MONTH}/month per user. Cancel anytime, no card needed to try.`
                  : r.plan === 'Team'
                    ? `$${TEAM_PRICE_PER_USER_MONTH}/month per user. Shared calendars, scoped links, 14-day refund.`
                    : `Custom pricing, SSO, audit logs, dedicated support. Includes a 30-day pilot.`}
              </p>
            </div>
            <Link
              href={r.plan === 'Enterprise' ? '/enterprise' : '/pricing'}
              className="inline-flex items-center gap-1.5 h-9 px-4 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-colors whitespace-nowrap"
            >
              {r.plan === 'Enterprise' ? 'Contact sales' : 'See plans'}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
