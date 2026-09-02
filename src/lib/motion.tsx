import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'

export const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const finePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches

/* Setzt .in, sobald das Element sichtbar wird (einmalig). */
export function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reducedMotion()) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return { ref, inView }
}

/* Wrapper: fügt bei Sichtbarkeit .in hinzu (steuert .rv / .line-mask / .img-mask Kinder). */
export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  threshold,
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'header' | 'li' | 'span' | 'h2' | 'h3' | 'p' | 'figure'
  threshold?: number
}) {
  const { ref, inView } = useInView<HTMLDivElement>(threshold)
  return (
    <Tag
      ref={ref as never}
      className={`${className} ${inView ? 'in' : ''}`}
      style={{ '--rv-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}

/* Masken-Reveal für mehrzeilige Headlines. */
export function MaskedLines({
  lines,
  className = '',
  stagger = 110,
}: {
  lines: ReactNode[]
  className?: string
  stagger?: number
}) {
  return (
    <>
      {lines.map((line, i) => (
        <span
          key={i}
          className={`line-mask ${className}`}
          style={{ '--rv-delay': `${i * stagger}ms` } as CSSProperties}
        >
          <span>{line}</span>
        </span>
      ))}
    </>
  )
}

/* Zähler-Animation, startet bei Sichtbarkeit. */
export function useCountUp(target: number, inView: boolean, opts?: { duration?: number; decimals?: number }) {
  const { duration = 1600, decimals = 0 } = opts ?? {}
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reducedMotion()) {
      setValue(target)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 4)
      setValue(target * eased)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])

  return value.toFixed(decimals)
}

/* Scroll-Fortschritt 0..1 über die Höhe eines Containers (für Sticky-Choreografie). */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    let active = false

    const measure = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const total = rect.height - vh
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0
      setProgress(p)
    }
    const onScroll = () => {
      if (!active || raf) return
      raf = requestAnimationFrame(measure)
    }
    const io = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting
      if (active) onScroll()
    })
    io.observe(el)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    measure()
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return { ref, progress }
}

/* Globale Pointer-Position, normalisiert auf -1..1 (nur feine Pointer, kein reduced motion). */
export function usePointer() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (reducedMotion() || !finePointer()) return
    let raf = 0
    let next = { x: 0, y: 0 }
    const onMove = (e: PointerEvent) => {
      next = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      }
      if (!raf)
        raf = requestAnimationFrame(() => {
          raf = 0
          setPos(next)
        })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return pos
}

/* Max. ±3° Karten-Tilt. */
export function useTilt(max = 3) {
  const [style, setStyle] = useState<CSSProperties>({})

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      if (reducedMotion() || !finePointer()) return
      const rect = e.currentTarget.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      setStyle({
        transform: `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`,
        transition: 'transform 0.15s ease-out',
      })
    },
    [max],
  )

  const onPointerLeave = useCallback(() => {
    setStyle({ transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)', transition: 'transform 0.6s var(--ease)' })
  }, [])

  return { style, onPointerMove, onPointerLeave }
}
