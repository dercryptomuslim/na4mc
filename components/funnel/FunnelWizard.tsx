"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QUESTIONS, determinePackage, FunnelState } from "@/lib/funnel";
import { ArrowRight, Check } from "lucide-react";
import { useRouter } from "next/navigation";

export function FunnelWizard() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<FunnelState["answers"]>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const question = QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  const handleOptionSelect = async (option: string) => {
    const newAnswers = { ...answers, [question.id]: option };
    setAnswers(newAnswers);

    if (currentStep < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      // Finish
      setIsSubmitting(true);
      const result = determinePackage(newAnswers);
      
      // Simulate API call / save to state management here
      // In a real app, you would POST to your API/n8n here
      
      // Datenschutz: Keine Antworten in der URL.
      const query = new URLSearchParams({
        result: result || "WACHSTUM",
      }).toString();

      router.push(`/bewerbung/ergebnis?${query}`);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-1.5 rounded-full mb-12">
        <div 
          className="bg-orange-500 h-1.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <span className="text-orange-600 font-bold uppercase text-xs tracking-widest mb-4 block">
          Schritt {currentStep + 1} von {QUESTIONS.length}
        </span>
        
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 leading-tight">
          {question.question}
        </h2>

        <div className="grid gap-4">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionSelect(option)}
              disabled={isSubmitting}
              className="group flex items-center justify-between p-6 text-left bg-white border border-slate-200 rounded-2xl hover:border-orange-500 hover:shadow-lg transition-all duration-200"
            >
              <span className="text-lg font-medium text-slate-700 group-hover:text-slate-900">
                {option}
              </span>
              <div className="w-6 h-6 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:border-orange-500">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
