import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Medical Device Sales Reps — CMSR CE renewal, product training certification, and medical device credential management',
  description:
    'Medical device sales representatives manage HIDA CMSR or manufacturer product certifications, hospital credentialing renewals, annual compliance training (AdvaMed code), continuing education for clinical knowledge, and professional development simultaneously. Momenties tracks CE by credential, surfaces renewal deadlines 90 days early, and manages the full medical device sales credential calendar.',
  alternates: { canonical: '/for/medical-device-sales-reps' },
  openGraph: {
    title: 'Momenties for Medical Device Sales Reps',
    description: 'CMSR CE renewal, product training certification, and medical device credential management.',
    url: '/for/medical-device-sales-reps',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CMSR certification and product training',
    desc: 'HIDA Certified Medical Sales Representative (CMSR) requires CE for renewal. Manufacturer product certifications require periodic recertification training on product-specific timelines. Hospital credentialing programs (Reptrax, Vendormate, Status Blue) each have independent annual or biennial renewal requirements. CMSR CE tracked separately from product training — each credential category maintained independently.',
  },
  {
    icon: Clock,
    title: 'Medical device rep multi-credential renewal calendar',
    desc: '"CMSR — HIDA, renewal cycle CE." "Hospital credentialing programs — Reptrax, Vendormate, annual." "Product certification renewals — manufacturer-specific cycles." "Annual compliance training — AdvaMed code of ethics." "HIPAA and facility access CE — annual." "MDIC membership — annual." All medical device rep credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Hospital credentialing program compliance analytics',
    desc: 'Medical device sales reps typically carry credentials in 5-15 hospital systems, each with an independent credentialing vendor (Reptrax, Vendormate, Status Blue, IntelliCentrics) on annual renewal cycles that do not align. Missing a single hospital credentialing renewal means loss of facility access. Each hospital credentialing system tracked independently with 90-day renewal alerts before access lapses.',
  },
  {
    icon: Users,
    title: 'HIDA, AdvaMed, and medical device professional involvement',
    desc: '"HIDA Annual Conference — fall." "AdvaMed MedTech Conference — october." "Regional medical device sales training." "Manufacturer national sales meeting — annual." "Clinical specialty conference attendance — per territory." All medical device professional development on calendar. AdvaMed compliance training placed annually as mandatory CE before conference season.',
  },
]

const DEVICE_WORKFLOW = [
  { time: 'Annual planning', action: 'CMSR renewal CE cycle, all hospital credentialing renewals (loaded by expiration date), product certification renewal dates, annual AdvaMed compliance training, annual HIPAA and facility compliance training, HIDA Annual Conference, and HIDA membership all loaded in January. Hospital credentialing renewals placed with 90-day lead time alerts.' },
  { time: 'CE completion', action: '"HIDA-approved — clinical anatomy for cardiovascular device representatives, 2 CE, CMSR applicable." Tagged by applicable credential. CMSR counter updates. If AdvaMed compliance category applies, compliance counter updates. Hospital credentialing CE logged separately. Each credential tracked independently.' },
  { time: 'Hospital credentialing', action: '"Reptrax credentialing renewal — Hospital X, annual, expiration march 15." "Vendormate renewal — Hospital Y, annual, expiration june 3." Each hospital credentialing system tracked on its individual expiration date. Renewal alert placed 90 days before expiration — not when the hospital sends an expiration notice. Loss of facility access from lapsed credentialing costs territory revenue.' },
  { time: 'Compliance training', action: '"Annual AdvaMed code of ethics training — January, mandatory compliance." "Annual HIPAA refresher — February, facility access requirement." Compliance training placed as mandatory annual events in January. AdvaMed code compliance training documented before industry conference attendance. HIPAA training confirmed before hospital credentialing renewal submission.' },
  { time: 'Renewal audit', action: 'Analytics: CMSR CE current? All hospital credentialing programs current? Product certifications valid? AdvaMed compliance training done? HIPAA training documented? HIDA membership active? Complete medical device rep credential audit quarterly — hospital credentialing programs expire on rolling dates, requiring ongoing rather than annual audit.' },
]

export default function ForMedicalDeviceSalesRepsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Medical Device Sales Reps"
        title={
          <>
            CMSR and hospital credentialing maintained.
            <br />
            <em className="not-italic text-gold">No facility access lapsed.</em>
          </>
        }
        lede="Medical device sales representatives manage HIDA CMSR certification CE, 5-15 independent hospital credentialing programs each with annual renewal deadlines, manufacturer product certification recertification cycles, mandatory AdvaMed compliance training, and professional development simultaneously. Momenties tracks each credential independently, surfaces renewal deadlines 90 days early, and manages the full medical device rep credential calendar in one view."
        crumbs={[{ label: 'For Medical Device Sales Reps' }]}
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
            Credential analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No credit card</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How medical device sales reps use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for medical device rep credential management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Medical device rep credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Credentials managed across hospital systems with rolling expiration dates.</h2>
          </Reveal>
          <div className="space-y-3">
            {DEVICE_WORKFLOW.map((step, i) => (
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

      <section className="py-16 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-xl border border-border lux-card p-8">
              <div className="flex items-center gap-1 mb-4">
                {[0,1,2,3,4].map((s) => <Star key={s} className="h-4 w-4 fill-gold text-gold" />)}
              </div>
              <p className="font-display text-xl text-foreground/90 leading-snug mb-5">
                &ldquo;I cover 11 hospitals and each one uses a different credentialing vendor — Reptrax, Vendormate, Status Blue — all on different annual cycles. Losing access to a single facility on a day with a scheduled case is a real problem. Before Momenties I was tracking 11 expiration dates, my CMSR CE, two product certifications, and annual compliance training with a combination of email reminders and a spreadsheet. Now everything is in one calendar with 90-day alerts. I haven&apos;t missed a single hospital renewal in 18 months.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">N</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Nathan B., CMSR</div>
                  <div className="text-xs text-muted-foreground">Medical device sales representative, cardiovascular and orthopedic territory</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Credentials tracked</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All medical device rep credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'HIDA CMSR certification CE — renewal cycle',
                'Hospital credentialing programs — per facility, annual',
                'Reptrax and Vendormate renewal dates — rolling',
                'Manufacturer product certifications — device-specific',
                'Annual AdvaMed code of ethics training',
                'Annual HIPAA and facility compliance CE',
                'HIDA and AdvaMed membership renewal',
                'Territory-specific specialty conference CE',
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
        title="CMSR and hospital credentialing maintained."
        subtitle="Hospital access credential calendar, product certification tracking, and medical device professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'Credential analytics', href: '/features/analytics' }}
      />
    </>
  )
}
