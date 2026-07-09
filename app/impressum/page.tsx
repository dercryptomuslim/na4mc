import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-40 pb-24">
        <div className="container px-4 mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Impressum</h1>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Angaben gemäß § 5 TMG</h2>

            <p className="text-slate-700 leading-relaxed">
              <span className="font-semibold">Nomad Agency for Marketing &amp; Consulting LLC</span>
              <br />
              2880 W OAKLAND PARK BLVD
              <br />
              SUITE 225C
              <br />
              OAKLAND PARK, FL 33311
              <br />
              USA
            </p>

            <div className="h-px bg-slate-200 my-6" />

            <h2 className="text-xl font-bold text-slate-900 mb-4">Vertretungsberechtigt</h2>
            <p className="text-slate-700 leading-relaxed">Mustafa Ali</p>

            <div className="h-px bg-slate-200 my-6" />

            <h2 className="text-xl font-bold text-slate-900 mb-4">Kontakt</h2>
            <p className="text-slate-700 leading-relaxed">
              E-Mail:{" "}
              <a className="text-orange-600 font-semibold" href="mailto:mustafa.ali@na4mc.de">
                mustafa.ali@na4mc.de
              </a>
            </p>

            <div className="h-px bg-slate-200 my-6" />

            <h2 className="text-xl font-bold text-slate-900 mb-4">Registerangaben</h2>
            <p className="text-slate-700 leading-relaxed">
              Gesellschaftsform: Limited Liability Company (LLC), Florida (USA)
              <br />
              Registrierungsstelle: Florida Division of Corporations (Sunbiz)
              <br />
              Registrierungsnummer (Document No.): <span className="font-semibold">L21000089962</span>
            </p>

            <div className="h-px bg-slate-200 my-6" />

            <h2 className="text-xl font-bold text-slate-900 mb-4">Umsatzsteuer</h2>
            <p className="text-slate-700 leading-relaxed">
              USt-IdNr.: <span className="font-semibold">Nicht vorhanden</span> (US-Gesellschaft ohne
              deutsche bzw. EU-USt-IdNr.; Umsatzsteuer auf App-Verkäufe wird von Apple als Merchant of
              Record abgeführt)
            </p>

            <div className="h-px bg-slate-200 my-6" />

            <h2 className="text-xl font-bold text-slate-900 mb-4">Verantwortlich für den Inhalt</h2>
            <p className="text-slate-700 leading-relaxed">
              Verantwortlich gemäß § 18 Abs. 2 MStV:
              <br />
              Mustafa Ali, Anschrift wie oben.
            </p>

            <div className="h-px bg-slate-200 my-6" />

            <h2 className="text-xl font-bold text-slate-900 mb-4">Haftung für Inhalte</h2>
            <p className="text-slate-700 leading-relaxed">
              Als Diensteanbieter sind wir gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen
              Seiten verantwortlich. Wir übernehmen jedoch keine Gewähr für die Richtigkeit, Vollständigkeit
              und Aktualität der Inhalte.
            </p>

            <div className="h-px bg-slate-200 my-6" />

            <h2 className="text-xl font-bold text-slate-900 mb-4">Haftung für Links</h2>
            <p className="text-slate-700 leading-relaxed">
              Diese Website enthält ggf. Links zu externen Websites Dritter. Auf deren Inhalte haben wir
              keinen Einfluss. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber verantwortlich.
            </p>

            <div className="h-px bg-slate-200 my-6" />

            <h2 className="text-xl font-bold text-slate-900 mb-4">Streitbeilegung</h2>
            <p className="text-slate-700 leading-relaxed">
              Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <p className="text-xs text-slate-500 mt-8">
              Alle Angaben ohne Gewähr.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

