import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import DemandForm from "@/components/forms/DemandForm";

export const metadata: Metadata = {
  title: "Empresas | Hub E7",
  description:
    "Conte sua demanda empresarial ao Hub E7: SDR, closer, social selling, Staff, especialistas, eventos e mais. Cada demanda é analisada antes de qualquer indicação.",
};

const demands = [
  "Preciso de SDR",
  "Preciso de closer",
  "Preciso de social selling",
  "Preciso de Staff",
  "Preciso de especialista",
  "Preciso de evento",
  "Preciso preparar meu negócio",
  "Preciso de organização e governança",
  "Quero desenvolver minha equipe",
  "Quero conectar-me a parceiros",
];

export default function EmpresasPage() {
  return (
    <main className="bg-cream-50">
      <Container>
        <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 py-24 text-center sm:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            Para empresas
          </p>
          <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">
            Conte sua demanda
          </h1>
          <p className="max-w-md text-base leading-relaxed text-neutral-500">
            Cada demanda é analisada antes de qualquer indicação ou proposta.
            O Hub E7 capta demandas empresariais — não vende uma solução
            pronta.
          </p>
        </section>
      </Container>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col gap-6 py-20 sm:py-28">
            <h2 className="text-center font-serif text-2xl text-neutral-900 sm:text-3xl">
              Que tipo de demanda você tem?
            </h2>
            <ul className="mx-auto grid max-w-lg gap-2 text-center text-base text-neutral-900 sm:grid-cols-2">
              {demands.map((demand) => (
                <li key={demand}>{demand}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col gap-8 py-20 sm:py-28">
            <div className="text-center">
              <h2 className="font-serif text-2xl text-neutral-900 sm:text-3xl">
                Conte sua Demanda
              </h2>
              <p className="mt-2 text-sm text-neutral-500">
                Fluxo: formulário → triagem por Orlando/Brary → indicação de
                solução ou encaminhamento a Sheyla. Retorno em até 3 dias
                úteis.
              </p>
            </div>

            <DemandForm />

            <p className="text-center text-xs text-neutral-500">
              O Hub E7 não garante solução, prazo de contratação ou resultado
              comercial.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
