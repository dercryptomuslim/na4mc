import { founder } from '../../content/home'
import { Reveal } from '../../lib/motion'

export default function Founder() {
  return (
    <section id="founder" className="border-t border-ink/5 py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal threshold={0.3}>
            <figure className="img-mask relative overflow-hidden rounded-2xl border border-ink/10">
              <img
                src="/bg/founder.webp"
                alt="Mustafa Ali, Gründer von NA4MC, blickt über Dünen auf die aufgehende Sonne"
                loading="lazy"
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
              <figcaption className="absolute inset-x-4 bottom-4 rounded-xl border border-ink/10 bg-base/90 px-5 py-4 backdrop-blur-md">
                <p className="text-sm font-medium text-ink">{founder.name}</p>
                <p className="mt-0.5 text-xs text-ink/75">{founder.roles.join(' · ')}</p>
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Reveal>
              <p className="rv mb-5 text-[11px] font-semibold uppercase tracking-label text-accent-soft">
                {founder.label}
              </p>
            </Reveal>
            <Reveal>
              <h2 className="rv text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.0] tracking-[-0.03em] text-ink">
                {founder.headline}
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="rv mt-6 max-w-lg text-base leading-relaxed text-ink/70 sm:text-lg">
                {founder.body}
              </p>
            </Reveal>
            <Reveal delay={250}>
              <blockquote className="rv mt-9 max-w-lg border-l-2 border-accent pl-6 text-lg font-medium leading-relaxed text-ink/85">
                {founder.quote}
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
