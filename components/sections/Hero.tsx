import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-amber-400 opacity-20 blur-[100px]"></div>
        <div className="absolute right-0 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-teal-500 opacity-10 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700 shadow-sm hover:shadow-md transition-shadow cursor-default">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="tracking-wide">#1 Agency für Muslim Brands im DACH-Raum</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-950 mb-8 leading-[1.05] animate-in slide-in-from-bottom-4 fade-in duration-700 delay-150">
            Halal Growth. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600">Digital Dominance.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-4 fade-in duration-700 delay-300">
            Wir skalieren muslimische Brands durch datengetriebenes Marketing, Performance Ads & ethische Automatisierung.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in slide-in-from-bottom-4 fade-in duration-700 delay-500">
            <Button size="lg" className="h-14 px-8 text-lg bg-slate-950 hover:bg-slate-800 text-white rounded-full w-full sm:w-auto shadow-xl shadow-slate-900/20 hover:scale-105 transition-transform duration-300">
              Strategie-Gespräch buchen
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-slate-200 hover:bg-slate-50 hover:text-slate-900 rounded-full w-full sm:w-auto group">
              <Play className="mr-2 w-4 h-4 fill-slate-900 group-hover:scale-110 transition-transform" />
              Case Studies
            </Button>
          </div>

          {/* Social Proof / Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 animate-in fade-in duration-1000 delay-700">
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-teal-500" />
              <span>4 Mio. €+ Umsatz generiert</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-teal-500" />
              <span>100% Halal Setup</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 text-teal-500" />
              <span>Offizielle Meta Partner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

