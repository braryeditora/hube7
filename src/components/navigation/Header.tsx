"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import MobileMenu from "@/components/navigation/MobileMenu";
import { mainNav, headerCtas } from "@/content/navigation";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold-500/25 bg-cream-50/95 shadow-sm backdrop-blur">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl font-semibold tracking-tight text-navy-950"
          >
            Hub E7
          </Link>

          <nav className="hidden lg:flex lg:items-center lg:gap-8">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-navy-900 transition-colors hover:text-gold-500"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Link
              href={headerCtas.secondary.href}
              className="rounded-full border border-navy-900 px-5 py-2 text-sm font-medium text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
            >
              {headerCtas.secondary.label}
            </Link>
            <Link
              href={headerCtas.primary.href}
              className="rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400"
            >
              {headerCtas.primary.label}
            </Link>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href={headerCtas.primary.href}
              className="rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400"
            >
              {headerCtas.primary.label}
            </Link>
            <button
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-navy-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}
