import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { whatsappHref } from "@/content/contact";

export const metadata: Metadata = {
  title: "Política de Privacidade | Hub E7",
  description:
    "Como o Hub E7 coleta, usa e protege os dados enviados pelos formulários do site.",
};

export default function PrivacidadePage() {
  return (
    <main className="bg-cream-50">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col gap-10 py-24 sm:py-32">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
              Hub E7
            </p>
            <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">
              Política de Privacidade
            </h1>
          </div>

          <div className="flex flex-col gap-8 text-base leading-relaxed text-neutral-700">
            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-xl text-neutral-900">
                Quem somos
              </h2>
              <p>
                O Hub E7 é operado pela Tribo Alpha, com estruturação editorial
                da Brary Editora. Esta política explica como tratamos os
                dados enviados pelos formulários deste site.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-xl text-neutral-900">
                Quais dados coletamos
              </h2>
              <p>
                Coletamos apenas os dados que você preenche diretamente nos
                formulários: nome, WhatsApp, e-mail e, dependendo do
                formulário, informações adicionais como empresa, demanda,
                profissão ou objetivo de participação.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-xl text-neutral-900">
                Para que usamos seus dados
              </h2>
              <p>
                Usamos seus dados para responder ao seu contato, organizar
                sua participação em eventos, avaliar aplicações e demandas
                enviadas, e manter um registro leve de relacionamento (CRM).
                Não vendemos nem compartilhamos seus dados com terceiros para
                fins alheios ao Hub E7.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-xl text-neutral-900">
                Pagamentos
              </h2>
              <p>
                O Hub E7 não processa pagamentos neste site. Toda compra de
                Talk ou produto é feita em plataforma de checkout externa,
                sujeita à política de privacidade dessa plataforma.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-xl text-neutral-900">
                Por quanto tempo guardamos seus dados
              </h2>
              <p>
                Os dados são mantidos até que decidamos descontinuar o
                produto ou serviço correspondente, com revisão recomendada a
                cada 12 meses.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-xl text-neutral-900">
                Seus direitos
              </h2>
              <p>
                Você pode solicitar acesso, correção ou exclusão dos seus
                dados a qualquer momento, falando com a equipe pelo{" "}
                <a
                  href={whatsappHref(
                    "Olá, quero solicitar informações sobre meus dados no Hub E7.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gold-500"
                >
                  WhatsApp
                </a>
                .
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-xl text-neutral-900">
                Consentimento
              </h2>
              <p>
                Todos os formulários deste site exigem consentimento
                explícito antes do envio dos dados.
              </p>
            </section>

            <p className="text-sm text-neutral-500">
              Este é um texto institucional de base, pendente de revisão
              jurídica formal. Última atualização: agosto de 2026.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
