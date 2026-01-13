"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function BookingPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"embedJsUrl":"https://app.cal.eu/embed/embed.js"});
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#ea580c" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container px-4 mx-auto text-center mb-12">
          <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4 block">Erstgespräch</span>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Lass uns dein Potenzial analysieren.
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Wähle einen passenden Termin für unser unverbindliches Strategie-Gespräch. 
            Wir schauen uns deine aktuelle Situation an und prüfen, ob und wie wir dir helfen können.
          </p>
        </div>
        
        <div className="container px-4 mx-auto max-w-5xl bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden h-[700px]">
            {/* Cal.com Inline Embed */}
            <div className="w-full h-full p-4 overflow-scroll" id="my-cal-inline-30min">
              <iframe 
                src="https://app.cal.eu/na4mc/30min?embed=true&layout=month_view" 
                style={{width: "100%", height: "100%", minHeight: "700px", border: "none"}}
                title="Termin buchen"
              ></iframe>
            </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
