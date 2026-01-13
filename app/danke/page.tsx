import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-40 pb-32 flex flex-col items-center text-center">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8 animate-in zoom-in duration-500 shadow-sm border border-green-100">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          Termin bestätigt!
        </h1>
        
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed px-4">
          Vielen Dank für deine Buchung. Du hast soeben eine Bestätigung per E-Mail erhalten.<br/>
          Wir freuen uns darauf, dich kennenzulernen.
        </p>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 max-w-lg mx-auto mb-12 text-left shadow-lg">
            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2 text-lg">
                <Calendar className="w-5 h-5 text-orange-600" />
                So geht es jetzt weiter:
            </h3>
            <ul className="space-y-6 text-slate-600">
                <li className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-bold mt-0.5 shrink-0 shadow-md">1</span>
                    <div>
                        <span className="font-bold text-slate-900 block mb-1">E-Mail prüfen</span>
                        Schau in dein Postfach (ggf. Spam). Dort findest du den Link zum Zoom/Google Meet Raum.
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-900 text-sm font-bold mt-0.5 shrink-0">2</span>
                    <div>
                        <span className="font-bold text-slate-900 block mb-1">Kalender checken</span>
                        Der Termin sollte automatisch in deinem Kalender stehen. Stelle sicher, dass du pünktlich bist.
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-900 text-sm font-bold mt-0.5 shrink-0">3</span>
                    <div>
                        <span className="font-bold text-slate-900 block mb-1">Vorbereitung</span>
                        Schreib dir gerne 2-3 Fragen auf, die dir besonders wichtig sind.
                    </div>
                </li>
            </ul>
        </div>

        <Link href="/">
            <Button variant="outline" className="rounded-full h-12 px-8 border-slate-300 hover:border-slate-900 hover:bg-slate-50 text-slate-700">
                Zurück zur Startseite <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
        </Link>
      </section>
      <Footer />
    </main>
  );
}
