import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Gratidão | Hub E7",
  description:
    "Gratidão é uma possibilidade de reciprocidade espontânea no Hub E7 — nunca uma cobrança, comissão ou obrigação.",
};

const notRepresent = [
  "Não é comissão",
  "Não é taxa de participação",
  "Não é condição de permanência",
  "Não garante divulgação",
  "Não gera preferência em eventos, conexões ou oportunidades",
  "Não representa pagamento por acesso a pessoas específicas",
  "Não cria obrigação futura",
  "Não interfere na forma como a pessoa é recebida na comunidade",
];

export default function GratidaoPage() {
  return (
    <main className="bg-cream-50">
      <Container>
        <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 py-24 text-center sm:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            Reciprocidade com liberdade
          </p>
          <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">
            Algumas conexões merecem ser lembradas.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-neutral-500">
            O Hub E7 valoriza histórias reais de encontros que contribuíram
            para novos caminhos, oportunidades e relacionamentos.
          </p>
          <p className="max-w-md text-sm leading-relaxed text-neutral-500">
            Quando uma conexão gera algo importante, quem desejar poderá
            expressar sua gratidão de forma espontânea. Sem obrigação. Sem
            cobrança. Sem expectativa de valor.
          </p>
        </section>
      </Container>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-6 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Gratidão só faz sentido quando é espontânea.
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              O Hub E7 não cobra comissão sobre negócios fechados a partir de
              conexões construídas na comunidade. Não existe percentual
              esperado. Não existe valor mínimo. Não existe obrigação de
              contribuir. A participação, a permanência e o acesso de
              qualquer pessoa à comunidade não dependem disso. Quem desejar
              retribuir poderá fazê-lo por livre escolha. Quem não desejar
              continuará sendo recebido com o mesmo respeito.
            </p>
            <p className="rounded-md border border-gold-500/30 bg-gold-500/10 px-6 py-4 font-serif text-lg text-neutral-900 italic">
              É uma possibilidade de reciprocidade. Não uma dívida.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Quer contar o que aconteceu?
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              Se uma conexão do Hub E7 contribuiu para algo importante, você
              pode compartilhar sua história com a gente.
            </p>
            <Link
              href="/cases"
              className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              Compartilhar minha história
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-20 text-center sm:py-28">
            <span className="rounded-full border border-neutral-900/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
              Em breve
            </span>
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Uma forma voluntária de apoiar a continuidade.
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              No futuro, quem desejar poderá realizar uma contribuição
              espontânea ao Hub E7 como expressão de gratidão por uma
              conexão, oportunidade ou experiência vivida na comunidade. Essa
              possibilidade será disponibilizada somente após os ajustes
              jurídicos, contábeis e operacionais necessários. Não haverá
              valor mínimo. Não haverá obrigação. A decisão de contribuir não
              produzirá preferência, benefício adicional ou acesso
              diferenciado.
            </p>
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-full border border-neutral-900/20 px-6 py-3 text-sm font-medium text-neutral-500 opacity-70"
            >
              Contribuição voluntária — em breve
            </button>
            <p className="text-xs text-neutral-500">
              Esta funcionalidade ainda não está disponível.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-8 py-20 sm:py-28">
            <h2 className="text-center font-serif text-2xl text-neutral-900 sm:text-3xl">
              Liberdade também precisa ser clara.
            </h2>
            <ul className="mx-auto grid max-w-lg gap-2 text-center text-base text-neutral-900 sm:grid-cols-2">
              {notRepresent.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-center text-base leading-relaxed text-neutral-500">
              Ela será apenas uma escolha pessoal de quem deseja contribuir
              com a continuidade do ambiente que ajudou a construir aquela
              conexão.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-20 text-center sm:py-28">
            <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
              Toda reciprocidade começa pela liberdade.
            </h2>
            <p className="text-base leading-relaxed text-neutral-500">
              O valor de uma conexão não depende de contribuição financeira.
              Quando alguém decide retribuir espontaneamente, esse gesto deve
              nascer da própria escolha — sem pressão, expectativa ou
              consequência para quem prefere não contribuir.
            </p>
            <Link
              href="/hub-e7"
              className="rounded-full border border-navy-900 px-6 py-3 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              Conhecer o Hub E7
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <p className="mx-auto max-w-2xl py-10 text-center text-xs leading-relaxed text-neutral-500">
            O Hub E7 não cobra comissão sobre negócios realizados a partir de
            conexões da comunidade. Qualquer contribuição futura será
            voluntária, sem valor mínimo e sem influência sobre participação,
            permanência, visibilidade, acesso ou oportunidades.
          </p>
        </Container>
      </section>
    </main>
  );
}
