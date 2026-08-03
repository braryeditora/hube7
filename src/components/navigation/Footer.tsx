import Link from "next/link";
import Container from "@/components/ui/Container";
import { mainNav, footerNav } from "@/content/navigation";
import { whatsappHref } from "@/content/contact";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-50">
      <Container>
        <div className="grid gap-12 py-16 sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col gap-3">
            <span className="font-serif text-2xl font-semibold tracking-tight">
              Hub E7
            </span>
            <p className="text-sm leading-relaxed text-cream-50/70">
              Tribo Alpha · Hub E7
              <br />
              Relacionamentos, serviço e preparação para oportunidades reais.
            </p>
          </div>

          <nav className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-cream-50/50">
              Navegação
            </span>
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-cream-50/80 transition-colors hover:text-gold-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-cream-50/50">
              Institucional
            </span>
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-cream-50/80 transition-colors hover:text-gold-400"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappHref("Olá, gostaria de falar com o Hub E7.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cream-50/80 transition-colors hover:text-gold-400"
            >
              WhatsApp
            </a>
          </nav>
        </div>

        <div className="border-t border-cream-50/10 py-6 text-center text-xs text-cream-50/50">
          © {new Date().getFullYear()} Hub E7 — Tribo Alpha. Estruturação de
          Capital Intelectual por Brary Editora.
        </div>
      </Container>
    </footer>
  );
}
