# Hub E7 — Site institucional e comercial

Projeto Next.js (App Router, TypeScript, Tailwind CSS v4) construído a partir do
documento ASH-01 (Arquitetura Estratégica do Site Hub E7 — Rodada 2, v0.2).
Os documentos de referência (ASH-01 e DAE) estão em docs/. Consultá-los sempre
que precisar de detalhes de conteúdo, textos ou regras de negócio.

## Regra de ouro
Seguir exatamente a arquitetura fechada no ASH-01 v0.2. Menu final: Hub E7, Eventos,
NetWeaving™ | Acesse, Cases, Comunidade, Empresas. Checkout externo (nunca processar
pagamento no site). Sem banco de dados, autenticação, painel admin ou CMS nesta fase.

## Já feito
- Projeto criado (TypeScript, ESLint, Tailwind, src/, App Router)
- src/app/globals.css — tokens de cor (navy/gold/cream) e fontes configurados
- src/app/layout.tsx — fontes Cormorant Garamond (títulos) + Inter (corpo)
- src/app/page.tsx — placeholder temporário
- src/content/navigation.ts — menu e CTAs
- src/components/ui/Container.tsx — componente de moldura

## Próximo passo
Fase 2 (header, menu desktop/mobile, footer) conforme ASH-01 Seção 6 e 9.