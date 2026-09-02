import { why } from '../../content/home'
import { MaskedLines, Reveal } from '../../lib/motion'

export default function WhyMuslim() {
  return (
    <section id="ueber-uns" className="border-t border-ink/5 py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="rv mb-5 text-[11px] font-semibold uppercase tracking-label text-accent-soft">
                {why.label}
              </p>
            </Reveal>
            <Reveal>
              <p className="rv mb-4 text-sm font-medium text-ink/50">{why.kicker}</p>
            </Reveal>
            <Reveal as="h2" className="in text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-ink">
              <MaskedLines lines={why.headline} />
            </Reveal>
            <Reveal delay={200}>
              <p className="rv mt-6 max-w-lg text-base leading-relaxed text-ink/70 sm:text-lg">
                {why.body}
              </p>
            </Reveal>
          </div>

          <div className="lg:pt-16">
            {why.principles.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 80}>
                <div className="rv border-t border-ink/10 py-6">
                  <div className="flex items-baseline gap-5">
                    <span className="text-[13px] font-semibold tracking-label text-ink/30">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-medium text-ink">{principle.title}</h3>
                      <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-ink/65">
                        {principle.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
