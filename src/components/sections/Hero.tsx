"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen overflow-hidden bg-forest flex items-center"
      style={{ paddingTop: "80px" }}
      aria-label="Accueil"
    >

      <div className="relative z-10 container-brand w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-80px)] -mt-16">

          {/* ── Colonne gauche : texte + CTA ── */}
          <div className="flex flex-col gap-7">

            {/* Badge */}
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-leaf">
                <span className="w-8 h-px bg-leaf/50" aria-hidden="true" />
                Élagueur — Sotteville-lès-Rouen
              </span>
            </motion.div>

            {/* H1 */}
            <motion.div {...fadeUp(0.2)} className="flex flex-col gap-1">
              <h1
                className="font-fraunces text-cream leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)" }}
              >
                L&apos;art de<br />sublimer
              </h1>
              <h1
                className="font-fraunces leading-[0.9] tracking-tight"
                style={{
                  fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)",
                  color: "#A8C97F",
                }}
              >
                vos extérieurs
              </h1>
            </motion.div>

            {/* Sous-titre */}
            <motion.p
              {...fadeUp(0.3)}
              className="text-sage text-base leading-relaxed max-w-md"
            >
              Création, entretien et aménagement de jardins d&apos;exception
              à Sotteville-lès-Rouen. Un savoir-faire artisanal au service de votre nature,
              depuis plus de 15 ans.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-cream text-forest text-sm font-semibold hover:bg-leaf transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
                style={{ borderRadius: "8px" }}
              >
                Demander un devis
                <ArrowRight size={15} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-6 py-3.5 border border-cream/25 text-cream text-sm hover:border-leaf/50 hover:text-leaf transition-colors duration-200"
                style={{ borderRadius: "8px" }}
              >
                Nos services
              </a>
            </motion.div>

            {/* Téléphone + badge Google */}
            <motion.div {...fadeUp(0.5)} className="flex flex-col gap-3">
              <a
                href="tel:+33752209488"
                className="inline-flex items-center gap-2.5 text-sage hover:text-cream transition-colors duration-200 text-sm w-fit"
                aria-label="Appelez-nous"
              >
                <span
                  className="flex items-center justify-center w-8 h-8"
                  style={{
                    border: "1px solid rgba(168,201,127,0.25)",
                    borderRadius: "8px",
                  }}
                >
                  <Phone size={13} className="text-leaf" />
                </span>
                07 52 20 94 88 — Lun. au ven. 8h–21h
              </a>

              {/* Badge Google */}
              <div className="inline-flex items-center gap-2.5 w-fit">
                <div className="flex gap-0.5" aria-label="Note 5,0 sur 5" role="img">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className="text-gold fill-gold" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-sage/80 text-xs">5,0 / 5 · Google</span>
                <span className="text-sage/30 text-xs">·</span>
                <span className="text-sage/80 text-xs">28 avis</span>
              </div>
            </motion.div>
          </div>

          {/* ── Colonne droite : image + badges ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="flex flex-col gap-4" style={{ maxWidth: 380, width: "100%" }}>

              {/* Card + badges desktop */}
              <div className="relative">

                {/* Image */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "3/4", borderRadius: "16px" }}
                >
                  <Image
                    src="/ok.jpeg"
                    alt="Jardin d'exception créé par MTC Elagueur"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 380px"
                    priority
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(26,46,31,0.55) 100%)" }}
                    aria-hidden="true"
                  />
                </div>

                {/* Badge haut-gauche — desktop uniquement */}
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9, ease: EASE }}
                  className="hidden lg:block absolute top-8 left-0 -translate-x-1/2 px-4 py-2.5"
                  style={{
                    background: "rgba(11, 28, 16, 0.88)",
                    backdropFilter: "blur(14px)",
                    borderRadius: "10px",
                  }}
                >
                  <p className="font-fraunces text-2xl text-leaf leading-none">150+</p>
                  <p className="text-sage text-xs mt-0.5">jardins réalisés</p>
                </motion.div>

                {/* Badge bas-droite — desktop uniquement */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1, ease: EASE }}
                  className="hidden lg:block absolute bottom-8 right-0 translate-x-1/2 px-4 py-2.5 text-right"
                  style={{
                    background: "rgba(11, 28, 16, 0.88)",
                    backdropFilter: "blur(14px)",
                    borderRadius: "10px",
                  }}
                >
                  <p className="font-fraunces text-2xl text-cream leading-none">98 %</p>
                  <p className="text-sage text-xs mt-0.5">clients satisfaits</p>
                </motion.div>

              </div>

              {/* Badges mobile — en dessous de la card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9, ease: EASE }}
                className="flex lg:hidden gap-3"
              >
                <div
                  className="flex-1 px-4 py-2.5 text-center"
                  style={{
                    background: "rgba(11, 28, 16, 0.88)",
                    backdropFilter: "blur(14px)",
                    borderRadius: "10px",
                  }}
                >
                  <p className="font-fraunces text-2xl text-leaf leading-none">150+</p>
                  <p className="text-sage text-xs mt-0.5">jardins réalisés</p>
                </div>
                <div
                  className="flex-1 px-4 py-2.5 text-center"
                  style={{
                    background: "rgba(11, 28, 16, 0.88)",
                    backdropFilter: "blur(14px)",
                    borderRadius: "10px",
                  }}
                >
                  <p className="font-fraunces text-2xl text-leaf leading-none">98 %</p>
                  <p className="text-sage text-xs mt-0.5">clients satisfaits</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
