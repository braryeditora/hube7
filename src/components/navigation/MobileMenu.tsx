"use client";

import { useEffect } from "react";
import Link from "next/link";
import { mainNav, headerCtas } from "@/content/navigation";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
      className="fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col overflow-y-auto bg-cream-50 lg:hidden"
    >
      <nav className="flex flex-col gap-1 px-6 py-6">
        {mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="border-b border-navy-900/10 py-4 font-serif text-xl text-navy-950 transition-colors hover:text-gold-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
          >
            {item.label}
          </Link>
        ))}

        <Link
          href={headerCtas.secondary.href}
          onClick={onClose}
          className="mt-4 rounded-full border border-navy-900 px-5 py-3 text-center text-sm font-medium text-navy-900 transition-colors hover:bg-navy-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
        >
          {headerCtas.secondary.label}
        </Link>
      </nav>

      <div className="mt-auto px-6 py-6">
        <Link
          href={headerCtas.primary.href}
          onClick={onClose}
          className="block rounded-full bg-gold-500 px-5 py-4 text-center text-base font-semibold text-navy-950 shadow-sm transition-colors hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
        >
          {headerCtas.primary.label}
        </Link>
      </div>
    </div>
  );
}
