import { ArrowRight } from 'lucide-react'
import { engagement } from '../../content/home'
import { Reveal } from '../../lib/motion'
import { Panel, SectionHeader } from '../ui/Panel'

export default function Engagement() {
  return (
    <section id="engagement" className="relative py-20 sm:py-28">
      <span id="pakete" className="absolute -top-20" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          label={engagement.label}
          title={
            <>
              Drei Stufen.
              <br />
              Ein Ziel.
            </>
          }
          text={engagement.sub}
        />

        <Panel punchline="Umfang und Konditionen klären wir im Erstgespräch — passend zu Phase und Ziel.">
          {engagement.levels.map((level, i) => (
            <Reveal key={level.en} delay={i * 70}>
              <a
                href="/termin.html"
                className={`rv group grid grid-cols-1 gap-3 p-7 transition-colors duration-500 hover:bg-ink/[0.03] sm:grid-cols-[140px_1fr_auto] sm:items-center sm:gap-8 sm:p-9 ${
                  i > 0 ? 'border-t border-ink/[0.07]' : ''
                }`}
              >
                <span className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-label text-ink/45">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {level.en}
                </span>
                <span>
                  <span className="block text-2xl font-medium tracking-[-0.01em] text-ink">
                    {level.title}
                  </span>
                  <span className="mt-1.5 block max-w-xl text-[15px] leading-relaxed text-ink/65">
                    {level.desc}
                  </span>
                  <span className="mt-1 block text-sm text-ink/45">{level.audience}</span>
                </span>
                <span className="btn-arrow inline-flex items-center gap-2 text-sm font-medium text-ink/60 transition-colors group-hover:text-accent-soft">
                  Erstgespräch <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </Reveal>
          ))}
        </Panel>
      </div>
    </section>
  )
}
