"use client";

import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Lock } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function ResultContent() {
  const searchParams = useSearchParams();
  const result = searchParams.get("result");

  if (result === "REJECTED") {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Danke für dein Interesse.</h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          Basierend auf deinen Angaben sind wir aktuell leider nicht der richtige Partner für dich. 
          Wir arbeiten ausschließlich mit Brands, die bereit sind, aktiv in ihr Wachstum zu investieren.
        </p>
        <Link href="/">
          <Button variant="outline">Zurück zur Startseite</Button>
        </Link>
      </div>
    );
  }

  const packages = {
    FUNDAMENT: {
      title: "FUNDAMENT",
      subtitle: "Strategie & Setup",
      desc: "Du stehst am Anfang. Wir bauen dir das professionelle Fundament, das du brauchst.",
      features: ["Status-Quo Audit", "Tracking-Setup", "Content-Strategie"],
    },
    WACHSTUM: {
      title: "WACHSTUM",
      subtitle: "Performance & Ads",
      desc: "Du hast erste Umsätze. Jetzt zünden wir den Turbo mit profitablen Ads.",
      features: ["Ads Management", "Content Produktion", "Community Management"],
    },
    DOMINANZ: {
      title: "DOMINANZ",
      subtitle: "Partner & Consulting",
      desc: "Du willst den Markt anführen. Wir werden dein strategischer Wachstumspartner.",
      features: ["Full-Service A-Z", "Consulting", "Exklusives Netzwerk"],
    },
  };

  const pkg = packages[result as keyof typeof packages] || packages.WACHSTUM;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Dein Ergebnis</span>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-6">
          Dein Level: <span className="text-orange-600">{pkg.title}</span>
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          {pkg.desc}
        </p>
      </div>

      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">{pkg.subtitle}</h2>
            <div className="h-1 w-20 bg-orange-500 mb-6"></div>
            <ul className="space-y-4">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="text-orange-500 w-6 h-6" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1 text-center md:text-right">
            <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-8">
              <Lock className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <p className="text-sm text-slate-300">
                Limitierte Plätze für Q1 2026.<br/>
                Sichere dir jetzt dein Audit.
              </p>
            </div>
            <Link href="/termin">
              <Button className="w-full md:w-auto h-14 px-8 text-lg bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-lg shadow-orange-500/20">
                Strategiegespräch buchen <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-40 pb-32 px-4">
        <Suspense fallback={<div>Laden...</div>}>
          <ResultContent />
        </Suspense>
      </section>
      <Footer />
    </main>
  );
}
