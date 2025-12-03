import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-950">Was unsere Partner sagen</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {[
                {
                    quote: "NA4MC hat unser Branding komplett verstanden. Endlich eine Agentur, die unsere Werte teilt und nicht versucht, uns etwas aufzuschwatzen.",
                    name: "Zaid E.",
                    role: "E-Commerce Founder"
                },
                {
                    quote: "Die Lead-Automation ist ein Gamechanger. Wir generieren Leads im Schlaf, und die Qualität ist top.",
                    name: "Ahmed K.",
                    role: "App Developer"
                },
                {
                    quote: "Professionell, schnell und vor allem: Ehrlich. Das ist im Marketing selten geworden.",
                    name: "Sara M.",
                    role: "Business Coach"
                }
            ].map((t, i) => (
                <Card key={i} className="bg-stone-50 border-stone-100">
                    <CardContent className="pt-6">
                        <Quote className="w-8 h-8 text-amber-200 mb-4" />
                        <p className="text-slate-700 mb-6 italic">"{t.quote}"</p>
                        <div>
                            <p className="font-bold text-slate-900">{t.name}</p>
                            <p className="text-xs text-slate-500">{t.role}</p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}

