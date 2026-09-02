import { serviceGroups } from '../../content/home'
import { MaskedLines, Reveal, useTilt } from '../../lib/motion'

const spans = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-7']

function GroupCard({ group, index }: { group: (typeof serviceGroups)[number]; index: number }) {
  const tilt = useTilt(2.5)

  return (
    <Reveal delay={index * 80} className={`rv col-span-12 ${spans[index]}`}>
      <div
        {...tilt}
        className={`h-full rounded-2xl border p-7 transition-colors duration-500 sm:p-9 ${
          index === 0
            ? 'border-accent/30 bg-accent/[0.05]'
            : 'border-ink/10 bg-ink/[0.02] hover:border-ink/20'
        }`}
        style={tilt.style}
      >
        <p className="text-[11px] font-semibold uppercase tracking-label text-accent-soft">
          {group.n} / {group.en}
        </p>
        <h3 className="mt-3 text-2xl font-medium tracking-[-0.01em] text-ink sm:text-3xl">
          {group.title}
        </h3>
        <ul className="mt-6">
          {group.items.map((item) => (
            <li
              key={item}
              className="flex items-center justify-between border-t border-ink/10 py-3 text-[15px] text-ink/75 last:border-b last:border-ink/10"
            >
              {item}
              <span className="text-ink/25" aria-hidden="true">
                →
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

export default function ServiceGroups() {
  return (
    <section id="leistungen" className="relative border-t border-ink/5 py-24 sm:py-36">
      <span id="services" className="absolute -top-20" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="rv mb-5 text-[11px] font-semibold uppercase tracking-label text-accent-soft">
            07 / Leistungen
          </p>
        </Reveal>
        <Reveal as="h2" className="in max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-ink">
          <MaskedLines lines={['Vier Disziplinen.', 'Ein Anspruch: Es muss wirken.']} />
        </Reveal>

        <div className="mt-14 grid grid-cols-12 gap-5">
          {serviceGroups.map((group, i) => (
            <GroupCard key={group.en} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
