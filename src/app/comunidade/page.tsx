import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { whatsappHref } from "@/content/contact";

export const metadata: Metadata = {
  title: "Comunidade | Hub E7",
  description:
    "Pertencimento, continuidade e relações de confiança: conheça a comunidade do Hub E7.",
};

export default function ComunidadePage() {
  return (
    <main className="bg-cream-50">
      <Container>
        <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 py-24 text-center sm:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            Pertencimento
          </p>
          <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">
            Comunidade
          </h1>
          <p className="max-w-md text-base leading-relaxed text-neutral-500">
            Relacionamentos com continuidade, não contatos avulsos. A
            comunidade Hub E7 é onde as conexões nascidas nos encontros
            seguem sendo cultivadas.
          </p>
        </section>
      </Container>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-6 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Conexões sem continuidade desaparecem
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              O Hub E7 reúne empresários, profissionais, líderes e
              especialistas em um ambiente orientado por confiança e
              construção conjunta. A comunidade é onde essas relações
              continuam entre um encontro e outro — com serviço,
              reciprocidade e clareza como princípios.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Faça parte
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              O primeiro passo para entrar na comunidade é uma conversa com a
              equipe do Hub E7.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={whatsappHref("Olá, quero entrar na comunidade do Hub E7.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                Entrar na Comunidade
              </a>
              <Link
                href="/eventos"
                className="rounded-full border border-navy-900 px-6 py-3 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                Próximo Evento
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
