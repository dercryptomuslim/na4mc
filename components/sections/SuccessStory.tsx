import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Euro, Target } from "lucide-react";

export function SuccessStory() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4 block">Case Study</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Die QSK Methode: <br/>
              <span className="text-orange-500">3,5 Mio. € Umsatz</span> in 4 Jahren.
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Wir haben einen Koran-Lesekurs im DACH-Raum aus dem Nichts aufgebaut. 
              Mit nur 300.000€ Ad Spend haben wir über 3,5 Millionen Euro Umsatz generiert.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2 text-orange-400 mb-2 font-bold">
                   <Euro className="w-5 h-5" />
                   ROAS
                </div>
                <div className="text-3xl font-bold">11,6x</div>
                <div className="text-sm text-slate-400">Aus 1€ wurden 11,60€</div>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2 text-blue-400 mb-2 font-bold">
                   <Target className="w-5 h-5" />
                   Skalierung
                </div>
                <div className="text-3xl font-bold">0 auf 3,5M</div>
                <div className="text-sm text-slate-400">In 4 Jahren aufgebaut</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-3xl rotate-3 opacity-20 transform scale-105"></div>
             <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 relative shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-4">Das Erfolgsrezept</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h4 className="font-bold mb-1">Markenidentität & Storytelling</h4>
                      <p className="text-slate-400 text-sm">Wir haben nicht nur ein Produkt verkauft, sondern eine Bewegung gestartet.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h4 className="font-bold mb-1">Gezieltes Targeting</h4>
                      <p className="text-slate-400 text-sm">Fokus auf die muslimische Zielgruppe im DACH-Raum mit kulturell relevanten Botschaften.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h4 className="font-bold mb-1">Performance Creatives</h4>
                      <p className="text-slate-400 text-sm">Ständiges Testen von Video-Ads und UGC, um den ROAS hoch zu halten.</p>
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
