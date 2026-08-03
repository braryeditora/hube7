import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import CheckoutButton from "@/components/ui/CheckoutButton";
import { getFeaturedEvent } from "@/content/events";

export const metadata: Metadata = {
  title: "Eventos | Hub E7",
  description:
    "Conheça o próximo evento do Hub E7: encontro online com Talks Bronze, Prata e Ouro, conexões qualificadas e a Abertura 1º Reino.",
};

export default function EventosPage() {
  const event = getFeaturedEvent();

  return (
    <main className="bg-cream-50">
      <Container>
        <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 py-24 text-center sm:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            Eventos Hub E7
          </p>
          <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">
            Próximo Evento
          </h1>
          <p className="max-w-md text-base leading-relaxed text-neutral-500">
            Encontros online cronometrados, com Talks, conexões e a
            programação empresarial do Hub E7.
          </p>
        </section>
      </Container>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-8 py-20 sm:py-28">
            <div className="flex flex-col gap-2 text-center">
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
                  className="flex flex-col items-center gap-2 rounded-md border border-neutral-900/10 px-6 py-8 text-center"
                >
                  <span className="font-serif text-lg text-neutral-900">
                    {plan.name}
                  </span>
                  <span className="text-2xl font-semibold text-navy-900">
                    {plan.price}
                  </span>
                  <span className="text-xs uppercase tracking-[0.15em] text-neutral-500">
                    {plan.slots} vagas
                  </span>
                  <CheckoutButton
                    plan={plan.key}
                    className="mt-1 rounded-full border border-navy-900 px-4 py-2 text-xs font-medium text-navy-900 transition-colors hover:bg-navy-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-3">
              <Link
                href={`/eventos/${event.slug}`}
                className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                Ver evento completo
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
