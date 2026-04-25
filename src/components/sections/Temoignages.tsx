import { Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface Temoignage {
  nom: string;
  ville: string;
  initiales: string;
  citation: string;
}

const temoignages: Temoignage[] = [
  {
    nom: "Marie-Claire Fontaine",
    ville: "Sotteville-lès-Rouen",
    initiales: "MF",
    citation:
      "MTC Elagueur a complètement transformé notre terrain en friche en un véritable écrin de verdure. Le résultat dépasse toutes nos espérances. L'équipe est sérieuse, créative et à l'écoute — nous les recommandons chaleureusement.",
  },
  {
    nom: "Thomas & Isabelle Moreau",
    ville: "Sotteville-lès-Rouen",
    initiales: "TM",
    citation:
      "Après plusieurs devis d'autres paysagistes, c'est MTC Elagueur qui nous a convaincus avec leur approche sur-mesure. Chaque détail a été pensé, des essences végétales choisies jusqu'à l'éclairage extérieur. Un travail remarquable.",
  },
  {
    nom: "Bertrand Lacombe",
    ville: "Sotteville-lès-Rouen",
    initiales: "BL",
    citation:
      "Cela fait maintenant trois ans que MTC Elagueur entretient notre parc. Ponctualité, professionnalisme et passion du métier : on ne pourrait pas rêver mieux. Notre jardin est une fierté au fil des saisons.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="Note : 5 étoiles sur 5" role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="text-gold fill-gold" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function Temoignages() {
  return (
    <section
      id="avis"
      className="section-padding"
      style={{ background: "#0D1C14" }}
      aria-label="Témoignages clients"
    >
      <div className="container-brand">
        {/* En-tête */}
        <AnimatedSection className="flex flex-col gap-4 mb-14 max-w-xl">
          <span className="text-gold text-xs font-medium uppercase tracking-widest">
            Ils nous font confiance
          </span>
          <h2 className="text-cream">Ce que disent nos clients</h2>
          <p className="text-sage leading-relaxed">
            Plus de 150 familles et entreprises de la région nous ont fait
            confiance. Voici quelques-uns de leurs retours.
          </p>
          <span className="gold-line mt-1" aria-hidden="true" />
        </AnimatedSection>

        {/* Grille desktop / scroll horizontal mobile */}
        <div className="flex gap-6 overflow-x-auto lg:overflow-x-visible lg:grid lg:grid-cols-3 pb-4 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory lg:snap-none">
          {temoignages.map((t, i) => (
            <AnimatedSection
              key={t.nom}
              delay={i * 0.1}
              className="shrink-0 w-[85vw] sm:w-[70vw] lg:w-auto snap-center"
            >
              <article
                className="relative p-8 h-full flex flex-col gap-5 overflow-hidden"
                style={{ background: "#1A2E1F", border: "1px solid rgba(58,82,64,0.6)", borderRadius: "12px" }}
                aria-label={`Témoignage de ${t.nom}`}
              >
                {/* Guillemet décoratif */}
                <span
                  className="absolute -top-4 -right-2 font-fraunces leading-none select-none pointer-events-none"
                  style={{ fontSize: "9rem", color: "rgba(168,201,127,0.07)", lineHeight: 1 }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                {/* Avatar + identité */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full bg-forest-elevated border border-forest-border flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <span className="font-fraunces text-sm text-gold">
                      {t.initiales}
                    </span>
                  </div>
                  <div>
                    <p className="text-cream text-sm font-semibold">{t.nom}</p>
                    <p className="text-sage text-xs">{t.ville}</p>
                  </div>
                </div>

                <Stars />

                {/* Citation */}
                <blockquote className="text-cream/90 text-sm font-fraunces italic leading-relaxed flex-1">
                  &ldquo;{t.citation}&rdquo;
                </blockquote>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
