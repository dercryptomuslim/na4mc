import { ArrowRight, Check } from 'lucide-react'

const packages = [
  {
    name: 'Fundament',
    description: 'Für Brands, die professionell starten wollen.',
    price: 'Strategie & Setup',
    features: [
      'Status-Quo Analyse & Audit',
      'Zielgruppen-Definition (Muslim Persona)',
      'Tracking-Setup (Pixel, CAPI)',
      'Content-Strategie & Redaktionsplan',
      'Basis-Automatisierung',
    ],
    cta: 'Fundament legen',
    highlight: false,
  },
  {
    name: 'Wachstum',
    description: 'Für Brands, die skalieren wollen.',
    price: 'Performance & Ads',
    features: [
      'Alles aus Fundament',
      'Meta & TikTok Ads Management',
      'Monatliche Content-Kreation (UGC/Video)',
      'Aktives Community Management',
      'KPI-Reporting (2-wöchentlich)',
    ],
    cta: 'Jetzt wachsen',
    highlight: true,
    badge: 'Beliebt',
  },
  {
    name: 'Dominanz',
    description: 'Der QSK-Ansatz: Full-Service von A-Z.',
    price: 'Partner & Consulting',
    features: [
      'Alles aus Wachstum',
      'Ganzheitliche Unternehmensberatung',
      'Prozess-Optimierung & Skalierung',
      'Exklusives Netzwerk (Influencer)',
      'Strategische Jahresplanung',
    ],
    cta: 'Dominanz sichern',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pakete" className="scroll-mt-8 relative py-20 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#e8553f]/[0.06] blur-[130px]" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="block text-[13px] font-medium tracking-[0.14em] uppercase text-[#f0803c] mb-4">
            Zusammenarbeit
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-5">
            Wähle dein Level.
          </h2>
          <p className="text-white/60 sm:text-lg leading-relaxed">
            Transparente Modelle für jede Phase deines Wachstums. Vom sauberen Start bis zur
            Marktführerschaft.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-3xl p-7 sm:p-8 transition-all duration-300 ${
                pkg.highlight
                  ? 'bg-white/[0.06] ring-1 ring-[#e8553f]/50 shadow-[0_0_60px_rgba(232,85,63,0.2)] md:scale-105 z-10'
                  : 'bg-white/[0.03] ring-1 ring-white/10 hover:bg-white/[0.05]'
              }`}
            >
              {pkg.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#e8553f] text-white px-4 py-1 rounded-full text-xs font-medium shadow-[0_0_20px_rgba(232,85,63,0.5)]">
                  {pkg.badge}
                </div>
              )}

              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-1.5">
                {pkg.name}
              </h3>
              <p className="text-sm text-white/50 mb-6">{pkg.description}</p>

              <div className="mb-7">
                <span
                  className={`text-2xl sm:text-3xl font-medium tracking-tight ${
                    pkg.highlight ? 'text-[#f0803c]' : 'text-white'
                  }`}
                >
                  {pkg.price}
                </span>
              </div>

              <ul className="space-y-3.5 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`w-5 h-5 mt-0.5 shrink-0 ${
                        pkg.highlight ? 'text-[#f0803c]' : 'text-green-400'
                      }`}
                    />
                    <span className="text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/bewerbung.html"
                className={`flex items-center justify-center gap-2 w-full rounded-full h-12 text-sm font-medium transition-all ${
                  pkg.highlight
                    ? 'bg-[#e8553f] hover:brightness-110 text-white shadow-[0_0_28px_rgba(232,85,63,0.35)]'
                    : 'bg-white/10 hover:bg-white text-white hover:text-gray-900'
                }`}
              >
                {pkg.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-white/50">
            Nicht sicher, was du brauchst?{' '}
            <a
              href="/termin.html"
              className="text-[#f0803c] font-medium underline decoration-[#e8553f]/40 underline-offset-4 hover:decoration-[#f0803c]"
            >
              Lass uns sprechen.
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
