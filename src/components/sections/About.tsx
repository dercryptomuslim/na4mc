import { ShieldCheck } from 'lucide-react'

const values = [
  { title: 'Authentizität', text: 'Gründer mit eigener Migrations- & Business-Erfahrung.' },
  { title: 'Wertebasiert (Halal)', text: 'Kein Haram-Marketing. Echte Amanah in der Zusammenarbeit.' },
  { title: 'High-Tech', text: 'Wir nutzen AI und Automation, um dir einen unfairen Vorteil zu verschaffen.' },
]

export default function About() {
  return (
    <section id="ueber-uns" className="scroll-mt-8 bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="block text-[13px] font-medium tracking-[0.14em] uppercase text-[#e8553f] mb-4">
            Wer wir sind
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 mb-5 leading-tight">
            Bridging Faith &amp; Business.
          </h2>
          <p className="text-gray-600 sm:text-lg mb-4 leading-relaxed">
            Wir sind nicht nur eine Agentur. Wir sind muslimische Unternehmer, die den Spagat
            zwischen modernen Business-Strategien und unseren Werten verstehen.
          </p>
          <p className="text-gray-600 sm:text-lg mb-8 leading-relaxed">
            Gegründet als US-LLC in Florida, leben wir das digitale Nomadentum vor und bringen
            internationale Best-Practices in den deutschsprachigen, muslimischen Markt.
          </p>

          <div className="space-y-5">
            {values.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="mt-0.5 w-8 h-8 rounded-full bg-orange-50 ring-1 ring-orange-100 flex items-center justify-center text-[#e8553f] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden ring-1 ring-gray-200 shadow-xl shadow-gray-900/10">
            <img
              src="/logos/dercryptomuslim.jpg"
              alt="Mustafa Ali, Founder NA4MC"
              loading="lazy"
              className="w-full h-[380px] sm:h-[460px] object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-gray-950/60 backdrop-blur-md ring-1 ring-white/10 p-5 text-white">
              <p className="text-sm font-medium">Mustafa Ali</p>
              <p className="text-xs text-white/60 mb-3">Founder NA4MC</p>
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
