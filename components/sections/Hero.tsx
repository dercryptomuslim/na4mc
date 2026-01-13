import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { RotatingHalo } from "@/components/ui/RotatingHalo";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <RotatingHalo />
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Wir nehmen neue Kunden an (Q1 2026)
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Mit Social Media & KI <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">zu mehr Erfolg.</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-slate-900 block mb-2">Unabhängigkeit für den Mittelstand.</span>
            Durch den Einsatz von Social Media, moderner Technik wie KI und psychologischen Marketing-Strategien helfen wir dir, frei von Recruiting- oder Neukundenproblemen zu werden.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/bewerbung">
              <Button size="lg" className="h-14 px-8 text-lg bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-full w-full sm:w-auto shadow-xl shadow-slate-900/10 transition-all hover:scale-105">
                Jetzt Potenzialanalyse anfragen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold block text-slate-900">Muslimische Zielgruppe</span>
                <span className="text-sm text-slate-500">Zugang zu über 10 Mio. Menschen im DACH-Raum.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold block text-slate-900">KI & Prozesse</span>
                <span className="text-sm text-slate-500">Effiziente Automatisierung statt manueller Arbeit.</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold block text-slate-900">Zeitgeist & Relevanz</span>
                <span className="text-sm text-slate-500">Wir verstehen Trends, bevor sie Mainstream sind.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
