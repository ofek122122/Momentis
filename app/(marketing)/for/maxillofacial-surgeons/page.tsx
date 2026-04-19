import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'
import { Shield, Clock, BarChart3, Users, ArrowRight, CheckCircle2, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Oral and Maxillofacial Surgeon CME Calendar — ABOMS MOC, orthognathic surgery CE, dental implant CE, facial trauma CE, pathology CE',
  description:
    'Oral and maxillofacial surgeons managing ABOMS 10-year MOC track annual orthognathic surgery CE (virtual surgical planning photogrammetry versus CBCT accuracy CE, BSSO versus SARPE CE, counterclockwise rotation CE for sleep apnea), dental implant CE (All-on-4 versus full-arch immediate load CE, pterygoid implant CE, zygomatic implant CE for severely atrophic maxilla), facial trauma CE (panfacial fracture management sequence CE, NOE fracture CE, mandibular condyle ORIF versus closed CE), and oral pathology CE (medication-related osteonecrosis of jaw BRONJ/MRONJ staging CE, bisphosphonate drug holiday CE, ameloblastoma CE). Momenties structures the full CME calendar so every deadline is visible before the renewal window closes.',
  alternates: { canonical: '/for/maxillofacial-surgeons' },
  openGraph: {
    title: 'Oral and Maxillofacial Surgeon CME Calendar',
    description: 'ABOMS MOC, orthognathic surgery CE, dental implant CE, facial trauma CE, and MRONJ CE — one structured calendar.',
    url: '/for/maxillofacial-surgeons',
    type: 'website',
  },
}

const CHALLENGES = [
  {
    icon: Shield,
    title: 'ABOMS 10-year MOC cycle — 75 CME credits including oral and maxillofacial surgery-specific content, and two separate hospital credentialing portfolios',
    desc: 'Oral and maxillofacial surgeons maintain ABOMS (American Board of Oral and Maxillofacial Surgery) certification on a 10-year recertification cycle requiring 75 CME credits with a minimum of 45 in oral and maxillofacial surgery-specific content categories. ABOMS also requires a quality improvement component and continuing clinical competency. OMS surgeons uniquely hold credentials in two distinct systems: dental licensing (state dental board CE requirements, typically 20-30 credits per renewal period) and medical licensing in states where OMS holds an MD degree (AMA physician CE requirements). A CME calendar that tracks only one system misses state dental board renewal deadlines. Additionally, many OMS surgeons have hospital privileges requiring separate privileging documentation for dental implant surgery, orthognathic surgery, and facial trauma — each with case volume minimums. Momenties tracks ABOMS, state dental board, and hospital privileging simultaneously.',
  },
  {
    icon: Clock,
    title: 'Annual orthognathic surgery CE — VSP photogrammetry accuracy, BSSO versus SARPE for transverse deficiency, MMA for OSA CE',
    desc: 'Orthognathic surgery CE requires annual updates as virtual surgical planning accuracy data accumulates and sleep apnea surgical evidence matures. VSP CE: photogrammetry versus CBCT for orthognathic planning — accuracy update (submillimeter accuracy with photogrammetry + CBCT hybrid for Le Fort I and BSSO, compared with cone beam CT-only; radiation dose CE: CBCT 50-80% reduction versus medical CT). BSSO versus SARPE CE: SARPE for maxillary transverse deficiency in adults — SARPE versus segmental Le Fort I outcomes (SARPE superior relapse resistance at 2 years for discrepancy >5mm), corticotomy CE for rapid palatal expansion. MMA for OSA CE: maxillomandibular advancement — AHI reduction data (AHI 80% reduction in patients with MMA >10mm advancement), selection criteria CE (failed CPAP, moderate-severe OSA, skeletal deficiency). Counterclockwise rotation CE for high-angle OSA — MMA plus CCW rotation for posterior airway space increase. Annual sleep medicine CE: OMS role in OSA multidisciplinary team.',
  },
  {
    icon: BarChart3,
    title: 'Annual dental implant CE — All-on-4 survival data, zygomatic implants for atrophic maxilla, pterygoid implants CE',
    desc: 'Dental implant CE covers both full-arch immediate load protocols and anatomically challenging cases. All-on-4 CE: 10-year survival data update (Nobel Biocare All-on-4 registry — implant survival 94.8% at 10 years, prosthetic complication rate CE), immediate versus delayed loading CE. Zygomatic implant CE: severely atrophic maxilla — zygomatic implant versus bone augmentation CE (ZAGA classification, 8-10 year survival data 96.7%, sinus involvement CE), quad-zygoma CE for complete maxillary atrophy. Pterygoid implant CE: posterior maxilla augmentation alternative — pterygoid fixation CE, angulation CE (30-45 degrees), immediate loading with pterygoid CE. Short implant CE: 6mm versus 8mm in posterior maxilla with limited bone height — systematic review 2024 (non-inferior to longer implants in 5-year data). Digital implant workflow CE: intraoral scan to 3D-printed surgical guide — guide accuracy CE, flapless implant CE for guided surgery, tissue level versus bone level selection CE.',
  },
  {
    icon: Users,
    title: 'Annual MRONJ CE — AAOMS staging update, drug holiday evidence, and antiresorptive medication pre-implant protocol',
    desc: 'Medication-related osteonecrosis of the jaw CE is required annually as antiresorptive prescribing increases and AAOMS staging evolves. MRONJ CE: AAOMS 2022 position paper update review (Stage 0-3 staging, exposed and non-exposed bone CE, Stage 0 symptoms without exposed bone CE). Drug holiday CE: bisphosphonate drug holiday before implant surgery — AAOMS 2023 guidance (no evidence for drug holiday in low-risk patients under 4 years IV bisphosphonate; high-risk CE — drug holiday 3 months before and 3 months after dental surgery if CTX <150pg/mL threshold — CE on CTX threshold debate). Antiresorptive implant protocol CE: denosumab hold timing CE (Prolia — hold 6 months before implant surgery, no drug holiday consensus for oncology RANKL inhibitor doses). Surgical management CE: debridement versus resection in Stage 2-3, hyperbaric oxygen CE, pentoxifylline + tocopherol CE for Stage 1-2. Annual facial trauma CE: ATLS principles for maxillofacial trauma CE, panfacial fracture surgical sequence CE.',
  },
]

