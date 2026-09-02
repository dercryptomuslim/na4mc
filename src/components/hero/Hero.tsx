import { ArrowRight } from 'lucide-react'
import { clientLogos, hero } from '../../content/home'
import { MaskedLines, Reveal } from '../../lib/motion'

/*
 * Cinematischer Hero: Higgsfield-Sonnenaufgangs-Frames im Crossfade,
 * zentrierte Komposition, Trust-Logo-Leiste am Fuß.
 */
export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Frames + Ken-Burns */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 animate-bg-zoom">
          {[1, 2, 3, 4].map((n) => (
            <img
              key={n}
              src={`/bg/frame-${n}.webp`}
              alt=""
              draggable={false}
              decoding="async"
              className={`absolute inset-0 h-full w-full object-cover bg-frame bg-frame-${n}`}
            />
          ))}
        </div>
        {/* Lesbarkeits-Overlays */}
        <div className="absolute inset-0 bg-base/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-base/80 via-base/20 to-base" />
      </div>

      <div className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-5 pb-16 pt-32 text-center sm:px-8">
        <Reveal>
          <p className="rv mb-7 inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-base/40 px-4 py-2 text-[11px] font-semibold uppercase tracking-label text-ink/70 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Marketing · Beratung · Systeme · Produkte
          </p>
        </Reveal>

        <h1 className="in text-[clamp(2.5rem,6vw,4.9rem)] font-medium leading-[1.04] tracking-[-0.03em] text-ink [text-shadow:0_2px_28px_rgba(10,12,18,0.65)]">
          <MaskedLines
            lines={[
              'Wir bauen und skalieren',
              <span key="l2">
                muslimische Brands<span className="text-accent-soft">.</span>
              </span>,
            ]}
          />
        </h1>

        <Reveal delay={280}>
          <p className="rv mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/80 [text-shadow:0_1px_14px_rgba(10,12,18,0.8)] sm:text-lg">
            {hero.sub}
          </p>
        </Reveal>

        <Reveal delay={420}>
          <div className="rv mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={hero.primaryCta.href}
              className="btn-arrow inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_34px_rgba(232,85,63,0.45)] transition-all hover:brightness-110"
            >
              {hero.primaryCta.label} <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="rounded-full border border-ink/25 bg-base/30 px-6 py-3.5 text-sm font-medium text-ink/85 backdrop-blur-md transition-colors hover:bg-ink/10 hover:text-ink"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </Reveal>
      </div>

      {/* Trust-Leiste */}
      <Reveal delay={550} className="rv relative mx-auto w-full max-w-5xl px-5 pb-16 sm:px-8">
        <p className="mb-6 text-center text-[10px] font-semibold uppercase tracking-label text-ink/40">
          Bekannt aus der Zusammenarbeit mit
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {clientLogos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-7 w-auto max-w-[110px] object-contain opacity-55 grayscale invert mix-blend-screen sm:h-9"
            />
          ))}
        </div>
      </Reveal>

      {/* Scroll-Indikator */}
      <div
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 lg:flex"
        aria-hidden="true"
      >
        <div className="scroll-line h-10 w-px" />
      </div>
    </section>
  )
}
