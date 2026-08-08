import { whatsappHref } from "@/content/contact";

export type AccessPlanKey = "presenca" | "conexao" | "direcao";

export type AccessPlan = {
  key: AccessPlanKey;
  name: string;
  shortLabel: string;
  price: string;
  cadence: string;
  tagline: string;
  includes: string[];
};

export const accessPlans: AccessPlan[] = [
  {
    key: "presenca",
    name: "Acesso Presença",
    shortLabel: "Presença",
    price: "R$ 97",
    cadence: "por mês (recorrente)",
    tagline: "Entre, participe e permaneça no Hub E7.",
    includes: [
      "Permanência no grupo oficial",
      "Encontro online semanal",
      "4 encontros online por mês",
    ],
  },
  {
    key: "conexao",
    name: "Acesso Conexão",
    shortLabel: "Conexão",
    price: "R$ 459",
    cadence: "por ciclo de 3 meses",
    tagline: "Aprofunde sua presença e suas relações no ecossistema.",
    includes: [
      "Tudo do Acesso Presença",
      "Participação contínua por 3 meses",
      "Encontros semanais",
      "Especialista quinzenal",
    ],
  },
  {
    key: "direcao",
    name: "Acesso Direção",
    shortLabel: "Direção",
    price: "R$ 3.500",
    cadence: "por ciclo de 3 meses",
    tagline: "Relacionamento com direção empresarial.",
    includes: [
      "Experiência premium Hub E7",
      "Acompanhamento por 3 meses",
      "Evento com especialista quinzenal",
      "Maior profundidade de acompanhamento",
    ],
  },
];

const checkoutEnvUrls: Record<AccessPlanKey, string | undefined> = {
  presenca: process.env.NEXT_PUBLIC_CHECKOUT_PRESENCA_URL,
  conexao: process.env.NEXT_PUBLIC_CHECKOUT_CONEXAO_URL,
  direcao: process.env.NEXT_PUBLIC_CHECKOUT_DIRECAO_URL,
};

export function getAccessCheckoutUrl(plan: AccessPlanKey): {
  href: string;
  isConfigured: boolean;
} {
  const url = checkoutEnvUrls[plan];

  if (url && url !== "#") {
    return { href: url, isConfigured: true };
  }

  const plans: Record<AccessPlanKey, string> = {
    presenca: "Acesso Presença",
    conexao: "Acesso Conexão",
    direcao: "Acesso Direção",
  };

  return {
    href: whatsappHref(
      `Olá, quero saber mais sobre o ${plans[plan]} do Hub E7.`,
    ),
    isConfigured: false,
  };
}
