import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { talkPlans } from "@/content/events";
import { whatsappHref } from "@/content/contact";

export const metadata: Metadata = {
  title: "Talks | Hub E7",
  description:
    "Hub E7 Talks: apresentações cronometradas nos planos Bronze, Prata e Ouro, pensadas para transformar poucos minutos em conexões reais.",
};

export default function TalksPage() {
  return (
    <main className="bg-cream-50">
      <Container>
        <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 py-24 text-center sm:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            Hub E7 Talks
          </p>
          <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">
            Poucos minutos. Uma apresentação que abre portas.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-neutral-500">
            Três planos, três tempos, um objetivo em comum: transformar sua
            apresentação em conexão real. A página ensina a usar o tempo —
            não apenas informa o tempo disponível.
          </p>
          <Link
            href="/eventos"
            className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
          >
            Ver próximo evento
          </Link>
        </section>
      </Container>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col gap-10 py-20 sm:py-28">
            <h2 className="text-center font-serif text-2xl text-neutral-900 sm:text-3xl">
              Os três planos
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {talkPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex flex-col gap-4 rounded-md border border-neutral-900/10 px-6 py-8 text-center"
                >
                  <span className="font-serif text-xl text-neutral-900">
                    {plan.name}
                  </span>
                  <span className="text-2xl font-semibold text-navy-900">
                    {plan.price}
                  </span>
                  <span className="text-sm text-neutral-500">
                    {plan.individualTime}
                  </span>
                  <span className="text-xs uppercase tracking-[0.15em] text-gold-500">
                    {plan.experience}
                  </span>
                  <p className="text-sm leading-relaxed text-neutral-500">
                    {plan.script}
                  </p>
                </div>
              ))}
            </div>
            <a
              href={whatsappHref(
                "Olá, quero saber mais sobre os planos de Talk do Hub E7.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto rounded-full border border-navy-900 px-6 py-3 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              Conhecer os planos de Talk
            </a>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-6 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Hub E7 Talks vs. Hub E7 Experience
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              O Talks é o produto de entrada do Hub E7: apresentação,
              conexão, posicionamento e captura de interessados, em formato
              online, estruturado e cronometrado — operacional desde já.
            </p>
            <p className="text-base leading-relaxed text-neutral-500">
              O Hub E7 Experience — presencial, híbrido ou imersivo, voltado
              para convivência e formação em profundidade — ainda está em
              lista de interesse, sem data confirmada.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Pronto para apresentar seu Talk?
            </h2>
            <a
              href={whatsappHref(
                "Olá, quero comprar meu Talk no próximo evento do Hub E7.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              Comprar meu Talk
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
