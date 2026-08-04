export default function SunCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-36 text-center">
      {/* Sonnenstrahlen */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[460px] [background:repeating-conic-gradient(from_-90deg_at_50%_100%,rgba(232,85,63,0.13)_0deg_5deg,transparent_5deg_13deg)] [mask-image:radial-gradient(70%_100%_at_50%_100%,black,transparent)]" />
      {/* Aufgehende Sonne */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-40 w-[620px] h-[310px] rounded-t-full bg-gradient-to-t from-[#e8553f]/60 via-[#f0803c]/25 to-transparent blur-2xl" />
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-24 w-[520px] h-[260px] rounded-t-full border-2 border-b-0 border-[#f0803c]/40 [mask-image:linear-gradient(to_bottom,black_40%,transparent)]" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8">
        <span className="block text-[13px] font-medium tracking-[0.14em] uppercase text-[#f0803c] mb-5">
          Der nächste Schritt
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08] bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent mb-6">
          Zeit, dich neu
          <br />
          zu erfinden.
        </h2>
        <p className="text-white/60 sm:text-lg leading-relaxed max-w-xl mx-auto mb-9">
          Online Marketing, Unternehmensberatung und eine Marke, die im Zeitgeist ankommt — aus
          einer Hand. Lass uns herausfinden, was in deinem Business steckt.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="/termin.html"
            className="bg-[#e8553f] text-white text-sm font-medium px-7 py-3 rounded-full shadow-[0_0_32px_rgba(232,85,63,0.45)] hover:brightness-110 hover:shadow-[0_0_44px_rgba(232,85,63,0.6)] transition-all"
          >
            Kostenloses Erstgespräch
          </a>
          <a
            href="/bewerbung.html"
            className="text-white/80 text-sm font-medium px-7 py-3 rounded-full ring-1 ring-white/20 hover:bg-white/5 hover:text-white transition-colors"
          >
            Potenzialanalyse starten
          </a>
        </div>
      </div>
    </section>
  )
}
