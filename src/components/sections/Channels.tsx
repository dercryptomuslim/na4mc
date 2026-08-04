import { Instagram, Linkedin, Music2, Youtube } from 'lucide-react'

const channels = [
  {
    icon: Instagram,
    title: 'Instagram',
    desc: 'Profil, Inhalte, Community – klar, wiedererkennbar und verkaufsstark.',
  },
  {
    icon: Youtube,
    title: 'YouTube',
    desc: 'Formate, die Vertrauen aufbauen und aus Zuschauern Kunden machen.',
  },
  {
    icon: Music2,
    title: 'TikTok',
    desc: 'Kurzvideos, die Aufmerksamkeit erzeugen und Reichweite bringen.',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    desc: 'Positionierung, Sichtbarkeit und Vertrauen für B2B & Mittelstand.',
  },
]

export default function Channels() {
  return (
    <section className="py-20 sm:py-24 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
            Die passenden Kanäle. Die passende Botschaft.
          </h2>
          <p className="text-white/70 mt-4 sm:text-lg leading-relaxed">
            Wir wählen nicht „alle Plattformen". Wir wählen die, die zu deinem Geschäft und deiner
            Zielgruppe passen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="rounded-3xl ring-1 ring-white/10 bg-white/[0.03] p-6 sm:p-7 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#e8553f]/12 ring-1 ring-[#e8553f]/25 flex items-center justify-center mb-5">
                <channel.icon className="w-6 h-6 text-[#f0803c]" />
              </div>
              <h3 className="font-medium text-white text-lg">{channel.title}</h3>
              <p className="text-white/70 text-sm mt-2 leading-relaxed">{channel.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
