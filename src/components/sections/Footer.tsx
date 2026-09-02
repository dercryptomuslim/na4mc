import { Calendar, Instagram, Linkedin, Mail, Music2 } from 'lucide-react'
import Logo from '../Logo'

const socials = [
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/dercryptomuslim' },
  { icon: Music2, label: 'TikTok', href: 'https://www.tiktok.com/@dercryptomuslim' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mustafa-ali-10b83a182' },
]

const nav = [
  { label: 'Arbeit', href: '#arbeit' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Apps', href: '#apps' },
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Prozess', href: '#prozess' },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 pb-8 pt-16 text-ink/60 sm:pt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 grid gap-10 md:grid-cols-4 lg:gap-12">
          <div className="md:col-span-2">
            <a href="/" className="mb-5 flex items-center gap-2 text-ink">
              <Logo className="h-5 w-5" />
              <span className="text-[15px] font-medium tracking-tight">NA4MC</span>
            </a>
            <p className="mb-6 max-w-sm text-sm leading-relaxed">
              Nomad Agency for Marketing &amp; Consulting LLC.
              <br />
              Wir bauen und skalieren muslimische Brands — Strategie, Marketing, Systeme, Produkte.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-ink/60 ring-1 ring-ink/15 transition-colors hover:text-ink hover:ring-ink/40"
                >
                  <social.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-medium text-ink">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-medium text-ink">Kontakt</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:mustafa.ali@na4mc.de"
                  className="flex items-center gap-2 transition-colors hover:text-ink"
                >
                  <Mail className="h-4 w-4" /> mustafa.ali@na4mc.de
                </a>
              </li>
              <li>
                <a
                  href="/bewerbung.html"
                  className="flex items-center gap-2 transition-colors hover:text-ink"
                >
                  <Calendar className="h-4 w-4" /> Potenzialanalyse starten
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-7 text-xs md:flex-row">
          <p>© 2026 Nomad Agency for Marketing &amp; Consulting LLC. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a href="/impressum.html" className="transition-colors hover:text-ink">
              Impressum
            </a>
            <a href="/datenschutz.html" className="transition-colors hover:text-ink">
              Datenschutz
            </a>
            <a href="/agb.html" className="transition-colors hover:text-ink">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
