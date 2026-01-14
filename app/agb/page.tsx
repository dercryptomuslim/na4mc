import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function AgbPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-40 pb-24">
        <div className="container px-4 mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 text-slate-700 leading-relaxed">
            <p className="text-sm text-slate-500">
              Stand: {new Date().getFullYear()} (Vorlage)
            </p>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-2">1. Geltungsbereich</h2>
              <p>
                Diese AGB gelten für alle Leistungen der <strong>Nomad Agency for Marketing &amp; Consulting LLC</strong>
                („Nomad Agency“) gegenüber Unternehmern im Sinne von § 14 BGB. Verbraucher werden nicht
                adressiert.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-2">2. Leistungen</h2>
              <p>
                Nomad Agency erbringt Dienstleistungen im Bereich Social Media, Performance Marketing,
                Content-Produktion, Prozess-Optimierung und Automatisierung (inkl. KI-gestützten Workflows).
                Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot/Vertrag.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-2">3. Vertragsschluss</h2>
              <p>
                Angebote sind freibleibend, sofern nicht ausdrücklich verbindlich. Ein Vertrag kommt durch
                schriftliche Bestätigung (z. B. E-Mail) oder Unterzeichnung eines Angebots zustande.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-2">4. Mitwirkungspflichten</h2>
              <p>
                Der Kunde stellt alle zur Leistungserbringung erforderlichen Informationen, Inhalte,
                Zugänge und Freigaben rechtzeitig bereit. Verzögerungen durch fehlende Mitwirkung können
                zu Anpassungen von Zeitplänen führen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-2">5. Vergütung &amp; Zahlungsbedingungen</h2>
              <p>
                Die Vergütung ergibt sich aus dem Angebot/Vertrag. Rechnungen sind, sofern nicht anders
                vereinbart, innerhalb von 7 Tagen ohne Abzug fällig. Bei Zahlungsverzug können Leistungen
                bis zur Begleichung ausgesetzt werden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-2">6. Nutzungsrechte</h2>
              <p>
                Soweit nicht anders vereinbart, erhält der Kunde nach vollständiger Zahlung die für den
                Vertragszweck erforderlichen Nutzungsrechte an erstellten Inhalten. Rohdaten/Projektdateien
                (z. B. Schnittprojekte) sind nur enthalten, wenn dies ausdrücklich vereinbart wurde.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-2">7. Vertraulichkeit</h2>
              <p>
                Beide Parteien verpflichten sich, vertrauliche Informationen geheim zu halten und nur für
                die Vertragsdurchführung zu verwenden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-2">8. Haftung</h2>
              <p>
                Nomad Agency haftet bei Vorsatz und grober Fahrlässigkeit unbeschränkt. Bei einfacher
                Fahrlässigkeit haftet Nomad Agency nur für die Verletzung wesentlicher Vertragspflichten
                (Kardinalpflichten) und begrenzt auf den vorhersehbaren, typischerweise eintretenden Schaden.
                Eine Haftung für entgangenen Gewinn ist ausgeschlossen, soweit gesetzlich zulässig.
              </p>
              <p className="text-sm text-slate-500">
                Hinweis: Marketing-Ergebnisse hängen von vielen Faktoren ab (Produkt, Markt, Angebot,
                Wettbewerb). Konkrete Erfolgszusagen werden nicht geschuldet, sofern nicht schriftlich
                vereinbart.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-2">9. Laufzeit &amp; Kündigung</h2>
              <p>
                Laufzeiten und Kündigungsfristen ergeben sich aus dem Angebot/Vertrag. Bei Dauerschuldverhältnissen
                gilt – sofern nicht anders vereinbart – eine Kündigungsfrist von 30 Tagen zum Monatsende.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-2">10. Schlussbestimmungen</h2>
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland, soweit dem keine zwingenden Vorschriften
                entgegenstehen. Gerichtsstand für Kaufleute ist – soweit zulässig – der Sitz des Kunden.
              </p>
              <p>
                Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen
                unberührt.
              </p>
              <p className="text-xs text-slate-500">
                Hinweis: Diese AGB sind eine Vorlage und ersetzen keine Rechtsberatung. Für eine rechtssichere
                Endfassung sollten Angebote, Haftungsgrenzen, Gerichtsstand und steuerliche Angaben final geprüft
                und ggf. anwaltlich abgestimmt werden.
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

