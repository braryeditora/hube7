import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Pagamento — NetWeaving™ | Direção Empresarial",
  robots: {
    index: false,
    follow: false,
  },
};

const GREENN_CHECKOUT_URL = "https://payfast.greenn.com.br/kx7t2qx";

export default function NetWeavingPagamentoPage() {
  return (
    <main className="bg-cream-50">
      <Container>
        <section className="mx-auto flex max-w-md flex-col items-center gap-6 py-24 text-center sm:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            NetWeaving™ | Direção Empresarial
          </p>
          <h1 className="font-serif text-3xl text-neutral-900 sm:text-4xl">
            Primeira edição — R$ 3.500
          </h1>
          <p className="text-sm leading-relaxed text-neutral-500">
            Link de pagamento para candidatos aprovados após a triagem e a
            conversa de alinhamento.
          </p>
          <a
            href={GREENN_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
          >
            Ir para o pagamento
          </a>
        </section>
      </Container>
    </main>
  );
}
