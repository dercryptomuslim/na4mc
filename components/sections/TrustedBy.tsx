import Image from "next/image";

export function TrustedBy() {
  return (
    <section className="py-16 bg-white border-y border-slate-100 relative z-10">
      <div className="container px-4 mx-auto text-center">
        <p className="text-sm font-bold text-slate-400 mb-10 tracking-widest uppercase">
          Vertraut von führenden Brands
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           
           {/* UmrahCheck */}
           <div className="relative h-12 w-32 md:w-40 transition-transform hover:scale-105">
             <Image 
               src="/logos/umrahcheck.png" 
               alt="UmrahCheck" 
               fill
               className="object-contain"
             />
           </div>

           {/* DEEN Akademie */}
           <div className="relative h-16 w-32 md:w-40 transition-transform hover:scale-105">
             <Image 
               src="/logos/deen-akademie.png" 
               alt="DEEN Akademie" 
               fill
               className="object-contain"
             />
           </div>

           {/* Madinah Cosmetics */}
           <div className="relative h-14 w-32 md:w-40 transition-transform hover:scale-105">
             <Image 
               src="/logos/madinahcosmetics.png" 
               alt="Madinah Cosmetics" 
               fill
               className="object-contain"
             />
           </div>

           {/* Loubaan */}
           <div className="relative h-12 w-32 md:w-40 transition-transform hover:scale-105">
             <Image 
               src="/logos/loubaan.png" 
               alt="Loubaan" 
               fill
               className="object-contain"
             />
           </div>

           {/* QSK */}
           <div className="relative h-12 w-28 md:w-32 transition-transform hover:scale-105">
             <Image 
               src="/logos/qsk.png" 
               alt="QSK" 
               fill
               className="object-contain"
             />
           </div>
           
           {/* L'aveu */}
           <div className="relative h-12 w-28 md:w-32 transition-transform hover:scale-105 rounded-md overflow-hidden">
             <Image 
               src="/logos/laveu.jpg" 
               alt="L'aveu" 
               fill
               className="object-contain"
             />
           </div>
           
           {/* Bakran */}
           <div className="relative h-12 w-28 md:w-32 transition-transform hover:scale-105 rounded-md overflow-hidden">
             <Image 
               src="/logos/bakran.jpg" 
               alt="Bakran" 
               fill
               className="object-contain"
             />
           </div>

        </div>
      </div>
    </section>
  );
}
