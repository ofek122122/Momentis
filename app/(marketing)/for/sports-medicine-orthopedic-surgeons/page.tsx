import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sports Medicine Orthopedic Surgeon CME Calendar — ABOS MOC, ACL CE, shoulder instability CE, return-to-sport CE, biologics CE',
  description:
    'Sports medicine orthopedic surgeons managing ABOS primary MOC and ABOS subspecialty certificate in orthopaedic sports medicine track annual ACL reconstruction CE (BEAR implant FDA 2024 bridge-enhanced repair, quadriceps tendon versus patellar tendon versus hamstring graft 10-year outcomes STABILITY trial, double-bundle ACL CE), shoulder instability CE (Latarjet versus Bankart INSTAB trial 5-year CE, remplissage technique CE, arthroscopic versus open Latarjet comparative outcomes), and biologics CE (PRP versus corticosteroid meta-analysis 2024, bone marrow aspirate CE for cartilage repair, FDA-cleared orthobiologics versus investigational CE). Momenties structures the full CME calendar so every deadline is visible before the renewal window closes.',
  alternates: { canonical: '/for/sports-medicine-orthopedic-surgeons' },
  openGraph: {
    title: 'Sports Medicine Orthopedic Surgeon CME Calendar',
    description: 'ABOS MOC, ACL CE, shoulder instability CE, return-to-sport protocols, and orthobiologics CE — one structured calendar.',
    url: '/for/sports-medicine-orthopedic-surgeons',
    type: 'website',
  },
}

const CHALLENGES = [
  {
    icon: Shield,
    title: 'ABOS primary orthopaedics MOC (10-year cycle) + ABOS subspecialty certificate in orthopaedic sports medicine — separate exam cycle, separate CE requirements',
    desc: 'Sports medicine orthopedic surgeons hold ABOS primary orthopaedic surgery certification (10-year cycle) and many pursue the ABOS Certificate of Added Qualification in Orthopaedic Sports Medicine, which also requires a separate 10-year recertification cycle with its own Part III examination. The ABOS MOC program requires 120 CME credits per 10-year cycle for primary certification, and the Sports Medicine CAQ adds requirements for sports medicine-specific CME content. AAOS membership also requires compliance with AAOS CME credit documentation. A CME calendar that ignores the Sports Medicine CAQ cycle timing relative to the primary ABOS cycle risks having both exams fall in adjacent years without adequate preparation time. The AOSSM (American Orthopaedic Society for Sports Medicine) annual meeting provides the largest single-event block of sports medicine-specific CME. Momenties tracks primary ABOS cycle and Sports Medicine CAQ cycle simultaneously.',
  },
  {
    icon: Clock,
    title: 'Annual ACL CE — BEAR bridge-enhanced repair FDA 2024, STABILITY double-bundle graft comparison, return-to-sport criteria update',
    desc: 'ACL reconstruction CE requires annual review as graft selection data matures and biological repair options emerge. BEAR implant CE: FDA 510(k) clearance 2023 for BEAR-MOON implant for primary ACL repair bridge-enhanced — CE on patient selection (complete midsubstance tear, bone tunnel preservation, age 14-35, within 50 days of injury), 2-year STABILITY outcomes comparable (IKDC 84% versus 85% ACLR, reinjury 14% versus 10% — CE on informed consent data). Graft selection CE: STABILITY2 trial — quadriceps tendon versus bone-patellar tendon-bone, 2-year reinjury rate equivalent (3.6% versus 4.5%), patient-reported outcomes equivalent — CE on graft selection algorithm. Double-bundle ACL CE: DB versus SB ACLR — rotational stability superior with DB (pivot shift grade 0-1: 91% versus 83%), tunnel positioning CE. Return-to-sport criteria CE: 2024 consensus (psychological readiness LSI >90%, Limb Symmetry Index quadriceps/hamstring, 9-month minimum CE evidence update).',
  },
  {
    icon: BarChart3,
    title: 'Annual shoulder instability CE — Latarjet versus Bankart INSTAB trial, remplissage technique outcomes, Hill-Sachs engagement CE',
    desc: 'Shoulder instability CE updates annually as long-term Latarjet versus Bankart comparative data matures. Latarjet versus Bankart CE: INSTAB international RCT 5-year outcomes — Latarjet 2% recurrence versus arthroscopic Bankart 13% recurrence in high-risk young athletes, CE on patient selection (contact sport, bipolar lesion, glenoid bone loss >15%). Remplissage CE: arthroscopic remplissage versus Latarjet for on-track versus off-track Hill-Sachs CE — off-track lesion: remplissage inferior to Latarjet for return to sport in contact athletes (recurrence 7% versus 2%). Glenoid bone loss quantification CE: 3D CT versus MRI comparative accuracy CE, ISIS score CE for risk stratification, en-face view glenoid bone loss percentage CE (15% threshold). Arthroscopic Latarjet CE: Lafosse technique versus open Latarjet — CE on learning curve (plateau 40 cases), neurovascular risk CE, coracoid graft positioning CE. HAGL lesion CE: humeral avulsion glenohumeral ligament — arthroscopic repair versus open CE.',
  },
  {
    icon: Users,
    title: 'Annual orthobiologics CE — PRP meta-analysis 2024, BMAC cartilage repair CE, FDA-cleared versus investigational biologics disclosure CE',
    desc: 'Orthobiologics CE is required annually as evidence base and FDA regulatory framework evolve simultaneously. PRP CE: 2024 systematic review — leukocyte-rich versus leukocyte-poor PRP for knee OA (LR-PRP superior pain reduction at 12 months versus LP-PRP, both superior to HA and corticosteroid — CE on PRP preparation protocol and informed consent). BMAC CE: bone marrow aspirate concentrate for cartilage lesions — BMAC versus microfracture COMPARE trial (BMAC superior MRI cartilage fill at 2 years, IKDC superior at 2 years, no difference at 5 years — CE on patient selection and expectation management). FDA regulatory CE: same-day surgical exception for autologous cells (BMAC, ADRC) — FDA guidance 2024 update, minimal manipulation CE, homologous use CE, investigational new drug exemption CE for non-compliant biologics. Exosome and allograft amniotic CE: no FDA-cleared indication for musculoskeletal use — CE on informed consent and off-label disclosure requirements.',
  },
]

