"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

interface Realisation {
  src: string;
  alt: string;
  title: string;
  /** Classes grid pour l'effet asymétrique */
  gridClass: string;
  aspectClass: string;
}

const realisations: Realisation[] = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Jardin contemporain avec terrasse en bois et bassin",
    title: "Jardin contemporain — Sotteville-lès-Rouen",
    gridClass: "col-span-1 row-span-2",
    aspectClass: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=800&q=80",
    alt: "Potager structuré avec allées en pierre naturelle",
    title: "Potager de charme — Sotteville-lès-Rouen",
    gridClass: "col-span-1 row-span-1",
    aspectClass: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    alt: "Massif de vivaces aux couleurs naturelles",
    title: "Massif de vivaces — Sotteville-lès-Rouen",
    gridClass: "col-span-1 row-span-1",
    aspectClass: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    alt: "Terrasse en bois avec pergola et plantes grimpantes",
    title: "Terrasse & pergola — Sotteville-lès-Rouen",
    gridClass: "col-span-1 row-span-1",
    aspectClass: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1599685315640-4a3c7bbed5cd?w=800&q=80",
    alt: "Haie taillée en ifs et buis encadrant une pelouse anglaise",
    title: "Haie et pelouse — Sotteville-lès-Rouen",
    gridClass: "col-span-1 row-span-1",
    aspectClass: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    alt: "Jardin naturel avec arbres de hautes tiges",
    title: "Jardin naturel — Sotteville-lès-Rouen",
    gridClass: "col-span-1 row-span-2",
    aspectClass: "aspect-[3/4]",
  },
];

export default function Realisations() {
  return (
    <section
      id="realisations"
      className="section-padding bg-forest-card"
      aria-label="Nos réalisations"
    >
      <div className="container-brand">
        {/* En-tête */}
        <AnimatedSection className="flex flex-col gap-4 mb-14 max-w-xl">
          <span className="text-gold text-xs font-medium uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-cream">Nos réalisations</h2>
          <p className="text-sage leading-relaxed">
            Chaque jardin est unique. Voici quelques-uns des espaces que nous
            avons eu la chance de concevoir et d&apos;entretenir pour nos
            clients.
          </p>
          <span className="gold-line mt-1" aria-hidden="true" />
        </AnimatedSection>

        {/* Grille asymétrique */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto lg:grid-rows-2 gap-4 auto-rows-auto">
          {realisations.map((item, i) => (
            <AnimatedSection
              key={item.title}
              delay={i * 0.06}
              className={cn("group relative overflow-hidden rounded-2xl", item.gridClass)}
            >
              <div className={cn("relative w-full", item.aspectClass)}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/70 transition-colors duration-300 flex items-end p-6">
                  <p className="text-cream font-fraunces text-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {item.title}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA bas */}
        <AnimatedSection className="flex justify-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-gold/60 text-gold text-sm font-medium rounded-full hover:bg-gold/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Voir toutes nos réalisations
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
