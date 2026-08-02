import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "NetWeaving™ | Hub E7",
  description:
    "Conheça o NetWeaving™ no Hub E7: uma proposta de conexões com intenção, confiança, colaboração e fortalecimento relacional.",
  openGraph: {
    title: "NetWeaving™ | Hub E7",
    description:
      "Conheça o NetWeaving™ no Hub E7: uma proposta de conexões com intenção, confiança, colaboração e fortalecimento relacional.",
    type: "website",
  },
};

const whatsappHeroHref =
  "https://wa.me/5521980239814?text=Ol%C3%A1,%20gostaria%20de%20entender%20como%20funciona%20o%20processo%20de%20acesso%20ao%20NetWeaving%E2%84%A2.";

const whatsappFinalHref =
  "https://wa.me/5521980239814?text=Ol%C3%A1,%20li%20sobre%20o%20NetWeaving%E2%84%A2%20e%20quero%20saber%20se%20fa%C3%A7o%20parte%20do%20perfil%20de%20acesso.";

const ctaClassName =
  "rounded-full border border-navy-900 px-6 py-3 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";

const transformationPairs = [
  { before: "Contatos dispersos", after: "Relações intencionais" },
  { before: "Encontros pontuais", after: "Vínculos com continuidade" },
  { before: "Acesso passivo", after: "Participação que gera valor" },
];

const methodConcepts = [
  "Identidade",
  "Propósito",
  "Acesso",
  "Serviço",
  "Confiança",
  "Capital Relacional",
  "Influência",
  "Legado",
];

const ecosystemConcepts = [
  "Encontros",
  "Experiências",
  "Relacionamentos",
  "Colaboração",
  "Oportunidades",
];

const dimensions = [
  {
    title: "Perceber",
    description:
      "Reconhecer pessoas, competências, necessidades e possibilidades de conexão.",
  },
  {
    title: "Contribuir",
    description:
      "Participar de ambientes não apenas buscando acesso, mas oferecendo presença, serviço e valor.",
  },
  {
    title: "Construir",
    description:
      "Cultivar relações capazes de gerar confiança, colaboração e continuidade.",
  },
];

const fitFor = [
  "Lidera, empreende ou desenvolve projetos",
  "Deseja ampliar seu capital relacional",
  "Compreende que acesso exige preparo",
  "Valoriza confiança, reciprocidade e continuidade",
  "Está disposto a contribuir antes de colher",
  "Busca relações consistentes, não apenas contatos",
  "Deseja participar de um ecossistema de colaboração",
];

const notFitFor = [
  "Busca apenas visibilidade",
  "Espera resultado sem participação",
  "Aproxima-se somente quando precisa",
  "Busca atalhos em vez de relação",
  "Deseja acesso sem responsabilidade",
  "Não está disposto a cultivar vínculos",
  "Espera resultados sem se posicionar",
];

