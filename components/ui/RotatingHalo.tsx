export function RotatingHalo() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Soft grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:28px_28px] opacity-50" />

      {/* Rotating ring (Aura/Tech feel) */}
      <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2">
        <div className="na4mc-rotating-ring na4mc-rotate-slow na4mc-float-slow" />
      </div>

      {/* Soft glow companions */}
      <div className="hero-glow top-[-120px] left-[8%] w-[520px] h-[520px] bg-orange-100/70" />
      <div className="hero-glow top-[-140px] right-[6%] w-[520px] h-[520px] bg-blue-100/70" />
      <div className="hero-glow bottom-[-220px] left-1/2 -translate-x-1/2 w-[640px] h-[640px] bg-amber-50/80" />
    </div>
  );
}

