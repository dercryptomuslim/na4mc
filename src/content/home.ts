/* Zentrale Inhalte der Startseite — Texte hier pflegen, nicht in den Komponenten. */

export const hero = {
  label: 'NA4MC — Nomad Agency for Marketing & Consulting',
  headline: ['Wir bauen', 'und skalieren', 'muslimische Brands.'],
  sub: 'Online Marketing, Unternehmensberatung, Technologie und digitale Produkte — für muslimische Unternehmen, die professionell wachsen wollen.',
  primaryCta: { label: 'Kostenloses Erstgespräch', href: '/termin.html' },
  secondaryCta: { label: 'Unsere Arbeit', href: '#arbeit' },
}

export const problem = {
  label: '01 — Problem',
  headline: 'Gute Produkte reichen nicht.',
  intro:
    'Viele muslimische Unternehmen haben starke Produkte und echte Werte — aber kein System, das daraus planbares Wachstum macht.',
  lines: [
    'Unklare Positionierung.',
    'Inkonsistentes Marketing.',
    'Kein wiederholbares Akquise-System.',
    'Manuelle Prozesse, die nicht skalieren.',
    'Agenturen, die eure Kunden nicht verstehen.',
  ],
  outro: 'Das Problem ist selten das Produkt. Es ist das fehlende System dahinter.',
}

export const pillars = [
  {
    n: '01',
    en: 'STRATEGY',
    title: 'Strategie',
    desc: 'Das Fundament vor jedem Kanal: Wer kauft, warum — und wie daraus ein Geschäftsmodell wird, das trägt.',
    items: ['Positionierung', 'Angebot', 'Geschäftsmodell', 'KPIs', 'Wachstumsstrategie'],
  },
  {
    n: '02',
    en: 'MARKETING',
    title: 'Marketing',
    desc: 'Nachfrage erzeugen und in Umsatz übersetzen — auf den Kanälen, auf denen eure Kunden wirklich sind.',
    items: ['Meta', 'TikTok', 'Google', 'Content', 'E-Mail', 'Influencer'],
  },
  {
    n: '03',
    en: 'SYSTEMS',
    title: 'Systeme',
    desc: 'Was manuell läuft, bleibt klein. Wir bauen die Infrastruktur, die Wachstum wiederholbar macht.',
    items: ['KI', 'Automatisierung', 'Tracking', 'CRM', 'Prozesse'],
  },
  {
    n: '04',
    en: 'PRODUCTS',
    title: 'Produkte',
    desc: 'Wir bauen digitale Produkte — für Kunden und für uns selbst. Deshalb wissen wir, was funktioniert.',
    items: ['Web', 'Apps', 'Funnels', 'Digitale Infrastruktur'],
  },
]

export const proof = {
  label: '03 — Proof',
  headline: 'Belegt. Nicht behauptet.',
  stats: [
    { value: 3.5, decimals: 1, suffix: ' Mio. €', label: 'Umsatz im QSK-Case generiert' },
    { value: 300, decimals: 0, suffix: 'K €', label: 'Ad Spend, mehr nicht' },
    { value: 11.6, decimals: 1, suffix: '×', label: 'Umsatz pro eingesetztem Euro' },
    { value: 4, decimals: 0, suffix: ' Jahre', label: 'Aufbau — von null an' },
  ],
  logosLabel: 'Bekannt aus der Zusammenarbeit mit',
}

export const caseQsk = {
  label: '04 — Case: QSK Methode',
  headline: ['Von 0 auf', '3,5 Mio. €.'],
  intro:
    'Ein Koran-Lesekurs im DACH-Raum. Kein bestehendes Publikum, kein Funnel, kein System. Vier Jahre später: ein digitales Bildungsunternehmen mit planbarer Akquise.',
  steps: [
    { n: '00', title: 'Ausgangspunkt', desc: 'Starkes Produkt, keine digitale Vertriebsstruktur. Null Reichweite, null Daten.' },
    { n: '01', title: 'Positionierung', desc: 'Ein klares Versprechen statt „Kurs für alle": Wer lernt hier was — und warum jetzt.' },
    { n: '02', title: 'Zielgruppe verstehen', desc: 'Muslimische Kunden im DACH-Raum: Sprache, Einwände, Vertrauen. Kulturell passende Creatives statt Übersetzungen.' },
    { n: '03', title: 'Akquise aufbauen', desc: 'Meta-Kampagnen mit klarer Botschaft, Landingpages, E-Mail-Strecken — ein Funnel, der trägt.' },
    { n: '04', title: 'Testen, testen, testen', desc: 'Varianten, Auswertung, Iteration. Gewinner-Anzeigen entstehen nicht — sie werden gefunden.' },
    { n: '05', title: 'Skalieren', desc: 'Budgets hoch, Prozesse automatisiert, Team entlastet. Wachstum ohne Chaos.' },
  ],
  result: {
    spend: '300K € Ad Spend',
    revenue: '3,5 Mio. € Umsatz',
    note: 'Aus jedem eingesetzten Euro wurden 11,60 € Umsatz.',
  },
}

export const build = {
  label: '05 — We build',
  headline: ["We don't just advise.", 'We build.'],
  sub: 'Die Systeme, die wir unseren Kunden empfehlen, müssen zuerst bei unseren eigenen Produkten funktionieren.',
  body: 'Zwei eigene Apps im Apple App Store — von uns konzipiert, gebaut, gelauncht und vermarktet. Wer selbst Produkte betreibt, berät anders: mit Haut im Spiel statt Folien.',
}

