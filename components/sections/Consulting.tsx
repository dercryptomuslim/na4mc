import { Button } from "@/components/ui/button";
import { Coins, Globe2 } from "lucide-react";

export function Consulting() {
  return (
    <section className="py-24 bg-brand-sand" id="consulting">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
              Unternehmerische Freiheit für Muslime.
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Als Gründer der Nomad Agency for Marketing & Consulting LLC in Florida teilen wir unser Wissen über internationale Setups.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Coins className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-charcoal">Steueroptimierung & US LLCs</h4>
                  <p className="text-sm text-muted-foreground">Verstehe, wie du legal steuerfrei oder -optimiert als digitaler Nomade leben kannst.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe2 className="w-6 h-6 text-brand-orange shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-charcoal">Globales Business Setup</h4>
                  <p className="text-sm text-muted-foreground">Schütze dein Vermögen durch internationale Strukturen und Risikomanagement.</p>
                </div>
              </li>
            </ul>
            <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
              Mehr über Consulting erfahren
            </Button>
          </div>
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-stone-200">
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-stone-100">
              <div className="bg-blue-100 text-blue-700 p-2 rounded-lg font-bold text-xs">US LLC</div>
              <div className="text-muted-foreground text-sm">Gegründet in Florida, USA</div>
            </div>
            <p className="italic text-brand-charcoal text-lg mb-4">
              "Die beste Investition, die ich je getätigt habe, war mein eigenes Setup richtig aufzustellen. Das Wissen geben wir weiter."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-bold text-brand-charcoal">Mustafa Ali</p>
                <p className="text-xs text-muted-foreground">Founder NA4MC LLC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

