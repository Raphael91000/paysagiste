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
  title: "Jardins & Co — Paysagiste à [Ville]",
  description:
    "Création, entretien et aménagement de jardins d'exception. Paysagiste artisanal à [Ville] depuis 2008. Devis gratuit.",
  keywords: [
    "paysagiste",
    "jardins",
    "création jardin",
    "entretien jardin",
    "aménagement extérieur",
    "[Ville]",
  ],
  authors: [{ name: "Jardins & Co" }],
  openGraph: {
    title: "Jardins & Co — Paysagiste à [Ville]",
    description:
      "Création, entretien et aménagement de jardins d'exception à [Ville].",
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