const TIMELINE = [
  { phase: 'Jan–Feb', task: 'ABOS primary certification MOC audit: verify 120-credit 10-year running total, ABOS PQI module completion. Sports Medicine CAQ renewal audit: verify CAQ 10-year cycle date, CME credits specific to sports medicine documented, CAQ Part III exam preparation calendar if within 3 years of exam date. AOSSM membership CE compliance verification. AAOS annual meeting registration (February) — largest orthopedic CE event (AAOS annual meeting, typically February-March, 15-20 CME credits).' },
  { phase: 'Mar–Apr', task: 'AAOS annual meeting (February-March): primary orthopaedics MOC credits, sports medicine session CE. ACL session CE: graft selection update, BEAR bridge-enhanced repair outcomes session. Shoulder instability session CE: Latarjet versus Bankart outcomes, remplissage data. Biologics session CE: PRP and BMAC current evidence. Arthroscopy Association of North America (AANA) annual meeting (spring): sports arthroscopy CE, hip arthroscopy CE (FAI femoroacetabular impingement — cam versus pincer CE, labral repair versus reconstruction CE).' },
  { phase: 'May–Jun', task: 'AOSSM annual meeting (summer, July): largest sports medicine orthopaedics CE event, 15-20 sports medicine-specific CME credits. ACL symposium CE. Shoulder instability symposium CE. Return-to-sport symposium CE: consensus statement review, psychological readiness CE. Biologics symposium CE: FDA regulatory update, PRP and BMAC current evidence. Elbow sports CE: UCL reconstruction — Tommy John repair versus reconstruction CE, internal brace CE (DANE TJ trial outcomes), thrower&apos;s elbow CE. ACL prevention CE: neuromuscular training protocols, FIFA11+ outcomes CE.' },
  { phase: 'Jul–Aug', task: 'Annual ACL CE literature review (AJSM, Arthroscopy Journal — summer publications). STABILITY2 graft comparison update review. Return-to-sport criteria consensus review (BJSM annual recommendations). BEAR implant 2-year data review. Hip arthroscopy CE: FAI cam impingement — arthroscopic osteoplasty CE, labral reconstruction CE for irreparable labrum, revision hip arthroscopy CE. Meniscus CE: meniscal allograft transplantation CE — indications update, MAT versus partial meniscectomy comparative outcomes CE.' },
  { phase: 'Sep–Oct', task: 'Shoulder instability CE literature review: INSTAB trial annual follow-up data, arthroscopic Latarjet outcomes registry. Remplissage technique CE update. SLAP lesion CE: SLAP type II repair versus biceps tenodesis CE — SLAP-STAB trial outcomes (tenodesis superior in patients >35, equivalent in <25 athletes). Rotator cuff CE: superior capsule reconstruction CE for irreparable massive tears, bioinductive implant CE (REGENETEN SCR CE), patch-augmented repair CE. Annual Sports Medicine CAQ self-assessment if available through AOSSM.' },
  { phase: 'Nov–Dec', task: 'ABOS documentation: verify all CME credits logged in ABOS portfolio. Sports Medicine CAQ documentation: if renewal due within 18 months, identify remaining CE gap and exam preparation plan. Annual orthobiologics CE: FDA regulatory update review (Q4 annual guidance documents), informed consent template update for PRP and BMAC (update data cited in consent to reflect current year evidence). Hospital privileging renewal: arthroscopic shoulder, knee, hip surgery, and biologics use — credentialing documentation. AOSSM annual abstract deadline (December) — sports medicine research CE if submitting data.' },
]

export default function SportsMedicineOrthopedicSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Sports Medicine Orthopedic Surgeons"
        title={
          <>
            ABOS MOC and Sports Medicine CAQ tracked in parallel.
            <br />
            <em className="not-italic text-gold">BEAR ACL repair CE, Latarjet versus Bankart INSTAB outcomes, FDA orthobiologics CE — scheduled before deadlines close.</em>
          </>
        }
        lede="Sports medicine orthopedic surgeons carry two ABOS certification obligations: primary orthopaedics 10-year MOC and Sports Medicine CAQ 10-year recertification. Annual CE priorities include BEAR bridge-enhanced ACL repair FDA clearance, STABILITY2 graft selection data, Latarjet versus Bankart INSTAB 5-year outcomes, remplissage off-track CE, and FDA regulatory CE for orthobiologics. A CME calendar that misses CAQ cycle timing relative to primary ABOS risks back-to-back exams without preparation time. Momenties structures the full sports medicine orthopaedics CME calendar with HIPAA-aware scheduling."
        crumbs={[{ label: 'For Sports Medicine Orthopedic Surgeons' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-gold text-[#0c0c0f] text-sm font-medium hover:bg-gold/90 transition-all press shadow-lg shadow-gold/10"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/for/surgeons"
            className="inline-flex items-center h-11 px-5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-full transition-colors"
          >
            All surgeons
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-2">HIPAA-aware · No PHI stored · Free to start</p>
      </PageHero>

      <section className="py-20 px-5 md:px-8 border-t border-border bg-[#0a0a0d]">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">CME calendar structure</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four CE tracks for sports medicine orthopedic surgeons: ABOS dual certification, ACL CE, shoulder instability CE, and orthobiologics regulatory CE.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {CHALLENGES.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 60}>
                <div className="rounded-xl border border-border lux-card p-6 h-full">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/10 flex items-center justify-center mb-4">
                    <c.icon className="h-4 w-4 text-gold" />
                  </div>
                  <h3 className="text-sm font-medium text-foreground mb-2">{c.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">Annual CME calendar</p>
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Month-by-month sports medicine orthopaedics CME schedule from AAOS annual meeting through AOSSM summer CE and year-end ABOS documentation.</h2>
          </Reveal>
          <div className="space-y-3">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.phase} delay={i * 40}>
                <div className="flex items-start gap-4 rounded-xl border border-border/50 p-4">
                  <span className="font-mono text-[10px] text-gold/60 w-20 shrink-0 pt-0.5 uppercase tracking-wide">{item.phase}</span>
                  <p className="text-sm text-foreground/90">{item.task}</p>
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
                &ldquo;The BEAR implant FDA clearance CE was the one I was most behind on. I had read about it in a journal club but had not systematically reviewed the patient selection criteria — within 50 days of injury, complete midsubstance tear, ages 14-35. I was getting referrals from sports medicine colleagues who heard about the implant and I was not fully current on the informed consent data. The June CE review block gave me the BEAR-MOON 2-year outcomes before summer sports season started, which is when we get the bulk of our ACL referrals. The shoulder instability INSTAB data changed my practice the most — I had been offering arthroscopic Bankart more broadly than the evidence supported for contact athletes with any bipolar lesion. The 5-year recurrence data (2% Latarjet versus 13% Bankart in that population) is now in my patient discussion template. The FDA biologics CE every November is the one I would have skipped without the calendar — but the regulatory landscape for PRP and BMAC changes annually and my consent forms need to reflect current FDA guidance, not 2019 guidance.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">A</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Anya P., MD, FAAOS</div>
                  <div className="text-xs text-muted-foreground">Sports Medicine Orthopedic Surgeon, academic sports medicine center</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-5 md:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <Reveal className="mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold/70 mb-3">What goes on the CME calendar</p>
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every CE requirement and surgical evidence review for sports medicine orthopedic surgeons in one structured annual program.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABOS primary orthopaedics MOC — 10-year cycle, 120 credits, PQI module',
                'Sports Medicine CAQ renewal — 10-year cycle, CAQ Part III exam preparation tracked',
                'ACL CE — BEAR FDA clearance patient selection, STABILITY2 graft comparison, return-to-sport CE',
                'Shoulder instability CE — INSTAB 5-year Latarjet vs Bankart, remplissage off-track CE',
                'Orthobiologics CE — PRP meta-analysis 2024, BMAC COMPARE trial, FDA regulatory update',
                'Hip arthroscopy CE — FAI cam impingement CE, labral reconstruction, MAT CE',
                'AAOS annual meeting CE — February-March, primary orthopaedics and sports medicine credits',
                'AOSSM annual meeting CE — July, largest sports medicine-specific CME event',
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
        title="ABOS MOC and Sports Medicine CAQ tracked in parallel. ACL and shoulder CE scheduled annually."
        subtitle="Sports medicine orthopaedics CME calendar: dual ABOS certification tracking, BEAR ACL CE, Latarjet outcomes CE, orthobiologics FDA regulatory CE, and AOSSM annual meeting CE — all with deadline alerts. HIPAA-aware. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'All surgeons', href: '/for/surgeons' }}
      />
    </>
  )
}
