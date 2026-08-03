"use client";

import { useState } from "react";
import Link from "next/link";
import { whatsappHref } from "@/content/contact";

const inputClassName =
  "rounded-md border border-neutral-900/15 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:border-gold-500";

const fieldLabels: Record<string, string> = {
  empresa: "Nome da empresa",
  responsavel: "Responsável",
  whatsapp: "WhatsApp",
  email: "E-mail",
  demanda: "Demanda",
  segmento: "Segmento",
  cidade: "Cidade",
  urgencia: "Urgência",
  tamanho: "Tamanho da empresa",
  observacoes: "Observações",
};

function buildWhatsappMessage(formData: FormData) {
  const lines = Object.entries(fieldLabels)
    .map(([name, label]) => {
      const value = formData.get(name);
      return typeof value === "string" && value.trim() ? `${label}: ${value.trim()}` : null;
    })
    .filter((line): line is string => Boolean(line));

  return ["Olá, quero contar minha demanda empresarial para o Hub E7.", ...lines].join("\n");
}

export default function DemandForm() {
  const [showFallback, setShowFallback] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState(() =>
    whatsappHref("Olá, quero contar minha demanda empresarial para o Hub E7."),
  );

  // TODO: integrar este formulário ao CRM ou serviço de formulários
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setWhatsappUrl(whatsappHref(buildWhatsappMessage(formData)));
    setShowFallback(true);
  }

  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input required name="empresa" type="text" placeholder="Nome da empresa" className={inputClassName} />
        <input required name="responsavel" type="text" placeholder="Responsável" className={inputClassName} />
        <input required name="whatsapp" type="tel" placeholder="WhatsApp" className={inputClassName} />
        <input required name="email" type="email" placeholder="E-mail" className={inputClassName} />
        <textarea required name="demanda" placeholder="Sua demanda" rows={4} className={inputClassName} />
        <input name="segmento" type="text" placeholder="Segmento (opcional)" className={inputClassName} />
        <input name="cidade" type="text" placeholder="Cidade (opcional)" className={inputClassName} />
        <input name="urgencia" type="text" placeholder="Urgência (opcional)" className={inputClassName} />
        <input name="tamanho" type="text" placeholder="Tamanho da empresa (opcional)" className={inputClassName} />
        <textarea name="observacoes" placeholder="Observações (opcional)" rows={3} className={inputClassName} />

        <label className="flex items-start gap-2 text-xs text-neutral-500">
          <input required type="checkbox" className="mt-1" />
          <span>
            Concordo com o uso dos meus dados conforme a{" "}
            <Link href="/privacidade" className="underline hover:text-gold-500">
              Política de Privacidade
            </Link>
            .
          </span>
        </label>

        <button
          type="submit"
          className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
        >
          Enviar demanda
        </button>
      </form>

      {showFallback && (
        <div className="flex flex-col items-center gap-3 rounded-md border border-gold-500/30 px-6 py-6 text-center">
          <p className="text-sm text-neutral-500">
            Formulário em fase de integração. Para atendimento imediato,
            utilize o WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-navy-900 px-5 py-2 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
