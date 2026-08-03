import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import CheckoutButton from "@/components/ui/CheckoutButton";
import { events, getEvent } from "@/content/events";
import { whatsappHref } from "@/content/contact";

type PageProps = {
  params: Promise<{ edicao: string }>;
};

export function generateStaticParams() {
  return Object.keys(events).map((slug) => ({ edicao: slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { edicao } = await params;
  const event = getEvent(edicao);
  if (!event) return {};

  return {
    title: `${event.name} | Hub E7`,
    description: `Evento Hub E7 em ${event.date}, ${event.modality.toLowerCase()}. Talks Bronze, Prata e Ouro, Abertura 1º Reino e programação empresarial.`,
  };
}

const faqItems = [
  {
    question: "Como funciona o evento?",
    answer:
      "Evento online cronometrado, com Abertura 1º Reino, programação empresarial, Talks dos participantes inscritos e espaço para conexões.",
  },
  {
    question: "Posso ultrapassar o tempo do meu Talk?",
    answer:
      "Não. Cada plano tem tempo individual definido e cronometrado, o que garante espaço igual para todos os inscritos.",
  },
  {
    question: "Há gravação do evento?",
    answer:
      "A definição sobre gravação é confirmada a cada edição. Fale com a equipe pelo WhatsApp antes da sua inscrição.",
  },
  {
    question: "Posso cancelar minha inscrição?",
    answer:
      "As regras de cancelamento são informadas no momento da compra. Em caso de dúvida, fale com a equipe pelo WhatsApp.",
  },
  {
    question: "Quando recebo o link de acesso?",
    answer:
      "O link é enviado por e-mail e WhatsApp após a confirmação do pagamento, antes do horário do evento.",
  },
  {
    question: "Como funciona a divulgação do plano Ouro?",
    answer:
      "O Talk Destaque (Ouro) inclui 7 dias de divulgação do participante nos canais do Hub E7 após o evento.",
  },
  {
    question: "As perguntas são exclusivas do plano Ouro?",
    answer: "Sim. Apenas o plano Ouro inclui espaço de perguntas após o Talk.",
  },
  {
    question: "Posso participar sem comprar um Talk?",
    answer:
      "Sim. É possível participar do evento sem apresentar, acompanhando a programação e as conexões.",
  },
];

export default async function EventoEdicaoPage({ params }: PageProps) {
  const { edicao } = await params;
  const event = getEvent(edicao);

  if (!event) {
    notFound();
  }

  return (
    <main className="bg-cream-50">
      <Container>
        <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 py-24 text-center sm:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            Hub E7 · {event.modality}
          </p>
          <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">
            {event.date}
          </h1>
          <p className="max-w-md text-base leading-relaxed text-neutral-500">
            O acesso começa antes da apresentação. Um encontro para
            relacionamentos, serviço e preparação para oportunidades reais.
          </p>
          <a
            href={whatsappHref(
              `Olá, quero saber mais sobre o evento do Hub E7 em ${event.date}.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
          >
            Escolher plano
          </a>
        </section>
      </Container>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-6 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              O que acontece nesta edição
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              Um encontro online estruturado para empresários, líderes e
              profissionais que buscam conexões qualificadas: apresentações
              cronometradas, programação empresarial e espaço para novas
              relações. Para quem está preparado para participar, apresentar
              e construir relações com continuidade.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-10 py-20 sm:py-28">
            <h2 className="text-center font-serif text-2xl text-neutral-900 sm:text-3xl">
              Programação
            </h2>

            <div className="flex flex-col gap-2 rounded-md border border-gold-500/30 px-6 py-6 text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                {event.kingdomOpening.label} — {event.kingdomOpening.time}
              </span>
              <p className="text-sm leading-relaxed text-neutral-500">
                Um momento de oração, louvor e palavra que antecede a
                programação empresarial e expressa os princípios que orientam
                a fundadora e o movimento.
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-md border border-neutral-900/10 px-6 py-6 text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                {event.businessProgram.label} — {event.businessProgram.time}
              </span>
              <p className="text-sm leading-relaxed text-neutral-500">
                Conteúdo institucional, Talks Bronze, Prata e Ouro, perguntas
                exclusivas do plano Ouro, apresentação da NetWeaving™ | Acesse
                e encerramento.
              </p>
            </div>

            <p className="text-center text-xs text-neutral-500">
              Encerramento previsto às {event.closing.expected}, tolerância
              máxima até {event.closing.maxTolerance}.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col gap-10 py-20 sm:py-28">
            <h2 className="text-center font-serif text-2xl text-neutral-900 sm:text-3xl">
              Planos
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-neutral-900/10 text-xs uppercase tracking-[0.15em] text-neutral-500">
                    <th className="py-3 pr-4 font-medium">Plano</th>
                    <th className="py-3 pr-4 font-medium">Investimento</th>
                    <th className="py-3 pr-4 font-medium">Vagas</th>
                    <th className="py-3 pr-4 font-medium">Tempo</th>
                    <th className="py-3 pr-4 font-medium">Experiência</th>
                    <th className="py-3 font-medium">
                      <span className="sr-only">Escolher</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {event.talkPlans.map((plan) => (
                    <tr
                      key={plan.name}
                      className="border-b border-neutral-900/10"
                    >
                      <td className="py-4 pr-4 font-serif text-base text-neutral-900">
                        {plan.name}
                      </td>
                      <td className="py-4 pr-4 text-navy-900">
                        {plan.price}
                      </td>
                      <td className="py-4 pr-4 text-neutral-500">
                        {plan.slots} vagas
                      </td>
                      <td className="py-4 pr-4 text-neutral-500">
                        {plan.individualTime}
                      </td>
                      <td className="py-4 pr-4 text-neutral-500">
                        {plan.experience}
                      </td>
                      <td className="py-4">
                        <CheckoutButton
                          plan={plan.key}
                          className="whitespace-nowrap rounded-full border border-navy-900 px-4 py-2 text-xs font-medium text-navy-900 transition-colors hover:bg-navy-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-xs text-neutral-500">
              Inscrições abertas. Vagas limitadas por categoria — confirme
              disponibilidade pelo WhatsApp antes de escolher seu plano.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col gap-4 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Preparação
            </h2>
            <ul className="flex flex-col gap-2 text-base text-neutral-500">
              <li>Chegue com 10 minutos de antecedência para testar áudio e vídeo.</li>
              <li>Prepare seu Talk dentro do tempo do seu plano — o cronômetro é rígido.</li>
              <li>Tenha à mão sua apresentação, se o plano incluir compartilhamento de tela.</li>
              <li>Participantes do plano Ouro devem reservar tempo extra para perguntas.</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col gap-4 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Convidados
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              Convidados serão anunciados nesta página assim que confirmados
              e autorizados.
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
            <dl className="flex flex-col gap-8">
              {faqItems.map((item) => (
                <div key={item.question} className="flex flex-col gap-2">
                  <dt className="font-serif text-base text-neutral-900">
                    {item.question}
                  </dt>
                  <dd className="text-sm leading-relaxed text-neutral-500">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Garanta sua vaga
            </h2>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <a
                href={whatsappHref(
                  `Olá, quero escolher meu plano para o evento do Hub E7 em ${event.date}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                Escolher plano
              </a>
              <a
                href={whatsappHref(
                  "Olá, quero receber avisos da próxima edição do Hub E7.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-navy-900 px-6 py-3 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
              >
                Receber avisos
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
