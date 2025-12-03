import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-stone-100 h-20 flex items-center">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-slate-950 rounded-lg flex items-center justify-center text-amber-500 font-bold text-xl">
            N
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-slate-950 tracking-tight">NA4MC</span>
            <span className="text-[10px] text-slate-500 tracking-widest uppercase">Agency</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Services</Link>
          <Link href="#ergebnisse" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Ergebnisse</Link>
          <Link href="#warum-wir" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Warum wir</Link>
          <Link href="#consulting" className="text-sm font-medium text-slate-600 hover:text-amber-600 transition-colors">Consulting</Link>
          <Button className="bg-slate-950 hover:bg-slate-800 text-white rounded-full px-6">
            Erstgespräch buchen
          </Button>
        </div>

        <button className="md:hidden text-slate-950">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}

