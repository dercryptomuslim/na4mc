import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react'

const beratungChecks = [
  'Analyse & Strategie statt Bauchgefühl',
  'Prozesse & Systeme, die skalieren',
  'Klare KPIs & ehrliches Reporting',
]

const zeitgeistChecks = [
  'Positionierung & Rebranding mit klarer Message',
  'Content-Formate, die der Algorithmus liebt',
  'Trends erkennen, bevor sie Mainstream sind',
]

const zeitgeistTasks = [
  { id: 'ZG-01', label: 'Positionierung geschärft', active: true },
  { id: 'ZG-02', label: 'Rebranding Launch', active: false },
  { id: 'ZG-03', label: 'Content-Relaunch: Reels & Shorts', active: false },
]

function StatCard() {
  return (
    <div className="relative rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-6 sm:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
      <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-40 rounded-full bg-[#e8553f]/10 blur-3xl" />
      <div className="relative space-y-4">
        <div className="rounded-2xl bg-[#0B1120]/80 p-5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] tracking-[0.14em] uppercase text-white/40">
              Reichweite / Monat
            </span>
            <span className="flex items-center gap-1 text-[12px] font-medium text-green-400">
              <TrendingUp className="w-3.5 h-3.5" /> +6,9 %
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-medium text-white mb-3">3.156.200</div>
          <svg viewBox="0 0 120 32" className="w-full h-8" preserveAspectRatio="none" aria-hidden="true">
            <polyline
              fill="none"
              stroke="#4ade80"
              strokeWidth="2"
              points="0,24 15,20 30,23 45,15 60,18 75,10 90,14 105,6 120,9"
            />
          </svg>
        </div>
        <div className="flex items-center justify-between rounded-2xl bg-[#0B1120]/80 p-5">
          <div>
            <p className="text-[11px] tracking-[0.14em] uppercase text-white/40 mb-1">
              Ø Ergebnis pro 1 € Ad Spend
            </p>
            <p className="text-2xl font-medium text-white">11,6 €</p>
          </div>
          <span className="rounded-full bg-[#e8553f]/15 ring-1 ring-[#e8553f]/30 px-3 py-1 text-[12px] font-medium text-[#f0803c]">
            QSK Case
          </span>
        </div>
      </div>
    </div>
  )
}

function TaskCard() {
  return (
    <div className="relative rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-6 sm:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
      <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-72 h-40 rounded-full bg-[#e8553f]/10 blur-3xl" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#f0803c] opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e8553f]" />
          </span>
          <span className="text-[11px] tracking-[0.14em] uppercase text-white/40">
            Zeitgeist-Radar · live
          </span>
        </div>
        <div className="space-y-3">
          {zeitgeistTasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center gap-3 rounded-full px-4 py-3 text-sm ${
                task.active
                  ? 'bg-gradient-to-r from-[#e8553f] to-[#f0803c] text-white shadow-[0_0_28px_rgba(232,85,63,0.35)]'
                  : 'bg-[#0B1120]/80 text-white/70'
              }`}
            >
              <span className={`text-[11px] font-semibold tracking-wider ${task.active ? 'text-white/80' : 'text-white/40'}`}>
                {task.id}
              </span>
              <span className="font-medium truncate">{task.label}</span>
              {task.active && <CheckCircle2 className="w-4 h-4 ml-auto shrink-0" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function FeatureBlocks() {
  return (
    <section className="relative py-20 sm:py-28 border-b border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-20 sm:space-y-28">
        {/* Beratung */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="block text-[13px] font-medium tracking-[0.14em] uppercase text-[#f0803c] mb-4">
              Unternehmensberatung
            </span>
            <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-5 leading-tight">
              Beratung, die das große Ganze sieht.
            </h3>
            <p className="text-white/70 sm:text-lg leading-relaxed mb-7">
              Wir schauen nicht nur auf Kanäle, sondern auf dein Geschäftsmodell: Angebot,
              Prozesse, Zahlen. Danach ist klar, wo dein Wachstum wirklich entsteht.
            </p>
            <ul className="space-y-3.5 mb-8">
              {beratungChecks.map((check) => (
                <li key={check} className="flex items-start gap-3 text-white/80 text-sm sm:text-[15px]">
                  <CheckCircle2 className="w-5 h-5 text-[#f0803c] mt-0.5 shrink-0" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
            <a
              href="/termin.html"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#f0803c] hover:gap-3 transition-all"
            >
              Beratungstermin buchen <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <StatCard />
        </div>

        {/* Neuerfindung / Zeitgeist */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="lg:order-2">
            <span className="block text-[13px] font-medium tracking-[0.14em] uppercase text-[#f0803c] mb-4">
              Neuerfindung
            </span>
            <h3 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-5 leading-tight">
              Neu erfinden — anhand des Zeitgeistes.
            </h3>
            <p className="text-white/70 sm:text-lg leading-relaxed mb-7">
              Märkte drehen sich schneller als je zuvor. Wir bringen deine Marke dahin, wo deine
              Kunden heute sind – und morgen sein werden. Ohne deine Werte zu verlieren.
            </p>
            <ul className="space-y-3.5 mb-8">
              {zeitgeistChecks.map((check) => (
                <li key={check} className="flex items-start gap-3 text-white/80 text-sm sm:text-[15px]">
                  <CheckCircle2 className="w-5 h-5 text-[#f0803c] mt-0.5 shrink-0" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
            <a
              href="/bewerbung.html"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#f0803c] hover:gap-3 transition-all"
            >
              Potenzialanalyse starten <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="lg:order-1">
            <TaskCard />
          </div>
        </div>
      </div>
    </section>
  )
}
