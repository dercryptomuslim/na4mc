import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MessageSquare, Zap, Cpu, BrainCircuit } from "lucide-react";

export function Automation() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 mx-auto text-center max-w-4xl">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-600 hover:bg-teal-100 border border-teal-200 mb-6 text-sm font-medium">
          <Zap className="w-3 h-3" />
          AI & Automation
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-950 mb-8">
          Vorsprung durch Technologie.
        </h2>
        <p className="text-xl text-slate-600 mb-12">
          Während andere noch manuell posten, bauen wir Systeme. Mit n8n und AI-Agents automatisieren wir deine Lead-Gewinnung und deinen Support.
        </p>
        
        <div className="relative bg-slate-950 rounded-2xl p-8 md:p-12 shadow-2xl border border-slate-800">
           {/* Mockup UI for Automation */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <Card className="bg-slate-900 border-slate-800 text-slate-300">
                  <CardHeader className="pb-2">
                      <CardTitle className="text-white text-base flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-teal-400" /> Lead Eingang
                      </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs font-mono">
                      New lead via Instagram DM.<br/>
                      <span className="text-teal-400">Status: Qualified</span>
                  </CardContent>
              </Card>
              <div className="flex items-center justify-center text-slate-600">
                  <ArrowRight className="w-6 h-6" />
              </div>
              <Card className="bg-slate-900 border-slate-800 text-slate-300">
                  <CardHeader className="pb-2">
                      <CardTitle className="text-white text-base flex items-center gap-2">
                          <BrainCircuit className="w-4 h-4 text-amber-400" /> AI Agent
                      </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs font-mono">
                      Analyzing intent...<br/>
                      <span className="text-amber-400">Action: Book Appointment</span>
                  </CardContent>
              </Card>
           </div>
           <div className="mt-8 pt-8 border-t border-slate-800 text-center">
              <p className="text-slate-400 text-sm">Spart unseren Kunden durchschnittlich <span className="text-white font-bold">15h pro Woche</span>.</p>
           </div>
        </div>
      </div>
    </section>
  );
}

