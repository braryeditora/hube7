export const whatsappNumber = "5521980239814";

export function whatsappHref(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Numero pessoal de Orlando Carvalho — uso EXCLUSIVO do formulario de
// Diagnostico Empresarial em /netweaving-acesse, por acordo operacional
// entre Orlando e Sheyla Santos. Nao reutilizar em outros formularios ou
// botoes do site: todo o restante do site usa whatsappNumber/whatsappHref.
export const whatsappNumberOrlando = "5521983461734";

export function whatsappHrefOrlando(message: string) {
  return `https://wa.me/${whatsappNumberOrlando}?text=${encodeURIComponent(message)}`;
}
