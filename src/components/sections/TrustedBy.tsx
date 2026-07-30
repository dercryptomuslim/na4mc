const logos = [
  { src: '/logos/umrahcheck.png', alt: 'UmrahCheck', h: 'h-10 sm:h-12' },
  { src: '/logos/deen-akademie.png', alt: 'DEEN Akademie', h: 'h-14 sm:h-16' },
  { src: '/logos/qsk.png', alt: 'QSK Methode', h: 'h-10 sm:h-12' },
  { src: '/logos/madinahcosmetics.png', alt: 'Madinah Cosmetics', h: 'h-12 sm:h-14' },
  { src: '/logos/loubaan.png', alt: 'Loubaan', h: 'h-10 sm:h-12' },
]

export default function TrustedBy() {
  return (
    <section className="border-b border-white/5 py-12 sm:py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <p className="text-[12px] font-medium tracking-[0.18em] uppercase text-white/35 mb-8 sm:mb-10">
          Bekannt aus der Zusammenarbeit mit
        </p>
        <div className="group flex flex-wrap justify-center items-center gap-x-10 gap-y-8 sm:gap-x-16">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className={`${logo.h} w-auto max-w-[150px] object-contain brightness-0 invert opacity-60 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-500`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
