import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 h-20 flex items-center shadow-sm">
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-orange-500 font-bold text-xl shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all">
            N
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-bold text-slate-900 tracking-tight group-hover:text-orange-600 transition-colors">NA4MC</span>
            <span className="text-[10px] text-slate-500 tracking-widest uppercase font-medium">Agency</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors">Services</Link>
          <Link href="#ergebnisse" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors">Prozess</Link>
          <Link href="#consulting" className="text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors">Consulting</Link>
          <Button className="bg-slate-900 text-white hover:bg-orange-600 hover:text-white rounded-full px-6 font-semibold transition-all shadow-lg shadow-slate-900/10 hover:shadow-orange-600/20">
            Strategie-Gespräch
          </Button>
        </div>

        <button className="md:hidden text-slate-900">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}
