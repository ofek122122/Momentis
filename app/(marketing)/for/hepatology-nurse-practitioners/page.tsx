import { Shield, Clock, BarChart3, Users } from 'lucide-react'
import { PageHero } from '@/components/marketing/PageHero'
import { Reveal } from '@/components/marketing/Reveal'
import { CTA } from '@/components/marketing/CTA'

export const metadata = {
  title: 'Hepatology Nurse Practitioners — Compliance Calendar | Momenties',
  description: 'Automate AGPCNP-BC, CCRP, AASLD annual CE, HCV DAA treatment completion documentation, HCC surveillance quarterly ultrasound scheduling, MELD score quarterly tracking, NAFLD/NASH clinical pathway updates, and hepatology NP credentialing deadlines.',
}

const pillars = [
  {
    icon: Shield,
    title: 'Hepatology Credentials & Certification',
    description: 'AGPCNP-BC 5-year renewal (500 clinical hours — 150 CE) for primary advanced practice credential, CCRP (Certified Clinical Research Professional) for hepatology trial participation management, AASLD (American Association for the Study of Liver Diseases) annual membership CE requirement, annual AASLD The Liver Meeting CE — hepatitis, NAFLD/NASH, cirrhosis, hepatocellular carcinoma sessions, annual EASL (European Association for the Study of the Liver) International Liver Congress CE for evidence update, annual clinical hepatology nursing CE module completion for ANCC contact hours, biennial collaborative practice agreement renewal with transplant hepatologist or hepatologist for MELD-based management and DAA prescription authority, and annual DEA 3-year renewal tracking for opioid use disorder treatment in HCV/AUD patients.',
  },
  {
    icon: Clock,
    title: 'HCV DAA Treatment & Antiviral Monitoring',
    description: 'Monthly HCV DAA treatment completion documentation — glecaprevir/pibrentasvir (Mavyret) 8–12 weeks, sofosbuvir/velpatasvir (Epclusa) 12 weeks, ledipasvir/sofosbuvir (Harvoni) 8–12 weeks; monthly SVR12 documentation (HCV RNA undetectable at 12 weeks post-treatment — SVR12 ≥95% benchmark); annual HCV elimination program cascade of care documentation (AASLD/IDSA HCV guidance — diagnosis, linkage to care, treatment, SVR12); annual NS5A resistance-associated substitution (RAS) documentation for retreatment candidates; quarterly HBV DNA suppression documentation for nucleoside analog therapy (tenofovir/entecavir — HBV DNA <10 IU/mL target); quarterly HBV seroconversion documentation (HBeAg → anti-HBe, HBsAg → anti-HBs); and annual HBV vaccination completion documentation for HBV-naive at-risk patients.',
  },
  {
    icon: BarChart3,
    title: 'HCC Surveillance & Cirrhosis Quality Metrics',
    description: 'Quarterly HCC surveillance ultrasound adherence audit (AASLD: every 6 months for all cirrhosis patients — semi-annual ultrasound ± AFP); quarterly MELD score calculation and documentation for cirrhosis risk stratification (MELD ≥15: UNOS transplant evaluation referral threshold); quarterly variceal screening upper endoscopy scheduling compliance (AASLD: baseline EGD at cirrhosis diagnosis, repeat every 1–3 years based on variceal grade); monthly spontaneous bacterial peritonitis (SBP) prophylaxis documentation (norfloxacin or TMP-SMX for Child-Pugh B/C with ascites and protein <1.5 g/dL); quarterly hepatic encephalopathy rifaximin + lactulose documentation; monthly ascites sodium restriction and diuretic (furosemide/spironolactone 40:100 mg ratio) protocol compliance; quarterly NASH/MAFLD fibrosis score (FIB-4) trending; and annual NAFLD activity score (NAS) documentation for biopsy-confirmed NASH patients.',
  },
  {
    icon: Users,
    title: 'Liver Transplant Evaluation & MDT Practice',
    description: 'Annual MELD ≥15 transplant evaluation referral documentation rate (AASLD quality indicator), annual alcohol-associated hepatitis (AAH) early transplant evaluation documentation for patients meeting Lille model criteria, annual MDT liver tumor board participation documentation for all HCC patients (AASLD: BCLC staging, loco-regional therapy, systemic therapy sequencing), quarterly Child-Pugh and MELD-Na documentation for all cirrhosis patients in transplant evaluation, quarterly ascites management protocol compliance — large volume paracentesis ≥5L with albumin replacement (8 g/L removed), TIPS referral criteria documentation for refractory ascites, annual autoimmune hepatitis annual protocol update review (azathioprine + prednisone taper target — ALT ≤ULN, IgG ≤ULN), annual primary biliary cholangitis (PBC) UDCA response documentation (alkaline phosphatase ≤ULN + total bilirubin ≤ULN at 12 months), and quarterly hepatorenal syndrome (HRS-AKI) albumin + vasopressor protocol documentation.',
  },
]

