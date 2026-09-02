# NA4MC Redesign-Plan (2026-09)

Positionierung: **„Wir bauen und skalieren muslimische Brands."** — Strategy · Marketing · Systems · Products.
Identität bleibt: „Neu erfinden. Im Zeitgeist." / Bridging Faith & Business / RedSun-Akzent.

## 1. Inventur (Ist-Zustand)

- **Stack:** Vite + React 18 + TS + Tailwind 3, keine Runtime-Deps außer lucide-react. Deploy: Push auf `main` → Vercel → www.na4mc.de.
- **Seiten:** SPA-Home (14 Sektionen) + statisch: /impressum, /datenschutz, /agb, /termin (Cal.com `na4mc/30min`), /danke, /bewerbung (Quiz, clientseitig).
- **Assets:** 4 Higgsfield-Wüstenframes (WebP, je ~20 KB), founder.webp (Rückenansicht), stars.svg, 5 Kundenlogos (UmrahCheck, DEEN Akademie, QSK, Madinah Cosmetics, Loubaan), Avatar-JPG (ungenutzt).
- **Verifizierter Proof:** QSK-Case: 3,5 Mio. € Umsatz, 300K € Ad Spend, 11,6 € pro 1 €, 4 Jahre. Kundenlogos. „Zwei eigene Apps im App Store" (Aussage des Gründers; keine Assets im Repo → Platzhalter-Datenstruktur, KEINE erfundenen Namen/Zahlen).
- **Nicht verifiziert / fliegt raus:** Dashboard-Mockup-Zahlen (3.156.200 Impressionen etc. = Design-Template-Fiktion).
- **Lücken:** kein Analytics, keine robots.txt/sitemap.xml, kein OG/Twitter/Canonical/JSON-LD, Font ohne preconnect.

## 2. Design-System (Tokens)

- **Farben:** `--bg #0A0C12` (Charcoal-Schwarz), `--bg-raise` rgba-Stufen, `--ink #F4F1EA` (warmes Off-White), `--ink-dim` 70/50/35 %, **ein** Akzent `--accent #E8553F` (+ `--accent-soft #F0803C`), Linien `--line` white/8. Kein Regenbogen, kein Gradient-Text.
- **Typo:** Nimbus Sans TW01. Editorial-Skala: Display `clamp(2.75rem,7vw,6.5rem)`, tracking -0.03em, Zeilen-Masken-Reveals. Technische Labels: 11px, tracking 0.18em, `01 / STRATEGY`.
- **Motion:** ein Easing `--ease: cubic-bezier(0.16,1,0.3,1)`, Dauern 0.6/0.9/1.2 s. Eigener leichter Motion-Kit (IntersectionObserver + rAF) statt GSAP/Lenis → 0 KB neue Deps, gleiche Sprache: Reveals, Zeilen-Masken, Count-up, Sticky-Progress, Parallax (subtil), max. 3° Tilt. `prefers-reduced-motion` überall.
- **Islamische Geometrie:** generiertes, sehr subtiles 8-fach-Sterngitter-SVG (white 2-3 %) als Hintergrundtextur — mathematisch, nicht klischeehaft.

## 3. Signature-Objekt (statt 3D-Lib)

CSS-3D-„System-Stack": vier isometrisch gestapelte, halbtransparente Platten (= 01 Strategy / 02 Marketing / 03 Systems / 04 Products) mit N-Monogramm, reagiert auf Maus (Perspektiv-Tilt) und Scroll (Explosion/Reorganisation). Varianten: `hero` (leicht geöffnet), `system` (aktive Säule hebt sich), `cta` (wieder zusammengesetzt). Kein Three.js: gleiche Story, ~0 KB Bundle-Kosten, 60 fps, Fallback = statisch.

## 4. Homepage-Storytelling (neu)

01 Hero — „Wir bauen und skalieren muslimische Brands." + Objekt + Scroll-Indikator (kein Dashboard, keine Suchleiste)
02 Problem — „Gute Produkte reichen nicht." Editorial, Zeilen aktivieren beim Scrollen (ersetzt Comparison)
03 System — „Nicht nur Marketing. Ein Wachstumssystem." Sticky-Säulen 01-04, Objekt wechselt Zustand (ersetzt Benefits/Services/FeatureBlocks)
04 Proof — Count-up: 3,5 Mio € / 300K / 11,6× / 4 Jahre + Logostreifen (nur Verifiziertes)
05 QSK-Case — „Von 0 auf 3,5 Mio. €." Scroll-Timeline 00→Result (ersetzt SuccessStory)
06 We build too — „We don't just advise. We build." 2 Phone-Mockups, `src/content/apps.ts` als befüllbare Struktur
07 Leistungen — 4 Gruppen GROWTH/STRATEGY/SYSTEMS/BUILD als Bento (ersetzt Services+Channels)
08 Why Muslim Brands — „Wir verstehen den Markt, weil wir Teil davon sind." + Bridging Faith & Business (aus About)
09 Founder — „Founder. Marketer. Builder." founder.webp mit Masken-Reveal + bestehendes Zitat
10 Prozess — 01 Diagnose / 02 Strategie / 03 Build / 04 Scale, sticky Timeline
11 Engagement — Fundament / Wachstum / **Partner** (ehem. Dominanz) als Levels, beratungsbasiert, keine Preise
12 Final CTA — „Bereit für die nächste Version deiner Marke?" + „Neu erfinden. Im Zeitgeist.", Wüsten-Frame-4 als cinematisches Finale, Objekt komplett
Navigation — minimal sticky (Arbeit, Leistungen, Apps, Über uns, Kontakt + CTA), Blur nach Scroll. Footer bleibt (Anker aktualisiert).
Ticker + Dashboard + Suchleiste entfallen. Wüstenframes wandern von Hero → Finale; founder.webp bleibt in 09.

## 5. Technik

- Struktur: `src/content/home.ts` (aller Text/Daten zentral), `src/lib/motion.ts` (Hooks), `src/components/{navigation,hero,three,sections}/`. Alte Sektionskomponenten werden entfernt.
- SEO: Title/Description, Canonical, OG/Twitter (+ generiertes og.jpg aus Frame 4), JSON-LD Organization, robots.txt, sitemap.xml, preconnect Font. Keywords natürlich einarbeiten (Online Marketing / Unternehmensberatung für muslimische Unternehmen).
- Performance-Budget: JS ≤ ~70 KB gzip, Bilder lazy (außer Hero), rAF pausiert außerhalb Viewport, GPU-freundliche Transforms.
- A11y: semantische Headings ohne Sprünge, Fokus-Stile, Kontraste AA, reduced motion.

## 6. Verifikation (Pflicht-Loop)

Pass 1 Struktur+Inhalt → Pass 2 Visual+Motion → Pass 3 Polish+Mobile+Perf.
Je Pass: Build, Konsole, Screenshots (Load/Scroll-Zustände, 390/768/1440), Impeccable-Detect, Fix, Wiederholung. Push auf main erst nach bestandenem Pass 3 (Push = Live-Deploy).

## 7. Offene Punkte (bewusst nicht erfunden)

- App-Namen/Screenshots/Store-Links → `src/content/apps.ts` befüllen, Sektion zeigt bis dahin neutrale Mockups.
- Analytics (Empfehlung: Vercel Analytics) — nur auf Zuruf.
- Font-Selfhosting (onlinewebfonts-CDN ist ein SPOF) — Folge-Task.
