import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ApplicationForm from "@/components/forms/ApplicationForm";

export const metadata: Metadata = {
  title: "NetWeaving™ | Direção Empresarial | Hub E7",
  description:
    "Uma experiência que une Diagnóstico Empresarial e Método NetWeaving™ para ajudar empresários a compreender prioridades, preparar sua empresa e construir relações coerentes com o momento do negócio.",
  openGraph: {
    title: "NetWeaving™ | Direção Empresarial | Hub E7",
    description:
      "Uma experiência que une Diagnóstico Empresarial e Método NetWeaving™ para ajudar empresários a compreender prioridades, preparar sua empresa e construir relações coerentes com o momento do negócio.",
    type: "website",
  },
};

const ctaClassName =
  "rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";

const eyebrowClassName =
  "text-xs font-medium uppercase tracking-[0.25em] text-neutral-500";

const readings = [
  {
    name: "Sheyla Santos",
    label: "Método NetWeaving™",
    image: {
      src: "/images/sheyla-santos-retrato.jpg.webp",
      alt: "Sheyla Santos, fundadora do Hub E7 e condutora do Método NetWeaving™",
    },
    description:
      "Uma leitura relacional baseada em presença, serviço, aproximação, confiança e continuidade, ajudando o empresário a compreender como constrói relações e participa de ambientes de oportunidade.",
    considers: [
      "Postura relacional",
      "Clareza de intenção",
      "Forma de aproximação",
      "Capacidade de apresentação",
      "Construção de confiança",
      "Reciprocidade",
      "Continuidade das relações",
    ],
  },
  {
    name: "Orlando Carvalho",
    label: "Diagnóstico Empresarial",
    image: {
      src: "/images/team/orlando-netweaving.jpg",
      alt: "Orlando Carvalho, consultor em estruturação organizacional, responsável pela dimensão de Diagnóstico Empresarial",
    },
    description:
      "Uma leitura estruturada do momento atual da empresa para identificar gargalos, prioridades, riscos, clareza de oferta e nível de preparação para os próximos movimentos do negócio.",
    considers: [
      "Cenário atual",
      "Proposta e oferta",
      "Posicionamento",
      "Prioridades",
      "Gargalos",
      "Prontidão",
      "Direcionamento inicial",
    ],
  },
];

const fitFor = [
  "Compreender melhor o negócio",
  "Organizar o momento atual",
  "Preparar-se para novas oportunidades",
  "Apresentar a empresa com mais clareza",
  "Reconhecer quais conexões fazem sentido",
  "Construir relações de maneira responsável",
];

const notFitFor = [
  "Contatos prontos",
  "Indicação garantida",
  "Acesso sem preparação",
  "Venda realizada por terceiros",
  "Promessa de faturamento",
  "Solução completa sem participação pessoal",
];

const formatItems = [
  {
    title: "12 encontros em grupo",
    description: "Encontros ao vivo, realizados por vídeo pelo Google Meet.",
  },
  {
    title: "Acesso às gravações",
    description:
      "Os encontros serão gravados para os participantes que não puderem acompanhar alguma reunião ao vivo.",
  },
  {
    title: "Grupo seleto no WhatsApp",
    description:
      "Ambiente de comunicação e apoio destinado exclusivamente aos empresários selecionados.",
  },
  {
    title: "Primeira edição com 10 participantes",
    description:
      "A limitação de vagas preserva a proximidade, a qualidade das leituras e a participação direta dos condutores.",
  },
];

const deliverables = [
  "Leitura inicial da empresa e do momento do empresário",
  "Diagnóstico empresarial",
  "Leitura relacional orientada pelos princípios do NetWeaving™",
  "Identificação de gargalos e prioridades",
  "Análise da clareza da oferta e da apresentação empresarial",
  "Definição dos tipos de conexão coerentes com o momento do negócio",
  "Direcionamento inicial de próximos passos",
  "Participação nos 12 encontros em grupo",
  "Acesso às gravações",
  "Participação no grupo seleto de WhatsApp",
];

