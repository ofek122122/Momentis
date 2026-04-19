import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Momenties for Clinical Ethicists — HEC-C CE renewal, clinical ethicist credential management',
  description:
    'Clinical ethicists manage ASBH HEC-C certification CE renewal, underlying professional licensure CE (MD, JD, PhD, RN), mandatory ethics consultation CE categories, annual ethics committee education requirements, IRB annual training, and professional development simultaneously. Momenties tracks CE by certification, surfaces renewal deadlines 90 days early, and manages the full clinical ethicist credential calendar.',
  alternates: { canonical: '/for/clinical-ethicists' },
  openGraph: {
    title: 'Momenties for Clinical Ethicists',
    description: 'HEC-C CE renewal, clinical ethicist credential management.',
    url: '/for/clinical-ethicists',
    type: 'website',
  },
}

const USE_CASES = [
  {
    icon: Shield,
    title: 'CE tracking for HEC-C certification and underlying professional licensure',
    desc: 'American Society for Bioethics and Humanities (ASBH) Healthcare Ethics Consultant-Certified (HEC-C) requires 20 CE hours every 2 years in healthcare ethics content. HEC-C CE must be in healthcare ethics — general professional CE from the underlying credential (MD, JD, RN, PhD) does not automatically satisfy HEC-C requirements. Underlying professional licensure runs on an independent cycle with profession-specific content requirements. HEC-C 2-year counter and underlying licensure tracked independently.',
  },
  {
    icon: Clock,
    title: 'Clinical ethicist multi-credential renewal calendar',
    desc: '"HEC-C — ASBH, 20 CE/2 years." "Underlying professional licensure — varies by credential." "Ethics consultation methodology CE — mandatory HEC-C category." "Annual ethics committee education program." "IRB annual training — if serving on IRB." "ASBH membership — annual." All clinical ethicist credentials with 90-day advance alerts.',
  },
  {
    icon: BarChart3,
    title: 'Ethics consultation methodology and committee education analytics',
    desc: 'HEC-C renewal requires CE specifically in ethics consultation methodology — not just any ethics content. Annual ethics committee education program for clinical ethics consultants at most institutions covers regulatory updates (CMS, Joint Commission), case review methodology, and policy review — tracked as institutional requirement separate from HEC-C CE. IRB annual training for clinical ethicists serving on IRBs tracked independently. CITI annual recertification placed separately if applicable.',
  },
  {
    icon: Users,
    title: 'ASBH, ACPE, and clinical ethics professional involvement',
    desc: '"ASBH Annual Conference — fall." "ACPE Annual Ethics Consultation Conference." "NACHC Annual Meeting (community health)." "Joint Commission ethics standard annual review." "AMA ethics opinion updates CE." "Palliative care ethics CE." "AI and algorithmic decision-making ethics CE." "Pediatric ethics and adolescent consent CE." All clinical ethics professional development on calendar. ASBH and ACPE conference CE tagged by HEC-C and underlying credential applicability.',
  },
]

const CE_WORKFLOW = [
  { time: 'Annual planning', action: 'HEC-C 2-year 20-CE pace (annualized to 10 CE/year), ethics consultation methodology mandatory category pace, underlying licensure CE cycle, annual ethics committee education, IRB annual training (if applicable), ASBH Annual Conference, and ASBH membership all loaded in January. HEC-C cumulative counter and underlying licensure CE tracked independently.' },
  { time: 'CE completion', action: '"ASBH-approved — ethics consultation in the ICU: surrogate decision-making, conflicts between patient goals and family preferences, and ethics consultant facilitation techniques, 3 CE, HEC-C applicable — ethics consultation domain." Tagged by applicable certification and HEC-C content category. If mandatory consultation methodology category applies, that counter updates. Underlying licensure CE updates separately if applicable.' },
  { time: 'Committee education', action: '"Annual ethics committee education — Joint Commission ethics standard updates, CMS informed consent regulations, and case methodology review, Q1." Annual ethics committee education placed as an institutional requirement for ethics committee members and consultants. Joint Commission standard updates and CMS regulation changes require documented annual review. Placed as Q1 institutional milestone separate from HEC-C CE documentation.' },
  { time: 'IRB training', action: '"CITI annual recertification — IRB member training, human subjects protection, Q1." Annual CITI recertification placed for clinical ethicists serving on IRBs. IRB membership requires current CITI certification — most institutions now require annual renewal for active IRB members. CITI recertification placed as a separate mandatory requirement from HEC-C CE and underlying licensure.' },
  { time: 'Renewal audit', action: 'Analytics: HEC-C CE on pace (cumulative toward 20/2yr)? Ethics consultation methodology mandatory category satisfied? Underlying licensure CE adequate? Annual ethics committee education documented? IRB CITI recertification current? ASBH membership active? Complete clinical ethicist credential audit 90 days before HEC-C renewal. ASBH, underlying licensure board, and institutional documentation maintained separately.' },
]

export default function ForClinicalEthicistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Momenties for Clinical Ethicists"
        title={
          <>
            HEC-C certification and underlying licensure maintained.
            <br />
            <em className="not-italic text-gold">Consultation methodology CE and ethics committee education current.</em>
          </>
        }
        lede="Clinical ethicists manage ASBH HEC-C certification with 20 CE hours every 2 years in healthcare ethics content including mandatory ethics consultation methodology, underlying professional licensure on an independent cycle, annual ethics committee education programs, IRB annual training for committee members, and professional development simultaneously. Momenties tracks CE by clinical ethics credential, surfaces renewal deadlines 90 days early, and manages the full clinical ethicist credential calendar in one view."
        crumbs={[{ label: 'For Clinical Ethicists' }]}
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">How clinical ethicists use Momenties</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four features for clinical ethicist credential and CE management.</h2>
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
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Clinical ethicist credential rhythm</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">CE and credentials managed through every HEC-C cycle, consultation methodology requirement, and committee education obligation.</h2>
          </Reveal>
          <div className="space-y-3">
            {CE_WORKFLOW.map((step, i) => (
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
                &ldquo;I have HEC-C from ASBH and I maintain my RN licensure because it opens doors in clinical ethics consultation at bedside. They renew on completely different cycles. HEC-C requires healthcare ethics CE specifically — my nursing CE doesn&apos;t count toward it. I also chair our ethics committee, which has an annual education requirement that is institutional, not ASBH. And I serve on our IRB, which requires annual CITI recertification. I was managing four separate credential obligations using four different systems. What I actually needed was one view that showed me what was coming due in the next 90 days across all of them. That&apos;s what Momenties gives me.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">E</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Ellen R., RN, PhD, HEC-C</div>
                  <div className="text-xs text-muted-foreground">Clinical ethicist, academic medical center ethics program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">All clinical ethicist credentials on one calendar.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ASBH HEC-C certification CE — 20 hours/2 years',
                'Ethics consultation methodology CE — mandatory HEC-C category',
                'Underlying professional licensure CE — varies by credential',
                'Annual ethics committee education program — institutional',
                'IRB CITI annual recertification — for IRB members',
                'Joint Commission ethics standard annual review',
                'ASBH membership renewal — annual',
                'ASBH and ACPE conference CE planning by HEC-C domain applicability',
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
        title="HEC-C certification and underlying licensure maintained."
        subtitle="CE tracking by credential, consultation methodology analytics, ethics committee education calendar, and clinical ethics professional development. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'CE analytics', href: '/features/analytics' }}
      />
    </>
  )
}
