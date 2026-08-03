import { whatsappHref } from "@/content/contact";

export type PlanKey = "bronze" | "prata" | "ouro";

export type TalkPlan = {
  key: PlanKey;
  name: string;
  price: string;
  slots: number;
  individualTime: string;
  aggregateTime: string;
  experience: string;
  script: string;
};

export type EventEdition = {
  slug: string;
  name: string;
  date: string;
  isoDate: string;
  modality: string;
  kingdomOpening: {
    label: string;
    time: string;
  };
  businessProgram: {
    label: string;
    time: string;
  };
  closing: {
    expected: string;
    maxTolerance: string;
  };
  talkPlans: TalkPlan[];
};

export const talkPlans: TalkPlan[] = [
  {
    key: "bronze",
    name: "Bronze",
    price: "R$ 29,00",
    slots: 9,
    individualTime: "45 segundos",
    aggregateTime: "6min45s",
    experience: "Talk objetivo",
    script: "Nome · o que faz · para quem · conexão desejada",
  },
  {
    key: "prata",
    name: "Prata",
    price: "R$ 49,00",
    slots: 4,
    individualTime: "1min30s",
    aggregateTime: "6 minutos",
    experience: "Talk ampliado",
    script: "Apresentação · problema · solução · diferencial · conexão desejada",
  },
  {
    key: "ouro",
    name: "Ouro",
    price: "R$ 77,00",
    slots: 7,
    individualTime: "3 minutos + perguntas + 7 dias de divulgação",
    aggregateTime: "21 minutos",
    experience: "Talk Destaque — perguntas + 7 dias de divulgação",
    script: "Contexto · autoridade · problema · solução · prova · convite · conexão desejada",
  },
];

const planLabels: Record<PlanKey, string> = {
  bronze: "Bronze",
  prata: "Prata",
  ouro: "Ouro",
};

const checkoutEnvUrls: Record<PlanKey, string | undefined> = {
  bronze: process.env.NEXT_PUBLIC_CHECKOUT_BRONZE_URL,
  prata: process.env.NEXT_PUBLIC_CHECKOUT_PRATA_URL,
  ouro: process.env.NEXT_PUBLIC_CHECKOUT_OURO_URL,
};

export function getCheckoutUrl(plan: PlanKey): {
  href: string;
  isConfigured: boolean;
} {
  const url = checkoutEnvUrls[plan];

  if (url && url !== "#") {
    return { href: url, isConfigured: true };
  }

  return {
    href: whatsappHref(
      `Olá, quero saber mais sobre o plano ${planLabels[plan]} do Hub E7.`,
    ),
    isConfigured: false,
  };
}

export const events: Record<string, EventEdition> = {
  "04-08-2026": {
    slug: "04-08-2026",
    name: "Hub E7 — Edição 04 de agosto de 2026",
    date: "04 de agosto de 2026",
    isoDate: "2026-08-04",
    modality: "Online",
    kingdomOpening: {
      label: "Abertura 1º Reino",
      time: "18h30",
    },
    businessProgram: {
      label: "Programação empresarial",
      time: "19h",
    },
    closing: {
      expected: "20h30",
      maxTolerance: "20h45",
    },
    talkPlans,
  },
};

export function getEvent(slug: string) {
  return events[slug];
}

export function getFeaturedEvent() {
  return events["04-08-2026"];
}
