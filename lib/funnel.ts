export type FunnelState = {
  step: number;
  answers: {
    status?: string;
    revenue?: string;
    budget?: string;
    bottleneck?: string;
    commitment?: string;
  };
  result?: "FUNDAMENT" | "WACHSTUM" | "DOMINANZ" | "REJECTED";
};

export const QUESTIONS = [
  {
    id: "status",
    question: "Wo steht deine Brand aktuell?",
    options: [
      "Ich starte gerade",
      "Ich habe erste Umsätze",
      "Ich skaliere bereits",
      "Ich will Marktführer werden",
    ],
  },
  {
    id: "revenue",
    question: "Wie hoch ist dein aktueller Monatsumsatz?",
    options: [
      "Unter 5.000 €",
      "5.000 – 20.000 €",
      "20.000 – 100.000 €",
      "100.000 €+",
    ],
  },
  {
    id: "budget",
    question: "Welches monatliche Budget bist du bereit in Wachstum zu investieren?",
    options: [
      "Unter 1.000 €",
      "1.000 – 3.000 €",
      "3.000 – 10.000 €",
      "10.000 €+",
    ],
  },
  {
    id: "bottleneck",
    question: "Was bremst dein Wachstum aktuell am stärksten?",
    options: [
      "Zu wenig Leads",
      "Zu wenig Verkäufe",
      "Keine Struktur",
      "Zu wenig Reichweite",
      "Chaos & fehlende Systeme",
    ],
  },
  {
    id: "commitment",
    question: "Wenn wir dir zeigen, dass dein Wachstumspotenzial real ist – bist du bereit zu investieren und umzusetzen?",
    options: ["Ja", "Ich muss überlegen", "Nein"],
  },
];

export function determinePackage(answers: FunnelState["answers"]): FunnelState["result"] {
  // 1. Hard Reject
  if (answers.commitment === "Nein") return "REJECTED";

  // Parse Revenue
  let revenueScore = 0;
  if (answers.revenue === "Unter 5.000 €") revenueScore = 1;
  else if (answers.revenue === "5.000 – 20.000 €") revenueScore = 2;
  else if (answers.revenue === "20.000 – 100.000 €") revenueScore = 3;
  else if (answers.revenue === "100.000 €+") revenueScore = 4;

  // Parse Budget
  let budgetScore = 0;
  if (answers.budget === "Unter 1.000 €") budgetScore = 1;
  else if (answers.budget === "1.000 – 3.000 €") budgetScore = 2;
  else if (answers.budget === "3.000 – 10.000 €") budgetScore = 3;
  else if (answers.budget === "10.000 €+") budgetScore = 4;

  // 2. Logic Rules

  // Fundament: Revenue < 5k (Score 1) OR Budget < 1k (Score 1)
  if (revenueScore === 1 || budgetScore === 1) {
    return "FUNDAMENT";
  }

  // Dominanz: Revenue > 20k (Score >= 3) AND Budget > 10k (Score 4) AND Commitment == Ja
  if (revenueScore >= 3 && budgetScore === 4 && answers.commitment === "Ja") {
    return "DOMINANZ";
  }

  // Wachstum: The middle ground (default fallback if not Fundament or Dominanz)
  return "WACHSTUM";
}
