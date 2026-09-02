/*
 * Eigene Apps im Apple App Store.
 * WICHTIG: Nichts erfinden — Felder erst befüllen, wenn Name/Link/Screens vorliegen.
 * Sobald `name` gesetzt ist, zeigt die Sektion die Details automatisch an.
 */

export type AppEntry = {
  name: string | null
  tagline: string | null
  appStoreUrl: string | null
  markets: string | null
  /* Pfad zu einem Screenshot in /public, z. B. '/apps/app1-screen.webp' */
  screen: string | null
}

export const apps: AppEntry[] = [
  { name: null, tagline: null, appStoreUrl: null, markets: null, screen: null },
  { name: null, tagline: null, appStoreUrl: null, markets: null, screen: null },
]
