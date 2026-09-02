import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../Logo'

const navItems = [
  { label: 'Arbeit', href: '#arbeit' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Apps', href: '#apps' },
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Kontakt', href: '/termin.html' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`animate-fade-down fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-brand ${
        scrolled ? 'border-b border-ink/10 bg-base/75 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-4">
        <a href="/" className="flex items-center gap-2 text-ink">
          <Logo className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="text-[15px] font-medium tracking-tight sm:text-base">NA4MC</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="u-link text-[13px] text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/termin.html"
            className="rounded-full bg-accent px-4 py-2 text-[13px] font-medium text-white shadow-[0_0_20px_rgba(232,85,63,0.35)] transition-all hover:brightness-110 sm:px-5"
          >
            Erstgespräch
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/10 md:hidden"
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="animate-fade-up absolute left-4 right-4 top-full rounded-2xl border border-ink/10 bg-base/95 px-5 py-3 backdrop-blur-xl md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-ink/10 py-3 text-[15px] text-ink/80 last:border-b-0 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
