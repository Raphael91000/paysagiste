"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type FormState = "idle" | "sending" | "sent" | "error";


function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sage text-xs uppercase tracking-widest">
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<FormState>("idle");
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.15 });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simuler un envoi (à connecter à votre backend / Resend / Formspree)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  const inputBase: React.CSSProperties = {
    background: "rgba(36, 61, 42, 0.6)",
    border: "1px solid rgba(58, 82, 64, 0.8)",
    color: "#F5F1E8",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    width: "100%",
    outline: "none",
    borderRadius: "8px",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      className="relative section-padding overflow-hidden"
      style={{ background: "#111E16" }}
      aria-label="Formulaire de contact"
    >

      <div className="container-brand relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">

          {/* ── Infos contact ── */}
          <div ref={headerRef} className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <span className="text-leaf text-xs uppercase tracking-[0.22em]">
                  Parlons de votre projet
                </span>
              </div>
              <h2
                className="font-fraunces text-cream leading-[0.9] tracking-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                Prêt à<br />
                transformer<br />
                <em className="not-italic text-leaf">votre jardin&nbsp;?</em>
              </h2>
              <p className="text-sage text-sm leading-relaxed">
                Remplissez le formulaire ou contactez-nous directement. Réponse
                garantie sous 24h, devis gratuit et sans engagement.
              </p>
            </motion.div>

            {/* Coordonnées */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
              className="flex flex-col gap-4"
            >
              {[
                { icon: Phone, label: "Téléphone", value: "06 44 78 85 96", href: "tel:+33644788596" },
                { icon: Mail, label: "E-mail", value: "contact@jardins-co.fr", href: "mailto:contact@jardins-co.fr" },
                { icon: MapPin, label: "Adresse", value: "4 Chem. de Halage, 76300 Sotteville-lès-Rouen", href: undefined },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(168,201,127,0.1)",
                      border: "1px solid rgba(168,201,127,0.2)",
                      borderRadius: "8px",
                    }}
                  >
                    <Icon size={14} className="text-leaf" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sage text-xs uppercase tracking-widest">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-cream text-sm hover:text-leaf transition-colors duration-200"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-cream text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Horaires */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
              className="border-t border-forest-border/50 pt-6"
            >
              <p className="text-sage text-xs uppercase tracking-widest mb-3">Horaires</p>
              <div className="flex flex-col gap-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-sage">Lundi – Vendredi</span>
                  <span className="text-cream">8h – 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sage">Samedi – Dimanche</span>
                  <span className="text-sage/80">Fermé</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Formulaire ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            {status === "sent" ? (
              /* Message de confirmation */
              <div
                className="flex flex-col items-center justify-center gap-5 py-16 text-center"
                style={{
                  background: "rgba(36, 61, 42, 0.5)",
                  border: "1px solid rgba(168, 201, 127, 0.3)",
                  borderRadius: "12px",
                  padding: "4rem 2rem",
                }}
              >
                <span className="text-5xl font-fraunces text-leaf">✓</span>
                <h3 className="font-fraunces text-cream text-2xl">
                  Message envoyé&nbsp;!
                </h3>
                <p className="text-sage text-sm max-w-xs">
                  Merci pour votre message. Nous vous répondrons dans les 24h
                  pour fixer votre visite gratuite.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Nom complet *" id="nom">
                    <input
                      id="nom"
                      name="nom"
                      type="text"
                      required
                      placeholder="Marie Dupont"
                      value={form.nom}
                      onChange={handleChange}
                      style={inputBase}
                      onFocus={e =>
                        (e.currentTarget.style.borderColor = "rgba(168,201,127,0.6)")
                      }
                      onBlur={e =>
                        (e.currentTarget.style.borderColor = "rgba(58,82,64,0.8)")
                      }
                    />
                  </Field>

                  <Field label="Téléphone" id="telephone">
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      placeholder="06 00 00 00 00"
                      value={form.telephone}
                      onChange={handleChange}
                      style={inputBase}
                      onFocus={e =>
                        (e.currentTarget.style.borderColor = "rgba(168,201,127,0.6)")
                      }
                      onBlur={e =>
                        (e.currentTarget.style.borderColor = "rgba(58,82,64,0.8)")
                      }
                    />
                  </Field>
                </div>

                <Field label="Adresse e-mail *" id="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="marie@exemple.fr"
                    value={form.email}
                    onChange={handleChange}
                    style={inputBase}
                    onFocus={e =>
                      (e.currentTarget.style.borderColor = "rgba(168,201,127,0.6)")
                    }
                    onBlur={e =>
                      (e.currentTarget.style.borderColor = "rgba(58,82,64,0.8)")
                    }
                  />
                </Field>

                <Field label="Type de service" id="service">
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    style={{ ...inputBase, appearance: "none" as const }}
                    onFocus={e =>
                      (e.currentTarget.style.borderColor = "rgba(168,201,127,0.6)")
                    }
                    onBlur={e =>
                      (e.currentTarget.style.borderColor = "rgba(58,82,64,0.8)")
                    }
                  >
                    <option value="">Sélectionner un service…</option>
                    <option value="creation">Création de jardin</option>
                    <option value="entretien">Entretien & maintenance</option>
                    <option value="elagage">Élagage & taille</option>
                    <option value="terrasses">Terrasses & allées</option>
                    <option value="arrosage">Arrosage automatique</option>
                    <option value="eclairage">Éclairage extérieur</option>
                    <option value="autre">Autre / je ne sais pas encore</option>
                  </select>
                </Field>

                <Field label="Votre message *" id="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Décrivez votre projet en quelques mots (surface, type de jardin, délai souhaité…)"
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputBase, resize: "none" }}
                    onFocus={e =>
                      (e.currentTarget.style.borderColor = "rgba(168,201,127,0.6)")
                    }
                    onBlur={e =>
                      (e.currentTarget.style.borderColor = "rgba(58,82,64,0.8)")
                    }
                  />
                </Field>

                <p className="text-sage/80 text-xs">
                  * Champs obligatoires. Vos données ne seront jamais cédées à des
                  tiers.
                </p>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-3 py-4 px-8 bg-cream text-forest text-sm font-semibold hover:bg-leaf hover:text-forest transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-leaf w-full sm:w-auto"
                  style={{ borderRadius: "8px" }}
                >
                  {status === "sending" ? (
                    <>
                      <span className="animate-spin text-forest">⟳</span>
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      Envoyer ma demande
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
