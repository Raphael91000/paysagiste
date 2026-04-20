"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, HardHat } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: Phone,
    title: "Premier contact",
    description:
      "Vous nous appelez ou soumettez votre demande en ligne. Nous revenons vers vous sous 24 heures pour qualifier votre projet et convenir d'un rendez-vous.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Visite sur site",
    description:
      "Nous nous déplaçons gratuitement chez vous pour évaluer le terrain, comprendre vos attentes et vous remettre un devis détaillé, chiffré et sans engagement.",
  },
  {
    number: "03",
    icon: HardHat,
    title: "Réalisation",
    description:
      "Une fois le projet validé, nos équipes interviennent aux dates convenues. Nous vous tenons informé à chaque étape jusqu'à la livraison et la réception du chantier.",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Approche() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.2 });

  return (
    <section
      id="approche"
      className="relative section-padding overflow-hidden"
      style={{ background: "#1F3828" }}
      aria-label="Notre approche des travaux"
    >

      <div className="container-brand relative z-10">

        {/* ── Header ── */}
        <div ref={headerRef} className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col gap-3 max-w-xl"
          >
            <div className="flex items-center gap-4">
              <span className="text-leaf text-xs uppercase tracking-[0.22em]">
                Concrètement
              </span>
              <span className="h-px w-16 bg-leaf/30" aria-hidden="true" />
            </div>
            <h2
              className="font-fraunces text-cream leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
            >
              Comment ça<br />
              <em className="not-italic text-leaf">se passe&nbsp;?</em>
            </h2>
            <p className="text-sage text-sm leading-relaxed max-w-md mt-2">
              Trois étapes simples, un interlocuteur unique, aucune mauvaise
              surprise — du premier appel à la livraison du chantier.
            </p>
          </motion.div>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                className="relative flex flex-col gap-5 p-7"
                style={{
                  background: "#243D2A",
                  borderRadius: "12px",
                  minHeight: 260,
                }}
                role="article"
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.35)", backgroundColor: "#2D4A33" }}
              >
                {/* Icône + numéro */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-8 h-8 flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(168,201,127,0.12)",
                      borderRadius: "6px",
                    }}
                  >
                    <Icon size={16} className="text-leaf" aria-hidden="true" />
                  </div>
                  <span
                    className="font-fraunces text-leaf/60 leading-none select-none"
                    style={{ fontSize: "2.5rem" }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="text-cream text-lg font-fraunces leading-snug">
                  {step.title}
                </h3>

                <p className="text-sage text-sm leading-relaxed flex-1">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
