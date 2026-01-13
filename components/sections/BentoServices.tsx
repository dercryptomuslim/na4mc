import { TrendingUp, Users, BarChart3, Globe2, BrainCircuit, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: TrendingUp,
    title: "Social Growth",
    desc: "Viral Content Creation & Community Building auf TikTok & Instagram.",
    colSpan: "md:col-span-1",
    bg: "bg-gradient-to-br from-purple-900/50 to-slate-900"
  },
  {
    icon: BarChart3,
    title: "Performance Ads",
    desc: "Profitables Media Buying auf Meta, Google & TikTok. Fokus auf ROAS.",
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-amber-900/50 to-slate-900"
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    desc: "Wir automatisieren deine Leads & Support mit Custom AI Agents.",
    colSpan: "md:col-span-2",
    bg: "bg-gradient-to-br from-teal-900/50 to-slate-900"
  },
  {
    icon: Users,
    title: "Influencer",
    desc: "Zugang zu 100+ Muslim Creators.",
    colSpan: "md:col-span-1",
    bg: "bg-gradient-to-br from-blue-900/50 to-slate-900"
  },
  {
    icon: Globe2,
    title: "Consulting",
    desc: "Strategie & Setup (US-LLC, Steuern).",
    colSpan: "md:col-span-1",
    bg: "bg-gradient-to-br from-slate-800 to-slate-900"
  },
   {
    icon: MessageSquare,
    title: "Copywriting",
    desc: "Verkaufspsychologie, die konvertiert.",
    colSpan: "md:col-span-1",
    bg: "bg-gradient-to-br from-rose-900/50 to-slate-900"
  }
];

export function BentoServices() {
  return (
    <section id="services" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-4 block">Our Ecosystem</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Alles für deine <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Dominanz</span>.
            </h2>
          </div>
          <Button variant="outline" className="text-white border-white/10 hover:bg-white/5 rounded-full px-6">
            Alle Services ansehen
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              className={`group relative rounded-3xl p-8 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 ${service.colSpan} ${service.bg} backdrop-blur-sm`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity opacity-20 group-hover:opacity-40"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-500 border border-white/10">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    {service.desc}
                  </p>
                </div>
                
                <div className="flex items-center text-sm font-medium text-slate-500 group-hover:text-white transition-colors">
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
