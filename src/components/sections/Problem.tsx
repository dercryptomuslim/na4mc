import { problem } from '../../content/home'
import { Reveal } from '../../lib/motion'
import { Panel, SectionHeader } from '../ui/Panel'

export default function Problem() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          label={problem.label}
          title={
            <>
              Gute Produkte
              <br />
              reichen nicht.
            </>
          }
          text={problem.intro}
        />

        <Panel punchline={problem.outro} className="px-6 py-4 sm:px-10 sm:py-6">
          <ol>
            {problem.lines.map((line, i) => (
              <Reveal as="li" key={line} delay={i * 80} threshold={0.5}>
                <p className="rv flex items-baseline gap-6 border-b border-ink/[0.07] py-5 text-lg font-medium leading-snug tracking-[-0.01em] text-ink/85 transition-colors last:border-b-0 hover:text-ink sm:py-6 sm:text-2xl">
                  <span className="w-7 shrink-0 text-[12px] font-semibold tracking-label text-ink/30">
                    0{i + 1}
                  </span>
                  {line}
                </p>
              </Reveal>
            ))}
          </ol>
        </Panel>
      </div>
    </section>
  )
}
