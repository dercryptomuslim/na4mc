import { Check, X } from "lucide-react";

export function Comparison() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Warum Meta Ads oft scheitern
          </h2>
          <p className="text-slate-600 text-lg">
            Viele Brands verbrennen Budget ohne echte Ergebnisse. Sie setzen auf Agenturen, die nur Knöpfe drücken, statt das Geschäft zu verstehen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Klassische Agenturen */}
          <div className="rounded-3xl p-8 border border-red-100 bg-red-50/30">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Klassische Agenturen / Inhouse</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Taktische Einzelmaßnahmen ohne Strategie",
                "Austauschbarer Content ohne Tiefgang",
                "Kein Plan für systematisches Testen",
                "Operative Umsetzung ohne Markenverständnis",
                "Fokus auf unwichtige Kennzahlen (Vanity Metrics)",
                "Oft Junior-Level Umsetzung & fehlende Tiefe"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* NA4MC Ansatz */}
          <div className="rounded-3xl p-8 border border-green-100 bg-green-50/30 shadow-xl shadow-green-900/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-bl-full"></div>
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Der NA4MC Ansatz</h3>
            </div>
            <ul className="space-y-4 relative z-10">
              {[
                "Ganzheitliche Strategien für nachhaltige Skalierung",
                "Creatives mit Markenidentität & Verkaufspsychologie",
                "Strukturierter Test-Prozess & Creator-Netzwerk",
                "Strategische Beratung auf Augenhöhe",
                "Analyse echter Business-Zahlen (ROAS, Deckungsbeitrag)",
                "Senior-Expertise: Performance, Brand & Profitabilität"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-800 font-medium">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
