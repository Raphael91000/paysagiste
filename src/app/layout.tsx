import type { Metadata } from "next";
import { Fraunces, Inter, Caveat } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MTC Elagueur — Élagage à Sotteville-lès-Rouen",
  description:
    "Élagage, taille et entretien d'arbres à Sotteville-lès-Rouen (76300). MTC Elagueur intervient du lundi au vendredi de 8h à 21h. Devis gratuit.",
  keywords: [
    "élagage",
    "taille arbres",
    "arboriste",
    "entretien jardin",
    "Sotteville-lès-Rouen",
    "76300",
  ],
  authors: [{ name: "MTC Elagueur" }],
  openGraph: {
    title: "MTC Elagueur — Élagage à Sotteville-lès-Rouen",
    description:
      "Élagage et taille d'arbres à Sotteville-lès-Rouen (76300). Du lundi au vendredi de 8h à 21h.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${inter.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-gold focus:text-forest focus:text-sm focus:font-semibold focus:rounded focus:outline-none"
        >
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
