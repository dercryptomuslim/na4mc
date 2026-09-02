import type { ReactNode } from 'react'
import { Reveal } from '../../lib/motion'

/* Fora-inspiriertes Sektions-Panel: große abgerundete Fläche, Visuals dürfen randlos einlaufen. */
export function Panel({
  children,
  className = '',
  punchline,
}: {
  children: ReactNode
  className?: string
  punchline?: string
}) {
  return (
    <Reveal threshold={0.12}>
      <div className="rv">
        <div
          className={`overflow-hidden rounded-[28px] border border-ink/[0.08] bg-[#10131B] ${className}`}
        >
          {children}
        </div>
        {punchline && (
          <p className="mt-5 pl-2 text-sm text-ink/45">{punchline}</p>
        )}
      </div>
    </Reveal>
  )
}

/* Zweispaltiger Sektions-Header: Dot-Label + Headline links, Erklärtext rechts. */
export function SectionHeader({
  label,
  title,
  text,
  className = '',
  inverted = false,
}: {
  label: string
  title: ReactNode
  text?: string
  className?: string
  inverted?: boolean
}) {
  return (
    <div className={`mb-10 grid gap-5 sm:mb-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-10 ${className}`}>
      <div>
        <p className="mb-4 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-label text-ink/45">
          <span className={`h-1.5 w-1.5 rounded-full ${inverted ? 'bg-ink/40' : 'bg-accent'}`} aria-hidden="true" />
          {label}
        </p>
        <h2 className="text-[clamp(1.9rem,3.8vw,3rem)] font-medium leading-[1.06] tracking-[-0.02em] text-ink">
          {title}
        </h2>
      </div>
      {text && (
        <p className="max-w-md text-[15px] leading-relaxed text-ink/60 lg:justify-self-end lg:pb-1.5">
          {text}
        </p>
      )}
    </div>
  )
}
