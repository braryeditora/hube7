export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Hub E7", href: "/hub-e7" },
  { label: "Eventos", href: "/eventos" },
  { label: "Acessos", href: "/acessos" },
  { label: "NetWeaving™ | Acesse", href: "/netweaving-acesse" },
  { label: "Cases", href: "/cases" },
  { label: "Comunidade", href: "/comunidade" },
  { label: "Empresas", href: "/empresas" },
];

export const headerCtas = {
  primary: { label: "Próximo Evento", href: "/eventos" },
  secondary: { label: "Quero Acessar", href: "/netweaving-acesse" },
};

export const footerNav: NavItem[] = [
  { label: "Gratidão", href: "/gratidao" },
  { label: "Contato", href: "/contato" },
  { label: "Política de Privacidade", href: "/privacidade" },
  { label: "Termos", href: "/termos" },
];
