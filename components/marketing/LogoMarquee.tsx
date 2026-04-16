const LOGOS = [
  'Stratify', 'Meridian', 'Lanternwork', 'Kindrid', 'North & Oak',
  'Greyline', 'Aperture', 'Caldera', 'Tessera', 'Helix Labs',
  'Orbit & Co.', 'Atelier', 'Parallel', 'Mariner',
]

export function LogoMarquee({ title = 'Teams who schedule with Calendro' }: { title?: string }) {
  return (
    <section className="py-14 px-5 md:px-8 border-t border-border overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60 text-center mb-8">
          {title}
        </p>
        <div
          className="relative"
          style={{
            maskImage:
              'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="marquee flex gap-16 whitespace-nowrap">
            {[...LOGOS, ...LOGOS].map((name, i) => (
              <span
                key={i}
                className="font-display text-xl md:text-2xl text-foreground/40 tracking-tight italic"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
