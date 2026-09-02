import { problem } from '../../content/home'
import { MaskedLines, Reveal } from '../../lib/motion'

export default function Problem() {
  return (
    <section className="relative border-t border-ink/5 py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="rv mb-5 text-[11px] font-semibold uppercase tracking-label text-accent-soft">
                {problem.label}
              </p>
            </Reveal>
            <Reveal as="h2" className="in text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-ink">
              <MaskedLines lines={['Gute Produkte', 'reichen nicht.']} />
            </Reveal>
            <Reveal delay={200}>
              <p className="rv mt-6 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
                {problem.intro}
              </p>
            </Reveal>
          </div>

          <div className="lg:pt-10">
            <ol>
              {problem.lines.map((line, i) => (
                <Reveal as="li" key={line} delay={i * 90} threshold={0.5}>
                  <p className="rv border-t border-ink/10 py-5 text-xl font-medium leading-snug tracking-[-0.01em] text-ink/85 transition-colors hover:text-ink sm:py-6 sm:text-2xl lg:text-[1.75rem]">
                    <span className="mr-5 inline-block w-8 text-[13px] font-semibold tracking-label text-ink/30 align-middle">
                      0{i + 1}
                    </span>
                    {line}
                  </p>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={200}>
              <p className="rv border-t border-ink/10 pt-6 text-base leading-relaxed text-accent-soft sm:text-lg">
                {problem.outro}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
