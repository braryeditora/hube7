import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CheckoutButton from "@/components/ui/CheckoutButton";
import { getFeaturedEvent, talkPlans } from "@/content/events";

export const metadata: Metadata = {
  title: "Hub E7 | Tribo Alpha",
  description:
    "Hub E7 — ecossistema de NetWeaving, formação, conexões qualificadas e oportunidades. Relacionamentos, serviço e preparação para oportunidades reais.",
};

const movements = [
  {
    title: "Participar",
    description: "Estar presente nos encontros do Hub E7, online e presenciais.",
  },
  {
    title: "Apresentar",
    description: "Comunicar quem você é e o que faz através dos Talks.",
  },
  {
    title: "Conectar",
    description: "Construir relações de confiança com continuidade.",
  },
  {
    title: "Acessar oportunidades",
    description: "Transformar relações em colaboração e negócios reais.",
  },
];

export default function Home() {
  const event = getFeaturedEvent();

  return (
    <main className="bg-cream-50">
      <Container>
        <section className="mx-auto flex max-w-2xl flex-col items-center gap-8 py-24 text-center sm:py-32 lg:py-40">
          <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl lg:text-6xl">
            O acesso começa antes da apresentação.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-neutral-500 sm:text-lg">
            Relacionamentos, serviço e preparação para oportunidades reais.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/eventos"
              className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              Próximo Evento
            </Link>
            <Link
              href="/netweaving-acesse"
              className="rounded-full border border-navy-900 px-6 py-3 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              Quero Acessar
            </Link>
          </div>
        </section>
      </Container>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-8 py-20 sm:py-28">
            <div className="flex flex-col gap-2 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                Próximo evento
              </p>
              <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
                {event.date}
              </h2>
              <p className="text-sm text-neutral-500">
                {event.modality} · {event.kingdomOpening.label}{" "}
                {event.kingdomOpening.time} · {event.businessProgram.label}{" "}
                {event.businessProgram.time}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {event.talkPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex flex-col items-center gap-1 rounded-md border border-neutral-900/10 px-4 py-6 text-center"
                >
                  <span className="font-serif text-base text-neutral-900">
                    {plan.name}
                  </span>
                  <span className="text-lg font-semibold text-navy-900">
                    {plan.price}
                  </span>
                  <span className="text-xs uppercase tracking-[0.15em] text-neutral-500">
                    {plan.slots} vagas
                  </span>
                </div>
              ))}
            </div>
            <Link
              href={`/eventos/${event.slug}`}
              className="mx-auto rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              Ver evento completo
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col gap-12 py-20 sm:py-28">
            <h2 className="text-center font-serif text-2xl text-neutral-900 sm:text-3xl">
              O que acontece no Hub E7
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {movements.map((movement) => (
                <div key={movement.title} className="flex flex-col gap-2 text-center">
                  <h3 className="font-serif text-lg text-neutral-900">
                    {movement.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-500">
                    {movement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-8 py-20 sm:py-28">
            <div className="flex flex-col gap-2 text-center">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                Hub E7 Talks
              </p>
              <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
                Poucos minutos. Uma apresentação que abre portas.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {talkPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex flex-col items-center gap-2 rounded-md border border-neutral-900/10 px-4 py-6 text-center"
                >
                  <span className="font-serif text-base text-neutral-900">
                    {plan.name}
                  </span>
                  <span className="text-lg font-semibold text-navy-900">
                    {plan.price}
                  </span>
                  <span className="text-xs text-neutral-500">
                    {plan.individualTime}
                  </span>
                  <CheckoutButton
                    plan={plan.key}
                    className="mt-1 rounded-full border border-navy-900 px-4 py-2 text-xs font-medium text-navy-900 transition-colors hover:bg-navy-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                  />
                </div>
              ))}
            </div>
            <Link
              href="/talks"
              className="mx-auto rounded-full border border-navy-900 px-6 py-3 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              Conhecer os planos de Talk
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-20 text-center sm:py-28">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
              Método NetWeaving™
            </p>
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Conexões que aproximam. Relações que fortalecem.
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              Um método próprio de Sheyla Santos para transformar acesso,
              presença e conexão em relações de confiança, colaboração e
              novas possibilidades.
            </p>
            <Link
              href="/netweaving-acesse"
              className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              Quero Acessar
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-20 text-center sm:py-28">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
              Prova social
            </p>
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Cases
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              Os primeiros cases do Hub E7 serão publicados após o evento de
              04 de agosto de 2026, com linguagem responsável e autorização
              registrada.
            </p>
            <Link
              href="/cases"
              className="rounded-full border border-navy-900 px-6 py-3 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              Ver Cases
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-20 text-center sm:py-28">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
              Para empresas
            </p>
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Sua empresa tem uma demanda? Vamos entender antes de indicar.
            </h2>
            <Link
              href="/empresas"
              className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              Conte sua Demanda
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-20 text-center sm:py-28">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
              Comunidade
            </p>
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Conexões sem continuidade desaparecem. Relações bem construídas
              atravessam ciclos.
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              O Hub E7 é uma plataforma de acesso baseada em relacionamento,
              serviço, confiança, preparação e conexões qualificadas.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/eventos"
                className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                Próximo Evento
              </Link>
              <Link
                href="/netweaving-acesse"
                className="rounded-full border border-navy-900 px-6 py-3 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                Quero Acessar
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
