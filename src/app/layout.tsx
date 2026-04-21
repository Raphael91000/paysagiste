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
  title: "Horizon Paysage — Élagage à Bussang",
  description:
    "Élagage, taille et entretien d'arbres à Bussang (88540). Horizon Paysage intervient du lundi au vendredi de 8h à 18h. Devis gratuit.",
  keywords: [
    "élagage",
    "taille arbres",
    "arboriste",
    "entretien jardin",
    "Bussang",
    "88540",
  ],
  authors: [{ name: "Horizon Paysage" }],
  openGraph: {
    title: "Horizon Paysage — Élagage à Bussang",
    description:
      "Élagage et taille d'arbres à Bussang (88540). Du lundi au vendredi de 8h à 18h.",
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
