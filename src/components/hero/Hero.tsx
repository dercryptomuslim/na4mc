import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import SystemStack from '../three/SystemStack'
import { hero } from '../../content/home'
import { MaskedLines, Reveal, reducedMotion } from '../../lib/motion'

/* Explode-Fortschritt des Objekts über die ersten ~600px Scroll. */
function useHeroScroll() {
  const [p, setP] = useState(0)
  useEffect(() => {
    if (reducedMotion()) return
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        setP(Math.min(1, window.scrollY / 600))
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return p
}

export default function Hero() {
  const progress = useHeroScroll()

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Subtile geometrische Textur + Horizontglühen */}
      <div
        className="pointer-events-none absolute inset-0 bg-repeat [mask-image:radial-gradient(85%_75%_at_50%_38%,black,transparent)]"
        style={{ backgroundImage: 'url(/geometry.svg)', backgroundSize: '160px 160px' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 -bottom-40 h-[420px] rounded-[100%] bg-accent/[0.09] blur-[110px]"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-12 px-5 pb-24 pt-32 sm:px-8 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:pt-24">
        <div>
          <Reveal>
            <p className="rv mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-label text-ink/50">
              <span className="inline-block h-2 w-2 bg-accent" aria-hidden="true" />
              {hero.label}
            </p>
          </Reveal>

          <h1 className="in text-[clamp(2.6rem,7.2vw,6rem)] font-medium leading-[0.99] tracking-[-0.03em] text-ink">
            <MaskedLines
              lines={[
                'Wir bauen',
                'und skalieren',
                'muslimische',
                <span key="l4">
                  Brands<span className="text-accent">.</span>
                </span>,
              ]}
            />
          </h1>

          <Reveal delay={350}>
            <p className="rv mt-7 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
              {hero.sub}
            </p>
          </Reveal>

          <Reveal delay={500}>
            <div className="rv mt-9 flex flex-wrap items-center gap-4">
              <a
                href={hero.primaryCta.href}
                className="btn-arrow inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_32px_rgba(232,85,63,0.4)] transition-all hover:brightness-110"
              >
                {hero.primaryCta.label} <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="btn-arrow inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-ink/80 ring-1 ring-ink/20 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {hero.secondaryCta.label} <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={250} className="rv flex justify-center lg:justify-end">
          <SystemStack
            variant="hero"
            progress={progress}
            size={300}
            className="sm:!h-[380px] sm:!w-[380px] lg:mr-6 lg:!h-[440px] lg:!w-[440px]"
          />
        </Reveal>
      </div>

      {/* Scroll-Indikator */}
      <div
        className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold uppercase tracking-label text-ink/40">Scroll</span>
        <div className="scroll-line h-12 w-px" />
      </div>
    </section>
  )
}
