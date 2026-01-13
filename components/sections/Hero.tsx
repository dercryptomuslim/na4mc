import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-slate-950">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-gradient-to-t from-slate-900 via-slate-950 to-transparent"></div>
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-medium mb-8 backdrop-blur-sm animate-in slide-in-from-bottom-4 fade-in duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Accepting New Clients for Q1 2026
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1] animate-in slide-in-from-bottom-4 fade-in duration-700 delay-150">
            Ethical Growth. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600">Radical Performance.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-4 fade-in duration-700 delay-300">
            Wir skalieren muslimische Brands durch datengetriebenes Marketing & Automatisierung. 
            <span className="text-slate-200 font-medium"> Ohne Kompromisse bei deinen Werten.</span>
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-500">
            <Button size="lg" className="h-14 px-8 text-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-full w-full sm:w-auto shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all hover:scale-105">
              Strategie-Gespräch buchen
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-slate-700 text-slate-200 hover:bg-white/5 hover:text-white rounded-full w-full sm:w-auto backdrop-blur-sm">
              <Play className="mr-2 w-4 h-4 fill-current" />
              Showcase ansehen
            </Button>
          </div>

          {/* Social Proof Stats */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-8 md:gap-16 animate-in fade-in duration-1000 delay-700">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">4M€+</span>
              <span className="text-sm text-slate-500">Ad Spend Managed</span>
            </div>
            <div className="w-px h-10 bg-white/10 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">100%</span>
              <span className="text-sm text-slate-500">Halal Compliant</span>
            </div>
             <div className="w-px h-10 bg-white/10 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">24/7</span>
              <span className="text-sm text-slate-500">AI Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
