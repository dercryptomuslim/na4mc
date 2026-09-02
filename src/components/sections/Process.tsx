import { process } from '../../content/home'
import { MaskedLines, Reveal } from '../../lib/motion'

export default function Process() {
  return (
    <section id="prozess" className="relative border-t border-ink/5 py-24 sm:py-36">
      <span id="ablauf" className="absolute -top-20" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="rv mb-5 text-[11px] font-semibold uppercase tracking-label text-accent-soft">
                {process.label}
              </p>
            </Reveal>
            <Reveal as="h2" className="in text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-ink">
              <MaskedLines lines={['Vier Schritte.', 'Ein System.']} />
            </Reveal>
          </div>

          <ol>
            {process.steps.map((step, i) => (
              <Reveal as="li" key={step.n} threshold={0.4} delay={i * 60}>
                <div className="rv group flex gap-8 border-t border-ink/10 py-9 last:border-b last:border-ink/10 sm:gap-12">
                  <span className="text-[clamp(2.5rem,4vw,3.75rem)] font-medium leading-none tracking-[-0.03em] text-ink/15 transition-colors duration-500 group-hover:text-accent/60">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium text-ink sm:text-2xl">{step.title}</h3>
                    <p className="mt-2 max-w-md text-base leading-relaxed text-ink/70">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
