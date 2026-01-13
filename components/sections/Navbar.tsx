import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-slate-950 font-bold text-xl shadow-[0_0_15px_rgba(245,158,11,0.5)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.8)] transition-all">
            N
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-white tracking-tight group-hover:text-amber-500 transition-colors">NA4MC</span>
            <span className="text-[10px] text-slate-400 tracking-widest uppercase">Agency</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Services</Link>
          <Link href="#ergebnisse" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Ergebnisse</Link>
          <Link href="#consulting" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Consulting</Link>
          <Button className="bg-white text-slate-950 hover:bg-amber-500 hover:text-slate-900 rounded-full px-6 font-medium transition-colors">
            Erstgespräch buchen
          </Button>
        </div>

        <button className="md:hidden text-white">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}
