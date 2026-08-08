import { getAccessCheckoutUrl, type AccessPlanKey } from "@/content/access";

const planLabels: Record<AccessPlanKey, string> = {
  presenca: "Presença",
  conexao: "Conexão",
  direcao: "Direção",
};

type AccessCheckoutButtonProps = {
  plan: AccessPlanKey;
  className?: string;
};

export default function AccessCheckoutButton({
  plan,
  className,
}: AccessCheckoutButtonProps) {
  const { href, isConfigured } = getAccessCheckoutUrl(plan);
  const label = isConfigured
    ? `Escolher ${planLabels[plan]}`
    : `Perguntar sobre o Acesso ${planLabels[plan]}`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {label}
    </a>
  );
}
