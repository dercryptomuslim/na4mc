import { ShieldCheck } from 'lucide-react'

const values = [
  { title: 'Authentizität', text: 'Gründer mit eigener Migrations- & Business-Erfahrung.' },
  { title: 'Wertebasiert (Halal)', text: 'Kein Haram-Marketing. Echte Amanah in der Zusammenarbeit.' },
  { title: 'High-Tech', text: 'Wir nutzen AI und Automation, um dir einen unfairen Vorteil zu verschaffen.' },
]

export default function About() {
  return (
    <section id="ueber-uns" className="scroll-mt-8 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="block text-[13px] font-medium tracking-[0.14em] uppercase text-[#f0803c] mb-4">
            Wer wir sind
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-5 leading-tight">
            Bridging Faith &amp; Business.
          </h2>
          <p className="text-white/70 sm:text-lg mb-4 leading-relaxed">
            Wir sind nicht nur eine Agentur. Wir sind muslimische Unternehmer, die den Spagat
            zwischen modernen Business-Strategien und unseren Werten verstehen.
          </p>
          <p className="text-white/70 sm:text-lg mb-8 leading-relaxed">
            Gegründet als US-LLC in Florida, leben wir das digitale Nomadentum vor und bringen
            internationale Best-Practices in den deutschsprachigen, muslimischen Markt.
          </p>

          <div className="space-y-5">
            {values.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="mt-0.5 w-8 h-8 rounded-full bg-[#e8553f]/15 ring-1 ring-[#e8553f]/25 flex items-center justify-center text-[#f0803c] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-medium text-white">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -inset-8 rounded-full bg-[#e8553f]/[0.07] blur-[80px]" />
          <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            <img
              src="/bg/founder.webp"
              alt="Gründer mit Blick auf die aufgehende Sonne über den Dünen"
              loading="lazy"
              className="w-full h-[380px] sm:h-[460px] object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-[#0B1120]/85 backdrop-blur-md ring-1 ring-white/10 p-5 text-white">
              <p className="text-sm font-medium">Mustafa Ali</p>
              <p className="text-xs text-white/70 mb-3">Founder NA4MC</p>
              <p className="text-sm sm:text-[15px] leading-relaxed text-white/90 italic">
                „Unser Ziel ist es, muslimische Unternehmer so stark zu machen, dass sie nicht nur
                wirtschaftlich, sondern auch gesellschaftlich etwas bewegen können."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