export default function NetWeavingAcessePage() {
  return (
    <main className="bg-cream-50">
      <Container>
        <section className="mx-auto flex max-w-2xl flex-col items-center gap-8 py-24 text-center sm:py-32 lg:py-40">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            Método NetWeaving™ | Sheyla Santos
          </p>

          <h1 className="font-serif text-4xl uppercase tracking-[0.08em] text-neutral-900 sm:text-5xl lg:text-6xl">
            NetWeaving™
          </h1>

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            Tribo Alpha | Hub E7
          </p>

          <span aria-hidden="true" className="h-px w-12 bg-gold-500" />

          <p className="font-serif text-xl text-neutral-900 sm:text-2xl lg:text-3xl">
            Conexões que aproximam. Relações que fortalecem.
          </p>

          <p className="max-w-md text-base leading-relaxed text-neutral-500">
            Um método próprio de Sheyla Santos para pessoas que desejam
            transformar acesso, presença e conexão em relações de confiança,
            colaboração e novas possibilidades.
          </p>

          <div className="flex flex-col items-center gap-3">
            <a
              href={whatsappHeroHref}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClassName}
            >
              Quero Acessar
            </a>
            <p className="text-xs text-neutral-500">
              O acesso começa por uma conversa de alinhamento.
            </p>
          </div>
        </section>
      </Container>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col gap-6 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Estar presente não significa estar posicionado.
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              Eventos ampliam contatos. Ambientes revelam pessoas. O que
              transforma uma aproximação em relação é a capacidade de
              contribuir, gerar confiança e construir continuidade.
            </p>
            <p className="font-serif text-lg text-neutral-900 italic sm:text-xl">
              Conexões sem continuidade desaparecem. Relações bem construídas
              atravessam ciclos.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-12 py-20 sm:py-28">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
                Não se trata de conhecer mais pessoas.
              </h2>
              <p className="text-base leading-relaxed text-neutral-500">
                Trata-se de desenvolver a capacidade de construir relações
                que sustentem confiança, colaboração e oportunidade.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              {transformationPairs.map((pair) => (
                <div
                  key={pair.before}
                  className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-6"
                >
                  <span className="text-base text-neutral-500">
                    {pair.before}
                  </span>
                  <span aria-hidden="true" className="text-gold-500">
                    →
                  </span>
                  <span className="font-serif text-base text-neutral-900">
                    {pair.after}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-base leading-relaxed text-neutral-500">
              O ambiente pode abrir a porta. Sua postura determina o valor
              que você será capaz de gerar dentro dele.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-6 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Um método para construir capital relacional com propósito.
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              Sheyla Santos desenvolveu uma metodologia própria de
              NetWeaving™ a partir de sua experiência na construção de
              comunidades, ambientes de confiança e conexões capazes de
              gerar colaboração e oportunidades. O método organiza uma forma
              mais consciente de perceber pessoas, reconhecer
              complementaridades, gerar valor e cultivar relações dentro de
              ecossistemas.
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              {methodConcepts.join(" · ")}
            </p>
            <p className="font-serif text-lg text-neutral-900 italic sm:text-xl">
              O NetWeaving™ transforma conexão em responsabilidade
              relacional.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-6 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              NetWeaving™ é o método. Hub E7 é o ecossistema onde o método
              ganha vida.
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              O Hub E7 reúne empresários, profissionais, líderes,
              especialistas e construtores de comunidades em um ambiente
              orientado por confiança e construção conjunta. É nele que
              conexões avançam para relações, relações se transformam em
              colaboração, e a colaboração abre novas possibilidades de
              negócio e crescimento.
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
              {ecosystemConcepts.join(" · ")}
            </p>
            <p className="font-serif text-lg text-neutral-900 italic sm:text-xl">
              O valor do ecossistema não está apenas em quem participa. Está
              no que as pessoas conseguem construir juntas.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col gap-16 py-20 sm:py-28">
            <h2 className="text-center font-serif text-2xl text-neutral-900 sm:text-3xl">
              Uma nova forma de ocupar ambientes.
            </h2>
            <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
              {dimensions.map((dimension) => (
                <div
                  key={dimension.title}
                  className="flex flex-col gap-3 text-center sm:text-left"
                >
                  <h3 className="font-serif text-lg text-neutral-900">
                    {dimension.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-500">
                    {dimension.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center font-serif text-lg text-neutral-900 italic sm:text-xl">
              A transformação não está no número de pessoas que você conhece.
              Está na qualidade das relações que você é capaz de sustentar.
            </p>
          </div>
        </Container>
      </section>

      {/* Seção "Evidências e depoimentos" reservada, mas não renderizada até validação e autorização expressas dos cases citados. */}

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-10 py-20 sm:py-28">
            <h2 className="text-center font-serif text-2xl text-neutral-900 sm:text-3xl">
              Para quem está preparado para construir.
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
              <div className="flex flex-col gap-4">
                <h3 className="font-serif text-base text-neutral-900">
                  Faz sentido para quem
                </h3>
                <ul className="flex flex-col gap-2 text-base text-neutral-900">
                  {fitFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-serif text-base text-neutral-500">
                  Não faz sentido para quem
                </h3>
                <ul className="flex flex-col gap-2 text-base text-neutral-500">
                  {notFitFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-center font-serif text-lg text-neutral-900 italic sm:text-xl">
              O NetWeaving™ não é para todos. É para quem está preparado para
              construir.
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
                alt="Sheyla Santos, fundadora do Hub E7 e criadora do Método NetWeaving™"
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
                Fundadora do Hub E7 e criadora do Método NetWeaving™
              </p>
              <p className="text-base leading-relaxed text-neutral-500">
                O diferencial de Sheyla Santos não está apenas em conhecer
                pessoas. Está em perceber pessoas, compreender ambientes e
                criar condições para que relações relevantes aconteçam. Sua
                atuação reúne inteligência relacional, hospitalidade,
                construção de comunidades, cultura da honra, serviço e
                capacidade de aproximar pessoas, competências e
                oportunidades. No Hub E7, essa experiência se transforma em
                ambiente. No Método NetWeaving™, transforma-se em
                conhecimento estruturado e aplicável.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Acesso não começa com um convite. Começa com alinhamento.
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              O primeiro passo é uma conversa para compreender seu momento,
              sua postura e sua aderência à proposta do NetWeaving™.
            </p>
            <a
              href={whatsappFinalHref}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClassName}
            >
              Quero Acessar
            </a>
            <p className="text-xs text-neutral-500">
              Solicite acesso e receba as próximas orientações da equipe Hub
              E7.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