export const serviceGroups = [
  {
    n: '01',
    en: 'GROWTH',
    title: 'Wachstum, das messbar ist',
    items: ['Performance Marketing (Meta, TikTok, Google)', 'Content & Creatives', 'E-Mail-Marketing', 'Influencer & Creator'],
  },
  {
    n: '02',
    en: 'STRATEGY',
    title: 'Klarheit vor Kanälen',
    items: ['Positionierung', 'Unternehmensberatung', 'Angebots-Strategie', 'Wachstums-Strategie'],
  },
  {
    n: '03',
    en: 'SYSTEMS',
    title: 'Infrastruktur fürs Skalieren',
    items: ['KI & Automatisierung', 'Tracking & Attribution', 'CRM', 'Prozesse'],
  },
  {
    n: '04',
    en: 'BUILD',
    title: 'Wir setzen selbst um',
    items: ['Websites', 'Funnels', 'Digitale Produkte', 'Apps'],
  },
]

export const why = {
  label: '07 — Warum wir',
  kicker: 'Bridging Faith & Business.',
  headline: ['Wir verstehen den Markt,', 'weil wir Teil davon sind.'],
  body: 'Muslimische Kunden im DACH-Raum sind kein Nischensegment — sie sind ein Markt mit eigener Sprache, eigenen Einwänden und eigenem Vertrauensaufbau. Wir übersetzen das nicht aus Studien. Wir kennen es, weil wir selbst darin unternehmerisch arbeiten.',
  principles: [
    { title: 'Marktverständnis', desc: 'Zielgruppen-Insights aus erster Hand statt Personas vom Reißbrett.' },
    { title: 'Amanah', desc: 'Verantwortung im Umgang mit Budget, Daten und Vertrauen. Ohne Haram-Marketing.' },
    { title: 'Langfristigkeit', desc: 'Marken werden über Jahre gebaut. Wir optimieren nicht für den Quartals-Screenshot.' },
    { title: 'Internationale Perspektive', desc: 'US-LLC, DACH-Fokus, globale Best Practices — lokal übersetzt.' },
  ],
}

export const founder = {
  label: '08 — Founder',
  headline: 'Founder. Marketer. Builder.',
  name: 'Mustafa Ali',
  roles: ['Unternehmer', 'Marketer', 'Berater', 'Produkt-Builder'],
  body: 'NA4MC ist gründergeführt. Strategie kommt hier von jemandem, der selbst Unternehmen aufbaut, eigene Produkte im App Store betreibt und Kampagnen mit eigenem Budget getestet hat — nicht aus der zweiten Reihe.',
  quote:
    '„Unser Ziel ist es, muslimische Unternehmer so stark zu machen, dass sie nicht nur wirtschaftlich, sondern auch gesellschaftlich etwas bewegen können."',
}

export const process = {
  label: '09 — Prozess',
  headline: 'Vier Schritte. Ein System.',
  steps: [
    { n: '01', title: 'Diagnose', desc: 'Status quo, Zahlen, Zielgruppe, Angebot. Wir finden heraus, wo Wachstum wirklich entsteht — und wo es klemmt.' },
    { n: '02', title: 'Strategie', desc: 'Positionierung, Prioritäten, Roadmap. Was wird gebaut, was wird getestet, woran wird gemessen.' },
    { n: '03', title: 'Build', desc: 'Kampagnen, Content, Funnels, Systeme. Wir setzen um — mit klaren Verantwortlichkeiten.' },
    { n: '04', title: 'Scale', desc: 'Auswertung, Iteration, Skalierung. Alle zwei Wochen Learnings statt Bauchgefühl.' },
  ],
}

export const engagement = {
  label: '10 — Zusammenarbeit',
  headline: 'Drei Stufen. Ein Ziel.',
  sub: 'Keine Pakete von der Stange — der Einstieg richtet sich nach Phase und Ziel. Umfang und Konditionen klären wir im Gespräch.',
  levels: [
    {
      en: 'FOUNDATION',
      title: 'Fundament',
      desc: 'Das Wachstumsfundament: Positionierung, Zielgruppe, Tracking, Content-Strategie.',
      audience: 'Für Brands, die professionell starten wollen.',
    },
    {
      en: 'GROWTH',
      title: 'Wachstum',
      desc: 'Planbare Akquise: Performance-Kampagnen, Content-Produktion, Reporting im 2-Wochen-Takt.',
      audience: 'Für Brands mit Umsatz, die skalieren wollen.',
    },
    {
      en: 'PARTNER',
      title: 'Partner',
      desc: 'Volle strategische Wachstumspartnerschaft: Beratung, Umsetzung, Systeme und Produkte aus einer Hand.',
      audience: 'Für Unternehmen, die einen Sparringspartner auf Augenhöhe suchen.',
    },
  ],
}

export const finalCta = {
  headline: ['Bereit für die nächste', 'Version deiner Marke?'],
  kicker: 'Neu erfinden. Im Zeitgeist.',
  primaryCta: { label: 'Potenzialanalyse starten', href: '/bewerbung.html' },
  secondaryCta: { label: 'Erstgespräch buchen', href: '/termin.html' },
}

export const clientLogos = [
  { src: '/logos/umrahcheck.png', alt: 'UmrahCheck' },
  { src: '/logos/deen-akademie.png', alt: 'DEEN Akademie' },
  { src: '/logos/qsk.png', alt: 'QSK Methode' },
  { src: '/logos/madinahcosmetics.png', alt: 'Madinah Cosmetics' },
  { src: '/logos/loubaan.png', alt: 'Loubaan' },
]
