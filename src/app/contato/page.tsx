import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/forms/ContactForm";
import { whatsappHref } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contato | Hub E7",
  description:
    "Fale com o Hub E7 pelo WhatsApp ou receba avisos do próximo evento.",
};

export default function ContatoPage() {
  return (
    <main className="bg-cream-50">
      <Container>
        <section className="mx-auto flex max-w-2xl flex-col items-center gap-6 py-24 text-center sm:py-32">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
            Contato
          </p>
          <h1 className="font-serif text-4xl text-neutral-900 sm:text-5xl">
            Fale com o Hub E7
          </h1>
          <p className="max-w-md text-base leading-relaxed text-neutral-500">
            O canal mais rápido é o WhatsApp. Se preferir, deixe seus dados
            para receber avisos do próximo evento.
          </p>
          <a
            href={whatsappHref("Olá, gostaria de falar com o Hub E7.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
          >
            Falar pelo WhatsApp
          </a>
        </section>
      </Container>

      <section className="border-t border-neutral-900/10">
        <Container>
          <div className="mx-auto flex max-w-xl flex-col gap-8 py-20 sm:py-28">
            <h2 className="text-center font-serif text-2xl text-neutral-900 sm:text-3xl">
              Receber aviso de próximo evento
            </h2>
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
