import { CheckCircle2 } from "lucide-react";

const items = [
  {
    title: "Nachhaltige Präsenz auf Social Media",
    desc: "Konstant sichtbar – ohne Chaos, ohne Zufall.",
  },
  {
    title: "Mehr Interaktion & höhere Sichtbarkeit",
    desc: "Inhalte, die verstanden werden und Vertrauen aufbauen.",
  },
  {
    title: "Leadgenerierung & Umsatzsteigerung",
    desc: "Vom Interessenten zum Kunden – mit klaren Prozessen.",
  },
];

export function Benefits() {
  return (
    <section className="py-14 bg-white border-b border-slate-100">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-red-500 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

