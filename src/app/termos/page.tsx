import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Termos de Uso | Hub E7",
  description: "Condições de uso do site institucional e comercial do Hub E7.",
};

export default function TermosPage() {
  return (
    <main className="bg-cream-50">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col gap-10 py-24 sm:py-32">
          <div className="flex flex-col gap-3 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
              Hub E7
            </p>
            <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">
              Termos de Uso
            </h1>
          </div>

          <div className="flex flex-col gap-8 text-base leading-relaxed text-neutral-700">
            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-xl text-neutral-900">Objeto</h2>
              <p>
                Este site é o canal institucional e comercial do Hub E7,
                operado pela Tribo Alpha com estruturação editorial da Brary
                Editora. Ele apresenta o Hub E7, seus eventos, os Talks, a
                NetWeaving™ | Acesse e a captação de demandas empresariais.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-xl text-neutral-900">
                Pagamentos e checkout
              </h2>
              <p>
                O site não processa pagamentos. Toda compra de Talk é
                realizada em plataforma de checkout externa, com seus
                próprios termos e políticas.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-xl text-neutral-900">
                Sem garantias de resultado
              </h2>
              <p>
                Nenhum conteúdo deste site garante certificação, formação
                completa, duração específica de programa, indicação
                profissional, vaga, contratação ou resultado comercial. Os
                cases publicados descrevem resultados reais com linguagem
                responsável, sem prometer resultado igual para novos
                participantes.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-xl text-neutral-900">
                Responsabilidades do usuário
              </h2>
              <p>
                Ao preencher qualquer formulário deste site, você se
                compromete a fornecer informações verdadeiras e atualizadas.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-xl text-neutral-900">
                Propriedade intelectual
              </h2>
              <p>
                As marcas Hub E7, NetWeaving™ e Tribo Alpha, assim como os
                textos, imagens e demais conteúdos deste site, pertencem aos
                seus respectivos titulares e não podem ser reproduzidos sem
                autorização.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-xl text-neutral-900">
                Alterações destes termos
              </h2>
              <p>
                Estes termos podem ser atualizados conforme a operação do
                Hub E7 evolui. A versão vigente é sempre a publicada nesta
                página.
              </p>
            </section>

            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-xl text-neutral-900">
                Legislação aplicável
              </h2>
              <p>
                Estes termos são regidos pela legislação brasileira.
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
