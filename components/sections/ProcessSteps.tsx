import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    n: "01",
    title: "Analyse & Audit",
    desc: "Wir prüfen Status quo, Zielgruppe, Angebot und Inhalte. Danach ist klar: Was funktioniert – und was nicht.",
  },
  {
    n: "02",
    title: "Strategie & Prozesse",
    desc: "Wir bauen ein klares System: Inhalte, Abläufe, Verantwortlichkeiten und eine einfache Messung der Ergebnisse.",
  },
  {
    n: "03",
    title: "Produktion & Werbung",
    desc: "Von Konzept & Skript über Video/Bild bis zur technischen Umsetzung auf Meta, TikTok und Google.",
  },
  {
    n: "04",
    title: "Auswertung & Optimierung",
    desc: "Alle 2 Wochen oder monatlich: KPI-Auswertung, Learnings, nächste Tests. So wird es planbar.",
  },
];

export function ProcessSteps() {
  return (
    <section id="ablauf" className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            So arbeiten wir zusammen
          </h2>
          <p className="text-slate-600 mt-4 text-lg">
            Einfach, transparent und mit klaren Schritten – damit du weißt, was
            als Nächstes passiert.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-sm font-bold text-orange-600 bg-orange-50 border border-orange-100 rounded-full px-3 py-1">
                  {s.n}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{s.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-full h-12 px-7">
            Potenzialanalyse anfragen <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

