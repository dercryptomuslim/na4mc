import { Cpu, LineChart, Megaphone, RefreshCw } from 'lucide-react'

const items = [
  {
    icon: Megaphone,
    title: 'Online Marketing',
    desc: 'Kampagnen, Content & Ads, die heute funktionieren – nicht gestern.',
  },
  {
    icon: LineChart,
    title: 'Unternehmensberatung',
    desc: 'Strategie, Prozesse & Systeme für echtes, messbares Wachstum.',
  },
  {
    icon: RefreshCw,
    title: 'Neuerfindung',
    desc: 'Positionierung & Rebranding anhand des Zeitgeistes.',
  },
  {
    icon: Cpu,
    title: 'KI & Automatisierung',
    desc: 'Workflows, die skalieren, während du am Geschäft arbeitest.',
  },
]

export default function Benefits() {
  return (
    <section className="border-b border-white/5 py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="sr-only">Unsere Fokus-Bereiche</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] hover:ring-[#e8553f]/30 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#e8553f]/12 ring-1 ring-[#e8553f]/25 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-[#f0803c]" />
              </div>
              <h3 className="font-medium text-white">{item.title}</h3>
              <p className="text-sm text-white/70 mt-1.5 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
