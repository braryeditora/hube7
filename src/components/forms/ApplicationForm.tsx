"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { whatsappHrefOrlando } from "@/content/contact";

const inputClassName =
  "rounded-md border border-neutral-900/15 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:border-gold-500";

const REQUIRED_MESSAGE = "Este campo é obrigatório.";

type FormState = {
  nomeCompleto: string;
  empresa: string;
  whatsapp: string;
  email: string;
  motivo: string;
  dadosConsentimento: boolean;
};

const initialState: FormState = {
  nomeCompleto: "",
  empresa: "",
  whatsapp: "",
  email: "",
  motivo: "",
  dadosConsentimento: false,
};

type RequiredTextField = "nomeCompleto" | "empresa" | "whatsapp" | "email";

type FormErrors = Partial<Record<RequiredTextField | "dadosConsentimento", string>>;

function buildWhatsappMessage(form: FormState) {
  const lines = [
    "Olá, gostaria de conversar sobre o Diagnóstico Empresarial do Hub E7.",
    `Nome completo: ${form.nomeCompleto}`,
    `Empresa ou atividade: ${form.empresa}`,
    `WhatsApp: ${form.whatsapp}`,
    `E-mail: ${form.email}`,
  ];

  if (form.motivo.trim()) {
    lines.push(`O que trouxe até aqui: ${form.motivo}`);
  }

  return lines.join("\n");
}

export default function ApplicationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");
  const dadosConsentId = useId();

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  // TODO: integrar este formulário ao CRM ou serviço de formulários
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const requiredTextFields: RequiredTextField[] = [
      "nomeCompleto",
      "empresa",
      "whatsapp",
      "email",
    ];

    const nextErrors: FormErrors = {};
    for (const field of requiredTextFields) {
      if (!form[field].trim()) nextErrors[field] = REQUIRED_MESSAGE;
    }
    if (!form.dadosConsentimento) {
      nextErrors.dadosConsentimento = REQUIRED_MESSAGE;
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => setStatus("submitted"), 600);
  }

  if (status === "submitted") {
    return (
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-xl text-neutral-900">
            Mensagem recebida.
          </h3>
          <p className="text-sm leading-relaxed text-neutral-500">
            Obrigado pelo interesse no Diagnóstico Empresarial. O próximo
            passo é uma conversa inicial — a equipe entrará em contato pelos
            dados informados para combinar um horário.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 rounded-md border border-gold-500/30 px-6 py-6">
          <p className="text-sm text-neutral-500">
            Formulário em fase de integração. Para atendimento imediato,
            utilize o WhatsApp.
          </p>
          <a
            href={whatsappHrefOrlando(buildWhatsappMessage(form))}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-navy-900 px-5 py-2 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-neutral-900">Nome completo</label>
        <input
          type="text"
          value={form.nomeCompleto}
          onChange={(event) => update("nomeCompleto", event.target.value)}
          className={inputClassName}
        />
        {errors.nomeCompleto && <p className="text-xs text-red-600">{errors.nomeCompleto}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-neutral-900">Empresa ou atividade</label>
        <input
          type="text"
          value={form.empresa}
          onChange={(event) => update("empresa", event.target.value)}
          className={inputClassName}
        />
        {errors.empresa && <p className="text-xs text-red-600">{errors.empresa}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-neutral-900">WhatsApp</label>
        <input
          type="tel"
          value={form.whatsapp}
          onChange={(event) => update("whatsapp", event.target.value)}
          className={inputClassName}
        />
        {errors.whatsapp && <p className="text-xs text-red-600">{errors.whatsapp}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-neutral-900">E-mail</label>
        <input
          type="email"
          value={form.email}
          onChange={(event) => update("email", event.target.value)}
          className={inputClassName}
        />
        {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-neutral-900">
          Em uma frase, o que te trouxe até aqui? <span className="font-normal text-neutral-500">(opcional)</span>
        </label>
        <input
          type="text"
          value={form.motivo}
          onChange={(event) => update("motivo", event.target.value)}
          className={inputClassName}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor={dadosConsentId} className="flex items-start gap-2 text-xs text-neutral-500">
          <input
            id={dadosConsentId}
            type="checkbox"
            className="mt-1"
            checked={form.dadosConsentimento}
            onChange={(event) => update("dadosConsentimento", event.target.checked)}
          />
          <span>
            Concordo com o tratamento dos meus dados para contato sobre esta
            conversa.{" "}
            <Link href="/privacidade" className="underline hover:text-gold-500">
              Consultar Política de Privacidade
            </Link>
            .
          </span>
        </label>
        {errors.dadosConsentimento && (
          <p className="text-xs text-red-600">{errors.dadosConsentimento}</p>
        )}
      </div>

      <p className="text-xs text-neutral-500">
        Suas informações serão utilizadas exclusivamente para contato sobre
        esta conversa.
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Enviando..." : "Quero conversar"}
      </button>
    </form>
  );
}
