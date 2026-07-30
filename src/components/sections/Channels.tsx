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
    <section className="bg-white py-20 sm:py-24 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-900">
            Die passenden Kanäle. Die passende Botschaft.
          </h2>
          <p className="text-gray-600 mt-4 sm:text-lg leading-relaxed">
            Wir wählen nicht „alle Plattformen". Wir wählen die, die zu deinem Geschäft und deiner
            Zielgruppe passen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="rounded-3xl ring-1 ring-gray-200 bg-white p-6 sm:p-7 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-50 ring-1 ring-orange-100 flex items-center justify-center mb-5">
                <channel.icon className="w-6 h-6 text-[#e8553f]" />
              </div>
              <h3 className="font-medium text-gray-900 text-lg">{channel.title}</h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{channel.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
