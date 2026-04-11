"use client";

import {
  Sprout,
  Scissors,
  TreeDeciduous,
  Layers,
  Droplets,
  Lightbulb,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
}

const services: Service[] = [
  {
    icon: Sprout,
    title: "Création de jardins",
    description:
      "De la conception à la réalisation, nous imaginons des jardins sur mesure qui reflètent votre personnalité et s'harmonisent avec votre demeure.",
    slug: "creation",
  },
  {
    icon: Scissors,
    title: "Entretien & maintenance",
    description:
      "Nos équipes assurent un suivi rigoureux, saison après saison, pour que votre jardin reste au sommet de sa beauté toute l'année.",
    slug: "entretien",
  },
  {
    icon: TreeDeciduous,
    title: "Élagage & taille",
    description:
      "Taille en formation, élagage sanitaire — nous intervenons sur vos arbres et arbustes avec des techniques respectueuses du végétal.",
    slug: "elagage",
  },
  {
    icon: Droplets,
    title: "Arrosage automatique",
    description:
      "Systèmes intelligents qui réduisent votre consommation d'eau jusqu'à 40 % tout en gardant votre jardin florissant.",
    slug: "arrosage",
  },
  {
    icon: Layers,
    title: "Terrasses & allées",
    description:
      "Dallage, pavage, bois composite — des espaces de vie durables qui prolongent votre intérieur vers l'extérieur.",
    slug: "terrasses",
  },
  {
    icon: Lightbulb,
    title: "Éclairage extérieur",
    description:
      "Sublimez vos plus beaux spécimens après le coucher du soleil avec nos solutions basse consommation sur mesure.",
    slug: "eclairage",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function CardItem({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay: index * 0.07, ease: EASE }}
      className="relative flex flex-col gap-5 p-7 cursor-default"
      style={{
        background: "#243D2A",
        borderRadius: "12px",
        minHeight: 260,
      }}
      role="article"
      aria-label={service.title}
      whileHover={{ backgroundColor: "#2D4A33", y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.35)" }}
      transition={{ duration: 0.25 }}
    >
      {/* Numéro fantôme */}
      <span
        className="absolute bottom-4 right-5 font-fraunces leading-none select-none pointer-events-none"
        style={{ fontSize: "5rem", color: "rgba(168, 201, 127, 0.35)" }}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icône */}
      <div
        className="w-9 h-9 flex items-center justify-center shrink-0"
        style={{ background: "rgba(168,201,127,0.12)", borderRadius: "8px" }}
      >
        <Icon size={18} className="text-leaf" aria-hidden="true" />
      </div>

      <h3 className="text-cream text-lg font-fraunces leading-snug">
        {service.title}
      </h3>

      <p className="text-sage text-sm leading-relaxed flex-1">
        {service.description}
      </p>

      <a
        href={`#${service.slug}`}
        className="inline-flex items-center gap-1.5 text-leaf/60 text-xs uppercase tracking-widest hover:text-leaf transition-colors duration-200 mt-auto focus-visible:outline-none focus-visible:underline"
        aria-label={`En savoir plus sur ${service.title}`}
      >
        Découvrir →
      </a>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.15 });

  return (
    <section
      id="services"
      className="relative section-padding overflow-hidden"
      style={{ background: "#162618" }}
      aria-label="Nos services"
    >
      <div className="container-brand relative z-10">

        <div ref={headerRef} className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center gap-4">
              <span className="text-leaf text-xs uppercase tracking-[0.22em]">Expertises</span>
              <span className="h-px w-16 bg-leaf/30" aria-hidden="true" />
              <span className="text-sage/50 text-xs">06 services</span>
            </div>
            <h2
              className="font-fraunces text-cream leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
            >
              Six façons de<br />
              <em className="not-italic text-leaf">sublimer</em> votre nature
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <CardItem key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
