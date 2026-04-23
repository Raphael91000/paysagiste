"use client";

import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Notre approche", href: "#approche" },
  { label: "Avis clients", href: "#avis" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-forest/95 backdrop-blur-md border-b border-forest-border shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container-brand">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#accueil"
            className="font-fraunces text-xl md:text-2xl text-cream tracking-wide hover:text-gold transition-colors duration-200"
            aria-label="Waeldo Elagueur — retour à l'accueil"
          >
            Waeldo Elagueur
          </a>

          {/* Nav desktop */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Navigation principale"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm transition-colors duration-200 relative group",
                    isActive ? "text-cream" : "text-sage hover:text-cream"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px transition-all duration-300",
                      isActive ? "w-full bg-leaf" : "w-0 bg-gold group-hover:w-full"
                    )}
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+33644788596"
              className="flex items-center gap-1.5 text-sm text-sage hover:text-cream transition-colors duration-200"
              aria-label="Appelez-nous"
            >
              <Phone size={14} />
              <span>06 44 78 85 96</span>
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-medium bg-gold text-forest rounded-full hover:bg-gold/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Devis gratuit
            </a>
          </div>

          {/* Burger mobile */}
          <Sheet>
            <SheetTrigger
              className="md:hidden p-2 text-cream hover:text-gold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
              aria-label="Ouvrir le menu"
            >
              <Menu size={24} />
            </SheetTrigger>

            <SheetContent
              side="right"
              showCloseButton
              className="w-full sm:w-80 bg-forest border-forest-border flex flex-col pt-16 px-8 gap-0"
            >
              {/* Logo dans le menu */}
              <p className="font-fraunces text-2xl text-cream mb-10">
                Waeldo Elagueur
              </p>

              {/* Liens nav */}
              <nav className="flex flex-col gap-1" aria-label="Menu mobile">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="text-lg text-sage hover:text-cream py-3 border-b border-forest-border/50 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>

              {/* CTA mobile */}
              <div className="mt-10 flex flex-col gap-3">
                <SheetClose asChild>
                  <a
                    href="#contact"
                    className="w-full py-3 text-center text-sm font-medium bg-gold text-forest rounded-full hover:bg-gold/90 transition-colors duration-200"
                  >
                    Devis gratuit
                  </a>
                </SheetClose>
                <a
                  href="tel:+33644788596"
                  className="flex items-center justify-center gap-2 text-sm text-sage hover:text-cream transition-colors duration-200"
                >
                  <Phone size={14} />
                  06 44 78 85 96
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
