import { getCheckoutUrl, type PlanKey } from "@/content/events";

const planLabels: Record<PlanKey, string> = {
  bronze: "Bronze",
  prata: "Prata",
  ouro: "Ouro",
};

type CheckoutButtonProps = {
  plan: PlanKey;
  className?: string;
};

export default function CheckoutButton({ plan, className }: CheckoutButtonProps) {
  const { href, isConfigured } = getCheckoutUrl(plan);
  const label = isConfigured
    ? `Escolher ${planLabels[plan]}`
    : `Perguntar sobre o ${planLabels[plan]}`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {label}
    </a>
  );
}
