import { Calendar, Instagram, Linkedin, Mail, Music2 } from 'lucide-react'
import Logo from '../Logo'

const socials = [
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/dercryptomuslim' },
  { icon: Music2, label: 'TikTok', href: 'https://www.tiktok.com/@dercryptomuslim' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mustafa-ali-10b83a182' },
]

const leistungen = [
  'Social Media Betreuung',
  'Werbeanzeigen',
  'Prozesse & Automatisierung',
  'KPI-Auswertung',
  'Content-Produktion',
]

export default function Footer() {
  return (
    <footer className="bg-[#111113] text-white/60 pt-16 sm:pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-4 gap-10 lg:gap-12 mb-14">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 text-white mb-5">
              <Logo className="w-5 h-5" />
              <span className="text-[15px] font-medium tracking-tight">NA4MC</span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed mb-6">
              Nomad Agency for Marketing &amp; Consulting LLC.
              <br />
              Social Media, KI &amp; Prozesse – für messbare Ergebnisse.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full ring-1 ring-white/15 flex items-center justify-center text-white/60 hover:text-white hover:ring-white/40 transition-colors"
                >
                  <social.icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-5">Leistungen</h4>
            <ul className="space-y-2.5 text-sm">
              {leistungen.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-medium mb-5">Kontakt</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:mustafa.ali@na4mc.de"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" /> mustafa.ali@na4mc.de
                </a>
              </li>
              <li>
                <a
                  href="/bewerbung.html"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Calendar className="w-4 h-4" /> Potenzialanalyse starten
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Nomad Agency for Marketing &amp; Consulting LLC. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="/impressum.html" className="hover:text-white transition-colors">
              Impressum
            </a>
            <a href="/datenschutz.html" className="hover:text-white transition-colors">
              Datenschutz
            </a>
            <a href="/agb.html" className="hover:text-white transition-colors">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
