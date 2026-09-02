import { serviceGroups } from '../../content/home'
import { Reveal, useTilt } from '../../lib/motion'
import { SectionHeader } from '../ui/Panel'

function GroupCard({ group, index }: { group: (typeof serviceGroups)[number]; index: number }) {
  const tilt = useTilt(2)

  return (
    <Reveal delay={index * 70} className="rv">
      <div
        {...tilt}
        className="h-full overflow-hidden rounded-[28px] border border-ink/[0.08] bg-[#10131B] p-7 transition-colors duration-500 hover:border-ink/15 sm:p-9"
        style={tilt.style}
      >
        <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-label text-ink/45">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {group.en}
        </p>
        <h3 className="mt-3 text-2xl font-medium tracking-[-0.01em] text-ink">{group.title}</h3>
        <ul className="mt-6">
          {group.items.map((item) => (
            <li
              key={item}
              className="flex items-center justify-between border-t border-ink/[0.07] py-3 text-[15px] text-ink/70"
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
    <section id="leistungen" className="relative py-20 sm:py-28">
      <span id="services" className="absolute -top-20" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          label="06 — Leistungen"
          title={
            <>
              Vier Disziplinen.
              <br />
              Ein Anspruch: Es muss wirken.
            </>
          }
          text="Wir betreuen keine Kanäle im Vakuum. Jede Disziplin zahlt auf dasselbe System ein — von Strategie bis Umsetzung."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {serviceGroups.map((group, i) => (
            <GroupCard key={group.en} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
