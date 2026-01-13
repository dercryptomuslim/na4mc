import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const packages = [
  {
    name: "Fundament",
    description: "Für Brands, die professionell starten wollen.",
    price: "Strategie & Setup",
    features: [
      "Status-Quo Analyse & Audit",
      "Zielgruppen-Definition (Muslim Persona)",
      "Tracking-Setup (Pixel, CAPI)",
      "Content-Strategie & Redaktionsplan",
      "Basis-Automatisierung",
    ],
    cta: "Fundament legen",
    highlight: false,
  },
  {
    name: "Wachstum",
    description: "Für Brands, die skalieren wollen.",
    price: "Performance & Ads",
    features: [
      "Alles aus Fundament",
      "Meta & TikTok Ads Management",
      "Monatliche Content-Kreation (UGC/Video)",
      "Aktives Community Management",
      "KPI-Reporting (2-wöchentlich)",
    ],
    cta: "Jetzt wachsen",
    highlight: true,
    badge: "Beliebt",
  },
  {
    name: "Dominanz",
    description: "Der QSK-Ansatz: Full-Service von A-Z.",
    price: "Partner & Consulting",
    features: [
      "Alles aus Wachstum",
      "Ganzheitliche Unternehmensberatung",
      "Prozess-Optimierung & Skalierung",
      "Exklusives Netzwerk (Influencer)",
      "Strategische Jahresplanung",
    ],
    cta: "Dominanz sichern",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pakete" className="py-24 bg-white border-b border-slate-100">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4 block">Zusammenarbeit</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Wähle dein Level.
          </h2>
          <p className="text-slate-600 text-lg">
            Transparente Modelle für jede Phase deines Wachstums. Vom sauberen Start bis zur Marktführerschaft.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {packages.map((pkg, i) => (
            <div 
              key={i} 
              className={`relative rounded-3xl p-8 border transition-all duration-300 ${
                pkg.highlight 
                  ? "bg-slate-900 text-white border-slate-800 shadow-2xl scale-105 z-10" 
                  : "bg-white text-slate-900 border-slate-200 hover:border-orange-200 hover:shadow-lg"
              }`}
            >
              {pkg.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                  {pkg.badge}
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className={`text-sm mb-6 ${pkg.highlight ? "text-slate-400" : "text-slate-500"}`}>
                {pkg.description}
              </p>
              
              <div className="mb-8">
                <span className={`text-3xl font-bold ${pkg.highlight ? "text-orange-500" : "text-slate-900"}`}>
                  {pkg.price}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-orange-500" : "text-green-600"}`} />
                    <span className={pkg.highlight ? "text-slate-300" : "text-slate-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="/termin" className="w-full">
                <Button 
                  className={`w-full rounded-full h-12 font-bold transition-all ${
                    pkg.highlight 
                      ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20" 
                      : "bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-900"
                  }`}
                >
                  {pkg.cta} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-sm text-slate-500">
                Nicht sicher, was du brauchst? <Link href="/termin"><span className="text-orange-600 font-bold cursor-pointer underline decoration-orange-200 underline-offset-4">Lass uns sprechen.</span></Link>
            </p>
        </div>
      </div>
    </section>
  );
}
