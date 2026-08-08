import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import AccessCheckoutButton from "@/components/ui/AccessCheckoutButton";
import { accessPlans } from "@/content/access";

export const metadata: Metadata = {
  title: "Acessos Hub E7 Mundial | Hub E7",
  description:
    "Conheça os níveis de Acesso ao Hub E7 Mundial — Presença, Conexão e Direção — diferentes formas de permanência e participação recorrente no ecossistema.",
};

const ctaClassName =
  "rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";

const eyebrowClassName =
  "text-xs font-medium uppercase tracking-[0.25em] text-neutral-500";

const faqItems = [
  {
    question: "Qual a diferença entre Acessos e Talks?",
    answer:
      "O Talk é uma apresentação avulsa, cronometrada, dentro da programação de um evento do Hub E7. Os Acessos são níveis de permanência e participação recorrente no ecossistema, ao longo do tempo.",
  },
  {
    question: "O Acesso Direção inclui diagnóstico empresarial?",
    answer:
      "Não. Os acessos não incluem diagnóstico empresarial completo nem projetos de estruturação de negócio. Para esse tipo de intervenção, existe uma frente própria, mediante aplicação, na página NetWeaving™.",
  },
  {
    question: "Posso mudar de nível depois?",
    answer:
      "A política de upgrade e downgrade entre níveis ainda está em definição. Enquanto isso, fale com a equipe pelo WhatsApp para avaliar seu caso.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "O pagamento é feito em ciclo recorrente via Mercado Pago, com cobrança conforme o nível de Acesso escolhido.",
  },
];

export default function AcessosPage() {
  return (
    <main className="bg-cream-50">
      <Container>
        <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 py-24 text-center sm:py-32">
          <p className={eyebrowClassName}>Hub E7 Mundial</p>
          <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">
            Acessos Hub E7
          </h1>
          <p className="text-base font-medium text-navy-900">
            NetWeaving — muito além do networking.
          </p>
          <p className="max-w-md text-base leading-relaxed text-neutral-500">
            Níveis de permanência e profundidade de participação no
            ecossistema Hub E7, com compra direta.
          </p>
          <a href="#acessos" className={ctaClassName}>
            Ver os níveis de Acesso
          </a>
        </section>
      </Container>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-6 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Como funciona
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              Os Acessos são níveis de proximidade e participação recorrente
              no Hub E7 — diferentes dos Talks, que são apresentações avulsas
              dentro da programação de um evento, e diferentes dos projetos
              de diagnóstico e consultoria, que têm página própria, mediante
              aplicação.
            </p>
          </div>
        </Container>
      </section>

      <section id="acessos" className="border-t border-neutral-900/10 scroll-mt-20">
        <Container>
          <div className="mx-auto flex max-w-5xl flex-col gap-10 py-20 sm:py-28">
            <h2 className="text-center font-serif text-2xl text-neutral-900 sm:text-3xl">
              Os três níveis de Acesso
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {accessPlans.map((plan) => (
                <div
                  key={plan.key}
                  className="flex flex-col gap-4 rounded-md border border-neutral-900/10 px-6 py-8 text-center"
                >
                  <span className="font-serif text-xl text-neutral-900">
                    {plan.name}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-2xl font-semibold text-navy-900">
                      {plan.price}
                    </span>
                    <span className="text-sm text-neutral-500">
                      {plan.cadence}
                    </span>
                  </div>
                  <p className="text-sm italic leading-relaxed text-neutral-500">
                    {plan.tagline}
                  </p>
                  <ul className="flex flex-col gap-2 text-left text-sm text-neutral-700">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-gold-500" aria-hidden="true">
                          —
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <AccessCheckoutButton
                    plan={plan.key}
                    className="mt-auto rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                  />
                </div>
              ))}
            </div>

            <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-neutral-500">
              Os acessos não incluem diagnóstico empresarial completo nem
              projetos de estruturação de negócio. Para esse tipo de
              intervenção, existe uma frente própria, mediante aplicação, na{" "}
              <Link
                href="/netweaving-acesse"
                className="font-medium text-navy-900 underline underline-offset-2 hover:text-gold-500"
              >
                página NetWeaving™
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-10 py-20 sm:py-28">
            <h2 className="text-center font-serif text-2xl text-neutral-900 sm:text-3xl">
              Perguntas frequentes
            </h2>
            <div className="flex flex-col divide-y divide-neutral-900/10 border-y border-neutral-900/10">
              {faqItems.map((item) => (
                <details key={item.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-base text-neutral-900 marker:content-none">
                    {item.question}
                    <span
                      className="shrink-0 text-lg text-gold-500 transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Presença → Conexão → Direção.
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              Três níveis, uma mesma direção: permanecer, aprofundar e
              construir relacionamento com o Hub E7 no seu próprio ritmo.
            </p>
            <a href="#acessos" className={ctaClassName}>
              Escolher meu Acesso
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
