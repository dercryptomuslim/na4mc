import {
  ChevronLeft,
  ChevronRight,
  Compass,
  Copy,
  Layers,
  LayoutGrid,
  ListTodo,
  Monitor,
  PanelLeft,
  Plus,
  RotateCw,
  Share,
  Sparkles,
} from 'lucide-react'
import Logo from './Logo'

const recentPosts = [
  'Halal Brand Guide – Reel',
  'US-LLC Setup erklärt',
  'Kundenstory: Amanah Shop',
  'Ramadan Kampagne 2027',
  'Content-Plan August',
]

const stats = [
  { label: 'LIVE', value: '62', sub: 'Posts veröffentlicht' },
  { label: 'BRANDS', value: '12', sub: 'Aktive Kunden' },
  { label: 'GEPLANT', value: '412', sub: 'Posts in Pipeline' },
  { label: 'REICHWEITE', value: '3.156.200', sub: 'Impressionen im Monat' },
]

const subjects = [
  { name: 'Social Media', meta: '28 Kampagnen · 6 Kanäle' },
  { name: 'Performance Ads', meta: '14 Kampagnen · 3 Kanäle' },
  { name: 'Automatisierung', meta: '9 Workflows · aktiv' },
]

const inboxRows = [
  {
    question: 'Wie baue ich eine Halal-Brand auf Instagram auf?',
    volume: '12.400',
    difficulty: 'Mittel',
    status: 'Entwurf',
  },
  {
    question: 'Was kostet Social Media Marketing für KMU?',
    volume: '8.100',
    difficulty: 'Leicht',
    status: 'Entwurf',
  },
  {
    question: 'Halal investieren: Welche Anbieter sind seriös?',
    volume: '22.000',
    difficulty: 'Schwer',
    status: 'Bereit',
  },
  {
    question: 'Wie funktioniert eine US-LLC für Deutsche?',
    volume: '9.900',
    difficulty: 'Mittel',
    status: 'Entwurf',
  },
  {
    question: 'Ramadan Marketing: Kampagnen-Ideen für Brands',
    volume: '5.400',
    difficulty: 'Leicht',
    status: 'Bereit',
  },
]

const sidebarNav = [
  { icon: Compass, label: 'Kampagnen', active: true },
  { icon: Layers, label: 'Kanäle', active: false },
  { icon: ListTodo, label: 'Anfragen', active: false },
]

export default function DashboardMockup() {
  return (
    <div className="rounded-t-2xl overflow-hidden bg-[#1a1a1c] shadow-[0_-20px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/10 text-left">
      {/* Title bar */}
      <div className="flex items-center gap-3 bg-[#242427] border-b border-white/5 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <PanelLeft className="w-3.5 h-3.5 text-white/40" />
        <ChevronLeft className="w-3.5 h-3.5 text-white/40" />
        <ChevronRight className="w-3.5 h-3.5 text-white/25" />
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-1.5 bg-[#1a1a1c] rounded-md px-6 py-1 text-[10px] text-white/60">
            <Monitor className="w-3 h-3" />
            na4mc.de
          </div>
        </div>
        <RotateCw className="w-3.5 h-3.5 text-white/40" />
        <Share className="w-3.5 h-3.5 text-white/40" />
        <Plus className="w-3.5 h-3.5 text-white/40" />
        <Copy className="w-3.5 h-3.5 text-white/40" />
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-[22%] shrink-0 border-r border-white/5 bg-[#1e1e21] px-3 py-3.5">
          <div className="flex items-center justify-between mb-4">
            <Logo className="w-4 h-4 text-white/70" />
            <LayoutGrid className="w-3.5 h-3.5 text-white/30" />
          </div>

          <div className="flex items-center gap-1.5 mb-4">
            <span className="flex items-center justify-center w-4 h-4 rounded bg-[#e8553f] text-[8px] font-semibold text-white">
              N
            </span>
            <span className="text-[10px] text-white/80">NA4MC Studio</span>
          </div>

          <nav className="space-y-0.5 mb-5">
            {sidebarNav.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[10px] ${
                  item.active ? 'bg-white/[0.06] text-white/90' : 'text-white/60'
                }`}
              >
                <item.icon className="w-3 h-3" />
                {item.label}
              </div>
            ))}
          </nav>

          <p className="px-2 mb-1.5 text-[8px] tracking-wider text-white/30">ZULETZT ERSTELLT</p>
          <ul className="space-y-1">
            {recentPosts.map((post) => (
              <li
                key={post}
                className="flex items-center gap-1.5 px-2 py-1 text-[9px] text-white/50"
              >
                <span className="w-1 h-1 rounded-full bg-[#28c840]/70 shrink-0" />
                <span className="truncate">{post}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content */}
        <main className="flex-1 px-5 py-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#e8553f] text-sm font-semibold text-white">
                N
              </span>
              <div>
                <p className="text-sm font-medium text-white">NA4MC Studio</p>
                <p className="text-[10px] text-white/45">Marketing &amp; Consulting · DACH</p>
              </div>
            </div>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-lg bg-white/90 px-3 py-1.5 text-[10px] font-medium text-gray-900"
            >
              <Sparkles className="w-3 h-3" />
              Generieren
            </button>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-4 divide-x divide-white/5 rounded-xl bg-white/[0.03] ring-1 ring-white/5 mb-4">
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-3">
                <p className="text-[8px] tracking-wider text-white/35 mb-1">{stat.label}</p>
                <p className="text-xl font-medium text-white">{stat.value}</p>
                <p className="text-[9px] text-white/40">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Subject cards */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {subjects.map((subject) => (
              <div
                key={subject.name}
                className="rounded-lg bg-white/[0.03] ring-1 ring-white/5 px-3.5 py-3"
              >
                <p className="text-[11px] text-white/85 mb-0.5">{subject.name}</p>
                <p className="text-[9px] text-white/40">{subject.meta}</p>
              </div>
            ))}
          </div>

          {/* Drafting inbox */}
          <div className="rounded-xl bg-white/[0.03] ring-1 ring-white/5 px-4 py-3">
            <p className="text-[8px] tracking-wider text-white/35 mb-2">CONTENT-PIPELINE</p>
            <div className="grid grid-cols-[1fr_auto_auto_auto] gap-x-6 items-center">
              <p className="text-[8px] tracking-wider text-white/25 py-1">FRAGE</p>
              <p className="text-[8px] tracking-wider text-white/25 py-1 text-right">VOLUMEN</p>
              <p className="text-[8px] tracking-wider text-white/25 py-1 text-right">AUFWAND</p>
              <p className="text-[8px] tracking-wider text-white/25 py-1 text-right">STATUS</p>
              {inboxRows.map((row) => (
                <div key={row.question} className="contents">
                  <p className="truncate border-t border-white/5 py-2 text-[10px] text-white/70">
                    {row.question}
                  </p>
                  <p className="border-t border-white/5 py-2 text-right text-[10px] text-white/45">
                    {row.volume}
                  </p>
                  <p className="border-t border-white/5 py-2 text-right text-[10px] text-white/45">
                    {row.difficulty}
                  </p>
                  <p
                    className={`border-t border-white/5 py-2 text-right text-[10px] ${
                      row.status === 'Entwurf' ? 'text-[#febc2e]/80' : 'text-[#28c840]/70'
                    }`}
                  >
                    {row.status}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
