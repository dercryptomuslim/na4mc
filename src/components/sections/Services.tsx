import { BarChart3, Mail, MonitorSmartphone, Settings, Users } from 'lucide-react'

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Social Media Betreuung',
    desc: 'Wir sorgen dafür, dass dein Unternehmen sichtbar wird. Mit Inhalten, die deine Zielgruppe wirklich erreichen.',
    colSpan: 'md:col-span-1',
    tone: 'bg-white/[0.04] ring-white/10',
  },
  {
    icon: BarChart3,
    title: 'Werbeanzeigen (Meta, TikTok, Google)',
    desc: 'Bezahlte Werbung auf Google, Facebook, Instagram & TikTok. Von der Idee bis zur technischen Umsetzung.',
    colSpan: 'md:col-span-1',
    tone: 'bg-white/[0.04] ring-white/10',
  },
  {
    icon: Users,
    title: 'Mitarbeitergewinnung',
    desc: 'Finde die besten Mitarbeiter über soziale Netzwerke. Schnell, effizient und zielgerichtet.',
    colSpan: 'md:col-span-1',
    tone: 'bg-white/[0.04] ring-white/10',
  },
  {
    icon: Settings,
    title: 'Prozesse & Automatisierung',
    desc: 'Wir optimieren deine Unternehmensprozesse mit KI, damit dein Marketing skalierbar wird.',
    colSpan: 'md:col-span-2',
    tone: 'bg-[#e8553f]/[0.08] ring-[#e8553f]/25',
  },
  {
    icon: Mail,
    title: 'E-Mail Marketing',
    desc: 'Mach aus Interessenten dauerhafte Kunden durch automatisierte E-Mail-Kampagnen.',
    colSpan: 'md:col-span-1',
    tone: 'bg-white/[0.04] ring-white/10',
  },
]

export default function Services() {
  return (
    <section id="services" className="scroll-mt-8 relative py-20 sm:py-28 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[#e8553f]/[0.06] blur-[120px]" />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="block text-[13px] font-medium tracking-[0.14em] uppercase text-[#f0803c] mb-4">
            Unser Angebot
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-5">
            Alles aus einer Hand.
            <br />
            Von A bis Z.
          </h2>
          <p className="text-white/70 sm:text-lg leading-relaxed">
            Wir betreuen nicht nur Kanäle, sondern optimieren dein Geschäft. Von Konzept und Skript
            über Video/Bild bis zur technischen Umsetzung und KPI-Auswertung.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group rounded-3xl p-7 sm:p-8 ring-1 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition-all duration-300 ${service.colSpan} ${service.tone}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/[0.06] ring-1 ring-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <service.icon className="w-6 h-6 text-[#f0803c]" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{service.title}</h3>
              <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
