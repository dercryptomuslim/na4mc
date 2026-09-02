import { ArrowDown } from 'lucide-react'
import { caseQsk } from '../../content/home'
import { Reveal } from '../../lib/motion'
import { Panel, SectionHeader } from '../ui/Panel'

export default function CaseQSK() {
  return (
    <section id="arbeit" className="relative py-20 sm:py-28">
      <span id="ergebnisse" className="absolute -top-20" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          label={caseQsk.label}
          title={
            <>
              Von 0 auf
              <br />
              3,5 Mio.&nbsp;€.
            </>
          }
          text={caseQsk.intro}
        />

        <Panel punchline="Scroll-Story statt Case-Karte: jeder Schritt war ein Systembaustein — kein Zufallstreffer.">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Ergebnis links (sticky auf Desktop) */}
            <div className="border-b border-ink/[0.07] p-7 sm:p-10 lg:border-b-0 lg:border-r">
              <div className="lg:sticky lg:top-28">
                <p className="text-[11px] font-semibold uppercase tracking-label text-ink/40">
                  Das Ergebnis
                </p>
                <div className="mt-6">
                  <p className="text-lg text-ink/60">{caseQsk.result.spend}</p>
                  <ArrowDown className="my-3 h-5 w-5 text-accent" aria-hidden="true" />
                  <p className="text-[clamp(2rem,3.5vw,3rem)] font-medium leading-tight tracking-[-0.02em] text-ink">
                    {caseQsk.result.revenue}
                  </p>
                </div>
                <p className="mt-6 border-t border-ink/[0.08] pt-5 text-[15px] leading-relaxed text-accent-soft">
                  {caseQsk.result.note}
                </p>
              </div>
            </div>

            {/* Timeline rechts */}
            <ol className="p-7 sm:p-10">
              {caseQsk.steps.map((step, i) => (
                <Reveal as="li" key={step.n} threshold={0.4} delay={60}>
                  <div
                    className={`rv relative border-l border-ink/10 pb-9 pl-8 last:pb-0 sm:pl-10 ${
                      i === caseQsk.steps.length - 1 ? '' : ''
                    }`}
                  >
                    <span
                      className="absolute -left-1 top-1.5 h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(232,85,63,0.6)]"
                      aria-hidden="true"
                    />
                    <p className="text-[12px] font-semibold tracking-label text-ink/30">{step.n}</p>
                    <h3 className="mt-1 text-lg font-medium text-ink sm:text-xl">{step.title}</h3>
                    <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-ink/65">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </Panel>
      </div>
    </section>
  )
}