const TIMELINE = [
  { phase: 'Jan–Feb', task: 'ABOMS MOC audit: 10-year cycle CME total verified (75 credits, 45 OMS-specific). State dental board CE audit: state-specific renewal date and credit requirement verified (most states 20-30 credits per 2-year renewal). If MD-degree OMS: medical license CE requirements verified. Hospital privileging audit: implant, orthognathic, facial trauma annual case volume meets credentialing minimums. ABOMS quality improvement documentation: clinical competency verification current. ADA CERP-approved CE calendar review: ABOMS-accepted CE sources confirmed.' },
  { phase: 'Mar–Apr', task: 'AAOMS annual meeting (spring): 15-20 OMS-specific CE credits. Orthognathic session CE: VSP outcomes update, MMA for OSA session. Implant session CE: All-on-4 outcomes, zygomatic implant CE. MRONJ session CE: staging update, drug holiday debate. Pathology session CE: ameloblastoma resection margins CE, odontogenic keratocyst CE (Gorlin syndrome WES CE), dentigerous cyst CE. Oral cancer CE: HPV-associated oropharyngeal cancer CE, sentinel node biopsy CE, neck dissection CE. Anesthesia CE: OMS general anesthesia permit renewal CE — state-specific CE for general anesthesia permit maintenance.' },
  { phase: 'May–Jun', task: 'VSP orthognathic CE: annual accuracy data literature review (JOMS, IJOMiFS annual publications). Photogrammetry hybrid workflow CE update. SARPE versus Le Fort segmental outcomes review. Sleep medicine CE: MMA outcomes data update, multilevel OSA surgery CE (UPPP plus MMA CE). Zygomatic implant CE: ZAGA consortium annual data review, long-term survival update. Digital implant guide CE: 3D-printed guide accuracy data update. MRONJ protocol review: CTX threshold debate literature review — update practice protocol based on current evidence.' },
  { phase: 'Jul–Aug', task: 'Facial trauma CE: panfacial fracture management review (surgical sequence CE — mandible before midface versus midface first CE, NOE fracture CE, orbital floor blowout CE). Mandibular condyle ORIF versus closed treatment CE: ORIF versus closed CE indications update (subcondylar CE — ORIF superior occlusion for displacement >5mm, bilateral condyle CE). Soft tissue trauma CE: facial laceration CE, nerve repair CE (infraorbital, facial nerve CE), parotid duct CE. Anesthesia CE: pediatric OMS CE, deep sedation versus general anesthesia CE for office-based OMS. State dental board CE: identify remaining credits for renewal if due this cycle.' },
  { phase: 'Sep–Oct', task: 'ACS Clinical Congress (October) if attending: facial trauma CE, reconstructive CE. Reconstructive OMS CE: fibula free flap CE for mandibular reconstruction, scapula flap CE for maxillary reconstruction, virtual surgical planning for reconstruction CE. TMJ CE: total alloplastic TMJ replacement CE (Stryker, TMJ Concepts outcomes data, ankylosis CE), Wilkes classification, arthroscopy CE. Salivary gland CE: sialendoscopy CE for sialolithiasis, parotidectomy nerve monitoring CE. Annual implant complications CE: peri-implantitis CE (EFP/AAP 2018 classification review, systematic treatment CE).' },
  { phase: 'Nov–Dec', task: 'ABOMS documentation: verify all credits logged before cycle year end. State dental board documentation: CE credits submitted before renewal deadline. General anesthesia permit documentation: state OMS permit renewal CE completed. Hospital privileging renewal: orthognathic, implant, facial trauma privileging documentation. MRONJ protocol year-end update: antiresorptive drug holiday protocol updated to current AAOMS guidance. Annual practice quality review: MRONJ incidence in patients on bisphosphonate who underwent implant surgery, alveolar bone graft success rate, orthognathic surgical relapse rate — benchmark versus AAOMS registry data.' },
]

export default function MaxillofacialSurgeonsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Oral and Maxillofacial Surgeons"
        title={
          <>
            ABOMS MOC and state dental board CE tracked in parallel.
            <br />
            <em className="not-italic text-gold">VSP orthognathic CE, zygomatic implant data, MRONJ staging update — scheduled before deadlines close.</em>
          </>
        }
        lede="Oral and maxillofacial surgeons carry parallel CE obligations: ABOMS 10-year MOC with OMS-specific content requirements, state dental board renewal, and hospital privileging case volume minimums for implant, orthognathic, and trauma. Annual CE priorities include virtual surgical planning photogrammetry accuracy, MMA for OSA MMA counterclockwise rotation CE, zygomatic and pterygoid implant data, and AAOMS MRONJ staging 2022 update with CTX drug holiday debate. Momenties structures the full OMS CME calendar with HIPAA-aware scheduling."
        crumbs={[{ label: 'For Maxillofacial Surgeons' }]}
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Four CE tracks for maxillofacial surgeons: ABOMS/dental board dual compliance, orthognathic CE, dental implant CE, and MRONJ CE.</h2>
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
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">Month-by-month OMS CME schedule from AAOMS annual meeting through year-end state dental board documentation and general anesthesia permit renewal.</h2>
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
                &ldquo;The state dental board tracking was my biggest gap. I had ABOMS well-organized but my state dental board CE was on a separate 2-year cycle and I kept conflating it with my ABOMS 10-year cycle. The calendar showed both simultaneously and I discovered I was 8 credits short of my state board requirement with 4 months to go — I had time to complete it, but only because I found it in January rather than October. The MRONJ protocol CE was the other change that made a real difference. The CTX threshold debate — whether 150pg/mL is still a meaningful cutoff — had moved significantly in the literature and my consent form was citing outdated guidance. I updated it after the June CE review, which happened to be 3 weeks before a patient consultation for implants on long-term alendronate. The zygomatic implant CE became my pre-case review anchor before severely atrophic maxilla cases — I review the ZAGA classification and the 8-10 year survival data before every quad-zygoma case. It takes 20 minutes and it has changed one case selection conversation in the last year.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/20 flex items-center justify-center text-sm font-bold text-gold">H</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Hassan T., DDS, MD, FACS</div>
                  <div className="text-xs text-muted-foreground">Oral and Maxillofacial Surgeon, private practice and hospital OMS program</div>
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
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Every CE requirement and surgical technique review for oral and maxillofacial surgeons in one structured annual program.</h2>
          </Reveal>
          <Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'ABOMS MOC — 10-year cycle, 75 credits, 45 OMS-specific, quality improvement component',
                'State dental board CE — state-specific cycle and credit requirement tracked independently',
                'General anesthesia permit renewal CE — state OMS permit CE requirement tracked separately',
                'Orthognathic CE — VSP photogrammetry accuracy, MMA for OSA counterclockwise rotation CE',
                'Dental implant CE — All-on-4 10-year data, zygomatic ZAGA classification, pterygoid CE',
                'MRONJ CE — AAOMS 2022 staging update, CTX drug holiday protocol, denosumab timing CE',
                'Facial trauma CE — panfacial fracture sequence, condyle ORIF vs closed indications',
                'AAOMS annual meeting CE — spring, 15-20 OMS-specific credits, anesthesia CE',
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
        title="ABOMS MOC and state dental board CE tracked in parallel. MRONJ and implant CE scheduled annually."
        subtitle="OMS CME calendar: dual licensing compliance, VSP orthognathic CE, zygomatic implant data, MRONJ AAOMS staging CE, and anesthesia permit renewal CE — all with deadline alerts. HIPAA-aware. Free to start."
        primary={{ label: 'Start free', href: '/login' }}
        secondary={{ label: 'All surgeons', href: '/for/surgeons' }}
      />
    </>
  )
}
