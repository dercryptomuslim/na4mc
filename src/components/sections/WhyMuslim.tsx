import { why } from '../../content/home'
import { Reveal } from '../../lib/motion'
import { Panel, SectionHeader } from '../ui/Panel'

export default function WhyMuslim() {
  return (
    <section id="ueber-uns" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          label={why.label}
          title={
            <>
              Wir verstehen den Markt,
              <br />
              weil wir Teil davon sind.
            </>
          }
          text={why.kicker}
        />

        <Panel punchline="Kein religiöses Marketing — unternehmerisches Marktverständnis.">
          <div className="grid lg:grid-cols-[1fr_1fr]">
            <div className="border-b border-ink/[0.07] p-7 sm:p-10 lg:border-b-0 lg:border-r">
              <p className="max-w-md text-base leading-relaxed text-ink/75 sm:text-lg">{why.body}</p>
            </div>
            <div className="p-7 sm:p-10">
              {why.principles.map((principle, i) => (
                <Reveal key={principle.title} delay={i * 70}>
                  <div className="rv flex items-baseline gap-5 border-t border-ink/[0.07] py-5 first:border-t-0 first:pt-0 last:pb-0">
                    <span className="text-[12px] font-semibold tracking-label text-ink/30">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-ink">{principle.title}</h3>
                      <p className="mt-1 max-w-md text-[15px] leading-relaxed text-ink/60">
                        {principle.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Panel>
      </div>
    </section>
  )
}
