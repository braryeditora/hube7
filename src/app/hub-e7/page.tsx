import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Hub E7 | Origem, Sheyla e filosofia",
  description:
    "Conheça a origem do Hub E7, a trajetória de Sheyla Santos e a filosofia que orienta a Tribo Alpha: relacionamento, serviço, confiança e conexões qualificadas.",
};

const notList = [
  "Um evento isolado",
  "Um grupo de WhatsApp",
  "Uma plataforma de vagas",
  "Um programa de indicações",
];

export default function HubE7Page() {
  return (
    <main className="bg-cream-50">
      <Container>
        <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 py-24 text-center sm:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            Tribo Alpha · Hub E7
          </p>
          <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">
            O acesso começa antes da apresentação.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-neutral-500">
            O Hub E7 é uma plataforma de acesso baseada em relacionamento,
            serviço, confiança, preparação e conexões qualificadas.
          </p>
        </section>
      </Container>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-10 py-20 sm:py-28">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
                O que o Hub E7 é — e o que não é
              </h2>
              <p className="text-base leading-relaxed text-neutral-500">
                O Hub E7 é um ecossistema de NetWeaving, formação, conexões
                qualificadas e geração de oportunidades, que organiza o
                capital relacional de Sheyla Santos para criar valor para
                pessoas, profissionais, empresas, parceiros e comunidades.
              </p>
            </div>
            <div className="mx-auto flex flex-col gap-2 text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                O Hub E7 não é
              </span>
              <ul className="flex flex-col gap-1 text-sm text-neutral-500">
                {notList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-6 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              De onde vem o nome &ldquo;E7&rdquo;
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              &ldquo;E7&rdquo;: E de excelência, 7 da data de nascimento de
              Sheyla Santos e número da perfeição. O Hub E7 nasce dentro da
              Tribo Alpha, liderada por Sheyla, a partir de sua capacidade
              reconhecida de aproximar pessoas, gerar conexões improváveis e
              criar ambientes de confiança.
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              Sheyla Santos · Tribo Alpha · Hub E7
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="grid items-center gap-10 py-20 sm:py-28 lg:grid-cols-2 lg:gap-16">
            <div className="relative mx-auto h-96 w-full max-w-sm overflow-hidden rounded-md sm:h-[32rem]">
              <Image
                src="/images/sheyla-santos-retrato.jpg.webp"
                alt="Sheyla Santos, fundadora do Hub E7"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 400px, 90vw"
              />
            </div>
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
                Sheyla Santos
              </h2>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                Fundadora da Tribo Alpha e do Hub E7
              </p>
              <p className="text-base leading-relaxed text-neutral-500">
                O desafio de origem: Sheyla já gerava grande volume de valor
                relacional, social e comercial, mas esse valor ainda não
                estava organizado em uma arquitetura capaz de reconhecer,
                registrar, acompanhar e escalar o que ela já fazia bem. O Hub
                E7 é a resposta a esse desafio — não uma ideia nova, mas a
                estruturação de algo que já operava de forma informal.
              </p>
              <blockquote className="border-l-2 border-gold-500 pl-4 text-left font-serif text-lg italic text-neutral-900">
                &ldquo;Nesse momento agora, o que a gente precisa fazer é o
                arroz com feijão, o basicão. E o basicão já vai fazer com que
                eles gerem negócios entre si. O filé mignon, aquela picanha,
                vai vir no acréscimo — conforme as pessoas já fazem
                negócios.&rdquo;
                <footer className="mt-2 text-sm not-italic text-neutral-500">
                  — Sheyla Santos, fundadora
                </footer>
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Conheça a operação atual do Hub E7
            </h2>
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
