import { Euro, Target } from 'lucide-react'

const reasons = [
  {
    title: 'Klare Botschaft',
    desc: 'Nicht „irgendwelche Anzeigen", sondern eine klare Ansprache, die zur Zielgruppe passt.',
  },
  {
    title: 'Zielgruppe verstanden',
    desc: 'Fokus auf die muslimische Zielgruppe im DACH-Raum – mit kulturell passenden Inhalten.',
  },
  {
    title: 'Systematisches Testen',
    desc: 'Wir testen Varianten, werten aus und verbessern – so entstehen Gewinner-Anzeigen.',
  },
]

export default function SuccessStory() {
  return (
    <section id="ergebnisse" className="scroll-mt-8 relative py-20 sm:py-28 overflow-hidden border-y border-white/5">
      <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#e8553f]/[0.08] blur-[140px] -translate-y-1/2 translate-x-1/3" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <span className="block text-[13px] font-medium tracking-[0.14em] uppercase text-[#f0803c] mb-4">
              Erfolgsgeschichte
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-5 leading-tight">
              Die QSK Methode:
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8553f] via-[#f0803c] to-[#D4AF37]">
                3,5 Mio. € Umsatz
              </span>{' '}
              in 4 Jahren.
            </h2>
            <p className="text-white/60 sm:text-lg mb-8 leading-relaxed">
              Wir haben einen Koran-Lesekurs im DACH-Raum aus dem Nichts aufgebaut. Mit nur 300.000€
              Ad Spend haben wir über 3,5 Millionen Euro Umsatz generiert.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] ring-1 ring-white/10">
                <div className="flex items-center gap-2 text-[#f0803c] mb-2 text-sm font-medium">
                  <Euro className="w-4 h-4" />
                  Ergebnis pro 1€
                </div>
                <div className="text-2xl sm:text-3xl font-medium text-white">11,6 €</div>
                <div className="text-sm text-white/50 mt-1">Aus 1€ wurden 11,60€ Umsatz</div>
              </div>
              <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] ring-1 ring-white/10">
                <div className="flex items-center gap-2 text-white mb-2 text-sm font-medium">
                  <Target className="w-4 h-4" />
                  Skalierung
                </div>
                <div className="text-2xl sm:text-3xl font-medium text-white">0 → 3,5 Mio.</div>
                <div className="text-sm text-white/50 mt-1">In 4 Jahren aufgebaut</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white/[0.04] ring-1 ring-white/10 rounded-3xl p-7 sm:p-8 backdrop-blur-sm shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-6 border-b border-white/10 pb-4">
                Warum das funktioniert hat
              </h3>
              <ul className="space-y-5">
                {reasons.map((reason, i) => (
                  <li key={reason.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#e8553f]/15 text-[#f0803c] ring-1 ring-[#e8553f]/25 flex items-center justify-center shrink-0 text-sm font-medium">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">{reason.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{reason.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
