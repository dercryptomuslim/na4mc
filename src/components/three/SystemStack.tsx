import Logo from '../Logo'
import { pillars } from '../../content/home'
import { usePointer, reducedMotion } from '../../lib/motion'

/*
 * Signature-Objekt: vier isometrisch gestapelte Ebenen = das NA4MC-System
 * (01 Strategy / 02 Marketing / 03 Systems / 04 Products).
 * CSS-3D statt WebGL: gleiche Erzählung, keine Bundle-Kosten, 60 fps.
 */
type Props = {
  variant: 'hero' | 'system' | 'cta'
  active?: number
  progress?: number
  size?: number
  className?: string
}

export default function SystemStack({
  variant,
  active = -1,
  progress = 0,
  size = 300,
  className = '',
}: Props) {
  const pointer = usePointer()
  const isHero = variant === 'hero'
  const still = reducedMotion()

  const gapBase = variant === 'cta' ? 24 : isHero ? 38 : 52
  const gap = gapBase + (isHero ? progress * 55 : 0)
  const tiltX = isHero && !still ? pointer.y * 5 : 0
  const tiltZ = isHero && !still ? pointer.x * 5 : 0

  return (
    <div
      className={`[perspective:1400px] ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <div className={still ? 'h-full w-full' : 'float-y h-full w-full'}>
        <div
          className="relative h-full w-full transition-transform duration-500 ease-brand [transform-style:preserve-3d]"
          style={{ transform: `rotateX(${56 + tiltX}deg) rotateZ(${-38 + tiltZ}deg)` }}
        >
          {pillars.map((pillar, i) => {
            const z = (1.5 - i) * gap
            const isActive = active === i
            const dimmed = active >= 0 && !isActive
            return (
              <div
                key={pillar.n}
                className={`absolute inset-[6%] rounded-3xl border transition-all duration-500 ease-brand ${
                  isActive
                    ? 'border-accent/70 bg-accent/10 shadow-[0_0_60px_rgba(232,85,63,0.35)]'
                    : dimmed
                      ? 'border-ink/10 bg-ink/[0.02] opacity-50'
                      : 'border-ink/15 bg-ink/[0.04] shadow-[0_30px_60px_rgba(0,0,0,0.35)]'
                }`}
                style={{ transform: `translateZ(${z}px)` }}
              >
                <span
                  className={`absolute left-5 top-4 text-[10px] font-semibold tracking-label ${
                    isActive ? 'text-accent-soft' : 'text-ink/35'
                  }`}
                >
                  {pillar.n} / {pillar.en}
                </span>
                {i === 0 && (
                  <Logo className="absolute inset-0 m-auto h-[30%] w-[30%] text-accent drop-shadow-[0_0_18px_rgba(232,85,63,0.45)]" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
