import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Users, BrainCircuit } from "lucide-react";

export function MarketingExplainer() {
  return (
    <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px]"></div>
      <div className="container px-4 mx-auto relative z-10 text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Muslimisches Marketing ist mehr als <br/>nur ein <span className="text-brand-orange">Halal-Label</span>.
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
            <Card className="bg-slate-900 border-slate-800 text-slate-300">
                <CardHeader>
                    <ShieldCheck className="w-10 h-10 text-teal-500 mb-2" />
                    <CardTitle className="text-white text-xl">Vertrauen (Amanah)</CardTitle>
                </CardHeader>
                <CardContent>
                    Die muslimische Community kauft dort, wo sie vertraut. Wir bauen dieses Vertrauen durch Transparenz und authentische Kommunikation auf.
                </CardContent>
            </Card>
            <Card className="bg-slate-900 border-slate-800 text-slate-300">
                <CardHeader>
                    <Users className="w-10 h-10 text-brand-orange mb-2" />
                    <CardTitle className="text-white text-xl">Community First</CardTitle>
                </CardHeader>
                <CardContent>
                    Empfehlungen sind Gold wert. Wir nutzen psychologische Trigger, die Mundpropaganda innerhalb der Ummah aktivieren.
                </CardContent>
            </Card>
            <Card className="bg-slate-900 border-slate-800 text-slate-300">
                <CardHeader>
                    <BrainCircuit className="w-10 h-10 text-indigo-500 mb-2" />
                    <CardTitle className="text-white text-xl">Werte & Psychologie</CardTitle>
                </CardHeader>
                <CardContent>
                    Wir verstehen den Unterschied zwischen Dunya (weltlich) und Deen (religiös) im Kaufverhalten und nutzen dies ethisch korrekt.
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}

