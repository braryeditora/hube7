"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { whatsappHref } from "@/content/contact";

const inputClassName =
  "rounded-md border border-neutral-900/15 bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:border-gold-500";

const REQUIRED_MESSAGE = "Este campo é obrigatório.";
const RELATO_MIN_LENGTH = 20;

type FormState = {
  nome: string;
  relato: string;
  authDepoimento: boolean;
  authNome: boolean;
  authEmpresa: boolean;
  authImagens: boolean;
  observacoes: string;
  consentimento: boolean;
};

const initialState: FormState = {
  nome: "",
  relato: "",
  authDepoimento: false,
  authNome: false,
  authEmpresa: false,
  authImagens: false,
  observacoes: "",
  consentimento: false,
};

type FormErrors = Partial<Record<"nome" | "relato" | "consentimento", string>>;

function yesNo(value: boolean) {
  return value ? "sim" : "não";
}

function buildWhatsappMessage(form: FormState) {
  const lines = [
    "Olá, quero compartilhar minha história com o Hub E7.",
    `Nome: ${form.nome}`,
    `Relato: ${form.relato}`,
    `Autorizo publicar meu depoimento: ${yesNo(form.authDepoimento)}`,
    `Autorizo publicar meu nome: ${yesNo(form.authNome)}`,
    `Autorizo publicar o nome da minha empresa: ${yesNo(form.authEmpresa)}`,
    `Autorizo o uso de imagens: ${yesNo(form.authImagens)}`,
  ];

  if (form.observacoes.trim()) {
    lines.push(`Observações: ${form.observacoes.trim()}`);
  }

  return lines.join("\n");
}

export default function ShareStoryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");
  const consentId = useId();

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  // TODO: integrar este formulário ao CRM ou serviço de formulários
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    if (!form.nome.trim()) nextErrors.nome = REQUIRED_MESSAGE;
    if (!form.relato.trim()) {
      nextErrors.relato = REQUIRED_MESSAGE;
    } else if (form.relato.trim().length < RELATO_MIN_LENGTH) {
      nextErrors.relato =
        "Conte um pouco mais sobre como a conexão aconteceu e qual foi o resultado.";
    }
    if (!form.consentimento) {
      nextErrors.consentimento =
        "É necessário concordar com o tratamento dos dados para enviar o relato.";
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
            História recebida.
          </h3>
          <p className="text-sm leading-relaxed text-neutral-500">
            Obrigado por compartilhar o que aconteceu. Seu relato será
            analisado com cuidado e responsabilidade. Caso seja necessário
            confirmar alguma informação ou solicitar autorização
            complementar, a equipe poderá entrar em contato pelos dados
            informados.
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
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8 text-left">
      <div className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="Como podemos identificar você?"
          value={form.nome}
          onChange={(event) => update("nome", event.target.value)}
          className={inputClassName}
        />
        {errors.nome && <p className="text-xs text-red-600">{errors.nome}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-neutral-900">
          O que aconteceu?
        </label>
        <p className="text-xs text-neutral-500">
          Conte resumidamente como a conexão começou e qual foi o resultado.
        </p>
        <textarea
          rows={4}
          placeholder="Exemplo: conheci uma pessoa durante um encontro, continuamos a conversa e essa aproximação contribuiu para..."
          value={form.relato}
          onChange={(event) => update("relato", event.target.value)}
          className={inputClassName}
        />
        {errors.relato && <p className="text-xs text-red-600">{errors.relato}</p>}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-medium text-neutral-900">
            O que você autoriza compartilhar?
          </h4>
          <p className="text-xs text-neutral-500">
            Marque o que você autoriza publicar, caso este relato seja
            selecionado para os Cases. Você pode autorizar tudo, parte ou
            nada. A escolha é sua.
          </p>
        </div>

        <label className="flex items-start gap-2 text-sm text-neutral-700">
          <input
            type="checkbox"
            className="mt-1"
            checked={form.authDepoimento}
            onChange={(event) => update("authDepoimento", event.target.checked)}
          />
          Autorizo publicar meu depoimento, incluindo o texto do relato.
        </label>
        <label className="flex items-start gap-2 text-sm text-neutral-700">
          <input
            type="checkbox"
            className="mt-1"
            checked={form.authNome}
            onChange={(event) => update("authNome", event.target.checked)}
          />
          Autorizo publicar meu nome.
        </label>
        <label className="flex items-start gap-2 text-sm text-neutral-700">
          <input
            type="checkbox"
            className="mt-1"
            checked={form.authEmpresa}
            onChange={(event) => update("authEmpresa", event.target.checked)}
          />
          Autorizo publicar o nome da minha empresa.
        </label>
        <label className="flex items-start gap-2 text-sm text-neutral-700">
          <input
            type="checkbox"
            className="mt-1"
            checked={form.authImagens}
            onChange={(event) => update("authImagens", event.target.checked)}
          />
          Autorizo o uso de imagens minhas relacionadas a este relato.
        </label>

        <p className="text-xs leading-relaxed text-neutral-500">
          Autorizar seu nome ou o nome da sua empresa é o que permite que
          essa visibilidade aconteça. Sem essa autorização, seu relato
          poderá ser utilizado apenas de forma anônima ou agregada,
          respeitando as demais escolhas feitas neste formulário.
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-neutral-900">
          Alguma restrição específica?
        </label>
        <p className="text-xs text-neutral-500">
          Se houver algo que você prefere manter fora da publicação, mesmo
          tendo autorizado o restante, descreva aqui.
        </p>
        <textarea
          rows={3}
          placeholder="Exemplo: pode compartilhar meu depoimento e meu nome, mas não quero que meu WhatsApp seja divulgado."
          value={form.observacoes}
          onChange={(event) => update("observacoes", event.target.value)}
          className={inputClassName}
        />
      </div>

      <p className="text-xs leading-relaxed text-neutral-500">
        Nenhuma autorização de publicação é obrigatória para registrar sua
        história. O envio do relato não significa publicação automática.
        Antes de qualquer divulgação, as informações poderão ser verificadas
        e tratadas com responsabilidade editorial. Caso seja necessário
        esclarecer limites, confirmar dados ou solicitar autorização
        complementar, a equipe poderá entrar em contato.
      </p>

      <div className="flex flex-col gap-1">
        <label htmlFor={consentId} className="flex items-start gap-2 text-xs text-neutral-500">
          <input
            id={consentId}
            type="checkbox"
            className="mt-1"
            checked={form.consentimento}
            onChange={(event) => update("consentimento", event.target.checked)}
          />
          <span>
            Concordo com o tratamento dos meus dados para registro, análise
            e eventual contato relacionado a este relato.{" "}
            <Link href="/privacidade" className="underline hover:text-gold-500">
              Consultar Política de Privacidade
            </Link>
            .
          </span>
        </label>
        {errors.consentimento && (
          <p className="text-xs text-red-600">{errors.consentimento}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Enviando..." : "Registrar minha história"}
      </button>
    </form>
  );
}