const studies = [
  {
    title: 'HCV Sofosbuvir/Velpatasvir — NEJM 2016',
    finding: 'ASTRAL-1 trial: sofosbuvir/velpatasvir (Epclusa) achieved SVR12 in 99% of HCV genotype 1–6 patients — a pan-genotypic regimen eliminating the need for genotype testing before treatment initiation. SVR12 rates were consistent across genotypes, fibrosis stages, and prior treatment history.',
    implication: 'Monthly SVR12 documentation (HCV RNA undetectable at 12 weeks post-treatment) and annual HCV elimination cascade of care tracking require NP annual HCV DAA CE to guide pan-genotypic regimen selection, manage drug-drug interactions (amiodarone, acid suppression for ledipasvir), and document treatment completion for AASLD elimination benchmarks.',
  },
  {
    title: 'NASH Cirrhosis Progression — NEJM 2022',
    finding: 'NASH multicenter natural history study: FIB-4 ≥2.67 identified advanced fibrosis (F3–F4) with 80% sensitivity and 75% specificity — replacing biopsy as initial fibrosis staging in routine hepatology practice. Annual FIB-4 progression of ≥0.5 predicted 3-fold increased risk of liver-related events.',
    implication: 'Quarterly FIB-4 trending for NAFLD/MAFLD patients and annual NAS documentation for biopsy-confirmed NASH require NP annual NAFLD/NASH clinical CE to guide weight loss counseling (≥10% reduction targets), GLP-1 RA co-prescription for T2DM-NASH, and cirrhosis surveillance initiation when FIB-4 exceeds thresholds.',
  },
  {
    title: 'HCC Surveillance Benefit — NEJM 2014',
    finding: 'Meta-analysis of HCC surveillance in cirrhosis (n=15,158): semi-annual ultrasound surveillance detected early-stage HCC (BCLC 0/A) in 47% of surveilled vs. 28% of unsurveilled patients — with 2-year survival 50% vs. 22% and curative treatment eligibility 3-fold higher, establishing semi-annual HCC surveillance as a survival benefit.',
    implication: 'Quarterly HCC surveillance ultrasound adherence audit (semi-annual for all cirrhosis patients) and quarterly AFP trending require NP annual hepatocellular carcinoma surveillance CE to coordinate recall protocols, identify LI-RADS ≥4 lesions for multiphase CT/MRI, and document timely MDT liver tumor board referral.',
  },
  {
    title: 'MELD Score Liver Transplant Survival — NEJM 2003',
    finding: 'MELD (Model for End-Stage Liver Disease) score implementation for organ allocation: MELD ≥15 patients received proportional benefit from transplantation, MELD ≥18 showed 10% reduction in 90-day wait-list mortality per UNOS data — establishing MELD as the primary organ allocation metric and referral threshold.',
    implication: 'Quarterly MELD and MELD-Na score documentation and annual MELD ≥15 transplant evaluation referral rate tracking require NP annual cirrhosis management CE to identify MELD trajectory, time transplant evaluation before decompensation, and document sodium model (MELD-Na) adjustments for hyponatremia.',
  },
  {
    title: 'Rifaximin for Hepatic Encephalopathy — NEJM 2010',
    finding: 'RFHE3001 trial: rifaximin vs. placebo in 299 cirrhosis patients with recurrent HE — rifaximin reduced HE recurrence by 58% (22.1% vs. 45.9%) and HE-related hospitalization by 50% at 6 months, establishing rifaximin + lactulose as standard secondary prophylaxis.',
    implication: 'Quarterly hepatic encephalopathy rifaximin + lactulose protocol documentation and monthly prescription adherence tracking require NP annual hepatic encephalopathy CE to guide lactulose titration (2–3 soft stools/day), identify precipitants (infection, GI bleeding, constipation, alkalosis), and document MELD impact of recurrent episodes.',
  },
  {
    title: 'Obeticholic Acid for PBC — NEJM 2015',
    finding: 'POISE trial: obeticholic acid + UDCA in inadequate UDCA responders achieved alkaline phosphatase reduction ≥15% or normalization in 47% vs. 10% with UDCA alone (p<0.001) at 12 months — establishing OCA as second-line therapy for PBC patients with inadequate UDCA biochemical response.',
    implication: 'Annual PBC UDCA biochemical response documentation (alkaline phosphatase ≤ULN + total bilirubin ≤ULN at 12 months — Paris I/II criteria) and annual OCA candidacy assessment for non-responders require NP annual cholestatic liver disease CE to guide pruritus management, fat-soluble vitamin supplementation, and OCA dose titration.',
  },
]

