import { ShieldCheck } from "lucide-react";

export function About() {
  return (
    <section id="warum-wir" className="py-24 bg-stone-100">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block mb-6 px-3 py-1 text-sm font-medium border border-slate-300 text-slate-600 rounded-full">Why NA4MC?</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-950 mb-6 leading-tight">
            Bridging <span className="text-brand-orange">Faith</span> & <span className="text-slate-700">Business</span>.
          </h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Wir sind nicht nur eine Agentur. Wir sind muslimische Unternehmer, die den Spagat zwischen modernen Business-Strategien und unseren Werten verstehen. 
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Gegründet als US-LLC in Florida, leben wir das digitale Nomadentum vor und bringen internationale Best-Practices ("Silicon Valley Mindset") in den deutschsprachigen, muslimischen Markt.
          </p>
          
          <div className="space-y-6">
            {[
              { title: "Authentizität", text: "Gründer mit eigener Migrations- & Business-Erfahrung." },
              { title: "Wertebasiert (Halal)", text: "Kein Haram-Marketing. Echte Amanah in der Zusammenarbeit." },
              { title: "High-Tech", text: "Wir nutzen AI und Automation, um dir einen unfairen Vorteil zu verschaffen." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-10 right-10 w-full h-full bg-amber-200 rounded-3xl -z-10 transform rotate-3"></div>
          {/* Founder Image Card */}
          <div className="bg-slate-900 rounded-3xl p-8 text-white h-[500px] flex flex-col justify-between overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500 rounded-full blur-[100px] opacity-20"></div>
              <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">Mustafa Ali</h3>
                  <p className="text-amber-400 font-medium">Founder NA4MC</p>
              </div>
              <div className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
                  <p className="text-lg italic">
                      "Unser Ziel ist es, muslimische Unternehmer so stark zu machen, dass sie nicht nur wirtschaftlich, sondern auch gesellschaftlich etwas bewegen können."
                  </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

