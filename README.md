# NA4MC – Webseite

Marketing-Website für **NA4MC – Nomad Agency for Marketing & Consulting** (na4mc.de).

Vite + React + TypeScript + Tailwind CSS 3, Icons via lucide-react.

## Entwicklung

```bash
npm install
npm run dev
```

## Production-Build

```bash
npm run build
```

Der Build landet in `dist/` (statisches SPA, direkt auf Vercel deploybar).

## Struktur

- `src/components/Hero.tsx` – Full-Viewport-Hero mit Hintergrundfoto, ScaledDashboard-Wrapper und Gras-Overlay
- `src/components/Navbar.tsx` – Navigation inkl. mobilem Glass-Dropdown
- `src/components/DashboardMockup.tsx` – Browser-Chrome-Dashboard (896px Designbreite, per ResizeObserver skaliert)
- `src/components/Logo.tsx` – NA4MC-Logomarke (SVG, `currentColor`)
- `public/grass.svg` – generiertes Gras-Overlay (Ersatz für das nicht mehr erreichbare Original-Asset)
