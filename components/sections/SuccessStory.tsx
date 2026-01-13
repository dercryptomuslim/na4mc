import { Euro, Target } from "lucide-react";

export function SuccessStory() {
  return (
    <section id="ergebnisse" className="py-24 bg-white relative overflow-hidden border-y border-slate-100">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/70 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4 block">Erfolgsgeschichte</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Die QSK Methode: <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">3,5 Mio. € Umsatz</span> in 4 Jahren.
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Wir haben einen Koran-Lesekurs im DACH-Raum aus dem Nichts aufgebaut. 
              Mit nur 300.000€ Ad Spend haben wir über 3,5 Millionen Euro Umsatz generiert.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2 text-orange-600 mb-2 font-bold">
                   <Euro className="w-5 h-5" />
                   Ergebnis pro 1€
                </div>
                <div className="text-3xl font-bold text-slate-900">11,6 €</div>
                <div className="text-sm text-slate-500">Aus 1€ wurden 11,60€ Umsatz</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 mb-2 font-bold">
                   <Target className="w-5 h-5" />
                   Skalierung
                </div>
                <div className="text-3xl font-bold text-slate-900">0 → 3,5 Mio.</div>
                <div className="text-sm text-slate-500">In 4 Jahren aufgebaut</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-amber-200 rounded-3xl rotate-2 opacity-40 transform scale-105"></div>
             <div className="bg-white border border-slate-200 rounded-3xl p-8 relative shadow-xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Warum das funktioniert hat</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 border border-orange-100 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Klare Botschaft</h4>
                      <p className="text-slate-600 text-sm">Nicht “irgendwelche Anzeigen”, sondern eine klare Ansprache, die zur Zielgruppe passt.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 border border-orange-100 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Zielgruppe verstanden</h4>
                      <p className="text-slate-600 text-sm">Fokus auf die muslimische Zielgruppe im DACH-Raum – mit kulturell passenden Inhalten.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 border border-orange-100 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Systematisches Testen</h4>
                      <p className="text-slate-600 text-sm">Wir testen Varianten, werten aus und verbessern – so entstehen Gewinner-Anzeigen.</p>
                    </div>
                  </li>
                </ul>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
