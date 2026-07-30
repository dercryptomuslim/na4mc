import Hero from './components/Hero'

export default function App() {
  return (
    <>
      <Hero />
      <footer className="bg-[#111113] px-6 py-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/50">
        <span>© 2026 NA4MC LLC</span>
        <a href="/impressum.html" className="hover:text-white/80 transition-colors">
          Impressum
        </a>
        <a href="/datenschutz.html" className="hover:text-white/80 transition-colors">
          Datenschutz
        </a>
        <a href="/agb.html" className="hover:text-white/80 transition-colors">
          AGB
        </a>
      </footer>
    </>
  )
}
