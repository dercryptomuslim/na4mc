import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-40 pb-24">
        <div className="container px-4 mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Datenschutzerklärung</h1>

          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p className="text-sm text-slate-500">
              Stand: {new Date().getFullYear()}
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6">
              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-2">1. Verantwortlicher</h2>
                <p>
                  Nomad Agency for Marketing &amp; Consulting LLC
                  <br />
                  2880 W OAKLAND PARK BLVD, SUITE 225C
                  <br />
                  OAKLAND PARK, FL 33311, USA
                  <br />
                  E-Mail:{" "}
                  <a className="text-orange-600 font-semibold" href="mailto:mustafa.ali@na4mc.de">
                    mustafa.ali@na4mc.de
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-2">2. Allgemeine Hinweise</h2>
                <p>
                  Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Website,
                  zur Kommunikation oder zur Durchführung unserer Leistungen erforderlich ist.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-2">3. Hosting</h2>
                <p>
                  Diese Website wird bei einem Hosting-Dienstleister betrieben (z. B. Vercel). Dabei werden
                  technisch notwendige Daten (z. B. IP-Adresse, Zeitpunkt des Zugriffs, Browser-Informationen)
                  in Server-Logfiles verarbeitet, um die Website auszuliefern und zu schützen.
                </p>
                <p className="text-sm text-slate-500">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem Betrieb).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-2">4. Kontaktaufnahme</h2>
                <p>
                  Wenn du uns per E-Mail kontaktierst, verarbeiten wir die von dir übermittelten Daten
                  (z. B. Name, E-Mail-Adresse, Inhalt der Nachricht), um deine Anfrage zu bearbeiten.
                </p>
                <p className="text-sm text-slate-500">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. lit. f DSGVO.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-2">5. Bewerbungs-/Qualifizierungsformular</h2>
                <p>
                  Wenn du das Bewerbungsformular nutzt, verarbeiten wir deine Angaben, um dich zu qualifizieren
                  und dir ein passendes Leistungsniveau (Fundament/Wachstum/Dominanz) zuzuordnen.
                </p>
                <p className="text-sm text-slate-500">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-2">6. Terminbuchung (Cal.com)</h2>
                <p>
                  Für die Terminbuchung nutzen wir Cal.com (EU-Endpunkt: app.cal.eu). Wenn du einen Termin
                  buchst oder den Kalender aufrufst, werden Daten (z. B. Name, E-Mail, Terminwunsch sowie
                  technische Daten) an Cal.com übermittelt und dort verarbeitet.
                </p>
                <p className="text-sm text-slate-500">
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Terminvereinbarung) sowie lit. f DSGVO.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-2">7. Social Media Links</h2>
                <p>
                  Auf unserer Website findest du Links zu externen sozialen Netzwerken (z. B. Instagram,
                  TikTok, LinkedIn). Beim Anklicken verlässt du unsere Website. Es gelten dann die
                  Datenschutzbestimmungen der jeweiligen Plattform.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-2">8. Cookies & externe Inhalte</h2>
                <p>
                  Durch eingebettete Inhalte (z. B. Terminbuchung) können Cookies/ähnliche Technologien
                  eingesetzt werden. Diese dienen z. B. der Funktionsfähigkeit und Darstellung des Widgets.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-2">9. Datenübermittlung in Drittländer</h2>
                <p>
                  Da der Verantwortliche in den USA sitzt und/oder eingesetzte Dienstleister Server außerhalb
                  der EU nutzen können, kann eine Datenübermittlung in Drittländer nicht ausgeschlossen
                  werden. In diesen Fällen stützen wir die Übermittlung – soweit erforderlich – auf geeignete
                  Garantien (z. B. Standardvertragsklauseln) bzw. Angemessenheitsbeschlüsse.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-2">10. Speicherdauer</h2>
                <p>
                  Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke
                  erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-slate-900 mb-2">11. Deine Rechte</h2>
                <p>
                  Du hast (je nach anwendbarem Recht) u. a. das Recht auf Auskunft, Berichtigung, Löschung,
                  Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen bestimmte
                  Verarbeitungen. Außerdem besteht ein Beschwerderecht bei einer Aufsichtsbehörde.
                </p>
              </section>

              <p className="text-sm text-slate-500">
                Bei Fragen zum Datenschutz oder zur Ausübung deiner Rechte erreichst du uns jederzeit unter{" "}
                <a className="text-orange-600 font-semibold" href="mailto:mustafa.ali@na4mc.de">
                  mustafa.ali@na4mc.de
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

