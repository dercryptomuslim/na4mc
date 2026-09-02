import { ArrowRight } from 'lucide-react'
import SystemStack from '../three/SystemStack'
import { finalCta } from '../../content/home'
import { MaskedLines, Reveal } from '../../lib/motion'

export default function FinalCTA() {
  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden border-t border-ink/5">
      {/* Cinematisches Finale: Wüsten-Sonnenaufgang aus der Higgsfield-Serie */}
      <img
        src="/bg/frame-4.webp"
        alt=""
        loading="lazy"
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-base via-base/35 to-base" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-5 py-28 text-center sm:px-8">
        <Reveal threshold={0.4}>
          <div className="rv">
            <SystemStack variant="cta" size={170} className="mx-auto" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="rv mt-8 text-[11px] font-semibold uppercase tracking-label text-accent-soft">
            {finalCta.kicker}
          </p>
        </Reveal>

        <h2 className="in mt-5 text-[clamp(2.4rem,6vw,4.75rem)] font-medium leading-[1.0] tracking-[-0.03em] text-ink [text-shadow:0_2px_30px_rgba(10,12,18,0.7)]">
          <MaskedLines lines={finalCta.headline} />
        </h2>

        <Reveal delay={300}>
          <div className="rv mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={finalCta.primaryCta.href}
              className="btn-arrow inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_36px_rgba(232,85,63,0.5)] transition-all hover:brightness-110"
            >
              {finalCta.primaryCta.label} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={finalCta.secondaryCta.href}
              className="rounded-full px-6 py-3.5 text-sm font-medium text-ink/85 ring-1 ring-ink/25 backdrop-blur-sm transition-colors hover:bg-ink/10 hover:text-ink"
            >
              {finalCta.secondaryCta.label}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
