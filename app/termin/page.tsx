"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useEffect } from "react";

export default function BookingPage() {
  useEffect(() => {
    // Cal.com Embed Script
    (function (C: any, A: string, L: string) { 
      let p = function (a: any, ar: any) { a.q.push(ar); }; 
      let d = C.document; 
      C.Cal = C.Cal || function () { 
        let cal = C.Cal; 
        let ar = arguments; 
        if (!cal.loaded) { 
          cal.ns = {}; 
          cal.q = cal.q || []; 
          d.head.appendChild(d.createElement("script")).src = A; 
          cal.loaded = true; 
        } 
        if (ar[0] === L) { 
          const api = function () { p(api, arguments); }; 
          const namespace = ar[1]; 
          api.q = api.q || []; 
          if(typeof namespace === "string"){
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar); 
          return;
        } 
        p(cal, ar); 
      }; 
    })(window, "https://app.cal.eu/embed/embed.js", "init");

    // Initialize Cal
    (window as any).Cal?.("init", "30min", {origin:"https://app.cal.eu"});

    // Configure Cal
    (window as any).Cal?.ns?.["30min"]?.("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: { "layout": "month_view" },
      calLink: "na4mc/30min",
    });

    (window as any).Cal?.ns?.["30min"]?.("ui", { "hideEventTypeDetails": false, "layout": "month_view" });

  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container px-4 mx-auto text-center mb-12">
          <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-4 block">Wachstums-Audit</span>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Lass uns dein Potenzial analysieren.
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Wir arbeiten nur mit Brands, die bereit sind zu investieren und zu skalieren.
            Buche jetzt dein kostenloses Audit.
          </p>
        </div>
        
        <div className="container px-4 mx-auto max-w-5xl bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden h-[700px]">
            {/* Cal.com Inline Embed Container */}
            <div 
              style={{width:"100%", height:"100%", overflow:"scroll"}} 
              id="my-cal-inline-30min"
            ></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
