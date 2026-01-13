import { TrendingUp, Users, BarChart3, Globe2, BrainCircuit, MessageSquare, ArrowRight, Layers, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Layers,
    title: "Strukturelle Optimierung",
    desc: "Bevor wir posten, bauen wir das Fundament. Wir optimieren deine Unternehmensprozesse, damit Marketing überhaupt skalieren kann.",
    colSpan: "md:col-span-2",
    bg: "bg-orange-50/50 border-orange-100"
  },
  {
    icon: MessageSquare,
    title: "Konzept & Content A-Z",
    desc: "Von der Idee über das Skript bis zum fertigen Video. Wir produzieren High-End Creatives.",
    colSpan: "md:col-span-1",
    bg: "bg-white border-slate-100"
  },
  {
    icon: BarChart3,
    title: "Performance Ads",
    desc: "Technische Umsetzung & Media Buying auf Meta, TikTok & Google. Fokus auf messbaren Umsatz.",
    colSpan: "md:col-span-1",
    bg: "bg-white border-slate-100"
  },
  {
    icon: PieChart,
    title: "KPI & Tracking",
    desc: "Wöchentliche Auswertung qualitativer Daten. Wir beraten dich basierend auf echten Zahlen, nicht Bauchgefühl.",
    colSpan: "md:col-span-2",
    bg: "bg-blue-50/50 border-blue-100"
  },
  {
    icon: Users,
    title: "Muslim Audience",
    desc: "Tiefes Verständnis für die Zielgruppe.",
    colSpan: "md:col-span-1",
    bg: "bg-white border-slate-100"
  },
   {
    icon: BrainCircuit,
    title: "Automatisierung",
    desc: "Prozesse durch AI effizienter machen.",
    colSpan: "md:col-span-1",
    bg: "bg-white border-slate-100"
  }
];

export function BentoServices() {
  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4 block">Unser Prozess</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Mehr als nur <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">bunte Bilder</span>.
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Wir sind dein strategischer Partner. Wir verbinden Prozessberatung mit exzellenter Marketing-Execution.
            </p>
          </div>
          <Button variant="outline" className="text-slate-900 border-slate-200 hover:bg-white rounded-full px-6 bg-white/50 backdrop-blur-sm">
            Alle Services ansehen
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              className={`group relative rounded-3xl p-8 border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${service.colSpan} ${service.bg}`}
            >
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-slate-900 group-hover:scale-110 transition-transform duration-500 border border-slate-100">
                    <service.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {service.desc}
                  </p>
                </div>
                
                <div className="flex items-center text-sm font-bold text-slate-400 group-hover:text-orange-600 transition-colors cursor-pointer">
                  Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
