import { pillars } from '../../content/home'
import SystemStack from '../three/SystemStack'
import { MaskedLines, Reveal, useScrollProgress } from '../../lib/motion'

function PillarText({ pillar, active }: { pillar: (typeof pillars)[number]; active: boolean }) {
  return (
    <div
      className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-brand ${
        active ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-label text-accent-soft">
        {pillar.n} / {pillar.en}
      </p>
      <h3 className="text-4xl font-medium tracking-[-0.02em] text-ink">{pillar.title}</h3>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/70">{pillar.desc}</p>
      <ul className="mt-7 flex max-w-md flex-wrap gap-2">
        {pillar.items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-ink/15 px-3.5 py-1.5 text-[13px] text-ink/75"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function SystemSection() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>()
  const active = Math.min(3, Math.floor(progress * 4))

  const header = (
    <>
      <Reveal>
        <p className="rv mb-4 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-label text-ink/45">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          02 — System
        </p>
      </Reveal>
      <Reveal as="h2" className="in text-[clamp(1.9rem,3.8vw,3rem)] font-medium leading-[1.06] tracking-[-0.02em] text-ink">
        <MaskedLines lines={['Nicht nur Marketing.', 'Ein Wachstumssystem.']} />
      </Reveal>
    </>
  )

  return (
    <section id="system" className="border-t border-ink/5">
      {/* Mobile / Tablet: gestapelte Darstellung */}
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:hidden">
        {header}
        <div className="mt-10 flex justify-center">
          <SystemStack variant="system" size={260} />
        </div>
        <div className="mt-12 space-y-12">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.n} delay={i * 60}>
              <div className="rv border-t border-ink/10 pt-6">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-label text-accent-soft">
                  {pillar.n} / {pillar.en}
                </p>
                <h3 className="text-2xl font-medium text-ink">{pillar.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink/70">{pillar.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {pillar.items.map((item) => (
                    <li key={item} className="rounded-full border border-ink/15 px-3 py-1 text-[12px] text-ink/75">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Desktop: Sticky-Choreografie — Objekt wechselt mit dem Scroll die aktive Ebene */}
      <div ref={ref} className="hidden lg:block lg:h-[380vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-2 items-center gap-8 px-8">
            <div>
              {header}
              <div className="relative mt-12 h-[320px]">
                {pillars.map((pillar, i) => (
                  <PillarText key={pillar.n} pillar={pillar} active={active === i} />
                ))}
              </div>
              <div className="mt-4 flex gap-2" aria-hidden="true">
                {pillars.map((pillar, i) => (
                  <span
                    key={pillar.n}
                    className={`h-1 w-10 rounded-full transition-colors duration-500 ${
                      i <= active ? 'bg-accent' : 'bg-ink/15'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <SystemStack variant="system" active={active} size={420} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
