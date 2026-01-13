import Image from "next/image";

export function TrustedBy() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="container px-4 mx-auto text-center">
        <p className="text-sm font-semibold text-slate-500 mb-8 tracking-wide uppercase">
          Vertraut von führenden muslimischen Brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
           
           {/* UmrahCheck */}
           <div className="relative h-12 w-40">
             <Image 
               src="/logos/umrahcheck.png" 
               alt="UmrahCheck Logo" 
               fill
               className="object-contain"
             />
           </div>

           {/* QSK Placeholder - Da Datei nicht gefunden wurde */}
           <div className="flex items-center justify-center h-12 px-4 border-2 border-slate-300 rounded text-slate-400 font-bold text-xl">
             QSK
           </div>

           {/* Weitere Platzhalter für zukünftige Kunden */}
           <div className="h-3 w-3 bg-slate-300 rounded-full"></div>
           <div className="h-3 w-3 bg-slate-300 rounded-full"></div>

        </div>
      </div>
    </section>
  );
}
