import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ArrowUp, Sparkles } from 'lucide-react'
import Navbar from './Navbar'
import DashboardMockup from './DashboardMockup'

const DESIGN_WIDTH = 896

function ScaledDashboard({ children }: { children: ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState<number | undefined>(undefined)

  useEffect(() => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    const update = () => {
      const s = outer.clientWidth / DESIGN_WIDTH
      setScale(s)
      setHeight(inner.offsetHeight * s)
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(outer)
    observer.observe(inner)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={outerRef} style={{ height }}>
      <div
        ref={innerRef}
        style={{
          width: DESIGN_WIDTH,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default function Hero() {
  const [query, setQuery] = useState('')

  const submitQuery = () => {
    const subject = encodeURIComponent('Anfrage über na4mc.de')
    const body = encodeURIComponent(query || 'Salam, ich interessiere mich für ein kostenloses Erstgespräch.')
    window.location.href = `mailto:hello@na4mc.de?subject=${subject}&body=${body}`
  }

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#0B1120] flex flex-col">
      {/* Starfield */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: 'url(/stars.svg)' }}
      />
      {/* Aurora glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full bg-[#e8553f]/[0.13] blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -left-48 w-[520px] h-[420px] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/4 -right-48 w-[520px] h-[420px] rounded-full bg-[#D4AF37]/[0.07] blur-[120px]" />

      <Navbar />

      <div className="flex-1 min-h-8 sm:min-h-12 lg:min-h-16 shrink-0" />

      <div className="relative z-10 flex flex-col items-center text-center px-5">
        <h1 className="font-normal leading-[1.05] tracking-tight text-[40px] min-[400px]:text-[44px] sm:text-6xl lg:text-7xl xl:text-[80px]">
          <span className="block animate-fade-up bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent pb-1">
            Halal skalieren.
          </span>
          <span className="block animate-fade-up [animation-delay:100ms] bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent pb-2">
            Mühelos.
          </span>
        </h1>

        <form
          className="animate-fade-up [animation-delay:220ms] mt-5 sm:mt-6 w-full max-w-xl"
          onSubmit={(e) => {
            e.preventDefault()
            submitQuery()
          }}
        >
          <div className="flex items-center gap-3 rounded-full bg-white/[0.06] backdrop-blur-md ring-1 ring-white/10 pl-5 pr-1.5 py-1.5">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Wobei können wir dir helfen?"
              className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder-white/40 outline-none py-2"
            />
            <button
              type="submit"
              aria-label="Anfrage senden"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#e8553f] text-white shadow-[0_0_20px_rgba(232,85,63,0.45)] hover:scale-105 active:scale-95 transition-transform shrink-0"
            >
              <ArrowUp className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>
        </form>

        <p className="animate-fade-up [animation-delay:340ms] mt-4 sm:mt-5 text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md">
          Datengetriebenes Marketing für muslimische Brands
          <br />
          — Strategie, Content &amp;{' '}
          <Sparkles className="inline w-4 h-4 -mt-1 text-[#f0803c]" /> ethische Automatisierung
        </p>

        <div className="animate-fade-up [animation-delay:460ms] mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/termin.html"
            className="bg-[#e8553f] text-white text-sm font-medium px-6 py-2.5 rounded-full shadow-[0_0_28px_rgba(232,85,63,0.4)] hover:brightness-110 hover:shadow-[0_0_36px_rgba(232,85,63,0.55)] transition-all"
          >
            Kostenloses Erstgespräch
          </a>
          <a
            href="#ergebnisse"
            className="text-white/80 text-sm font-medium px-6 py-2.5 rounded-full ring-1 ring-white/20 hover:bg-white/5 hover:text-white transition-colors"
          >
            Ergebnisse ansehen
          </a>
        </div>
      </div>

      <div className="flex-1 min-h-10 sm:min-h-12 lg:min-h-16 shrink-0" />

      <div className="animate-hero-rise [animation-delay:620ms] relative z-0 w-[92%] sm:w-[84%] lg:w-[72%] max-w-4xl mx-auto shrink-0 -mb-10 sm:-mb-20 lg:-mb-32">
        <div className="pointer-events-none absolute -inset-x-16 -top-10 h-72 rounded-full bg-[#e8553f]/[0.12] blur-[100px]" />
        <ScaledDashboard>
          <DashboardMockup />
        </ScaledDashboard>
      </div>

      {/* Bottom fade into page background */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-24 w-full bg-gradient-to-b from-transparent to-[#0B1120]" />
    </section>
  )
}
