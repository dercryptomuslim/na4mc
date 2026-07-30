import { Check, X } from 'lucide-react'

const classic = [
  'Taktische Einzelmaßnahmen ohne Strategie',
  'Austauschbarer Content ohne Tiefgang',
  'Kein Plan für systematisches Testen',
  'Operative Umsetzung ohne Markenverständnis',
  'Fokus auf unwichtige Kennzahlen (Vanity Metrics)',
  'Oft Junior-Level Umsetzung & fehlende Tiefe',
]

const na4mc = [
  'Ganzheitliche Strategien für nachhaltige Skalierung',
  'Creatives mit Markenidentität & Verkaufspsychologie',
  'Strukturierter Test-Prozess & Creator-Netzwerk',
  'Strategische Beratung auf Augenhöhe',
  'Analyse echter Business-Zahlen (ROAS, Deckungsbeitrag)',
  'Senior-Expertise: Performance, Brand & Profitabilität',
]

export default function Comparison() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 mb-5">
            Warum Meta Ads oft scheitern
          </h2>
          <p className="text-gray-600 sm:text-lg leading-relaxed">
            Viele Brands verbrennen Budget ohne echte Ergebnisse. Sie setzen auf Agenturen, die nur
            Knöpfe drücken, statt das Geschäft zu verstehen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="rounded-3xl p-7 sm:p-8 ring-1 ring-red-100 bg-red-50/40">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Klassische Agenturen / Inhouse</h3>
            </div>
            <ul className="space-y-3.5">
              {classic.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600 text-sm sm:text-[15px]">
                  <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl p-7 sm:p-8 ring-1 ring-green-100 bg-green-50/40 shadow-xl shadow-green-900/5">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Der NA4MC Ansatz</h3>
            </div>
            <ul className="space-y-3.5">
              {na4mc.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-800 text-sm sm:text-[15px] font-medium">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
