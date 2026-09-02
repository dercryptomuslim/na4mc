import Logo from '../Logo'
import { apps } from '../../content/apps'
import { build } from '../../content/home'
import { Reveal } from '../../lib/motion'
import { Panel, SectionHeader } from '../ui/Panel'

function Phone({ index }: { index: number }) {
  const app = apps[index]
  const rotation = index === 0 ? '-rotate-6 translate-y-10' : 'rotate-[5deg] translate-y-20'

  return (
    <Reveal delay={index * 150} threshold={0.3}>
      <figure
        className={`rv w-[200px] rounded-[40px] border border-ink/15 bg-gradient-to-b from-[#171c29] to-base p-2 shadow-[0_40px_80px_rgba(0,0,0,0.55)] sm:w-[225px] ${rotation}`}
      >
        <div
          className="relative flex h-[400px] flex-col items-center justify-center overflow-hidden rounded-[32px] border border-ink/10 bg-base sm:h-[440px]"
          style={{ backgroundImage: 'url(/geometry.svg)', backgroundSize: '160px 160px' }}
        >
          <span className="absolute top-3 h-5 w-20 rounded-full bg-black" aria-hidden="true" />
          {app.screen ? (
            <img src={app.screen} alt={app.name ?? `App ${index + 1}`} className="h-full w-full object-cover" />
          ) : (
            <>
              <Logo className="h-11 w-11 text-accent drop-shadow-[0_0_20px_rgba(232,85,63,0.5)]" />
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-label text-ink/45">
                {app.name ?? `App ${String(index + 1).padStart(2, '0')}`}
              </p>
              {app.tagline && <p className="mt-2 px-6 text-center text-sm text-ink/70">{app.tagline}</p>}
            </>
          )}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-accent/15 to-transparent"
            aria-hidden="true"
          />
        </div>
      </figure>
    </Reveal>
  )
}

export default function AppsShowcase() {
  return (
    <section id="apps" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          label={build.label}
          title={
            <>
              We don't just advise.
              <br />
              We build.
            </>
          }
          text={build.sub}
        />

        <Panel punchline="Namen, Links und Screens der Apps folgen hier — ohne Platzhalter-Versprechen.">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="p-7 sm:p-10">
              <p className="max-w-md text-lg font-medium leading-relaxed text-ink/90">{build.sub}</p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/65">{build.body}</p>
            </div>
            {/* Visual läuft randlos aus dem Panel (Fora-Stil) */}
            <div className="relative flex items-start justify-center gap-5 overflow-hidden px-6 pt-8 sm:gap-8">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(70%_60%_at_50%_100%,rgba(232,85,63,0.12),transparent)]"
                aria-hidden="true"
              />
              <Phone index={0} />
              <Phone index={1} />
            </div>
          </div>
        </Panel>
      </div>
    </section>
  )
}
