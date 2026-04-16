import type { ReactNode } from 'react'
import { Breadcrumbs, type Crumb } from './Breadcrumbs'

export function PageHero({
  eyebrow,
  title,
  lede,
  crumbs,
  children,
}: {
  eyebrow?: string
  title: ReactNode
  lede?: ReactNode
  crumbs?: Crumb[]
  children?: ReactNode
}) {
  return (
    <section className="relative border-b border-border overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 0%, rgba(197,163,92,0.10) 0%, rgba(197,163,92,0) 60%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dot-grid opacity-30"
      />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-14 md:pb-20">
        {crumbs && <Breadcrumbs items={crumbs} />}
        {eyebrow && (
          <p className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.25em] text-gold/80 mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="animate-fade-up animate-fade-up-2 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight text-foreground max-w-3xl">
          {title}
        </h1>
        {lede && (
          <p className="animate-fade-up animate-fade-up-3 mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {lede}
          </p>
        )}
        {children && <div className="animate-fade-up animate-fade-up-4 mt-8">{children}</div>}
      </div>
    </section>
  )
}
