import { clientLogos, proof } from '../../content/home'
import { Reveal, useCountUp, useInView } from '../../lib/motion'

function Stat({ stat, index }: { stat: (typeof proof.stats)[number]; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.5)
  const value = useCountUp(stat.value, inView, { decimals: stat.decimals })

  return (
    <div
      ref={ref}
      className={`rv border-t border-ink/10 pt-6 ${inView ? 'in' : ''}`}
      style={{ '--rv-delay': `${index * 90}ms` } as React.CSSProperties}
    >
      <p className="whitespace-nowrap text-[clamp(2.2rem,4.6vw,4.25rem)] font-medium leading-none tracking-[-0.03em] text-ink tabular-nums">
        {value.replace('.', ',')}
        <span className="text-accent">{stat.suffix}</span>
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink/60">{stat.label}</p>
    </div>
  )
}

export default function Proof() {
  return (
    <section className="border-t border-ink/5 py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="rv mb-5 text-[11px] font-semibold uppercase tracking-label text-accent-soft">
            {proof.label}
          </p>
        </Reveal>
        <Reveal>
          <h2 className="rv max-w-xl text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-ink">
            {proof.headline}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {proof.stats.map((stat, i) => (
            <Stat key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        <Reveal delay={150}>
          <div className="rv mt-20">
            <p className="mb-8 text-[11px] font-semibold uppercase tracking-label text-ink/35">
              {proof.logosLabel}
            </p>
            <div className="group flex flex-wrap items-center gap-x-12 gap-y-8">
              {clientLogos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="h-9 w-auto max-w-[130px] object-contain opacity-60 grayscale invert mix-blend-screen transition-opacity duration-500 group-hover:opacity-95 sm:h-11"
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
