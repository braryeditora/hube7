import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ApplicationForm from "@/components/forms/ApplicationForm";

export const metadata: Metadata = {
  title: "Diagnóstico Empresarial | Hub E7",
  description:
    "Diagnóstico Empresarial e Estruturação de Capital Intelectual: uma leitura estruturada do negócio, conduzida por Orlando Carvalho com a leitura relacional do Método NetWeaving™ de Sheyla Santos, para preparar decisões e relações mais claras.",
  openGraph: {
    title: "Diagnóstico Empresarial | Hub E7",
    description:
      "Diagnóstico Empresarial e Estruturação de Capital Intelectual: uma leitura estruturada do negócio, conduzida por Orlando Carvalho com a leitura relacional do Método NetWeaving™ de Sheyla Santos, para preparar decisões e relações mais claras.",
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

const layers = [
  "Oferta",
  "Comercial",
  "Operações",
  "Governança",
  "Capital intelectual",
  "Posicionamento",
  "Relações",
  "Arquitetura do negócio",
];

const deliverables = [
  "Leitura inicial da empresa e do momento do empresário",
  "Diagnóstico empresarial",
  "Leitura relacional orientada pelos princípios do NetWeaving™",
  "Identificação de gargalos e prioridades",
  "Análise da clareza da oferta e da apresentação empresarial",
  "Definição dos tipos de conexão coerentes com o momento do negócio",
  "Direcionamento inicial de próximos passos",
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
      "Autora e condutora do Método NetWeaving™, Sheyla Santos atua na construção de aproximações, na leitura relacional e na criação de ambientes de confiança, colaboração e continuidade. Sua dimensão nesta intervenção trabalha serviço antes do pedido, clareza de intenção, postura relacional e ativação responsável do capital relacional.",
  },
  {
    name: "Orlando Carvalho",
    role: "Empresário, editor e consultor em estruturação organizacional",
    image: {
      src: "/images/team/orlando-netweaving.jpg",
      alt: "Orlando Carvalho, consultor em estruturação organizacional, responsável pela dimensão de Diagnóstico Empresarial",
    },
    description:
      "Orlando Carvalho atua com diagnóstico empresarial, processos, organização de prioridades, capital intelectual e direcionamento estratégico. Sua metodologia lê o estágio atual da empresa, identifica gargalos, avalia a clareza da oferta e documenta o direcionamento para os próximos movimentos do negócio — a leitura de cada empresa é conduzida e registrada individualmente, sem modelos padronizados.",
  },
];

export default function NetWeavingAcessePage() {
  return (
    <main className="bg-cream-50">
      {/* Seção 1 — Hero */}
      <Container>
        <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 py-24 text-center sm:py-32">
          <p className={eyebrowClassName}>
            Diagnóstico Empresarial + Método NetWeaving™
          </p>
          <div className="flex flex-col items-center gap-1">
            <span className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Diagnóstico Empresarial
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold-500">
              Estruturação de Capital Intelectual
            </span>
          </div>
          <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">
            Antes de ampliar oportunidades, compreenda o que precisa ser
            estruturado.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-neutral-500">
            Uma frente consultiva de alta profundidade, conduzida por Orlando
            Carvalho e Sheyla Santos, que une Diagnóstico Empresarial e
            Método NetWeaving™ para ajudar empresários a compreender seu
            momento e organizar prioridades antes de ampliar relações.
          </p>
          <a href="#aplicacao" className={ctaClassName}>
            Iniciar uma conversa
          </a>
          <p className="text-xs text-neutral-500">
            Acesso mediante aplicação e conversa de alinhamento.
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
                  Esta intervenção não foi criada para quem procura atalhos.
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

      {/* Seção 7 — Camadas possíveis de intervenção */}
      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-10 py-20 sm:py-28">
            <div className="mx-auto flex max-w-xl flex-col gap-3 text-center">
              <p className={eyebrowClassName}>Escopo do diagnóstico</p>
              <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
                Camadas possíveis de intervenção.
              </h2>
              <p className="text-base leading-relaxed text-neutral-500">
                O diagnóstico pode alcançar diferentes camadas do negócio,
                dependendo do que a leitura inicial identificar. Nem toda
                empresa passa por todas elas — é a leitura que determina o
                que faz sentido estruturar em cada caso.
              </p>
            </div>
            <ul className="mx-auto grid max-w-2xl gap-3 text-center text-sm text-neutral-900 sm:grid-cols-2 lg:grid-cols-4">
              {layers.map((layer) => (
                <li
                  key={layer}
                  className="rounded-md border border-neutral-900/10 px-4 py-3"
                >
                  {layer}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Seção 8 — O que uma leitura estruturada pode revelar */}
      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-8 py-20 sm:py-28">
            <div className="flex flex-col gap-3 text-center">
              <p className={eyebrowClassName}>O que a leitura pode revelar</p>
              <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
                Uma leitura integrada do negócio e das relações.
              </h2>
              <p className="text-base leading-relaxed text-neutral-500">
                A leitura inicial ajuda cada empresário a compreender melhor
                seu cenário empresarial, suas prioridades e a forma como se
                apresenta e constrói relações.
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
            <div className="mx-auto flex max-w-xl flex-col gap-3 text-center">
              <p className={eyebrowClassName}>Capacidade de estruturação</p>
              <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
                Quem conduz
              </h2>
            </div>
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
              Sheyla conduz o Método NetWeaving™. Orlando conduz o
              Diagnóstico Empresarial. Juntos, integram a leitura da empresa
              à leitura das relações.
            </p>
          </div>
        </Container>
      </section>

      {/* Seção 10 — Como funciona o processo */}
      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-20 text-center sm:py-28">
            <p className={eyebrowClassName}>Como funciona</p>
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Aplicação, leitura e, quando houver aderência, proposta
              personalizada.
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              O acesso a esta intervenção começa por uma aplicação e uma
              conversa inicial. A partir dessa conversa e de uma leitura
              preliminar do momento da empresa, é possível identificar se
              há aderência entre a demanda e a capacidade de estruturação
              do Hub E7. Quando há aderência, uma proposta é construída de
              forma personalizada, de acordo com o escopo e a profundidade
              que o diagnóstico apontar como necessários.
            </p>
            <a href="#aplicacao" className={ctaClassName}>
              Iniciar uma conversa
            </a>
          </div>
        </Container>
      </section>

      {/* Seção 11 — O que a intervenção não garante */}
      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-4 py-20 text-center sm:py-28">
            <p className={eyebrowClassName}>Responsabilidade</p>
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Direção e preparação não são promessa de resultado.
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              O Diagnóstico Empresarial trabalha leitura, preparação,
              direcionamento e construção relacional. Esta intervenção não
              comercializa contatos, não garante apresentações específicas
              e não promete negócios, vendas, investimentos, contratações,
              indicações, parcerias ou resultados financeiros. As
              possibilidades identificadas dependem do momento da empresa,
              da qualidade da oferta, da aderência entre as partes, das
              decisões dos envolvidos e da capacidade de execução do
              empresário. O diagnóstico identifica, organiza, prioriza e
              recomenda. Ele não corresponde a uma consultoria integral de
              implementação ou reestruturação empresarial.
            </p>
          </div>
        </Container>
      </section>

      {/* Seção 12 — Aplicação */}
      <section id="aplicacao" className="border-t border-neutral-900/10 scroll-mt-20">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col gap-8 py-20 sm:py-28">
            <div className="flex flex-col gap-3 text-center">
              <p className={eyebrowClassName}>Próximo passo</p>
              <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
                O acesso começa por uma conversa.
              </h2>
              <p className="text-base leading-relaxed text-neutral-500">
                Não é uma análise burocrática de aplicação — é o início de
                um relacionamento. Preencha os dados abaixo para combinar
                uma conversa inicial com Orlando Carvalho. A qualificação
                mais profunda sobre o momento da sua empresa acontece
                nessa conversa, não no formulário.
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
            <p className={eyebrowClassName}>Diagnóstico Empresarial</p>
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Antes de ampliar o acesso, prepare a empresa.
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              Compreenda onde seu negócio está, o que precisa ser
              organizado e quais relações fazem sentido para o próximo
              momento.
            </p>
            <a href="#aplicacao" className={ctaClassName}>
              Iniciar uma conversa
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
