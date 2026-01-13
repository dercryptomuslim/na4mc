import { cn } from "@/lib/utils";

const items = [
  "Strukturelle Prozess-Optimierung",
  "A-Z Content Production",
  "KPI-Driven Marketing",
  "Google Ads & SEO",
  "Meta & TikTok Ads",
  "Muslim Audience Targeting",
  "Tracking & Analytics",
  "Datengetriebene Beratung",
  "Full-Funnel Strategie",
  "Skalierung"
];

export function Marquee() {
  return (
    <div className="relative flex overflow-x-hidden bg-slate-50 border-y border-slate-200 py-4">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
        {/* First Set */}
        {items.map((item, i) => (
          <span key={i} className="text-lg md:text-xl font-bold text-slate-400 uppercase tracking-wider hover:text-orange-600 transition-colors duration-300 cursor-default">
            {item}
          </span>
        ))}
        {/* Duplicate Set for smooth loop */}
        {items.map((item, i) => (
          <span key={`dup-${i}`} className="text-lg md:text-xl font-bold text-slate-400 uppercase tracking-wider hover:text-orange-600 transition-colors duration-300 cursor-default">
            {item}
          </span>
        ))}
      </div>
      
      {/* Fade Edges - Light Mode */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent"></div>
    </div>
  );
}
