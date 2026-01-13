import { cn } from "@/lib/utils";

const items = [
  "Performance Marketing",
  "Halal Branding",
  "Conversion Rate Optimization",
  "Marketing Automation",
  "Meta Ads",
  "TikTok Growth",
  "Email Marketing",
  "AI Chatbots",
  "Sales Funnels",
  "Data Analytics",
  "Consulting",
  "Ethical Growth"
];

export function Marquee() {
  return (
    <div className="relative flex overflow-x-hidden bg-slate-950 border-y border-white/5 py-6">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
        {/* First Set */}
        {items.map((item, i) => (
          <span key={i} className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600 uppercase tracking-widest hover:from-amber-400 hover:to-orange-500 transition-all duration-300 cursor-default">
            {item}
          </span>
        ))}
        {/* Duplicate Set for smooth loop */}
        {items.map((item, i) => (
          <span key={`dup-${i}`} className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600 uppercase tracking-widest hover:from-amber-400 hover:to-orange-500 transition-all duration-300 cursor-default">
            {item}
          </span>
        ))}
      </div>
      
      {/* Fade Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent"></div>
    </div>
  );
}
