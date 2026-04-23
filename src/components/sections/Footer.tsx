import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const serviceLinks = [
  { label: "Création de jardins", href: "#creation" },
  { label: "Entretien & maintenance", href: "#entretien" },
  { label: "Élagage & taille", href: "#elagage" },
  { label: "Terrasses & allées", href: "#terrasses" },
  { label: "Arrosage automatique", href: "#arrosage" },
  { label: "Éclairage extérieur", href: "#eclairage" },
];

const horaires = [
  { jour: "Lundi – Vendredi", heure: "8h00 – 18h00" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: "#070F09" }}
      aria-label="Pied de page"
    >
      <div className="container-brand">
        {/* Grille 4 colonnes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-forest-border">
          {/* Colonne 1 : Logo + pitch */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <p className="font-fraunces text-2xl text-cream">
              Waeldo Elagueur
            </p>
            <p className="text-sage text-sm leading-relaxed">
              Élagage et entretien d&apos;arbres à Sotteville-lès-Rouen (76300). Intervention du
              lundi au vendredi de 8h à 18h.
            </p>
            <span className="gold-line" aria-hidden="true" />
            <p className="text-sage/80 text-xs">
              Membre de l&apos;UNEP · Certifié RGE
            </p>
          </div>

          {/* Colonne 2 : Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-cream text-sm font-semibold uppercase tracking-widest font-fraunces">
              Services
            </h3>
            <nav aria-label="Liens services">
              <ul className="flex flex-col gap-2.5" role="list">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sage text-sm hover:text-cream transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Colonne 3 : Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-cream text-sm font-semibold uppercase tracking-widest font-fraunces">
              Contact
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sage text-sm leading-snug">
                  4 Chem. de Halage<br />76300 Sotteville-lès-Rouen, France
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-gold shrink-0" aria-hidden="true" />
                <a
                  href="tel:+33644788596"
                  className="text-sage text-sm hover:text-cream transition-colors duration-200"
                >
                  06 44 78 85 96
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-gold shrink-0" aria-hidden="true" />
                <a
                  href="mailto:contact@jardins-co.fr"
                  className="text-sage text-sm hover:text-cream transition-colors duration-200"
                >
                  contact@jardins-co.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Horaires */}
          <div className="flex flex-col gap-4">
            <h3 className="text-cream text-sm font-semibold uppercase tracking-widest font-fraunces">
              Horaires
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {horaires.map((h) => (
                <li key={h.jour} className="flex items-center gap-2">
                  <Clock size={12} className="text-gold shrink-0" aria-hidden="true" />
                  <div className="flex justify-between w-full gap-2">
                    <span className="text-sage text-xs">{h.jour}</span>
                    <span className="text-cream text-xs font-medium">{h.heure}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-sage/80 text-xs leading-relaxed mt-1">
              Intervention d&apos;urgence disponible pour les clients
              sous contrat d&apos;entretien.
            </p>
          </div>
        </div>

        {/* Ligne copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-sage/80 text-xs">
          <p>
            © {year} Waeldo Elagueur — Tous droits réservés
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-sage transition-colors duration-200">
              Mentions légales
            </a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:text-sage transition-colors duration-200">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
