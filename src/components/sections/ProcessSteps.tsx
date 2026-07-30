import { ArrowRight } from 'lucide-react'

const steps = [
  {
    n: '01',
    title: 'Analyse & Audit',
    desc: 'Wir prüfen Status quo, Zielgruppe, Angebot und Inhalte. Danach ist klar: Was funktioniert – und was nicht.',
  },
  {
    n: '02',
    title: 'Strategie & Prozesse',
    desc: 'Wir bauen ein klares System: Inhalte, Abläufe, Verantwortlichkeiten und eine einfache Messung der Ergebnisse.',
  },
  {
    n: '03',
    title: 'Produktion & Werbung',
    desc: 'Von Konzept & Skript über Video/Bild bis zur technischen Umsetzung auf Meta, TikTok und Google.',
  },
  {
    n: '04',
    title: 'Auswertung & Optimierung',
    desc: 'Alle 2 Wochen oder monatlich: KPI-Auswertung, Learnings, nächste Tests. So wird es planbar.',
  },
]

export default function ProcessSteps() {
  return (
    <section id="ablauf" className="scroll-mt-8 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
            So arbeiten wir zusammen
          </h2>
          <p className="text-white/60 mt-4 sm:text-lg leading-relaxed">
            Einfach, transparent und mit klaren Schritten – damit du weißt, was als Nächstes
            passiert.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.n}
              className="rounded-3xl ring-1 ring-white/10 bg-white/[0.03] p-7 sm:p-8 hover:bg-white/[0.05] transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-sm font-medium text-[#f0803c] bg-[#e8553f]/12 ring-1 ring-[#e8553f]/25 rounded-full px-3 py-1">
                  {step.n}
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-white">{step.title}</h3>
              </div>
              <p className="text-white/60 text-sm sm:text-[15px] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/bewerbung.html"
            className="inline-flex items-center gap-2 bg-[#e8553f] text-white text-sm font-medium px-7 py-3 rounded-full shadow-[0_0_28px_rgba(232,85,63,0.35)] hover:brightness-110 hover:shadow-[0_0_36px_rgba(232,85,63,0.5)] transition-all"
          >
            Potenzialanalyse anfragen <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