const conductors = [
  {
    name: "Sheyla Santos",
    role: "Fundadora e CEO da Tribo Alpha e liderança do Hub E7",
    image: {
      src: "/images/sheyla-santos-retrato.jpg.webp",
      alt: "Sheyla Santos, fundadora do Hub E7 e condutora do Método NetWeaving™",
    },
    description:
      "Autora e condutora do Método NetWeaving™, Sheyla Santos atua na construção de aproximações, na leitura relacional e na criação de ambientes de confiança, colaboração e continuidade. Sua dimensão no programa trabalha serviço antes do pedido, clareza de intenção, postura relacional e ativação responsável do capital relacional.",
  },
  {
    name: "Orlando Carvalho",
    role: "Empresário, editor e consultor em estruturação organizacional",
    image: {
      src: "/images/team/orlando-netweaving.jpg",
      alt: "Orlando Carvalho, consultor em estruturação organizacional, responsável pela dimensão de Diagnóstico Empresarial",
    },
    description:
      "Orlando Carvalho atua com diagnóstico empresarial, processos, organização de prioridades, capital intelectual e direcionamento estratégico. Sua dimensão no programa trabalha a leitura do estágio atual da empresa, a identificação de gargalos, a clareza da oferta e a preparação do negócio para seus próximos movimentos.",
  },
];