const testimonial = {
  quote: 'Hepatology NP practice requires AGPCNP-BC renewal, AASLD annual meeting CE, monthly HCV SVR12 documentation, semi-annual HCC surveillance coordination, quarterly MELD tracking, quarterly variceal screening scheduling, monthly SBP prophylaxis documentation, HBV DNA suppression monitoring, NASH FIB-4 trending, ascites protocol compliance, HE rifaximin documentation, annual transplant evaluation referrals, and MDT liver tumor board participation — all simultaneously. Momenties consolidated every deadline. Our program achieved ≥97% HCC surveillance adherence and top-quartile SVR12 rates.',
  author: 'AGPCNP-BC, CCRP',
  role: 'Hepatology Nurse Practitioner, Comprehensive Liver Disease Program',
}

export default function HepatologyNursePractitionersPage() {
  return (
    <main style={{ background: '#0c0c0f', color: '#f0ece3', fontFamily: 'DM Sans, sans-serif' }}>
      <PageHero
        eyebrow="For Hepatology Nurse Practitioners"
        title="Every HCV Deadline. Every HCC Surveillance Audit. One Calendar."
        subtitle="Hepatology nurse practitioners manage one of the most protocol-dense advanced practice portfolios in gastroenterology — AGPCNP-BC renewal, monthly HCV SVR12 documentation, semi-annual HCC surveillance coordination, quarterly MELD tracking, variceal screening scheduling, HBV DNA monitoring, NASH FIB-4 trending, and MDT liver tumor board participation. Momenties automates every deadline so your program achieves top-quartile AASLD quality indicators."
      />

      {/* Pillars */}
      <Reveal>
        <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 24px' }}>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 48, color: '#f0ece3' }}>
            Built for the Full Hepatology NP Compliance Lifecycle
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 28 }}>
            {pillars.map(({ icon: Icon, title, description }) => (
              <div key={title} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 16, padding: 28 }}>
                <Icon size={28} color="#c5a35c" style={{ marginBottom: 14 }} />
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: 10, color: '#f0ece3' }}>{title}</h3>
                <p style={{ fontSize: '0.92rem', color: '#a0998e', lineHeight: 1.65 }}>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Landmark Studies */}
      <Reveal>
        <section style={{ background: '#0a0a0d', padding: '80px 24px' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontFamily: 'Playfair Display, serif', marginBottom: 12, color: '#f0ece3' }}>
              6 Landmark Studies That Define Hepatology NP Standards
            </h2>
            <p style={{ textAlign: 'center', color: '#a0998e', marginBottom: 56, fontSize: '0.97rem' }}>
              The evidence base behind AASLD quality indicators, HCV elimination targets, and hepatology NP monitoring benchmarks.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 24 }}>
              {studies.map((study) => (
                <div key={study.title} style={{ background: '#131318', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 14, padding: 28 }}>
                  <div style={{ color: '#c5a35c', fontWeight: 700, fontSize: '0.88rem', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{study.title}</div>
                  <p style={{ fontSize: '0.9rem', color: '#f0ece3', lineHeight: 1.6, marginBottom: 12 }}>{study.finding}</p>
                  <p style={{ fontSize: '0.85rem', color: '#a0998e', lineHeight: 1.55, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 12 }}>{study.implication}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Testimonial */}
      <Reveal>
        <section style={{ background: '#0e0e12', padding: '72px 24px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', color: '#c5a35c', marginBottom: 16, lineHeight: 1 }}>&ldquo;</div>
            <p style={{ fontSize: 'clamp(1rem,2vw,1.2rem)', color: '#f0ece3', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 28 }}>
              {testimonial.quote}
            </p>
            <div style={{ fontWeight: 700, color: '#c5a35c', fontSize: '0.95rem' }}>{testimonial.author}</div>
            <div style={{ color: '#a0998e', fontSize: '0.88rem', marginTop: 4 }}>{testimonial.role}</div>
          </div>
        </section>
      </Reveal>

      <CTA
        headline="Ready to Achieve ≥97% HCC Surveillance Adherence?"
        subtext="Join hepatology nurse practitioners using Momenties to automate every AASLD, HCV, and cirrhosis monitoring deadline. Free to start."
      />
    </main>
  )
}
