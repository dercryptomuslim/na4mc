import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-24 flex items-center shadow-sm transition-all duration-300">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 cursor-pointer group py-2">
          {/* Logo deutlich vergrößert für bessere Sichtbarkeit */}
          <div className="relative w-64 h-16 md:w-80 md:h-20 transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/logos/na4mc-logo.png" 
              alt="NA4MC Agentur" 
              fill
              className="object-contain object-left"
              priority
              sizes="(max-width: 768px) 256px, 320px"
            />
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#leistungen" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors">Leistungen</Link>
          <Link href="#ablauf" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors">Ablauf</Link>
          <Link href="#ergebnisse" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors">Ergebnisse</Link>
          <Link href="/bewerbung">
            <Button className="bg-slate-900 text-white hover:bg-orange-600 hover:text-white rounded-full px-6 font-semibold transition-all shadow-lg shadow-slate-900/10 hover:shadow-orange-600/20">
              Potenzialanalyse
            </Button>
          </Link>
        </div>

        <button className="md:hidden text-slate-900">
          <Menu className="h-8 w-8" />
        </button>
      </div>
    </nav>
  );
}
