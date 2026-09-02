import { founder } from '../../content/home'
import { Reveal } from '../../lib/motion'
import { Panel, SectionHeader } from '../ui/Panel'

export default function Founder() {
  return (
    <section id="founder" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          label={founder.label}
          title="Founder. Marketer. Builder."
          text="Gründergeführt heißt: Der Kopf hinter der Strategie steht selbst im Markt — mit eigenen Produkten und eigenem Budget."
        />

        <Panel punchline="Strategie von jemandem, der selbst im Markt steht.">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal threshold={0.3}>
              <figure className="img-mask relative h-full">
                <img
                  src="/bg/founder.webp"
                  alt="Mustafa Ali, Gründer von NA4MC, blickt über Dünen auf die aufgehende Sonne"
                  loading="lazy"
                  className="h-[340px] w-full object-cover sm:h-[420px] lg:h-full"
                />
                <figcaption className="absolute inset-x-4 bottom-4 rounded-xl border border-ink/10 bg-base/90 px-5 py-3.5 backdrop-blur-md">
                  <p className="text-sm font-medium text-ink">{founder.name}</p>
                  <p className="mt-0.5 text-xs text-ink/75">{founder.roles.join(' · ')}</p>
                </figcaption>
              </figure>
            </Reveal>

            <div className="p-7 sm:p-10">
              <p className="max-w-lg text-base leading-relaxed text-ink/75 sm:text-lg">
                {founder.body}
              </p>
              <blockquote className="mt-8 max-w-lg border-l-2 border-accent pl-6 text-lg font-medium leading-relaxed text-ink/90">
                {founder.quote}
              </blockquote>
            </div>
          </div>
        </Panel>
      </div>
    </section>
  )
}
