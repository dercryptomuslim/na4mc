import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, BarChart3, Globe2, BrainCircuit, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    iconColor: "text-amber-500",
    bgColor: "bg-amber-500/10",
    title: "Social Media Growth",
    desc: "TikTok, Instagram & YouTube Strategien, die nicht nur Likes bringen, sondern echte Community aufbauen.",
    features: ["Viral Content Creation", "Reels & Shorts", "Community Management"]
  },
  {
    icon: BarChart3,
    iconColor: "text-teal-500",
    bgColor: "bg-teal-500/10",
    title: "Performance Ads",
    desc: "Wir schalten profitable Kampagnen auf Meta, Google & TikTok mit Fokus auf ROAS und Skalierung.",
    features: ["Zielgruppen-Targeting", "Retargeting Funnels", "A/B Testing"]
  },
  {
    icon: Users,
    iconColor: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    title: "Influencer Marketing",
    desc: "Zugang zu unserem exklusiven Netzwerk aus über 100 muslimischen Content Creatorn im DACH-Raum.",
    features: ["Micro-Influencer", "Ambassador Programme", "UGC Content"]
  },
  {
    icon: BrainCircuit,
    iconColor: "text-rose-500",
    bgColor: "bg-rose-500/10",
    title: "Automatisierung & AI",
    desc: "Wir ersetzen manuelle Arbeit durch intelligente Workflows mit n8n, ChatGPT & Custom AI Agents.",
    features: ["Lead-Automation", "AI Support Chatbots", "CRM Integration"]
  },
  {
    icon: Globe2,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-500/10",
    title: "Consulting & Setup",
    desc: "Strategische Beratung für muslimische Unternehmer. Vom Mindset bis zur US-LLC Gründung.",
    features: ["Business Setup", "Steueroptimierung", "Positionierung"]
  },
  {
    icon: MessageSquare,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    title: "Content Strategie",
    desc: "Psychologisch fundierte Skripte und Hooks, die muslimische Werte ansprechen und konvertieren.",
    features: ["Copywriting", "Storytelling", "Conversion Skripte"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-amber-600 font-medium tracking-wider uppercase text-sm mb-4 block">Our Ecosystem</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-950 tracking-tight">Alles was du brauchst, um zu <span className="text-amber-600">dominieren</span>.</h2>
          <p className="text-slate-600 text-xl leading-relaxed">
            Ein ganzheitliches System für muslimische Brands im DACH-Raum. Wir verbinden Kreativität mit harter Performance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${service.bgColor.replace('/10', '')}`}></div>
              
              <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-950 mb-4 group-hover:text-amber-600 transition-colors">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8 min-h-[80px]">
                {service.desc}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-amber-500 transition-colors"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center text-slate-400 text-sm font-semibold group-hover:text-slate-900 transition-colors cursor-pointer">
                Mehr erfahren <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

