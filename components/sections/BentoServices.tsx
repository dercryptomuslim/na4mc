import { TrendingUp, Users, BarChart3, Mail, MonitorSmartphone, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Social Media Management",
    desc: "Wir sorgen dafür, dass dein Unternehmen sichtbar wird. Mit Inhalten, die deine Zielgruppe wirklich erreichen.",
    colSpan: "md:col-span-1",
    bg: "bg-white border-slate-100"
  },
  {
    icon: BarChart3,
    title: "Social Media Advertising",
    desc: "Bezahlte Werbung auf Google, Facebook, Instagram & TikTok. Von der Idee bis zur technischen Umsetzung.",
    colSpan: "md:col-span-1",
    bg: "bg-white border-slate-100"
  },
  {
    icon: Users,
    title: "Social Recruiting",
    desc: "Finde die besten Mitarbeiter über soziale Netzwerke. Schnell, effizient und zielgerichtet.",
    colSpan: "md:col-span-1",
    bg: "bg-white border-slate-100"
  },
  {
    icon: Settings,
    title: "Prozesse & Automatisierung",
    desc: "Wir optimieren deine Unternehmensprozesse mit KI, damit dein Marketing skalierbar wird.",
    colSpan: "md:col-span-2",
    bg: "bg-orange-50/50 border-orange-100"
  },
  {
    icon: Mail,
    title: "E-Mail Marketing",
    desc: "Mach aus Interessenten dauerhafte Kunden durch automatisierte E-Mail-Kampagnen.",
    colSpan: "md:col-span-1",
    bg: "bg-white border-slate-100"
  }
];

export function BentoServices() {
  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4 block">Unser Angebot</span>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Alles aus einer Hand. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Von A bis Z.</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Wir betreuen nicht nur Kanäle, sondern optimieren dein Geschäft.
            Von Konzept, Scripting, Video/Bild bis zur technischen Umsetzung und KPI-Auswertung.
          </p>
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
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
