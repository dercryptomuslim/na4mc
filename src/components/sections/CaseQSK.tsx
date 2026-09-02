import { ArrowDown } from 'lucide-react'
import { caseQsk } from '../../content/home'
import { MaskedLines, Reveal } from '../../lib/motion'

export default function CaseQSK() {
  return (
    <section id="arbeit" className="relative border-t border-ink/5 py-24 sm:py-36">
      <span id="ergebnisse" className="absolute -top-20" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Links: sticky Kontext */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="rv mb-5 text-[11px] font-semibold uppercase tracking-label text-accent-soft">
                {caseQsk.label}
              </p>
            </Reveal>
            <Reveal as="h2" className="in text-[clamp(2.4rem,5.5vw,4.5rem)] font-medium leading-[0.99] tracking-[-0.03em] text-ink">
              <MaskedLines lines={caseQsk.headline} />
            </Reveal>
            <Reveal delay={200}>
              <p className="rv mt-6 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
                {caseQsk.intro}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="rv mt-10 max-w-md rounded-2xl border border-ink/10 bg-ink/[0.02] p-6">
                <p className="text-sm text-ink/60">{caseQsk.result.spend}</p>
                <ArrowDown className="my-2 h-4 w-4 text-accent" aria-hidden="true" />
                <p className="text-3xl font-medium tracking-[-0.02em] text-ink">
                  {caseQsk.result.revenue}
                </p>
                <p className="mt-3 border-t border-ink/10 pt-3 text-sm text-accent-soft">
                  {caseQsk.result.note}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Rechts: Timeline */}
          <ol className="relative border-l border-ink/10 pl-8 sm:pl-12">
            {caseQsk.steps.map((step, i) => (
              <Reveal as="li" key={step.n} threshold={0.4} className="in">
                <div className="rv relative pb-12 last:pb-0" style={{ '--rv-delay': '80ms' } as React.CSSProperties}>
                  <span
                    className="absolute -left-8 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_14px_rgba(232,85,63,0.6)] sm:-left-12"
                    aria-hidden="true"
                  />
                  <p className="text-[13px] font-semibold tracking-label text-ink/30">{step.n}</p>
                  <h3 className="mt-1.5 text-xl font-medium text-ink sm:text-2xl">{step.title}</h3>
                  <p className="mt-2 max-w-md text-base leading-relaxed text-ink/70">{step.desc}</p>
                  {i === caseQsk.steps.length - 1 && (
                    <p className="mt-8 inline-block rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent-soft">
                      Ergebnis: {caseQsk.result.revenue} aus {caseQsk.result.spend}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
