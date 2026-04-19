import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Imaging Informatics Professionals — CIIP CE renewal, imaging informatics credential management',
  description:
    'Imaging informatics professionals manage SIIM CIIP certification 30CE/3yr renewal, underlying radiology or IT professional licensure CE, PACS/RIS vendor training annual certification, HL7/FHIR annual standards updates, HIPAA annual training, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full imaging informatics credential calendar.',
  alternates: { canonical: '/for/imaging-informatics-professionals' },
  openGraph: {
    title: 'Momenties for Imaging Informatics Professionals',
    description: 'CIIP CE renewal, imaging informatics credential management.',
    url: '/for/imaging-informatics-professionals',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for CIIP certification and underlying licensure renewal',
    desc: 'Society for Imaging Informatics in Medicine (SIIM) Certified Imaging Informatics Professional (CIIP) requires 30 CE hours every 3 years in imaging informatics content. Underlying professional credentials — ARRT registration, IT certification, or clinical credential — run on independent renewal cycles. CIIP CE must be in imaging informatics content: PACS, teleradiology, digital imaging workflow, and clinical decision support. CIIP 3-year CE counter and underlying licensure tracked independently.',
  },
  {
    icon: Clock,
    title: 'Imaging informatics multi-credential renewal calendar',
    desc: '"CIIP — SIIM, 30 CE/3 years." "Underlying ARRT or IT certification CE — independent cycle." "PACS/RIS vendor certification — annual or biennial per vendor." "HL7/FHIR standards update training — annual." "Annual HIPAA training — institutional requirement." "DICOM standards update training." "SIIM membership — annual." All imaging informatics credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'PACS vendor certification and interoperability standards analytics',
    desc: 'Imaging informatics professionals maintaining PACS systems require vendor-specific service certifications — Sectra, Intelerad, Change Healthcare, GE Centricity — each with independent renewal cycles separate from CIIP CE. Annual HL7/FHIR standards updates tracked as a professional development requirement for informatics staff responsible for interface management. Annual DICOM conformance statement review placed as a separate technical requirement. Each tracked independently.',
  },
  {
    icon: Users,
    title: 'SIIM, RSNA, and imaging informatics professional involvement',
    desc: '"SIIM Annual Meeting — june." "RSNA Annual Meeting — november." "HIMSS Annual Conference." "HL7 Working Group Meetings — quarterly." "DICOM Working Group participation CE." "IHE Connectathon CE." "AI in medical imaging CE — FDA guidance updates." "Cloud PACS and VNA migration CE." All imaging informatics professional development on calendar. SIIM and RSNA conference CE tagged by CIIP and underlying credential applicability.',
  },
]

const II_WORKFLOW = [
  { time: 'Annual planning', action: 'CIIP 3-year 30-CE pace (annualized to 10 CE/year), underlying credential CE cycle, PACS vendor certification renewal schedule, HL7/FHIR annual update training, annual HIPAA training, SIIM Annual Meeting, and SIIM membership all loaded in January. CIIP cumulative counter and underlying credential CE tracked independently.' },
  { time: 'CE completion', action: '"SIIM-approved — AI integration in radiology workflow: algorithm validation, structured reporting, and radiologist alert fatigue management, 3 CE, CIIP applicable." CIIP counter updates (cumulative toward 30/3yr target). If underlying ARRT CE also qualifies, that counter updates. DICOM or HL7 standards CE logged with standards version applicability noted.' },
  { time: 'Vendor certification', action: '"Sectra PACS service certification — annual renewal, Q2." PACS vendor certifications placed on independent schedules per vendor relationship. Service authorization and advanced support access for enterprise PACS systems requires current vendor certification. Annual Sectra, Intelerad, or GE renewal placed separately — each vendor has its own certification cycle and renewal process.' },
  { time: 'Standards training', action: '"HL7 FHIR R4 annual update training — new implementation guide versions and IHE profile updates, Q1." Annual HL7/FHIR standards update training placed as a professional development requirement for informatics staff managing clinical interfaces. FHIR R4 and R5 transition CE placed separately from CIIP CE. Annual DICOM standards update placed independently — imaging informatics professionals track both HL7 and DICOM update cycles.' },
  { time: 'Renewal audit', action: 'Analytics: CIIP CE on pace (cumulative toward 30/3yr)? Underlying credential CE adequate? PACS vendor certifications current? HL7/FHIR annual training done? Annual HIPAA training completed? SIIM membership active? Complete imaging informatics credential audit 90 days before CIIP renewal. SIIM, underlying credential board, and institutional documentation maintained separately.' },
]

export default function ForImagingInformaticsProfessionalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Imaging Informatics Professionals"
        title={
          <>
            CIIP certification and underlying licensure maintained.
            <br />
            <em className="not-italic text-gold">PACS vendor certs and HL7 training never lapsed.</em>
          </>
        }
        lede="Imaging informatics professionals manage SIIM CIIP certification with 30 CE hours every 3 years in imaging informatics content, underlying radiology or IT credential on an independent cycle, PACS/RIS vendor service certifications per vendor on independent annual or biennial cycles, annual HL7/FHIR standards update training, annual HIPAA compliance training, and professional development simultaneously. Momenties tracks CE by imaging informatics credential, surfaces renewal deadlines 90 days early, and manages the full imaging informatics credential calendar in one view."
        crumbs={[{ label: 'For Imaging Informatics Professionals' }]}
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
            CE analytics
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Free forever · No patient data shared with AI · HIPAA-aware</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How imaging informatics professionals use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for imaging informatics credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Imaging informatics credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every CIIP cycle, PACS vendor certification, and standards training obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {II_WORKFLOW.map((step, i) => (
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
                &ldquo;My CIIP is a 3-year cycle but my underlying ARRT registration is annual. I have Sectra and Intelerad PACS certifications, each on a different renewal schedule. We do annual HL7 training because our interface team maintains 40 active interfaces and the standards keep changing. Annual HIPAA is institutional. What made it complicated was that these are four completely different types of credentials — a professional certification, a technical registration, vendor certifications, and institutional training — and I was tracking them in four different places. Momenties treated them all as calendar events with alerts, which is ultimately all I needed. I check one place now.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">P</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Patricia L., RT(R), CIIP</div>
                  <div className="text-xs text-muted-foreground">Imaging informatics professional, health system radiology IT</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All imaging informatics professional credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'SIIM CIIP certification CE — 30 hours/3 years',
                'Underlying ARRT or IT certification CE — independent cycle',
                'PACS/RIS vendor service certifications — per vendor, independent cycles',
                'Annual HL7/FHIR standards update training',
                'Annual HIPAA compliance training — institutional',
                'DICOM standards annual update review',
                'SIIM membership renewal — annual',
                'SIIM and RSNA conference CE planning by CIIP applicability',
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
        title="CIIP certification and underlying licensure maintained."
        subtitle="CE tracking by credential, PACS vendor certification calendar, HL7/FHIR training, and imaging informatics professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
