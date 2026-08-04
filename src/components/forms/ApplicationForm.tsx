"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { whatsappHref } from "@/content/contact";

const inputClassName =
  "rounded-md border border-neutral-900/15 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:border-gold-500";

const REQUIRED_MESSAGE = "Este campo é obrigatório.";

type FormState = {
  nomeCompleto: string;
  empresa: string;
  site: string;
  oferta: string;
  desafio: string;
  conexao: string;
  tentativas: string;
  resultado: string;
  disposicao: string;
  whatsapp: string;
  email: string;
  observacoes: string;
  gravacaoConsentimento: boolean;
  dadosConsentimento: boolean;
};

const initialState: FormState = {
  nomeCompleto: "",
  empresa: "",
  site: "",
  oferta: "",
  desafio: "",
  conexao: "",
  tentativas: "",
  resultado: "",
  disposicao: "",
  whatsapp: "",
  email: "",
  observacoes: "",
  gravacaoConsentimento: false,
  dadosConsentimento: false,
};

type RequiredTextField =
  | "nomeCompleto"
  | "empresa"
  | "site"
  | "oferta"
  | "desafio"
  | "conexao"
  | "tentativas"
  | "resultado"
  | "disposicao"
  | "whatsapp"
  | "email"
  | "observacoes";

type FormErrors = Partial<Record<RequiredTextField | "gravacaoConsentimento" | "dadosConsentimento", string>>;

function yesNo(value: boolean) {
  return value ? "sim" : "não";
}

function buildWhatsappMessage(form: FormState) {
  return [
    "Olá, quero me candidatar à seleção do NetWeaving™ | Direção Empresarial.",
    `Nome completo: ${form.nomeCompleto}`,
    `Empresa ou atividade: ${form.empresa}`,
    `Site ou Instagram: ${form.site}`,
    `O que a empresa oferece atualmente: ${form.oferta}`,
    `Principal desafio do negócio: ${form.desafio}`,
    `Tipo de oportunidade ou conexão buscada: ${form.conexao}`,
    `O que já tentou até aqui: ${form.tentativas}`,
    `Resultado que tornaria a experiência relevante: ${form.resultado}`,
    `Disposto a executar os direcionamentos recebidos: ${form.disposicao}`,
    `WhatsApp: ${form.whatsapp}`,
    `E-mail: ${form.email}`,
    `Observações: ${form.observacoes}`,
    `Ciente da gravação dos encontros: ${yesNo(form.gravacaoConsentimento)}`,
  ].join("\n");
}

export default function ApplicationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");
  const dadosConsentId = useId();
  const gravacaoConsentId = useId();

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  // TODO: integrar este formulário ao CRM ou serviço de formulários
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const requiredTextFields: RequiredTextField[] = [
      "nomeCompleto",
      "empresa",
      "site",
      "oferta",
      "desafio",
      "conexao",
      "tentativas",
      "resultado",
      "disposicao",
      "whatsapp",
      "email",
      "observacoes",
    ];

    const nextErrors: FormErrors = {};
    for (const field of requiredTextFields) {
      if (!form[field].trim()) nextErrors[field] = REQUIRED_MESSAGE;
    }
    if (!form.gravacaoConsentimento) {
      nextErrors.gravacaoConsentimento = REQUIRED_MESSAGE;
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
            Aplicação recebida.
          </h3>
          <p className="text-sm leading-relaxed text-neutral-500">
            Obrigado por se candidatar à primeira edição do NetWeaving™ |
            Direção Empresarial. Sua aplicação será analisada com cuidado.
            Caso haja aderência, a equipe entrará em contato pelos dados
            informados para a conversa de alinhamento.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 rounded-md border border-gold-500/30 px-6 py-6">
          <p className="text-sm text-neutral-500">
            Formulário em fase de integração. Para atendimento imediato,
            utilize o WhatsApp.
          </p>
          <a
            href={whatsappHref(buildWhatsappMessage(form))}
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
        <label className="text-sm font-medium text-neutral-900">Site ou Instagram</label>
        <input
          type="text"
          value={form.site}
          onChange={(event) => update("site", event.target.value)}
          className={inputClassName}
        />
        {errors.site && <p className="text-xs text-red-600">{errors.site}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-neutral-900">
          O que sua empresa oferece atualmente?
        </label>
        <textarea
          rows={3}
          value={form.oferta}
          onChange={(event) => update("oferta", event.target.value)}
          className={inputClassName}
        />
        {errors.oferta && <p className="text-xs text-red-600">{errors.oferta}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-neutral-900">
          Qual é o principal desafio do negócio?
        </label>
        <textarea
          rows={3}
          value={form.desafio}
          onChange={(event) => update("desafio", event.target.value)}
          className={inputClassName}
        />
        {errors.desafio && <p className="text-xs text-red-600">{errors.desafio}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-neutral-900">
          Que tipo de oportunidade ou conexão você acredita precisar?
        </label>
        <textarea
          rows={3}
          value={form.conexao}
          onChange={(event) => update("conexao", event.target.value)}
          className={inputClassName}
        />
        {errors.conexao && <p className="text-xs text-red-600">{errors.conexao}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-neutral-900">
          O que já tentou até aqui?
        </label>
        <textarea
          rows={3}
          value={form.tentativas}
          onChange={(event) => update("tentativas", event.target.value)}
          className={inputClassName}
        />
        {errors.tentativas && <p className="text-xs text-red-600">{errors.tentativas}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-neutral-900">
          Qual resultado tornaria esta experiência relevante?
        </label>
        <textarea
          rows={3}
          value={form.resultado}
          onChange={(event) => update("resultado", event.target.value)}
          className={inputClassName}
        />
        {errors.resultado && <p className="text-xs text-red-600">{errors.resultado}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-neutral-900">
          Você está disposto a executar os direcionamentos recebidos?
        </label>
        <select
          value={form.disposicao}
          onChange={(event) => update("disposicao", event.target.value)}
          className={inputClassName}
        >
          <option value="">Selecione</option>
          <option value="Sim">Sim</option>
          <option value="Não">Não</option>
        </select>
        {errors.disposicao && <p className="text-xs text-red-600">{errors.disposicao}</p>}
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
        <label className="text-sm font-medium text-neutral-900">Observações</label>
        <textarea
          rows={3}
          value={form.observacoes}
          onChange={(event) => update("observacoes", event.target.value)}
          className={inputClassName}
        />
        {errors.observacoes && <p className="text-xs text-red-600">{errors.observacoes}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor={gravacaoConsentId} className="flex items-start gap-2 text-xs text-neutral-500">
          <input
            id={gravacaoConsentId}
            type="checkbox"
            className="mt-1"
            checked={form.gravacaoConsentimento}
            onChange={(event) => update("gravacaoConsentimento", event.target.checked)}
          />
          <span>
            Estou ciente de que os encontros em grupo serão gravados e podem
            conter minha imagem, fala e informações da minha empresa.
          </span>
        </label>
        {errors.gravacaoConsentimento && (
          <p className="text-xs text-red-600">{errors.gravacaoConsentimento}</p>
        )}
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
            Concordo com o tratamento dos meus dados para análise desta
            aplicação e eventual contato relacionado a ela.{" "}
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
        Suas informações serão utilizadas exclusivamente para análise da
        aplicação e contato sobre o programa.
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Enviando..." : "Preencher aplicação"}
      </button>
    </form>
  );
}
