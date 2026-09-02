import Logo from '../Logo'
import { apps } from '../../content/apps'
import { build } from '../../content/home'
import { MaskedLines, Reveal } from '../../lib/motion'

function Phone({ index }: { index: number }) {
  const app = apps[index]
  const rotation = index === 0 ? '-rotate-6 lg:translate-y-6' : 'rotate-[5deg] lg:-translate-y-6'

  return (
    <Reveal delay={index * 160} threshold={0.35}>
      <figure
        className={`rv w-[220px] rounded-[44px] border border-ink/15 bg-gradient-to-b from-[#141926] to-base p-2.5 shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-brand sm:w-[240px] ${rotation}`}
      >
        <div
          className="relative flex h-[440px] flex-col items-center justify-center overflow-hidden rounded-[34px] border border-ink/10 bg-base sm:h-[480px]"
          style={{ backgroundImage: 'url(/geometry.svg)', backgroundSize: '160px 160px' }}
        >
          {/* Dynamic Island */}
          <span className="absolute top-3 h-6 w-24 rounded-full bg-black" aria-hidden="true" />
          {app.screen ? (
            <img src={app.screen} alt={app.name ?? `App ${index + 1}`} className="h-full w-full object-cover" />
          ) : (
            <>
              <Logo className="h-12 w-12 text-accent drop-shadow-[0_0_20px_rgba(232,85,63,0.5)]" />
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-label text-ink/45">
                {app.name ?? `App ${String(index + 1).padStart(2, '0')}`}
              </p>
              {app.tagline && <p className="mt-2 px-6 text-center text-sm text-ink/70">{app.tagline}</p>}
            </>
          )}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-accent/15 to-transparent"
            aria-hidden="true"
          />
        </div>
        {app.name && (
          <figcaption className="px-3 py-3">
            <p className="text-sm font-medium text-ink">{app.name}</p>
            {app.markets && <p className="text-xs text-ink/50">{app.markets}</p>}
            {app.appStoreUrl && (
              <a href={app.appStoreUrl} className="u-link mt-1 inline-block text-xs text-accent-soft">
                Im App Store ansehen
              </a>
            )}
          </figcaption>
        )}
      </figure>
    </Reveal>
  )
}

export default function AppsShowcase() {
  return (
    <section id="apps" className="relative overflow-hidden border-t border-ink/5 py-24 sm:py-36">
      <div
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] translate-x-1/3 rounded-full bg-accent/[0.06] blur-[110px]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-8">
          <div>
            <Reveal>
              <p className="rv mb-5 text-[11px] font-semibold uppercase tracking-label text-accent-soft">
                {build.label}
              </p>
            </Reveal>
            <Reveal as="h2" className="in text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.0] tracking-[-0.03em] text-ink">
              <MaskedLines lines={build.headline} />
            </Reveal>
            <Reveal delay={200}>
              <p className="rv mt-6 max-w-md text-lg font-medium leading-relaxed text-ink/85">
                {build.sub}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="rv mt-4 max-w-md text-base leading-relaxed text-ink/70">{build.body}</p>
            </Reveal>
          </div>

          <div className="flex items-center justify-center gap-5 sm:gap-8">
            <Phone index={0} />
            <Phone index={1} />
          </div>
        </div>
      </div>
    </section>
  )
}
