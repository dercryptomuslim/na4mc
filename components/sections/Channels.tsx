import { Instagram, Youtube, Music2, Linkedin } from "lucide-react";

const channels = [
  {
    icon: Instagram,
    title: "Instagram",
    desc: "Profil, Inhalte, Community – klar, wiedererkennbar und verkaufsstark.",
  },
  {
    icon: Youtube,
    title: "YouTube",
    desc: "Formate, die Vertrauen aufbauen und aus Zuschauern Kunden machen.",
  },
  {
    icon: Music2,
    title: "TikTok",
    desc: "Kurzvideos, die Aufmerksamkeit erzeugen und Reichweite bringen.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    desc: "Positionierung, Sichtbarkeit und Vertrauen für B2B & Mittelstand.",
  },
];

export function Channels() {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Die passenden Kanäle. Die passende Botschaft.
          </h2>
          <p className="text-slate-600 mt-4 text-lg">
            Wir wählen nicht „alle Plattformen“. Wir wählen die, die zu deinem
            Geschäft und deiner Zielgruppe passen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-5">
                <c.icon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">{c.title}</h3>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

