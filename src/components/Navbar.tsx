import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from './Logo'

const navItems = [
  { label: 'Services', href: '#services', hasChevron: true },
  { label: 'Ergebnisse', href: '#ergebnisse', hasChevron: false },
  { label: 'Über uns', href: '#ueber-uns', hasChevron: false },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="animate-fade-down relative z-20">
      <nav className="flex items-center justify-between px-5 sm:px-8 lg:px-10 py-4 sm:py-5">
        <a href="/" className="flex items-center gap-2 text-white">
          <Logo className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-[15px] sm:text-base font-medium tracking-tight">NA4MC</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 text-[13px] text-white/70 hover:text-white transition-colors"
            >
              {item.label}
              {item.hasChevron && <ChevronDown className="w-3.5 h-3.5" />}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/termin.html"
            className="bg-white text-gray-900 text-[13px] font-medium px-4 sm:px-5 py-2 rounded-full hover:bg-white/90 transition-colors"
          >
            Erstgespräch buchen
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full text-white hover:bg-white/10 transition-colors"
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden absolute left-4 right-4 top-full rounded-2xl bg-[#0B1120]/90 backdrop-blur-xl ring-1 ring-white/10 px-5 py-3 animate-fade-up">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-[15px] text-white/80 hover:text-white border-b border-white/10 last:border-b-0"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