export default function NetWeavingAcessePage() {
  return (
    <main className="bg-cream-50">
      {/* Seção 1 — Hero */}
      <Container>
        <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 py-24 text-center sm:py-32">
          <p className={eyebrowClassName}>
            Método NetWeaving™ + Diagnóstico Empresarial
          </p>
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              NetWeaving™
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-500">
              Direção Empresarial
            </span>
          </div>
          <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">
            Prepare sua empresa para as conexões que deseja construir.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-neutral-500">
            Uma experiência de três meses que une Diagnóstico Empresarial e
            Método NetWeaving™ para ajudar empresários a compreender seu
            momento, organizar prioridades e construir relações coerentes
            com os próximos passos do negócio.
          </p>
          <a href="#aplicacao" className={ctaClassName}>
            Quero participar da seleção
          </a>
          <p className="text-xs text-neutral-500">
            Dez empresários serão selecionados para a primeira edição.
          </p>
        </section>
      </Container>

      {/* Seção 2 — Tese do problema */}
      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col gap-4 py-20 text-center sm:py-28">
            <p className={eyebrowClassName}>Acesso sem preparação</p>
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Chegar à conexão desejada não é suficiente.
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              Uma oportunidade pode surgir antes de a empresa estar
              preparada para aproveitá-la. Isso acontece quando o
              empresário ainda não consegue apresentar sua proposta com
              clareza, não compreende quais são as prioridades do negócio
              ou busca aproximações sem saber exatamente do que precisa. O
              problema nem sempre é falta de acesso. Algumas vezes, é falta
              de direção.
            </p>
          </div>
        </Container>
      </section>

      {/* Seção 3 — Capital relacional */}
      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col gap-4 py-20 text-center sm:py-28">
            <p className={eyebrowClassName}>Capital relacional</p>
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Uma rede não se mede apenas pelo número de contatos.
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              O verdadeiro valor de uma rede está na qualidade das relações
              que uma pessoa é capaz de construir, ativar e multiplicar. Na
              Tribo Alpha, conexões podem se transformar em pontes. Pontes
              podem aproximar competências, necessidades e possibilidades.
              E dessas aproximações podem surgir negócios, parcerias,
              aprendizados e valor compartilhado. O Método NetWeaving™
              trabalha a construção de relações de forma assertiva,
              estratégica e genuína — com presença, serviço, confiança e
              continuidade.
            </p>
          </div>
        </Container>
      </section>

      {/* Seção 4 — Duas leituras */}
      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-5xl flex-col gap-12 py-20 sm:py-28">
            <div className="mx-auto flex max-w-xl flex-col gap-3 text-center">
              <p className={eyebrowClassName}>Empresa e relacionamento</p>
              <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
                Duas leituras. Uma direção mais clara.
              </h2>
              <p className="text-base leading-relaxed text-neutral-500">
                Antes de ampliar a rede, é necessário compreender o negócio.
                Antes de solicitar uma aproximação, é necessário entender o
                que a empresa realmente precisa.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-8">
              {readings.map((reading) => (
                <div key={reading.name} className="flex flex-col gap-4">
                  <div className="relative h-72 w-full overflow-hidden rounded-md sm:h-80">
                    <Image
                      src={reading.image.src}
                      alt={reading.image.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 480px, 90vw"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-center">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-500">
                      {reading.label}
                    </span>
                    <p className="text-base leading-relaxed text-neutral-500">
                      {reading.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-center">
                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
                      Considera
                    </span>
                    <p className="text-sm leading-relaxed text-neutral-700">
                      {reading.considers.join(" · ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mx-auto max-w-xl text-center font-serif text-lg italic text-neutral-900">
              O diagnóstico ajuda a compreender o que a empresa precisa. O
              NetWeaving™ ajuda a preparar a forma como o empresário
              constrói as relações necessárias para o seu momento.
            </p>
          </div>
        </Container>
      </section>

      {/* Seções 5 e 6 — Para quem faz sentido / Não é para todos */}
      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-10 py-20 sm:py-28">
            <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
              <div className="flex flex-col gap-4">
                <h3 className="font-serif text-lg text-neutral-900">
                  Para empresários que não desejam apenas ampliar contatos.
                </h3>
                <ul className="flex flex-col gap-2 text-base text-neutral-900">
                  {fitFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-serif text-base text-neutral-500">
                  Esta experiência não foi criada para quem procura atalhos.
                </h3>
                <ul className="flex flex-col gap-2 text-base text-neutral-500">
                  {notFitFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Seção 7 — O formato confirmado */}
      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-10 py-20 sm:py-28">
            <div className="mx-auto flex max-w-xl flex-col gap-3 text-center">
              <p className={eyebrowClassName}>A experiência</p>
              <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
                Três meses de leitura, preparação e direcionamento.
              </h2>
              <p className="text-base leading-relaxed text-neutral-500">
                A primeira edição será conduzida ao longo de três meses,
                com participação direta de Sheyla Santos e Orlando
                Carvalho.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {formatItems.map((item) => (
                <div key={item.title} className="flex flex-col gap-2 text-center sm:text-left">
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

      {/* Seção 8 — O que o participante recebe */}
      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-8 py-20 sm:py-28">
            <div className="flex flex-col gap-3 text-center">
              <p className={eyebrowClassName}>Entregas</p>
              <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
                Uma leitura integrada do negócio e das relações.
              </h2>
              <p className="text-base leading-relaxed text-neutral-500">
                Ao longo da experiência, cada participante será orientado a
                compreender melhor seu cenário empresarial, suas
                prioridades e a forma como se apresenta e constrói
                relações.
              </p>
            </div>
            <ul className="mx-auto grid max-w-xl gap-2 text-base text-neutral-900 sm:grid-cols-2">
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Seção 9 — Quem conduz */}
      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-5xl flex-col gap-12 py-20 sm:py-28">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-8">
              {conductors.map((conductor) => (
                <div key={conductor.name} className="flex flex-col gap-4">
                  <div className="relative h-56 w-full overflow-hidden rounded-md sm:h-64">
                    <Image
                      src={conductor.image.src}
                      alt={conductor.image.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 480px, 90vw"
                    />
                  </div>
                  <div className="flex flex-col gap-2 text-center">
                    <h3 className="font-serif text-lg text-neutral-900">
                      {conductor.name}
                    </h3>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
                      {conductor.role}
                    </p>
                    <p className="text-sm leading-relaxed text-neutral-500">
                      {conductor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mx-auto max-w-xl text-center font-serif text-lg italic text-neutral-900">
              Sheyla conduz o Método NetWeaving™. Orlando conduz a dimensão
              empresarial. Juntos, integram a leitura da empresa à leitura
              das relações.
            </p>
          </div>
        </Container>
      </section>

      {/* Seção 10 — Primeira edição */}
      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-20 text-center sm:py-28">
            <p className={eyebrowClassName}>Condição de lançamento</p>
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Uma primeira edição com participação direta dos condutores.
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              O valor de referência do NetWeaving™ | Direção Empresarial é
              de R$ 7.000. Para a primeira edição, dez empresários serão
              selecionados para participar pelo valor de R$ 3.500. Essa
              condição foi definida para a etapa inicial de integração
              entre o Diagnóstico Empresarial e o Método NetWeaving™,
              permitindo acompanhar de perto os participantes, calibrar a
              experiência e documentar os primeiros casos com autorização.
            </p>
            <p className="font-serif text-2xl text-navy-900">
              Primeira edição — R$ 3.500
            </p>
            <p className="text-xs text-neutral-500">
              Parcelamento disponível no momento da contratação, sujeito às
              condições da plataforma de pagamento.
            </p>
            <a href="#aplicacao" className={ctaClassName}>
              Quero participar da seleção
            </a>
            <p className="text-xs text-neutral-500">
              O pagamento somente será disponibilizado após a aplicação e a
              conversa de alinhamento.
            </p>
          </div>
        </Container>
      </section>

      {/* Seção 11 — O que o programa não garante */}
      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-4 py-20 text-center sm:py-28">
            <p className={eyebrowClassName}>Responsabilidade</p>
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Direção e preparação não são promessa de resultado.
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              O NetWeaving™ | Direção Empresarial trabalha diagnóstico,
              preparação, direcionamento e construção relacional. O
              programa não comercializa contatos, não garante apresentações
              específicas e não promete negócios, vendas, investimentos,
              contratações, indicações, parcerias ou resultados
              financeiros. As possibilidades identificadas dependem do
              momento da empresa, da qualidade da oferta, da aderência
              entre as partes, das decisões dos envolvidos e da capacidade
              de execução do participante. O diagnóstico identifica,
              organiza, prioriza e recomenda. Ele não corresponde a uma
              consultoria integral de implementação ou reestruturação
              empresarial.
            </p>
          </div>
        </Container>
      </section>

      {/* Seção 12 — Aplicação */}
      <section id="aplicacao" className="border-t border-neutral-900/10 scroll-mt-20">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col gap-8 py-20 sm:py-28">
            <div className="flex flex-col gap-3 text-center">
              <p className={eyebrowClassName}>Processo seletivo</p>
              <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
                O acesso começa por uma conversa de alinhamento.
              </h2>
              <p className="text-base leading-relaxed text-neutral-500">
                A primeira edição será formada por dez empresários. O
                preenchimento da aplicação não garante a participação. As
                respostas serão analisadas para compreender o momento da
                empresa, a aderência à proposta e a disponibilidade do
                candidato para executar os direcionamentos recebidos. Após
                a triagem, os candidatos com maior aderência serão
                convidados para uma conversa com a equipe responsável. O
                acesso ao pagamento será encaminhado somente depois da
                aprovação.
              </p>
            </div>

            <ApplicationForm />
          </div>
        </Container>
      </section>

      {/* Seção 13 — Fechamento */}
      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-20 text-center sm:py-28">
            <p className={eyebrowClassName}>NetWeaving™ | Direção Empresarial</p>
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Antes de ampliar o acesso, prepare a empresa.
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              Compreenda onde seu negócio está, o que precisa ser
              organizado e quais relações fazem sentido para o próximo
              momento.
            </p>
            <a href="#aplicacao" className={ctaClassName}>
              Quero participar da seleção
            </a>
            <p className="text-xs text-neutral-500">
              Dez vagas na primeira edição.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
