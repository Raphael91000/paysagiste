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
  title: "Cribos Elagage — Élagage à Carnetin",
  description:
    "Élagage, taille et entretien d'arbres à Carnetin (77400). Cribos Elagage intervient du lundi au dimanche de 8h à 22h. Devis gratuit.",
  keywords: [
    "élagage",
    "taille arbres",
    "arboriste",
    "entretien jardin",
    "Carnetin",
    "77400",
  ],
  authors: [{ name: "Cribos Elagage" }],
  openGraph: {
    title: "Cribos Elagage — Élagage à Carnetin",
    description:
      "Élagage et taille d'arbres à Carnetin (77400). Du lundi au dimanche de 8h à 22h.",
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
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
