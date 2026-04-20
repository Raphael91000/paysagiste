import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const strengths = [
  "Accompagnement personnalisé de A à Z, de l'esquisse à la livraison",
  "Matériaux locaux et plantes adaptées au climat de votre région",
  "Respect des délais et transparence totale sur les devis",
];

export default function APropos() {
  return (
    <section
      id="a-propos"
      className="section-padding bg-forest"
      aria-label="À propos de Cribos Elagage"
    >
      <div className="container-brand">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ─── Photo ─── */}
          <AnimatedSection direction="left" className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden max-w-md mx-auto lg:mx-0">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80"
                alt="Portrait du paysagiste fondateur de Cribos Elagage"
                fill
                className="object-cover saturate-[0.85] brightness-90"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
              {/* Cadre décoratif doré */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-gold/30 pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Badge expérience flottant */}
            <div className="absolute -bottom-2 left-4 lg:-left-6 glassmorphism px-6 py-4 max-w-[200px]">
              <p className="font-fraunces text-3xl text-gold leading-none">15</p>
              <p className="text-sage text-xs mt-0.5 leading-snug">
                années de passion <br />& de savoir-faire
              </p>
            </div>
          </AnimatedSection>

          {/* ─── Texte ─── */}
          <AnimatedSection delay={0.15} className="flex flex-col gap-6">
            <span className="text-gold text-xs font-medium uppercase tracking-widest">
              Notre histoire
            </span>
            <h2 className="text-cream">
              Une passion transmise de père en fils
            </h2>
            <span className="gold-line" aria-hidden="true" />

            <div className="flex flex-col gap-4 text-sage leading-relaxed">
              <p>
                Tout a commencé dans le jardin familial, à observer mon père
                tailler les rosiers et aménager les allées avec une précision
                d&apos;horloger. Ce goût pour l&apos;espace bien ordonné, pour
                le végétal maîtrisé sans jamais le brimer, je l&apos;ai
                hérité naturellement.
              </p>
              <p>
                Depuis 2008, Cribos Elagage accompagne des centaines de
                familles et d&apos;entreprises de la région Carnetin dans la
                création et l&apos;entretien de leurs espaces verts. Notre
                équipe de cinq paysagistes partage la même conviction : un
                beau jardin, c&apos;est avant tout un jardin qui vous
                ressemble.
              </p>
              <p>
                Certifiés RGE et membres de l&apos;Union Nationale des
                Entrepreneurs du Paysage, nous nous engageons sur la qualité
                de chaque prestation, des plus modestes aux plus ambitieuses.
              </p>
            </div>

            {/* Points forts */}
            <ul className="flex flex-col gap-3 mt-2" role="list">
              {strengths.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-gold shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-cream text-sm leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Signature */}
            <p
              className="font-caveat text-3xl text-gold mt-4"
              aria-label="Signature : Jean-Pierre Martin, fondateur"
            >
              Jean-Pierre Martin
            </p>
            <p className="text-sage text-xs -mt-3">Fondateur, Cribos Elagage</p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
