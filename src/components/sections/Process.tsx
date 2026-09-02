import { process } from '../../content/home'
import { Reveal } from '../../lib/motion'
import { Panel, SectionHeader } from '../ui/Panel'

export default function Process() {
  return (
    <section id="prozess" className="relative py-20 sm:py-28">
      <span id="ablauf" className="absolute -top-20" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          label={process.label}
          title={
            <>
              Vier Schritte.
              <br />
              Ein System.
            </>
          }
          text="Einfach, transparent, wiederholbar — damit du immer weißt, was als Nächstes passiert."
        />

        <Panel punchline="Alle zwei Wochen Learnings statt Bauchgefühl.">
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step, i) => (
              <Reveal as="li" key={step.n} threshold={0.35} delay={i * 70}>
                <div
                  className={`rv group h-full p-7 sm:p-9 ${
                    i < process.steps.length - 1
                      ? 'border-b border-ink/[0.07] sm:border-b-0 sm:border-r'
                      : ''
                  } ${i === 1 ? 'sm:border-b lg:border-b-0' : ''} ${i === 0 ? 'sm:border-b lg:border-b-0' : ''}`}
                >
                  <span className="text-[clamp(2.2rem,3.2vw,3rem)] font-medium leading-none tracking-[-0.03em] text-ink/15 transition-colors duration-500 group-hover:text-accent/60">
                    {step.n}
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-ink sm:text-xl">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Panel>
      </div>
    </section>
  )
}
