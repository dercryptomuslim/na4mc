import Image from "next/image";

export function TrustedBy() {
  return (
    <section className="py-12 bg-slate-950 border-b border-white/5 relative z-10">
      <div className="container px-4 mx-auto text-center">
        <p className="text-sm font-semibold text-slate-500 mb-8 tracking-wide uppercase">
          Vertraut von führenden muslimischen Brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           
           {/* UmrahCheck - Invertiert für Dark Mode via CSS Filter falls nötig, oder white logo nutzen. 
               Hier nutzen wir brightness-0 invert um es weiß zu machen */}
           <div className="relative h-12 w-40 filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300">
             <Image 
               src="/logos/umrahcheck.png" 
               alt="UmrahCheck Logo" 
               fill
               className="object-contain"
             />
           </div>

           {/* QSK Placeholder - Dark Mode */}
           <div className="flex items-center justify-center h-12 px-4 border border-white/10 rounded text-slate-400 font-bold text-xl hover:text-white hover:border-white/30 transition-all cursor-default">
             QSK
           </div>

           {/* Weitere Platzhalter */}
           <div className="h-2 w-2 bg-slate-700 rounded-full"></div>
           <div className="h-2 w-2 bg-slate-700 rounded-full"></div>

        </div>
      </div>
    </section>
  );
}
