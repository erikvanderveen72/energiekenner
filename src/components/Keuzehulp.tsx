"use client";

import { useState } from "react";
import Link from "next/link";

/* ──────────────────────────────────────────────
   Generic multi-step decision helper ("keuzehulp")
   ────────────────────────────────────────────── */

interface Option {
  label: string;
  value: string;
  icon?: React.ReactNode;
  description?: string;
}

interface Step {
  id: string;
  question: string;
  options: Option[];
}

interface Advice {
  title: string;
  description: string;
  tips: string[];
  ctaLabel?: string;
  ctaHref?: string;
  color: "amber" | "emerald" | "blue" | "rose" | "purple";
}

interface KeuzehulpProps {
  title: string;
  subtitle: string;
  steps: Step[];
  getAdvice: (answers: Record<string, string>) => Advice;
  accentColor?: "amber" | "emerald" | "blue" | "rose" | "purple";
}

const colorMap = {
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    button: "bg-amber-600 hover:bg-amber-700",
    selected: "border-amber-500 bg-amber-50",
    ring: "ring-amber-200",
    text: "text-amber-700",
    progressBg: "bg-amber-100",
    progressFill: "bg-amber-500",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    button: "bg-emerald-600 hover:bg-emerald-700",
    selected: "border-emerald-500 bg-emerald-50",
    ring: "ring-emerald-200",
    text: "text-emerald-700",
    progressBg: "bg-emerald-100",
    progressFill: "bg-emerald-500",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    button: "bg-blue-600 hover:bg-blue-700",
    selected: "border-blue-500 bg-blue-50",
    ring: "ring-blue-200",
    text: "text-blue-700",
    progressBg: "bg-blue-100",
    progressFill: "bg-blue-500",
  },
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-200",
    button: "bg-rose-600 hover:bg-rose-700",
    selected: "border-rose-500 bg-rose-50",
    ring: "ring-rose-200",
    text: "text-rose-700",
    progressBg: "bg-rose-100",
    progressFill: "bg-rose-500",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    button: "bg-purple-600 hover:bg-purple-700",
    selected: "border-purple-500 bg-purple-50",
    ring: "ring-purple-200",
    text: "text-purple-700",
    progressBg: "bg-purple-100",
    progressFill: "bg-purple-500",
  },
};

