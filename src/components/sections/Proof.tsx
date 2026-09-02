import { proof } from '../../content/home'
import { useCountUp, useInView } from '../../lib/motion'
import { Panel, SectionHeader } from '../ui/Panel'

function Stat({ stat, index, last }: { stat: (typeof proof.stats)[number]; index: number; last: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.5)
  const value = useCountUp(stat.value, inView, { decimals: stat.decimals })

  return (
    <div
      ref={ref}
      className={`rv px-6 py-8 sm:px-9 sm:py-10 ${inView ? 'in' : ''} ${
        last ? '' : 'border-b border-ink/[0.07] lg:border-b-0 lg:border-r'
      }`}
      style={{ '--rv-delay': `${index * 90}ms` } as React.CSSProperties}
    >
      <p className="whitespace-nowrap text-[clamp(2.1rem,3.6vw,3.4rem)] font-medium leading-none tracking-[-0.03em] text-ink tabular-nums">
        {value.replace('.', ',')}
        <span className="text-accent-soft">{stat.suffix}</span>
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink/55">{stat.label}</p>
    </div>
  )
}

export default function Proof() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          label={proof.label}
          title="Belegt. Nicht behauptet."
          text="Zahlen aus echter Arbeit mit echtem Budget — keine Hochrechnungen, keine Versprechen."
        />

        <Panel punchline="Alle Werte stammen aus dem QSK-Case — im Detail eine Sektion weiter.">
          <div className="grid lg:grid-cols-4">
            {proof.stats.map((stat, i) => (
              <Stat key={stat.label} stat={stat} index={i} last={i === proof.stats.length - 1} />
            ))}
          </div>
        </Panel>
      </div>
    </section>
  )
}
