import { Euro, Target } from 'lucide-react'

const reasons = [
  {
    title: 'Klare Botschaft',
    desc: 'Nicht „irgendwelche Anzeigen", sondern eine klare Ansprache, die zur Zielgruppe passt.',
  },
  {
    title: 'Zielgruppe verstanden',
    desc: 'Fokus auf die muslimische Zielgruppe im DACH-Raum – mit kulturell passenden Inhalten.',
  },
  {
    title: 'Systematisches Testen',
    desc: 'Wir testen Varianten, werten aus und verbessern – so entstehen Gewinner-Anzeigen.',
  },
]

export default function SuccessStory() {
  return (
    <section id="ergebnisse" className="scroll-mt-8 bg-[#f6f6f4] py-20 sm:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <span className="block text-[13px] font-medium tracking-[0.14em] uppercase text-[#e8553f] mb-4">
              Erfolgsgeschichte
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 mb-5 leading-tight">
              Die QSK Methode:
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8553f] to-amber-500">
                3,5 Mio. € Umsatz
              </span>{' '}
              in 4 Jahren.
            </h2>
            <p className="text-gray-600 sm:text-lg mb-8 leading-relaxed">
              Wir haben einen Koran-Lesekurs im DACH-Raum aus dem Nichts aufgebaut. Mit nur 300.000€
              Ad Spend haben wir über 3,5 Millionen Euro Umsatz generiert.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white p-5 sm:p-6 rounded-2xl ring-1 ring-gray-200">
                <div className="flex items-center gap-2 text-[#e8553f] mb-2 text-sm font-medium">
                  <Euro className="w-4 h-4" />
                  Ergebnis pro 1€
                </div>
                <div className="text-2xl sm:text-3xl font-medium text-gray-900">11,6 €</div>
                <div className="text-sm text-gray-500 mt-1">Aus 1€ wurden 11,60€ Umsatz</div>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-2xl ring-1 ring-gray-200">
                <div className="flex items-center gap-2 text-gray-900 mb-2 text-sm font-medium">
                  <Target className="w-4 h-4" />
                  Skalierung
                </div>
                <div className="text-2xl sm:text-3xl font-medium text-gray-900">0 → 3,5 Mio.</div>
                <div className="text-sm text-gray-500 mt-1">In 4 Jahren aufgebaut</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white ring-1 ring-gray-200 rounded-3xl p-7 sm:p-8 shadow-xl shadow-gray-900/5">
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-gray-900 mb-6 border-b border-gray-100 pb-4">
                Warum das funktioniert hat
              </h3>
              <ul className="space-y-5">
                {reasons.map((reason, i) => (
                  <li key={reason.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-50 text-[#e8553f] ring-1 ring-orange-100 flex items-center justify-center shrink-0 text-sm font-medium">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{reason.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
