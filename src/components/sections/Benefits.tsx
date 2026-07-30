import { CheckCircle2 } from 'lucide-react'

const items = [
  {
    title: 'Nachhaltige Präsenz auf Social Media',
    desc: 'Konstant sichtbar – ohne Chaos, ohne Zufall.',
  },
  {
    title: 'Mehr Interaktion & höhere Sichtbarkeit',
    desc: 'Inhalte, die verstanden werden und Vertrauen aufbauen.',
  },
  {
    title: 'Leadgenerierung & Umsatzsteigerung',
    desc: 'Vom Interessenten zum Kunden – mit klaren Prozessen.',
  },
]

export default function Benefits() {
  return (
    <section className="bg-white border-b border-gray-100 py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl ring-1 ring-gray-200 bg-white p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#e8553f] mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
