"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Intervenez-vous uniquement sur Carnetin ou dans toute la région ?",
    answer:
      "Nous intervenons dans un rayon de 50 km autour de Carnetin, ce qui couvre la grande majorité des communes de la région. N'hésitez pas à nous contacter pour vérifier si votre adresse est dans notre zone — dans le doute, la visite initiale est toujours gratuite.",
  },
  {
    question: "Combien coûte une intervention ? Y a-t-il un minimum de facturation ?",
    answer:
      "Chaque projet étant unique, nous établissons un devis personnalisé après la visite gratuite. Nous n'avons pas de minimum de facturation strict, mais pour des interventions ponctuelles inférieures à une demi-journée, un forfait de déplacement s'applique. Tous nos tarifs sont détaillés dans le devis avant tout engagement.",
  },
  {
    question: "Proposez-vous des contrats d'entretien annuels ?",
    answer:
      "Oui, c'est même notre formule la plus populaire. Un contrat d'entretien annuel vous garantit des passages programmés aux meilleures périodes de l'année (taille, engrais, traitement, désherbage…), un tarif préférentiel et la priorité en cas d'urgence. Nous établissons ensemble un programme personnalisé selon votre jardin.",
  },
  {
    question: "Êtes-vous certifiés ou assurés ?",
    answer:
      "Absolument. Cribos Elagage est membre de l'UNEP (Union Nationale des Entrepreneurs du Paysage), certifié RGE (Reconnu Garant de l'Environnement) et dispose d'une assurance décennale ainsi qu'une responsabilité civile professionnelle à jour. Nous pouvons vous fournir toutes les attestations sur simple demande.",
  },
  {
    question: "Quel délai faut-il prévoir entre la demande et le début des travaux ?",
    answer:
      "En moyenne, comptez 2 à 3 semaines entre votre prise de contact et la visite de chantier, selon la période. Pour des projets de grande ampleur (création complète), le délai de planification peut aller jusqu'à 6 semaines. En revanche, pour de l'entretien courant, nous pouvons souvent intervenir dans la semaine.",
  },
  {
    question: "Est-ce que je dois être présent pendant les travaux ?",
    answer:
      "Ce n'est pas obligatoire pour la plupart des interventions d'entretien, à condition que nous ayons accès au jardin. En revanche, nous vous recommandons vivement d'être disponible au démarrage et à la fin d'un chantier de création, pour que vous puissiez valider les choix avec notre chef d'équipe.",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function FAQAccordion({ faq, index }: { faq: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: EASE }}
    >
      <div
        className="border-b border-forest-border/60 last:border-b-0"
      >
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-start justify-between gap-4 py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf/50 rounded"
          aria-expanded={open}
        >
          <span
            className={`font-fraunces text-base md:text-lg leading-snug transition-colors duration-200 ${
              open ? "text-leaf" : "text-cream group-hover:text-leaf"
            }`}
          >
            {faq.question}
          </span>

          <span
            className="shrink-0 mt-0.5 flex items-center justify-center w-7 h-7 border border-forest-border/80 rounded-sm transition-colors duration-200 group-hover:border-leaf/40"
            style={{ borderRadius: "6px" }}
            aria-hidden="true"
          >
            {open ? (
              <Minus size={13} className="text-leaf" />
            ) : (
              <Plus size={13} className="text-sage group-hover:text-leaf transition-colors duration-200" />
            )}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="overflow-hidden"
            >
              <p className="text-sage text-sm leading-relaxed pb-5 max-w-2xl">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.2 });

  return (
    <section
      id="faq"
      className="relative section-padding overflow-hidden"
      style={{ background: "#243D2A" }}
      aria-label="Foire aux questions"
    >

      <div className="container-brand relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          {/* ── Colonne titre ── */}
          <div ref={headerRef} className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <span className="text-leaf text-xs uppercase tracking-[0.22em]">
                  Questions fréquentes
                </span>
              </div>
              <h2
                className="font-fraunces text-cream leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                Vous vous<br />
                posez des<br />
                <em className="not-italic text-leaf">questions&nbsp;?</em>
              </h2>
              <p className="text-sage text-sm leading-relaxed">
                Voici les réponses aux questions les plus courantes. Vous ne
                trouvez pas ce que vous cherchez&nbsp;? Appelez-nous directement.
              </p>
              <a
                href="tel:+33611660329"
                className="inline-flex items-center gap-2 text-cream text-sm mt-2 hover:text-leaf transition-colors duration-200"
              >
                <span className="text-leaf">→</span>
                06 11 66 03 29
              </a>
            </motion.div>
          </div>

          {/* ── Accordéon ── */}
          <div>
            {faqs.map((faq, i) => (
              <FAQAccordion key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
