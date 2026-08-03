import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Cases | Hub E7",
  description:
    "Como o Hub E7 documenta e publica resultados reais de conexões, com linguagem responsável e autorização registrada.",
};

const criteria = [
  {
    title: "Contexto e conexão",
    description: "Identificação e origem do caso dentro do Hub E7.",
  },
  {
    title: "Desenvolvimento e resultado",
    description: "O que aconteceu a partir da conexão e o que resultou dela.",
  },
  {
    title: "Evidência e autorização",
    description:
      "Comprovação disponível e permissão expressa de uso do relato.",
  },
];

export default function CasesPage() {
  return (
    <main className="bg-cream-50">
      <Container>
        <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 py-24 text-center sm:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            Prova social
          </p>
          <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">
            Cases
          </h1>
          <p className="max-w-md text-base leading-relaxed text-neutral-500">
            Resultados reais, com linguagem responsável: uma conexão iniciada
            no Hub E7 que contribuiu para um resultado — nunca uma promessa
            de resultado garantido.
          </p>
        </section>
      </Container>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-10 py-20 sm:py-28">
            <h2 className="text-center font-serif text-2xl text-neutral-900 sm:text-3xl">
              O que vira um case publicado
            </h2>
            <div className="grid gap-8 sm:grid-cols-3">
              {criteria.map((item) => (
                <div key={item.title} className="flex flex-col gap-2 text-center">
                  <h3 className="font-serif text-base text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Nenhum case está documentado e autorizado até o momento — a publicação começa após o evento de 04/08/2026, seguindo a regra de que o site comunica apenas a operação atual. */}
      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Os primeiros cases estão a caminho
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              Os primeiros cases do Hub E7 serão publicados aqui após o
              evento de 04 de agosto de 2026, mediante autorização registrada
              de cada pessoa envolvida.
            </p>
            <Link
              href="/eventos"
              className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              Conhecer o próximo evento
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
