const items = [
  'Online Marketing',
  'Unternehmensberatung',
  'Neuerfindung',
  'Zeitgeist',
  'Performance Ads',
  'KI & Automatisierung',
  'Content & Creatives',
  'Halal Growth',
]

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-6 text-[12px] font-medium uppercase tracking-[0.18em] text-white/50">
            {item}
          </span>
          <span className="text-[#e8553f]/70 text-[10px]">✦</span>
        </span>
      ))}
    </div>
  )
}

export default function Ticker() {
  return (
    <div className="group overflow-hidden border-b border-white/5 py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <Row />
        <Row />
      </div>
    </div>
  )
}