export function Keuzehulp({ title, subtitle, steps, getAdvice, accentColor = "emerald" }: KeuzehulpProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const colors = colorMap[accentColor];
  const step = steps[currentStep];
  const progress = showResult ? 100 : ((currentStep) / steps.length) * 100;

  function selectOption(value: string) {
    const newAnswers = { ...answers, [step.id]: value };
    setAnswers(newAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  }

  function reset() {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  }

  function goBack() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  const advice = showResult ? getAdvice(answers) : null;
  const adviceColors = advice ? colorMap[advice.color] : colors;

  return (
    <div className={`rounded-2xl border-2 ${colors.border} ${colors.bg} p-6 sm:p-8`}>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <svg className={`w-5 h-5 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <h3 className="text-lg font-bold text-text-main">{title}</h3>
        </div>
        <p className="text-sm text-text-muted">{subtitle}</p>
      </div>

      {/* Progress bar */}
      <div className={`h-2 rounded-full ${colors.progressBg} mb-6`}>
        <div
          className={`h-full rounded-full ${colors.progressFill} transition-all duration-500 ease-out`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {!showResult ? (
        /* Question */
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-medium text-text-muted uppercase tracking-wider">
              Vraag {currentStep + 1} van {steps.length}
            </p>
            {currentStep > 0 && (
              <button
                onClick={goBack}
                className="text-xs text-text-muted hover:text-text-main transition-colors flex items-center gap-1"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Vorige
              </button>
            )}
          </div>

          <h4 className="text-base font-semibold text-text-main mb-4">{step.question}</h4>

          <div className="grid gap-3 sm:grid-cols-2">
            {step.options.map((option) => (
              <button
                key={option.value}
                onClick={() => selectOption(option.value)}
                className={`text-left p-4 rounded-xl border-2 border-border bg-white hover:${colors.selected} hover:shadow-sm transition-all group`}
              >
                <div className="flex items-start gap-3">
                  {option.icon && (
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center ${colors.text} group-hover:scale-110 transition-transform`}>
                      {option.icon}
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-text-main text-sm">{option.label}</p>
                    {option.description && (
                      <p className="text-xs text-text-muted mt-0.5">{option.description}</p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : advice ? (
        /* Result */
        <div>
          <div className={`rounded-xl ${adviceColors.bg} border ${adviceColors.border} p-6 mb-4`}>
            <div className="flex items-center gap-2 mb-3">
              <svg className={`w-5 h-5 ${adviceColors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="font-bold text-text-main">{advice.title}</h4>
            </div>
            <p className="text-sm text-text-muted mb-4">{advice.description}</p>

            <div className="space-y-2">
              {advice.tips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className={`flex-shrink-0 w-5 h-5 rounded-full ${adviceColors.progressFill} text-white text-xs flex items-center justify-center font-bold mt-0.5`}>
                    {idx + 1}
                  </span>
                  <p className="text-sm text-text-muted">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            {advice.ctaHref && (
              <Link
                href={advice.ctaHref}
                className={`inline-flex items-center justify-center px-5 py-2.5 rounded-xl ${adviceColors.button} text-white text-sm font-semibold transition-colors shadow-sm`}
              >
                {advice.ctaLabel || "Bekijk meer"}
                <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            )}
            <button
              onClick={reset}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-border text-text-muted text-sm font-medium hover:bg-white transition-colors"
            >
              Opnieuw invullen
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Pre-built keuzehulp configs
   ────────────────────────────────────────────── */

const sunIcon = (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);
const homeIcon = (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);
const boltIcon = (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
const cashIcon = (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const batteryIcon = (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
  </svg>
);
const carIcon = (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-8 0l-1.5 4.5M16 7l1.5 4.5M6.5 11.5h11M5 15h14a1 1 0 001-1v-2.5H4V14a1 1 0 001 1zm2 2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm10 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
  </svg>
);
const fireIcon = (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
  </svg>
);

/* Zonnepanelen keuzehulp */
export function ZonnepanelenKeuzehulp() {
  const steps: Step[] = [
    {
      id: "dak",
      question: "Hoe is je dak gericht?",
      options: [
        { label: "Zuid", value: "zuid", icon: sunIcon, description: "Maximale opbrengst" },
        { label: "Oost/West", value: "ow", icon: sunIcon, description: "Goede opbrengst, gespreid over de dag" },
        { label: "Noord", value: "noord", icon: sunIcon, description: "Lagere opbrengst" },
        { label: "Plat dak", value: "plat", icon: homeIcon, description: "Met schuin opstellingssysteem" },
      ],
    },
    {
      id: "verbruik",
      question: "Hoe hoog is je stroomverbruik per jaar?",
      options: [
        { label: "Laag (< 2.000 kWh)", value: "laag", icon: boltIcon, description: "1-2 personen" },
        { label: "Gemiddeld (2.000 - 4.000 kWh)", value: "gemiddeld", icon: boltIcon, description: "Gezin" },
        { label: "Hoog (4.000 - 6.000 kWh)", value: "hoog", icon: boltIcon, description: "Groot gezin / thuiswerkers" },
        { label: "Zeer hoog (> 6.000 kWh)", value: "zeerhoog", icon: boltIcon, description: "Met warmtepomp of EV" },
      ],
    },
    {
      id: "budget",
      question: "Wat is je budget voor zonnepanelen?",
      options: [
        { label: "Tot \u20AC 5.000", value: "klein", icon: cashIcon, description: "4-6 panelen" },
        { label: "\u20AC 5.000 - \u20AC 10.000", value: "middel", icon: cashIcon, description: "8-14 panelen" },
        { label: "Meer dan \u20AC 10.000", value: "groot", icon: cashIcon, description: "14+ panelen, evt. met batterij" },
      ],
    },
    {
      id: "batterij",
      question: "Overweeg je ook een thuisbatterij?",
      options: [
        { label: "Ja, zeker", value: "ja", icon: batteryIcon, description: "Voor maximaal eigenverbruik" },
        { label: "Misschien later", value: "later", icon: batteryIcon, description: "Eerst panelen, batterij later" },
        { label: "Nee", value: "nee", icon: batteryIcon, description: "Alleen zonnepanelen" },
      ],
    },
  ];

  function getAdvice(answers: Record<string, string>): Advice {
    const hasBattery = answers.batterij === "ja";
    const highUsage = answers.verbruik === "hoog" || answers.verbruik === "zeerhoog";
    const noordDak = answers.dak === "noord";

    if (noordDak) {
      return {
        title: "Een noorddak is minder geschikt",
        description: "Een dak op het noorden levert aanzienlijk minder op. Overweeg alternatieven zoals een platdak-opstelling of onderzoek of een andere dakzijde beschikbaar is.",
        tips: [
          "Laat een installateur de schaduwanalyse doen voor je specifieke situatie.",
          "Overweeg een kleiner systeem gericht op je eigen verbruik.",
          "Met een oost-west opstelling op een plat dak kun je vaak meer halen.",
        ],
        ctaLabel: "Vergelijk leveranciers",
        ctaHref: "/#vergelijk",
        color: "amber",
      };
    }

    if (hasBattery && highUsage) {
      return {
        title: "Groot systeem met thuisbatterij",
        description: "Met je hoge verbruik en een thuisbatterij kun je tot 80-85% van je eigen stroom gebruiken. Dat levert het hoogste rendement op, zeker na 2027 als de salderingsregeling stopt.",
        tips: [
          "Investeer in 12+ panelen en een batterij van 8-12 kWh.",
          "Kies een dynamisch energiecontract voor de beste terugleverprijzen.",
          "Overweeg een slimme laadpaal als je een EV hebt of plant.",
          "De terugverdientijd met batterij is circa 6-8 jaar na 2027.",
        ],
        ctaLabel: "Bekijk thuisbatterijen",
        ctaHref: "/thuisbatterij",
        color: "emerald",
      };
    }

    if (hasBattery) {
      return {
        title: "Zonnepanelen met thuisbatterij",
        description: "Een batterij is slim als je overdag niet thuis bent. Je slaat zonnestroom op voor de avonduren en verhoogt zo je eigenverbruik fors.",
        tips: [
          "Begin met 8-10 panelen en een batterij van 5-8 kWh.",
          "Vergelijk terugleverkosten - met een batterij lever je minder terug.",
          "Een dynamisch contract kan extra besparing opleveren.",
        ],
        ctaLabel: "Bekijk thuisbatterijen",
        ctaHref: "/thuisbatterij",
        color: "emerald",
      };
    }

    if (highUsage) {
      return {
        title: "Groot systeem voor hoog verbruik",
        description: "Met je hoge verbruik kun je een groot deel van de zonnestroom direct gebruiken. Dat is het meest rendabel, ook na het einde van de salderingsregeling.",
        tips: [
          "Investeer in 10-14 panelen, afgestemd op je verbruiksprofiel.",
          "Verschuif verbruik naar overdag: wasmachine, vaatwasser, boiler.",
          "Vergelijk leveranciers op terugleverkosten naast het leveringstarief.",
          "Overweeg later alsnog een batterij als de prijzen verder dalen.",
        ],
        ctaLabel: "Vergelijk energieleveranciers",
        ctaHref: "/#vergelijk",
        color: "blue",
      };
    }

    return {
      title: "Start klein en slim",
      description: "Voor je situatie is een systeem van 4-8 panelen het meest verstandig. Focus op eigenverbruik en vergelijk goed op terugleverkosten.",
      tips: [
        "Stem het aantal panelen af op je werkelijke verbruik.",
        "Verschuif waar mogelijk je stroomverbruik naar zonnige uren.",
        "Vergelijk leveranciers op terugleverkosten, niet alleen het leveringstarief.",
        "De terugverdientijd is momenteel 5-6 jaar (t/m 2026 met saldering).",
      ],
      ctaLabel: "Vergelijk energieleveranciers",
      ctaHref: "/#vergelijk",
      color: "emerald",
    };
  }

  return (
    <Keuzehulp
      title="Keuzehulp zonnepanelen"
      subtitle="Beantwoord 4 vragen en ontvang persoonlijk advies voor jouw situatie."
      steps={steps}
      getAdvice={getAdvice}
      accentColor="emerald"
    />
  );
}

/* Warmtepomp keuzehulp */
export function WarmtepompKeuzehulp() {
  const steps: Step[] = [
    {
      id: "woning",
      question: "Wat voor type woning heb je?",
      options: [
        { label: "Tussenwoning", value: "tussen", icon: homeIcon, description: "Rijwoning" },
        { label: "Hoekwoning", value: "hoek", icon: homeIcon, description: "Meer buitenmuren" },
        { label: "Twee-onder-een-kap", value: "2o1k", icon: homeIcon, description: "Halfvrijstaand" },
        { label: "Vrijstaand", value: "vrij", icon: homeIcon, description: "Grootste warmteverlies" },
      ],
    },
    {
      id: "isolatie",
      question: "Hoe goed is je woning geisoleerd?",
      options: [
        { label: "Goed (label A/B)", value: "goed", icon: homeIcon, description: "Dubbel glas, dakisolatie, spouw" },
        { label: "Redelijk (label C/D)", value: "redelijk", icon: homeIcon, description: "Deels geisoleerd" },
        { label: "Matig (label E of lager)", value: "matig", icon: homeIcon, description: "Weinig tot geen isolatie" },
      ],
    },
    {
      id: "verwarming",
      question: "Hoe verwarm je nu je woning?",
      options: [
        { label: "CV-ketel met radiatoren", value: "cv", icon: fireIcon, description: "Traditioneel, hoge temperatuur" },
        { label: "Vloerverwarming (deels)", value: "vloer_deels", icon: fireIcon, description: "Met radiatoren" },
        { label: "Volledig vloerverwarming", value: "vloer", icon: fireIcon, description: "Ideaal voor warmtepomp" },
      ],
    },
    {
      id: "budget",
      question: "Wat is je budget?",
      options: [
        { label: "Tot \u20AC 10.000", value: "laag", icon: cashIcon, description: "Hybride warmtepomp" },
        { label: "\u20AC 10.000 - \u20AC 20.000", value: "middel", icon: cashIcon, description: "Lucht-water warmtepomp" },
        { label: "Meer dan \u20AC 20.000", value: "hoog", icon: cashIcon, description: "Bodem of volledig systeem" },
      ],
    },
  ];

  function getAdvice(answers: Record<string, string>): Advice {
    const matigIsolatie = answers.isolatie === "matig";
    const laagBudget = answers.budget === "laag";
    const vloerverwarming = answers.verwarming === "vloer";
    const goedGeisoleerd = answers.isolatie === "goed";

    if (matigIsolatie) {
      return {
        title: "Eerst isoleren, dan een warmtepomp",
        description: "Een warmtepomp werkt het beste in een goed geisoleerde woning. Met energielabel E of lager raad ik aan eerst te investeren in isolatie.",
        tips: [
          "Begin met dak- en spouwmuurisolatie: de grootste besparing.",
          "Vervang enkel glas door HR++ of triple glas.",
          "Na isolatie is een hybride warmtepomp een goede tussenstap.",
          "Subsidie (ISDE) is beschikbaar voor zowel isolatie als warmtepompen.",
        ],
        ctaLabel: "Bekijk bespaartips",
        ctaHref: "/tips",
        color: "amber",
      };
    }

    if (laagBudget) {
      return {
        title: "Hybride warmtepomp: slim instappen",
        description: "Een hybride warmtepomp werkt samen met je bestaande CV-ketel. Bij mild weer draait de warmtepomp, bij strenge kou springt de ketel bij. Besparing: 50-60% op gas.",
        tips: [
          "Investering: circa \u20AC 4.000 - \u20AC 8.000 (na ISDE-subsidie).",
          "Werkt met bestaande radiatoren, geen vloerverwarming nodig.",
          "Bespaart 50-60% op je gasverbruik.",
          "Ideale tussenstap richting volledig gasloos.",
        ],
        ctaLabel: "Vergelijk energieleveranciers",
        ctaHref: "/#vergelijk",
        color: "blue",
      };
    }

    if (vloerverwarming && goedGeisoleerd) {
      return {
        title: "Volledig elektrische warmtepomp",
        description: "Je woning is ideaal voor een lucht-water of bodemwarmtepomp. Met vloerverwarming en goede isolatie kun je volledig van het gas af.",
        tips: [
          "Een lucht-water warmtepomp kost \u20AC 10.000 - \u20AC 16.000.",
          "Een bodemwarmtepomp is duurder maar efficienter (COP 4-5).",
          "ISDE-subsidie tot \u20AC 3.675 beschikbaar.",
          "Combineer met zonnepanelen voor nog lagere energiekosten.",
        ],
        ctaLabel: "Bekijk zonnepanelen",
        ctaHref: "/zonnepanelen",
        color: "emerald",
      };
    }

    return {
      title: "Lucht-water warmtepomp met aanpassingen",
      description: "Een lucht-water warmtepomp is een goede keuze. Mogelijk moeten een paar radiatoren worden vergroot of aangevuld met vloerverwarming voor optimaal rendement.",
      tips: [
        "Laat een warmteverliesberekening maken door een installateur.",
        "Mogelijk zijn grotere radiatoren (LTV) nodig in enkele ruimtes.",
        "ISDE-subsidie tot \u20AC 3.675 beschikbaar.",
        "Combineer met zonnepanelen en een dynamisch contract voor maximale besparing.",
      ],
      ctaLabel: "Vergelijk energieleveranciers",
      ctaHref: "/#vergelijk",
      color: "blue",
    };
  }

  return (
    <Keuzehulp
      title="Keuzehulp warmtepomp"
      subtitle="Ontdek welke warmtepomp het beste bij jouw woning past."
      steps={steps}
      getAdvice={getAdvice}
      accentColor="rose"
    />
  );
}

/* Salderen keuzehulp */
export function SalderenKeuzehulp() {
  const steps: Step[] = [
    {
      id: "panelen",
      question: "Heb je al zonnepanelen?",
      options: [
        { label: "Ja", value: "ja", icon: sunIcon, description: "Ik heb al zonnepanelen" },
        { label: "Nee, maar ik overweeg het", value: "overweeg", icon: sunIcon, description: "Ik denk erover na" },
        { label: "Nee", value: "nee", icon: sunIcon, description: "Geen plannen" },
      ],
    },
    {
      id: "teruglevering",
      question: "Hoeveel lever je (ongeveer) terug per jaar?",
      options: [
        { label: "Weinig (< 1.000 kWh)", value: "weinig", icon: boltIcon, description: "Ik verbruik het meeste zelf" },
        { label: "Gemiddeld (1.000 - 3.000 kWh)", value: "gemiddeld", icon: boltIcon, description: "Redelijk wat overschot" },
        { label: "Veel (> 3.000 kWh)", value: "veel", icon: boltIcon, description: "Groot overschot" },
        { label: "Weet ik niet", value: "onbekend", icon: boltIcon, description: "Geen idee" },
      ],
    },
    {
      id: "apparaten",
      question: "Welke slimme apparaten heb je of overweeg je?",
      options: [
        { label: "Thuisbatterij", value: "batterij", icon: batteryIcon, description: "Opslag voor eigen gebruik" },
        { label: "Elektrische auto", value: "ev", icon: carIcon, description: "Met (slimme) laadpaal" },
        { label: "Warmtepomp", value: "wp", icon: fireIcon, description: "Verwarming met stroom" },
        { label: "Geen van deze", value: "geen", icon: homeIcon, description: "Alleen zonnepanelen" },
      ],
    },
  ];

  function getAdvice(answers: Record<string, string>): Advice {
    const geenPanelen = answers.panelen === "nee";
    const veelTeruglevering = answers.teruglevering === "veel";
    const heeftBatterij = answers.apparaten === "batterij";
    const heeftEv = answers.apparaten === "ev";
    const geenApparaten = answers.apparaten === "geen";

    if (geenPanelen) {
      return {
        title: "De salderingsregeling is niet van toepassing",
        description: "Zonder zonnepanelen hoef je je geen zorgen te maken over de afschaffing van de salderingsregeling. Overweeg je wel zonnepanelen? Dan is 2026 het laatste jaar met volledige saldering.",
        tips: [
          "Zonnepanelen zijn ook na 2027 nog rendabel, met terugverdientijd van 9-11 jaar.",
          "Tot eind 2026 profiteer je nog van volledige saldering (terugverdientijd 5-6 jaar).",
          "Vergelijk altijd eerst energieleveranciers om te zien of je nu al kunt besparen.",
        ],
        ctaLabel: "Vergelijk energieleveranciers",
        ctaHref: "/#vergelijk",
        color: "blue",
      };
    }

    if (veelTeruglevering && geenApparaten) {
      return {
        title: "Investeer in eigenverbruik voor 2027",
        description: "Met veel teruglevering en geen opslagmogelijkheden word je het hardst geraakt door het einde van salderen. Actie is nodig om je rendement te behouden.",
        tips: [
          "Overweeg een thuisbatterij (5-10 kWh) om je eigenverbruik te verhogen naar 65-85%.",
          "Verschuif groot verbruik naar overdag: wasmachine, droger, vaatwasser.",
          "Bekijk of een dynamisch contract voordeliger is (vaak geen terugleverkosten).",
          "Check je terugleverkosten bij je huidige leverancier - deze kunnen fors oplopen.",
        ],
        ctaLabel: "Bekijk thuisbatterijen",
        ctaHref: "/thuisbatterij",
        color: "amber",
      };
    }

    if (heeftBatterij || heeftEv) {
      return {
        title: "Je bent goed voorbereid op 2027",
        description: `Met ${heeftBatterij ? "een thuisbatterij" : "een elektrische auto"} kun je een groot deel van je zonnestroom zelf gebruiken. Het einde van de salderingsregeling raakt je minder hard.`,
        tips: [
          "Optimaliseer je laadtijden: laad overdag met zonnestroom.",
          "Een dynamisch contract kan extra voordeel opleveren (geen terugleverkosten).",
          "Zorg dat je slimme meter goed werkt en je verbruik monitort via een app.",
          heeftEv ? "Overweeg een V2G-laadpaal om je auto als thuisbatterij te gebruiken." : "Overweeg uitbreiding met een slimme laadpaal als je een EV plant.",
        ],
        ctaLabel: "Bekijk dynamische tarieven",
        ctaHref: "/dynamisch",
        color: "emerald",
      };
    }

    return {
      title: "Bereid je voor op de verandering",
      description: "Na 2027 wordt elke kWh die je zelf verbruikt vijf keer zoveel waard als teruggeleverde stroom. Focus op het verhogen van je eigenverbruik.",
      tips: [
        "Verschuif verbruik naar zonnige uren (wasmachine, droger, vaatwasser overdag).",
        "Overweeg een thuisbatterij voor de beste rendementsbescherming.",
        "Vergelijk energieleveranciers op terugleverkosten, niet alleen het leveringstarief.",
        "Zorg dat je een slimme meter hebt (verplicht per 2026).",
      ],
      ctaLabel: "Vergelijk energieleveranciers",
      ctaHref: "/#vergelijk",
      color: "amber",
    };
  }

  return (
    <Keuzehulp
      title="Keuzehulp salderen"
      subtitle="Ontdek wat het einde van de salderingsregeling voor jou betekent en wat je kunt doen."
      steps={steps}
      getAdvice={getAdvice}
      accentColor="amber"
    />
  );
}
