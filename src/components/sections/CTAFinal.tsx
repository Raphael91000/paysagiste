import { Phone, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function CTAFinal() {
  return (
    <section
      id="contact"
      className="relative section-padding overflow-hidden"
      aria-label="Demander un devis"
    >
      {/* Image de fond */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(26, 46, 31, 0.88)" }}
        aria-hidden="true"
      />

      {/* Contenu */}
      <div className="container-brand relative z-10">
        <AnimatedSection className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <span className="text-gold text-xs font-medium uppercase tracking-widest">
            Passez à l&apos;action
          </span>

          <h2 className="text-cream">
            Prêt à transformer votre extérieur&nbsp;?
          </h2>

          <p className="text-sage leading-relaxed max-w-lg">
            Que vous ayez un projet précis ou simplement une idée en tête,
            nous sommes là pour vous conseiller. Contactez-nous pour un devis
            gratuit, sans engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <a
              href="mailto:contact@jardins-co.fr"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-forest text-sm font-semibold rounded-full hover:bg-gold/90 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Demander un devis
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:+33644788596"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-cream/40 text-cream text-sm font-medium rounded-full hover:bg-cream/10 hover:border-cream/60 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/50"
            >
              <Phone size={16} />
              06 44 78 85 96
            </a>
          </div>

          <p className="text-sage/80 text-xs">
            Réponse sous 24h — Devis gratuit et sans engagement
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
