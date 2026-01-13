import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Light Mode Glow Effects */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="hero-glow top-0 -left-4 w-[600px] h-[600px] bg-orange-100/80 animate-blob"></div>
          <div className="hero-glow top-0 -right-4 w-[500px] h-[500px] bg-blue-100/80 animate-blob animation-delay-2000"></div>
          <div className="hero-glow -bottom-32 left-1/2 w-[600px] h-[600px] bg-indigo-50/80 animate-blob animation-delay-4000 transform -translate-x-1/2"></div>
          <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-[0.03]"></div>
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm animate-in slide-in-from-bottom-4 fade-in duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Accepting New Clients Q1 2026
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.05] animate-in slide-in-from-bottom-4 fade-in duration-700 delay-150">
            Halal Growth. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Fundament & Performance.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-in slide-in-from-bottom-4 fade-in duration-700 delay-300">
            Wir sind nicht nur eine Social Media Agentur. Wir optimieren deine <span className="font-semibold text-slate-900">strukturellen Prozesse</span> als Fundament für maximales Wachstum.
            Von der Idee bis zum ROAS – alles aus einer Hand.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-500">
            <Button size="lg" className="h-14 px-8 text-lg bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-full w-full sm:w-auto shadow-xl shadow-slate-900/10 transition-all hover:scale-105">
              Erstgespräch vereinbaren
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 rounded-full w-full sm:w-auto bg-white/50 backdrop-blur-sm">
              <Play className="mr-2 w-4 h-4 fill-slate-700" />
              Prozess ansehen
            </Button>
          </div>

          {/* Value Props */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-8 md:gap-16 animate-in fade-in duration-1000 delay-700">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-slate-900">A-Z</span>
              <span className="text-sm text-slate-500 font-medium">Full Service</span>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-slate-900">KPI</span>
              <span className="text-sm text-slate-500 font-medium">Datengetriebene Beratung</span>
            </div>
             <div className="w-px h-10 bg-slate-200 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-slate-900">Muslim</span>
              <span className="text-sm text-slate-500 font-medium">Zielgruppen-Fokus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
