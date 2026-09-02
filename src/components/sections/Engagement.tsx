import { ArrowRight } from 'lucide-react'
import { engagement } from '../../content/home'
import { MaskedLines, Reveal } from '../../lib/motion'

export default function Engagement() {
  return (
    <section id="engagement" className="relative border-t border-ink/5 py-24 sm:py-36">
      <span id="pakete" className="absolute -top-20" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="rv mb-5 text-[11px] font-semibold uppercase tracking-label text-accent-soft">
            {engagement.label}
          </p>
        </Reveal>
        <Reveal as="h2" className="in text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-ink">
          <MaskedLines lines={['Drei Stufen.', 'Ein Ziel.']} />
        </Reveal>
        <Reveal delay={150}>
          <p className="rv mt-5 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            {engagement.sub}
          </p>
        </Reveal>

        <div className="mt-14">
          {engagement.levels.map((level, i) => (
            <Reveal key={level.en} delay={i * 80}>
              <a
                href="/termin.html"
                className="rv group grid grid-cols-1 gap-4 border-t border-ink/10 py-9 transition-colors duration-500 last:border-b last:border-ink/10 hover:bg-ink/[0.02] sm:grid-cols-[150px_1fr_auto] sm:items-center sm:gap-8 sm:py-10"
              >
                <span className="text-[11px] font-semibold uppercase tracking-label text-accent-soft">
                  {level.en}
                </span>
                <span>
                  <span className="block text-2xl font-medium tracking-[-0.01em] text-ink sm:text-3xl">
                    {level.title}
                  </span>
                  <span className="mt-2 block max-w-xl text-[15px] leading-relaxed text-ink/65">
                    {level.desc}
                  </span>
                  <span className="mt-1.5 block text-sm text-ink/45">{level.audience}</span>
                </span>
                <span className="btn-arrow inline-flex items-center gap-2 text-sm font-medium text-ink/60 transition-colors group-hover:text-accent-soft">
                  Erstgespräch <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
